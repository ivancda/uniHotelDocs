(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{289:function(t,n,e){var content=e(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(118).default)("7c5b216d",content,!0,{sourceMap:!1})},315:function(t,n,e){"use strict";e(289)},316:function(t,n,e){var o=e(117)(!1);o.push([t.i,".elMenu[data-v-3840da86]{margin-bottom:10vw}.name[data-v-3840da86]{font-weight:900}.content[data-v-3840da86]{grid-gap:3rem;gap:3rem;flex-direction:column;margin:2vw}.about[data-v-3840da86],.content[data-v-3840da86]{display:flex;align-items:center}.about[data-v-3840da86]{justify-content:space-around;width:100%}.icons[data-v-3840da86]{display:flex;grid-gap:2rem;gap:2rem;align-items:center}.text[data-v-3840da86]{text-align:center;max-width:50vw}",""]),t.exports=o},318:function(t,n,e){"use strict";var o=e(4),r=e(206);o({target:"String",proto:!0,forced:e(207)("small")},{small:function(){return r(this,"small","","")}})},320:function(t,n,e){"use strict";var o=e(0),r=e(94),d=e(40),l=e(65),c=o.TypeError,m=function(t,n,source,e,o,v,f,h){for(var element,x,w=o,k=0,_=!!f&&l(f,h);k<e;){if(k in source){if(element=_?_(source[k],k,n):source[k],v>0&&r(element))x=d(element),w=m(t,n,element,x,w,v-1)-1;else{if(w>=9007199254740991)throw c("Exceed the acceptable array length");t[w]=element}w++}k++}return w};t.exports=m},322:function(t,n,e){"use strict";var o=e(4),r=e(206);o({target:"String",proto:!0,forced:e(207)("fixed")},{fixed:function(){return r(this,"tt","","")}})},324:function(t,n,e){"use strict";var o=e(4),r=e(206);o({target:"String",proto:!0,forced:e(207)("link")},{link:function(t){return r(this,"a","href",t)}})},329:function(t,n,e){"use strict";var o=e(4),r=e(320),d=e(30),l=e(40),c=e(60),m=e(120);o({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=d(this),e=l(n),o=m(n,0);return o.length=r(o,n,n,e,0,void 0===t?1:c(t)),o}})},330:function(t,n,e){e(92)("flat")},331:function(t,n,e){"use strict";var o=e(4),r=e(80).findIndex,d=e(92),l="findIndex",c=!0;l in[]&&Array(1).findIndex((function(){c=!1})),o({target:"Array",proto:!0,forced:c},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),d(l)},333:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{trabs:[{nome:"Alexandre Prudente",entidade:"Reservas",link1:"https://github.com/ivancda/hotelAPIrest",link2:"https://www.linkedin.com/in/ivancda/",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",intDoc:null},{nome:"Ivan Coelho",entidade:"Hóspedes",link1:"https://github.com/ivancda/hotelAPIrest",link2:"https://www.linkedin.com/in/ivancda/",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",intDoc:null},{nome:"Letícia Bedoni",entidade:"Quartos",link1:"https://github.com/ivancda/hotelAPIrest",link2:"https://www.linkedin.com/in/ivancda/",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",intDoc:null},{nome:"Patrícia Andrade",entidade:"Funcionários",link1:"https://github.com/ivancda/hotelAPIrest",link2:"https://www.linkedin.com/in/ivancda/",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",intDoc:null},{nome:"Pedro Silva",entidade:"Faturas",link1:"https://github.com/ivancda/hotelAPIrest",link2:"https://www.linkedin.com/in/ivancda/",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",intDoc:""}]}}},r=(e(315),e(71)),d=e(287),l=e.n(d),c=e(360),m=e(358),v=e(363),f=e(359),h=e(362),x=e(328),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-expansion-panels",{staticClass:"elMenu",attrs:{inset:""}},t._l(t.trabs,(function(n,i){return e("v-expansion-panel",{key:i},[e("v-expansion-panel-header",{staticClass:"header"},[e("h2",{staticClass:"name"},[t._v(t._s(n.nome))])]),t._v(" "),e("v-expansion-panel-content",[e("div",{staticClass:"content"},[e("div",{staticClass:"about"},[e("h3",[t._v("Entidade: "+t._s(n.entidade))]),t._v(" "),e("div",{staticClass:"icons"},[e("v-btn",{directives:[{name:"show",rawName:"v-show",value:null!==n.intDoc,expression:"item.intDoc!==null"}],attrs:{color:"red"}},[t._v("Documentação Interativa")]),t._v(" "),e("v-btn",{attrs:{link:"",href:n.link1,"x-large":""}},[t._v("repo no github "),e("v-icon",[t._v("mdi-github")])],1),t._v(" "),e("v-btn",{attrs:{link:"",href:n.link2,"x-large":"",fab:""}},[e("v-icon",[t._v("mdi-linkedin")])],1)],1)]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(n.info))])])])],1)})),1)}),[],!1,null,"3840da86",null);n.default=component.exports;l()(component,{VBtn:c.a,VExpansionPanel:m.a,VExpansionPanelContent:v.a,VExpansionPanelHeader:f.a,VExpansionPanels:h.a,VIcon:x.a})}}]);