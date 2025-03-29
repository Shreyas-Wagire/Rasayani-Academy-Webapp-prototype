import React from 'react';
import { Link, useParams } from 'react-router-dom';

const standards = [
  {
    title: '11th Standard',
    description: 'Previous Year Questions for 11th standard MHT-CET preparation',
    icon: '📚',
    path: '/mht-cet-pyq/11th'
  },
  {
    title: '12th Standard',
    description: 'Previous Year Questions for 12th standard MHT-CET preparation',
    icon: '📚',
    path: '/mht-cet-pyq/12th'
  }
];

const subjects = {
  '11th': [
    {
      title: 'Chemistry',
      description: 'Previous Year Questions for Chemistry',
      icon: '🧪',
      path: '/mht-cet-pyq/subjects/chemistry'
    },
    {
      title: 'Physics',
      description: 'Previous Year Questions for Physics',
      icon: '⚡',
      path: '/mht-cet-pyq/subjects/physics'
    },
    {
      title: 'Biology',
      description: 'Previous Year Questions for Biology',
      icon: '🧬',
      path: '/mht-cet-pyq/subjects/biology'
    },
    {
      title: 'Mathematics',
      description: 'Previous Year Questions for Mathematics',
      icon: '📐',
      path: '/mht-cet-pyq/subjects/maths'
    }
  ],
  '12th': [
    {
      title: 'Chemistry',
      description: 'Previous Year Questions for Chemistry',
      icon: '🧪',
      path: '/mht-cet-pyq/subjects/chemistry'
    },
    {
      title: 'Physics',
      description: 'Previous Year Questions for Physics',
      icon: '⚡',
      path: '/mht-cet-pyq/subjects/physics'
    },
    {
      title: 'Biology',
      description: 'Previous Year Questions for Biology',
      icon: '🧬',
      path: '/mht-cet-pyq/subjects/biology'
    },
    {
      title: 'Mathematics',
      description: 'Previous Year Questions for Mathematics',
      icon: '📐',
      path: '/mht-cet-pyq/subjects/maths'
    }
  ]
};

const MHTCEPYQ = () => {
  const { standard } = useParams();
  const standardSubjects = subjects[standard] || [];
  
  if (standard) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {standard} Standard MHT-CET PYQ
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Select a subject to access previous year questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standardSubjects.map((subject, index) => (
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
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            MHT-CET Previous Year Questions
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Select your standard to access previous year questions
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

export default MHTCEPYQ; 