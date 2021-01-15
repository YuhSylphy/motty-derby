(this["webpackJsonpmotty-derby"]=this["webpackJsonpmotty-derby"]||[]).push([[0],{246:function(e,t,n){},247:function(e,t,n){},434:function(e,t,n){},445:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(227),c=n(471),s=n(0),o=n.n(s),i=n(24),l=n.n(i),j=(n(246),n(247),n(7)),u=n(226),b=n(473),d=n(447),h=n(448),f=n(65),m=n(145),O=(n(434),n(44)),x=function(){var e=Object(s.useRef)(null),t=Object(O.c)((function(e){return e.horseDefs.list})),n=Object(s.useMemo)((function(){return function(e){var t=new Map,n=[];return e.forEach((function(e){t.set(e.name,{label:e.name,class:"owned ".concat(e.sex)}),e.motherName&&(t.has(e.motherName)||t.set(e.motherName,{label:e.motherName,class:"anothers female"}),n.push([{v:e.motherName,w:e.name},{class:"mother"}])),e.fatherName&&(t.has(e.fatherName)||t.set(e.fatherName,{label:e.fatherName,class:"anothers male"}),n.push([{v:e.fatherName,w:e.name},{class:"father"}]))})),{nodes:Array.from(t.entries()),edges:n}}(t)}),[t]);return Object(s.useEffect)((function(){var t=f.select(e.current);if(t.selectAll("g").remove(),0!==n.nodes.length||0!==n.edges.length){var r=(new m.graphlib.Graph).setGraph({rankdir:"LR"}).setDefaultEdgeLabel((function(){return{}}));n.nodes.forEach((function(e){r.setNode(e[0],e[1])})),r.nodes().forEach((function(e){var t=r.node(e);t.rx=t.ry=5})),n.edges.forEach((function(e){r.setEdge(e[0],e[1])}));var a=new m.render,c=t.append("g"),s=f.zoom().on("zoom",(function(){c.attr("transform",f.event.transform)}));t.call(s),a(f.select("svg g"),r);var o=(Number(t.attr("width"))-(r.graph().width||0))/2;c.attr("transform","translate(".concat(Number.isNaN(o)?0:o,", 20)"))}}),[e,n]),Object(r.jsx)(s.Fragment,{children:Object(r.jsx)("svg",{className:"d3-component mottv-derby-family",width:"100%",height:"70vh",ref:e})})},p=function(){return Object(r.jsxs)(b.a,{children:[Object(r.jsx)(d.a,{variant:"h4",children:"\u7cfb\u56f3"}),Object(r.jsx)(h.a,{children:Object(r.jsx)(x,{})})]})},g=function(){return Object(r.jsx)("h2",{children:"404 NOT FOUND"})},v=n(467),w=n(468),y=n(474),N=n(220),E=n(470),k=n(469),M=n(229),T=n(230),D=n(465),F=n(477),I=n(475),A=n(466),S=n(221),C=n.n(S),G=n(222),L=n.n(G),z=n(223),B=n.n(z),J=n(147),R=n(148),V=Object(D.a)((function(e){return Object(F.a)({root:{"& .name":{marginLeft:e.spacing(.5)},"& .male":{color:"#2196f3"},"& .female":{color:"#f44336"}}})})),W=function e(t){return function(n){return Object(r.jsx)(I.a,{className:n.className,nodeId:n.id,label:n.label,onIconClick:t(n),children:n.children.map(e(t))},n.id)}},_=function(){var e=V(),t=Object(s.useState)([]),n=Object(T.a)(t,2),a=n[0],c=n[1],o=Object(O.c)((function(e){return e.horseDefs.list})),i=Object(s.useMemo)((function(){return function(e){var t=new Set,n=new Map,a=function(e){return n.has(e)?n.get(e):function(){var t={id:e,label:Object(r.jsx)(s.Fragment,{}),children:[]};return n.set(e,t),t}()};return e.forEach((function(e){var n=a(e.name);n.className=[e.sex].join(" "),n.label=Object(r.jsxs)(s.Fragment,{children:[function(){switch(e.sex){case"male":return Object(r.jsx)(J.a,{icon:R.a});case"female":return Object(r.jsx)(J.a,{icon:R.b});case"unknown":return null;default:e.sex}}(),Object(r.jsx)("span",{className:"name",children:e.name})]}),e.motherName?a(e.motherName).children.push(n):t.add(n)})),{nodes:Array.from(t.values()),ids:Array.from(n.keys())}}(o)}),[o]),l=i.nodes,j=i.ids;Object(s.useEffect)((function(){c(j)}),[j]);var u=Object(s.useMemo)((function(){return function(e){return function(t){c(a.includes(e.id)?a.filter((function(t){return t!==e.id})):[].concat(Object(M.a)(a),[e.id]))}}}),[a,c]);return Object(r.jsx)(s.Fragment,{children:Object(r.jsx)(A.a,{className:e.root,expanded:a,defaultCollapseIcon:Object(r.jsx)(C.a,{}),defaultExpandIcon:Object(r.jsx)(L.a,{}),defaultEndIcon:Object(r.jsx)(B.a,{}),children:l.map(W(u))})})},U=function(){return Object(r.jsxs)(s.Fragment,{children:[Object(r.jsx)(d.a,{variant:"h4",children:"\u725d\u7cfb\u56f3"}),Object(r.jsx)(h.a,{children:Object(r.jsx)(_,{})})]})},Y=n(115),$=Object(Y.b)({name:"horseDefs",initialState:{list:[]},reducers:{init:function(){},set:function(e,t){e.list=t.payload.list}}}),q=$.actions,H=$.reducer,K=n(149),P=n.n(K),Q=n(224),X=n(476),Z=n(231),ee=Object(X.a)((function(e){return e.ofType(q.init.type).pipe(Object(Z.a)(Object(Q.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=q,e.next=3,fetch("".concat("/motty-derby","/assets/horse-defs.json")).then((function(e){return e.json()}));case 3:return e.t1=e.sent,e.t2={list:e.t1},e.abrupt("return",e.t0.set.call(e.t0,e.t2));case 6:case"end":return e.stop()}}),e)})))))})),te=function(){return Object(r.jsx)(v.a,{position:"static",children:Object(r.jsxs)(w.a,{children:[Object(r.jsx)(y.a,{edge:"start",color:"inherit","aria-label":"menu",disabled:!0,children:Object(r.jsx)(k.a,{})}),Object(r.jsx)(d.a,{variant:"h6",children:"MOTTV Derby"})]})})},ne=function(){var e=Object(N.a)();return Object(r.jsx)(b.a,{display:"flex",justifyContent:"flex-end",margin:e.spacing(.2),children:Object(r.jsx)(E.a,{href:"https://www.youtube.com/user/MOTTYGAMES/",target:"__blank",children:"MOTTV"})})},re=function(){var e=Object(N.a)(),t=Object(O.b)();return Object(s.useEffect)((function(){t(q.init())}),[t]),Object(r.jsx)(u.a,{basename:"/motty-derby",children:Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsx)(te,{}),Object(r.jsx)(b.a,{margin:e.spacing(.5),children:Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{path:"/family",children:Object(r.jsx)(p,{})}),Object(r.jsx)(j.b,{path:"/mare-line",children:Object(r.jsx)(U,{})}),Object(r.jsx)(j.b,{exact:!0,path:"/",children:Object(r.jsx)(j.a,{to:"/mare-line"})}),Object(r.jsx)(j.b,{children:Object(r.jsx)(g,{})})]})}),Object(r.jsx)(ne,{})]})})},ae=n(472),ce=Object(ae.a)({dependencies:{}}),se=Object(Y.a)({reducer:{horseDefs:H},middleware:function(e){return e({thunk:!1}).concat([ce])}});ce.run(Object(X.a)(ee));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=Object(a.a)({});l.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(c.a,{theme:oe,children:Object(r.jsx)(O.a,{store:se,children:Object(r.jsx)(re,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[445,1,2]]]);
//# sourceMappingURL=main.6bb2d2ec.chunk.js.map