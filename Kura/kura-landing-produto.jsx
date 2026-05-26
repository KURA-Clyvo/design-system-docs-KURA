// kura-landing-produto.jsx — Landing showcase técnico (investidores, parceiros, imprensa)

// ─── HERO ─────────────────────────────────────────────────
function ProdutoHero() {
  return (
    <section className="lp-hero" data-screen-label="Hero">
      <div className="kl-wrap-w">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
            <KuraMark size={56} color="var(--sage)"/>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1, color: 'var(--text)' }}>
              Ku<em style={{ fontStyle: 'italic', color: 'var(--ocean)' }}>ra</em>
            </div>
          </div>
        </div>

        <span className="kl-kicker" style={{ color: 'var(--text-mute)' }}>— Plataforma · v 1.0 · Q2 2026</span>
        <h1 className="kl-h1" style={{ marginTop: 16, fontWeight: 600, fontFamily: 'var(--font-body)', letterSpacing: '-0.025em', fontSize: 'clamp(36px, 4.6vw, 58px)' }}>
          Plataforma veterinária completa.<br/>
          <span style={{ color: 'var(--ocean)' }}>Clínica</span> + <span style={{ color: 'var(--sage)' }}>Tutor</span> + <span style={{ color: 'var(--amber)' }}>IA.</span>
        </h1>
        <p className="kl-lead" style={{ margin: '24px auto 0', textAlign: 'center' }}>
          Sistema integrado B2B2C para gestão clínica, engajamento de tutores e inteligência artificial aplicada à medicina veterinária. Construído para escala, compliance e velocidade.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
          <a className="kl-btn kl-btn-ocean" href="Kura Landing Clinica.html">
            <LIcon name="doc" size={16}/> Ver Kura Clínica
          </a>
          <a className="kl-btn kl-btn-sage" href="Kura Landing Tutor.html">
            <LIcon name="user" size={16}/> Ver Kura App
          </a>
          <a className="kl-btn kl-btn-ghost" href="#api" style={{ border: '1.5px solid var(--border-strong)' }}>
            <LIcon name="plug" size={16}/> Documentação API
          </a>
        </div>

        {/* Mockups: desktop + phone */}
        <div className="lp-hero-mockups">
          <div className="lp-desktop-mock">
            <div className="lp-desktop-screen">
              <div className="side">
                <div className="brand">Ku<em>ra</em> Clínica</div>
                <div className="nav active">▸ Painel</div>
                <div className="nav">Agenda</div>
                <div className="nav">Prontuários</div>
                <div className="nav">Pacientes</div>
                <div className="nav">Receituário</div>
                <div className="nav">Tele · Luna</div>
                <div className="nav">Financeiro</div>
              </div>
              <div className="main">
                <h5>Painel · <em>Dra. Ana</em></h5>
                <div className="mini-metrics">
                  <div className="mm"><div className="l">Hoje</div><div className="v">12</div></div>
                  <div className="mm"><div className="l">Tele</div><div className="v">04</div></div>
                  <div className="mm"><div className="l">Receita</div><div className="v" style={{ fontSize: 14 }}>R$4.2k</div></div>
                </div>
                <div className="row"><span className="t">09:30</span><span className="av"/><span className="n">Luna · Border</span><span className="b">consulta</span></div>
                <div className="row"><span className="t">10:15</span><span className="av" style={{ background: 'linear-gradient(135deg, #E8DDC8, #6B8AA8)' }}/><span className="n">Thor · Lab</span><span className="b" style={{ background: 'var(--amber-pale)', color: 'var(--amber)' }}>retorno</span></div>
                <div className="row"><span className="t">11:00</span><span className="av" style={{ background: 'linear-gradient(135deg, #C9A876, #8B6F45)' }}/><span className="n">Mia · SRD</span><span className="b" style={{ background: 'var(--sage-pale)', color: 'var(--sage)' }}>tele</span></div>
                <div className="row" style={{ borderBottom: 0 }}><span className="t">14:00</span><span className="av" style={{ background: 'linear-gradient(135deg, #3D2B18, #6B4A2B)' }}/><span className="n">Bolt · Poodle</span><span className="b" style={{ background: 'var(--clay-pale)', color: 'var(--clay)' }}>urgência</span></div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
            <div className="lp-sync-pill">
              <span className="lp-sync-dot"/> Sync · tempo real
            </div>
            <div className="lp-phone-mock">
              <div className="screen">
                <div className="sb"><span>9:41</span><span>5G</span></div>
                <h6>Meus <em>pets</em></h6>
                <div className="kicker">— Marina · 1 pet</div>
                <div className="card">
                  <div className="av"/>
                  <div style={{ flex: 1 }}>
                    <div className="n">Luna</div>
                    <div className="m">Border Collie · 3a</div>
                  </div>
                  <span className="chip">Em dia</span>
                </div>
                <div className="card" style={{ background: 'var(--amber-pale)', borderColor: 'rgba(200,129,13,0.18)' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-on-amber)', fontSize: 14 }}>📅</div>
                  <div style={{ flex: 1 }}>
                    <div className="n" style={{ fontSize: 10 }}>Consulta hoje · 09:30</div>
                    <div className="m">Dra. Ana · PetLife</div>
                  </div>
                </div>
                <div style={{ background: 'var(--sage-pale)', border: '1px solid rgba(74,105,68,0.18)', borderRadius: 10, padding: '8px 10px', fontSize: 10, color: 'var(--sage)', marginTop: 4 }}>
                  ✓ Vacinas em dia · próxima jul/26
                </div>
                <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid var(--border)', paddingTop: 6, gap: 3 }}>
                  {['Pets','Agenda','Saúde','Eu'].map((t,i) => (
                    <div key={i} style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 7, letterSpacing: '0.14em', textTransform: 'uppercase', color: i === 0 ? 'var(--sage)' : 'var(--text-mute)' }}>
                      <div style={{ width: 4, height: 4, borderRadius: 50, background: 'currentColor', margin: '0 auto 3px' }}/>{t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TWO PRODUCTS VISION ───────────────────────────────────
function ProdutoVision() {
  return (
    <section className="kl-section" data-screen-label="Vision">
      <div className="kl-wrap">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="kl-kicker">— Arquitetura de produto</span>
          <h2 className="kl-h2" style={{ marginTop: 14 }}>
            Dois produtos. <em style={{ color: 'var(--ocean)' }}>Uma plataforma.</em>
          </h2>
          <p className="kl-lead" style={{ margin: '12px auto 0', textAlign: 'center' }}>
            Não é só um app + um sistema. É uma camada única de dados que sincroniza tutor, clínica e IA em tempo real.
          </p>
        </div>

        <div className="lp-twoprod">
          <div className="lp-prod b2b">
            <div className="lp-prod-icon">
              <LIcon name="doc" size={28} stroke={1.6}/>
            </div>
            <div className="lp-prod-tag">B2B · Sistema clínica</div>
            <h3>Kura <em>Clínica.</em></h3>
            <p className="kl-body" style={{ maxWidth: 380 }}>
              SaaS web para gestão completa: prontuário, agenda, receituário, teleorientação CFMV e analytics. Roda em qualquer browser, sem instalação local.
            </p>
            <ul className="lp-prod-feats">
              <li><div><span className="b">Prontuário SOAP digital</span>Templates customizáveis, histórico vitalício.</div></li>
              <li><div><span className="b">Agenda + agendamento online</span>Sincronização Google Calendar, WhatsApp.</div></li>
              <li><div><span className="b">Teleorientação CFMV-compliant</span>Videochamada integrada, Res. 1.465/2022.</div></li>
              <li><div><span className="b">Dashboard analytics</span>KPIs, receita, retenção, taxa de retorno.</div></li>
            </ul>
            <div style={{ marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ocean)' }}>
              Público: veterinários · gestores · 120+ clínicas
            </div>
          </div>

          <div className="lp-prod b2c">
            <div className="lp-prod-icon">
              <LIcon name="user" size={28} stroke={1.6}/>
            </div>
            <div className="lp-prod-tag">B2C · App tutor</div>
            <h3>Kura <em>App.</em></h3>
            <p className="kl-body" style={{ maxWidth: 380 }}>
              App nativo iOS/Android para tutores. Histórico do pet, lembretes, agendamento e chat direto com o veterinário — gratuito para sempre.
            </p>
            <ul className="lp-prod-feats">
              <li><div><span className="b">Histórico completo do pet</span>Vacinas, consultas, exames, receitas.</div></li>
              <li><div><span className="b">Lembretes automáticos</span>WhatsApp + push, 7 dias antes.</div></li>
              <li><div><span className="b">Agendamento online</span>Horários reais da clínica, confirmação na hora.</div></li>
              <li><div><span className="b">Chat + videochamada</span>Comunicação direta com o vet.</div></li>
            </ul>
            <div style={{ marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sage)' }}>
              Público: tutores de pets · 15.000+ ativos
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 40, padding: '28px 32px', background: 'var(--bg-elev)', border: '1px dashed var(--border-strong)', borderRadius: 16, maxWidth: 720, margin: '40px auto 0' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: 8 }}>↕ Camada de dados unificada</div>
          <p className="kl-body" style={{ margin: 0 }}>
            Tutor agenda no app → clínica recebe e confirma → tutor recebe push + WhatsApp. Tudo sincronizado em &lt;200ms via PostgreSQL replicado em 3 regiões AWS.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── STACK TÉCNICO ─────────────────────────────────────────
function ProdutoStack() {
  const cols = [
    { h: 'Frontend', items: [
      ['React Native', '0.74 · app tutor'],
      ['React + TS', 'web clínica'],
      ['Tailwind CSS', 'design system'],
      ['Vite', 'build tooling'],
    ]},
    { h: 'Backend', items: [
      ['.NET 8', 'APIs REST + gRPC'],
      ['PostgreSQL 16', 'dados estruturados'],
      ['Redis 7', 'cache + filas'],
      ['RabbitMQ', 'eventos assíncronos'],
    ]},
    { h: 'IA / ML', items: [
      ['YOLOv8n', 'Luna · detecção raça'],
      ['MobileNetV3', 'classificação'],
      ['TensorFlow', 'prescrição IA'],
      ['Python · FastAPI', 'serviços ML'],
    ]},
    { h: 'Infra', items: [
      ['AWS · ECS + RDS', '3 regiões'],
      ['Docker · K8s', 'orquestração'],
      ['GitHub Actions', 'CI/CD'],
      ['Datadog', 'observabilidade'],
    ]},
  ];
  const integrations = [
    'WhatsApp Business API', 'Stripe', 'Mercado Pago', 'Twilio · SMS/vídeo',
    'ICP-Brasil · assinatura', 'Google Calendar', 'Conta Azul', 'PagSeguro',
  ];
  const compliance = [
    { k: 'LGPD', v: 'Consentimento + logs + anonimização' },
    { k: 'CFMV', v: 'Res. 1.465/2022 · teleorientação' },
    { k: 'ISO 27001', v: 'Em certificação · Q3/26' },
    { k: 'ANVISA', v: 'Portaria 344 · receituário controlado' },
  ];
  return (
    <section className="kl-section lp-stack-section" data-screen-label="Stack">
      <div className="kl-wrap">
        <div style={{ maxWidth: 780 }}>
          <span className="kl-kicker">— Stack técnico</span>
          <h2 className="kl-h2" style={{ marginTop: 14 }}>
            Stack moderno. <em>Deploy confiável.</em>
          </h2>
          <p className="kl-lead">
            Tecnologia open-source em produção, escolhida para escala horizontal, baixo custo operacional e onboarding rápido de novos devs. 99.95% uptime SLA.
          </p>
        </div>

        <div className="lp-stack-grid">
          {cols.map((c, i) => (
            <div key={i} className="lp-stack-col">
              <h4>— {c.h}</h4>
              <ul>
                {c.items.map(([n, m], j) => (
                  <li key={j}>{n} <span className="meta">· {m}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div className="lp-stack-col">
            <h4>— Integrações</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {integrations.map((n, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'rgba(248,242,230,0.85)', padding: '6px 12px', background: 'rgba(248,242,230,0.06)', borderRadius: 999, border: '1px solid rgba(248,242,230,0.10)' }}>
                  {n}
                </span>
              ))}
            </div>
          </div>
          <div className="lp-stack-col">
            <h4>— Compliance</h4>
            <ul>
              {compliance.map((c, i) => (
                <li key={i}><strong style={{ color: 'var(--bg)' }}>{c.k}</strong> <span className="meta">· {c.v}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── LUNA DEEP DIVE ────────────────────────────────────────
function ProdutoLuna() {
  return (
    <section className="kl-section" id="luna" style={{ background: 'var(--bg-elev)' }} data-screen-label="Luna deep dive">
      <div className="kl-wrap">
        <div style={{ marginBottom: 56, maxWidth: 700 }}>
          <span className="kl-kicker k-amber">— Luna AI · deep dive</span>
          <h2 className="kl-h2" style={{ marginTop: 14 }}>
            Computer Vision para <em style={{ color: 'var(--amber)' }}>medicina veterinária.</em>
          </h2>
          <p className="kl-lead">
            Pipeline edge-first: inferência local na recepção, sem dependência de nuvem para detecção. Push de eventos via webhook para o backend, sincronia com prontuário em tempo real.
          </p>
        </div>

        <div className="lp-luna-grid">
          <div>
            <div className="kl-mono" style={{ marginBottom: 14, color: 'var(--amber)' }}>— Specs técnicos</div>
            <div className="lp-specs-table">
              <div className="row"><span className="k">Modelo</span><span className="v">YOLOv8n + MobileNetV3</span></div>
              <div className="row"><span className="k">Dataset</span><span className="v">50.000+ imagens · 120 raças</span></div>
              <div className="row"><span className="k">Acurácia</span><span className="v"><em>94.2%</em> top-1 · 98.1% top-3</span></div>
              <div className="row"><span className="k">Latência</span><span className="v">&lt;300ms inferência local</span></div>
              <div className="row"><span className="k">Hardware</span><span className="v">Raspberry Pi 4 + cam 1080p</span></div>
              <div className="row"><span className="k">Pipeline</span><span className="v">Frame → Detect → Classify → Sync</span></div>
              <div className="row"><span className="k">Throughput</span><span className="v">30 fps · edge inference</span></div>
              <div className="row"><span className="k">Treinamento</span><span className="v">Re-fine-tune mensal · MLflow</span></div>
            </div>
          </div>

          <div>
            <div className="kl-mono" style={{ marginBottom: 14, color: 'var(--amber)' }}>— Pipeline de inferência</div>
            <div className="lp-pipeline">
              <div className="lp-pipe-step">
                <div className="lp-pipe-num">01</div>
                <div><h4>Captura de frame</h4><p>Câmera 1080p · 30fps · buffer circular 90 frames</p></div>
              </div>
              <div className="lp-pipe-step">
                <div className="lp-pipe-num">02</div>
                <div><h4>Detecção do animal</h4><p>YOLOv8n · bounding box + confidence score</p></div>
              </div>
              <div className="lp-pipe-step">
                <div className="lp-pipe-num">03</div>
                <div><h4>Classificação da raça</h4><p>MobileNetV3 · 120 classes · top-3 prediction</p></div>
              </div>
              <div className="lp-pipe-step">
                <div className="lp-pipe-num">04</div>
                <div><h4>Pós-processamento</h4><p>Smoothing temporal · 5 frames · confidence threshold</p></div>
              </div>
              <div className="lp-pipe-step">
                <div className="lp-pipe-num">05</div>
                <div><h4>Push para backend</h4><p>Webhook HTTPS · payload assinado HMAC · idempotente</p></div>
              </div>
            </div>

            <div style={{ marginTop: 28, padding: 20, background: 'var(--amber-pale)', border: '1px solid rgba(200,129,13,0.20)', borderRadius: 14 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: 8 }}>— Casos de uso ativos</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Auto-cadastro recepção', 'Protocolo vacinal sugerido', 'Alertas comportamentais', 'Analytics de raças atendidas'].map((t,i) => (
                  <span key={i} className="kl-chip kl-chip-amber" style={{ fontSize: 11.5 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FEATURES MATRIX ───────────────────────────────────────
function ProdutoMatrix() {
  const rows = [
    ['Prontuário digital SOAP',     'Editor + assinatura',    'Visualização + download'],
    ['Agenda',                      'Gestão completa',        'Agendamento online'],
    ['Receituário',                 'Prescrição + ICP-Brasil','Visualização + farmácia'],
    ['Teleorientação',              'Videochamada CFMV',      'Acesso tutor + lobby'],
    ['Luna AI',                     'Dashboard detecções',    null],
    ['Vacinas',                     'Aplicação + registro',   'Carteira + lembretes'],
    ['Exames',                      'Upload PDFs/imagens',    'Visualização + share'],
    ['Pagamentos',                  'Cobrança integrada',     'Link PIX/cartão'],
    ['Relatórios + analytics',      'KPIs + dashboards',      null],
    ['Chat',                        'Inbox tutores',          'Falar com vet'],
    ['Notificações',                'Painel gestão',          'Push + WhatsApp'],
    ['Offline',                     null,                     'Cache local · 90 dias'],
    ['Multi-idioma',                'PT · EN · ES',           'PT · EN · ES'],
    ['White label',                 'Sob consulta',           null],
    ['API aberta',                  'REST + webhooks',        null],
  ];
  return (
    <section className="kl-section" data-screen-label="Matrix">
      <div className="kl-wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          <div>
            <span className="kl-kicker">— Matriz de funcionalidades</span>
            <h2 className="kl-h2" style={{ marginTop: 14 }}>
              O que existe <em style={{ color: 'var(--ocean)' }}>em cada produto.</em>
            </h2>
          </div>
          <span className="kl-mono">15 categorias · Q2 2026</span>
        </div>
        <table className="lp-matrix">
          <thead>
            <tr>
              <th style={{ width: '36%' }}>Funcionalidade</th>
              <th className="b2b">Kura Clínica</th>
              <th className="b2c">Kura App</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r[0]}</td>
                <td className={r[1] ? 'yes' : 'no'}>
                  {r[1] ? <><span style={{ color: 'var(--ocean)', marginRight: 6, fontWeight: 600 }}>✓</span>{r[1]}</> : <>—</>}
                </td>
                <td className={r[2] ? 'yes' : 'no'}>
                  {r[2] ? <><span style={{ color: 'var(--sage)', marginRight: 6, fontWeight: 600 }}>✓</span>{r[2]}</> : <>—</>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ─── ROADMAP ───────────────────────────────────────────────
function ProdutoRoadmap() {
  const quarters = [
    { h: <>Q2 <em>26</em></>, tag: 'Atual', cls: 'now', items: [
      ['✓', 'MVP clínica + app tutor'],
      ['✓', 'Luna v1 (detecção raça)'],
      ['✓', 'Teleorientação CFMV'],
      ['→', 'White label · 1ª rede'],
    ]},
    { h: <>Q3 <em>26</em></>, tag: 'Próximo', cls: '', items: [
      ['○', 'Luna v2 · comportamento'],
      ['○', 'Prescrição inteligente IA'],
      ['○', 'Integração PetLove/Petz'],
      ['○', 'PWA tutor (web)'],
    ]},
    { h: <>Q4 <em>26</em></>, tag: 'Planejado', cls: '', items: [
      ['○', 'Dashboard tutores · analytics'],
      ['○', 'Marketplace · banho/tosa'],
      ['○', 'API pública v1'],
      ['○', 'ISO 27001 certificação'],
    ]},
    { h: <>20<em>27</em></>, tag: 'Visão', cls: '', items: [
      ['○', 'Luna v3 · predição doenças'],
      ['○', 'Telemedicina internacional'],
      ['○', 'White label · redes'],
      ['○', 'Expansão LATAM'],
    ]},
  ];
  return (
    <section className="kl-section" style={{ background: 'var(--bg-elev)' }} data-screen-label="Roadmap">
      <div className="kl-wrap">
        <div style={{ maxWidth: 680 }}>
          <span className="kl-kicker">— Roadmap</span>
          <h2 className="kl-h2" style={{ marginTop: 14 }}>
            Próximos <em style={{ color: 'var(--ocean)' }}>lançamentos.</em>
          </h2>
          <p className="kl-lead">
            Roadmap transparente, atualizado trimestralmente. Itens com <strong style={{ color: 'var(--sage)' }}>✓</strong> estão em produção · <strong style={{ color: 'var(--amber)' }}>→</strong> em desenvolvimento · <strong style={{ color: 'var(--text-mute)' }}>○</strong> planejado.
          </p>
        </div>

        <div className="lp-roadmap">
          {quarters.map((q, i) => (
            <div key={i} className={`lp-quarter ${i === 0 ? 'done' : i === 1 ? 'now' : ''}`}>
              <div className="lp-quarter-head">
                <span className="lp-quarter-h">{q.h}</span>
                <span className="lp-quarter-tag">{q.tag}</span>
              </div>
              <ul>
                {q.items.map((it, j) => (
                  <li key={j}><span className="st">{it[0]}</span>{it[1]}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MÉTRICAS / TRAÇÃO ─────────────────────────────────────
function ProdutoMetrics() {
  // Simple bar sparkline for MRR
  const mrr = [220, 260, 295, 340, 395, 450];
  const max = 500;
  return (
    <section className="kl-section" data-screen-label="Metrics">
      <div className="kl-wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          <div>
            <span className="kl-kicker">— Tração</span>
            <h2 className="kl-h2" style={{ marginTop: 14 }}>
              Crescimento <em style={{ color: 'var(--ocean)' }}>real.</em>
            </h2>
          </div>
          <span className="kl-mono">Dados de Q1/2026 · fonte interna</span>
        </div>

        <div className="lp-metrics">
          <div className="lp-metric-card ocean">
            <span className="k">Clínicas parceiras</span>
            <div className="v"><em>120</em><small>+</small></div>
            <div className="d">+38 nos últimos 6 meses</div>
          </div>
          <div className="lp-metric-card sage">
            <span className="k">Tutores ativos</span>
            <div className="v"><em>15K</em><small>+</small></div>
            <div className="d">CAGR 22% · WoW retenção 94%</div>
          </div>
          <div className="lp-metric-card amber">
            <span className="k">Consultas / mês</span>
            <div className="v"><em>3.5K</em><small>+</small></div>
            <div className="d">2.1k presencial · 1.4k teleorientação</div>
          </div>
          <div className="lp-metric-card clay">
            <span className="k">MRR · Q1 2026</span>
            <div className="v"><em>R$</em>450<small>K</small></div>
            <div className="d">CAC R$ 380 · LTV R$ 8.4k · payback 3m</div>
          </div>
        </div>

        <div style={{ marginTop: 28, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, padding: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
            <span className="kl-mono">— MRR · últimos 6 meses</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--text)', letterSpacing: '-0.02em' }}>
              +<em style={{ fontStyle: 'italic', color: 'var(--ocean)' }}>104%</em> H/H
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 14, alignItems: 'end', height: 160 }}>
            {mrr.map((v, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ocean)', fontWeight: 500 }}>R$ {v}k</div>
                <div style={{
                  width: '100%',
                  height: `${(v / max) * 120}px`,
                  background: `linear-gradient(180deg, var(--ocean) 0%, var(--ocean-soft) 100%)`,
                  borderRadius: '6px 6px 0 0',
                  position: 'relative',
                }}/>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-mute)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {['NOV','DEZ','JAN','FEV','MAR','ABR'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CASES ─────────────────────────────────────────────────
function ProdutoCases() {
  const cases = [
    {
      tag: 'B2B · Clínica',
      q: 'Reduzimos 40% do tempo em consultas. ROI positivo em 3 meses, sem custo de migração.',
      n: 'Dra. Mariana Costa',
      r: 'Clínica Vila Madalena · CRMV-SP 18.432',
    },
    {
      tag: 'B2B · Rede',
      q: 'Implantamos em 5 unidades. Tutores amam o app, NPS 85. Aumentamos retenção em 22%.',
      n: 'Dr. Paulo Andrade',
      r: 'PetLife · Diretor Clínico',
    },
    {
      tag: 'B2C · Tutora',
      q: 'Nunca mais perdi vacina do meu gato. Praticidade total, sem ligar pra clínica.',
      n: 'Juliana M.',
      r: 'Tutora · São Paulo',
    },
  ];
  return (
    <section className="kl-section" style={{ background: 'var(--bg-elev)' }} data-screen-label="Cases">
      <div className="kl-wrap">
        <div style={{ marginBottom: 48 }}>
          <span className="kl-kicker">— Casos reais</span>
          <h2 className="kl-h2" style={{ marginTop: 14 }}>
            O que os <em style={{ color: 'var(--ocean)' }}>clientes</em> dizem.
          </h2>
        </div>
        <div className="lp-cases">
          {cases.map((c, i) => (
            <div key={i} className="kl-quote">
              <div className="kl-chip kl-chip-ocean" style={{ alignSelf: 'flex-start' }}>{c.tag}</div>
              <p className="q">"{c.q}"</p>
              <div className="by">
                <div className="by-av"/>
                <div>
                  <div className="by-name">{c.n}</div>
                  <div className="by-meta">{c.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ───────────────────────────────────────────────
function ProdutoContact() {
  return (
    <section className="kl-section" data-screen-label="Contact">
      <div className="kl-wrap">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="kl-kicker">— Vamos conversar</span>
          <h2 className="kl-h2" style={{ marginTop: 14 }}>
            Quer saber <em style={{ color: 'var(--ocean)' }}>mais?</em>
          </h2>
          <p className="kl-lead" style={{ margin: '12px auto 0', textAlign: 'center' }}>
            Três caminhos diferentes, três times diferentes. Resposta em até 24h em dias úteis.
          </p>
        </div>

        <div className="lp-contact-grid">
          <div className="lp-contact-card">
            <span className="tag">— Investidores</span>
            <h3>Investir <em style={{ color: 'var(--ocean)' }}>na Kura.</em></h3>
            <p>Pitch deck completo, financials Q1-Q4 2026, modelo de negócio e projeção 24 meses. Captação Series A em andamento.</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
              {['Pitch deck', 'Financials', 'Cap table'].map(t => <span key={t} className="kl-chip kl-chip-ocean" style={{ fontSize: 11 }}>{t}</span>)}
            </div>
            <a className="mail" href="mailto:invest@clyvovet.com.br">
              invest@clyvovet.com.br <LIcon name="arrow" size={14}/>
            </a>
          </div>

          <div className="lp-contact-card">
            <span className="tag">— Parceiros</span>
            <h3>Integrar <em style={{ color: 'var(--sage)' }}>com Kura.</em></h3>
            <p>White label para redes, API REST/webhooks, integração com seu e-commerce, lab ou software legado. SDK em 3 linguagens.</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
              {['White label', 'API', 'SDK'].map(t => <span key={t} className="kl-chip kl-chip-sage" style={{ fontSize: 11 }}>{t}</span>)}
            </div>
            <a className="mail" href="mailto:partners@clyvovet.com.br" style={{ color: 'var(--sage)' }}>
              partners@clyvovet.com.br <LIcon name="arrow" size={14}/>
            </a>
          </div>

          <div className="lp-contact-card">
            <span className="tag">— Imprensa</span>
            <h3>Cobrir <em style={{ color: 'var(--amber)' }}>a Kura.</em></h3>
            <p>Media kit completo: logos, screenshots HQ, fotos do time, releases. Disponível para entrevistas em PT, EN e ES.</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
              {['Media kit', 'Releases', 'Entrevistas'].map(t => <span key={t} className="kl-chip kl-chip-amber" style={{ fontSize: 11 }}>{t}</span>)}
            </div>
            <a className="mail" href="mailto:press@clyvovet.com.br" style={{ color: 'var(--amber)' }}>
              press@clyvovet.com.br <LIcon name="arrow" size={14}/>
            </a>
          </div>
        </div>

        <div style={{ marginTop: 56, padding: '24px 32px', background: 'var(--text)', color: 'var(--bg)', borderRadius: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(248,242,230,0.55)' }}>— Links úteis</div>
            <div style={{ fontSize: 15, marginTop: 6 }}>Documentação técnica, API reference, status público</div>
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <a href="#docs" style={{ color: 'var(--bg)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: '1px solid var(--amber-bright)', paddingBottom: 2 }}>Docs API ↗</a>
            <a href="#github" style={{ color: 'var(--bg)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: '1px solid var(--amber-bright)', paddingBottom: 2 }}>GitHub ↗</a>
            <a href="#status" style={{ color: 'var(--bg)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: '1px solid var(--amber-bright)', paddingBottom: 2 }}>Status ↗</a>
            <a href="#changelog" style={{ color: 'var(--bg)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: '1px solid var(--amber-bright)', paddingBottom: 2 }}>Changelog ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── APP ───────────────────────────────────────────────────
function ProdutoApp() {
  return (
    <>
      <KLNav
        tone="amber"
        sub="Plataforma · Showcase técnico"
        links={[
          { label: 'Visão', href: '#vision' },
          { label: 'Stack', href: '#stack' },
          { label: 'Luna AI', href: '#luna' },
          { label: 'Roadmap', href: '#roadmap' },
          { label: 'Métricas', href: '#metrics' },
        ]}
        cta={<>
          <a className="kl-btn kl-btn-ghost kl-btn-sm" href="#docs" style={{ color: 'var(--text-soft)' }}>Docs</a>
          <a className="kl-btn kl-btn-light kl-btn-sm" href="#contact" style={{ background: 'var(--text)', color: 'var(--bg)' }}>Falar com a Kura</a>
        </>}
      />
      <main>
        <ProdutoHero/>
        <ProdutoVision/>
        <ProdutoStack/>
        <ProdutoLuna/>
        <ProdutoMatrix/>
        <ProdutoRoadmap/>
        <ProdutoMetrics/>
        <ProdutoCases/>
        <ProdutoContact/>
      </main>
      <KLFooter tone="ocean"/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<ProdutoApp/>);
