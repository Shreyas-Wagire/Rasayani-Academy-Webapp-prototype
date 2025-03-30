import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Card = ({ 
  title, 
  description, 
  icon, 
  onClick, 
  color = 'blue',
  size = 'default',
  showArrow = true,
  className = ''
}) => {
  const colors = {
    blue: 'border-blue-200 hover:border-blue-300 text-blue-600',
    purple: 'border-purple-200 hover:border-purple-300 text-purple-600',
    green: 'border-green-200 hover:border-green-300 text-green-600',
    red: 'border-red-200 hover:border-red-300 text-red-600'
  };

  const sizes = {
    small: 'p-4',
    default: 'p-6',
    large: 'p-8'
  };

  return (
    <button
      onClick={onClick}
      className={`
        w-full bg-white rounded-xl border ${colors[color]}
        ${sizes[size]}
        transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
        text-left
        ${className}
      `}
    >
      {icon && <div className="text-4xl mb-3">{icon}</div>}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {description && (
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      )}
      {showArrow && (
        <div className="mt-4 flex items-center text-current">
          <span className="text-sm font-medium">View Details</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </div>
      )}
    </button>
  );
};

export const CardGrid = ({ 
  children, 
  columns = { default: 1, md: 2, lg: 3 },
  className = '' 
}) => {
  const getColumnsClass = () => {
    const cols = [];
    if (columns.default) cols.push(`grid-cols-${columns.default}`);
    if (columns.sm) cols.push(`sm:grid-cols-${columns.sm}`);
    if (columns.md) cols.push(`md:grid-cols-${columns.md}`);
    if (columns.lg) cols.push(`lg:grid-cols-${columns.lg}`);
    return cols.join(' ');
  };

  return (
    <div className={`grid ${getColumnsClass()} gap-6 ${className}`}>
      {children}
    </div>
  );
}; 