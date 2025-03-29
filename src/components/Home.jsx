import React from 'react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: 'Audio Library Programme (Maharashtra Board)',
    description: 'Comprehensive audio lectures for 11th and 12th standard Maharashtra Board students',
    icon: '🎧',
    path: '/audio-library'
  },
  {
    title: 'Video Library Programme (Maharashtra Board)',
    description: 'Video lectures for 9th and 10th standard Maharashtra Board students',
    icon: '🎥',
    path: '/video-library'
  },
  {
    title: 'NCERT/CBSE Board Video Library Programme',
    description: 'Video lectures for 9th and 10th standard NCERT/CBSE students',
    icon: '📚',
    path: '/ncert-video-library'
  },
  {
    title: 'MHT-CET PYQ',
    description: 'Previous Year Questions for MHT-CET preparation',
    icon: '📝',
    path: '/mht-cet-pyq'
  },
  {
    title: 'NEET & JEE PYQ',
    description: 'Previous Year Questions for NEET and JEE preparation',
    icon: '🎯',
    path: '/neet-jee-pyq'
  },
  {
    title: 'CSIR-UGC NET/SET in Chemical Science',
    description: 'Comprehensive study material for CSIR-UGC NET/SET Chemical Science',
    icon: '🔬',
    path: '/csir-net-set'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Rasayani Academy
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Your comprehensive platform for educational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link
              key={index}
              to={program.path}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {program.title}
                </h2>
                <p className="text-gray-600">
                  {program.description}
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

export default Home; 