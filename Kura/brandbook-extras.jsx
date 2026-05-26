// brandbook-extras.jsx — Mascote (3 direções), LinkedIn carousel (5 cards), Deck master (5 layouts).

// ════════════════════════════════════════════════════════════
//  MASCOTE — 3 direções flat/geométrico, paleta sage
// ════════════════════════════════════════════════════════════

// Direction 1: "Bóbi" — geometric dog, full body, soft circles
function MascotBobi({ size = 220 }) {
  return (
    <svg viewBox="0 0 200 240" width={size} height={size * 240/200} fill="none">
      {/* shadow */}
      <ellipse cx="100" cy="222" rx="58" ry="6" fill="#1B1006" opacity="0.10"/>
      {/* body */}
      <ellipse cx="100" cy="160" rx="56" ry="50" fill="var(--sage)"/>
      <ellipse cx="100" cy="158" rx="48" ry="40" fill="var(--sage-light)" opacity="0.55"/>
      {/* legs */}
      <rect x="68"  y="190" width="18" height="34" rx="9" fill="var(--sage)"/>
      <rect x="114" y="190" width="18" height="34" rx="9" fill="var(--sage)"/>
      {/* tail */}
      <path d="M155 145 Q176 130 168 110" stroke="var(--sage)" strokeWidth="14" strokeLinecap="round" fill="none"/>
      {/* head */}
      <circle cx="100" cy="100" r="50" fill="var(--sage)"/>
      <circle cx="100" cy="100" r="42" fill="var(--sage-light)" opacity="0.5"/>
      {/* ears */}
      <ellipse cx="62" cy="80" rx="14" ry="26" fill="var(--sage)" transform="rotate(-22 62 80)"/>
      <ellipse cx="138" cy="80" rx="14" ry="26" fill="var(--sage)" transform="rotate(22 138 80)"/>
      <ellipse cx="62" cy="82" rx="7" ry="14" fill="var(--amber-pale)" transform="rotate(-22 62 82)"/>
      <ellipse cx="138" cy="82" rx="7" ry="14" fill="var(--amber-pale)" transform="rotate(22 138 82)"/>
      {/* snout */}
      <ellipse cx="100" cy="115" rx="24" ry="18" fill="#F8F2E6"/>
      <ellipse cx="100" cy="102" rx="5" ry="4" fill="#1B1006"/>
      <path d="M100 106 L100 116 M100 116 Q92 122 88 118 M100 116 Q108 122 112 118" stroke="#1B1006" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* eyes */}
      <circle cx="82" cy="92" r="4.5" fill="#1B1006"/>
      <circle cx="118" cy="92" r="4.5" fill="#1B1006"/>
      <circle cx="83" cy="91" r="1.2" fill="#FFFCF7"/>
      <circle cx="119" cy="91" r="1.2" fill="#FFFCF7"/>
      {/* amber collar */}
      <ellipse cx="100" cy="138" rx="38" ry="6" fill="var(--amber)"/>
      <circle cx="100" cy="144" r="5" fill="var(--amber)"/>
      <KuraMarkInline cx="100" cy="144" size={6}/>
    </svg>
  );
}

// Inline mini mark for badges
function KuraMarkInline({ cx, cy, size = 6 }) {
  const s = size;
  return (
    <g transform={`translate(${cx - s} ${cy - s*1.2}) scale(${s/4})`}>
      <circle cx="2" cy="0.6" r="0.5" fill="#FFFCF7"/>
      <circle cx="0.8" cy="1.2" r="0.4" fill="#FFFCF7" opacity="0.9"/>
      <circle cx="3.2" cy="1.2" r="0.4" fill="#FFFCF7" opacity="0.9"/>
    </g>
  );
}

