(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(2),r=t.n(c),i=(t(9),t(3));t(10);var s=function(){var e=Object(o.useState)("loading"),n=Object(i.a)(e,2),t=n[0],c=n[1];return Object(o.useEffect)((function(){fetch("/api/ip").then((function(e){return e.json()})).then((function(e){console.log(e),c(e.ip)}))}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("p",null,"Ip from ajax: ",t))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.e07d8330.chunk.js.map