import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useTheme } from '../ThemeContext';

const FEATURES = [
  { icon: '🧠', title: 'Adaptive AI Engine', desc: 'Questions scale directly based on your performance in real-time.' },
  { icon: '💻', title: 'Real-time IDE', desc: 'Write, run, and execute code dynamically directly in your browser.' },
  { icon: '⚡', title: 'Instant Feedback', desc: 'AI-assisted code reviews analyze mistakes and provide instant hints.' },
  { icon: '📈', title: 'Career Prep', desc: 'Compare your skills against placement targets for top software jobs.' },
];

export default function Landing() {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const text = isDark ? '#f8fafc' : '#0f172a';
  const muted = isDark ? '#94a3b8' : '#64748b';
  const cardBg = isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.6)';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

  return (
    <div style={{ color: text }}>
      <Navbar />

      {/* HERO SECTION */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '65vh',
        padding: '0 24px'
      }}>

        {/* ✅ PUBLIC IMAGE FIX */}
        <img
          src="/logo.png"
          alt="SkillAssess"
          style={{
            width: 140,
            height: 140,
            marginBottom: 24,
            borderRadius: 16,
            display: 'block',
            filter: 'drop-shadow(0 0 50px rgba(102, 126, 234, 0.7))'
          }}
        />

        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 800,
          margin: '0 0 16px',
          lineHeight: 1.1,
          letterSpacing: '-1.5px'
        }}>
          Master Your Skills <br />
          <span style={{
            background: 'linear-gradient(90deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Get Placement Ready
          </span>
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: muted,
          maxWidth: 640,
          margin: '0 auto 36px',
          lineHeight: 1.6
        }}>
          SkillAssess dynamically evaluates your programming and core aptitudes using AI,
          tailoring a custom roadmap for software engineering success.
        </p>

        <div style={{ display: 'flex', gap: 16 }}>
          <button
            style={{
              padding: '14px 32px',
              borderRadius: 12,
              border: 'none',
              background: 'linear-gradient(90deg,#667eea,#764ba2)',
              color: '#fff',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer'
            }}
            onClick={() => navigate('/login')}
          >
            Start Free Assessment
          </button>

          <button
            style={{
              padding: '14px 32px',
              borderRadius: 12,
              border: `1px solid ${border}`,
              background: 'transparent',
              color: text,
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer'
            }}
            onClick={() => navigate('/menu')}
          >
            Explore Curriculum
          </button>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>
            Why SkillAssess?
          </h2>
          <p style={{ color: muted, fontSize: 16 }}>
            The ultimate platform to accelerate your coding journey.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24
        }}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              style={{
                padding: 32,
                borderRadius: 20,
                background: cardBg,
                border: `1px solid ${border}`
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 15, color: muted, lineHeight: 1.6, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}