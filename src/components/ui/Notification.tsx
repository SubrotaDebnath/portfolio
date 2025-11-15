import React, {useEffect} from 'react';
import type {NotificationProps} from '../../domain/types';

const Notification: React.FC<NotificationProps> = ({message, type, onClose}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification notification-${type}`}>
      {message}
    </div>
  );
};

export default Notification;
