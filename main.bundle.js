/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var n=function(t,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])})(t,r)};function t(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}function r(n,t){var r,e,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,e&&(o=2&i[0]?e.return:i[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,i[1])).done)return o;switch(e=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,e=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(n,u)}catch(n){i=[6,n],e=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function e(n){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&n[t],e=0;if(r)return r.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(n,t){var r="function"==typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,o,i=r.call(n),u=[];try{for(;(void 0===t||t-- >0)&&!(e=i.next()).done;)u.push(e.value)}catch(n){o={error:n}}finally{try{e&&!e.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function i(n,t){for(var r=0,e=t.length,o=n.length;r<e;r++,o++)n[o]=t[r];return n}function u(n){return this instanceof u?(this.v=n,this):new u(n)}function c(n,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=r.apply(n,t||[]),i=[];return e={},c("next"),c("throw"),c("return"),e[Symbol.asyncIterator]=function(){return this},e;function c(n){o[n]&&(e[n]=function(t){return new Promise((function(r,e){i.push([n,t,r,e])>1||s(n,t)}))})}function s(n,t){try{(r=o[n](t)).value instanceof u?Promise.resolve(r.value.v).then(l,a):f(i[0][2],r)}catch(n){f(i[0][3],n)}var r}function l(n){s("next",n)}function a(n){s("throw",n)}function f(n,t){n(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function s(n){return"function"==typeof n}function l(n){var t=n((function(n){Error.call(n),n.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}Object.create,Object.create;var a=l((function(n){return function(t){n(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(n,t){return t+1+") "+n.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}));function f(n,t){if(n){var r=n.indexOf(t);0<=r&&n.splice(r,1)}}var h=function(){function n(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._teardowns=null}return n.prototype.unsubscribe=function(){var n,t,r,u,c;if(!this.closed){this.closed=!0;var l=this._parentage;if(l)if(this._parentage=null,Array.isArray(l))try{for(var f=e(l),h=f.next();!h.done;h=f.next())h.value.remove(this)}catch(t){n={error:t}}finally{try{h&&!h.done&&(t=f.return)&&t.call(f)}finally{if(n)throw n.error}}else l.remove(this);var v=this.initialTeardown;if(s(v))try{v()}catch(n){c=n instanceof a?n.errors:[n]}var p=this._teardowns;if(p){this._teardowns=null;try{for(var y=e(p),b=y.next();!b.done;b=y.next()){var w=b.value;try{d(w)}catch(n){c=null!=c?c:[],n instanceof a?c=i(i([],o(c)),o(n.errors)):c.push(n)}}}catch(n){r={error:n}}finally{try{b&&!b.done&&(u=y.return)&&u.call(y)}finally{if(r)throw r.error}}}if(c)throw new a(c)}},n.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)d(t);else{if(t instanceof n){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._teardowns=null!==(r=this._teardowns)&&void 0!==r?r:[]).push(t)}},n.prototype._hasParent=function(n){var t=this._parentage;return t===n||Array.isArray(t)&&t.includes(n)},n.prototype._addParent=function(n){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n},n.prototype._removeParent=function(n){var t=this._parentage;t===n?this._parentage=null:Array.isArray(t)&&f(t,n)},n.prototype.remove=function(t){var r=this._teardowns;r&&f(r,t),t instanceof n&&t._removeParent(this)},n.EMPTY=((t=new n).closed=!0,t),n;var t}(),v=h.EMPTY;function p(n){return n instanceof h||n&&"closed"in n&&s(n.remove)&&s(n.add)&&s(n.unsubscribe)}function d(n){s(n)?n():n.unsubscribe()}var y=null,b=null,w=void 0,m=!1,g=!1,x={setTimeout:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=x.delegate;return((null==r?void 0:r.setTimeout)||setTimeout).apply(void 0,i([],o(n)))},clearTimeout:function(n){var t=x.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(n)},delegate:void 0};function _(n){x.setTimeout((function(){if(!y)throw n;y(n)}))}function S(){}var A=E("C",void 0,void 0);function E(n,t,r){return{kind:n,value:t,error:r}}var I=null;function T(n){if(m){var t=!I;if(t&&(I={errorThrown:!1,error:null}),n(),t){var r=I,e=r.errorThrown,o=r.error;if(I=null,e)throw o}}else n()}function k(n){m&&I&&(I.errorThrown=!0,I.error=n)}var P=function(n){function r(t){var r=n.call(this)||this;return r.isStopped=!1,t?(r.destination=t,p(t)&&t.add(r)):r.destination=C,r}return t(r,n),r.create=function(n,t,r){return new O(n,t,r)},r.prototype.next=function(n){this.isStopped?j(function(n){return E("N",n,void 0)}(n),this):this._next(n)},r.prototype.error=function(n){this.isStopped?j(E("E",void 0,n),this):(this.isStopped=!0,this._error(n))},r.prototype.complete=function(){this.isStopped?j(A,this):(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(n){this.destination.next(n)},r.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(h),O=function(n){function r(t,r,e){var o,i=n.call(this)||this;if(s(t))o=t;else if(t){var u;o=t.next,r=t.error,e=t.complete,i&&g?(u=Object.create(t)).unsubscribe=function(){return i.unsubscribe()}:u=t,o=null==o?void 0:o.bind(u),r=null==r?void 0:r.bind(u),e=null==e?void 0:e.bind(u)}return i.destination={next:o?F(o):S,error:F(null!=r?r:R),complete:e?F(e):S},i}return t(r,n),r}(P);function F(n,t){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{n.apply(void 0,i([],o(t)))}catch(n){m?k(n):_(n)}}}function R(n){throw n}function j(n,t){var r=b;r&&x.setTimeout((function(){return r(n,t)}))}var C={closed:!0,next:S,error:R,complete:S},q="function"==typeof Symbol&&Symbol.observable||"@@observable";function L(n){return n}function M(n){return 0===n.length?L:1===n.length?n[0]:function(t){return n.reduce((function(n,t){return t(n)}),t)}}var U=function(){function n(n){n&&(this._subscribe=n)}return n.prototype.lift=function(t){var r=new n;return r.source=this,r.operator=t,r},n.prototype.subscribe=function(n,t,r){var e,o=this,i=(e=n)&&e instanceof P||function(n){return n&&s(n.next)&&s(n.error)&&s(n.complete)}(e)&&p(e)?n:new O(n,t,r);return T((function(){var n=o,t=n.operator,r=n.source;i.add(t?t.call(i,r):r?o._subscribe(i):o._trySubscribe(i))})),i},n.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){n.error(t)}},n.prototype.forEach=function(n,t){var r=this;return new(t=D(t))((function(t,e){var o;o=r.subscribe((function(t){try{n(t)}catch(n){e(n),null==o||o.unsubscribe()}}),e,t)}))},n.prototype._subscribe=function(n){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(n)},n.prototype[q]=function(){return this},n.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return n.length?M(n)(this):this},n.prototype.toPromise=function(n){var t=this;return new(n=D(n))((function(n,r){var e;t.subscribe((function(n){return e=n}),(function(n){return r(n)}),(function(){return n(e)}))}))},n.create=function(t){return new n(t)},n}();function D(n){var t;return null!==(t=null!=n?n:w)&&void 0!==t?t:Promise}function z(n){return function(t){if(function(n){return s(null==n?void 0:n.lift)}(t))return t.lift((function(t){try{return n(t,this)}catch(n){this.error(n)}}));throw new TypeError("Unable to lift unknown Observable type")}}var Y=function(n){function r(t,r,e,o,i){var u=n.call(this,t)||this;return u.onFinalize=i,u._next=r?function(n){try{r(n)}catch(n){t.error(n)}}:n.prototype._next,u._error=o?function(n){try{o(n)}catch(n){t.error(n)}finally{this.unsubscribe()}}:n.prototype._error,u._complete=e?function(){try{e()}catch(n){t.error(n)}finally{this.unsubscribe()}}:n.prototype._complete,u}return t(r,n),r.prototype.unsubscribe=function(){var t,r=this.closed;n.prototype.unsubscribe.call(this),!r&&(null===(t=this.onFinalize)||void 0===t||t.call(this))},r}(P);function N(n,t){return z((function(r,e){var o=0;r.subscribe(new Y(e,(function(r){e.next(n.call(t,r,o++))})))}))}var G=function(n){return n&&"number"==typeof n.length&&"function"!=typeof n};function B(n){return s(null==n?void 0:n.then)}function V(n,t){return new U((function(r){var e=0;return t.schedule((function(){e===n.length?r.complete():(r.next(n[e++]),r.closed||this.schedule())}))}))}var Z="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function H(n){return s(n[q])}function J(n){return s(null==n?void 0:n[Z])}function K(n){return Symbol.asyncIterator&&s(null==n?void 0:n[Symbol.asyncIterator])}function Q(n){return new TypeError("You provided "+(null!==n&&"object"==typeof n?"an invalid object":"'"+n+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function W(n){return c(this,arguments,(function(){var t,e,o;return r(this,(function(r){switch(r.label){case 0:t=n.getReader(),r.label=1;case 1:r.trys.push([1,,9,10]),r.label=2;case 2:return[4,u(t.read())];case 3:return e=r.sent(),o=e.value,e.done?[4,u(void 0)]:[3,5];case 4:return[2,r.sent()];case 5:return[4,u(o)];case 6:return[4,r.sent()];case 7:return r.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}}))}))}function X(n){return s(null==n?void 0:n.getReader)}function $(n){if(n instanceof U)return n;if(null!=n){if(H(n))return o=n,new U((function(n){var t=o[q]();if(s(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(G(n))return nn(n);if(B(n))return r=n,new U((function(n){r.then((function(t){n.closed||(n.next(t),n.complete())}),(function(t){return n.error(t)})).then(null,_)}));if(K(n))return tn(n);if(J(n))return t=n,new U((function(n){var r,o;try{for(var i=e(t),u=i.next();!u.done;u=i.next()){var c=u.value;if(n.next(c),n.closed)return}}catch(n){r={error:n}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}n.complete()}));if(X(n))return tn(W(n))}var t,r,o;throw Q(n)}function nn(n){return new U((function(t){for(var r=0;r<n.length&&!t.closed;r++)t.next(n[r]);t.complete()}))}function tn(n){return new U((function(t){(function(n,t){var o,i,u,c,s,l,a,f;return s=this,l=void 0,f=function(){var s,l;return r(this,(function(r){switch(r.label){case 0:r.trys.push([0,5,6,11]),o=function(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=n[Symbol.asyncIterator];return r?r.call(n):(n=e(n),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(r){t[r]=n[r]&&function(t){return new Promise((function(e,o){!function(n,t,r,e){Promise.resolve(e).then((function(t){n({value:t,done:r})}),t)}(e,o,(t=n[r](t)).done,t.value)}))}}}(n),r.label=1;case 1:return[4,o.next()];case 2:if((i=r.sent()).done)return[3,4];if(s=i.value,t.next(s),t.closed)return[2];r.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return l=r.sent(),u={error:l},[3,11];case 6:return r.trys.push([6,,9,10]),i&&!i.done&&(c=o.return)?[4,c.call(o)]:[3,8];case 7:r.sent(),r.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}}))},new((a=void 0)||(a=Promise))((function(n,t){function r(n){try{o(f.next(n))}catch(n){t(n)}}function e(n){try{o(f.throw(n))}catch(n){t(n)}}function o(t){var o;t.done?n(t.value):(o=t.value,o instanceof a?o:new a((function(n){n(o)}))).then(r,e)}o((f=f.apply(s,l||[])).next())}))})(n,t).catch((function(n){return t.error(n)}))}))}function rn(n,t,r){return void 0===r&&(r=1/0),s(t)?rn((function(r,e){return N((function(n,o){return t(r,n,e,o)}))($(n(r,e)))}),r):("number"==typeof t&&(r=t),z((function(t,e){return function(n,t,r,e,o,i,u,c){var s=[],l=0,a=0,f=!1,h=function(){!f||s.length||l||t.complete()},v=function(n){return l<e?p(n):s.push(n)},p=function(n){l++;var o=!1;$(r(n,a++)).subscribe(new Y(t,(function(n){t.next(n)}),(function(){o=!0}),void 0,(function(){if(o)try{l--;for(;s.length&&l<e;)n=void 0,n=s.shift(),p(n);h()}catch(n){t.error(n)}var n})))};return n.subscribe(new Y(t,v,(function(){f=!0,h()}))),function(){}}(t,e,n,r)})))}var en=Array.isArray;function on(n,t){return t?V(n,t):nn(n)}var un=["addListener","removeListener"],cn=["addEventListener","removeEventListener"],sn=["on","off"];function ln(n,t){return function(r){return function(e){return n[r](t,e)}}}function an(n,t){return z((function(r,e){var o=0;r.subscribe(new Y(e,(function(r){return n.call(t,r,o++)&&e.next(r)})))}))}function fn(n){return N((function(){return n}))}var hn=function(n){function r(t,r){return n.call(this)||this}return t(r,n),r.prototype.schedule=function(n,t){return void 0===t&&(t=0),this},r}(h),vn={setInterval:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=vn.delegate;return((null==r?void 0:r.setInterval)||setInterval).apply(void 0,i([],o(n)))},clearInterval:function(n){var t=vn.delegate;return((null==t?void 0:t.clearInterval)||clearInterval)(n)},delegate:void 0},pn=function(n){function r(t,r){var e=n.call(this,t,r)||this;return e.scheduler=t,e.work=r,e.pending=!1,e}return t(r,n),r.prototype.schedule=function(n,t){if(void 0===t&&(t=0),this.closed)return this;this.state=n;var r=this.id,e=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(e,r,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(e,this.id,t),this},r.prototype.requestAsyncId=function(n,t,r){return void 0===r&&(r=0),vn.setInterval(n.flush.bind(n,this),r)},r.prototype.recycleAsyncId=function(n,t,r){if(void 0===r&&(r=0),null!=r&&this.delay===r&&!1===this.pending)return t;vn.clearInterval(t)},r.prototype.execute=function(n,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(n,t);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(n,t){var r,e=!1;try{this.work(n)}catch(n){e=!0,r=!!n&&n||new Error(n)}if(e)return this.unsubscribe(),r},r.prototype.unsubscribe=function(){if(!this.closed){var t=this.id,r=this.scheduler,e=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,f(e,this),null!=t&&(this.id=this.recycleAsyncId(r,t,null)),this.delay=null,n.prototype.unsubscribe.call(this)}},r}(hn),dn={now:function(){return(dn.delegate||Date).now()},delegate:void 0},yn=function(){function n(t,r){void 0===r&&(r=n.now),this.schedulerActionCtor=t,this.now=r}return n.prototype.schedule=function(n,t,r){return void 0===t&&(t=0),new this.schedulerActionCtor(this,n).schedule(r,t)},n.now=dn.now,n}(),bn=function(n){function r(t,r){void 0===r&&(r=yn.now);var e=n.call(this,t,r)||this;return e.actions=[],e._active=!1,e._scheduled=void 0,e}return t(r,n),r.prototype.flush=function(n){var t=this.actions;if(this._active)t.push(n);else{var r;this._active=!0;do{if(r=n.execute(n.state,n.delay))break}while(n=t.shift());if(this._active=!1,r){for(;n=t.shift();)n.unsubscribe();throw r}}},r}(yn),wn=new bn(pn),mn=wn,gn={leading:!0,trailing:!1};function xn(n){return n&&s(n.schedule)}function _n(n,t,r){void 0===n&&(n=0),void 0===r&&(r=mn);var e=-1;return null!=t&&(xn(t)?r=t:e=t),new U((function(t){var o,i=(o=n)instanceof Date&&!isNaN(o)?+n-r.now():n;i<0&&(i=0);var u=0;return r.schedule((function(){t.closed||(t.next(u++),0<=e?this.schedule(void 0,e):t.complete())}),i)}))}function Sn(n,t,r){void 0===t&&(t=wn),void 0===r&&(r=gn);var e,o,i,u,c,s=_n(n,t);return e=function(){return s},u=(i=void 0===(o=r)?gn:o).leading,c=i.trailing,z((function(n,t){var r=!1,o=null,i=null,s=!1,l=function(){null==i||i.unsubscribe(),i=null,c&&(h(),s&&t.complete())},a=function(){i=null,s&&t.complete()},f=function(n){return i=$(e()).subscribe(new Y(t,l,a))},h=function(){if(r){r=!1;var n=o;o=null,t.next(n),!s&&f()}};n.subscribe(new Y(t,(function(n){r=!0,o=n,(!i||i.closed)&&(u?h():f())}),(function(){s=!0,(!(c&&r&&i)||i.closed)&&t.complete()})))}))}function An(n){return void 0===n&&(n=1/0),rn(L,n)}function En(){return An(1)}function In(n){return n[n.length-1]}function Tn(n){return s(In(n))?n.pop():void 0}function kn(n){return xn(In(n))?n.pop():void 0}function Pn(n,t){return"number"==typeof In(n)?n.pop():t}function On(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return En()(on(n,kn(n)))}function Fn(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=kn(n);return z((function(t,e){(r?On(n,t,r):On(n,t)).subscribe(e)}))}function Rn(n,t,r,e,o){return function(i,u){var c=r,s=t,l=0;i.subscribe(new Y(u,(function(t){var r=l++;s=c?n(s,t,r):(c=!0,t),e&&u.next(s)}),o&&function(){c&&u.next(s),u.complete()}))}}function jn(n,t){return z(Rn(n,t,arguments.length>=2,!0))}function Cn(n,t){return void 0===t&&(t=L),n=null!=n?n:qn,z((function(r,e){var o,i=!0;r.subscribe(new Y(e,(function(r){var u=t(r);!i&&n(o,u)||(i=!1,o=u,e.next(r))})))}))}function qn(n,t){return n===t}var Ln=Array.isArray;function Mn(n){return 1===n.length&&Ln(n[0])?n[0]:n}function Un(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=kn(n),e=Pn(n,1/0);return n=Mn(n),z((function(t,u){An(e)(on(i([t],o(n)),r)).subscribe(u)}))}function Dn(n,t){return z((function(r,e){var o=null,i=0,u=!1,c=function(){return u&&!o&&e.complete()};r.subscribe(new Y(e,(function(r){null==o||o.unsubscribe();var u=0,s=i++;$(n(r,s)).subscribe(o=new Y(e,(function(n){return e.next(t?t(r,n,s,u++):n)}),(function(){o=null,c()})))}),(function(){u=!0,c()})))}))}var zn={schedule:function(n){var t=requestAnimationFrame,r=cancelAnimationFrame,e=zn.delegate;e&&(t=e.requestAnimationFrame,r=e.cancelAnimationFrame);var o=t((function(t){r=void 0,n(t)}));return new h((function(){return null==r?void 0:r(o)}))},requestAnimationFrame:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=zn.delegate;return((null==r?void 0:r.requestAnimationFrame)||requestAnimationFrame).apply(void 0,i([],o(n)))},cancelAnimationFrame:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=zn.delegate;return((null==r?void 0:r.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,i([],o(n)))},delegate:void 0},Yn=function(n){function r(t,r){var e=n.call(this,t,r)||this;return e.scheduler=t,e.work=r,e}return t(r,n),r.prototype.requestAsyncId=function(t,r,e){return void 0===e&&(e=0),null!==e&&e>0?n.prototype.requestAsyncId.call(this,t,r,e):(t.actions.push(this),t._scheduled||(t._scheduled=zn.requestAnimationFrame((function(){return t.flush(void 0)}))))},r.prototype.recycleAsyncId=function(t,r,e){if(void 0===e&&(e=0),null!=e&&e>0||null==e&&this.delay>0)return n.prototype.recycleAsyncId.call(this,t,r,e);0===t.actions.length&&(zn.cancelAnimationFrame(r),t._scheduled=void 0)},r}(pn),Nn=new(function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return t(r,n),r.prototype.flush=function(n){this._active=!0,this._scheduled=void 0;var t,r=this.actions,e=-1;n=n||r.shift();var o=r.length;do{if(t=n.execute(n.state,n.delay))break}while(++e<o&&(n=r.shift()));if(this._active=!1,t){for(;++e<o&&(n=r.shift());)n.unsubscribe();throw t}},r}(bn))(Yn);var Gn=function(n,t){this.value=n,this.interval=t},Bn=new U((function(n){return n.complete()}));function Vn(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=kn(n);return r?V(n,r):on(n)}function Zn(n){return n<=0?function(){return Bn}:z((function(t,r){var e=0;t.subscribe(new Y(r,(function(t){++e<=n&&(r.next(t),n<=e&&r.complete())})))}))}var Hn=l((function(n){return function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),Jn=function(n){function r(){var t=n.call(this)||this;return t.closed=!1,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return t(r,n),r.prototype.lift=function(n){var t=new Kn(this,this);return t.operator=n,t},r.prototype._throwIfClosed=function(){if(this.closed)throw new Hn},r.prototype.next=function(n){var t=this;T((function(){var r,o;if(t._throwIfClosed(),!t.isStopped){var i=t.observers.slice();try{for(var u=e(i),c=u.next();!c.done;c=u.next())c.value.next(n)}catch(n){r={error:n}}finally{try{c&&!c.done&&(o=u.return)&&o.call(u)}finally{if(r)throw r.error}}}}))},r.prototype.error=function(n){var t=this;T((function(){if(t._throwIfClosed(),!t.isStopped){t.hasError=t.isStopped=!0,t.thrownError=n;for(var r=t.observers;r.length;)r.shift().error(n)}}))},r.prototype.complete=function(){var n=this;T((function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var t=n.observers;t.length;)t.shift().complete()}}))},r.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=null},Object.defineProperty(r.prototype,"observed",{get:function(){var n;return(null===(n=this.observers)||void 0===n?void 0:n.length)>0},enumerable:!1,configurable:!0}),r.prototype._trySubscribe=function(t){return this._throwIfClosed(),n.prototype._trySubscribe.call(this,t)},r.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},r.prototype._innerSubscribe=function(n){var t=this,r=t.hasError,e=t.isStopped,o=t.observers;return r||e?v:(o.push(n),new h((function(){return f(o,n)})))},r.prototype._checkFinalizedStatuses=function(n){var t=this,r=t.hasError,e=t.thrownError,o=t.isStopped;r?n.error(e):o&&n.complete()},r.prototype.asObservable=function(){var n=new U;return n.source=this,n},r.create=function(n,t){return new Kn(n,t)},r}(U),Kn=function(n){function r(t,r){var e=n.call(this)||this;return e.destination=t,e.source=r,e}return t(r,n),r.prototype.next=function(n){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===r||r.call(t,n)},r.prototype.error=function(n){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===r||r.call(t,n)},r.prototype.complete=function(){var n,t;null===(t=null===(n=this.destination)||void 0===n?void 0:n.complete)||void 0===t||t.call(n)},r.prototype._subscribe=function(n){var t,r;return null!==(r=null===(t=this.source)||void 0===t?void 0:t.subscribe(n))&&void 0!==r?r:v},r}(Jn);function Qn(n){void 0===n&&(n={});var t=n.connector,r=void 0===t?function(){return new Jn}:t,e=n.resetOnError,o=void 0===e||e,i=n.resetOnComplete,u=void 0===i||i,c=n.resetOnRefCountZero,s=void 0===c||c;return function(n){var t=null,e=null,i=null,c=0,l=!1,a=!1,f=function(){null==e||e.unsubscribe(),e=null},h=function(){f(),t=i=null,l=a=!1},v=function(){var n=t;h(),null==n||n.unsubscribe()};return z((function(n,p){c++,a||l||f();var d,y=i=null!=i?i:r();p.add((function(){0!=--c||a||l||(e=Wn(v,s))})),y.subscribe(p),t||(t=new O({next:function(n){return y.next(n)},error:function(n){a=!0,f(),e=Wn(h,o,n),y.error(n)},complete:function(){l=!0,f(),e=Wn(h,u),y.complete()}}),(d=n,$(d)).subscribe(t))}))(n)}}function Wn(n,t){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];return!0===t?(n(),null):!1===t?null:t.apply(void 0,i([],o(r))).pipe(Zn(1)).subscribe((function(){return n()}))}function Xn(n){return an((function(t,r){return n<=r}))}function $n(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=Tn(n);return z((function(t,e){for(var u=n.length,c=new Array(u),s=n.map((function(){return!1})),l=!1,a=function(t){$(n[t]).subscribe(new Y(e,(function(n){c[t]=n,l||s[t]||(s[t]=!0,(l=s.every(L))&&(s=null))}),S))},f=0;f<u;f++)a(f);t.subscribe(new Y(e,(function(n){if(l){var t=i([n],o(c));e.next(r?r.apply(void 0,i([],o(t))):t)}})))}))}var nt=l((function(n){return function(){n(this),this.name="EmptyError",this.message="no elements in sequence"}}));function tt(n){return z((function(t,r){var e=!1;t.subscribe(new Y(r,(function(n){e=!0,r.next(n)}),(function(){e||r.next(n),r.complete()})))}))}function rt(n){return void 0===n&&(n=et),z((function(t,r){var e=!1;t.subscribe(new Y(r,(function(n){e=!0,r.next(n)}),(function(){return e?r.complete():r.error(n())})))}))}function et(){return new nt}var ot="ArrowRight",it=new Map;it.set("ArrowUp",{x:0,y:-1}),it.set("ArrowDown",{x:0,y:1}),it.set("ArrowLeft",{x:-1,y:0}),it.set("ArrowRight",{x:1,y:0});var ut=630,ct=630,st="rgba(255, 255, 255, 0.7)";function lt(n){n.fillStyle="#EAEAEA",n.fillRect(0,0,ut,ct)}function at(n,t,r,e,o,i,u,c){void 0===u&&(u="center"),void 0===c&&(c="middle"),n.fillStyle=o,n.font="bold "+i+"px sans-serif";var s=r,l=e;n.textAlign=u,n.textBaseline=c,n.fillText(t,s,l)}function ft(n,t,r){var e=20*t.x+1*t.x,o=20*t.y+1*t.y;n.fillStyle=r,n.fillRect(e,o,20,20)}function ht(n){void 0===n&&(n=[]);var t={x:pt(0,29),y:pt(0,29)};return function(n,t){return!t.some((function(t){return vt(t,n)}))}(t,n)?t:ht(n)}function vt(n,t){return n.x===t.x&&n.y===t.y}function pt(n,t){return Math.floor(Math.random()*(t-n+1)+n)}var dt=function(n,t){for(var r=0,e=t.length,o=n.length;r<e;r++,o++)n[o]=t[r];return n},yt=function(){var n=document.createElement("canvas");return n.width=ut,n.height=ct,n}(),bt=yt.getContext("2d");document.body.appendChild(yt);var wt,mt,gt=function n(t,r,e,u){if(s(e)&&(u=e,e=void 0),u)return n(t,r,e).pipe((c=u,N((function(n){return function(n,t){return en(t)?n.apply(void 0,i([],o(t))):n(t)}(c,n)}))));var c,l=o(function(n){return s(n.addEventListener)&&s(n.removeEventListener)}(t)?cn.map((function(n){return function(o){return t[n](r,o,e)}})):function(n){return s(n.addListener)&&s(n.removeListener)}(t)?un.map(ln(t,r)):function(n){return s(n.on)&&s(n.off)}(t)?sn.map(ln(t,r)):[],2),a=l[0],f=l[1];if(!a&&G(t))return rn((function(t){return n(t,r,e)}))(on(t));if(!a)throw new TypeError("Invalid event target");return new U((function(n){var t=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return n.next(1<t.length?t:t[0])};return a(t),function(){return f(t)}}))}(document,"keydown"),xt=gt.pipe(an((function(n){return"r"===n.key})),fn("RESET")),_t=gt.pipe(an((function(n){return"Enter"===n.key})),fn("START")),St=gt.pipe(an((function(n){return" "===n.key})),fn("PAUSE")),At=gt.pipe(Sn(160),N((function(n){return it.get(n.key)})),an((function(n){return!!n})),Fn(it.get(ot)),jn((function(n,t){return t.x===-n.x||t.y===-n.y?n:t}),it.get(ot)),Cn()),Et=_t.pipe(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return Un.apply(void 0,i([],o(n)))}(St,xt),Dn((function(n){switch(n){case"START":return(t=16.666666666666668,r=Nn,void 0===t&&(t=0),void 0===r&&(r=wn),t<0&&(t=0),_n(t,t,r)).pipe(function(n){return void 0===n&&(n=mn),function(t){return r=function(){return t.pipe(jn((function(t,r){var e=t.current;return{value:r,current:n.now(),last:e}}),{current:n.now(),value:void 0,last:void 0}),N((function(n){var t=n.current,r=n.last,e=n.value;return new Gn(e,t-r)})))},new U((function(n){$(r()).subscribe(n)}));var r}}(),N((function(n){return n.interval})));case"PAUSE":return Bn;case"RESET":return Vn(0)}var t,r})),Qn()),It=Vn("satrt game").pipe(N((function(n){return Et})),Dn((function(n){var t,r,e,o,i=new Jn,u=i.pipe(Xn(1),Fn(5),jn((function(n,t){return n+t}),0)),c=n.pipe(Sn(200),$n(At,u),jn((function(n,t){t[0];var r,e=t[1],o=e.x,i=e.y,u=t[2],c=n[0].x,s=n[0].y;return c+=o,s+=i,u>n.length?r={x:c,y:s}:((r=n.pop()).x=c,r.y=s),n.unshift(r),n}),function(){for(var n=[],t=4;t>=0;t--)n.push({x:t,y:0});return n}()),Qn()),l=c.pipe(jn((function(n,t){for(var r=t[0],e=0;e<n.length;e++)if(vt(n[e],r))return n.splice(e,1),dt(dt([],n),[ht(t)]);return n}),function(){for(var n=[],t=0;t<2;t++)n.push(ht());return n}()),Cn(),(o=s(t=function(n){return i.next(1)})?{next:t,error:r,complete:e}:t)?z((function(n,t){n.subscribe(new Y(t,(function(n){var r;null===(r=o.next)||void 0===r||r.call(o,n),t.next(n)}),(function(){var n;null===(n=o.complete)||void 0===n||n.call(o),t.complete()}),(function(n){var r;null===(r=o.error)||void 0===r||r.call(o,n),t.error(n)})))})):L,Qn()),a=i.pipe(Xn(1),jn((function(n,t){return n+1*t}),0),Fn(0));return n.pipe($n(c,l,a))})),(wt=function(n){var t=n[0],r=n[1];return n[2],n[3],!function(n){var t=n[0];return n.slice(1,n.length).some((function(n){return vt(n,t)}))}(r)&&0!==t},void 0===mt&&(mt=!1),z((function(n,t){n.subscribe(new Y(t,(function(n){var r=wt(n);(r||mt)&&t.next(n),!r&&t.complete()})))})))),Tt={next:function(n){n[0];var t=n[1],r=n[2],e=n[3];bt.clearRect(0,0,ut,ct),lt(bt),function(n,t){t.forEach((function(t,r){return ft(n,((e=t).x=e.x>=30?0:e.x<0?29:e.x,e.y=e.y>=30?0:e.y<0?29:e.y,e),function(n){return 0===n?"#252A34":"#08D9D6"}(r));var e}))}(bt,t),function(n,t){t.forEach((function(t){return ft(n,t,"#FF2E63")}))}(bt,r),function(n,t){at(n,t.toString(),610,20,"rgba(0, 0, 0, 0.4)",20)}(bt,e)},complete:function(){!function(n){n.fillStyle=st,n.fillRect(0,0,ut,ct),at(n,"GAME OVER!",315,315,"black",25)}(bt),_t.pipe(function(n,t){var r=arguments.length>=2;return function(e){return e.pipe(n?an((function(t,r){return n(t,r,e)})):L,Zn(1),r?tt(t):rt((function(){return new nt})))}}()).subscribe(kt)}};function kt(){bt.clearRect(0,0,ut,ct),It.subscribe(Tt),lt(bt),function(n){n.fillStyle=st,n.fillRect(0,0,ut,ct),at(n,"Press [enter]",315,315,"black",25)}(bt)}kt()})();
//# sourceMappingURL=main.bundle.js.map