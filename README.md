# MMBTECH — Site du studio

Site immersif du studio digital MMBTECH (Dakar).
Stack : **Next.js 14** · **TypeScript** · **Tailwind CSS** · **Framer Motion** · **Lenis** · **WebGL (shader maison, sans librairie 3D)**

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
```

## Déployer sur Cloudflare Pages

Le site est un export statique (`npm run build` → dossier `out/`).

**Option A — depuis le tableau de bord (recommandé, redéploie à chaque push)**
Cloudflare → Workers & Pages → Create → Pages → *Connect to Git* → choisir `realtony0/mmbtech`, puis :
- Framework preset : `Next.js (Static HTML Export)`
- Build command : `npm run build`
- Build output directory : `out`
- Variable d'environnement : `NODE_VERSION` = `20`

Ensuite *Custom domains* → ajouter `mmb-tech.com`.

**Option B — en ligne de commande**
```bash
npm run build
npx wrangler pages deploy out --project-name mmbtech
```

Variable optionnelle : `NEXT_PUBLIC_GA_ID` pour Google Analytics. Les en-têtes HTTP sont dans `public/_headers`.

## Concept

Une plongée : le haut de la page est la surface (0 m), on descend vers les profondeurs (-100 m) en scrollant.
La jauge de profondeur à droite, le fond animé (eau / glace, réagit à la souris et au scroll) et les textes « fondus » portent l'identité.
Dans le hero, dessiner un zéro à la souris déclenche une petite surprise.

## Structure

```
src/
├── app/
│   ├── layout.tsx            # Polices, SEO, JSON-LD, fond WebGL, curseur
│   ├── page.tsx              # Assemblage des sections
│   ├── opengraph-image.tsx   # Image de partage (PNG généré)
│   ├── mentions-legales/     # Page mentions légales
│   ├── robots.ts / sitemap.ts
│   └── globals.css
├── components/
│   ├── gl/Ocean.tsx          # Shader plein écran (caustiques, ripple souris, profondeur)
│   ├── ui/                   # Preloader, Cursor (+ dessin), DepthRuler, MeltFilters, Reveal, SmoothScroll…
│   └── sections/             # Header, Hero, Manifesto, Services, Work, ProjectIndex, Method, Pricing, Contact, Footer
└── lib/data.ts               # ← Projets, services, tarifs, contacts : tout le contenu est ici
```

## Ajouter un projet

1. Mettre deux captures dans `public/projects/` : `<id>.webp` (1440×900) et `<id>-m.webp` (mobile, 390 px de large).
2. Ajouter l'entrée dans `projects` (`src/lib/data.ts`). `featured: true` le place dans la galerie horizontale, sinon il apparaît dans l'index.
