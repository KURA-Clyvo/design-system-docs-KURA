// kura-landing-tutor.jsx — Landing B2C (tutores de pets)

// ─── HERO ─────────────────────────────────────────────────
function TutorHero() {
  return (
    <section className="lt-hero" data-screen-label="Hero">
      <div className="kl-wrap-w">
        <div className="lt-hero-grid">
          <div>
            <div className="kl-kicker k-sage" style={{ marginBottom: 18 }}>Kura App · Para tutores de pets</div>
            <h1 className="kl-h1 tone-sage" style={{ fontStyle: 'italic', fontWeight: 400 }}>
              Todo o cuidado do seu pet em <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>um só lugar.</em>
            </h1>
            <p className="kl-lead" style={{ marginTop: 22 }}>
              Histórico de vacinas, consultas e exames sempre à mão. Lembretes automáticos no WhatsApp. Conexão direta com o seu veterinário — de onde você estiver.
            </p>

            <div className="lt-store-badges" style={{ marginTop: 36 }}>
              <a className="lt-store-badge" href="#ios">
                <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.47-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span className="badge-text">
                  <span className="top">Baixar na</span>
                  <span className="bot">App Store</span>
                </span>
              </a>
              <a className="lt-store-badge" href="#android">
                <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 3.3l9.4 9.4-9.4 9.4c-.4-.2-.6-.6-.6-1.1V4.4c0-.5.2-.9.6-1.1zm10.5 10.5l2.7 2.7-12.6 7.2 9.9-9.9zm5.2-3l1.8 1c.7.4.7 1.4 0 1.7l-1.9 1.1-3-3 3.1-.8zm-5.2-.4L4.2 1.6 16.8 8.8l-2.7 1.6z"/>
                </svg>
                <span className="badge-text">
                  <span className="top">Disponível no</span>
                  <span className="bot">Google Play</span>
                </span>
              </a>
            </div>

            <p className="kl-body-sm" style={{ marginTop: 18, fontSize: 13 }}>
              Grátis para tutores. Funciona com qualquer clínica parceira da rede Kura.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="lt-portrait">
              <div className="ph-tag">— Tutor + pet · Foto real</div>
            </div>

            <div className="lt-phone">
              <div className="lt-phone-screen">
                <div className="lt-phone-statusbar">
                  <span>9:41</span>
                  <span>•••• 5G</span>
                </div>
                <div className="lt-phone-header">Meus <em>pets</em></div>
                <div className="lt-phone-kicker">— Domingo, 25 de Maio</div>

                <div className="lt-phone-card">
                  <div className="lt-phone-pet"/>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="n">Thor</div>
                    <div className="m">Labrador · 4 anos</div>
                  </div>
                  <span className="chip s">Em dia</span>
                </div>
                <div className="lt-phone-card">
                  <div className="lt-phone-pet b"/>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="n">Mia</div>
                    <div className="m">Siamês · 2 anos</div>
                  </div>
                  <span className="chip a">Vacina</span>
                </div>

                <div className="lt-phone-alert">
                  <strong>Vacina V10 · 7 dias</strong>
                  Reagendar com Dra. Ana · PetLife
                </div>

                <div className="lt-phone-tabbar">
                  <div className="lt-phone-tab active"><div className="dot"/>Pets</div>
                  <div className="lt-phone-tab"><div className="dot"/>Agenda</div>
                  <div className="lt-phone-tab"><div className="dot"/>Saúde</div>
                  <div className="lt-phone-tab"><div className="dot"/>Perfil</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── VALUE PROPS ──────────────────────────────────────────
function TutorValueProps() {
  const props = [
    {
      icon: 'bell', tone: 'sage',
      h: <>Nunca mais esqueça <em>vacinas.</em></>,
      d: 'Lembretes automáticos no WhatsApp 7 dias antes. Histórico completo com lotes, fabricantes e datas — para qualquer pet, qualquer clínica.',
    },
    {
      icon: 'doc', tone: 'amber',
      h: <>Histórico <em>sempre à mão.</em></>,
      d: 'Consultas, exames, receitas e cirurgias em um só lugar. Acesse de qualquer celular, em qualquer cidade — inclusive sem internet.',
    },
    {
      icon: 'chat', tone: 'clay',
      h: <>Fale direto <em>com o vet.</em></>,
      d: 'Tire dúvidas por chat ou videochamada. Sem precisar ligar, sem hora marcada — direto com o profissional que conhece seu pet.',
    },
  ];

  return (
    <section className="kl-section" data-screen-label="Value props">
      <div className="kl-wrap">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="kl-kicker k-sage">— Por que tutores escolhem Kura</span>
          <h2 className="kl-h2 tone-sage" style={{ marginTop: 14, fontStyle: 'italic', fontWeight: 400 }}>
            Cuidar é mais simples<br/>quando tudo está <em>conectado.</em>
          </h2>
        </div>
        <div className="lt-vprop-grid">
          {props.map((p, i) => (
            <div key={i} className="lt-vprop">
              <div className={`lt-vprop-icon ${p.tone === 'amber' ? 'amber' : p.tone === 'clay' ? 'clay' : ''}`}>
                <LIcon name={p.icon} size={32} stroke={1.7}/>
              </div>
              <h3>{p.h}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── COMO FUNCIONA ────────────────────────────────────────
function TutorHowto() {
  const steps = [
    { n: '01', time: '2 minutos', h: 'Cadastre seu pet', d: 'Foto, nome, raça e data de nascimento. Pode ter quantos pets quiser — gato, cachorro, coelho, papagaio.' },
    { n: '02', time: 'Instantâneo', h: 'Conecte com sua clínica', d: 'Busque o nome da clínica veterinária na rede Kura. Todo o histórico do seu pet é importado automaticamente.' },
    { n: '03', time: 'Automático', h: 'Receba lembretes', d: 'WhatsApp te avisa de vacinas, retornos e consultas. Agende direto pelo app, em horários reais da clínica.' },
    { n: '04', time: 'Para sempre', h: 'Tenha tudo organizado', d: 'Vacinas, consultas, exames e receitas — em uma linha do tempo. Compartilhe com quem mais cuida do seu pet.' },
  ];

  return (
    <section className="kl-section lt-howto" data-screen-label="How it works">
      <div className="kl-wrap">
        <div className="lt-howto-grid">
          <div style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
            <span className="kl-kicker k-sage">— Como funciona</span>
            <h2 className="kl-h2 tone-sage" style={{ marginTop: 14, fontStyle: 'italic', fontWeight: 400 }}>
              Simples <em>assim.</em>
            </h2>
            <p className="kl-body" style={{ marginTop: 20, maxWidth: 360 }}>
              Sem cadastro de cartão, sem assinatura. Grátis para tutores — agora e sempre. Você só precisa de 2 minutos.
            </p>
            <a className="kl-btn kl-btn-sage kl-btn-lg" href="#download" style={{ marginTop: 28 }}>
              Baixar grátis <LIcon name="arrow" size={18}/>
            </a>
          </div>
          <div className="lt-howto-steps">
            {steps.map((s, i) => (
              <div key={i} className="lt-howto-step">
                <span className="lt-howto-n">{s.n}</span>
                <div>
                  <h3>{s.h}</h3>
                  <p>{s.d}</p>
                  <span className="time">⏱  {s.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── DEPOIMENTOS ──────────────────────────────────────────
function TutorQuotes() {
  const items = [
    { q: 'Não perco mais nenhuma vacina do Thor. O app me avisa sempre — e ainda agendo no mesmo lugar.', n: 'Juliana M.', m: 'tutora de Thor · Labrador', city: 'São Paulo · SP' },
    { q: 'Consegui mostrar o histórico completo da minha gata pra nova veterinária. Economizou metade da consulta.', n: 'Ricardo P.', m: 'tutor de Mia · Siamês', city: 'Rio de Janeiro · RJ' },
    { q: 'Tirei dúvida com a Dra. Camila por vídeo, no domingo, sem sair de casa. Salvou meu fim de semana.', n: 'Camila S.', m: 'tutora de Luna · Poodle', city: 'Belo Horizonte · MG' },
  ];
  return (
    <section className="kl-section" data-screen-label="Quotes">
      <div className="kl-wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          <div style={{ maxWidth: 540 }}>
            <span className="kl-kicker k-sage">— Quem usa, recomenda</span>
            <h2 className="kl-h2 tone-sage" style={{ marginTop: 14, fontStyle: 'italic', fontWeight: 400 }}>
              <em>4.8 estrelas</em> em mais de<br/>12 mil avaliações.
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className="kl-quote stars" style={{ display: 'inline-flex', gap: 2, color: 'var(--amber)', fontSize: 24 }}>
              ★★★★★
            </div>
          </div>
        </div>
        <div className="lt-quotes-grid">
          {items.map((it, i) => (
            <div key={i} className="kl-quote kl-card-warm">
              <span className="stars">★★★★★</span>
              <p className="q">"{it.q}"</p>
              <div className="by">
                <div className="by-av"/>
                <div>
                  <div className="by-name">{it.n}</div>
                  <div className="by-meta">{it.m} · {it.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SCREENS GRID ──────────────────────────────────────────
function TutorScreens() {
  return (
    <section className="kl-section" style={{ background: 'var(--bg-elev)' }} data-screen-label="Screens">
      <div className="kl-wrap-w">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="kl-kicker k-sage">— Veja por dentro</span>
          <h2 className="kl-h2 tone-sage" style={{ marginTop: 14, fontStyle: 'italic', fontWeight: 400 }}>
            Pensado pra ser <em>fácil.</em>
          </h2>
        </div>

        <div className="lt-screens-grid">
          {/* Screen 1: Meus Pets */}
          <div className="lt-screen">
            <div className="lt-screen-phone">
              <div className="screen">
                <div className="lt-screen-statusbar"><span>9:41</span><span>5G</span></div>
                <div className="lt-screen-title">Meus <em>pets</em></div>
                <div className="lt-screen-kicker">— 2 pets cadastrados</div>
                <div className="lt-screen-card">
                  <div className="av"/>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="n">Thor</div>
                    <div className="m">Labrador · 4a</div>
                  </div>
                  <span className="b ok">Em dia</span>
                </div>
                <div className="lt-screen-card">
                  <div className="av s"/>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="n">Mia</div>
                    <div className="m">Siamês · 2a</div>
                  </div>
                  <span className="b warn">Vacina</span>
                </div>
                <div className="lt-screen-card" style={{ background: 'var(--surface-2)', borderStyle: 'dashed', justifyContent: 'center', color: 'var(--text-mute)', fontSize: 9 }}>
                  + adicionar pet
                </div>
              </div>
            </div>
            <div className="lt-screen-info">
              <div className="label">01 · Pets</div>
              <p>Todos os <strong>seus pets em um só lugar</strong>, com status de saúde sempre visível.</p>
            </div>
          </div>

          {/* Screen 2: Histórico */}
          <div className="lt-screen">
            <div className="lt-screen-phone">
              <div className="screen">
                <div className="lt-screen-statusbar"><span>9:41</span><span>5G</span></div>
                <div className="lt-screen-title">Histórico de <em>consultas</em></div>
                <div className="lt-screen-kicker">— Thor · últimos 12 meses</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[
                    { d: '12 ABR · 2026', t: 'Check-up anual', v: 'Dra. Ana · PetLife' },
                    { d: '03 FEV · 2026', t: 'Vacina V10', v: 'Dra. Ana · PetLife' },
                    { d: '18 NOV · 2025', t: 'Consulta · tosse', v: 'Dr. Paulo · VetCare' },
                    { d: '02 SET · 2025', t: 'Exame de sangue', v: 'Lab. Animallab' },
                  ].map((e, i) => (
                    <div key={i} style={{ paddingLeft: 12, borderLeft: '2px solid var(--sage)', position: 'relative' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 7, color: 'var(--text-mute)', letterSpacing: '0.12em' }}>{e.d}</div>
                      <div style={{ fontSize: 9.5, color: 'var(--text)', fontWeight: 500, marginTop: 1 }}>{e.t}</div>
                      <div style={{ fontSize: 7.5, color: 'var(--text-mute)', marginTop: 1 }}>{e.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lt-screen-info">
              <div className="label">02 · Histórico</div>
              <p>Toda a linha do tempo, <strong>de qualquer clínica</strong> da rede Kura.</p>
            </div>
          </div>

          {/* Screen 3: Vacinas */}
          <div className="lt-screen">
            <div className="lt-screen-phone">
              <div className="screen">
                <div className="lt-screen-statusbar"><span>9:41</span><span>5G</span></div>
                <div className="lt-screen-title">Carteira de <em>vacinação</em></div>
                <div className="lt-screen-kicker">— Mia · siamês</div>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 12px' }}>
                  <div className="lt-vac-row"><span className="dot"/><span className="nm">Antirrábica</span><span className="dt">15 MAR · 2026</span></div>
                  <div className="lt-vac-row"><span className="dot"/><span className="nm">V4 felina · 1ª dose</span><span className="dt">02 FEV · 2026</span></div>
                  <div className="lt-vac-row"><span className="dot w"/><span className="nm">V4 felina · reforço</span><span className="dt" style={{ color: 'var(--clay)' }}>03 JUN · ATRASADA</span></div>
                  <div className="lt-vac-row"><span className="dot"/><span className="nm">FeLV</span><span className="dt">10 JAN · 2026</span></div>
                </div>
                <div style={{ background: 'var(--clay-pale)', border: '1px solid rgba(217,98,74,0.2)', borderRadius: 8, padding: '6px 8px', fontSize: 8.5, color: 'var(--clay)', marginTop: 8, fontWeight: 500 }}>
                  ⚠  Reagendar V4 · contate clínica
                </div>
              </div>
            </div>
            <div className="lt-screen-info">
              <div className="label">03 · Vacinas</div>
              <p>Status <strong>em dia ou atrasada</strong>, com lembrete na hora certa.</p>
            </div>
          </div>

          {/* Screen 4: Agendar */}
          <div className="lt-screen">
            <div className="lt-screen-phone">
              <div className="screen">
                <div className="lt-screen-statusbar"><span>9:41</span><span>5G</span></div>
                <div className="lt-screen-title">Agendar <em>consulta</em></div>
                <div className="lt-screen-kicker">— PetLife · Vila Mariana</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 7.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-mute)', margin: '4px 0 6px' }}>JUN · 2026</div>
                <div className="lt-cal-mini">
                  {['D','S','T','Q','Q','S','S'].map((d,i) => <div key={i} className="d" style={{ background: 'transparent', border: 0, fontSize: 6, color: 'var(--text-mute)' }}>{d}</div>)}
                  {[null,null,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((n,i) => {
                    if (n === null) return <div key={i} className="d off"></div>;
                    const cls = n === 8 ? 'sel' : (n === 12 || n === 14) ? 'tag' : '';
                    return <div key={i} className={`d ${cls}`}>{n}</div>;
                  })}
                </div>
                <div style={{ marginTop: 8, padding: 8, background: 'var(--sage-pale)', borderRadius: 8, fontSize: 9, color: 'var(--sage)', fontWeight: 500 }}>
                  Domingo, 8 jun · 10:30
                </div>
                <div style={{ marginTop: 6, fontSize: 8, color: 'var(--text-mute)' }}>
                  com Dra. Ana · Check-up anual
                </div>
              </div>
            </div>
            <div className="lt-screen-info">
              <div className="label">04 · Agendar</div>
              <p>Horários reais da clínica, <strong>confirmados na hora</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── STATS WIDE ────────────────────────────────────────────
function TutorStats() {
  return (
    <section className="kl-section" data-screen-label="Stats">
      <div className="kl-wrap">
        <div className="lt-stats">
          <div className="lt-stat">
            <div className="v"><em>15K</em>+</div>
            <span className="k">Tutores ativos</span>
          </div>
          <div className="lt-stat">
            <div className="v"><em>98</em>%</div>
            <span className="k">Satisfação · NPS 72</span>
          </div>
          <div className="lt-stat">
            <div className="v"><em>4.8</em>★</div>
            <span className="k">App Store · 12k reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ───────────────────────────────────────────────────
function TutorFAQ() {
  const items = [
    { q: 'É grátis mesmo?', a: 'Sim, totalmente. O Kura App para tutores é gratuito — agora e sempre. Quem paga é a clínica veterinária, no plano dela. Você nunca verá um anúncio.' },
    { q: 'Funciona com qualquer clínica?', a: 'O app conecta com as 120+ clínicas da rede Kura. Se a sua ainda não está, você pode indicar pelo app — entramos em contato com ela em 24h.' },
    { q: 'Como importo o histórico do meu pet?', a: 'Quando você conecta com uma clínica que já usa Kura, todo o histórico é importado automaticamente. Para outras clínicas, basta fotografar a carteira de vacinação e a gente digitaliza tudo em até 2 dias.' },
    { q: 'Posso cadastrar mais de um pet?', a: 'Sim, quantos quiser. Cães, gatos, coelhos, aves, répteis — qualquer pet que tenha um veterinário.' },
    { q: 'Meus dados são seguros?', a: 'Tudo criptografado, backup automático e conformidade total com LGPD. Você é o dono dos dados do seu pet e pode exportar ou apagar tudo a qualquer momento.' },
    { q: 'Funciona offline?', a: 'Funciona. Todo o histórico fica salvo no celular — você consulta vacinas, receitas e exames mesmo sem internet. Sincroniza assim que voltar online.' },
  ];
  return (
    <section className="kl-section" id="faq" data-screen-label="FAQ">
      <div className="kl-wrap lt-faq-grid">
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <span className="kl-kicker k-sage">— Perguntas frequentes</span>
          <h2 className="kl-h2 tone-sage" style={{ marginTop: 14, fontStyle: 'italic', fontWeight: 400 }}>
            Dúvidas <em>respondidas.</em>
          </h2>
        </div>
        <div className="kl-faq">
          {items.map((it, i) => (
            <details key={i} {...(i === 0 ? { open: true } : {})}>
              <summary>{it.q}</summary>
              <p>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FINAL CTA emotional ───────────────────────────────────
function TutorFinalCTA() {
  return (
    <section className="lt-final kl-grain" id="download" data-screen-label="Final CTA">
      <div className="kl-narrow" style={{ position: 'relative', zIndex: 2 }}>
        <span className="kl-kicker k-light" style={{ color: 'var(--amber-bright)' }}>— Comece hoje</span>
        <h2 className="kl-h2" style={{ marginTop: 20, fontStyle: 'italic', fontWeight: 400 }}>
          Seu pet merece <em>o melhor cuidado.</em>
        </h2>
        <p>
          Mais de 15 mil tutores já cuidam melhor com Kura. Grátis para sempre — sem anúncios, sem letra miúda.
        </p>
        <div className="lt-store-badges">
          <a className="lt-store-badge light" href="#ios">
            <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.47-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <span className="badge-text">
              <span className="top">Baixar na</span>
              <span className="bot">App Store</span>
            </span>
          </a>
          <a className="lt-store-badge light" href="#android">
            <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.6 3.3l9.4 9.4-9.4 9.4c-.4-.2-.6-.6-.6-1.1V4.4c0-.5.2-.9.6-1.1zm10.5 10.5l2.7 2.7-12.6 7.2 9.9-9.9zm5.2-3l1.8 1c.7.4.7 1.4 0 1.7l-1.9 1.1-3-3 3.1-.8zm-5.2-.4L4.2 1.6 16.8 8.8l-2.7 1.6z"/>
            </svg>
            <span className="badge-text">
              <span className="top">Disponível no</span>
              <span className="bot">Google Play</span>
            </span>
          </a>
        </div>
        <p style={{ marginTop: 28, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,252,247,0.6)' }}>
          Grátis para sempre · sem anúncios · LGPD compliant
        </p>
      </div>
    </section>
  );
}

// ─── APP ───────────────────────────────────────────────────
function TutorApp() {
  return (
    <>
      <KLNav
        tone="sage"
        sub="App · Para tutores"
        links={[
          { label: 'Recursos', href: '#features' },
          { label: 'Como funciona', href: '#howto' },
          { label: 'Depoimentos', href: '#quotes' },
          { label: 'FAQ', href: '#faq' },
        ]}
        cta={<>
          <a className="kl-btn kl-btn-sage kl-btn-sm" href="#download">Baixar grátis</a>
        </>}
      />
      <main>
        <TutorHero/>
        <TutorValueProps/>
        <TutorHowto/>
        <TutorQuotes/>
        <TutorScreens/>
        <TutorStats/>
        <TutorFAQ/>
        <TutorFinalCTA/>
      </main>
      <KLFooter tone="sage"/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<TutorApp/>);
