// kura-clinic-shared.jsx — Shared widgets for the clinic system.
// Layered on top of kura-shared.jsx (KuraLogo, KChip etc remain available).

// ─── Sidebar icons ────────────────────────────────────────────
const KCIcons = {
  dashboard: <><path d="M3 12L12 4l9 8" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round"/></>,
  agenda:    <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round"/></>,
  patients:  <><circle cx="9" cy="9" r="3"/><path d="M3 19c.7-2.8 3-4 6-4s5.3 1.2 6 4" strokeLinecap="round"/><circle cx="17" cy="8" r="2.2"/><path d="M16 14c2.5 0 4.5 1.4 5 3.6" strokeLinecap="round"/></>,
  consult:   <><path d="M9 4h7l4 4v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" strokeLinejoin="round"/><path d="M15 4v5h5M11 13h6M11 17h4" strokeLinecap="round"/></>,
  tele:      <><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m21 8-5 4 5 4V8z" strokeLinejoin="round"/></>,
  rx:        <><path d="M6 4h6a4 4 0 0 1 0 8H6V4z"/><path d="M6 12l8 8M11 12l4-4" strokeLinecap="round"/></>,
  luna:      <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" strokeLinecap="round"/></>,
  settings:  <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinejoin="round"/></>,
  search:    <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5" strokeLinecap="round"/></>,
  bell:      <><path d="M18 16v-5a6 6 0 0 0-12 0v5l-2 3h16l-2-3z" strokeLinejoin="round"/><path d="M10 19a2 2 0 0 0 4 0" strokeLinecap="round"/></>,
  plus:      <><path d="M12 5v14M5 12h14" strokeLinecap="round"/></>,
  more:      <><circle cx="5" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="19" cy="12" r="1.5" fill="currentColor"/></>,
  arrowR:    <><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></>,
  chevR:     <><path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></>,
  check:     <><path d="m5 12 5 5 9-11" strokeLinecap="round" strokeLinejoin="round"/></>,
  alert:     <><path d="M12 4 2 20h20L12 4z" strokeLinejoin="round"/><path d="M12 10v5M12 18v.5" strokeLinecap="round"/></>,
  edit:      <><path d="M14 4l6 6-12 12H2v-6L14 4z" strokeLinejoin="round"/></>,
  download:  <><path d="M12 4v12M6 14l6 6 6-6M4 22h16" strokeLinecap="round" strokeLinejoin="round"/></>,
  print:     <><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z" strokeLinejoin="round"/></>,
  paw:       <><circle cx="6" cy="11" r="2"/><circle cx="10" cy="6" r="2"/><circle cx="14" cy="6" r="2"/><circle cx="18" cy="11" r="2"/><path d="M12 12c-3 0-5 3-5 6 0 2 2 3 5 3s5-1 5-3c0-3-2-6-5-6z" strokeLinejoin="round"/></>,
  mic:       <><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" strokeLinecap="round"/></>,
  cam:       <><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-5 4 5 4V8z" strokeLinejoin="round"/></>,
  hangup:    <><path d="M21 15v3a2 2 0 0 1-2.18 2 19.9 19.9 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.9 19.9 0 0 1 1.18 2.18 2 2 0 0 1 3.16 0H6a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7 8a16 16 0 0 0 6 6l1.36-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 15z" strokeLinejoin="round" transform="rotate(135 12 12)"/></>,
  share:     <><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4" strokeLinecap="round"/></>,
  filter:    <><path d="M3 5h18M6 12h12M10 19h4" strokeLinecap="round"/></>,
  back:      <><path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></>,
  close:     <><path d="M6 6l12 12M18 6 6 18" strokeLinecap="round"/></>,
};

function KCIcon({ name, size = 18, stroke = 1.7, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color || "currentColor"} strokeWidth={stroke}>
      {KCIcons[name]}
    </svg>
  );
}

