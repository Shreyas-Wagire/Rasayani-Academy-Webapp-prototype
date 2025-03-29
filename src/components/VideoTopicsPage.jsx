import React from 'react';
import { Link, useParams } from 'react-router-dom';

const topics = {
  science: {
    1: [
      { id: 1, title: 'Physical Nature of Matter', description: 'Understanding the physical properties of matter' },
      { id: 2, title: 'Characteristics of Particles', description: 'Properties of matter particles' },
      { id: 3, title: 'States of Matter', description: 'Solid, liquid, and gaseous states' },
      { id: 4, title: 'Change of State', description: 'Processes of state change' },
      { id: 5, title: 'Evaporation', description: 'Process and factors affecting evaporation' }
    ],
    2: [
      { id: 1, title: 'What is a Mixture?', description: 'Types and properties of mixtures' },
      { id: 2, title: 'Solution', description: 'Properties and types of solutions' },
      { id: 3, title: 'Concentration of Solution', description: 'Methods of expressing concentration' },
      { id: 4, title: 'Suspension and Colloid', description: 'Types of heterogeneous mixtures' },
      { id: 5, title: 'Separation of Components', description: 'Methods of separation' }
    ],
    // Add more chapters as needed
  },
  maths: {
    1: [
      { id: 1, title: 'Introduction to Number Systems', description: 'Basic concepts of numbers' },
      { id: 2, title: 'Irrational Numbers', description: 'Properties and examples' },
      { id: 3, title: 'Real Numbers', description: 'Properties and operations' },
      { id: 4, title: 'Representation on Number Line', description: 'Visual representation' },
      { id: 5, title: 'Operations on Real Numbers', description: 'Basic arithmetic operations' }
    ],
    2: [
      { id: 1, title: 'Polynomials in One Variable', description: 'Basic concepts' },
      { id: 2, title: 'Zeroes of a Polynomial', description: 'Finding zeroes' },
      { id: 3, title: 'Remainder Theorem', description: 'Applications and examples' },
      { id: 4, title: 'Factorisation of Polynomials', description: 'Methods of factorisation' },
      { id: 5, title: 'Algebraic Identities', description: 'Common algebraic identities' }
    ],
    // Add more chapters as needed
  }
};

const VideoTopicsPage = () => {
  const { subject, standard, chapterId } = useParams();
  const chapterTopics = topics[subject]?.[chapterId] || [];
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chapter {chapterId} Topics
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Select a topic to view its video lecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapterTopics.map((topic) => (
            <Link
              key={topic.id}
              to={`/video-library/subjects/${subject}/${standard}/chapters/${chapterId}/topics/${topic.id}`}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">Topic {topic.id}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {topic.title}
                </h2>
                <p className="text-gray-600">
                  {topic.description}
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

export default VideoTopicsPage; 