import React from 'react';
import { useParams } from 'react-router-dom';

const ChapterDetail = () => {
  const { chapterId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chapter Details</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Chapter {chapterId}</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-700">Description</h3>
            <p className="text-gray-600 mt-1">
              This chapter covers fundamental concepts and principles.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700">Topics Covered</h3>
            <ul className="list-disc list-inside text-gray-600 mt-1">
              <li>Topic 1</li>
              <li>Topic 2</li>
              <li>Topic 3</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-700">Learning Objectives</h3>
            <ul className="list-disc list-inside text-gray-600 mt-1">
              <li>Understand key concepts</li>
              <li>Apply principles to problems</li>
              <li>Analyze and solve exercises</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetail; 