// Direction 2: "Luna" — minimalist cat, single sage shape + amber accents
function MascotLuna({ size = 220 }) {
  return (
    <svg viewBox="0 0 200 240" width={size} height={size * 240/200} fill="none">
      <ellipse cx="100" cy="222" rx="62" ry="6" fill="#1B1006" opacity="0.10"/>
      {/* sitting body silhouette */}
      <path d="M100 80
               C 70 80 56 110 56 140
               C 56 175 70 215 100 215
               C 130 215 144 175 144 140
               C 144 110 130 80 100 80 Z"
            fill="var(--sage)"/>
      {/* ears */}
      <path d="M62 88 L52 50 L88 70 Z" fill="var(--sage)"/>
      <path d="M138 88 L148 50 L112 70 Z" fill="var(--sage)"/>
      <path d="M62 86 L58 60 L80 70 Z" fill="var(--amber)" opacity="0.85"/>
      <path d="M138 86 L142 60 L120 70 Z" fill="var(--amber)" opacity="0.85"/>
      {/* eyes (closed, content - amber arcs) */}
      <path d="M76 116 Q86 110 96 116" stroke="var(--amber)" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d="M104 116 Q114 110 124 116" stroke="var(--amber)" strokeWidth="4" strokeLinecap="round" fill="none"/>
      {/* nose + smile */}
      <path d="M97 130 L103 130 L100 134 Z" fill="var(--amber)"/>
      <path d="M100 134 Q94 140 90 138 M100 134 Q106 140 110 138" stroke="#1B1006" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6"/>
      {/* whisker dots */}
      <circle cx="78" cy="138" r="1.5" fill="#1B1006" opacity="0.5"/>
      <circle cx="122" cy="138" r="1.5" fill="#1B1006" opacity="0.5"/>
      {/* front paws */}
      <ellipse cx="80" cy="208" rx="14" ry="8" fill="var(--sage-light)"/>
      <ellipse cx="120" cy="208" rx="14" ry="8" fill="var(--sage-light)"/>
      {/* tail curling around */}
      <path d="M144 200 Q170 200 168 175 Q166 155 148 162" stroke="var(--sage)" strokeWidth="14" strokeLinecap="round" fill="none"/>
      {/* tail tip */}
      <circle cx="148" cy="162" r="7" fill="var(--amber)"/>
    </svg>
  );
}

// Direction 3: "Heart-pawprint" — abstract, no animal, mark-as-mascot
function MascotAbstract({ size = 220 }) {
  return (
    <svg viewBox="0 0 200 240" width={size} height={size * 240/200} fill="none">
      <ellipse cx="100" cy="222" rx="62" ry="6" fill="#1B1006" opacity="0.10"/>
      {/* big leaf body */}
      <path d="M100 220
               C 50 220 30 170 30 130
               C 30 75 70 30 100 30
               C 130 30 170 75 170 130
               C 170 170 150 220 100 220 Z"
            fill="var(--sage)"/>
      {/* face: minimal */}
      {/* paws as cluster on top */}
      <circle cx="100" cy="60" r="14" fill="#FFFCF7"/>
      <circle cx="72"  cy="78" r="10" fill="#FFFCF7" opacity="0.95"/>
      <circle cx="128" cy="78" r="10" fill="#FFFCF7" opacity="0.95"/>
      {/* smile - amber */}
      <path d="M82 150 Q100 168 118 150" stroke="var(--amber)" strokeWidth="6" strokeLinecap="round" fill="none"/>
      {/* small eye dots */}
      <circle cx="82" cy="120" r="4" fill="#1B1006"/>
      <circle cx="118" cy="120" r="4" fill="#1B1006"/>
      <circle cx="83" cy="119" r="1.2" fill="#FFFCF7"/>
      <circle cx="119" cy="119" r="1.2" fill="#FFFCF7"/>
      {/* central stem */}
      <path d="M100 200 L100 175" stroke="#FFFCF7" strokeWidth="2" opacity="0.4" strokeLinecap="round"/>
    </svg>
  );
}

