// brandbook-bloco4.jsx — Illustrations (empty states, 404, onboarding) + Motion (loading, success, error)

// ════════════════════════════════════════════════════════════
//  08 · ILLUSTRATIONS — Empty states · 404 · Onboarding
// ════════════════════════════════════════════════════════════

// Reusable container for an illustrated state (illustration + caption)
function IllusCard({ title, body, action, children, bg = 'var(--bg-elev)' }) {
  return (
    <div style={{
      background: bg,
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-lg)',
      padding: 36,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
      textAlign: 'center',
      minHeight: 320,
    }}>
      <div style={{ height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 400, letterSpacing: '-0.01em', color: 'var(--text)' }}>{title}</span>
        <span style={{ fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.55 }}>{body}</span>
      </div>
      {action && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--sage)', color: '#FFFCF7',
          padding: '10px 18px', borderRadius: 9999,
          fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
        }}>{action}</div>
      )}
    </div>
  );
}

// — Empty state 1: No pets registered —
function IllusNoPets() {
  return (
    <svg viewBox="0 0 240 180" width="240" height="180" fill="none">
      {/* warm ground shadow */}
      <ellipse cx="120" cy="158" rx="78" ry="6" fill="#1B1006" opacity="0.10"/>
      {/* empty cushion */}
      <ellipse cx="120" cy="138" rx="92" ry="14" fill="var(--amber-pale)"/>
      <ellipse cx="120" cy="134" rx="80" ry="10" fill="var(--surface-2)"/>
      <path d="M40 138 Q40 122 60 122 L180 122 Q200 122 200 138" stroke="var(--border-strong)" strokeWidth="1.5" fill="none"/>
      {/* floating Kura mark with paw drop */}
      <g transform="translate(120 76)">
        <g transform="translate(-20 -34)">
          <path d="M20 44 C8 44 4 34 4 24 C4 10 12 4 20 4 C28 4 36 10 36 24 C36 34 32 44 20 44Z" fill="var(--sage)" opacity="0.18"/>
          <circle cx="20" cy="8"  r="3.5" fill="var(--sage)"/>
          <circle cx="13" cy="12" r="2.8" fill="var(--sage)" opacity="0.85"/>
          <circle cx="27" cy="12" r="2.8" fill="var(--sage)" opacity="0.85"/>
          <path d="M20 44 C8 44 4 34 4 24 C4 10 12 4 20 4 C28 4 36 10 36 24 C36 34 32 44 20 44Z" stroke="var(--sage)" strokeWidth="1.5" fill="none" opacity="0.7"/>
        </g>
      </g>
      {/* plus sign indicating "add" */}
      <g transform="translate(180 30)">
        <circle r="14" fill="var(--amber)"/>
        <path d="M-6 0 L6 0 M0 -6 L0 6" stroke="#FFFCF7" strokeWidth="2.5" strokeLinecap="round"/>
      </g>
      {/* gentle paw prints */}
      <g opacity="0.4">
        <ellipse cx="38" cy="56" rx="4" ry="3" fill="var(--sage)"/>
        <ellipse cx="32" cy="50" rx="2" ry="2" fill="var(--sage)"/>
        <ellipse cx="44" cy="50" rx="2" ry="2" fill="var(--sage)"/>
      </g>
      <g opacity="0.25">
        <ellipse cx="60" cy="92" rx="4" ry="3" fill="var(--sage)"/>
        <ellipse cx="54" cy="86" rx="2" ry="2" fill="var(--sage)"/>
        <ellipse cx="66" cy="86" rx="2" ry="2" fill="var(--sage)"/>
      </g>
    </svg>
  );
}

