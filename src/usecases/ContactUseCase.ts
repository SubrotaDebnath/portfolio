import emailjs from '@emailjs/browser';
import type { IContactUseCase } from "../domain/interfaces/IContactUseCase";
import type { INotificationService } from "../domain/interfaces/INotificationService";
import { ContactMessage } from "../domain/entities/ContactMessage";
import type { ContactFormData, SubmissionResult } from "../domain/types";

// EmailJS Configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export class ContactUseCase implements IContactUseCase {
  private readonly notificationService: INotificationService;

  constructor(notificationService: INotificationService) {
    this.notificationService = notificationService;
  }

  async submitMessage(messageData: ContactFormData): Promise<SubmissionResult> {
    try {
      // Validate EmailJS configuration
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        const missingVars = [];
        if (!EMAILJS_SERVICE_ID) missingVars.push('SERVICE_ID');
        if (!EMAILJS_TEMPLATE_ID) missingVars.push('TEMPLATE_ID');
        if (!EMAILJS_PUBLIC_KEY) missingVars.push('PUBLIC_KEY');

        const errorMsg = `EmailJS configuration missing: ${missingVars.join(', ')}`;
        console.error(errorMsg);
        this.notificationService.showError(
          "Email service is not configured. Please contact the site administrator."
        );
        return { success: false, error: errorMsg };
      }

      const message = new ContactMessage(
        messageData.name,
        messageData.email,
        messageData.message
      );

      const validation = message.validate();
      if (!validation.isValid) {
        this.notificationService.showError(validation.errors[0]);
        return { success: false, errors: validation.errors };
      }

      // Send email using EmailJS
      await this.sendEmail(messageData);

      this.notificationService.showSuccess(
        "Thanks for your message! I'll get back to you soon."
      );
      return { success: true };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.error('ContactUseCase error:', error);
      this.notificationService.showError(
        `Failed to send message: ${errorMessage}`
      );
      return { success: false, error: errorMessage };
    }
  }

  private async sendEmail(formData: ContactFormData): Promise<void> {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
  }
}
