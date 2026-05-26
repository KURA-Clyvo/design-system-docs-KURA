// brandbook-youtube.jsx — YouTube identity: 3 avatars (98×98) + 3+ banner directions (2048×1152).

// ─── AVATAR VARIATIONS ────────────────────────────────────────
// All rendered at intrinsic 98×98 — preview frame shrinks via CSS.
function Avatar({ bg, markColor = '#FFFCF7', dotColor, ring }) {
  return (
    <div style={{
      width: 98, height: 98,
      borderRadius: '50%',
      background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
      boxShadow: ring ? `inset 0 0 0 3px ${ring}` : undefined,
      overflow: 'hidden',
    }}>
      <KuraMark size={56} color={markColor} dotsColor={dotColor || markColor} fillOpacity={0.18} stroke={true}/>
    </div>
  );
}

function AvatarSquare({ size = 220, children, label, spec }) {
  return (
    <div className="bb-spec">
      <div className="bb-spec-stage no-grid" style={{ minHeight: size + 40, padding: 32 }}>
        {/* visual preview: render the actual 98×98 inside a centered circle, also enlarged */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div style={{ transform: 'scale(2)', transformOrigin: 'center' }}>
            {children}
          </div>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 14,
            paddingLeft: 110,
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              {children}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--text-mute)' }}>98 × 98</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bb-spec-foot">
        <span className="label">{label}</span>
        <span className="dim">{spec}</span>
      </div>
    </div>
  );
}

// ─── BANNER VARIATIONS ────────────────────────────────────────
// All rendered at intrinsic 2048×1152 — frame shrinks via inline transform.

// Tiny dotted paw print svg used as decorative pattern
function PawDot({ size = 24, color = 'currentColor', opacity = 1 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} opacity={opacity}>
      <ellipse cx="12" cy="15" rx="5" ry="4"/>
      <ellipse cx="5"  cy="9"  rx="2.4" ry="2.8"/>
      <ellipse cx="19" cy="9"  rx="2.4" ry="2.8"/>
      <ellipse cx="8"  cy="5"  rx="2"   ry="2.4"/>
      <ellipse cx="16" cy="5"  rx="2"   ry="2.4"/>
    </svg>
  );
}

// Decorative scatter — deterministic positions
function PawScatter({ side = 'left', color = 'rgba(74,105,68,0.18)' }) {
  const lefts = [
    { x: 60,  y: 120, s: 70, r: -22, o: 0.55 },
    { x: 180, y: 360, s: 44, r: 14,  o: 0.40 },
    { x: 90,  y: 560, s: 96, r: -8,  o: 0.65 },
    { x: 220, y: 760, s: 36, r: 28,  o: 0.30 },
    { x: 40,  y: 920, s: 62, r: -34, o: 0.50 },
  ];
  const rights = [
    { x: 1860, y: 90,  s: 48, r: 18,  o: 0.45 },
    { x: 1740, y: 280, s: 76, r: -12, o: 0.60 },
    { x: 1920, y: 500, s: 40, r: 32,  o: 0.35 },
    { x: 1780, y: 720, s: 92, r: -6,  o: 0.65 },
    { x: 1880, y: 980, s: 54, r: 22,  o: 0.40 },
  ];
  const items = side === 'left' ? lefts : rights;
  return (
    <>
      {items.map((it, i) => (
        <div key={`${side}-${i}`} style={{
          position: 'absolute', left: it.x, top: it.y,
          transform: `rotate(${it.r}deg)`,
          opacity: it.o,
          pointerEvents: 'none',
        }}>
          <PawDot size={it.s} color={color}/>
        </div>
      ))}
    </>
  );
}

// Wrapper: 2048×1152 banner shrunk via aspect-ratio frame
function BannerFrame({ children, label, spec, dark }) {
  return (
    <div className="bb-spec">
      <div className="bb-yt-frame">
        <div className="yt-inner" style={{ background: dark ? '#14110C' : 'var(--bg)' }}>
          {children}
        </div>
        <div className="bb-yt-safe-overlay"/>
      </div>
      <div className="bb-spec-foot">
        <span className="label">{label}</span>
        <span className="dim">{spec}</span>
      </div>
    </div>
  );
}

// 1546×423 safe area centered horizontally; content inside it
function BannerSafe({ children, style = {} }) {
  return (
    <div style={{
      position: 'absolute',
      width: 1546, height: 423,
      left: (2048 - 1546) / 2, top: (1152 - 423) / 2,
      display: 'flex', alignItems: 'center',
      ...style,
    }}>
      {children}
    </div>
  );
}

