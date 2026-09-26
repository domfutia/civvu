<div align="center">

# 📄 CIVVU — Modern CV & Resume Builder

**Un generatore di Curriculum Vitae moderno, elegante, ATS-friendly e 100% orientato alla privacy.**  
*Costruito con Next.js 16, React 19, Tailwind CSS v4 e @dnd-kit.*

<p align="center">
  <a href="https://nextjs.org">
    <img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16" />
  </a>
  <a href="https://react.dev">
    <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  </a>
  <a href="https://www.typescriptlang.org">
    <img src="https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com">
    <img src="https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge" alt="License MIT" />
  </a>
  <a href="https://github.com/domfutia/cv-builder/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-violet?style=for-the-badge" alt="PRs Welcome" />
  </a>
</p>

<p align="center">
  <a href="#-funzionalità-chiave--features">Funzionalità</a> •
  <a href="#-template-e-design">Template & Stili</a> •
  <a href="#-profili-demo-inclusi">Profili Demo</a> •
  <a href="#-avvio-rapido--getting-started">Avvio Rapido</a> •
  <a href="#-guida-ellesportazione-pdf">Esportazione PDF</a> •
  <a href="#-struttura-del-progetto">Architettura</a> •
  <a href="#-licenza">Licenza</a>
</p>

---

</div>

## 💡 Perché CIVVU?

I comuni editor di curriculum online spesso richiedono registrazioni obbligatorie, inseriscono watermark nei PDF o nascondono le funzionalità dietro paywall. 

**CIVVU** nasce per offrire un'alternativa libera, professionale e rispettosa della privacy:
- 🔒 **Zero Server, Zero Tracking**: Tutti i tuoi dati rimangono memorizzati nel `localStorage` del tuo browser. Nessun dato personale viene mai inviato o salvato su server esterni.
- ⚡ **Anteprima A4 in Tempo Reale**: Qualsiasi modifica nel pannello di compilazione si riflette all'istante nel foglio di anteprima, con scaling proporzionale per adattarsi a qualsiasi monitor o dispositivo mobile.
- 🖨️ **PDF Vettoriale Crystal-Clear**: Esportazione e stampa ottimizzate a livello tipografico senza perdita di risoluzione e senza filigrane.

---

## ✨ Funzionalità Chiave / Features

| Categoria | Funzionalità | Dettagli |
|:---|:---|:---|
| 📑 **Template & Layout** | **3 Template Professionali** | **Minimal** (essenziale e pulito), **Modern** (a 2 colonne con sidebar), **Executive** (elegante e autorevole). |
| 🔀 **Drag & Drop** | **Riordinamento Completo** | Organizza liberamente l'ordine delle sezioni, delle esperienze lavorative, dei titoli di studio, delle categorie di skill e delle singole competenze tramite `@dnd-kit`. |
| 🎨 **Personalizzazione** | **Palette & Tipografia** | 4 preset colore predefiniti (*Obsidian Minimal*, *Nordic Slate*, *Warm Executive*, *Forest Professional*), personalizzazione avanzata dei colori esadecimali, scelta del font (Sans, Serif, Mono), dimensione del testo e spaziatura (Compatta, Normale, Rilassata). |
| 🗂️ **Sezioni Custom** | **Sezioni Illimitate** | Possibilità di creare sezioni personalizzate (es. *Pubblicazioni*, *Conferenze*, *Volontariato*, *Riconoscimenti*) con date flessibili, dettagli e bullet point. |
| 🌐 **Internazionalizzazione** | **Bilingue (IT / EN)** | Switch rapido tra Italiano e Inglese con traduzione automatica sia dell'interfaccia sia dei campi predefiniti del CV. |
| 💾 **Backup & Privacy** | **Import / Export JSON** | Esporta l'intera configurazione e i contenuti del CV in formato `.json` per conservare copie locali o importarli su un altro dispositivo in un click. |
| 📱 **Responsive & Mobile** | **Mobile Floating Switcher** | Layout ottimizzato per smartphone e tablet con toggle istantaneo tra pannello *Modifica* e *Anteprima* e pulsante rapido di stampa. |
| 🌓 **Interfaccia** | **Dark & Light Mode** | Modalità chiara e scura automatica o manuale tramite `next-themes` per lavorare comodamente in qualsiasi condizione di luce. |
| ⚖️ **Conformità** | **GDPR Footer** | Disclaimer GDPR per il trattamento dei dati personali integrabile con un click nel piè di pagina del documento. |

