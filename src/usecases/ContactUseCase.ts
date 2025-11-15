import type { IContactUseCase } from "../domain/interfaces/IContactUseCase";
import type { INotificationService } from "../domain/interfaces/INotificationService";
import { ContactMessage } from "../domain/entities/ContactMessage";
import type { ContactFormData, SubmissionResult } from "../domain/types";

export class ContactUseCase implements IContactUseCase {
  private readonly notificationService: INotificationService;

  constructor(notificationService: INotificationService) {
    this.notificationService = notificationService;
  }

  async submitMessage(messageData: ContactFormData): Promise<SubmissionResult> {
    try {
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

      // Simulate API call
      await this.simulateApiCall();

      this.notificationService.showSuccess(
        "Thanks for your message! I'll get back to you soon."
      );
      return { success: true };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      this.notificationService.showError(
        "Failed to send message. Please try again."
      );
      return { success: false, error: errorMessage };
    }
  }

  private async simulateApiCall(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
