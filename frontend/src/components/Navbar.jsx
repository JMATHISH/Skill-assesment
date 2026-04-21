import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../ThemeContext';

export default function Navbar() {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  const navBg = isDark ? 'rgba(2,6,23,0.85)' : 'rgba(248,250,252,0.85)';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const text = isDark ? '#f8fafc' : '#0f172a';

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 5%',
      borderBottom: `1px solid ${border}`,
      background: navBg,
      backdropFilter: 'blur(20px)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
        onClick={() => navigate('/')}
      >
        {/* ✅ FINAL FIX */}
        <img
          src="/logo.png"
          alt="SkillAssess Logo"
          style={{
            width: 32,
            height: 32,
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 8px rgba(102, 126, 234, 0.4))'
          }}
        />
        <span style={{ fontWeight: 800, fontSize: 20, color: text, letterSpacing: '-0.5px' }}>
          SkillAssess
        </span>
      </div>

      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 24, fontWeight: 500, fontSize: 14 }}>
          <Link to="/" style={{ color: text, textDecoration: 'none' }}>Home</Link>
          <Link to="/menu" style={{ color: text, textDecoration: 'none' }}>Menu</Link>
          <Link to="/contact" style={{ color: text, textDecoration: 'none' }}>Contact</Link>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <ThemeToggle />
        {token ? (
          <button
            style={{
              padding: '8px 20px',
              borderRadius: 8,
              border: 'none',
              background: 'linear-gradient(90deg,#667eea,#764ba2)',
              color: '#fff',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: 13
            }}
            onClick={() => navigate(isAdmin ? '/admin' : '/dashboard')}
          >
            Dashboard →
          </button>
        ) : (
          <button
            style={{
              padding: '8px 20px',
              borderRadius: 8,
              border: `1px solid ${border}`,
              background: 'transparent',
              color: text,
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: 13
            }}
            onClick={() => navigate('/login')}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}