import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { maharashtraBoardChapters } from './shared/MaharashtraBoardChapters';

const ChaptersPage = () => {
  const { subject, standard } = useParams();
  const subjectChapters = maharashtraBoardChapters[subject] || [];
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {subject} Chapters
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Select a chapter to access audio lectures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectChapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/subjects/${subject}/${standard}/chapters/${chapter.id}/topics`}
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

export default ChaptersPage; 