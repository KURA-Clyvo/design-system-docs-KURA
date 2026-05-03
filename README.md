# Kura Design System

> Motor de tokens centralizado que garante consistência visual e escalabilidade entre o **Kura App** (mobile, tutores de pets) e o **Kura Clínica** (desktop, veterinários e equipe clínica) — sub-marca da plataforma Clyvo Vet.

---

## Visão Geral

O Kura Design System é o contrato visual da plataforma Clyvo Vet. Ele define uma linguagem de design única que se adapta a dois contextos de produto com necessidades radicalmente diferentes:

| Dimensão | Kura App (Tutor) | Kura Clínica |
|---|---|---|
| Superfície | Mobile — 375 × 812 px | Desktop — 1280 × 800 px |
| Paleta primária | `--sage` (verde-natureza) | `--ocean` (azul-profissional) |
| Tipologia | Emocional, afetiva | Clínica, funcional |
| Telas protótipadas | 9 telas · Light + Dark | 13 telas · Light + Dark |

Um único arquivo de tokens (`kura-tokens.css`) alimenta ambas as superfícies. A paleta muda; a estrutura e a semântica permanecem as mesmas.

---

## Arquitetura do Sistema

```
Kura/
├── kura-tokens.css           # Fonte única de verdade — tokens de cor, tipografia,
│                             # espaçamento, raio, sombra e easing
├── kura-clinic.css           # Extensão CSS para a interface desktop (.kc-*)
│
├── ds-button.tsx             # Componente Button — TypeScript + Tailwind
├── ds-textfield.tsx          # Componente TextField — TypeScript + Tailwind
│
├── design-canvas.jsx         # Canvas Figma-like: pan/zoom, seções, artboards
├── ios-frame.jsx             # Frame de dispositivo iOS 26 (Liquid Glass)
│
├── kura-shared.jsx           # Primitivos globais do App Tutor (Logo, TabBar, Chip…)
├── kura-screens-{1,2,3}.jsx  # Telas do App Tutor
├── kura-app.jsx              # Compositor do App Tutor
│
├── kura-clinic-shared.jsx    # Primitivos do Sistema Clínica (Sidebar, Topbar…)
├── kura-clinic-screens-{1,2,3,4}.jsx  # Telas do Sistema Clínica
├── kura-clinic-app.jsx       # Compositor do Sistema Clínica
│
├── Kura App Tutor.html       # Protótipo completo — App Tutor
├── Kura Sistema Clinica.html # Protótipo completo — Sistema Clínica
├── Kura Storybook Tutor.html       # Documentação interativa — contexto Tutor
├── Kura Storybook Clinica.html     # Documentação interativa — contexto Clínica
│
└── uploads/
    ├── kura-design-system.html         # Especificação completa de tokens e componentes
    ├── clyvo-wireframe-portal-tutor.html
    └── clyvo-wireframe-clinica.html
```

### Camadas de estilo

```
kura-tokens.css          →  base compartilhada (ambas as superfícies)
        ↓
kura-clinic.css          →  classes .kc-* exclusivas do layout desktop
        ↓
Tailwind (arbitrary values) →  ds-button.tsx / ds-textfield.tsx consomem os
                               tokens via bg-[--sage], text-[--ocean], etc.
```

### Motor de tokens (`kura-tokens.css`)

| Grupo | Exemplos de variáveis |
|---|---|
| Cor de marca | `--sage`, `--ocean`, `--amber`, `--clay` + variantes `*-light`, `*-pale` |
| Superfícies | `--bg`, `--bg-elev`, `--surface`, `--surface-2` |
| Semântica | `--danger`, `--success`, `--warning`, `--info` + `*-bg` |
| Tipografia | `--font-display` (Cormorant) · `--font-body` (Lexend) · `--font-mono` (JetBrains Mono) |
| Escala de texto | `--t-xs` → `--t-3xl` (11 px a 44 px) |
| Espaçamento | `--s-1` → `--s-16` (4 px a 64 px) |
| Bordas | `--r-sm` → `--r-full` |
| Animação | `--ease` · `--d-fast` (140 ms) · `--d-base` (220 ms) · `--d-slow` (400 ms) |

