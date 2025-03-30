import React from 'react';

export const PageHeader = ({ title, description }) => (
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">
      {title}
    </h1>
    {description && (
      <p className="text-xl text-gray-600">
        {description}
      </p>
    )}
  </div>
);

export const PageContainer = ({ children, className = '' }) => (
  <div className={`min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </div>
);

export const Section = ({ 
  title, 
  description, 
  children, 
  className = '',
  headerClassName = '' 
}) => (
  <div className={`space-y-6 ${className}`}>
    {(title || description) && (
      <div className={`flex items-center space-x-4 ${headerClassName}`}>
        {title && (
          <h2 className="text-2xl font-bold text-gray-900">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-gray-600">
            {description}
          </p>
        )}
      </div>
    )}
    {children}
  </div>
); 