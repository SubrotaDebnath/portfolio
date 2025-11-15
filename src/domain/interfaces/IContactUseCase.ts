import type {ContactFormData, SubmissionResult} from '../types';

export interface IContactUseCase {
  submitMessage(messageData: ContactFormData): Promise<SubmissionResult>;
}
