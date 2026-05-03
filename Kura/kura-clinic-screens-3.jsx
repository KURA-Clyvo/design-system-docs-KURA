// kura-clinic-screens-3.jsx — Bloco 3: Nova Consulta + Teleorientação + Receita

// ═══════════════════════════════════════════════════════════════
// 05 · NOVA CONSULTA — SOAP form com IA Luna assistindo
// ═══════════════════════════════════════════════════════════════
function ScrCNewConsult() {
  return (
    <div className="kc-desktop">
      <KCSidebar active="consult"/>
      <div className="kc-main">
        <KCTopbar crumb="HOME › CONSULTAS › <b>Nova · Luna · em andamento · 14:32</b>"/>
        <div className="kc-content" style={{ padding: 0, display: 'grid', gridTemplateColumns: '1fr 380px' }}>

          {/* Left — form */}
          <div style={{ padding: 28, borderRight: '1px solid var(--border)' }}>
            {/* Patient mini-card */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
              background: 'var(--ocean-pale)', borderRadius: 12, marginBottom: 24,
              border: '1px solid rgba(26,58,82,0.15)',
            }}>
              <KCPetPortrait palette="border" size={48}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ocean)' }}>
                  Luna · Border Collie · ♀ 4a 2m · 22.4 kg
                </div>
                <div style={{ fontSize: 12, color: 'var(--ocean)', opacity: 0.8 }}>
                  Marina S. · Atopia em controle · última consulta 28 abr
                </div>
              </div>
              <span className="kc-badge kc-badge-info">
                <span style={{ width: 6, height: 6, background: 'var(--ocean)', borderRadius: '50%' }}/>
                Em consulta · 18 min
              </span>
            </div>

            <KCPageHeader
              kicker="— Consulta de retorno"
              title="Anotações" em="da consulta"
              actions={<>
                <button className="kc-btn kc-btn-ghost"><KCIcon name="mic" size={14}/> Ditado</button>
                <button className="kc-btn kc-btn-ghost">Salvar rascunho</button>
                <button className="kc-btn kc-btn-primary">Finalizar →</button>
              </>}
            />

            {/* Vitals row */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 24,
            }}>
              {[
                { k: 'Peso', v: '22.4', u: 'kg', auto: true },
                { k: 'T°', v: '38.7', u: '°C' },
                { k: 'FC', v: '92', u: 'bpm' },
                { k: 'FR', v: '24', u: 'mpm' },
              ].map(m => (
                <div key={m.k} style={{
                  padding: '12px 14px', background: 'var(--bg-elev)',
                  border: '1px solid var(--border)', borderRadius: 10,
                  position: 'relative',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 0.14,
                    textTransform: 'uppercase', color: 'var(--text-mute)', marginBottom: 4,
                  }}>{m.k}</div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 600, color: 'var(--text)' }}>{m.v}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-mute)', marginLeft: 3 }}>{m.u}</span>
                  </div>
                  {m.auto && <span style={{
                    position: 'absolute', top: 8, right: 8,
                    fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 0.12,
                    color: 'var(--ocean)', background: 'var(--ocean-pale)',
                    padding: '2px 6px', borderRadius: 4, textTransform: 'uppercase',
                  }}>Luna</span>}
                </div>
              ))}
            </div>

            {/* SOAP */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                {
                  letter: 'S', name: 'Subjetivo',
                  hint: 'Queixa do tutor, anamnese',
                  body: 'Tutora relata melhora significativa do prurido após início do Apoquel há 7 dias. Luna voltou a dormir a noite toda. Sem episódios de coceira intensa. Apetite normal, fezes normais. Sem outros sintomas.',
                },
                {
                  letter: 'O', name: 'Objetivo',
                  hint: 'Exame físico, achados',
                  body: 'Animal ativo, mucosas normocoradas. Pele com discreta hiperpigmentação em região ventral, sem lesões ativas. Auscultação cardiopulmonar sem alterações. TPC <2s. Linfonodos não reativos.',
                },
                {
                  letter: 'A', name: 'Avaliação · Diagnóstico',
                  hint: 'Hipóteses, diagnóstico',
                  body: '',
                  placeholder: 'Atopia canina em controle clínico. Resposta favorável ao tratamento.',
                  ai: true,
                },
                {
                  letter: 'P', name: 'Plano',
                  hint: 'Conduta, medicações, retorno',
                  body: '',
                  placeholder: 'Manter Apoquel 16mg 1x/dia · Manter dieta hipoalergênica · Retorno em 30 dias com hemograma',
                },
              ].map((s, i) => (
                <div key={s.letter}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                    <span style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: 'var(--ocean)', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16,
                    }}>{s.letter}</span>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, color: 'var(--text)' }}>
                      {s.name}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-mute)', flex: 1 }}>· {s.hint}</div>
                    {s.ai && <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.12,
                      color: 'var(--amber)', background: 'var(--amber-pale)',
                      padding: '3px 8px', borderRadius: 999, textTransform: 'uppercase',
                      display: 'flex', alignItems: 'center', gap: 4,
                    }}>
                      <span style={{ width: 6, height: 6, background: 'var(--amber)', borderRadius: '50%' }}/>
                      Sugestão Luna
                    </span>}
                  </div>
                  <div style={{
                    minHeight: s.body ? 'auto' : 60,
                    padding: '12px 14px', background: 'var(--bg-elev)',
                    border: '1px solid var(--border)', borderRadius: 10,
                    fontSize: 13, lineHeight: 1.55,
                    color: s.body ? 'var(--text)' : 'var(--text-mute)',
                    fontStyle: s.body ? 'normal' : 'italic',
                  }}>
                    {s.body || s.placeholder}
                    {!s.body && s.placeholder && (
                      <div style={{ marginTop: 8, display: 'flex', gap: 6 }}>
                        <button style={{
                          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.1, textTransform: 'uppercase',
                          padding: '4px 10px', background: 'var(--ocean)', color: '#fff',
                          border: 0, borderRadius: 99, cursor: 'pointer',
                        }}>Aceitar</button>
                        <button style={{
                          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.1, textTransform: 'uppercase',
                          padding: '4px 10px', background: 'transparent', color: 'var(--text-mute)',
                          border: '1px solid var(--border-strong)', borderRadius: 99, cursor: 'pointer',
                        }}>Editar</button>
                        <button style={{
                          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.1, textTransform: 'uppercase',
                          padding: '4px 10px', background: 'transparent', color: 'var(--text-mute)',
                          border: 0, cursor: 'pointer',
                        }}>Descartar</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Luna AI assistant */}
          <div style={{ padding: 24, background: 'var(--bg)' }}>
            <div style={{
              padding: 18, borderRadius: 14,
              background: 'linear-gradient(160deg, var(--ocean) 0%, #2D5E7E 70%, #1A3A52 100%)',
              color: '#FFFCF7', marginBottom: 16, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -40, right: -40, width: 160, height: 160,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(232,156,32,0.25) 0%, transparent 70%)',
              }}/>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <KCIcon name="luna" size={20} color="var(--amber-bright)"/>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500 }}>
                  Luna <em style={{ fontStyle: 'italic', color: 'var(--amber-bright)' }}>· assistente</em>
                </div>
              </div>
              <div style={{ position: 'relative', fontSize: 12, opacity: 0.8, lineHeight: 1.5 }}>
                Acompanho sua consulta e cruzo dados do prontuário, das últimas 47 visitas e da literatura veterinária. Você decide.
              </div>
            </div>

            {/* AI cards */}
            <div className="kc-sec-h">Sugestões em tempo real</div>

            {[
              {
                tag: 'Diagnóstico',
                body: 'Quadro consistente com atopia canina em controle (resposta clínica favorável ao Apoquel após 7 dias).',
                conf: 94, color: 'sage',
              },
              {
                tag: 'Atenção',
                body: 'Apoquel >6 meses contínuos: considerar Cytopoint sazonal ou imunoterapia para reduzir uso prolongado.',
                conf: null, color: 'amber',
              },
              {
                tag: 'Exame sugerido',
                body: 'Hemograma + bioquímico no retorno (último há 23 dias) — monitorar perfil hepático no Apoquel.',
                conf: 87, color: 'ocean',
              },
            ].map((c, i) => (
              <div key={i} style={{
                padding: 14, background: 'var(--bg-elev)',
                border: '1px solid var(--border)', borderLeft: `3px solid var(--${c.color === 'sage' ? 'sage' : c.color === 'amber' ? 'amber' : 'ocean'})`,
                borderRadius: 10, marginBottom: 10,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.14, textTransform: 'uppercase',
                    color: `var(--${c.color === 'sage' ? 'sage' : c.color === 'amber' ? 'amber' : 'ocean'})`,
                    fontWeight: 600,
                  }}>{c.tag}</span>
                  {c.conf && <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-mute)',
                  }}>{c.conf}% conf.</span>}
                </div>
                <div style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--text)' }}>{c.body}</div>
              </div>
            ))}

            <div style={{ marginTop: 18 }}>
              <div className="kc-sec-h">Atalhos</div>
              {[
                { i: 'rx', l: 'Adicionar à receita', n: '2' },
                { i: 'consult', l: 'Pedir exame', n: 'lab' },
                { i: 'agenda', l: 'Agendar retorno', n: '+30d' },
              ].map(a => (
                <div key={a.l} style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                  background: 'var(--bg-elev)', border: '1px solid var(--border)',
                  borderRadius: 8, marginBottom: 6, cursor: 'pointer',
                }}>
                  <KCIcon name={a.i} size={14} color="var(--ocean)"/>
                  <span style={{ fontSize: 13, color: 'var(--text)', flex: 1 }}>{a.l}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-mute)' }}>{a.n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 06 · TELEORIENTAÇÃO (CFMV-compliant)
