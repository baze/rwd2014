webshims.register("form-native-extend",function(e,t,n,r){"use strict";var i=n.Modernizr;if(i.inputtypes,i.formvalidation&&!t.bugs.bustedValidity){var s=t.inputTypes,o=!1,u={},a=function(){var t,n=function(){e(this).prop("validity")},r=function(){e("input").each(n)};return function(){clearTimeout(t),t=setTimeout(r,9)}}();t.addInputType=function(n,r){s[n]=r,o=!0,e.isDOMReady&&i.formvalidation&&!t.bugs.bustedValidity&&a()},t.addValidityRule=function(e,t){u[e]=t},e.each({typeMismatch:"mismatch",badInput:"bad"},function(e,n){t.addValidityRule(e,function(t,r,i,o){if(""===r)return!1;var u=o[e];return"type"in i||(i.type=(t[0].getAttribute("type")||"").toLowerCase()),s[i.type]&&s[i.type][n]&&(u=s[i.type][n](r,t)),u||!1})});var f=t.modules["form-number-date-api"],l=f.loaded&&!f.test(),c=["customError","badInput","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],h=["value"],p=[],d=function(t){if(t||o){var n=(t.getAttribute&&t.getAttribute("type")||t.type||"").toLowerCase();s[n]&&e.prop(t,"validity")}},v={};if(["input","textarea","select"].forEach(function(n){var r=t.defineNodeNameProperty(n,"setCustomValidity",{prop:{value:function(i){i+="";var s="input"==n?e(this).getNativeElement()[0]:this;r.prop._supvalue.call(s,i),l&&(t.data(s,"hasCustomError",!!i),d(s))}}});v[n]=r.prop._supvalue}),l&&(h.push("min"),h.push("max"),h.push("step"),p.push("input")),l){var m;if(p.forEach(function(n){var r=t.defineNodeNameProperty(n,"validity",{prop:{get:function(){if(!m){var i="input"==n?e(this).getNativeElement()[0]:this,o=r.prop._supget.call(i);if(!o)return o;var a={};if(c.forEach(function(e){a[e]=o[e]}),!e.prop(i,"willValidate"))return a;m=!0;var f,l=e(i),h={type:(i.getAttribute&&i.getAttribute("type")||i.type||"").toLowerCase(),nodeName:(i.nodeName||"").toLowerCase()},p=l.val(),d=!!t.data(i,"hasCustomError");if(m=!1,a.customError=d,a.valid&&a.customError)a.valid=!1;else if(!a.valid){var g=!0;e.each(a,function(e,t){return t?(g=!1,!1):undefined}),g&&(a.valid=!0)}return e.each(u,function(e,r){a[e]=r(l,p,h,a),a[e]&&(a.valid||!f)&&s[h.type]&&(v[n].call(i,t.createValidationMessage(i,e)),a.valid=!1,f=!0)}),a.valid&&(v[n].call(i,""),t.data(i,"hasCustomError",!1)),a}},writeable:!1}})}),h.forEach(function(e){t.onNodeNamesPropertyModify(p,e,function(){d(this)})}),r.addEventListener){var g,y=function(e){"form"in e.target&&(clearTimeout(g),d(e.target))};r.addEventListener("change",y,!0),r.addEventListener("input",function(e){clearTimeout(g),g=setTimeout(function(){d(e.target)},290)},!0)}var b=p.join(",");t.addReady(function(t,n){o&&e(b,t).add(n.filter(b)).each(function(){d(this)})})}t.defineNodeNameProperty("input","type",{prop:{get:function(){var e=this,n=(e.getAttribute&&e.getAttribute("type")||"").toLowerCase();return t.inputTypes[n]?n:e.type}}})}});