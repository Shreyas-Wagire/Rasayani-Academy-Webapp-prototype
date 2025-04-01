import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard';
import AudioLibrary from './components/AudioLibrary';
import VideoLibraryProgram from './components/VideoLibraryProgram';
import PreviousYearQuestions from './components/PreviousYearQuestions';
import StudyMaterials from './components/StudyMaterials';
import Home from './components/Home';
import AudioLibraryProgram from './components/AudioLibraryProgram';
import SubjectsPage from './components/SubjectsPage';
import ChaptersPage from './components/ChaptersPage';
import TopicsPage from './components/TopicsPage';
import VideoSubjectsPage from './components/VideoSubjectsPage';
import VideoChaptersPage from './components/VideoChaptersPage';
import VideoTopicsPage from './components/VideoTopicsPage';
import NCERTVideoLibrary from './components/NCERTVideoLibrary';
import NCERTVideoSubjects from './components/NCERTVideoSubjects';
import MHTCEPYQ from './components/MHTCEPYQ';
import NEETJEEPYQ from './components/NEETJEEPYQ';
import CSIRNETSET from './components/CSIRNETSET';
import ChapterList from './components/ChapterList';
import ChapterDetail from './components/ChapterDetail';
import ChapterView from './components/shared/ChapterView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/video-library" element={<VideoLibraryProgram />} />
              <Route path="/audio-library/*" element={<AudioLibraryProgram />} />
              <Route path="/previous-year-questions" element={<PreviousYearQuestions />} />
              <Route path="/study-materials" element={<StudyMaterials />} />
              <Route path="/ncert-video-library" element={<NCERTVideoLibrary />} />
              <Route path="/mht-cet-pyq/*" element={<MHTCEPYQ />} />
              <Route path="/neet-jee-pyq/*" element={<NEETJEEPYQ />} />
              <Route path="/csir-net-set/*" element={<CSIRNETSET />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
