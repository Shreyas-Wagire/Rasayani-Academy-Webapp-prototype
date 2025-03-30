import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Card, CardGrid } from './shared/Card';
import { Button, BackButton, TabButton } from './shared/Button';
import { PageContainer, PageHeader, Section } from './shared/Layout';

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

const VideoLibrary = () => {
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [activeTab, setActiveTab] = useState('Lectures');

  const renderChapterContent = () => (
    <Section>
      <div className="flex items-center space-x-4 mb-8">
        <BackButton onClick={() => setSelectedChapter(null)}>
          Back to Chapters
        </BackButton>
        <h2 className="text-2xl font-bold text-gray-900">
          {selectedChapter.title}
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex space-x-4 mb-6">
          {['Lectures', 'Notes', 'DPP', 'DPP PDF', 'DPP VIDEOS'].map((tab) => (
            <TabButton
              key={tab}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </div>

        <CardGrid columns={{ default: 1 }}>
          {activeTab === 'Notes' && Array.from({ length: 8 }).map((_, idx) => (
            <Card
              key={idx}
              title={`${selectedChapter.title} - Class Notes ${idx + 1}`}
              description="Arjuna JEE 4.0"
              size="small"
              color="blue"
              onClick={() => {}}
            />
          ))}

          {activeTab === 'Lectures' && Array.from({ length: 4 }).map((_, idx) => (
            <Card
              key={idx}
              title={`${selectedChapter.title} - Lecture ${idx + 1}`}
              description="Duration: 45 minutes"
              icon="📚"
              size="small"
              color="blue"
              onClick={() => {}}
            />
          ))}
        </CardGrid>
      </div>
    </Section>
  );

  const renderChapters = () => (
    <Section>
      <div className="flex items-center space-x-4 mb-8">
        <BackButton onClick={() => setSelectedSubject(null)}>
          Back to Subjects
        </BackButton>
        <h2 className="text-2xl font-bold text-gray-900">
          {subjects[selectedSubject].title} Chapters
        </h2>
      </div>

      <CardGrid columns={{ default: 1, md: 2 }}>
        {subjects[selectedSubject].chapters.map((chapter) => (
          <Card
            key={chapter.id}
            title={chapter.title}
            onClick={() => setSelectedChapter(chapter)}
            color="blue"
          />
        ))}
      </CardGrid>
    </Section>
  );

  const renderSubjects = () => (
    <Section>
      <div className="flex items-center space-x-4 mb-8">
        <BackButton onClick={() => setSelectedBoard(null)}>
          Back to Boards
        </BackButton>
        <h2 className="text-2xl font-bold text-gray-900">
          {boards.find(b => b.id === selectedBoard).title} Subjects
        </h2>
      </div>

      <CardGrid columns={{ default: 1, md: 2, lg: 4 }}>
        {Object.entries(subjects).map(([id, subject]) => (
          <Card
            key={id}
            title={subject.title}
            description="View all chapters"
            icon={subject.icon}
            color={id === 'physics' ? 'blue' : id === 'chemistry' ? 'purple' : id === 'biology' ? 'green' : 'red'}
            onClick={() => setSelectedSubject(id)}
          />
        ))}
      </CardGrid>
    </Section>
  );

  const renderBoardSelection = () => (
    <>
      <PageHeader
        title="Video Library Programme (Maharashtra Board)"
        description="Select your board to access video lectures and study materials"
      />

      <CardGrid columns={{ default: 1, md: 2 }} className="max-w-6xl mx-auto">
        {boards.map((board) => (
          <Card
            key={board.id}
            title={board.title}
            description={board.description}
            icon={board.icon}
            onClick={() => setSelectedBoard(board.id)}
            size="large"
          />
        ))}
      </CardGrid>
    </>
  );

  return (
    <PageContainer>
      {!selectedBoard && renderBoardSelection()}
      {selectedBoard && !selectedSubject && renderSubjects()}
      {selectedBoard && selectedSubject && !selectedChapter && renderChapters()}
      {selectedBoard && selectedSubject && selectedChapter && renderChapterContent()}
    </PageContainer>
  );
};

export default VideoLibrary; 