// — Empty state 2: No upcoming appointments —
function IllusNoAppointments() {
  return (
    <svg viewBox="0 0 240 180" width="240" height="180" fill="none">
      {/* calendar */}
      <rect x="60" y="40" width="120" height="100" rx="10" fill="var(--surface)" stroke="var(--border-strong)" strokeWidth="1.5"/>
      <rect x="60" y="40" width="120" height="22" rx="10" fill="var(--sage)"/>
      <rect x="60" y="50" width="120" height="12" fill="var(--sage)"/>
      <circle cx="85" cy="36" r="3" fill="var(--text)"/>
      <circle cx="155" cy="36" r="3" fill="var(--text)"/>
      <line x1="85" y1="30" x2="85" y2="46" stroke="var(--text)" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="155" y1="30" x2="155" y2="46" stroke="var(--text)" strokeWidth="2.5" strokeLinecap="round"/>
      {/* empty rows */}
      {[80, 96, 112, 128].map((y, i) => (
        <line key={i} x1="74" y1={y} x2="166" y2={y} stroke="var(--border)" strokeWidth="1"/>
      ))}
      <line x1="100" y1="70" x2="166" y2="70" stroke="var(--border)" strokeWidth="1"/>
      <line x1="74" y1="70" x2="166" y2="70" stroke="var(--border)" strokeWidth="1"/>
      {/* moon/zzz */}
      <g transform="translate(160 80)" opacity="0.85">
        <circle r="14" fill="var(--amber-pale)" stroke="var(--amber)" strokeWidth="1.5"/>
        <path d="M-2 -4 a8 8 0 1 0 5 14 a6 6 0 1 1 -5 -14" fill="var(--amber)"/>
      </g>
    </svg>
  );
}

// — Empty state 3: No vaccinations yet —
function IllusNoVaccines() {
  return (
    <svg viewBox="0 0 240 180" width="240" height="180" fill="none">
      {/* vaccine vial */}
      <g transform="translate(120 90)">
        <rect x="-22" y="-46" width="44" height="76" rx="6" fill="var(--sage-pale)" stroke="var(--sage)" strokeWidth="2"/>
        <rect x="-26" y="-50" width="52" height="10" rx="3" fill="var(--sage)"/>
        <rect x="-22" y="-12" width="44" height="42" fill="var(--sage)" opacity="0.25"/>
        <path d="M-22 -12 Q0 -16 22 -12" stroke="var(--sage)" strokeWidth="1.5" fill="none" opacity="0.4"/>
        {/* drops floating */}
        <circle cx="-14" cy="-2" r="2.5" fill="var(--sage)" opacity="0.4"/>
        <circle cx="6" cy="6" r="2" fill="var(--sage)" opacity="0.55"/>
        <circle cx="14" cy="-6" r="1.8" fill="var(--sage)" opacity="0.4"/>
      </g>
      {/* checkmark badge */}
      <g transform="translate(170 50)">
        <circle r="18" fill="var(--amber)"/>
        <path d="M-7 0 L-2 5 L8 -5" stroke="#FFFCF7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </g>
      {/* sparkles */}
      <g fill="var(--amber)" opacity="0.7">
        <path d="M60 60 l2 0 l-1 -2 l-1 2 z M60 60 l0 2 l2 -1 l-2 -1 z M60 60 l0 -2 l-2 1 l2 1 z M60 60 l-2 0 l1 2 l1 -2 z"/>
        <path d="M50 110 l2 0 l-1 -2 l-1 2 z M50 110 l0 2 l2 -1 l-2 -1 z M50 110 l0 -2 l-2 1 l2 1 z M50 110 l-2 0 l1 2 l1 -2 z"/>
      </g>
    </svg>
  );
}