// ─── Brand mark in sidebar ────────────────────────────────────
function KCSidebarBrand() {
  return (
    <div className="kc-sidebar-brand">
      <KuraLogo size={32} color="var(--ocean)"/>
      <div>
        <div className="wm">Kura<em>.</em></div>
        <div className="sub">Sistema Clínico</div>
      </div>
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────
function KCSidebar({ active = 'dashboard', clinicName = 'Vila Mariana' }) {
  const items = [
    { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { id: 'agenda',    icon: 'agenda',    label: 'Agenda',    badge: '12' },
    { id: 'patients',  icon: 'patients',  label: 'Pacientes' },
    { id: 'consult',   icon: 'consult',   label: 'Consultas' },
    { id: 'tele',      icon: 'tele',      label: 'Teleorientação' },
    { id: 'rx',        icon: 'rx',        label: 'Receituário', badge: '3' },
    { id: 'luna',      icon: 'luna',      label: 'Luna',      badge: '⬤', accent: true },
    { id: 'settings',  icon: 'settings',  label: 'Configurações' },
  ];
  return (
    <aside className="kc-sidebar">
      <KCSidebarBrand/>
      <nav className="kc-nav">
        {items.map(it => (
          <button key={it.id} className={`kc-nav-item ${active === it.id ? 'active' : ''}`}>
            <KCIcon name={it.icon}/>
            <span style={{ flex: 1 }}>{it.label}</span>
            {it.badge && (
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                background: it.accent ? 'var(--clay)' : (active === it.id ? 'rgba(255,255,255,0.20)' : 'var(--surface-2)'),
                color: it.accent ? '#fff' : (active === it.id ? 'var(--ocean)' : 'var(--text-mute)'),
                padding: it.badge === '⬤' ? '0' : '2px 7px',
                width: it.badge === '⬤' ? 7 : 'auto', height: it.badge === '⬤' ? 7 : 'auto',
                borderRadius: 999, lineHeight: 1, letterSpacing: 0.04,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{it.badge !== '⬤' ? it.badge : ''}</span>
            )}
          </button>
        ))}
      </nav>
      <div className="kc-sidebar-footer">
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'linear-gradient(135deg, #C8810D, #D9624A)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontFamily: 'var(--font-display)', fontStyle: 'italic',
          fontWeight: 500, fontSize: 16, flexShrink: 0,
        }}>AR</div>
        <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
          <div style={{
            fontSize: 13, fontWeight: 500, color: 'var(--text)',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>Dra. Ana Ribeiro</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-mute)', letterSpacing: 0.1 }}>
            CRMV-SP 12.458
          </div>
        </div>
      </div>
    </aside>
  );
}

// ─── Top bar with search + notifications ──────────────────────
function KCTopbar({ crumb }) {
  return (
    <div className="kc-topbar">
      <div className="kc-crumb" dangerouslySetInnerHTML={{ __html: crumb }}/>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'var(--bg)', border: '1px solid var(--border)',
          padding: '7px 14px', borderRadius: 999,
          fontSize: 13, color: 'var(--text-mute)', minWidth: 280,
        }}>
          <KCIcon name="search" size={15}/>
          Buscar paciente, tutor ou prontuário…
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 10,
            padding: '1px 5px', border: '1px solid var(--border-strong)',
            borderRadius: 4, marginLeft: 'auto', color: 'var(--text-mute)',
          }}>⌘ K</span>
        </div>
        <button style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'transparent', border: 0, position: 'relative',
          color: 'var(--text-soft)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <KCIcon name="bell" size={18}/>
          <span style={{
            position: 'absolute', top: 6, right: 6,
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--clay)', border: '1.5px solid var(--bg-elev)',
          }}/>
        </button>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'linear-gradient(135deg, #C8810D, #D9624A)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontFamily: 'var(--font-display)', fontStyle: 'italic',
          fontWeight: 500, fontSize: 14,
        }}>AR</div>
      </div>
    </div>
  );
}

