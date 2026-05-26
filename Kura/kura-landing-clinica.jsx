// kura-landing-clinica.jsx — Landing B2B (clínicas / veterinários)

// ─── Dashboard mockup ─────────────────────────────────────
function ClinicaDashboardMock() {
  return (
    <div className="lc-mock" data-screen-label="Hero · Dashboard mockup">
      <div className="lc-mock-side">
        <div className="lc-mock-brand">
          <KuraMark size={18} color="var(--ocean)"/>
          <div className="wm">Ku<em>ra</em></div>
        </div>
        <div className="lc-mock-nav active"><span className="dt"/> Painel</div>
        <div className="lc-mock-nav"><span className="dt"/> Agenda</div>
        <div className="lc-mock-nav"><span className="dt"/> Prontuários</div>
        <div className="lc-mock-nav"><span className="dt"/> Pacientes</div>
        <div className="lc-mock-nav"><span className="dt"/> Receituário</div>
        <div className="lc-mock-nav"><span className="dt"/> Teleorientação</div>
        <div className="lc-mock-nav"><span className="dt"/> Luna · IA</div>
        <div className="lc-mock-nav"><span className="dt"/> Financeiro</div>
        <div className="lc-mock-nav"><span className="dt"/> Relatórios</div>
      </div>
      <div className="lc-mock-main">
        <div className="lc-mock-h">
          <div>
            <h4>Bom dia, <em>Dra. Ana</em>.</h4>
            <div style={{ fontSize: 10, color: 'var(--text-mute)', marginTop: 3 }}>Quinta, 07 de Maio · 12 atendimentos hoje</div>
          </div>
          <div className="crumb">PETLIFE · VILA MARIANA</div>
        </div>
        <div className="lc-mock-metrics">
          <div className="lc-mock-metric"><div className="l">Consultas</div><div className="v">12</div><div className="d">+3 vs ontem</div></div>
          <div className="lc-mock-metric"><div className="l">Tele</div><div className="v">04</div><div className="d">2 em curso</div></div>
          <div className="lc-mock-metric"><div className="l">Receita</div><div className="v" style={{ fontSize: 18 }}>R$ 4.2k</div><div className="d">Meta 5.0k</div></div>
          <div className="lc-mock-metric alert"><div className="l">Pendentes</div><div className="v">03</div><div className="d">Vacinas atrasadas</div></div>
        </div>
        <div className="lc-mock-agenda">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-mute)' }}>Próximos atendimentos</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--ocean)' }}>VER TODOS →</div>
          </div>
          <div className="lc-mock-row">
            <span className="t">09:30</span>
            <span className="av"/>
            <div className="body"><div className="n">Luna · Border Collie</div><div className="m">Marina S. · retorno</div></div>
            <span className="b s">Consulta</span>
          </div>
          <div className="lc-mock-row">
            <span className="t">10:15</span>
            <span className="av" style={{ background: 'linear-gradient(135deg, #C9A876, #8B6F45)' }}/>
            <div className="body"><div className="n">Thor · Labrador</div><div className="m">Paulo M. · check-up</div></div>
            <span className="b o">Retorno</span>
          </div>
          <div className="lc-mock-row">
            <span className="t">11:00</span>
            <span className="av" style={{ background: 'linear-gradient(135deg, #E8DDC8, #6B8AA8)' }}/>
            <div className="body"><div className="n">Mia · SRD</div><div className="m">Juliana F. · 1ª consulta</div></div>
            <span className="b a">Teleorientação</span>
          </div>
          <div className="lc-mock-row">
            <span className="t">14:00</span>
            <span className="av" style={{ background: 'linear-gradient(135deg, #3D2B18, #6B4A2B)' }}/>
            <div className="body"><div className="n">Bolt · Poodle</div><div className="m">João C. · pós-cirúrgico</div></div>
            <span className="b c">Urgência</span>
          </div>
        </div>
      </div>
      <div className="lc-luna-chip">
        <div className="luna-av"/>
        <div className="luna-meta">
          <span className="luna-kicker">Luna · detectou</span>
          <span className="luna-text">Labrador na recepção</span>
          <span className="luna-conf">94.2% · cadastro pré-preenchido</span>
        </div>
      </div>
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────
function ClinicaHero() {
  return (
    <section className="kl-section-hero lc-hero" data-screen-label="Hero">
      <div className="kl-wrap-w">
        <div className="lc-hero-grid">
          <div>
            <div className="kl-kicker k-ocean" style={{ marginBottom: 18 }}>Kura Clínica · Para veterinários</div>
            <h1 className="kl-h1 tone-ocean">
              Sistema veterinário completo com <em>IA e teleorientação regulamentada.</em>
            </h1>
            <p className="kl-lead">
              Prontuário digital, agenda, receituário eletrônico e o módulo Luna AI — para clínicas que buscam compliance, eficiência e uma única plataforma do agendamento ao pagamento.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <a className="kl-btn kl-btn-ocean kl-btn-lg" href="#demo">
                Agendar demonstração <LIcon name="arrow" size={18}/>
              </a>
              <a className="kl-btn kl-btn-outline-ocean kl-btn-lg" href="#precos">
                Ver planos e preços
              </a>
            </div>
            <div style={{ marginTop: 36 }}>
              <KLTrust items={[
                'CFMV 1.465/2022', 'LGPD compliant', 'ICP-Brasil', 'ISO 27001',
              ]}/>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0 40px' }}>
            <ClinicaDashboardMock/>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SOCIAL PROOF · LOGOS + QUOTE ──────────────────────────
function ClinicaSocialProof() {
  return (
    <section className="kl-section-tight" data-screen-label="Social proof">
      <div className="kl-wrap-w">
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <span className="kl-mono">Mais de <strong style={{ color: 'var(--text)' }}>120 clínicas veterinárias</strong> já usam Kura</span>
        </div>
        <div className="lc-logos">
          <div className="lc-logo">PetLife<span className="m">Hospital Veterinário</span></div>
          <div className="lc-logo">São Bernardo<span className="m">Clínica · São Paulo</span></div>
          <div className="lc-logo">VetCare<span className="m">Centro · Rio de Janeiro</span></div>
          <div className="lc-logo">Pinheiros<span className="m">Centro Veterinário</span></div>
          <div className="lc-logo">Vila Madá<span className="m">Clínica · São Paulo</span></div>
          <div className="lc-logo">Animal<span className="m">Hospital · Belo Horizonte</span></div>
        </div>

        <div className="lc-bigquote">
          <p className="q">
            Reduzimos <em>40% do tempo</em> em consultas com o prontuário inteligente. A teleorientação abriu uma nova linha de receita sem investimento de infraestrutura.
          </p>
          <div className="meta">
            <span className="by-name">Dra. Mariana Costa</span>
            <span className="by-role">Clínica Veterinária Vila Madalena</span>
            <span className="crmv">CRMV-SP 18.432</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── COMPARAÇÃO COMPETITIVA ────────────────────────────────
function ClinicaComparison() {
  return (
    <section className="kl-section" data-screen-label="Comparison">
      <div className="kl-wrap">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="kl-kicker k-ocean">— Diferencial competitivo</span>
          <h2 className="kl-h2 tone-ocean" style={{ marginTop: 14 }}>
            Por que clínicas estão <em>migrando para Kura.</em>
          </h2>
          <p className="kl-lead" style={{ margin: '12px auto 0', textAlign: 'center' }}>
            Comparação direta com os principais sistemas de gestão veterinária do mercado brasileiro.
          </p>
        </div>
        <table className="kl-compare">
          <thead>
            <tr>
              <th style={{ width: '34%' }}>Recurso</th>
              <th>Nuvem Vet</th>
              <th>Vet Manager</th>
              <th className="kura">Kura Clínica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mensalidade (plano padrão)</td>
              <td>R$ 450</td>
              <td>R$ 799</td>
              <td className="kura"><strong>R$ 299</strong></td>
            </tr>
            <tr>
              <td>App tutor integrado</td>
              <td><span className="no">— manual</span></td>
              <td><span className="no">— manual</span></td>
              <td className="kura"><span className="yes">Incluído</span></td>
            </tr>
            <tr>
              <td>Teleorientação CFMV-compliant</td>
              <td><span className="no">Não</span></td>
              <td><span className="no">Não</span></td>
              <td className="kura"><span className="yes">Res. 1.465/2022</span></td>
            </tr>
            <tr>
              <td>IA aplicada (detecção de raça)</td>
              <td><span className="no">Não</span></td>
              <td><span className="no">Não</span></td>
              <td className="kura"><span className="yes">Luna · 94%</span></td>
            </tr>
            <tr>
              <td>Receituário ICP-Brasil</td>
              <td><span className="yes" style={{ color: 'var(--text-soft)' }}>Sim</span></td>
              <td><span className="yes" style={{ color: 'var(--text-soft)' }}>Sim</span></td>
              <td className="kura"><span className="yes">Nativo</span></td>
            </tr>
            <tr>
              <td>Onboarding completo</td>
              <td>2 – 3 semanas</td>
              <td>4 – 6 semanas</td>
              <td className="kura"><strong>2 dias</strong></td>
            </tr>
            <tr>
              <td>Migração de dados gratuita</td>
              <td><span className="no">R$ 1.200</span></td>
              <td><span className="no">Sob consulta</span></td>
              <td className="kura"><span className="yes">Incluído</span></td>
            </tr>
          </tbody>
        </table>
        <p className="kl-body-sm" style={{ marginTop: 18, textAlign: 'center', maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
          Dados coletados em abril/2026. Concorrentes citados para fins comparativos — marcas registradas de seus respectivos donos.
        </p>
      </div>
    </section>
  );
}

// ─── FEATURES GRID ─────────────────────────────────────────
function ClinicaFeatures() {
  const feats = [
    { i: 'calendar', t: 'ocean', h: 'Agenda inteligente', d: 'Calendário com detecção de conflitos, agendamento online pelo tutor e lembretes automáticos via WhatsApp.' },
    { i: 'doc',      t: 'ocean', h: 'Prontuário digital SOAP', d: 'Estrutura SOAP completa, templates customizáveis e histórico vitalício do paciente.' },
    { i: 'pill',     t: 'ocean', h: 'Receituário digital', d: 'Prescrição eletrônica com assinatura ICP-Brasil, envio direto ao tutor, controle ANVISA.' },
    { i: 'video',    t: 'amber', h: 'Teleorientação CFMV', d: 'Videochamada integrada conforme Res. 1.465/2022, prontuário acessível durante a consulta.' },
    { i: 'cpu',      t: 'amber', h: 'Luna AI — detecção de raça', d: 'Câmera IoT identifica raça automaticamente (94% acurácia) e sugere protocolos vacinais.' },
    { i: 'chart',    t: 'ocean', h: 'Dashboard & relatórios', d: 'KPIs em tempo real: consultas/dia, receita, taxa de retorno, vacinas aplicadas.' },
    { i: 'card',     t: 'amber', h: 'Pagamento integrado', d: 'Cartão, PIX e boleto via Stripe/Mercado Pago. Conciliação automática e links de pagamento.' },
    { i: 'lock',     t: 'ocean', h: 'LGPD & segurança', d: 'Dados criptografados AES-256, backup diário, consentimento digital e logs de auditoria.' },
    { i: 'plug',     t: 'ocean', h: 'Integrações abertas', d: 'WhatsApp Business API, Google Calendar, Conta Azul, PagSeguro e webhook para sistemas legados.' },
  ];
  return (
    <section className="kl-section" style={{ background: 'var(--bg-elev)' }} data-screen-label="Features">
      <div className="kl-wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          <div style={{ maxWidth: 600 }}>
            <span className="kl-kicker k-ocean">— O que você ganha</span>
            <h2 className="kl-h2 tone-ocean" style={{ marginTop: 14 }}>
              Tudo o que sua clínica precisa, <em>num lugar só.</em>
            </h2>
          </div>
          <p className="kl-lead" style={{ maxWidth: 380 }}>
            Nove módulos integrados — do primeiro agendamento até o pagamento. Sem add-ons, sem letra miúda.
          </p>
        </div>
        <div className="lc-feat-grid">
          {feats.map((f, i) => (
            <div key={i} className="kl-feat">
              <div className={`kl-feat-icon ${f.t}`}><LIcon name={f.i} size={26} stroke={1.7}/></div>
              <h3>{f.h}</h3>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── LUNA AI SPOTLIGHT ─────────────────────────────────────
function ClinicaLuna() {
  return (
    <section className="kl-section lc-luna-section" data-screen-label="Luna AI">
      <div className="kl-wrap">
        <div className="lc-luna-grid">
          <div className="lc-luna-cam">
            <div className="lc-luna-cam-viewport">
              <div className="lc-luna-bbox"/>
            </div>
            <div className="lc-luna-cam-meta">
              <span className="live">Live · recepção</span>
              <span>YOLOv8 · 30fps</span>
            </div>
            <div className="lc-luna-suggest">
              <div className="lbl">— Protocolo sugerido para a raça</div>
              <div className="protocol"><span className="ck"><LIcon name="check" size={10} stroke={3}/></span>V10 + Antirrábica · próxima 11/05</div>
              <div className="protocol"><span className="ck"><LIcon name="check" size={10} stroke={3}/></span>Vermífugo polivalente</div>
              <div className="protocol"><span className="ck"><LIcon name="check" size={10} stroke={3}/></span>Avaliação ortopédica · risco displasia</div>
            </div>
          </div>
          <div>
            <span className="kl-kicker k-light" style={{ color: 'var(--amber-bright)' }}>— Luna AI</span>
            <h2 className="kl-h2" style={{ marginTop: 14 }}>
              A primeira <em>IA veterinária</em><br/>do Brasil.
            </h2>
            <p className="kl-lead" style={{ color: 'rgba(255,252,247,0.82)', marginTop: 18 }}>
              Câmera IoT instalada na recepção detecta a raça do pet automaticamente. Quando o tutor chega, o sistema já sugere protocolo vacinal específico, doenças comuns da raça e histórico das últimas consultas.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
              <div style={{ background: 'rgba(255,252,247,0.06)', border: '1px solid rgba(255,252,247,0.14)', borderRadius: 14, padding: 20 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em' }}>94<small style={{ fontSize: 18, opacity: 0.6 }}>%</small></div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,252,247,0.6)', marginTop: 8 }}>Acurácia top-1</div>
              </div>
              <div style={{ background: 'rgba(255,252,247,0.06)', border: '1px solid rgba(255,252,247,0.14)', borderRadius: 14, padding: 20 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em' }}>30<small style={{ fontSize: 18, opacity: 0.6 }}>s</small></div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,252,247,0.6)', marginTop: 8 }}>Cadastro · era 5min</div>
              </div>
              <div style={{ background: 'rgba(255,252,247,0.06)', border: '1px solid rgba(255,252,247,0.14)', borderRadius: 14, padding: 20 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em' }}>120<small style={{ fontSize: 18, opacity: 0.6 }}>+</small></div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,252,247,0.6)', marginTop: 8 }}>Raças treinadas</div>
              </div>
              <div style={{ background: 'rgba(255,252,247,0.06)', border: '1px solid rgba(255,252,247,0.14)', borderRadius: 14, padding: 20 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em' }}>&lt;300<small style={{ fontSize: 16, opacity: 0.6 }}>ms</small></div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,252,247,0.6)', marginTop: 8 }}>Latência inferência</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <a className="kl-btn kl-btn-amber" href="#luna">
                <LIcon name="play" size={16}/> Ver Luna em ação · 60s
              </a>
              <a className="kl-btn kl-btn-outline-light" href="#luna-docs">
                Documentação técnica
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TIMELINE / FLUXO ─────────────────────────────────────
function ClinicaTimeline() {
  const steps = [
    { n: '01', meta: 'Tutor', h: 'Agendamento online', d: 'Tutor agenda pelo Kura App. Clínica recebe notificação e confirma via WhatsApp.' },
    { n: '02', meta: 'Recepção · Luna', h: 'Chegada com IA', d: 'Câmera Luna detecta a raça. Sistema pré-preenche o cadastro e abre o prontuário.' },
    { n: '03', meta: 'Consulta', h: 'Prontuário SOAP', d: 'Vet preenche subjetivo, objetivo, avaliação e plano. Prescreve digital com ICP-Brasil.' },
    { n: '04', meta: 'Pagamento', h: 'Cobrança e retorno', d: 'Link de pagamento PIX/cartão enviado. Lembrete de retorno agendado automaticamente.' },
  ];
  return (
    <section className="kl-section" data-screen-label="Timeline">
      <div className="kl-wrap">
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <span className="kl-kicker k-ocean">— Fluxo do atendimento</span>
          <h2 className="kl-h2 tone-ocean" style={{ marginTop: 14 }}>
            Do agendamento ao pagamento, <em>numa só plataforma.</em>
          </h2>
        </div>
        <div className="lc-timeline">
          {steps.map((s, i) => (
            <div key={i} className="lc-tl-step">
              <div className="lc-tl-num">{s.n}</div>
              <div className="meta">{s.meta}</div>
              <h3>{s.h}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ───────────────────────────────────────────────
function ClinicaPricing() {
  return (
    <section className="kl-section" id="precos" style={{ background: 'var(--bg-elev)' }} data-screen-label="Pricing">
      <div className="kl-wrap">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="kl-kicker k-ocean">— Planos e preços</span>
          <h2 className="kl-h2 tone-ocean" style={{ marginTop: 14 }}>
            Sem letra miúda. <em>Sem taxa de setup.</em>
          </h2>
          <p className="kl-lead" style={{ margin: '12px auto 0', textAlign: 'center' }}>
            Todos os planos incluem migração de dados, suporte humano e atualizações vitalícias.
          </p>
        </div>
        <div className="lc-pricing">
          <div className="kl-price">
            <div>
              <div className="lbl">Starter</div>
              <div className="name">Para clínicas pequenas</div>
            </div>
            <div className="price">R$ 299<small>/mês</small></div>
            <ul className="features">
              <li>Até 3 veterinários</li>
              <li>Prontuário + agenda + receituário</li>
              <li>App tutor incluído</li>
              <li>500 tutores ativos</li>
              <li>Suporte por email · resposta 24h</li>
            </ul>
            <a className="kl-btn kl-btn-outline-ocean" href="#trial" style={{ marginTop: 'auto' }}>Começar teste · 14 dias</a>
          </div>

          <div className="kl-price popular">
            <div className="kl-price-badge">Mais popular</div>
            <div>
              <div className="lbl">Pro</div>
              <div className="name">Para clínicas em crescimento</div>
            </div>
            <div className="price">R$ 549<small style={{ color: 'rgba(255,252,247,0.6)' }}>/mês</small></div>
            <ul className="features">
              <li>Até 10 veterinários</li>
              <li>Tudo do Starter +</li>
              <li>Teleorientação ilimitada</li>
              <li>Luna AI · 1 câmera incluída</li>
              <li>2.000 tutores ativos</li>
              <li>Suporte prioritário · WhatsApp dedicado</li>
            </ul>
            <a className="kl-btn kl-btn-amber" href="#demo" style={{ marginTop: 'auto' }}>Agendar demonstração</a>
          </div>

          <div className="kl-price">
            <div>
              <div className="lbl">Enterprise</div>
              <div className="name">Para redes e hospitais</div>
            </div>
            <div className="price" style={{ fontSize: 32, lineHeight: 1.1 }}>Sob consulta</div>
            <ul className="features">
              <li>Veterinários ilimitados</li>
              <li>Tudo do Pro +</li>
              <li>Luna AI · múltiplas câmeras</li>
              <li>API dedicada + webhooks</li>
              <li>Treinamento presencial</li>
              <li>Account manager · SLA 4h</li>
            </ul>
            <a className="kl-btn kl-btn-outline-ocean" href="#enterprise" style={{ marginTop: 'auto' }}>Falar com especialista</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ───────────────────────────────────────────────────
function ClinicaFAQ() {
  const items = [
    { q: 'Como funciona a migração de dados do meu sistema atual?', a: 'Nossa equipe faz a importação completa em até 48h a partir de planilhas, Excel ou conexão direta com Nuvem Vet, Vet Manager e Simple Vet. Migração é gratuita em todos os planos.' },
    { q: 'Preciso instalar algo? Funciona em iPad?', a: 'Kura roda 100% no navegador (Chrome, Safari, Edge) e tem app nativo para iPad/iPhone. Não exige instalação local nem servidor próprio.' },
    { q: 'Os dados são seguros? Como funciona o backup?', a: 'Criptografia AES-256 em repouso e em trânsito, backup automático a cada 6 horas em três regiões AWS, conformidade LGPD e ISO 27001. Você pode exportar seus dados a qualquer momento.' },
    { q: 'A teleorientação é legal perante o CFMV?', a: 'Sim. Implementamos rigorosamente a Resolução CFMV 1.465/2022: teleorientação é permitida para acompanhamento, dúvidas e orientações — não substitui consulta presencial para diagnóstico inicial.' },
    { q: 'Como funciona a assinatura digital de receitas?', a: 'Receituário com assinatura ICP-Brasil ou e-CPF integrada. Aceita pelo SNGPC, válida em farmácias humanas e pet shops. Controle de medicamentos da Portaria 344 incluído.' },
    { q: 'Preciso comprar equipamento para usar a Luna?', a: 'O kit Luna (Raspberry Pi + câmera 1080p) está incluído no plano Pro. Você pode adicionar câmeras extras por R$ 80/mês cada, no Enterprise.' },
    { q: 'Qual o prazo de implantação?', a: 'Onboarding completo em 2 dias úteis: dia 1 migração + setup, dia 2 treinamento da equipe (2h). A partir do dia 3 sua clínica está operando 100% no Kura.' },
    { q: 'Tem taxa de setup ou só a mensalidade?', a: 'Nenhuma taxa de setup, sem fidelidade. Apenas a mensalidade. Cancelamento pelo painel, sem multa, com 30 dias de aviso prévio.' },
  ];
  return (
    <section className="kl-section" data-screen-label="FAQ">
      <div className="kl-wrap">
        <div className="lc-faq-grid">
          <div>
            <span className="kl-kicker k-ocean">— Perguntas frequentes</span>
            <h2 className="kl-h2 tone-ocean" style={{ marginTop: 14 }}>
              Dúvidas <em>respondidas.</em>
            </h2>
            <p className="kl-body" style={{ marginTop: 18 }}>
              Não encontrou o que procurava? Fale direto com nosso time pelo WhatsApp <strong style={{ color: 'var(--text)' }}>(11) 9 8765-4321</strong> ou por email <a href="mailto:clinicas@clyvovet.com.br" style={{ color: 'var(--ocean)', textDecoration: 'none', fontWeight: 500 }}>clinicas@clyvovet.com.br</a>.
            </p>
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
      </div>
    </section>
  );
}

// ─── FINAL CTA ─────────────────────────────────────────────
function ClinicaFinalCTA() {
  return (
    <section className="lc-final kl-grain" id="demo" data-screen-label="Final CTA">
      <div className="kl-narrow" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center' }}>
          <span className="kl-kicker k-light" style={{ color: 'var(--amber-bright)' }}>— Pronto para começar?</span>
          <h2 className="kl-h2" style={{ marginTop: 16, fontSize: 56 }}>
            Modernize sua clínica veterinária <em>hoje.</em>
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,252,247,0.82)', maxWidth: 540, margin: '20px auto 36px' }}>
            Demonstração gratuita de 30 minutos com um especialista. Sem compromisso, sem cartão de crédito.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="kl-btn kl-btn-amber kl-btn-lg" href="#book">
              Agendar demonstração <LIcon name="arrow" size={18}/>
            </a>
            <a className="kl-btn kl-btn-outline-light kl-btn-lg" href="#trial">
              Iniciar teste · 14 dias grátis
            </a>
          </div>
          <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 28, color: 'rgba(255,252,247,0.6)' }}>
            {['CFMV 1.465/2022', 'LGPD compliant', 'ICP-Brasil', 'ISO 27001'].map(t => (
              <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── APP ───────────────────────────────────────────────────
function ClinicaApp() {
  return (
    <>
      <KLNav
        tone="ocean"
        sub="Clínica · Para veterinários"
        links={[
          { label: 'Recursos', href: '#features' },
          { label: 'Luna AI', href: '#luna' },
          { label: 'Comparar', href: '#compare' },
          { label: 'Planos', href: '#precos' },
          { label: 'FAQ', href: '#faq' },
        ]}
        cta={<>
          <a className="kl-btn kl-btn-ghost kl-btn-sm" href="#login" style={{ color: 'var(--text-soft)' }}>Entrar</a>
          <a className="kl-btn kl-btn-ocean kl-btn-sm" href="#demo">Agendar demo</a>
        </>}
      />
      <main>
        <ClinicaHero/>
        <ClinicaSocialProof/>
        <ClinicaComparison/>
        <ClinicaFeatures/>
        <ClinicaLuna/>
        <ClinicaTimeline/>
        <ClinicaPricing/>
        <ClinicaFAQ/>
        <ClinicaFinalCTA/>
      </main>
      <KLFooter tone="ocean"/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<ClinicaApp/>);
