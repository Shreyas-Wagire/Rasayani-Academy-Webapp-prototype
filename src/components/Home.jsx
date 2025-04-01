import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardGrid } from './shared/Card';
import { Button } from './shared/Button';
import { PageContainer, Section } from './shared/Layout';
import { Link } from 'react-router-dom';

const programs = {
  audioLibrary: {
    title: 'Audio Library Programme',
    description: 'Comprehensive audio lectures for board and competitive exam preparation',
    icon: '🎧',
    color: 'blue',
    items: [
      {
        title: '11th Standard',
        description: 'Audio lectures for 11th standard Board curriculum',
        icon: '🔬',
        path: '/audio-library/11th-standard',
        color: 'blue',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/audio-library/11th-standard/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/audio-library/11th-standard/chemistry' },
          { title: 'Maths', icon: '📐', path: '/audio-library/11th-standard/maths' },
          { title: 'Bio', icon: '🧬', path: '/audio-library/11th-standard/bio' }
        ]
      },
      {
        title: '12th Standard',
        description: 'Audio lectures for 12th standard Board curriculum',
        icon: '⚛️',
        path: '/audio-library/12th-standard',
        color: 'blue',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/audio-library/12th-standard/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/audio-library/12th-standard/chemistry' },
          { title: 'Maths', icon: '📐', path: '/audio-library/12th-standard/maths' },
          { title: 'Bio', icon: '🧬', path: '/audio-library/12th-standard/bio' }
        ]
      },
      {
        title: '11th NEET/JEE',
        description: 'Audio lectures for 11th standard NEET & JEE preparation',
        icon: '🧬',
        path: '/audio-library/11th-neet-jee',
        color: 'blue',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/audio-library/11th-neet-jee/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/audio-library/11th-neet-jee/chemistry' },
          { title: 'Maths', icon: '📐', path: '/audio-library/11th-neet-jee/maths' },
          { title: 'Bio', icon: '🧬', path: '/audio-library/11th-neet-jee/bio' }
        ]
      },
      {
        title: '12th NEET/JEE',
        description: 'Audio lectures for 12th standard NEET & JEE preparation',
        icon: '📚',
        path: '/audio-library/12th-neet-jee',
        color: 'blue',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/audio-library/12th-neet-jee/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/audio-library/12th-neet-jee/chemistry' },
          { title: 'Maths', icon: '📐', path: '/audio-library/12th-neet-jee/maths' },
          { title: 'Bio', icon: '🧬', path: '/audio-library/12th-neet-jee/bio' }
        ]
      }
    ]
  },
  videoLibrary: {
    title: 'Video Library Programme',
    description: 'Video lectures for board and competitive exam preparation',
    icon: '🎥',
    color: 'purple',
    items: [
      {
        title: '11th Standard',
        description: 'Video lectures for 11th standard Board curriculum',
        icon: '🔬',
        path: '/video-library/11th-standard',
        color: 'blue',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/video-library/11th-standard/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/video-library/11th-standard/chemistry' },
          { title: 'Maths', icon: '📐', path: '/video-library/11th-standard/maths' },
          { title: 'Bio', icon: '🧬', path: '/video-library/11th-standard/bio' }
        ]
      },
      {
        title: '12th Standard',
        description: 'Video lectures for 12th standard Board curriculum',
        icon: '⚛️',
        path: '/video-library/12th-standard',
        color: 'purple',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/video-library/12th-standard/physics' }, 
          { title: 'Chemistry', icon: '⚗️', path: '/video-library/12th-standard/chemistry' },
          { title: 'Maths', icon: '📐', path: '/video-library/12th-standard/maths' },
          { title: 'Bio', icon: '🧬', path: '/video-library/12th-standard/bio' }
        ]
      },
      {
        title: '11th NEET/JEE',
        description: 'Video lectures for 11th standard NEET & JEE preparation',
        icon: '🧬',
        path: '/video-library/11th-neet-jee',
        color: 'red',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/video-library/11th-neet-jee/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/video-library/11th-neet-jee/chemistry' },
          { title: 'Maths', icon: '📐', path: '/video-library/11th-neet-jee/maths' },
          { title: 'Bio', icon: '🧬', path: '/video-library/11th-neet-jee/bio' }
        ]
      },
      {
        title: '12th NEET/JEE',
        description: 'Video lectures for 12th standard NEET & JEE preparation',
        icon: '📚',
        path: '/video-library/12th-neet-jee',
        color: 'green',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/video-library/12th-neet-jee/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/video-library/12th-neet-jee/chemistry' },
          { title: 'Maths', icon: '📐', path: '/video-library/12th-neet-jee/maths' },
          { title: 'Bio', icon: '🧬', path: '/video-library/12th-neet-jee/bio' }
        ]
      }
    ]
  },
  ncertLibrary: {
    title: 'NCERT/CBSE Video Library',
    description: 'Video lectures for 9th and 10th standard NCERT/CBSE students',
    icon: '📚',
    color: 'green',
    items: [
      {
        title: '9th Standard',
        description: 'Video lectures for 9th standard NCERT/CBSE',
        icon: '📖',
        path: '/ncert-library/9th',
        color: 'blue',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/ncert-library/9th/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/ncert-library/9th/chemistry' },
          { title: 'Maths', icon: '📐', path: '/ncert-library/9th/maths' },
          { title: 'Bio', icon: '🧬', path: '/ncert-library/9th/bio' }
        ]
      },
      {
        title: '10th Standard',
        description: 'Video lectures for 10th standard NCERT/CBSE',
        icon: '📘',
        path: '/ncert-library/10th',
        color: 'purple',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/ncert-library/10th/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/ncert-library/10th/chemistry' },
          { title: 'Maths', icon: '📐', path: '/ncert-library/10th/maths' },
          { title: 'Bio', icon: '🧬', path: '/ncert-library/10th/bio' }
        ]
      },
      {
        title: '11th Standard',
        description: 'Video lectures for 11th standard NCERT/CBSE',
        icon: '🎥',
        path: '/ncert-library/11th',
        color: 'red',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/ncert-library/11th/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/ncert-library/11th/chemistry' },
          { title: 'Maths', icon: '📐', path: '/ncert-library/11th/maths' },
          { title: 'Bio', icon: '🧬', path: '/ncert-library/11th/bio' }
        ]
      },
      {
        title: '12th Standard',
        description: 'Video lectures for 12th standard NCERT/CBSE',
        icon: '📺',
        path: '/ncert-library/12th',
        color: 'green',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/ncert-library/12th/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/ncert-library/12th/chemistry' },
          { title: 'Maths', icon: '📐', path: '/ncert-library/12th/maths' },
          { title: 'Bio', icon: '🧬', path: '/ncert-library/12th/bio' }
        ]
      }
    ]
  },
  mhtCet: {
    title: 'MHT-CET Previous Year Questions',
    description: 'Comprehensive collection of MHT-CET previous year papers with detailed solutions',
    icon: '📝',
    color: 'blue',
    items: [
      {
        title: 'Physics',
        description: 'MHT-CET Physics previous year solutions',
        icon: '⚛️',
        path: '/mht-cet-pyq/physics',
        color: 'blue'
      },
      {
        title: 'Chemistry',
        description: 'MHT-CET Chemistry previous year solutions',
        icon: '⚗️',
        path: '/mht-cet-pyq/chemistry',
        color: 'purple'
      },
      {
        title: 'Mathematics',
        description: 'MHT-CET Mathematics previous year solutions',
        icon: '📐',
        path: '/mht-cet-pyq/maths',
        color: 'red'
      },
      {
        title: 'Biology',
        description: 'MHT-CET Biology previous year solutions',
        icon: '🧬',
        path: '/mht-cet-pyq/bio',
        color: 'green'
      }
    ]
  },
  neetJee: {
    title: 'NEET & JEE Previous Year Questions',
    description: 'Practice with previous year papers from NEET and JEE examinations',
    icon: '🎯',
    color: 'purple',
    items: [
      {
        title: 'Physics',
        description: 'NEET & JEE Physics previous year solutions',
        icon: '⚛️',
        path: '/neet-jee-pyq/physics',
        color: 'blue'
      },
      {
        title: 'Chemistry',
        description: 'NEET & JEE Chemistry previous year solutions',
        icon: '⚗️',
        path: '/neet-jee-pyq/chemistry',
        color: 'purple'
      },
      {
        title: 'Mathematics',
        description: 'JEE Mathematics previous year solutions',
        icon: '📐',
        path: '/neet-jee-pyq/maths',
        color: 'red'
      },
      {
        title: 'Biology',
        description: 'NEET Biology previous year solutions',
        icon: '🧬',
        path: '/neet-jee-pyq/bio',
        color: 'green'
      }
    ]
  },
  csirNet: {
    title: 'CSIR-UGC NET/SET',
    description: 'Expert-curated study material for CSIR-UGC NET/SET in Chemical Science',
    icon: '🔬',
    color: 'green',
    items: [
      {
        title: 'Part A',
        description: 'General Aptitude and Research Methodology',
        icon: '📊',
        path: '/csir-net/part-a',
        color: 'blue',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/csir-net/part-a/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/csir-net/part-a/chemistry' },
          { title: 'Maths', icon: '📐', path: '/csir-net/part-a/maths' },
          { title: 'Bio', icon: '🧬', path: '/csir-net/part-a/bio' }
        ]
      },
      {
        title: 'Part B',
        description: 'Core Chemistry Concepts',
        icon: '⚗️',
        path: '/csir-net/part-b',
        color: 'purple',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/csir-net/part-b/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/csir-net/part-b/chemistry' },
          { title: 'Maths', icon: '📐', path: '/csir-net/part-b/maths' },
          { title: 'Bio', icon: '🧬', path: '/csir-net/part-b/bio' }
        ]
      },
      {
        title: 'Part C',
        description: 'Advanced Chemistry Topics',
        icon: '🧪',
        path: '/csir-net/part-c',
        color: 'red',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/csir-net/part-c/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/csir-net/part-c/chemistry' },
          { title: 'Maths', icon: '📐', path: '/csir-net/part-c/maths' },
          { title: 'Bio', icon: '🧬', path: '/csir-net/part-c/bio' }
        ]
      },
      {
        title: 'Previous Papers',
        description: 'Past year papers and solutions',
        icon: '📝',
        path: '/csir-net/previous',
        color: 'green',
        subItems: [
          { title: 'Physics', icon: '⚛️', path: '/csir-net/previous/physics' },
          { title: 'Chemistry', icon: '⚗️', path: '/csir-net/previous/chemistry' },
          { title: 'Maths', icon: '📐', path: '/csir-net/previous/maths' },
          { title: 'Bio', icon: '🧬', path: '/csir-net/previous/bio' }
        ]
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
      {/* Hero Section with enhanced gradient and animation */}
      <div className="relative text-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-3xl mb-16 overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold text-gray-900 mb-8 animate-fade-in">
            Welcome to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Rasayani Academy
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Your gateway to academic excellence. We provide comprehensive study materials, 
            video lectures, and practice resources for board exams and competitive preparations.
          </p>
          <div className="flex justify-center space-x-6">
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate('/video-library')}
              className="px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
            >
              Start Learning
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => navigate('/about')}
              className="px-8 py-4 text-lg border-2 hover:bg-gray-50 transform hover:-translate-y-1 transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Main Program Sections with enhanced cards */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-900">
          Our <span className="text-blue-600">Programs</span>
        </h1>
        <div className="space-y-24">
          {Object.entries(programs).map(([key, program]) => (
            <div key={key} className="mb-16">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  {program.title}
                </h2>
                <p className="text-xl text-gray-600">
                  {program.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {program.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-full bg-${item.color}-100 flex items-center justify-center mr-4`}>
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6 min-h-[60px]">{item.description}</p>
                      {item.subItems ? (
                        <div className="grid grid-cols-2 gap-3">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={`${subItem.path}/chapters`}
                              className="flex items-center p-3 rounded-lg hover:bg-gray-50 border border-gray-100 transition-colors group"
                            >
                              <span className="text-lg mr-2 group-hover:scale-110 transition-transform">
                                {subItem.icon}
                              </span>
                              <span className="font-medium text-gray-700 group-hover:text-gray-900">
                                {subItem.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className={`inline-flex items-center justify-center w-full p-3 rounded-lg bg-${item.color}-50 text-${item.color}-600 font-medium hover:bg-${item.color}-100 transition-colors`}
                        >
                          View Papers
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section with enhanced cards */}
      <Section
        title={
          <h2 className="text-4xl font-bold text-center mb-4">
            Why Choose <span className="text-blue-600">Rasayani Academy</span>?
          </h2>
        }
        description={
          <p className="text-xl text-gray-600 text-center mb-12">
            Discover the features that make us the preferred choice for students
          </p>
        }
        className="mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-full bg-${feature.color}-100 flex items-center justify-center mb-6 mx-auto`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action with enhanced design */}
      <div className="relative text-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
            Join thousands of students who have achieved their academic goals with Rasayani Academy.
          </p>
          <Button
            variant="light"
            size="large"
            onClick={() => navigate('/register')}
            className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home; 