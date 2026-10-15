# MMBTECH — contexte du projet

Site de MMBTECH, agence web à Dakar (propriétaire : realtony0). Langue de travail : **français**.
Branche de travail : `claude/awesome-noether-3bjjm3` (pas encore fusionnée dans `main`).

## Où on en est

1. L'ancien site (bleu/crème, mal fini) a été entièrement refait.
2. Une version « immersive » (WebGL, inspirée de why.zero.university) a été faite puis abandonnée : elle reste au commit `fd70e7a`.
3. Version actuelle : **landing page de conversion** pour des **campagnes de pub Meta** (Facebook/Instagram), avec une direction artistique d'agence (le site doit servir de vitrine de qualité).

## Stack et choix

- Next.js 14 en **export statique** (`output: "export"`, `npm run build` → `out/`), TypeScript, Tailwind. Pas de librairie d'animation (perf mobile pour le trafic payant).
- Polices : Schibsted Grotesk (texte) + Instrument Serif italique (1-2 mots d'accent). Un seul accent couleur : bleu `#0047FF`. Logo « M » dessiné en SVG (`src/components/site/ui.tsx`, `public/favicon.svg`).
- Tout le contenu (projets, offres, FAQ, étapes, contacts) est dans `src/lib/data.ts`.
- Captures des projets clients dans `public/projects/` (`<id>.webp`, `<id>-m.webp`, `thumb/<id>.webp`). Ce sont de vrais sites en ligne des clients.
- Tous les CTA mènent à WhatsApp (`src/components/WaLink.tsx`) : +221 77 499 27 42.
- Suivi pub : Meta Pixel (`NEXT_PUBLIC_META_PIXEL_ID`) avec événements `Contact` (clic WhatsApp) et `Lead` (formulaire) ; les `utm_*` de l'URL sont ajoutés en fin de message WhatsApp (`src/lib/track.ts`). Vérification de domaine Meta : `NEXT_PUBLIC_FB_DOMAIN_VERIFICATION`.
- En-têtes HTTP : `public/_headers` (format Cloudflare Pages).

## Règles

- Ne rien inventer : pas de faux avis clients, pas de fausse urgence, pas de chiffres non vérifiés.
- Mobile d'abord (la majorité du trafic Meta est mobile) ; vérifier qu'il n'y a pas de scroll horizontal à 390 px.

## Prochaine étape : mise en ligne sur Cloudflare Pages

Vercel est inutilisable (compte bloqué). Déploiement prévu sur Cloudflare Pages, depuis le Mac :

```bash
npm install && npm run build
npx wrangler login          # ouvre la page de connexion Cloudflare
npx wrangler pages deploy out --project-name mmbtech --branch main
```

Ensuite : domaine `mmb-tech.com` (Custom domains), variables `NEXT_PUBLIC_META_PIXEL_ID` et `NEXT_PUBLIC_FB_DOMAIN_VERIFICATION`, puis rebuild + redeploy.

## À faire / à vérifier avec le propriétaire

- Confirmer les chiffres affichés (15 sites, 3 pays, « aucun template », mention Wave/Orange Money).
- Récupérer 2-3 vrais avis clients (prénom, activité, une phrase) et les ajouter.
- Ajouter le Pixel ID et le code de vérification de domaine Meta.
- Fusionner la branche dans `main` une fois le site validé.