---

## 🎨 Template e Design

CIVVU include tre layout studiati per massimizzare la leggibilità e superare i sistemi di selezione automatica (ATS):

1. **Minimal**: Struttura lineare a una colonna, contrasti netti, ideale per profili tecnici, sviluppatori, ingegneri e ruoli scientifici.
2. **Modern (Sidebar)**: Layout a due colonne con barra laterale dedicata a contatti, competenze, lingue e certificazioni. Perfetto per product designer, creativi e professionisti UI/UX.
3. **Executive**: Intestazione prominente, dettagli tipografici raffinati e linee di separazione sottili per profili manageriali, consulenti e figure direttive.

### Preset di Colori

- 🖤 **Obsidian Minimal**: Contrasti grafite e nero antracite per un look contemporaneo e deciso.
- 🔷 **Nordic Slate**: Tonalità fredde ed eleganti in ardesia scura e acciaio desaturato.
- 🟤 **Warm Executive**: Toni caldi e sofisticati, carta avorio naturale, bronzo e cioccolato profondo.
- 🌲 **Forest Professional**: Verde bosco scuro e raffinato per un tocco sobrio e autorevole.

---

## 👥 Profili Demo Inclusi

CIVVU mette a disposizione 5 profili realistici già compilati per testare immediatamente tutti i template e le palette:

| Profilo | Ruolo | Template Consigliato | Focus Principale |
|:---|:---|:---|:---|
| 💻 **Marco Bianchi** | *Staff Cloud Architect & Engineer* | Minimal Monocromatico | AWS, Kubernetes, Architetture Distribuite, DevOps |
| 📊 **Elena Moretti** | *M&A & Private Equity Associate* | Warm Executive | Modellazione DCF, Deals M&A, Corporate Finance |
| ✍️ **Dott.ssa Giulia Fontana** | *Curatrice d'Arte & Editor* | Nordic Slate | Ph.D. con Lode, Monografie, Speaking, 4 Lingue |
| 🎨 **Luca Rinaldi** | *Lead Product Designer* | Modern Sidebar | UI/UX, Design Systems, Red Dot Design Awards |
| 🩺 **Dott.ssa Sara Colombo** | *Dirigente Medico Cardiologa* | Forest Professional | Specializzazione con Lode, Trial Clinici, Ricerca Medica |

---

## 🚀 Avvio Rapido / Getting Started

### Prerequisiti
- **Node.js**: `v18.18+` o `v20+` consigliato
- **Gestore pacchetti**: `npm`, `pnpm`, `yarn` o `bun`

### Installazione

1. **Clona la repository**:
   ```bash
   git clone https://github.com/domfutia/cv-builder.git
   cd cv-builder
   ```

2. **Installa le dipendenze**:
   ```bash
   npm install
   # oppure: pnpm install | yarn install | bun install
   ```

3. **Avvia il server di sviluppo**:
   ```bash
   npm run dev
   ```

