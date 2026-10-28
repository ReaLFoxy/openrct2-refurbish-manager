!(function(){'use strict';var t;function n(t,n,i){var r=i?'queryAction':'executeAction';return new Promise((function(i,o){context[r]('ridesetstatus',{ride:t.id,status:n},e(i,o))}))}function i(t,n){var i=n?'queryAction':'executeAction';return new Promise((function(n,r){context[i]('ridedemolish',{ride:t.id,modifyType:1},e(n,r))}))}function e(t,n){return function(i){0===i.error?t(i):n(i)}}function r(t,n){park.postMessage({type:'attraction',text:n,subject:t.id})}!(function(t){t[t.RIDE_TYPE_MAZE=20]='RIDE_TYPE_MAZE',t[t.RIDE_TYPE_MINI_GOLF=67]='RIDE_TYPE_MINI_GOLF',t[t.RIDE_TYPE_CROOKED_HOUSE=71]='RIDE_TYPE_CROOKED_HOUSE'})(t||(t={}));var o=function(){return o=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var r in n=arguments[i])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},o.apply(this,arguments)},u=function(t,n){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},u(t,n)};function a(t,n){if('function'!=typeof n&&null!==n)throw new TypeError('Class extends value '+n+' is not a constructor or null');function i(){this.constructor=t}u(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}function s(t){return void 0===t}function c(t){return Array.isArray(t)}function h(t){return l(t,'function')}function f(t){return l(t,'object')}function l(t,n){return typeof t===n}var d='redraw',p=[4,0],v=[1,2],g=[0,0],y={top:g,right:g,bottom:g,left:g};function w(t){s(t.height)&&(t.height=14)}var m=Math.floor(1048575*Math.random())<<10;function b(){return(m++).toString(36)}function x(t,n){return t.subscribe(n)}var C=function(t,n,i,e){this.Ia=t,this.Ja=n,this.Ka=i,this.La=x(n,e)};function I(t){if(!t||!f(t))return!1;var n=t;return h(n.get)&&h(n.subscribe)}function O(t){return!(!t||!f(t))&&!(!(n=t.twoway)||!f(n))&&I(n)&&h(n.set);var n}var M=(function(){function t(){this.Ma=[],this.za=null}return t.prototype.add=function(t,n,i,e){this.on(t,i,(function(t,i){var r=e?e(i):i;t[n]=r}))},t.prototype.callback=function(t,n,i,e,r){O(i)?t[n]=function(t,n){var o=r?r(t,n):t;i.twoway.set(o),e&&e(o)}:e&&(t[n]=r?function(t,n){return e(r(t,n))}:e)},t.prototype.twoway=function(t,n,i,e,r){this.add(t,n,e),this.callback(t,i,e,r)},t.prototype.on=function(t,n,i){var e=(function(t){return O(t)?t.twoway:t})(n);if(I(e)){var r=this.Aa(t,e,i);this.Ma.push(r),i(t,e.get())}else s(e)||i(t,e)},t.prototype.Na=function(){this.za=null},t.prototype.Oa=function(){return this.Ma.length>0},t})(),R=(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a(n,t),n.prototype.ya=function(t){var n=t.ga;n&&this.Ba(n),this.za=t},n.prototype.Aa=function(t,n,i){var e=this;return new C('',n,i,(function(t){var n=e.za;n&&n.ua&&i(n.ua,t)}))},n.prototype.Ba=function(t){var n=this.Ma;if(n)for(var i=0,e=n;i<e.length;i++){var r=e[i];r.Ka(t,r.Ja.get())}},n})(M);function E(t,n){n||(n={});for(var i=0,e=t;i<e.length;i++){var r=e[i],o=r.name;o&&!(o in n)&&(n[o]=r)}return n}function _(t){return k(t,0)}function P(t){return k(t,1)}function A(t){return k(t,2)}function k(t,n){return t[1]===n}function D(t){throw Error(t)}function S(t){if(s(t))return t;if((function(t){return l(t,'number')})(t))return[t,0];var n=t.trim(),i=n.length;if(i>1){var e=i-1,r=void 0,o=n[e];if('w'===o?r=2:'%'===o?r=1:i>2&&(e--,'x'===o&&'p'===n[e]&&(r=0)),!s(r))return[parseFloat(n.substring(0,e)),r]}D('Value \''+t+'\' is not a valid scale.')}function T(t,n){return S(t)||n}function z(t){return T(t,g)}function W(t,n,i,e){switch(t[1]){case 2:return(i?t[0]/i:1)*n*(100-e)*.01;case 1:return.01*t[0]*n;default:return t[0]}}var F=['y','x'],G=['height','width'],U=['top','left'],j=['bottom','right'];function Y(t,n,i,e){var r=G[n],o=e[U[n]],u=e[j[n]],a=t[r]-N(i,o,u,_),s=N(i,o,u,P),c=N(i,o,u,A),h=W(i,a,c,s);return t[r]=h,H(t,n,e,a,c,s)}function H(t,n,i,e,r,o){return(function(t,n,i,e,r,o,u,a,s){var c=W(n[a],i,e,r),h=W(n[s],i,e,r);return t[o]+=c,c+t[u]+h})(t,i,e,r,o,F[n],G[n],U[n],j[n])}function N(t,n,i,e){var r=0;return e(t)&&(r+=t[0]),e(n)&&(r+=n[0]),e(i)&&(r+=i[0]),r}var B='inherit',L='auto',V=['minHeight','minWidth'],K=['maxHeight','maxWidth'];function X(t,n,i){if(l(i,'string'))return L;var e=i,r=e.value||i;return q(t,n,r,e.min||r,e.max||r),r}function Z(t,n,i,e,r){var o=G[n],u=e[U[n]],a=e[j[n]],s=i[o]+u[0]+a[0]+r;return _(u)&&_(a)||D('Padding for '+o+' must be absolute for auto window resize.'),q(t,n,s,s,s),s}function q(t,n,i,e,r){t[G[n]]=i,t[V[n]]=e,t[K[n]]=r}var J=(function(){function t(t){var n=this,i=t.width,e=t.height,r=t.position,o=new R,u={classification:'fui-'+b(),title:'',colours:t.colours,onUpdate:function(){n.ha(),n.c((function(t){return t.update()}))},onClose:function(){n.m()}},a=X(u,1,i),s=X(u,0,e);this.qa(a,s),o.add(u,'title',t.title),this.ea=o.Oa()?o:null,this.fa=r,this.ga=u}return t.prototype.ha=function(){var t=this.ua,n=this.t,i=this.w;if(t&&n){if(!(4&i)){var e=t.width,r=t.height,o=2&i||this.ra==e,u=1&i||this.sa==r;if(o&&u)return;this.ra=e,this.sa=r}this.d(t,n),this.w&=-5}},t.prototype.ma=function(t,n){return{x:0,y:n,width:2&t?L:this.ra,height:1&t?L:this.sa-n}},t.prototype.na=function(t,n,i,e){var r=this.w;2&r&&(this.ra=Z(t,1,n,e,0)),1&r&&(this.sa=Z(t,0,n,e,i))},t.prototype.qa=function(t,n){var i=this.w;t==L?i|=2:(i&=-3,this.ra=t),n==L?i|=1:(i&=-2,this.sa=n),this.w=i},t.prototype.l=function(t,n){this.d(t,this.a),(function(t,n){n&&'default'!==n&&('center'===n?(t.x=ui.width/2-t.width/2,t.y=ui.height/2-t.height/2):(t.x=n.x,t.y=n.y))})(t,this.fa),n&&n.ya(this);var i=ui.openWindow(t),e=E(i.widgets);this.ua=i,this.t=e,this.c((function(t){return t.open(i,e)}))},t.prototype.m=function(){this.c((function(t){return t.close()}));var t=this.ea;t&&t.Na(),this.ua=null,this.t=null},t.prototype.open=function(){if(this.ua)this.focus();else{var t=this.ga,n=this.ea;this.l(t,n)}},t.prototype.close=function(){this.ua&&this.ua.close()},t.prototype.focus=function(){this.ua&&this.ua.bringToFront()},t.prototype.redraw=function(){this.w|=4},t})(),$=function(t,n){this.position=t.parse(n),this.xa=t};function Q(t){return(tt(t.width)?1:0)|(tt(t.height)?2:0)}function tt(t){return s(t)||t===L}function nt(t,n,i,e,r){return it(t,n,(function(t){return(function(t,n,i,e){var r,o,u=i===e,a=0;if(u&&!_(n))return null;for(var s=G[e],c=U[e],h=j[e],f=-1,l=0,d=t;l<d.length;l++){var p=d[l],v=p.position,g=v[s],y=v.padding,w=y[c],m=y[h];if(!rt(g,w,m))return null;p.skip||(r=a,o=g[0]+w[0]+m[0],a=u?r+o:r<o?o:r,f++)}return u&&(a+=n[0]*f),a})(i,e,r,t)}))}function it(t,n,i){return!!(3&n&&et(t,1&n,1,i)|et(t,2&n,0,i))}function et(t,n,i,e){var r;if(n&&!(function(t){return null===t})(r=e(i))){var o=G[i],u=t[o];if(u[0]!==r||!_(u))return t[o]=[r,0],1}return 0}function rt(t,n,i){return _(t)&&_(n)&&_(i)}function ot(t,n,i){var e=t[0]*i;A(t)?n.D+=e:_(t)?n.H+=e:P(t)&&(n.T+=e)}function ut(t,n){var i;if(n||(n=y),s(t))i=t;else if(c(t)){var e=t.length;if(2===e){var r=z(t[0]),o=z(t[1]);i=st(r,o,r,o)}else 4===e?i=st(z(t[0]),z(t[1]),z(t[2]),z(t[3])):D('Padding array of unknown length: '+e+'. Only lengths of 2 or 4 are supported.')}else if(f(t))i=st(at(U[0],t,n),at(j[1],t,n),at(j[0],t,n),at(U[1],t,n));else{var u=z(t);i=st(u,u,u,u)}return i||n}function at(t,n,i){var e=n[t];return T(s(e)?n.rest:e,i[t])}function st(t,n,i,e){return{top:t,right:n,bottom:i,left:e}}function ct(t,n){return{width:T(t.width,v),height:T(t.height,v),padding:ut(t.padding,n)}}function ht(t){return t.direction=1,lt(t)}function ft(t){return t.direction=0,lt(t)}function lt(t){return function(n,i){return new dt(n,i,t)}}var dt=(function(t){function n(n,i,e){var r=t.call(this,n,e)||this;r.parse=ct,r.L=e.direction||0,r.M=S(e.spacing)||p;for(var o=Q(e),u=c(e)?e:e.content,a=u.length,s=Array(a),h=0;h<a;h++){var f=u[h];s[h]=f(r,i)}return r.w=4|o,r.v=s,i.on(d,(function(){var t=r.w;if(4&t){r.w&=-5;var n=r.v,i=n.filter((function(t){return!t.skip}));nt(r.position,t,n,r.M,r.L),r.N=i,r.O=i.map((function(t){return t.position}))}})),r}return a(n,t),n.prototype.recalculate=function(){this.w|=4,3&this.w&&this.xa.recalculate()},n.prototype.layout=function(t,n){var i=this;!(function(t,n,i,e,r){var o=t.length;if(o)for(var u=1==i?0:1,a=(function(t,n,i,e){var r=t.length,o={S:Array(r),H:0,T:0,D:0};ot(n,o,r-1);for(var u=0;u<r;u++){var a=t[u],s=a.padding,c={R:a[G[i]],rr:a[G[e]],h:s};o.S[u]=c;var h=c.R,f=c.h[U[i]],l=c.h[j[i]];ot(h,o,1),ot(f,o,1),ot(l,o,1)}return o})(t,e,i,u),s=n[G[i]]-a.H,c=a.D,h=a.T,f=W(e,s,c,h),l=0,d=0;d<o;d++){var p=a.S[d],v=l+n[F[i]],g=W(p.R,s,c,h),y=p.h,w={};w[F[i]]=v,w[G[i]]=g,w[F[u]]=n[F[u]],w[G[u]]=n[G[u]],l+=H(w,i,y,s,c,h),Y(w,u,p.rr,y),r(d,w),l+=f}})(this.O,n,this.L,this.M,(function(n,e){i.N[n].layout(t,e)}))},n})($),pt=(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a(n,t),n.prototype.ya=function(t){var n=t.Fa;n&&this.Ba(n),this.za=t},n.prototype.Aa=function(t,n,i){var e=this,r=t.name||(t.name=b());return new C(r,n,i,(function(t){var n=e.za;if(n&&n.isOpen()){var o=n.getWidget(r);o&&i(o,t)}}))},n.prototype.Ba=function(t){var n=this.Ma;if(n)for(var i=0,e=n;i<e.length;i++){var r=e[i];r.Ka(t[r.Ia],r.Ja.get())}},n})(M);function vt(t,n){for(var i=0,e=t.length;i<e;i++)t[i](n)}var gt=(function(){function t(t,n,i,e,r,o,u){this.width=t,this.height=n,this.xa=i,this.l=e,this.Ca=r,this.Da=o,this.m=u,this.recalculate=this.redraw}return t.prototype.layout=function(t,n){vt(this.Da,this);var i=this.j,e=i.position,r=yt(t,this.width,e,1),o=yt(t,this.height,e,0);return i.layout(n,t),{width:r,height:o}},t.prototype.redraw=function(){this.Fa&&this.xa.redraw()},t.prototype.parse=function(t){return{width:v,height:v,h:ut(t.padding)}},t.prototype.getWidget=function(t){var n,i=this.Fa;return i&&(n=i[t]),n||null},t.prototype.isOpen=function(){return!!this.Fa},t.prototype.open=function(t,n){X(t,1,this.width),X(t,0,this.height),this.Fa=n;var i=this.B;i&&i.ya(this),vt(this.l,this)},t.prototype.update=function(){vt(this.Ca,this)},t.prototype.close=function(){vt(this.m,this);var t=this.B;t&&t.Na(),this.Fa=void 0},t})();function yt(t,n,i,e){var r=G[e],o=t[r],u=i[r],a=i.h,s=n==B;return s&&o==L||n==L?(_(u)||D('Window body '+r+' must resolve to absolute size for "auto" window size.'),u[0]+(function(t,n,i){var e=n[U[i]],r=n[j[i]];return _(e)&&_(r)||D('Window padding must be absolute for "auto" window size.'),t[F[i]]+=e[0],e[0]+r[0]})(t,a,e)):(Y(t,e,u,a),s?o:u[0])}var wt=(function(){function t(t,n,i){this.va=[];var e=[],r=[],o=[],u=[],a=new gt(i.width||B,i.height||B,t,e,r,o,u),s=new pt,c=n.onOpen,h=n.onUpdate,f=n.onClose;this.open=e,this.update=r,this.redraw=o,this.close=u,this.binder=s,this.context=a,a.j=new dt(a,this,i),a.B=s.Oa()?s:null,c&&e.push(c),h&&r.push(h),f&&u.push(f)}return t.prototype.add=function(t){this.va.push(t)},t.prototype.on=function(t,n){this[t].push(n)},t})(),mt=(function(t){function n(n){var i=t.call(this,n)||this,e=new wt(i,n,n),r=e.va;return i.ga.widgets=r,i.a=E(r),i.b=e.context,i}return a(n,t),n.prototype.c=function(t){t(this.b)},n.prototype.d=function(t,n){var i=this.ma(this.w,15),e=this.b.layout(i,n);this.na(t,e,15,y)},n})(J),bt=(function(){function t(t){this.U=t}return t.prototype.get=function(){return this.U},t.prototype.subscribe=function(t){this.Ga?this.Ga.push(t):this.Ga=[t];var n=this.Ga;return function(){var i=n.indexOf(t);-1!==i&&n.splice(i,1)}},t.prototype.Ha=function(t){this.Ga&&vt(this.Ga,t)},t})(),xt=(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a(n,t),n.prototype.set=function(t){this.U!==t&&(this.U=t,this.Ha(t))},n})(bt);function Ct(t){return new xt(t)}function It(t){return I(t)?t.get():t}var Ot=Array.prototype.slice;function Mt(){for(var t=arguments,n=Ot.call(t,0,-1),i=n.length,e=t[i],r=Ct(Rt(n,e)),o=0;o<i;)x(n[o++],(function(){var t=Rt(n,e);return r.set(t)}));return r}function Rt(t,n){var i=t.map((function(t){return t.get()}));return n.apply(void 0,i)}function Et(t,n){I(t)?(x(t,n),n(t.get())):s(t)||n(t)}var _t=Math.round;function Pt(t,n,i){var e=t[n];e.x=_t(i.x),e.y=_t(i.y),e.width=_t(i.width-.1),e.height=_t(i.height-.1)}var At=(function(t){function n(n,i,e,r){var o=t.call(this,i,r)||this;o.name=b(),o.type=n,o.x=o.y=o.width=o.height=0;var u=e.binder,a=e.context,s=r.visibility;return u.add(o,'tooltip',r.tooltip),u.add(o,'isDisabled',r.disabled),u.add(o,'isVisible',s,(function(t){return'visible'===t})),Et(s,(function(t){var n=o.skip,e='none'===t;o.skip=e,(n||e)&&(i.recalculate(),a.redraw())})),e.add(o),o}return a(n,t),n.prototype.layout=function(t,n){Pt(t,this.name,n)},n})($);function kt(t){return function(n,i){return new Dt(n,i,t)}}var Dt=(function(t){function n(n,i,e){var r,o=this,u='groupbox',a='content',s=Q(e);if(a in e){o=t.call(this,u,n,i,e)||this,r=e[a];var c=i.binder,h=e.text;c.add(o,'text',h),s|=h?8:0}else o=t.call(this,u,n,i,{})||this,r=e;o.w=4|s;var f=r(o,i);return o.z=f,i.on(d,(function(){4&o.w&&(o.w&=-5,(function(t,n,i){it(t,n,(function(t){return(function(t,n){var i=t[G[n]],e=t.padding,r=e[U[n]],o=e[j[n]];return rt(i,r,o)?i[0]+r[0]+o[0]:null})(i,t)}))})(o.position,o.w,o.z.position))})),o}return a(n,t),n.prototype.parse=function(t){var n=ut(6);return 8&this.w&&(n.top=[15,0]),ct(t,n)},n.prototype.recalculate=function(){this.w|=4,3&this.w&&this.xa.recalculate()},n.prototype.layout=function(n,i){var e=8&this.w?0:4;i.y-=e,i.height+=e,t.prototype.layout.call(this,n,i),i.y+=e,i.height-=e;var r=this.z,o=r.position;(function(t,n,i,e){Y(t,1,n,e),Y(t,0,i,e)})(i,o.width,o.height,o.padding),r.layout(n,i)},n})(At),St=(function(t){function n(n,i,e){var r=t.call(this,'button',n,i,e)||this,o=i.binder;return o.add(r,'text',e.text),o.add(r,'image',e.image),o.add(r,'border',e.border),o.add(r,'isPressed',e.isPressed),r.onClick=e.onClick,r}return a(n,t),n})(At),Tt=(function(t){function n(n,i,e){var r=t.call(this,'checkbox',n,i,e)||this,o=i.binder;return o.add(r,'text',e.text),o.twoway(r,'isChecked','onChange',e.isChecked,e.onChange),r}return a(n,t),n.prototype.layout=function(n,i){i.y+=1,t.prototype.layout.call(this,n,i)},n})(At),zt=(function(t){function n(n,i,e){var r=t.call(this,'dropdown',n,i,e)||this;r.items=[],r.selectedIndex=0;var o,u=e.items,a=e.disabled,s=e.disabledMessage,c=e.onChange,h='empty'===(o=e.autoDisable)?0:'single'===o?1:-1,f=e.selectedIndex,l=function(t){r.C(t,It(u),It(a),h,s)},d=i.binder,p=l;I(u)&&(p=function(t,n){l(t),r.F(t,n),r.A=n}),d.on(r,u,p),d.on(r,f,(function(t,n){r.G=n,l(t)})),d.on(r,a,l);var v=(function(t,n,i){return n?function(e){t.E||(i?i(e,n):n(e))}:n})(r,c,(function(t,n){return n(t<0?0:t)}));return d.callback(r,'onChange',f,v),r}return a(n,t),n.prototype.C=function(t,n,i,e,r){this.E=!0;var o=i||!n||n.length<=e;o&&r?t.items=[r]:(t.items=n,t.selectedIndex=this.G||0),t.isDisabled=o,this.E=!1},n.prototype.F=function(t,n){var i=this.A;if(i){var e=i[t.selectedIndex||0],r=n.indexOf(e);r<0&&(r=0),this.G!==r&&(this.G=r,t.selectedIndex=r)}},n})(At);function Wt(t){return w(t),function(n,i){return new Ft(n,i,t)}}var Ft=(function(t){function n(n,i,e){var r=t.call(this,'spinner',n,i,e)||this;r.V=1,r.W=-2147483648,r.X=2147483647;var o=e.value,u=O(o)?o.twoway:(function(t){if(I(t)){var n=Ct(t.get());return x(t,(function(t){return n.set(t)})),n}return Ct(t)})(o||0),a=e.format||function(t){return t.toString()},s=i.binder,c=e.disabledMessage,h=e.minimum,f=e.maximum;if(c){var l=e.disabled;s.add(r,'text',l,(function(t){return t?c:a(u.get())}));var d=a;a=function(t){return It(l)?c:d(t)}}return r.U=u,s.add(r,'text',u,a),Et(e.step,(function(t){return r.V=t})),Et(h,(function(t){var n=u.get();r.W=t,n<t&&r._(t,t-n)})),Et(f,(function(t){var n=u.get();r.X=t,n>t&&r._(t,t-n)})),r.Y=e.wrapMode||'clamp',r.Z=e.onChange,r.onIncrement=function(){return r.$(1)},r.onDecrement=function(){return r.$(-1)},r.W>r.X&&D('Spinner: minimum '+r.W+' is larger than maximum '+r.X),r}return a(n,t),n.prototype.$=function(t){var n=this.W,i=this.X;if(!(n>=i)){var e,r=this.V*t,o=this.U.get(),u=o+r,a=this.Y;e='wrap'===a||'clampThenWrap'===a&&(u<n&&o===n||u>i&&o===i)?(function(t,n,i){return t<n?t=i:t>i&&(t=n),t})(u,n,i):(function(t,n,i){return t<n?t=n:t>i&&(t=i),t})(u,n,i),this._(e,r)}},n.prototype._=function(t,n){this.U.set(t),this.Z&&this.Z(t,n)},n})(At);function Gt(t){return w(t),function(n,i){return new Ut(n,i,t)}}var Ut=(function(t){function n(n,i,e){var r=t.call(this,'label',n,i,e)||this;r.text='';var o=i.binder;return o.add(r,'text',e.text),o.add(r,'textAlign',e.alignment),r}return a(n,t),n.prototype.layout=function(n,i){i.y+=2,t.prototype.layout.call(this,n,i)},n})(At),jt='refurbishManager.values';
var _savedStorage = context.getParkStorage().get(jt) || {};
if (_savedStorage.minCash >= 1000000) { _savedStorage.minCash = 0; }
if (_savedStorage.rideInProgress) { _savedStorage.rideInProgress = null; }

