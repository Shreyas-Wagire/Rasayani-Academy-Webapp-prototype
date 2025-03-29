import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { maharashtraBoardChapters } from './MaharashtraBoardChapters.js';

const tabs = [
  { id: 'lectures', label: 'Lectures' },
  { id: 'notes', label: 'Notes' },
  { id: 'dpp', label: 'DPP' },
  { id: 'dpp-pdf', label: 'DPP PDF' },
  { id: 'dpp-videos', label: 'DPP VIDEOS' }
];

const ChapterView = ({ program }) => {
  const { subject, standard, chapterId } = useParams();
  const [activeTab, setActiveTab] = useState('lectures');

  // Example content for each tab
  const content = {
    lectures: [
      { id: '01', title: `${subject} Lecture 01`, description: 'Introduction and Basic Concepts' },
      { id: '02', title: `${subject} Lecture 02`, description: 'Advanced Topics' },
      { id: '03', title: `${subject} Lecture 03`, description: 'Problem Solving' }
    ],
    notes: [
      { id: '01', title: `${subject} Notes 01`, description: 'Detailed notes with diagrams' },
      { id: '02', title: `${subject} Notes 02`, description: 'Important formulas and concepts' }
    ],
    dpp: [
      { id: '01', title: `${subject} DPP 01`, description: 'Daily Practice Problems Set 1' },
      { id: '02', title: `${subject} DPP 02`, description: 'Daily Practice Problems Set 2' }
    ],
    'dpp-pdf': [
      { id: '01', title: `${subject} DPP PDF 01`, description: 'Downloadable PDF for offline practice' },
      { id: '02', title: `${subject} DPP PDF 02`, description: 'Additional practice problems' }
    ],
    'dpp-videos': [
      { id: '01', title: `${subject} Solution Video 01`, description: 'Video solutions for DPP Set 1' },
      { id: '02', title: `${subject} Solution Video 02`, description: 'Video solutions for DPP Set 2' }
    ]
  };

  const chapters = maharashtraBoardChapters[subject] || [];
  const currentChapter = chapters.find(ch => ch.id === chapterId) || { title: 'Chapter Not Found' };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Chapter Title */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900">
              Chapter {chapterId}: {currentChapter.title}
            </h1>
            <p className="mt-2 text-gray-600">
              {currentChapter.description}
            </p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    py-4 px-8 font-medium text-sm focus:outline-none
                    ${activeTab === tab.id
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 gap-4">
              {content[activeTab].map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      {activeTab === 'lectures' && (
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                          {program === 'audio' ? 'Listen' : 'Watch'}
                        </button>
                      )}
                      {(activeTab === 'notes' || activeTab === 'dpp-pdf') && (
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                          Download
                        </button>
                      )}
                      {activeTab === 'dpp' && (
                        <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                          Solve
                        </button>
                      )}
                      {activeTab === 'dpp-videos' && (
                        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                          Watch Solution
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterView; 