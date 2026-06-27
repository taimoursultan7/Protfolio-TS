import React from 'react';
import profileImg from '../assets/taimour_profile.png';

// CVDocument — pixel-perfect recreation of Taimour Sultan's CV image.
// Rendered off-screen; captured by html2canvas → jsPDF for download.

const CVDocument = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: '794px',
        minHeight: '1122px',
        fontFamily: "'Segoe UI', Arial, sans-serif",
        display: 'flex',
        flexDirection: 'row',
        background: '#ffffff',
        position: 'absolute',
        top: '-9999px',
        left: '-9999px',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {/* ════════════════ LEFT DARK SIDEBAR ════════════════ */}
      <div
        style={{
          width: '255px',
          minWidth: '255px',
          background: '#0b2460',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px 20px 24px',
        }}
      >
        {/* Profile Photo — circular with blue border */}
        <div
          style={{
            width: '136px',
            height: '136px',
            borderRadius: '50%',
            border: '4px solid #2563eb',
            overflow: 'hidden',
            marginBottom: '16px',
            background: '#1a3a7e',
            flexShrink: 0,
          }}
        >
          <img
            src={profileImg}
            alt="Taimour Sultan"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            crossOrigin="anonymous"
          />
        </div>

        {/* Name & Title */}
        <div style={{ fontSize: '20px', fontWeight: 800, textAlign: 'center', letterSpacing: '1.5px', lineHeight: '1.2', marginBottom: '4px' }}>
          TAIMOUR SULTAN
        </div>
        <div style={{ fontSize: '10px', color: '#7eb3f8', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px', textAlign: 'center' }}>
          Frontend Developer
        </div>

        <SideDivider />

        {/* CONTACT */}
        <SideHeading label="CONTACT" />
        <SideContactItem icon="📞" text="03490799233" />
        <SideContactItem icon="✉" text="taimoursultan07@gmail.com" small />
        <SideContactItem icon="📍" text="A1 zaildar park ichra Lahore." />

        <SideDivider />

        {/* KEY SKILLS */}
        <SideHeading label="KEY SKILLS" />
        {[
          'HTML5',
          'CSS3 / SASS',
          'JavaScript (ES6+)',
          'React.js',
          'Responsive Design',
          'Git & GitHub',
          'Problem Solving',
          'Teamwork and Communication',
        ].map((s) => (
          <div key={s} style={{ fontSize: '11px', color: '#dce8ff', marginBottom: '5px', display: 'flex', gap: '6px', width: '100%' }}>
            <span style={{ color: '#60a5fa', fontWeight: 700 }}>•</span>
            <span>{s}</span>
          </div>
        ))}

        <SideDivider />

        {/* LANGUAGES */}
        <SideHeading label="LANGUAGES" />
        <div style={{ fontSize: '11px', color: '#dce8ff', marginBottom: '4px', width: '100%' }}>• English, Urdu, Pashto.</div>

        <SideDivider />

        {/* REFERENCE */}
        <SideHeading label="REFERENCE" />
        <div style={{ fontSize: '11px', color: '#dce8ff', marginBottom: '4px', width: '100%' }}>• PNY training.</div>
        <div style={{ fontSize: '11px', color: '#dce8ff', marginBottom: '4px', width: '100%' }}>• Student.</div>
        <div style={{ fontSize: '11px', color: '#dce8ff', width: '100%' }}>• Contact: 03369430976.</div>
      </div>

      {/* ════════════════ RIGHT WHITE CONTENT ════════════════ */}
      <div style={{ flex: 1, padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>

        {/* ── ABOUT ME ── */}
        <SectionHeader icon="👤" label="ABOUT ME" />
        <p style={{ fontSize: '12px', lineHeight: '1.85', color: '#374151', textAlign: 'justify', margin: '0 0 16px 0' }}>
          Taimour Sultan is a Software Engineering graduate with skills in web development, frontend development, and digital technologies. He is passionate about learning new technologies and building innovative, user-friendly solutions.
        </p>

        <MainDivider />

        {/* ── WORK EXPERIENCE ── */}
        <SectionHeader icon="💼" label="WORK EXPERIENCE" />

        <TimelineItem title="Web Development">
          <Bullet>Creating and maintaining websites and web applications.</Bullet>
          <Bullet>Designing the user interface and building server-side functionality.</Bullet>
          <Bullet>Using HTML, CSS, JavaScript, and frameworks for responsive websites.</Bullet>
        </TimelineItem>

        <TimelineItem title="Backend Development">
          <Bullet>Focusing on server-side logic, databases, and application functionality.</Bullet>
          <Bullet>Using languages like Python, Java, Node.js, and MySQL/MongoDB.</Bullet>
        </TimelineItem>

        <TimelineItem title="UI/UX Design">
          <Bullet>Creating logos, color schemes, and typography for brand identities.</Bullet>
          <Bullet>Developing graphics for websites, social media, and digital ads.</Bullet>
        </TimelineItem>

        <TimelineItem title="Digital Marketing">
          <Bullet>Promoting products using social media, search engines, and email.</Bullet>
          <Bullet>Increasing brand awareness and boosting sales through SEO strategies.</Bullet>
        </TimelineItem>

        <MainDivider />

        {/* ── EDUCATION ── */}
        <SectionHeader icon="🎓" label="EDUCATION" />

        <EduRow
          degree="B.S. in Software Engineering"
          institute="University of Swat"
          period="2021 - 2025"
          location="Swat, Pakistan"
        />
        <EduRow
          degree="F.Sc (Pre-Engineering)"
          institute="Govt. Degree College Jowar"
          period="2019 - 2021"
          location="Buner, Pakistan"
        />
        <EduRow
          degree="Matric"
          institute="Abdali Public School Jowar, Buner"
          period="2003 - 2019"
          location="Jowar, Buner, Pakistan"
        />

        <MainDivider />

        {/* ── HOBBIES ── */}
        <SectionHeader icon="⭐" label="HOBBIES" />
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '22px' }}>⚽</span>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Football</span>
          </div>
          <div style={{ width: '1px', height: '30px', background: '#d1d5db' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '22px' }}>🏏</span>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Cricket</span>
          </div>
        </div>

      </div>
    </div>
  );
});

