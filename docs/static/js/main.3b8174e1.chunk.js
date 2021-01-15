(this["webpackJsonpmotty-derby"]=this["webpackJsonpmotty-derby"]||[]).push([[0],{254:function(e,t,n){},441:function(e,t,n){},451:function(e,t,n){},453:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(236),c=n(485),s=n(0),o=n.n(s),i=n(12),l=n.n(i),j=(n(254),n(124)),u=n(7),b=n(123),h=n(487),f=n(455),d=n(456),m=n(71),O=n(156),x=(n(441),n(51)),p=function(){var e=Object(s.useRef)(null),t=Object(x.c)((function(e){return e.horseDefs.list})),n=Object(s.useMemo)((function(){return function(e){var t=new Map,n=[];return e.forEach((function(e){t.set(e.name,{label:e.name,class:"owned ".concat(e.sex)}),e.motherName&&(t.has(e.motherName)||t.set(e.motherName,{label:e.motherName,class:"anothers female"}),n.push([{v:e.motherName,w:e.name},{class:"mother"}])),e.fatherName&&(t.has(e.fatherName)||t.set(e.fatherName,{label:e.fatherName,class:"anothers male"}),n.push([{v:e.fatherName,w:e.name},{class:"father"}]))})),{nodes:Array.from(t.entries()),edges:n}}(t)}),[t]);return Object(s.useEffect)((function(){var t=m.select(e.current);if(t.selectAll("g").remove(),0!==n.nodes.length||0!==n.edges.length){var a=(new O.graphlib.Graph).setGraph({rankdir:"LR"}).setDefaultEdgeLabel((function(){return{}}));n.nodes.forEach((function(e){a.setNode(e[0],e[1])})),a.nodes().forEach((function(e){var t=a.node(e);t.rx=t.ry=5})),n.edges.forEach((function(e){a.setEdge(e[0],e[1])}));var r=new O.render,c=t.append("g"),s=m.zoom().on("zoom",(function(){c.attr("transform",m.event.transform)}));t.call(s),r(m.select("svg g"),a);var o=(Number(t.attr("width"))-(a.graph().width||0))/2;c.attr("transform","translate(".concat(Number.isNaN(o)?0:o,", 20)"))}}),[e,n]),Object(a.jsx)(s.Fragment,{children:Object(a.jsx)("svg",{className:"d3-component mottv-derby-family",width:"100%",height:"70vh",ref:e})})},g=function(){return Object(a.jsxs)(h.a,{children:[Object(a.jsx)(f.a,{variant:"h4",children:"\u7cfb\u56f3"}),Object(a.jsx)(d.a,{children:Object(a.jsx)(p,{})})]})},v=function(){return Object(a.jsx)("h2",{children:"404 NOT FOUND"})},N=n(492),w=n(481),y=n(482),E=n(489),k=n(488),M=n(49),F=n(484),T=n(483),D=n(125),I=Object(D.b)({name:"horseDefs",initialState:{list:[]},reducers:{init:function(){},set:function(e,t){e.list=t.payload.list}}}),S=I.actions,A=I.reducer,C=n(158),L=n.n(C),G=n(231),z=n(490),B=n(239),J=Object(z.a)((function(e){return e.ofType(S.init.type).pipe(Object(B.a)(Object(G.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=S,e.next=3,fetch("".concat("/motty-derby","/assets/horse-defs.json")).then((function(e){return e.json()}));case 3:return e.t1=e.sent,e.t2={list:e.t1},e.abrupt("return",e.t0.set.call(e.t0,e.t2));case 6:case"end":return e.stop()}}),e)})))))})),R=n(238),V=n(479),W=n(491),_=n(495),U=n(480),Y=n(233),$=n.n(Y),q=n(234),H=n.n(q),K=n(235),P=n.n(K),Q=n(159),X=n(160),Z=Object(V.a)((function(e){return Object(W.a)({root:{"& .name":{marginLeft:e.spacing(.5)},"& .father":{marginLeft:e.spacing(1)},"& .male":{color:"#2196f3"},"& .female":{color:"#f44336"}}})})),ee=function e(t){return function(n){return Object(a.jsx)(_.a,{className:n.className,nodeId:n.id,label:n.label,onIconClick:t(n),children:n.children.map(e(t))},n.id)}},te=function(){var e=Z(),t=Object(s.useState)([]),n=Object(j.a)(t,2),r=n[0],c=n[1],o=Object(x.c)((function(e){return e.horseDefs.list})),i=Object(s.useMemo)((function(){return function(e){var t=new Set,n=new Map,r=function(e){return n.has(e)?n.get(e):function(){var t={id:e,label:Object(a.jsx)(s.Fragment,{}),children:[]};return n.set(e,t),t}()};return e.forEach((function(e){var n=r(e.name);n.className=[e.sex].join(" "),n.label=Object(a.jsxs)(s.Fragment,{children:[function(){switch(e.sex){case"male":return Object(a.jsx)(Q.a,{icon:X.a});case"female":return Object(a.jsx)(Q.a,{icon:X.b});case"unknown":return null;default:e.sex}}(),Object(a.jsx)("span",{className:"name",children:e.name}),e.fatherName?Object(a.jsxs)("span",{className:"father male",children:["(",e.fatherName,")"]}):null]}),e.motherName?r(e.motherName).children.push(n):t.add(n)})),{nodes:Array.from(t.values()),ids:Array.from(n.keys())}}(o)}),[o]),l=i.nodes,u=i.ids;Object(s.useEffect)((function(){c(u)}),[u]);var b=Object(s.useMemo)((function(){return function(e){return function(t){c(r.includes(e.id)?r.filter((function(t){return t!==e.id})):[].concat(Object(R.a)(r),[e.id]))}}}),[r,c]);return Object(a.jsx)(s.Fragment,{children:Object(a.jsx)(U.a,{className:e.root,expanded:r,defaultCollapseIcon:Object(a.jsx)($.a,{}),defaultExpandIcon:Object(a.jsx)(H.a,{}),defaultEndIcon:Object(a.jsx)(P.a,{}),children:l.map(ee(b))})})},ne=function(){return Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)(f.a,{variant:"h4",children:"\u725d\u7cfb\u56f3"}),Object(a.jsx)(d.a,{children:Object(a.jsx)(te,{})})]})},ae=(n(451),function(e){return Object(a.jsx)(f.a,{children:Object(a.jsx)(b.b,{to:e.path,children:e.label})})}),re=function(){return Object(a.jsx)(N.a,{children:[{label:"\u725d\u7cfb\u56f3",path:"/mare-line"},{label:"\u5bb6\u7cfb\u56f3(\u65e7)",path:"/family"}].map(ae)})},ce=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(s.useMemo)((function(){return function(){r(!n)}}),[n,r]);return Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsx)(w.a,{position:"static",children:Object(a.jsxs)(y.a,{children:[Object(a.jsx)(E.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:c,children:Object(a.jsx)(T.a,{})}),Object(a.jsx)(f.a,{variant:"h6",children:"MOTTV Derby"})]})}),Object(a.jsx)(k.a,{open:n,onClose:c,children:Object(a.jsx)(re,{})})]})},se=function(){var e=Object(M.a)();return Object(a.jsx)(h.a,{display:"flex",justifyContent:"flex-end",margin:e.spacing(.2),children:Object(a.jsx)(F.a,{href:"https://www.youtube.com/user/MOTTYGAMES/",target:"__blank",children:"MOTTV"})})},oe=function(){var e=Object(M.a)(),t=Object(x.b)();return Object(s.useEffect)((function(){t(S.init())}),[t]),Object(a.jsx)(b.a,{basename:"/motty-derby",children:Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsx)(ce,{}),Object(a.jsx)(h.a,{margin:e.spacing(.5),children:Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{path:"/family",children:Object(a.jsx)(g,{})}),Object(a.jsx)(u.b,{path:"/mare-line",children:Object(a.jsx)(ne,{})}),Object(a.jsx)(u.b,{exact:!0,path:"/",children:Object(a.jsx)(u.a,{to:"/mare-line"})}),Object(a.jsx)(u.b,{children:Object(a.jsx)(v,{})})]})}),Object(a.jsx)(se,{})]})})},ie=n(486),le=Object(ie.a)({dependencies:{}}),je=Object(D.a)({reducer:{horseDefs:A},middleware:function(e){return e({thunk:!1}).concat([le])}});le.run(Object(z.a)(J));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=Object(r.a)({});l.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(c.a,{theme:ue,children:Object(a.jsx)(x.a,{store:je,children:Object(a.jsx)(oe,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[453,1,2]]]);
//# sourceMappingURL=main.3b8174e1.chunk.js.map