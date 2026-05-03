// kura-clinic-screens-2.jsx — Bloco 2: Agenda + Patient Detail

// ═══════════════════════════════════════════════════════════════
// 03 · AGENDA SEMANAL
// ═══════════════════════════════════════════════════════════════
function ScrCAgenda() {
  const days = ['Seg 04', 'Ter 05', 'Qua 06', 'Qui 07', 'Sex 08', 'Sáb 09'];
  const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  // Each event: {day, start (hour idx), span (units of 30min, so 2 = 1h), title, sub, tone, vet}
  const events = [
    { day: 0, start: 1, span: 1.5, title: 'Luna · Border', sub: 'Marina S.',  tone: 'sage',  vet: 'AR' },
    { day: 0, start: 3, span: 1,   title: 'Bloqueado',     sub: 'Almoço equipe', tone: 'mute' },
    { day: 0, start: 6, span: 2,   title: 'Cirurgia · Bolt',sub: 'Castração · Sala 3', tone: 'clay', vet: 'AR' },

    { day: 1, start: 0, span: 1.5, title: 'Mia · SRD',    sub: 'Tele · Juliana', tone: 'amber', vet: 'AR' },
    { day: 1, start: 2, span: 1,   title: 'Thor · Lab',   sub: 'Vacinação',     tone: 'ocean', vet: 'AR' },
    { day: 1, start: 5, span: 2,   title: 'Café com Luna AI',sub: 'Treino · Sala 2',tone: 'mute' },
    { day: 1, start: 8, span: 1.5, title: 'Nina · Persa', sub: 'Retorno · 14d',  tone: 'sage', vet: 'AR' },

    { day: 2, start: 1, span: 1, title: 'Rex · SRD',     sub: 'Vacina antirrábica',tone: 'ocean',vet: 'PC'},
    { day: 2, start: 4, span: 1.5, title: 'Mel · Poodle', sub: 'Pós-cirúrgico',  tone: 'sage', vet: 'PC'},
    { day: 2, start: 7, span: 1,  title: 'Caio · SRD',    sub: 'Limpeza dental', tone: 'ocean', vet: 'AR'},

    { day: 3, start: 1.5, span: 1, title: 'Luna · Border', sub: '09:30 · Marina S.', tone: 'sage', vet: 'AR' },
    { day: 3, start: 2.5, span: 1, title: 'Thor · Lab',    sub: 'Retorno',          tone: 'ocean', vet: 'AR' },
    { day: 3, start: 3,   span: 1, title: 'Mia · SRD',     sub: 'Tele',             tone: 'amber', vet: 'AR' },
    { day: 3, start: 6,   span: 1, title: 'Bolt · Poodle', sub: 'Urgência',         tone: 'clay',  vet: 'AR' },
    { day: 3, start: 7.5, span: 1, title: 'Nina · Persa',  sub: 'Vacinação',        tone: 'sage', vet: 'AR' },

    { day: 4, start: 1, span: 2,  title: 'Cirurgia · Mel',sub: 'Sala 3 · 2h',  tone: 'clay', vet: 'PC' },
    { day: 4, start: 5, span: 1,  title: 'Pippa · Husky', sub: 'Dermato',     tone: 'ocean', vet: 'AR' },
    { day: 4, start: 7, span: 1.5,title: 'Reunião clínica',sub: 'Equipe',     tone: 'mute' },

    { day: 5, start: 0, span: 2.5,title: 'Plantão sábado',sub: 'Dr. Pedro Castro',tone: 'mute' },
    { day: 5, start: 4, span: 1,  title: 'Tobby · Beagle',sub: 'Geriátrico',  tone: 'sage', vet: 'PC' },
  ];

  return (
    <div className="kc-desktop">
      <KCSidebar active="agenda"/>
      <div className="kc-main">
        <KCTopbar crumb="HOME › AGENDA › <b>Semana 19 · 04–10 Maio</b>"/>
        <div className="kc-content" style={{ padding: 0 }}>

          {/* Header strip */}
          <div style={{
            padding: '24px 32px 18px', display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', borderBottom: '1px solid var(--border)',
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.16,
                textTransform: 'uppercase', color: 'var(--text-mute)', marginBottom: 8,
              }}>— Agenda</div>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 36,
                letterSpacing: '-0.02em', lineHeight: 1, margin: 0, color: 'var(--text)',
              }}>Semana <em style={{ fontStyle: 'italic', color: 'var(--ocean)', fontWeight: 400 }}>19</em></h1>
              <div style={{ fontSize: 13, color: 'var(--text-mute)', marginTop: 6 }}>
                04 → 10 maio · 38 atendimentos agendados · 84% ocupação
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{
                display: 'inline-flex', borderRadius: 999, background: 'var(--surface-2)',
                padding: 3, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.12, textTransform: 'uppercase',
              }}>
                {['Dia', 'Semana', 'Mês', 'Lista'].map((v, i) => (
                  <span key={v} style={{
                    padding: '6px 14px', borderRadius: 999,
                    background: i === 1 ? 'var(--bg-elev)' : 'transparent',
                    color: i === 1 ? 'var(--ocean)' : 'var(--text-mute)',
                    boxShadow: i === 1 ? '0 1px 3px rgba(0,0,0,0.05)' : 'none',
                    fontWeight: i === 1 ? 600 : 400, cursor: 'pointer',
                  }}>{v}</span>
                ))}
              </div>
              <button className="kc-btn kc-btn-ghost" style={{ height: 36, padding: '0 12px' }}>
                <KCIcon name="filter" size={14}/> Filtros
              </button>
              <button className="kc-btn kc-btn-primary" style={{ height: 36 }}>
                <KCIcon name="plus" size={14}/> Novo
              </button>
            </div>
          </div>

          {/* Calendar grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: '64px repeat(6, 1fr)',
            background: 'var(--bg-elev)',
          }}>
            {/* Empty corner */}
            <div style={{ borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}/>
            {days.map((d, i) => (
              <div key={d} style={{
                padding: '12px 14px', borderRight: i < days.length - 1 ? '1px solid var(--border)' : 'none',
                borderBottom: '1px solid var(--border)',
                background: i === 3 ? 'var(--ocean-pale)' : 'transparent',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.14, textTransform: 'uppercase',
                  color: i === 3 ? 'var(--ocean)' : 'var(--text-mute)',
                }}>{d.split(' ')[0]}</div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500,
                  color: i === 3 ? 'var(--ocean)' : 'var(--text)', marginTop: 2,
                }}>{d.split(' ')[1]}</div>
              </div>
            ))}

            {/* Hour rows */}
            {hours.map((h, hi) => (
              <React.Fragment key={h}>
                <div style={{
                  padding: '8px 8px 0', textAlign: 'right',
                  borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
                  fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-mute)',
                  letterSpacing: 0.12, height: 56,
                }}>{h}</div>
                {days.map((d, di) => (
                  <div key={`${h}-${d}`} style={{
                    borderRight: di < days.length - 1 ? '1px solid var(--border)' : 'none',
                    borderBottom: '1px solid var(--border)',
                    position: 'relative', height: 56,
                    background: di === 3 && hi === 1 ? 'rgba(45,94,126,0.04)' : 'transparent',
                  }}>
                    {/* events that start in this slot */}
                    {events.filter(e => e.day === di && Math.floor(e.start) === hi).map((e, ei) => {
                      const fracStart = e.start - Math.floor(e.start);
                      const top = fracStart * 56;
                      const height = e.span * 56 - 2;
                      const tones = {
                        sage: { bg: 'var(--sage-pale)', bd: 'var(--sage)', tx: 'var(--sage)' },
                        ocean:{ bg: 'var(--ocean-pale)', bd: 'var(--ocean)', tx: 'var(--ocean)' },
                        amber:{ bg: 'var(--amber-pale)', bd: 'var(--amber)', tx: 'var(--amber)' },
                        clay: { bg: 'var(--clay-pale)', bd: 'var(--clay)', tx: 'var(--clay)' },
                        mute: { bg: 'var(--surface-2)', bd: 'var(--border-strong)', tx: 'var(--text-mute)' },
                      };
                      const t = tones[e.tone];
                      return (
                        <div key={ei} style={{
                          position: 'absolute', top: top + 1, left: 4, right: 4, height,
                          background: t.bg, borderLeft: `3px solid ${t.bd}`,
                          borderRadius: 6, padding: '5px 8px', overflow: 'hidden',
                          fontSize: 11, color: t.tx, lineHeight: 1.3,
                        }}>
                          <div style={{ fontWeight: 600, color: t.tx, fontSize: 11.5 }}>{e.title}</div>
                          <div style={{ fontSize: 10, opacity: 0.85, marginTop: 1 }}>{e.sub}</div>
                          {e.vet && <div style={{
                            position: 'absolute', top: 4, right: 4,
                            width: 16, height: 16, borderRadius: '50%',
                            background: 'rgba(255,255,255,0.5)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontFamily: 'var(--font-mono)', fontSize: 8, fontWeight: 700, color: t.tx,
                          }}>{e.vet}</div>}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 04 · PATIENT DETAIL (Prontuário Luna)
// ═══════════════════════════════════════════════════════════════
function ScrCPatientDetail() {
  return (
    <div className="kc-desktop">
      <KCSidebar active="patients"/>
      <div className="kc-main">
        <KCTopbar crumb="HOME › PACIENTES › <b>Luna · #PT-04829</b>"/>
        <div className="kc-content">

          {/* Patient header card */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'auto 1fr auto',
            gap: 24, alignItems: 'center', padding: 24,
            background: 'var(--bg-elev)', border: '1px solid var(--border)',
            borderRadius: 16, marginBottom: 20,
          }}>
            <KCPetPortrait palette="border" size={96}/>
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.16,
                textTransform: 'uppercase', color: 'var(--text-mute)', marginBottom: 6,
              }}>— Prontuário · #PT-04829</div>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 38,
                letterSpacing: '-0.02em', lineHeight: 1, margin: 0,
              }}>Luna <em style={{ fontStyle: 'italic', color: 'var(--ocean)', fontWeight: 400 }}>· Ribeiro Souza</em></h1>
              <div style={{ display: 'flex', gap: 18, marginTop: 12, flexWrap: 'wrap', fontSize: 13 }}>
                <span style={{ color: 'var(--text-mute)' }}>Border Collie · <strong style={{ color: 'var(--text)', fontWeight: 500 }}>♀ 4a 2m</strong></span>
                <span style={{ color: 'var(--text-mute)' }}>22.4 kg · escore 5/9</span>
                <span style={{ color: 'var(--text-mute)' }}>Microchip <span style={{ fontFamily: 'var(--font-mono)' }}>982 000 411 829 614</span></span>
                <span className="kc-badge kc-badge-ok"><KCIcon name="check" size={10} stroke={3}/> Vacinação em dia</span>
                <span className="kc-badge kc-badge-info">Luna AI ativa</span>
              </div>
              <div style={{
                marginTop: 12, padding: '8px 12px', background: 'var(--surface-2)',
                borderRadius: 8, fontSize: 12, color: 'var(--text-soft)',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-mute)', letterSpacing: 0.12 }}>TUTOR</span>
                <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Marina Souza</strong>
                <span style={{ color: 'var(--text-mute)' }}>· (11) 98742-2914 · Rua Joaquim, 412 · V. Mariana</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
              <button className="kc-btn kc-btn-primary"><KCIcon name="consult" size={14}/> Iniciar consulta</button>
              <div style={{ display: 'flex', gap: 6 }}>
                <button className="kc-btn kc-btn-ghost" style={{ height: 32, padding: '0 10px' }}><KCIcon name="tele" size={13}/></button>
                <button className="kc-btn kc-btn-ghost" style={{ height: 32, padding: '0 10px' }}><KCIcon name="rx" size={13}/></button>
                <button className="kc-btn kc-btn-ghost" style={{ height: 32, padding: '0 10px' }}><KCIcon name="print" size={13}/></button>
                <button className="kc-btn kc-btn-ghost" style={{ height: 32, padding: '0 10px' }}><KCIcon name="more" size={13}/></button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{
            display: 'flex', gap: 24, borderBottom: '1px solid var(--border)', marginBottom: 20,
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.14, textTransform: 'uppercase',
          }}>
            {[
              { l: 'Linha do tempo', a: true, b: 47 },
              { l: 'Vacinas', b: 8 },
              { l: 'Exames', b: 12 },
              { l: 'Medicações', b: 5 },
              { l: 'Luna · monitoramento', b: 0, dot: true },
              { l: 'Anexos', b: 14 },
              { l: 'Financeiro', b: '—' },
            ].map(t => (
              <div key={t.l} style={{
                padding: '12px 0', cursor: 'pointer',
                color: t.a ? 'var(--ocean)' : 'var(--text-mute)',
                borderBottom: t.a ? '2px solid var(--ocean)' : '2px solid transparent',
                fontWeight: t.a ? 600 : 400, marginBottom: -1,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                {t.l}
                {t.dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--clay)' }}/>}
                {typeof t.b !== 'undefined' && !t.dot && <span style={{
                  background: t.a ? 'var(--ocean-pale)' : 'var(--surface-2)',
                  color: t.a ? 'var(--ocean)' : 'var(--text-mute)',
                  padding: '1px 6px', borderRadius: 999, fontSize: 9,
                }}>{t.b}</span>}
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>

            {/* Timeline */}
            <div>
              <div className="kc-sec-h">
                Linha do tempo · 47 eventos
                <span style={{ color: 'var(--text-mute)', textTransform: 'none', letterSpacing: 0, fontSize: 11 }}>2026 → 2022</span>
              </div>

              {[
                { date: 'Hoje · 09:30', title: 'Consulta de retorno', sub: 'Dra. Ana Ribeiro · sala 2', tone: 'ocean', tag: 'Retorno', body: 'Revisão pós-tratamento dermatológico (atopia). Controle satisfatório. Próximo retorno em 30 dias.' },
                { date: '02 mai · 14:20', title: 'Receita · Apoquel 16mg', sub: '30 comprimidos · 1×/dia', tone: 'amber', tag: 'Prescrição', body: '' },
                { date: '28 abr · 10:00', title: 'Consulta dermatológica', sub: 'Dra. Ana Ribeiro · 38 min', tone: 'ocean', tag: 'Consulta', body: 'Atopia canina confirmada por teste intradérmico. Início de Apoquel + dieta hipoalergênica.' },
                { date: '15 abr', title: 'Vacina V10', sub: 'Lote NB-2941 · venc. 12/27', tone: 'sage', tag: 'Vacina', body: '' },
                { date: '15 abr', title: 'Hemograma completo', sub: 'Lab Vetcheck · resultado normal', tone: 'sage', tag: 'Exame', body: '' },
              ].map((e, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, position: 'relative', paddingBottom: 18 }}>
                  <div style={{ width: 110, flexShrink: 0, paddingTop: 16 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-mute)', letterSpacing: 0.1 }}>
                      {e.date}
                    </div>
                  </div>
                  <div style={{ position: 'relative', width: 14, flexShrink: 0 }}>
                    <span style={{
                      position: 'absolute', top: 22, left: 4, width: 9, height: 9,
                      borderRadius: '50%',
                      background: e.tone === 'ocean' ? 'var(--ocean)' : e.tone === 'sage' ? 'var(--sage)' : e.tone === 'amber' ? 'var(--amber)' : 'var(--clay)',
                      border: '2px solid var(--bg)', boxShadow: '0 0 0 2px var(--border)', zIndex: 1,
                    }}/>
                    {i < 4 && <span style={{
                      position: 'absolute', top: 32, left: 8, bottom: -18, width: 1,
                      background: 'var(--border-strong)',
                    }}/>}
                  </div>
                  <div style={{
                    flex: 1, padding: '14px 16px', background: 'var(--bg-elev)',
                    border: '1px solid var(--border)', borderRadius: 10,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 500, color: 'var(--text)' }}>
                          {e.title}
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--text-mute)', marginTop: 2 }}>{e.sub}</div>
                      </div>
                      <span className={`kc-badge kc-badge-${e.tone === 'sage' ? 'ok' : e.tone === 'amber' ? 'warn' : 'info'}`}>{e.tag}</span>
                    </div>
                    {e.body && <div style={{
                      marginTop: 10, fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.55,
                      paddingTop: 10, borderTop: '1px dashed var(--border)',
                    }}>{e.body}</div>}
                  </div>
                </div>
              ))}
            </div>

            {/* Right rail */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

              {/* Vitals */}
              <div className="kc-card">
                <div className="kc-sec-h">Sinais vitais · última visita</div>
                {[
                  { k: 'Peso', v: '22.4', u: 'kg', d: '+0.3' },
                  { k: 'Temperatura', v: '38.7', u: '°C', d: 'normal' },
                  { k: 'FC', v: '92', u: 'bpm', d: 'normal' },
                  { k: 'FR', v: '24', u: 'mpm', d: 'normal' },
                ].map((m, i) => (
                  <div key={m.k} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                    padding: '10px 0', borderTop: i > 0 ? '1px dashed var(--border)' : 'none',
                  }}>
                    <span style={{ fontSize: 13, color: 'var(--text-soft)' }}>{m.k}</span>
                    <span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 600, color: 'var(--text)' }}>{m.v}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-mute)', marginLeft: 3 }}>{m.u}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--sage)', marginLeft: 6 }}>● {m.d}</span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Active conditions */}
              <div className="kc-card">
                <div className="kc-sec-h">Condições ativas</div>
                {[
                  { name: 'Atopia canina', date: 'desde 28 abr', tone: 'amber' },
                  { name: 'Sensibilidade frango', date: 'desde 12 mar', tone: 'amber' },
                  { name: 'Castrada', date: '14 fev 2024', tone: 'mute' },
                ].map((c, i) => (
                  <div key={c.name} style={{
                    display: 'flex', justifyContent: 'space-between', padding: '10px 0',
                    borderTop: i > 0 ? '1px dashed var(--border)' : 'none', alignItems: 'center',
                  }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>{c.name}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-mute)', marginTop: 1 }}>{c.date}</div>
                    </div>
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: c.tone === 'amber' ? 'var(--amber)' : 'var(--text-mute)',
                    }}/>
                  </div>
                ))}
              </div>

              {/* Luna AI */}
              <div className="kc-card" style={{
                background: 'linear-gradient(135deg, var(--ocean) 0%, #2D5E7E 100%)', color: '#FFFCF7', borderColor: 'transparent',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.18, textTransform: 'uppercase',
                  color: 'var(--amber-bright)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <KCIcon name="luna" size={12} color="var(--amber-bright)"/> Luna · monitoramento
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1.2, marginBottom: 12 }}>
                  Sono <em style={{ fontStyle: 'italic', color: 'var(--amber-bright)' }}>+18%</em> esta semana
                </div>
                <div style={{ fontSize: 12, opacity: 0.85, lineHeight: 1.5, marginBottom: 14 }}>
                  Padrão noturno mais regular após início do Apoquel. Atividade diurna estável (4.2k passos/dia).
                </div>
                <button style={{
                  width: '100%', padding: '10px', background: 'rgba(255,252,247,0.12)',
                  color: '#FFFCF7', border: '1px solid rgba(255,252,247,0.2)', borderRadius: 8,
                  fontSize: 12, fontWeight: 500, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                }}>
                  Ver dashboard completo <KCIcon name="arrowR" size={12}/>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScrCAgenda, ScrCPatientDetail });
