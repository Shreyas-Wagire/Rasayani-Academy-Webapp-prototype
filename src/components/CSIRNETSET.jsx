import React from 'react';
import { Link } from 'react-router-dom';

const subjects = [
  {
    title: 'Organic Chemistry',
    description: 'Comprehensive study material for Organic Chemistry in CSIR-UGC NET/SET',
    icon: '⚗️',
    path: '/csir-net-set/organic-chemistry'
  },
  {
    title: 'Inorganic Chemistry',
    description: 'Comprehensive study material for Inorganic Chemistry in CSIR-UGC NET/SET',
    icon: '🧪',
    path: '/csir-net-set/inorganic-chemistry'
  },
  {
    title: 'Physical Chemistry',
    description: 'Comprehensive study material for Physical Chemistry in CSIR-UGC NET/SET',
    icon: '⚡',
    path: '/csir-net-set/physical-chemistry'
  }
];

const CSIRNETSET = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CSIR-UGC NET/SET in Chemical Science
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Select a subject to access comprehensive study material
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <Link
              key={index}
              to={subject.path}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{subject.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {subject.title}
                </h2>
                <p className="text-gray-600">
                  {subject.description}
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

export default CSIRNETSET; 