// ── BANNER 1: minimalist logo + tagline ─────────────────────
function Banner1() {
  return (
    <div style={{ width: 2048, height: 1152, background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <BannerSafe>
        <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
          <KuraMark size={220} color="var(--sage)" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 220,
              lineHeight: 0.9,
              letterSpacing: '-0.025em',
              color: 'var(--text)',
            }}>Ku<em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>ra</em></span>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 48,
              color: 'var(--text-soft)',
              letterSpacing: '0.01em',
              marginLeft: 4,
            }}>O cuidado registrado.</span>
          </div>
        </div>
      </BannerSafe>
      {/* corner mono tag */}
      <div style={{
        position: 'absolute', left: 96, bottom: 80,
        fontFamily: 'var(--font-mono)', fontSize: 22, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'var(--text-mute)',
      }}>Uma empresa <span style={{ color: 'var(--amber)' }}>Clyvo Vet</span></div>
      <div style={{
        position: 'absolute', right: 96, bottom: 80,
        fontFamily: 'var(--font-mono)', fontSize: 22, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'var(--text-mute)',
      }}>youtube.com/<span style={{ color: 'var(--text)' }}>@kura</span></div>
    </div>
  );
}

// ── BANNER 2: paw pattern scattered on sides, centered lockup ─
function Banner2() {
  return (
    <div style={{ width: 2048, height: 1152, background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <PawScatter side="left" color="rgba(74,105,68,0.22)"/>
      <PawScatter side="right" color="rgba(200,129,13,0.22)"/>
      {/* a faint sage orb */}
      <div style={{
        position: 'absolute', width: 900, height: 900, borderRadius: '50%',
        left: -260, top: -260,
        background: 'radial-gradient(circle, rgba(74,105,68,0.18) 0%, transparent 60%)',
        filter: 'blur(60px)',
      }}/>
      <div style={{
        position: 'absolute', width: 800, height: 800, borderRadius: '50%',
        right: -200, bottom: -260,
        background: 'radial-gradient(circle, rgba(200,129,13,0.16) 0%, transparent 60%)',
        filter: 'blur(60px)',
      }}/>
      <BannerSafe style={{ justifyContent: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
          <KuraMark size={300} color="var(--sage)" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 1000 }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 26, letterSpacing: '0.28em',
              textTransform: 'uppercase', color: 'var(--amber)',
            }}>Healthtech Veterinária</span>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400, fontSize: 132, lineHeight: 0.95,
              letterSpacing: '-0.022em', color: 'var(--text)',
            }}>Infraestrutura de continuidade<br/>do <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>cuidado animal</em>.</span>
          </div>
        </div>
      </BannerSafe>
    </div>
  );
}

// ── BANNER 3: sage → amber gradient, white text ─────────────
function Banner3() {
  return (
    <div style={{ width: 2048, height: 1152, position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(115deg, #4A6944 0%, #5B7F4F 38%, #9C7E2E 72%, #C8810D 100%)',
    }}>
      {/* warm wash overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 30%, rgba(255,252,247,0.18), transparent 55%)',
      }}/>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.08,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        mixBlendMode: 'overlay',
      }}/>
      {/* large mark watermark right */}
      <div style={{ position: 'absolute', right: -80, top: 60, opacity: 0.18 }}>
        <KuraMark size={1100} color="#FFFCF7" fillOpacity={0.25}/>
      </div>
      <BannerSafe>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <KuraMark size={120} color="#FFFCF7" />
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 400,
              fontSize: 152, lineHeight: 1, letterSpacing: '-0.025em', color: '#FFFCF7',
            }}>Ku<em style={{ fontStyle: 'italic', color: '#FBF0DB' }}>ra</em></span>
          </div>
          <span style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300,
            fontSize: 64, lineHeight: 1.2, color: '#FFFCF7', maxWidth: 1100, opacity: 0.95,
          }}>Vínculo entre tutor, pet e clínica — registrado a cada batida.</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 22, letterSpacing: '0.24em',
            textTransform: 'uppercase', color: '#FBF0DB', marginTop: 6,
          }}>Uma empresa Clyvo Vet · CFMV-compliant</span>
        </div>
      </BannerSafe>
    </div>
  );
}