var Yt = Ct(o({
    autoRefurbish: !1,
    instantRefurbish: !1,
    rideInProgress: null,
    refurbishAge: 18,
    waiter: null,
    rides: [],
    selectedRideIndex: 0,
    minCash: 0
}, _savedStorage));

function Ht(t) {
    var n = o(o({}, Yt.get()), t);
    Yt.set(n);
}

function Nt(t) {
    var n = o(o({}, Yt.get()), t);
    Yt.set(n);
    var i = {
        autoRefurbish: n.autoRefurbish,
        instantRefurbish: n.instantRefurbish,
        refurbishAge: n.refurbishAge,
        rideInProgress: n.rideInProgress,
        minCash: n.minCash
    };
    context.getParkStorage().set(jt, i);
}

function reportRefurbishError(ride) {
    return function(err) {
        var name = (ride && ride.name) ? ride.name : 'Ride';
        var errMsg = (err && (err.errorMessage || err.message)) ? (err.errorMessage || err.message) : String(err);
        console.log('Error refurbishing ' + name + ': ' + errMsg);
        if (ride) {
            r(ride, 'Error refurbishing ' + name + ': ' + errMsg);
            n(ride, 1, !1).catch(function() {});
        }
        Nt({ rideInProgress: null });
    };
}

// Mode 1: Instant Refurbish (Double-close forces reset and passenger eviction, refurbishes immediately)
function executeInstantRefurbish(ride) {
    return new Promise(function(resolve, reject) {
        if (!ride) {
            Nt({ rideInProgress: null });
            return reject(new Error('Ride not found'));
        }
        // First close closes queue; second close forces vehicle reset and passenger exit
        n(ride, 0, !1)
            .then(function() { return n(ride, 0, !1); })
            .then(function() {
                var retries = 0;
                function attemptRenew() {
                    retries++;
                    var currentRide = map.getRide(ride.id);
                    if (!currentRide) {
                        Nt({ rideInProgress: null });
                        return reject(new Error('Ride was deleted during refurbishment'));
                    }
                    i(currentRide, !1)
                        .then(function() {
                            r(currentRide, currentRide.name + ' has been refurbished!');
                            return n(currentRide, 1, !1);
                        })
                        .then(function() {
                            Nt({ rideInProgress: null });
                            resolve(currentRide);
                        })
                        .catch(function(err) {
                            if (retries < 5) {
                                var sub = context.subscribe('interval.day', function() {
                                    sub.dispose();
                                    n(ride, 0, !1).then(attemptRenew).catch(attemptRenew);
                                });
                            } else {
                                n(ride, 1, !1).catch(function() {});
                                Nt({ rideInProgress: null });
                                reject(err);
                            }
                        });
                }
                attemptRenew();
            })
            .catch(function(err) {
                if (ride) { n(ride, 1, !1).catch(function() {}); }
                Nt({ rideInProgress: null });
                reject(err);
            });
    });
}

