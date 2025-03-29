import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/Dashboard';
import AudioLibrary from './components/AudioLibrary';
import VideoLibrary from './components/VideoLibrary';
import PreviousYearQuestions from './components/PreviousYearQuestions';
import StudyMaterials from './components/StudyMaterials';
import './App.css';

function App() {
  return (
    <Router>
      <div className="h-screen flex overflow-hidden">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden md:flex">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <Navbar />

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/audio-library" element={<AudioLibrary />} />
                <Route path="/video-library" element={<VideoLibrary />} />
                <Route path="/previous-questions" element={<PreviousYearQuestions />} />
                <Route path="/study-materials" element={<StudyMaterials />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
