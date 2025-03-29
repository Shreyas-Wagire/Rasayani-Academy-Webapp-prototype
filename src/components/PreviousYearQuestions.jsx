import { useState } from 'react';

const PreviousYearQuestions = () => {
  const [selectedExam, setSelectedExam] = useState('mht-cet');
  const [selectedClass, setSelectedClass] = useState('11');
  const [selectedSubject, setSelectedSubject] = useState('physics');

  const exams = [
    { id: 'mht-cet', name: 'MHT-CET' },
    { id: 'neet', name: 'NEET' },
    { id: 'jee', name: 'JEE' },
    { id: 'csir-net', name: 'CSIR-UGC NET/SET' }
  ];

  const classes = ['11', '12'];
  const subjects = [
    { id: 'physics', name: 'Physics' },
    { id: 'chemistry', name: 'Chemistry' },
    { id: 'biology', name: 'Biology' },
    { id: 'mathematics', name: 'Mathematics' }
  ];

  const topics = {
    physics: [
      'Mechanics',
      'Thermodynamics',
      'Electromagnetism',
      'Optics',
      'Modern Physics',
      'Waves and Oscillations',
      'Kinematics',
      'Dynamics',
      'Work, Energy and Power',
      'Rotational Motion',
      'Gravitation',
      'Properties of Matter',
      'Heat and Thermodynamics',
      'Wave Optics',
      'Ray Optics',
      'Electric Charges and Fields',
      'Electrostatic Potential and Capacitance',
      'Current Electricity',
      'Moving Charges and Magnetism',
      'Magnetism and Matter',
      'Electromagnetic Induction',
      'Alternating Current',
      'Electromagnetic Waves',
      'Dual Nature of Matter and Radiation',
      'Atoms',
      'Nuclei',
      'Semiconductor Electronics',
      'Communication Systems'
    ],
    chemistry: [
      'Physical Chemistry',
      'Inorganic Chemistry',
      'Organic Chemistry',
      'Atomic Structure',
      'Chemical Bonding',
      'Thermodynamics',
      'Chemical Equilibrium',
      'Ionic Equilibrium',
      'Redox Reactions',
      'Hydrogen',
      's-Block Elements',
      'p-Block Elements',
      'd and f Block Elements',
      'Coordination Compounds',
      'Environmental Chemistry',
      'Solid State',
      'Solutions',
      'Electrochemistry',
      'Chemical Kinetics',
      'Surface Chemistry',
      'General Principles and Processes of Isolation of Elements',
      'p-Block Elements',
      'd and f Block Elements',
      'Coordination Compounds',
      'Haloalkanes and Haloarenes',
      'Alcohols, Phenols and Ethers',
      'Aldehydes, Ketones and Carboxylic Acids',
      'Amines',
      'Biomolecules',
      'Polymers',
      'Chemistry in Everyday Life'
    ],
    biology: [
      'Cell Biology',
      'Genetics',
      'Evolution',
      'Ecology',
      'Human Physiology',
      'Plant Physiology',
      'Reproduction',
      'Growth and Development',
      'Human Health and Disease',
      'Microbes in Human Welfare',
      'Biotechnology',
      'Biodiversity and Conservation',
      'Environmental Issues',
      'Molecular Basis of Inheritance',
      'Human Reproduction',
      'Reproductive Health',
      'Principles of Inheritance and Variation',
      'Molecular Basis of Inheritance',
      'Evolution',
      'Human Health and Disease',
      'Strategies for Enhancement in Food Production',
      'Microbes in Human Welfare',
      'Biotechnology: Principles and Processes',
      'Biotechnology and its Applications',
      'Organisms and Populations',
      'Ecosystem',
      'Biodiversity and Conservation',
      'Environmental Issues'
    ],
    mathematics: [
      'Sets, Relations and Functions',
      'Complex Numbers and Quadratic Equations',
      'Matrices and Determinants',
      'Permutations and Combinations',
      'Mathematical Induction',
      'Binomial Theorem',
      'Sequences and Series',
      'Limit, Continuity and Differentiability',
      'Integral Calculus',
      'Differential Equations',
      'Coordinate Geometry',
      'Three Dimensional Geometry',
      'Vector Algebra',
      'Statistics and Probability',
      'Trigonometry',
      'Mathematical Reasoning',
      'Linear Programming',
      'Calculus',
      'Probability',
      'Statistics'
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Previous Year Questions</h1>
        <div className="flex space-x-4">
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {exams.map((exam) => (
              <option key={exam.id} value={exam.id}>
                {exam.name}
              </option>
            ))}
          </select>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {classes.map((cls) => (
              <option key={cls} value={cls}>
                Class {cls}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => setSelectedSubject(subject.id)}
            className={`p-4 rounded-lg border-2 transition-colors duration-200 ${
              selectedSubject === subject.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                selectedSubject === subject.id ? 'bg-blue-500' : 'bg-gray-100'
              }`}>
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className={`font-medium ${
                selectedSubject === subject.id ? 'text-blue-600' : 'text-gray-700'
              }`}>
                {subject.name}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics[selectedSubject].map((topic, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-900">{topic}</h3>
              </div>
              <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
                <span>Questions: 25</span>
                <span>•</span>
                <span>Last updated: 2 days ago</span>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                  MCQ
                </span>
                <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  Previous Year
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousYearQuestions; 