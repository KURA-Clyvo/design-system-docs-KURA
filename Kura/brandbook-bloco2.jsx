// brandbook-bloco2.jsx — Iconografia + Photography Style

// ════════════════════════════════════════════════════════════
//  06 · ICONOGRAFIA — Line icons, 2px stroke, rounded caps, grid 24×24
// ════════════════════════════════════════════════════════════

// Generic icon wrapper. All icons use viewBox 0 0 24 24, stroke 2, rounded caps/joins.
function Icon({ children, size = 24, color = 'currentColor', strokeWidth = 2, fill = 'none' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={fill}
         stroke={color} strokeWidth={strokeWidth}
         strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

// — CORE ICONS — drawn in the Kura iconography style
const ICONS = {
  pet: (
    <Icon>
      <ellipse cx="12" cy="15.5" rx="4.5" ry="3.5"/>
      <ellipse cx="6.5" cy="9" rx="1.6" ry="2.2"/>
      <ellipse cx="17.5" cy="9" rx="1.6" ry="2.2"/>
      <ellipse cx="9.5" cy="6" rx="1.4" ry="1.8"/>
      <ellipse cx="14.5" cy="6" rx="1.4" ry="1.8"/>
    </Icon>
  ),
  vet: (
    <Icon>
      <path d="M12 3v18"/>
      <path d="M3 12h18"/>
      <circle cx="12" cy="12" r="9"/>
    </Icon>
  ),
  calendar: (
    <Icon>
      <rect x="3" y="5" width="18" height="16" rx="2"/>
      <path d="M3 10h18"/>
      <path d="M8 3v4M16 3v4"/>
    </Icon>
  ),
  vaccine: (
    <Icon>
      <path d="M16 2l6 6"/>
      <path d="M14 4l6 6"/>
      <path d="M19 7l-9 9-4 1 1-4 9-9"/>
      <path d="M12 14l-2-2"/>
    </Icon>
  ),
  video: (
    <Icon>
      <rect x="3" y="6" width="13" height="12" rx="2"/>
      <path d="M16 10l5-3v10l-5-3"/>
    </Icon>
  ),
  file: (
    <Icon>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
      <path d="M14 3v6h6"/>
      <path d="M8 13h8M8 17h6"/>
    </Icon>
  ),
  heart: (
    <Icon>
      <path d="M20.8 7.6a5 5 0 0 0-8.8-3.3 5 5 0 0 0-8.8 3.3c0 6.4 8.8 11 8.8 11s8.8-4.6 8.8-11z"/>
    </Icon>
  ),
  bell: (
    <Icon>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M10 21a2 2 0 0 0 4 0"/>
    </Icon>
  ),
  pill: (
    <Icon>
      <rect x="2" y="10" width="20" height="6" rx="3" transform="rotate(-30 12 13)"/>
      <path d="M9.5 6.5l6 10.5" />
    </Icon>
  ),
  search: (
    <Icon>
      <circle cx="11" cy="11" r="7"/>
      <path d="M21 21l-4.3-4.3"/>
    </Icon>
  ),
  user: (
    <Icon>
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>
    </Icon>
  ),
  chat: (
    <Icon>
      <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z"/>
    </Icon>
  ),
  camera: (
    <Icon>
      <path d="M3 8h3l2-3h8l2 3h3v12H3z"/>
      <circle cx="12" cy="13" r="4"/>
    </Icon>
  ),
  shield: (
    <Icon>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z"/>
      <path d="M9 12l2 2 4-4"/>
    </Icon>
  ),
  chart: (
    <Icon>
      <path d="M3 21h18"/>
      <path d="M6 17V10M11 17V6M16 17v-8M21 17v-4"/>
    </Icon>
  ),
  settings: (
    <Icon>
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>
    </Icon>
  ),
};

// Icon with construction grid overlay — anatomy diagram
function IconAnatomy({ glyph }) {
  return (
    <div style={{ position: 'relative', width: 200, height: 200 }}>
      <svg viewBox="0 0 24 24" width={200} height={200} style={{ position: 'absolute', inset: 0 }}>
        {/* grid lines every 2u */}
        {[2,4,6,8,10,12,14,16,18,20,22].map(v => (
          <g key={v}>
            <line x1={v} y1="0" x2={v} y2="24" stroke="rgba(74,105,68,0.18)" strokeWidth="0.05"/>
            <line x1="0" y1={v} x2="24" y2={v} stroke="rgba(74,105,68,0.18)" strokeWidth="0.05"/>
          </g>
        ))}
        {/* safe area 20×20 */}
        <rect x="2" y="2" width="20" height="20" stroke="var(--amber)" strokeWidth="0.08" strokeDasharray="0.4 0.3" fill="none"/>
        {/* center cross */}
        <line x1="12" y1="0" x2="12" y2="24" stroke="rgba(200,129,13,0.5)" strokeWidth="0.07"/>
        <line x1="0" y1="12" x2="24" y2="12" stroke="rgba(200,129,13,0.5)" strokeWidth="0.07"/>
        {/* outer frame */}
        <rect x="0" y="0" width="24" height="24" stroke="var(--border-strong)" strokeWidth="0.08" fill="none"/>
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'var(--sage)' }}>{ICONS[glyph] && React.cloneElement(ICONS[glyph], { size: 200 })}</div>
      </div>
      <span style={{
        position: 'absolute', top: -22, left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em',
        color: 'var(--amber)', background: 'var(--bg-elev)', padding: '2px 6px',
        border: '1px solid var(--border-strong)', borderRadius: 3,
      }}>SAFE AREA · 20 × 20</span>
      <span style={{
        position: 'absolute', bottom: -22, left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em',
        color: 'var(--text-mute)', background: 'var(--bg-elev)', padding: '2px 6px',
        border: '1px solid var(--border-strong)', borderRadius: 3,
      }}>GRID · 24 × 24</span>
    </div>
  );
}