function SectionMascot() {
  return (
    <section className="bb-section" id="mascot">
      <div className="bb-section-head">
        <div className="bb-section-eyebrow">
          <span className="bb-section-num">03 · Mascote · Exploração</span>
          <span className="bb-section-tag">Opcional · Marketing & comunidade</span>
        </div>
        <h2 className="bb-section-title">Três direções de <em>mascote</em>.</h2>
        <p className="bb-section-lede">
          Personagens flat/geométricos com sage como cor primária. Uso recomendado em materiais educativos,
          gamificação e comunicação com tutores — nunca dentro da UI clínica.
        </p>
      </div>
      <div className="bb-grid-3">
        <div className="bb-mascot-card">
          <div className="bb-mascot-stage"><MascotBobi size={240}/></div>
          <div className="bb-mascot-info">
            <span className="bb-mono" style={{ color: 'var(--amber)' }}>DIREÇÃO 01 · CARÁTER</span>
            <span className="bb-mascot-name">Bóbi · cão completo</span>
            <span className="bb-mascot-desc">Personagem mais ilustrativo. Cabeça + corpo + coleira amber. Indicado para tutoriais, e-mail marketing e onboarding.</span>
          </div>
        </div>
        <div className="bb-mascot-card">
          <div className="bb-mascot-stage" style={{ background: 'var(--bg)' }}><MascotLuna size={240}/></div>
          <div className="bb-mascot-info">
            <span className="bb-mono" style={{ color: 'var(--amber)' }}>DIREÇÃO 02 · MINIMAL</span>
            <span className="bb-mascot-name">Luna · gato silhueta</span>
            <span className="bb-mascot-desc">Forma única, leitura imediata. Funciona como ícone, sticker e elemento de loading. Conecta com a IA Luna.</span>
          </div>
        </div>
        <div className="bb-mascot-card">
          <div className="bb-mascot-stage" style={{ background: 'var(--amber-pale)' }}><MascotAbstract size={240}/></div>
          <div className="bb-mascot-info">
            <span className="bb-mono" style={{ color: 'var(--amber)' }}>DIREÇÃO 03 · ABSTRATO</span>
            <span className="bb-mascot-name">Kuru · folha-mascote</span>
            <span className="bb-mascot-desc">Extensão direta do símbolo. Fica entre marca e personagem. Ideal para empty states, badges e gamificação leve.</span>
          </div>
        </div>
      </div>
      <div className="bb-callout warn" style={{ marginTop: 24 }}>
        <strong>Não usar dentro da UI clínica.</strong> O mascote vive em comunicação tutor (B2C) e materiais
        educativos. No produto B2B (Kura Clínica), prevalece a marca tipográfica e o sistema sóbrio.
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════
//  LINKEDIN CAROUSEL — 5 cards (1080×1080)
// ════════════════════════════════════════════════════════════

function LiCard({ children, idx, total = 5, bg = 'var(--bg)', kicker, footer }) {
  return (
    <div style={{ width: 1080, height: 1080, background: bg, position: 'relative', padding: 80, fontFamily: 'var(--font-body)', overflow: 'hidden' }}>
      {/* header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <KuraMark size={48} color="var(--sage)"/>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--text)' }}>Ku<em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>ra</em></span>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 18, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-mute)' }}>
          {String(idx).padStart(2,'0')} / {String(total).padStart(2,'0')}
        </span>
      </div>
      {kicker && (
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 20, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'var(--amber)', marginBottom: 28,
        }}>{kicker}</div>
      )}
      {children}
      {footer && (
        <div style={{
          position: 'absolute', left: 80, right: 80, bottom: 64,
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          fontFamily: 'var(--font-mono)', fontSize: 18, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--text-mute)',
        }}>{footer}</div>
      )}
    </div>
  );
}

function LiCard1() {
  return (
    <LiCard idx={1} bg="var(--bg)" footer={<><span>FIAP CHALLENGE 2026</span><span style={{ color: 'var(--sage)' }}>→ Arraste</span></>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 110 }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 132, lineHeight: 0.95,
          letterSpacing: '-0.022em', color: 'var(--text)', fontWeight: 400,
        }}>O cuidado<br/><em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>registrado</em>.</span>
        <span style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 44,
          fontWeight: 300, color: 'var(--text-soft)', maxWidth: 800, lineHeight: 1.25,
        }}>Como construímos uma plataforma para o terceiro maior mercado pet do mundo.</span>
      </div>
    </LiCard>
  );
}

function LiCard2() {
  return (
    <LiCard idx={2} bg="var(--bg-elev)" kicker="O Problema · Continuidade" footer={<><span>02 · PROBLEMA</span><span>KURA · CLYVO VET</span></>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 90, lineHeight: 1.02,
          letterSpacing: '-0.02em', color: 'var(--text)', fontWeight: 400, maxWidth: 900,
        }}>O pet desaparece do <em style={{ fontStyle: 'italic', color: 'var(--clay)' }}>radar</em> entre consultas.</span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 30 }}>
          {[
            { v: '65%', k: 'tutores não retornam no prazo de vacina' },
            { v: '40%', k: 'da receita recorrente perdida por clínica' },
            { v: '5×', k: 'mais caro tratar emergência vs. prevenção' },
            { v: '4', k: 'momentos reativos por ano · em média' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 20, borderTop: '1px solid var(--border-strong)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 76, lineHeight: 1, fontWeight: 400, color: 'var(--sage)' }}>{s.v}</span>
              <span style={{ fontSize: 22, color: 'var(--text-soft)', lineHeight: 1.4 }}>{s.k}</span>
            </div>
          ))}
        </div>
      </div>
    </LiCard>
  );
}

function LiCard3() {
  return (
    <LiCard idx={3} bg="var(--bg)" kicker="A Solução · Ecossistema" footer={<><span>03 · SOLUÇÃO</span><span>B2B2C</span></>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 90, lineHeight: 1.02,
          letterSpacing: '-0.02em', color: 'var(--text)', fontWeight: 400, maxWidth: 900,
        }}>Tutor, clínica e IA — em uma única <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>linha de cuidado</em>.</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 30 }}>
          {[
            { kicker: 'B2C', t: 'Kura App', d: 'Histórico do pet, lembretes, Luna IA para triagem. Tutor gratuito.', c: 'var(--sage)' },
            { kicker: 'B2B', t: 'Kura Clínica', d: 'Prontuário SOAP, agenda, teleorientação CFMV. Stack .NET.', c: 'var(--amber)' },
            { kicker: 'AI · IoT', t: 'Luna', d: 'Detecção de raça por câmera, análise preliminar de sintomas.', c: 'var(--ocean)' },
          ].map((b, i) => (
            <div key={i} style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', padding: 28, borderRadius: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, letterSpacing: '0.22em', textTransform: 'uppercase', color: b.c }}>{b.kicker}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 400, color: 'var(--text)', letterSpacing: '-0.01em' }}>{b.t}</span>
              <span style={{ fontSize: 18, color: 'var(--text-soft)', lineHeight: 1.5 }}>{b.d}</span>
            </div>
          ))}
        </div>
      </div>
    </LiCard>
  );
}

function LiCard4() {
  return (
    <LiCard idx={4} bg="var(--sage)" kicker="Tração · Sprint 1" footer={<><span style={{ color: '#FBF0DB' }}>04 · TRAÇÃO</span><span style={{ color: '#FBF0DB' }}>AZURE · ORACLE 19C</span></>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 40 }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 96, lineHeight: 1, color: '#FFFCF7',
          letterSpacing: '-0.022em', fontWeight: 400, maxWidth: 900,
        }}>Duas APIs em <em style={{ fontStyle: 'italic', color: '#FBF0DB' }}>produção</em>. Hoje.</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, marginTop: 28 }}>
          {[
            { v: '7/7', k: 'Entregáveis Sprint 1' },
            { v: '70%+', k: 'Cobertura de testes' },
            { v: '100%', k: 'Swagger documentado' },
            { v: '2', k: 'APIs em Azure VM' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 18, borderTop: '1px solid rgba(255,252,247,0.4)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 72, lineHeight: 1, color: '#FFFCF7', fontWeight: 400 }}>{s.v}</span>
              <span style={{ fontSize: 19, color: '#FBF0DB', lineHeight: 1.4 }}>{s.k}</span>
            </div>
          ))}
        </div>
      </div>
    </LiCard>
  );
}

function LiCard5() {
  return (
    <LiCard idx={5} bg="var(--bg-elev)" kicker="Próximo passo" footer={<><span>05 · CTA</span><span style={{ color: 'var(--amber)' }}>kura.clyvo.com</span></>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 80 }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 110, lineHeight: 0.98,
          letterSpacing: '-0.022em', color: 'var(--text)', fontWeight: 400, maxWidth: 900,
        }}>Bora <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>conversar</em>?</span>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 30, lineHeight: 1.55,
          color: 'var(--text-soft)', fontWeight: 300, maxWidth: 820,
        }}>Sua clínica vive de reagir a sintomas — ou de construir confiança com cada tutor?</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 40 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '22px 38px', background: 'var(--sage)', color: '#FFFCF7',
            borderRadius: 999, fontSize: 24, fontWeight: 500, letterSpacing: '0.02em',
          }}>Agende uma demo →</div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '22px 38px', background: 'transparent', color: 'var(--text)',
            border: '1.5px solid var(--border-strong)',
            borderRadius: 999, fontSize: 24, fontWeight: 500, letterSpacing: '0.02em',
          }}>Veja o produto</div>
        </div>
      </div>
    </LiCard>
  );
}

function SectionLinkedIn() {
  const cards = [LiCard1, LiCard2, LiCard3, LiCard4, LiCard5];
  return (
    <section className="bb-section" id="linkedin">
      <div className="bb-section-head">
        <div className="bb-section-eyebrow">
          <span className="bb-section-num">04 · LinkedIn</span>
          <span className="bb-section-tag">Carousel · 5 cards · 1080 × 1080</span>
        </div>
        <h2 className="bb-section-title">Carousel <em>LinkedIn</em>.</h2>
        <p className="bb-section-lede">
          Storytelling em 5 cards quadrados. Estrutura recomendada: capa → problema → solução → tração → CTA.
          Header + footer consistentes; um único hook por card; sage e amber sustentam a hierarquia.
        </p>
      </div>
      <div className="bb-grid-2">
        {cards.map((Card, i) => (
          <div className="bb-spec" key={i}>
            <div className="bb-li-frame"><FittedLi><Card/></FittedLi></div>
            <div className="bb-spec-foot">
              <span className="label">CARD {String(i+1).padStart(2,'0')}/05</span>
              <span className="dim">1080 × 1080 · PNG · sRGB</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════
//  DECK MASTER — 5 layouts oficiais (1920×1080)
// ════════════════════════════════════════════════════════════

function DeckChrome({ children, bg = 'var(--bg)' }) {
  return (
    <div style={{ width: 1920, height: 1080, background: bg, position: 'relative', overflow: 'hidden', fontFamily: 'var(--font-body)' }}>
      {/* corner brand */}
      <div style={{
        position: 'absolute', top: 60, left: 80, display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <KuraMark size={42} color="var(--sage)"/>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 400,
          letterSpacing: '-0.025em', color: 'var(--text)',
        }}>Ku<em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>ra</em></span>
      </div>
      {/* footer line */}
      <div style={{
        position: 'absolute', left: 80, right: 80, bottom: 50,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--font-mono)', fontSize: 18, letterSpacing: '0.20em',
        textTransform: 'uppercase', color: 'var(--text-mute)',
      }}>
        <span>O cuidado registrado.</span>
        <span style={{ fontWeight: 500 }}>kura · {new Date().getFullYear()}</span>
      </div>
      {children}
    </div>
  );
}

function DeckCover() {
  return (
    <div style={{ width: 1920, height: 1080, background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', width: 1200, height: 1200, borderRadius: '50%',
        left: -300, bottom: -400,
        background: 'radial-gradient(circle, rgba(74,105,68,0.18) 0%, transparent 60%)',
        filter: 'blur(40px)',
      }}/>
      <div style={{
        position: 'absolute', width: 900, height: 900, borderRadius: '50%',
        right: -200, top: -300,
        background: 'radial-gradient(circle, rgba(200,129,13,0.16) 0%, transparent 60%)',
        filter: 'blur(40px)',
      }}/>
      <div style={{ position: 'absolute', inset: 0, padding: '120px 160px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 22, letterSpacing: '0.28em',
          textTransform: 'uppercase', color: 'var(--amber)', display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <span style={{ width: 40, height: 1, background: 'var(--amber)' }}/>
          FIAP CHALLENGE 2026 · SPRINT 1
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            <KuraMark size={180} color="var(--sage)"/>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: 240, lineHeight: 0.92,
              letterSpacing: '-0.028em', color: 'var(--text)', fontWeight: 400,
            }}>Ku<em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>ra</em></span>
          </div>
          <span style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 56,
            color: 'var(--text-soft)', maxWidth: 1300, lineHeight: 1.3, fontWeight: 300,
          }}>Infraestrutura de continuidade do cuidado veterinário.</span>
        </div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 20, letterSpacing: '0.24em',
          textTransform: 'uppercase', color: 'var(--text-mute)',
        }}>Uma empresa <span style={{ color: 'var(--amber)' }}>Clyvo Vet</span></div>
      </div>
    </div>
  );
}

