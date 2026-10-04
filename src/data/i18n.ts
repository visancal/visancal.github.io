import { SITE_URL } from './content';

export const LANGS = ['en', 'es', 'va'] as const;
export type Lang = (typeof LANGS)[number];

/** Served without a URL prefix; the fallback when the browser language is not supported */
export const DEFAULT_LANG: Lang = 'en';

/** Text that differs per language. Plain strings are the same in every language. */
export type Text = string | Record<Lang, string>;

export const t = (text: Text, lang: Lang): string => (typeof text === 'string' ? text : text[lang]);

export const LANG_META: Record<Lang, { htmlLang: string; hreflang: string; ogLocale: string; intl: string; name: string }> = {
  en: { htmlLang: 'en', hreflang: 'en', ogLocale: 'en_GB', intl: 'en', name: 'English' },
  es: { htmlLang: 'es', hreflang: 'es', ogLocale: 'es_ES', intl: 'es', name: 'Español' },
  va: { htmlLang: 'ca-ES-valencia', hreflang: 'ca', ogLocale: 'ca_ES', intl: 'ca', name: 'Valencià' },
};

/** Language of the current page, from its URL prefix (/es/…, /va/…) */
export function getLang(url: URL): Lang {
  const prefix = url.pathname.split('/')[1];
  return prefix === 'es' || prefix === 'va' ? prefix : DEFAULT_LANG;
}

/** Page path without the language prefix or trailing slash: /es/projects/ → /projects */
export function routePath(url: URL): string {
  const lang = getLang(url);
  const path = lang === DEFAULT_LANG ? url.pathname : url.pathname.slice(lang.length + 1);
  return path.replace(/\/+$/, '') || '/';
}

/** /projects → /es/projects, / → /es/ */
export function localizePath(path: string, lang: Lang): string {
  if (lang === DEFAULT_LANG) return path;
  return path === '/' ? `/${lang}/` : `/${lang}${path}`;
}

/** getStaticPaths for pages under src/pages/[...locale]/: one copy per language */
export const localeStaticPaths = () =>
  LANGS.map((lang) => ({ params: { locale: lang === DEFAULT_LANG ? undefined : lang } }));

/** Localised country name(s) from ISO 3166 codes: 'ZM/ZW' → 'Zambia / Zimbabwe' */
export function countryName(codes: string, lang: Lang): string {
  const names = new Intl.DisplayNames([LANG_META[lang].intl], { type: 'region' });
  return codes.split('/').map((code) => names.of(code) ?? code).join(' / ');
}

const en = {
  nav: { home: 'Home', background: 'Background', projects: 'Projects', trips: 'Trips' },
  mainNav: 'Main navigation',
  mobileNav: 'Mobile navigation',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  language: 'Language',
  footerBefore: 'Developed with',
  footerAfter: 'by Vicent',
  jobTitle: 'GIS Developer & Consultant',
  personDescription:
    'GIS developer and consultant with 20+ years of experience in geospatial web applications, mapping libraries and spatial databases.',
  defaultDescription:
    'GIS developer and consultant at CARTO Professional Services based in Valencia, Spain. Specialised in geospatial web applications, mapping libraries and spatial databases.',
  home: {
    title: 'Vicent Sanjaime | GIS Developer, AI Enthusiast & Travel Lover',
    description:
      'Personal website of Vicent Sanjaime Calvet — GIS developer and consultant at CARTO Professional Services, based in Valencia, Spain. Passionate about geospatial technology, AI, cycling and travel.',
    hello: "Hey, I'm Vicent",
    intro: 'GIS developer, AI enthusiast, travel & cycling lover based in Valencia, Spain',
    about: 'About Vicent',
  },
  background: {
    title: 'Background | Vicent Sanjaime — GIS Developer & Consultant',
    description:
      'Professional background of Vicent Sanjaime Calvet: GIS consultant at CARTO, front-end developer with Vue.js and React, geospatial specialist with 20+ years of experience in Valencia, Spain.',
    bio: 'Bio',
    skillsIntro: 'Among my technical skill set I would highlight:',
    education: 'Education',
    employment: 'Employment history',
    languages: 'Languages',
  },
  projects: {
    title: 'Projects | Vicent Sanjaime — GIS Developer & Consultant',
    description:
      'Portfolio of GIS and geospatial web projects by Vicent Sanjaime: port cartography, spatial data catalogues, map viewers, IoT maritime surveillance and more — built with OpenLayers, Vue.js, React, GeoServer and PostGIS.',
    heading: 'Projects',
    intro:
      'Throughout my professional career I have had the opportunity to work on a wide range of GIS projects using diverse technologies. The timeline below highlights the main projects I have been involved in and the technologies used, including personal and R&D work.',
    rd: 'R&D',
    personal: 'Personal',
  },
  trips: {
    title: 'Trips | Vicent Sanjaime — GIS Developer & Consultant',
    description:
      'Places visited by Vicent Sanjaime around the world, shown on an interactive deck.gl map: Europe, the United States, the Middle East, Southeast Asia, the Caribbean and South Africa.',
    heading: 'Trips',
    intro: 'A few of the places I have been lucky enough to visit, and some still on my list. Click a marker to zoom in.',
    visited: 'Visited',
    highlights: 'Highlights',
    wishlist: 'Wishlist',
    mapView: 'Map view',
    resetNorth: 'Reset north',
    contributors: 'contributors',
  },
};

