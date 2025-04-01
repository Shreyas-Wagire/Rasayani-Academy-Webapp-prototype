import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer, PageHeader, Section } from './shared/Layout';
import { Card, CardGrid } from './shared/Card';
import { BackButton } from './shared/Button';
import { GiMicroscope, GiAtom } from 'react-icons/gi';
import { FaFlask, FaCalculator } from 'react-icons/fa';
import { IoFlaskOutline } from 'react-icons/io5';
import { AiFillExperiment } from 'react-icons/ai';
import { IoMdCalculator } from 'react-icons/io';
import { GiDna1 } from 'react-icons/gi';

const standards = [
  {
    id: '11',
    title: '11th Standard',
    description: 'Previous Year Questions for 11th standard NEET & JEE preparation',
    icon: '📘'
  },
  {
    id: '12',
    title: '12th Standard',
    description: 'Previous Year Questions for 12th standard NEET & JEE preparation',
    icon: '⚛️'
  }
];

const subjects = {
  physics: {
    title: 'Physics',
    icon: '⚡',
    color: 'blue',
    papers: [
      { id: 1, title: 'NEET 2023 Physics Paper', date: 'May 2023', exam: 'NEET' },
      { id: 2, title: 'JEE Main 2023 Physics Paper', date: 'April 2023', exam: 'JEE' },
      { id: 3, title: 'JEE Advanced 2023 Physics Paper', date: 'June 2023', exam: 'JEE Advanced' },
      { id: 4, title: 'NEET 2022 Physics Paper', date: 'July 2022', exam: 'NEET' },
      { id: 5, title: 'JEE Main 2022 Physics Paper', date: 'July 2022', exam: 'JEE' }
    ]
  },
  chemistry: {
    title: 'Chemistry',
    icon: '⚗️',
    color: 'green',
    papers: [
      { id: 1, title: 'NEET 2023 Chemistry Paper', date: 'May 2023', exam: 'NEET' },
      { id: 2, title: 'JEE Main 2023 Chemistry Paper', date: 'April 2023', exam: 'JEE' },
      { id: 3, title: 'JEE Advanced 2023 Chemistry Paper', date: 'June 2023', exam: 'JEE Advanced' },
      { id: 4, title: 'NEET 2022 Chemistry Paper', date: 'July 2022', exam: 'NEET' },
      { id: 5, title: 'JEE Main 2022 Chemistry Paper', date: 'July 2022', exam: 'JEE' }
    ]
  },
  mathematics: {
    title: 'Maths',
    icon: '📐',
    color: 'purple',
    papers: [
      { id: 1, title: 'JEE Main 2023 Mathematics Paper', date: 'April 2023', exam: 'JEE' },
      { id: 2, title: 'JEE Advanced 2023 Mathematics Paper', date: 'June 2023', exam: 'JEE Advanced' },
      { id: 3, title: 'JEE Main 2022 Mathematics Paper', date: 'July 2022', exam: 'JEE' },
      { id: 4, title: 'JEE Advanced 2022 Mathematics Paper', date: 'August 2022', exam: 'JEE Advanced' }
    ]
  },
  biology: {
    title: 'Bio',
    icon: '🧬',
    color: 'red',
    papers: [
      { id: 1, title: 'NEET 2023 Biology Paper', date: 'May 2023', exam: 'NEET' },
      { id: 2, title: 'NEET 2022 Biology Paper', date: 'July 2022', exam: 'NEET' },
      { id: 3, title: 'NEET 2021 Biology Paper', date: 'September 2021', exam: 'NEET' }
    ]
  }
};

const NEETJEEPYQ = () => {
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const renderPapers = () => (
    <Section>
      <div className="flex items-center space-x-4 mb-8">
        <BackButton onClick={() => setSelectedSubject(null)}>
          Back to Standards
        </BackButton>
        <h2 className="text-2xl font-bold text-gray-900">
          {selectedStandard.title} - {subjects[selectedSubject].title} Papers
        </h2>
      </div>

      <div className="space-y-8">
        {['NEET', 'JEE', 'JEE Advanced'].map(examType => {
          const examPapers = subjects[selectedSubject].papers.filter(
            paper => paper.exam === examType
          );

          if (examPapers.length === 0) return null;

          return (
            <div key={examType} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">{examType} Papers</h3>
              <CardGrid columns={{ default: 1, md: 2 }}>
                {examPapers.map((paper) => (
                  <Card
                    key={paper.id}
                    title={paper.title}
                    description={paper.date}
                    icon="📄"
                    size="small"
                    color={subjects[selectedSubject].color}
                    onClick={() => {}}
                  />
                ))}
              </CardGrid>
            </div>
          );
        })}
      </div>
    </Section>
  );

  const SubjectButton = ({ subject, subjectKey, standardId }) => (
    <button
      onClick={() => {
        setSelectedStandard(standards.find(s => s.id === standardId));
        setSelectedSubject(subjectKey);
      }}
      className="flex items-center justify-start w-full space-x-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
    >
      <span className="text-2xl" role="img" aria-label={subject.title}>
        {subject.icon}
      </span>
      <span className="font-medium">{subject.title}</span>
    </button>
  );

  const renderStandardSelection = () => (
    <>
      <PageHeader
        title="NEET & JEE Previous Year Questions"
        description="Access comprehensive NEET & JEE previous year papers with detailed solutions"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {standards.map((standard) => (
          <div key={standard.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl" role="img" aria-label={standard.title}>
                {standard.icon}
              </span>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{standard.title}</h3>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(subjects).map(([subjectKey, subject]) => (
                <SubjectButton
                  key={subjectKey}
                  subject={subject}
                  subjectKey={subjectKey}
                  standardId={standard.id}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <PageContainer>
      {!selectedSubject && renderStandardSelection()}
      {selectedSubject && renderPapers()}
    </PageContainer>
  );
};

export default NEETJEEPYQ; 