// Mode 2: Realistic Natural Refurbish (Single-close allows current riders to finish lap and naturally exit)
function executeRealisticRefurbish(ride) {
    return new Promise(function(resolve, reject) {
        if (!ride) {
            Nt({ rideInProgress: null });
            return reject(new Error('Ride not found'));
        }
        // Single close: new guests cannot enter queue, existing passengers finish their ride
        n(ride, 0, !1)
            .then(function() {
                r(ride, ride.name + ' has shut down for refurbishment.');
                
                var daysWaited = 0;
                var maxWaitDays = 30; // 30 in-game days failsafe timeout to prevent infinite freeze
                
                var waiter = context.subscribe('interval.day', function() {
                    daysWaited++;
                    var currentRide = map.getRide(ride.id);
                    if (!currentRide) {
                        waiter.dispose();
                        Nt({ rideInProgress: null });
                        return reject(new Error('Ride was deleted during refurbishment'));
                    }
                    // Query if ride can be refurbished (succeeds only when completely empty and trains docked)
                    i(currentRide, !0)
                        .then(function() {
                            waiter.dispose();
                            // Execute actual renewal
                            return i(currentRide, !1)
                                .then(function() {
                                    r(currentRide, currentRide.name + ' has been refurbished!');
                                    return n(currentRide, 1, !1);
                                })
                                .then(function() {
                                    Nt({ rideInProgress: null });
                                    resolve(currentRide);
                                })
                                .catch(function(err) {
                                    n(currentRide, 1, !1).catch(function() {});
                                    Nt({ rideInProgress: null });
                                    reject(err);
                                });
                        })
                        .catch(function() {
                            // Query failed: ride is not yet empty
                            if (daysWaited >= maxWaitDays) {
                                waiter.dispose();
                                n(currentRide, 1, !1).catch(function() {});
                                Nt({ rideInProgress: null });
                                reject(new Error('Refurbishment timed out (ride took over ' + maxWaitDays + ' days to empty)'));
                            }
                        });
                });
            })
            .catch(function(err) {
                if (ride) { n(ride, 1, !1).catch(function() {}); }
                Nt({ rideInProgress: null });
                reject(err);
            });
    });
}

