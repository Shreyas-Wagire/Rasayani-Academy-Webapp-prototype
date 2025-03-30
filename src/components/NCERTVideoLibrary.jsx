import React, { useState } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const subjects = {
  physics: {
    title: 'Physics',
    icon: '⚡',
    color: 'bg-blue-50 text-blue-600',
    borderColor: 'border-blue-200',
    chapters: [
      {
        id: 1,
        title: 'Ch 01: Physical World',
      },
      {
        id: 2,
        title: 'Ch 02: Units and Measurements',
      },
      {
        id: 3,
        title: 'Ch 03: Motion in a Straight Line',
      },
      {
        id: 4,
        title: 'Ch 04: Motion in a Plane',
      }
    ]
  },
  chemistry: {
    title: 'Chemistry',
    icon: '⚗️',
    color: 'bg-purple-50 text-purple-600',
    borderColor: 'border-purple-200',
    chapters: [
      {
        id: 1,
        title: 'Ch 01: Some Basic Concepts',
      },
      {
        id: 2,
        title: 'Ch 02: Atomic Structure',
      },
      {
        id: 3,
        title: 'Ch 03: Chemical Bonding',
      },
      {
        id: 4,
        title: 'Ch 04: Periodic Table',
      }
    ]
  },
  biology: {
    title: 'Biology',
    icon: '🧬',
    color: 'bg-green-50 text-green-600',
    borderColor: 'border-green-200',
    chapters: [
      {
        id: 1,
        title: 'Ch 01: The Living World',
      },
      {
        id: 2,
        title: 'Ch 02: Biological Classification',
      },
      {
        id: 3,
        title: 'Ch 03: Plant Kingdom',
      },
      {
        id: 4,
        title: 'Ch 04: Animal Kingdom',
      }
    ]
  },
  mathematics: {
    title: 'Mathematics',
    icon: '📐',
    color: 'bg-red-50 text-red-600',
    borderColor: 'border-red-200',
    chapters: [
      {
        id: 1,
        title: 'Ch 01: Sets',
      },
      {
        id: 2,
        title: 'Ch 02: Relations and Functions',
      },
      {
        id: 3,
        title: 'Ch 03: Trigonometry',
      },
      {
        id: 4,
        title: 'Ch 04: Complex Numbers',
      }
    ]
  }
};

const boards = [
  {
    id: '11',
    title: '11th Standard',
    description: 'Video lectures for 11th standard Maharashtra Board',
    icon: '📚'
  },
  {
    id: '12',
    title: '12th Standard',
    description: 'Video lectures for 12th standard Maharashtra Board',
    icon: '🎓'
  },
  {
    id: '11-neet-jee',
    title: '11th NEET/JEE',
    description: 'Video lectures for 11th standard NEET & JEE preparation',
    icon: '🔬'
  },
  {
    id: '12-neet-jee',
    title: '12th NEET/JEE',
    description: 'Video lectures for 12th standard NEET & JEE preparation',
    icon: '⚛️'
  }
];

const NCERTVideoLibrary = () => {
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [activeTab, setActiveTab] = useState('Lectures');

  const renderChapterContent = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={() => setSelectedChapter(null)}
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          Back to Chapters
        </button>
        <h2 className="text-2xl font-bold text-gray-900">
          {selectedChapter.title}
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex space-x-4 mb-6">
          {['Lectures', 'Notes', 'DPP', 'DPP PDF', 'DPP VIDEOS'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {activeTab === 'Notes' && Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {selectedChapter.title} - Class Notes {idx + 1}
                  </h3>
                  <p className="text-sm text-gray-500">Arjuna JEE 4.0</p>
                </div>
                <button className="flex items-center px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100">
                  <span className="mr-1">Download PDF</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {activeTab === 'Lectures' && Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {selectedChapter.title} - Lecture {idx + 1}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Duration: 45 minutes
                  </p>
                </div>
                <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderChapters = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={() => setSelectedSubject(null)}
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          Back to Subjects
        </button>
        <h2 className="text-2xl font-bold text-gray-900">
          {subjects[selectedSubject].title} Chapters
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects[selectedSubject].chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => setSelectedChapter(chapter)}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-left"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {chapter.title}
            </h3>
            <div className="flex items-center text-blue-600">
              <span className="text-sm font-medium">View Content</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderSubjects = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={() => setSelectedBoard(null)}
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          Back to Boards
        </button>
        <h2 className="text-2xl font-bold text-gray-900">
          {boards.find(b => b.id === selectedBoard).title} Subjects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(subjects).map(([id, subject]) => (
          <button
            key={id}
            onClick={() => setSelectedSubject(id)}
            className={`p-6 rounded-xl border ${subject.borderColor} text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className="text-4xl mb-3">{subject.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{subject.title}</h3>
            <p className="text-sm text-gray-500 mt-2">View all chapters</p>
            <div className={`mt-4 inline-flex items-center justify-center px-4 py-2 rounded-full ${subject.color}`}>
              Browse Chapters
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderBoardSelection = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Video Library Programme
        </h1>
        <p className="text-xl text-gray-600">
          Select your board to access video lectures and study materials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {boards.map((board) => (
          <button
            key={board.id}
            onClick={() => setSelectedBoard(board.id)}
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-8">
              <div className="text-4xl mb-4">{board.icon}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {board.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {board.description}
              </p>
              <div className="inline-flex items-center text-blue-600 group-hover:text-blue-700">
                <span className="font-medium">Browse Content</span>
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
        {!selectedBoard && renderBoardSelection()}
        {selectedBoard && !selectedSubject && renderSubjects()}
        {selectedBoard && selectedSubject && !selectedChapter && renderChapters()}
        {selectedBoard && selectedSubject && selectedChapter && renderChapterContent()}
      </div>
    </div>
  );
};

export default NCERTVideoLibrary; 