// Icon swatch tile
function IconTile({ glyph, label, color = 'var(--sage)' }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
      padding: '24px 12px',
      background: 'var(--bg-elev)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-md)',
    }}>
      <div style={{ color, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48 }}>
        {ICONS[glyph] && React.cloneElement(ICONS[glyph], { size: 32 })}
      </div>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-mute)' }}>{label}</span>
    </div>
  );
}

function SectionIcons() {
  const coreSet = [
    { g: 'pet',      l: 'pet' },
    { g: 'vet',      l: 'vet' },
    { g: 'calendar', l: 'calendar' },
    { g: 'vaccine',  l: 'vaccine' },
    { g: 'video',    l: 'video' },
    { g: 'file',     l: 'file' },
    { g: 'heart',    l: 'heart' },
    { g: 'bell',     l: 'bell' },
    { g: 'pill',     l: 'pill' },
    { g: 'search',   l: 'search' },
    { g: 'user',     l: 'user' },
    { g: 'chat',     l: 'chat' },
    { g: 'camera',   l: 'camera' },
    { g: 'shield',   l: 'shield' },
    { g: 'chart',    l: 'chart' },
    { g: 'settings', l: 'settings' },
  ];
  return (
    <section className="bb-section" id="icons">
      <div className="bb-section-head">
        <div className="bb-section-eyebrow">
          <span className="bb-section-num">06 · Iconografia</span>
          <span className="bb-section-tag">Line · 2 px · grid 24 × 24</span>
        </div>
        <h2 className="bb-section-title">Ícones <em>line</em>.</h2>
        <p className="bb-section-lede">
          Sistema de ícones em linha, 2 px de stroke, pontas e junções arredondadas. 16 ícones core cobrem
          os fluxos centrais do produto. Nunca filled. Nunca cores fora da paleta.
        </p>
      </div>

      {/* — ANATOMY — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Anatomia · grid e safe area</h3>
          <div className="bb-block-meta">grid 24 × 24 · safe 20 × 20 · stroke 2 px</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div className="bb-spec">
            <div className="bb-spec-stage no-grid" style={{ padding: 56 }}>
              <IconAnatomy glyph="calendar"/>
            </div>
            <div className="bb-spec-foot">
              <span className="label">Construção</span>
              <span className="dim">SAFE AREA · 2u DE RESPIRO</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <table className="bb-table">
              <thead><tr><th>Propriedade</th><th>Valor</th></tr></thead>
              <tbody>
                <tr><td>Grid base</td><td className="mono">24 × 24 px</td></tr>
                <tr><td>Safe area</td><td className="mono">20 × 20 px (2 px de respiro)</td></tr>
                <tr><td>Stroke</td><td className="mono">2 px · uniforme</td></tr>
                <tr><td>Stroke linecap</td><td className="mono">round</td></tr>
                <tr><td>Stroke linejoin</td><td className="mono">round</td></tr>
                <tr><td>Cantos</td><td className="mono">arredondados · radius 1u</td></tr>
                <tr><td>Fill</td><td className="mono">none (linha apenas)</td></tr>
                <tr><td>Tamanhos canônicos</td><td className="mono">16 · 20 · 24 · 32 · 48 px</td></tr>
              </tbody>
            </table>
            <div className="bb-callout">
              <strong>Regra de leitura.</strong> Em &lt; 20 px, simplifique o glifo: remova detalhes ornamentais
              e mantenha apenas a silhueta essencial. Ícones devem ser reconhecíveis em <span className="bb-mono">16 px</span>.
            </div>
          </div>
        </div>
      </div>

      {/* — CORE SET — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Set core · 16 ícones</h3>
          <div className="bb-block-meta">Sage · cor padrão de ação</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 12 }}>
          {coreSet.map(i => <IconTile key={i.g} glyph={i.g} label={i.l}/>)}
        </div>
      </div>

      {/* — PALETTE BY ROLE — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Paleta de ícones por papel</h3>
          <div className="bb-block-meta">3 cores funcionais</div>
        </div>
        <div className="bb-grid-3">
          <div className="bb-spec">
            <div className="bb-spec-stage no-grid" style={{ minHeight: 200, padding: 32, gap: 20 }}>
              <div style={{ display: 'flex', gap: 18, color: 'var(--sage)' }}>
                {React.cloneElement(ICONS.calendar, { size: 32 })}
                {React.cloneElement(ICONS.bell, { size: 32 })}
                {React.cloneElement(ICONS.video, { size: 32 })}
              </div>
            </div>
            <div className="bb-spec-foot">
              <span className="label">Sage · ação</span>
              <span className="dim">BOTÕES PRIMÁRIOS · LINKS</span>
            </div>
          </div>
          <div className="bb-spec">
            <div className="bb-spec-stage no-grid" style={{ minHeight: 200, padding: 32, gap: 20 }}>
              <div style={{ display: 'flex', gap: 18, color: 'var(--amber)' }}>
                {React.cloneElement(ICONS.heart, { size: 32 })}
                {React.cloneElement(ICONS.vaccine, { size: 32 })}
                {React.cloneElement(ICONS.camera, { size: 32 })}
              </div>
            </div>
            <div className="bb-spec-foot">
              <span className="label">Amber · destaque</span>
              <span className="dim">ESTADOS ATIVOS · ALERTAS POSITIVOS</span>
            </div>
          </div>
          <div className="bb-spec">
            <div className="bb-spec-stage no-grid" style={{ minHeight: 200, padding: 32, gap: 20 }}>
              <div style={{ display: 'flex', gap: 18, color: 'var(--text-mute)' }}>
                {React.cloneElement(ICONS.user, { size: 32 })}
                {React.cloneElement(ICONS.settings, { size: 32 })}
                {React.cloneElement(ICONS.search, { size: 32 })}
              </div>
            </div>
            <div className="bb-spec-foot">
              <span className="label">Muted · navegação</span>
              <span className="dim">TAB BAR · IDLE · UI INERTE</span>
            </div>
          </div>
        </div>
      </div>

      {/* — DON'TS — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Usos incorretos</h3>
          <div className="bb-block-meta">5 violações</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
          <div className="bb-rule">
            <div className="bb-rule-stage">
              <Icon strokeWidth="2" color="var(--sage)" fill="var(--sage)">
                <ellipse cx="12" cy="15.5" rx="4.5" ry="3.5"/>
                <ellipse cx="6.5" cy="9" rx="1.6" ry="2.2"/>
                <ellipse cx="17.5" cy="9" rx="1.6" ry="2.2"/>
                <ellipse cx="9.5" cy="6" rx="1.4" ry="1.8"/>
                <ellipse cx="14.5" cy="6" rx="1.4" ry="1.8"/>
              </Icon>
            </div>
            <div className="bb-rule-foot dont"><span className="icon">✕</span>Não usar versão preenchida (filled). Sempre line.</div>
          </div>
          <div className="bb-rule">
            <div className="bb-rule-stage">
              <Icon strokeWidth="4" color="var(--sage)">
                <rect x="3" y="5" width="18" height="16" rx="2"/>
                <path d="M3 10h18"/>
                <path d="M8 3v4M16 3v4"/>
              </Icon>
            </div>
            <div className="bb-rule-foot dont"><span className="icon">✕</span>Não engrossar o stroke. Sempre 2 px no grid base.</div>
          </div>
          <div className="bb-rule">
            <div className="bb-rule-stage">
              <Icon strokeWidth="2" color="var(--sage)" strokeLinecap="butt" strokeLinejoin="miter">
                <path d="M3 21h18"/>
                <path d="M6 17V10M11 17V6M16 17v-8M21 17v-4"/>
              </Icon>
            </div>
            <div className="bb-rule-foot dont"><span className="icon">✕</span>Não usar pontas retas (butt/miter). Sempre round.</div>
          </div>
          <div className="bb-rule">
            <div className="bb-rule-stage">
              <Icon strokeWidth="2" color="#FF1493">
                <circle cx="11" cy="11" r="7"/>
                <path d="M21 21l-4.3-4.3"/>
              </Icon>
            </div>
            <div className="bb-rule-foot dont"><span className="icon">✕</span>Não aplicar cores fora da paleta Kura.</div>
          </div>
          <div className="bb-rule">
            <div className="bb-rule-stage">
              <div style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))', color: 'var(--sage)' }}>
                {React.cloneElement(ICONS.shield, { size: 56 })}
              </div>
            </div>
            <div className="bb-rule-foot dont"><span className="icon">✕</span>Não aplicar sombras, gradientes ou efeitos.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════
//  07 · PHOTOGRAPHY STYLE — guia visual via placeholders ilustrativos
// ════════════════════════════════════════════════════════════

// "Photo" placeholder — represents the shot we want without using real photos.
// Uses radial gradients (warm pet tones) + bokeh circles + a soft frame.
function PetPhotoMock({ palette = 'lab', ratio = '4/5', mood = 'natural' }) {
  const palettes = {
    lab:  { bg: '#C9A876', a: '#8B6F45', b: '#F2E0C0', c: '#1B1006', shape: '50% 60%' },
    siam: { bg: '#E8DDC8', a: '#4A3418', b: '#FFFCF7', c: '#6B8AA8', shape: '52% 58%' },
    pup:  { bg: '#3D2B18', a: '#6B4A2B', b: '#C9A876', c: '#F2E0C0', shape: '50% 62%' },
    cat:  { bg: '#7B5832', a: '#3D2B18', b: '#D9B988', c: '#F2E0C0', shape: '48% 60%' },
  };
  const p = palettes[palette] || palettes.lab;
  return (
    <div style={{
      width: '100%',
      aspectRatio: ratio,
      borderRadius: 14,
      position: 'relative',
      overflow: 'hidden',
      background: `
        radial-gradient(circle at 12% 18%, rgba(255,252,247,0.16) 0%, transparent 22%),
        radial-gradient(circle at 88% 12%, rgba(255,252,247,0.10) 0%, transparent 18%),
        radial-gradient(ellipse at ${p.shape}, ${p.bg} 14%, ${p.a} 60%, ${p.c} 100%)`,
    }}>
      {/* warm wash */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(200,129,13,0.10), transparent 60%)' }}/>
      {/* "pet head" subtle silhouette */}
      <div style={{
        position: 'absolute',
        left: '50%', top: '55%', transform: 'translate(-50%, -50%)',
        width: '60%', aspectRatio: '1',
        borderRadius: '50%',
        background: `radial-gradient(circle at 50% 45%, ${p.b} 0%, ${p.bg} 35%, transparent 70%)`,
        opacity: 0.55,
      }}/>
      {/* eyes */}
      <div style={{
        position: 'absolute', left: '40%', top: '46%',
        width: 6, height: 6, borderRadius: '50%', background: p.c, opacity: 0.55,
      }}/>
      <div style={{
        position: 'absolute', right: '40%', top: '46%',
        width: 6, height: 6, borderRadius: '50%', background: p.c, opacity: 0.55,
      }}/>
      {/* film grain */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.20,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        mixBlendMode: 'overlay',
      }}/>
    </div>
  );
}