function startRefurbish(ride) {
    if (!ride) return;
    var isInstant = Yt.get().instantRefurbish;
    Nt({ rideInProgress: { ride: ride.id, status: isInstant ? 'instant' : 'realistic' } });
    var p = isInstant ? executeInstantRefurbish(ride) : executeRealisticRefurbish(ride);
    p.catch(reportRefurbishError(ride));
}

function Vt() {
    var state = Yt.get();
    var inProgress = state.rideInProgress;
    var minAge = state.refurbishAge;
    var minCash = state.minCash;

    if (minCash >= 1000000) {
        minCash = 0;
        Nt({ minCash: 0 });
    }

    if (inProgress || park.cash < minCash) {
        return;
    }

    var eligible = map.rides.filter(function(r) {
        return 'ride' === r.classification &&
               -1 === Object.values(t).indexOf(r.type) &&
               r.age > minAge;
    });

    if (eligible.length > 0) {
        // Prioritize oldest ride
        eligible.sort(function(a, b) { return b.age - a.age; });
        var target = eligible[0];
        startRefurbish(target);
    }
}

function Kt(enabled) {
    var oldWaiter = Yt.get().waiter;
    if (oldWaiter) { oldWaiter.dispose(); }
    Nt(enabled ? {
        autoRefurbish: !0,
        waiter: context.subscribe('interval.day', Vt)
    } : {
        autoRefurbish: !1,
        waiter: null
    });
}

