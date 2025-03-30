import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardGrid } from './shared/Card';
import { Button } from './shared/Button';
import { PageContainer, Section } from './shared/Layout';

const programs = {
  board: {
    title: 'Board Specific Programs',
    items: [
      {
        title: 'Audio Library Programme',
        description: 'Comprehensive audio lectures for 11th and 12th standard Maharashtra Board students',
        icon: '🎧',
        path: '/audio-library',
        color: 'blue'
      },
      {
        title: 'Video Library Programme',
        description: 'Video lectures for 9th and 10th standard Maharashtra Board students',
        icon: '🎥',
        path: '/video-library',
        color: 'purple'
      },
      {
        title: 'NCERT/CBSE Video Library',
        description: 'Video lectures for 9th and 10th standard NCERT/CBSE students',
        icon: '📚',
        path: '/ncert-video-library',
        color: 'green'
      }
    ]
  },
  competitive: {
    title: 'Competitive Exam Preparation',
    items: [
      {
        title: 'MHT-CET Previous Year Questions',
        description: 'Comprehensive collection of MHT-CET previous year papers with detailed solutions',
        icon: '📝',
        path: '/mht-cet-pyq',
        color: 'blue'
      },
      {
        title: 'NEET & JEE Previous Year Questions',
        description: 'Practice with previous year papers from NEET and JEE examinations',
        icon: '🎯',
        path: '/neet-jee-pyq',
        color: 'purple'
      },
      {
        title: 'CSIR-UGC NET/SET',
        description: 'Expert-curated study material for CSIR-UGC NET/SET in Chemical Science',
        icon: '🔬',
        path: '/csir-net-set',
        color: 'green'
      }
    ]
  }
};

const features = [
  {
    title: 'Expert Faculty',
    description: 'Learn from experienced educators with proven track records',
    icon: '👨‍🏫',
    color: 'blue'
  },
  {
    title: 'Structured Learning',
    description: 'Well-organized content following board-approved curriculum',
    icon: '📊',
    color: 'purple'
  },
  {
    title: 'Practice Resources',
    description: 'Extensive collection of practice questions and mock tests',
    icon: '✍️',
    color: 'green'
  },
  {
    title: 'Regular Updates',
    description: 'Stay current with the latest exam patterns and syllabus changes',
    icon: '🔄',
    color: 'red'
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      {/* Hero Section */}
      <div className="text-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Rasayani Academy
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Your gateway to academic excellence. We provide comprehensive study materials, 
          video lectures, and practice resources for board exams and competitive preparations.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            variant="primary"
            size="large"
            onClick={() => navigate('/video-library')}
          >
            Start Learning
          </Button>
          <Button
            variant="outline"
            size="large"
            onClick={() => navigate('/about')}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Programs Sections */}
      {Object.entries(programs).map(([key, category]) => (
        <Section
          key={key}
          title={category.title}
          className="mb-12"
        >
          <CardGrid columns={{ default: 1, md: 2, lg: 3 }}>
            {category.items.map((program) => (
              <Card
                key={program.path}
                title={program.title}
                description={program.description}
                icon={program.icon}
                color={program.color}
                onClick={() => navigate(program.path)}
              />
            ))}
          </CardGrid>
        </Section>
      ))}

      {/* Features Section */}
      <Section
        title="Why Choose Rasayani Academy?"
        description="Discover the features that make us the preferred choice for students"
        className="mb-12"
      >
        <CardGrid columns={{ default: 1, md: 2, lg: 4 }}>
          {features.map((feature) => (
            <Card
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              size="small"
              showArrow={false}
            />
          ))}
        </CardGrid>
      </Section>

      {/* Call to Action */}
      <div className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 rounded-2xl">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of students who have achieved their academic goals with Rasayani Academy.
        </p>
        <Button
          variant="primary"
          size="large"
          onClick={() => navigate('/register')}
        >
          Get Started Today
        </Button>
      </div>
    </PageContainer>
  );
};

export default Home; 