function DeckSection() {
  return (
    <DeckChrome bg="var(--sage)">
      <div style={{ position: 'absolute', inset: 0, padding: '160px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 24, letterSpacing: '0.28em',
          textTransform: 'uppercase', color: '#FBF0DB', display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36,
        }}>
          <span style={{ width: 60, height: 1, background: '#FBF0DB' }}/>
          02 · Por Que Agora
        </div>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 200, lineHeight: 0.95,
          letterSpacing: '-0.025em', color: '#FFFCF7', fontWeight: 400, maxWidth: 1500,
        }}>Três forças<br/>do mercado<br/><em style={{ fontStyle: 'italic', color: '#FBF0DB' }}>convergem</em>.</span>
      </div>
      {/* override chrome colors for sage bg */}
      <div style={{
        position: 'absolute', top: 60, left: 80, display: 'flex', alignItems: 'center', gap: 14, zIndex: 2,
      }}>
        <KuraMark size={42} color="#FFFCF7"/>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 400,
          letterSpacing: '-0.025em', color: '#FFFCF7',
        }}>Ku<em style={{ fontStyle: 'italic', color: '#FBF0DB' }}>ra</em></span>
      </div>
      <div style={{
        position: 'absolute', left: 80, right: 80, bottom: 50, zIndex: 2,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--font-mono)', fontSize: 18, letterSpacing: '0.20em',
        textTransform: 'uppercase', color: '#FBF0DB',
      }}>
        <span>Capa de Seção</span>
        <span>02 / 15</span>
      </div>
    </DeckChrome>
  );
}

