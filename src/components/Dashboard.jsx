import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  GraduationCap,
  Calendar,
  PlayCircle,
  FileText,
  BookMarked,
  ChevronRight
} from 'lucide-react';

const Dashboard = () => {
  const learningProgress = [
    {
      subject: 'Chemistry',
      progress: 65,
      chaptersCompleted: 8,
      totalChapters: 12
    },
    {
      subject: 'Physics',
      progress: 45,
      chaptersCompleted: 5,
      totalChapters: 12
    },
    {
      subject: 'Mathematics',
      progress: 75,
      chaptersCompleted: 9,
      totalChapters: 12
    }
  ];

  const todayClasses = [
    {
      subject: 'Chemistry',
      topic: 'Chemical Bonding',
      time: '10:00 AM',
      duration: '1h',
      teacher: 'Mrs. Patel'
    },
    {
      subject: 'Physics',
      topic: 'Wave Optics',
      time: '2:00 PM',
      duration: '1h',
      teacher: 'Dr. Sharma'
    }
  ];

  const quickActions = [
    {
      title: 'Study Materials',
      description: 'Access your course materials',
      icon: BookMarked,
      link: '/study-materials',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Video Lectures',
      description: 'Watch recorded lectures',
      icon: PlayCircle,
      link: '/video-library',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Practice Tests',
      description: 'Take practice tests',
      icon: FileText,
      link: '/practice-tests',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">Welcome back!</h1>
        <p className="text-gray-600 mt-1">Your learning journey continues here</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            to={action.link}
            className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className={`${action.bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                <action.icon className={`w-6 h-6 ${action.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{action.title}</h3>
                <p className="text-sm text-gray-500">{action.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </Link>
        ))}
      </div>

      {/* Learning Progress */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h2>
        <div className="space-y-4">
          {learningProgress.map((subject, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-900">{subject.subject}</span>
                <span className="text-sm text-gray-500">
                  {subject.chaptersCompleted}/{subject.totalChapters} chapters
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
                  style={{ width: `${subject.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Classes */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Classes</h2>
        <div className="space-y-4">
          {todayClasses.map((class_, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{class_.subject}: {class_.topic}</h3>
                    <p className="text-sm text-gray-500">{class_.teacher}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{class_.time}</p>
                    <p className="text-sm text-gray-500">{class_.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 