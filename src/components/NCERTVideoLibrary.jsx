import React, { useState } from 'react';
import { PageContainer, PageHeader } from './shared/Layout';
import { GiMicroscope, GiAtom, GiDna1, GiBookshelf } from 'react-icons/gi';
import { IoFlaskOutline } from 'react-icons/io5';
import { IoMdCalculator } from 'react-icons/io';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoArrowBack } from 'react-icons/io5';

const chapters = {
  physics: [
    {
      id: '01',
      title: 'Electric Charges and Fields',
      lectures: [
        { id: 1, title: 'Electric Charges and Fields - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Electric Charges and Fields - Part 2', duration: '45 minutes' },
        { id: 3, title: 'Electric Charges and Fields - Part 3', duration: '45 minutes' }
      ]
    },
    {
      id: '02',
      title: 'Electrostatic Potential and Capacitance',
      lectures: [
        { id: 1, title: 'Electrostatic Potential - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Electrostatic Potential - Part 2', duration: '45 minutes' }
      ]
    }
  ],
  chemistry: [
    {
      id: '01',
      title: 'The Solid State',
      lectures: [
        { id: 1, title: 'The Solid State - Part 1', duration: '45 minutes' },
        { id: 2, title: 'The Solid State - Part 2', duration: '45 minutes' }
      ]
    },
    {
      id: '02',
      title: 'Solutions',
      lectures: [
        { id: 1, title: 'Solutions - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Solutions - Part 2', duration: '45 minutes' }
      ]
    }
  ],
  mathematics: [
    {
      id: '01',
      title: 'Relations and Functions',
      lectures: [
        { id: 1, title: 'Relations and Functions - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Relations and Functions - Part 2', duration: '45 minutes' }
      ]
    },
    {
      id: '02',
      title: 'Inverse Trigonometric Functions',
      lectures: [
        { id: 1, title: 'Inverse Trigonometric Functions - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Inverse Trigonometric Functions - Part 2', duration: '45 minutes' }
      ]
    }
  ],
  biology: [
    {
      id: '01',
      title: 'Reproduction in Organisms',
      lectures: [
        { id: 1, title: 'Reproduction in Organisms - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Reproduction in Organisms - Part 2', duration: '45 minutes' }
      ]
    },
    {
      id: '02',
      title: 'Sexual Reproduction in Flowering Plants',
      lectures: [
        { id: 1, title: 'Sexual Reproduction in Plants - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Sexual Reproduction in Plants - Part 2', duration: '45 minutes' }
      ]
    }
  ],
  "9-maths": [
    {
      id: '01',
      title: 'Number Systems',
      lectures: [
        { id: 1, title: 'Number Systems - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Number Systems - Part 2', duration: '45 minutes' }
      ]
    },
    {
      id: '02',
      title: 'Polynomials',
      lectures: [
        { id: 1, title: 'Polynomials - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Polynomials - Part 2', duration: '45 minutes' }
      ]
    }
  ],
  "9-science": [
    {
      id: '01',
      title: 'Matter in Our Surroundings',
      lectures: [
        { id: 1, title: 'Matter in Our Surroundings - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Matter in Our Surroundings - Part 2', duration: '45 minutes' }
      ]
    },
    {
      id: '02',
      title: 'Is Matter Around Us Pure',
      lectures: [
        { id: 1, title: 'Is Matter Around Us Pure - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Is Matter Around Us Pure - Part 2', duration: '45 minutes' }
      ]
    }
  ],
  "10-maths": [
    {
      id: '01',
      title: 'Real Numbers',
      lectures: [
        { id: 1, title: 'Real Numbers - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Real Numbers - Part 2', duration: '45 minutes' }
      ]
    },
    {
      id: '02',
      title: 'Polynomials',
      lectures: [
        { id: 1, title: 'Polynomials - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Polynomials - Part 2', duration: '45 minutes' }
      ]
    }
  ],
  "10-science": [
    {
      id: '01',
      title: 'Chemical Reactions and Equations',
      lectures: [
        { id: 1, title: 'Chemical Reactions - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Chemical Reactions - Part 2', duration: '45 minutes' }
      ]
    },
    {
      id: '02',
      title: 'Life Processes',
      lectures: [
        { id: 1, title: 'Life Processes - Part 1', duration: '45 minutes' },
        { id: 2, title: 'Life Processes - Part 2', duration: '45 minutes' }
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
  const subjects = standard.includes('11th') || standard.includes('12th') 
    ? ['Physics', 'Chemistry', 'Maths', 'Bio']
    : ['Maths', 'Science'];

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
            standard={standard.toLowerCase().replace(/\s+/g, '-')}
            onClick={(subject) => {
              const subjectKey = standard.includes('9th') || standard.includes('10th')
                ? `${standard.split('th')[0]}-${subject.toLowerCase()}`
                : subject.toLowerCase();
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
  const [activeTab, setActiveTab] = useState('Lectures');
  const tabs = ['Lectures', 'Notes', 'DPP', 'DPP PDF', 'DPP VIDEOS'];

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

      {activeTab === 'Lectures' && (
        <div className="space-y-4">
          {chapter.lectures.map((lecture) => (
            <div
              key={lecture.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <HiOutlineVideoCamera className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{lecture.title}</h3>
                  <p className="text-sm text-gray-500">Duration: {lecture.duration}</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Watch Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const NCERTVideoLibrary = () => {
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const standards = [
    {
      title: '9th Standard',
      description: 'Video lectures for 9th standard NCERT',
      icon: GiBookshelf
    },
    {
      title: '10th Standard',
      description: 'Video lectures for 10th standard NCERT',
      icon: GiMicroscope
    },
    {
      title: '11th Standard',
      description: 'Video lectures for 11th standard NCERT',
      icon: GiAtom
    },
    {
      title: '12th Standard',
      description: 'Video lectures for 12th standard NCERT',
      icon: GiDna1
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
            title="NCERT Video Lectures"
            description="Access comprehensive video lectures based on NCERT curriculum"
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

export default NCERTVideoLibrary; 