import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/Dashboard';
import AudioLibrary from './components/AudioLibrary';
import VideoLibrary from './components/VideoLibrary';
import PreviousYearQuestions from './components/PreviousYearQuestions';
import StudyMaterials from './components/StudyMaterials';
import Home from './components/Home';
import AudioLibraryProgram from './components/AudioLibraryProgram';
import SubjectsPage from './components/SubjectsPage';
import ChaptersPage from './components/ChaptersPage';
import TopicsPage from './components/TopicsPage';
import VideoLibraryProgram from './components/VideoLibraryProgram';
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
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/audio-library" element={<AudioLibraryProgram />} />
                <Route path="/audio-library/:standard" element={<SubjectsPage />} />
                <Route path="/subjects/:subject/:standard/chapters" element={<ChaptersPage />} />
                <Route path="/subjects/:subject/:standard/chapters/:chapterId/topics" element={<TopicsPage />} />
                <Route path="/video-library" element={<VideoLibraryProgram />} />
                <Route path="/video-library/:standard" element={<VideoSubjectsPage />} />
                <Route path="/video-library/subjects/:subject/:standard/chapters" element={<VideoChaptersPage />} />
                <Route path="/video-library/subjects/:subject/:standard/chapters/:chapterId/topics" element={<VideoTopicsPage />} />
                <Route path="/ncert-video-library" element={<NCERTVideoLibrary />} />
                <Route path="/ncert-video-library/:standard" element={<NCERTVideoSubjects />} />
                <Route path="/ncert-video-library/subjects/:subject/:standard/chapters" element={<VideoChaptersPage />} />
                <Route path="/ncert-video-library/subjects/:subject/:standard/chapters/:chapterId/topics" element={<VideoTopicsPage />} />
                <Route path="/mht-cet-pyq" element={<MHTCEPYQ />} />
                <Route path="/mht-cet-pyq/:standard" element={<MHTCEPYQ />} />
                <Route path="/mht-cet-pyq/subjects/:subject/:standard" element={<MHTCEPYQ />} />
                <Route path="/neet-jee-pyq" element={<NEETJEEPYQ />} />
                <Route path="/neet-jee-pyq/:standard" element={<NEETJEEPYQ />} />
                <Route path="/neet-jee-pyq/subjects/:subject/:standard" element={<NEETJEEPYQ />} />
                <Route path="/csir-net-set" element={<CSIRNETSET />} />
                <Route path="/csir-net-set/:subject" element={<ChapterList />} />
                <Route path="/csir-net-set/:subject/chapter/:chapterId" element={<ChapterDetail />} />
                <Route path="/previous-questions" element={<PreviousYearQuestions />} />
                <Route path="/study-materials" element={<StudyMaterials />} />
                <Route path="/video-library/:standard/:subject/chapter/:chapterId" element={<ChapterView program="video" />} />
                <Route path="/audio-library/:standard/:subject/chapter/:chapterId" element={<ChapterView program="audio" />} />
                <Route path="/mht-cet/:standard/:subject/chapter/:chapterId" element={<ChapterView program="mht-cet" />} />
                <Route path="/neet-jee/:standard/:subject/chapter/:chapterId" element={<ChapterView program="neet-jee" />} />
                <Route path="/csir-net-set/:subject/chapter/:chapterId" element={<ChapterView program="csir-net-set" />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
