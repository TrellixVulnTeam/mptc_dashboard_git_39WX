"use strict";(self.webpackChunk_krassowski_jupyterlab_lsp=self.webpackChunk_krassowski_jupyterlab_lsp||[]).push([[44,875,501],{9258:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(2609),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".lsp-completer-themes .lsp-licence {\n  display: inline;\n}\n\n.lsp-completer-themes ul {\n  list-style: none;\n  padding-left: 10px;\n}\n\n.lsp-completer-theme-icons {\n  margin-left: 10px;\n}\n\n.lsp-completer-icon-row {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n}\n\n/* a workaround for scrollbars being always on in the completer documentation panel, see\n https://github.com/jupyter-lsp/jupyterlab-lsp/pull/322#issuecomment-682724175\n */\n.jp-Completer-docpanel {\n  overflow: auto;\n}\n\n.jp-Completer {\n  --lsp-completer-max-label-width: 300px;\n  --lsp-completer-max-detail-width: 200px;\n}\n\n.jp-Completer-match {\n  max-width: var(--lsp-completer-max-label-width);\n  overflow-x: hidden;\n  white-space: nowrap;\n  display: block;\n  text-overflow: ellipsis;\n}\n\n.jp-mod-active .jp-Completer-match {\n  text-overflow: clip;\n}\n\n.lsp-completer-placeholder:after {\n  content: 'Loading...';\n  color: #7f7f7f;\n}\n\n/* a workaround for code being larger font size than text in markdown-rendered panel */\n.jp-Completer-docpanel pre code {\n  font-size: 90%;\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-item {\n  --lsp-completer-label-height: 24px;\n  --lsp-completer-detail-height: 20px;\n  --lsp-completer-icon-width: 16px;\n  height: var(--lsp-completer-label-height);\n  display: grid;\n  grid-template-areas:\n    'icon label'\n    'detail detail';\n  grid-template-columns: min-content 1fr;\n}\n\nbody[data-lsp-completer-layout='detail-below']\n  .jp-Completer-item.jp-mod-active {\n  height: calc(\n    var(--lsp-completer-detail-height) + var(--lsp-completer-label-height)\n  );\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-icon {\n  grid-area: icon;\n  width: var(--lsp-completer-icon-width);\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-match {\n  grid-area: label;\n  overflow: hidden;\n  height: var(--lsp-completer-label-height);\n}\n\n.jp-Completer-item .jp-Completer-typeExtended {\n  max-width: var(--lsp-completer-max-detail-width);\n  min-height: 50px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.jp-mod-active .jp-Completer-typeExtended {\n  text-overflow: clip;\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-typeExtended {\n  grid-area: detail;\n  text-align: left;\n  padding-left: calc(var(--lsp-completer-icon-width) + 8px);\n  height: var(--lsp-completer-detail-height);\n  line-height: var(--lsp-completer-detail-height);\n  display: none;\n  position: relative;\n  top: -2px;\n  overflow: hidden;\n  max-width: calc(\n    var(--lsp-completer-max-label-width) + var(--lsp-completer-max-detail-width)\n  );\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-match {\n  overflow: hidden;\n  max-width: calc(\n    var(--lsp-completer-max-label-width) + var(--lsp-completer-max-detail-width)\n  );\n}\n\nbody[data-lsp-completer-layout='detail-below']\n  .jp-Completer-item.jp-mod-active\n  .jp-Completer-typeExtended {\n  display: block;\n}\n",""]);const i=o},2609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(o[l]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},6062:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function l(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],s=t.base?a[0]+t.base:a[0],c=n[s]||0,d="".concat(s," ").concat(c);n[s]=c+1;var p=l(d),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(h)):i.push({identifier:d,updater:v(h,t),references:1}),r.push(d)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var l=o(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,u=0;function v(e,t){var n,r,o;if(t.singleton){var i=u++;n=m||(m=s(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=s(t),r=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=l(n[r]);i[o].references--}for(var s=a(e,t),c=0;c<n.length;c++){var d=l(n[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=s}}}},44:(e,t,n)=>{n.r(t),n.d(t,{COMPLETION_THEME_MANAGER:()=>u,CompletionThemeManager:()=>m});var r=n(6062),o=n.n(r),i=n(9258);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var l=n(4149),a=n(5403),s=n(669),c=n(6271),d=n.n(c),p=n(5384);function h(e,t){let n=t.themes.map((n=>function(e,t,n,r){let o=[];for(let[e,r]of n(t))o.push(d().createElement("div",{className:"lsp-completer-icon-row"},d().createElement("div",null,e),d().createElement("div",{className:"jp-Completer-icon"},d().createElement(r.react,null))));return d().createElement("div",{className:"lsp-completer-themes "+p.wo+t.id},d().createElement("h4",null,t.name,r?e.__(" (current)"):""),d().createElement("ul",null,d().createElement("li",{key:"id"},"ID: ",d().createElement("code",null,t.id)),d().createElement("li",{key:"licence"},e.__("Licence: "),(i=t.icons.licence,d().createElement("div",{className:"lsp-licence"},d().createElement("a",{href:i.link,title:i.name},i.abbreviation)," ",i.licensor))),d().createElement("li",{key:"dark"},void 0===t.icons.dark?"":e.__("Includes dedicated dark mode icons set"))),d().createElement("div",{className:"lsp-completer-theme-icons"},o));var i}(e,n,t.get_set,n==t.current)));return d().createElement("div",null,n)}class m{constructor(e,t){this.themeManager=e,this.current_theme_id=null,this.themes=new Map,this.icons_cache=new Map,this.icon_overrides=new Map,e.themeChanged.connect(this.update_icons_set,this),this.trans=t}is_theme_light(){const e=this.themeManager.theme;return!e||this.themeManager.isLight(e)}get_iconset(e){var t,n;const r=e.icons,o=this.is_theme_light()||void 0===r.dark?r.light:r.dark,i=new Map;let l=(null===(n=null===(t=this.current_theme)||void 0===t?void 0:t.icons)||void 0===n?void 0:n.options)||{};const a=this.is_theme_light()?"light":"dark";for(let[t,n]of Object.entries(o)){let r,o="lsp:"+e.id+"-"+t.toLowerCase()+"-"+a;this.icons_cache.has(o)?r=this.icons_cache.get(o):(r=new s.LabIcon({name:o,svgstr:n}),this.icons_cache.set(o,r)),i.set(t,r.bindprops(l))}return i}update_icons_set(){null!==this.current_theme&&(this.current_icons=this.get_iconset(this.current_theme))}get_icon(e){return null===this.current_theme?null:(e&&(this.icon_overrides.has(e.toLowerCase())&&(e=this.icon_overrides.get(e.toLowerCase())),e=e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()),this.current_icons.has(e)?this.current_icons.get(e):e===p.OC?s.kernelIcon:null)}get current_theme_class(){return p.wo+this.current_theme_id}set_theme(e){this.current_theme_id&&document.body.classList.remove(this.current_theme_class),e&&!this.themes.has(e)&&console.warn(`[LSP][Completer] Icons theme ${e} cannot be set yet (it may be loaded later).`),this.current_theme_id=e,document.body.classList.add(this.current_theme_class),this.update_icons_set()}get current_theme(){return this.current_theme_id&&this.themes.has(this.current_theme_id)?this.themes.get(this.current_theme_id):null}register_theme(e){this.themes.has(e.id)&&console.warn("Theme with name",e.id,"was already registered, overwriting."),this.themes.set(e.id,e),this.update_icons_set()}display_themes(){(0,l.showDialog)({title:this.trans.__("LSP Completer Themes"),body:h(this.trans,{themes:[...this.themes.values()],current:this.current_theme,get_set:this.get_iconset.bind(this)}),buttons:[l.Dialog.okButton({label:this.trans.__("OK")})]}).catch(console.warn)}set_icons_overrides(e){this.icon_overrides=new Map(Object.keys(e).map((t=>[t.toLowerCase(),e[t]])))}}const u={id:p.Uu,requires:[l.IThemeManager,l.ICommandPalette,a.ITranslator],activate:(e,t,n,r)=>{const o=r.load("jupyterlab_lsp");let i=new m(t,o);const l="lsp:completer-about-themes";return e.commands.addCommand(l,{label:o.__("Display the completer themes"),execute:()=>{i.display_themes()}}),n.addItem({category:"Language server protocol",command:l}),i},provides:p.kZ,autoStart:!0}},5384:(e,t,n)=>{n.d(t,{wo:()=>o,Uu:()=>l,OC:()=>a,kZ:()=>s});var r=n(1797);const o="lsp-completer-theme-";var i;!function(e){e[e.Text=1]="Text",e[e.Method=2]="Method",e[e.Function=3]="Function",e[e.Constructor=4]="Constructor",e[e.Field=5]="Field",e[e.Variable=6]="Variable",e[e.Class=7]="Class",e[e.Interface=8]="Interface",e[e.Module=9]="Module",e[e.Property=10]="Property",e[e.Unit=11]="Unit",e[e.Value=12]="Value",e[e.Enum=13]="Enum",e[e.Keyword=14]="Keyword",e[e.Snippet=15]="Snippet",e[e.Color=16]="Color",e[e.File=17]="File",e[e.Reference=18]="Reference",e[e.Folder=19]="Folder",e[e.EnumMember=20]="EnumMember",e[e.Constant=21]="Constant",e[e.Struct=22]="Struct",e[e.Event=23]="Event",e[e.Operator=24]="Operator",e[e.TypeParameter=25]="TypeParameter"}(i||(i={}));const l="@krassowski/completion-manager",a="Kernel",s=new r.Token(l+":ILSPCompletionThemeManager")}}]);