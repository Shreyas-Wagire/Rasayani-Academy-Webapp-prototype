import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Headphones, 
  PlayCircle, 
  FileText, 
  BookOpen,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const navigation = [
    {
      name: 'Dashboard',
      href: '/',
      icon: LayoutDashboard,
      badge: null
    },
    {
      name: 'Audio Library',
      href: '/audio-library',
      icon: Headphones,
      badge: 'New'
    },
    {
      name: 'Video Library',
      href: '/video-library',
      icon: PlayCircle,
      badge: 'Live'
    },
    {
      name: 'Previous Questions',
      href: '/previous-questions',
      icon: FileText,
      badge: null
    },
    {
      name: 'Study Materials',
      href: '/study-materials',
      icon: BookOpen,
      badge: null
    }
  ];

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-gray-200">
        <h1 className="text-xl font-bold text-blue-600">Rasayani Academy</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                <span className="font-medium text-sm">{item.name}</span>
              </div>
              {item.badge && (
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                  item.badge === 'New' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-3 border-t border-gray-200">
        <button className="w-full flex items-center justify-center space-x-2 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 