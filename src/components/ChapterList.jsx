import React from 'react';
import { Link, useParams } from 'react-router-dom';

const chapters = {
  chemistry: [
    {
      id: '01',
      title: 'Physical Chemistry',
      description: 'Basic concepts of physical chemistry including thermodynamics, kinetics, and quantum mechanics'
    },
    {
      id: '02',
      title: 'Inorganic Chemistry',
      description: 'Study of inorganic compounds, their properties, and reactions'
    },
    {
      id: '03',
      title: 'Organic Chemistry',
      description: 'Structure, properties, and reactions of organic compounds'
    },
    {
      id: '04',
      title: 'Analytical Chemistry',
      description: 'Methods and techniques for chemical analysis'
    }
  ],
  physics: [
    {
      id: '01',
      title: 'Classical Mechanics',
      description: 'Newtonian mechanics, Lagrangian and Hamiltonian formulations'
    },
    {
      id: '02',
      title: 'Quantum Mechanics',
      description: 'Wave-particle duality, Schrödinger equation, and quantum states'
    },
    {
      id: '03',
      title: 'Electromagnetism',
      description: 'Electric and magnetic fields, Maxwell\'s equations'
    },
    {
      id: '04',
      title: 'Thermodynamics',
      description: 'Laws of thermodynamics, statistical mechanics'
    }
  ],
  biology: [
    {
      id: '01',
      title: 'Cell Biology',
      description: 'Structure and function of cells, cell division, and cell signaling'
    },
    {
      id: '02',
      title: 'Molecular Biology',
      description: 'DNA structure, replication, transcription, and translation'
    },
    {
      id: '03',
      title: 'Genetics',
      description: 'Mendelian genetics, molecular genetics, and population genetics'
    },
    {
      id: '04',
      title: 'Evolution',
      description: 'Natural selection, speciation, and evolutionary processes'
    }
  ],
  mathematics: [
    {
      id: '01',
      title: 'Linear Algebra',
      description: 'Vector spaces, matrices, determinants, and linear transformations'
    },
    {
      id: '02',
      title: 'Calculus',
      description: 'Differential and integral calculus, multivariable calculus'
    },
    {
      id: '03',
      title: 'Complex Analysis',
      description: 'Complex numbers, functions, and integration'
    },
    {
      id: '04',
      title: 'Abstract Algebra',
      description: 'Groups, rings, fields, and their properties'
    }
  ]
};

const ChapterList = () => {
  const { subject } = useParams();
  const subjectChapters = chapters[subject.toLowerCase()] || [];
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {subject.charAt(0).toUpperCase() + subject.slice(1)} Chapters
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Select a chapter to view study materials and practice questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectChapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/csir-net-set/${subject}/chapter/${chapter.id}`}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">Chapter {chapter.id}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {chapter.title}
                </h2>
                <p className="text-gray-600">
                  {chapter.description}
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

export default ChapterList; 