type UI = typeof en;

const es: UI = {
  nav: { home: 'Inicio', background: 'Trayectoria', projects: 'Proyectos', trips: 'Viajes' },
  mainNav: 'Navegación principal',
  mobileNav: 'Navegación móvil',
  openMenu: 'Abrir menú',
  closeMenu: 'Cerrar menú',
  language: 'Idioma',
  footerBefore: 'Desarrollado con',
  footerAfter: 'por Vicent',
  jobTitle: 'Desarrollador y consultor SIG',
  personDescription:
    'Desarrollador y consultor SIG con más de 20 años de experiencia en aplicaciones web geoespaciales, librerías de mapas y bases de datos espaciales.',
  defaultDescription:
    'Desarrollador y consultor SIG en CARTO Professional Services, con base en Valencia. Especializado en aplicaciones web geoespaciales, librerías de mapas y bases de datos espaciales.',
  home: {
    title: 'Vicent Sanjaime | Desarrollador SIG, entusiasta de la IA y viajero',
    description:
      'Web personal de Vicent Sanjaime Calvet, desarrollador y consultor SIG en CARTO Professional Services, con base en Valencia. Apasionado de la tecnología geoespacial, la IA, el ciclismo y los viajes.',
    hello: 'Hola, soy Vicent',
    intro: 'Desarrollador SIG, entusiasta de la IA y amante de los viajes y el ciclismo, desde Valencia',
    about: 'Sobre Vicent',
  },
  background: {
    title: 'Trayectoria | Vicent Sanjaime — Desarrollador y consultor SIG',
    description:
      'Trayectoria profesional de Vicent Sanjaime Calvet: consultor SIG en CARTO, desarrollador front-end con Vue.js y React y especialista geoespacial con más de 20 años de experiencia en Valencia.',
    bio: 'Sobre mí',
    skillsIntro: 'De mis conocimientos técnicos destacaría:',
    education: 'Formación',
    employment: 'Experiencia profesional',
    languages: 'Idiomas',
  },
  projects: {
    title: 'Proyectos | Vicent Sanjaime — Desarrollador y consultor SIG',
    description:
      'Portfolio de proyectos SIG y web geoespaciales de Vicent Sanjaime: cartografía portuaria, catálogos de datos espaciales, visores de mapas, vigilancia marítima IoT y más, desarrollados con OpenLayers, Vue.js, React, GeoServer y PostGIS.',
    heading: 'Proyectos',
    intro:
      'A lo largo de mi carrera profesional he tenido la oportunidad de trabajar en una gran variedad de proyectos SIG con tecnologías muy diversas. La siguiente línea de tiempo recoge los principales proyectos en los que he participado y las tecnologías utilizadas, incluidos trabajos personales y de I+D.',
    rd: 'I+D',
    personal: 'Personal',
  },
  trips: {
    title: 'Viajes | Vicent Sanjaime — Desarrollador y consultor SIG',
    description:
      'Lugares visitados por Vicent Sanjaime en todo el mundo, en un mapa interactivo con deck.gl: Europa, Estados Unidos, Oriente Medio, el Sudeste Asiático, el Caribe y Sudáfrica.',
    heading: 'Viajes',
    intro: 'Algunos de los lugares que he tenido la suerte de visitar, y otros que siguen en mi lista. Haz clic en un marcador para acercarte.',
    visited: 'Visitados',
    highlights: 'Destacados',
    wishlist: 'Pendientes',
    mapView: 'Vista del mapa',
    resetNorth: 'Orientar al norte',
    contributors: 'colaboradores',
  },
};

