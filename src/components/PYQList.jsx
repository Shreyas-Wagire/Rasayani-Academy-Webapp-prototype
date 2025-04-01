import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FileText, Download } from 'lucide-react';

const pyqData = {
  'mht-cet': {
    physics: [
      {
        id: 1,
        year: '2023',
        title: 'MHT-CET 2023 Physics Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      },
      {
        id: 2,
        year: '2022',
        title: 'MHT-CET 2022 Physics Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      },
      {
        id: 3,
        year: '2021',
        title: 'MHT-CET 2021 Physics Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      },
      {
        id: 4,
        year: '2020',
        title: 'MHT-CET 2020 Physics Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      }
    ],
    chemistry: [
      {
        id: 1,
        year: '2023',
        title: 'MHT-CET 2023 Chemistry Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      },
      {
        id: 2,
        year: '2022',
        title: 'MHT-CET 2022 Chemistry Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      }
    ],
    maths: [
      {
        id: 1,
        year: '2023',
        title: 'MHT-CET 2023 Mathematics Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      },
      {
        id: 2,
        year: '2022',
        title: 'MHT-CET 2022 Mathematics Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      }
    ],
    bio: [
      {
        id: 1,
        year: '2023',
        title: 'MHT-CET 2023 Biology Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      },
      {
        id: 2,
        year: '2022',
        title: 'MHT-CET 2022 Biology Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      }
    ]
  },
  'neet-jee': {
    physics: [
      {
        id: 1,
        year: '2023',
        examType: 'NEET',
        title: 'NEET 2023 Physics Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      },
      {
        id: 2,
        year: '2023',
        examType: 'JEE Main',
        title: 'JEE Main 2023 Physics Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      },
      {
        id: 3,
        year: '2023',
        examType: 'JEE Advanced',
        title: 'JEE Advanced 2023 Physics Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      }
    ],
    chemistry: [
      {
        id: 1,
        year: '2023',
        examType: 'NEET',
        title: 'NEET 2023 Chemistry Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      },
      {
        id: 2,
        year: '2023',
        examType: 'JEE Main',
        title: 'JEE Main 2023 Chemistry Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      }
    ],
    maths: [
      {
        id: 1,
        year: '2023',
        examType: 'JEE Main',
        title: 'JEE Main 2023 Mathematics Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      },
      {
        id: 2,
        year: '2023',
        examType: 'JEE Advanced',
        title: 'JEE Advanced 2023 Mathematics Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      }
    ],
    bio: [
      {
        id: 1,
        year: '2023',
        examType: 'NEET',
        title: 'NEET 2023 Biology Question Paper with Solution',
        type: 'PDF',
        downloadUrl: '#'
      }
    ]
  }
};

const PYQList = () => {
  const { examType, subject } = useParams();
  const navigate = useNavigate();
  const papers = pyqData[examType]?.[subject.toLowerCase()] || [];

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
          {examType === 'mht-cet' ? 'MHT-CET' : 'NEET & JEE'} {subject.charAt(0).toUpperCase() + subject.slice(1)} Previous Year Papers
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
        {papers.map((paper) => (
          <div
            key={paper.id}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">📄</span>
                  <h3 className="font-medium text-gray-900">{paper.title}</h3>
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {paper.year}
                  </span>
                  {paper.examType && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {paper.examType}
                    </span>
                  )}
                </div>
              </div>
              <button 
                className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100"
                onClick={() => window.open(paper.downloadUrl, '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PYQList; 