function DeckContent() {
  return (
    <DeckChrome>
      <div style={{ position: 'absolute', inset: 0, padding: '160px 160px 130px', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 20, letterSpacing: '0.24em',
            textTransform: 'uppercase', color: 'var(--amber)',
          }}>SLIDE TÍTULO + CONTEÚDO</span>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 88, lineHeight: 1.02,
            letterSpacing: '-0.018em', color: 'var(--text)', fontWeight: 400,
          }}>A Kura conecta clínica, vet e tutor.</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, marginTop: 12 }}>
          {[
            { c: 'var(--sage)',   k: 'TUTOR · B2C',  t: 'Histórico contínuo', d: 'Vacinas, exames, consultas — sempre acessível. Luna IA para triagem antes da consulta.' },
            { c: 'var(--amber)',  k: 'CLÍNICA · B2B', t: 'Receita recorrente', d: 'Substitui WhatsApp e planilha por infraestrutura real. Telemedicina CFMV-compliant.' },
            { c: 'var(--ocean)',  k: 'PLATAFORMA',   t: 'Dados estruturados',  d: 'Cada interação alimenta inteligência clínica preditiva. LGPD por design.' },
          ].map((b, i) => (
            <div key={i} style={{
              background: 'var(--bg-elev)', border: '1px solid var(--border)', padding: 36,
              borderRadius: 18, display: 'flex', flexDirection: 'column', gap: 18,
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, letterSpacing: '0.22em', textTransform: 'uppercase', color: b.c }}>{b.k}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 400, color: 'var(--text)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>{b.t}</span>
              <span style={{ fontSize: 22, color: 'var(--text-soft)', lineHeight: 1.5 }}>{b.d}</span>
            </div>
          ))}
        </div>
      </div>
    </DeckChrome>
  );
}