var Xt = (function(wConfig) {
    return s(wConfig.padding) && (wConfig.padding = 5), new mt(wConfig);
})({
    title: 'Refurbish Manager (v1.2.0)',
    width: { value: 230, min: 230, max: 230 },
    height: { value: 210, min: 210, max: 210 },
    onOpen: function() {
        var avail = map.rides.filter(function(r) {
            return 'ride' === r.classification && -1 === Object.values(t).indexOf(r.type);
        });
        var curIdx = Yt.get().selectedRideIndex;
        var newIdx = (curIdx >= 0 && curIdx < avail.length) ? curIdx : (avail.length > 0 ? 0 : -1);
        Ht({
            rides: avail,
            selectedRideIndex: newIdx,
            selectedRide: newIdx >= 0 ? avail[newIdx] : null
        });
    },
    content: [
        kt({
            text: 'Auto refurbishment',
            content: ft({
                content: [
                    (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                        text: 'Enabled',
                        isChecked: Yt.get().autoRefurbish,
                        onChange: Kt
                    }),
                    (function(c) { return w(c), function(n, i) { return new Tt(n, i, c); }; })({
                        text: 'Instant refurbish (Force empty)',
                        tooltip: 'Checked: forces riders to exit and refurbishes immediately.\nUnchecked: realistic mode (waits for all current riders to naturally finish and exit).',
                        isChecked: Yt.get().instantRefurbish,
                        onChange: function(val) { Nt({ instantRefurbish: val }); }
                    }),
                    ht({
                        content: [
                            Gt({ text: 'Min. ride age (months)', width: '68%' }),
                            Wt({
                                minimum: 1,
                                value: Yt.get().refurbishAge,
                                onChange: function(val) { Nt({ refurbishAge: val }); }
                            })
                        ]
                    }),
                    ht({
                        content: [
                            Gt({ text: 'Min. cash', width: '38%' }),
                            Wt({
                                minimum: 0,
                                step: 10000,
                                value: Yt.get().minCash,
                                format: function(val) { return context.formatString('{CURRENCY}', val); },
                                onChange: function(val) { Nt({ minCash: val }); }
                            })
                        ]
                    })
                ]
            })
        }),
        kt({
            text: 'Manual refurbishment',
            content: ft({
                content: [
                    (function(c) { return w(c), function(n, i) { return new zt(n, i, c); }; })({
                        items: Mt(Yt, function(st) { return st.rides.map(function(r) { return r.name; }); }),
                        selectedIndex: Mt(Yt, function(st) { return st.selectedRideIndex; }),
                        onChange: function(idx) {
                            var rList = Yt.get().rides;
                            Ht({
                                selectedRideIndex: idx,
                                selectedRide: (idx >= 0 && idx < rList.length) ? rList[idx] : null
                            });
                        }
                    }),
                    (function(c) { return function(n, i) { return new St(n, i, c); }; })({
                        text: 'Refurbish now',
                        height: '28px',
                        disabled: Mt(Yt, function(st) { return !!st.rideInProgress; }),
                        onClick: function() {
                            var st = Yt.get();
                            var ride = st.selectedRide;
                            if (!ride && st.rides && st.rides.length > 0) {
                                ride = st.rides[0];
                            }
                            if (ride && !st.rideInProgress) {
                                startRefurbish(ride);
                            }
                        }
                    })
                ]
            })
        })
    ]
});

registerPlugin({
    name: 'RefurbishManager',
    version: '1.2.0',
    authors: ['Ellis Clayton', 'Patched'],
    type: 'local',
    licence: 'MIT',
    targetApiVersion: 111,
    main: function() {
        if (Yt.get().autoRefurbish) {
            Kt(!0);
        }
        var inProg = Yt.get().rideInProgress;
        if (inProg && inProg.ride !== undefined) {
            var rTarget = map.getRide(inProg.ride);
            if (rTarget) {
                startRefurbish(rTarget);
            } else {
                Nt({ rideInProgress: null });
            }
        }
        if (typeof ui !== 'undefined') {
            ui.registerMenuItem('Refurbish Manager', function() {
                Xt.open();
            });
        }
    }
});
})();
