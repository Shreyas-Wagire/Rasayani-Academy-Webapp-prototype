import React from 'react';
import { Link, useParams } from 'react-router-dom';

const topics = {
  chemistry: {
    '01': [
      { id: 1, title: 'Introduction to Organic Chemistry', description: 'Basic concepts and fundamentals of organic chemistry' },
      { id: 2, title: 'Classification of Organic Compounds', description: 'Different types of organic compounds and their classification' },
      { id: 3, title: 'Nomenclature', description: 'IUPAC naming system for organic compounds' },
      { id: 4, title: 'Isomerism', description: 'Structural and stereoisomerism in organic compounds' },
      { id: 5, title: 'Electronic Effects', description: 'Inductive and resonance effects in organic molecules' }
    ],
    '02': [
      { id: 1, title: 'Introduction to Hydrocarbons', description: 'Basic concepts of hydrocarbons' },
      { id: 2, title: 'Alkanes', description: 'Properties and reactions of alkanes' },
      { id: 3, title: 'Alkenes', description: 'Properties and reactions of alkenes' },
      { id: 4, title: 'Alkynes', description: 'Properties and reactions of alkynes' },
      { id: 5, title: 'Aromatic Hydrocarbons', description: 'Benzene and its derivatives' }
    ],
    '03': [
      { id: 1, title: 'Introduction to Aromatic Compounds', description: 'Basic concepts of aromaticity' },
      { id: 2, title: 'Benzene Structure', description: 'Structure and stability of benzene' },
      { id: 3, title: 'Electrophilic Substitution', description: 'Mechanism of electrophilic substitution' },
      { id: 4, title: 'Directing Groups', description: 'Effect of substituents on reactivity' },
      { id: 5, title: 'Reactions of Benzene', description: 'Common reactions of benzene and its derivatives' }
    ],
    '04': [
      { id: 1, title: 'Introduction to Alcohols', description: 'Basic concepts of alcohols' },
      { id: 2, title: 'Preparation of Alcohols', description: 'Methods of alcohol synthesis' },
      { id: 3, title: 'Properties of Alcohols', description: 'Physical and chemical properties' },
      { id: 4, title: 'Reactions of Alcohols', description: 'Common reactions of alcohols' },
      { id: 5, title: 'Ethers', description: 'Properties and reactions of ethers' }
    ]
  },
  physics: {
    '01': [
      { id: 1, title: 'Introduction to Measurements', description: 'Basic concepts of physical measurements' },
      { id: 2, title: 'Units and Dimensions', description: 'SI units and dimensional analysis' },
      { id: 3, title: 'Significant Figures', description: 'Rules for significant figures' },
      { id: 4, title: 'Errors in Measurement', description: 'Types of errors and their analysis' },
      { id: 5, title: 'Precision and Accuracy', description: 'Understanding precision and accuracy' }
    ],
    '02': [
      { id: 1, title: 'Introduction to Mechanics', description: 'Basic concepts of mechanics' },
      { id: 2, title: 'Newton\'s Laws', description: 'Newton\'s laws of motion' },
      { id: 3, title: 'Work and Energy', description: 'Work, energy, and power' },
      { id: 4, title: 'Momentum', description: 'Linear and angular momentum' },
      { id: 5, title: 'Circular Motion', description: 'Motion in circular path' }
    ],
    '03': [
      { id: 1, title: 'Introduction to Thermodynamics', description: 'Basic concepts of thermodynamics' },
      { id: 2, title: 'Heat and Temperature', description: 'Understanding heat and temperature' },
      { id: 3, title: 'Laws of Thermodynamics', description: 'The laws of thermodynamics' },
      { id: 4, title: 'Heat Transfer', description: 'Modes of heat transfer' },
      { id: 5, title: 'Thermal Properties', description: 'Thermal properties of matter' }
    ],
    '04': [
      { id: 1, title: 'Introduction to Waves', description: 'Basic concepts of waves' },
      { id: 2, title: 'Wave Properties', description: 'Properties of wave motion' },
      { id: 3, title: 'Sound Waves', description: 'Properties of sound waves' },
      { id: 4, title: 'Wave Interference', description: 'Interference of waves' },
      { id: 5, title: 'Doppler Effect', description: 'The Doppler effect and its applications' }
    ]
  },
  biology: {
    '01': [
      { id: 1, title: 'Introduction to Cell Biology', description: 'Basic concepts of cell biology' },
      { id: 2, title: 'Cell Structure', description: 'Structure of prokaryotic and eukaryotic cells' },
      { id: 3, title: 'Cell Membrane', description: 'Structure and function of cell membrane' },
      { id: 4, title: 'Cell Organelles', description: 'Structure and function of cell organelles' },
      { id: 5, title: 'Cell Division', description: 'Mitosis and meiosis' }
    ],
    '02': [
      { id: 1, title: 'Introduction to Plant Physiology', description: 'Basic concepts of plant physiology' },
      { id: 2, title: 'Transport in Plants', description: 'Water and mineral transport' },
      { id: 3, title: 'Photosynthesis', description: 'Process of photosynthesis' },
      { id: 4, title: 'Respiration', description: 'Plant respiration' },
      { id: 5, title: 'Plant Growth', description: 'Growth and development in plants' }
    ],
    '03': [
      { id: 1, title: 'Introduction to Human Physiology', description: 'Basic concepts of human physiology' },
      { id: 2, title: 'Digestive System', description: 'Structure and function of digestive system' },
      { id: 3, title: 'Circulatory System', description: 'Structure and function of circulatory system' },
      { id: 4, title: 'Respiratory System', description: 'Structure and function of respiratory system' },
      { id: 5, title: 'Nervous System', description: 'Structure and function of nervous system' }
    ],
    '04': [
      { id: 1, title: 'Introduction to Genetics', description: 'Basic concepts of genetics' },
      { id: 2, title: 'Mendel\'s Laws', description: 'Laws of inheritance' },
      { id: 3, title: 'Chromosomes', description: 'Structure and function of chromosomes' },
      { id: 4, title: 'DNA Structure', description: 'Structure of DNA' },
      { id: 5, title: 'Gene Expression', description: 'Process of gene expression' }
    ]
  },
  mathematics: {
    '01': [
      { id: 1, title: 'Introduction to Algebra', description: 'Basic concepts of algebra' },
      { id: 2, title: 'Linear Equations', description: 'Solving linear equations' },
      { id: 3, title: 'Quadratic Equations', description: 'Solving quadratic equations' },
      { id: 4, title: 'Matrices', description: 'Matrix operations and applications' },
      { id: 5, title: 'Determinants', description: 'Properties and applications of determinants' }
    ],
    '02': [
      { id: 1, title: 'Introduction to Calculus', description: 'Basic concepts of calculus' },
      { id: 2, title: 'Limits', description: 'Understanding limits' },
      { id: 3, title: 'Derivatives', description: 'Rules of differentiation' },
      { id: 4, title: 'Integration', description: 'Methods of integration' },
      { id: 5, title: 'Applications', description: 'Applications of calculus' }
    ],
    '03': [
      { id: 1, title: 'Introduction to Geometry', description: 'Basic concepts of geometry' },
      { id: 2, title: 'Coordinate Geometry', description: 'Points, lines, and planes' },
      { id: 3, title: 'Vectors', description: 'Vector operations and applications' },
      { id: 4, title: '3D Geometry', description: 'Three-dimensional geometry' },
      { id: 5, title: 'Conic Sections', description: 'Properties of conic sections' }
    ],
    '04': [
      { id: 1, title: 'Introduction to Statistics', description: 'Basic concepts of statistics' },
      { id: 2, title: 'Data Analysis', description: 'Methods of data analysis' },
      { id: 3, title: 'Probability', description: 'Basic probability concepts' },
      { id: 4, title: 'Random Variables', description: 'Discrete and continuous random variables' },
      { id: 5, title: 'Probability Distributions', description: 'Common probability distributions' }
    ]
  }
};

const TopicsPage = () => {
  const { subject, standard, chapterId } = useParams();
  const chapterTopics = topics[subject.toLowerCase()]?.[chapterId] || [];
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chapter {chapterId} Topics
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Select a topic to access audio lectures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapterTopics.map((topic) => (
            <Link
              key={topic.id}
              to={`/audio-library/${standard}/${subject}/chapter/${chapterId}/topic/${topic.id}`}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">Topic {topic.id}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {topic.title}
                </h2>
                <p className="text-gray-600">
                  {topic.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicsPage; 