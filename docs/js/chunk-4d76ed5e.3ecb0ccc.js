(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d76ed5e"],{"0160":function(t,e,i){},"1be5":function(t,e,i){t.exports=i.p+"img/back6.f0ffbcee.webp"},2862:function(t,e,i){},"5cf4":function(t,e,i){"use strict";var s=i("6bee"),a=i.n(s);a.a},"5fb1":function(t,e,i){"use strict";var s=i("d24f"),a=i.n(s);a.a},"6bee":function(t,e,i){},"71e8":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-carousel",{staticClass:"vs_banner_images",attrs:{cycle:"",continuous:"","hide-delimiters":"",height:t.carouselHeight,"show-arrows":!1,interval:t.interval}},t._l(t.images,(function(t,e){return i("v-carousel-item",{key:e,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)},a=[],n=(i("a9e3"),i("d4ec")),o=i("262e"),r=i("2caf"),c=i("9ab4"),l=i("60a3"),h=function(t){Object(o["a"])(i,t);var e=Object(r["a"])(i);function i(){return Object(n["a"])(this,i),e.apply(this,arguments)}return i}(l["b"]);h=Object(c["a"])([Object(l["a"])({data:function(){return{}},props:{images:Array,interval:Number},computed:{carouselHeight:function(){return window.innerWidth<600?110:220}}})],h);var u=h,d=u,p=(i("5fb1"),i("2877")),v=i("6544"),m=i.n(v),f=i("5e66"),b=i("3e35"),_=Object(p["a"])(d,s,a,!1,null,"29abd9e6",null);e["a"]=_.exports;m()(_,{VCarousel:f["a"],VCarouselItem:b["a"]})},"8adc":function(t,e,i){},"8ed1":function(t,e,i){"use strict";var s=i("a026"),a=i.n(s);a.a},a026:function(t,e,i){},acca:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vs_projects pb-5"},[i("section",[i("Header"),i("BannerImages",{attrs:{images:t.images,interval:1e4}})],1),i("section",{staticClass:"vs_timeline_info",class:{vs_timeline_info_mobile:t.isMobile}},[i("v-container",[i("v-row",{class:{"ma-1":t.$vuetify.breakpoint.smAndDown,"ma-2":t.$vuetify.breakpoint.mdAndUp}},[i("span",{staticClass:"vs_proj_title"},[t._v("Projects")]),i("p",{staticClass:"mx-2"},[t._v(" Since I started my professional career I have had the opportunity to work in a bunch of different GIS projects with differents technologies. On the timeline below shows the main projects in which I have participated and the technologies used. This list also includes some personal and R&D projects. ")])]),i("v-row",{attrs:{justify:"center"}},[i("v-timeline",{staticClass:"vs_timeline",attrs:{dense:t.isMobile}},t._l(t.projects,(function(e,s){return i("v-timeline-item",{key:s,staticClass:"vs_timeline_item mx-2",attrs:{small:"",color:"#b21b57"},scopedSlots:t._u([{key:"opposite",fn:function(){return[i("v-row",{attrs:{justify:t.startEnd(s)}},[i("v-chip",{staticClass:"white--text",attrs:{small:"",chip:"",label:"",color:"#1b237b"}},[i("v-icon",{staticClass:"white--text",attrs:{small:"",left:""}},[t._v(" mdi-calendar-month ")]),t._v(t._s(e.date))],1)],1),i("v-row",{attrs:{justify:t.startEnd(s)}},[i("v-chip",{staticClass:"white--text mt-1",attrs:{small:"",chip:"",label:"",color:t.isPersonal(e.company)}},[t._v(t._s(e.company))])],1),e.rd?i("v-row",{attrs:{justify:t.startEnd(s)}},[i("v-chip",{staticClass:"white--text mt-1",attrs:{small:"",chip:"",label:"",color:"#EF6C00"}},[t._v("R&D")])],1):t._e()]},proxy:!0}],null,!0)},[i("TimelineCard",{attrs:{project:e}})],1)})),1)],1)],1)],1),i("Footer")],1)},a=[],n=(i("b0c0"),i("d4ec")),o=i("262e"),r=i("2caf"),c=i("9ab4"),l=i("60a3"),h=i("0418"),u=i("fd2d"),d=i("71e8"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"elevation-1 px-3"},[i("v-card-text",[i("v-row",{staticClass:"vs_project_title mb-3"},[t._v(t._s(t.project.title)+" ")]),i("v-row",{staticClass:"mt-2 vs_project_description"},[t._v(" "+t._s(t.project.description)+" ")]),i("v-row",{staticClass:"mt-2 vs_project_url mb-2 mr-1"},[i("a",{staticClass:"vs_project_url",attrs:{target:"_blank",href:t.project.url}},[t._v(t._s(t.project.url))])]),t.isMobile?i("v-row",[i("v-chip",{staticClass:"white--text mt-1",attrs:{small:"",chip:"",label:"",color:"#1b237b"}},[i("v-icon",{staticClass:"white--text",attrs:{small:"",left:""}},[t._v(" mdi-calendar-month ")]),t._v(t._s(t.project.date))],1),i("v-chip",{staticClass:"white--text ml-1 mt-1",attrs:{small:"",chip:"",label:"",color:t.isPersonal(t.project.company)}},[t._v(t._s(t.project.company))]),t.project.rd?i("v-chip",{staticClass:"white--text ml-1 mt-1",attrs:{small:"",chip:"",label:"",color:"#EF6C00"}},[t._v("R&D")]):t._e()],1):t._e(),i("v-row",{staticClass:"mt-2 vs_project_technologies"},t._l(t.project.technologies,(function(e,s){return i("v-chip",{key:s,staticClass:"vs_tech ml-1 mt-1",attrs:{small:"",color:"purple darken-1 white--text",label:"",outlined:""}},[t._v(" "+t._s(e))])})),1)],1)],1)},v=[],m=function(t){Object(o["a"])(i,t);var e=Object(r["a"])(i);function i(){return Object(n["a"])(this,i),e.apply(this,arguments)}return i}(l["b"]);m=Object(c["a"])([Object(l["a"])({data:function(){return{}},props:{project:Object},methods:{isPersonal:function(t){return"Personal"===t?"#0277BD":"#b21b57"}},computed:{isMobile:function(){return window.innerWidth<600}}})],m);var f=m,b=f,_=(i("5cf4"),i("2877")),g=i("6544"),C=i.n(g),j=i("b0af"),w=i("99d9"),k=i("cc20"),O=i("132d"),x=i("0fd9"),y=Object(_["a"])(b,p,v,!1,null,"e5bf07e6",null),$=y.exports;C()(y,{VCard:j["a"],VCardText:w["c"],VChip:k["a"],VIcon:O["a"],VRow:x["a"]});var B=function(t){Object(o["a"])(i,t);var e=Object(r["a"])(i);function i(){return Object(n["a"])(this,i),e.apply(this,arguments)}return i}(l["b"]);B=Object(c["a"])([Object(l["a"])({components:{Header:h["a"],Footer:u["a"],BannerImages:d["a"],TimelineCard:$},data:function(){return{images:[{src:i("dac2")},{src:i("1be5")}]}},computed:{projects:function(){return this.$store.getters.projects},isMobile:function(){return window.innerWidth<600}},methods:{startEnd:function(t){return t%2===1?"start":"end"},isPersonal:function(t){return"Personal"===t?"#0277BD":"#b21b57"}},created:function(){this.$store.commit("changeCurrentTab",this.$route.name)}})],B);var I=B,E=I,V=(i("8ed1"),i("a523")),D=i("5530"),T=(i("0160"),i("58df")),S=i("7560"),G=Object(T["a"])(S["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(D["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),P=(i("c96a"),i("9d26")),R=i("a9ad"),F=Object(T["a"])(R["a"],S["a"]),L=F.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(P["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object(D["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object(D["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},e)}}),M=Object(_["a"])(E,s,a,!1,null,"62b17fdc",null);e["default"]=M.exports;C()(M,{VChip:k["a"],VContainer:V["a"],VIcon:O["a"],VRow:x["a"],VTimeline:G,VTimelineItem:L})},cc20:function(t,e,i){"use strict";i("4de4"),i("4160");var s=i("3835"),a=i("5530"),n=(i("8adc"),i("58df")),o=i("0789"),r=i("9d26"),c=i("a9ad"),l=i("4e82"),h=i("7560"),u=i("f2e7"),d=i("1c87"),p=i("af2b"),v=i("d9bd");e["a"]=Object(n["a"])(c["a"],p["a"],d["a"],h["a"],Object(l["a"])("chipGroup"),Object(u["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({"v-chip":!0},d["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(s["a"])(e,2),a=i[0],n=i[1];t.$attrs.hasOwnProperty(a)&&Object(v["a"])(a,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(r["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o["a"],t)},genClose:function(){var t=this;return this.$createElement(r["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),s=i.tag,n=i.data;n.attrs=Object(a["a"])(Object(a["a"])({},n.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var o=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(o,n),e)}})},d24f:function(t,e,i){},dac2:function(t,e,i){t.exports=i.p+"img/back5.fdb10455.webp"},f8dd:function(t,e,i){"use strict";var s=i("2862"),a=i.n(s);a.a},fd2d:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{staticClass:"vs_footer"},[i("v-container",{staticClass:"mt-0 pt-0"},[i("v-row",{staticClass:"mt-0 pt-0"},[i("v-col",{staticClass:"mt-0 pt-0 vs_footer_start",attrs:{"align-content":"start"}}),i("v-col",{staticClass:"mt-0 pt-0 text-center",attrs:{"align-content":"center"}},[i("v-btn",{staticClass:"mr-5 elevation-0",attrs:{"aria-label":"Twitter",icon:"","x-small":"",color:"pink darken-3"},on:{click:t.goTwitter}},[i("v-icon",[t._v(" mdi-twitter ")])],1),i("v-btn",{staticClass:"mr-5 elevation-0",attrs:{"aria-label":"Instagram",icon:"","x-small":"",color:"pink darken-3"},on:{click:t.goInstagram}},[i("v-icon",[t._v(" mdi-instagram ")])],1),i("v-btn",{staticClass:"mr-5 elevation-0",attrs:{"aria-label":"Linkedin",icon:"","x-small":"",color:"pink darken-3"},on:{click:t.goLinkedin}},[i("v-icon",[t._v(" mdi-linkedin ")])],1),i("v-btn",{staticClass:"mr-5 elevation-0",attrs:{"aria-label":"Github",icon:"","x-small":"",color:"pink darken-3"},on:{click:t.goGithub}},[i("v-icon",[t._v(" mdi-github ")])],1)],1),i("v-col",{staticClass:"vs_footer_text text-right",attrs:{justify:"end","align-content":"end"}},[t._v(" Developed with "),i("span",{staticClass:"vs_love"},[t._v("♥")]),t._v(" by Vicent")])],1)],1)],1)},a=[],n=i("d4ec"),o=i("262e"),r=i("2caf"),c=i("9ab4"),l=i("60a3"),h=function(t){Object(o["a"])(i,t);var e=Object(r["a"])(i);function i(){return Object(n["a"])(this,i),e.apply(this,arguments)}return i}(l["b"]);h=Object(c["a"])([Object(l["a"])({computed:{},methods:{goTwitter:function(){window.open("https://twitter.com/visancal")},goInstagram:function(){window.open("https://www.instagram.com/visancal/")},goLinkedin:function(){window.open("https://www.linkedin.com/in/vsanjaime/")},goGithub:function(){window.open("https://github.com/visancal")}},components:{}})],h);var u=h,d=u,p=(i("f8dd"),i("2877")),v=i("6544"),m=i.n(v),f=i("8336"),b=i("62ad"),_=i("a523"),g=i("132d"),C=i("0fd9"),j=Object(p["a"])(d,s,a,!1,null,"078f660e",null);e["a"]=j.exports;m()(j,{VBtn:f["a"],VCol:b["a"],VContainer:_["a"],VIcon:g["a"],VRow:C["a"]})}}]);
//# sourceMappingURL=chunk-4d76ed5e.3ecb0ccc.js.map