// — 404 lost pet —
function Illus404() {
  return (
    <svg viewBox="0 0 360 200" width="360" height="200" fill="none">
      {/* number 4 */}
      <text x="40" y="155" fill="var(--sage)" style={{ font: '400 160px var(--font-display)' }} letterSpacing="-0.04em">4</text>
      {/* pet head as 0 */}
      <g transform="translate(180 100)">
        <circle r="60" fill="var(--sage)"/>
        <ellipse cx="-40" cy="-40" rx="14" ry="22" fill="var(--sage)" transform="rotate(-20)"/>
        <ellipse cx="40" cy="-40" rx="14" ry="22" fill="var(--sage)" transform="rotate(20)"/>
        <ellipse cx="-40" cy="-38" rx="7" ry="13" fill="var(--amber-pale)" transform="rotate(-20)"/>
        <ellipse cx="40" cy="-38" rx="7" ry="13" fill="var(--amber-pale)" transform="rotate(20)"/>
        <ellipse cx="0" cy="12" rx="24" ry="18" fill="#F8F2E6"/>
        <circle cx="-18" cy="-8" r="5" fill="#1B1006"/>
        <circle cx="18" cy="-8" r="5" fill="#1B1006"/>
        <circle cx="-17" cy="-9" r="1.4" fill="#FFFCF7"/>
        <circle cx="19" cy="-9" r="1.4" fill="#FFFCF7"/>
        <ellipse cx="0" cy="0" rx="5" ry="4" fill="#1B1006"/>
        {/* sad mouth */}
        <path d="M-8 18 Q0 14 8 18" stroke="#1B1006" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </g>
      {/* number 4 second */}
      <text x="280" y="155" fill="var(--sage)" style={{ font: '400 160px var(--font-display)' }} letterSpacing="-0.04em">4</text>
      {/* paws scattered */}
      <g fill="var(--amber)" opacity="0.55">
        <ellipse cx="80" cy="40" rx="4" ry="3"/>
        <ellipse cx="74" cy="34" rx="2" ry="2"/>
        <ellipse cx="86" cy="34" rx="2" ry="2"/>
      </g>
      <g fill="var(--amber)" opacity="0.4">
        <ellipse cx="300" cy="40" rx="4" ry="3"/>
        <ellipse cx="294" cy="34" rx="2" ry="2"/>
        <ellipse cx="306" cy="34" rx="2" ry="2"/>
      </g>
      <g fill="var(--sage)" opacity="0.35">
        <ellipse cx="40" cy="180" rx="4" ry="3"/>
        <ellipse cx="34" cy="174" rx="2" ry="2"/>
        <ellipse cx="46" cy="174" rx="2" ry="2"/>
      </g>
    </svg>
  );
}

// — Onboarding 1: SOAP medical record —
function IllusOnboardingRecord() {
  return (
    <svg viewBox="0 0 240 180" width="240" height="180" fill="none">
      {/* paper */}
      <rect x="48" y="20" width="120" height="150" rx="6" fill="var(--surface)" stroke="var(--border-strong)" strokeWidth="1.5"/>
      <rect x="48" y="20" width="120" height="28" fill="var(--sage)"/>
      <text x="60" y="38" fill="#FFFCF7" style={{ font: '500 11px var(--font-mono)', letterSpacing: '0.16em' }}>SOAP · BÓBI</text>
      {/* SOAP letters */}
      {['S', 'O', 'A', 'P'].map((letter, i) => (
        <g key={letter} transform={`translate(60 ${70 + i * 26})`}>
          <circle r="9" fill="var(--sage-pale)"/>
          <text x="0" y="3" textAnchor="middle" fill="var(--sage)" style={{ font: '500 11px var(--font-mono)', letterSpacing: '0' }}>{letter}</text>
          <line x1="14" y1="0" x2="86" y2="0" stroke="var(--border)" strokeWidth="1.5"/>
          <line x1="14" y1="6" x2="64" y2="6" stroke="var(--border)" strokeWidth="1.5"/>
        </g>
      ))}
      {/* pet floating mark */}
      <g transform="translate(184 50)">
        <circle r="22" fill="var(--amber-pale)" stroke="var(--amber)" strokeWidth="1.5"/>
        <g transform="translate(-14 -16)">
          <path d="M14 28 C2 28 0 22 0 16 C0 6 6 2 14 2 C22 2 28 6 28 16 C28 22 26 28 14 28Z" fill="var(--amber)" opacity="0.3"/>
          <circle cx="14" cy="6" r="2.5" fill="var(--amber)"/>
          <circle cx="9" cy="9" r="2" fill="var(--amber)" opacity="0.85"/>
          <circle cx="19" cy="9" r="2" fill="var(--amber)" opacity="0.85"/>
        </g>
      </g>
    </svg>
  );
}

