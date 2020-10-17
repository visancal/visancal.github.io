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
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc-e2WFiNuD4e_IHhOqWeFgSkabStU-yNH4w&usqp=CAU',
        title: 'GIS analyst, developer and product manager',
        date: 'Nov 2006 - Present',
        location: 'Valencia',
        tasks:[
          'Product manager of SPACE (Posidonia Suite)',
          'GIS consultant',
          'Frontend  and backend developer (VueJs)(Java)',
          'Managing spatial database (PostgreSQl / PostGIS, Oracle Spatial, SQL Server)',
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
        img: 'https://www.group.sener/img_sener/logo.png',
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
        img: 'https://www.uv.es/recursos/fatwirepub/ccurl/254/133/imagen%20redimensionada_Novedad%20web%20CIDE_Memoria%20Anual%20CIDE%202019.jpg',
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
      id:100,
      center: 'Polytechnic University of Valencia',
        url: 'http://www.upv.es/',
        img: 'https://raphacasgi.files.wordpress.com/2013/09/a010.jpg',
        date: '2002 - 2007',
        title: 'Geodesy and Cartography Engineer',
        location: 'Valencia',
        subtitle:
          'Expert in GIS and Remote Sensing'
        },
        {
          id: 101,
          center: 'University of Valencia',
            url: 'http://www.uv.es/',
            img: 'https://www.uv.es/recursos/fatwirepub/ccurl/929/546/SPOT_PRIN_01.jpg',
            date: '1998 - 2002',
            title: 'Graduate in Geography',
            location: 'Valencia',
            subtitle:
              'Expert in physical geography'
            }
    ],
    projects:[
      
    ],
    venues
  },
  getters:{
    currentTab: state => state.currentTab,
    educationInfo: state => state.education,
    employmentInfo: state => state.employment ,
    venues: state => state.venues  
  },
  mutations: {
    changeCurrentTab (state, tab) {
      state.currentTab = tab;
    }
  },
  actions: {},
  modules: {}
});