// ── BANNER 4 (bonus): "Luna camera" — tech + warm, hero element ─
function Banner4() {
  return (
    <div style={{ width: 2048, height: 1152, background: '#14110C', position: 'relative', overflow: 'hidden' }}>
      {/* warm spotlight */}
      <div style={{
        position: 'absolute', width: 1600, height: 1600, borderRadius: '50%',
        right: -500, top: -500,
        background: 'radial-gradient(circle, rgba(200,129,13,0.42) 0%, transparent 55%)',
        filter: 'blur(40px)',
      }}/>
      <div style={{
        position: 'absolute', width: 1400, height: 1400, borderRadius: '50%',
        left: -500, bottom: -600,
        background: 'radial-gradient(circle, rgba(143,176,136,0.36) 0%, transparent 55%)',
        filter: 'blur(40px)',
      }}/>
      <BannerSafe>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26, maxWidth: 950 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <KuraMark size={72} color="#8FB088" />
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 86,
                lineHeight: 1, letterSpacing: '-0.025em', color: '#F0E8D8',
              }}>Ku<em style={{ fontStyle: 'italic', color: '#E89C20' }}>ra</em></span>
            </div>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 96,
              lineHeight: 1.02, letterSpacing: '-0.022em', color: '#F0E8D8',
            }}>Conheça a <em style={{ fontStyle: 'italic', color: '#E89C20' }}>Luna</em> —<br/>IA de triagem<br/>veterinária.</span>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: 28, lineHeight: 1.5, color: '#C8BCA0',
              maxWidth: 760, fontWeight: 300,
            }}>Detecção de raça por câmera, análise preliminar de sintomas e prontuário sempre acessível — para tutores e clínicas.</span>
          </div>
          {/* Luna camera viewfinder mock */}
          <div style={{ position: 'relative', width: 460, height: 460 }}>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: 32,
              background: 'rgba(255,252,247,0.04)',
              border: '2px solid rgba(255,252,247,0.18)',
              backdropFilter: 'blur(8px)',
            }}/>
            {/* corner brackets */}
            {[
              { top: 20, left: 20, b: ['t','l'] },
              { top: 20, right: 20, b: ['t','r'] },
              { bottom: 20, left: 20, b: ['b','l'] },
              { bottom: 20, right: 20, b: ['b','r'] },
            ].map((c, i) => (
              <div key={i} style={{
                position: 'absolute', width: 56, height: 56,
                top: c.top, left: c.left, right: c.right, bottom: c.bottom,
                borderTop: c.b.includes('t') ? '3px solid #E89C20' : 'none',
                borderBottom: c.b.includes('b') ? '3px solid #E89C20' : 'none',
                borderLeft: c.b.includes('l') ? '3px solid #E89C20' : 'none',
                borderRight: c.b.includes('r') ? '3px solid #E89C20' : 'none',
                borderRadius: 8,
              }}/>
            ))}
            <div style={{
              position: 'absolute', inset: 80,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <KuraMark size={220} color="#E89C20" fillOpacity={0.12}/>
            </div>
            {/* scanline */}
            <div style={{
              position: 'absolute', left: 80, right: 80, top: '50%',
              height: 2, background: 'linear-gradient(90deg, transparent, #E89C20, transparent)',
              opacity: 0.7,
            }}/>
            <div style={{
              position: 'absolute', left: 20, bottom: -40,
              fontFamily: 'var(--font-mono)', fontSize: 20, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#E89C20',
            }}>LUNA · ANÁLISE: 1.2s</div>
          </div>
        </div>
      </BannerSafe>
    </div>
  );
}