function DeckData() {
  return (
    <DeckChrome>
      <div style={{ position: 'absolute', inset: 0, padding: '160px 160px 130px', display: 'flex', flexDirection: 'column', gap: 56 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 20, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--amber)' }}>SLIDE DADOS · KPI</span>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 80, lineHeight: 1.02,
            letterSpacing: '-0.018em', color: 'var(--text)', fontWeight: 400, maxWidth: 1400,
          }}>R$ 68,4 bilhões. <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>13% ao ano</em>.</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 36, marginTop: 24 }}>
          {[
            { v: 'R$ 68,4 bi', k: 'mercado pet · BRASIL · 2024', c: 'var(--sage)' },
            { v: '13%',        k: 'crescimento · YoY',           c: 'var(--amber)' },
            { v: '3°',         k: 'maior mercado · global',      c: 'var(--ocean)' },
            { v: '60M',        k: 'pets · 51M tutores',          c: 'var(--clay)' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 14, paddingTop: 28, borderTop: `2px solid ${s.c}` }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 88, lineHeight: 1, color: 'var(--text)', fontWeight: 400, letterSpacing: '-0.02em' }}>{s.v}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-mute)', lineHeight: 1.45 }}>{s.k}</span>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 'auto',
          padding: '18px 24px', borderLeft: '3px solid var(--sage)',
          background: 'var(--surface)', borderRadius: 4,
          fontSize: 22, color: 'var(--text-soft)', lineHeight: 1.5, maxWidth: 1400,
        }}>
          <strong style={{ color: 'var(--text)' }}>Fonte:</strong> Instituto Pet Brasil 2024 · ABINPET · IBGE PNAD. Projeção sustentada até 2028 considerando atual elasticidade renda-consumo de 1.4×.
        </div>
      </div>
    </DeckChrome>
  );
}

