import React from 'react';
import { Link, useParams } from 'react-router-dom';

const chapters = {
  chemistry: [
    { id: 1, title: 'Some Basic Concepts of Chemistry', description: 'Introduction to chemistry and its basic concepts' },
    { id: 2, title: 'Structure of Atom', description: 'Understanding atomic structure and quantum mechanics' },
    { id: 3, title: 'Classification of Elements and Periodicity', description: 'Periodic table and element classification' },
    { id: 4, title: 'Chemical Bonding and Molecular Structure', description: 'Types of chemical bonds and molecular shapes' },
    { id: 5, title: 'States of Matter', description: 'Gases, liquids, and solids' },
    { id: 6, title: 'Thermodynamics', description: 'Energy changes in chemical processes' },
    { id: 7, title: 'Equilibrium', description: 'Chemical equilibrium and its applications' },
    { id: 8, title: 'Redox Reactions', description: 'Oxidation-reduction reactions' },
    { id: 9, title: 'Hydrogen', description: 'Properties and compounds of hydrogen' },
    { id: 10, title: 's-Block Elements', description: 'Alkali and alkaline earth metals' },
    { id: 11, title: 'p-Block Elements', description: 'Elements of groups 13-18' },
    { id: 12, title: 'Organic Chemistry', description: 'Basic principles and techniques' },
    { id: 13, title: 'Hydrocarbons', description: 'Alkanes, alkenes, and alkynes' },
    { id: 14, title: 'Environmental Chemistry', description: 'Environmental pollution and its control' }
  ],
  physics: [
    { id: 1, title: 'Physical World', description: 'Introduction to physics and its scope' },
    { id: 2, title: 'Units and Measurements', description: 'Measurement systems and units' },
    { id: 3, title: 'Motion in a Straight Line', description: 'Linear motion and its equations' },
    { id: 4, title: 'Motion in a Plane', description: 'Two-dimensional motion' },
    { id: 5, title: 'Laws of Motion', description: 'Newton\'s laws and their applications' },
    { id: 6, title: 'Work, Energy and Power', description: 'Energy conservation and power' },
    { id: 7, title: 'System of Particles and Rotational Motion', description: 'Center of mass and rotation' },
    { id: 8, title: 'Gravitation', description: 'Universal law of gravitation' },
    { id: 9, title: 'Mechanical Properties of Solids', description: 'Elasticity and stress-strain' },
    { id: 10, title: 'Mechanical Properties of Fluids', description: 'Fluid mechanics and pressure' },
    { id: 11, title: 'Thermal Properties of Matter', description: 'Heat and temperature' },
    { id: 12, title: 'Thermodynamics', description: 'Heat engines and entropy' },
    { id: 13, title: 'Kinetic Theory', description: 'Molecular theory of gases' },
    { id: 14, title: 'Oscillations', description: 'Simple harmonic motion' },
    { id: 15, title: 'Waves', description: 'Wave motion and sound' }
  ],
  biology: [
    { id: 1, title: 'The Living World', description: 'Characteristics of living organisms' },
    { id: 2, title: 'Biological Classification', description: 'Classification of living organisms' },
    { id: 3, title: 'Plant Kingdom', description: 'Classification and characteristics of plants' },
    { id: 4, title: 'Animal Kingdom', description: 'Classification and characteristics of animals' },
    { id: 5, title: 'Morphology of Flowering Plants', description: 'Structure of flowering plants' },
    { id: 6, title: 'Anatomy of Flowering Plants', description: 'Internal structure of plants' },
    { id: 7, title: 'Structural Organisation in Animals', description: 'Animal tissue organization' },
    { id: 8, title: 'Cell: The Unit of Life', description: 'Cell structure and function' },
    { id: 9, title: 'Biomolecules', description: 'Chemical composition of living matter' },
    { id: 10, title: 'Cell Cycle and Cell Division', description: 'Cell reproduction' },
    { id: 11, title: 'Transport in Plants', description: 'Movement of substances in plants' },
    { id: 12, title: 'Mineral Nutrition', description: 'Plant nutrition' },
    { id: 13, title: 'Photosynthesis in Higher Plants', description: 'Process of photosynthesis' },
    { id: 14, title: 'Respiration in Plants', description: 'Plant respiration' },
    { id: 15, title: 'Plant Growth and Development', description: 'Growth and development in plants' }
  ],
  maths: [
    { id: 1, title: 'Sets', description: 'Set theory and operations' },
    { id: 2, title: 'Relations and Functions', description: 'Relations, functions, and their properties' },
    { id: 3, title: 'Trigonometric Functions', description: 'Trigonometry and its applications' },
    { id: 4, title: 'Complex Numbers and Quadratic Equations', description: 'Complex numbers and quadratic equations' },
    { id: 5, title: 'Linear Inequalities', description: 'Linear inequalities and their solutions' },
    { id: 6, title: 'Permutations and Combinations', description: 'Counting principles' },
    { id: 7, title: 'Binomial Theorem', description: 'Binomial expansion and its applications' },
    { id: 8, title: 'Sequences and Series', description: 'Arithmetic and geometric progressions' },
    { id: 9, title: 'Straight Lines', description: 'Properties of straight lines' },
    { id: 10, title: 'Conic Sections', description: 'Circles, parabolas, ellipses, and hyperbolas' },
    { id: 11, title: 'Introduction to Three Dimensional Geometry', description: '3D coordinate system' },
    { id: 12, title: 'Limits and Derivatives', description: 'Calculus fundamentals' },
    { id: 13, title: 'Mathematical Reasoning', description: 'Logical reasoning in mathematics' },
    { id: 14, title: 'Statistics', description: 'Data analysis and probability' },
    { id: 15, title: 'Probability', description: 'Probability theory and applications' }
  ]
};

const VideoChaptersPage = () => {
  const { subject, standard } = useParams();
  const subjectChapters = chapters[subject] || [];
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {subject.charAt(0).toUpperCase() + subject.slice(1)} Chapters
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Select a chapter to view its video lectures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectChapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/video-library/subjects/${subject}/${standard}/chapters/${chapter.id}`}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">Chapter {chapter.id}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {chapter.title}
                </h2>
                <p className="text-gray-600">
                  {chapter.description}
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

export default VideoChaptersPage; 