# Jasir Ali Khan — Portfolio

An extreme, high-polish personal portfolio for **Jasir Ali Khan**, Junior Full Stack MERN Developer at SMUFTECH.

## ✨ Highlights

- **CSS-only animated backdrop (`AuroraBackground`)** — layered aurora gradient with drifting blobs, subtle grid and vignette, rendered entirely on the compositor (no WebGL canvas) so the page stays fast and never flashes blank.
- **Dribbble-style motion layer (`MotionLayer`)** — top scroll-progress bar, pointer glow, staggered section reveals via `IntersectionObserver`, animated stat counters and a looping tech-stack marquee. All progressive enhancement: disabled under `prefers-reduced-motion` and on coarse pointers.
- **3D hero visual (`Hero3DCube`)** — an icosahedron core wrapped in a wireframe cage with orbiting rings/nodes that reacts to pointer movement.
- **AI welcome bot avatar (`Welcome3DAvatar`)** — a 3D robot with visor, eyes, antenna and a waving hand. Follows the cursor, shows a live speech bubble with Hire / Projects CTAs, and can be minimized and reopened.
- **Clickable project cards → styled detail modal** — every card opens a rich modal with the project summary, strategy, feature list, tech stack tags, plus GitHub / live-demo / "discuss this project" actions.
- **Full responsive dark UI** — custom-built stylesheet (`src/index.css`) with ambient glow orbs, gradient animated headings, filter bar, experience timeline, education grid, skills, value props, contact/quote modal and footer.

## 🧱 Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | React 19 (Create React App) |
| 3D / Animation | Three.js 0.186 (hero + bot), CSS keyframes, IntersectionObserver, requestAnimationFrame |
| Styling | Hand-written CSS (dark theme, CSS custom properties) |
| Icons | `lucide-react` + custom SVG (`GithubIcon`) |
| Language | JavaScript (JSX) |

## 📁 Project Structure

```
src/
├── App.jsx                       # Page composition, filters, modal wiring
├── data.js                       # Personal info, stats, skills, projects, experience
├── projectsData.js               # Extended project dataset
├── index.css                     # Complete stylesheet (theme + all sections)
├── components/
│   ├── AuroraBackground.jsx      # Animated gradient backdrop (pure CSS)
│   ├── MotionLayer.jsx           # Scroll progress, reveal, pointer glow, counters
│   ├── Hero3DCube.jsx            # Hero 3D core visual
│   ├── Welcome3DAvatar.jsx       # Interactive 3D bot assistant
│   ├── ProjectModal.jsx          # Project detail modal
│   ├── Navbar.jsx                # Sticky navigation
│   ├── GithubIcon.jsx            # GitHub SVG icon
│   └── UIComponents.jsx          # Button, Card, Tag, Modal primitives
public/
└── index.html                    # Fonts, meta tags, theme color
```

## 🚀 Getting Started

```bash
npm install
npm start      # runs on http://localhost:3000
npm run build  # production build into ./build
```

## 🌐 Links

- GitHub: [github.com/Jasir-ali90](https://github.com/Jasir-ali90)
