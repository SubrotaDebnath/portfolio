import React from 'react';
import type {ButtonProps} from '../../domain/types';

export const Button: React.FC<ButtonProps> = ({
                                                variant = 'primary',
                                                children,
                                                onClick,
                                                type = 'button',
                                                className = '',
                                                ...props
                                              }) => {
  const baseClasses = 'btn';
  const variantClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