const va: UI = {
  nav: { home: 'Inici', background: 'Trajectòria', projects: 'Projectes', trips: 'Viatges' },
  mainNav: 'Navegació principal',
  mobileNav: 'Navegació mòbil',
  openMenu: 'Obrir el menú',
  closeMenu: 'Tancar el menú',
  language: 'Idioma',
  footerBefore: 'Desenvolupat amb',
  footerAfter: 'per Vicent',
  jobTitle: 'Desenvolupador i consultor SIG',
  personDescription:
    "Desenvolupador i consultor SIG amb més de 20 anys d'experiència en aplicacions web geoespacials, llibreries de mapes i bases de dades espacials.",
  defaultDescription:
    'Desenvolupador i consultor SIG en CARTO Professional Services, amb base a València. Especialitzat en aplicacions web geoespacials, llibreries de mapes i bases de dades espacials.',
  home: {
    title: 'Vicent Sanjaime | Desenvolupador SIG, entusiasta de la IA i viatger',
    description:
      'Web personal de Vicent Sanjaime Calvet, desenvolupador i consultor SIG en CARTO Professional Services, amb base a València. Apassionat de la tecnologia geoespacial, la IA, el ciclisme i els viatges.',
    hello: 'Hola, sóc Vicent',
    intro: 'Desenvolupador SIG, entusiasta de la IA i amant dels viatges i del ciclisme, des de València',
    about: 'Sobre Vicent',
  },
  background: {
    title: 'Trajectòria | Vicent Sanjaime — Desenvolupador i consultor SIG',
    description:
      "Trajectòria professional de Vicent Sanjaime Calvet: consultor SIG en CARTO, desenvolupador front-end amb Vue.js i React i especialista geoespacial amb més de 20 anys d'experiència a València.",
    bio: 'Sobre mi',
    skillsIntro: 'Dels meus coneixements tècnics destacaria:',
    education: 'Formació',
    employment: 'Experiència professional',
    languages: 'Idiomes',
  },
  projects: {
    title: 'Projectes | Vicent Sanjaime — Desenvolupador i consultor SIG',
    description:
      'Portfolio de projectes SIG i web geoespacials de Vicent Sanjaime: cartografia portuària, catàlegs de dades espacials, visors de mapes, vigilància marítima IoT i més, desenvolupats amb OpenLayers, Vue.js, React, GeoServer i PostGIS.',
    heading: 'Projectes',
    intro:
      "Al llarg de la meua carrera professional he tingut l'oportunitat de treballar en una gran varietat de projectes SIG amb tecnologies molt diverses. La línia de temps següent recull els principals projectes en què he participat i les tecnologies utilitzades, inclosos treballs personals i d'I+D.",
    rd: 'I+D',
    personal: 'Personal',
  },
  trips: {
    title: 'Viatges | Vicent Sanjaime — Desenvolupador i consultor SIG',
    description:
      "Llocs visitats per Vicent Sanjaime arreu del món, en un mapa interactiu amb deck.gl: Europa, els Estats Units, l'Orient Mitjà, el Sud-est Asiàtic, el Carib i Sud-àfrica.",
    heading: 'Viatges',
    intro: 'Alguns dels llocs que he tingut la sort de visitar, i altres que encara tinc pendents. Fes clic en un marcador per a apropar-te.',
    visited: 'Visitats',
    highlights: 'Destacats',
    wishlist: 'Pendents',
    mapView: 'Vista del mapa',
    resetNorth: 'Orientar al nord',
    contributors: 'col·laboradors',
  },
};

export const ui: Record<Lang, UI> = { en, es, va };

/** JSON-LD breadcrumb Home → page, in the page's language */
export function breadcrumbSchema(lang: Lang, page: 'background' | 'projects' | 'trips') {
  const { nav } = ui[lang];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: nav.home, item: `${SITE_URL}${localizePath('/', lang)}` },
      { '@type': 'ListItem', position: 2, name: nav[page], item: `${SITE_URL}${localizePath(`/${page}`, lang)}` },
    ],
  };
}
