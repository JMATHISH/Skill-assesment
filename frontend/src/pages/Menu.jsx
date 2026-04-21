import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useTheme } from '../ThemeContext';

const COURSES = [
  { id: 'aptitude', label: 'General Aptitude', icon: '🧮', desc: 'Quantitative, logical reasoning, and basic problem solving.', color: '#667eea' },
  { id: 'dsa', label: 'Data Structures', icon: '💻', desc: 'Core algorithmic coding concepts via our real-time IDE.', color: '#f093fb' },
  { id: 'sql', label: 'SQL Databases', icon: '🗄️', desc: 'Master queries via a realistic virtual database environment.', color: '#4facfe' },
  { id: 'networks', label: 'Computer Networks', icon: '🌐', desc: 'Routing protocols, OSI models, and subnetting fundamentals.', color: '#43e97b' },
  { id: 'placement', label: 'Mock Placement Pack', icon: '🎯', desc: 'Full length mock tests covering all topics to simulate real drives.', color: '#d4a017' }
];

export default function Menu() {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const text = isDark ? '#f8fafc' : '#0f172a';
  const muted = isDark ? '#94a3b8' : '#64748b';
  const cardBg = isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.6)';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

  return (
    <div style={{ color: text, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <div style={{ flex: 1, maxWidth: 1000, margin: '0 auto', width: '100%', padding: '48px 24px' }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>Assessment Library</h1>
        <p style={{ fontSize: 16, color: muted, marginBottom: 48, textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
          Explore our wide range of meticulously designed domains. Whether you're building foundational skills or prepping for interviews, we have you covered.
        </p>

        {/* Responsive Grid List format */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {COURSES.map(course => (
            <div key={course.id} 
              style={{ padding: 24, borderRadius: 16, background: cardBg, border: `1px solid ${border}`, display: 'flex', flexDirection: 'column', gap: 16, cursor: 'pointer' }}
              onClick={() => {
                // If logged in, push to Dashboard. If not, push to Login to start.
                const token = localStorage.getItem('token');
                navigate(token ? '/dashboard' : '/login');
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${course.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
                  {course.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{course.label}</h3>
              </div>
              <p style={{ fontSize: 14, color: muted, lineHeight: 1.6, margin: 0, flex: 1 }}>{course.desc}</p>
              <div style={{ marginTop: 'auto', borderTop: `1px solid ${border}`, paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <span style={{ fontSize: 12, fontWeight: 600, color: course.color, background: `${course.color}15`, padding: '4px 10px', borderRadius: 20 }}>Adaptive Module</span>
                 <span style={{ fontSize: 20, color: muted }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
