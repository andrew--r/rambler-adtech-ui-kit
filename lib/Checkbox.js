!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("react"));else if("function"==typeof define&&define.amd)define(["react"],r);else{var t=r("object"==typeof exports?require("react"):e.React);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,function(e){return function(e){function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){e.exports=t(6)},,function(r,t){r.exports=e},function(e,r,t){var o,n;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function t(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o))e.push(t.apply(null,o));else if("object"===n)for(var a in o)c.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}var c={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=t:(o=[],n=function(){return t}.apply(r,o),!(void 0!==n&&(e.exports=n)))}()},,,function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){return a.default.createElement("span",{className:(0,p.default)({"adt-checkbox":!0,"adt-checkbox--bordered":e.bordered})},a.default.createElement("input",{type:"checkbox",id:e.id,name:e.name,checked:e.checked,className:"adt-checkbox__input",onChange:e.onChange}),a.default.createElement("label",{htmlFor:e.id,className:"adt-checkbox__label"},e.children))}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var c=t(2),a=o(c),i=t(3),p=o(i);t(7),n.propTypes={children:c.PropTypes.node,id:c.PropTypes.string,name:c.PropTypes.string,checked:c.PropTypes.bool,bordered:c.PropTypes.bool,onChange:c.PropTypes.func},n.defaultProps={children:null,id:"",name:"",checked:!1,bordered:!1,onChange:function(){}}},function(e,r){}])});