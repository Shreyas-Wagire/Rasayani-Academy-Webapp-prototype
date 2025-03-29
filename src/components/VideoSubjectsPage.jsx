import React from 'react';
import { Link, useParams } from 'react-router-dom';

const subjects = [
  {
    title: 'Chemistry',
    description: 'Comprehensive video lectures covering all chemistry topics',
    icon: '🧪',
    path: '/video-library/subjects/chemistry'
  },
  {
    title: 'Physics',
    description: 'Detailed video lectures covering all physics concepts',
    icon: '⚡',
    path: '/video-library/subjects/physics'
  },
  {
    title: 'Biology',
    description: 'In-depth video lectures covering all biology topics',
    icon: '🧬',
    path: '/video-library/subjects/biology'
  },
  {
    title: 'Mathematics',
    description: 'Comprehensive video lectures covering all mathematical concepts',
    icon: '📐',
    path: '/video-library/subjects/maths'
  }
];

const VideoSubjectsPage = () => {
  const { standard } = useParams();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {standard === '11th-board' && '11th Standard (Board)'}
            {standard === '12th-board' && '12th Standard (Board)'}
            {standard === '11th-neet-jee' && '11th Standard (NEET/JEE)'}
            {standard === '12th-neet-jee' && '12th Standard (NEET/JEE)'}
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Select a subject to access video lectures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subjects.map((subject, index) => (
            <Link
              key={index}
              to={`${subject.path}/${standard}`}
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

export default VideoSubjectsPage; 