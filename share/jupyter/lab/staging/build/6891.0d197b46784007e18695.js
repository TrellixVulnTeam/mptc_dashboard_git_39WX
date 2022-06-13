/*! For license information please see 6891.0d197b46784007e18695.js.LICENSE.txt */
(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[6891],{85592:(t,e,i)=>{var s,n,o;(function(r){"use strict";if(true){!(n=[i(46646)],s=r,o=typeof s==="function"?s.apply(e,n):s,o!==undefined&&(t.exports=o))}else{}})((function(t){"use strict";t.ui=t.ui||{};return t.ui.version="1.13.1"}))},26891:(t,e,i)=>{var s,n,o;(function(r){"use strict";if(true){!(n=[i(46646),i(85592)],s=r,o=typeof s==="function"?s.apply(e,n):s,o!==undefined&&(t.exports=o))}else{}})((function(t){"use strict";var e=0;var i=Array.prototype.hasOwnProperty;var s=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;(n=i[o])!=null;o++){s=t._data(n,"events");if(s&&s.remove){t(n).triggerHandler("remove")}}e(i)}}(t.cleanData);t.widget=function(e,i,s){var n,o,r;var a={};var l=e.split(".")[0];e=e.split(".")[1];var u=l+"-"+e;if(!s){s=i;i=t.Widget}if(Array.isArray(s)){s=t.extend.apply(null,[{}].concat(s))}t.expr.pseudos[u.toLowerCase()]=function(e){return!!t.data(e,u)};t[l]=t[l]||{};n=t[l][e];o=t[l][e]=function(t,e){if(!this||!this._createWidget){return new o(t,e)}if(arguments.length){this._createWidget(t,e)}};t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]});r=new i;r.options=t.widget.extend({},r.options);t.each(s,(function(t,e){if(typeof e!=="function"){a[t]=e;return}a[t]=function(){function s(){return i.prototype[t].apply(this,arguments)}function n(e){return i.prototype[t].apply(this,e)}return function(){var t=this._super;var i=this._superApply;var o;this._super=s;this._superApply=n;o=e.apply(this,arguments);this._super=t;this._superApply=i;return o}}()}));o.prototype=t.widget.extend(r,{widgetEventPrefix:n?r.widgetEventPrefix||e:e},a,{constructor:o,namespace:l,widgetName:e,widgetFullName:u});if(n){t.each(n._childConstructors,(function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}));delete n._childConstructors}else{i._childConstructors.push(o)}t.widget.bridge(e,o);return o};t.widget.extend=function(e){var n=s.call(arguments,1);var o=0;var r=n.length;var a;var l;for(;o<r;o++){for(a in n[o]){l=n[o][a];if(i.call(n[o],a)&&l!==undefined){if(t.isPlainObject(l)){e[a]=t.isPlainObject(e[a])?t.widget.extend({},e[a],l):t.widget.extend({},l)}else{e[a]=l}}}}return e};t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(o){var r=typeof o==="string";var a=s.call(arguments,1);var l=this;if(r){if(!this.length&&o==="instance"){l=undefined}else{this.each((function(){var i;var s=t.data(this,n);if(o==="instance"){l=s;return false}if(!s){return t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}if(typeof s[o]!=="function"||o.charAt(0)==="_"){return t.error("no such method '"+o+"' for "+e+" widget instance")}i=s[o].apply(s,a);if(i!==s&&i!==undefined){l=i&&i.jquery?l.pushStack(i.get()):i;return false}}))}}else{if(a.length){o=t.widget.extend.apply(null,[o].concat(a))}this.each((function(){var e=t.data(this,n);if(e){e.option(o||{});if(e._init){e._init()}}else{t.data(this,n,new i(o,this))}}))}return l}};t.Widget=function(){};t.Widget._childConstructors=[];t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:false,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0];this.element=t(s);this.uuid=e++;this.eventNamespace="."+this.widgetName+this.uuid;this.bindings=t();this.hoverable=t();this.focusable=t();this.classesElementLookup={};if(s!==this){t.data(s,this.widgetFullName,this);this._on(true,this.element,{remove:function(t){if(t.target===s){this.destroy()}}});this.document=t(s.style?s.ownerDocument:s.document||s);this.window=t(this.document[0].defaultView||this.document[0].parentWindow)}this.options=t.widget.extend({},this.options,this._getCreateOptions(),i);this._create();if(this.options.disabled){this._setOptionDisabled(this.options.disabled)}this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy();t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)}));this.element.off(this.eventNamespace).removeData(this.widgetFullName);this.widget().off(this.eventNamespace).removeAttr("aria-disabled");this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s=e;var n;var o;var r;if(arguments.length===0){return t.widget.extend({},this.options)}if(typeof e==="string"){s={};n=e.split(".");e=n.shift();if(n.length){o=s[e]=t.widget.extend({},this.options[e]);for(r=0;r<n.length-1;r++){o[n[r]]=o[n[r]]||{};o=o[n[r]]}e=n.pop();if(arguments.length===1){return o[e]===undefined?null:o[e]}o[e]=i}else{if(arguments.length===1){return this.options[e]===undefined?null:this.options[e]}s[e]=i}}this._setOptions(s);return this},_setOptions:function(t){var e;for(e in t){this._setOption(e,t[e])}return this},_setOption:function(t,e){if(t==="classes"){this._setOptionClasses(e)}this.options[t]=e;if(t==="disabled"){this._setOptionDisabled(e)}return this},_setOptionClasses:function(e){var i,s,n;for(i in e){n=this.classesElementLookup[i];if(e[i]===this.options.classes[i]||!n||!n.length){continue}s=t(n.get());this._removeClass(n,i);s.addClass(this._classes({element:s,keys:i,classes:e,add:true}))}},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t);if(t){this._removeClass(this.hoverable,null,"ui-state-hover");this._removeClass(this.focusable,null,"ui-state-focus")}},enable:function(){return this._setOptions({disabled:false})},disable:function(){return this._setOptions({disabled:true})},_classes:function(e){var i=[];var s=this;e=t.extend({element:this.element,classes:this.options.classes||{}},e);function n(){var i=[];e.element.each((function(e,n){var o=t.map(s.classesElementLookup,(function(t){return t})).some((function(t){return t.is(n)}));if(!o){i.push(n)}}));s._on(t(i),{remove:"_untrackClassesElement"})}function o(o,r){var a,l;for(l=0;l<o.length;l++){a=s.classesElementLookup[o[l]]||t();if(e.add){n();a=t(t.uniqueSort(a.get().concat(e.element.get())))}else{a=t(a.not(e.element).get())}s.classesElementLookup[o[l]]=a;i.push(o[l]);if(r&&e.classes[o[l]]){i.push(e.classes[o[l]])}}}if(e.keys){o(e.keys.match(/\S+/g)||[],true)}if(e.extra){o(e.extra.match(/\S+/g)||[])}return i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(s,n){if(t.inArray(e.target,n)!==-1){i.classesElementLookup[s]=t(n.not(e.target).get())}}));this._off(t(e.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,false)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,true)},_toggleClass:function(t,e,i,s){s=typeof s==="boolean"?s:i;var n=typeof t==="string"||t===null,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};o.element.toggleClass(this._classes(o),s);return this},_on:function(e,i,s){var n;var o=this;if(typeof e!=="boolean"){s=i;i=e;e=false}if(!s){s=i;i=this.element;n=this.widget()}else{i=n=t(i);this.bindings=this.bindings.add(i)}t.each(s,(function(s,r){function a(){if(!e&&(o.options.disabled===true||t(this).hasClass("ui-state-disabled"))){return}return(typeof r==="string"?o[r]:r).apply(o,arguments)}if(typeof r!=="string"){a.guid=r.guid=r.guid||a.guid||t.guid++}var l=s.match(/^([\w:-]*)\s*(.*)$/);var u=l[1]+o.eventNamespace;var f=l[2];if(f){n.on(u,f,a)}else{i.on(u,a)}}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;e.off(i);this.bindings=t(this.bindings.not(e).get());this.focusable=t(this.focusable.not(e).get());this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return(typeof t==="string"?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e);this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e);this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o;var r=this.options[e];s=s||{};i=t.Event(i);i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase();i.target=this.element[0];o=i.originalEvent;if(o){for(n in o){if(!(n in i)){i[n]=o[n]}}}this.element.trigger(i,s);return!(typeof r==="function"&&r.apply(this.element[0],[i].concat(s))===false||i.isDefaultPrevented())}};t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){if(typeof n==="string"){n={effect:n}}var r;var a=!n?e:n===true||typeof n==="number"?i:n.effect||i;n=n||{};if(typeof n==="number"){n={duration:n}}else if(n===true){n={}}r=!t.isEmptyObject(n);n.complete=o;if(n.delay){s.delay(n.delay)}if(r&&t.effects&&t.effects.effect[a]){s[e](n)}else if(a!==e&&s[a]){s[a](n.duration,n.easing,o)}else{s.queue((function(i){t(this)[e]();if(o){o.call(s[0])}i()}))}}}));return t.widget}))}}]);
//# sourceMappingURL=6891.0d197b46784007e18695.js.map?v=0d197b46784007e18695