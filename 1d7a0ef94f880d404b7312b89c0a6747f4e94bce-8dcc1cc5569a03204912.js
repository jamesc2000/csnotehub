(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/9aa":function(e,t,n){var a=n("NykK"),o=n("ExA7");e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==a(e)}},"/d1K":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n("q1tI"),o=n.n(a),u=n("Wbzz"),r=n("iSRb"),c=n.n(r),i=function(e){var t=e.author;e.isIndex;return o.a.createElement("div",{className:c.a.author},o.a.createElement(u.Link,{to:"/"},o.a.createElement("img",{src:Object(u.withPrefix)(t.photo),className:c.a.author__logo,width:"125",height:"125",alt:"csnotehub Logo"})))},l=n("7Qib"),s=n("euHg"),f=n.n(s),m=function(e){var t=e.name,n=e.icon;return o.a.createElement("svg",{className:f.a.icon,viewBox:n.viewBox},o.a.createElement("title",null,t),o.a.createElement("path",{d:n.path}))},d=n("aU/I"),x=n.n(d),_=function(e){var t=e.contacts;return o.a.createElement("div",{className:x.a.contacts},o.a.createElement("ul",{className:x.a.contacts__list},Object.keys(t).map((function(e){return t[e]?o.a.createElement("li",{className:x.a["contacts__list-item"],key:e},o.a.createElement("a",{className:x.a["contacts__list-item-link"],href:Object(l.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},o.a.createElement(m,{name:e,icon:Object(l.b)(e)}))):null}))))},p=n("Nrk+"),b=n.n(p),g=function(e){var t=e.copyright;return o.a.createElement("div",{className:b.a.copyright},t)},v=n("je8k"),h=n.n(v),E=function(e){var t=e.menu;return o.a.createElement("nav",{className:h.a.menu},o.a.createElement("ul",{className:h.a.menu__list},t.map((function(e){return o.a.createElement("li",{className:h.a["menu__list-item"],key:e.path},o.a.createElement(u.Link,{to:e.path,className:h.a["menu__list-item-link"],activeClassName:h.a["menu__list-item-link--active"]},e.label))}))))},y=n("SySy"),N=n.n(y),A=n("gGy4"),j=function(e){var t=e.isIndex,n=Object(A.b)(),a=n.author,u=n.copyright,r=n.menu;return o.a.createElement("div",{className:N.a.sidebar},o.a.createElement("div",{className:N.a.sidebar__inner},o.a.createElement(i,{author:a,isIndex:t}),o.a.createElement(E,{menu:r}),o.a.createElement(_,{contacts:a.contacts}),o.a.createElement(g,{copyright:u})))}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"6nK8":function(e,t,n){var a=n("dVn5"),o=n("fo6e"),u=n("dt0z"),r=n("9NmV");e.exports=function(e,t,n){return e=u(e),void 0===(t=n?void 0:t)?o(e)?r(e):a(e):e.match(t)||[]}},"9NmV":function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+n+"]",o="\\d+",u="[\\u2700-\\u27bf]",r="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+n+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+r+"|"+c+")",m="(?:"+s+"|"+c+")",d="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",x="[\\ufe0e\\ufe0f]?"+d+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",i,l].join("|")+")[\\ufe0e\\ufe0f]?"+d+")*"),_="(?:"+[u,i,l].join("|")+")"+x,p=RegExp([s+"?"+r+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,s,"$"].join("|")+")",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,s+f,"$"].join("|")+")",s+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,_].join("|"),"g");e.exports=function(e){return e.match(p)||[]}},AP2z:function(e,t,n){var a=n("nmnc"),o=Object.prototype,u=o.hasOwnProperty,r=o.toString,c=a?a.toStringTag:void 0;e.exports=function(e){var t=u.call(e,c),n=e[c];try{e[c]=void 0;var a=!0}catch(i){}var o=r.call(e);return a&&(t?e[c]=n:delete e[c]),o}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var a=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,u=a||o||Function("return this")();e.exports=u},N1om:function(e,t,n){var a=n("sgoq")((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=a},"Nrk+":function(e,t,n){e.exports={copyright:"Copyright-module--copyright--1YLES"}},NykK:function(e,t,n){var a=n("nmnc"),o=n("AP2z"),u=n("KfNM"),r=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":r&&r in Object(e)?o(e):u(e)}},RBgx:function(e,t,n){e.exports={page:"Page-module--page--V2155",page__inner:"Page-module--page__inner--3xzwp",page__title:"Page-module--page__title--t1zKX",page__body:"Page-module--page__body--1A7TB"}},RXmK:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),o=n.n(a),u=n("RBgx"),r=n.n(u),c=function(e){var t=e.title,n=e.children,u=Object(a.useRef)();return Object(a.useEffect)((function(){u.current.scrollIntoView()})),o.a.createElement("div",{ref:u,className:r.a.page},o.a.createElement("div",{className:r.a.page__inner},t&&o.a.createElement("h1",{className:r.a.page__title},t),o.a.createElement("div",{className:r.a.page__body},n)))}},SySy:function(e,t,n){e.exports={sidebar:"Sidebar-module--sidebar--1zM7S",sidebar__inner:"Sidebar-module--sidebar__inner--2Tprz"}},TKrE:function(e,t,n){var a=n("qRkn"),o=n("dt0z"),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(u,a).replace(r,"")}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},"aU/I":function(e,t,n){e.exports={contacts:"Contacts-module--contacts--3fb7G",contacts__list:"Contacts-module--contacts__list--27zok","contacts__list-item":"Contacts-module--contacts__list-item--1Adud","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2L60c"}},asDA:function(e,t){e.exports=function(e,t,n,a){var o=-1,u=null==e?0:e.length;for(a&&u&&(n=e[++o]);++o<u;)n=t(n,e[o],o,e);return n}},dVn5:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},dt0z:function(e,t,n){var a=n("zoYe");e.exports=function(e){return null==e?"":a(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,o=Array(a);++n<a;)o[n]=t(e[n],n,e);return o}},euHg:function(e,t,n){e.exports={icon:"Icon-module--icon--1T2h2"}},fo6e:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},iSRb:function(e,t,n){e.exports={author__logo:"Author-module--author__logo--38b3L",author__title:"Author-module--author__title--ZztQd","author__title-link":"Author-module--author__title-link--BY7f8",author__subtitle:"Author-module--author__subtitle--3hbMX"}},je8k:function(e,t,n){e.exports={menu:"Menu-module--menu--2aN3O",menu__list:"Menu-module--menu__list--1uKDu","menu__list-item":"Menu-module--menu__list-item--27cxj","menu__list-item-link":"Menu-module--menu__list-item-link--29Sd-","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2HzKy"}},nmnc:function(e,t,n){var a=n("Kz5y").Symbol;e.exports=a},qRkn:function(e,t,n){var a=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},sgoq:function(e,t,n){var a=n("asDA"),o=n("TKrE"),u=n("6nK8"),r=RegExp("['’]","g");e.exports=function(e){return function(t){return a(u(o(t).replace(r,"")),e,"")}}},zoYe:function(e,t,n){var a=n("nmnc"),o=n("eUgh"),u=n("Z0cm"),r=n("/9aa"),c=a?a.prototype:void 0,i=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(u(t))return o(t,e)+"";if(r(t))return i?i.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}}}]);
//# sourceMappingURL=1d7a0ef94f880d404b7312b89c0a6747f4e94bce-8dcc1cc5569a03204912.js.map