O tema é controlado pelo atributo `data-theme="light"` / `data-theme="dark"` no elemento pai — nenhum JavaScript de runtime é necessário para a troca de tema.

---

## Componentes Core

Os componentes de base são escritos em **TypeScript estrito** com Tailwind CSS, servindo como referência canônica da API de componentes. Cada propriedade tipada documenta o contrato esperado por toda nova implementação no sistema.

### Button (`ds-button.tsx`)

```tsx
import { Button } from './ds-button';

// Contexto Tutor (sage-primary)
<Button variant="primary" size="md" context="tutor">
  Agendar consulta
</Button>

// Contexto Clínica (ocean-primary)
<Button variant="secondary" size="sm" context="clinic" loading>
  Salvar prontuário
</Button>
```

| Prop | Tipo | Valores |
|---|---|---|
| `variant` | `ButtonVariant` | `primary` · `secondary` · `ghost` · `danger` |
| `size` | `ButtonSize` | `sm` · `md` · `lg` |
| `context` | `ButtonContext` | `tutor` · `clinic` |
| `loading` | `boolean` | Exibe spinner + `aria-busy` |
| `iconLeft` / `iconRight` | `ReactNode` | Slot de ícone |
| `fullWidth` | `boolean` | Expande para 100% do container |

O componente é `forwardRef` e mapeia diretamente para os tokens de cor do contexto selecionado, garantindo que um mesmo `variant="primary"` seja verde no App Tutor e azul no Sistema Clínica.

### TextField (`ds-textfield.tsx`)

```tsx
import { TextField } from './ds-textfield';

<TextField
  label="CRM do veterinário"
  context="clinic"
  variant="filled"
  errorText="Número inválido"
  showCharCount
  maxLength={10}
/>
```

| Prop | Tipo | Descrição |
|---|---|---|
| `label` | `string` | Sempre renderizado — obrigatório para acessibilidade |
| `variant` | `TextFieldVariant` | `default` · `filled` |
| `context` | `TextFieldContext` | Controla a cor do anel de foco |
| `errorText` | `string` | Ativa estado de erro com `role="alert"` |
| `success` | `boolean` | Borda em `--success` |
| `leadingSlot` / `trailingSlot` | `ReactNode` | Slot de ícone interno |
| `showCharCount` | `boolean` | Contador com `role="status"` |
| `hideLabel` | `boolean` | Visualmente oculto (`sr-only`), mantém acessibilidade |

Ambos os componentes seguem as diretrizes WCAG 2.1 AA: `aria-invalid`, `aria-describedby`, `aria-busy`, `aria-required` e `focus-visible` ring são gerenciados internamente.

---

## Storybook — Documentação Interativa

Os Storybooks são arquivos HTML autocontidos — nenhum servidor é necessário. Abra-os diretamente no navegador.

```
Kura/Kura Storybook Tutor.html      # Contexto tutor · paleta sage
Kura/Kura Storybook Clinica.html    # Contexto clínica · paleta ocean
```

Cada Storybook inclui:

- Paleta de cores completa com valores hex e nomes de tokens
- Escala tipográfica (Cormorant, Lexend, JetBrains Mono)
- Escala de espaçamento e raio de borda
- Catálogo de componentes: botões, campos, chips, cards, badges
- Toggle de tema Light / Dark integrado

---

## Visualização de Protótipos

### Canvas de design (`design-canvas.jsx`)

O `DesignCanvas` replica a experiência de uma ferramenta de design dentro do próprio browser:

- **Pan/zoom** — navegação pelo canvas com mouse
- **Artboards reordenáveis** — drag-and-drop via grip handle
- **Foco fullscreen** — clique em um artboard para abrir em tela cheia; navegue entre telas com `←` / `→`; feche com `Esc`
- **Labels editáveis inline** — clique duplo no título do artboard para renomear
- **Seções agrupadas** — `DCSection` agrupa artboards por fluxo (Onboarding, Meus Pets, Consultas…)