// ═══════════════════════════════════════════════════════════════
function ScrCTele() {
  return (
    <div className="kc-desktop" style={{ background: '#0E1A24' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', height: '100%' }}>

        {/* Video stage */}
        <div style={{ position: 'relative', overflow: 'hidden', background: '#0A1218' }}>
          {/* Tutor video — pet face */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `
              radial-gradient(ellipse at 50% 45%, #C9A876 0%, #8B6F45 35%, #3D2B18 75%),
              #1B1006
            `,
          }}>
            {/* "pet face" */}
            <div style={{
              position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
              width: 380, height: 320,
              background: `
                radial-gradient(circle at 30% 25%, #FFFCF7 0%, transparent 9%),
                radial-gradient(circle at 70% 25%, #FFFCF7 0%, transparent 9%),
                radial-gradient(circle at 30% 28%, #1B1006 0%, #1B1006 4.5%, transparent 5%),
                radial-gradient(circle at 70% 28%, #1B1006 0%, #1B1006 4.5%, transparent 5%),
                radial-gradient(ellipse at 50% 56%, #1B1006 0%, #1B1006 4%, transparent 8%),
                radial-gradient(circle at 50% 95%, transparent 30%, #3D2B18 50%),
                radial-gradient(ellipse at 50% 50%, #C9A876 0%, #8B6F45 60%, transparent 80%)
              `,
              borderRadius: '50% 50% 45% 45% / 55% 55% 45% 45%',
              filter: 'blur(0.6px)',
            }}/>
          </div>

          {/* Top bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)',
            color: '#fff',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{
                background: '#D9624A', color: '#fff',
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.14,
                padding: '5px 10px', borderRadius: 4, textTransform: 'uppercase',
                display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700,
              }}>
                <span style={{ width: 6, height: 6, background: '#fff', borderRadius: '50%' }}/>
                AO VIVO · 12:43
              </span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>Mia · SRD ♀ 7a · Juliana Faria</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, opacity: 0.7, letterSpacing: 0.12 }}>
                  TELEORIENTAÇÃO · CFMV res. 1.465/22 · sessão criptografada
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{
                background: 'rgba(255,255,255,0.12)', color: '#fff', border: 0,
                padding: '8px 12px', borderRadius: 8, fontSize: 12, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <KCIcon name="share" size={13}/> Convidar tutor
              </button>
              <button style={{
                background: 'rgba(255,255,255,0.12)', color: '#fff', border: 0,
                padding: '8px 12px', borderRadius: 8, fontSize: 12, cursor: 'pointer',
              }}>
                Gravar
              </button>
            </div>
          </div>

          {/* Self-view */}
          <div style={{
            position: 'absolute', bottom: 100, right: 24,
            width: 180, height: 124, borderRadius: 10,
            background: 'linear-gradient(135deg, #2D5E7E, #1A3A52)',
            border: '2px solid rgba(255,255,255,0.2)',
            overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'linear-gradient(135deg, #C8810D, #D9624A)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontWeight: 500, fontSize: 24,
            }}>AR</div>
            <div style={{
              position: 'absolute', bottom: 6, left: 8,
              fontFamily: 'var(--font-mono)', fontSize: 9, color: '#fff',
              background: 'rgba(0,0,0,0.5)', padding: '2px 6px', borderRadius: 3,
            }}>Você · Dra. Ana</div>
          </div>

          {/* CFMV banner */}
          <div style={{
            position: 'absolute', top: 90, left: 24,
            padding: '10px 14px', background: 'rgba(232,156,32,0.18)',
            border: '1px solid rgba(232,156,32,0.4)', borderRadius: 10,
            color: '#FFD980', fontSize: 12, maxWidth: 380,
            display: 'flex', gap: 10, alignItems: 'flex-start',
          }}>
            <KCIcon name="alert" size={14}/>
            <div>
              <strong style={{ fontWeight: 600 }}>Teleorientação</strong> — orientação inicial para tutor de paciente já cadastrado. Não substitui consulta presencial. Modalidade conforme CFMV 1.465/2022.
            </div>
          </div>

          {/* Bottom controls */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '20px 24px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            display: 'flex', justifyContent: 'center', gap: 12,
          }}>
            {[
              { i: 'mic', bg: 'rgba(255,255,255,0.15)' },
              { i: 'cam', bg: 'rgba(255,255,255,0.15)' },
              { i: 'share', bg: 'rgba(255,255,255,0.15)' },
              { i: 'consult', bg: 'rgba(255,255,255,0.15)', l: 'Anotar' },
              { i: 'hangup', bg: '#D9624A', l: 'Encerrar' },
            ].map((b, i) => (
              <button key={i} style={{
                height: 52, padding: b.l ? '0 20px' : 0, width: b.l ? 'auto' : 52,
                borderRadius: b.l ? 26 : '50%', background: b.bg, border: 0,
                color: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                fontSize: 13, fontWeight: 500,
              }}>
                <KCIcon name={b.i} size={20}/>
                {b.l && <span>{b.l}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Right — notes panel */}
        <div style={{
          background: '#13212C', borderLeft: '1px solid rgba(255,255,255,0.08)',
          padding: 24, color: '#E8DDC8', display: 'flex', flexDirection: 'column',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.16,
            textTransform: 'uppercase', color: '#FFD980', marginBottom: 8,
          }}>— Anotações da sessão</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24,
            letterSpacing: '-0.02em', margin: '0 0 18px', color: '#FFFCF7',
          }}>Mia <em style={{ fontStyle: 'italic', color: '#FFD980', fontWeight: 400 }}>· tele 12:43</em></h2>

          {/* Tutor question */}
          <div style={{
            padding: 14, background: 'rgba(255,255,255,0.05)', borderRadius: 10, marginBottom: 12,
            borderLeft: '3px solid #FFD980',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 0.14, textTransform: 'uppercase',
              color: '#FFD980', marginBottom: 6,
            }}>Tutor · 12:31</div>
            <div style={{ fontSize: 13, lineHeight: 1.5, color: '#FFFCF7' }}>
              "A Mia tá comendo menos desde ontem e fez xixi 2 vezes só hoje. Devo levar ao pronto-socorro?"
            </div>
          </div>

          {/* My note */}
          <textarea defaultValue={`Anamnese inicial:
- Apetite reduzido há ~24h
- Diurese diminuída (2x em 12h)
- Sem vômito ou diarreia
- Comportamento normal
- Hidratação aparente OK na câmera

Conduta: orientação para observação por 12h e retorno presencial se piora. Hidratação forçada com seringa.`}
            style={{
              flex: 1, background: 'rgba(0,0,0,0.25)', color: '#FFFCF7',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
              padding: 14, fontSize: 13, lineHeight: 1.6, resize: 'none',
              fontFamily: 'var(--font-body)', marginBottom: 14, outline: 'none',
            }}
          />

          <button className="kc-btn kc-btn-amber" style={{ width: '100%', marginBottom: 8 }}>
            <KCIcon name="rx" size={14}/> Encaminhar para presencial
          </button>
          <button className="kc-btn" style={{
            width: '100%', background: 'rgba(255,255,255,0.08)', color: '#FFFCF7',
            border: '1px solid rgba(255,255,255,0.15)',
          }}>
            Salvar e finalizar
          </button>

          <div style={{
            marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 0.12, color: 'rgba(255,255,255,0.5)',
          }}>
            <span>● Gravando · 12:43</span>
            <span>AES-256 · LGPD</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 07 · RECEITUÁRIO (Prescrição digital)
// ═══════════════════════════════════════════════════════════════
function ScrCRx() {
  return (
    <div className="kc-desktop">
      <KCSidebar active="rx"/>
      <div className="kc-main">
        <KCTopbar crumb="HOME › RECEITUÁRIO › <b>Nova receita · Luna</b>"/>
        <div className="kc-content" style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: 24, padding: 28 }}>

          {/* Left — composer */}
          <div>
            <KCPageHeader
              kicker="— Receita simples"
              title="Nova" em="prescrição"
              sub="Luna · Border Collie · 22.4 kg · 4a 2m"
            />

            {/* Drug search */}
            <div style={{
              padding: '14px 16px', background: 'var(--bg-elev)',
              border: '1px solid var(--border)', borderRadius: 12, marginBottom: 16,
            }}>
              <div className="kc-label">Buscar medicamento</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                <KCIcon name="search" size={16} color="var(--text-mute)"/>
                <span style={{ flex: 1, fontSize: 14, color: 'var(--text)' }}>Apoquel</span>
                <span className="kc-badge kc-badge-info">Cito-bula · DEF Vet</span>
              </div>
            </div>

            {/* Item 1 — Apoquel */}
            <div style={{
              padding: 18, background: 'var(--bg-elev)',
              border: '1px solid var(--border)', borderLeft: '3px solid var(--ocean)',
              borderRadius: 12, marginBottom: 12,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.14, textTransform: 'uppercase',
                    color: 'var(--ocean)', marginBottom: 4,
                  }}>Item 01 · uso oral</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'var(--text)' }}>
                    Apoquel <em style={{ fontStyle: 'italic', color: 'var(--ocean)', fontWeight: 400 }}>16 mg</em>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-mute)' }}>oclacitinibe · Zoetis · comprimido</div>
                </div>
                <button style={{ background: 'transparent', border: 0, color: 'var(--text-mute)', cursor: 'pointer' }}>
                  <KCIcon name="close" size={16}/>
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 14 }}>
                <div>
                  <div className="kc-label">Dose</div>
                  <div style={{
                    padding: '8px 12px', background: 'var(--bg)',
                    border: '1px solid var(--border)', borderRadius: 8,
                    fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600,
                  }}>1 comp.</div>
                </div>
                <div>
                  <div className="kc-label">Frequência</div>
                  <div style={{
                    padding: '8px 12px', background: 'var(--bg)',
                    border: '1px solid var(--border)', borderRadius: 8,
                    fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600,
                  }}>1×/dia</div>
                </div>
                <div>
                  <div className="kc-label">Duração</div>
                  <div style={{
                    padding: '8px 12px', background: 'var(--bg)',
                    border: '1px solid var(--border)', borderRadius: 8,
                    fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600,
                  }}>30 dias</div>
                </div>
                <div>
                  <div className="kc-label">Quantidade</div>
                  <div style={{
                    padding: '8px 12px', background: 'var(--bg)',
                    border: '1px solid var(--border)', borderRadius: 8,
                    fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600,
                  }}>30 comp.</div>
                </div>
              </div>

              <div>
                <div className="kc-label">Orientação ao tutor</div>
                <div style={{
                  padding: '10px 12px', background: 'var(--bg)',
                  border: '1px solid var(--border)', borderRadius: 8, fontSize: 13, lineHeight: 1.5,
                }}>
                  Administrar 1 comprimido pela manhã, com alimento. Não interromper o tratamento sem orientação. Em caso de vômito, diarreia ou apatia, suspender e contatar a clínica.
                </div>
              </div>

              <div style={{
                marginTop: 12, padding: '10px 12px', background: 'var(--amber-pale)',
                borderRadius: 8, fontSize: 12, color: 'var(--amber)',
                display: 'flex', alignItems: 'flex-start', gap: 8, lineHeight: 1.5,
              }}>
                <KCIcon name="alert" size={14}/>
                <div><strong style={{ fontWeight: 600 }}>Luna verificou:</strong> dose adequada para 22.4 kg (0.4–0.6 mg/kg). Sem interações com medicações ativas no prontuário.</div>
              </div>
            </div>

            {/* Item 2 stub */}
            <div style={{
              padding: 14, background: 'var(--bg-elev)',
              border: '1px dashed var(--border-strong)', borderRadius: 12, marginBottom: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-mute)',
                }}><KCIcon name="plus" size={14}/></span>
                <span style={{ fontSize: 13, color: 'var(--text-mute)' }}>Adicionar item · medicamento, vacina, manipulado</span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-mute)', letterSpacing: 0.12 }}>⌘ + N</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 20 }}>
              <button className="kc-btn kc-btn-ghost">Salvar rascunho</button>
              <button className="kc-btn kc-btn-ghost"><KCIcon name="print" size={14}/> Imprimir</button>
              <button className="kc-btn kc-btn-primary">Assinar e enviar →</button>
            </div>
          </div>

          {/* Right — receipt preview */}
          <div>
            <div className="kc-sec-h">Pré-visualização</div>
            <div style={{
              background: '#FFFCF7', border: '1px solid var(--border)',
              borderRadius: 14, padding: 28, color: '#1B1006',
              boxShadow: '0 12px 28px -16px rgba(0,0,0,0.16)',
              fontFamily: 'var(--font-body)',
              minHeight: 580,
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Watermark */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%,-50%) rotate(-30deg)',
                fontFamily: 'var(--font-display)', fontSize: 100, fontWeight: 300,
                color: 'rgba(26,58,82,0.04)', letterSpacing: '-0.04em', pointerEvents: 'none',
              }}>Kura<em style={{ fontStyle: 'italic' }}>.</em></div>

              <div style={{ position: 'relative' }}>
                {/* header */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                  paddingBottom: 16, borderBottom: '1px solid #E8DDC8', marginBottom: 16,
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <KuraLogo size={28} color="#1A3A52"/>
                      <div style={{
                        fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: '#1A3A52',
                      }}>Kura<em style={{ fontStyle: 'italic' }}>.</em></div>
                    </div>
                    <div style={{ fontSize: 11, color: '#6B5942', marginTop: 4 }}>
                      PetLife · Vila Mariana · CNPJ 12.345.678/0001-90
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 0.18,
                      textTransform: 'uppercase', color: '#6B5942',
                    }}>Receituário simples</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: '#1A3A52', marginTop: 2 }}>
                      №: 2026-04829-R03
                    </div>
                  </div>
                </div>

                {/* Patient */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18, fontSize: 12 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 0.14, textTransform: 'uppercase', color: '#6B5942' }}>Paciente</div>
                    <div style={{ fontWeight: 600, color: '#1B1006', marginTop: 2 }}>Luna · Border Collie · ♀ 4a 2m · 22.4 kg</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 0.14, textTransform: 'uppercase', color: '#6B5942' }}>Tutor</div>
                    <div style={{ fontWeight: 600, color: '#1B1006', marginTop: 2 }}>Marina Souza · CPF 318.***.***-22</div>
                  </div>
                </div>

                {/* Rx mark */}
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 300,
                  color: '#1A3A52', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 12,
                }}>R<sub style={{ fontSize: 26, verticalAlign: 'sub' }}>x</sub></div>

                {/* Item */}
                <div style={{ paddingLeft: 16, borderLeft: '2px solid #1A3A52' }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#1B1006' }}>
                    Apoquel 16 mg · 30 comprimidos
                  </div>
                  <div style={{ fontSize: 12, color: '#6B5942', marginTop: 2, fontStyle: 'italic' }}>
                    oclacitinibe maleato
                  </div>
                  <div style={{ fontSize: 12.5, color: '#1B1006', marginTop: 8, lineHeight: 1.55 }}>
                    Administrar <strong>1 (um) comprimido por via oral, 1 vez ao dia, pela manhã, com alimento</strong>, durante <strong>30 dias</strong>.
                  </div>
                </div>

                {/* Signature */}
                <div style={{
                  marginTop: 36, paddingTop: 16, borderTop: '1px dashed #C9A876',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 11,
                }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#6B5942', letterSpacing: 0.12 }}>São Paulo, 07 maio 2026</div>
                    <div style={{ marginTop: 26, paddingTop: 4, borderTop: '1px solid #1B1006', minWidth: 180 }}>
                      <div style={{ fontWeight: 600, color: '#1B1006' }}>Dra. Ana Ribeiro</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#6B5942' }}>CRMV-SP 12.458</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      width: 64, height: 64, background: '#1A3A52',
                      borderRadius: 6, padding: 6,
                    }}>
                      <div style={{
                        width: '100%', height: '100%',
                        background: `repeating-linear-gradient(0deg, #FFFCF7 0 2px, transparent 2px 4px),
                                     repeating-linear-gradient(90deg, #FFFCF7 0 2px, transparent 2px 4px)`,
                      }}/>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: '#6B5942', letterSpacing: 0.12, marginTop: 4 }}>
                      ICP-BRASIL · A3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScrCNewConsult, ScrCTele, ScrCRx });
