export const contact = {
  phone: "+221 77 499 27 42",
  phoneRaw: "221774992742",
  email: "contact@mmb-tech.com",
  instagram: "https://instagram.com/mmbtech.sn",
  linkedin: "https://linkedin.com/company/mmbtech",
};

export const defaultMessage = "Bonjour MMBTECH, je souhaite recevoir un devis pour mon projet.";

export const whatsappLink = (text = defaultMessage) =>
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
  { title: "Vous nous écrivez", desc: "Sur WhatsApp ou via le formulaire. On parle de votre activité et de vos objectifs." },
  { title: "Devis gratuit sous 24h", desc: "Un prix clair, ce qui est inclus, et un planning. Paiement fractionné possible." },
  { title: "On crée, vous validez", desc: "Vous voyez le design avant le développement et suivez l'avancement." },
  { title: "Votre site est en ligne", desc: "Mise en ligne, prise en main, et accompagnement après le lancement." },
];

export const benefits = [
  {
    title: "Trouvé sur Google",
    desc: "Vos clients cherchent « traiteur Dakar » ou « boutique en ligne Sénégal ». Votre site apparaît, pas celui du concurrent.",
  },
  {
    title: "Des ventes même la nuit",
    desc: "Catalogue, panier, paiement mobile ou carte : vos clients commandent quand ils veulent, vous recevez la commande.",
  },
  {
    title: "Une image qui inspire confiance",
    desc: "Un site professionnel rassure avant le premier message. Vos prix et vos photos parlent pour vous.",
  },
  {
    title: "WhatsApp au centre",
    desc: "Chaque page mène à une conversation WhatsApp. Le client arrive chez vous avec sa demande déjà écrite.",
  },
];

export const pricing = [
  {
    name: "Essentiel",
    price: "135 000",
    unit: "FCFA",
    tagline: "Pour être visible et rassurer vos clients",
    features: ["Site jusqu'à 5 pages", "Design sur mesure", "Adapté téléphone & tablette", "Bouton WhatsApp & formulaire", "1 mois d'accompagnement"],
    featured: false,
  },
  {
    name: "Business",
    price: "180 000",
    unit: "FCFA",
    tagline: "Pour vendre en ligne et gérer vos commandes",
    features: ["Site complet sur mesure", "Boutique en ligne", "Paiement mobile & carte bancaire", "Espace de gestion privé", "Visible sur Google", "3 mois d'accompagnement"],
    featured: true,
  },
  {
    name: "Application",
    price: "750 000",
    unit: "FCFA",
    from: true,
    tagline: "Votre application iPhone & Android",
    features: ["iOS & Android", "Comptes utilisateurs", "Notifications push", "Hébergement inclus", "Publication sur les stores", "6 mois d'accompagnement"],
    featured: false,
  },
];

export const faq = [
  {
    q: "Combien coûte un site ?",
    a: "Un site vitrine démarre à 135 000 FCFA et un site avec boutique en ligne à 180 000 FCFA. Pour une application mobile, comptez entre 750 000 et 2 000 000 FCFA selon les fonctionnalités. Le devis est gratuit et détaillé.",
  },
  {
    q: "Est-ce que je peux payer en plusieurs fois ?",
    a: "Oui, le paiement fractionné est possible. On en parle au moment du devis.",
  },
  {
    q: "Combien de temps faut-il ?",
    a: "Cela dépend de la taille du projet. Vous recevez un planning précis avec le devis, sous 24h.",
  },
  {
    q: "Mes clients pourront-ils payer par mobile ?",
    a: "Oui. Les boutiques en ligne acceptent le paiement mobile, la carte bancaire et le paiement à la livraison.",
  },
  {
    q: "Je n'y connais rien, est-ce un problème ?",
    a: "Non. On s'occupe de tout : design, textes, mise en ligne. On vous montre ensuite comment modifier vos produits et vos prix vous-même.",
  },
  {
    q: "Vous travaillez seulement à Dakar ?",
    a: "Non. On est basés à Dakar et on travaille aussi à distance : nos clients sont au Sénégal, en France et au Canada.",
  },
];

export const projectTypes = ["Site vitrine", "Boutique en ligne", "Application mobile", "Logo & identité", "Je ne sais pas encore"];
export const budgets = ["Moins de 150 000", "150 000 – 300 000", "300 000 – 750 000", "Plus de 750 000"];
