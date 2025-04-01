import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const chapters = {
  physics: [
    { id: 1, title: 'Physical World' },
    { id: 2, title: 'Units and Measurements' },
    { id: 3, title: 'Motion in a Straight Line' },
    { id: 4, title: 'Motion in a Plane' },
    { id: 5, title: 'Laws of Motion' },
    { id: 6, title: 'Work, Energy and Power' }
  ],
  chemistry: [
    { id: 1, title: 'Some Basic Concepts of Chemistry' },
    { id: 2, title: 'Structure of Atom' },
    { id: 3, title: 'Classification of Elements' },
    { id: 4, title: 'Chemical Bonding' }
  ],
  maths: [
    { id: 1, title: 'Sets' },
    { id: 2, title: 'Relations and Functions' },
    { id: 3, title: 'Trigonometric Functions' },
    { id: 4, title: 'Complex Numbers' }
  ],
  bio: [
    { id: 1, title: 'The Living World' },
    { id: 2, title: 'Biological Classification' },
    { id: 3, title: 'Plant Kingdom' },
    { id: 4, title: 'Animal Kingdom' }
  ]
};

const SubjectChapters = () => {
  const { subject, course, standard } = useParams();
  const navigate = useNavigate();
  const subjectChapters = chapters[subject.toLowerCase()] || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <span className="mr-2">←</span> Back
        </button>
        <h1 className="text-2xl font-bold ml-4">
          {subject.charAt(0).toUpperCase() + subject.slice(1)} Chapters
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
        {subjectChapters.map((chapter) => (
          <Link
            key={chapter.id}
            to={`/${course}/${standard}/${subject}/chapter/${chapter.id}`}
            className="block bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="font-medium text-gray-900">
              Ch {chapter.id.toString().padStart(2, '0')}: {chapter.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubjectChapters; 