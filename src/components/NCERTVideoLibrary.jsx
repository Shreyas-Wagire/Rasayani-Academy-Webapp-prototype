import React from 'react';
import { Link } from 'react-router-dom';

const standards = [
  {
    title: '9th Standard',
    description: 'Video lectures for 9th standard NCERT/CBSE students',
    icon: '📚',
    path: '/ncert-video-library/9th'
  },
  {
    title: '10th Standard',
    description: 'Video lectures for 10th standard NCERT/CBSE students',
    icon: '📚',
    path: '/ncert-video-library/10th'
  },
  {
    title: '11th Standard',
    description: 'Video lectures for 11th standard NCERT/CBSE students',
    icon: '📚',
    path: '/ncert-video-library/11th'
  },
  {
    title: '12th Standard',
    description: 'Video lectures for 12th standard NCERT/CBSE students',
    icon: '📚',
    path: '/ncert-video-library/12th'
  }
];

const NCERTVideoLibrary = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            NCERT/CBSE Board Video Library Programme
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Select your standard to access video lectures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standards.map((standard, index) => (
            <Link
              key={index}
              to={standard.path}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {standard.title}
                </h2>
                <p className="text-gray-600">
                  {standard.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NCERTVideoLibrary; 