// brandbook-logo.jsx — Logo system: mark, wordmark, construction, clear space, lockups, knockouts, don'ts.

// ─── CANONICAL KURA MARK ──────────────────────────────────────
// Based on the refined logo used in Kura Pitch Deck v2:
// leaf-shaped body (almond/seed silhouette) with three "paws/heads"
// integrated at the top and a soft central stem.
function KuraMark({ size = 64, color = 'currentColor', fillOpacity = 0.18, stroke = true, showStem = true, showDots = true, showBody = true, dotsColor }) {
  const dc = dotsColor || color;
  return (
    <svg viewBox="0 0 40 48" width={size} height={size * 48/40} fill="none" aria-label="Kura mark">
      {showBody && (
        <path d="M20 44 C8 44 4 34 4 24 C4 10 12 4 20 4 C28 4 36 10 36 24 C36 34 32 44 20 44Z" fill={color} fillOpacity={fillOpacity}/>
      )}
      {showStem && (
        <path d="M20 44 L20 16" stroke={color} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
      )}
      {showDots && (
        <>
          <circle cx="20" cy="8"  r="3.5" fill={dc}/>
          <circle cx="13" cy="12" r="2.8" fill={dc} opacity="0.85"/>
          <circle cx="27" cy="12" r="2.8" fill={dc} opacity="0.85"/>
        </>
      )}
      {showBody && stroke && (
        <path d="M20 44 C8 44 4 34 4 24 C4 10 12 4 20 4 C28 4 36 10 36 24 C36 34 32 44 20 44Z" stroke={color} strokeWidth="1.5" fill="none" opacity="0.7"/>
      )}
    </svg>
  );
}

function KuraWord({ size = 64, color = 'var(--text)', emColor = 'var(--amber)' }) {
  return (
    <span style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: size,
      lineHeight: 0.9,
      letterSpacing: '-0.025em',
      color,
    }}>
      Ku<em style={{ color: emColor, fontStyle: 'italic' }}>ra</em>
    </span>
  );
}

// Horizontal lockup
function KuraLockup({ markSize = 56, wordSize = 64, color = 'var(--sage)', wordColor = 'var(--text)', emColor = 'var(--amber)', gap = 14 }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap }}>
      <KuraMark size={markSize} color={color} />
      <KuraWord size={wordSize} color={wordColor} emColor={emColor} />
    </div>
  );
}

// Vertical lockup
function KuraStackLockup({ markSize = 84, wordSize = 56, color = 'var(--sage)', wordColor = 'var(--text)', emColor = 'var(--amber)', gap = 10 }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap }}>
      <KuraMark size={markSize} color={color} />
      <KuraWord size={wordSize} color={wordColor} emColor={emColor} />
    </div>
  );
}

