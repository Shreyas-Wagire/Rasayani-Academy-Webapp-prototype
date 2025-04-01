import React, { useState } from 'react';
import { Card, CardGrid } from './shared/Card';
import { BackButton } from './shared/Button';
import { PageContainer, PageHeader, Section } from './shared/Layout';

const standards = [
  {
    id: '11',
    title: '11th Standard',
    description: 'Previous Year Questions for 11th standard MHT-CET',
    icon: '📚'
  },
  {
    id: '12',
    title: '12th Standard',
    description: 'Previous Year Questions for 12th standard MHT-CET',
    icon: '🎓'
  }
];

const subjects = {
  physics: {
    title: 'Physics',
    icon: '⚡',
    color: 'blue',
    papers: [
      { id: 1, title: 'MHT-CET 2023 Physics Paper', date: 'May 2023' },
      { id: 2, title: 'MHT-CET 2022 Physics Paper', date: 'May 2022' },
      { id: 3, title: 'MHT-CET 2021 Physics Paper', date: 'May 2021' }
    ]
  },
  chemistry: {
    title: 'Chemistry',
    icon: '⚗️',
    color: 'purple',
    papers: [
      { id: 1, title: 'MHT-CET 2023 Chemistry Paper', date: 'May 2023' },
      { id: 2, title: 'MHT-CET 2022 Chemistry Paper', date: 'May 2022' },
      { id: 3, title: 'MHT-CET 2021 Chemistry Paper', date: 'May 2021' }
    ]
  },
  biology: {
    title: 'Biology',
    icon: '🧬',
    color: 'green',
    papers: [
      { id: 1, title: 'MHT-CET 2023 Biology Paper', date: 'May 2023' },
      { id: 2, title: 'MHT-CET 2022 Biology Paper', date: 'May 2022' },
      { id: 3, title: 'MHT-CET 2021 Biology Paper', date: 'May 2021' }
    ]
  },
  mathematics: {
    title: 'Mathematics',
    icon: '📐',
    color: 'red',
    papers: [
      { id: 1, title: 'MHT-CET 2023 Mathematics Paper', date: 'May 2023' },
      { id: 2, title: 'MHT-CET 2022 Mathematics Paper', date: 'May 2022' },
      { id: 3, title: 'MHT-CET 2021 Mathematics Paper', date: 'May 2021' }
    ]
  }
};

const MHTCEPYQ = () => {
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

      <CardGrid columns={{ default: 1, md: 2 }}>
        {subjects[selectedSubject].papers.map((paper) => (
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
    </Section>
  );

  const SubjectButton = ({ subject, subjectKey, standardId }) => (
    <button
      onClick={() => {
        setSelectedStandard(standards.find(s => s.id === standardId));
        setSelectedSubject(subjectKey);
      }}
      className={`flex items-center space-x-2 p-3 rounded-lg hover:bg-${subject.color}-50 transition-colors`}
    >
      <span className="text-xl">{subject.icon}</span>
      <span className="font-medium">{subject.title}</span>
    </button>
  );

  const renderStandardSelection = () => (
    <>
      <PageHeader
        title="MHT-CET Previous Year Questions"
        description="Select your standard to access previous year question papers"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {standards.map((standard) => (
          <div key={standard.id} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">{standard.icon}</span>
              <div>
                <h3 className="text-xl font-bold">{standard.title}</h3>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
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

export default MHTCEPYQ; 