export const contact = {
  phone: "+221 77 499 27 42",
  phoneRaw: "221774992742",
  email: "contact@mmb-tech.com",
  instagram: "https://instagram.com/mmbtech.sn",
  linkedin: "https://linkedin.com/company/mmbtech",
};

export const whatsappLink = (text = "Bonjour MMBTECH, je souhaite discuter d'un projet.") =>
  `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(text)}`;

export type Project = {
  id: string;
  name: string;
  url: string;
  category: string;
  place: string;
  desc: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "carrevip",
    name: "Carré VIP",
    url: "https://carrevip.vercel.app",
    category: "Hôtellerie & nuit",
    place: "Ngor, Dakar",
    desc: "Restaurant, piscine, club et lounge ouverts 24h/24. Un site nocturne et vibrant, avec réservation directe sur WhatsApp.",
    tags: ["Direction artistique", "Site vitrine", "Réservations"],
    featured: true,
  },
  {
    id: "senbarber",
    name: "221 Sen Barber",
    url: "https://senbarber.vercel.app",
    category: "Beauté & soins",
    place: "Dakar",
    desc: "Barbershop premium : coupes, barbiers, galerie et prise de rendez-vous en un geste.",
    tags: ["Identité", "Site vitrine", "Prise de RDV"],
    featured: true,
  },
  {
    id: "serva",
    name: "Serva",
    url: "https://serva-seven.vercel.app",
    category: "SaaS",
    place: "Restaurants",
    desc: "Plateforme de gestion pour restaurants : commande par QR code, tableau de bord temps réel, multi-établissements.",
    tags: ["Produit SaaS", "Dashboard", "QR ordering"],
    featured: true,
  },
  {
    id: "loyalty",
    name: "Loyalty",
    url: "https://loyalty-nextjs-two.vercel.app",
    category: "Mode",
    place: "Dakar",
    desc: "Marque streetwear dakaroise. Lookbook immersif et boutique pensée pour la nouvelle génération.",
    tags: ["E-commerce", "Lookbook", "Branding"],
    featured: true,
  },
  {
    id: "healthy",
    name: "Healthy Dakar",
    url: "https://www.healthy.sn",
    category: "Alimentation",
    place: "Dakar",
    desc: "Repas équilibrés 100% halal : commande à la carte, abonnements sur mesure et livraison express.",
    tags: ["Commande en ligne", "Abonnements", "Livraison"],
    featured: true,
  },
  {
    id: "sse",
    name: "SSE Smart Systems",
    url: "https://sse-smart-systems.vercel.app",
    category: "Tech & sécurité",
    place: "Dakar",
    desc: "Serrures intelligentes haut de gamme : empreinte, reconnaissance faciale 3D, application. Catalogue et demande de devis.",
    tags: ["Catalogue", "Devis", "Produit"],
    featured: true,
  },
  {
    id: "orlex",
    name: "Orlex Medical",
    url: "https://www.orlexmedicalsupply.com",
    category: "Santé",
    place: "Canada",
    desc: "Uniformes médicaux : 8 collections, 40 couleurs, livraison partout au Canada.",
    tags: ["E-commerce", "International", "Catalogue"],
    featured: true,
  },
  {
    id: "heritagedress",
    name: "Heritage Dresses",
    url: "https://heritagedress.vercel.app",
    category: "Mode",
    place: "France",
    desc: "Robes et ensembles africains en petites séries, tissus premium, livraison en France.",
    tags: ["E-commerce", "Éditorial", "Luxe"],
    featured: true,
  },
  { id: "prosengroupe", name: "Prosen Groupe", url: "https://prosen-groupe.vercel.app", category: "Corporate", place: "Dakar", desc: "Groupe multisectoriel engagé dans le développement économique du Sénégal.", tags: ["Corporate"] },
  { id: "luxurymarket221", name: "Luxury Market 221", url: "https://www.luxurymarket221.com", category: "Mode", place: "International", desc: "Mode et univers premium, livraison internationale.", tags: ["E-commerce"] },
  { id: "crocsdkr", name: "CrocsDKR", url: "https://www.crocksdkr.com", category: "Boutique", place: "Dakar", desc: "Crocs authentiques, paiement mobile et livraison.", tags: ["E-commerce"] },
  { id: "breadwinner", name: "Breadwinner", url: "https://breadwinnersolid.vercel.app", category: "Mode", place: "Dakar", desc: "Streetwear premium made in Dakar.", tags: ["E-commerce"] },
  { id: "aboufamily", name: "Abou Family", url: "https://aboufamily.vercel.app", category: "Gourmandise", place: "Dakar", desc: "Chocolats et confiseries premium, livraison express.", tags: ["E-commerce"] },
  { id: "dulcestore", name: "Dulce Store", url: "https://dulcestore.vercel.app", category: "Import", place: "Sénégal", desc: "Plateforme d'import depuis la Chine : cuisine pro, packaging, beauté.", tags: ["Marketplace"] },
  { id: "hotgyaal", name: "Hotgyaal", url: "https://hotgyaal.vercel.app", category: "Mode", place: "Sénégal", desc: "Mode femme, accessoires et beauté.", tags: ["E-commerce"] },
];

