(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-191982d0"],{"0745":function(t,e,a){"use strict";var s=a("cc4b"),i=a.n(s);i.a},"269a":function(t,e){t.exports=function(t,e){var a="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var s in"function"===typeof t.exports&&(a.directives=t.exports.options.directives),a.directives=a.directives||{},e)a.directives[s]=a.directives[s]||e[s]}},"3e38":function(t,e,a){"use strict";e["a"]={data:function(){return{topScroll:0}},methods:{onScroll:function(t){this.topScroll=t.target.scrollTop}},computed:{isOver:function(){return!(this.topScroll<5)}}}},"47b1":function(t,e,a){"use strict";var s=a("ba31"),i=a.n(s);i.a},"52bd":function(t,e,a){},"55be":function(t,e,a){"use strict";var s=a("8073"),i=a.n(s);i.a},"5aa1":function(t,e,a){t.exports=a.p+"img/back2.73c69442.webp"},"686a":function(t,e,a){},"71e8":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-carousel",{staticClass:"vs_banner_images",class:{vs_banner_images_over:t.over},attrs:{cycle:"",continuous:"","hide-delimiters":"",height:t.carouselHeight,"show-arrows":!1,interval:t.interval}},t._l(t.images,(function(t,e){return a("v-carousel-item",{key:e,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)},i=[],n=(a("a9e3"),a("d4ec")),r=a("262e"),o=a("2caf"),c=a("9ab4"),l=a("60a3"),u=function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return a}(l["b"]);u=Object(c["a"])([Object(l["a"])({data:function(){return{}},props:{images:Array,interval:Number,over:Boolean},computed:{carouselHeight:function(){return window.innerWidth<600?50:140}}})],u);var v=u,p=v,d=(a("55be"),a("2877")),h=a("6544"),f=a.n(h),b=a("5e66"),m=a("3e35"),_=Object(d["a"])(p,s,i,!1,null,"0a4c8607",null);e["a"]=_.exports;f()(_,{VCarousel:b["a"],VCarouselItem:m["a"]})},8073:function(t,e,a){},"8adc":function(t,e,a){},b48a:function(t,e,a){t.exports=a.p+"img/back1.b05bc5d7.webp"},ba31:function(t,e,a){},be01:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vs_background pb-5"},[a("section",[a("BannerImages",{attrs:{images:t.images,interval:1e4,over:t.isOver}})],1),a("section",{staticClass:"vs_bio_info",class:{vs_bio_info_mobile:t.isMobile},attrs:{id:"vs_bio_info"}},[a("v-container",{directives:[{name:"scroll",rawName:"v-scroll:#vs_bio_info",value:t.onScroll,expression:"onScroll",arg:"#vs_bio_info"}]},[a("SectionBackground",{attrs:{title:"Bio"}},[a("div",{staticClass:"vs_bio mx-5"},[t._v(" Developer of geospatial applications, "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Geographic_information_system"}},[t._v("GIS")]),t._v(" consultant and technical product manager of "),a("a",{attrs:{href:"https://www.prodevelop.es/puertos/posidonia/posidonia-space"}},[t._v("Posidonia SPACE")]),t._v(" and "),a("a",{attrs:{href:"https://www.prodevelop.es/global/geo/local-space"}},[t._v("Local SPACE")]),t._v(" at "),a("a",{attrs:{href:"https://www.prodevelop.es/en/"}},[t._v("Prodevelop")]),t._v(". I love the front-end development, I usually work with "),a("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue")]),t._v(" and web mapping libraries such as "),a("a",{ref:"https://openlayers.org/"},[t._v("OpenLayers")]),t._v(", "),a("a",{ref:"https://leafletjs.com/"},[t._v("Leaflet")]),t._v(", "),a("a",{ref:"https://developers.google.com/maps/documentation/javascript/overview"},[t._v("Google Maps API")]),t._v(", "),a("a",{ref:"https://deck.gl"},[t._v("Deck.gl")]),t._v(", "),a("a",{ref:"https://carto.com/"},[t._v("CARTO")]),t._v("... I also have a extensive experience with the installation and management of server components as spatial databases and map servers. I have worked in a big amount of GIS projects, always integrating different technologies and components, the majority of them have been "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Open-source_model"}},[t._v("Open-source")]),t._v(". ")]),a("div",{staticClass:"vs_bio mx-5 mt-3"},[t._v(" I enjoy working on projects with a high spatial component because I can use my background related with cartography, geography and geodesy, applied to development of spatial solutions. I consider myself an adaptable, helpful and approachable team player. I also have a keen interest in new technologies. ")]),a("div",{staticClass:"vs_bio mt-4 mx-5"},[a("p",[t._v("Among my technical skill set I would highlight:")]),a("ul",{staticClass:"vs_list_skills"},t._l(t.skills,(function(e,s){return a("li",{key:s},t._l(e.techs,(function(s,i){return a("v-chip",{key:i,staticClass:"ma-2 vs_skill",attrs:{small:"",color:e.color+"  white--text",label:""}},[a("v-icon",{attrs:{small:"",left:""}},[t._v(" mdi-label ")]),t._v(" "+t._s(s))],1)})),1)})),0)])]),a("SectionBackground",{attrs:{title:"Education"}},[a("v-row",{class:{"mx-0 ":t.$vuetify.breakpoint.smAndDown,"mx-2 ":t.$vuetify.breakpoint.mdAndUp}},t._l(t.educationInfo,(function(t){return a("EducationCard",{key:t.id,attrs:{info:t}})})),1)],1),a("SectionBackground",{attrs:{title:"Employment history"}},[a("v-row",{class:{"mx-0 ":t.$vuetify.breakpoint.smAndDown,"mx-2 ":t.$vuetify.breakpoint.mdAndUp}},t._l(t.employmentInfo,(function(t){return a("EmploymentCard",{key:t.id,attrs:{info:t}})})),1)],1),a("SectionBackground",{attrs:{title:"Languages"}},[a("v-row",{staticClass:"mx-5 mt-2 vs_progress_title"},[t._v(" Spanish ")]),a("v-row",{staticClass:"mx-5 mt-2 vs_progress"},[a("v-progress-linear",{staticClass:"white--text",attrs:{rounded:"",value:"100",height:"20",color:"#b21b57"}},[[t._v(" Native ")]],2)],1),a("v-row",{staticClass:"mx-5 mt-3 vs_progress_title"},[t._v(" English ")]),a("v-row",{staticClass:"mx-5 mt-2 vs_progress"},[a("v-progress-linear",{staticClass:"white--text",attrs:{rounded:"",value:"70",height:"20",color:"#b21b57"}},[[t._v(" Upper-Intermediate ")]],2)],1),a("v-row",{staticClass:"mx-5 mt-3 vs_progress_title"},[t._v(" Catalan ")]),a("v-row",{staticClass:"mx-5 mt-2 vs_progress"},[a("v-progress-linear",{staticClass:"white--text",attrs:{rounded:"",value:"100",height:"20",color:"#b21b57"}},[[t._v(" Native ")]],2)],1)],1),a("div",{staticClass:"vs_back_footer"})],1)],1)])},i=[],n=(a("b0c0"),a("d4ec")),r=a("262e"),o=a("2caf"),c=a("9ab4"),l=a("60a3"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"vs_section mt-3",class:{"px-1":t.$vuetify.breakpoint.smAndDown,"px-3":t.$vuetify.breakpoint.mdAndUp}},[a("v-col",{class:{"mx-0":t.$vuetify.breakpoint.smAndDown,"px-0":t.$vuetify.breakpoint.smAndDown},attrs:{cols:"12",xs:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[a("p",{staticClass:"vs_section_title mx-3"},[t._v(t._s(t.title))]),t._t("default")],2)],1)},v=[],p=function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return a}(l["b"]);p=Object(c["a"])([Object(l["a"])({data:function(){return{}},props:{title:String},methods:{},computed:{}})],p);var d=p,h=d,f=(a("0745"),a("2877")),b=a("6544"),m=a.n(b),_=a("62ad"),g=a("0fd9"),C=Object(f["a"])(h,u,v,!1,null,"791a971c",null),x=C.exports;m()(C,{VCol:_["a"],VRow:g["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"text-center",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"4"}},[a("v-card",{staticClass:"elevation-1"},[a("v-img",{attrs:{eager:"",src:t.info.img,height:"120px","aspect-ratio":"1.0"}}),a("v-card-title",{staticClass:"card_title"},[t._v(t._s(t.info.title))]),a("v-card-subtitle",{staticClass:"text-left card_subtitle"},[t._v(t._s(t.info.subtitle)+" ")]),a("v-card-text",{staticClass:"text-left center_title"},[a("div",[a("a",{attrs:{rel:"noopener noreferrer",href:t.info.url,target:"_blank"}},[t._v(t._s(t.info.center))])]),a("div",{staticClass:"mt-1"},[a("v-chip",{staticClass:"white--text vs_edu_date",attrs:{small:"",chip:"",label:"",color:"#1b237b"}},[a("v-icon",{staticClass:"white--text",attrs:{small:"",left:""}},[t._v(" mdi-calendar-month ")]),t._v(t._s(t.info.date))],1)],1),a("img",{staticClass:"vs_edu_icon",attrs:{src:t.info.icon,alt:"UPV"}})])],1)],1)},k=[],y=function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return a}(l["b"]);y=Object(c["a"])([Object(l["a"])({props:{info:{type:Object,required:!0}}})],y);var O=y,j=O,I=(a("e2cf"),a("b0af")),$=a("99d9"),V=a("cc20"),S=a("132d"),B=a("adda"),E=Object(f["a"])(j,w,k,!1,null,"3f67ba12",null),A=E.exports;m()(E,{VCard:I["a"],VCardSubtitle:$["b"],VCardText:$["c"],VCardTitle:$["d"],VChip:V["a"],VCol:_["a"],VIcon:S["a"],VImg:B["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"text-center",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6",xl:"4"}},[a("v-card",{staticClass:"elevation-1"},[a("v-img",{staticClass:"mt-3",attrs:{eager:"",src:t.info.img,height:"100px","aspect-ratio":"1.5"}}),a("v-card-title",{staticClass:"card_title"},[t._v(t._s(t.info.title))]),a("v-card-subtitle",{staticClass:"text-left center_title"},[a("div",[a("a",{attrs:{rel:"noopener noreferrer",href:t.info.url,target:"_blank"}},[t._v(t._s(t.info.center))])])]),a("v-card-text",{staticClass:"text-left"},[a("v-chip",{staticClass:"white--text",attrs:{small:"",chip:"",label:"",color:"#1b237b"}},[a("v-icon",{staticClass:"white--text",attrs:{small:"",left:""}},[t._v(" mdi-calendar-month ")]),t._v(t._s(t.info.date))],1)],1),a("v-card-text",{staticClass:"text-left"},[a("ul",t._l(t.info.tasks,(function(e,s){return a("li",{key:s,staticClass:"body-1"},[t._v(t._s(e))])})),0)])],1)],1)},P=[],D=function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return a}(l["b"]);D=Object(c["a"])([Object(l["a"])({props:{info:{type:Object,required:!0}}})],D);var T=D,L=T,U=(a("47b1"),Object(f["a"])(L,G,P,!1,null,"df5f26d0",null)),N=U.exports;m()(U,{VCard:I["a"],VCardSubtitle:$["b"],VCardText:$["c"],VCardTitle:$["d"],VChip:V["a"],VCol:_["a"],VIcon:S["a"],VImg:B["a"]});var R=a("71e8"),q=a("3e38"),z=a("8753");R["a"];var F=function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return a}(l["b"]);F=Object(c["a"])([Object(l["a"])({components:{EducationCard:A,EmploymentCard:N,SectionBackground:x,BannerImages:R["a"]},mixins:[q["a"],z["a"]],data:function(){return{images:[{src:a("dac2")},{src:a("b48a")},{src:a("5aa1")}]}},computed:{educationInfo:function(){return this.$store.getters.educationInfo},employmentInfo:function(){return this.$store.getters.employmentInfo},skills:function(){return this.$store.getters.skills}},created:function(){this.$store.commit("changeCurrentTab",this.$route.name)}})],F);var H=F,J=H,M=(a("c36a"),a("a523")),W=a("8e36"),K=a("269a"),Q=a.n(K),X=a("f977"),Y=Object(f["a"])(J,s,i,!1,null,"426d935c",null);e["default"]=Y.exports;m()(Y,{VChip:V["a"],VContainer:M["a"],VIcon:S["a"],VProgressLinear:W["a"],VRow:g["a"]}),Q()(Y,{Scroll:X["b"]})},c36a:function(t,e,a){"use strict";var s=a("686a"),i=a.n(s);i.a},cc20:function(t,e,a){"use strict";a("4de4"),a("4160");var s=a("3835"),i=a("5530"),n=(a("8adc"),a("58df")),r=a("0789"),o=a("9d26"),c=a("a9ad"),l=a("4e82"),u=a("7560"),v=a("f2e7"),p=a("1c87"),d=a("af2b"),h=a("d9bd");e["a"]=Object(n["a"])(c["a"],d["a"],p["a"],u["a"],Object(l["a"])("chipGroup"),Object(v["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({"v-chip":!0},p["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(p["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(s["a"])(e,2),i=a[0],n=a[1];t.$attrs.hasOwnProperty(i)&&Object(h["a"])(i,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(r["b"],t)},genClose:function(){var t=this;return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),s=a.tag,n=a.data;n.attrs=Object(i["a"])(Object(i["a"])({},n.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var r=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(r,n),e)}})},cc4b:function(t,e,a){},dac2:function(t,e,a){t.exports=a.p+"img/back5.fdb10455.webp"},e2cf:function(t,e,a){"use strict";var s=a("52bd"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-191982d0.188d4243.js.map