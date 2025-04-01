import React, { useState } from 'react';
import { PageContainer, PageHeader } from './shared/Layout';
import { GiMicroscope, GiAtom, GiDna1, GiBookshelf } from 'react-icons/gi';
import { IoFlaskOutline } from 'react-icons/io5';
import { IoMdCalculator } from 'react-icons/io';
import { HiSpeakerWave } from 'react-icons/hi2';
import { IoArrowBack } from 'react-icons/io5';

const chapters = {
  // 11th Standard Board
  "11-board-physics": [
    {
      id: '01',
      title: 'Electric Charges and Fields',
      audioLectures: [
        { id: 1, title: 'Electric Charges and Fields - Part 1', duration: '30 minutes' },
        { id: 2, title: 'Electric Charges and Fields - Part 2', duration: '25 minutes' },
        { id: 3, title: 'Practice Problems and Solutions', duration: '20 minutes' }
      ]
    },
    {
      id: '02',
      title: 'Electrostatic Potential and Capacitance',
      audioLectures: [
        { id: 1, title: 'Electrostatic Potential - Part 1', duration: '30 minutes' },
        { id: 2, title: 'Capacitance Concepts', duration: '25 minutes' }
      ]
    }
  ],
  "11-board-chemistry": [
    {
      id: '01',
      title: 'The Solid State',
      audioLectures: [
        { id: 1, title: 'Crystal Structures', duration: '30 minutes' },
        { id: 2, title: 'Unit Cell Concepts', duration: '25 minutes' }
      ]
    },
    {
      id: '02',
      title: 'Solutions',
      audioLectures: [
        { id: 1, title: 'Types of Solutions', duration: '30 minutes' },
        { id: 2, title: 'Concentration Terms', duration: '25 minutes' }
      ]
    }
  ],
  "11-board-mathematics": [
    {
      id: '01',
      title: 'Relations and Functions',
      audioLectures: [
        { id: 1, title: 'Types of Relations', duration: '30 minutes' },
        { id: 2, title: 'Function Concepts', duration: '25 minutes' }
      ]
    },
    {
      id: '02',
      title: 'Inverse Trigonometric Functions',
      audioLectures: [
        { id: 1, title: 'Basic Concepts', duration: '30 minutes' },
        { id: 2, title: 'Properties and Examples', duration: '25 minutes' }
      ]
    }
  ],
  "11-board-biology": [
    {
      id: '01',
      title: 'Reproduction in Organisms',
      audioLectures: [
        { id: 1, title: 'Types of Reproduction', duration: '30 minutes' },
        { id: 2, title: 'Reproductive Patterns', duration: '25 minutes' }
      ]
    },
    {
      id: '02',
      title: 'Sexual Reproduction in Plants',
      audioLectures: [
        { id: 1, title: 'Flower Structure', duration: '30 minutes' },
        { id: 2, title: 'Pollination Types', duration: '25 minutes' }
      ]
    }
  ],
  // 12th Standard Board
  "12-board-physics": [
    {
      id: '01',
      title: 'Electromagnetic Waves',
      audioLectures: [
        { id: 1, title: 'EM Wave Properties', duration: '30 minutes' },
        { id: 2, title: 'EM Wave Applications', duration: '25 minutes' }
      ]
    }
  ],
  "12-board-chemistry": [
    {
      id: '01',
      title: 'Electrochemistry',
      audioLectures: [
        { id: 1, title: 'Electrochemical Cells', duration: '30 minutes' },
        { id: 2, title: 'Electrolysis', duration: '25 minutes' }
      ]
    }
  ],
  "12-board-mathematics": [
    {
      id: '01',
      title: 'Matrices',
      audioLectures: [
        { id: 1, title: 'Matrix Operations', duration: '30 minutes' },
        { id: 2, title: 'Matrix Applications', duration: '25 minutes' }
      ]
    }
  ],
  "12-board-biology": [
    {
      id: '01',
      title: 'Genetics',
      audioLectures: [
        { id: 1, title: 'Mendelian Genetics', duration: '30 minutes' },
        { id: 2, title: 'Human Genetics', duration: '25 minutes' }
      ]
    }
  ],
  // 11th NEET/JEE
  "11-neet-physics": [
    {
      id: '01',
      title: 'Kinematics (NEET/JEE)',
      audioLectures: [
        { id: 1, title: 'Motion in One Dimension', duration: '30 minutes' },
        { id: 2, title: 'Motion in Two Dimensions', duration: '25 minutes' },
        { id: 3, title: 'Problem Solving Session', duration: '30 minutes' }
      ]
    }
  ],
  "11-neet-chemistry": [
    {
      id: '01',
      title: 'Atomic Structure (NEET/JEE)',
      audioLectures: [
        { id: 1, title: 'Quantum Numbers', duration: '30 minutes' },
        { id: 2, title: 'Electronic Configuration', duration: '25 minutes' }
      ]
    }
  ],
  "11-neet-mathematics": [
    {
      id: '01',
      title: 'Complex Numbers (JEE)',
      audioLectures: [
        { id: 1, title: 'Complex Number Basics', duration: '30 minutes' },
        { id: 2, title: 'Complex Number Applications', duration: '25 minutes' }
      ]
    }
  ],
  "11-neet-biology": [
    {
      id: '01',
      title: 'Cell Structure (NEET)',
      audioLectures: [
        { id: 1, title: 'Cell Organelles', duration: '30 minutes' },
        { id: 2, title: 'Cell Functions', duration: '25 minutes' }
      ]
    }
  ],
  // 12th NEET/JEE
  "12-neet-physics": [
    {
      id: '01',
      title: 'Electrostatics (NEET/JEE)',
      audioLectures: [
        { id: 1, title: 'Electric Field', duration: '30 minutes' },
        { id: 2, title: 'Gauss Law', duration: '25 minutes' }
      ]
    }
  ],
  "12-neet-chemistry": [
    {
      id: '01',
      title: 'Organic Chemistry (NEET/JEE)',
      audioLectures: [
        { id: 1, title: 'IUPAC Nomenclature', duration: '30 minutes' },
        { id: 2, title: 'Reaction Mechanisms', duration: '25 minutes' }
      ]
    }
  ],
  "12-neet-mathematics": [
    {
      id: '01',
      title: 'Integration (JEE)',
      audioLectures: [
        { id: 1, title: 'Integration Techniques', duration: '30 minutes' },
        { id: 2, title: 'Definite Integration', duration: '25 minutes' }
      ]
    }
  ],
  "12-neet-biology": [
    {
      id: '01',
      title: 'Human Physiology (NEET)',
      audioLectures: [
        { id: 1, title: 'Circulatory System', duration: '30 minutes' },
        { id: 2, title: 'Nervous System', duration: '25 minutes' }
      ]
    }
  ]
};

