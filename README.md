# MMBTECH — Site Vitrine

Stack : **Next.js 14** · **Framer Motion** · **React Three Fiber** · **Tailwind CSS** · **TypeScript** · **Lenis**

## Lancer en local

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de dev
npm run dev

# 3. Ouvrir http://localhost:3000
```

## Déployer sur Vercel

```bash
# Connecte ton repo GitHub à Vercel
# OU directement depuis la CLI :
npx vercel --prod
```

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx       # Fonts, metadata, SmoothScroll
│   ├── page.tsx         # Assemblage des sections
│   └── globals.css      # Tailwind + styles globaux
├── components/
│   ├── ui/
│   │   ├── Cursor.tsx       # Curseur custom animé
│   │   ├── SmoothScroll.tsx # Lenis smooth scroll
│   │   ├── Ticker.tsx       # Bande défilante bleue
│   │   └── SectionLabel.tsx # Label section réutilisable
│   ├── sections/
│   │   ├── Navbar.tsx       # Nav fixe + toggle FR/EN
│   │   ├── Hero.tsx         # Hero + canvas lignes bleues
│   │   ├── About.tsx        # À propos + compteurs animés
│   │   ├── Immersive.tsx    # Section 3D Three.js
│   │   ├── Services.tsx     # Liste services avec hover
│   │   ├── Portfolio.tsx    # Projets en mockups device
│   │   └── Sections.tsx     # Testi / Pricing / Contact / Footer
│   └── 3d/
│       └── MockupSite.tsx   # Contenu simulé avec scroll CSS
└── lib/
    ├── data.ts          # Projets, services, temoignages, pricing
    └── utils.ts         # cn() helper
```

## Personnaliser

- **Projets** → `src/lib/data.ts` : modifier les URLs, descriptions, stack
- **Couleurs** → `tailwind.config.ts` : `blue`, `cream`, `ink`...
- **Contenu portfolio** → `src/components/3d/MockupSite.tsx`
- **Contact email** → `src/components/sections/Sections.tsx`

## Activer les vraies iframes (optionnel)

Ajouter dans le `next.config.ts` de chaque site client :

```ts
async headers() {
  return [{
    source: "/(.*)",
    headers: [
      { key: "Content-Security-Policy", value: "frame-ancestors 'self' https://mmbtech.sn" },
      { key: "X-Frame-Options", value: "ALLOWALL" },
    ],
  }];
}
```

Puis remplacer `<MockupSite>` par `<iframe src={project.url} />` dans `Portfolio.tsx`.
