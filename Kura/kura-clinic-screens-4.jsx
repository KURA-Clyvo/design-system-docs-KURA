// kura-clinic-screens-4.jsx — Bloco 4: Patient list, Luna AI dashboard, Settings, WhatsApp send modal

// ═══════════════════════════════════════════════════════════════
// 08 · PATIENTS LIST
// ═══════════════════════════════════════════════════════════════
function ScrCPatients() {
  const rows = [
    { name: 'Luna',  br: 'Border Collie',  age: '4a 2m', sex: '♀', wt: '22.4', tutor: 'Marina Souza',    last: '07 mai · hoje',    next: '06 jun', tags: ['atopia','luna-ai'], port: 'border' },
    { name: 'Thor',  br: 'Labrador',       age: '6a',     sex: '♂', wt: '34.8', tutor: 'Paulo Mendes',     last: '02 mai',           next: '—',      tags: ['displasia'], port: 'lab' },
    { name: 'Mia',   br: 'SRD',            age: '7a',     sex: '♀', wt: '4.2',  tutor: 'Juliana Faria',    last: '07 mai · tele',    next: '14 mai', tags: ['drc'], port: 'srd' },
    { name: 'Bolt',  br: 'Poodle',         age: '2a 5m', sex: '♂', wt: '6.1',  tutor: 'João Carvalho',    last: 'agendado · hoje',  next: '—',      tags: ['castrado'], port: 'poodle' },
    { name: 'Nina',  br: 'Persa',          age: '5a',     sex: '♀', wt: '3.8',  tutor: 'Rafaela Borges',   last: '15 abr',           next: '15 mai', tags: ['fiv-'], port: 'persa' },
    { name: 'Rex',   br: 'SRD · grande',   age: '9a',     sex: '♂', wt: '28.1', tutor: 'Bia Rocha',        last: '02 mar',           next: 'vacina · 64d', tags: ['vacina-atrasada'], port: 'lab' },
    { name: 'Mel',   br: 'Poodle',         age: '11a',    sex: '♀', wt: '5.4',  tutor: 'José Pinheiro',    last: '28 abr · cirurgia',next: 'retorno vencido', tags: ['retorno'], port: 'poodle' },
    { name: 'Pippa', br: 'Husky Siberiano',age: '3a',     sex: '♀', wt: '21.5', tutor: 'Camila Toledo',    last: '20 abr',           next: '20 mai', tags: ['dermato'], port: 'husky' },
    { name: 'Tobby', br: 'Beagle',         age: '12a',    sex: '♂', wt: '14.2', tutor: 'André Lima',       last: '14 abr',           next: 'geriátrico', tags: ['idoso'], port: 'lab' },
  ];
  const tagColor = { atopia: 'amber', 'luna-ai': 'info', displasia: 'amber', drc: 'alert', castrado: 'mute', 'fiv-': 'ok', 'vacina-atrasada': 'alert', retorno: 'alert', dermato: 'warn', idoso: 'mute' };

  return (
    <div className="kc-desktop">
      <KCSidebar active="patients"/>
      <div className="kc-main">
        <KCTopbar crumb="HOME › <b>Pacientes · 1.482 ativos</b>"/>
        <div className="kc-content">
          <KCPageHeader
            kicker="— Cadastro"
            title="Pacientes" em="ativos"
            sub="1.482 cadastrados · 9 em destaque"
            actions={<>
              <button className="kc-btn kc-btn-ghost"><KCIcon name="download" size={14}/> Exportar</button>
              <button className="kc-btn kc-btn-primary"><KCIcon name="plus" size={14}/> Cadastrar</button>
            </>}
          />

          {/* Filter chips */}
          <div style={{
            display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16,
            flexWrap: 'wrap',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'var(--bg-elev)', border: '1px solid var(--border)',
              padding: '7px 14px', borderRadius: 999,
              fontSize: 13, color: 'var(--text-mute)', minWidth: 280,
            }}>
              <KCIcon name="search" size={14}/>
              Buscar por nome, tutor, microchip…
            </div>
            {[
              { l: 'Todos', a: true, n: '1.482' },
              { l: 'Cães', n: '982' },
              { l: 'Gatos', n: '418' },
              { l: 'Exóticos', n: '82' },
              { l: 'Vacina atrasada', n: '23', tone: 'clay' },
              { l: 'Retorno pendente', n: '11', tone: 'amber' },
              { l: 'Luna AI', n: '47', tone: 'ocean' },
            ].map(c => (
              <button key={c.l} style={{
                fontFamily: 'var(--font-body)', fontSize: 12,
                padding: '7px 12px', borderRadius: 999, cursor: 'pointer',
                background: c.a ? 'var(--ocean)' : 'var(--bg-elev)',
                color: c.a ? '#fff' : (c.tone ? `var(--${c.tone === 'clay' ? 'clay' : c.tone === 'amber' ? 'amber' : 'ocean'})` : 'var(--text-soft)'),
                border: '1px solid', borderColor: c.a ? 'var(--ocean)' : 'var(--border)',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                {c.l}
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  background: c.a ? 'rgba(255,255,255,0.2)' : 'var(--surface-2)',
                  color: c.a ? '#fff' : 'var(--text-mute)',
                  padding: '1px 6px', borderRadius: 999,
                }}>{c.n}</span>
              </button>
            ))}
          </div>

          {/* Table */}
          <div style={{
            background: 'var(--bg-elev)', border: '1px solid var(--border)',
            borderRadius: 14, overflow: 'hidden',
          }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '60px 1.4fr 0.9fr 1.2fr 0.9fr 0.9fr 1.2fr 50px',
              padding: '12px 18px', borderBottom: '1px solid var(--border)',
              background: 'var(--surface-2)',
              fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.14,
              textTransform: 'uppercase', color: 'var(--text-mute)',
            }}>
              <div></div>
              <div>Paciente</div>
              <div>Idade · sexo · peso</div>
              <div>Tutor</div>
              <div>Última visita</div>
              <div>Próxima ação</div>
              <div>Tags</div>
              <div></div>
            </div>
            {rows.map((r, i) => (
              <div key={r.name} style={{
                display: 'grid', gridTemplateColumns: '60px 1.4fr 0.9fr 1.2fr 0.9fr 0.9fr 1.2fr 50px',
                padding: '14px 18px', alignItems: 'center',
                borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none',
                background: i === 0 ? 'var(--ocean-pale)' : 'transparent',
              }}>
                <KCPetPortrait palette={r.port} size={36}/>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)' }}>{r.name}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--text-mute)' }}>{r.br}</div>
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
                  {r.age} · {r.sex} · {r.wt}kg
                </div>
                <div style={{ fontSize: 13, color: 'var(--text)' }}>{r.tutor}</div>
                <div style={{ fontSize: 12.5, color: 'var(--text-mute)' }}>{r.last}</div>
                <div style={{ fontSize: 12.5, color: r.next.includes('vencido') || r.next.includes('atrasada') || r.next.includes('64d') ? 'var(--clay)' : 'var(--text-soft)' }}>
                  {r.next}
                </div>
                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                  {r.tags.map(t => (
                    <span key={t} className={`kc-badge kc-badge-${tagColor[t] || 'mute'}`} style={{ fontSize: 9.5, padding: '2px 6px' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <button style={{ background: 'transparent', border: 0, color: 'var(--text-mute)', cursor: 'pointer' }}>
                  <KCIcon name="more" size={16}/>
                </button>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-mute)', letterSpacing: 0.12,
          }}>
            <span>1–9 de 1.482</span>
            <div style={{ display: 'flex', gap: 4 }}>
              {['‹', '1', '2', '3', '…', '165', '›'].map((p, i) => (
                <span key={i} style={{
                  padding: '4px 10px', borderRadius: 6,
                  background: p === '1' ? 'var(--ocean)' : 'transparent',
                  color: p === '1' ? '#fff' : 'var(--text-mute)',
                  cursor: 'pointer',
                }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 09 · LUNA AI DASHBOARD (monitoramento contínuo)
// ═══════════════════════════════════════════════════════════════
function ScrCLuna() {
  return (
    <div className="kc-desktop" data-theme="dark">
      <KCSidebar active="luna"/>
      <div className="kc-main">
        <KCTopbar crumb="HOME › LUNA · <b>Painel inteligente · 47 pacientes monitorados</b>"/>
        <div className="kc-content">

          {/* Hero */}
          <div style={{
            padding: 28, borderRadius: 18, marginBottom: 24,
            background: `
              radial-gradient(circle at 85% 10%, rgba(232,156,32,0.25) 0%, transparent 45%),
              radial-gradient(circle at 10% 90%, rgba(143,176,136,0.18) 0%, transparent 45%),
              linear-gradient(135deg, #0E1A24 0%, #1A3A52 100%)
            `,
            color: '#FFFCF7', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.18,
                  textTransform: 'uppercase', color: '#FFD980', marginBottom: 12,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <KCIcon name="luna" size={14} color="#FFD980"/> — Luna · monitoramento contínuo
                </div>
                <h1 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 44,
                  letterSpacing: '-0.025em', lineHeight: 1.1, margin: 0,
                }}>
                  3 pacientes precisam<br/>
                  da sua <em style={{ fontStyle: 'italic', color: '#FFD980', fontWeight: 400 }}>atenção hoje.</em>
                </h1>
                <div style={{ fontSize: 14, opacity: 0.78, marginTop: 12, maxWidth: 480 }}>
                  Luna analisou 47 pacientes nas últimas 24h cruzando wearables, padrões de sono, alimentação e dados clínicos.
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  { v: '47', k: 'monitorados' },
                  { v: '3', k: 'alertas', tone: '#D9624A' },
                  { v: '12', k: 'estáveis', tone: '#A4C49C' },
                  { v: '94%', k: 'precisão' },
                ].map(s => (
                  <div key={s.k} style={{
                    padding: '14px 18px', background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12,
                    minWidth: 96,
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 500, color: s.tone || '#FFFCF7', lineHeight: 1 }}>
                      {s.v}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 0.14, textTransform: 'uppercase', opacity: 0.65, marginTop: 6 }}>
                      {s.k}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Two columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20 }}>

            {/* Alert pacientes */}
            <div>
              <div className="kc-sec-h">Pacientes em alerta</div>

              {[
                {
                  pet: 'Mel', port: 'poodle', breed: 'Poodle ♀ 11a · 5.4 kg', tutor: 'José Pinheiro',
                  alert: 'Atividade ↓ 38% em 72h',
                  detail: 'Mel está dormindo 4h a mais que sua média. Atividade matinal caiu de 1.8k para 1.1k passos. Padrão similar ao período pré-cirúrgico de 2024.',
                  conf: 89, tone: 'clay',
                  actions: ['Agendar consulta', 'Mensagem tutor'],
                },
                {
                  pet: 'Rex', port: 'lab', breed: 'SRD ♂ 9a · 28.1 kg', tutor: 'Bia Rocha',
                  alert: 'Padrão de bebida +120%',
                  detail: 'Aumento súbito do consumo de água nos últimos 5 dias. Pode indicar polidipsia (diabetes, DRC, Cushing). Recomendado bioquímico + urinálise.',
                  conf: 76, tone: 'amber',
                  actions: ['Pedir exames', 'Ver histórico'],
                },
                {
                  pet: 'Tobby', port: 'lab', breed: 'Beagle ♂ 12a · 14.2 kg', tutor: 'André Lima',
                  alert: 'FC noturna irregular',
                  detail: 'Coleira detectou episódios de FC >180 bpm durante o sono em 4 das últimas 7 noites. Padrão atípico para idade e raça.',
                  conf: 71, tone: 'amber',
                  actions: ['Agendar ECG', 'Discutir com cardio'],
                },
              ].map((p, i) => (
                <div key={p.pet} style={{
                  padding: 18, background: 'var(--bg-elev)',
                  border: '1px solid var(--border)',
                  borderLeft: `3px solid var(--${p.tone})`,
                  borderRadius: 12, marginBottom: 12,
                }}>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <KCPetPortrait palette={p.port} size={56}/>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, color: 'var(--text)' }}>
                            {p.pet} <em style={{ fontStyle: 'italic', color: `var(--${p.tone})`, fontWeight: 400 }}>· {p.alert}</em>
                          </div>
                          <div style={{ fontSize: 12, color: 'var(--text-mute)', marginTop: 2 }}>{p.breed} · {p.tutor}</div>
                        </div>
                        <span style={{
                          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.12,
                          color: `var(--${p.tone})`,
                          background: `var(--${p.tone}-pale)`,
                          padding: '4px 10px', borderRadius: 999,
                        }}>{p.conf}% confiança</span>
                      </div>
                      <div style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--text-soft)', marginTop: 10 }}>
                        {p.detail}
                      </div>
                      {/* Mini chart */}
                      <div style={{
                        marginTop: 12, padding: 10, background: 'var(--surface-2)', borderRadius: 8,
                        display: 'flex', alignItems: 'flex-end', gap: 3, height: 40,
                      }}>
                        {[6,5,7,6,8,5,4,5,3,4,2,3].map((v, vi) => (
                          <div key={vi} style={{
                            flex: 1, height: `${v * 12}%`, borderRadius: '2px 2px 0 0',
                            background: vi >= 8 ? `var(--${p.tone})` : 'var(--border-strong)',
                          }}/>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                        {p.actions.map((a, ai) => (
                          <button key={a} className={`kc-btn ${ai === 0 ? `kc-btn-${p.tone === 'clay' ? 'danger' : 'primary'}` : 'kc-btn-ghost'}`} style={{ height: 32, padding: '0 14px', fontSize: 12 }}>
                            {a}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right rail */}
            <div>
              <div className="kc-sec-h">Tendências da clínica</div>
              <div className="kc-card" style={{ marginBottom: 16 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'var(--text)', marginBottom: 4 }}>
                  Atopia <em style={{ fontStyle: 'italic', color: 'var(--ocean)', fontWeight: 400 }}>+24%</em>
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-mute)', marginBottom: 14 }}>
                  Casos de atopia canina nos últimos 30 dias vs ano anterior
                </div>
                <KCSpark values={[3,4,3,5,6,5,7,8,7,9,11,13]} color="var(--ocean)" height={60}/>
                <div style={{
                  marginTop: 12, padding: 10, background: 'var(--ocean-pale)', borderRadius: 8,
                  fontSize: 11.5, color: 'var(--ocean)', lineHeight: 1.5,
                }}>
                  <strong>Insight:</strong> pico coincide com troca de estação. Considerar protocolo preventivo para 12 pacientes em risco.
                </div>
              </div>

              <div className="kc-card" style={{ marginBottom: 16 }}>
                <div className="kc-sec-h">Wearables conectados</div>
                {[
                  { d: 'Coleira PetPace', n: 32, color: 'var(--ocean)' },
                  { d: 'FitBark', n: 11, color: 'var(--sage)' },
                  { d: 'Whistle GPS', n: 4, color: 'var(--amber)' },
                ].map(d => (
                  <div key={d.d} style={{
                    display: 'flex', justifyContent: 'space-between', padding: '8px 0',
                    fontSize: 13,
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text)' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: d.color }}/>
                      {d.d}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-mute)' }}>{d.n} pacientes</span>
                  </div>
                ))}
              </div>

              <button className="kc-btn kc-btn-ghost" style={{ width: '100%' }}>
                <KCIcon name="settings" size={14}/> Configurar Luna AI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 10 · CONFIGURAÇÕES (org / equipe)
// ═══════════════════════════════════════════════════════════════
function ScrCSettings() {
  return (
    <div className="kc-desktop">
      <KCSidebar active="settings"/>
      <div className="kc-main">
        <KCTopbar crumb="HOME › CONFIGURAÇÕES › <b>Equipe e permissões</b>"/>
        <div className="kc-content" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 28, padding: 28 }}>

          {/* Sub-nav */}
          <div>
            <div className="kc-sec-h">Configurações</div>
            {[
              { l: 'Clínica', i: 'settings' },
              { l: 'Equipe', i: 'patients', a: true },
              { l: 'Plantões', i: 'agenda' },
              { l: 'Horários', i: 'agenda' },
              { l: 'Receituário', i: 'rx' },
              { l: 'Luna AI', i: 'luna' },
              { l: 'Integrações', i: 'share' },
              { l: 'Faturamento', i: 'consult' },
              { l: 'LGPD · auditoria', i: 'alert' },
            ].map(it => (
              <div key={it.l} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                borderRadius: 8, marginBottom: 2, cursor: 'pointer',
                background: it.a ? 'var(--ocean-pale)' : 'transparent',
                color: it.a ? 'var(--ocean)' : 'var(--text-soft)',
                fontSize: 13, fontWeight: it.a ? 500 : 400,
              }}>
                <KCIcon name={it.i} size={14}/>
                {it.l}
              </div>
            ))}
          </div>

          {/* Main panel */}
          <div>
            <KCPageHeader
              kicker="— Configurações"
              title="Equipe" em="& permissões"
              sub="8 membros ativos · 2 pendentes · 14 funções"
              actions={<button className="kc-btn kc-btn-primary"><KCIcon name="plus" size={14}/> Convidar</button>}
            />

            <div style={{
              background: 'var(--bg-elev)', border: '1px solid var(--border)',
              borderRadius: 14, overflow: 'hidden',
            }}>
              <div style={{
                display: 'grid', gridTemplateColumns: '2fr 1fr 1.2fr 1fr 0.8fr 60px',
                padding: '12px 18px', background: 'var(--surface-2)',
                borderBottom: '1px solid var(--border)',
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.14,
                textTransform: 'uppercase', color: 'var(--text-mute)',
              }}>
                <div>Membro</div>
                <div>Função</div>
                <div>Permissões</div>
                <div>Última atividade</div>
                <div>Status</div>
                <div></div>
              </div>
              {[
                { name: 'Dra. Ana Ribeiro', role: 'Veterinária responsável', email: 'ana@petlife.vet.br', perms: ['admin', 'cirurgia', 'tele'], last: 'agora', status: 'ok', init: 'AR', color: '#C8810D,#D9624A', isMe: true },
                { name: 'Dr. Pedro Castro', role: 'Veterinário', email: 'pedro@petlife.vet.br', perms: ['cirurgia', 'tele'], last: 'há 12 min', status: 'ok', init: 'PC', color: '#1A3A52,#2D5E7E' },
                { name: 'Dra. Sofia Mendes', role: 'Veterinária dermato', email: 'sofia@petlife.vet.br', perms: ['consulta'], last: '23 abr', status: 'away', init: 'SM', color: '#4A6944,#7A9472' },
                { name: 'Bruno Silva', role: 'Auxiliar', email: 'bruno@petlife.vet.br', perms: ['agenda', 'estoque'], last: 'há 2h', status: 'ok', init: 'BS', color: '#6B5942,#8A7458' },
                { name: 'Juliana Reis', role: 'Recepção', email: 'juliana@petlife.vet.br', perms: ['agenda'], last: 'agora', status: 'ok', init: 'JR', color: '#D9624A,#B14A2F' },
                { name: 'Marcos Oliveira', role: 'Veterinário · convite', email: 'marcos@email.com', perms: [], last: 'convite enviado 02 mai', status: 'pending', init: 'MO', color: '#8A7458,#6B5942' },
              ].map((m, i) => (
                <div key={m.name} style={{
                  display: 'grid', gridTemplateColumns: '2fr 1fr 1.2fr 1fr 0.8fr 60px',
                  padding: '14px 18px', alignItems: 'center',
                  borderBottom: i < 5 ? '1px solid var(--border)' : 'none',
                  background: m.isMe ? 'var(--ocean-pale)' : 'transparent',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: `linear-gradient(135deg, ${m.color})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontFamily: 'var(--font-display)', fontStyle: 'italic',
                      fontWeight: 500, fontSize: 14,
                    }}>{m.init}</div>
                    <div>
                      <div style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--text)' }}>
                        {m.name} {m.isMe && <span style={{ fontSize: 10, color: 'var(--ocean)', fontWeight: 400 }}>· você</span>}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--text-mute)' }}>{m.email}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-soft)' }}>{m.role}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {m.perms.length > 0 ? m.perms.map(p => (
                      <span key={p} className="kc-badge kc-badge-mute" style={{ fontSize: 9.5, padding: '2px 6px' }}>{p}</span>
                    )) : <span style={{ fontSize: 11, color: 'var(--text-mute)', fontStyle: 'italic' }}>aguardando</span>}
                  </div>
                  <div style={{ fontSize: 11.5, color: 'var(--text-mute)' }}>{m.last}</div>
                  <div>
                    <span className={`kc-badge ${m.status === 'ok' ? 'kc-badge-ok' : m.status === 'pending' ? 'kc-badge-warn' : 'kc-badge-mute'}`}>
                      {m.status === 'ok' ? '● ativa' : m.status === 'pending' ? 'pendente' : 'ausente'}
                    </span>
                  </div>
                  <button style={{ background: 'transparent', border: 0, color: 'var(--text-mute)', cursor: 'pointer' }}>
                    <KCIcon name="more" size={16}/>
                  </button>
                </div>
              ))}
            </div>

            {/* Permission detail */}
            <div style={{
              marginTop: 24, padding: 20,
              background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: 14,
            }}>
              <div className="kc-sec-h">Função selecionada · Veterinário</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                {[
                  { l: 'Prontuário · escrita', on: true },
                  { l: 'Receituário · assinar', on: true },
                  { l: 'Teleorientação', on: true },
                  { l: 'Cirurgia · agendar', on: true },
                  { l: 'Financeiro · ver', on: true },
                  { l: 'Financeiro · editar', on: false },
                  { l: 'Equipe · gerenciar', on: false },
                  { l: 'LGPD · exportar dados', on: false },
                  { l: 'Luna AI · configurar', on: true },
                ].map(p => (
                  <label key={p.l} style={{
                    display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px',
                    background: p.on ? 'var(--ocean-pale)' : 'var(--surface-2)',
                    borderRadius: 8, cursor: 'pointer', fontSize: 12.5,
                    color: p.on ? 'var(--ocean)' : 'var(--text-soft)',
                  }}>
                    <span style={{
                      width: 32, height: 18, borderRadius: 999, padding: 2,
                      background: p.on ? 'var(--ocean)' : 'var(--border-strong)',
                      display: 'flex', alignItems: 'center', flexShrink: 0,
                      transition: 'background var(--d-base)',
                    }}>
                      <span style={{
                        width: 14, height: 14, borderRadius: '50%', background: '#fff',
                        marginLeft: p.on ? 14 : 0, transition: 'margin var(--d-base)',
                      }}/>
                    </span>
                    {p.l}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 11 · WHATSAPP modal — enviar receita / lembrete
// ═══════════════════════════════════════════════════════════════
function ScrCWhatsModal() {
  return (
    <div className="kc-desktop" style={{
      position: 'relative',
      background: 'var(--surface-2)',
    }}>
      {/* dim background */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }}>
        <ScrCRx/>
      </div>
      <div style={{
        position: 'absolute', inset: 0, background: 'rgba(11,18,24,0.35)',
        backdropFilter: 'blur(2px)',
      }}/>

      {/* Modal */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 720, background: 'var(--bg-elev)', borderRadius: 18,
        boxShadow: '0 32px 80px -20px rgba(0,0,0,0.4)',
        overflow: 'hidden',
      }}>
        {/* header */}
        <div style={{
          padding: '18px 24px', borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', gap: 14,
          background: 'linear-gradient(180deg, #1FAE57 0%, #128C7E 100%)',
          color: '#fff',
        }}>
          {/* whatsapp glyph */}
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#1FAE57">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>Enviar via WhatsApp</div>
            <div style={{ fontSize: 11, opacity: 0.85 }}>Marina Souza · (11) 98742-2914 · tutora de Luna</div>
          </div>
          <button style={{ background: 'rgba(255,255,255,0.2)', border: 0, color: '#fff', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <KCIcon name="close" size={14}/>
          </button>
        </div>

        {/* Body */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px' }}>

          {/* Compose */}
          <div style={{ padding: 20 }}>
            <div className="kc-sec-h">Mensagem</div>

            <div style={{
              padding: 16, background: 'var(--surface-2)', borderRadius: 12,
              border: '1px solid var(--border)', marginBottom: 14,
            }}>
              <div style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text)' }}>
                <strong>Oi, Marina! 👋</strong><br/><br/>
                A Dra. Ana finalizou a consulta da <strong>Luna</strong> hoje. Estou enviando a <strong>nova receita</strong> e algumas orientações:<br/><br/>
                <em style={{ color: 'var(--text-soft)' }}>· Apoquel 16 mg · 1 comp. pela manhã, com alimento<br/>
                · Manter dieta hipoalergênica<br/>
                · Retorno em 30 dias</em><br/><br/>
                Qualquer dúvida, é só responder por aqui. Bom fim de tarde 🐶
              </div>
            </div>

            {/* Attachments */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
              {[
                { i: 'rx', l: 'Receita-2026-04829-R03.pdf', s: '88 KB' },
                { i: 'consult', l: 'Resumo-consulta.pdf', s: '46 KB' },
              ].map(a => (
                <div key={a.l} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '8px 12px', background: 'var(--ocean-pale)',
                  border: '1px solid rgba(26,58,82,0.15)', borderRadius: 8,
                  fontSize: 12, color: 'var(--ocean)',
                }}>
                  <KCIcon name={a.i} size={14}/>
                  <div>
                    <div style={{ fontWeight: 500 }}>{a.l}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, opacity: 0.7 }}>{a.s}</div>
                  </div>
                  <button style={{ background: 'transparent', border: 0, color: 'var(--ocean)', opacity: 0.6, cursor: 'pointer' }}>
                    <KCIcon name="close" size={12}/>
                  </button>
                </div>
              ))}
            </div>

            {/* Templates */}
            <div className="kc-sec-h">Modelos · Luna sugere</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { l: 'Lembrete de retorno em 30d', tone: 'sage', a: true },
                { l: 'Orientações pós-consulta', tone: 'ocean' },
                { l: 'Lembrete vacinação anual', tone: 'amber' },
              ].map(t => (
                <div key={t.l} style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px',
                  background: t.a ? 'var(--surface-2)' : 'transparent',
                  border: '1px solid', borderColor: t.a ? 'var(--border-strong)' : 'transparent',
                  borderRadius: 8, fontSize: 12.5, cursor: 'pointer',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: `var(--${t.tone})` }}/>
                  <span style={{ flex: 1, color: 'var(--text)' }}>{t.l}</span>
                  {t.a && <KCIcon name="check" size={12} color="var(--ocean)" stroke={2.5}/>}
                </div>
              ))}
            </div>
          </div>

          {/* Side */}
          <div style={{ padding: 20, background: 'var(--bg)', borderLeft: '1px solid var(--border)' }}>
            <div className="kc-sec-h">Conversas recentes</div>
            {[
              { p: 'Luna · Marina S.', m: '"Obrigada doutora!" · 3d', a: true },
              { p: 'Mia · Juliana F.', m: '"vou levar agora" · 5d' },
              { p: 'Bolt · João C.',   m: 'pdf entregue · 1sem' },
            ].map((c, i) => (
              <div key={i} style={{
                padding: '10px 0', display: 'flex', gap: 10,
                borderTop: i > 0 ? '1px dashed var(--border)' : 'none',
              }}>
                <KCPetPortrait palette={['border','srd','poodle'][i]} size={32} ring={false}/>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--text)' }}>{c.p}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-mute)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.m}</div>
                </div>
              </div>
            ))}

            <div style={{
              marginTop: 16, padding: 12,
              background: 'var(--ocean-pale)', borderRadius: 8,
              fontSize: 11, color: 'var(--ocean)', lineHeight: 1.5,
            }}>
              <strong>Conformidade:</strong> mensagens são registradas no prontuário e respeitam LGPD.
            </div>
          </div>

        </div>

        {/* Footer */}
        <div style={{
          padding: '14px 24px', background: 'var(--surface-2)',
          borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0.12, color: 'var(--text-mute)' }}>
            Enviar de: <strong style={{ color: 'var(--text)', fontWeight: 500 }}>+55 11 4002-8922 · PetLife</strong>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="kc-btn kc-btn-ghost">Salvar rascunho</button>
            <button className="kc-btn" style={{ background: '#1FAE57', color: '#fff' }}>
              Enviar agora →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScrCPatients, ScrCLuna, ScrCSettings, ScrCWhatsModal });