const SubjectButton = ({ subject, standard, onClick }) => {
  const getIcon = () => {
    switch(subject) {
      case 'Physics':
        return <GiAtom className="w-6 h-6 text-blue-500" />;
      case 'Chemistry':
        return <IoFlaskOutline className="w-6 h-6 text-green-500" />;
      case 'Maths':
        return <IoMdCalculator className="w-6 h-6 text-purple-500" />;
      case 'Bio':
        return <GiDna1 className="w-6 h-6 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={() => onClick(subject.toLowerCase())}
      className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
    >
      <div className="w-8 h-8 mr-3 flex items-center justify-center bg-gray-50 rounded-lg">
        {getIcon()}
      </div>
      <span className="text-gray-900 font-medium">{subject}</span>
    </button>
  );
};

const StandardCard = ({ standard, description, icon: Icon, onSubjectClick }) => {
  const subjects = ['Physics', 'Chemistry', 'Maths', 'Bio'];
  const standardType = standard.toLowerCase().includes('neet') ? 'neet' : 'board';
  const standardNumber = standard.includes('11th') ? '11' : '12';

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl mr-4">
          <Icon className="w-8 h-8 text-blue-500" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{standard}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-3">
        {subjects.map((subject) => (
          <SubjectButton 
            key={subject} 
            subject={subject} 
            standard={standard}
            onClick={(subject) => {
              const subjectKey = `${standardNumber}-${standardType}-${subject.toLowerCase()}`;
              onSubjectClick(standard, subjectKey);
            }}
          />
        ))}
      </div>
    </div>
  );
};

const ChapterList = ({ standard, subject, chapters, onChapterSelect, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mr-4"
        >
          <IoArrowBack className="w-5 h-5 mr-1" />
          Back to Standards
        </button>
        <h2 className="text-2xl font-bold">{standard} - {subject}</h2>
      </div>
      <div className="grid gap-4">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => onChapterSelect(chapter)}
            className="w-full text-left p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
          >
            <h3 className="text-lg font-semibold">Ch {chapter.id}: {chapter.title}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

const ChapterContent = ({ chapter, onBack }) => {
  const [activeTab, setActiveTab] = useState('Audio Lectures');
  const tabs = ['Audio Lectures', 'Notes', 'Practice Questions', 'Transcripts'];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mr-4"
        >
          <IoArrowBack className="w-5 h-5 mr-1" />
          Back to Chapters
        </button>
        <h2 className="text-2xl font-bold">Ch {chapter.id}: {chapter.title}</h2>
      </div>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {activeTab === 'Audio Lectures' && (
        <div className="space-y-4">
          {chapter.audioLectures.map((lecture) => (
            <div
              key={lecture.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <HiSpeakerWave className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{lecture.title}</h3>
                  <p className="text-sm text-gray-500">Duration: {lecture.duration}</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Listen Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const AudioLibraryProgram = () => {
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const standards = [
    {
      title: '11th Standard',
      description: 'Audio lectures for 11th standard Board curriculum',
      icon: GiMicroscope
    },
    {
      title: '12th Standard',
      description: 'Audio lectures for 12th standard Board curriculum',
      icon: GiAtom
    },
    {
      title: '11th NEET/JEE',
      description: 'Audio lectures for 11th standard NEET & JEE preparation',
      icon: GiDna1
    },
    {
      title: '12th NEET/JEE',
      description: 'Audio lectures for 12th standard NEET & JEE preparation',
      icon: GiBookshelf
    }
  ];

  const handleSubjectClick = (standard, subject) => {
    setSelectedStandard(standard);
    setSelectedSubject(subject);
  };

  const handleBack = () => {
    if (selectedChapter) {
      setSelectedChapter(null);
    } else if (selectedSubject) {
      setSelectedSubject(null);
      setSelectedStandard(null);
    }
  };

  return (
    <PageContainer>
      {!selectedSubject && (
        <>
          <PageHeader
            title="Audio Lectures"
            description="Access comprehensive audio lectures for Board and NEET/JEE preparation"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {standards.map((standard) => (
              <StandardCard
                key={standard.title}
                standard={standard.title}
                description={standard.description}
                icon={standard.icon}
                onSubjectClick={handleSubjectClick}
              />
            ))}
          </div>
        </>
      )}

      {selectedSubject && !selectedChapter && (
        <ChapterList
          standard={selectedStandard}
          subject={selectedSubject}
          chapters={chapters[selectedSubject]}
          onChapterSelect={setSelectedChapter}
          onBack={handleBack}
        />
      )}

      {selectedChapter && (
        <ChapterContent
          chapter={selectedChapter}
          onBack={handleBack}
        />
      )}
    </PageContainer>
  );
};

export default AudioLibraryProgram; 