// "Bad" photo example — corporate/sterile vibe, white bg, cold blue
function StockBadPhoto() {
  return (
    <div style={{
      width: '100%',
      aspectRatio: '4/5',
      borderRadius: 14,
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #ECEEF1 0%, #DCE4EC 100%)',
    }}>
      {/* "vet figure" */}
      <div style={{
        position: 'absolute', left: '50%', top: '60%', transform: 'translate(-50%, -50%)',
        width: '34%', aspectRatio: '0.7',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #E5EAEF 100%)',
        borderRadius: '40% 40% 8% 8%',
        boxShadow: 'inset 0 -8px 12px rgba(0,0,0,0.05)',
      }}/>
      {/* "head" */}
      <div style={{
        position: 'absolute', left: '50%', top: '32%', transform: 'translate(-50%, -50%)',
        width: '18%', aspectRatio: '1',
        background: '#D8B996',
        borderRadius: '50%',
      }}/>
      {/* "stethoscope" – generic medical cliché */}
      <div style={{
        position: 'absolute', left: '50%', top: '55%', transform: 'translate(-50%, -50%)',
        width: 12, height: 12, borderRadius: '50%', background: '#4A86C8',
      }}/>
    </div>
  );
}

// Real-environment vet photo placeholder — warm tones, vet in action, no stethoscope
function VetWorkingMock() {
  return (
    <div style={{
      width: '100%',
      aspectRatio: '4/5',
      borderRadius: 14,
      position: 'relative',
      overflow: 'hidden',
      background: `
        radial-gradient(circle at 30% 25%, #F8D9A4 0%, transparent 28%),
        radial-gradient(circle at 80% 80%, #2A1A0C 0%, #4A3418 30%, transparent 50%),
        linear-gradient(180deg, #8B6F45 0%, #4A3418 100%)`,
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(200,129,13,0.16), transparent 70%)' }}/>
      {/* warm bokeh circles */}
      <div style={{ position: 'absolute', left: '12%', top: '14%', width: 80, height: 80, borderRadius: '50%', background: 'rgba(248,217,164,0.5)', filter: 'blur(20px)' }}/>
      <div style={{ position: 'absolute', right: '18%', top: '22%', width: 60, height: 60, borderRadius: '50%', background: 'rgba(248,217,164,0.4)', filter: 'blur(16px)' }}/>
      <div style={{ position: 'absolute', left: '60%', bottom: '20%', width: 50, height: 50, borderRadius: '50%', background: 'rgba(200,129,13,0.4)', filter: 'blur(14px)' }}/>
      {/* "two figures bent over a table" silhouette */}
      <div style={{
        position: 'absolute', left: '20%', bottom: '15%',
        width: '28%', aspectRatio: '0.8',
        background: 'linear-gradient(180deg, #3D2B18 0%, #1B1006 100%)',
        borderRadius: '60% 60% 12% 12%',
        opacity: 0.85,
      }}/>
      <div style={{
        position: 'absolute', right: '20%', bottom: '15%',
        width: '28%', aspectRatio: '0.8',
        background: 'linear-gradient(180deg, #4A3418 0%, #2A1A0C 100%)',
        borderRadius: '60% 60% 12% 12%',
        opacity: 0.85,
      }}/>
      {/* film grain */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.22,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        mixBlendMode: 'overlay',
      }}/>
    </div>
  );
}

