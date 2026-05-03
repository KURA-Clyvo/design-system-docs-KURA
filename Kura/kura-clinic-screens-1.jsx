// kura-clinic-screens-1.jsx — Bloco 1: Login + Dashboard

// ═══════════════════════════════════════════════════════════════
// 01 · LOGIN
// ═══════════════════════════════════════════════════════════════
function ScrCLogin() {
  return (
    <div className="kc-desktop" style={{ gridTemplateColumns: '1fr', display: 'flex' }}>
      {/* Left brand panel */}
      <div style={{
        flex: '0 0 540px',
        background: 'var(--ocean)',
        color: 'var(--text-on-ocean)',
        position: 'relative',
        overflow: 'hidden',
        padding: '56px 56px 40px',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        {/* Decorative orbs */}
        <div style={{
          position: 'absolute', top: -120, right: -80,
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,156,32,0.28) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute', bottom: -160, left: -60,
          width: 360, height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(143,176,136,0.20) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}/>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 14 }}>
          <KuraLogo size={44} color="#FFFCF7"/>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1, letterSpacing: '-0.02em' }}>
              Kura<em style={{ fontStyle: 'italic', color: 'var(--amber-bright)' }}>.</em>
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              letterSpacing: 0.18, textTransform: 'uppercase', opacity: 0.7, marginTop: 4,
            }}>Sistema Clínico · Clyvo Vet</div>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            letterSpacing: 0.18, textTransform: 'uppercase',
            color: 'var(--amber-bright)', marginBottom: 16,
          }}>— A clínica, registrada</div>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 300,
            fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.025em',
          }}>
            O cuidado<br/>
            que você dá,<br/>
            <em style={{ fontStyle: 'italic', color: 'var(--amber-bright)' }}>sem ruído.</em>
          </div>
          <div style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.78, marginTop: 22, maxWidth: 380 }}>
            Prontuário, agenda, teleorientação CFMV-compliant e o módulo Luna de monitoramento contínuo — em uma única plataforma desenhada para veterinários.
          </div>
        </div>

        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex', gap: 28, paddingTop: 28,
          borderTop: '1px solid rgba(255,252,247,0.18)',
        }}>
          {[
            { k: 'Clínicas', v: '142' },
            { k: 'Veterinários', v: '486' },
            { k: 'Pacientes', v: '38.4k' },
          ].map(s => (
            <div key={s.k}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 9,
                letterSpacing: 0.18, textTransform: 'uppercase', opacity: 0.6,
              }}>{s.k}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, marginTop: 4 }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right form */}
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 40, background: 'var(--bg)',
      }}>
        <div style={{ width: 400 }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            letterSpacing: 0.18, textTransform: 'uppercase',
            color: 'var(--ocean)', marginBottom: 12,
          }}>— Acesso da equipe</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 38, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 8px',
          }}>Bem-vindo de <em style={{ fontStyle: 'italic', color: 'var(--ocean)', fontWeight: 400 }}>volta.</em></h2>
          <div style={{ fontSize: 14, color: 'var(--text-mute)', marginBottom: 28 }}>
            Clínica <strong style={{ color: 'var(--text)', fontWeight: 600 }}>PetLife · Vila Mariana</strong>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <div className="kc-label req">CRMV ou Email</div>
              <input className="kc-input" defaultValue="ana.ribeiro@petlife.vet.br" readOnly/>
            </div>
            <div>
              <div className="kc-label req" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Senha</span>
                <span style={{ color: 'var(--ocean)', textTransform: 'none', letterSpacing: 0, fontFamily: 'var(--font-body)', fontSize: 11, cursor: 'pointer' }}>Esqueci a senha</span>
              </div>
              <input className="kc-input" type="password" defaultValue="••••••••••••" readOnly/>
            </div>

            <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text-soft)', cursor: 'pointer', marginTop: 4 }}>
              <span style={{
                width: 18, height: 18, borderRadius: 5,
                border: '1.5px solid var(--ocean)', background: 'var(--ocean)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
              }}><KCIcon name="check" size={12} stroke={3}/></span>
              Lembrar neste dispositivo
            </label>

            <button className="kc-btn kc-btn-primary" style={{ width: '100%', marginTop: 12, height: 48 }}>
              Entrar no sistema <KCIcon name="arrowR" size={16}/>
            </button>

            <div style={{
              padding: '14px 16px', background: 'var(--ocean-pale)',
              borderRadius: 10, fontSize: 12, color: 'var(--ocean)',
              display: 'flex', alignItems: 'flex-start', gap: 10, marginTop: 8,
            }}>
              <KCIcon name="alert" size={14} stroke={2}/>
              <div>
                <strong style={{ fontWeight: 600 }}>Acesso por convite.</strong> Cadastros novos são feitos pelo administrador da clínica.
              </div>
            </div>
          </div>

          <div style={{
            marginTop: 32, paddingTop: 20,
            borderTop: '1px solid var(--border)',
            display: 'flex', justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)', fontSize: 10,
            letterSpacing: 0.14, textTransform: 'uppercase', color: 'var(--text-mute)',
          }}>
            <span>Clyvo Vet · CFMV 1.465/2022</span>
            <span>LGPD · AES-256</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 02 · DASHBOARD
