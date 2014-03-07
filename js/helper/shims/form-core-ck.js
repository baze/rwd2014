webshims.register("form-core",function(e,t,n,r,i,s){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var n=t.isDefaultPrevented,r=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),r.apply(this,arguments)},t.isDefaultPrevented=function(){return!!n.apply(this,arguments)||!!e.data(t.target,t.type+"DefaultPrevented")},t._isPolyfilled=!0}},Modernizr.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0);var o=function(t){return(e.prop(t,"validity")||{valid:1}).valid},u=function(){var n=["form-validation"];s.lazyCustomMessages&&(s.customMessages=!0,n.push("form-message")),s.customDatalist&&(s.fD=!0,n.push("form-datalist")),s.addValidators&&n.push("form-validators"),t.reTest(n),e(r).off(".lazyloadvalidation")},a=function(t){var n=!1;return e(t).jProp("elements").each(function(){return n=e(this).is(":invalid"),n?!1:i}),n},f=/^(?:form)$/i;e.extend(e.expr[":"],{"valid-element":function(t){return f.test(t.nodeName||"")?!a(t):!!e.prop(t,"willValidate")&&!!o(t)},"invalid-element":function(t){return f.test(t.nodeName||"")?a(t):!!e.prop(t,"willValidate")&&!o(t)},"required-element":function(t){return!!e.prop(t,"willValidate")&&!!e.prop(t,"required")},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!!e.prop(t,"willValidate")&&e.prop(t,"required")===!1}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]});var l=e.expr[":"].focus;e.expr[":"].focus=function(){try{return l.apply(this,arguments)}catch(e){t.error(e)}return!1},t.triggerInlineForm=function(t,n){e(t).trigger(n)};var c=function(e,n,r){u(),t.ready("form-validation",function(){e[n].apply(e,r)})},h="transitionDelay"in r.documentElement.style?"":" no-transition",p=t.cfg.wspopover;p.position||p.position===!1||(p.position={at:"left bottom",my:"left top",collision:"fit flip"}),t.wsPopover={id:0,_create:function(){this.options=e.extend(!0,{},p,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover'+h+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){c(this,"show",arguments)}},t.validityAlert={showFor:function(){c(this,"showFor",arguments)}},t.getContentValidationMessage=function(t,n,r){var s=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return r&&s[r]?s=s[r]:s&&(n=n||e.prop(t,"validity")||{valid:1},n.valid&&(s="")),"object"==typeof s&&(n=n||e.prop(t,"validity")||{valid:1},n.valid||(e.each(n,function(e,t){return t&&"valid"!=e&&s[e]?(s=s[e],!1):i}),"object"==typeof s&&(n.typeMismatch&&s.badInput&&(s=s.badInput),n.badInput&&s.typeMismatch&&(s=s.typeMismatch)))),"object"==typeof s&&(s=s.defaultMessage),s||""},e.fn.getErrorMessage=function(n){var r="",i=this[0];return i&&(r=t.getContentValidationMessage(i,!1,n)||e.prop(i,"customValidationMessage")||e.prop(i,"validationMessage")),r},e(r).on("focusin.lazyloadvalidation",function(t){"form"in t.target&&(t.target.list||e(t.target).is(":invalid"))&&u()}),t.ready("WINDOWLOAD",u)});