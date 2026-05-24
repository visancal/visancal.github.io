export interface Employment {
  id: number;
  center: string;
  url: string;
  img: string;
  title: string;
  date: string;
  location: string;
  tasks: string[];
}

export interface Education {
  center: string;
  url: string;
  img: string;
  date: string;
  title: string;
  location: string;
  icon: string;
  subtitle: string;
}

export interface SkillGroup {
  color: string;
  techs: string[];
}

export interface Project {
  title: string;
  date: string;
  technologies: string[];
  img: string;
  company: string;
  url: string;
  description: string;
  rd: boolean;
}

export const employment: Employment[] = [
  {
    id: 0,
    center: 'CARTO',
    url: 'https://carto.com',
    img: '/img/employment/carto.webp',
    title: 'Professional Services',
    date: 'Jan 2022 - Present',
    location: 'Valencia',
    tasks: [
      'Customer onboarding and technical guidance on the CARTO platform',
      'Design and development of geospatial solutions and dashboards',
      'Spatial data analysis using cloud data warehouses (BigQuery, Snowflake)',
      'Integration of CARTO with web mapping libraries (Deck.gl, Google Maps, MapLibre)',
      'GIS consulting and best-practice recommendations for enterprise clients',
    ],
  },
  {
    id: 1,
    center: 'Prodevelop',
    url: 'https://www.prodevelop.es',
    img: '/img/employment/prodevelop.webp',
    title: 'GIS analyst, developer and product manager',
    date: 'Nov 2006 - Jan 2022',
    location: 'Valencia',
    tasks: [
      'Product manager of SPACE (Posidonia Suite)',
      'GIS consultant',
      'Front-end and back-end developer (Vue.js / Java)',
      'Spatial database management (PostgreSQL / PostGIS, Oracle Spatial, SQL Server)',
      'Map server administration (MapServer, GeoServer)',
      'DevOps tasks (Jenkins, Docker, Bash)',
      'Cartographic editing (QGIS, gvSIG, ArcMap, AutoCAD)',
      'User training',
    ],
  },
  {
    id: 2,
    center: 'SENER',
    url: 'https://www.group.sener/es',
    img: '/img/employment/sener.webp',
    date: 'Jun 2005 - May 2006',
    title: 'GIS technician',
    location: 'Valencia',
    tasks: [
      'Cartographic editing (ArcMap / ESRI)',
      'Photogrammetric studies',
      'Hydraulic studies (HEC-GeoRAS)',
    ],
  },
  {
    id: 3,
    center: 'CIDE (CSIG, UV, GV)',
    url: 'https://www.group.sener/es',
    img: '/img/employment/cide.webp',
    date: '2002 - 2004',
    title: 'GIS technician',
    location: 'Albal',
    tasks: [
      'Cartographic review of land uses in protected natural areas (LICs) across the Valencian region',
    ],
  },
];

export const education: Education[] = [
  {
    center: 'Polytechnic University of Valencia',
    url: 'http://www.upv.es/',
    img: 'https://raphacasgi.files.wordpress.com/2013/09/a010.jpg',
    date: '2002 - 2007',
    title: 'Geodesy and Cartography Engineer',
    location: 'Valencia',
    icon: '/img/education/upv.webp',
    subtitle: 'Proficient in Remote Sensing and GIS',
  },
  {
    center: 'University of Valencia',
    url: 'http://www.uv.es/',
    img: 'https://www.uv.es/recursos/fatwirepub/ccurl/929/546/SPOT_PRIN_01.jpg',
    date: '1998 - 2002',
    title: 'Graduate in Geography',
    location: 'Valencia',
    icon: '/img/education/uv.svg',
    subtitle: 'Proficient in physical geography',
  },
];

// Muted earthy tones to harmonise with the warm cream palette
export const skills: SkillGroup[] = [
  { color: '#B85C42', techs: ['Front-end development', 'JavaScript', 'HTML5', 'CSS', 'Vue', 'React', 'TypeScript', 'Astro'] },
  { color: '#A04E68', techs: ['GIS Analysis', 'Cartography', 'Geodesy', 'Geomatics', 'QGIS', 'gvSIG', 'ArcGIS Desktop', 'CARTO'] },
  { color: '#7A5090', techs: ['GeoServer', 'MapServer', 'MapProxy', 'Tilecache', 'GeoNetwork'] },
  { color: '#5C5490', techs: ['CAD', 'AutoCAD', 'Microstation'] },
  { color: '#4A6090', techs: ['Oracle Spatial', 'PostgreSQL / PostGIS', 'SQL Server', 'SQL', 'Big Query'] },
  { color: '#3D7A9A', techs: ['DevOps', 'Jenkins', 'Docker', 'AWS', 'Google Cloud Platform', 'Linux', 'Bash', 'Kubernetes', 'Terraform'] },
  { color: '#2E8C8C', techs: ['Java', 'GeoTools', 'Spring'] },
  { color: '#2E8A78', techs: ['Kafka'] },
  { color: '#4A7A68', techs: ['Scrum', 'Jira', 'Confluence'] },
];

