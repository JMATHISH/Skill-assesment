import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useTheme } from '../ThemeContext';

export default function Contact() {
  const { isDark } = useTheme();
  const [status, setStatus] = useState('');

  const text = isDark ? '#f8fafc' : '#0f172a';
  const muted = isDark ? '#94a3b8' : '#64748b';
  const cardBg = isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.6)';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Messages sent! We will contact you soon.');
    e.target.reset();
  }

  return (
    <div style={{ color: text, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ width: 500, maxWidth: '100%', padding: '40px', borderRadius: 20, background: cardBg, border: `1px solid ${border}` }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <span style={{ fontSize: 40, display: 'block', marginBottom: 12 }}>💬</span>
            <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px' }}>Get in Touch</h1>
            <p style={{ fontSize: 14, color: muted, margin: 0 }}>Have any questions or feedback? We'd love to hear from you.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <input 
              style={{ width: '100%', padding: '14px 16px', borderRadius: 12, border: `1px solid ${border}`, background: 'transparent', color: text, fontSize: 15, outline: 'none' }}
              type="text" placeholder="Your Name" required 
            />
            <input 
               style={{ width: '100%', padding: '14px 16px', borderRadius: 12, border: `1px solid ${border}`, background: 'transparent', color: text, fontSize: 15, outline: 'none' }}
               type="email" placeholder="Your Email" required 
            />
            <textarea 
               style={{ width: '100%', padding: '14px 16px', borderRadius: 12, border: `1px solid ${border}`, background: 'transparent', color: text, fontSize: 15, minHeight: 120, outline: 'none', resize: 'vertical' }}
               placeholder="How can we help?" required 
            />
            
            {status && <p style={{ color: '#43e97b', fontSize: 14, margin: '0 0 8px', fontWeight: 600, textAlign: 'center' }}>{status}</p>}
            
            <button type="submit" style={{ padding: '14px', borderRadius: 12, border: 'none', background: 'linear-gradient(90deg,#667eea,#764ba2)', color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
