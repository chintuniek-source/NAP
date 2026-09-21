import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import SleepOverPage from './pages/SleepOverPage';
import ImagePRPage from './pages/ImagePRPage';
import MediaWingPage from './pages/MediaWingPage';
import NapQuizModal from './components/NapQuizModal';

function AppContent() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenJoin = () => {
    navigate('/#become-a-napper');
    // If already on homepage, scroll directly
    setTimeout(() => {
      const el = document.getElementById('become-a-napper');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleQuizResult = (target) => {
    if (target === '#sleep-over') {
      navigate('/sleep-over');
    } else if (target === '#image-management') {
      navigate('/image-pr');
    } else if (target === '#nap-media') {
      navigate('/media');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F2E7] text-[#320b35] relative selection:bg-[#7E3940] selection:text-[#F7F2E7] flex flex-col justify-between">
      <ScrollToTop />
      
      {/* Top Universal Navbar */}
      <Navbar 
        onOpenQuiz={() => setIsQuizOpen(true)} 
        onOpenJoin={handleOpenJoin} 
      />

      {/* Main Routed Content */}
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onOpenQuiz={() => setIsQuizOpen(true)} onOpenJoin={handleOpenJoin} />} 
          />
          <Route 
            path="/sleep-over" 
            element={<SleepOverPage onOpenJoin={handleOpenJoin} />} 
          />
          <Route 
            path="/image-pr" 
            element={<ImagePRPage onOpenJoin={handleOpenJoin} />} 
          />
          <Route 
            path="/media" 
            element={<MediaWingPage onOpenJoin={handleOpenJoin} />} 
          />
          <Route 
            path="/media-wing" 
            element={<Navigate to="/media" replace />} 
          />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Universal Footer */}
      <Footer onOpenJoin={handleOpenJoin} />

      {/* Global Interactive Nap Quiz Modal */}
      <NapQuizModal 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
        onSelectResult={handleQuizResult}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