4. **Apri il browser**:
   Visita [`http://localhost:3000`](http://localhost:3000) per iniziare a creare il tuo CV.

### Comandi Disponibili

| Comando | Descrizione |
|:---|:---|
| `npm run dev` | Avvia il server di sviluppo su Next.js con Hot Reload |
| `npm run build` | Compila l'applicazione per la produzione |
| `npm run start` | Avvia l'applicazione compilata in ambiente di produzione |
| `npm run lint` | Esegue il controllo qualità del codice con ESLint |

---

## 🖨️ Guida all'Esportazione PDF

CIVVU sfrutta la stampa nativa ad alta fedeltà del browser tramite regole CSS `@media print` personalizzate per garantire che il PDF risultante sia vettoriale e perfetto al pixel.

Per ottenere la migliore resa grafica:

1. Fai clic sul pulsante **"Stampa / Esporta PDF"** nella barra superiore (o premi `Ctrl + P` / `Cmd + P`).
2. Nella finestra di dialogo di stampa del browser seleziona:
   - **Destinazione**: `Salva come PDF`
   - **Formato carta**: `A4`
   - **Margini**: `Nessuno` (o `Predefiniti`)
   - **Opzioni**: Spunta la casella **"Grafica di sfondo"** (*Background graphics*)
   - **Intestazioni e piè di pagina**: Deseleziona per rimuovere data e URL della pagina web
3. Premi **Salva**: il file verrà scaricato con il nome personalizzato che hai scelto nell'interfaccia.

---

## 🛠️ Stack Tecnologico

<div align="center">

| Tecnologia | Scopo |
|:---|:---|
| **[Next.js 16](https://nextjs.org/)** | Framework React per rendering ottimizzato e App Router |
| **[React 19](https://react.dev/)** | Libreria core per la gestione dello stato reattivo e componenti UI |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Styling moderno, utility-first e print stylesheets |
| **[@dnd-kit](https://dndkit.com/)** | Drag and drop fluido ed accessibile per riordinare sezioni ed elementi |
| **[Lucide React](https://lucide.dev/)** | Set di icone pulite, scalabili e moderne |
| **[next-themes](https://github.com/pacocoursey/next-themes)** | Supporto seamless per Dark Mode / Light Mode |
| **[TypeScript](https://www.typescriptlang.org/)** | Tipizzazione statica rigorosa per massima affidabilità |

</div>

---

## 📂 Struttura del Progetto

```plaintext
cv-builder/
├── app/
│   ├── layout.tsx         # Root layout con font Geist e ThemeProvider
│   ├── page.tsx           # Schermata principale Split Screen (Form + Preview)
│   └── globals.css        # Variabili colore CSS, reset e regole @media print
├── components/
│   ├── form/              # Pannello di compilazione (esperienze, formazione, skill, settings)
│   │   ├── FormPanel.tsx
│   │   ├── PersonalInfoForm.tsx
│   │   ├── ExperienceForm.tsx
│   │   ├── EducationForm.tsx
│   │   ├── SkillsForm.tsx
│   │   ├── CustomSectionForm.tsx
│   │   └── SettingsForm.tsx
│   ├── preview/           # Motore di rendering e anteprima A4
│   │   ├── CVDocument.tsx
│   │   └── PreviewPanel.tsx
│   ├── layout/            # Navbar, selettore lingua, export e comandi
│   │   └── Navbar.tsx
│   └── ui/                # Componenti atomici UI (Button, Card, Input, Badges)
├── context/
│   └── CVContext.tsx      # State manager globale, persistenza localStorage & i18n
├── data/
│   ├── demoProfiles.ts    # Profili di esempio per testare i vari settori
│   └── initialCV.ts       # Template default e preset colori
├── lib/
│   ├── i18n.ts            # Dizionari di traduzione (Italiano / Inglese)
│   └── utils.ts           # Utility functions (clsx, tailwind-merge)
└── types/
    └── cv.ts              # Definizioni TypeScript dei modelli di dati
```

---

## 🤝 Contribuire

I contributi sono sempre i benvenuti! Se hai un'idea per un nuovo template, un preset di colori o una funzionalità:

1. Fai un **Fork** del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/NuovoTemplate`)
3. Fai il commit delle modifiche (`git commit -m 'feat: aggiunge nuovo template minimal'`)
4. Fai il push sul tuo branch (`git push origin feature/NuovoTemplate`)
5. Apri una **Pull Request**

---

## 📄 Licenza

Distribuito sotto licenza **MIT**. Consulta il file `LICENSE` per ulteriori informazioni.

<div align="center">
  <sub>Sviluppato con cura e passione per offrire uno strumento libero e professionale a chiunque cerchi lavoro. Lascia una ⭐ alla repository se ti è stato utile!</sub>
</div>