CVDocument.displayName = 'CVDocument';
export default CVDocument;

/* ─── Helper components ─── */

function SideDivider() {
  return <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.12)', margin: '14px 0' }} />;
}

function SideHeading({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', width: '100%' }}>
      <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#2563eb', flexShrink: 0 }} />
      <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase' as const }}>{label}</span>
    </div>
  );
}

function SideContactItem({ icon, text, small }: { icon: string; text: string; small?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px', width: '100%' }}>
      <span style={{ fontSize: '12px', marginTop: '1px', flexShrink: 0 }}>{icon}</span>
      <span style={{ fontSize: small ? '10px' : '11px', color: '#dce8ff', lineHeight: '1.4', wordBreak: 'break-all' as const }}>{text}</span>
    </div>
  );
}

function SectionHeader({ icon, label }: { icon: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', flexShrink: 0 }}>
        {icon}
      </div>
      <span style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' as const, color: '#111827' }}>{label}</span>
    </div>
  );
}

function MainDivider() {
  return <div style={{ borderTop: '1px solid #e5e7eb', margin: '8px 0 16px 0' }} />;
}

function TimelineItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2563eb', flexShrink: 0, marginTop: '3px' }} />
        <div style={{ width: '2px', flex: 1, background: '#bfdbfe', marginTop: '3px' }} />
      </div>
      <div style={{ paddingBottom: '4px' }}>
        <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#2563eb', marginBottom: '6px' }}>{title}</div>
        {children}
      </div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: '11.5px', color: '#374151', marginBottom: '5px', display: 'flex', gap: '5px' }}>
      <span>•</span><span>{children}</span>
    </div>
  );
}

function EduRow({ degree, institute, period, location }: { degree: string; institute: string; period: string; location: string }) {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '11px', alignItems: 'flex-start' }}>
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2563eb', flexShrink: 0, marginTop: '4px' }} />
      <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563eb' }}>{degree}</div>
          <div style={{ fontSize: '11px', color: '#374151' }}>{institute}</div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0, paddingLeft: '8px' }}>
          <div style={{ fontSize: '10.5px', color: '#6b7280' }}>📅 {period}</div>
          <div style={{ fontSize: '10.5px', color: '#6b7280', marginTop: '2px' }}>📍 {location}</div>
        </div>
      </div>
    </div>
  );
}
