window.ActiveXObject&&!window.CanvasRenderingContext2D&&function(j,m){function O(e){this.code=e,this.message=ea[e]}function y(e,t,n){if(!n){n=[];for(var r=0,i=4*e*t;i>r;++r)n[r]=0}this.width=e,this.height=t,this.data=n}function fa(e){this.width=e}function P(e){this.id=e.I++}function z(e){this.O=e,this.id=e.I++}function D(e,t){this.canvas=e,this.w=t,this.f=e.uniqueID,this.J(),this.I=0,this.j=this.H="",this.c=0}function E(){if("complete"===m.readyState){m.detachEvent(Q,E);for(var e=m.getElementsByTagName(u),t=0,n=e.length;n>t;++t)F.initElement(e[t])}}function R(){var e=event.srcElement,t=e.parentNode;e.blur(),t.focus()}function G(){2&event.button&&event.srcElement.parentNode.setCapture()}function H(){2&event.button&&event.srcElement.parentNode.releaseCapture()}function S(){var e=event.propertyName;if("width"===e||"height"===e){var t=event.srcElement,n=t[e],r=parseInt(n,10);(isNaN(r)||0>r)&&(r="width"===e?300:150),n===r?(t.style[e]=r+"px",t.getContext("2d").P(t.width,t.height)):t[e]=r}}function T(){j.detachEvent(U,T);for(var e in n){var t,r=n[e],i=r.firstChild;for(t in i)"function"==typeof i[t]&&(i[t]=k);for(t in r)"function"==typeof r[t]&&(r[t]=k);i.detachEvent(V,R),i.detachEvent(I,G),r.detachEvent(J,H),r.detachEvent(W,S)}j[X]=k,j[Y]=k,j[Z]=k,j[K]=k,j[$]=k}function ga(){var e=m.getElementsByTagName("script");return e=e[e.length-1],m.documentMode>=8?e.src:e.getAttribute("src",4)}function ha(e){return e.toLowerCase()}function g(e){throw new O(e)}function aa(e){var t=parseInt(e.width,10),n=parseInt(e.height,10);(isNaN(t)||0>t)&&(t=300),(isNaN(n)||0>n)&&(n=150),e.width=t,e.height=n}var k=null,u="canvas",X="CanvasRenderingContext2D",Y="CanvasGradient",Z="CanvasPattern",K="FlashCanvas",$="G_vmlCanvasManager",V="onfocus",I="onmousedown",J="onmouseup",W="onpropertychange",Q="onreadystatechange",U="onunload",q;try{q=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").match(/[\d,]+/)[0].replace(/,/g,".")}catch(ia){q=0}var r=j[K+"Options"]||{},ba=r.swfPath||ga().replace(/[^\/]+$/,""),x;x=parseInt(q)>9?ba+"flash10canvas.swf":ba+"flash9canvas.swf";var A={},B={},ca={},L={},v={},da={},n={},C={},l={C:"turbo"in r?r.turbo:1,B:r.delay||0,M:r.disableContextMenu||0,N:r.imageCacheSize||100,D:r.usePolicyFile||0};"10.1.53.64"===q&&(l.C=0,l.B=30),D.prototype={save:function(){this.e(15),this.L.push([this.l,this.m,this.v,this.k,this.p,this.n,this.o,this.q,this.t,this.u,this.r,this.s,this.j,this.z,this.A]),this.a.push("B")},restore:function(){var e=this.L;e.length&&(e=e.pop(),this.globalAlpha=e[0],this.globalCompositeOperation=e[1],this.strokeStyle=e[2],this.fillStyle=e[3],this.lineWidth=e[4],this.lineCap=e[5],this.lineJoin=e[6],this.miterLimit=e[7],this.shadowOffsetX=e[8],this.shadowOffsetY=e[9],this.shadowBlur=e[10],this.shadowColor=e[11],this.font=e[12],this.textAlign=e[13],this.textBaseline=e[14]),this.a.push("C")},scale:function(e,t){this.a.push("D",e,t)},rotate:function(e){this.a.push("E",e)},translate:function(e,t){this.a.push("F",e,t)},transform:function(e,t,n,r,i,s){this.a.push("G",e,t,n,r,i,s)},setTransform:function(e,t,n,r,i,s){this.a.push("H",e,t,n,r,i,s)},createLinearGradient:function(e,t,n,r){return isFinite(e)&&isFinite(t)&&isFinite(n)&&isFinite(r)||g(9),this.a.push("M",e,t,n,r),new z(this)},createRadialGradient:function(e,t,n,r,i,s){return isFinite(e)&&isFinite(t)&&isFinite(n)&&isFinite(r)&&isFinite(i)&&isFinite(s)||g(9),(0>n||0>s)&&g(1),this.a.push("N",e,t,n,r,i,s),new z(this)},createPattern:function(e,t){e||g(17);var n,r,i,s=e.tagName,o=this.f;if(s)if(s=s.toLowerCase(),"img"===s)n=e.getAttribute("src",2);else if(s===u)r=this.G(e),i=e!==this.canvas;else{if("video"===s)return;g(17)}else e.src?n=e.src:g(17);return"repeat"===t||"no-repeat"===t||"repeat-x"===t||"repeat-y"===t||""===t||t===k||g(12),r||(r=B[o][n],(i=void 0===r)&&(r=this.F(n))),this.a.push("O",r,t),i&&A[o]&&(this.g(),++v[o]),new P(this)},clearRect:function(e,t,n,r){this.a.push("X",e,t,n,r),this.b||this.d(),this.c=0},fillRect:function(e,t,n,r){this.e(1),this.a.push("Y",e,t,n,r),this.b||this.d(),this.c=0},strokeRect:function(e,t,n,r){this.e(6),this.a.push("Z",e,t,n,r),this.b||this.d(),this.c=0},beginPath:function(){this.a.push("a")},closePath:function(){this.a.push("b")},moveTo:function(e,t){this.a.push("c",e,t)},lineTo:function(e,t){this.a.push("d",e,t)},quadraticCurveTo:function(e,t,n,r){this.a.push("e",e,t,n,r)},bezierCurveTo:function(e,t,n,r,i,s){this.a.push("f",e,t,n,r,i,s)},arcTo:function(e,t,n,r,i){0>i&&isFinite(i)&&g(1),this.a.push("g",e,t,n,r,i)},rect:function(e,t,n,r){this.a.push("h",e,t,n,r)},arc:function(e,t,n,r,i,s){0>n&&isFinite(n)&&g(1),this.a.push("i",e,t,n,r,i,s?1:0)},fill:function(){this.e(1),this.a.push("j"),this.b||this.d(),this.c=0},stroke:function(){this.e(6),this.a.push("k"),this.b||this.d(),this.c=0},clip:function(){this.a.push("l")},isPointInPath:function(e,t){return this.a.push("m",e,t),"true"===this.g()},fillText:function(e,t,n,r){this.e(9),this.h.push(this.a.length+1),this.a.push("r",e,t,n,void 0===r?1/0:r),this.b||this.d(),this.c=0},strokeText:function(e,t,n,r){this.e(10),this.h.push(this.a.length+1),this.a.push("s",e,t,n,void 0===r?1/0:r),this.b||this.d(),this.c=0},measureText:function(e){var t=C[this.f];try{t.style.font=this.font}catch(n){}return t.innerText=e.replace(/[ \n\f\r]/g,"	"),new fa(t.offsetWidth)},drawImage:function(e,t,n,r,i,s,o,a,f){e||g(17);var l,c,h,p=e.tagName,d=arguments.length,m=this.f;if(p)if(p=p.toLowerCase(),"img"===p)l=e.getAttribute("src",2);else if(p===u)c=this.G(e),h=e!==this.canvas;else{if("video"===p)return;g(17)}else e.src?l=e.src:g(17);if(c||(c=B[m][l],(h=void 0===c)&&(c=this.F(l))),this.e(0),3===d)this.a.push("u",d,c,t,n);else if(5===d)this.a.push("u",d,c,t,n,r,i);else{if(9!==d)return;(0===r||0===i)&&g(1),this.a.push("u",d,c,t,n,r,i,s,o,a,f)}h&&A[m]?(this.g(),++v[m]):this.b||this.d(),this.c=0},createImageData:function(e,t){var n=Math.ceil;return 2===arguments.length?(isFinite(e)&&isFinite(t)||g(9),(0===e||0===t)&&g(1)):(e instanceof y||g(9),t=e.height,e=e.width),e=n(0>e?-e:e),t=n(0>t?-t:t),new y(e,t)},getImageData:function(a,b,c,d){return isFinite(a)&&isFinite(b)&&isFinite(c)&&isFinite(d)||g(9),(0===c||0===d)&&g(1),this.a.push("w",a,b,c,d),a=this.g(),c="object"==typeof JSON?JSON.parse(a):m.documentMode?eval(a):a.slice(1,-1).split(","),a=c.shift(),b=c.shift(),new y(a,b,c)},putImageData:function(e,t,n,r,i,s,o){e instanceof y||g(17),isFinite(t)&&isFinite(n)||g(9);var u=arguments.length,a=e.width,f=e.height,l=e.data;3===u?this.a.push("x",u,a,f,""+l,t,n):7===u&&(isFinite(r)&&isFinite(i)&&isFinite(s)&&isFinite(o)||g(9),this.a.push("x",u,a,f,""+l,t,n,r,i,s,o)),this.b||this.d(),this.c=0},J:function(){this.globalAlpha=this.l=1,this.globalCompositeOperation=this.m="source-over",this.fillStyle=this.k=this.strokeStyle=this.v="#000000",this.lineWidth=this.p=1,this.lineCap=this.n="butt",this.lineJoin=this.o="miter",this.miterLimit=this.q=10,this.shadowBlur=this.r=this.shadowOffsetY=this.u=this.shadowOffsetX=this.t=0,this.shadowColor=this.s="rgba(0, 0, 0, 0.0)",this.font=this.j="10px sans-serif",this.textAlign=this.z="start",this.textBaseline=this.A="alphabetic",this.a=[],this.L=[],this.i=[],this.h=[],this.b=k,this.K=1},e:function(e){var t,n=this.a;this.l!==this.globalAlpha&&n.push("I",this.l=this.globalAlpha),this.m!==this.globalCompositeOperation&&n.push("J",this.m=this.globalCompositeOperation),this.t!==this.shadowOffsetX&&n.push("T",this.t=this.shadowOffsetX),this.u!==this.shadowOffsetY&&n.push("U",this.u=this.shadowOffsetY),this.r!==this.shadowBlur&&n.push("V",this.r=this.shadowBlur),this.s!==this.shadowColor&&(t=this.s=this.shadowColor,(""+t).indexOf("%")>0&&this.i.push(n.length+1),n.push("W",t)),1&e&&this.k!==this.fillStyle&&(t=this.k=this.fillStyle,"object"==typeof t?t=t.id:(""+t).indexOf("%")>0&&this.i.push(n.length+1),n.push("L",t)),2&e&&this.v!==this.strokeStyle&&(t=this.v=this.strokeStyle,"object"==typeof t?t=t.id:(""+t).indexOf("%")>0&&this.i.push(n.length+1),n.push("K",t)),4&e&&(this.p!==this.lineWidth&&n.push("P",this.p=this.lineWidth),this.n!==this.lineCap&&n.push("Q",this.n=this.lineCap),this.o!==this.lineJoin&&n.push("R",this.o=this.lineJoin),this.q!==this.miterLimit&&n.push("S",this.q=this.miterLimit)),8&e&&(this.j!==this.font&&(e=C[this.f].offsetHeight,this.h.push(n.length+2),n.push("o",e,this.j=this.font)),this.z!==this.textAlign&&n.push("p",this.z=this.textAlign),this.A!==this.textBaseline&&n.push("q",this.A=this.textBaseline),this.H!==this.canvas.currentStyle.direction&&n.push("1",this.H=this.canvas.currentStyle.direction))},d:function(){var e=this;e.b=setTimeout(function(){v[e.f]?e.d():(e.b=k,e.g(l.C))},l.B)},Q:function(){clearTimeout(this.b),this.b=k},g:function(e){var t,n,r,i=this.i,s=this.h,o=this.a,u=this.w;if(o.length){if(this.b&&this.Q(),e){for(t=0,n=i.length;n>t;++t)r=i[t],o[r]=encodeURI(o[r]);for(t=0,n=s.length;n>t;++t)r=s[t],o[r]=encodeURIComponent(o[r])}else for(t=0,n=s.length;n>t;++t)r=s[t],o[r]=(""+o[r]).replace(/&/g,"&amp;").replace(/</g,"&lt;");if(t=o.join(""),this.a=[],this.i=[],this.h=[],!e)return u.CallFunction('<invoke name="executeCommand" returntype="javascript"><arguments><string>'+t+"</string></arguments></invoke>");u.flashvars="c="+t,u.width=u.clientWidth+this.K,this.K^=-2}},P:function(e,t){this.g(),this.J(),e>0&&(this.w.width=e),t>0&&(this.w.height=t),this.a.push("2",e,t),this.b||this.d(),this.c=0},G:function(e){var t=e.uniqueID,r=u+":"+t;return(0===e.width||0===e.height)&&g(11),t!==this.f&&(e=n[t].getContext("2d"),e.c||(t=++da[t],r+=":"+t,e.a.push("3",t),e.b||e.d(),e.c=1)),r},F:function(e){var t=this.f,n=B[t],r=ca[t],i=n[e]=L[t]++;return i>=l.N-1&&(L[t]=0),i in r&&delete n[r[i]],this.h.push(this.a.length+2),this.a.push("5",i,e),r[i]=e,i}},z.prototype={addColorStop:function(e,t){(isNaN(e)||0>e||e>1)&&g(1);var n=this.O,r=this.id;(""+t).indexOf("%")>0&&n.i.push(n.a.length+3),n.a.push("y",r,e,t)}},O.prototype=Error();var ea={1:"INDEX_SIZE_ERR",9:"NOT_SUPPORTED_ERR",11:"INVALID_STATE_ERR",12:"SYNTAX_ERR",17:"TYPE_MISMATCH_ERR",18:"SECURITY_ERR"},F={initElement:function(e){if(e.getContext)return e;var t=e.uniqueID,r="external"+t;A[t]=0,B[t]={},ca[t]=[],L[t]=0,v[t]=1,da[t]=0,aa(e),e.innerHTML='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+location.protocol+'//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="'+r+'"><param name="allowScriptAccess" value="always"><param name="flashvars" value="id='+r+'"><param name="wmode" value="transparent"></object><span style="margin:0;padding:0;border:0;display:inline-block;position:static;height:1em;overflow:visible;white-space:nowrap"></span>',n[t]=e;var i=e.firstChild;C[t]=e.lastChild;var s=m.body.contains;if(s(e))i.movie=x;else var o=setInterval(function(){s(e)&&(clearInterval(o),i.movie=x)},0);"BackCompat"!==m.compatMode&&j.XMLHttpRequest||(C[t].style.overflow="hidden");var u=new D(e,i);return e.getContext=function(e){return"2d"===e?u:k},e.toDataURL=function(t,n){return 0===e.width||0===e.height?"data:,":("image/jpeg"===(""+t).replace(/[A-Z]+/g,ha)?u.a.push("A",t,"number"==typeof n?n:""):u.a.push("A",t),u.g().slice(1,-1))},i.attachEvent(V,R),l.M&&(i.attachEvent(I,G),e.attachEvent(J,H)),l.D&&u.a.push("4","usePolicyFile",l.D),e},saveImage:function(e){e.firstChild.saveImage()},setOptions:function(e){for(var t in e){var r=e[t];switch(t){case"turbo":l.C=r;break;case"delay":l.B=r;break;case"disableContextMenu":var i=l.M=r;r=void 0;for(r in n){var s=n[r],o=i?"attachEvent":"detachEvent";s.firstChild[o](I,G),s[o](J,H)}break;case"imageCacheSize":l.N=r;break;case"usePolicyFile":i=t,r=l.D=r?1:0,s=void 0;for(s in n)o=n[s].getContext("2d"),o.h.push(o.a.length+2),o.a.push("4",i,r)}}},trigger:function(e,t){n[e].fireEvent("on"+t)},unlock:function(e,t){if(v[e]&&--v[e],t){var r,i,s=n[e],o=s.firstChild;aa(s),r=s.width,i=s.height,s.style.width=r+"px",s.style.height=i+"px",r>0&&(o.width=r),i>0&&(o.height=i),o.resize(r,i),s.attachEvent(W,S),A[e]=1}}};m.createElement(u),m.createStyleSheet().cssText=u+"{display:inline-block;overflow:hidden;width:300px;height:150px}","complete"===m.readyState?E():m.attachEvent(Q,E),j.attachEvent(U,T),0===x.indexOf(location.protocol+"//"+location.host+"/")&&(q=new ActiveXObject("Microsoft.XMLHTTP"),q.open("GET",x,!1),q.send(k)),j[X]=D,j[Y]=z,j[Z]=P,j[K]=F,j[$]={init:function(){},init_:function(){},initElement:F.initElement}}(window,document);