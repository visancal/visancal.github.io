import type { IconName } from './icons';
import type { Text } from './i18n';

export const SITE_URL = 'https://vicentsanjaime.net';

/*
 * Translatable fields are `Text`: a plain string when it is the same in every language,
 * or { en, es, va }. Render them with t(text, lang) from ./i18n.
 */

export interface Social {
  label: string;
  url: string;
  icon: IconName;
}

export const socials: Social[] = [
  { label: 'Twitter', url: 'https://twitter.com/visancal', icon: 'twitter' },
  { label: 'Instagram', url: 'https://www.instagram.com/visancal/', icon: 'instagram' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vsanjaime/', icon: 'linkedin' },
  { label: 'GitHub', url: 'https://github.com/visancal', icon: 'github' },
  { label: 'Strava', url: 'https://strava.app.link/qXSmcgCTZ2b', icon: 'strava' },
];

export interface Language {
  name: Text;
  /** Proficiency bar width, 0–100 */
  value: number;
  label: Text;
}

const NATIVE: Text = { en: 'Native', es: 'Nativo', va: 'Natiu' };

export const languages: Language[] = [
  { name: { en: 'Spanish', es: 'Castellano', va: 'Castellà' }, value: 100, label: NATIVE },
  { name: { en: 'English', es: 'Inglés', va: 'Anglés' }, value: 70, label: { en: 'Upper-Intermediate', es: 'Intermedio-alto', va: 'Intermedi-alt' } },
  { name: { en: 'Catalan (Valencian)', es: 'Valenciano', va: 'Valencià' }, value: 100, label: NATIVE },
];

export interface Employment {
  center: string;
  url: string;
  img: string;
  title: Text;
  date: Text;
  tasks: Text[];
}

export interface Education {
  center: Text;
  url: string;
  img: string;
  date: string;
  title: Text;
  icon: string;
  subtitle: Text;
}

export interface SkillGroup {
  color: string;
  techs: Text[];
}

export interface Project {
  title: Text;
  date: string;
  technologies: string[];
  company: string;
  url: string;
  description: Text;
  rd: boolean;
}

const CARTOGRAPHIC_EDITING = { en: 'Cartographic editing', es: 'Edición cartográfica', va: 'Edició cartogràfica' };
const GIS_TECHNICIAN: Text = { en: 'GIS technician', es: 'Técnico SIG', va: 'Tècnic SIG' };

export const employment: Employment[] = [
  {
    center: 'CARTO',
    url: 'https://carto.com',
    img: '/img/employment/carto.svg',
    title: { en: 'Professional Services', es: 'Servicios Profesionales', va: 'Serveis Professionals' },
    date: { en: 'Jan 2022 - Present', es: 'Ene. 2022 - Actualidad', va: 'Gen. 2022 - Actualitat' },
    tasks: [
      {
        en: 'Customer onboarding and technical guidance on the CARTO platform',
        es: 'Onboarding de clientes y asesoramiento técnico sobre la plataforma CARTO',
        va: 'Onboarding de clients i assessorament tècnic sobre la plataforma CARTO',
      },
      {
        en: 'Design and development of geospatial solutions and dashboards',
        es: 'Diseño y desarrollo de soluciones geoespaciales y cuadros de mando',
        va: 'Disseny i desenvolupament de solucions geoespacials i quadres de comandament',
      },
      {
        en: 'Spatial data analysis using cloud data warehouses (BigQuery, Snowflake)',
        es: 'Análisis de datos espaciales con data warehouses en la nube (BigQuery, Snowflake)',
        va: 'Anàlisi de dades espacials amb data warehouses en el núvol (BigQuery, Snowflake)',
      },
      {
        en: 'Integration of CARTO with web mapping libraries (Deck.gl, Google Maps, MapLibre)',
        es: 'Integración de CARTO con librerías de mapas web (Deck.gl, Google Maps, MapLibre)',
        va: 'Integració de CARTO amb llibreries de mapes web (Deck.gl, Google Maps, MapLibre)',
      },
      {
        en: 'GIS consulting and best-practice recommendations for enterprise clients',
        es: 'Consultoría SIG y recomendaciones de buenas prácticas para clientes corporativos',
        va: 'Consultoria SIG i recomanacions de bones pràctiques per a clients corporatius',
      },
    ],
  },
  {
    center: 'Prodevelop',
    url: 'https://www.prodevelop.es',
    img: '/img/employment/prodevelop_new.webp',
    title: {
      en: 'GIS analyst, developer and product manager',
      es: 'Analista SIG, desarrollador y product manager',
      va: 'Analista SIG, desenvolupador i product manager',
    },
    date: { en: 'Nov 2006 - Jan 2022', es: 'Nov. 2006 - Ene. 2022', va: 'Nov. 2006 - Gen. 2022' },
    tasks: [
      { en: 'Product manager of SPACE (Posidonia Suite)', es: 'Product manager de SPACE (Suite Posidonia)', va: 'Product manager de SPACE (Suite Posidonia)' },
      { en: 'GIS consultant', es: 'Consultor SIG', va: 'Consultor SIG' },
      {
        en: 'Front-end and back-end developer (Vue.js / Java)',
        es: 'Desarrollador front-end y back-end (Vue.js / Java)',
        va: 'Desenvolupador front-end i back-end (Vue.js / Java)',
      },
      {
        en: 'Spatial database management (PostgreSQL / PostGIS, Oracle Spatial, SQL Server)',
        es: 'Gestión de bases de datos espaciales (PostgreSQL / PostGIS, Oracle Spatial, SQL Server)',
        va: 'Gestió de bases de dades espacials (PostgreSQL / PostGIS, Oracle Spatial, SQL Server)',
      },
      {
        en: 'Map server administration (MapServer, GeoServer)',
        es: 'Administración de servidores de mapas (MapServer, GeoServer)',
        va: 'Administració de servidors de mapes (MapServer, GeoServer)',
      },
      { en: 'DevOps tasks (Jenkins, Docker, Bash)', es: 'Tareas DevOps (Jenkins, Docker, Bash)', va: 'Tasques DevOps (Jenkins, Docker, Bash)' },
      {
        en: `${CARTOGRAPHIC_EDITING.en} (QGIS, gvSIG, ArcMap, AutoCAD)`,
        es: `${CARTOGRAPHIC_EDITING.es} (QGIS, gvSIG, ArcMap, AutoCAD)`,
        va: `${CARTOGRAPHIC_EDITING.va} (QGIS, gvSIG, ArcMap, AutoCAD)`,
      },
      { en: 'User training', es: 'Formación de usuarios', va: "Formació d'usuaris" },
    ],
  },
  {
    center: 'SENER',
    url: 'https://www.group.sener/es',
    img: '/img/employment/sener_new.webp',
    date: { en: 'Jun 2005 - May 2006', es: 'Jun. 2005 - May. 2006', va: 'Juny 2005 - Maig 2006' },
    title: GIS_TECHNICIAN,
    tasks: [
      {
        en: `${CARTOGRAPHIC_EDITING.en} (ArcMap / ESRI)`,
        es: `${CARTOGRAPHIC_EDITING.es} (ArcMap / ESRI)`,
        va: `${CARTOGRAPHIC_EDITING.va} (ArcMap / ESRI)`,
      },
      { en: 'Photogrammetric studies', es: 'Estudios fotogramétricos', va: 'Estudis fotogramètrics' },
      { en: 'Hydraulic studies (HEC-GeoRAS)', es: 'Estudios hidráulicos (HEC-GeoRAS)', va: 'Estudis hidràulics (HEC-GeoRAS)' },
    ],
  },
  {
    center: 'CIDE (CSIG, UV, GV)',
    url: 'https://www.group.sener/es',
    img: '/img/employment/cide.webp',
    date: '2002 - 2004',
    title: GIS_TECHNICIAN,
    tasks: [
      {
        en: 'Cartographic review of land uses in protected natural areas (LICs) across the Valencian region',
        es: 'Revisión cartográfica de usos del suelo en espacios naturales protegidos (LIC) de la Comunitat Valenciana',
        va: "Revisió cartogràfica d'usos del sòl en espais naturals protegits (LIC) de la Comunitat Valenciana",
      },
    ],
  },
];

export const education: Education[] = [
  {
    center: { en: 'Polytechnic University of Valencia', es: 'Universidad Politécnica de Valencia', va: 'Universitat Politècnica de València' },
    url: 'http://www.upv.es/',
    img: 'https://raphacasgi.files.wordpress.com/2013/09/a010.jpg',
    date: '2002 - 2007',
    title: { en: 'Geodesy and Cartography Engineer', es: 'Ingeniero en Geodesia y Cartografía', va: 'Enginyer en Geodèsia i Cartografia' },
    icon: '/img/education/upv.svg',
    subtitle: { en: 'Proficient in Remote Sensing and GIS', es: 'Especializado en teledetección y SIG', va: 'Especialitzat en teledetecció i SIG' },
  },
  {
    center: { en: 'University of Valencia', es: 'Universidad de Valencia', va: 'Universitat de València' },
    url: 'http://www.uv.es/',
    img: 'https://www.uv.es/recursos/fatwirepub/ccurl/929/546/SPOT_PRIN_01.jpg',
    date: '1998 - 2002',
    title: { en: 'Graduate in Geography', es: 'Licenciado en Geografía', va: 'Llicenciat en Geografia' },
    icon: '/img/education/uv.svg',
    subtitle: { en: 'Proficient in physical geography', es: 'Especializado en geografía física', va: 'Especialitzat en geografia física' },
  },
];

// Muted earthy tones to harmonise with the warm cream palette
export const skills: SkillGroup[] = [
  { color: '#B85C42', techs: [{ en: 'Front-end development', es: 'Desarrollo front-end', va: 'Desenvolupament front-end' }, 'JavaScript', 'HTML5', 'CSS', 'Vue', 'React', 'TypeScript', 'Astro'] },
  {
    color: '#A04E68',
    techs: [
      { en: 'GIS Analysis', es: 'Análisis SIG', va: 'Anàlisi SIG' },
      { en: 'Cartography', es: 'Cartografía', va: 'Cartografia' },
      { en: 'Geodesy', es: 'Geodesia', va: 'Geodèsia' },
      { en: 'Geomatics', es: 'Geomática', va: 'Geomàtica' },
      'QGIS', 'gvSIG', 'ArcGIS Desktop', 'CARTO',
    ],
  },
  { color: '#7A5090', techs: ['GeoServer', 'MapServer', 'MapProxy', 'Tilecache', 'GeoNetwork'] },
  { color: '#5C5490', techs: ['CAD', 'AutoCAD', 'Microstation'] },
  { color: '#4A6090', techs: ['Oracle Spatial', 'PostgreSQL / PostGIS', 'SQL Server', 'SQL', 'Big Query'] },
  { color: '#3D7A9A', techs: ['DevOps', 'Jenkins', 'Docker', 'AWS', 'Google Cloud Platform', 'Linux', 'Bash', 'Kubernetes', 'Terraform'] },
  { color: '#2E8C8C', techs: ['Java', 'GeoTools', 'Spring'] },
  { color: '#2E8A78', techs: ['Kafka'] },
  { color: '#4A7A68', techs: ['Scrum', 'Jira', 'Confluence'] },
];

const MY_WEBSITE: Text = { en: 'My personal website', es: 'Mi web personal', va: 'La meua web personal' };
const DE_CASA_AL_COLE: Text = {
  en: 'A collaborative project to help families find schools ranked by travel time, with filters by school type (primary, special needs, secondary…).',
  es: 'Proyecto colaborativo para ayudar a las familias a encontrar colegios ordenados por tiempo de trayecto, con filtros por tipo de centro (primaria, educación especial, secundaria…).',
  va: 'Projecte col·laboratiu per a ajudar les famílies a trobar col·legis ordenats per temps de trajecte, amb filtres per tipus de centre (primària, educació especial, secundària…).',
};

export const projects: Project[] = [
  {
    title: 'Sekisui US Submarkets',
    date: '2026',
    technologies: ['CARTO 3', 'TypeScript', 'React', 'Deck.gl', 'Big Query'],
    company: 'Carto',
    url: '',
    description: {
      en: 'Web viewer for querying and visualising KPIs across US submarkets, built with CARTO 3, deck.gl and BigQuery.',
      es: 'Visor web para consultar y visualizar KPIs de submercados de EE. UU., desarrollado con CARTO 3, deck.gl y BigQuery.',
      va: 'Visor web per a consultar i visualitzar KPI de submercats dels EUA, desenvolupat amb CARTO 3, deck.gl i BigQuery.',
    },
    rd: false,
  },
  {
    title: { en: 'Personal website (version 2026)', es: 'Web personal (versión 2026)', va: 'Web personal (versió 2026)' },
    date: '2026',
    technologies: ['GitHub Pages', 'Astro', 'TypeScript', 'Claude'],
    company: 'Personal',
    url: 'https://vicentsanjaime.net',
    description: MY_WEBSITE,
    rd: false,
  },
  {
    title: { en: 'Club running Tos Pelat', es: 'Club de running Tos Pelat', va: 'Club de running Tos Pelat' },
    date: '2026',
    technologies: ['GitHub Pages', 'Astro', 'TypeScript', 'Claude'],
    company: 'Personal',
    url: 'https://cctospelat.com',
    description: { en: 'Website for the running club', es: 'Web del club de running', va: 'Web del club de running' },
    rd: false,
  },
  {
    title: { en: 'De casa al cole (version 2026)', es: 'De casa al cole (versión 2026)', va: 'De casa al cole (versió 2026)' },
    date: '2025',
    technologies: ['React', 'TypeScript', 'GitHub Pages', 'Claude'],
    company: 'Personal',
    url: 'https://decasaalcole.com',
    description: DE_CASA_AL_COLE,
    rd: false,
  },
  {
    title: 'RadarView',
    date: '2022-2026',
    technologies: ['CARTO', 'Vue', 'Google Cloud Platform', 'Node', 'Terraform', 'Claude'],
    company: 'Carto',
    url: '',
    description: {
      en: 'Web tool for OOH analysis',
      es: 'Herramienta web para el análisis de publicidad exterior (OOH)',
      va: "Ferramenta web per a l'anàlisi de publicitat exterior (OOH)",
    },
    rd: false,
  },
  {
    title: 'Axa framework',
    date: '2022-2026',
    technologies: ['CARTO 2', 'Vue', 'Google Cloud Platform', 'Python', 'Node', 'Kubernetes'],
    company: 'Carto',
    url: '',
    description: {
      en: 'Framework for building geospatial applications on top of the CARTO platform',
      es: 'Framework para construir aplicaciones geoespaciales sobre la plataforma CARTO',
      va: 'Framework per a construir aplicacions geoespacials sobre la plataforma CARTO',
    },
    rd: false,
  },
  {
    title: { en: 'Personal website', es: 'Web personal', va: 'Web personal' },
    date: '2020',
    technologies: ['GitHub Pages', 'Vue', 'TypeScript'],
    company: 'Personal',
    url: 'https://vicentsanjaime.net',
    description: MY_WEBSITE,
    rd: false,
  },
  {
    title: 'Mia tracking',
    date: '2019-2022',
    technologies: ['CARTO', 'Vue', 'AWS', 'Kafka', 'Java', 'PostGIS', 'Spring'],
    company: 'Prodevelop',
    url: '',
    description: {
      en: 'Web tool for tracking incidents and suppliers globally, developed with CARTO technology and hosted on AWS.',
      es: 'Herramienta web para el seguimiento global de incidencias y proveedores, desarrollada con tecnología CARTO y alojada en AWS.',
      va: "Ferramenta web per al seguiment global d'incidències i proveïdors, desenvolupada amb tecnologia CARTO i allotjada en AWS.",
    },
    rd: false,
  },
  {
    title: 'Posidonia SPACE (Suite Posidonia)',
    date: '2015-2022',
    technologies: ['Java', 'GeoServer', 'jQuery', 'OpenLayers', 'Oracle', 'Bootstrap', 'Spring'],
    company: 'Prodevelop',
    url: 'https://www.prodevelop.es/puertos/posidonia/posidonia-space',
    description: {
      en: 'Port cartography web viewer included in the Posidonia suite that Prodevelop offers for port management. The solution comprises a spatial database (PostGIS, Oracle Spatial or SQL Server), a GeoServer map server and an OpenLayers client.',
      es: 'Visor web de cartografía portuaria incluido en la suite Posidonia que Prodevelop ofrece para la gestión portuaria. La solución consta de una base de datos espacial (PostGIS, Oracle Spatial o SQL Server), un servidor de mapas GeoServer y un cliente OpenLayers.',
      va: "Visor web de cartografia portuària inclòs en la suite Posidonia que Prodevelop oferix per a la gestió portuària. La solució consta d'una base de dades espacial (PostGIS, Oracle Spatial o SQL Server), un servidor de mapes GeoServer i un client OpenLayers.",
    },
    rd: false,
  },
  {
    title: {
      en: 'Local SPACE (Local & Provincial governments)',
      es: 'Local SPACE (ayuntamientos y diputaciones)',
      va: 'Local SPACE (ajuntaments i diputacions)',
    },
    date: '2018 - 2022',
    technologies: ['Java', 'GeoServer', 'jQuery', 'OpenLayers', 'PostgreSQL/PostGIS', 'Bootstrap', 'Spring'],
    company: 'Prodevelop',
    url: '',
    description: {
      en: 'Municipal cartography web viewer based on Posidonia SPACE, designed for local governments to manage spatial data.',
      es: 'Visor web de cartografía municipal basado en Posidonia SPACE, diseñado para que los ayuntamientos gestionen sus datos espaciales.',
      va: 'Visor web de cartografia municipal basat en Posidonia SPACE, dissenyat perquè els ajuntaments gestionen les seues dades espacials.',
    },
    rd: false,
  },
  {
    title: 'sigAGROasesor',
    date: '2018',
    technologies: ['jQuery', 'Knockout', 'Java', 'Spring', 'OpenLayers'],
    company: 'Prodevelop',
    url: 'https://www.agroasesor.es',
    description: {
      en: 'Development of an automated agricultural parcel classification tool based on Sentinel Hub imagery.',
      es: 'Desarrollo de una herramienta de clasificación automática de parcelas agrícolas basada en imágenes de Sentinel Hub.',
      va: "Desenvolupament d'una ferramenta de classificació automàtica de parcel·les agrícoles basada en imatges de Sentinel Hub.",
    },
    rd: false,
  },
  {
    title: { en: 'Spatial data catalogue (ICV)', es: 'Catálogo de datos espaciales (ICV)', va: 'Catàleg de dades espacials (ICV)' },
    date: '2017',
    technologies: ['Vue', 'Webpack', 'GeoNetwork', 'Vuetify'],
    company: 'Prodevelop',
    url: 'http://www.icv.gva.es/auto/aplicaciones/icv_geocat',
    description: {
      en: "Spatial data catalogue website of the Valencian SDI implemented for the Valencian Cartographic Institute (ICV). This web client was made with VueJs on the ICV's Geonetwork metadata server.",
      es: 'Web del catálogo de datos espaciales de la IDE valenciana, implementada para el Instituto Cartográfico Valenciano (ICV). El cliente web se desarrolló con Vue.js sobre el servidor de metadatos GeoNetwork del ICV.',
      va: "Web del catàleg de dades espacials de la IDE valenciana, implementada per a l'Institut Cartogràfic Valencià (ICV). El client web es va desenvolupar amb Vue.js sobre el servidor de metadades GeoNetwork de l'ICV.",
    },
    rd: false,
  },
  {
    title: {
      en: 'APPS project (ITEA3) (Port of Rotterdam)',
      es: 'Proyecto APPS (ITEA3) (Puerto de Róterdam)',
      va: 'Projecte APPS (ITEA3) (Port de Rotterdam)',
    },
    date: '2017-2018',
    technologies: ['CesiumJS', 'jQuery', 'CEP Drools', 'Kafka', 'Java', 'Machine Learning'],
    company: 'Prodevelop',
    url: 'https://itea3.org/project/apps.html',
    description: {
      en: 'European research project (ITEA3) to develop surveillance systems (IoT) in the maritime domain, consisting of radar and visual sensors. The final demo was held at the Port of Rotterdam.',
      es: 'Proyecto europeo de investigación (ITEA3) para desarrollar sistemas de vigilancia (IoT) en el ámbito marítimo, formados por sensores de radar y visuales. La demostración final se realizó en el Puerto de Róterdam.',
      va: "Projecte europeu d'investigació (ITEA3) per a desenvolupar sistemes de vigilància (IoT) en l'àmbit marítim, formats per sensors de radar i visuals. La demostració final es va fer al Port de Rotterdam.",
    },
    rd: true,
  },
  {
    title: 'De casa al cole',
    date: '2015',
    technologies: ['CARTO', 'jQuery', 'Bootstrap'],
    company: 'Personal',
    url: 'http://decasaalcole.com',
    description: {
      en: `${DE_CASA_AL_COLE.en} Built with Bootstrap, Leaflet and CARTO on the back end.`,
      es: `${DE_CASA_AL_COLE.es} Desarrollado con Bootstrap, Leaflet y CARTO en el back end.`,
      va: `${DE_CASA_AL_COLE.va} Desenvolupat amb Bootstrap, Leaflet i CARTO en el back end.`,
    },
    rd: false,
  },
  {
    title: {
      en: 'Sea Care APP (European Space Agency APP Camp)',
      es: 'Sea Care APP (App Camp de la Agencia Espacial Europea)',
      va: "Sea Care APP (App Camp de l'Agència Espacial Europea)",
    },
    date: '2014',
    technologies: ['Android', 'OpenLayers', 'JavaScript'],
    company: 'Personal',
    url: 'https://youtu.be/vZ7eQl_TOJU',
    description: {
      en: 'Android app developed at the ESA Space App Camp (Noordwijk), designed to help report illegal fishing activities. Based on AIS data and Sentinel satellite imagery.',
      es: 'App Android desarrollada en el ESA Space App Camp (Noordwijk) para ayudar a denunciar actividades de pesca ilegal. Basada en datos AIS e imágenes del satélite Sentinel.',
      va: "App Android desenvolupada en l'ESA Space App Camp (Noordwijk) per a ajudar a denunciar activitats de pesca il·legal. Basada en dades AIS i imatges del satèl·lit Sentinel.",
    },
    rd: false,
  },
  {
    title: 'Traycco',
    date: '2014',
    technologies: ['JavaScript', 'OpenLayers'],
    company: 'Prodevelop',
    url: '',
    description: {
      en: 'Web map viewer displaying delivery areas for geomarketing analysis.',
      es: 'Visor web de mapas que muestra áreas de reparto para análisis de geomarketing.',
      va: 'Visor web de mapes que mostra àrees de repartiment per a anàlisis de geomàrqueting.',
    },
    rd: false,
  },
  {
    title: {
      en: 'APP IRENA (International Renewable Energy Agency)',
      es: 'APP IRENA (Agencia Internacional de Energías Renovables)',
      va: "APP IRENA (Agència Internacional d'Energies Renovables)",
    },
    date: '2014',
    technologies: ['Android', 'iOS', 'Windows Phone', 'BlackBerry', 'OpenLayers', 'CesiumJS', 'Apache Cordova'],
    company: 'Prodevelop',
    url: 'https://www.irena.org',
    description: {
      en: 'Android, iOS, Windows Phone and BlackBerry app for viewing environmental cartography via OGC standards. Developed with Apache Cordova, CesiumJS and OpenLayers.',
      es: 'App para Android, iOS, Windows Phone y BlackBerry para consultar cartografía ambiental mediante estándares OGC. Desarrollada con Apache Cordova, CesiumJS y OpenLayers.',
      va: 'App per a Android, iOS, Windows Phone i BlackBerry per a consultar cartografia ambiental mitjançant estàndards OGC. Desenvolupada amb Apache Cordova, CesiumJS i OpenLayers.',
    },
    rd: false,
  },
  {
    title: { en: 'Geoportal of Morocco (MFPMA)', es: 'Geoportal de Marruecos (MFPMA)', va: 'Geoportal del Marroc (MFPMA)' },
    date: '2014',
    technologies: ['jQuery', 'OpenLayers', 'Java', 'Spring', 'Lucene', 'Knockout'],
    company: 'Prodevelop',
    url: 'http://maps.service-public.ma/mfpma/geo/front/',
    description: {
      en: 'Web geoportal of points of interest (POIs) across the entire territory of Morocco, built with OpenLayers, a custom vector tile engine and a Lucene-based search engine.',
      es: 'Geoportal web de puntos de interés (POI) de todo el territorio de Marruecos, desarrollado con OpenLayers, un motor propio de teselas vectoriales y un buscador basado en Lucene.',
      va: "Geoportal web de punts d'interés (POI) de tot el territori del Marroc, desenvolupat amb OpenLayers, un motor propi de tessel·les vectorials i un cercador basat en Lucene.",
    },
    rd: false,
  },
  {
    title: { en: 'SOSTRAT GIS (Port of Barcelona)', es: 'SOSTRAT GIS (Puerto de Barcelona)', va: 'SOSTRAT GIS (Port de Barcelona)' },
    date: '2013',
    technologies: ['GeoServer', 'OpenLayers', 'Bootstrap'],
    company: 'Prodevelop',
    url: '',
    description: {
      en: 'Web map viewer for the SOSTRAT port infrastructure management application.',
      es: 'Visor web de mapas para la aplicación de gestión de infraestructuras portuarias SOSTRAT.',
      va: "Visor web de mapes per a l'aplicació de gestió d'infraestructures portuàries SOSTRAT.",
    },
    rd: false,
  },
  {
    title: 'GeoStore',
    date: '2012',
    technologies: ['Drupal', 'OpenLayers'],
    company: 'Prodevelop',
    url: '',
    description: {
      en: 'Platform for sharing and purchasing geospatial data online.',
      es: 'Plataforma para compartir y comprar datos geoespaciales en línea.',
      va: 'Plataforma per a compartir i comprar dades geoespacials en línia.',
    },
    rd: true,
  },
  {
    title: {
      en: 'LocalGIS (Provincial Deputation of Valencia)',
      es: 'LocalGIS (Diputación de Valencia)',
      va: 'LocalGIS (Diputació de València)',
    },
    date: '2011-2012',
    technologies: ['LocalGIS', 'Java', 'Ext JS', 'GeoExt', 'MapServer', 'PostGIS', 'ETL Pentaho', 'GeoNetwork'],
    company: 'Prodevelop',
    url: '',
    description: {
      en: 'Development and deployment of a GIS platform for local governments, installed in 80 municipalities across the Valencia region. The project included a new web geoportal built on GeoExt, a centralised cartographic repository (PostGIS) and WMS services to publish local maps (MapServer).',
      es: 'Desarrollo e implantación de una plataforma SIG para ayuntamientos, instalada en 80 municipios de la provincia de Valencia. El proyecto incluyó un nuevo geoportal web basado en GeoExt, un repositorio cartográfico centralizado (PostGIS) y servicios WMS para publicar la cartografía local (MapServer).',
      va: "Desenvolupament i implantació d'una plataforma SIG per a ajuntaments, instal·lada en 80 municipis de la província de València. El projecte va incloure un nou geoportal web basat en GeoExt, un repositori cartogràfic centralitzat (PostGIS) i servicis WMS per a publicar la cartografia local (MapServer).",
    },
    rd: false,
  },
  {
    title: {
      en: 'Tourist Geoportal of the Valencian Community (AVT)',
      es: 'Geoportal turístico de la Comunitat Valenciana (AVT)',
      va: 'Geoportal turístic de la Comunitat Valenciana (AVT)',
    },
    date: '2010',
    technologies: ['Google Maps API', 'jQuery', 'Java', 'Lucene', 'ETL Pentaho', 'Drupal'],
    company: 'Prodevelop',
    url: '',
    description: {
      en: 'Geoportal of tourist points of interest in the Valencian Community, built with the Google Maps JavaScript API, a custom vector tile engine and a Lucene-based search engine (Java).',
      es: 'Geoportal de puntos de interés turístico de la Comunitat Valenciana, desarrollado con la API JavaScript de Google Maps, un motor propio de teselas vectoriales y un buscador basado en Lucene (Java).',
      va: "Geoportal de punts d'interés turístic de la Comunitat Valenciana, desenvolupat amb l'API JavaScript de Google Maps, un motor propi de tessel·les vectorials i un cercador basat en Lucene (Java).",
    },
    rd: false,
  },
  {
    title: 'OSAMI (ITEA3)',
    date: '2010',
    technologies: ['JavaScript', 'OpenLayers', 'jQuery'],
    company: 'Prodevelop',
    url: 'https://itea3.org/project/osami-commons.html',
    description: {
      en: 'OSAMI-Commons aimed to establish open-source foundations for a dynamic, service-oriented platform capable of adapting across a wide range of co-operating software-intensive systems (SIS).',
      es: 'OSAMI-Commons tenía como objetivo sentar las bases de código abierto de una plataforma dinámica y orientada a servicios, capaz de adaptarse a una amplia variedad de sistemas intensivos en software (SIS) que cooperan entre sí.',
      va: "OSAMI-Commons tenia com a objectiu establir les bases de codi obert d'una plataforma dinàmica i orientada a servicis, capaç d'adaptar-se a una àmplia varietat de sistemes intensius en programari (SIS) que cooperen entre ells.",
    },
    rd: true,
  },
  {
    title: 'Aventura Oceanica',
    date: '2009',
    technologies: ['OpenLayers', 'PostGIS', 'JavaScript'],
    company: 'Prodevelop',
    url: 'http://aventuraoceanica.es/',
    description: '',
    rd: false,
  },
  {
    title: 'gvSIG',
    date: '2008-2010',
    technologies: ['Java'],
    company: 'Prodevelop',
    url: 'http://www.gvsig.com/es',
    description: {
      en: 'Development of extensions for gvSIG 1.x and gvSIG 2.x: Geocoding, Oracle Connector (2.x), Phone Cache and GeoResources.',
      es: 'Desarrollo de extensiones para gvSIG 1.x y gvSIG 2.x: geocodificación, conector Oracle (2.x), Phone Cache y GeoResources.',
      va: "Desenvolupament d'extensions per a gvSIG 1.x i gvSIG 2.x: geocodificació, connector Oracle (2.x), Phone Cache i GeoResources.",
    },
    rd: false,
  },
];

export interface Trip {
  name: string;
  /** ISO 3166-1 alpha-2 code(s), e.g. 'ES' or 'ZM/ZW'. Names come from Intl.DisplayNames */
  country: string;
  /** [longitude, latitude] */
  coordinates: [number, number];
}

export const trips: Trip[] = [
  { name: 'Hanoi', country: 'VN', coordinates: [105.8542, 21.0285] },
  { name: 'Chiang Mai', country: 'TH', coordinates: [98.9853, 18.7883] },
  { name: 'Chiang Rai', country: 'TH', coordinates: [99.8325, 19.9105] },
  { name: 'Bangkok', country: 'TH', coordinates: [100.5018, 13.7563] },
  { name: 'Ao Nang', country: 'TH', coordinates: [98.8226, 8.0322] },
  { name: 'Singapore', country: 'SG', coordinates: [103.8198, 1.3521] },
  { name: 'Dubai', country: 'AE', coordinates: [55.2708, 25.2048] },
  { name: 'Doha', country: 'QA', coordinates: [51.531, 25.2854] },
  { name: 'Samaná', country: 'DO', coordinates: [-69.3364, 19.2058] },
  { name: 'Santo Domingo', country: 'DO', coordinates: [-69.9312, 18.4861] },
  { name: 'Fort-de-France', country: 'MQ', coordinates: [-61.0742, 14.6161] },
  { name: 'Pointe-à-Pitre', country: 'GP', coordinates: [-61.5331, 16.2411] },
  { name: 'Isla Margarita', country: 'VE', coordinates: [-63.9, 11.0] },
  { name: 'Havana', country: 'CU', coordinates: [-82.3666, 23.1136] },
  { name: 'Varadero', country: 'CU', coordinates: [-81.2449, 23.1539] },
  { name: 'Cayo Santa María', country: 'CU', coordinates: [-78.995, 22.66] },
  { name: 'Cienfuegos', country: 'CU', coordinates: [-80.4356, 22.1461] },
  { name: 'New York', country: 'US', coordinates: [-74.006, 40.7128] },
  { name: 'Los Angeles', country: 'US', coordinates: [-118.2437, 34.0522] },
  { name: 'Cape Town', country: 'ZA', coordinates: [18.4241, -33.9249] },
  { name: 'La Palma', country: 'ES', coordinates: [-17.8647, 28.6835] },
  { name: 'Madrid', country: 'ES', coordinates: [-3.7038, 40.4168] },
  { name: 'Barcelona', country: 'ES', coordinates: [2.1734, 41.3851] },
  { name: 'Girona', country: 'ES', coordinates: [2.8214, 41.9794] },
  { name: 'Tarifa', country: 'ES', coordinates: [-5.6045, 36.0143] },
  { name: 'Sevilla', country: 'ES', coordinates: [-5.9845, 37.3891] },
  { name: 'Bilbao', country: 'ES', coordinates: [-2.935, 43.263] },
  { name: 'San Sebastián', country: 'ES', coordinates: [-1.9812, 43.3183] },
  { name: 'Torla', country: 'ES', coordinates: [-0.1107, 42.6276] },
  { name: 'Cáceres', country: 'ES', coordinates: [-6.3724, 39.4753] },
  { name: 'Finisterre', country: 'ES', coordinates: [-9.2651, 42.9078] },
  { name: 'Ávila', country: 'ES', coordinates: [-4.6812, 40.6565] },
  { name: 'Segovia', country: 'ES', coordinates: [-4.1184, 40.9429] },
  { name: 'A Coruña', country: 'ES', coordinates: [-8.4115, 43.3623] },
  { name: 'Santander', country: 'ES', coordinates: [-3.8044, 43.4623] },
  { name: 'Teruel', country: 'ES', coordinates: [-1.1065, 40.3456] },
  { name: 'Cádiz', country: 'ES', coordinates: [-6.2885, 36.5271] },
  { name: 'Lagos', country: 'PT', coordinates: [-8.6732, 37.1028] },
  { name: 'Palma', country: 'ES', coordinates: [2.6502, 39.5696] },
  { name: 'Son Bou', country: 'ES', coordinates: [4.0775, 39.8987] },
  { name: 'Cala Llonga', country: 'ES', coordinates: [1.5233, 38.9551] },
  { name: 'Formentera', country: 'ES', coordinates: [1.4436, 38.7053] },
  { name: 'Paris', country: 'FR', coordinates: [2.3522, 48.8566] },
  { name: 'Dune du Pilat', country: 'FR', coordinates: [-1.2131, 44.5893] },
  { name: 'Andorra', country: 'AD', coordinates: [1.5218, 42.5063] },
  { name: 'Monaco', country: 'MC', coordinates: [7.4246, 43.7384] },
  { name: 'Manchester', country: 'GB', coordinates: [-2.2426, 53.4808] },
  { name: 'London', country: 'GB', coordinates: [-0.1278, 51.5074] },
  { name: 'Edinburgh', country: 'GB', coordinates: [-3.1883, 55.9533] },
  { name: 'Tromsø', country: 'NO', coordinates: [18.9553, 69.6492] },
  { name: 'Dublin', country: 'IE', coordinates: [-6.2603, 53.3498] },
  { name: 'Milan', country: 'IT', coordinates: [9.19, 45.4642] },
  { name: 'Venice', country: 'IT', coordinates: [12.3155, 45.4408] },
  { name: 'Pisa', country: 'IT', coordinates: [10.4017, 43.7228] },
  { name: 'Florence', country: 'IT', coordinates: [11.2558, 43.7696] },
  { name: 'Rome', country: 'IT', coordinates: [12.4964, 41.9028] },
  { name: 'Capri', country: 'IT', coordinates: [14.2425, 40.5532] },
  { name: 'Amalfi', country: 'IT', coordinates: [14.6027, 40.634] },
  { name: 'Pompeii', country: 'IT', coordinates: [14.4848, 40.7489] },
  { name: 'Malta', country: 'MT', coordinates: [14.5146, 35.8997] },
  { name: 'Novi Sad', country: 'RS', coordinates: [19.8335, 45.2671] },
  { name: 'Belgrade', country: 'RS', coordinates: [20.4489, 44.7866] },
  { name: 'Las Vegas', country: 'US', coordinates: [-115.1398, 36.1699] },
  { name: 'San Francisco', country: 'US', coordinates: [-122.4194, 37.7749] },
];

/** Standout places worth highlighting, drawn as green markers. */
export const highlights: Trip[] = [
  { name: 'Cape of Good Hope', country: 'ZA', coordinates: [18.4733, -34.3568] },
  { name: 'Grand Canyon', country: 'US', coordinates: [-112.1129, 36.1069] },
  { name: 'Yosemite', country: 'US', coordinates: [-119.5383, 37.8651] },
  { name: 'Death Valley', country: 'US', coordinates: [-116.8231, 36.5054] },
  { name: 'Angkor Wat', country: 'KH', coordinates: [103.867, 13.4125] },
  { name: 'North Cape', country: 'NO', coordinates: [25.7836, 71.1685] },
  { name: 'Lofoten Islands', country: 'NO', coordinates: [13.95, 68.2] },
  { name: 'Mont-Saint-Michel', country: 'FR', coordinates: [-1.5115, 48.6361] },
];

/** Destinations on the wishlist, drawn as red markers. */
export const wishlist: Trip[] = [
  { name: 'Victoria Falls', country: 'ZM/ZW', coordinates: [25.8572, -17.9243] },
  { name: 'Philippines', country: 'PH', coordinates: [121.774, 12.8797] },
  { name: 'Peru', country: 'PE', coordinates: [-75.0152, -9.19] },
  { name: 'Tibet', country: 'CN', coordinates: [91.1172, 29.6525] },
  { name: 'Azores', country: 'PT', coordinates: [-25.5, 37.78] },
  { name: 'Cairo', country: 'EG', coordinates: [31.2357, 30.0444] },
];
