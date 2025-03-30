import React from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'default',
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
    link: 'text-blue-600 hover:text-blue-700 underline',
    tab: 'text-blue-600 bg-blue-50 hover:bg-blue-100'
  };

  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    default: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center rounded-md
        font-medium transition-colors duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};

export const BackButton = ({ onClick, children = 'Back', ...props }) => (
  <Button
    onClick={onClick}
    variant="ghost"
    icon={<ArrowLeft className="w-5 h-5" />}
    iconPosition="left"
    {...props}
  >
    {children}
  </Button>
);

export const TabButton = ({ children, isActive, ...props }) => (
  <Button
    variant={isActive ? 'primary' : 'tab'}
    {...props}
  >
    {children}
  </Button>
); 