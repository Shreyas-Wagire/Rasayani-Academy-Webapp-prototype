import { 
  Search, 
  Filter, 
  Play, 
  Clock, 
  Headphones,
  ChevronRight,
  Download,
  BookOpen,
  ThumbsUp
} from 'lucide-react';
import { useState } from 'react';

const AudioLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const subjects = [
    { id: 'all', name: 'All Subjects' },
    { id: 'chemistry', name: 'Chemistry' },
    { id: 'physics', name: 'Physics' },
    { id: 'biology', name: 'Biology' },
    { id: 'mathematics', name: 'Mathematics' }
  ];

  const audioLectures = [
    {
      id: 1,
      title: 'Chemical Bonding - Part 1',
      subject: 'Chemistry',
      duration: '45:30',
      instructor: 'Dr. Sharma',
      date: '2024-03-15',
      downloads: 234,
      likes: 89,
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      title: 'Newton\'s Laws of Motion',
      subject: 'Physics',
      duration: '38:15',
      instructor: 'Prof. Verma',
      date: '2024-03-14',
      downloads: 189,
      likes: 67,
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      title: 'Integration Techniques',
      subject: 'Mathematics',
      duration: '42:00',
      instructor: 'Dr. Gupta',
      date: '2024-03-13',
      downloads: 156,
      likes: 45,
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      title: 'Organic Chemistry Fundamentals',
      subject: 'Chemistry',
      duration: '55:20',
      instructor: 'Dr. Sharma',
      date: '2024-03-12',
      downloads: 312,
      likes: 92,
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      title: 'Electromagnetic Induction',
      subject: 'Physics',
      duration: '48:45',
      instructor: 'Prof. Verma',
      date: '2024-03-11',
      downloads: 245,
      likes: 78,
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      title: 'Differential Equations',
      subject: 'Mathematics',
      duration: '51:30',
      instructor: 'Dr. Gupta',
      date: '2024-03-10',
      downloads: 178,
      likes: 56,
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 7,
      title: 'Thermodynamics Basics',
      subject: 'Chemistry',
      duration: '44:15',
      instructor: 'Dr. Sharma',
      date: '2024-03-09',
      downloads: 267,
      likes: 83,
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 8,
      title: 'Wave Optics',
      subject: 'Physics',
      duration: '47:30',
      instructor: 'Prof. Verma',
      date: '2024-03-08',
      downloads: 198,
      likes: 71,
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 9,
      title: 'Vector Calculus',
      subject: 'Mathematics',
      duration: '53:45',
      instructor: 'Dr. Gupta',
      date: '2024-03-07',
      downloads: 145,
      likes: 49,
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const filteredLectures = audioLectures.filter(lecture => {
    const matchesSearch = lecture.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || lecture.subject.toLowerCase() === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Audio Library</h1>
          <p className="text-gray-500 mt-1">Listen to recorded lectures and study materials</p>
        </div>
      </div>

      {/* Search and Subject Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search lectures..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {subjects.map(subject => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Audio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLectures.map(lecture => (
          <div 
            key={lecture.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <Headphones className="w-16 h-16 text-blue-500" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Play className="w-12 h-12 text-white" />
              </div>
              <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                {lecture.duration}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 line-clamp-2">{lecture.title}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-500">{lecture.subject}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{lecture.instructor}</span>
                  </div>
                </div>
                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <Download className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>Added on {new Date(lecture.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{lecture.downloads} downloads</span>
                </div>
                <div className="flex items-center space-x-1 text-blue-600">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{lecture.likes}</span>
                </div>
              </div>

              <button className="mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                <span>Listen Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredLectures.length === 0 && (
        <div className="text-center py-12">
          <Headphones className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No lectures found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default AudioLibrary; 