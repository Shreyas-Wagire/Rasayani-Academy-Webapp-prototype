import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FileText, Download, BookOpen, Play } from 'lucide-react';

// Mock data for chapters and their content
const csirChapters = {
  'organic-chemistry': [
    {
      id: 1,
      title: 'Ch 01: Chemical Bonding',
      lectures: [
        {
          id: 1,
          title: "Chemical Bonding 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          type: "Lecture"
        },
        {
          id: 2,
          title: "Chemical Bonding 02: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "5 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [
        {
          id: 1,
          title: "Chemical Bonding Notes Part 1",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          downloadUrl: "#"
        }
      ],
      dpp: [
        {
          id: 1,
          title: "Chemical Bonding DPP 1",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          downloadUrl: "#"
        }
      ],
      dppPdf: [
        {
          id: 1,
          title: "Chemical Bonding DPP PDF 1",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          downloadUrl: "#"
        }
      ],
      dppVideos: [
        {
          id: 1,
          title: "Chemical Bonding DPP Video Solution 1",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          videoUrl: "#"
        }
      ]
    },
    {
      id: 2,
      title: 'Ch 02: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    }
  ],
  'inorganic-chemistry': [
    {
      id: 1,
      title: 'Ch 01: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [
        {
          id: 1,
          title: "Atomic Structure Notes Part 1",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          downloadUrl: "#"
        }
      ],
      dpp: [
        {
          id: 1,
          title: "Atomic Structure DPP 1",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          downloadUrl: "#"
        }
      ],
      dppPdf: [
        {
          id: 1,
          title: "Atomic Structure DPP PDF 1",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          downloadUrl: "#"
        }
      ],
      dppVideos: [
        {
          id: 1,
          title: "Atomic Structure DPP Video Solution 1",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          videoUrl: "#"
        }
      ]
    },
    {
      id: 2,
      title: 'Ch 02: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    },
    {
      id: 3,
      title: 'Ch 03: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    },
    {
      id: 4,
      title: 'Ch 04: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    },
    {
      id: 5,
      title: 'Ch 05: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    },
    {
      id: 6,
      title: 'Ch 06: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    },
    {
      id: 7,
      title: 'Ch 07: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    },
    {
      id: 8,
      title: 'Ch 08: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    }
  ],
  'physical-chemistry': [
    {
      id: 1,
      title: 'Ch 01: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [
        {
          id: 1,
          title: "Atomic Structure Notes Part 1",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          downloadUrl: "#"
        }
      ],
      dpp: [
        {
          id: 1,
          title: "Atomic Structure DPP 1",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          downloadUrl: "#"
        }
      ],
      dppPdf: [
        {
          id: 1,
          title: "Atomic Structure DPP PDF 1",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          downloadUrl: "#"
        }
      ],
      dppVideos: [
        {
          id: 1,
          title: "Atomic Structure DPP Video Solution 1",
          instructor: "Dr. Arjuna JEE",
          date: "4 December, 2023",
          videoUrl: "#"
        }
      ]
    },
    {
      id: 2,
      title: 'Ch 02: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    },
    {
      id: 3,
      title: 'Ch 03: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    },
    {
      id: 4,
      title: 'Ch 04: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    },
    {
      id: 5,
      title: 'Ch 05: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    },
    {
      id: 6,
      title: 'Ch 06: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    },
    {
      id: 7,
      title: 'Ch 07: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    },
    {
      id: 8,
      title: 'Ch 08: Atomic Structure',
      lectures: [
        {
          id: 1,
          title: "Atomic Structure 01: Class Notes",
          instructor: "Dr. Arjuna JEE",
          date: "6 December, 2023",
          type: "Lecture"
        }
      ],
      notes: [],
      dpp: [],
      dppPdf: [],
      dppVideos: []
    }
  ]
};

const ChapterList = () => {
  const { subject } = useParams();
  const chapters = csirChapters[subject] || [];
  const [selectedChapter, setSelectedChapter] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState('Lectures');

  const renderResourceCard = (resource, type) => {
    const icon = type === 'Lectures' ? <Play className="w-5 h-5" /> :
                type === 'Notes' ? <BookOpen className="w-5 h-5" /> :
                <FileText className="w-5 h-5" />;

    return (
      <div key={resource.id} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{resource.title}</h3>
            <p className="text-sm text-gray-500">{resource.instructor}</p>
            <p className="text-xs text-gray-400 mt-1">{resource.date}</p>
          </div>
          <div className="text-gray-400">
            {icon}
          </div>
        </div>
        <div className="flex justify-end">
          <button className="flex items-center px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100">
            <Download className="w-4 h-4 mr-1" />
            Download
          </button>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (!selectedChapter) {
      return (
        <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => setSelectedChapter(chapter)}
              className="text-left bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow w-full"
            >
              <h3 className="font-medium text-gray-900">{chapter.title}</h3>
            </button>
          ))}
        </div>
      );
    }

    let resources = [];
    switch (activeTab) {
      case 'Lectures':
        resources = selectedChapter.lectures;
        break;
      case 'Notes':
        resources = selectedChapter.notes;
        break;
      case 'DPP':
        resources = selectedChapter.dpp;
        break;
      case 'DPP PDF':
        resources = selectedChapter.dppPdf;
        break;
      case 'DPP VIDEOS':
        resources = selectedChapter.dppVideos;
        break;
      default:
        resources = [];
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setSelectedChapter(null)}
            className="text-blue-600 hover:text-blue-700"
          >
            ← Back to Chapters
          </button>
          <h2 className="text-xl font-medium text-gray-900">{selectedChapter.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map(resource => renderResourceCard(resource, activeTab))}
        </div>
        {resources.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No {activeTab.toLowerCase()} available for this chapter yet.
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {subject.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </h1>
        </div>

        {/* Tabs - Always visible */}
        <div className="flex space-x-4 border-b">
          {['Lectures', 'Notes', 'DPP', 'DPP PDF', 'DPP VIDEOS'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ChapterList; 