export const projects: Project[] = [
  {
    title: 'Personal website (version 2026)',
    date: '2026',
    technologies: ['GitHub Pages', 'Astro', 'TypeScript', 'Claude'],
    img: '',
    company: 'Personal',
    url: 'https://vicentsanjaime.net',
    description: 'My personal website',
    rd: false,
  },
  {
    title: 'Club running Tos Pelat',
    date: '2026',
    technologies: ['GitHub Pages', 'Astro', 'TypeScript', 'Claude'],
    img: '',
    company: 'Personal',
    url: 'https://cctospelat.com',
    description: 'Website for the running club',
    rd: false,
  },
  {
    title: 'De casa al cole (version 2026)',
    date: '2025',
    technologies: ['React', 'TypeScript', 'GitHub Pages', 'Claude'],
    img: '',
    company: 'Personal',
    url: 'https://decasaalcole.com',
    description:
      'A collaborative project to help families find schools ranked by travel time, with filters by school type (primary, special needs, secondary…).',
    rd: false,
  },
  {
    title: 'RadarView',
    date: '2022-2026',
    technologies: ['CARTO', 'Vue', 'Google Cloud Platform', 'Node', 'Terraform', 'Claude'],
    img: '',
    company: 'Carto',
    url: '',
    description:
      'Web tool for OOH analysis',
    rd: false,
  },
  {
    title: 'Axa framework',
    date: '2022-2026',
    technologies: ['CARTO 2', 'Vue', 'Google Cloud Platform', 'Python', 'Node', 'Kubernetes'],
    img: '',
    company: 'Carto',
    url: '',
    description:
      'Framework for building geospatial applications on top of the CARTO platform',
    rd: false,
  },
    {
    title: 'Personal website',
    date: '2020',
    technologies: ['GitHub Pages', 'Vue', 'TypeScript'],
    img: '',
    company: 'Personal',
    url: 'https://vicentsanjaime.net',
    description: 'My personal website',
    rd: false,
  },
  {
    title: 'Mia tracking',
    date: '2019-2022',
    technologies: ['CARTO', 'Vue', 'AWS', 'Kafka', 'Java', 'PostGIS', 'Spring'],
    img: '',
    company: 'Prodevelop',
    url: '',
    description:
      'Web tool for tracking incidents and suppliers globally, developed with CARTO technology and hosted on AWS.',
    rd: false,
  },
  {
    title: 'Posidonia SPACE (Suite Posidonia)',
    date: '2015-2022',
    technologies: ['Java', 'GeoServer', 'jQuery', 'OpenLayers', 'Oracle', 'Bootstrap', 'Spring'],
    img: '',
    company: 'Prodevelop',
    url: 'https://www.prodevelop.es/puertos/posidonia/posidonia-space',
    description:
      'Port cartography web viewer included in the Posidonia suite that Prodevelop offers for port management. The solution comprises a spatial database (PostGIS, Oracle Spatial or SQL Server), a GeoServer map server and an OpenLayers client.',
    rd: false,
  },
  {
    title: 'Local SPACE (Local & Provincial governments)',
    date: '2018 - 2022',
    technologies: ['Java', 'GeoServer', 'jQuery', 'OpenLayers', 'PostgreSQL/PostGIS', 'Bootstrap', 'Spring'],
    img: '',
    company: 'Prodevelop',
    url: '',
    description: 'Municipal cartography web viewer based on Posidonia SPACE, designed for local governments to manage spatial data.',
    rd: false,
  },
  {
    title: 'sigAGROasesor',
    date: '2018',
    technologies: ['jQuery', 'Knockout', 'Java', 'Spring', 'OpenLayers'],
    img: '',
    company: 'Prodevelop',
    url: 'https://www.agroasesor.es',
    description: 'Development of an automated agricultural parcel classification tool based on Sentinel Hub imagery.',
    rd: false,
  },
  {
    title: 'Spatial data catalogue (ICV)',
    date: '2017',
    technologies: ['Vue', 'Webpack', 'GeoNetwork', 'Vuetify'],
    img: '',
    company: 'Prodevelop',
    url: 'http://www.icv.gva.es/auto/aplicaciones/icv_geocat',
    description:
      "Spatial data catalogue website of the Valencian SDI implemented for the Valencian Cartographic Institute (ICV). This web client was made with VueJs on the ICV's Geonetwork metadata server.",
    rd: false,
  },
  {
    title: 'APPS project (ITEA3) (Port of Rotterdam)',
    date: '2017-2018',
    technologies: ['CesiumJS', 'jQuery', 'CEP Drools', 'Kafka', 'Java', 'Machine Learning'],
    img: '',
    company: 'Prodevelop',
    url: 'https://itea3.org/project/apps.html',
    description:
      'European research project (ITEA3) to develop surveillance systems (IoT) in the maritime domain, consisting of radar and visual sensors. The final demo was held at the Port of Rotterdam.',
    rd: true,
  },
  {
    title: 'De casa al cole',
    date: '2015',
    technologies: ['CARTO', 'jQuery', 'Bootstrap'],
    img: '',
    company: 'Personal',
    url: 'http://decasaalcole.com',
    description:
      'A collaborative project to help families find schools ranked by travel time, with filters by school type (primary, special needs, secondary…). Built with Bootstrap, Leaflet and CARTO on the back end.',
    rd: false,
  },
  {
    title: 'Sea Care APP (European Space Agency APP Camp)',
    date: '2014',
    technologies: ['Android', 'OpenLayers', 'JavaScript'],
    img: '',
    company: 'Personal',
    url: 'https://youtu.be/vZ7eQl_TOJU',
    description:
      'Android app developed at the ESA Space App Camp (Noordwijk), designed to help report illegal fishing activities. Based on AIS data and Sentinel satellite imagery.',
    rd: false,
  },
  {
    title: 'Traycco',
    date: '2014',
    technologies: ['JavaScript', 'OpenLayers'],
    img: '',
    company: 'Prodevelop',
    url: '',
    description: 'Web map viewer displaying delivery areas for geomarketing analysis.',
    rd: false,
  },
  {
    title: 'APP IRENA (International Renewable Energy Agency)',
    date: '2014',
    technologies: ['Android', 'iOS', 'Windows Phone', 'BlackBerry', 'OpenLayers', 'CesiumJS', 'Apache Cordova'],
    img: '',
    company: 'Prodevelop',
    url: 'https://www.irena.org',
    description:
      'Android, iOS, Windows Phone and BlackBerry app for viewing environmental cartography via OGC standards. Developed with Apache Cordova, CesiumJS and OpenLayers.',
    rd: false,
  },
  {
    title: 'Geoportal of Morocco (MFPMA)',
    date: '2014',
    technologies: ['jQuery', 'OpenLayers', 'Java', 'Spring', 'Lucene', 'Knockout'],
    img: '',
    company: 'Prodevelop',
    url: 'http://maps.service-public.ma/mfpma/geo/front/',
    description:
      'Web geoportal of points of interest (POIs) across the entire territory of Morocco, built with OpenLayers, a custom vector tile engine and a Lucene-based search engine.',
    rd: false,
  },
  {
    title: 'SOSTRAT GIS (Port of Barcelona)',
    date: '2013',
    technologies: ['GeoServer', 'OpenLayers', 'Bootstrap'],
    img: '',
    company: 'Prodevelop',
    url: '',
    description: 'Web map viewer for the SOSTRAT port infrastructure management application.',
    rd: false,
  },
  {
    title: 'GeoStore',
    date: '2012',
    technologies: ['Drupal', 'OpenLayers'],
    img: '',
    company: 'Prodevelop',
    url: '',
    description: 'Platform for sharing and purchasing geospatial data online.',
    rd: true,
  },
  {
    title: 'LocalGIS (Provincial Deputation of Valencia)',
    date: '2011-2012',
    technologies: ['LocalGIS', 'Java', 'Ext JS', 'GeoExt', 'MapServer', 'PostGIS', 'ETL Pentaho', 'GeoNetwork'],
    img: '',
    company: 'Prodevelop',
    url: '',
    description:
      'Development and deployment of a GIS platform for local governments, installed in 80 municipalities across the Valencia region. The project included a new web geoportal built on GeoExt, a centralised cartographic repository (PostGIS) and WMS services to publish local maps (MapServer).',
    rd: false,
  },
  {
    title: 'Tourist Geoportal of the Valencian Community (AVT)',
    date: '2010',
    technologies: ['Google Maps API', 'jQuery', 'Java', 'Lucene', 'ETL Pentaho', 'Drupal'],
    img: '',
    company: 'Prodevelop',
    url: '',
    description:
      'Geoportal of tourist points of interest in the Valencian Community, built with the Google Maps JavaScript API, a custom vector tile engine and a Lucene-based search engine (Java).',
    rd: false,
  },
  {
    title: 'OSAMI (ITEA3)',
    date: '2010',
    technologies: ['JavaScript', 'OpenLayers', 'jQuery'],
    img: '',
    company: 'Prodevelop',
    url: 'https://itea3.org/project/osami-commons.html',
    description:
      'OSAMI-Commons aimed to establish open-source foundations for a dynamic, service-oriented platform capable of adapting across a wide range of co-operating software-intensive systems (SIS).',
    rd: true,
  },
  {
    title: 'Aventura Oceanica',
    date: '2009',
    technologies: ['OpenLayers', 'PostGIS', 'JavaScript'],
    img: '',
    company: 'Prodevelop',
    url: 'http://aventuraoceanica.es/',
    description: '',
    rd: false,
  },
  {
    title: 'gvSIG',
    date: '2008-2010',
    technologies: ['Java'],
    img: '',
    company: 'Prodevelop',
    url: 'http://www.gvsig.com/es',
    description: 'Development of extensions for gvSIG 1.x and gvSIG 2.x: Geocoding, Oracle Connector (2.x), Phone Cache and GeoResources.',
    rd: false,
  },
];