export const services = [
  {
    num: "01",
    title: "Sites web",
    desc: "Sites vitrines et sites sur mesure, rapides, parfaitement lisibles sur téléphone et pensés pour être trouvés sur Google.",
    items: ["Site vitrine", "Site sur mesure", "Landing page", "Référencement"],
  },
  {
    num: "02",
    title: "E-commerce",
    desc: "Des boutiques qui vendent : Wave, Orange Money, carte bancaire, paiement à la livraison, gestion des stocks et des commandes.",
    items: ["Boutique en ligne", "Paiement mobile", "Back-office", "Livraison"],
  },
  {
    num: "03",
    title: "Applications",
    desc: "Applications iPhone & Android et plateformes SaaS : comptes, notifications, tableaux de bord, publication sur les stores.",
    items: ["iOS & Android", "SaaS", "Dashboard", "API"],
  },
  {
    num: "04",
    title: "Identité & design",
    desc: "Une direction artistique forte qui rend votre marque mémorable et inspire confiance dès la première seconde.",
    items: ["Logo", "Direction artistique", "UI / UX", "Réseaux sociaux"],
  },
];

export const steps = [
  { depth: -100, title: "Échange", desc: "On écoute votre projet, vos objectifs, votre marché. Devis gratuit sous 24h." },
  { depth: -75, title: "Maquette", desc: "On dessine chaque écran. Vous validez le design avant la moindre ligne de code." },
  { depth: -50, title: "Création", desc: "On développe. Vous suivez l'avancement et testez au fur et à mesure." },
  { depth: -25, title: "Tests", desc: "Téléphones, tablettes, ordinateurs, paiements : tout est vérifié avant la mise en ligne." },
  { depth: 0, title: "Surface", desc: "Votre projet est en ligne. On reste à vos côtés avec un accompagnement dédié." },
];

export const pricing = [
  {
    name: "Essentiel",
    price: "135 000",
    unit: "FCFA",
    desc: "Pour lancer votre présence en ligne.",
    features: ["Site jusqu'à 5 pages", "Design sur mesure", "Adapté mobile & tablette", "Formulaire & WhatsApp", "1 mois d'accompagnement"],
    featured: false,
  },
  {
    name: "Business",
    price: "180 000",
    unit: "FCFA",
    desc: "Pour vendre et gérer votre activité en ligne.",
    features: ["Site complet sur mesure", "Boutique en ligne", "Paiement mobile & carte", "Espace de gestion privé", "Visible sur Google", "3 mois d'accompagnement"],
    featured: true,
  },
  {
    name: "Application",
    price: "750K – 2M",
    unit: "FCFA",
    desc: "Votre application iPhone & Android.",
    features: ["iOS & Android", "Comptes utilisateurs", "Notifications push", "Hébergement inclus", "Publication sur les stores", "6 mois d'accompagnement"],
    featured: false,
  },
];

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projets", label: "Projets" },
  { href: "#methode", label: "Méthode" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#contact", label: "Contact" },
];
