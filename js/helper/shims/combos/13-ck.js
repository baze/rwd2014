(function(e,t){"use strict";var n,r,i=t.$,s=e.audio&&e.video,o=!1,u=t.bugs,a="mediaelement-jaris",f=function(){t.ready(a,function(){t.mediaelement.createSWF||(t.mediaelement.loadSwf=!0,t.reTest([a],s))})},l=t.cfg,c=l.mediaelement;if(!c)return t.error("mediaelement wasn't implemented but loaded"),void 0;if(s){var h=document.createElement("video");if(e.videoBuffered="buffered"in h,e.mediaDefaultMuted="defaultMuted"in h,o="loop"in h,t.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(t.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),t.loader.loadList(["mediaelement-native-fix"])),!c.preferFlash){var p={1:1},d=function(e){var n,s,o;!c.preferFlash&&(i(e.target).is("audio, video")||(o=e.target.parentNode)&&i("source:last",o)[0]==e.target)&&(n=i(e.target).closest("audio, video"))&&(s=n.prop("error"))&&!p[s.code]&&i(function(){r&&!c.preferFlash?(f(),t.ready("WINDOWLOAD "+a,function(){setTimeout(function(){c.preferFlash||!t.mediaelement.createSWF||n.is(".nonnative-api-active")||(c.preferFlash=!0,document.removeEventListener("error",d,!0),i("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+n.prop("error")+"first error: "+s))},9)})):document.removeEventListener("error",d,!0)})};document.addEventListener("error",d,!0),i("audio, video").each(function(){var e=i.prop(this,"error");return e&&!p[e]?(d({target:this}),!1):void 0})}}e.track&&!u.track&&function(){if(u.track||(u.track="number"!=typeof i("<track />")[0].readyState),!u.track)try{new TextTrackCue(2,3,"")}catch(e){u.track=!0}}(),n=e.track&&!u.track,t.register("mediaelement-core",function(t,i,u,l,c,h){r=swfmini.hasFlashPlayerVersion("9.0.115"),t("html").addClass(r?"swf":"no-swf");var p=i.mediaelement;p.parseRtmp=function(e){var t,n,r,s=e.src.split("://"),o=s[1].split("/");for(e.server=s[0]+"://"+o[0]+"/",e.streamId=[],t=1,n=o.length;n>t;t++)r||-1===o[t].indexOf(":")||(o[t]=o[t].split(":")[1],r=!0),r?e.streamId.push(o[t]):e.server+=o[t]+"/";e.streamId.length||i.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var d=function(e,n){e=t(e);var r,i={src:e.attr("src")||"",elem:e,srcProp:e.prop("src")};return i.src?(r=e.attr("data-server"),null!=r&&(i.server=r),r=e.attr("type"),r?(i.type=r,i.container=t.trim(r.split(";")[0])):(n||(n=e[0].nodeName.toLowerCase(),"source"==n&&(n=(e.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),i.server?(i.type=n+"/rtmp",i.container=n+"/rtmp"):(r=p.getTypeForSrc(i.src,n,i),r&&(i.type=r,i.container=r))),r=e.attr("media"),r&&(i.media=r),("audio/rtmp"==i.type||"video/rtmp"==i.type)&&(i.server?i.streamId=i.src:p.parseRtmp(i)),i):i},v=!r&&"postMessage"in u&&s,m=function(){m.loaded||(m.loaded=!0,h.noAutoTrack||i.ready("WINDOWLOAD",function(){y(),i.loader.loadList(["track-ui"])}))},g=function(){var e;return function(){!e&&v&&(e=!0,i.loader.loadScript("https://www.youtube.com/player_api"),t(function(){i._polyfill(["mediaelement-yt"])}))}}(),y=function(){r?f():g()};i.addPolyfill("mediaelement-yt",{test:!v,d:["dom-support"]}),p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},p.mimeTypes.source=t.extend({},p.mimeTypes.audio,p.mimeTypes.video),p.getTypeForSrc=function(e,n){if(-1!=e.indexOf("youtube.com/watch?")||-1!=e.indexOf("youtube.com/v/"))return"video/youtube";if(0===e.indexOf("rtmp"))return n+"/rtmp";e=e.split("?")[0].split("#")[0].split("."),e=e[e.length-1];var r;return t.each(p.mimeTypes[n],function(t,n){return-1!==n.indexOf(e)?(r=t,!1):c}),r},p.srces=function(e,n){if(e=t(e),!n){n=[];var r=e[0].nodeName.toLowerCase(),i=d(e,r);return i.src?n.push(i):t("source",e).each(function(){i=d(this,r),i.src&&n.push(i)}),n}e.removeAttr("src").removeAttr("type").find("source").remove(),t.isArray(n)||(n=[n]),n.forEach(function(n){"string"==typeof n&&(n={src:n}),e.append(t(l.createElement("source")).attr(n))})},t.fn.loadMediaSrc=function(e,n){return this.each(function(){n!==c&&(t(this).removeAttr("poster"),n&&t.attr(this,"poster",n)),p.srces(this,e),t(this).mediaLoad()})},p.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],p.canThirdPlaySrces=function(e,n){var i="";return(r||v)&&(e=t(e),n=n||p.srces(e),t.each(n,function(e,t){return t.container&&t.src&&(r&&-1!=p.swfMimeTypes.indexOf(t.container)||v&&"video/youtube"==t.container)?(i=t,!1):c})),i};var b={};p.canNativePlaySrces=function(e,n){var r="";if(s){e=t(e);var i=(e[0].nodeName||"").toLowerCase(),o=(b[i]||{prop:{_supvalue:!1}}).prop._supvalue||e[0].canPlayType;if(!o)return r;n=n||p.srces(e),t.each(n,function(t,n){return n.type&&o.call(e[0],n.type)?(r=n,!1):c})}return r};var w=/^\s*application\/octet\-stream\s*$/i,E=function(){var e=w.test(t.attr(this,"type")||"");return e&&t(this).removeAttr("type"),e};p.setError=function(e,n){if(t("source",e).filter(E).length){i.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{t(e).mediaLoad()}catch(r){}}else n||(n="can't play sources"),t(e).pause().data("mediaerror",n),i.error("mediaelementError: "+n),setTimeout(function(){t(e).data("mediaerror")&&t(e).addClass("media-error").trigger("mediaerror")},1)};var S=function(){var e;return function(t,n,s){i.ready(r?a:"mediaelement-yt",function(){p.createSWF?p.createSWF(t,n,s):e||(e=!0,y(),S(t,n,s))}),e||!v||p.createSWF||g()}}(),x=function(e,t,n,r,i){var s;n||n!==!1&&t&&"third"==t.isActive?(s=p.canThirdPlaySrces(e,r),s?S(e,s,t):i?p.setError(e,!1):x(e,t,!1,r,!0)):(s=p.canNativePlaySrces(e,r),s?t&&"third"==t.isActive&&p.setActive(e,"html5",t):i?(p.setError(e,!1),t&&"third"==t.isActive&&p.setActive(e,"html5",t)):x(e,t,!0,r,!0))},T=/^(?:embed|object|datalist)$/i,N=function(e,n){var r=i.data(e,"mediaelementBase")||i.data(e,"mediaelementBase",{}),s=p.srces(e),o=e.parentNode;clearTimeout(r.loadTimer),t(e).removeClass("media-error"),t.data(e,"mediaerror",!1),s.length&&o&&1==o.nodeType&&!T.test(o.nodeName||"")&&(n=n||i.data(e,"mediaelement"),p.sortMedia&&s.sort(p.sortMedia),x(e,n,h.preferFlash||c,s))};p.selectSource=N,t(l).on("ended",function(e){var n=i.data(e.target,"mediaelement");(!o||n&&"html5"!=n.isActive||t.prop(e.target,"loop"))&&setTimeout(function(){!t.prop(e.target,"paused")&&t.prop(e.target,"loop")&&t(e.target).prop("currentTime",0).play()},1)});var C=!1,k=function(){var n=function(){if(i.implement(this,"mediaelement")&&(N(this),e.mediaDefaultMuted||null==t.attr(this,"muted")||t.prop(this,"muted",!0),s&&(!o||"ActiveXObject"in u))){var n,r,a=this,f=function(){var e=t.prop(a,"buffered");if(e){for(var n="",r=0,i=e.length;i>r;r++)n+=e.end(r);return n}},l=function(){var e=f();e!=r&&(r=e,i.info("needed to trigger progress manually"),t(a).triggerHandler("progress"))};t(this).on({"play loadstart progress":function(e){"progress"==e.type&&(r=f()),clearTimeout(n),n=setTimeout(l,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(r=!1),clearTimeout(n)}}),"ActiveXObject"in u&&t.prop(this,"paused")&&!t.prop(this,"readyState")&&t(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&t(this).prop("preload","metadata").mediaLoad()}};i.ready("dom-support",function(){C=!0,o||i.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(e){var n;n=i.defineNodeNameProperty(e,"load",{prop:{value:function(){var e=i.data(this,"mediaelement");N(this,e),!s||e&&"html5"!=e.isActive||!n.prop._supvalue||n.prop._supvalue.apply(this,arguments)}}}),b[e]=i.defineNodeNameProperty(e,"canPlayType",{prop:{value:function(n){var i="";return s&&b[e].prop._supvalue&&(i=b[e].prop._supvalue.call(this,n),"no"==i&&(i="")),!i&&r&&(n=t.trim((n||"").split(";")[0]),-1!=p.swfMimeTypes.indexOf(n)&&(i="maybe")),i}}})}),i.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=i.data(e,"mediaelementBase")||i.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){N(e),e=null},9)}}),i.addReady(function(e,r){var i=t("video, audio",e).add(r.filter("video, audio")).each(n);!m.loaded&&t("track",i).length&&m(),i=null})}),s&&!C&&i.addReady(function(e,n){C||t("video, audio",e).add(n.filter("video, audio")).each(function(){return p.canNativePlaySrces(this)?c:(y(),C=!0,!1)})})};n&&i.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),s?(i.isReady("mediaelement-core",!0),k(),i.ready("WINDOWLOAD mediaelement",y)):i.ready(a,k),i.ready("track",m)})})(Modernizr,webshims),webshims.register("track",function(e,t,n,r){"use strict";var i=t.mediaelement;(new Date).getTime();var s=e.fn.addBack?"addBack":"andSelf",o={subtitles:1,captions:1,descriptions:1},u=e("<track />"),a=Modernizr.ES5&&Modernizr.objectAccessor,f=function(e){var n={};return e.addEventListener=function(e,r){n[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+n[e]+" your fn was: "+r),n[e]=r},e.removeEventListener=function(e,r){n[e]&&n[e]!=r&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+n[e]+" your fn was: "+r),n[e]&&delete n[e]},e},l={getCueById:function(e){for(var t=null,n=0,r=this.length;r>n;n++)if(this[n].id===e){t=this[n];break}return t}},c={0:"disabled",1:"hidden",2:"showing"},h={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",mode:"disabled",readyState:0,oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var n=this.cues[this.cues.length-1];n&&n.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=i.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var n=this.cues||[],r=0,i=n.length;if(e.track!=this)return t.error("cue not part of track"),undefined;for(;i>r;r++)if(n[r]===e){n.splice(r,1),e.track=null;break}return e.track?(t.error("cue not part of track"),undefined):undefined},DISABLED:"disabled",OFF:"disabled",HIDDEN:"hidden",SHOWING:"showing",ERROR:3,LOADED:2,LOADING:1,NONE:0},p=["kind","label","srclang"],d={srclang:"language"},v=Function.prototype.call.bind(Object.prototype.hasOwnProperty),m=function(n,r){var i,s,o=[],u=[],a=[];if(n||(n=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),r||(n.blockTrackListUpdate=!0,r=e.prop(this,"textTracks"),n.blockTrackListUpdate=!1),clearTimeout(n.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");a.push(t),-1==r.indexOf(t)&&u.push(t)}),n.scriptedTextTracks)for(i=0,s=n.scriptedTextTracks.length;s>i;i++)a.push(n.scriptedTextTracks[i]),-1==r.indexOf(n.scriptedTextTracks[i])&&u.push(n.scriptedTextTracks[i]);for(i=0,s=r.length;s>i;i++)-1==a.indexOf(r[i])&&o.push(r[i]);if(o.length||u.length){for(r.splice(0),i=0,s=a.length;s>i;i++)r.push(a[i]);for(i=0,s=o.length;s>i;i++)e([r]).triggerHandler(e.Event({type:"removetrack",track:o[i]}));for(i=0,s=u.length;s>i;i++)e([r]).triggerHandler(e.Event({type:"addtrack",track:u[i]}));(n.scriptedTextTracks||o.length)&&e(this).triggerHandler("updatetrackdisplay")}},g=function(n,r){r||(r=t.data(n,"trackData")),r&&!r.isTriggering&&(r.isTriggering=!0,setTimeout(function(){(r.track||{}).readyState?e(n).closest("audio, video").triggerHandler("updatetrackdisplay"):e(n).triggerHandler("checktrackmode"),r.isTriggering=!1},1))},y=e("<div />")[0];n.TextTrackCue=function(e,n,r){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=n,this.text=r,this.id="",this.pauseOnExit=!1,f(this)},n.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",n="",s=r.createDocumentFragment();return v(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,r;if(t!=this.text)for(t=this.text,n=i.parseCueTextToHTML(t),y.innerHTML=n,e=0,r=y.childNodes.length;r>e;e++)s.appendChild(y.childNodes[e].cloneNode(!0));return s.cloneNode(!0)}),e?e.apply(this,arguments):s.cloneNode(!0)},track:null,id:""},i.createCueList=function(){return e.extend([],l)},i.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,n=/\<\s*\//,r=function(e,t,r,i){var s;return n.test(i)?s="</"+e+">":(r.splice(0,1),s="<"+e+" "+t+'="'+r.join(" ").replace(/\"/g,"&#34;")+'">'),s},i=function(e){var n=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return n[0]&&(n[0]=n[0].toLowerCase(),t.test(n[0])?"c"==n[0]?e=r("span","class",n,e):"v"==n[0]&&(e=r("q","title",n,e)):e=""),e};return function(t){return t.replace(e,i)}}(),i.loadTextTrack=function(n,r,s,u){var a="play playing timeupdate updatetrackdisplay",f=s.track,l=function(){var s,o,u=e.prop(r,"src");if("disabled"!=f.mode&&u&&e.attr(r,"src")&&(e(n).unbind(a,l),e(r).unbind("checktrackmode",l),!f.readyState)){s=function(){f.readyState=3,f.cues=null,f.activeCues=f.shimActiveCues=f._shimActiveCues=null,e(r).triggerHandler("error")},f.readyState=1;try{f.cues=i.createCueList(),f.activeCues=f.shimActiveCues=f._shimActiveCues=i.createCueList(),o=e.ajax({dataType:"text",url:u,success:function(u){"text/vtt"!=o.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),i.parseCaptions(u,f,function(t){t&&"length"in t?(f.readyState=2,e(r).triggerHandler("load"),e(n).triggerHandler("updatetrackdisplay")):s()})},error:s})}catch(c){s(),t.warn(c)}}};f.readyState=0,f.shimActiveCues=null,f._shimActiveCues=null,f.activeCues=null,f.cues=null,e(n).unbind(a,l),e(r).unbind("checktrackmode",l),e(n).on(a,l),e(r).on("checktrackmode",l),u&&(f.mode=o[f.kind]?"showing":"hidden",l())},i.createTextTrack=function(n,r){var o,u;return r.nodeName&&(u=t.data(r,"trackData"),u&&(g(r,u),o=u.track)),o||(o=f(t.objectCreate(h)),a||p.forEach(function(t){var n=e.prop(r,t);n&&(o[d[t]||t]=n)}),r.nodeName?(a&&p.forEach(function(n){t.defineProperty(o,d[n]||n,{get:function(){return e.prop(r,n)}})}),u=t.data(r,"trackData",{track:o}),i.loadTextTrack(n,r,u,e.prop(r,"default")&&e(r).siblings("track[default]")[s]()[0]==r)):(a&&p.forEach(function(e){t.defineProperty(o,d[e]||e,{value:r[e],writeable:!1})}),o.cues=i.createCueList(),o.activeCues=o._shimActiveCues=o.shimActiveCues=i.createCueList(),o.mode="hidden",o.readyState=2)),o},i.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,n=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,r=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,i=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(s){var o,u,a,f,l,c,h,p,d,v;if(p=n.exec(s))return null;if(p=r.exec(s))return null;if(p=i.exec(s))return null;for(o=s.split(/\n/g);!o[0].replace(/\s+/gi,"").length&&o.length>0;)o.shift();for(o[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(h=o.shift().replace(/\s*/gi,"")+""),c=0;o.length>c;c++){var m=o[c];(d=e.exec(m))&&(l=d.slice(1),u=parseInt(3600*(l[0]||0),10)+parseInt(60*(l[1]||0),10)+parseInt(l[2]||0,10)+parseFloat("0."+(l[3]||0)),a=parseInt(3600*(l[4]||0),10)+parseInt(60*(l[5]||0),10)+parseInt(l[6]||0,10)+parseFloat("0."+(l[7]||0))),o=o.slice(0,c).concat(o.slice(c+1));break}return u||a?(f=o.join("\n"),v=new TextTrackCue(u,a,f),h&&(v.id=h),v):(t.warn("couldn't extract time information: "+[u,a,o.join("\n"),h].join(" ; ")),null)}}(),i.parseCaptions=function(e,n,r){i.createCueList();var s,o,u,a,f;e?(u=/^WEBVTT(\s*FILE)?/gi,o=function(l,c){for(;c>l;l++){if(s=e[l],u.test(s))f=!0;else if(s.replace(/\s*/gi,"").length){if(!f){t.error("please use WebVTT format. This is the standard"),r(null);break}s=i.parseCaptionChunk(s,l),s&&n.addCue(s)}if((new Date).getTime()-30>a){l++,setTimeout(function(){a=(new Date).getTime(),o(l,c)},90);break}}l>=c&&(f||t.error("please use WebVTT format. This is the standard"),r(n.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){a=(new Date).getTime(),e=e.split(/\n\n+/g),o(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},i.createTrackList=function(e,n){return n=n||t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),n.textTracks||(n.textTracks=[],t.defineProperties(n.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null}}),f(n.textTracks)),n.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var n=t.data(this,"trackData");this.setAttribute("data-kind",e),n&&(n.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(p,function(n,r){var i=d[r]||r;t.onNodeNamesPropertyModify("track",r,function(){var n=t.data(this,"trackData"),s=this;n&&("kind"==r&&g(this,n),a||(n.track[i]=e.prop(this,r)),clearTimeout(n.changedTrackPropTimer),n.changedTrackPropTimer=setTimeout(function(){e(s).trigger("updatesubtitlestate")},1))})}),t.onNodeNamesPropertyModify("track","src",function(n){if(n){var r,s=t.data(this,"trackData");s&&(r=e(this).closest("video, audio"),r[0]&&i.loadTextTrack(r,this,s))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(e.prop(this,"track")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return i.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,n=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),r=i.createTrackList(e,n);return n.blockTrackListUpdate||m.call(e,n,r),r},writeable:!1},addTextTrack:{value:function(e,n,r){var s=i.createTextTrack(this,{kind:u.prop("kind",e||"").prop("kind"),label:n||"",srclang:r||""}),o=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return o.scriptedTextTracks||(o.scriptedTextTracks=[]),o.scriptedTextTracks.push(s),m.call(this),s}}},"prop"),e(r).on("emptied ended updatetracklist",function(n){if(e(n.target).is("audio, video")){var r=t.data(n.target,"mediaelementBase");r&&(clearTimeout(r.updateTrackListTimer),r.updateTrackListTimer=setTimeout(function(){m.call(n.target,r)},0))}});var b=function(e,t){return t.readyState||e.readyState},w=function(e){e.originalEvent&&e.stopImmediatePropagation()},E=function(){if(t.implement(this,"track")){var n,r,i=e.prop(this,"track"),s=this.track;s&&(n=e.prop(this,"kind"),r=b(this,s),(s.mode||r)&&(i.mode=c[s.mode]||s.mode),"descriptions"!=n&&(s.mode="string"==typeof s.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:n}))),e(this).on("load error",w)}};t.addReady(function(n,r){var i=r.filter("video, audio, track").closest("audio, video");e("video, audio",n).add(i).each(function(){m.call(this)}).each(function(){if(Modernizr.track){var n=e.prop(this,"textTracks"),r=this.textTracks;n.length!=r.length&&t.error("textTracks couldn't be copied"),e("track",this).each(E)}}),i.each(function(){var e=this,n=t.data(e,"mediaelementBase");n&&(clearTimeout(n.updateTrackListTimer),n.updateTrackListTimer=setTimeout(function(){m.call(e,n)},9))})}),Modernizr.track&&e("video, audio").trigger("trackapichange")});