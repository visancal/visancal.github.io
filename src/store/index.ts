import Vue from "vue";
import Vuex from "vuex";

import venues from "./venues.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentTab: 'home',
    employment:[
      {
        id:1,
        center: 'Prodevelop',
        url: 'https://www.prodevelop.es',        
        img: require('../assets/employment/prodevelop.webp'),
        title: 'GIS analyst, developer and product manager',
        date: 'Nov 2006 - Present',
        location: 'Valencia',
        tasks:[
          'Product manager of SPACE (Posidonia Suite)',
          'GIS consultant',
          'Frontend  and backend developer (VueJs)(Java)',
          'Managing spatial database (PostgreSQL / PostGIS, Oracle Spatial, SQL Server)',
          'Map servers (MapServer, Geoserver)',
          'DevOps tasks (Jenkins, Docker, Bash)',
          'Cartographic editor (QGis, gvSIG, ArcMap, AutoCAD)',
          'User training'
        ]
      },
      {
        id: 2,
        center: 'SENER',
        url: 'https://www.group.sener/es',
        img: require('../assets/employment/sener.webp'),
        date: 'Jun 2005 - May 2006',
        title: 'GIS technician',
        location: 'Valencia',
        tasks:[
          'Cartographic editor  (ArcMap-ESRI)',
          'Photogrammetric studies',
          'Hydraulic studies (HEC-GeoRAS)'
        ]
      },
      {
        id: 3,
        center: 'CIDE (CSIG, UV, GV)',
        url: 'https://www.group.sener/es',
        img: require('../assets/employment/cide.webp'),
        date: '2002 - 2004',
        title: 'GIS technician',
        location: 'Albal',
        tasks:[
          'Cartographic revision of land uses of LICS (Natural parks) in the Valencian region'
        ]
      }
    ],
    education:[
      {
      center: 'Polytechnic University of Valencia',
        url: 'http://www.upv.es/',
        img: 'https://raphacasgi.files.wordpress.com/2013/09/a010.jpg',
        date: '2002 - 2007',
        title: 'Geodesy and Cartography Engineer',
        location: 'Valencia',
        icon:require('../assets/education/upv.webp'),
        subtitle:
          'Proficient at Remote Sensing and GIS'
      },
      {
        center: 'University of Valencia',
        url: 'http://www.uv.es/',
        img: 'https://www.uv.es/recursos/fatwirepub/ccurl/929/546/SPOT_PRIN_01.jpg',
        date: '1998 - 2002',
        title: 'Graduate in Geography',
        location: 'Valencia',
        icon:require('../assets/education/uv.webp'),
        subtitle: 'Proficient at physical geography'
      }
    ],
    skills:[
      {color:'red darken-1',techs:['Front-end development','Javascript','HTML5','CSS','Vue','Typescript']},
      {color:'pink darken-1',techs:['GIS Analysis','Cartography','Geodesy','Geomatics','QGIS','gvSIG','ArcGis Desktop','CARTO']},
      {color:'purple darken-1',techs:['Geoserver','MapServer','MapProxy','Tilecache','Geonetwork']},
      {color:'deep-purple darken-1',techs:['CAD','AutoCAD','Microstation']},
      {color:'indigo darken-1',techs:['Oracle Spatial','PostgreSQL / PostGIS','SQL Server','SQL']},
      {color:'blue darken-1',techs:['DevOps','Jenkins','Docker','AWS','Linux','Bash']},
      {color:'light-blue darken-1',techs:['Java','GeoTools','Spring']},
      {color:'cyan darken-1',techs:['Kafka']},
      {color:'teal darken-1',techs:['Scrum','Jira','Confluence']}
  ],
    projects:[
      {
        title:'Personal website',
        date: '2020',
        technologies:['Github Pages','Vue','Vuetify','Webpack','Deck.gl','Typescript'],
        img: '',
        company:'Personal',
        url: '',
        description:'My personal website',
        rd: false
      },
      {
        title:'Mia tracking',
        date: '2019-Present',
        technologies:['CARTO','Vue','AWS','Kafka','Java','PostGIS','Spring'],
        img: '',
        company:'Prodevelop',
        url: '',
        description:'Web tool for tracking incidents and suppliers globally. It has been developed with CARTO technology and it is hosted in AWS',
        rd: false
      },
      {
        title:'Posidonia SPACE (Suite Posidonia)',
        date: '2015-Present',
        technologies:['Java','Geoserver','JQuery','OpenLayers','Oracle','Bootstrap','Spring'],
        img: '',
        company:'Prodevelop',
        url: 'https://www.prodevelop.es/puertos/posidonia/posidonia-space',
        description:'Port cartography web viewer. It\'s included in the Posidonia component  suite that Prodevelop commercialises for ports management. This solution includes a spatial database (PostGIS, Oracle Spatial or SQL Server), a Geoserver map server and a client made with OpenLayers.',
        rd: false
      },
      {
        title:'Local SPACE (Local & Provincial governments)',
        date: '2018 - Present',
        technologies:['Java','Geoserver','JQuery','OpenLayers','PostgreSQL/PostGIS','Bootstrap','Spring'],
        img: '',
        company:'Prodevelop',
        url: '',
        description:'Municipal cartography web viewer based on Posidonia SPACE and offered for municipal management of spatial data',
        rd: false
      },
      {
        title:'sigAGROasesor',
        date: '2018',
        technologies:['JQuery','Knockout','Java','Spring','OpenLayers'],
        img: '',
        company:'Prodevelop',
        url: 'https://www.agroasesor.es',
        description:'Development of an automatic agricultural parcel classification tool based on Sentinel Hub images',
        rd: false
      },
      {
        title:'Spatial data catalogue (ICV)',
        date: '2017',
        technologies:['Vue','Webpack','Geonetwork','Vuetify'],
        img: '',
        company:'Prodevelop',
        url: 'http://www.icv.gva.es/auto/aplicaciones/icv_geocat',
        description:'Spatial data catalogue website of the Valencian SDI (Spatial Data Infraestructure) implemented for the Valencian Cartographic Institute (ICV). This web client was made with VueJs on the ICV\'s Geonetwork metadata server.',
        rd: false
      },
      {
        title:'APPS project (ITEA3)  (Port of Rotterdam):',
        date: '2017-2018',
        technologies:['CesiumJs','JQuery','CEP Drools','Kafka','Java','Machine Learning'],
        img: '',
        company:'Prodevelop',
        url: 'https://itea3.org/project/apps.html',
        description:'European research project ITEA3 to develop a surveillance systems (IOT) in the maritime domain consist of radar and visual sensors.The demo was held in the port of Rotterdam.',
        rd: true
      },
      {
        title:'De casa al cole',
        date: '2015',
        technologies:['CARTO','JQuery','Bootstrap'],
        img: '',
        company:'Personal',
        url: 'http://decasaalcole.com',
        description:'Project carried out with a group of friends with GEO knowledge to obtain the list of schools, ordered by travel time and filtering by type of training (primary, special, secondary...). This website is based on Bootstrap and Leaflet, and CARTO in the server side',
        rd: false
      },
      {
        title:'Sea Care APP (European Space Agency APP Camp)',
        date: '2014',
        technologies:['Android','OpenLayers','Javascript'],
        img: '',
        company:'Personal',
        url: 'https://youtu.be/vZ7eQl_TOJU',
        description:'Android APP developed in ESA Space APP Camp (Noordwijk), which is intended to aid in the reporting of illegal fishing . Based on AIS data and Sentinel images. ',
        rd: false
      },
      {
        title:'Traycco',
        date: '2014',
        technologies:['Javascript','OpenLayers'],
        img: '',
        company:'Prodevelop',
        url: '',
        description:'Map web viwer to show delivery areas (Geomarketing)',
        rd: false
      },
      {
        title:'APP IRENA (International Renewable Energy Agency)',
        date: '2014',
        technologies:['Android','iOS','Windows Phone','Backberry','OpenLayers','CesiumJs','Apache Cordova'],
        img: '',
        company:'Prodevelop',
        url: 'https://www.irena.org',
        description:'Android, IOS, Windows Phone and Blackberry APP to show environment cartography (OGC). This APP was developed with Apache Cordova, CesiumJS and OpenLayers.',
        rd: false
      },
      {
        title:'Geoportal of Morocco (MFPMA)',
        date: '2014',
        technologies:['JQuery','OpenLayers','Java','Spring','Lucene','Knockout'],
        img: '',
        company:'Prodevelop',
        url: 'http://maps.service-public.ma/mfpma/geo/front/',
        description:'Web geoportal of POIs of the whole territory of Morocco, created with OpenLayers, our own vector tile technology and a search engine based on Lucene. ',
        rd: false
      },
      {
        title:'SOSTRAT GIS (Port of Barcelona)',
        date: '2013',
        technologies:['Geoserver','OpenLayers','Bootstrap'],
        img: '',
        company:'Prodevelop',
        url: '',
        description:'Web map viewer to the SOSTRAT application',
        rd: false
      },
      {
        title:'GeoStore',
        date: '2012',
        technologies:['Drupal','OpenLayers'],
        img: '',
        company:'Prodevelop',
        url: '',
        description:'Project to create a web site to share and buy geospatial information',
        rd: true
      },
      {
        title:'LocalGIS (Provincial Deputation of Valencia)',
        date: '2011-2012',
        technologies:['LocalGIS','Java','ExtJs','GeoExt','MapServer','PostGIS','ETL Pentaho','Geonetwork'],
        img: '',
        company:'Prodevelop',
        url: '',
        description:'Development and installation of  a GIS tool to local administrations. It was installed in 80 municipalities of the region of Valencia. In this project, we created a new web geoportal based on GeoExt framework, a unique repository of cartography (PostGIS) and new web map services to publish the local maps (MapServer)',
        rd: false
      },
      {
        title:'Tourist Geoportal of the Valencian Community (AVT)',
        date: '2010',
        technologies:['Google Maps API','JQuery','Java','Lucene','ETL Pentaho','Drupal'],
        img: '',
        company:'Prodevelop',
        url: '',
        description:'Geoportal of tourist points of interest in the Valencian Community. This Web application was developed with the Google Maps Javascript API, our own vector tile technology and a search engine based on Lucene (Java).',
        rd: false
      },
      {
        title:'OSAMI (ITEA3)',
        date: '2010',
        technologies:['Javascript','OpenLayers','JQuery'],
        img: '',
        company:'Prodevelop',
        url: 'https://itea3.org/project/osami-commons.html',
        description:'OSAMI-Commons targets open-source common foundations for a dynamic service-oriented platform which is able to personalise itself in large diversity of co-operating software-intensive systems (SISs). The project makes easy the transversal connection between vertical markets to allow for new business solutions taking advantage of cross synergies.',
        rd: true
      },
      {
        title:'Aventura Oceanica',
        date: '2009',
        technologies:['OpenLayers','PostGIS','Javascript'],
        img: '',
        company:'Prodevelop',
        url: 'http://aventuraoceanica.es/',
        description:'',
        rd: false
      },
      {
        title:'gvSIG',
        date: '2008-2010',
        technologies:['Java'],
        img: '',
        company:'Prodevelop',
        url: 'http://www.gvsig.com/es',
        description:'Development of extensions for gvSIG 1.x y gvSIG 2.x: Geocoding, Connector Oracle (2.x), Phone Cache and Georesources',
        rd: false
      }
      
    ],
    venues
  },
  getters:{
    currentTab: state => state.currentTab,
    educationInfo: state => state.education,
    employmentInfo: state => state.employment ,
    venues: state => state.venues,
    skills: state => state.skills,
    projects: state => state.projects   
  },
  mutations: {
    changeCurrentTab (state, tab) {
      state.currentTab = tab;
    }
  },
  actions: {},
  modules: {}
});