function DeckQuote() {
  return (
    <DeckChrome bg="var(--bg-elev)">
      <div style={{ position: 'absolute', inset: 0, padding: '180px 200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: 56 }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 280, lineHeight: 0.7,
          color: 'var(--sage)', fontWeight: 400, opacity: 0.32,
        }}>“</span>
        <span style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 72,
          lineHeight: 1.25, color: 'var(--text)', fontWeight: 300, maxWidth: 1450, marginTop: -100,
        }}>Prevenção que não acontece vira <em style={{ color: 'var(--sage)' }}>emergência</em> que custa cinco vezes mais.</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 20 }}>
          <span style={{ width: 60, height: 1, background: 'var(--border-strong)' }}/>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 22, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-mute)' }}>Team Kura · 2026</span>
          <span style={{ width: 60, height: 1, background: 'var(--border-strong)' }}/>
        </div>
      </div>
    </DeckChrome>
  );
}

function SectionDeck() {
  const layouts = [
    { c: DeckCover,   t: 'Capa · bookend',   m: 'Slide 01 / N · orbs + lockup grande' },
    { c: DeckSection, t: 'Capa de seção',    m: 'Bookend sage · número + título grande' },
    { c: DeckContent, t: 'Título + conteúdo · 3 colunas', m: 'Padrão · cards de 3 features' },
    { c: DeckData,    t: 'Dados · 4 KPIs',   m: 'Números grandes Cormorant · linha colorida' },
    { c: DeckQuote,   t: 'Quote · momento',  m: 'Italic Cormorant · breathing room máximo' },
  ];
  return (
    <section className="bb-section" id="deck">
      <div className="bb-section-head">
        <div className="bb-section-eyebrow">
          <span className="bb-section-num">05 · Deck Master</span>
          <span className="bb-section-tag">5 layouts · 1920 × 1080</span>
        </div>
        <h2 className="bb-section-title">Deck <em>master</em>.</h2>
        <p className="bb-section-lede">
          Sistema de slides 16:9. Chrome consistente (logo top-left, footer tagline + número), cinco layouts
          oficiais que cobrem ~95% dos casos. Use as capas de seção para introduzir mudanças de tema.
        </p>
      </div>
      <div className="bb-grid-2">
        {layouts.map((L, i) => (
          <div className="bb-spec" key={i}>
            <div className="bb-deck-frame"><FittedDeck><L.c/></FittedDeck></div>
            <div className="bb-spec-foot">
              <span className="label">{String(i+1).padStart(2,'0')} · {L.t}</span>
              <span className="dim">{L.m}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bb-callout info" style={{ marginTop: 24 }}>
        <strong>Regra de ouro do deck:</strong> 1 ideia por slide · Cormorant para emoção (títulos, números)
        · Lexend para clareza (corpo) · JetBrains Mono para metadados (kicker, footer, source). Nunca misture
        cores de gráfico fora de <span className="bb-mono">sage · amber · clay · ocean</span>.
      </div>
    </section>
  );
}

Object.assign(window, {
  MascotBobi, MascotLuna, MascotAbstract,
  SectionMascot, SectionLinkedIn, SectionDeck,
  LiCard1, LiCard2, LiCard3, LiCard4, LiCard5,
  DeckCover, DeckSection, DeckContent, DeckData, DeckQuote,
});
