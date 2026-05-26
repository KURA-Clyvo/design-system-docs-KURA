// kura-landing-shared.jsx — Shared landing widgets: KuraMark, icons, Nav, Footer

// ─── KuraMark ─────────────────────────────────────────────
function KuraMark({ size = 32, color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 40 48" width={size} height={size * 48/40} fill="none" aria-label="Kura">
      <path d="M20 44 C8 44 4 34 4 24 C4 10 12 4 20 4 C28 4 36 10 36 24 C36 34 32 44 20 44Z" fill={color} fillOpacity="0.18"/>
      <path d="M20 44 L20 16" stroke={color} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
      <circle cx="20" cy="8"  r="3.5" fill={color}/>
      <circle cx="13" cy="12" r="2.8" fill={color} opacity="0.85"/>
      <circle cx="27" cy="12" r="2.8" fill={color} opacity="0.85"/>
      <path d="M20 44 C8 44 4 34 4 24 C4 10 12 4 20 4 C28 4 36 10 36 24 C36 34 32 44 20 44Z" stroke={color} strokeWidth="1.5" fill="none" opacity="0.7"/>
    </svg>
  );
}

// ─── Icon library (24x24 outlined, currentColor) ──────────
function LIcon({ name, size = 24, stroke = 1.6 }) {
  const s = stroke;
  const I = {
    arrow:    <path d="M5 12h14M13 6l6 6-6 6" />,
    check:    <path d="M5 12 l5 5 9-11" />,
    play:     <path d="M8 5v14l11-7z" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>,
    doc:      <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></>,
    pill:     <><rect x="2.5" y="9" width="19" height="6" rx="3" transform="rotate(-30 12 12)"/><path d="M9.5 6 14.5 18"/></>,
    video:    <><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3z"/></>,
    cpu:      <><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/><rect x="9.5" y="9.5" width="5" height="5"/></>,
    chart:    <><path d="M4 20V8M10 20V4M16 20v-9M22 20H2"/></>,
    card:     <><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 11h20M6 15h4"/></>,
    lock:     <><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>,
    plug:     <><path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0V8zM12 18v4"/></>,
    eye:      <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>,
    bell:     <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9zM10 21a2 2 0 0 0 4 0"/></>,
    chat:     <><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></>,
    user:     <><circle cx="12" cy="8" r="4"/><path d="M5 21c1-4 4-6 7-6s6 2 7 6"/></>,
    sparkle:  <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></>,
    leaf:     <><path d="M5 19c0-7 5-13 16-14 1 11-5 16-13 16-1 0-3-1-3-2zM5 19l8-8"/></>,
    shield:   <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z"/><path d="m9 12 2 2 4-4"/></>,
    cam:      <><rect x="2" y="6" width="16" height="12" rx="2"/><path d="m18 10 4-2v8l-4-2"/><circle cx="10" cy="12" r="2.5"/></>,
    pin:      <><path d="M12 22s-7-7-7-13a7 7 0 0 1 14 0c0 6-7 13-7 13z"/><circle cx="12" cy="9" r="2.5"/></>,
    download: <><path d="M12 4v12M6 12l6 6 6-6M4 20h16"/></>,
    star:     <path d="M12 3l2.5 6 6.5 1-4.7 4.5 1.2 6.5L12 18l-5.5 3 1.2-6.5L3 10l6.5-1L12 3z"/>,
  };
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none"
         stroke="currentColor" strokeWidth={s} strokeLinecap="round" strokeLinejoin="round">
      {I[name] || <circle cx="12" cy="12" r="9"/>}
    </svg>
  );
}

// ─── Brand · wordmark ─────────────────────────────────────
function KLBrand({ tone = 'amber', sub = null, size = 26, markSize = 28, markColor }) {
  // tone controls italic accent color
  const emCls = tone === 'ocean' ? 'ocean' : tone === 'sage' ? 'sage' : '';
  return (
    <div className="kl-nav-brand">
      <KuraMark size={markSize} color={markColor || (tone === 'ocean' ? 'var(--ocean)' : tone === 'sage' ? 'var(--sage)' : 'var(--sage)')}/>
      <div>
        <div className={`wm ${emCls}`} style={{ fontSize: size }}>Ku<em>ra</em></div>
        {sub && <div className="sub">{sub}</div>}
      </div>
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────
function KLNav({ tone = 'ocean', sub = 'Clínica', links = [], cta }) {
  return (
    <nav className="kl-nav">
      <div className="kl-nav-inner">
        <a href="#" style={{ textDecoration: 'none' }}>
          <KLBrand tone={tone} sub={sub}/>
        </a>
        <div className="kl-nav-links">
          {links.map((l, i) => <a key={i} href={l.href}>{l.label}</a>)}
        </div>
        <div className="kl-nav-cta">
          {cta}
        </div>
      </div>
    </nav>
  );
}

// ─── Trust badge row ──────────────────────────────────────
function KLTrust({ items }) {
  return (
    <div className="kl-trust">
      {items.map((t, i) => (
        <div className="kl-trust-item" key={i}>
          <span className="ck"><LIcon name="check" size={11} stroke={2.6}/></span>
          {t}
        </div>
      ))}
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────
function KLFooter({ tone = 'ocean' }) {
  return (
    <footer className="kl-footer">
      <div className="kl-wrap">
        <div className="kl-footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <KuraMark size={36} color="var(--amber-bright)"/>
              <div className="wm" style={{ fontFamily: 'var(--font-display)', fontSize: 30, letterSpacing: '-0.025em', color: 'var(--bg)' }}>
                Ku<em style={{ fontStyle: 'italic', color: 'var(--amber-bright)' }}>ra</em>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(248,242,230,0.7)', margin: 0, maxWidth: 320 }}>
              Plataforma healthtech veterinária. Clínica, app tutor e IA em uma única solução. Feita no Brasil por Clyvo Vet.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
              <a href="#" aria-label="LinkedIn" style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(248,242,230,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.85 }}>in</a>
              <a href="#" aria-label="Instagram" style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(248,242,230,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.85 }}>ig</a>
              <a href="#" aria-label="YouTube" style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(248,242,230,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.85 }}>yt</a>
            </div>
          </div>
          <div>
            <h4>Produto</h4>
            <a href="Kura Landing Clinica.html">Kura Clínica</a><br/>
            <a href="Kura Landing Tutor.html">Kura App Tutor</a><br/>
            <a href="Kura Landing Produto.html">Plataforma</a><br/>
            <a href="#">Luna AI</a><br/>
            <a href="#">Integrações</a>
          </div>
          <div>
            <h4>Empresa</h4>
            <a href="#">Sobre a Clyvo</a><br/>
            <a href="#">Carreiras</a><br/>
            <a href="#">Imprensa</a><br/>
            <a href="#">Blog</a>
          </div>
          <div>
            <h4>Suporte</h4>
            <a href="#">Central de ajuda</a><br/>
            <a href="#">Documentação</a><br/>
            <a href="#">Status</a><br/>
            <a href="#">Contato</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#">Política de Privacidade</a><br/>
            <a href="#">Termos de uso</a><br/>
            <a href="#">LGPD</a><br/>
            <a href="#">CFMV Res. 1.465/2022</a>
          </div>
        </div>
        <div className="kl-footer-bottom">
          <span>© 2026 Clyvo Vet · Kura · São Paulo, Brasil</span>
          <span>FIAP Challenge 2026 · v1.0</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { KuraMark, LIcon, KLBrand, KLNav, KLTrust, KLFooter });
