(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),s=n.n(r),o=(n(15),n(5)),l=n.n(o),u=n(1),i=n(8),m=n(2),f=n(9),p=function(e){var t=e.urls.regular,n=e.alt_description,a=e.likes,r=e.user,s=r.name,o=r.portfolio_url,l=r.profile_image.medium;return c.a.createElement("article",{className:"photo"},c.a.createElement("img",{src:t,alt:n}),c.a.createElement("div",{className:"photo-info"},c.a.createElement("div",null,c.a.createElement("h4",null,s),c.a.createElement("p",null,a," likes")),c.a.createElement("a",{href:o},c.a.createElement("img",{src:l,alt:s,className:"user-img"}))))},b="?client_id=".concat("Sm1a1qSUahzjbseIz8EE5lEVkb4hTJcdNW-r5hsUaGk");var h=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),o=Object(m.a)(s,2),h=o[0],E=o[1],d=Object(a.useState)(1),j=Object(m.a)(d,2),O=j[0],v=j[1],g=Object(a.useState)(""),w=Object(m.a)(g,2),N=w[0],k=w[1],S=Object(a.useState)(!1),y=Object(m.a)(S,2),x=y[0],_=y[1],J=Object(a.useRef)(!1),L=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),n="&page=".concat(O),a="&query=".concat(N),t=N?"".concat("https://api.unsplash.com/search/photos/").concat(b).concat(n).concat(a):"".concat("https://api.unsplash.com/photos/").concat(b).concat(n),e.prev=4,e.next=7,fetch(t);case 7:return c=e.sent,e.next=10,c.json();case 10:s=e.sent,E(N&&1===O?function(e){return Object(u.a)(s.results)}:N?function(e){return[].concat(Object(u.a)(e),Object(u.a)(s.results))}:function(e){return[].concat(Object(u.a)(e),Object(u.a)(s))}),_(!1),r(!1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),_(!1),r(!1);case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){L()}),[O]),Object(a.useEffect)((function(){J.current?x&&(n||v((function(e){return e+1}))):J.current=!0}),[x]);var q=function(){window.innerHeight+window.scrollY>=document.body.scrollHeight-5&&_(!0)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",q),function(){return window.removeEventListener("scroll",q)}}),[]),c.a.createElement("main",null,c.a.createElement("section",{className:"search"},c.a.createElement("form",{className:"search-form"},c.a.createElement("input",{type:"text",placeholder:"search",className:"form-input",value:N,onChange:function(e){k(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"submit-btn",onClick:function(e){e.preventDefault(),N&&(1!==O?v(1):L())}},c.a.createElement(f.a,null)))),c.a.createElement("section",{className:"photos"},c.a.createElement("div",{className:"photos-center"},h.map((function(e,t){return c.a.createElement(p,Object.assign({key:t},e))}))),n&&c.a.createElement("h2",{className:"loading"},"Loading...")))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.3a9b51c1.chunk.js.map