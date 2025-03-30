import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import ChapterList from './ChapterList';

const subjects = [
  {
    title: 'Organic Chemistry',
    description: 'Study organic compounds, their structures, properties, and reactions',
    icon: '⚗️',
    path: '/csir-net-set/organic-chemistry',
    chapters: 15
  },
  {
    title: 'Inorganic Chemistry',
    description: 'Study elements, minerals, and non-carbon-based compounds',
    icon: '🧪',
    path: '/csir-net-set/inorganic-chemistry',
    chapters: 12
  },
  {
    title: 'Physical Chemistry',
    description: 'Study the physical principles underlying chemical phenomena',
    icon: '⚡',
    path: '/csir-net-set/physical-chemistry',
    chapters: 10
  }
];

const SubjectSelection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CSIR-UGC NET/SET Chemistry
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Select a branch to access comprehensive study material
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <Link
              key={index}
              to={subject.path}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="text-5xl mb-6">{subject.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {subject.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {subject.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">{subject.chapters} Chapters</span>
                </div>
                <div className="mt-4 inline-flex items-center text-blue-600 group-hover:text-blue-700">
                  <span className="font-medium">Start Learning</span>
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const CSIRNETSET = () => {
  return (
    <Routes>
      <Route index element={<SubjectSelection />} />
      <Route path=":subject/*" element={<ChapterList />} />
    </Routes>
  );
};

export default CSIRNETSET; 