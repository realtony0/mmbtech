# MMBTECH — Site du studio

Landing page de conversion de MMBTECH (agence web à Dakar), pensée pour les campagnes Meta (Facebook / Instagram).
Stack : **Next.js 14** (export statique) · **TypeScript** · **Tailwind CSS**. Aucune librairie d'animation : la page charge vite sur mobile.
Polices : Schibsted Grotesk (texte) et Instrument Serif italique (accents). Couleur d'accent unique : bleu `#0047FF`.

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

Les en-têtes HTTP sont dans `public/_headers`.

## Publicité Meta : suivi des conversions

Variables d'environnement (à définir dans Cloudflare Pages → Settings → Environment variables, puis redéployer) :

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID du pixel Meta (Gestionnaire d'événements). Active `PageView`. |
| `NEXT_PUBLIC_FB_DOMAIN_VERIFICATION` | Code de vérification du domaine (Business Manager → Domaines). |
| `NEXT_PUBLIC_GA_ID` | Optionnel, Google Analytics. |

Événements envoyés au pixel :
- `Contact` à chaque clic sur un bouton WhatsApp (paramètre `content_name` = emplacement : `hero`, `sticky`, `offre-Business`…)
- `Lead` à l'envoi du formulaire de devis (`content_category` = type de projet)

→ Optimisez vos campagnes sur l'événement **Lead** (ou **Contact** au démarrage, quand il y a peu de volume).

**Savoir quelle pub a converti** : ajoutez des paramètres UTM aux URL de vos pubs, par exemple
`https://mmb-tech.com/?utm_source=facebook&utm_campaign=lancement-oct&utm_content=video-1`.
La référence est ajoutée automatiquement à la fin du message WhatsApp : `(Réf : facebook / lancement-oct / video-1)`.

## Structure

```
src/
├── app/                      # layout (SEO, pixel), page, mentions légales, image de partage, robots, sitemap
├── components/
│   ├── site/                 # Header, Hero (mur de réalisations), Facts, Work, Services, Process, Pricing, Faq, Contact, Footer (+ barre mobile), ui (logo, cadres navigateur/téléphone)
│   ├── MetaPixel.tsx         # Pixel Meta
│   └── WaLink.tsx            # Bouton WhatsApp (référence de campagne + événement Contact)
└── lib/
    ├── data.ts               # ← Tout le contenu : projets, offres, FAQ, étapes, contacts
    └── track.ts              # Événements pixel + mémorisation des UTM
```

## Ajouter un projet

1. Mettre les captures dans `public/projects/` : `<id>.webp` (1440×900), `<id>-m.webp` (mobile, 390 px de large) et `thumb/<id>.webp` (720×450, utilisée dans les grilles et le mur du haut de page).
2. Ajouter l'entrée dans `projects` (`src/lib/data.ts`). `featured: true` l'affiche en grande carte avec capture, sinon il apparaît dans la liste « Et aussi ».