// ─── Pet portrait — gradient pseudo-photo, scaled up ──────────
function KCPetPortrait({ palette = 'lab', size = 88, ring = true }) {
  const palettes = {
    lab:    { bg: '#C9A876', a: '#8B6F45', b: '#F2E0C0', c: '#1B1006' },  // Labrador / Golden
    border: { bg: '#1B1006', a: '#3D2B18', b: '#FFFCF7', c: '#1B1006' },  // Border collie B&W
    siam:   { bg: '#E8DDC8', a: '#4A3418', b: '#FFFCF7', c: '#6B8AA8' },  // Siamese
    poodle: { bg: '#3D2B18', a: '#1B1006', b: '#8A7458', c: '#1B1006' },  // Black poodle
    persa:  { bg: '#F2E0C0', a: '#C9A876', b: '#FFFCF7', c: '#4A3418' },  // Persa
    srd:    { bg: '#8B6F45', a: '#3D2B18', b: '#F2E0C0', c: '#1B1006' },  // SRD tabby
    golden: { bg: '#D9A053', a: '#8B5A1F', b: '#F2D89A', c: '#1B1006' },
    husky:  { bg: '#7A8A95', a: '#3D4852', b: '#F0F0F0', c: '#1B1006' },
  };
  const p = palettes[palette] || palettes.lab;
  return (
    <div style={{
      width: size, height: size,
      borderRadius: '50%',
      background: `
        radial-gradient(circle at 30% 35%, ${p.b} 0%, transparent 22%),
        radial-gradient(circle at 70% 35%, ${p.b} 0%, transparent 22%),
        radial-gradient(circle at 30% 38%, ${p.c} 0%, ${p.c} 4%, transparent 5%),
        radial-gradient(circle at 70% 38%, ${p.c} 0%, ${p.c} 4%, transparent 5%),
        radial-gradient(circle at 50% 65%, ${p.a} 0%, transparent 32%),
        radial-gradient(ellipse at 50% 95%, ${p.a} 0%, ${p.bg} 40%),
        ${p.bg}
      `,
      border: ring ? '2px solid var(--bg-elev)' : 'none',
      flexShrink: 0,
      boxShadow: ring ? '0 0 0 1px var(--border)' : 'none',
    }}/>
  );
}

// ─── Page header (title + actions) ────────────────────────────
function KCPageHeader({ kicker, title, em, actions, sub }) {
  return (
    <div className="kc-page-h">
      <div>
        {kicker && <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.16,
          textTransform: 'uppercase', color: 'var(--text-mute)', marginBottom: 8,
        }}>{kicker}</div>}
        <h1>{title} {em && <em>{em}</em>}</h1>
        {sub && <div style={{ fontSize: 14, color: 'var(--text-mute)', marginTop: 6 }}>{sub}</div>}
      </div>
      {actions && <div style={{ display: 'flex', gap: 10 }}>{actions}</div>}
    </div>
  );
}

// ─── Mini bar chart (sparkline-ish for dashboard widgets) ─────
function KCSpark({ values = [3, 5, 4, 7, 6, 9, 8], color = 'var(--ocean)', height = 32 }) {
  const max = Math.max(...values);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height }}>
      {values.map((v, i) => (
        <div key={i} style={{
          width: 6, height: `${(v / max) * 100}%`,
          background: color, opacity: 0.3 + (i / values.length) * 0.7,
          borderRadius: '2px 2px 0 0',
        }}/>
      ))}
    </div>
  );
}

// ─── Empty state ──────────────────────────────────────────────
function KCEmpty({ title, msg }) {
  return (
    <div style={{
      padding: 40, textAlign: 'center',
      border: '1px dashed var(--border-strong)',
      borderRadius: 14, color: 'var(--text-mute)',
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--text)', marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 13 }}>{msg}</div>
    </div>
  );
}

Object.assign(window, {
  KCIcon, KCIcons, KCSidebar, KCSidebarBrand, KCTopbar,
  KCPetPortrait, KCPageHeader, KCSpark, KCEmpty,
});
