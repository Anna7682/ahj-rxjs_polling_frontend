/*! For license information please see main.28a89cce22608bd39047.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkahj_rxjs_polling_frontend=self.webpackChunkahj_rxjs_polling_frontend||[]).push([[179],{540:()=>{var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}var n=function(){return n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};function r(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}c((r=r.apply(t,e||[])).next())}))}function o(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}Object.create;function i(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function s(t,e){for(var n=0,r=e.length,o=t.length;n<r;n++,o++)t[o]=e[n];return t}function c(t){return this instanceof c?(this.v=t,this):new c(t)}function a(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||s(t,e)}))})}function s(t,e){try{(n=o[t](e)).value instanceof c?Promise.resolve(n.value.v).then(a,l):f(i[0][2],n)}catch(t){f(i[0][3],t)}var n}function a(t){s("next",t)}function l(t){s("throw",t)}function f(t,e){t(e),i.shift(),i.length&&s(i[0][0],i[0][1])}}function l(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=i(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}}Object.create;function f(t){return"function"==typeof t}function d(t){var e=t((function(t){Error.call(t),t.stack=(new Error).stack}));return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var h=d((function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}));function p(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var v=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}var e;return t.prototype.unsubscribe=function(){var t,e,n,r,o;if(!this.closed){this.closed=!0;var c=this._parentage;if(c)if(this._parentage=null,Array.isArray(c))try{for(var a=i(c),l=a.next();!l.done;l=a.next()){l.value.remove(this)}}catch(e){t={error:e}}finally{try{l&&!l.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}else c.remove(this);var d=this.initialTeardown;if(f(d))try{d()}catch(t){o=t instanceof h?t.errors:[t]}var p=this._teardowns;if(p){this._teardowns=null;try{for(var v=i(p),y=v.next();!y.done;y=v.next()){var m=y.value;try{b(m)}catch(t){o=null!=o?o:[],t instanceof h?o=s(s([],u(o)),u(t.errors)):o.push(t)}}}catch(t){n={error:t}}finally{try{y&&!y.done&&(r=v.return)&&r.call(v)}finally{if(n)throw n.error}}}if(o)throw new h(o)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)b(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._teardowns=null!==(n=this._teardowns)&&void 0!==n?n:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&p(e,t)},t.prototype.remove=function(e){var n=this._teardowns;n&&p(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}();v.EMPTY;function y(t){return t instanceof v||t&&"closed"in t&&f(t.remove)&&f(t.add)&&f(t.unsubscribe)}function b(t){f(t)?t():t.unsubscribe()}var m=function(t){function n(e,n){return t.call(this)||this}return e(n,t),n.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},n}(v),w={setInterval:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=w.delegate;return((null==n?void 0:n.setInterval)||setInterval).apply(void 0,s([],u(t)))},clearInterval:function(t){var e=w.delegate;return((null==e?void 0:e.clearInterval)||clearInterval)(t)},delegate:void 0},g=function(t){function n(e,n){var r=t.call(this,e,n)||this;return r.scheduler=e,r.work=n,r.pending=!1,r}return e(n,t),n.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(r,this.id,e),this},n.prototype.requestAsyncId=function(t,e,n){return void 0===n&&(n=0),w.setInterval(t.flush.bind(t,this),n)},n.prototype.recycleAsyncId=function(t,e,n){if(void 0===n&&(n=0),null!=n&&this.delay===n&&!1===this.pending)return e;w.clearInterval(e)},n.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,e){var n,r=!1;try{this.work(t)}catch(t){r=!0,n=t||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),n},n.prototype.unsubscribe=function(){if(!this.closed){var e=this.id,n=this.scheduler,r=n.actions;this.work=this.state=this.scheduler=null,this.pending=!1,p(r,this),null!=e&&(this.id=this.recycleAsyncId(n,e,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},n}(m),x={now:function(){return(x.delegate||Date).now()},delegate:void 0},_=function(){function t(e,n){void 0===n&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(t,e,n){return void 0===e&&(e=0),new this.schedulerActionCtor(this,t).schedule(n,e)},t.now=x.now,t}(),S=new(function(t){function n(e,n){void 0===n&&(n=_.now);var r=t.call(this,e,n)||this;return r.actions=[],r._active=!1,r._scheduled=void 0,r}return e(n,t),n.prototype.flush=function(t){var e=this.actions;if(this._active)e.push(t);else{var n;this._active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}},n}(_))(g),E=S,T={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},j={setTimeout:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=j.delegate;return((null==n?void 0:n.setTimeout)||setTimeout).apply(void 0,s([],u(t)))},clearTimeout:function(t){var e=j.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function P(t){j.setTimeout((function(){var e=T.onUnhandledError;if(!e)throw t;e(t)}))}function O(){}var I=k("C",void 0,void 0);function k(t,e,n){return{kind:t,value:e,error:n}}var A=null;function L(t){T.useDeprecatedSynchronousErrorHandling&&A&&(A.errorThrown=!0,A.error=t)}var q=function(t){function n(e){var n=t.call(this)||this;return n.isStopped=!1,e?(n.destination=e,y(e)&&e.add(n)):n.destination=U,n}return e(n,t),n.create=function(t,e,n){return new C(t,e,n)},n.prototype.next=function(t){this.isStopped?R(function(t){return k("N",t,void 0)}(t),this):this._next(t)},n.prototype.error=function(t){this.isStopped?R(k("E",void 0,t),this):(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped?R(I,this):(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(v),C=function(t){function n(e,n,r){var o,i=t.call(this)||this;if(f(e))o=e;else if(e){var u;o=e.next,n=e.error,r=e.complete,i&&T.useDeprecatedNextContext?(u=Object.create(e)).unsubscribe=function(){return i.unsubscribe()}:u=e,o=null==o?void 0:o.bind(u),n=null==n?void 0:n.bind(u),r=null==r?void 0:r.bind(u)}return i.destination={next:o?D(o,i):O,error:D(null!=n?n:H,i),complete:r?D(r,i):O},i}return e(n,t),n}(q);function D(t,e){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{t.apply(void 0,s([],u(e)))}catch(t){T.useDeprecatedSynchronousErrorHandling?L(t):P(t)}}}function H(t){throw t}function R(t,e){var n=T.onStoppedNotification;n&&j.setTimeout((function(){return n(t,e)}))}var U={closed:!0,next:O,error:H,complete:O},N="function"==typeof Symbol&&Symbol.observable||"@@observable";function M(t){return t}function F(t){return 0===t.length?M:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var $=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r,o=this,i=(r=t)&&r instanceof q||function(t){return t&&f(t.next)&&f(t.error)&&f(t.complete)}(r)&&y(r)?t:new C(t,e,n);return function(t){if(T.useDeprecatedSynchronousErrorHandling){var e=!A;if(e&&(A={errorThrown:!1,error:null}),t(),e){var n=A,r=n.errorThrown,o=n.error;if(A=null,r)throw o}}else t()}((function(){var t=o,e=t.operator,n=t.source;i.add(e?e.call(i,n):n?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=B(e))((function(e,r){var o;o=n.subscribe((function(e){try{t(e)}catch(t){r(t),null==o||o.unsubscribe()}}),r,e)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[N]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return F(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=B(t))((function(t,n){var r;e.subscribe((function(t){return r=t}),(function(t){return n(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}();function B(t){var e;return null!==(e=null!=t?t:T.Promise)&&void 0!==e?e:Promise}function X(t){return t&&f(t.schedule)}function G(t,e,n){void 0===t&&(t=0),void 0===n&&(n=E);var r=-1;return null!=e&&(X(e)?n=e:r=e),new $((function(e){var o,i=(o=t)instanceof Date&&!isNaN(o)?+t-n.now():t;i<0&&(i=0);var u=0;return n.schedule((function(){e.closed||(e.next(u++),0<=r?this.schedule(void 0,r):e.complete())}),i)}))}function J(t){return function(e){if(function(t){return f(null==t?void 0:t.lift)}(e))return e.lift((function(e){try{return t(e,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}var Y=function(t){function n(e,n,r,o,i){var u=t.call(this,e)||this;return u.onFinalize=i,u._next=n?function(t){try{n(t)}catch(t){e.error(t)}}:t.prototype._next,u._error=o?function(t){try{o(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,u._complete=r?function(){try{r()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,u}return e(n,t),n.prototype.unsubscribe=function(){var e,n=this.closed;t.prototype.unsubscribe.call(this),!n&&(null===(e=this.onFinalize)||void 0===e||e.call(this))},n}(q);function z(t,e){return J((function(n,r){var o=0;n.subscribe(new Y(r,(function(n){r.next(t.call(e,n,o++))})))}))}var V=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function Z(t){return f(null==t?void 0:t.then)}function K(t){return f(t[N])}function Q(t){return Symbol.asyncIterator&&f(null==t?void 0:t[Symbol.asyncIterator])}function W(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var tt="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function et(t){return f(null==t?void 0:t[tt])}function nt(t){return a(this,arguments,(function(){var e,n,r;return o(this,(function(o){switch(o.label){case 0:e=t.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,c(e.read())];case 3:return n=o.sent(),r=n.value,n.done?[4,c(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,c(r)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}}))}))}function rt(t){return f(null==t?void 0:t.getReader)}function ot(t){if(t instanceof $)return t;if(null!=t){if(K(t))return o=t,new $((function(t){var e=o[N]();if(f(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(V(t))return r=t,new $((function(t){for(var e=0;e<r.length&&!t.closed;e++)t.next(r[e]);t.complete()}));if(Z(t))return n=t,new $((function(t){n.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,P)}));if(Q(t))return it(t);if(et(t))return e=t,new $((function(t){var n,r;try{for(var o=i(e),u=o.next();!u.done;u=o.next()){var s=u.value;if(t.next(s),t.closed)return}}catch(t){n={error:t}}finally{try{u&&!u.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}t.complete()}));if(rt(t))return it(nt(t))}var e,n,r,o;throw W(t)}function it(t){return new $((function(e){(function(t,e){var n,i,u,s;return r(this,void 0,void 0,(function(){var r,c;return o(this,(function(o){switch(o.label){case 0:o.trys.push([0,5,6,11]),n=l(t),o.label=1;case 1:return[4,n.next()];case 2:if((i=o.sent()).done)return[3,4];if(r=i.value,e.next(r),e.closed)return[2];o.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=o.sent(),u={error:c},[3,11];case 6:return o.trys.push([6,,9,10]),i&&!i.done&&(s=n.return)?[4,s.call(n)]:[3,8];case 7:o.sent(),o.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}}))}))})(t,e).catch((function(t){return e.error(t)}))}))}function ut(t,e,n,r,o){void 0===r&&(r=0),void 0===o&&(o=!1);var i=e.schedule((function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()}),r);if(t.add(i),!o)return i}function st(t,e,n){return void 0===n&&(n=1/0),f(e)?st((function(n,r){return z((function(t,o){return e(n,t,r,o)}))(ot(t(n,r)))}),n):("number"==typeof e&&(n=e),J((function(e,r){return function(t,e,n,r,o,i,u,s){var c=[],a=0,l=0,f=!1,d=function(){!f||c.length||a||e.complete()},h=function(t){return a<r?p(t):c.push(t)},p=function(t){i&&e.next(t),a++;var s=!1;ot(n(t,l++)).subscribe(new Y(e,(function(t){null==o||o(t),i?h(t):e.next(t)}),(function(){s=!0}),void 0,(function(){if(s)try{a--;for(var t=function(){var t=c.shift();u?ut(e,u,(function(){return p(t)})):p(t)};c.length&&a<r;)t();d()}catch(t){e.error(t)}})))};return t.subscribe(new Y(e,h,(function(){f=!0,d()}))),function(){null==s||s()}}(e,r,t,n)})))}function ct(t){return J((function(e,n){var r,o=null,i=!1;o=e.subscribe(new Y(n,void 0,void 0,(function(u){r=ot(t(u,ct(t)(e))),o?(o.unsubscribe(),o=null,r.subscribe(n)):i=!0}))),i&&(o.unsubscribe(),o=null,r.subscribe(n))}))}function at(t){return t[t.length-1]}function lt(t){return X(at(t))?t.pop():void 0}function ft(t,e){return void 0===e&&(e=0),J((function(n,r){n.subscribe(new Y(r,(function(n){return ut(r,t,(function(){return r.next(n)}),e)}),(function(){return ut(r,t,(function(){return r.complete()}),e)}),(function(n){return ut(r,t,(function(){return r.error(n)}),e)})))}))}function dt(t,e){return void 0===e&&(e=0),J((function(n,r){r.add(t.schedule((function(){return n.subscribe(r)}),e))}))}function ht(t,e){if(!t)throw new Error("Iterable cannot be null");return new $((function(n){ut(n,e,(function(){var r=t[Symbol.asyncIterator]();ut(n,e,(function(){r.next().then((function(t){t.done?n.complete():n.next(t.value)}))}),0,!0)}))}))}function pt(t,e){if(null!=t){if(K(t))return function(t,e){return ot(t).pipe(dt(e),ft(e))}(t,e);if(V(t))return function(t,e){return new $((function(n){var r=0;return e.schedule((function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())}))}))}(t,e);if(Z(t))return function(t,e){return ot(t).pipe(dt(e),ft(e))}(t,e);if(Q(t))return ht(t,e);if(et(t))return function(t,e){return new $((function(n){var r;return ut(n,e,(function(){r=t[tt](),ut(n,e,(function(){var t,e,o;try{e=(t=r.next()).value,o=t.done}catch(t){return void n.error(t)}o?n.complete():n.next(e)}),0,!0)})),function(){return f(null==r?void 0:r.return)&&r.return()}}))}(t,e);if(rt(t))return function(t,e){return ht(nt(t),e)}(t,e)}throw W(t)}function vt(t,e){return e?pt(t,e):ot(t)}function yt(t){switch(t.responseType){case"json":if("response"in t)return t.response;var e=t;return JSON.parse(e.responseText);case"document":return t.responseXML;default:return"response"in t?t.response:(e=t).responseText}}var bt=function(t,e,n,r){void 0===r&&(r="download_load"),this.originalEvent=t,this.xhr=e,this.request=n,this.type=r;var o=e.status,i=e.responseType;this.status=null!=o?o:0,this.responseType=null!=i?i:"";var u=e.getAllResponseHeaders();this.responseHeaders=u?u.split("\n").reduce((function(t,e){var n=e.indexOf(": ");return t[e.slice(0,n)]=e.slice(n+2),t}),{}):{},this.response=yt(e);var s=t.loaded,c=t.total;this.loaded=s,this.total=c},mt=d((function(t){return function(t,e,n){var r;this.message=t,this.name="AjaxError",this.xhr=e,this.request=n,this.status=e.status,this.responseType=e.responseType;try{r=yt(e)}catch(t){r=e.responseText}this.response=r}})),wt=function(){function t(t,e){return mt.call(this,"ajax timeout",t,e),this.name="AjaxTimeoutError",this}return t.prototype=Object.create(mt.prototype),t}();function gt(t,e){return Ot({method:"GET",url:t,headers:e})}function xt(t,e,n){return Ot({method:"POST",url:t,body:e,headers:n})}function _t(t,e){return Ot({method:"DELETE",url:t,headers:e})}function St(t,e,n){return Ot({method:"PUT",url:t,body:e,headers:n})}function Et(t,e,n){return Ot({method:"PATCH",url:t,body:e,headers:n})}var Tt=z((function(t){return t.response}));function jt(t,e){return Tt(Ot({method:"GET",url:t,headers:e}))}var Pt,Ot=(Pt=function(t){return function(t){return new $((function(e){var r,o,i,u=t.queryParams,s=t.body,c=t.headers,a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}(t,["queryParams","body","headers"]),l=a.url;if(!l)throw new TypeError("url is required");if(u)if(l.includes("?")){var f=l.split("?");if(2<f.length)throw new TypeError("invalid url");i=new URLSearchParams(f[1]),new URLSearchParams(u).forEach((function(t,e){return i.set(e,t)})),l=f[0]+"?"+i}else l=l+"?"+(i=new URLSearchParams(u));var d={};if(c)for(var h in c)c.hasOwnProperty(h)&&(d[h.toLowerCase()]=c[h]);t.crossDomain||"x-requested-with"in d||(d["x-requested-with"]="XMLHttpRequest");var p=a.withCredentials,v=a.xsrfCookieName,y=a.xsrfHeaderName;if((p||!a.crossDomain)&&v&&y){var b=null!==(o=null===(r=null===document||void 0===document?void 0:document.cookie.match(new RegExp("(^|;\\s*)("+v+")=([^;]*)")))||void 0===r?void 0:r.pop())&&void 0!==o?o:"";b&&(d[y]=b)}var m,w=function(t,e){var n;if(!t||"string"==typeof t||function(t){return"undefined"!=typeof FormData&&t instanceof FormData}(t)||function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}(t)||function(t){return Dt(t,"ArrayBuffer")}(t)||function(t){return Dt(t,"File")}(t)||function(t){return Dt(t,"Blob")}(t)||function(t){return"undefined"!=typeof ReadableStream&&t instanceof ReadableStream}(t))return t;if(function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView(t)}(t))return t.buffer;if("object"==typeof t)return e["content-type"]=null!==(n=e["content-type"])&&void 0!==n?n:"application/json;charset=utf-8",JSON.stringify(t);throw new TypeError("Unknown body type")}(s,d),g=n(n({async:!0,crossDomain:!0,withCredentials:!1,method:"GET",timeout:0,responseType:"json"},a),{url:l,headers:d,body:w});m=t.createXHR?t.createXHR():new XMLHttpRequest;var x=t.progressSubscriber,_=t.includeDownloadProgress,S=void 0!==_&&_,E=t.includeUploadProgress,T=void 0!==E&&E,j=function(t,n){m.addEventListener(t,(function(){var t,r=n();null===(t=null==x?void 0:x.error)||void 0===t||t.call(x,r),e.error(r)}))};j("timeout",(function(){return new wt(m,g)})),j("abort",(function(){return new mt("aborted",m,g)}));var P=function(t,e){return new bt(e,m,g,t+"_"+e.type)},O=function(t,n,r){t.addEventListener(n,(function(t){e.next(P(r,t))}))};T&&[At,Lt,qt].forEach((function(t){return O(m.upload,t,It)})),x&&[At,Lt].forEach((function(t){return m.upload.addEventListener(t,(function(t){var e;return null===(e=null==x?void 0:x.next)||void 0===e?void 0:e.call(x,t)}))})),S&&[At,Lt].forEach((function(t){return O(m,t,kt)}));var I=function(t){var n="ajax error"+(t?" "+t:"");e.error(new mt(n,m,g))};m.addEventListener("error",(function(t){var e;null===(e=null==x?void 0:x.error)||void 0===e||e.call(x,t),I()})),m.addEventListener(qt,(function(t){var n,r,o=m.status;if(o<400){null===(n=null==x?void 0:x.complete)||void 0===n||n.call(x);var i=void 0;try{i=P(kt,t)}catch(t){return void e.error(t)}e.next(i),e.complete()}else null===(r=null==x?void 0:x.error)||void 0===r||r.call(x,t),I(o)}));var k=g.user,A=g.method,L=g.async;for(var h in k?m.open(A,l,L,k,g.password):m.open(A,l,L),L&&(m.timeout=g.timeout,m.responseType=g.responseType),"withCredentials"in m&&(m.withCredentials=g.withCredentials),d)d.hasOwnProperty(h)&&m.setRequestHeader(h,d[h]);return w?m.send(w):m.send(),function(){m&&4!==m.readyState&&m.abort()}}))}("string"==typeof t?{url:t}:t)},Pt.get=gt,Pt.post=xt,Pt.delete=_t,Pt.put=St,Pt.patch=Et,Pt.getJSON=jt,Pt),It="upload",kt="download",At="loadstart",Lt="progress",qt="load";var Ct=Object.prototype.toString;function Dt(t,e){return Ct.call(t)==="[object "+e+"]"}class Ht{constructor(t,e){if(!(t instanceof HTMLElement))throw new Error("container is not HTMLElement");this.url=e,this.rootElement=t,this.container=this.rootElement.querySelector(".table__tbody"),this.subject=null,this.quantity=this.rootElement.querySelector(".table__tfoot-quantity"),this.count=0,this.container.addEventListener("click",Ht.onSubjectClick)}static onSubjectClick(t){(t.target.classList.contains("subject")||"part1"===t.target.className||"part2"===t.target.className||"body"===t.target.className)&&(t.target.closest(".subject").querySelector(".dots").classList.toggle("d_none"),t.target.closest(".subject").querySelector(".part2").classList.toggle("d_none"),t.target.closest(".subject").querySelector(".body").classList.toggle("d_none"),t.target.closest(".subject").classList.toggle("checked"))}subscribeToUpdate(){var t,e;this.stream$=(t=5e3,void 0===t&&(t=0),void 0===e&&(e=S),t<0&&(t=0),G(t,t,e)).pipe(st((()=>Ot.getJSON(this.url).pipe(ct((()=>function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=lt(t);return vt(t,n)}({messages:[]}))))))).subscribe((t=>this.drawMes(t.messages)))}drawMes(t){t.length>0&&t.forEach((t=>{t.subject.length>15?this.container.insertAdjacentHTML("afterbegin",Ht.markUp(t.id,t.from,Ht.shortenText(t.subject)[0],Ht.shortenText(t.subject)[1],Ht.dateFormatter(t.received),t.body)):this.container.insertAdjacentHTML("afterbegin",Ht.markUp(t.id,t.from,t.subject,"",Ht.dateFormatter(t.received),t.body)),this.count+=1,this.quantity.textContent=this.count}))}static shortenText(t){return[t.slice(0,15),t.slice(15,t.length)]}static markUp(t,e,n,r,o,i){return`<tr id="${t}">\n    <td>${e}</td>\n    <td class="subject"><span class="part1">${n}</span><span class="dots">...</span><span class="part2 d_none">${r}</span><span class="body d_none">${i}</span></td>\n    <td>${o}</td>\n  </tr>`}static cleanDate(t){const e=t.split(" ");return[e[1],e[0].slice(0,-1)].join(" ")}static dateFormatter(t){const e=new Intl.DateTimeFormat("ru",{timeZone:"Europe/Moscow",hour:"numeric",minute:"numeric",day:"numeric",month:"numeric",year:"numeric"});return Ht.cleanDate(e.format(t))}}new Ht(document.getElementById("root"),"https://ahj-rxjs-polling-redhead80.herokuapp.com/messages/unread").subscribeToUpdate()}},t=>{var e;e=540,t(t.s=e)}]);