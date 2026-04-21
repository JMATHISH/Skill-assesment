import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';  // ✅ ADD THIS

import Auth from './pages/Auth.jsx';
import Dashboard from './pages/Dashboard.jsx';
import TestEngine from './pages/TestEngine.jsx';
import Results from './pages/Results.jsx';
import History from './pages/History.jsx';
import QuestionReview from './pages/QuestionReview.jsx';
import Progress from './pages/Progress.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import Landing from './pages/Landing.jsx';
import Menu from './pages/Menu.jsx';
import Contact from './pages/Contact.jsx';

function PrivateRoute({ children }) {
  return localStorage.getItem('token') ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/test/:topic/:difficulty" element={<PrivateRoute><TestEngine /></PrivateRoute>} />
        <Route path="/results" element={<PrivateRoute><Results /></PrivateRoute>} />
        <Route path="/review" element={<PrivateRoute><QuestionReview /></PrivateRoute>} />
        <Route path="/history" element={<PrivateRoute><History /></PrivateRoute>} />
        <Route path="/progress" element={<PrivateRoute><Progress /></PrivateRoute>} />
        <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}