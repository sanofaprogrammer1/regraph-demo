(this["webpackJsonpregraph-demo"]=this["webpackJsonpregraph-demo"]||[]).push([[0],{132:function(e,t,n){e.exports=n(216)},140:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){},195:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var r,o=n(0),i=n(3),a=n(12),c=n(16),s=n(6),l=n(2),d=n(70),u=n(10),f=n.n(u),m=n(222),p=n(4),v=n(56);!function(e){e.common="common"}(r||(r={}));var g,h=Object(v.a)({},r.common,"\u901a\u7528");!function(e){e.mainOutput="mainOutput",e.errorOutput="errorOutput"}(g||(g={}));var y;!function(e){e.rect="rect",e.rectRadius="rectRadius",e.circle="circle",e.diamond="diamond",e.polygon="polygon",e.ellipse="ellipse",e.star="star"}(y||(y={}));var k=[{type:r.common,key:y.rect,name:"RECT",width:100,height:100,icon:o.createElement("div",{style:{width:36,height:36,border:"2px solid #52619b"}}),disabled:!1},{type:r.common,key:y.rectRadius,name:"RECT-RADIU",width:100,height:100,icon:o.createElement("div",{style:{width:36,height:36,border:"2px solid #52619b",borderRadius:10}}),disabled:!1},{type:r.common,key:y.circle,name:"CIRCLE",width:100,height:100,icon:o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"72px",height:"40px"},o.createElement("circle",{cx:"36",cy:"20",r:"18",stroke:"#52619b",strokeWidth:"2",fill:"transparent"})),disabled:!1}],b=Object(v.a)({},r.common,k);var w;!function(e){e.configuration="configuration",e.copy="copy",e.delete="delete",e.parallelism="parallelism",e.outputType="outputType",e.mainOutput="mainOutput",e.errorOutput="errorOutput",e.dataMethod="dataMethod",e.copyMethod="copyMethod",e.distribute="distribute",e.paste="paste",e.deleteLink="deleteLink",e.selectAll="selectAll",e.dragSelect="dragSelect"}(w||(w={}));n(140);var E=o.useState,x=(o.useEffect,m.a.Panel);function N(e){var t=Object.values(r),n=e.onDrag,i=e.visible,a=void 0!==i&&i,c=E([t[0]]),l=Object(s.a)(c,2),d=l[0],u=l[1],p=f()("nodePanel-box",{"nodePanel-box-visible":a}),v=function(e){n&&n(e)};return o.createElement("div",{className:"nodePanel"},o.createElement("div",{className:p},o.createElement("div",{className:"nodePanel-box-collapse"},o.createElement(m.a,{activeKey:d,onChange:function(e){u(e)},bordered:!0,accordion:!0},t.map((function(e){var t=b[e].length;return o.createElement(x,{key:e,header:o.createElement("div",{className:"collapse-title"},"".concat(h[e]," (").concat(t,")"))},o.createElement("div",{className:"components-box"},b[e].map((function(e){var t=f()("components-box-item",{"components-box-item-disabled no-drop":e.disabled});return o.createElement("div",{className:t,key:e.key,draggable:!0,onDrag:v.bind(null,e)},o.createElement("div",{className:"components-box-item-icon"},e.icon))}))))}))))))}var L=n(33);function C(){var e=document;return e.fullscreenElement||e.webkitFullscreenElement}n(192);var S=o.forwardRef((function(e,t){var n=e.screenScale,r=e.changeScreenScale,i=e.handleResizeTo,a=e.items,c=e.onShear,s=e.onCopy,l=e.onPaste,d=e.onDelete,u=e.onDragSelect,m=String(Math.round(n)),p=a.includes("fullscreen"),v=a.includes("zoom"),g=(a.includes("adapt"),a.includes("format"),a.includes("shear")),h=a.includes("copy"),y=a.includes("paste"),k=a.includes("delete"),b=a.includes("dragSelect"),w=C(),E=function(e){var t=n;e?(t=n+10)>200&&(t=200):(t=n-10)<50&&(t=50),i(t/100),r(t)},x=function(){var e;C()?document.exitFullscreen||document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():(e=t.current).requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()};return o.createElement("div",{className:"toolbar"},o.createElement("div",{className:"toolbar-scale"},m,"%"),o.createElement("div",{className:"toolbar-button"},function(){var e=f()({fullscreen:!w,"fullscreen-exit":w});return o.createElement(o.Fragment,null,v&&o.createElement(o.Fragment,null,o.createElement("div",{className:"toolbar-btn"},o.createElement(L.a,{type:"zoom-in",onClick:E.bind(null,!0)})),o.createElement("div",{className:"toolbar-btn"},o.createElement(L.a,{type:"zoom-out",onClick:E.bind(null,!1)}))),p&&o.createElement("div",{className:"toolbar-btn"},o.createElement(L.a,{type:e,onClick:x})),g&&o.createElement("div",{className:"toolbar-btn"},o.createElement(L.a,{type:"scissor",onClick:c})),h&&o.createElement("div",{className:"toolbar-btn"},o.createElement(L.a,{type:"copy",onClick:s})),y&&o.createElement("div",{className:"toolbar-btn"},o.createElement(L.a,{type:"snippets",onClick:l})),k&&o.createElement("div",{className:"toolbar-btn"},o.createElement(L.a,{type:"delete",onClick:d})),b&&o.createElement("div",{className:"toolbar-btn"},o.createElement(L.a,{type:"border-outer",onClick:u})))}()))}));n(193);function D(e){var t=e.id,n=e.style,r=e.onContextMenu,i=e.onClick,a=e.object,c=e.lineAppendWidth,s=e.path,d=e.startArrow,u=e.endArrow,f=n.fill,m="";"boolean"===typeof d?d&&(m="url(#flow-startArrow)"):o.isValidElement(d)&&(m="url(#".concat(d.props.id,")"));var p="";return"boolean"===typeof u?d&&(p="url(#flow-startArrow)"):o.isValidElement(u)&&(p="url(#".concat(u.props.id,")")),o.createElement("g",{key:"".concat(t).concat("_"),className:"editor-link"},o.createElement("defs",null,o.isValidElement(d)?o.cloneElement(d):o.createElement("marker",{id:"flow-startArrow",markerWidth:"10",markerHeight:"10",refX:"0",refY:"2",orient:"auto",markerUnits:"strokeWidth"},o.createElement("path",{d:"M0,0 L0,4 L4,2 z",fill:f}))),o.createElement("defs",null,o.isValidElement(u)?o.cloneElement(u):o.createElement("marker",{id:"flow-endArrow",markerWidth:"10",markerHeight:"10",refX:"0",refY:"2",orient:"auto",markerUnits:"strokeWidth"},o.createElement("path",{d:"M0,0 L0,4 L4,2 z",fill:f}))),o.createElement("path",{key:t,className:"editor-link-path",stroke:l.get(n,"stroke",""),strokeWidth:l.get(n,"strokeWidth",0),d:s,markerStart:m,markerEnd:p}),o.createElement("path",{key:"".concat(t,"-background"),className:"editor-link-path editor-link-path-background",style:{strokeWidth:c},d:s,onContextMenu:r,onClick:i}),o.createElement("g",null,a))}n(194);var O=o.useRef,M=o.useState,R=o.useEffect;o.useCallback;var j=o.forwardRef((function(e,t){var n=e.x,r=e.y,i=e.id,a=e.onClick,c=e.onContextMenu,l=e.children,d=e.currTrans,u=e.width,f=e.height,m=e.isSelected,p=e.onResize,v=M(!1),g=Object(s.a)(v,2),h=g[0],y=g[1],k=O(null),b=function(e,t){var n=t.width,r=t.height,i=t.x,a=t.y,c=Object(o.useState)(n),l=Object(s.a)(c,2),d=l[0],u=l[1],f=Object(o.useState)(r),m=Object(s.a)(f,2),p=m[0],v=m[1],g=Object(o.useState)(i),h=Object(s.a)(g,2),y=h[0],k=h[1],b=Object(o.useState)(a),w=Object(s.a)(b,2),E=w[0],x=w[1];return Object(o.useEffect)((function(){k(i),x(a)}),[i,a]),Object(o.useEffect)((function(){var t=document.querySelectorAll(".resizer"),o=document.querySelector(".resizable"),i=0,a=0,c=0,s=0;if(e)for(var l=function(e){var l=t[e];l.addEventListener("mousedown",(function(e){e.preventDefault(),i=parseFloat(getComputedStyle(o,null).getPropertyValue("width").replace("px","")),a=parseFloat(getComputedStyle(o,null).getPropertyValue("height").replace("px","")),o.getBoundingClientRect().left,o.getBoundingClientRect().top,c=e.pageX,s=e.pageY,window.addEventListener("mousemove",d),window.addEventListener("mouseup",f)}));var d=function(e){var t=0,o=0;l.classList.contains("bottom-right")?(t=i+(e.pageX-c),o=a+(e.pageY-s),t>20&&u(t),o>20&&v(o)):l.classList.contains("bottom-left")?(t=i-(e.pageX-c),o=a+(e.pageY-s),t>20&&(u(t),k(y+(e.pageX-c))),o>20&&v(o)):l.classList.contains("top-right")?(t=i+(e.pageX-c),o=a-(e.pageY-s),t>20&&u(t),o>20&&(v(o),x(E+(e.pageY-s)))):(t=i-(e.pageX-c),o=a-(e.pageY-s),n>20&&(u(t),k(y+(e.pageX-c))),r>20&&(v(o),x(E+(e.pageY-s))))},f=function(){window.removeEventListener("mousemove",d)}},d=0;d<t.length;d++)l(d)}),[e,d,p,v,u,E,y,x,k]),{width:d,height:p,x:y,y:E}}(m,{width:u,height:f,x:n,y:r}),w=b.width,E=b.height,x=b.x,N=b.y,L=[{position:"left",style:{left:"-5px",top:"".concat(f/2-5,"px")}},{position:"right",style:{right:"-5px",top:"".concat(f/2-5,"px")}},{position:"top",style:{left:"".concat(u/2-5,"px"),top:"-5px"}},{position:"bottom",style:{left:"".concat(u/2-5,"px"),top:"".concat(f-5,"px")}}],C=o.createElement("div",{className:"resizable"},o.createElement("div",{className:"resizers"},["top-left","top-right","bottom-left","bottom-right"].map((function(e){return o.createElement("div",{key:e,className:"resizer ".concat(e),"data-type":"resize"})})))),S=o.createElement("div",{className:"editor-node-selector",style:{width:u,height:f}},L.map((function(e){return o.createElement("a",{"data-type":"edge","data-position":e.position,key:e.position,className:"node-selector",style:e.style})})));return R((function(){p(w,E,x,N)}),[w,E,x,N]),o.createElement("div",{className:"editor-node",style:{left:n,top:r,width:u,height:f},ref:t,onClick:a,onMouseEnter:function(){return y(!0)},onMouseLeave:function(){return y(!1)},onContextMenu:function(e){e.preventDefault(),e.stopPropagation();var t=k.current.getBoundingClientRect();t.id=i;var o=function(e){for(var t=0,n=0,r=e;r!==window.document.body&&null!=r;)n+=r.offsetLeft,t+=r.offsetTop,r=r.offsetParent;return{offsetTop:t,offsetLeft:n}}(t.current),a=o.offsetTop,s=o.offsetLeft,l=e.clientX-s,u=e.clientY-a,f=(l-n)/d.k,m=(u-r)/d.k;c&&c({left:f,top:m},e)}},(m||h)&&S,m&&C,o.cloneElement(l,{ref:k}))}));var P=function(e,t){var n=T(),r=e.x*n,o=t.x*n,i=(r+o)/2,a=(e.y+t.y)/2,c=30,s=t.y-e.y;return s>-100&&s<100&&(c=Math.max(Math.abs(t.y-e.y)/2,20)),["M",r,e.y,"Q",r+c,e.y,i,a,"T",o-6,t.y-2].join(" ")};function T(){var e=window.outerWidth/window.innerWidth,t=window.screen,n=navigator.userAgent.toLowerCase();void 0!==window.devicePixelRatio?e=/macintosh|mac os x/i.test(n)?window.outerWidth/window.innerWidth:window.devicePixelRatio:n.indexOf("msie")>-1?t.deviceXDPI&&t.logicalXDPI&&(e=t.deviceXDPI/t.logicalXDPI):void 0!==window.outerWidth&&void 0!==window.innerWidth&&(e=window.outerWidth/window.innerWidth);return e&&(e=Math.round(100*e)/100),e}function z(e,t){var n=(null===e||void 0===e?void 0:e.x)+(null===e||void 0===e?void 0:e.width),r=(null===e||void 0===e?void 0:e.y)+(null===e||void 0===e?void 0:e.height)/2;return"left"===t?(n=null===e||void 0===e?void 0:e.x,r=(null===e||void 0===e?void 0:e.y)+(null===e||void 0===e?void 0:e.height)/2):"right"===t?(n=(null===e||void 0===e?void 0:e.x)+(null===e||void 0===e?void 0:e.width),r=(null===e||void 0===e?void 0:e.y)+(null===e||void 0===e?void 0:e.height)/2):"top"===t?(n=(null===e||void 0===e?void 0:e.x)+(null===e||void 0===e?void 0:e.width)/2,r=null===e||void 0===e?void 0:e.y):"bottom"===t&&(n=(null===e||void 0===e?void 0:e.x)+(null===e||void 0===e?void 0:e.width)/2,r=(null===e||void 0===e?void 0:e.y)+(null===e||void 0===e?void 0:e.height)),{x:n,y:r}}var F=o.useCallback,W=o.useEffect,I=o.useState,A=o.useRef,X={x:0,y:0,width:0,height:0,direction:"left"};n(195);var q=o.useRef,Y=o.useCallback,_=o.useMemo;function U(e){var t=e.overlayColor,n=e.selectorStyle,r=e.visible,i=e.onClose,a=e.getPopupContainer,l=q(null),d=function(e,t){var n=I(X),r=Object(s.a)(n,2),o=r[0],i=r[1],a=I(""),c=Object(s.a)(a,2),l=c[0],d=c[1],u=A(0),f=A(0),m=F((function(e){var n=e.layerX,r=e.layerY,o=Math.abs(n-u.current),a=Math.abs(r-f.current),c=n-u.current,s={x:u.current,y:f.current,width:o,height:a,direction:c<0?"right":"left"},l=function(e,t){var n=t.x,r=t.y,o=t.width,i=t.height,a=t.direction,c="";return"rect"===e&&(c="M".concat(n," ").concat(r," h ").concat(o," v ").concat(i," h -").concat(o," Z"),"right"===a&&(c="M".concat(n," ").concat(r," h -").concat(o," v -").concat(i," h ").concat(o," Z"))),c}(t,s);d(l),i(s)}),[i,t]),p=F((function(t){t.stopPropagation(),d(""),u.current=0,f.current=0,e.current.removeEventListener("mousemove",m)}),[e,m]),v=F((function(t){t.stopPropagation(),u.current=t.layerX,f.current=t.layerY,e.current.addEventListener("mousemove",m),e.current.addEventListener("mouseup",p)}),[e,m,p]);return W((function(){var t=e.current;return t.addEventListener("mousedown",v),function(){t.removeEventListener("mousedown",v)}}),[e,v]),{shapeProps:o,pathData:l}}(l,"rect"),u=d.shapeProps,m=d.pathData,p=Y((function(e){e.stopPropagation(),e.preventDefault(),i&&i(u)}),[i,u]);return _((function(){var e,i=f()("drag-select-container",{"drag-select-hidden":!r}),s=a(),d=function(e){if(!e)return 0;var t=window.getComputedStyle(e);return e.getBoundingClientRect().width+Number(t.marginLeft.match(/\d+/g))+Number(t.marginRight.match(/\d+/g))}(s),u=function(e){if(!e)return 0;var t=window.getComputedStyle(e);return e.getBoundingClientRect().height+Number(t.marginTop.match(/\d+/g))+Number(t.marginBottom.match(/\d+/g))}(s),v=(e=s)?{x:e.getBoundingClientRect().x,y:e.getBoundingClientRect().y}:0;return o.createElement("svg",{ref:l,className:i,width:d,height:u,style:{background:t,left:null===v||void 0===v?void 0:v.x,top:null===v||void 0===v?void 0:v.y},xmlns:"http://www.w3.org/2000/svg",onDrag:function(e){e.preventDefault()},onClick:p},o.createElement("g",null,o.createElement("path",{d:m,style:Object(c.a)({},n)})))}),[t,p,n,r,m])}var H=n(116),B=n(125),V=n(117),K=n(71),J=n(126),Z=n(90),Q=n(221),$=(n(201),function(e){var t=e.id,n=e.visible,r=e.left,i=e.top,a=e.children;return o.createElement("div",{id:t?"context-menu-".concat(t):"context-menu",style:{display:n?"block":"none",left:r,top:i},className:"contextMenu-layer"},o.createElement("div",{className:"contextMenu"},a))});function G(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"click",r=Object(o.useRef)(),i=Object(o.useCallback)((function(n){var o=("function"===typeof t?t():t)||r.current;o&&!o.contains(n.target)&&e(n)}),[r.current,e,t]);return Object(o.useEffect)((function(){return document.addEventListener(n,i),function(){document.removeEventListener(n,i)}}),[n,i]),r}n(202);var ee=o.useState,te=o.useRef,ne=(o.useMemo,o.useCallback);function re(e){var t=e.currentNode,n=e.onSelect,r=(e.hasError,e.isSelected),i=e.isDragged,a=e.onClick,c=e.interactive,l=void 0===c||c,d=e.currTrans,u=e.nodeRef,m=e.onResize,p=(e.showSelector,e.id,ee(!1)),v=Object(s.a)(p,2),g=v[0],h=v[1],y=ee({left:0,top:0}),k=Object(s.a)(y,2),b=k[0],E=k[1];G((function(){h(!1)}),(function(){return document.querySelector(".editorNode-box-menu")}),"contextmenu");var x=G((function(){h(!1)})),N=te(null),L="";L=r?"selected ".concat(t.key,"-clicked ").concat(t.key,"-border"):"".concat(t.key,"-border");var C="circle"===t.key,S="rectRadius"===t.key,D="diamond"===t.key,O=f()("editorNode-box",L,{dragging:i},{"editorNode-circle":C},{"editorNode-rectRadius":S}),M=[{name:"\u5220\u9664",key:w.delete,disabled:!1}],R=function(e){var r=e.key;n(t,r),h(!1)},P=ne((function(e){l&&a&&a(t,e)}),[l,a,t]);return o.createElement(j,{id:t.id,x:t.x,y:t.y,width:t.width,height:t.height,currTrans:d,ref:u,isSelected:r,onClick:P,onResize:m,onContextMenu:l?function(t,n){n.stopPropagation(),n.preventDefault();var r={left:t.left,top:t.top};E(r),h(!0),e.onContextMenu&&e.onContextMenu(n)}:null},o.createElement("div",{className:"editorNode",ref:N},o.createElement("div",{className:O,style:{transform:D?"rotateZ(45deg) skew(30deg,30deg)":"none"}},o.createElement("div",{className:"editorNode-box-property"},o.createElement("div",{className:"editorNode-name"},t.name)),o.createElement("div",{className:"editorNode-box-menu",ref:x},o.createElement($,{id:t.id,visible:g,left:b.left,top:b.top},o.createElement(Q.a,{getPopupContainer:function(e){return e.parentNode}},M.map((function(e){return o.createElement(Q.a.Item,{key:e.key,onClick:R},e.name)}))))))))}n(213);function oe(e){var t=e.links,n=e.nodes,r=e.selectedLinks,i=e.onSelectLink,a=e.onContextMenu,c=e.isDraggingLink,s=e.dragLink,d=e.interactive,u=void 0===d||d,f=t.map((function(e){var t=e.source,c=e.target,s=e.id,d=e.sourcePos,f=e.targetPos,m=l.find(n,(function(e){return e.id===t})),p=l.find(n,(function(e){return e.id===c})),v=z(m,d),g=v.x,h=v.y,y=z(p,f),k=y.x,b=y.y,w=P({x:g,y:h},{x:k,y:b}),E=!!r&&r.includes(s)?"#92ade3":"#b4bdcf",x={fill:E,stroke:E,strokeWidth:2};return o.createElement(D,{key:s,id:s,path:w,lineAppendWidth:15,style:x,onContextMenu:u?a.bind(null,s):null,onClick:u?i.bind(null,s):null,endArrow:o.createElement("marker",{id:"".concat(s,"-endArrow"),markerWidth:"10",markerHeight:"10",refX:"0",refY:"2",orient:"auto",markerUnits:"strokeWidth"},o.createElement("path",{d:"M0,0 L0,4 L4,2 z",fill:E}))})}));return o.createElement("svg",{className:"editor-view-svg"},t&&f,u&&function(){if(c){var e=s.x,t=s.y,n=s.originX,r=s.originY,i=P({x:n,y:r},{x:e,y:t});return o.createElement(D,{path:i,endArrow:o.createElement("marker",{id:"".concat("#52619b","-endArrow"),markerWidth:"10",markerHeight:"10",refX:"0",refY:"2",orient:"auto",markerUnits:"strokeWidth"},o.createElement("path",{d:"M0,0 L0,4 L4,2 z",fill:"#52619b"})),style:{fill:"#52619b",stroke:"#52619b",strokeWidth:2}})}return null}())}var ie=function(e,t,n){var r=null,o=1/0,i="";return t.forEach((function(t){var n=1/0;["left","right","top","bottom"].forEach((function(a){var c,s;"left"===a?(c=t.x,s=t.y+t.height/2):"right"===a?(c=t.x+t.width,s=t.y+t.height/2):"top"===a?(c=t.x+t.width/2,s=t.y):"bottom"===a&&(c=t.x+t.width/2,s=t.y+t.height),n=function(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}({x:e.x,y:e.y},{x:c,y:s}),o>n&&(o=n,r=t,i=a)}))})),o<=n?{targetNode:r,targetPos:i}:null};function ae(e){for(var t=0,n=0,r=e;r!==window.document.body&&null!=r;)n+=r.offsetLeft,t+=r.offsetTop,r=r.offsetParent;return{offsetTop:t,offsetLeft:n}}Z.Utils.Point;var ce=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(B.a)(this,Object(V.a)(t).call(this,e))).nodesContainerRef=void 0,n.container=void 0,n.screenWidth=void 0,n.screenHeight=void 0,n.autoVerticalScroller=null,n.autoHorizontalScroller=null,n.handleResize=void 0,n.handleAdapt=void 0,n.handleResizeTo=void 0,n.openContainerMenu=function(e){e.preventDefault()},n.toggleDragNode=function(e){e?(window.addEventListener("mousemove",n.onDragNodeMouseMove),window.addEventListener("mouseup",n.onDragNodeMouseUp)):(window.removeEventListener("mousemove",n.onDragNodeMouseMove),window.removeEventListener("mouseup",n.onDragNodeMouseUp))},n.toggleDragLink=function(e){e?(window.addEventListener("mousemove",n.onDragLinkMouseMove),window.addEventListener("mouseup",n.onDragLinkMouseUp)):(window.removeEventListener("mousemove",n.onDragLinkMouseMove),window.removeEventListener("mouseup",n.onDragLinkMouseUp))},n.onDragLinkMouseMove=function(e){e.stopPropagation(),e.preventDefault();var t=ae(n.container.current),r=t.offsetTop,o=t.offsetLeft,i=e.clientX-o,a=e.clientY-r,s=n.props.currTrans,l=s.k,d=s.x,u=s.y;n.setState((function(e){var t=e.dragLink;return{dragLink:Object(c.a)({},t,{x:(i-d)/l,y:(a-u)/l})}}))},n.onNodesContainerMouseDown=function(e){e.stopPropagation();var t=n.props.nodes;if(t&&t.length>0){var r=l.find(t,(function(t){return!(!t.ref||!t.ref.current)&&t.ref.current.contains(e.target)})),o=e.target.dataset&&e.target.dataset.type,i=e.target.dataset&&e.target.dataset.position;if(r){if("edge"===o&&i)return void n.onDragLinkMouseDown(r,i);if("resize"===o)return;n.onDragNodeMouseDown(r,e)}}},n.onContainerMouseDown=function(e){var t=e.path;n.hasNodeOrLink(t,"editor-node","editor-link")||n.handleClearActive()},n.onNodesContainerMouseMove=function(e){e.preventDefault();var t=e.path,r=n.hasNodeOrLink(t,"editor-node","editor-link"),o=n.props.nodes;if(o&&o.length>0){var i=l.find(o,(function(t){return!(!t.ref||!t.ref.current)&&t.ref.current.contains(e.target)}));i&&(r?n.setState({currentHoverNode:i.id}):n.setState({currentHoverNode:""}))}},n.onDragNodeMouseDown=function(e,t){var r=n.props.currTrans,o=r.k,i=r.x,a=r.y,c=ae(n.container.current),s=c.offsetTop,l=c.offsetLeft,d=t.clientX-l,u=t.clientY-s;n.setState((function(t){return{isDraggingNode:!0,dragNode:e,dragNodeOffset:{x:(d-i)/o-e.x,y:(u-a)/o-e.y}}}))},n.onDragLinkMouseDown=function(e,t){var r=z(e,t),o=r.x,i=r.y;n.setState({isDraggingLink:!0,dragLink:{originId:e.id,originX:o,originY:i,x:o,y:i},sourcePos:t})},n.onDragLinkMouseUp=function(e){var t=n.props,r=t.setLinks,o=t.links,i=t.nodes,c=n.state.dragLink,s=ae(n.container.current),l=s.offsetTop,d=s.offsetLeft,u=e.clientX-d,f=e.clientY-l,m=n.props.currTrans,p=m.k,v=m.x,g=m.y,h=ie({x:(u-v)/p,y:(f-g)/p},i,30);if(h){var y=h.targetNode,k=h.targetPos,b={id:c.originId+"_"+y.id+"_"+k,source:c.originId,target:y.id,sourcePos:n.state.sourcePos,targetPos:k};r([].concat(Object(a.a)(o),[b]))}n.setState({isDraggingLink:!1,dragLink:null,sourcePos:""})},n.onDragNodeMouseMove=function(e){e.preventDefault(),e.stopPropagation();var t=n.props,r=t.setNodes,o=t.nodes,i=n.props.currTrans,a=i.k,s=i.x,l=i.y,d=ae(n.container.current),u=d.offsetTop,f=d.offsetLeft,m=e.clientX-f,p=e.clientY-u;n.setState((function(e){var t=e.dragNode,n=e.dragNodeOffset,r=(m-s)/a-n.x,o=(p-l)/a-n.y;return Object(c.a)({},e,{dragNode:Object(c.a)({},t,{x:r,y:o})})}));var v=n.state,g=v.dragNodeOffset,h=v.dragNode;r(o.map((function(e){return e.id===h.id?Object(c.a)({},e,{x:(m-s)/a-g.x,y:(p-l)/a-g.y}):e})))},n.onDragNodeMouseUp=function(e){e.stopPropagation(),n.setState((function(e){e.dragNode;return Object(c.a)({},e)})),n.setState({isDraggingNode:!1})},n.getTransformInfo=function(e){n.props.setCurrTrans(e)},n.getScreenHandler=function(e){n.handleResize=e.handleResize,n.handleResizeTo=e.handleResizeTo,n.handleAdapt=e.handleAdapt,n.screenWidth=e.screenWidth,n.screenHeight=e.screenHeight},n.handleClearActive=function(){n.props.setSelectedLinks([]),n.props.setSelectedNodes([])},n.hasNodeOrLink=function(e,t,n){for(var r=!1,o=0;o<e.length;o++){var i=l.includes(e[o].classList,t),a=l.includes(e[o].classList,n);if(i||a){r=!0;break}}return r},n.changeScreenScale=function(e){n.setState({screenScale:e})},n.handleFullScreen=function(){var e;(function(){var e=document;return e.fullscreenElement||e.webkitFullscreenElement})()?document.exitFullscreen||document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():(e=n.container.current).requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},n.onSelectLink=function(e){var t=n.props,r=t.selectedLinks,o=t.setSelectedLinks;if(r){var i=l.findIndex(r,(function(t){return t===e}));o(i>-1?[].concat(Object(a.a)(r.slice(0,i)),Object(a.a)(r.slice(i+1))):[].concat(Object(a.a)(r),[e]))}else o([e])},n.onClickNode=function(e){var t=n.props,r=t.selectedNodes,o=t.setSelectedNodes;if(n.state.isKeyPressing)if(r){var i=l.findIndex(r,(function(t){return t===e.id}));o(i>-1?[].concat(Object(a.a)(r.slice(0,i)),Object(a.a)(r.slice(i+1))):l.compact([].concat(Object(a.a)(r),[e.id])))}else o([e.id]);else n.props.setSelectedNodes([e.id]),n.props.setSelectedLinks(null)},n.onSelectNode=function(e,t){var r=n.props,o=r.selectedNodes,i=r.deleteNodes;t===w.delete&&(o&&o.includes(e.id)?i(l.compact([].concat(Object(a.a)(o),[e.id]))):i([e.id]))},n.onContextMenuLink=function(e,t){t.preventDefault(),t.stopPropagation(),n.props.setSelectedLinks([e]),n.props.setSelectedNodes(null);var r={x:t.clientX,y:t.clientY};n.setState({deleteVisible:!0,menuPos:r})},n.onResize=function(e,t,r,o,i){(0,n.props.updateNodes)(Object(c.a)({},e,{width:t,height:r,x:o,y:i}))},n.renderCanvas=function(){var e=n.state.currentHoverNode,t=n.props,r=t.nodes,i=t.links,a=t.selectedNodes,c=t.selectedLinks;return o.createElement("div",{className:"editor-view"},o.createElement("div",{className:"editor-view-content",ref:n.nodesContainerRef},r.map((function(t){var r=t.id,i=!!a&&a.includes(r),c=i||e===r;return o.createElement(re,{nodeRef:t.ref,currentNode:t,key:r,onClick:n.onClickNode,isSelected:i,showSelector:c,onResize:n.onResize.bind(Object(K.a)(n),t),currTrans:n.props.currTrans,onSelect:n.onSelectNode})})),o.createElement(oe,{links:i,nodes:r,selectedLinks:c,onContextMenu:n.onContextMenuLink,onSelectLink:n.onSelectLink,isDraggingLink:n.state.isDraggingLink,dragLink:n.state.dragLink})))},n.state={isDraggingNode:!1,isDraggingLink:!1,isKeyPressing:!1,dragNode:null,dragLink:null,dragNodeOffset:null,menuDisplay:!1,menuPos:{id:"",x:0,y:0},screenScale:100,sourcePos:"",currentHoverNode:"",deleteVisible:!1},n.nodesContainerRef=o.createRef(),n.container=o.createRef(),n}return Object(J.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){this.nodesContainerRef.current.addEventListener("mousedown",this.onNodesContainerMouseDown),this.container.current.addEventListener("contextmenu",this.openContainerMenu),this.container.current.addEventListener("click",this.onContainerMouseDown)}},{key:"componentWillUnmount",value:function(){this.nodesContainerRef.current.removeEventListener("mousedown",this.onNodesContainerMouseDown),this.container.current.removeEventListener("contextmenu",this.openContainerMenu),this.container.current.removeEventListener("click",this.onContainerMouseDown)}},{key:"componentWillUpdate",value:function(e,t){this.state.isDraggingNode!==t.isDraggingNode&&this.toggleDragNode(t.isDraggingNode),this.state.isDraggingLink!==t.isDraggingLink&&this.toggleDragLink(t.isDraggingLink)}},{key:"onDrag",value:function(e,t){}},{key:"onDrop",value:function(e){var t=this.props,n=t.setNodes,r=t.nodes,i=t.dragNode,c=ae(this.container.current),s=c.offsetTop,l=c.offsetLeft,u=e.clientX-l,f=e.clientY-s,m=this.props.currTrans,p=m.k,v=m.x,g=m.y;if(i){var h={key:i.key,name:i.name,type:i.type,width:i.width,height:i.height,x:(u-v)/p-110,y:(f-g)/p-30,id:d.v4(),ref:o.createRef()};n([].concat(Object(a.a)(r),[h]))}}},{key:"renderDragSource",value:function(){var e=this;return o.createElement("div",{className:"flow-drag-source"},["\u7ec4\u4ef61","\u7ec4\u4ef62"].map((function(t,n){return o.createElement("div",{className:"flow-drag-source-item",key:n,draggable:!0,onDrag:function(n){return e.onDrag(n,t)}},t)})))}},{key:"render",value:function(){var e=this.state,t=e.deleteVisible,n=e.menuPos;return o.createElement("div",{className:"canvas-container-content",ref:this.container},o.createElement(Z.ReScreen,{type:"DOM",getScreenHandler:this.getScreenHandler,needMinimap:!0,needRefresh:!0,zoomEnabled:!1,mapPosition:"RT-IN",mapWidth:200,mapHeight:300,mapRectStyle:{stroke:"#468CFF",fill:"transparent",strokeWidth:1.5},focusEnabled:2,onScreenChange:this.getTransformInfo,onDragOver:function(e){e.preventDefault()},onDrop:this.onDrop.bind(this)},this.renderCanvas()),o.createElement($,{visible:t,left:n.x,top:n.y},o.createElement(Q.a,{getPopupContainer:function(e){return e.parentNode}},[{name:"\u5220\u9664",key:w.delete}].map((function(e){return o.createElement(Q.a.Item,{key:e.key},e.name)})))))}}]),t}(o.Component),se=n(124),le={id:"111",name:"\u6d4b\u8bd5\u7ba1\u9053\u6570\u636e",fileId:"sdhsd",tenantId:"168208",projectId:"9987",userId:"168208",owner:"perkinJ",ownerName:"perkinJ",createTime:"2019-12-10",lastModifier:"168208",lastModifierName:"perkinJ",lastModifyTime:"2019-12-10",nodeConfig:{nodeId:"n_123",nodeName:"\u8282\u70b9\u540d\u79f0",nodeOutputNameList:["Data_distill.id_mapping_dy_1"],nodeDesc:"test",nodeType:30,operatorType:30,cronExpression:"0 1 0 * * ?",nodeContent:"create table if not exists id_mapping_dy_1 (\u21b5    key_type string,\u21b5    key_id string, \u21b5    oneid string\u21b5) partitioned by (ds string);",remark:"test",params:null,dsConfig:{dsId:"120104"},dagId:"d_767389365932195840",rerunable:null,validPeriod:null,priority:null,nodeStatus:1,paused:null,upstreams:[{dayDiff:null,periodDiff:0,sourceNodeId:"n_767389365932195841",sourceNodeOutputName:"virtual_root_node_767389365932195840",targetNodeId:null,targetNodeOutputName:null}],nodeFrom:null,nodeOwner:"168208",tags:[]},faultTolerantConfig:{errorCount:10,errorRate:.3,readCount:20},hops:[{id:"80bebab7-307a-4bf8-9545-c17e086a897e_05d35f38-8df0-4c5c-a917-036ef0bfca65",source:"80bebab7-307a-4bf8-9545-c17e086a897e",target:"05d35f38-8df0-4c5c-a917-036ef0bfca65",sourcePos:"right",targetPos:"top"}],steps:[{id:"80bebab7-307a-4bf8-9545-c17e086a897e",key:"rect",type:"common",name:"\u6d4b\u8bd5\u7ec4\u4ef6",x:241,y:95,width:100,height:100,distribute:!0,parallel:2},{id:"05d35f38-8df0-4c5c-a917-036ef0bfca65",key:"circle",name:"MySQL_1",type:"common",width:250,height:100,x:449,y:259}]},de=o.useState,ue=o.useEffect;var fe={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},me={esc:"Escape",tab:"Tab",enter:"Enter",space:" ",up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete"]},pe={ctrl:function(e){return e.ctrlKey},shift:function(e){return e.shiftKey},alt:function(e){return e.altKey},meta:function(e){return e.metaKey}},ve=function(){};function ge(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()}function he(e,t){if("number"===ge(t))return e.keyCode===t;var n=t.split("."),r=0,o=!0,i=!1,a=void 0;try{for(var c,s=n[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var l=c.value,d=pe[l],u=me[l],f=fe[l];(d&&d(e)||(u&&"array"===ge(u)?u.includes(e.key):u===e.key)||(f&&"array"===ge(f)?f.includes(e.keyCode):f===e.keyCode)||e.key.toUpperCase()===l.toUpperCase())&&r++}}catch(m){i=!0,a=m}finally{try{o||null==s.return||s.return()}finally{if(i)throw a}}return r===n.length}function ye(e){var t=ge(e);return"function"===t?e:"string"===t||"number"===t?function(t){return he(t,e)}:"array"===t?function(t){return e.some((function(e){return he(t,e)}))}:e?function(){return!0}:function(){return!1}}var ke=["keydown"];function be(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ve,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.events,i=void 0===r?ke:r,a=n.target,c=Object(o.useRef)(),s=Object(o.useRef)(t);s.current=t;var l=Object(o.useCallback)((function(t){if(ye(e)(t))return s.current(t)}),[e]);return Object(o.useEffect)((function(){var e="function"===typeof a?a():a,t=c.current||e||window,n=!0,r=!1,o=void 0;try{for(var s,d=i[Symbol.iterator]();!(n=(s=d.next()).done);n=!0){var u=s.value;t.addEventListener(u,l)}}catch(f){r=!0,o=f}finally{try{n||null==d.return||d.return()}finally{if(r)throw o}}return function(){var e=!0,n=!1,r=void 0;try{for(var o,a=i[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var c=o.value;t.removeEventListener(c,l)}}catch(f){n=!0,r=f}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}}}),[i,l,a]),c}n(214);var we=o.useState,Ee=o.useRef;o.useEffect;function xe(e){var t=we(100),n=Object(s.a)(t,2),r=n[0],i=n[1],u=we(!1),f=Object(s.a)(u,2),m=f[0],p=f[1],v=function(){var e=de(),t=Object(s.a)(e,2),n=t[0],r=t[1],i=de([]),d=Object(s.a)(i,2),u=d[0],f=d[1],m=de([]),p=Object(s.a)(m,2),v=p[0],g=p[1],h=de([]),y=Object(s.a)(h,2),k=y[0],b=y[1],w=de([]),E=Object(s.a)(w,2),x=E[0],N=E[1],L=de(null),C=Object(s.a)(L,2),S=C[0],D=C[1],O=de(se.a),M=Object(s.a)(O,2),R=M[0],j=M[1],P=de([]),T=Object(s.a)(P,2),z=T[0],F=T[1];return ue((function(){r(le);var e=l.get(le,"steps").map((function(e){return Object(c.a)({},e,{ref:o.createRef()})}));f(e),g(l.get(le,"hops"))}),[]),{editorData:n,setEditorData:r,nodes:u,setNodes:f,links:v,setLinks:g,updateNodes:function(e){var t=l.findIndex(u,(function(t){return t.id===e.id}));f([].concat(Object(a.a)(u.slice(0,t)),[e],Object(a.a)(u.slice(t+1))))},updateLinks:function(e){var t=l.findIndex(v,(function(t){return t.id===e.id}));g([].concat(Object(a.a)(v.slice(0,t)),[e],Object(a.a)(v.slice(t+1))))},selectedLinks:k,setSelectedLinks:b,selectedNodes:x,setSelectedNodes:N,dragNode:S,setDragNode:D,copiedNodes:z,setCopiedNodes:F,currTrans:R,setCurrTrans:j}}(),g=v.nodes,h=v.links,y=v.setNodes,k=v.setLinks,b=v.selectedLinks,w=v.setSelectedLinks,E=v.dragNode,x=v.setDragNode,L=v.selectedNodes,C=v.setSelectedNodes,D=v.updateNodes,O=v.updateLinks,M=v.copiedNodes,R=v.setCopiedNodes,j=v.currTrans,P=v.setCurrTrans,T=Ee(null),z=Ee({getWrappedInstance:function(){return Object}}),F=z.current,W=(document.querySelector(".editor-canvas"),function(e){if(e){var t=l.cloneDeep(h);e.forEach((function(e){l.remove(t,(function(t){return t.source===e||t.target===e}))})),k(t);var n=l.cloneDeep(g),r=l.remove(n,(function(t){return!e.includes(t.id)}));y(r),w([]),C([])}}),I=function(e){if(e){var t=h.map((function(e){return e.id})),n=l.difference(t,e),r=n?n.map((function(e){return l.find(h,(function(t){return t.id===e}))})):[];k(r)}},A=function(e){var t=e.map((function(e){return l.find(g,(function(t){return t.id===e}))}));R(t)},X=function(){L&&(A(L),W(L))},q=function(){L&&A(L)},Y=function(){M&&function(){if(M){var e=M.map((function(e){return Object(c.a)({},e,{id:d.v4(),x:e.x+e.width+20,ref:o.createRef()})}));R(e),y([].concat(Object(a.a)(g),Object(a.a)(e)))}}()},_=function(){L&&W(L),b&&I(b)};be("delete",(function(){_()}),{events:["keydown","keyup"]});var H=navigator.platform.startsWith("Mac");be(H?["meta.x"]:["ctrl.x"],(function(){X()})),be(H?["meta.c"]:["ctrl.c"],(function(){q()})),be(H?["meta.v"]:["ctrl.v"],(function(){Y()}));var B=o.createElement("div",null,o.createElement(S,{ref:T,screenScale:r,changeScreenScale:i,handleResizeTo:F&&F.handleResizeTo,items:["fullscreen","zoom","adapt","format","ratio","shear","copy","paste","delete","dragSelect"],layout:F&&F.layout,onCopy:q,onPaste:Y,onDelete:_,onShear:X,onDragSelect:function(){p(!m)}})),V=o.createElement("div",{className:"editor-nodePanel"},o.createElement(N,{onDrag:x})),K=o.createElement("div",{className:"editor-canvas"},o.createElement(U,{visible:m,getPopupContainer:function(){return document.querySelector(".editor-canvas")},overlayColor:"rgba(0,0,0,0.1)",selectorStyle:{fill:"transparent",strokeWidth:1,stroke:"#6ca0f5",strokeDasharray:"5 5"},onClose:function(e){var t=j.k,n=j.x,r=j.y,o=g.map((function(e){return{x:t*e.x+n+e.width/2*t,y:t*e.y+r+e.height/2*t,id:e.id}})),i=[];i="left"===e.direction?[{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x+e.width,y:e.y+e.height},{x:e.x,y:e.y+e.height}]:[{x:e.x,y:e.y},{x:e.x-e.width,y:e.y},{x:e.x-e.width,y:e.y-e.height},{x:e.x,y:e.y-e.height}];var a=o.map((function(e){if("in"===function(e,t){for(var n=e.x,r=e.y,o=!1,i=0,a=t.length,c=a-1;i<a;c=i,i++){var s=t[i].x,l=t[i].y,d=t[c].x,u=t[c].y;if(s===n&&l===r||d===n&&u===r)return"on";if(l<r&&u>=r||l>=r&&u<r){var f=s+(r-l)*(d-s)/(u-l);if(f===n)return"on";f>n&&(o=!o)}}return o?"in":"out"}(e,i))return e.id}));C(a),p(!1)}}),o.createElement(ce,{dragNode:E,ref:z,nodes:g,links:h,setNodes:y,setLinks:k,selectedLinks:b,setSelectedLinks:w,selectedNodes:L,setSelectedNodes:C,updateNodes:D,updateLinks:O,deleteNodes:W,deleteLinks:I,copiedNodes:M,setCopiedNodes:R,currTrans:j,setCurrTrans:P})),J=o.createElement("div",{className:"editor-property"});return o.createElement("div",{className:"editor-demo",ref:T},o.createElement("div",{className:"editor-operation"},B),o.createElement("div",{className:"editor-container"},V,K,J))}n(215);var Ne=document.getElementById("root");Object(i.render)(o.createElement((function(){return o.createElement("div",{className:"App"},o.createElement(xe,null))}),null),Ne)}},[[132,1,2]]]);
//# sourceMappingURL=main.a2ac5a30.chunk.js.map