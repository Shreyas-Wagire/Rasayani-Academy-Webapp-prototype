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
          Back to Subjects
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

  const renderSubjects = () => (
    <Section>
      <div className="flex items-center space-x-4 mb-8">
        <BackButton onClick={() => setSelectedStandard(null)}>
          Back to Standards
        </BackButton>
        <h2 className="text-2xl font-bold text-gray-900">
          {selectedStandard.title} Subjects
        </h2>
      </div>

      <CardGrid columns={{ default: 1, md: 2, lg: 4 }}>
        {Object.entries(subjects).map(([id, subject]) => (
          <Card
            key={id}
            title={subject.title}
            description="View previous year papers"
            icon={subject.icon}
            color={subject.color}
            onClick={() => setSelectedSubject(id)}
          />
        ))}
      </CardGrid>
    </Section>
  );

  const renderStandardSelection = () => (
    <>
      <PageHeader
        title="MHT-CET Previous Year Questions"
        description="Select your standard to access previous year question papers"
      />

      <CardGrid columns={{ default: 1, md: 2 }} className="max-w-4xl mx-auto">
        {standards.map((standard) => (
          <Card
            key={standard.id}
            title={standard.title}
            description={standard.description}
            icon={standard.icon}
            onClick={() => setSelectedStandard(standard)}
            size="large"
          />
        ))}
      </CardGrid>
    </>
  );

  return (
    <PageContainer>
      {!selectedStandard && renderStandardSelection()}
      {selectedStandard && !selectedSubject && renderSubjects()}
      {selectedStandard && selectedSubject && renderPapers()}
    </PageContainer>
  );
};

export default MHTCEPYQ; 