// ═══════════════════════════════════════════════════════════════
function ScrCDashboard() {
  const upcoming = [
    { time: '09:30', pet: 'Luna', breed: 'Border Collie', tutor: 'Marina S.', type: 'consult', tone: 'sage' },
    { time: '10:15', pet: 'Thor', breed: 'Labrador', tutor: 'Paulo M.', type: 'retorno', tone: 'ocean' },
    { time: '11:00', pet: 'Mia',  breed: 'SRD',        tutor: 'Juliana F.', type: 'tele', tone: 'amber' },
    { time: '14:00', pet: 'Bolt', breed: 'Poodle',    tutor: 'João C.',     type: 'urgência', tone: 'clay' },
    { time: '15:30', pet: 'Nina', breed: 'Persa',     tutor: 'Rafaela B.',  type: 'vacina', tone: 'sage' },
  ];
  const portraits = ['border', 'lab', 'srd', 'poodle', 'persa'];
  const typeLabel = { consult: 'Consulta', retorno: 'Retorno', tele: 'Teleorientação', 'urgência': 'Urgência', vacina: 'Vacinação' };

  return (
    <div className="kc-desktop">
      <KCSidebar active="dashboard"/>
      <div className="kc-main">
        <KCTopbar crumb="HOME › <b>Painel do dia · Quinta, 07 de Maio · 2026</b>"/>
        <div className="kc-content">
          <KCPageHeader
            kicker="— Dashboard"
            title="Bom dia," em="Dra. Ana."
            sub="Você tem 12 atendimentos hoje · próximo em 14 minutos"
            actions={<>
              <button className="kc-btn kc-btn-ghost"><KCIcon name="download" size={14}/> Relatório</button>
              <button className="kc-btn kc-btn-primary"><KCIcon name="plus" size={14}/> Nova consulta</button>
            </>}
          />

          {/* 4 Metric cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
            <div className="kc-metric">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="lbl">Consultas hoje</span>
                <KCSpark values={[3,4,5,6,7,8,9]} color="var(--ocean)" height={20}/>
              </div>
              <div className="val">12</div>
              <div className="delta">+3 vs ontem · meta 14</div>
            </div>
            <div className="kc-metric" style={{ borderColor: 'rgba(200,129,13,0.30)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="lbl" style={{ color: 'var(--amber)' }}>Aguardando prescrição</span>
                <span className="kc-badge kc-badge-warn">3 abertos</span>
              </div>
              <div className="val" style={{ color: 'var(--amber)' }}>03</div>
              <div className="delta">2 com mais de 1h em aberto</div>
            </div>
            <div className="kc-metric alert">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="lbl">Vacinas atrasadas</span>
                <span className="kc-badge kc-badge-alert">crítico</span>
              </div>
              <div className="val">07</div>
              <div className="delta">2 há mais de 60 dias</div>
            </div>
            <div className="kc-metric">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="lbl">Receita média</span>
                <KCSpark values={[5,4,7,6,8,9,11]} color="var(--sage)" height={20}/>
              </div>
              <div className="val" style={{ fontSize: 36 }}>R$ 4.820</div>
              <div className="delta">+12% · semana</div>
            </div>
          </div>

          {/* 3 columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 20 }}>

            {/* Col 1 — Próximos atendimentos */}
            <div className="kc-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{
                padding: '16px 20px', borderBottom: '1px solid var(--border)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, color: 'var(--text)' }}>
                    Próximos atendimentos
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.14, color: 'var(--text-mute)', marginTop: 2 }}>
                    SALA 2 · DRA. ANA RIBEIRO
                  </div>
                </div>
                <button style={{
                  background: 'transparent', border: 0, color: 'var(--ocean)',
                  fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.12,
                  textTransform: 'uppercase', cursor: 'pointer',
                }}>Ver agenda →</button>
              </div>
              {upcoming.map((u, i) => (
                <div key={u.time} style={{
                  padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 14,
                  borderBottom: i < upcoming.length - 1 ? '1px solid var(--border)' : 'none',
                  background: i === 0 ? 'var(--ocean-pale)' : 'transparent',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600,
                    color: i === 0 ? 'var(--ocean)' : 'var(--text)', width: 52,
                  }}>{u.time}</div>
                  <KCPetPortrait palette={portraits[i]} size={42}/>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)' }}>
                      {u.pet} <span style={{ color: 'var(--text-mute)', fontWeight: 400 }}>· {u.breed}</span>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-mute)', marginTop: 2 }}>{u.tutor}</div>
                  </div>
                  <span className={`kc-badge kc-badge-${u.tone === 'sage' ? 'ok' : u.tone === 'amber' ? 'warn' : u.tone === 'clay' ? 'alert' : 'info'}`}>
                    {typeLabel[u.type]}
                  </span>
                  {i === 0 && <button className="kc-btn kc-btn-primary" style={{ height: 32, padding: '0 14px', fontSize: 12 }}>
                    Iniciar →
                  </button>}
                </div>
              ))}
            </div>

            {/* Col 2 — Agenda mini */}
            <div className="kc-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="kc-sec-h">
                Esta semana
                <span style={{ color: 'var(--ocean)', cursor: 'pointer', textTransform: 'none', letterSpacing: 0, fontSize: 11 }}>Sem 19 →</span>
              </div>
              {/* Mini calendar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 16 }}>
                {['SEG','TER','QUA','QUI','SEX','SÁB','DOM'].map((d, i) => (
                  <div key={d} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 0.1,
                    color: 'var(--text-mute)', textAlign: 'center', padding: '4px 0',
                  }}>{d}</div>
                ))}
                {[5, 6, 7, 8, 9, 10, 11].map((d, i) => {
                  const today = i === 2;
                  const load = [4, 7, 12, 9, 11, 5, 0][i];
                  return (
                    <div key={d} style={{
                      aspectRatio: '1', padding: 4, borderRadius: 8,
                      background: today ? 'var(--ocean)' : 'var(--surface-2)',
                      color: today ? '#fff' : 'var(--text)',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      gap: 2, position: 'relative',
                    }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, lineHeight: 1 }}>{d}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, opacity: 0.7 }}>{load > 0 ? `${load}` : '—'}</div>
                    </div>
                  );
                })}
              </div>

              <div style={{
                padding: 14, background: 'var(--ocean-pale)', borderRadius: 10,
                display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--ocean)', fontWeight: 500 }}>Quinta · 07 mai</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--ocean)', fontWeight: 500, lineHeight: 1, marginTop: 2 }}>12 consultas</div>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: 11, color: 'var(--ocean)', opacity: 0.85 }}>
                    <div>9 presencial</div>
                    <div>3 telemedicina</div>
                  </div>
                </div>
                <div style={{ height: 8, background: 'rgba(26,58,82,0.15)', borderRadius: 99, overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: '38%', background: 'var(--sage)' }}/>
                  <div style={{ width: '22%', background: 'var(--ocean)' }}/>
                  <div style={{ width: '15%', background: 'var(--amber)' }}/>
                  <div style={{ width: '8%', background: 'var(--clay)' }}/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ocean)', opacity: 0.85 }}>
                  <span>● Concluídas 38%</span>
                  <span>17% livre</span>
                </div>
              </div>

              <button className="kc-btn kc-btn-ghost" style={{ marginTop: 14, width: '100%' }}>
                <KCIcon name="plus" size={14}/> Novo agendamento
              </button>
            </div>

            {/* Col 3 — Alertas */}
            <div className="kc-card">
              <div className="kc-sec-h" style={{ color: 'var(--clay)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <KCIcon name="alert" size={12}/> Atenção
                </span>
                <span style={{ color: 'var(--text-mute)', textTransform: 'none', letterSpacing: 0, fontSize: 11 }}>10 itens</span>
              </div>

              {[
                { tone: 'clay', tag: 'Vacina · 64 dias', pet: 'Rex', tutor: 'Bia · Antirrábica vencida' },
                { tone: 'clay', tag: 'Retorno · vencido', pet: 'Mel', tutor: 'José · pós-cirúrgico há 8d' },
                { tone: 'amber', tag: 'Receita · pendente', pet: 'Nina', tutor: 'Rafaela · Bravecto' },
                { tone: 'amber', tag: 'Tele · ativa', pet: 'Mia', tutor: 'Sala 4 · 12 min' },
                { tone: 'ocean', tag: 'Exame · disponível', pet: 'Bolt', tutor: 'Hemograma · 09:42' },
              ].map((a, i) => (
                <div key={i} style={{
                  padding: '12px 0', display: 'flex', alignItems: 'flex-start', gap: 10,
                  borderTop: i > 0 ? '1px dashed var(--border)' : 'none',
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%', marginTop: 7,
                    background: a.tone === 'clay' ? 'var(--clay)' : a.tone === 'amber' ? 'var(--amber)' : 'var(--ocean)',
                    flexShrink: 0,
                  }}/>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: 0.12, textTransform: 'uppercase',
                      color: a.tone === 'clay' ? 'var(--clay)' : a.tone === 'amber' ? 'var(--amber)' : 'var(--ocean)',
                    }}>{a.tag}</div>
                    <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500, marginTop: 3 }}>{a.pet}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-mute)' }}>{a.tutor}</div>
                  </div>
                  <KCIcon name="chevR" size={14} color="var(--text-mute)"/>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScrCLogin, ScrCDashboard });
