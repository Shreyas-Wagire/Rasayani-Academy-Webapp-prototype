import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      title: 'Physical World',
      lectures: [
        { id: 1, title: 'Physical World - Lecture 1', duration: '45 minutes' },
        { id: 2, title: 'Physical World - Lecture 2', duration: '45 minutes' },
        { id: 3, title: 'Physical World - Lecture 3', duration: '45 minutes' },
        { id: 4, title: 'Physical World - Lecture 4', duration: '45 minutes' }
      ]
    },
    {
      id: '02',
      title: 'Units and Measurements',
      lectures: [
        { id: 1, title: 'Units and Measurements - Lecture 1', duration: '45 minutes' },
        { id: 2, title: 'Units and Measurements - Lecture 2', duration: '45 minutes' }
      ]
    }
  ],
  chemistry: [
    {
      id: '01',
      title: 'Basic Concepts of Chemistry',
      lectures: [
        { id: 1, title: 'Basic Concepts - Lecture 1', duration: '45 minutes' },
        { id: 2, title: 'Basic Concepts - Lecture 2', duration: '45 minutes' }
      ]
    }
  ],
  maths: [
    {
      id: '01',
      title: 'Sets and Functions',
      lectures: [
        { id: 1, title: 'Sets - Lecture 1', duration: '45 minutes' },
        { id: 2, title: 'Sets - Lecture 2', duration: '45 minutes' }
      ]
    }
  ],
  bio: [
    {
      id: '01',
      title: 'The Living World',
      lectures: [
        { id: 1, title: 'Living World - Lecture 1', duration: '45 minutes' },
        { id: 2, title: 'Living World - Lecture 2', duration: '45 minutes' }
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
            onClick={(subject) => onSubjectClick(standard, subject)}
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

const VideoLibraryProgram = () => {
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const standards = [
    {
      title: '11th Standard',
      description: 'Video lectures for 11th standard Maharashtra Board',
      icon: GiMicroscope
    },
    {
      title: '12th Standard',
      description: 'Video lectures for 12th standard Maharashtra Board',
      icon: GiAtom
    },
    {
      title: '11th NEET/JEE',
      description: 'Video lectures for 11th standard NEET & JEE preparation',
      icon: GiDna1
    },
    {
      title: '12th NEET/JEE',
      description: 'Video lectures for 12th standard NEET & JEE preparation',
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
            title="Select your standard to access video lectures"
            description="Access comprehensive video lectures for Maharashtra Board and NEET/JEE"
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

export default VideoLibraryProgram; 