// ─── CONSTRUCTION GRID OVERLAY ────────────────────────────────
function MarkConstruction({ size = 320 }) {
  const cell = size / 12; // 12-cell grid over 40x48 viewBox scaled
  return (
    <div style={{ position: 'relative', width: size, height: size * 48/40 }}>
      {/* grid */}
      <svg viewBox="0 0 40 48" width={size} height={size * 48/40} style={{ position: 'absolute', inset: 0 }}>
        {/* outer frame */}
        <rect x="0" y="0" width="40" height="48" stroke="rgba(74,105,68,0.32)" strokeWidth="0.15" fill="none" strokeDasharray="0.6 0.4"/>
        {/* grid lines every 4 units */}
        {[4,8,12,16,20,24,28,32,36].map(v => (
          <line key={`v${v}`} x1={v} y1="0" x2={v} y2="48" stroke="rgba(74,105,68,0.18)" strokeWidth="0.08"/>
        ))}
        {[4,8,12,16,20,24,28,32,36,40,44].map(v => (
          <line key={`h${v}`} x1="0" y1={v} x2="40" y2={v} stroke="rgba(74,105,68,0.18)" strokeWidth="0.08"/>
        ))}
        {/* center cross */}
        <line x1="20" y1="0" x2="20" y2="48" stroke="rgba(200,129,13,0.6)" strokeWidth="0.15" strokeDasharray="0.8 0.4"/>
        <line x1="0" y1="24" x2="40" y2="24" stroke="rgba(200,129,13,0.6)" strokeWidth="0.15" strokeDasharray="0.8 0.4"/>

        {/* construction circles (showing the three head dots' construction) */}
        <circle cx="20" cy="8"  r="3.5" stroke="rgba(74,105,68,0.5)" strokeWidth="0.15" strokeDasharray="0.5 0.3" fill="none"/>
        <circle cx="13" cy="12" r="2.8" stroke="rgba(74,105,68,0.5)" strokeWidth="0.15" strokeDasharray="0.5 0.3" fill="none"/>
        <circle cx="27" cy="12" r="2.8" stroke="rgba(74,105,68,0.5)" strokeWidth="0.15" strokeDasharray="0.5 0.3" fill="none"/>

        {/* the actual mark on top */}
        <path d="M20 44 C8 44 4 34 4 24 C4 10 12 4 20 4 C28 4 36 10 36 24 C36 34 32 44 20 44Z" fill="rgba(74,105,68,0.10)" stroke="var(--sage)" strokeWidth="0.4"/>
        <path d="M20 44 L20 16" stroke="var(--sage)" strokeWidth="0.3" opacity="0.55" strokeLinecap="round"/>
        <circle cx="20" cy="8"  r="3.5" fill="var(--sage)"/>
        <circle cx="13" cy="12" r="2.8" fill="var(--sage)" opacity="0.88"/>
        <circle cx="27" cy="12" r="2.8" fill="var(--sage)" opacity="0.88"/>
      </svg>

      {/* spec labels */}
      <SpecLabel x={`${(20/40)*100}%`} y="-6px" align="center">A</SpecLabel>
      <SpecLabel x="-22px" y={`${(8/48)*100}%`} align="right">B</SpecLabel>
      <SpecLabel x="-22px" y={`${(12/48)*100}%`} align="right">C</SpecLabel>
      <SpecLabel x="-22px" y={`${(24/48)*100}%`} align="right">D</SpecLabel>
      <SpecLabel x="-22px" y={`${(44/48)*100}%`} align="right">E</SpecLabel>
    </div>
  );
}

