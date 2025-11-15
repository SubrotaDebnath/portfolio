import type {INotificationService} from '../../domain/interfaces/INotificationService';
import type {NotificationData} from '../../domain/types';

export class NotificationService implements INotificationService {
  private readonly setNotification: (notification: NotificationData | null) => void;

  constructor(setNotification: (notification: NotificationData | null) => void) {
    this.setNotification = setNotification;
  }

  showSuccess(message: string): void {
    this.setNotification({message, type: 'success'});
  }

  showError(message: string): void {
    this.setNotification({message, type: 'error'});
  }
}