// ─── Frame shrink helper ─────────────────────────────────────
// Renders 2048×1152 content inside the .bb-yt-frame at proportional scale
function FittedBanner({ children }) {
  // We rely on the .bb-yt-frame ratio + transform on inner via ref
  const ref = React.useRef(null);
  React.useEffect(() => {
    const fit = () => {
      if (!ref.current) return;
      const parent = ref.current.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      ref.current.style.transform = `scale(${w / 2048})`;
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return <div ref={ref} className="yt-inner" style={{ transformOrigin: 'top left' }}>{children}</div>;
}

// Likewise for LinkedIn (1080×1080)
function FittedLi({ children }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const fit = () => {
      if (!ref.current) return;
      const parent = ref.current.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      ref.current.style.transform = `scale(${w / 1080})`;
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return <div ref={ref} className="li-inner" style={{ transformOrigin: 'top left' }}>{children}</div>;
}

// Likewise for Deck (1920×1080)
function FittedDeck({ children, bg }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const fit = () => {
      if (!ref.current) return;
      const parent = ref.current.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      ref.current.style.transform = `scale(${w / 1920})`;
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return <div ref={ref} className="deck-inner" style={{ transformOrigin: 'top left', background: bg || 'var(--bg)' }}>{children}</div>;
}

// ─── MAIN YOUTUBE SECTION ──────────────────────────────────
function SectionYouTube() {
  return (
    <section className="bb-section" id="youtube">
      <div className="bb-section-head">
        <div className="bb-section-eyebrow">
          <span className="bb-section-num">02 · Canal YouTube</span>
          <span className="bb-section-tag">Avatar 98 × 98 · Banner 2048 × 1152</span>
        </div>
        <h2 className="bb-section-title">Identidade <em>YouTube</em>.</h2>
        <p className="bb-section-lede">
          Três variações de avatar e quatro direções de banner. A safe area central (1546 × 423) é
          a única zona garantida em qualquer dispositivo — toda informação crítica vive ali.
        </p>
      </div>

      {/* ── AVATARES ── */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Avatar · 98 × 98 px</h3>
          <div className="bb-block-meta">PNG @2x · ≤ 50 KB · canto vivo recortado pelo YouTube</div>
        </div>
        <div className="bb-grid-3">
          <AvatarSquare label="Sage · primário" spec="USO PADRÃO · BG #F8F2E6">
            <Avatar bg="var(--bg-elev)" markColor="var(--sage)" />
          </AvatarSquare>
          <AvatarSquare label="Sage knockout · sólido" spec="ALTA DENSIDADE FEED">
            <Avatar bg="var(--sage)" markColor="#FFFCF7" />
          </AvatarSquare>
          <AvatarSquare label="Amber knockout · vibrante" spec="CAMPANHAS · DESTAQUE">
            <Avatar bg="var(--amber)" markColor="#1B1006" />
          </AvatarSquare>
        </div>
        <div className="bb-callout" style={{ marginTop: 18 }}>
          <strong>Padrão recomendado:</strong> usar a variação <span style={{ color: 'var(--sage)', fontWeight: 600 }}>Sage knockout</span> como
          avatar oficial do canal — leitura imediata em qualquer thumbnail e fundo, contrastes WCAG AA garantidos
          (verde/areia 6.1:1).
        </div>
      </div>

      {/* ── BANNERS ── */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Banner · 2048 × 1152 px</h3>
          <div className="bb-block-meta">SAFE AREA 1546 × 423 (dashed sage) · ≤ 500 KB</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
          <div className="bb-spec">
            <div className="bb-yt-frame"><FittedBanner><Banner1/></FittedBanner><div className="bb-yt-safe-overlay"/></div>
            <div className="bb-spec-foot">
              <span className="label">01 · Minimal · Logo + tagline</span>
              <span className="dim">USO PADRÃO · BG AREIA</span>
            </div>
          </div>
          <div className="bb-spec">
            <div className="bb-yt-frame"><FittedBanner><Banner2/></FittedBanner><div className="bb-yt-safe-overlay"/></div>
            <div className="bb-spec-foot">
              <span className="label">02 · Editorial · Padrão de patas</span>
              <span className="dim">HEALTHTECH · LANÇAMENTO</span>
            </div>
          </div>
          <div className="bb-spec">
            <div className="bb-yt-frame"><FittedBanner><Banner3/></FittedBanner><div className="bb-yt-safe-overlay"/></div>
            <div className="bb-spec-foot">
              <span className="label">03 · Gradiente sage → amber</span>
              <span className="dim">CAMPANHA INSTITUCIONAL</span>
            </div>
          </div>
          <div className="bb-spec">
            <div className="bb-yt-frame"><FittedBanner><Banner4/></FittedBanner><div className="bb-yt-safe-overlay"/></div>
            <div className="bb-spec-foot">
              <span className="label">04 · Luna · IA de triagem</span>
              <span className="dim">VÍDEO PRODUTO · DARK · DESTAQUE</span>
            </div>
          </div>
        </div>
        <div className="bb-callout info" style={{ marginTop: 20 }}>
          <strong>Sobre a safe area.</strong> O YouTube recorta o banner conforme o dispositivo. Apenas a área central
          <span className="bb-mono"> 1546 × 423 </span> é visível em TODOS os contextos (desktop, mobile, TV).
          Use as zonas estendidas apenas para padrões decorativos e gradientes — nunca para texto ou logo.
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  Avatar, AvatarSquare, PawDot, PawScatter,
  Banner1, Banner2, Banner3, Banner4,
  FittedBanner, FittedLi, FittedDeck,
  SectionYouTube,
});
