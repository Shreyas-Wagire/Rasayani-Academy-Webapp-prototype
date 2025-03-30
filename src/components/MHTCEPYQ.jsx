import React, { useState } from 'react';
import { BookOpen, Download, ChevronRight, ArrowLeft } from 'lucide-react';

const subjects = [
  {
    id: 'physics',
    title: 'Physics',
    icon: '⚡',
    color: 'bg-blue-50 text-blue-600',
    borderColor: 'border-blue-200',
    papers: [
      {
        id: 1,
        title: "MHT-CET 2023 Physics Paper",
        date: "May 2023",
        downloadUrl: "#"
      },
      {
        id: 2,
        title: "MHT-CET 2022 Physics Paper",
        date: "May 2022",
        downloadUrl: "#"
      }
    ]
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    icon: '⚗️',
    color: 'bg-purple-50 text-purple-600',
    borderColor: 'border-purple-200',
    papers: [
      {
        id: 1,
        title: "MHT-CET 2023 Chemistry Paper",
        date: "May 2023",
        downloadUrl: "#"
      },
      {
        id: 2,
        title: "MHT-CET 2022 Chemistry Paper",
        date: "May 2022",
        downloadUrl: "#"
      }
    ]
  },
  {
    id: 'biology',
    title: 'Biology',
    icon: '🧬',
    color: 'bg-green-50 text-green-600',
    borderColor: 'border-green-200',
    papers: [
      {
        id: 1,
        title: "MHT-CET 2023 Biology Paper",
        date: "May 2023",
        downloadUrl: "#"
      }
    ]
  },
  {
    id: 'mathematics',
    title: 'Mathematics',
    icon: '📐',
    color: 'bg-red-50 text-red-600',
    borderColor: 'border-red-200',
    papers: [
      {
        id: 1,
        title: "MHT-CET 2023 Mathematics Paper",
        date: "May 2023",
        downloadUrl: "#"
      }
    ]
  }
];

const MHTCEPYQ = () => {
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const renderPaperCard = (paper) => (
    <div key={paper.id} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{paper.title}</h3>
          <p className="text-sm text-gray-500">{paper.date}</p>
        </div>
        <div className="text-gray-400">
          <BookOpen className="w-5 h-5" />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="flex items-center px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100">
          <Download className="w-4 h-4 mr-1" />
          Download PDF
        </button>
      </div>
    </div>
  );

  const renderSubjects = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={() => setSelectedStandard(null)}
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          Back to Standards
        </button>
        <h2 className="text-2xl font-bold text-gray-900">
          {selectedStandard}th Standard Papers
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => setSelectedSubject(subject)}
            className={`p-6 rounded-xl border ${subject.borderColor} text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className="text-4xl mb-3">{subject.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{subject.title}</h3>
            <p className="text-sm text-gray-500 mt-2">Previous Year Papers</p>
            <div className={`mt-4 inline-flex items-center justify-center px-4 py-2 rounded-full ${subject.color}`}>
              View Papers
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderPapers = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setSelectedSubject(null)}
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          Back to Subjects
        </button>
        <h2 className="text-xl font-medium text-gray-900">
          {selectedStandard}th Standard - {selectedSubject.title} Papers
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {selectedSubject.papers.map(paper => renderPaperCard(paper))}
      </div>
    </div>
  );

  const renderStandardSelection = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          MHT-CET Previous Year Papers
        </h1>
        <p className="text-xl text-gray-600">
          Select your standard to access previous year question papers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[11, 12].map((standard) => (
          <button
            key={standard}
            onClick={() => setSelectedStandard(standard)}
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-8">
              <div className="text-4xl mb-4">
                {standard === 11 ? '📚' : '🎓'}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {standard}th Standard
              </h2>
              <p className="text-gray-600 mb-6">
                Access previous year question papers and study materials for {standard}th standard MHT-CET preparation
              </p>
              <div className="inline-flex items-center text-blue-600 group-hover:text-blue-700">
                <span className="font-medium">Browse Papers</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {!selectedStandard && renderStandardSelection()}
        {selectedStandard && !selectedSubject && renderSubjects()}
        {selectedStandard && selectedSubject && renderPapers()}
      </div>
    </div>
  );
};

export default MHTCEPYQ; 