### Frame iOS (`ios-frame.jsx`)

Implementação do iOS 26 *Liquid Glass* como componente React puro (sem assets externos). Exporta `IOSDevice`, `IOSStatusBar`, `IOSNavBar`, `IOSGlassPill`, `IOSList` e `IOSKeyboard` para compor telas com fidelidade ao sistema operacional.

### Wireframes

Os wireframes de referência estão em `Kura/uploads/`:

| Arquivo | Conteúdo |
|---|---|
| `kura-design-system.html` | Especificação completa — tokens, componentes e guia de uso |
| `clyvo-wireframe-portal-tutor.html` | Wireframes do Portal do Tutor |
| `clyvo-wireframe-clinica.html` | Wireframes do Sistema Clínica |

---

## Protótipos de Alta Fidelidade

| Arquivo | Superfície | Telas |
|---|---|---|
| `Kura App Tutor.html` | Mobile 375×812 | Splash, Login, Home, Detalhes do Pet, Novo Pet, Histórico de Consultas, Prontuário, Carteira de Vacinação, Agendamento |
| `Kura Sistema Clinica.html` | Desktop 1280×800 | Login, Dashboard, Agenda Semanal, Lista de Pacientes, Prontuário, Nova Consulta (SOAP + IA), Teleorientação, Receituário, Envio via WhatsApp, Luna AI, Equipe & Permissões |

Todos os protótipos são renderizados com **React + Babel Standalone** diretamente no browser — sem build, sem dependências de instalação.

---

## Instalação e Ambiente de Desenvolvimento

O sistema de protótipos e Storybooks não requer build. Para trabalhar com os componentes TypeScript (`ds-button.tsx`, `ds-textfield.tsx`) em um projeto React:

### Pré-requisitos

- Node.js 18+
- React 18+
- Tailwind CSS 3+

### Setup

```bash
# 1. Clone o repositório
git clone https://github.com/FelipeFerrete/design-system-docs-KURA.git
cd design-system-docs-KURA

# 2. Instale as dependências no seu projeto consumidor
npm install

# 3. Importe os tokens globais no entry point do projeto
# (ex: main.tsx ou global.css)
@import './Kura/kura-tokens.css';
```

### Configuração do Tailwind

Para usar os tokens como valores arbitrários (`bg-[--sage]`, `text-[--ocean]`), os tokens precisam estar disponíveis no escopo CSS onde o Tailwind processa as classes. Certifique-se de que `kura-tokens.css` é importado antes do Tailwind no bundle final.

### Visualizar protótipos localmente

```bash
# Qualquer servidor HTTP estático serve — exemplo com npx:
npx serve Kura/

# Ou simplesmente abra os arquivos .html diretamente no browser
open "Kura/Kura App Tutor.html"
open "Kura/Kura Storybook Tutor.html"
```

---

## Convenções de Contribuição

### Nomenclatura de tokens

- Tokens de cor: `--{cor}`, `--{cor}-light`, `--{cor}-pale`, `--{cor}-soft`
- Tokens semânticos: `--text`, `--border`, `--surface` (jamais referenciar cor de marca diretamente em CSS de componente — sempre via token semântico)
- Classes CSS: prefixo `.k-*` para componentes mobile/tutor, `.kc-*` para desktop/clínica

### Contexto de componente

Todo componente interativo deve aceitar a prop `context: 'tutor' | 'clinic'`. Isso garante que a mesma API funcione nas duas superfícies sem bifurcação de código.

### Acessibilidade

Os componentes core seguem WCAG 2.1 AA como piso mínimo. Atributos ARIA são gerenciados internamente — não sobrescreva `aria-invalid`, `aria-busy` ou `aria-describedby` via prop.

---

## Créditos

Desenvolvido por **Felipe Ferrete** como parte do **FIAP Challenge 2026 — Clyvo Vet**.