// Tutor genuine moment — couple + dog, golden hour
function TutorMomentMock() {
  return (
    <div style={{
      width: '100%',
      aspectRatio: '4/5',
      borderRadius: 14,
      position: 'relative',
      overflow: 'hidden',
      background: `
        radial-gradient(circle at 70% 18%, #FCD9A0 0%, transparent 30%),
        linear-gradient(180deg, #D9B988 0%, #8B6F45 55%, #4A3418 100%)`,
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent, rgba(27,16,6,0.35))' }}/>
      {/* sun flare */}
      <div style={{ position: 'absolute', right: '12%', top: '12%', width: 100, height: 100, borderRadius: '50%', background: 'rgba(252,217,160,0.85)', filter: 'blur(30px)' }}/>
      {/* two silhouettes hugging + dog */}
      <div style={{
        position: 'absolute', left: '32%', bottom: 0, width: '40%', height: '60%',
        background: '#1B1006', opacity: 0.78,
        clipPath: 'polygon(0% 100%, 0% 38%, 18% 18%, 28% 0%, 50% 0%, 60% 16%, 75% 14%, 88% 38%, 100% 60%, 100% 100%)',
        borderRadius: '40px 40px 0 0',
      }}/>
      {/* dog silhouette at front-bottom */}
      <div style={{
        position: 'absolute', left: '38%', bottom: 0, width: '24%', aspectRatio: 1.3,
        background: '#1B1006', opacity: 0.85,
        borderRadius: '50% 50% 20% 20% / 60% 60% 20% 20%',
      }}/>
      {/* grain */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.22,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        mixBlendMode: 'overlay',
      }}/>
    </div>
  );
}

