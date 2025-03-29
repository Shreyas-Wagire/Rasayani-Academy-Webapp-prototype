import { 
  BookOpen, 
  FileText, 
  Download, 
  Clock, 
  BookMarked,
  ChevronRight
} from 'lucide-react';

const StudyMaterials = () => {
  const materials = [
    {
      id: 1,
      title: 'Chemistry Notes - Atomic Structure',
      subject: 'Chemistry',
      type: 'PDF Notes',
      size: '2.4 MB',
      duration: '45 pages',
      lastUpdated: '2 days ago',
      downloads: 234
    },
    {
      id: 2,
      title: 'Physics Formula Sheet',
      subject: 'Physics',
      type: 'Formula Sheet',
      size: '1.8 MB',
      duration: '12 pages',
      lastUpdated: '1 week ago',
      downloads: 189
    },
    {
      id: 3,
      title: 'Mathematics Practice Problems',
      subject: 'Mathematics',
      type: 'Practice Set',
      size: '3.2 MB',
      duration: '60 pages',
      lastUpdated: '3 days ago',
      downloads: 312
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Study Materials</h1>
          <p className="text-gray-500 mt-1">Access your study materials and resources</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <BookMarked className="w-4 h-4" />
          <span>My Bookmarks</span>
        </button>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material) => (
          <div 
            key={material.id}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{material.title}</h3>
                  <p className="text-sm text-gray-500">{material.subject}</p>
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                {material.type}
              </span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>{material.duration}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Download className="w-4 h-4 mr-2" />
                <span>{material.size}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Last updated {material.lastUpdated}
                </div>
                <div className="text-sm text-gray-500">
                  {material.downloads} downloads
                </div>
              </div>
            </div>

            <button className="mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <Download className="w-4 h-4" />
              <span>Download</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterials; 