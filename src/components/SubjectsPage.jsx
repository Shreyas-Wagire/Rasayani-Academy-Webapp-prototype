import React from 'react';
import { Link, useParams } from 'react-router-dom';

const subjects = {
  '11th': [
    {
      title: 'Chemistry',
      description: 'Comprehensive audio lectures covering all chemistry topics',
      icon: '🧪',
      path: '/subjects/chemistry/11th/chapters'
    },
    {
      title: 'Physics',
      description: 'Detailed audio lectures covering all physics concepts',
      icon: '⚡',
      path: '/subjects/physics/11th/chapters'
    },
    {
      title: 'Biology',
      description: 'In-depth audio lectures covering all biology topics',
      icon: '🧬',
      path: '/subjects/biology/11th/chapters'
    },
    {
      title: 'Mathematics',
      description: 'Comprehensive audio lectures covering all mathematical concepts',
      icon: '📐',
      path: '/subjects/maths/11th/chapters'
    }
  ],
  '12th': [
    {
      title: 'Chemistry',
      description: 'Comprehensive audio lectures covering all chemistry topics',
      icon: '🧪',
      path: '/subjects/chemistry/12th/chapters'
    },
    {
      title: 'Physics',
      description: 'Detailed audio lectures covering all physics concepts',
      icon: '⚡',
      path: '/subjects/physics/12th/chapters'
    },
    {
      title: 'Biology',
      description: 'In-depth audio lectures covering all biology topics',
      icon: '🧬',
      path: '/subjects/biology/12th/chapters'
    },
    {
      title: 'Mathematics',
      description: 'Comprehensive audio lectures covering all mathematical concepts',
      icon: '📐',
      path: '/subjects/maths/12th/chapters'
    }
  ],
  '9th': [
    {
      title: 'Science',
      description: 'Comprehensive audio lectures covering Physics, Chemistry, and Biology',
      icon: '🔬',
      path: '/subjects/science/9th/chapters'
    },
    {
      title: 'Mathematics',
      description: 'Detailed audio lectures covering all mathematical concepts',
      icon: '📐',
      path: '/subjects/maths/9th/chapters'
    }
  ],
  '10th': [
    {
      title: 'Science',
      description: 'Comprehensive audio lectures covering Physics, Chemistry, and Biology',
      icon: '🔬',
      path: '/subjects/science/10th/chapters'
    },
    {
      title: 'Mathematics',
      description: 'Detailed audio lectures covering all mathematical concepts',
      icon: '📐',
      path: '/subjects/maths/10th/chapters'
    }
  ]
};

const SubjectsPage = () => {
  const { standard } = useParams();
  const standardSubjects = subjects[standard] || [];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {standard} Standard Subjects
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Select a subject to access audio lectures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standardSubjects.map((subject, index) => (
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

export default SubjectsPage; 