// — Onboarding 2: Vaccine reminder —
function IllusOnboardingVaccine() {
  return (
    <svg viewBox="0 0 240 180" width="240" height="180" fill="none">
      {/* phone */}
      <rect x="86" y="20" width="78" height="140" rx="12" fill="var(--surface)" stroke="var(--border-strong)" strokeWidth="1.5"/>
      <rect x="86" y="20" width="78" height="22" rx="12" fill="var(--bg-sunk)"/>
      <rect x="92" y="50" width="66" height="36" rx="6" fill="var(--amber-pale)" stroke="var(--amber)" strokeWidth="1"/>
      <text x="125" y="64" textAnchor="middle" fill="var(--amber)" style={{ font: '500 9px var(--font-mono)', letterSpacing: '0.16em' }}>VACINA · V10</text>
      <text x="125" y="78" textAnchor="middle" fill="var(--text)" style={{ font: '500 11px var(--font-body)' }}>Em 7 dias</text>
      <rect x="92" y="94" width="66" height="10" rx="2" fill="var(--bg-sunk)"/>
      <rect x="92" y="108" width="50" height="10" rx="2" fill="var(--bg-sunk)"/>
      <rect x="92" y="122" width="66" height="20" rx="10" fill="var(--sage)"/>
      <text x="125" y="135" textAnchor="middle" fill="#FFFCF7" style={{ font: '500 9px var(--font-body)' }}>Agendar</text>
      {/* notification ping */}
      <g transform="translate(160 38)">
        <circle r="10" fill="var(--clay)"/>
        <circle r="10" fill="none" stroke="var(--clay)" strokeWidth="1.5" opacity="0.4"/>
        <circle r="14" fill="none" stroke="var(--clay)" strokeWidth="1" opacity="0.25"/>
        <path d="M-4 -2 a4 4 0 0 1 8 0 v4 l1 1 h-10 l1 -1 v-4 z M-1 4 a2 2 0 0 0 2 0" stroke="#FFFCF7" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
}

// — Onboarding 3: Luna AI camera —
function IllusOnboardingLuna() {
  return (
    <svg viewBox="0 0 240 180" width="240" height="180" fill="none">
      {/* viewfinder */}
      <rect x="40" y="30" width="160" height="120" rx="12" fill="var(--surface-2)" stroke="var(--border-strong)" strokeWidth="1.5"/>
      <rect x="40" y="30" width="160" height="120" rx="12" fill="var(--amber-pale)" opacity="0.4"/>
      {/* corner brackets */}
      {[[52,42,'tl'], [188,42,'tr'], [52,138,'bl'], [188,138,'br']].map(([x, y, b], i) => (
        <g key={i} stroke="var(--amber)" strokeWidth="2" fill="none" strokeLinecap="round">
          {b.includes('t') && <line x1={x} y1={y} x2={b.includes('l') ? x+14 : x-14} y2={y}/>}
          {b.includes('b') && <line x1={x} y1={y} x2={b.includes('l') ? x+14 : x-14} y2={y}/>}
          {b.includes('l') && <line x1={x} y1={y} x2={x} y2={b.includes('t') ? y+14 : y-14}/>}
          {b.includes('r') && <line x1={x} y1={y} x2={x} y2={b.includes('t') ? y+14 : y-14}/>}
        </g>
      ))}
      {/* pet inside */}
      <g transform="translate(120 92)">
        <circle r="32" fill="var(--sage)"/>
        <ellipse cx="-22" cy="-22" rx="8" ry="12" fill="var(--sage)" transform="rotate(-22)"/>
        <ellipse cx="22" cy="-22" rx="8" ry="12" fill="var(--sage)" transform="rotate(22)"/>
        <ellipse cx="0" cy="6" rx="14" ry="10" fill="#F8F2E6"/>
        <circle cx="-10" cy="-4" r="2.6" fill="#1B1006"/>
        <circle cx="10" cy="-4" r="2.6" fill="#1B1006"/>
        <ellipse cx="0" cy="0" rx="3" ry="2.5" fill="#1B1006"/>
      </g>
      {/* scan line */}
      <line x1="40" y1="90" x2="200" y2="90" stroke="var(--amber)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
      {/* mono badge */}
      <rect x="56" y="58" width="56" height="14" rx="3" fill="rgba(27,16,6,0.7)"/>
      <text x="84" y="68" textAnchor="middle" fill="#FBF0DB" style={{ font: '500 8px var(--font-mono)', letterSpacing: '0.16em' }}>LUNA · 92%</text>
      <text x="84" y="160" textAnchor="middle" fill="var(--text-mute)" style={{ font: '500 9px var(--font-mono)', letterSpacing: '0.16em' }}>RAÇA · LABRADOR</text>
    </svg>
  );
}

function SectionIllustrations() {
  return (
    <section className="bb-section" id="illustrations">
      <div className="bb-section-head">
        <div className="bb-section-eyebrow">
          <span className="bb-section-num">08 · Ilustrações de produto</span>
          <span className="bb-section-tag">Empty states · 404 · Onboarding</span>
        </div>
        <h2 className="bb-section-title">Ilustrações para <em>estados</em>.</h2>
        <p className="bb-section-lede">
          Ilustrações com tom warm e leve — empty states convidam à ação, 404 alivia a frustração, onboarding
          explica features-chave com calor humano. Nunca infantis. Sempre apoiadas em paleta Kura.
        </p>
      </div>

      {/* — EMPTY STATES — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Empty states</h3>
          <div className="bb-block-meta">3 cenas · convite à ação</div>
        </div>
        <div className="bb-grid-3">
          <IllusCard
            title="Sem pets cadastrados"
            body="Adicione seu primeiro pet para começar a registrar o cuidado dele."
            action="+ Cadastrar pet"
          ><IllusNoPets/></IllusCard>
          <IllusCard
            title="Agenda vazia"
            body="Nenhuma consulta agendada. Que tal marcar o check-up anual?"
            action="Agendar consulta"
          ><IllusNoAppointments/></IllusCard>
          <IllusCard
            title="Carteirinha em branco"
            body="Registre vacinas para receber lembretes automáticos antes do vencimento."
            action="+ Registrar vacina"
          ><IllusNoVaccines/></IllusCard>
        </div>
      </div>

      {/* — 404 — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">404 · Página não encontrada</h3>
          <div className="bb-block-meta">Pet perdido procurando · tom leve</div>
        </div>
        <div className="bb-spec">
          <div className="bb-spec-stage no-grid" style={{ minHeight: 320, padding: 48, flexDirection: 'column', gap: 24 }}>
            <Illus404/>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 400, letterSpacing: '-0.01em', color: 'var(--text)' }}>Esta página fugiu de casa.</span>
              <span style={{ fontSize: 14, color: 'var(--text-soft)', maxWidth: 480, textAlign: 'center', lineHeight: 1.55 }}>Procuramos por todos os cantos e nada. Volte ao início e a gente cuida do resto.</span>
              <div style={{
                marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--sage)', color: '#FFFCF7',
                padding: '12px 24px', borderRadius: 9999,
                fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
              }}>← Voltar ao início</div>
            </div>
          </div>
          <div className="bb-spec-foot">
            <span className="label">404 · página perdida</span>
            <span className="dim">USO · ROUTING ERROR</span>
          </div>
        </div>
      </div>

      {/* — ONBOARDING — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Onboarding · 3 features chave</h3>
          <div className="bb-block-meta">Sequência inicial · 3 telas</div>
        </div>
        <div className="bb-grid-3">
          <IllusCard
            title="Prontuário sempre acessível"
            body="Histórico SOAP completo do seu pet — consultas, exames e medicamentos em um único lugar."
            bg="var(--bg-elev)"
          ><IllusOnboardingRecord/></IllusCard>
          <IllusCard
            title="Lembretes que importam"
            body="Avise antes que a vacina vença. Notificações 7, 3 e 1 dia antes — você decide o ritmo."
            bg="var(--bg-elev)"
          ><IllusOnboardingVaccine/></IllusCard>
          <IllusCard
            title="Luna · IA de triagem"
            body="Aponte a câmera, identifique a raça e tenha uma análise preliminar antes da consulta."
            bg="var(--bg-elev)"
          ><IllusOnboardingLuna/></IllusCard>
        </div>
      </div>

      {/* — STYLE GUIDE — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Diretrizes de ilustração</h3>
          <div className="bb-block-meta">Princípios visuais</div>
        </div>
        <table className="bb-table">
          <thead><tr><th>Aspecto</th><th>Recomendação</th><th>Evitar</th></tr></thead>
          <tbody>
            <tr><td>Estilo</td><td>Flat com pequenas texturas warm</td><td>Cartoon infantil · 3D · realista</td></tr>
            <tr><td>Cores</td><td>Sage primário · amber como acento · areia de base</td><td>Cores fora da paleta · saturação excessiva</td></tr>
            <tr><td>Composição</td><td>Centrada · respiração ampla · 1 elemento focal</td><td>Múltiplos focos · cena lotada</td></tr>
            <tr><td>Tom emocional</td><td>Acolhedor · gentilmente otimista</td><td>Triste · dramático · frustrante</td></tr>
            <tr><td>Linhas</td><td>Stroke 1.5–2 px · cantos arredondados</td><td>Pontas afiadas · stroke variável</td></tr>
            <tr><td>Tamanho</td><td>180–240 px de altura no canvas da ilustração</td><td>Ilustrações pequenas demais ou cheias da tela</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════
//  09 · MOTION & MICRO-INTERACTIONS
// ════════════════════════════════════════════════════════════

// CSS for the animations is injected once on mount
function MotionStyles() {
  return (
    <style>{`
      /* Loading heart pulse */
      @keyframes bb-pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50%      { transform: scale(1.18); opacity: 0.7; }
      }
      .bb-anim-pulse { animation: bb-pulse 1.2s var(--ease) infinite; transform-origin: center; }

      /* Loading ring */
      @keyframes bb-rotate { to { transform: rotate(360deg); } }
      .bb-anim-rotate { animation: bb-rotate 1.4s linear infinite; transform-origin: center; }

      /* Success bounce */
      @keyframes bb-bounce-in {
        0%   { transform: scale(0.4); opacity: 0; }
        45%  { transform: scale(1.18); opacity: 1; }
        70%  { transform: scale(0.92); }
        100% { transform: scale(1); }
      }
      .bb-anim-bounce { animation: bb-bounce-in 0.7s var(--ease) both; animation-iteration-count: infinite; animation-duration: 2.2s; transform-origin: center; }

      /* Checkmark draw */
      @keyframes bb-draw {
        0%   { stroke-dashoffset: 60; }
        45%  { stroke-dashoffset: 60; }
        90%, 100% { stroke-dashoffset: 0; }
      }
      .bb-anim-check { stroke-dasharray: 60; animation: bb-draw 2.2s var(--ease) infinite; }

      /* Error shake */
      @keyframes bb-shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-6px); }
        20%, 40%, 60%, 80% { transform: translateX(6px); }
      }
      .bb-anim-shake { animation: bb-shake 0.6s var(--ease) infinite; animation-iteration-count: infinite; animation-duration: 2s; }

      /* Toast slide */
      @keyframes bb-toast-in {
        0%   { transform: translateY(20px); opacity: 0; }
        15%  { transform: translateY(0); opacity: 1; }
        80%  { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-12px); opacity: 0; }
      }
      .bb-anim-toast { animation: bb-toast-in 3s var(--ease) infinite; }

      /* Skeleton shimmer */
      @keyframes bb-shimmer {
        0%   { background-position: -200px 0; }
        100% { background-position: 220px 0; }
      }
      .bb-anim-shimmer {
        background-image: linear-gradient(90deg, var(--bg-sunk) 0%, var(--surface-2) 50%, var(--bg-sunk) 100%);
        background-size: 220px 100%;
        background-repeat: no-repeat;
        animation: bb-shimmer 1.6s linear infinite;
      }
    `}</style>
  );
}

// — Loading: pulsing heart with Kura mark
function LoadingHeart() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="bb-anim-pulse">
        <KuraMark size={80} color="var(--sage)" fillOpacity={0.22} />
      </div>
    </div>
  );
}

// — Loading: rotating ring
function LoadingRing() {
  return (
    <div className="bb-anim-rotate" style={{ width: 80, height: 80 }}>
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
        <circle cx="40" cy="40" r="32" stroke="var(--sage-pale)" strokeWidth="4"/>
        <path d="M40 8 a32 32 0 0 1 32 32" stroke="var(--sage)" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

// — Loading: skeleton (shimmer)
function LoadingSkeleton() {
  return (
    <div style={{ width: 260, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div className="bb-anim-shimmer" style={{ width: 56, height: 56, borderRadius: '50%' }}/>
      <div className="bb-anim-shimmer" style={{ width: '70%', height: 14, borderRadius: 4, marginTop: 6 }}/>
      <div className="bb-anim-shimmer" style={{ width: '90%', height: 10, borderRadius: 4 }}/>
      <div className="bb-anim-shimmer" style={{ width: '50%', height: 10, borderRadius: 4 }}/>
    </div>
  );
}

// — Success: bouncy checkmark
function SuccessCheck() {
  return (
    <div className="bb-anim-bounce" style={{ display: 'inline-flex' }}>
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
        <circle cx="40" cy="40" r="36" fill="var(--sage)"/>
        <path className="bb-anim-check" d="M22 42 L34 54 L58 28" stroke="#FFFCF7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

// — Error: shaking alert
function ErrorShake() {
  return (
    <div className="bb-anim-shake" style={{ display: 'inline-flex' }}>
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
        <circle cx="40" cy="40" r="36" fill="var(--clay)"/>
        <path d="M40 22 L40 44" stroke="#FFFCF7" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="40" cy="54" r="4" fill="#FFFCF7"/>
      </svg>
    </div>
  );
}

// — Toast: slide in/out
function ToastNotification() {
  return (
    <div className="bb-anim-toast" style={{
      display: 'inline-flex', alignItems: 'center', gap: 12,
      background: 'var(--text)', color: 'var(--bg-elev)',
      padding: '14px 18px', borderRadius: 12,
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
      minWidth: 280,
    }}>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--sage-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"/>
        <circle cx="12" cy="12" r="9"/>
      </svg>
      <span>Vacina V10 agendada para Bóbi</span>
      <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.6, letterSpacing: '0.1em' }}>↗</span>
    </div>
  );
}

function MotionCard({ label, spec, children, bg = 'var(--bg-elev)' }) {
  return (
    <div className="bb-spec">
      <div className="bb-spec-stage no-grid" style={{ minHeight: 220, background: bg, padding: 32 }}>
        {children}
      </div>
      <div className="bb-spec-foot">
        <span className="label">{label}</span>
        <span className="dim">{spec}</span>
      </div>
    </div>
  );
}

function SectionMotion() {
  return (
    <section className="bb-section" id="motion">
      <div className="bb-section-head">
        <div className="bb-section-eyebrow">
          <span className="bb-section-num">09 · Motion · Micro-interactions</span>
          <span className="bb-section-tag">Loading · Success · Error · Toast · Skeleton</span>
        </div>
        <h2 className="bb-section-title">Movimento <em>sutil</em>.</h2>
        <p className="bb-section-lede">
          Animações da Kura têm peso emocional, não acrobático. Easing único, durações curtas, sempre com
          propósito: comunicar estado, não decorar.
        </p>
      </div>

      <MotionStyles/>

      {/* — TIMING & EASING — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Tokens de movimento</h3>
          <div className="bb-block-meta">Durações · easing único</div>
        </div>
        <table className="bb-table">
          <thead><tr><th>Token</th><th>Valor</th><th>Quando usar</th></tr></thead>
          <tbody>
            <tr><td className="mono">--d-fast</td><td className="mono">140 ms</td><td>Hover · focus · estados instantâneos</td></tr>
            <tr><td className="mono">--d-base</td><td className="mono">220 ms</td><td>Transições padrão · expand/collapse</td></tr>
            <tr><td className="mono">--d-slow</td><td className="mono">400 ms</td><td>Sheets · modais · transições de tela</td></tr>
            <tr><td className="mono">Loading pulse</td><td className="mono">1200 ms</td><td>Estado de espera leve</td></tr>
            <tr><td className="mono">Success bounce</td><td className="mono">700 ms</td><td>Confirmação de ação</td></tr>
            <tr><td className="mono">Toast lifecycle</td><td className="mono">3000 ms</td><td>Slide-in · hold 2.4s · slide-out</td></tr>
            <tr><td className="mono">--ease</td><td className="mono">cubic-bezier(.2, .8, .2, 1)</td><td>Easing único para TODA animação</td></tr>
          </tbody>
        </table>
      </div>

      {/* — LOADING — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Loading · 3 variantes</h3>
          <div className="bb-block-meta">Heart pulse · ring · skeleton</div>
        </div>
        <div className="bb-grid-3">
          <MotionCard label="Coração pulsando" spec="MARCA KURA · 1200ms · loop">
            <LoadingHeart/>
          </MotionCard>
          <MotionCard label="Ring spinner" spec="UI GERAL · 1400ms · linear">
            <LoadingRing/>
          </MotionCard>
          <MotionCard label="Skeleton shimmer" spec="CARREGAMENTO DE LISTAS · 1600ms">
            <LoadingSkeleton/>
          </MotionCard>
        </div>
        <div className="bb-callout" style={{ marginTop: 18 }}>
          <strong>Quando usar cada:</strong> <span className="bb-mono">heart</span> para carregamentos de marca
          (splash, sync inicial); <span className="bb-mono">ring</span> para qualquer ação dentro da UI;
          <span className="bb-mono"> skeleton</span> para listas e cards que serão preenchidos com conteúdo.
        </div>
      </div>

      {/* — FEEDBACK STATES — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Feedback · success & error</h3>
          <div className="bb-block-meta">Bounce sutil · shake controlado</div>
        </div>
        <div className="bb-grid-2">
          <MotionCard label="Success · checkmark bounce" spec="700ms · ESCALA 0.4 → 1.18 → 1" bg="var(--bg-elev)">
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <SuccessCheck/>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, color: 'var(--text)' }}>Vacina registrada</span>
                <span style={{ fontSize: 12, color: 'var(--text-soft)' }}>Próximo lembrete em 12 meses</span>
              </div>
            </div>
          </MotionCard>
          <MotionCard label="Error · shake horizontal" spec="600ms · ±6px · NÃO REPETIR EM PRODUÇÃO" bg="var(--bg-elev)">
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <ErrorShake/>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, color: 'var(--text)' }}>CPF inválido</span>
                <span style={{ fontSize: 12, color: 'var(--text-soft)' }}>Verifique o número e tente novamente</span>
              </div>
            </div>
          </MotionCard>
        </div>
      </div>

      {/* — TOAST — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Toast · notificação não-bloqueante</h3>
          <div className="bb-block-meta">Slide up · hold · slide out · 3s total</div>
        </div>
        <div className="bb-spec">
          <div className="bb-spec-stage no-grid" style={{ minHeight: 200, padding: 48, background: 'var(--bg-sunk)' }}>
            <ToastNotification/>
          </div>
          <div className="bb-spec-foot">
            <span className="label">Toast · feedback de ação</span>
            <span className="dim">BOTTOM-CENTER · MOBILE · TOP-RIGHT DESKTOP</span>
          </div>
        </div>
      </div>

      {/* — PRINCIPLES — */}
      <div className="bb-block">
        <div className="bb-block-head">
          <h3 className="bb-block-title">Princípios de motion</h3>
          <div className="bb-block-meta">5 regras</div>
        </div>
        <div className="bb-grid-2">
          <div className="bb-callout">
            <strong>01 · Sutil sempre.</strong> Movimento confirma estado, nunca rouba a cena. Se a animação
            está chamando atenção, está errada.
          </div>
          <div className="bb-callout">
            <strong>02 · Easing único.</strong> Toda animação usa <span className="bb-mono">cubic-bezier(.2, .8, .2, 1)</span>.
            Nada de bounce overshoot, nada de linear (exceto loaders).
          </div>
          <div className="bb-callout">
            <strong>03 · Rápida no input.</strong> Hover, focus e click respondem em <span className="bb-mono">≤ 140ms</span>.
            Latência percebida é interface ruim.
          </div>
          <div className="bb-callout">
            <strong>04 · Estados duráveis ficam quietos.</strong> Loaders e skeletons só animam enquanto a
            espera é real. Nada deve ficar pulsando "decorativamente".
          </div>
          <div className="bb-callout warn">
            <strong>05 · Respeite prefers-reduced-motion.</strong> Toda animação tem fallback estático para
            usuários com sensibilidade vestibular. Não é opcional.
          </div>
          <div className="bb-callout info">
            <strong>+ Critério.</strong> Se você precisa explicar a animação, ela está fazendo trabalho a mais.
            Animação boa é invisível — só "se sente".
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  IllusCard,
  IllusNoPets, IllusNoAppointments, IllusNoVaccines,
  Illus404, IllusOnboardingRecord, IllusOnboardingVaccine, IllusOnboardingLuna,
  LoadingHeart, LoadingRing, LoadingSkeleton, SuccessCheck, ErrorShake, ToastNotification,
  SectionIllustrations, SectionMotion,
});
