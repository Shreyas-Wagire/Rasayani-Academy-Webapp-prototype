import React from 'react';
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

  // Mock data for demonstration
  const stats = [
    { title: 'Total Courses', value: '12', icon: '📚' },
    { title: 'Active Students', value: '1,234', icon: '👥' },
    { title: 'Total Videos', value: '456', icon: '🎥' },
    { title: 'Total Audio', value: '789', icon: '🎧' },
  ];

  const recentActivities = [
    { title: 'New Video Uploaded', subject: 'Physics', time: '2 hours ago' },
    { title: 'Course Updated', subject: 'Chemistry', time: '5 hours ago' },
    { title: 'New Student Enrolled', subject: 'Mathematics', time: '1 day ago' },
    { title: 'Study Material Added', subject: 'Biology', time: '2 days ago' },
  ];

  const quickLinks = [
    { title: 'Audio Library', path: '/audio-library', icon: '🎧' },
    { title: 'Video Library', path: '/video-library', icon: '🎥' },
    { title: 'Previous Year Questions', path: '/previous-year-questions', icon: '📝' },
    { title: 'Study Materials', path: '/study-materials', icon: '📚' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Rasayani Academy</h1>
        <p className="text-gray-600 mt-2">Your comprehensive learning platform for science education</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-2xl mb-2">{link.icon}</span>
              <span className="text-sm font-medium text-gray-700 text-center">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.subject}</p>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Courses */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Physics', 'Chemistry', 'Biology', 'Mathematics'].map((subject, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">{subject}</h3>
              <p className="text-sm text-gray-600 mb-4">Comprehensive study materials and practice questions</p>
              <Link
                to={`/subjects/${subject.toLowerCase()}/12/chapters`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Course →
              </Link>
            </div>
          ))}
        </div>
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