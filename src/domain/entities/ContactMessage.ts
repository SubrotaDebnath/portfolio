import {type ValidationResult} from '../types.ts';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export class ContactMessage {
  public readonly name: string;
  public readonly email: string;
  public readonly message: string;

  constructor(name: string, email: string, message: string) {
    this.name = name;
    this.email = email;
    this.message = message;
  }

  static fromData(data: ContactFormData): ContactMessage {
    return new ContactMessage(data.name, data.email, data.message);
  }

  validate(): ValidationResult {
    const errors: string[] = [];

    if (!this.name?.trim()) errors.push('Name is required');
    if (!this.email?.trim()) errors.push('Email is required');
    if (!this.message?.trim()) errors.push('Message is required');
    if (this.email && !this.isValidEmail()) errors.push('Invalid email format');

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  private isValidEmail(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }
}