function PhotoCard({ children, label, spec }) {
  return (
    <div className="bb-spec">
      <div className="bb-spec-stage no-grid" style={{ padding: 16, minHeight: 200 }}>
        {children}
      </div>
      <div className="bb-spec-foot">
        <span className="label">{label}</span>
        <span className="dim">{spec}</span>
      </div>
    </div>
  );
}

function SectionPhotography() {
  return (
    <section className="bb-section" id="photography">
      <div className="bb-section-head">
        <div className="bb-section-eyebrow">
          <span className="bb-section-num">07 · Photography Style</span>
          <span className="bb-section-tag">Direção fotográfica · do & don't</span>
        </div>
        <h2 className="bb-section-title">Fotografia <em>autêntica</em>.</h2>
        <p className="bb-section-lede">
          Pets reais, vets em ação, tutores em momentos genuínos. Luz natural, tons warm, fundos desfocados.
          Nunca stock estéril com jaleco branco e fundo de estúdio. Os mocks abaixo representam a direção, não fotos finais.
        </p>
      </div>

      {/* — DIRECTION PILLARS — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Três pilares fotográficos</h3>
          <div className="bb-block-meta">Pets · Vets · Tutores</div>
        </div>
        <div className="bb-grid-3">
          <PhotoCard label="Pets · luz natural" spec="DESFOQUE NATURAL · FILM GRAIN">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, width: '100%' }}>
              <PetPhotoMock palette="lab"/>
              <PetPhotoMock palette="siam"/>
            </div>
          </PhotoCard>
          <PhotoCard label="Vets · em ação" spec="AMBIENTE REAL · NÃO POSADO">
            <VetWorkingMock/>
          </PhotoCard>
          <PhotoCard label="Tutores · momentos" spec="GOLDEN HOUR · CONEXÃO REAL">
            <TutorMomentMock/>
          </PhotoCard>
        </div>
      </div>

      {/* — DO vs DON'T — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Faça · Não faça</h3>
          <div className="bb-block-meta">Comparação visual</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          <div className="bb-rule">
            <div className="bb-rule-stage" style={{ padding: 18, background: 'var(--bg-elev)' }}>
              <div style={{ width: '70%' }}>
                <PetPhotoMock palette="lab" ratio="1/1"/>
              </div>
            </div>
            <div className="bb-rule-foot do">
              <span className="icon">✓</span>
              <span><strong>Faça —</strong> luz natural quente, fundo orgânico desfocado, grain sutil, paleta warm (amber/sage/casca).</span>
            </div>
          </div>
          <div className="bb-rule">
            <div className="bb-rule-stage" style={{ padding: 18, background: '#F4F6F9' }}>
              <div style={{ width: '70%' }}>
                <StockBadPhoto/>
              </div>
            </div>
            <div className="bb-rule-foot dont">
              <span className="icon">✕</span>
              <span><strong>Não faça —</strong> stock de jaleco branco, fundo de estúdio frio, estetoscópio como clichê médico, tons azulados.</span>
            </div>
          </div>
        </div>
      </div>

      {/* — MOOD TABLE — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Direção técnica</h3>
          <div className="bb-block-meta">Parâmetros de produção</div>
        </div>
        <table className="bb-table">
          <thead><tr><th>Aspecto</th><th>Recomendação</th><th>Evitar</th></tr></thead>
          <tbody>
            <tr>
              <td>Luz</td>
              <td>Natural · golden hour · janela difusa</td>
              <td>Flash duro · ring light · fluorescente</td>
            </tr>
            <tr>
              <td>Fundo</td>
              <td>Casa · clínica real · parque · desfocado</td>
              <td>Estúdio branco · ciclorama · backdrop liso</td>
            </tr>
            <tr>
              <td>Tonalidade</td>
              <td>Warm · amber/casca/sage · LUT analógica</td>
              <td>Frio · azul · saturação clínica</td>
            </tr>
            <tr>
              <td>Composição</td>
              <td>Assimétrica · pet no terço · breathing room</td>
              <td>Centrado · pet olhando câmera fixamente</td>
            </tr>
            <tr>
              <td>Pessoas</td>
              <td>Em ação · interação real · diversidade</td>
              <td>Sorriso forçado · pose de catálogo</td>
            </tr>
            <tr>
              <td>Pets</td>
              <td>Pets reais · raças diversas · idades variadas</td>
              <td>Apenas filhotes fofos · ilustração infantil</td>
            </tr>
            <tr>
              <td>Pós-produção</td>
              <td>Grain sutil · sombra warm · contraste médio</td>
              <td>HDR · vinheta forte · filtro Instagram</td>
            </tr>
            <tr>
              <td>Crop</td>
              <td>4:5 · 3:4 · 16:9 cinematográfico</td>
              <td>Quadrado puro sem composição</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* — TONAL PALETTE — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Paleta fotográfica</h3>
          <div className="bb-block-meta">Tons que devem dominar a imagem</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
          {[
            { name: 'Casca quente', hex: '#1B1006' },
            { name: 'Marrom terra', hex: '#4A3418' },
            { name: 'Caramelo',     hex: '#8B6F45' },
            { name: 'Dourado claro',hex: '#C9A876' },
            { name: 'Areia',        hex: '#F2E0C0' },
            { name: 'Sage discreto',hex: '#7B9E76' },
          ].map(c => (
            <div className="bb-swatch" key={c.hex}>
              <div className="bb-swatch-bar" style={{ background: c.hex, height: 72 }}/>
              <div className="bb-swatch-info" style={{ padding: '10px 12px' }}>
                <span className="bb-swatch-name" style={{ fontSize: 12 }}>{c.name}</span>
                <span className="bb-swatch-hex">{c.hex}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bb-callout info" style={{ marginTop: 18 }}>
          <strong>Como aplicar:</strong> em pós, puxar a curva para essa paleta. Tons azuis da pele/clínica
          devem ser dessaturados; tons quentes (peles, pelos, madeira, luz) realçados em <span className="bb-mono">+8 a +12</span> de saturação.
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  Icon, ICONS, IconTile, IconAnatomy,
  PetPhotoMock, VetWorkingMock, TutorMomentMock, StockBadPhoto,
  SectionIcons, SectionPhotography,
});
