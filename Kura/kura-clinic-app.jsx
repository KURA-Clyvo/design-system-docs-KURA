// kura-clinic-app.jsx — Compõe as telas no design canvas

function App() {
  const A = (id, label, theme, ScreenEl) => (
    <DCArtboard id={id} label={label} width={1280} height={800}>
      <div data-theme={theme} style={{ width: 1280, height: 800, position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
        {ScreenEl}
      </div>
    </DCArtboard>
  );

  return (
    <DesignCanvas
      title="Kura · Sistema Clínica"
      subtitle="High-fidelity desktop · 13 telas · 1280×800 · Veterinários e equipe">

      <DCSection id="acesso" title="Bloco 1 · Acesso" subtitle="Login da equipe (light + dark)">
        {A('login-l', '01 · Login · Light', 'light', <ScrCLogin/>)}
        {A('login-d', '01 · Login · Dark',  'dark',  <ScrCLogin/>)}
      </DCSection>

      <DCSection id="painel" title="Bloco 2 · Painel do dia" subtitle="Visão de cabeceira da clínica · light + dark">
        {A('dash-l', '02 · Dashboard · Light', 'light', <ScrCDashboard/>)}
        {A('dash-d', '02 · Dashboard · Dark',  'dark',  <ScrCDashboard/>)}
      </DCSection>

      <DCSection id="agenda" title="Bloco 3 · Agenda semanal" subtitle="Visão de calendário com 6 dias">
        {A('agenda-l', '03 · Agenda · Light', 'light', <ScrCAgenda/>)}
        {A('agenda-d', '03 · Agenda · Dark',  'dark',  <ScrCAgenda/>)}
      </DCSection>

      <DCSection id="prontuario" title="Bloco 4 · Pacientes" subtitle="Lista + prontuário (linha do tempo)">
        {A('patients', '04 · Pacientes ativos', 'light', <ScrCPatients/>)}
        {A('detail-l', '05 · Prontuário Luna · Light', 'light', <ScrCPatientDetail/>)}
        {A('detail-d', '05 · Prontuário Luna · Dark',  'dark',  <ScrCPatientDetail/>)}
      </DCSection>

      <DCSection id="atendimento" title="Bloco 5 · Atendimento" subtitle="Consulta SOAP com Luna AI · Teleorientação CFMV">
        {A('consult', '06 · Nova consulta · SOAP + IA', 'light', <ScrCNewConsult/>)}
        {A('tele',    '07 · Teleorientação',            'light', <ScrCTele/>)}
      </DCSection>

      <DCSection id="prescricao" title="Bloco 6 · Receituário" subtitle="Composer + pré-visualização ICP-Brasil + envio WhatsApp">
        {A('rx',     '08 · Nova receita',           'light', <ScrCRx/>)}
        {A('whats',  '09 · Enviar pelo WhatsApp',   'light', <ScrCWhatsModal/>)}
      </DCSection>

      <DCSection id="luna-ai" title="Bloco 7 · Luna · IA & Configurações" subtitle="Monitoramento contínuo de pacientes + admin da clínica">
        {A('luna',     '10 · Luna · monitoramento contínuo', 'dark',  <ScrCLuna/>)}
        {A('settings', '11 · Equipe & permissões',           'light', <ScrCSettings/>)}
      </DCSection>

    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