function SpecLabel({ x, y, children, align = 'left' }) {
  return (
    <span style={{
      position: 'absolute',
      left: x, top: y,
      transform: align === 'center' ? 'translate(-50%, -100%)' : align === 'right' ? 'translate(0, -50%)' : 'translate(0,0)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.08em',
      color: 'var(--amber)',
      background: 'var(--bg-elev)',
      border: '1px solid var(--border-strong)',
      borderRadius: 3,
      padding: '1px 5px',
      lineHeight: 1.2,
      whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}

// ─── CLEAR SPACE DIAGRAM ─────────────────────────────────────
function ClearSpace({ size = 280 }) {
  // "x" = height of the top dot's diameter (7 viewBox units)
  // Clear space = 1x on all sides
  const x = size * 7 / 40; // approx 1 dot diameter
  return (
    <div style={{ position: 'relative', padding: x, background: 'var(--surface-2)', borderRadius: 4 }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background:
          `repeating-linear-gradient(45deg, transparent 0 4px, rgba(74,105,68,0.08) 4px 5px)`,
      }}/>
      <div style={{
        position: 'relative',
        background: 'var(--bg-elev)',
        border: '1px dashed var(--border-strong)',
        padding: 18,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <KuraMark size={size - x*2 - 36} color="var(--sage)"/>
      </div>
      {/* x label */}
      <div style={{
        position: 'absolute', top: x/2, left: '50%', transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em',
        color: 'var(--amber)', background: 'var(--bg-elev)', padding: '2px 6px',
        border: '1px solid var(--border-strong)', borderRadius: 3,
      }}>1x</div>
      <div style={{
        position: 'absolute', bottom: x/2, left: '50%', transform: 'translate(-50%, 50%)',
        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em',
        color: 'var(--amber)', background: 'var(--bg-elev)', padding: '2px 6px',
        border: '1px solid var(--border-strong)', borderRadius: 3,
      }}>1x</div>
      <div style={{
        position: 'absolute', left: x/2, top: '50%', transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em',
        color: 'var(--amber)', background: 'var(--bg-elev)', padding: '2px 6px',
        border: '1px solid var(--border-strong)', borderRadius: 3,
      }}>1x</div>
      <div style={{
        position: 'absolute', right: x/2, top: '50%', transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em',
        color: 'var(--amber)', background: 'var(--bg-elev)', padding: '2px 6px',
        border: '1px solid var(--border-strong)', borderRadius: 3,
      }}>1x</div>
    </div>
  );
}

// ─── DON'T illustrations ────────────────────────────────────
function DontStretch() {
  return (
    <div style={{ transform: 'scale(1.6, 0.8)', transformOrigin: 'center' }}>
      <KuraMark size={80} color="var(--sage)" />
    </div>
  );
}
function DontRecolor() {
  return <KuraMark size={80} color="#FF1493" />;
}
function DontShadow() {
  return (
    <div style={{ filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.45))' }}>
      <KuraMark size={80} color="var(--sage)" />
    </div>
  );
}
function DontRotate() {
  return (
    <div style={{ transform: 'rotate(28deg)' }}>
      <KuraMark size={80} color="var(--sage)" />
    </div>
  );
}
function DontOutline() {
  return (
    <svg viewBox="0 0 40 48" width="80" height="96" fill="none">
      <path d="M20 44 C8 44 4 34 4 24 C4 10 12 4 20 4 C28 4 36 10 36 24 C36 34 32 44 20 44Z" stroke="var(--sage)" strokeWidth="0.8" fill="none"/>
      <circle cx="20" cy="8"  r="3.5" stroke="var(--sage)" strokeWidth="0.8" fill="none"/>
      <circle cx="13" cy="12" r="2.8" stroke="var(--sage)" strokeWidth="0.8" fill="none"/>
      <circle cx="27" cy="12" r="2.8" stroke="var(--sage)" strokeWidth="0.8" fill="none"/>
    </svg>
  );
}
function DontLowContrast() {
  return (
    <div style={{ background: '#7B9E76', padding: 14, borderRadius: 8 }}>
      <KuraMark size={70} color="#4A6944" />
    </div>
  );
}

// ─── MAIN LOGO SECTION ──────────────────────────────────────
function SectionLogo() {
  return (
    <section className="bb-section" id="logo">
      <div className="bb-section-head">
        <div className="bb-section-eyebrow">
          <span className="bb-section-num">01 · Identidade Visual</span>
          <span className="bb-section-tag">Marca · Logo system</span>
        </div>
        <h2 className="bb-section-title">O símbolo do <em>cuidado registrado</em>.</h2>
        <p className="bb-section-lede">
          A marca Kura combina forma orgânica (folha/semente) com três marcas de presença (patas) e
          um caule sutil — síntese visual de tecnologia que enraíza o vínculo entre tutor, pet e clínica.
        </p>
      </div>

      {/* ── ANATOMIA ── */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Anatomia do símbolo</h3>
          <div className="bb-block-meta">viewBox 40 × 48 · grid 4u</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}>
          <div className="bb-spec">
            <div className="bb-spec-stage no-grid" style={{ padding: 56 }}>
              <MarkConstruction size={280} />
            </div>
            <div className="bb-spec-foot">
              <span className="label">Grid construtivo</span>
              <span className="dim">40 × 48 · cells 4u</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <table className="bb-table">
              <thead><tr><th style={{ width: 50 }}>Ref</th><th>Elemento</th><th>Spec</th></tr></thead>
              <tbody>
                <tr><td className="mono">A</td><td>Eixo vertical de simetria</td><td className="mono">x = 20u</td></tr>
                <tr><td className="mono">B</td><td>Pata superior (cabeça)</td><td className="mono">cy = 8u · r = 3.5u</td></tr>
                <tr><td className="mono">C</td><td>Patas laterais</td><td className="mono">cy = 12u · r = 2.8u</td></tr>
                <tr><td className="mono">D</td><td>Linha do equador (folha)</td><td className="mono">y = 24u</td></tr>
                <tr><td className="mono">E</td><td>Ponta inferior · caule</td><td className="mono">y = 44u</td></tr>
              </tbody>
            </table>
            <div className="bb-callout">
              <strong>Conceito.</strong> A folha (corpo) representa <span style={{ color: 'var(--sage)', fontWeight: 600 }}>natureza e saúde</span>;
              as três patas, <span style={{ color: 'var(--amber)', fontWeight: 600 }}>momentos registrados</span> (consultas,
              vacinas, marcos); o caule conecta o cuidado contínuo ao ecossistema clínico.
            </div>
          </div>
        </div>
      </div>

      {/* ── LOCKUPS ── */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Lockups · variações primárias</h3>
          <div className="bb-block-meta">4 composições oficiais</div>
        </div>
        <div className="bb-grid-2">
          <div className="bb-spec">
            <div className="bb-spec-stage" style={{ minHeight: 220 }}>
              <KuraLockup markSize={64} wordSize={88} color="var(--sage)" wordColor="var(--text)" emColor="var(--amber)"/>
            </div>
            <div className="bb-spec-foot">
              <span className="label">Horizontal · primária</span>
              <span className="dim">USO PADRÃO</span>
            </div>
          </div>

          <div className="bb-spec">
            <div className="bb-spec-stage" style={{ minHeight: 220 }}>
              <KuraStackLockup markSize={92} wordSize={68} color="var(--sage)" wordColor="var(--text)" emColor="var(--amber)"/>
            </div>
            <div className="bb-spec-foot">
              <span className="label">Vertical · empilhada</span>
              <span className="dim">SPLASH · ÍCONE GRANDE</span>
            </div>
          </div>

          <div className="bb-spec">
            <div className="bb-spec-stage" style={{ minHeight: 220 }}>
              <KuraMark size={120} color="var(--sage)" />
            </div>
            <div className="bb-spec-foot">
              <span className="label">Símbolo · isolado</span>
              <span className="dim">FAVICON · APP ICON · AVATAR</span>
            </div>
          </div>

          <div className="bb-spec">
            <div className="bb-spec-stage" style={{ minHeight: 220 }}>
              <KuraWord size={108} color="var(--text)" emColor="var(--amber)"/>
            </div>
            <div className="bb-spec-foot">
              <span className="label">Wordmark · isolado</span>
              <span className="dim">EDITORIAL · DOCS</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── KNOCKOUTS / BACKGROUNDS ── */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Knockouts · aplicação sobre cor</h3>
          <div className="bb-block-meta">Contraste mínimo 4.5:1 (WCAG AA)</div>
        </div>
        <div className="bb-grid-4">
          <div className="bb-spec">
            <div className="bb-spec-stage" style={{ minHeight: 180, background: 'var(--bg)' }}>
              <KuraLockup markSize={42} wordSize={56} color="var(--sage)" wordColor="var(--text)" emColor="var(--amber)" gap={10}/>
            </div>
            <div className="bb-spec-foot"><span className="label">Areia</span><span className="dim">#F8F2E6</span></div>
          </div>
          <div className="bb-spec">
            <div className="bb-spec-stage warm" style={{ minHeight: 180 }}>
              <KuraLockup markSize={42} wordSize={56} color="var(--sage)" wordColor="var(--text)" emColor="var(--amber)" gap={10}/>
            </div>
            <div className="bb-spec-foot"><span className="label">Amber pale</span><span className="dim">#FBF0DB</span></div>
          </div>
          <div className="bb-spec">
            <div className="bb-spec-stage sage-bg" style={{ minHeight: 180 }}>
              <KuraLockup markSize={42} wordSize={56} color="#FFFCF7" wordColor="#FFFCF7" emColor="#FBF0DB" gap={10}/>
            </div>
            <div className="bb-spec-foot"><span className="label">Sage</span><span className="dim">#4A6944</span></div>
          </div>
          <div className="bb-spec">
            <div className="bb-spec-stage dark" style={{ minHeight: 180 }}>
              <KuraLockup markSize={42} wordSize={56} color="#8FB088" wordColor="#F0E8D8" emColor="#E89C20" gap={10}/>
            </div>
            <div className="bb-spec-foot"><span className="label">Casca · dark</span><span className="dim">#14110C</span></div>
          </div>
        </div>
      </div>

      {/* ── CLEAR SPACE / SCALE ── */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Clear space · tamanhos mínimos</h3>
          <div className="bb-block-meta">x = altura da pata superior</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch' }}>
          <div className="bb-spec">
            <div className="bb-spec-stage no-grid" style={{ padding: 40 }}>
              <ClearSpace size={280} />
            </div>
            <div className="bb-spec-foot">
              <span className="label">Área de respiro</span>
              <span className="dim">≥ 1x em todos os lados</span>
            </div>
          </div>

          <div className="bb-spec" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="bb-spec-stage no-grid" style={{ padding: 32, gap: 36, flex: 1, alignItems: 'flex-end', justifyContent: 'space-around' }}>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
                <KuraMark size={16} color="var(--sage)"/>
                <span className="bb-mono" style={{ color: 'var(--clay)' }}>16px · NÃO</span>
              </div>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
                <KuraMark size={24} color="var(--sage)"/>
                <span className="bb-mono" style={{ color: 'var(--sage)' }}>24px · MÍN. DIGITAL</span>
              </div>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
                <KuraMark size={48} color="var(--sage)"/>
                <span className="bb-mono" style={{ color: 'var(--text-mute)' }}>48px · UI</span>
              </div>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
                <KuraMark size={88} color="var(--sage)"/>
                <span className="bb-mono" style={{ color: 'var(--text-mute)' }}>88px · HERO</span>
              </div>
            </div>
            <div className="bb-spec-foot">
              <span className="label">Escala recomendada</span>
              <span className="dim">PRINT MÍN. 12mm DE ALTURA</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── DON'TS ── */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Usos incorretos</h3>
          <div className="bb-block-meta">Seis violações que invalidam a marca</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          <div className="bb-rule">
            <div className="bb-rule-stage"><DontStretch/></div>
            <div className="bb-rule-foot dont"><span className="icon">✕</span>Não distorcer ou estirar a marca. Manter sempre proporção 5 : 6.</div>
          </div>
          <div className="bb-rule">
            <div className="bb-rule-stage"><DontRecolor/></div>
            <div className="bb-rule-foot dont"><span className="icon">✕</span>Não substituir as cores da marca por cores fora da paleta Kura.</div>
          </div>
          <div className="bb-rule">
            <div className="bb-rule-stage"><DontShadow/></div>
            <div className="bb-rule-foot dont"><span className="icon">✕</span>Não aplicar sombras, brilhos, biseis ou efeitos de profundidade.</div>
          </div>
          <div className="bb-rule">
            <div className="bb-rule-stage"><DontRotate/></div>
            <div className="bb-rule-foot dont"><span className="icon">✕</span>Não rotacionar a marca. O eixo vertical é parte da identidade.</div>
          </div>
          <div className="bb-rule">
            <div className="bb-rule-stage"><DontOutline/></div>
            <div className="bb-rule-foot dont"><span className="icon">✕</span>Não usar apenas em outline. As patas devem ser sempre preenchidas.</div>
          </div>
          <div className="bb-rule">
            <div className="bb-rule-stage"><DontLowContrast/></div>
            <div className="bb-rule-foot dont"><span className="icon">✕</span>Não aplicar sage sobre sage. Contraste mínimo 4.5:1.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { KuraMark, KuraWord, KuraLockup, KuraStackLockup, SectionLogo });
