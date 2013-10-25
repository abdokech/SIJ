/*!
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.16",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({propAttr:c.fn.prop||c.fn.attr,_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=
this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,
"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":
"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,
outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,
"tabindex"),d=isNaN(b);return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&
a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&
c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)try{b(d).triggerHandler("remove")}catch(e){}k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){try{b(this).triggerHandler("remove")}catch(d){}});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=
function(h){return!!b.data(h,a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):
d;if(e&&d.charAt(0)==="_")return h;e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=
b.extend(true,{},this.options,this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+
"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",
c);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){var d=false;b(document).mouseup(function(){d=false});b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+
this.widgetName)},_mouseDown:function(a){if(!d){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,f=a.which==1,g=typeof this.options.cancel=="string"&&a.target.nodeName?b(a.target).closest(this.options.cancel).length:false;if(!f||g||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(e){return c._mouseMove(e)};this._mouseUpDelegate=function(e){return c._mouseUp(e)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return d=true}},_mouseMove:function(a){if(b.browser.msie&&
!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=
false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Position 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+(parseInt(c.curCSS(this,"marginRight",true))||0),w=m+q+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=
m/2;i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;/*
 * jQuery UI Draggable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;if(b.iframeFix)d(b.iframeFix===true?"iframe":b.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")});return true},_mouseStart:function(a){var b=this.options;
this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);d.ui.ddmanager&&d.ui.ddmanager.dragStart(this,a);return true},
_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=
false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,
10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},_mouseUp:function(a){this.options.iframeFix===true&&d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});d.ui.ddmanager&&d.ui.ddmanager.dragStop(this,a);return d.ui.mouse.prototype._mouseUp.call(this,a)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||
!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone().removeAttr("id"):this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&
a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),
10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[a.containment=="document"?0:d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a.containment=="document"?0:d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,
(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){a=d(a.containment);var b=a[0];if(b){a.offset();var c=d(b).css("overflow")!=
"hidden";this.containment=[(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),
10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=a}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+
this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&
!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,h=a.pageY;if(this.originalPosition){var g;if(this.containment){if(this.relative_container){g=this.relative_container.offset();g=[this.containment[0]+g.left,this.containment[1]+g.top,this.containment[2]+g.left,this.containment[3]+g.top]}else g=this.containment;if(a.pageX-this.offset.click.left<g[0])e=g[0]+this.offset.click.left;
if(a.pageY-this.offset.click.top<g[1])h=g[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>g[2])e=g[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>g[3])h=g[3]+this.offset.click.top}if(b.grid){h=b.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/b.grid[1])*b.grid[1]:this.originalPageY;h=g?!(h-this.offset.click.top<g[1]||h-this.offset.click.top>g[3])?h:!(h-this.offset.click.top<g[1])?h-b.grid[1]:h+b.grid[1]:h;e=b.grid[0]?this.originalPageX+Math.round((e-this.originalPageX)/
b.grid[0])*b.grid[0]:this.originalPageX;e=g?!(e-this.offset.click.left<g[0]||e-this.offset.click.left>g[2])?e:!(e-this.offset.click.left<g[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<
526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,
c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.16"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var h=d.data(this,"sortable");if(h&&!h.options.disabled){c.sortables.push({instance:h,shouldRevert:h.options.revert});
h.refreshPositions();h._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=
false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;
c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&
this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=
a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!=
"x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<
c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-
c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,
width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),f=c.options,e=f.snapTolerance,h=b.offset.left,g=h+c.helperProportions.width,n=b.offset.top,o=n+c.helperProportions.height,i=c.snapElements.length-1;i>=0;i--){var j=c.snapElements[i].left,l=j+c.snapElements[i].width,k=c.snapElements[i].top,m=k+c.snapElements[i].height;if(j-e<h&&h<l+e&&k-e<n&&n<m+e||j-e<h&&h<l+e&&k-e<o&&o<m+e||j-e<g&&g<l+e&&k-e<n&&n<m+e||j-e<g&&g<l+e&&k-e<o&&
o<m+e){if(f.snapMode!="inner"){var p=Math.abs(k-o)<=e,q=Math.abs(m-n)<=e,r=Math.abs(j-g)<=e,s=Math.abs(l-h)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l}).left-c.margins.left}var t=
p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(k-n)<=e;q=Math.abs(m-o)<=e;r=Math.abs(j-h)<=e;s=Math.abs(l-g)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[i].snapping&&
(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=p||q||r||s||t}else{c.snapElements[i].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),
10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;/*
 * jQuery UI Droppable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(d){d.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var a=this.options,b=a.accept;this.isover=0;this.isout=1;this.accept=d.isFunction(b)?b:function(c){return c.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];d.ui.ddmanager.droppables[a.scope].push(this);
a.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var a=d.ui.ddmanager.droppables[this.options.scope],b=0;b<a.length;b++)a[b]==this&&a.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(a,b){if(a=="accept")this.accept=d.isFunction(b)?b:function(c){return c.is(b)};d.Widget.prototype._setOption.apply(this,arguments)},_activate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);b&&this._trigger("activate",a,this.ui(b))},_deactivate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);b&&this._trigger("deactivate",a,this.ui(b))},_over:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",a,this.ui(b))}},_out:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",a,this.ui(b))}},_drop:function(a,b){var c=b||d.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return false;var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=
d.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],c.currentItem||c.element)&&d.ui.intersect(c,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){e=true;return false}});if(e)return false;if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
a,this.ui(c));return this.element}return false},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}});d.extend(d.ui.droppable,{version:"1.8.16"});d.ui.intersect=function(a,b,c){if(!b.offset)return false;var e=(a.positionAbs||a.position.absolute).left,g=e+a.helperProportions.width,f=(a.positionAbs||a.position.absolute).top,h=f+a.helperProportions.height,i=b.offset.left,k=i+b.proportions.width,j=b.offset.top,l=j+b.proportions.height;
switch(c){case "fit":return i<=e&&g<=k&&j<=f&&h<=l;case "intersect":return i<e+a.helperProportions.width/2&&g-a.helperProportions.width/2<k&&j<f+a.helperProportions.height/2&&h-a.helperProportions.height/2<l;case "pointer":return d.ui.isOver((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,j,i,b.proportions.height,b.proportions.width);case "touch":return(f>=j&&f<=l||h>=j&&h<=l||f<j&&h>l)&&(e>=
i&&e<=k||g>=i&&g<=k||e<i&&g>k);default:return false}};d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,b){var c=d.ui.ddmanager.droppables[a.options.scope]||[],e=b?b.type:null,g=(a.currentItem||a.element).find(":data(droppable)").andSelf(),f=0;a:for(;f<c.length;f++)if(!(c[f].options.disabled||a&&!c[f].accept.call(c[f].element[0],a.currentItem||a.element))){for(var h=0;h<g.length;h++)if(g[h]==c[f].element[0]){c[f].proportions.height=0;continue a}c[f].visible=c[f].element.css("display")!=
"none";if(c[f].visible){e=="mousedown"&&c[f]._activate.call(c[f],b);c[f].offset=c[f].element.offset();c[f].proportions={width:c[f].element[0].offsetWidth,height:c[f].element[0].offsetHeight}}}},drop:function(a,b){var c=false;d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance))c=c||this._drop.call(this,b);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||
a.element)){this.isout=1;this.isover=0;this._deactivate.call(this,b)}}});return c},dragStart:function(a,b){a.element.parents(":not(body,html)").bind("scroll.droppable",function(){a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,b)})},drag:function(a,b){a.options.refreshPositions&&d.ui.ddmanager.prepareOffsets(a,b);d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var c=d.ui.intersect(a,this,this.options.tolerance);
if(c=!c&&this.isover==1?"isout":c&&this.isover==0?"isover":null){var e;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){e=d.data(g[0],"droppable");e.greedyChild=c=="isover"?1:0}}if(e&&c=="isover"){e.isover=0;e.isout=1;e._out.call(e,b)}this[c]=1;this[c=="isout"?"isover":"isout"]=0;this[c=="isover"?"_over":"_out"].call(this,b);if(e&&c=="isout"){e.isout=0;e.isover=1;e._over.call(e,b)}}}})},dragStop:function(a,b){a.element.parents(":not(body,html)").unbind("scroll.droppable");
a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,b)}}})(jQuery);
;/*
 * jQuery UI Resizable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.resizable",e.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var b=this,a=this.options;this.element.addClass("ui-resizable");e.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&e.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=a.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var c=this.handles.split(",");this.handles={};for(var d=0;d<c.length;d++){var f=e.trim(c[d]),g=e('<div class="ui-resizable-handle '+("ui-resizable-"+f)+'"></div>');/sw|se|ne|nw/.test(f)&&g.css({zIndex:++a.zIndex});"se"==f&&g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[f]=".ui-resizable-"+f;this.element.append(g)}}this._renderAxis=function(h){h=h||this.element;for(var i in this.handles){if(this.handles[i].constructor==
String)this.handles[i]=e(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var j=e(this.handles[i],this.element),l=0;l=/sw|ne|nw|se|n|s/.test(i)?j.outerHeight():j.outerWidth();j=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");h.css(j,l);this._proportionallyResize()}e(this.handles[i])}};this._renderAxis(this.element);this._handles=e(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!b.resizing){if(this.className)var h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=h&&h[1]?h[1]:"se"}});if(a.autoHide){this._handles.hide();e(this.element).addClass("ui-resizable-autohide").hover(function(){if(!a.disabled){e(this).removeClass("ui-resizable-autohide");b._handles.show()}},function(){if(!a.disabled)if(!b.resizing){e(this).addClass("ui-resizable-autohide");b._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();
var b=function(c){e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var a=this.element;a.after(this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);b(this.originalElement);return this},_mouseCapture:function(b){var a=
false;for(var c in this.handles)if(e(this.handles[c])[0]==b.target)a=true;return!this.options.disabled&&a},_mouseStart:function(b){var a=this.options,c=this.element.position(),d=this.element;this.resizing=true;this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()};if(d.is(".ui-draggable")||/absolute/.test(d.css("position")))d.css({position:"absolute",top:c.top,left:c.left});e.browser.opera&&/relative/.test(d.css("position"))&&d.css({position:"relative",top:"auto",left:"auto"});
this._renderProxy();c=m(this.helper.css("left"));var f=m(this.helper.css("top"));if(a.containment){c+=e(a.containment).scrollLeft()||0;f+=e(a.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:c,top:f};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:c,top:f};this.sizeDiff=
{width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:b.pageX,top:b.pageY};this.aspectRatio=typeof a.aspectRatio=="number"?a.aspectRatio:this.originalSize.width/this.originalSize.height||1;a=e(".ui-resizable-"+this.axis).css("cursor");e("body").css("cursor",a=="auto"?this.axis+"-resize":a);d.addClass("ui-resizable-resizing");this._propagate("start",b);return true},_mouseDrag:function(b){var a=this.helper,c=this.originalMousePosition,d=this._change[this.axis];
if(!d)return false;c=d.apply(this,[b,b.pageX-c.left||0,b.pageY-c.top||0]);this._updateVirtualBoundaries(b.shiftKey);if(this._aspectRatio||b.shiftKey)c=this._updateRatio(c,b);c=this._respectSize(c,b);this._propagate("resize",b);a.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(c);this._trigger("resize",b,this.ui());return false},
_mouseStop:function(b){this.resizing=false;var a=this.options,c=this;if(this._helper){var d=this._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName);d=f&&e.ui.hasScroll(d[0],"left")?0:c.sizeDiff.height;f=f?0:c.sizeDiff.width;f={width:c.helper.width()-f,height:c.helper.height()-d};d=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null;var g=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;a.animate||this.element.css(e.extend(f,
{top:g,left:d}));c.helper.height(c.size.height);c.helper.width(c.size.width);this._helper&&!a.animate&&this._proportionallyResize()}e("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",b);this._helper&&this.helper.remove();return false},_updateVirtualBoundaries:function(b){var a=this.options,c,d,f;a={minWidth:k(a.minWidth)?a.minWidth:0,maxWidth:k(a.maxWidth)?a.maxWidth:Infinity,minHeight:k(a.minHeight)?a.minHeight:0,maxHeight:k(a.maxHeight)?a.maxHeight:
Infinity};if(this._aspectRatio||b){b=a.minHeight*this.aspectRatio;d=a.minWidth/this.aspectRatio;c=a.maxHeight*this.aspectRatio;f=a.maxWidth/this.aspectRatio;if(b>a.minWidth)a.minWidth=b;if(d>a.minHeight)a.minHeight=d;if(c<a.maxWidth)a.maxWidth=c;if(f<a.maxHeight)a.maxHeight=f}this._vBoundaries=a},_updateCache:function(b){this.offset=this.helper.offset();if(k(b.left))this.position.left=b.left;if(k(b.top))this.position.top=b.top;if(k(b.height))this.size.height=b.height;if(k(b.width))this.size.width=
b.width},_updateRatio:function(b){var a=this.position,c=this.size,d=this.axis;if(k(b.height))b.width=b.height*this.aspectRatio;else if(k(b.width))b.height=b.width/this.aspectRatio;if(d=="sw"){b.left=a.left+(c.width-b.width);b.top=null}if(d=="nw"){b.top=a.top+(c.height-b.height);b.left=a.left+(c.width-b.width)}return b},_respectSize:function(b){var a=this._vBoundaries,c=this.axis,d=k(b.width)&&a.maxWidth&&a.maxWidth<b.width,f=k(b.height)&&a.maxHeight&&a.maxHeight<b.height,g=k(b.width)&&a.minWidth&&
a.minWidth>b.width,h=k(b.height)&&a.minHeight&&a.minHeight>b.height;if(g)b.width=a.minWidth;if(h)b.height=a.minHeight;if(d)b.width=a.maxWidth;if(f)b.height=a.maxHeight;var i=this.originalPosition.left+this.originalSize.width,j=this.position.top+this.size.height,l=/sw|nw|w/.test(c);c=/nw|ne|n/.test(c);if(g&&l)b.left=i-a.minWidth;if(d&&l)b.left=i-a.maxWidth;if(h&&c)b.top=j-a.minHeight;if(f&&c)b.top=j-a.maxHeight;if((a=!b.width&&!b.height)&&!b.left&&b.top)b.top=null;else if(a&&!b.top&&b.left)b.left=
null;return b},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var b=this.helper||this.element,a=0;a<this._proportionallyResizeElements.length;a++){var c=this._proportionallyResizeElements[a];if(!this.borderDif){var d=[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],f=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];this.borderDif=e.map(d,function(g,h){g=parseInt(g,10)||
0;h=parseInt(f[h],10)||0;return g+h})}e.browser.msie&&(e(b).is(":hidden")||e(b).parents(":hidden").length)||c.css({height:b.height()-this.borderDif[0]-this.borderDif[2]||0,width:b.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var b=this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var a=e.browser.msie&&e.browser.version<7,c=a?1:0;a=a?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+
a,height:this.element.outerHeight()+a,position:"absolute",left:this.elementOffset.left-c+"px",top:this.elementOffset.top-c+"px",zIndex:++b.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(b,a){return{width:this.originalSize.width+a}},w:function(b,a){return{left:this.originalPosition.left+a,width:this.originalSize.width-a}},n:function(b,a,c){return{top:this.originalPosition.top+c,height:this.originalSize.height-c}},s:function(b,a,c){return{height:this.originalSize.height+
c}},se:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},sw:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,a,c]))},ne:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},nw:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,a,c]))}},_propagate:function(b,a){e.ui.plugin.call(this,b,[a,this.ui()]);
b!="resize"&&this._trigger(b,a,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});e.extend(e.ui.resizable,{version:"1.8.16"});e.ui.plugin.add("resizable","alsoResize",{start:function(){var b=e(this).data("resizable").options,a=function(c){e(c).each(function(){var d=e(this);d.data("resizable-alsoresize",{width:parseInt(d.width(),
10),height:parseInt(d.height(),10),left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10),position:d.css("position")})})};if(typeof b.alsoResize=="object"&&!b.alsoResize.parentNode)if(b.alsoResize.length){b.alsoResize=b.alsoResize[0];a(b.alsoResize)}else e.each(b.alsoResize,function(c){a(c)});else a(b.alsoResize)},resize:function(b,a){var c=e(this).data("resizable");b=c.options;var d=c.originalSize,f=c.originalPosition,g={height:c.size.height-d.height||0,width:c.size.width-d.width||0,top:c.position.top-
f.top||0,left:c.position.left-f.left||0},h=function(i,j){e(i).each(function(){var l=e(this),q=e(this).data("resizable-alsoresize"),p={},r=j&&j.length?j:l.parents(a.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(r,function(n,o){if((n=(q[o]||0)+(g[o]||0))&&n>=0)p[o]=n||null});if(e.browser.opera&&/relative/.test(l.css("position"))){c._revertToRelativePosition=true;l.css({position:"absolute",top:"auto",left:"auto"})}l.css(p)})};typeof b.alsoResize=="object"&&!b.alsoResize.nodeType?
e.each(b.alsoResize,function(i,j){h(i,j)}):h(b.alsoResize)},stop:function(){var b=e(this).data("resizable"),a=b.options,c=function(d){e(d).each(function(){var f=e(this);f.css({position:f.data("resizable-alsoresize").position})})};if(b._revertToRelativePosition){b._revertToRelativePosition=false;typeof a.alsoResize=="object"&&!a.alsoResize.nodeType?e.each(a.alsoResize,function(d){c(d)}):c(a.alsoResize)}e(this).removeData("resizable-alsoresize")}});e.ui.plugin.add("resizable","animate",{stop:function(b){var a=
e(this).data("resizable"),c=a.options,d=a._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName),g=f&&e.ui.hasScroll(d[0],"left")?0:a.sizeDiff.height;f={width:a.size.width-(f?0:a.sizeDiff.width),height:a.size.height-g};g=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var h=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;a.element.animate(e.extend(f,h&&g?{top:h,left:g}:{}),{duration:c.animateDuration,easing:c.animateEasing,
step:function(){var i={width:parseInt(a.element.css("width"),10),height:parseInt(a.element.css("height"),10),top:parseInt(a.element.css("top"),10),left:parseInt(a.element.css("left"),10)};d&&d.length&&e(d[0]).css({width:i.width,height:i.height});a._updateCache(i);a._propagate("resize",b)}})}});e.ui.plugin.add("resizable","containment",{start:function(){var b=e(this).data("resizable"),a=b.element,c=b.options.containment;if(a=c instanceof e?c.get(0):/parent/.test(c)?a.parent().get(0):c){b.containerElement=
e(a);if(/document/.test(c)||c==document){b.containerOffset={left:0,top:0};b.containerPosition={left:0,top:0};b.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}}else{var d=e(a),f=[];e(["Top","Right","Left","Bottom"]).each(function(i,j){f[i]=m(d.css("padding"+j))});b.containerOffset=d.offset();b.containerPosition=d.position();b.containerSize={height:d.innerHeight()-f[3],width:d.innerWidth()-f[1]};c=b.containerOffset;
var g=b.containerSize.height,h=b.containerSize.width;h=e.ui.hasScroll(a,"left")?a.scrollWidth:h;g=e.ui.hasScroll(a)?a.scrollHeight:g;b.parentData={element:a,left:c.left,top:c.top,width:h,height:g}}}},resize:function(b){var a=e(this).data("resizable"),c=a.options,d=a.containerOffset,f=a.position;b=a._aspectRatio||b.shiftKey;var g={top:0,left:0},h=a.containerElement;if(h[0]!=document&&/static/.test(h.css("position")))g=d;if(f.left<(a._helper?d.left:0)){a.size.width+=a._helper?a.position.left-d.left:
a.position.left-g.left;if(b)a.size.height=a.size.width/c.aspectRatio;a.position.left=c.helper?d.left:0}if(f.top<(a._helper?d.top:0)){a.size.height+=a._helper?a.position.top-d.top:a.position.top;if(b)a.size.width=a.size.height*c.aspectRatio;a.position.top=a._helper?d.top:0}a.offset.left=a.parentData.left+a.position.left;a.offset.top=a.parentData.top+a.position.top;c=Math.abs((a._helper?a.offset.left-g.left:a.offset.left-g.left)+a.sizeDiff.width);d=Math.abs((a._helper?a.offset.top-g.top:a.offset.top-
d.top)+a.sizeDiff.height);f=a.containerElement.get(0)==a.element.parent().get(0);g=/relative|absolute/.test(a.containerElement.css("position"));if(f&&g)c-=a.parentData.left;if(c+a.size.width>=a.parentData.width){a.size.width=a.parentData.width-c;if(b)a.size.height=a.size.width/a.aspectRatio}if(d+a.size.height>=a.parentData.height){a.size.height=a.parentData.height-d;if(b)a.size.width=a.size.height*a.aspectRatio}},stop:function(){var b=e(this).data("resizable"),a=b.options,c=b.containerOffset,d=b.containerPosition,
f=b.containerElement,g=e(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width;g=g.outerHeight()-b.sizeDiff.height;b._helper&&!a.animate&&/relative/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g});b._helper&&!a.animate&&/static/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g})}});e.ui.plugin.add("resizable","ghost",{start:function(){var b=e(this).data("resizable"),a=b.options,c=b.size;b.ghost=b.originalElement.clone();b.ghost.css({opacity:0.25,
display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost=="string"?a.ghost:"");b.ghost.appendTo(b.helper)},resize:function(){var b=e(this).data("resizable");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=e(this).data("resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}});e.ui.plugin.add("resizable","grid",{resize:function(){var b=
e(this).data("resizable"),a=b.options,c=b.size,d=b.originalSize,f=b.originalPosition,g=b.axis;a.grid=typeof a.grid=="number"?[a.grid,a.grid]:a.grid;var h=Math.round((c.width-d.width)/(a.grid[0]||1))*(a.grid[0]||1);a=Math.round((c.height-d.height)/(a.grid[1]||1))*(a.grid[1]||1);if(/^(se|s|e)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else if(/^(ne)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}else{if(/^(sw)$/.test(g)){b.size.width=d.width+h;b.size.height=
d.height+a}else{b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}b.position.left=f.left-h}}});var m=function(b){return parseInt(b,10)||0},k=function(b){return!isNaN(parseInt(b,10))}})(jQuery);
;/*
 * jQuery UI Selectable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.selectable",e.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;this.element.addClass("ui-selectable");this.dragged=false;var f;this.refresh=function(){f=e(c.options.filter,c.element[0]);f.each(function(){var d=e(this),b=d.offset();e.data(this,"selectable-item",{element:this,$element:d,left:b.left,top:b.top,right:b.left+d.outerWidth(),bottom:b.top+d.outerHeight(),startselected:false,selected:d.hasClass("ui-selected"),
selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")})})};this.refresh();this.selectees=f.addClass("ui-selectee");this._mouseInit();this.helper=e("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(c){var f=this;this.opos=[c.pageX,
c.pageY];if(!this.options.disabled){var d=this.options;this.selectees=e(d.filter,this.element[0]);this._trigger("start",c);e(d.appendTo).append(this.helper);this.helper.css({left:c.clientX,top:c.clientY,width:0,height:0});d.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var b=e.data(this,"selectable-item");b.startselected=true;if(!c.metaKey){b.$element.removeClass("ui-selected");b.selected=false;b.$element.addClass("ui-unselecting");b.unselecting=true;f._trigger("unselecting",
c,{unselecting:b.element})}});e(c.target).parents().andSelf().each(function(){var b=e.data(this,"selectable-item");if(b){var g=!c.metaKey||!b.$element.hasClass("ui-selected");b.$element.removeClass(g?"ui-unselecting":"ui-selected").addClass(g?"ui-selecting":"ui-unselecting");b.unselecting=!g;b.selecting=g;(b.selected=g)?f._trigger("selecting",c,{selecting:b.element}):f._trigger("unselecting",c,{unselecting:b.element});return false}})}},_mouseDrag:function(c){var f=this;this.dragged=true;if(!this.options.disabled){var d=
this.options,b=this.opos[0],g=this.opos[1],h=c.pageX,i=c.pageY;if(b>h){var j=h;h=b;b=j}if(g>i){j=i;i=g;g=j}this.helper.css({left:b,top:g,width:h-b,height:i-g});this.selectees.each(function(){var a=e.data(this,"selectable-item");if(!(!a||a.element==f.element[0])){var k=false;if(d.tolerance=="touch")k=!(a.left>h||a.right<b||a.top>i||a.bottom<g);else if(d.tolerance=="fit")k=a.left>b&&a.right<h&&a.top>g&&a.bottom<i;if(k){if(a.selected){a.$element.removeClass("ui-selected");a.selected=false}if(a.unselecting){a.$element.removeClass("ui-unselecting");
a.unselecting=false}if(!a.selecting){a.$element.addClass("ui-selecting");a.selecting=true;f._trigger("selecting",c,{selecting:a.element})}}else{if(a.selecting)if(c.metaKey&&a.startselected){a.$element.removeClass("ui-selecting");a.selecting=false;a.$element.addClass("ui-selected");a.selected=true}else{a.$element.removeClass("ui-selecting");a.selecting=false;if(a.startselected){a.$element.addClass("ui-unselecting");a.unselecting=true}f._trigger("unselecting",c,{unselecting:a.element})}if(a.selected)if(!c.metaKey&&
!a.startselected){a.$element.removeClass("ui-selected");a.selected=false;a.$element.addClass("ui-unselecting");a.unselecting=true;f._trigger("unselecting",c,{unselecting:a.element})}}}});return false}},_mouseStop:function(c){var f=this;this.dragged=false;e(".ui-unselecting",this.element[0]).each(function(){var d=e.data(this,"selectable-item");d.$element.removeClass("ui-unselecting");d.unselecting=false;d.startselected=false;f._trigger("unselected",c,{unselected:d.element})});e(".ui-selecting",this.element[0]).each(function(){var d=
e.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected");d.selecting=false;d.selected=true;d.startselected=true;f._trigger("selected",c,{selected:d.element})});this._trigger("stop",c);this.helper.remove();return false}});e.extend(e.ui.selectable,{version:"1.8.16"})})(jQuery);
;/*
 * jQuery UI Sortable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.sortable",d.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){var a=this.options;this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData("sortable-item");return this},_setOption:function(a,b){if(a===
"disabled"){this.options[a]=b;this.widget()[b?"addClass":"removeClass"]("ui-sortable-disabled")}else d.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(a,b){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(a);var c=null,e=this;d(a.target).parents().each(function(){if(d.data(this,"sortable-item")==e){c=d(this);return false}});if(d.data(a.target,"sortable-item")==e)c=d(a.target);if(!c)return false;if(this.options.handle&&
!b){var f=false;d(this.options.handle,c).find("*").andSelf().each(function(){if(this==a.target)f=true});if(!f)return false}this.currentItem=c;this._removeCurrentsFromItems();return true},_mouseStart:function(a,b,c){b=this.options;var e=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(a);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();b.containment&&this._setContainment();if(b.cursor){if(d("body").css("cursor"))this._storedCursor=d("body").css("cursor");d("body").css("cursor",b.cursor)}if(b.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",b.opacity)}if(b.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",b.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",a,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!c)for(c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("activate",a,e._uiHash(this));if(d.ui.ddmanager)d.ui.ddmanager.current=this;d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(a);
return true},_mouseDrag:function(a){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var b=this.options,c=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+b.scrollSpeed;else if(a.pageY-this.overflowOffset.top<
b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-b.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+b.scrollSpeed;else if(a.pageX-this.overflowOffset.left<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-b.scrollSpeed}else{if(a.pageY-d(document).scrollTop()<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()-
b.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()+b.scrollSpeed);if(a.pageX-d(document).scrollLeft()<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()-b.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()+b.scrollSpeed)}c!==false&&d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,
a)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(b=this.items.length-1;b>=0;b--){c=this.items[b];var e=c.item[0],f=this._intersectsWithPointer(c);if(f)if(e!=this.currentItem[0]&&this.placeholder[f==1?"next":"prev"]()[0]!=e&&!d.ui.contains(this.placeholder[0],e)&&(this.options.type=="semi-dynamic"?!d.ui.contains(this.element[0],
e):true)){this.direction=f==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(c))this._rearrange(a,c);else break;this._trigger("change",a,this._uiHash());break}}this._contactContainers(a);d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);this._trigger("sort",a,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(a,b){if(a){d.ui.ddmanager&&!this.options.dropBehaviour&&d.ui.ddmanager.drop(this,a);if(this.options.revert){var c=this;b=c.placeholder.offset();
c.reverting=true;d(this.helper).animate({left:b.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:b.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(a)})}else this._clear(a,b);return false}},cancel:function(){var a=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--){this.containers[b]._trigger("deactivate",null,a._uiHash(this));if(this.containers[b].containerCache.over){this.containers[b]._trigger("out",null,a._uiHash(this));this.containers[b].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();d.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};d(b).each(function(){var e=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);if(e)c.push((a.key||e[1]+"[]")+"="+(a.key&&a.expression?e[1]:e[2]))});!c.length&&a.key&&c.push(a.key+"=");return c.join("&")},
toArray:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};b.each(function(){c.push(d(a.item||this).attr(a.attribute||"id")||"")});return c},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,e=this.positionAbs.top,f=e+this.helperProportions.height,g=a.left,h=g+a.width,i=a.top,k=i+a.height,j=this.offset.click.top,l=this.offset.click.left;j=e+j>i&&e+j<k&&b+l>g&&b+l<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?j:g<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<h&&i<e+this.helperProportions.height/2&&f-this.helperProportions.height/2<k},_intersectsWithPointer:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);b=b&&a;a=this._getDragVerticalDirection();
var c=this._getDragHorizontalDirection();if(!b)return false;return this.floating?c&&c=="right"||a=="down"?2:1:a&&(a=="down"?2:1)},_intersectsWithSides:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width);var c=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?e=="right"&&a||e=="left"&&!a:c&&(c=="down"&&b||c=="up"&&!b)},
_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){this._refreshItems(a);this.refreshPositions();return this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(a){var b=[],c=[],e=this._connectWith();
if(e&&a)for(a=e.length-1;a>=0;a--)for(var f=d(e[a]),g=f.length-1;g>=0;g--){var h=d.data(f[g],"sortable");if(h&&h!=this&&!h.options.disabled)c.push([d.isFunction(h.options.items)?h.options.items.call(h.element):d(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}c.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(a=c.length-1;a>=0;a--)c[a][0].each(function(){b.push(this)});return d(b)},_removeCurrentsFromItems:function(){for(var a=this.currentItem.find(":data(sortable-item)"),b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(a){this.items=[];this.containers=[this];var b=this.items,c=[[d.isFunction(this.options.items)?this.options.items.call(this.element[0],a,{item:this.currentItem}):d(this.options.items,this.element),
this]],e=this._connectWith();if(e)for(var f=e.length-1;f>=0;f--)for(var g=d(e[f]),h=g.length-1;h>=0;h--){var i=d.data(g[h],"sortable");if(i&&i!=this&&!i.options.disabled){c.push([d.isFunction(i.options.items)?i.options.items.call(i.element[0],a,{item:this.currentItem}):d(i.options.items,i.element),i]);this.containers.push(i)}}for(f=c.length-1;f>=0;f--){a=c[f][1];e=c[f][0];h=0;for(g=e.length;h<g;h++){i=d(e[h]);i.data("sortable-item",a);b.push({item:i,instance:a,width:0,height:0,left:0,top:0})}}},refreshPositions:function(a){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var b=this.items.length-1;b>=0;b--){var c=this.items[b];if(!(c.instance!=this.currentContainer&&this.currentContainer&&c.item[0]!=this.currentItem[0])){var e=this.options.toleranceElement?d(this.options.toleranceElement,c.item):c.item;if(!a){c.width=e.outerWidth();c.height=e.outerHeight()}e=e.offset();c.left=e.left;c.top=e.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(b=
this.containers.length-1;b>=0;b--){e=this.containers[b].element.offset();this.containers[b].containerCache.left=e.left;this.containers[b].containerCache.top=e.top;this.containers[b].containerCache.width=this.containers[b].element.outerWidth();this.containers[b].containerCache.height=this.containers[b].element.outerHeight()}return this},_createPlaceholder:function(a){var b=a||this,c=b.options;if(!c.placeholder||c.placeholder.constructor==String){var e=c.placeholder;c.placeholder={element:function(){var f=
d(document.createElement(b.currentItem[0].nodeName)).addClass(e||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!e)f.style.visibility="hidden";return f},update:function(f,g){if(!(e&&!c.forcePlaceholderSize)){g.height()||g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));g.width()||g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||
0,10))}}}}b.placeholder=d(c.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);c.placeholder.update(b,b.placeholder)},_contactContainers:function(a){for(var b=null,c=null,e=this.containers.length-1;e>=0;e--)if(!d.ui.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(!(b&&d.ui.contains(this.containers[e].element[0],b.element[0]))){b=this.containers[e];c=e}}else if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",
a,this._uiHash(this));this.containers[e].containerCache.over=0}if(b)if(this.containers.length===1){this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}else if(this.currentContainer!=this.containers[c]){b=1E4;e=null;for(var f=this.positionAbs[this.containers[c].floating?"left":"top"],g=this.items.length-1;g>=0;g--)if(d.ui.contains(this.containers[c].element[0],this.items[g].item[0])){var h=this.items[g][this.containers[c].floating?"left":"top"];if(Math.abs(h-
f)<b){b=Math.abs(h-f);e=this.items[g]}}if(e||this.options.dropOnEmpty){this.currentContainer=this.containers[c];e?this._rearrange(a,e,null,true):this._rearrange(a,null,this.containers[c].element,true);this._trigger("change",a,this._uiHash());this.containers[c]._trigger("change",a,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}}},_createHelper:function(a){var b=
this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a,this.currentItem])):b.helper=="clone"?this.currentItem.clone():this.currentItem;a.parents("body").length||d(b.appendTo!="parent"?b.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]);if(a[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(a[0].style.width==
""||b.forceHelperSize)a.width(this.currentItem.width());if(a[0].style.height==""||b.forceHelperSize)a.height(this.currentItem.height());return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=
this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a=
{top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),
10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)){var b=d(a.containment)[0];a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),
10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(a,b){if(!b)b=
this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&
this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();
var f=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])f=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])f=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-
this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;f=this.originalPageX+Math.round((f-this.originalPageX)/b.grid[0])*b.grid[0];f=this.containment?!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:!(f-this.offset.click.left<this.containment[0])?f-b.grid[0]:f+b.grid[0]:f}}return{top:g-
this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())}},_rearrange:function(a,b,c,e){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],
this.direction=="down"?b.item[0]:b.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var f=this,g=this.counter;window.setTimeout(function(){g==f.counter&&f.refreshPositions(!e)},0)},_clear:function(a,b){this.reverting=false;var c=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS)if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static")this._storedCSS[e]=
"";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!b&&c.push(function(f){this._trigger("receive",f,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!b)c.push(function(f){this._trigger("update",f,this._uiHash())});if(!d.ui.contains(this.element[0],this.currentItem[0])){b||c.push(function(f){this._trigger("remove",
f,this._uiHash())});for(e=this.containers.length-1;e>=0;e--)if(d.ui.contains(this.containers[e].element[0],this.currentItem[0])&&!b){c.push(function(f){return function(g){f._trigger("receive",g,this._uiHash(this))}}.call(this,this.containers[e]));c.push(function(f){return function(g){f._trigger("update",g,this._uiHash(this))}}.call(this,this.containers[e]))}}for(e=this.containers.length-1;e>=0;e--){b||c.push(function(f){return function(g){f._trigger("deactivate",g,this._uiHash(this))}}.call(this,
this.containers[e]));if(this.containers[e].containerCache.over){c.push(function(f){return function(g){f._trigger("out",g,this._uiHash(this))}}.call(this,this.containers[e]));this.containers[e].containerCache.over=0}}this._storedCursor&&d("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",
a,this._uiHash());for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}return false}b||this._trigger("beforeStop",a,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!b){for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){d.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},
_uiHash:function(a){var b=a||this;return{helper:b.helper,placeholder:b.placeholder||d([]),position:b.position,originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:a?a.element:null}}});d.extend(d.ui.sortable,{version:"1.8.16"})})(jQuery);
;/*
 * jQuery UI Accordion 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(c){c.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var a=this,b=a.options;a.running=0;a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
a.headers=a.element.find(b.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){b.disabled||c(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){b.disabled||c(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){b.disabled||c(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){b.disabled||c(this).removeClass("ui-state-focus")});a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(b.navigation){var d=a.element.find("a").filter(b.navigationFilter).eq(0);if(d.length){var h=d.closest(".ui-accordion-header");a.active=h.length?h:d.closest(".ui-accordion-content").prev()}}a.active=a._findActive(a.active||b.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");a.active.next().addClass("ui-accordion-content-active");a._createIcons();a.resize();a.element.attr("role","tablist");a.headers.attr("role","tab").bind("keydown.accordion",
function(f){return a._keydown(f)}).next().attr("role","tabpanel");a.headers.not(a.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();a.active.length?a.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):a.headers.eq(0).attr("tabIndex",0);c.browser.safari||a.headers.find("a").attr("tabIndex",-1);b.event&&a.headers.bind(b.event.split(" ").join(".accordion ")+".accordion",function(f){a._clickHandler.call(a,f,this);f.preventDefault()})},_createIcons:function(){var a=
this.options;if(a.icons){c("<span></span>").addClass("ui-icon "+a.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var a=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(a.autoHeight||a.fillHeight)b.css("height","");return c.Widget.prototype.destroy.call(this)},_setOption:function(a,b){c.Widget.prototype._setOption.apply(this,arguments);a=="active"&&this.activate(b);if(a=="icons"){this._destroyIcons();
b&&this._createIcons()}if(a=="disabled")this.headers.add(this.headers.next())[b?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(a){if(!(this.options.disabled||a.altKey||a.ctrlKey)){var b=c.ui.keyCode,d=this.headers.length,h=this.headers.index(a.target),f=false;switch(a.keyCode){case b.RIGHT:case b.DOWN:f=this.headers[(h+1)%d];break;case b.LEFT:case b.UP:f=this.headers[(h-1+d)%d];break;case b.SPACE:case b.ENTER:this._clickHandler({target:a.target},a.target);
a.preventDefault()}if(f){c(a.target).attr("tabIndex",-1);c(f).attr("tabIndex",0);f.focus();return false}return true}},resize:function(){var a=this.options,b;if(a.fillSpace){if(c.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}b=this.element.parent().height();c.browser.msie&&this.element.parent().css("overflow",d);this.headers.each(function(){b-=c(this).outerHeight(true)});this.headers.next().each(function(){c(this).height(Math.max(0,b-c(this).innerHeight()+
c(this).height()))}).css("overflow","auto")}else if(a.autoHeight){b=0;this.headers.next().each(function(){b=Math.max(b,c(this).height("").height())}).height(b)}return this},activate:function(a){this.options.active=a;a=this._findActive(a)[0];this._clickHandler({target:a},a);return this},_findActive:function(a){return a?typeof a==="number"?this.headers.filter(":eq("+a+")"):this.headers.not(this.headers.not(a)):a===false?c([]):this.headers.filter(":eq(0)")},_clickHandler:function(a,b){var d=this.options;
if(!d.disabled)if(a.target){a=c(a.currentTarget||b);b=a[0]===this.active[0];d.active=d.collapsible&&b?false:this.headers.index(a);if(!(this.running||!d.collapsible&&b)){var h=this.active;j=a.next();g=this.active.next();e={options:d,newHeader:b&&d.collapsible?c([]):a,oldHeader:this.active,newContent:b&&d.collapsible?c([]):j,oldContent:g};var f=this.headers.index(this.active[0])>this.headers.index(a[0]);this.active=b?c([]):a;this._toggle(j,g,e,b,f);h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
if(!b){a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);a.next().addClass("ui-accordion-content-active")}}}else if(d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var g=this.active.next(),
e={options:d,newHeader:c([]),oldHeader:d.active,newContent:c([]),oldContent:g},j=this.active=c([]);this._toggle(j,g,e)}},_toggle:function(a,b,d,h,f){var g=this,e=g.options;g.toShow=a;g.toHide=b;g.data=d;var j=function(){if(g)return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data);g.running=b.size()===0?a.size():b.size();if(e.animated){d={};d=e.collapsible&&h?{toShow:c([]),toHide:b,complete:j,down:f,autoHeight:e.autoHeight||e.fillSpace}:{toShow:a,toHide:b,complete:j,down:f,autoHeight:e.autoHeight||
e.fillSpace};if(!e.proxied)e.proxied=e.animated;if(!e.proxiedDuration)e.proxiedDuration=e.duration;e.animated=c.isFunction(e.proxied)?e.proxied(d):e.proxied;e.duration=c.isFunction(e.proxiedDuration)?e.proxiedDuration(d):e.proxiedDuration;h=c.ui.accordion.animations;var i=e.duration,k=e.animated;if(k&&!h[k]&&!c.easing[k])k="slide";h[k]||(h[k]=function(l){this.slide(l,{easing:k,duration:i||700})});h[k](d)}else{if(e.collapsible&&h)a.toggle();else{b.hide();a.show()}j(true)}b.prev().attr({"aria-expanded":"false",
"aria-selected":"false",tabIndex:-1}).blur();a.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});c.extend(c.ui.accordion,{version:"1.8.16",
animations:{slide:function(a,b){a=c.extend({easing:"swing",duration:300},a,b);if(a.toHide.size())if(a.toShow.size()){var d=a.toShow.css("overflow"),h=0,f={},g={},e;b=a.toShow;e=b[0].style.width;b.width(parseInt(b.parent().width(),10)-parseInt(b.css("paddingLeft"),10)-parseInt(b.css("paddingRight"),10)-(parseInt(b.css("borderLeftWidth"),10)||0)-(parseInt(b.css("borderRightWidth"),10)||0));c.each(["height","paddingTop","paddingBottom"],function(j,i){g[i]="hide";j=(""+c.css(a.toShow[0],i)).match(/^([\d+-.]+)(.*)$/);
f[i]={value:j[1],unit:j[2]||"px"}});a.toShow.css({height:0,overflow:"hidden"}).show();a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(g,{step:function(j,i){if(i.prop=="height")h=i.end-i.start===0?0:(i.now-i.start)/(i.end-i.start);a.toShow[0].style[i.prop]=h*f[i.prop].value+f[i.prop].unit},duration:a.duration,easing:a.easing,complete:function(){a.autoHeight||a.toShow.css("height","");a.toShow.css({width:e,overflow:d});a.complete()}})}else a.toHide.animate({height:"hide",
paddingTop:"hide",paddingBottom:"hide"},a);else a.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},a)},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1E3:200})}}})})(jQuery);
;/*
 * jQuery UI Autocomplete 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(d){var e=0;d.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var a=this,b=this.element[0].ownerDocument,g;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(!(a.options.disabled||a.element.propAttr("readOnly"))){g=
false;var f=d.ui.keyCode;switch(c.keyCode){case f.PAGE_UP:a._move("previousPage",c);break;case f.PAGE_DOWN:a._move("nextPage",c);break;case f.UP:a._move("previous",c);c.preventDefault();break;case f.DOWN:a._move("next",c);c.preventDefault();break;case f.ENTER:case f.NUMPAD_ENTER:if(a.menu.active){g=true;c.preventDefault()}case f.TAB:if(!a.menu.active)return;a.menu.select(c);break;case f.ESCAPE:a.element.val(a.term);a.close(c);break;default:clearTimeout(a.searching);a.searching=setTimeout(function(){if(a.term!=
a.element.val()){a.selectedItem=null;a.search(null,c)}},a.options.delay);break}}}).bind("keypress.autocomplete",function(c){if(g){g=false;c.preventDefault()}}).bind("focus.autocomplete",function(){if(!a.options.disabled){a.selectedItem=null;a.previous=a.element.val()}}).bind("blur.autocomplete",function(c){if(!a.options.disabled){clearTimeout(a.searching);a.closing=setTimeout(function(){a.close(c);a._change(c)},150)}});this._initSource();this.response=function(){return a._response.apply(a,arguments)};
this.menu=d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo||"body",b)[0]).mousedown(function(c){var f=a.menu.element[0];d(c.target).closest(".ui-menu-item").length||setTimeout(function(){d(document).one("mousedown",function(h){h.target!==a.element[0]&&h.target!==f&&!d.ui.contains(f,h.target)&&a.close()})},1);setTimeout(function(){clearTimeout(a.closing)},13)}).menu({focus:function(c,f){f=f.item.data("item.autocomplete");false!==a._trigger("focus",c,{item:f})&&/^key/.test(c.originalEvent.type)&&
a.element.val(f.value)},selected:function(c,f){var h=f.item.data("item.autocomplete"),i=a.previous;if(a.element[0]!==b.activeElement){a.element.focus();a.previous=i;setTimeout(function(){a.previous=i;a.selectedItem=h},1)}false!==a._trigger("select",c,{item:h})&&a.element.val(h.value);a.term=a.element.val();a.close(c);a.selectedItem=h},blur:function(){a.menu.element.is(":visible")&&a.element.val()!==a.term&&a.element.val(a.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
d.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();d.Widget.prototype.destroy.call(this)},_setOption:function(a,b){d.Widget.prototype._setOption.apply(this,arguments);a==="source"&&this._initSource();if(a==="appendTo")this.menu.element.appendTo(d(b||"body",this.element[0].ownerDocument)[0]);a==="disabled"&&
b&&this.xhr&&this.xhr.abort()},_initSource:function(){var a=this,b,g;if(d.isArray(this.options.source)){b=this.options.source;this.source=function(c,f){f(d.ui.autocomplete.filter(b,c.term))}}else if(typeof this.options.source==="string"){g=this.options.source;this.source=function(c,f){a.xhr&&a.xhr.abort();a.xhr=d.ajax({url:g,data:c,dataType:"json",autocompleteRequest:++e,success:function(h){this.autocompleteRequest===e&&f(h)},error:function(){this.autocompleteRequest===e&&f([])}})}}else this.source=
this.options.source},search:function(a,b){a=a!=null?a:this.element.val();this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)!==false)return this._search(a)},_search:function(a){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:a},this.response)},_response:function(a){if(!this.options.disabled&&a&&a.length){a=this._normalize(a);this._suggest(a);this._trigger("open")}else this.close();
this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(a){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",a)}},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(a){if(a.length&&a[0].label&&a[0].value)return a;return d.map(a,function(b){if(typeof b==="string")return{label:b,value:b};return d.extend({label:b.label||
b.value,value:b.value||b.label},b)})},_suggest:function(a){var b=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(b,a);this.menu.deactivate();this.menu.refresh();b.show();this._resizeMenu();b.position(d.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next(new d.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(a,b){var g=this;
d.each(b,function(c,f){g._renderItem(a,f)})},_renderItem:function(a,b){return d("<li></li>").data("item.autocomplete",b).append(d("<a></a>").text(b.label)).appendTo(a)},_move:function(a,b){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term);this.menu.deactivate()}else this.menu[a](b);else this.search(null,b)},widget:function(){return this.menu.element}});d.extend(d.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(a,b){var g=new RegExp(d.ui.autocomplete.escapeRegex(b),"i");return d.grep(a,function(c){return g.test(c.label||c.value||c)})}})})(jQuery);
(function(d){d.widget("ui.menu",{_create:function(){var e=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(a){if(d(a.target).closest(".ui-menu-item a").length){a.preventDefault();e.select(a)}});this.refresh()},refresh:function(){var e=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(a){e.activate(a,d(this).parent())}).mouseleave(function(){e.deactivate()})},activate:function(e,a){this.deactivate();if(this.hasScroll()){var b=a.offset().top-this.element.offset().top,g=this.element.scrollTop(),c=this.element.height();if(b<0)this.element.scrollTop(g+b);else b>=c&&this.element.scrollTop(g+b-c+a.height())}this.active=a.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",e,{item:a})},deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
this._trigger("blur");this.active=null}},next:function(e){this.move("next",".ui-menu-item:first",e)},previous:function(e){this.move("prev",".ui-menu-item:last",e)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(e,a,b){if(this.active){e=this.active[e+"All"](".ui-menu-item").eq(0);e.length?this.activate(b,e):this.activate(b,this.element.children(a))}else this.activate(b,
this.element.children(a))},nextPage:function(e){if(this.hasScroll())if(!this.active||this.last())this.activate(e,this.element.children(".ui-menu-item:first"));else{var a=this.active.offset().top,b=this.element.height(),g=this.element.children(".ui-menu-item").filter(function(){var c=d(this).offset().top-a-b+d(this).height();return c<10&&c>-10});g.length||(g=this.element.children(".ui-menu-item:last"));this.activate(e,g)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||
this.last()?":first":":last"))},previousPage:function(e){if(this.hasScroll())if(!this.active||this.first())this.activate(e,this.element.children(".ui-menu-item:last"));else{var a=this.active.offset().top,b=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var g=d(this).offset().top-a+b-d(this).height();return g<10&&g>-10});result.length||(result=this.element.children(".ui-menu-item:first"));this.activate(e,result)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||
this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[d.fn.prop?"prop":"attr"]("scrollHeight")},select:function(e){this._trigger("selected",e,{item:this.active})}})})(jQuery);
;/*
 * jQuery UI Button 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(b){var h,i,j,g,l=function(){var a=b(this).find(":ui-button");setTimeout(function(){a.button("refresh")},1)},k=function(a){var c=a.name,e=a.form,f=b([]);if(c)f=e?b(e).find("[name='"+c+"']"):b("[name='"+c+"']",a.ownerDocument).filter(function(){return!this.form});return f};b.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",l);if(typeof this.options.disabled!==
"boolean")this.options.disabled=this.element.propAttr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var a=this,c=this.options,e=this.type==="checkbox"||this.type==="radio",f="ui-state-hover"+(!e?" ui-state-active":"");if(c.label===null)c.label=this.buttonElement.html();if(this.element.is(":disabled"))c.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",function(){if(!c.disabled){b(this).addClass("ui-state-hover");
this===h&&b(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){c.disabled||b(this).removeClass(f)}).bind("click.button",function(d){if(c.disabled){d.preventDefault();d.stopImmediatePropagation()}});this.element.bind("focus.button",function(){a.buttonElement.addClass("ui-state-focus")}).bind("blur.button",function(){a.buttonElement.removeClass("ui-state-focus")});if(e){this.element.bind("change.button",function(){g||a.refresh()});this.buttonElement.bind("mousedown.button",function(d){if(!c.disabled){g=
false;i=d.pageX;j=d.pageY}}).bind("mouseup.button",function(d){if(!c.disabled)if(i!==d.pageX||j!==d.pageY)g=true})}if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(c.disabled||g)return false;b(this).toggleClass("ui-state-active");a.buttonElement.attr("aria-pressed",a.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(c.disabled||g)return false;b(this).addClass("ui-state-active");a.buttonElement.attr("aria-pressed","true");
var d=a.element[0];k(d).not(d).map(function(){return b(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")});else{this.buttonElement.bind("mousedown.button",function(){if(c.disabled)return false;b(this).addClass("ui-state-active");h=this;b(document).one("mouseup",function(){h=null})}).bind("mouseup.button",function(){if(c.disabled)return false;b(this).removeClass("ui-state-active")}).bind("keydown.button",function(d){if(c.disabled)return false;if(d.keyCode==b.ui.keyCode.SPACE||
d.keyCode==b.ui.keyCode.ENTER)b(this).addClass("ui-state-active")}).bind("keyup.button",function(){b(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(d){d.keyCode===b.ui.keyCode.SPACE&&b(this).click()})}this._setOption("disabled",c.disabled);this._resetButton()},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type===
"radio"){var a=this.element.parents().filter(":last"),c="label[for='"+this.element.attr("id")+"']";this.buttonElement=a.find(c);if(!this.buttonElement.length){a=a.length?a.siblings():this.element.siblings();this.buttonElement=a.filter(c);if(!this.buttonElement.length)this.buttonElement=a.find(c)}this.element.addClass("ui-helper-hidden-accessible");(a=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",a)}else this.buttonElement=this.element},
widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());this.hasTitle||this.buttonElement.removeAttr("title");
b.Widget.prototype.destroy.call(this)},_setOption:function(a,c){b.Widget.prototype._setOption.apply(this,arguments);if(a==="disabled")c?this.element.propAttr("disabled",true):this.element.propAttr("disabled",false);else this._resetButton()},refresh:function(){var a=this.element.is(":disabled");a!==this.options.disabled&&this._setOption("disabled",a);if(this.type==="radio")k(this.element[0]).each(function(){b(this).is(":checked")?b(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
"true"):b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var a=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
c=b("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),e=this.options.icons,f=e.primary&&e.secondary,d=[];if(e.primary||e.secondary){if(this.options.text)d.push("ui-button-text-icon"+(f?"s":e.primary?"-primary":"-secondary"));e.primary&&a.prepend("<span class='ui-button-icon-primary ui-icon "+e.primary+"'></span>");e.secondary&&a.append("<span class='ui-button-icon-secondary ui-icon "+e.secondary+"'></span>");if(!this.options.text){d.push(f?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||a.attr("title",c)}}else d.push("ui-button-text-only");a.addClass(d.join(" "))}}});b.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(a,c){a==="disabled"&&this.buttons.button("option",a,c);b.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var a=this.element.css("direction")===
"ltr";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-left":"ui-corner-right").end().filter(":last").addClass(a?"ui-corner-right":"ui-corner-left").end().end()},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
b.Widget.prototype.destroy.call(this)}})})(jQuery);
;/*
 * jQuery UI Dialog 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function(c,l){var m={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},n={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},o=c.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};c.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,
position:{my:"center",at:"center",collision:"fit",using:function(a){var b=c(this).css(a).offset().top;b<0&&c(this).css("top",a.top-b)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var a=this,b=a.options,d=b.title||"&#160;",e=c.ui.dialog.getTitleId(a.element),g=(a.uiDialog=c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+
b.dialogClass).css({zIndex:b.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(i){if(b.closeOnEscape&&!i.isDefaultPrevented()&&i.keyCode&&i.keyCode===c.ui.keyCode.ESCAPE){a.close(i);i.preventDefault()}}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(i){a.moveToTop(false,i)});a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);var f=(a.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),
h=c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){h.addClass("ui-state-hover")},function(){h.removeClass("ui-state-hover")}).focus(function(){h.addClass("ui-state-focus")}).blur(function(){h.removeClass("ui-state-focus")}).click(function(i){a.close(i);return false}).appendTo(f);(a.uiDialogTitlebarCloseText=c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);c("<span></span>").addClass("ui-dialog-title").attr("id",
e).html(d).prependTo(f);if(c.isFunction(b.beforeclose)&&!c.isFunction(b.beforeClose))b.beforeClose=b.beforeclose;f.find("*").add(f).disableSelection();b.draggable&&c.fn.draggable&&a._makeDraggable();b.resizable&&c.fn.resizable&&a._makeResizable();a._createButtons(b.buttons);a._isOpen=false;c.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;a.overlay&&a.overlay.destroy();a.uiDialog.hide();a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
a.uiDialog.remove();a.originalTitle&&a.element.attr("title",a.originalTitle);return a},widget:function(){return this.uiDialog},close:function(a){var b=this,d,e;if(false!==b._trigger("beforeClose",a)){b.overlay&&b.overlay.destroy();b.uiDialog.unbind("keypress.ui-dialog");b._isOpen=false;if(b.options.hide)b.uiDialog.hide(b.options.hide,function(){b._trigger("close",a)});else{b.uiDialog.hide();b._trigger("close",a)}c.ui.dialog.overlay.resize();if(b.options.modal){d=0;c(".ui-dialog").each(function(){if(this!==
b.uiDialog[0]){e=c(this).css("z-index");isNaN(e)||(d=Math.max(d,e))}});c.ui.dialog.maxZ=d}return b}},isOpen:function(){return this._isOpen},moveToTop:function(a,b){var d=this,e=d.options;if(e.modal&&!a||!e.stack&&!e.modal)return d._trigger("focus",b);if(e.zIndex>c.ui.dialog.maxZ)c.ui.dialog.maxZ=e.zIndex;if(d.overlay){c.ui.dialog.maxZ+=1;d.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=c.ui.dialog.maxZ)}a={scrollTop:d.element.scrollTop(),scrollLeft:d.element.scrollLeft()};c.ui.dialog.maxZ+=1;
d.uiDialog.css("z-index",c.ui.dialog.maxZ);d.element.attr(a);d._trigger("focus",b);return d},open:function(){if(!this._isOpen){var a=this,b=a.options,d=a.uiDialog;a.overlay=b.modal?new c.ui.dialog.overlay(a):null;a._size();a._position(b.position);d.show(b.show);a.moveToTop(true);b.modal&&d.bind("keypress.ui-dialog",function(e){if(e.keyCode===c.ui.keyCode.TAB){var g=c(":tabbable",this),f=g.filter(":first");g=g.filter(":last");if(e.target===g[0]&&!e.shiftKey){f.focus(1);return false}else if(e.target===
f[0]&&e.shiftKey){g.focus(1);return false}}});c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();a._isOpen=true;a._trigger("open");return a}},_createButtons:function(a){var b=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);b.uiDialog.find(".ui-dialog-buttonpane").remove();typeof a==="object"&&a!==null&&c.each(a,
function(){return!(d=true)});if(d){c.each(a,function(f,h){h=c.isFunction(h)?{click:h,text:f}:h;var i=c('<button type="button"></button>').click(function(){h.click.apply(b.element[0],arguments)}).appendTo(g);c.each(h,function(j,k){if(j!=="click")j in o?i[j](k):i.attr(j,k)});c.fn.button&&i.button()});e.appendTo(b.uiDialog)}},_makeDraggable:function(){function a(f){return{position:f.position,offset:f.offset}}var b=this,d=b.options,e=c(document),g;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",
handle:".ui-dialog-titlebar",containment:"document",start:function(f,h){g=d.height==="auto"?"auto":c(this).height();c(this).height(c(this).height()).addClass("ui-dialog-dragging");b._trigger("dragStart",f,a(h))},drag:function(f,h){b._trigger("drag",f,a(h))},stop:function(f,h){d.position=[h.position.left-e.scrollLeft(),h.position.top-e.scrollTop()];c(this).removeClass("ui-dialog-dragging").height(g);b._trigger("dragStop",f,a(h));c.ui.dialog.overlay.resize()}})},_makeResizable:function(a){function b(f){return{originalPosition:f.originalPosition,
originalSize:f.originalSize,position:f.position,size:f.size}}a=a===l?this.options.resizable:a;var d=this,e=d.options,g=d.uiDialog.css("position");a=typeof a==="string"?a:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:a,start:function(f,h){c(this).addClass("ui-dialog-resizing");d._trigger("resizeStart",f,b(h))},resize:function(f,h){d._trigger("resize",
f,b(h))},stop:function(f,h){c(this).removeClass("ui-dialog-resizing");e.height=c(this).height();e.width=c(this).width();d._trigger("resizeStop",f,b(h));c.ui.dialog.overlay.resize()}}).css("position",g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(a){var b=[],d=[0,0],e;if(a){if(typeof a==="string"||typeof a==="object"&&"0"in a){b=a.split?a.split(" "):
[a[0],a[1]];if(b.length===1)b[1]=b[0];c.each(["left","top"],function(g,f){if(+b[g]===b[g]){d[g]=b[g];b[g]=f}});a={my:b.join(" "),at:b.join(" "),offset:d.join(" ")}}a=c.extend({},c.ui.dialog.prototype.options.position,a)}else a=c.ui.dialog.prototype.options.position;(e=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(c.extend({of:window},a));e||this.uiDialog.hide()},_setOptions:function(a){var b=this,d={},e=false;c.each(a,function(g,f){b._setOption(g,f);
if(g in m)e=true;if(g in n)d[g]=f});e&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",d)},_setOption:function(a,b){var d=this,e=d.uiDialog;switch(a){case "beforeclose":a="beforeClose";break;case "buttons":d._createButtons(b);break;case "closeText":d.uiDialogTitlebarCloseText.text(""+b);break;case "dialogClass":e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b);break;case "disabled":b?e.addClass("ui-dialog-disabled"):
e.removeClass("ui-dialog-disabled");break;case "draggable":var g=e.is(":data(draggable)");g&&!b&&e.draggable("destroy");!g&&b&&d._makeDraggable();break;case "position":d._position(b);break;case "resizable":(g=e.is(":data(resizable)"))&&!b&&e.resizable("destroy");g&&typeof b==="string"&&e.resizable("option","handles",b);!g&&b!==false&&d._makeResizable(b);break;case "title":c(".ui-dialog-title",d.uiDialogTitlebar).html(""+(b||"&#160;"));break}c.Widget.prototype._setOption.apply(d,arguments)},_size:function(){var a=
this.options,b,d,e=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(a.minWidth>a.width)a.width=a.minWidth;b=this.uiDialog.css({height:"auto",width:a.width}).height();d=Math.max(0,a.minHeight-b);if(a.height==="auto")if(c.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();a=this.element.css("height","auto").height();e||this.uiDialog.hide();this.element.height(Math.max(a,d))}else this.element.height(Math.max(a.height-
b,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}});c.extend(c.ui.dialog,{version:"1.8.16",uuid:0,maxZ:0,getTitleId:function(a){a=a.attr("id");if(!a){this.uuid+=1;a=this.uuid}return"ui-dialog-title-"+a},overlay:function(a){this.$el=c.ui.dialog.overlay.create(a)}});c.extend(c.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),
create:function(a){if(this.instances.length===0){setTimeout(function(){c.ui.dialog.overlay.instances.length&&c(document).bind(c.ui.dialog.overlay.events,function(d){if(c(d.target).zIndex()<c.ui.dialog.overlay.maxZ)return false})},1);c(document).bind("keydown.dialog-overlay",function(d){if(a.options.closeOnEscape&&!d.isDefaultPrevented()&&d.keyCode&&d.keyCode===c.ui.keyCode.ESCAPE){a.close(d);d.preventDefault()}});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var b=(this.oldInstances.pop()||
c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});c.fn.bgiframe&&b.bgiframe();this.instances.push(b);return b},destroy:function(a){var b=c.inArray(a,this.instances);b!=-1&&this.oldInstances.push(this.instances.splice(b,1)[0]);this.instances.length===0&&c([document,window]).unbind(".dialog-overlay");a.remove();var d=0;c.each(this.instances,function(){d=Math.max(d,this.css("z-index"))});this.maxZ=d},height:function(){var a,b;if(c.browser.msie&&
c.browser.version<7){a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);b=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return a<b?c(window).height()+"px":a+"px"}else return c(document).height()+"px"},width:function(){var a,b;if(c.browser.msie){a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);b=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return a<b?c(window).width()+"px":a+"px"}else return c(document).width()+
"px"},resize:function(){var a=c([]);c.each(c.ui.dialog.overlay.instances,function(){a=a.add(this)});a.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
;/*
 * jQuery UI Slider 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.slider",d.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var a=this,b=this.options,c=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f=b.values&&b.values.length||1,e=[];this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+
this.orientation+" ui-widget ui-widget-content ui-corner-all"+(b.disabled?" ui-slider-disabled ui-disabled":""));this.range=d([]);if(b.range){if(b.range===true){if(!b.values)b.values=[this._valueMin(),this._valueMin()];if(b.values.length&&b.values.length!==2)b.values=[b.values[0],b.values[0]]}this.range=d("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header3"+(b.range==="min"||b.range==="max"?" ui-slider-range-"+b.range:""))}for(var j=c.length;j<f;j+=1)e.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
this.handles=c.add(d(e.join("")).appendTo(a.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(g){g.preventDefault()}).hover(function(){b.disabled||d(this).addClass("ui-state-hover")},function(){d(this).removeClass("ui-state-hover")}).focus(function(){if(b.disabled)d(this).blur();else{d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");d(this).addClass("ui-state-focus")}}).blur(function(){d(this).removeClass("ui-state-focus")});this.handles.each(function(g){d(this).data("index.ui-slider-handle",
g)});this.handles.keydown(function(g){var k=true,l=d(this).data("index.ui-slider-handle"),i,h,m;if(!a.options.disabled){switch(g.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:k=false;if(!a._keySliding){a._keySliding=true;d(this).addClass("ui-state-active");i=a._start(g,l);if(i===false)return}break}m=a.options.step;i=a.options.values&&a.options.values.length?
(h=a.values(l)):(h=a.value());switch(g.keyCode){case d.ui.keyCode.HOME:h=a._valueMin();break;case d.ui.keyCode.END:h=a._valueMax();break;case d.ui.keyCode.PAGE_UP:h=a._trimAlignValue(i+(a._valueMax()-a._valueMin())/5);break;case d.ui.keyCode.PAGE_DOWN:h=a._trimAlignValue(i-(a._valueMax()-a._valueMin())/5);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(i===a._valueMax())return;h=a._trimAlignValue(i+m);break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(i===a._valueMin())return;h=a._trimAlignValue(i-
m);break}a._slide(g,l,h);return k}}).keyup(function(g){var k=d(this).data("index.ui-slider-handle");if(a._keySliding){a._keySliding=false;a._stop(g,k);a._change(g,k);d(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();
return this},_mouseCapture:function(a){var b=this.options,c,f,e,j,g;if(b.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c=this._normValueFromMouse({x:a.pageX,y:a.pageY});f=this._valueMax()-this._valueMin()+1;j=this;this.handles.each(function(k){var l=Math.abs(c-j.values(k));if(f>l){f=l;e=d(this);g=k}});if(b.range===true&&this.values(1)===b.min){g+=1;e=d(this.handles[g])}if(this._start(a,g)===false)return false;
this._mouseSliding=true;j._handleIndex=g;e.addClass("ui-state-active").focus();b=e.offset();this._clickOffset=!d(a.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:a.pageX-b.left-e.width()/2,top:a.pageY-b.top-e.height()/2-(parseInt(e.css("borderTopWidth"),10)||0)-(parseInt(e.css("borderBottomWidth"),10)||0)+(parseInt(e.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(a,g,c);return this._animateOff=true},_mouseStart:function(){return true},_mouseDrag:function(a){var b=
this._normValueFromMouse({x:a.pageX,y:a.pageY});this._slide(a,this._handleIndex,b);return false},_mouseStop:function(a){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(a,this._handleIndex);this._change(a,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b;if(this.orientation==="horizontal"){b=
this.elementSize.width;a=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{b=this.elementSize.height;a=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}b=a/b;if(b>1)b=1;if(b<0)b=0;if(this.orientation==="vertical")b=1-b;a=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+b*a)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(b);
c.values=this.values()}return this._trigger("start",a,c)},_slide:function(a,b,c){var f;if(this.options.values&&this.options.values.length){f=this.values(b?0:1);if(this.options.values.length===2&&this.options.range===true&&(b===0&&c>f||b===1&&c<f))c=f;if(c!==this.values(b)){f=this.values();f[b]=c;a=this._trigger("slide",a,{handle:this.handles[b],value:c,values:f});this.values(b?0:1);a!==false&&this.values(b,c,true)}}else if(c!==this.value()){a=this._trigger("slide",a,{handle:this.handles[b],value:c});
a!==false&&this.value(c)}},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(b);c.values=this.values()}this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(b);c.values=this.values()}this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=
this._trimAlignValue(a);this._refreshValue();this._change(null,0)}else return this._value()},values:function(a,b){var c,f,e;if(arguments.length>1){this.options.values[a]=this._trimAlignValue(b);this._refreshValue();this._change(null,a)}else if(arguments.length)if(d.isArray(arguments[0])){c=this.options.values;f=arguments[0];for(e=0;e<c.length;e+=1){c[e]=this._trimAlignValue(f[e]);this._change(null,e)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(a):
this.value();else return this._values()},_setOption:function(a,b){var c,f=0;if(d.isArray(this.options.values))f=this.options.values.length;d.Widget.prototype._setOption.apply(this,arguments);switch(a){case "disabled":if(b){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.propAttr("disabled",true);this.element.addClass("ui-disabled")}else{this.handles.propAttr("disabled",false);this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(c=0;c<f;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},_values:function(a){var b,c;if(arguments.length){b=this.options.values[a];
return b=this._trimAlignValue(b)}else{b=this.options.values.slice();for(c=0;c<b.length;c+=1)b[c]=this._trimAlignValue(b[c]);return b}},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b;a=a-c;if(Math.abs(c)*2>=b)a+=c>0?b:-b;return parseFloat(a.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var a=
this.options.range,b=this.options,c=this,f=!this._animateOff?b.animate:false,e,j={},g,k,l,i;if(this.options.values&&this.options.values.length)this.handles.each(function(h){e=(c.values(h)-c._valueMin())/(c._valueMax()-c._valueMin())*100;j[c.orientation==="horizontal"?"left":"bottom"]=e+"%";d(this).stop(1,1)[f?"animate":"css"](j,b.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(h===0)c.range.stop(1,1)[f?"animate":"css"]({left:e+"%"},b.animate);if(h===1)c.range[f?"animate":"css"]({width:e-
g+"%"},{queue:false,duration:b.animate})}else{if(h===0)c.range.stop(1,1)[f?"animate":"css"]({bottom:e+"%"},b.animate);if(h===1)c.range[f?"animate":"css"]({height:e-g+"%"},{queue:false,duration:b.animate})}g=e});else{k=this.value();l=this._valueMin();i=this._valueMax();e=i!==l?(k-l)/(i-l)*100:0;j[c.orientation==="horizontal"?"left":"bottom"]=e+"%";this.handle.stop(1,1)[f?"animate":"css"](j,b.animate);if(a==="min"&&this.orientation==="horizontal")this.range.stop(1,1)[f?"animate":"css"]({width:e+"%"},
b.animate);if(a==="max"&&this.orientation==="horizontal")this.range[f?"animate":"css"]({width:100-e+"%"},{queue:false,duration:b.animate});if(a==="min"&&this.orientation==="vertical")this.range.stop(1,1)[f?"animate":"css"]({height:e+"%"},b.animate);if(a==="max"&&this.orientation==="vertical")this.range[f?"animate":"css"]({height:100-e+"%"},{queue:false,duration:b.animate})}}});d.extend(d.ui.slider,{version:"1.8.16"})})(jQuery);
;/*
 * jQuery UI Tabs 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(d,p){function u(){return++v}function w(){return++x}var v=0,x=0;d.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(b,e){if(b=="selected")this.options.collapsible&&
e==this.options.selected||this.select(e);else{this.options[b]=e;this._tabify()}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+u()},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+w());return d.cookie.apply(null,[b].concat(d.makeArray(arguments)))},_ui:function(b,e){return{tab:b,panel:e,index:this.anchors.index(b)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=
d(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(b){function e(g,f){g.css("display","");!d.support.opacity&&f.opacity&&g[0].style.removeAttribute("filter")}var a=this,c=this.options,h=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=d(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return d("a",this)[0]});this.panels=d([]);this.anchors.each(function(g,f){var i=d(f).attr("href"),l=i.split("#")[0],q;if(l&&(l===location.toString().split("#")[0]||
(q=d("base")[0])&&l===q.href)){i=f.hash;f.href=i}if(h.test(i))a.panels=a.panels.add(a.element.find(a._sanitizeSelector(i)));else if(i&&i!=="#"){d.data(f,"href.tabs",i);d.data(f,"load.tabs",i.replace(/#.*$/,""));i=a._tabId(f);f.href="#"+i;f=a.element.find("#"+i);if(!f.length){f=d(c.panelTemplate).attr("id",i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g-1]||a.list);f.data("destroy.tabs",true)}a.panels=a.panels.add(f)}else c.disabled.push(g)});if(b){this.element.addClass("ui-tabs ui-widget  ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(c.selected===p){location.hash&&this.anchors.each(function(g,f){if(f.hash==location.hash){c.selected=g;return false}});if(typeof c.selected!=="number"&&c.cookie)c.selected=parseInt(a._cookie(),10);if(typeof c.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)c.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));c.selected=c.selected||(this.lis.length?0:-1)}else if(c.selected===null)c.selected=-1;c.selected=c.selected>=0&&this.anchors[c.selected]||c.selected<0?c.selected:0;c.disabled=d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"),function(g){return a.lis.index(g)}))).sort();d.inArray(c.selected,c.disabled)!=-1&&c.disabled.splice(d.inArray(c.selected,c.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(c.selected>=0&&this.anchors.length){a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active");a.element.queue("tabs",function(){a._trigger("show",null,a._ui(a.anchors[c.selected],a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash))[0]))});this.load(c.selected)}d(window).bind("unload",function(){a.lis.add(a.anchors).unbind(".tabs");a.lis=a.anchors=a.panels=null})}else c.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[c.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");c.cookie&&this._cookie(c.selected,c.cookie);b=0;for(var j;j=this.lis[b];b++)d(j)[d.inArray(b,c.disabled)!=-1&&!d(j).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");c.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(c.event!=="mouseover"){var k=function(g,f){f.is(":not(.ui-state-disabled)")&&f.addClass("ui-state-"+g)},n=function(g,f){f.removeClass("ui-state-"+
g)};this.lis.bind("mouseover.tabs",function(){k("hover",d(this))});this.lis.bind("mouseout.tabs",function(){n("hover",d(this))});this.anchors.bind("focus.tabs",function(){k("focus",d(this).closest("li"))});this.anchors.bind("blur.tabs",function(){n("focus",d(this).closest("li"))})}var m,o;if(c.fx)if(d.isArray(c.fx)){m=c.fx[0];o=c.fx[1]}else m=o=c.fx;var r=o?function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",
function(){e(f,o);a._trigger("show",null,a._ui(g,f[0]))})}:function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");a._trigger("show",null,a._ui(g,f[0]))},s=m?function(g,f){f.animate(m,m.duration||"normal",function(){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");e(f,m);a.element.dequeue("tabs")})}:function(g,f){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");a.element.dequeue("tabs")};
this.anchors.bind(c.event+".tabs",function(){var g=this,f=d(g).closest("li"),i=a.panels.filter(":not(.ui-tabs-hide)"),l=a.element.find(a._sanitizeSelector(g.hash));if(f.hasClass("ui-tabs-selected")&&!c.collapsible||f.hasClass("ui-state-disabled")||f.hasClass("ui-state-processing")||a.panels.filter(":animated").length||a._trigger("select",null,a._ui(this,l[0]))===false){this.blur();return false}c.selected=a.anchors.index(this);a.abort();if(c.collapsible)if(f.hasClass("ui-tabs-selected")){c.selected=
-1;c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){s(g,i)}).dequeue("tabs");this.blur();return false}else if(!i.length){c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this));this.blur();return false}c.cookie&&a._cookie(c.selected,c.cookie);if(l.length){i.length&&a.element.queue("tabs",function(){s(g,i)});a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
d.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(b){if(typeof b=="string")b=this.anchors.index(this.anchors.filter("[href$="+b+"]"));return b},destroy:function(){var b=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var e=
d.data(this,"href.tabs");if(e)this.href=e;var a=d(this).unbind(".tabs");d.each(["href","load","cache"],function(c,h){a.removeData(h+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){d.data(this,"destroy.tabs")?d(this).remove():d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});b.cookie&&this._cookie(null,b.cookie);return this},add:function(b,
e,a){if(a===p)a=this.anchors.length;var c=this,h=this.options;e=d(h.tabTemplate.replace(/#\{href\}/g,b).replace(/#\{label\}/g,e));b=!b.indexOf("#")?b.replace("#",""):this._tabId(d("a",e)[0]);e.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var j=c.element.find("#"+b);j.length||(j=d(h.panelTemplate).attr("id",b).data("destroy.tabs",true));j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(a>=this.lis.length){e.appendTo(this.list);j.appendTo(this.list[0].parentNode)}else{e.insertBefore(this.lis[a]);
j.insertBefore(this.panels[a])}h.disabled=d.map(h.disabled,function(k){return k>=a?++k:k});this._tabify();if(this.anchors.length==1){h.selected=0;e.addClass("ui-tabs-selected ui-state-active");j.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){c._trigger("show",null,c._ui(c.anchors[0],c.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[a],this.panels[a]));return this},remove:function(b){b=this._getIndex(b);var e=this.options,a=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();
if(a.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(b+(b+1<this.anchors.length?1:-1));e.disabled=d.map(d.grep(e.disabled,function(h){return h!=b}),function(h){return h>=b?--h:h});this._tabify();this._trigger("remove",null,this._ui(a.find("a")[0],c[0]));return this},enable:function(b){b=this._getIndex(b);var e=this.options;if(d.inArray(b,e.disabled)!=-1){this.lis.eq(b).removeClass("ui-state-disabled");e.disabled=d.grep(e.disabled,function(a){return a!=b});this._trigger("enable",null,
this._ui(this.anchors[b],this.panels[b]));return this}},disable:function(b){b=this._getIndex(b);var e=this.options;if(b!=e.selected){this.lis.eq(b).addClass("ui-state-disabled");e.disabled.push(b);e.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[b],this.panels[b]))}return this},select:function(b){b=this._getIndex(b);if(b==-1)if(this.options.collapsible&&this.options.selected!=-1)b=this.options.selected;else return this;this.anchors.eq(b).trigger(this.options.event+".tabs");return this},
load:function(b){b=this._getIndex(b);var e=this,a=this.options,c=this.anchors.eq(b)[0],h=d.data(c,"load.tabs");this.abort();if(!h||this.element.queue("tabs").length!==0&&d.data(c,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(b).addClass("ui-state-processing");if(a.spinner){var j=d("span",c);j.data("label.tabs",j.html()).html(a.spinner)}this.xhr=d.ajax(d.extend({},a.ajaxOptions,{url:h,success:function(k,n){e.element.find(e._sanitizeSelector(c.hash)).html(k);e._cleanup();a.cache&&d.data(c,
"cache.tabs",true);e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.success(k,n)}catch(m){}},error:function(k,n){e._cleanup();e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.error(k,n,b,c)}catch(m){}}}));e.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(b,e){this.anchors.eq(b).removeData("cache.tabs").data("load.tabs",e);return this},length:function(){return this.anchors.length}});d.extend(d.ui.tabs,{version:"1.8.16"});d.extend(d.ui.tabs.prototype,{rotation:null,rotate:function(b,e){var a=this,c=this.options,h=a._rotate||(a._rotate=function(j){clearTimeout(a.rotation);a.rotation=setTimeout(function(){var k=c.selected;a.select(++k<a.anchors.length?k:0)},b);j&&j.stopPropagation()});e=a._unrotate||(a._unrotate=!e?function(j){j.clientX&&
a.rotate(null)}:function(){t=c.selected;h()});if(b){this.element.bind("tabsshow",h);this.anchors.bind(c.event+".tabs",e);h()}else{clearTimeout(a.rotation);this.element.unbind("tabsshow",h);this.anchors.unbind(c.event+".tabs",e);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
;/*
 * jQuery UI Datepicker 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function(d,C){function M(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};d.extend(this._defaults,this.regional[""]);this.dpDiv=N(d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content-calendar ui-helper-clearfix ui-corner-all"></div>'))}function N(a){return a.bind("mouseout",
function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");b.length&&b.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");if(!(d.datepicker._isDisabledDatepicker(J.inline?a.parent()[0]:J.input[0])||!b.length)){b.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
b.addClass("ui-state-hover");b.hasClass("ui-datepicker-prev")&&b.addClass("ui-datepicker-prev-hover");b.hasClass("ui-datepicker-next")&&b.addClass("ui-datepicker-next-hover")}})}function H(a,b){d.extend(a,b);for(var c in b)if(b[c]==null||b[c]==C)a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:"1.8.16"}});var B=(new Date).getTime(),J;d.extend(M.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},
setDefaults:function(a){H(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null;for(var e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=f}}}e=a.nodeName.toLowerCase();f=e=="div"||e=="span";if(!a.id){this.uuid+=1;a.id="dp"+this.uuid}var i=this._newInst(d(a),f);i.settings=d.extend({},b||{},c||{});if(e=="input")this._connectDatepicker(a,i);else f&&this._inlineDatepicker(a,i)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,
"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:N(d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content-calendar ui-helper-clearfix"></div>'))}},_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);if(!c.hasClass(this.markerClassName)){this._attachments(c,b);c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",
function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});this._autoSize(b);d.data(a,"datepicker",b);b.settings.disabled&&this._disableDatepicker(a)}},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&b.append.remove();if(c){b.append=d('<span class="'+this._appendClass+'">'+c+"</span>");a[e?"before":"after"](b.append)}a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");if(c==
"focus"||c=="both")a.focus(this._showDatepicker);if(c=="button"||c=="both"){c=this._get(b,"buttonText");var f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(f==""?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0]?d.datepicker._hideDatepicker():
d.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var e=function(f){for(var h=0,i=0,g=0;g<f.length;g++)if(f[g].length>h){h=f[g].length;i=g}return i};b.setMonth(e(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(e(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,
b){var c=d(a);if(!c.hasClass(this.markerClassName)){c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});d.data(a,"datepicker",b);this._setDate(b,this._getDefaultDate(b),true);this._updateDatepicker(b);this._updateAlternate(b);b.settings.disabled&&this._disableDatepicker(a);b.dpDiv.css("display","block")}},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;if(!a){this.uuid+=
1;this._dialogInput=d('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);d("body").append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};d.data(this._dialogInput[0],"datepicker",a)}H(a.settings,e||{});b=b&&b.constructor==Date?this._formatDate(a,b):b;this._dialogInput.val(b);this._pos=f?f.length?f:[f.pageX,f.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/
2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);d.blockUI&&d.blockUI(this.dpDiv);d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=
d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");if(e=="input"){c.append.remove();c.trigger.remove();b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else if(e=="div"||e=="span")b.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=
a.nodeName.toLowerCase();if(e=="input"){a.disabled=false;c.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(e=="div"||e=="span"){b=b.children("."+this._inlineClass);b.children().removeClass("ui-state-disabled");b.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f})}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,
"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=true;c.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(e=="div"||e=="span"){b=b.children("."+this._inlineClass);b.children().addClass("ui-state-disabled");b.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=d.map(this._disabledInputs,function(f){return f==
a?null:f});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return true;return false},_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?d.extend({},d.datepicker._defaults):e?b=="all"?
d.extend({},e.settings):this._get(e,b):null;var f=b||{};if(typeof b=="string"){f={};f[b]=c}if(e){this._curInst==e&&this._hideDatepicker();var h=this._getDateDatepicker(a,true),i=this._getMinMaxDate(e,"min"),g=this._getMinMaxDate(e,"max");H(e.settings,f);if(i!==null&&f.dateFormat!==C&&f.minDate===C)e.settings.minDate=this._formatDate(e,i);if(g!==null&&f.dateFormat!==C&&f.maxDate===C)e.settings.maxDate=this._formatDate(e,g);this._attachments(d(a),e);this._autoSize(e);this._setDate(e,h);this._updateAlternate(e);
this._updateDatepicker(e)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){if(a=this._getInst(a)){this._setDate(a,b);this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,b){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,b);return a?this._getDate(a):null},_doKeyDown:function(a){var b=d.datepicker._getInst(a.target),c=true,e=b.dpDiv.is(".ui-datepicker-rtl");
b._keyEvent=true;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=false;break;case 13:c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv);c[0]&&d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]);if(a=d.datepicker._get(b,"onSelect")){c=d.datepicker._formatDate(b);a.apply(b.input?b.input[0]:null,[c,b])}else d.datepicker._hideDatepicker();return false;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,
a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)d.datepicker._clearDate(a.target);c=a.ctrlKey||a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)d.datepicker._gotoToday(a.target);c=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?+1:-1,"D");c=
a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?-1:+1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,
"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,+7,"D");c=a.ctrlKey||a.metaKey;break;default:c=false}else if(a.keyCode==36&&a.ctrlKey)d.datepicker._showDatepicker(this);else c=false;if(c){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,"constrainInput")){b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat"));var c=String.fromCharCode(a.charCode==C?a.keyCode:a.charCode);
return a.ctrlKey||a.metaKey||c<" "||!b||b.indexOf(c)>-1}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a))){d.datepicker._setDateFromField(a);d.datepicker._updateAlternate(a);d.datepicker._updateDatepicker(a)}}catch(b){d.datepicker.log(b)}return true},_showDatepicker:function(a){a=a.target||a;if(a.nodeName.toLowerCase()!="input")a=d("input",
a.parentNode)[0];if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);if(d.datepicker._curInst&&d.datepicker._curInst!=b){d.datepicker._datepickerShowing&&d.datepicker._triggerOnClose(d.datepicker._curInst);d.datepicker._curInst.dpDiv.stop(true,true)}var c=d.datepicker._get(b,"beforeShow");c=c?c.apply(a,[a,b]):{};if(c!==false){H(b.settings,c);b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);if(d.datepicker._inDialog)a.value=
"";if(!d.datepicker._pos){d.datepicker._pos=d.datepicker._findPos(a);d.datepicker._pos[1]+=a.offsetHeight}var e=false;d(a).parents().each(function(){e|=d(this).css("position")=="fixed";return!e});if(e&&d.browser.opera){d.datepicker._pos[0]-=document.documentElement.scrollLeft;d.datepicker._pos[1]-=document.documentElement.scrollTop}c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.empty();b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);
c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){c=d.datepicker._get(b,"showAnim");var f=d.datepicker._get(b,"duration"),h=function(){var i=b.dpDiv.find("iframe.ui-datepicker-cover");if(i.length){var g=d.datepicker._getBorders(b.dpDiv);i.css({left:-g[0],top:-g[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex(d(a).zIndex()+1);d.datepicker._datepickerShowing=
true;d.effects&&d.effects[c]?b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h):b.dpDiv[c||"show"](c?f:null,h);if(!c||!f)h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=b}}}},_updateDatepicker:function(a){this.maxRows=4;var b=d.datepicker._getBorders(a.dpDiv);J=a;a.dpDiv.empty().append(this._generateHTML(a));var c=a.dpDiv.find("iframe.ui-datepicker-cover");c.length&&c.css({left:-b[0],top:-b[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()});
a.dpDiv.find("."+this._dayOverClass+" a").mouseover();b=this._getNumberOfMonths(a);c=b[1];a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");c>1&&a.dpDiv.addClass("ui-datepicker-multi-"+c).css("width",17*c+"em");a.dpDiv[(b[0]!=1||b[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==d.datepicker._curInst&&d.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&
!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var e=a.yearshtml;setTimeout(function(){e===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);e=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(c){return{thin:1,medium:2,thick:3}[c]||c};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var e=a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),
h=a.input?a.input.outerWidth():0,i=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+d(document).scrollLeft(),j=document.documentElement.clientHeight+d(document).scrollTop();b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+i?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,b.top+f>j&&j>f?Math.abs(f+i):0);return b},_findPos:function(a){for(var b=
this._get(this._getInst(a),"isRTL");a&&(a.type=="hidden"||a.nodeType!=1||d.expr.filters.hidden(a));)a=a[b?"previousSibling":"nextSibling"];a=d(a).offset();return[a.left,a.top]},_triggerOnClose:function(a){var b=this._get(a,"onClose");if(b)b.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a])},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&&b!=d.data(a,"datepicker")))if(this._datepickerShowing){a=this._get(b,"showAnim");var c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b);
this._curInst=null};d.effects&&d.effects[a]?b.dpDiv.hide(a,d.datepicker._get(b,"showOptions"),c,e):b.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?"fadeOut":"hide"](a?c:null,e);a||e();d.datepicker._triggerOnClose(b);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(d.blockUI){d.unblockUI();d("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},
_checkExternalClick:function(a){if(d.datepicker._curInst){a=d(a.target);a[0].id!=d.datepicker._mainDivId&&a.parents("#"+d.datepicker._mainDivId).length==0&&!a.hasClass(d.datepicker.markerClassName)&&!a.hasClass(d.datepicker._triggerClass)&&d.datepicker._datepickerShowing&&!(d.datepicker._inDialog&&d.blockUI)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){a=d(a);var e=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):
0),c);this._updateDatepicker(e)}},_gotoToday:function(a){a=d(a);var b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay){b.selectedDay=b.currentDay;b.drawMonth=b.selectedMonth=b.currentMonth;b.drawYear=b.selectedYear=b.currentYear}else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},_selectMonthYear:function(a,b,c){a=d(a);var e=this._getInst(a[0]);e["selected"+(c=="M"?
"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_selectDay:function(a,b,c,e){var f=d(a);if(!(d(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0]))){f=this._getInst(f[0]);f.selectedDay=f.currentDay=d("a",e).html();f.selectedMonth=f.currentMonth=b;f.selectedYear=f.currentYear=c;this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){a=d(a);
this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){a=this._getInst(d(a)[0]);b=b!=null?b:this._formatDate(a);a.input&&a.input.val(b);this._updateAlternate(a);var c=this._get(a,"onSelect");if(c)c.apply(a.input?a.input[0]:null,[b,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);else{this._hideDatepicker();this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var b=this._get(a,"altField");
if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[a>0&&a<6,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?
b.toString():b+"";if(b=="")return null;var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;e=typeof e!="string"?e:(new Date).getFullYear()%100+parseInt(e,10);for(var f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,i=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,j=c=-1,l=-1,u=-1,k=false,o=function(p){(p=A+1<a.length&&a.charAt(A+1)==p)&&A++;return p},m=function(p){var D=
o(p);p=new RegExp("^\\d{1,"+(p=="@"?14:p=="!"?20:p=="y"&&D?4:p=="o"?3:2)+"}");p=b.substring(q).match(p);if(!p)throw"Missing number at position "+q;q+=p[0].length;return parseInt(p[0],10)},n=function(p,D,K){p=d.map(o(p)?K:D,function(w,x){return[[x,w]]}).sort(function(w,x){return-(w[1].length-x[1].length)});var E=-1;d.each(p,function(w,x){w=x[1];if(b.substr(q,w.length).toLowerCase()==w.toLowerCase()){E=x[0];q+=w.length;return false}});if(E!=-1)return E+1;else throw"Unknown name at position "+q;},s=
function(){if(b.charAt(q)!=a.charAt(A))throw"Unexpected literal at position "+q;q++},q=0,A=0;A<a.length;A++)if(k)if(a.charAt(A)=="'"&&!o("'"))k=false;else s();else switch(a.charAt(A)){case "d":l=m("d");break;case "D":n("D",f,h);break;case "o":u=m("o");break;case "m":j=m("m");break;case "M":j=n("M",i,g);break;case "y":c=m("y");break;case "@":var v=new Date(m("@"));c=v.getFullYear();j=v.getMonth()+1;l=v.getDate();break;case "!":v=new Date((m("!")-this._ticksTo1970)/1E4);c=v.getFullYear();j=v.getMonth()+
1;l=v.getDate();break;case "'":if(o("'"))s();else k=true;break;default:s()}if(q<b.length)throw"Extra/unparsed characters found in date: "+b.substring(q);if(c==-1)c=(new Date).getFullYear();else if(c<100)c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100);if(u>-1){j=1;l=u;do{e=this._getDaysInMonth(c,j-1);if(l<=e)break;j++;l-=e}while(1)}v=this._daylightSavingAdjust(new Date(c,j-1,l));if(v.getFullYear()!=c||v.getMonth()+1!=j||v.getDate()!=l)throw"Invalid date";return v},ATOM:"yy-mm-dd",
COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(a,b,c){if(!b)return"";var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort;c=(c?c.monthNames:
null)||this._defaults.monthNames;var i=function(o){(o=k+1<a.length&&a.charAt(k+1)==o)&&k++;return o},g=function(o,m,n){m=""+m;if(i(o))for(;m.length<n;)m="0"+m;return m},j=function(o,m,n,s){return i(o)?s[m]:n[m]},l="",u=false;if(b)for(var k=0;k<a.length;k++)if(u)if(a.charAt(k)=="'"&&!i("'"))u=false;else l+=a.charAt(k);else switch(a.charAt(k)){case "d":l+=g("d",b.getDate(),2);break;case "D":l+=j("D",b.getDay(),e,f);break;case "o":l+=g("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-
(new Date(b.getFullYear(),0,0)).getTime())/864E5),3);break;case "m":l+=g("m",b.getMonth()+1,2);break;case "M":l+=j("M",b.getMonth(),h,c);break;case "y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case "@":l+=b.getTime();break;case "!":l+=b.getTime()*1E4+this._ticksTo1970;break;case "'":if(i("'"))l+="'";else u=true;break;default:l+=a.charAt(k)}return l},_possibleChars:function(a){for(var b="",c=false,e=function(h){(h=f+1<a.length&&a.charAt(f+1)==h)&&f++;return h},f=
0;f<a.length;f++)if(c)if(a.charAt(f)=="'"&&!e("'"))c=false;else b+=a.charAt(f);else switch(a.charAt(f)){case "d":case "m":case "y":case "@":b+="0123456789";break;case "D":case "M":return null;case "'":if(e("'"))b+="'";else c=true;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return a.settings[b]!==C?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),e=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);
var i=this._getFormatConfig(a);try{f=this.parseDate(c,e,i)||h}catch(g){this.log(g);e=b?"":e}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=e?f.getDate():0;a.currentMonth=e?f.getMonth():0;a.currentYear=e?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var e=function(h){var i=new Date;
i.setDate(i.getDate()+h);return i},f=function(h){try{return d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),h,d.datepicker._getFormatConfig(a))}catch(i){}var g=(h.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,j=g.getFullYear(),l=g.getMonth();g=g.getDate();for(var u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,k=u.exec(h);k;){switch(k[2]||"d"){case "d":case "D":g+=parseInt(k[1],10);break;case "w":case "W":g+=parseInt(k[1],10)*7;break;case "m":case "M":l+=parseInt(k[1],10);g=
Math.min(g,d.datepicker._getDaysInMonth(j,l));break;case "y":case "Y":j+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break}k=u.exec(h)}return new Date(j,l,g)};if(b=(b=b==null||b===""?c:typeof b=="string"?f(b):typeof b=="number"?isNaN(b)?c:e(b):new Date(b.getTime()))&&b.toString()=="Invalid Date"?c:b){b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0)}return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>
12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var e=!b,f=a.selectedMonth,h=a.selectedYear;b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();if((f!=a.selectedMonth||h!=a.selectedYear)&&!c)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(e?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&
a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),i=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),j=this._get(a,"stepMonths"),l=i[0]!=1||i[1]!=1,u=this._daylightSavingAdjust(!a.currentDay?
new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");g=a.drawMonth-g;var m=a.drawYear;if(g<0){g+=12;m--}if(o){var n=this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth()-i[0]*i[1]+1,o.getDate()));for(n=k&&n<k?k:n;this._daylightSavingAdjust(new Date(m,g,1))>n;){g--;if(g<0){g=11;m--}}}a.drawMonth=g;a.drawYear=m;n=this._get(a,"prevText");n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(m,g-j,1)),this._getFormatConfig(a));
n=this._canAdjustMonth(a,-1,m,g)?'<a class="ui-datepicker-prev" onclick="DP_jQuery_'+B+".datepicker._adjustDate('#"+a.id+"', -"+j+", 'M');\" title=\""+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>";var s=this._get(a,"nextText");s=!h?s:this.formatDate(s,this._daylightSavingAdjust(new Date(m,
g+j,1)),this._getFormatConfig(a));f=this._canAdjustMonth(a,+1,m,g)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+B+".datepicker._adjustDate('#"+a.id+"', +"+j+", 'M');\" title=\""+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>";j=this._get(a,"currentText");s=this._get(a,"gotoCurrent")&&
a.currentDay?u:b;j=!h?j:this.formatDate(j,s,this._getFormatConfig(a));h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+B+'.datepicker._hideDatepicker();">'+this._get(a,"closeText")+"</button>":"";e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,s)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+
B+".datepicker._gotoToday('#"+a.id+"');\">"+j+"</button>":"")+(c?"":h)+"</div>":"";h=parseInt(this._get(a,"firstDay"),10);h=isNaN(h)?0:h;j=this._get(a,"showWeek");s=this._get(a,"dayNames");this._get(a,"dayNamesShort");var q=this._get(a,"dayNamesMin"),A=this._get(a,"monthNames"),v=this._get(a,"monthNamesShort"),p=this._get(a,"beforeShowDay"),D=this._get(a,"showOtherMonths"),K=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var E=this._getDefaultDate(a),w="",x=0;x<i[0];x++){var O=
"";this.maxRows=4;for(var G=0;G<i[1];G++){var P=this._daylightSavingAdjust(new Date(m,g,a.selectedDay)),t=" ui-corner-alls",y="";if(l){y+='<div class="ui-datepicker-group';if(i[1]>1)switch(G){case 0:y+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":"left");break;case i[1]-1:y+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:y+=" ui-datepicker-group-middle";t="";break}y+='">'}y+='<div class="ui-datepicker-header ui-widget-header2 ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&
x==0?c?f:n:"")+(/all|right/.test(t)&&x==0?c?n:f:"")+this._generateMonthYearHeader(a,g,m,k,o,x>0||G>0,A,v)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var z=j?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(t=0;t<7;t++){var r=(t+h)%7;z+="<th"+((t+h+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+s[r]+'">'+q[r]+"</span></th>"}y+=z+"</tr></thead><tbody>";z=this._getDaysInMonth(m,g);if(m==a.selectedYear&&g==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,
z);t=(this._getFirstDayOfMonth(m,g)-h+7)%7;z=Math.ceil((t+z)/7);this.maxRows=z=l?this.maxRows>z?this.maxRows:z:z;r=this._daylightSavingAdjust(new Date(m,g,1-t));for(var Q=0;Q<z;Q++){y+="<tr>";var R=!j?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(r)+"</td>";for(t=0;t<7;t++){var I=p?p.apply(a.input?a.input[0]:null,[r]):[true,""],F=r.getMonth()!=g,L=F&&!K||!I[0]||k&&r<k||o&&r>o;R+='<td class="'+((t+h+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(r.getTime()==
P.getTime()&&g==a.selectedMonth&&a._keyEvent||E.getTime()==r.getTime()&&E.getTime()==P.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!D?"":" "+I[1]+(r.getTime()==u.getTime()?" "+this._currentClass:"")+(r.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!F||D)&&I[2]?' title="'+I[2]+'"':"")+(L?"":' onclick="DP_jQuery_'+B+".datepicker._selectDay('#"+a.id+"',"+r.getMonth()+","+r.getFullYear()+', this);return false;"')+">"+(F&&!D?"&#xa0;":L?'<span class="ui-state-default">'+
r.getDate()+"</span>":'<a class="ui-state-default'+(r.getTime()==b.getTime()?" ui-state-highlight":"")+(r.getTime()==u.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+'" href="#">'+r.getDate()+"</a>")+"</td>";r.setDate(r.getDate()+1);r=this._daylightSavingAdjust(r)}y+=R+"</tr>"}g++;if(g>11){g=0;m++}y+="</tbody></table>"+(l?"</div>"+(i[0]>0&&G==i[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");O+=y}w+=O}w+=e+(d.browser.msie&&parseInt(d.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frame></iframe>':
"");a._keyEvent=false;return w},_generateMonthYearHeader:function(a,b,c,e,f,h,i,g){var j=this._get(a,"changeMonth"),l=this._get(a,"changeYear"),u=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',o="";if(h||!j)o+='<span class="ui-datepicker-month">'+i[b]+"</span>";else{i=e&&e.getFullYear()==c;var m=f&&f.getFullYear()==c;o+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+B+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" >";for(var n=0;n<12;n++)if((!i||n>=e.getMonth())&&
(!m||n<=f.getMonth()))o+='<option value="'+n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";o+="</select>"}u||(k+=o+(h||!(j&&l)?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(h||!l)k+='<span class="ui-datepicker-year">'+c+"</span>";else{g=this._get(a,"yearRange").split(":");var s=(new Date).getFullYear();i=function(q){q=q.match(/c[+-].*/)?c+parseInt(q.substring(1),10):q.match(/[+-].*/)?s+parseInt(q,10):parseInt(q,10);return isNaN(q)?s:q};b=i(g[0]);g=Math.max(b,i(g[1]||""));b=e?Math.max(b,
e.getFullYear()):b;g=f?Math.min(g,f.getFullYear()):g;for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+B+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" >";b<=g;b++)a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";a.yearshtml+="</select>";k+=a.yearshtml;a.yearshtml=null}}k+=this._get(a,"yearSuffix");if(u)k+=(h||!(j&&l)?"&#xa0;":"")+o;k+="</div>";return k},_adjustInstDate:function(a,b,c){var e=a.drawYear+(c=="Y"?b:0),f=a.drawMonth+
(c=="M"?b:0);b=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+(c=="D"?b:0);e=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,b)));a.selectedDay=e.getDate();a.drawMonth=a.selectedMonth=e.getMonth();a.drawYear=a.selectedYear=e.getFullYear();if(c=="M"||c=="Y")this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");b=c&&b<c?c:b;return b=a&&b>a?a:b},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");if(b)b.apply(a.input?
a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,e){var f=this._getNumberOfMonths(a);c=this._daylightSavingAdjust(new Date(c,
e+(b<0?b:f[0]*f[1]),1));b<0&&c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!a||b.getTime()<=a.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,
"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,e){if(!b){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}b=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(e,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=function(a){if(!this.length)return this;
if(!d.datepicker.initialized){d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);d.datepicker.initialized=true}var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));return this.each(function(){typeof a==
"string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new M;d.datepicker.initialized=false;d.datepicker.uuid=(new Date).getTime();d.datepicker.version="1.8.16";window["DP_jQuery_"+B]=d})(jQuery);
;/*
 * jQuery UI Progressbar 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function(b,d){b.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)},value:function(a){if(a===d)return this._value();this._setOption("value",a);return this},_setOption:function(a,c){if(a==="value"){this.options.value=c;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}b.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;if(typeof a!=="number")a=0;return Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var a=this.value(),c=this._percentage();if(this.oldValue!==a){this.oldValue=a;this._trigger("change")}this.valueDiv.toggle(a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(c.toFixed(0)+"%");this.element.attr("aria-valuenow",a)}});b.extend(b.ui.progressbar,{version:"1.8.16"})})(jQuery);
;/*
 * jQuery UI Effects 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(f,j){function m(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return n.transparent;return n[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return m(b)}function o(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function p(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function l(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=m(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var n={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},q=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
d){if(f.isFunction(b)){d=b;b=null}return this.queue(function(){var e=f(this),g=e.attr("style")||" ",h=p(o.call(this)),r,v=e.attr("class");f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});r=p(o.call(this));e.attr("class",v);e.animate(u(h,r),{queue:false,duration:a,easing:b,complete:function(){f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments);f.dequeue(this)}})})};
f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,a):f.effects.animateClass.apply(this,
[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.16",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,a){var b;switch(c[0]){case "top":b=
0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),
d=document.activeElement;c.wrap(b);if(c[0]===d||f.contains(c[0],d))f(d).focus();b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(e,g){a[g]=c.css(g);if(isNaN(parseInt(a[g],10)))a[g]="auto"});c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return b.css(a).show()},removeWrapper:function(c){var a,b=document.activeElement;
if(c.parent().is(".ui-effects-wrapper")){a=c.parent().replaceWith(c);if(c[0]===b||f.contains(c[0],b))f(b).focus();return a}return c},setTransition:function(c,a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});
return d.call(this,b)},_show:f.fn.show,show:function(c){if(l(c))return this._show.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(l(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(l(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,
arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),b=[];f.each(["em","px","%","pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/
2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,a,b,d,e){return d*((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,
d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,
a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==e)return b+d;if((a/=e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,
d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=
0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);if(a<1)return-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;
if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,a,b,d,e){return d-f.easing.easeOutBounce(c,e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,
a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;/*
 * jQuery UI Effects Blind 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.blind=function(c){return this.queue(function(){var a=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(a,c.options.mode||"hide"),d=c.options.direction||"vertical";b.effects.save(a,g);a.show();var e=b.effects.createWrapper(a).css({overflow:"hidden"}),h=d=="vertical"?"height":"width";d=d=="vertical"?e.height():e.width();f=="show"&&e.css(h,0);var i={};i[h]=f=="show"?d:0;e.animate(i,c.duration,c.options.easing,function(){f=="hide"&&a.hide();b.effects.restore(a,
g);b.effects.removeWrapper(a);c.callback&&c.callback.apply(a[0],arguments);a.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Bounce 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.bounce=function(b){return this.queue(function(){var a=e(this),l=["position","top","bottom","left","right"],h=e.effects.setMode(a,b.options.mode||"effect"),d=b.options.direction||"up",c=b.options.distance||20,m=b.options.times||5,i=b.duration||250;/show|hide/.test(h)&&l.push("opacity");e.effects.save(a,l);a.show();e.effects.createWrapper(a);var f=d=="up"||d=="down"?"top":"left";d=d=="up"||d=="left"?"pos":"neg";c=b.options.distance||(f=="top"?a.outerHeight({margin:true})/3:a.outerWidth({margin:true})/
3);if(h=="show")a.css("opacity",0).css(f,d=="pos"?-c:c);if(h=="hide")c/=m*2;h!="hide"&&m--;if(h=="show"){var g={opacity:1};g[f]=(d=="pos"?"+=":"-=")+c;a.animate(g,i/2,b.options.easing);c/=2;m--}for(g=0;g<m;g++){var j={},k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing);c=h=="hide"?c*2:c/2}if(h=="hide"){g={opacity:0};g[f]=(d=="pos"?"-=":"+=")+c;a.animate(g,i/2,b.options.easing,function(){a.hide();e.effects.restore(a,l);e.effects.removeWrapper(a);
b.callback&&b.callback.apply(this,arguments)})}else{j={};k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing,function(){e.effects.restore(a,l);e.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments)})}a.queue("fx",function(){a.dequeue()});a.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Clip 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.clip=function(e){return this.queue(function(){var a=b(this),i=["position","top","bottom","left","right","height","width"],f=b.effects.setMode(a,e.options.mode||"hide"),c=e.options.direction||"vertical";b.effects.save(a,i);a.show();var d=b.effects.createWrapper(a).css({overflow:"hidden"});d=a[0].tagName=="IMG"?d:a;var g={size:c=="vertical"?"height":"width",position:c=="vertical"?"top":"left"};c=c=="vertical"?d.height():d.width();if(f=="show"){d.css(g.size,0);d.css(g.position,
c/2)}var h={};h[g.size]=f=="show"?c:0;h[g.position]=f=="show"?0:c/2;d.animate(h,{queue:false,duration:e.duration,easing:e.options.easing,complete:function(){f=="hide"&&a.hide();b.effects.restore(a,i);b.effects.removeWrapper(a);e.callback&&e.callback.apply(a[0],arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Drop 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.drop=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right","opacity"],e=c.effects.setMode(a,d.options.mode||"hide"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a);var f=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var g=d.options.distance||(f=="top"?a.outerHeight({margin:true})/2:a.outerWidth({margin:true})/2);if(e=="show")a.css("opacity",0).css(f,b=="pos"?-g:g);var i={opacity:e==
"show"?1:0};i[f]=(e=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+g;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){e=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Explode 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(j){j.effects.explode=function(a){return this.queue(function(){var c=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3,d=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3;a.options.mode=a.options.mode=="toggle"?j(this).is(":visible")?"hide":"show":a.options.mode;var b=j(this).show().css("visibility","hidden"),g=b.offset();g.top-=parseInt(b.css("marginTop"),10)||0;g.left-=parseInt(b.css("marginLeft"),10)||0;for(var h=b.outerWidth(true),i=b.outerHeight(true),e=0;e<c;e++)for(var f=
0;f<d;f++)b.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-f*(h/d),top:-e*(i/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:h/d,height:i/c,left:g.left+f*(h/d)+(a.options.mode=="show"?(f-Math.floor(d/2))*(h/d):0),top:g.top+e*(i/c)+(a.options.mode=="show"?(e-Math.floor(c/2))*(i/c):0),opacity:a.options.mode=="show"?0:1}).animate({left:g.left+f*(h/d)+(a.options.mode=="show"?0:(f-Math.floor(d/2))*(h/d)),top:g.top+
e*(i/c)+(a.options.mode=="show"?0:(e-Math.floor(c/2))*(i/c)),opacity:a.options.mode=="show"?1:0},a.duration||500);setTimeout(function(){a.options.mode=="show"?b.css({visibility:"visible"}):b.css({visibility:"visible"}).hide();a.callback&&a.callback.apply(b[0]);b.dequeue();j("div.ui-effects-explode").remove()},a.duration||500)})}})(jQuery);
;/*
 * jQuery UI Effects Fade 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.fade=function(a){return this.queue(function(){var c=b(this),d=b.effects.setMode(c,a.options.mode||"hide");c.animate({opacity:d},{queue:false,duration:a.duration,easing:a.options.easing,complete:function(){a.callback&&a.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Fold 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.fold=function(a){return this.queue(function(){var b=c(this),j=["position","top","bottom","left","right"],d=c.effects.setMode(b,a.options.mode||"hide"),g=a.options.size||15,h=!!a.options.horizFirst,k=a.duration?a.duration/2:c.fx.speeds._default/2;c.effects.save(b,j);b.show();var e=c.effects.createWrapper(b).css({overflow:"hidden"}),f=d=="show"!=h,l=f?["width","height"]:["height","width"];f=f?[e.width(),e.height()]:[e.height(),e.width()];var i=/([0-9]+)%/.exec(g);if(i)g=parseInt(i[1],
10)/100*f[d=="hide"?0:1];if(d=="show")e.css(h?{height:0,width:g}:{height:g,width:0});h={};i={};h[l[0]]=d=="show"?f[0]:g;i[l[1]]=d=="show"?f[1]:0;e.animate(h,k,a.options.easing).animate(i,k,a.options.easing,function(){d=="hide"&&b.hide();c.effects.restore(b,j);c.effects.removeWrapper(b);a.callback&&a.callback.apply(b[0],arguments);b.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Highlight 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.highlight=function(c){return this.queue(function(){var a=b(this),e=["backgroundImage","backgroundColor","opacity"],d=b.effects.setMode(a,c.options.mode||"show"),f={backgroundColor:a.css("backgroundColor")};if(d=="hide")f.opacity=0;b.effects.save(a,e);a.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(f,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){d=="hide"&&a.hide();b.effects.restore(a,e);d=="show"&&!b.support.opacity&&
this.style.removeAttribute("filter");c.callback&&c.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Pulsate 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.pulsate=function(a){return this.queue(function(){var b=d(this),c=d.effects.setMode(b,a.options.mode||"show");times=(a.options.times||5)*2-1;duration=a.duration?a.duration/2:d.fx.speeds._default/2;isVisible=b.is(":visible");animateTo=0;if(!isVisible){b.css("opacity",0).show();animateTo=1}if(c=="hide"&&isVisible||c=="show"&&!isVisible)times--;for(c=0;c<times;c++){b.animate({opacity:animateTo},duration,a.options.easing);animateTo=(animateTo+1)%2}b.animate({opacity:animateTo},duration,
a.options.easing,function(){animateTo==0&&b.hide();a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()}).dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Scale 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.puff=function(b){return this.queue(function(){var a=c(this),e=c.effects.setMode(a,b.options.mode||"hide"),g=parseInt(b.options.percent,10)||150,h=g/100,i={height:a.height(),width:a.width()};c.extend(b.options,{fade:true,mode:e,percent:e=="hide"?g:100,from:e=="hide"?i:{height:i.height*h,width:i.width*h}});a.effect("scale",b.options,b.duration,b.callback);a.dequeue()})};c.effects.scale=function(b){return this.queue(function(){var a=c(this),e=c.extend(true,{},b.options),g=c.effects.setMode(a,
b.options.mode||"effect"),h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:g=="hide"?0:100),i=b.options.direction||"both",f=b.options.origin;if(g!="effect"){e.origin=f||["middle","center"];e.restore=true}f={height:a.height(),width:a.width()};a.from=b.options.from||(g=="show"?{height:0,width:0}:f);h={y:i!="horizontal"?h/100:1,x:i!="vertical"?h/100:1};a.to={height:f.height*h.y,width:f.width*h.x};if(b.options.fade){if(g=="show"){a.from.opacity=0;a.to.opacity=1}if(g=="hide"){a.from.opacity=
1;a.to.opacity=0}}e.from=a.from;e.to=a.to;e.mode=g;a.effect("size",e,b.duration,b.callback);a.dequeue()})};c.effects.size=function(b){return this.queue(function(){var a=c(this),e=["position","top","bottom","left","right","width","height","overflow","opacity"],g=["position","top","bottom","left","right","overflow","opacity"],h=["width","height","overflow"],i=["fontSize"],f=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],k=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
p=c.effects.setMode(a,b.options.mode||"effect"),n=b.options.restore||false,m=b.options.scale||"both",l=b.options.origin,j={height:a.height(),width:a.width()};a.from=b.options.from||j;a.to=b.options.to||j;if(l){l=c.effects.getBaseline(l,j);a.from.top=(j.height-a.from.height)*l.y;a.from.left=(j.width-a.from.width)*l.x;a.to.top=(j.height-a.to.height)*l.y;a.to.left=(j.width-a.to.width)*l.x}var d={from:{y:a.from.height/j.height,x:a.from.width/j.width},to:{y:a.to.height/j.height,x:a.to.width/j.width}};
if(m=="box"||m=="both"){if(d.from.y!=d.to.y){e=e.concat(f);a.from=c.effects.setTransition(a,f,d.from.y,a.from);a.to=c.effects.setTransition(a,f,d.to.y,a.to)}if(d.from.x!=d.to.x){e=e.concat(k);a.from=c.effects.setTransition(a,k,d.from.x,a.from);a.to=c.effects.setTransition(a,k,d.to.x,a.to)}}if(m=="content"||m=="both")if(d.from.y!=d.to.y){e=e.concat(i);a.from=c.effects.setTransition(a,i,d.from.y,a.from);a.to=c.effects.setTransition(a,i,d.to.y,a.to)}c.effects.save(a,n?e:g);a.show();c.effects.createWrapper(a);
a.css("overflow","hidden").css(a.from);if(m=="content"||m=="both"){f=f.concat(["marginTop","marginBottom"]).concat(i);k=k.concat(["marginLeft","marginRight"]);h=e.concat(f).concat(k);a.find("*[width]").each(function(){child=c(this);n&&c.effects.save(child,h);var o={height:child.height(),width:child.width()};child.from={height:o.height*d.from.y,width:o.width*d.from.x};child.to={height:o.height*d.to.y,width:o.width*d.to.x};if(d.from.y!=d.to.y){child.from=c.effects.setTransition(child,f,d.from.y,child.from);
child.to=c.effects.setTransition(child,f,d.to.y,child.to)}if(d.from.x!=d.to.x){child.from=c.effects.setTransition(child,k,d.from.x,child.from);child.to=c.effects.setTransition(child,k,d.to.x,child.to)}child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){n&&c.effects.restore(child,h)})})}a.animate(a.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){a.to.opacity===0&&a.css("opacity",a.from.opacity);p=="hide"&&a.hide();c.effects.restore(a,
n?e:g);c.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Shake 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.shake=function(a){return this.queue(function(){var b=d(this),j=["position","top","bottom","left","right"];d.effects.setMode(b,a.options.mode||"effect");var c=a.options.direction||"left",e=a.options.distance||20,l=a.options.times||3,f=a.duration||a.options.duration||140;d.effects.save(b,j);b.show();d.effects.createWrapper(b);var g=c=="up"||c=="down"?"top":"left",h=c=="up"||c=="left"?"pos":"neg";c={};var i={},k={};c[g]=(h=="pos"?"-=":"+=")+e;i[g]=(h=="pos"?"+=":"-=")+e*2;k[g]=
(h=="pos"?"-=":"+=")+e*2;b.animate(c,f,a.options.easing);for(e=1;e<l;e++)b.animate(i,f,a.options.easing).animate(k,f,a.options.easing);b.animate(i,f,a.options.easing).animate(c,f/2,a.options.easing,function(){d.effects.restore(b,j);d.effects.removeWrapper(b);a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()});b.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Slide 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.slide=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right"],f=c.effects.setMode(a,d.options.mode||"show"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a).css({overflow:"hidden"});var g=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var e=d.options.distance||(g=="top"?a.outerHeight({margin:true}):a.outerWidth({margin:true}));if(f=="show")a.css(g,b=="pos"?isNaN(e)?"-"+e:-e:e);
var i={};i[g]=(f=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+e;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){f=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Transfer 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.transfer=function(a){return this.queue(function(){var b=e(this),c=e(a.options.to),d=c.offset();c={top:d.top,left:d.left,height:c.innerHeight(),width:c.innerWidth()};d=b.offset();var f=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({top:d.top,left:d.left,height:b.innerHeight(),width:b.innerWidth(),position:"absolute"}).animate(c,a.duration,a.options.easing,function(){f.remove();a.callback&&a.callback.apply(b[0],arguments);
b.dequeue()})})}})(jQuery);
;
//** Accordion Content script: By Dynamic Drive, at http://www.dynamicdrive.com
//** Created: Jan 7th, 08'. Last updated: June 7th, 2010 to v1.9

//Version 1.9: June 7th, 2010':
//**1) Ajax content support added, so a given header's content can be dynamically fetched from an external file and on demand.
//**2) Optimized script performance by caching header and content container references


var ddaccordion={
	ajaxloadingmsg: '<img src="loading2.gif" /><br />Loading Content...', //customize HTML to output while Ajax content is being fetched (if applicable)

	headergroup: {}, //object to store corresponding header group based on headerclass value
	contentgroup: {}, //object to store corresponding content group based on headerclass value

	preloadimages:function($images){
		$images.each(function(){
			var preloadimage=new Image()
			preloadimage.src=this.src
		})
	},

	expandone:function(headerclass, selected){ //PUBLIC function to expand a particular header
		this.toggleone(headerclass, selected, "expand")
	},

	collapseone:function(headerclass, selected){ //PUBLIC function to collapse a particular header
		this.toggleone(headerclass, selected, "collapse")
	},

	expandall:function(headerclass){ //PUBLIC function to expand all headers based on their shared CSS classname
		var $headers=this.headergroup[headerclass]
		this.contentgroup[headerclass].filter(':hidden').each(function(){
			$headers.eq(parseInt($(this).attr('contentindex'))).trigger("evt_accordion")
		})
	},

	collapseall:function(headerclass){ //PUBLIC function to collapse all headers based on their shared CSS classname
		var $headers=this.headergroup[headerclass]
		this.contentgroup[headerclass].filter(':visible').each(function(){
			$headers.eq(parseInt($(this).attr('contentindex'))).trigger("evt_accordion")
		})
	},

	toggleone:function(headerclass, selected, optstate){ //PUBLIC function to expand/ collapse a particular header
		var $targetHeader=this.headergroup[headerclass].eq(selected)
		var $subcontent=this.contentgroup[headerclass].eq(selected)
		if (typeof optstate=="undefined" || optstate=="expand" && $subcontent.is(":hidden") || optstate=="collapse" && $subcontent.is(":visible"))
			$targetHeader.trigger("evt_accordion")
	},

	ajaxloadcontent:function($targetHeader, $targetContent, config, callback){
		var ajaxinfo=$targetHeader.data('ajaxinfo')

		function handlecontent(content){ //nested function
			if (content){ //if ajax content has loaded
				ajaxinfo.cacheddata=content //remember ajax content 
				ajaxinfo.status="cached" //set ajax status to cached
				if ($targetContent.queue("fx").length==0){ //if this content isn't currently expanding or collapsing
					$targetContent.hide().html(content) //hide loading message, then set sub content's HTML to ajax content
					ajaxinfo.status="complete" //set ajax status to complete
					callback() //execute callback function- expand this sub content
				}
			}
			if (ajaxinfo.status!="complete"){
				setTimeout(function(){handlecontent(ajaxinfo.cacheddata)}, 100) //call handlecontent() again until ajax content has loaded (ajaxinfo.cacheddata contains data)
			}
		} //end nested function

		if (ajaxinfo.status=="none"){ //ajax data hasn't been fetched yet
			$targetContent.html(this.ajaxloadingmsg)
			$targetContent.slideDown(config.animatespeed)
			ajaxinfo.status="loading" //set ajax status to "loading"
			$.ajax({
				url: ajaxinfo.url, //path to external menu file
				error:function(ajaxrequest){
					handlecontent('Error fetching content. Server Response: '+ajaxrequest.responseText)
				},
				success:function(content){
					content=(content=="")? " " : content //if returned content is empty, set it to "space" is content no longer returns false/empty (hasn't loaded yet)
					handlecontent(content)
				}
			})
		}
		else if (ajaxinfo.status=="loading")
			handlecontent(ajaxinfo.cacheddata)
	},

	expandit:function($targetHeader, $targetContent, config, useractivated, directclick, skipanimation){
		var ajaxinfo=$targetHeader.data('ajaxinfo')
		if (ajaxinfo){ //if this content should be fetched via Ajax
			if (ajaxinfo.status=="none" || ajaxinfo.status=="loading")
				this.ajaxloadcontent($targetHeader, $targetContent, config, function(){ddaccordion.expandit($targetHeader, $targetContent, config, useractivated, directclick)})
			else if (ajaxinfo.status=="cached"){
				$targetContent.html(ajaxinfo.cacheddata)
				ajaxinfo.cacheddata=null
				ajaxinfo.status="complete"
			}
		}
		this.transformHeader($targetHeader, config, "expand")
		$targetContent.slideDown(skipanimation? 0 : config.animatespeed, function(){
			config.onopenclose($targetHeader.get(0), parseInt($targetHeader.attr('headerindex')), $targetContent.css('display'), useractivated)
			if (config.postreveal=="gotourl" && directclick){ //if revealtype is "Go to Header URL upon click", and this is a direct click on the header
				var targetLink=($targetHeader.is("a"))? $targetHeader.get(0) : $targetHeader.find('a:eq(0)').get(0)
				if (targetLink) //if this header is a link
					setTimeout(function(){location=targetLink.href}, 200) //ignore link target, as window.open(targetLink, targetLink.target) doesn't work in FF if popup blocker enabled
			}
		})
	},

	collapseit:function($targetHeader, $targetContent, config, isuseractivated){
		this.transformHeader($targetHeader, config, "collapse")
		$targetContent.slideUp(config.animatespeed, function(){config.onopenclose($targetHeader.get(0), parseInt($targetHeader.attr('headerindex')), $targetContent.css('display'), isuseractivated)})
	},

	transformHeader:function($targetHeader, config, state){
		$targetHeader.addClass((state=="expand")? config.cssclass.expand : config.cssclass.collapse) //alternate btw "expand" and "collapse" CSS classes
		.removeClass((state=="expand")? config.cssclass.collapse : config.cssclass.expand)
		if (config.htmlsetting.location=='src'){ //Change header image (assuming header is an image)?
			$targetHeader=($targetHeader.is("img"))? $targetHeader : $targetHeader.find('img').eq(0) //Set target to either header itself, or first image within header
			$targetHeader.attr('src', (state=="expand")? config.htmlsetting.expand : config.htmlsetting.collapse) //change header image
		}
		else if (config.htmlsetting.location=="prefix") //if change "prefix" HTML, locate dynamically added ".accordprefix" span tag and change it
			$targetHeader.find('.accordprefix').html((state=="expand")? config.htmlsetting.expand : config.htmlsetting.collapse)
		else if (config.htmlsetting.location=="suffix")
			$targetHeader.find('.accordsuffix').html((state=="expand")? config.htmlsetting.expand : config.htmlsetting.collapse)
	},

	urlparamselect:function(headerclass){
		var result=window.location.search.match(new RegExp(headerclass+"=((\\d+)(,(\\d+))*)", "i")) //check for "?headerclass=2,3,4" in URL
		if (result!=null)
			result=RegExp.$1.split(',')
		return result //returns null, [index], or [index1,index2,etc], where index are the desired selected header indices
	},

	getCookie:function(Name){ 
		var re=new RegExp(Name+"=[^;]+", "i") //construct RE to search for target name/value pair
		if (document.cookie.match(re)) //if cookie found
			return document.cookie.match(re)[0].split("=")[1] //return its value
		return null
	},

	setCookie:function(name, value){
		document.cookie = name + "=" + value + "; path=/"
	},

	init:function(config){
	document.write('<style type="text/css">\n')
	document.write('.'+config.contentclass+'{display: none}\n') //generate CSS to hide contents
	document.write('a.hiddenajaxlink{display: none}\n') //CSS class to hide ajax link
	document.write('<\/style>')
	jQuery(document).ready(function($){
		ddaccordion.urlparamselect(config.headerclass)
		var persistedheaders=ddaccordion.getCookie(config.headerclass)
		ddaccordion.headergroup[config.headerclass]=$('.'+config.headerclass) //remember header group for this accordion
		ddaccordion.contentgroup[config.headerclass]=$('.'+config.contentclass) //remember content group for this accordion
		var $headers=ddaccordion.headergroup[config.headerclass]
		var $subcontents=ddaccordion.contentgroup[config.headerclass]
		config.cssclass={collapse: config.toggleclass[0], expand: config.toggleclass[1]} //store expand and contract CSS classes as object properties
		config.revealtype=config.revealtype || "click"
		config.revealtype=config.revealtype.replace(/mouseover/i, "mouseenter")
		if (config.revealtype=="clickgo"){
			config.postreveal="gotourl" //remember added action
			config.revealtype="click" //overwrite revealtype to "click" keyword
		}
		if (typeof config.togglehtml=="undefined")
			config.htmlsetting={location: "none"}
		else
			config.htmlsetting={location: config.togglehtml[0], collapse: config.togglehtml[1], expand: config.togglehtml[2]} //store HTML settings as object properties
		config.oninit=(typeof config.oninit=="undefined")? function(){} : config.oninit //attach custom "oninit" event handler
		config.onopenclose=(typeof config.onopenclose=="undefined")? function(){} : config.onopenclose //attach custom "onopenclose" event handler
		var lastexpanded={} //object to hold reference to last expanded header and content (jquery objects)
		var expandedindices=ddaccordion.urlparamselect(config.headerclass) || ((config.persiststate && persistedheaders!=null)? persistedheaders : config.defaultexpanded)
		if (typeof expandedindices=='string') //test for string value (exception is config.defaultexpanded, which is an array)
			expandedindices=expandedindices.replace(/c/ig, '').split(',') //transform string value to an array (ie: "c1,c2,c3" becomes [1,2,3]
		if (expandedindices.length==1 && expandedindices[0]=="-1") //check for expandedindices value of [-1], indicating persistence is on and no content expanded
			expandedindices=[]
		if (config["collapseprev"] && expandedindices.length>1) //only allow one content open?
			expandedindices=[expandedindices.pop()] //return last array element as an array (for sake of jQuery.inArray())
		if (config["onemustopen"] && expandedindices.length==0) //if at least one content should be open at all times and none are, open 1st header
			expandedindices=[0]
		$headers.each(function(index){ //loop through all headers
			var $header=$(this)
			if (/(prefix)|(suffix)/i.test(config.htmlsetting.location) && $header.html()!=""){ //add a SPAN element to header depending on user setting and if header is a container tag
				$('<span class="accordprefix"></span>').prependTo(this)
				$('<span class="accordsuffix"></span>').appendTo(this)
			}
			$header.attr('headerindex', index+'h') //store position of this header relative to its peers
			$subcontents.eq(index).attr('contentindex', index+'c') //store position of this content relative to its peers
			var $subcontent=$subcontents.eq(index)
			var $hiddenajaxlink=$subcontent.find('a.hiddenajaxlink:eq(0)') //see if this content should be loaded via ajax
			if ($hiddenajaxlink.length==1){
				$header.data('ajaxinfo', {url:$hiddenajaxlink.attr('href'), cacheddata:null, status:'none'}) //store info about this ajax content inside header
			}
			var needle=(typeof expandedindices[0]=="number")? index : index+'' //check for data type within expandedindices array- index should match that type
			if (jQuery.inArray(needle, expandedindices)!=-1){ //check for headers that should be expanded automatically (convert index to string first)
				ddaccordion.expandit($header, $subcontent, config, false, false, !config.animatedefault) //3rd last param sets 'isuseractivated' parameter, 2nd last sets isdirectclick, last sets skipanimation param
				lastexpanded={$header:$header, $content:$subcontent}
			}  //end check
			else{
				$subcontent.hide()
				config.onopenclose($header.get(0), parseInt($header.attr('headerindex')), $subcontent.css('display'), false) //Last Boolean value sets 'isuseractivated' parameter
				ddaccordion.transformHeader($header, config, "collapse")
			}
		})
		$headers.bind("evt_accordion", function(e, isdirectclick){ //assign CUSTOM event handler that expands/ contacts a header
				var $subcontent=$subcontents.eq(parseInt($(this).attr('headerindex'))) //get subcontent that should be expanded/collapsed
				if ($subcontent.css('display')=="none"){
					ddaccordion.expandit($(this), $subcontent, config, true, isdirectclick) //2nd last param sets 'isuseractivated' parameter
					if (config["collapseprev"] && lastexpanded.$header && $(this).get(0)!=lastexpanded.$header.get(0)){ //collapse previous content?
						ddaccordion.collapseit(lastexpanded.$header, lastexpanded.$content, config, true) //Last Boolean value sets 'isuseractivated' parameter
					}
					lastexpanded={$header:$(this), $content:$subcontent}
				}
				else if (!config["onemustopen"] || config["onemustopen"] && lastexpanded.$header && $(this).get(0)!=lastexpanded.$header.get(0)){
					ddaccordion.collapseit($(this), $subcontent, config, true) //Last Boolean value sets 'isuseractivated' parameter
				}
 		})
		$headers.bind(config.revealtype, function(){
			if (config.revealtype=="mouseenter"){
				clearTimeout(config.revealdelay)
				var headerindex=parseInt($(this).attr("headerindex"))
				config.revealdelay=setTimeout(function(){ddaccordion.expandone(config["headerclass"], headerindex)}, config.mouseoverdelay || 0)
			}
			else{
				$(this).trigger("evt_accordion", [true]) //last parameter indicates this is a direct click on the header
				return false //cancel default click behavior
			}
		})
		$headers.bind("mouseleave", function(){
			clearTimeout(config.revealdelay)
		})
		config.oninit($headers.get(), expandedindices)
		$(window).bind('unload', function(){ //clean up and persist on page unload
			$headers.unbind()
			var expandedindices=[]
			$subcontents.filter(':visible').each(function(index){ //get indices of expanded headers
				expandedindices.push($(this).attr('contentindex'))
			})
			if (config.persiststate==true && $headers.length>0){ //persist state?
				expandedindices=(expandedindices.length==0)? '-1c' : expandedindices //No contents expanded, indicate that with dummy '-1c' value?
				ddaccordion.setCookie(config.headerclass, expandedindices)
			}
		})
	})
	}
}

//preload any images defined inside ajaxloadingmsg variable
ddaccordion.preloadimages(jQuery(ddaccordion.ajaxloadingmsg).filter('img'))
/* Javascript plotting library for jQuery, v. 0.7.
 *
 * Released under the MIT license by IOLA, December 2007.
 *
 */
(function(b){b.color={};b.color.make=function(d,e,g,f){var c={};c.r=d||0;c.g=e||0;c.b=g||0;c.a=f!=null?f:1;c.add=function(h,j){for(var k=0;k<h.length;++k){c[h.charAt(k)]+=j}return c.normalize()};c.scale=function(h,j){for(var k=0;k<h.length;++k){c[h.charAt(k)]*=j}return c.normalize()};c.toString=function(){if(c.a>=1){return"rgb("+[c.r,c.g,c.b].join(",")+")"}else{return"rgba("+[c.r,c.g,c.b,c.a].join(",")+")"}};c.normalize=function(){function h(k,j,l){return j<k?k:(j>l?l:j)}c.r=h(0,parseInt(c.r),255);c.g=h(0,parseInt(c.g),255);c.b=h(0,parseInt(c.b),255);c.a=h(0,c.a,1);return c};c.clone=function(){return b.color.make(c.r,c.b,c.g,c.a)};return c.normalize()};b.color.extract=function(d,e){var c;do{c=d.css(e).toLowerCase();if(c!=""&&c!="transparent"){break}d=d.parent()}while(!b.nodeName(d.get(0),"body"));if(c=="rgba(0, 0, 0, 0)"){c="transparent"}return b.color.parse(c)};b.color.parse=function(c){var d,f=b.color.make;if(d=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c)){return f(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10))}if(d=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)){return f(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10),parseFloat(d[4]))}if(d=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c)){return f(parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55)}if(d=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)){return f(parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55,parseFloat(d[4]))}if(d=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c)){return f(parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16))}if(d=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c)){return f(parseInt(d[1]+d[1],16),parseInt(d[2]+d[2],16),parseInt(d[3]+d[3],16))}var e=b.trim(c).toLowerCase();if(e=="transparent"){return f(255,255,255,0)}else{d=a[e]||[0,0,0];return f(d[0],d[1],d[2])}};var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);(function(c){function b(av,ai,J,af){var Q=[],O={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:0.85},xaxis:{show:null,position:"bottom",mode:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null,twelveHourClock:false},yaxis:{autoscaleMargin:0.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:1,fill:false,fillColor:null,steps:false},bars:{show:false,lineWidth:1,barWidth:1,fill:true,fillColor:null,align:"left",horizontal:false},shadowSize:3},grid:{show:true,aboveData:false,color:"#c5c5c5",backgroundColor:null,borderColor:null,tickColor:null,labelMargin:5,axisMargin:8,borderWidth:1,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},hooks:{}},az=null,ad=null,y=null,H=null,A=null,p=[],aw=[],q={left:0,right:0,top:0,bottom:0},G=0,I=0,h=0,w=0,ak={processOptions:[],processRawData:[],processDatapoints:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},aq=this;aq.setData=aj;aq.setupGrid=t;aq.draw=W;aq.getPlaceholder=function(){return av};aq.getCanvas=function(){return az};aq.getPlotOffset=function(){return q};aq.width=function(){return h};aq.height=function(){return w};aq.offset=function(){var aB=y.offset();aB.left+=q.left;aB.top+=q.top;return aB};aq.getData=function(){return Q};aq.getAxes=function(){var aC={},aB;c.each(p.concat(aw),function(aD,aE){if(aE){aC[aE.direction+(aE.n!=1?aE.n:"")+"axis"]=aE}});return aC};aq.getXAxes=function(){return p};aq.getYAxes=function(){return aw};aq.c2p=C;aq.p2c=ar;aq.getOptions=function(){return O};aq.highlight=x;aq.unhighlight=T;aq.triggerRedrawOverlay=f;aq.pointOffset=function(aB){return{left:parseInt(p[aA(aB,"x")-1].p2c(+aB.x)+q.left),top:parseInt(aw[aA(aB,"y")-1].p2c(+aB.y)+q.top)}};aq.shutdown=ag;aq.resize=function(){B();g(az);g(ad)};aq.hooks=ak;F(aq);Z(J);X();aj(ai);t();W();ah();function an(aD,aB){aB=[aq].concat(aB);for(var aC=0;aC<aD.length;++aC){aD[aC].apply(this,aB)}}function F(){for(var aB=0;aB<af.length;++aB){var aC=af[aB];aC.init(aq);if(aC.options){c.extend(true,O,aC.options)}}}function Z(aC){var aB;c.extend(true,O,aC);if(O.xaxis.color==null){O.xaxis.color=O.grid.color}if(O.yaxis.color==null){O.yaxis.color=O.grid.color}if(O.xaxis.tickColor==null){O.xaxis.tickColor=O.grid.tickColor}if(O.yaxis.tickColor==null){O.yaxis.tickColor=O.grid.tickColor}if(O.grid.borderColor==null){O.grid.borderColor=O.grid.color}if(O.grid.tickColor==null){O.grid.tickColor=c.color.parse(O.grid.color).scale("a",0.22).toString()}for(aB=0;aB<Math.max(1,O.xaxes.length);++aB){O.xaxes[aB]=c.extend(true,{},O.xaxis,O.xaxes[aB])}for(aB=0;aB<Math.max(1,O.yaxes.length);++aB){O.yaxes[aB]=c.extend(true,{},O.yaxis,O.yaxes[aB])}if(O.xaxis.noTicks&&O.xaxis.ticks==null){O.xaxis.ticks=O.xaxis.noTicks}if(O.yaxis.noTicks&&O.yaxis.ticks==null){O.yaxis.ticks=O.yaxis.noTicks}if(O.x2axis){O.xaxes[1]=c.extend(true,{},O.xaxis,O.x2axis);O.xaxes[1].position="top"}if(O.y2axis){O.yaxes[1]=c.extend(true,{},O.yaxis,O.y2axis);O.yaxes[1].position="right"}if(O.grid.coloredAreas){O.grid.markings=O.grid.coloredAreas}if(O.grid.coloredAreasColor){O.grid.markingsColor=O.grid.coloredAreasColor}if(O.lines){c.extend(true,O.series.lines,O.lines)}if(O.points){c.extend(true,O.series.points,O.points)}if(O.bars){c.extend(true,O.series.bars,O.bars)}if(O.shadowSize!=null){O.series.shadowSize=O.shadowSize}for(aB=0;aB<O.xaxes.length;++aB){V(p,aB+1).options=O.xaxes[aB]}for(aB=0;aB<O.yaxes.length;++aB){V(aw,aB+1).options=O.yaxes[aB]}for(var aD in ak){if(O.hooks[aD]&&O.hooks[aD].length){ak[aD]=ak[aD].concat(O.hooks[aD])}}an(ak.processOptions,[O])}function aj(aB){Q=Y(aB);ax();z()}function Y(aE){var aC=[];for(var aB=0;aB<aE.length;++aB){var aD=c.extend(true,{},O.series);if(aE[aB].data!=null){aD.data=aE[aB].data;delete aE[aB].data;c.extend(true,aD,aE[aB]);aE[aB].data=aD.data}else{aD.data=aE[aB]}aC.push(aD)}return aC}function aA(aC,aD){var aB=aC[aD+"axis"];if(typeof aB=="object"){aB=aB.n}if(typeof aB!="number"){aB=1}return aB}function m(){return c.grep(p.concat(aw),function(aB){return aB})}function C(aE){var aC={},aB,aD;for(aB=0;aB<p.length;++aB){aD=p[aB];if(aD&&aD.used){aC["x"+aD.n]=aD.c2p(aE.left)}}for(aB=0;aB<aw.length;++aB){aD=aw[aB];if(aD&&aD.used){aC["y"+aD.n]=aD.c2p(aE.top)}}if(aC.x1!==undefined){aC.x=aC.x1}if(aC.y1!==undefined){aC.y=aC.y1}return aC}function ar(aF){var aD={},aC,aE,aB;for(aC=0;aC<p.length;++aC){aE=p[aC];if(aE&&aE.used){aB="x"+aE.n;if(aF[aB]==null&&aE.n==1){aB="x"}if(aF[aB]!=null){aD.left=aE.p2c(aF[aB]);break}}}for(aC=0;aC<aw.length;++aC){aE=aw[aC];if(aE&&aE.used){aB="y"+aE.n;if(aF[aB]==null&&aE.n==1){aB="y"}if(aF[aB]!=null){aD.top=aE.p2c(aF[aB]);break}}}return aD}function V(aC,aB){if(!aC[aB-1]){aC[aB-1]={n:aB,direction:aC==p?"x":"y",options:c.extend(true,{},aC==p?O.xaxis:O.yaxis)}}return aC[aB-1]}function ax(){var aG;var aM=Q.length,aB=[],aE=[];for(aG=0;aG<Q.length;++aG){var aJ=Q[aG].color;if(aJ!=null){--aM;if(typeof aJ=="number"){aE.push(aJ)}else{aB.push(c.color.parse(Q[aG].color))}}}for(aG=0;aG<aE.length;++aG){aM=Math.max(aM,aE[aG]+1)}var aC=[],aF=0;aG=0;while(aC.length<aM){var aI;if(O.colors.length==aG){aI=c.color.make(100,100,100)}else{aI=c.color.parse(O.colors[aG])}var aD=aF%2==1?-1:1;aI.scale("rgb",1+aD*Math.ceil(aF/2)*0.2);aC.push(aI);++aG;if(aG>=O.colors.length){aG=0;++aF}}var aH=0,aN;for(aG=0;aG<Q.length;++aG){aN=Q[aG];if(aN.color==null){aN.color=aC[aH].toString();++aH}else{if(typeof aN.color=="number"){aN.color=aC[aN.color].toString()}}if(aN.lines.show==null){var aL,aK=true;for(aL in aN){if(aN[aL]&&aN[aL].show){aK=false;break}}if(aK){aN.lines.show=true}}aN.xaxis=V(p,aA(aN,"x"));aN.yaxis=V(aw,aA(aN,"y"))}}function z(){var aO=Number.POSITIVE_INFINITY,aI=Number.NEGATIVE_INFINITY,aB=Number.MAX_VALUE,aU,aS,aR,aN,aD,aJ,aT,aP,aH,aG,aC,a0,aX,aL;function aF(a3,a2,a1){if(a2<a3.datamin&&a2!=-aB){a3.datamin=a2}if(a1>a3.datamax&&a1!=aB){a3.datamax=a1}}c.each(m(),function(a1,a2){a2.datamin=aO;a2.datamax=aI;a2.used=false});for(aU=0;aU<Q.length;++aU){aJ=Q[aU];aJ.datapoints={points:[]};an(ak.processRawData,[aJ,aJ.data,aJ.datapoints])}for(aU=0;aU<Q.length;++aU){aJ=Q[aU];var aZ=aJ.data,aW=aJ.datapoints.format;if(!aW){aW=[];aW.push({x:true,number:true,required:true});aW.push({y:true,number:true,required:true});if(aJ.bars.show||(aJ.lines.show&&aJ.lines.fill)){aW.push({y:true,number:true,required:false,defaultValue:0});if(aJ.bars.horizontal){delete aW[aW.length-1].y;aW[aW.length-1].x=true}}aJ.datapoints.format=aW}if(aJ.datapoints.pointsize!=null){continue}aJ.datapoints.pointsize=aW.length;aP=aJ.datapoints.pointsize;aT=aJ.datapoints.points;insertSteps=aJ.lines.show&&aJ.lines.steps;aJ.xaxis.used=aJ.yaxis.used=true;for(aS=aR=0;aS<aZ.length;++aS,aR+=aP){aL=aZ[aS];var aE=aL==null;if(!aE){for(aN=0;aN<aP;++aN){a0=aL[aN];aX=aW[aN];if(aX){if(aX.number&&a0!=null){a0=+a0;if(isNaN(a0)){a0=null}else{if(a0==Infinity){a0=aB}else{if(a0==-Infinity){a0=-aB}}}}if(a0==null){if(aX.required){aE=true}if(aX.defaultValue!=null){a0=aX.defaultValue}}}aT[aR+aN]=a0}}if(aE){for(aN=0;aN<aP;++aN){a0=aT[aR+aN];if(a0!=null){aX=aW[aN];if(aX.x){aF(aJ.xaxis,a0,a0)}if(aX.y){aF(aJ.yaxis,a0,a0)}}aT[aR+aN]=null}}else{if(insertSteps&&aR>0&&aT[aR-aP]!=null&&aT[aR-aP]!=aT[aR]&&aT[aR-aP+1]!=aT[aR+1]){for(aN=0;aN<aP;++aN){aT[aR+aP+aN]=aT[aR+aN]}aT[aR+1]=aT[aR-aP+1];aR+=aP}}}}for(aU=0;aU<Q.length;++aU){aJ=Q[aU];an(ak.processDatapoints,[aJ,aJ.datapoints])}for(aU=0;aU<Q.length;++aU){aJ=Q[aU];aT=aJ.datapoints.points,aP=aJ.datapoints.pointsize;var aK=aO,aQ=aO,aM=aI,aV=aI;for(aS=0;aS<aT.length;aS+=aP){if(aT[aS]==null){continue}for(aN=0;aN<aP;++aN){a0=aT[aS+aN];aX=aW[aN];if(!aX||a0==aB||a0==-aB){continue}if(aX.x){if(a0<aK){aK=a0}if(a0>aM){aM=a0}}if(aX.y){if(a0<aQ){aQ=a0}if(a0>aV){aV=a0}}}}if(aJ.bars.show){var aY=aJ.bars.align=="left"?0:-aJ.bars.barWidth/2;if(aJ.bars.horizontal){aQ+=aY;aV+=aY+aJ.bars.barWidth}else{aK+=aY;aM+=aY+aJ.bars.barWidth}}aF(aJ.xaxis,aK,aM);aF(aJ.yaxis,aQ,aV)}c.each(m(),function(a1,a2){if(a2.datamin==aO){a2.datamin=null}if(a2.datamax==aI){a2.datamax=null}})}function j(aB,aC){var aD=document.createElement("canvas");aD.className=aC;aD.width=G;aD.height=I;if(!aB){c(aD).css({position:"absolute",left:0,top:0})}c(aD).appendTo(av);if(!aD.getContext){aD=window.G_vmlCanvasManager.initElement(aD)}aD.getContext("2d").save();return aD}function B(){G=av.width();I=av.height();if(G<=0||I<=0){throw"Invalid dimensions for plot, width = "+G+", height = "+I}}function g(aC){if(aC.width!=G){aC.width=G}if(aC.height!=I){aC.height=I}var aB=aC.getContext("2d");aB.restore();aB.save()}function X(){var aC,aB=av.children("canvas.base"),aD=av.children("canvas.overlay");if(aB.length==0||aD==0){av.html("");av.css({padding:0});if(av.css("position")=="static"){av.css("position","relative")}B();az=j(true,"base");ad=j(false,"overlay");aC=false}else{az=aB.get(0);ad=aD.get(0);aC=true}H=az.getContext("2d");A=ad.getContext("2d");y=c([ad,az]);if(aC){av.data("plot").shutdown();aq.resize();A.clearRect(0,0,G,I);y.unbind();av.children().not([az,ad]).remove()}av.data("plot",aq)}function ah(){if(O.grid.hoverable){y.mousemove(aa);y.mouseleave(l)}if(O.grid.clickable){y.click(R)}an(ak.bindEvents,[y])}function ag(){if(M){clearTimeout(M)}y.unbind("mousemove",aa);y.unbind("mouseleave",l);y.unbind("click",R);an(ak.shutdown,[y])}function r(aG){function aC(aH){return aH}var aF,aB,aD=aG.options.transform||aC,aE=aG.options.inverseTransform;if(aG.direction=="x"){aF=aG.scale=h/Math.abs(aD(aG.max)-aD(aG.min));aB=Math.min(aD(aG.max),aD(aG.min))}else{aF=aG.scale=w/Math.abs(aD(aG.max)-aD(aG.min));aF=-aF;aB=Math.max(aD(aG.max),aD(aG.min))}if(aD==aC){aG.p2c=function(aH){return(aH-aB)*aF}}else{aG.p2c=function(aH){return(aD(aH)-aB)*aF}}if(!aE){aG.c2p=function(aH){return aB+aH/aF}}else{aG.c2p=function(aH){return aE(aB+aH/aF)}}}function L(aD){var aB=aD.options,aF,aJ=aD.ticks||[],aI=[],aE,aK=aB.labelWidth,aG=aB.labelHeight,aC;function aH(aM,aL){return c('<div style="position:absolute;top:-10000px;'+aL+'font-size:smaller"><div class="'+aD.direction+"Axis "+aD.direction+aD.n+'Axis">'+aM.join("")+"</div></div>").appendTo(av)}if(aD.direction=="x"){if(aK==null){aK=Math.floor(G/(aJ.length>0?aJ.length:1))}if(aG==null){aI=[];for(aF=0;aF<aJ.length;++aF){aE=aJ[aF].label;if(aE){aI.push('<div class="tickLabel" style="float:left;width:'+aK+'px">'+aE+"</div>")}}if(aI.length>0){aI.push('<div style="clear:left"></div>');aC=aH(aI,"width:10000px;");aG=aC.height();aC.remove()}}}else{if(aK==null||aG==null){for(aF=0;aF<aJ.length;++aF){aE=aJ[aF].label;if(aE){aI.push('<div class="tickLabel">'+aE+"</div>")}}if(aI.length>0){aC=aH(aI,"");if(aK==null){aK=aC.children().width()}if(aG==null){aG=aC.find("div.tickLabel").height()}aC.remove()}}}if(aK==null){aK=0}if(aG==null){aG=0}aD.labelWidth=aK;aD.labelHeight=aG}function au(aD){var aC=aD.labelWidth,aL=aD.labelHeight,aH=aD.options.position,aF=aD.options.tickLength,aG=O.grid.axisMargin,aJ=O.grid.labelMargin,aK=aD.direction=="x"?p:aw,aE;var aB=c.grep(aK,function(aN){return aN&&aN.options.position==aH&&aN.reserveSpace});if(c.inArray(aD,aB)==aB.length-1){aG=0}if(aF==null){aF="full"}var aI=c.grep(aK,function(aN){return aN&&aN.reserveSpace});var aM=c.inArray(aD,aI)==0;if(!aM&&aF=="full"){aF=5}if(!isNaN(+aF)){aJ+=+aF}if(aD.direction=="x"){aL+=aJ;if(aH=="bottom"){q.bottom+=aL+aG;aD.box={top:I-q.bottom,height:aL}}else{aD.box={top:q.top+aG,height:aL};q.top+=aL+aG}}else{aC+=aJ;if(aH=="left"){aD.box={left:q.left+aG,width:aC};q.left+=aC+aG}else{q.right+=aC+aG;aD.box={left:G-q.right,width:aC}}}aD.position=aH;aD.tickLength=aF;aD.box.padding=aJ;aD.innermost=aM}function U(aB){if(aB.direction=="x"){aB.box.left=q.left;aB.box.width=h}else{aB.box.top=q.top;aB.box.height=w}}function t(){var aC,aE=m();c.each(aE,function(aF,aG){aG.show=aG.options.show;if(aG.show==null){aG.show=aG.used}aG.reserveSpace=aG.show||aG.options.reserveSpace;n(aG)});allocatedAxes=c.grep(aE,function(aF){return aF.reserveSpace});q.left=q.right=q.top=q.bottom=0;if(O.grid.show){c.each(allocatedAxes,function(aF,aG){S(aG);P(aG);ap(aG,aG.ticks);L(aG)});for(aC=allocatedAxes.length-1;aC>=0;--aC){au(allocatedAxes[aC])}var aD=O.grid.minBorderMargin;if(aD==null){aD=0;for(aC=0;aC<Q.length;++aC){aD=Math.max(aD,Q[aC].points.radius+Q[aC].points.lineWidth/2)}}for(var aB in q){q[aB]+=O.grid.borderWidth;q[aB]=Math.max(aD,q[aB])}}h=G-q.left-q.right;w=I-q.bottom-q.top;c.each(aE,function(aF,aG){r(aG)});if(O.grid.show){c.each(allocatedAxes,function(aF,aG){U(aG)});k()}o()}function n(aE){var aF=aE.options,aD=+(aF.min!=null?aF.min:aE.datamin),aB=+(aF.max!=null?aF.max:aE.datamax),aH=aB-aD;if(aH==0){var aC=aB==0?1:0.01;if(aF.min==null){aD-=aC}if(aF.max==null||aF.min!=null){aB+=aC}}else{var aG=aF.autoscaleMargin;if(aG!=null){if(aF.min==null){aD-=aH*aG;if(aD<0&&aE.datamin!=null&&aE.datamin>=0){aD=0}}if(aF.max==null){aB+=aH*aG;if(aB>0&&aE.datamax!=null&&aE.datamax<=0){aB=0}}}}aE.min=aD;aE.max=aB}function S(aG){var aM=aG.options;var aH;if(typeof aM.ticks=="number"&&aM.ticks>0){aH=aM.ticks}else{aH=0.3*Math.sqrt(aG.direction=="x"?G:I)}var aT=(aG.max-aG.min)/aH,aO,aB,aN,aR,aS,aQ,aI;if(aM.mode=="time"){var aJ={second:1000,minute:60*1000,hour:60*60*1000,day:24*60*60*1000,month:30*24*60*60*1000,year:365.2425*24*60*60*1000};var aK=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[0.25,"month"],[0.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]];var aC=0;if(aM.minTickSize!=null){if(typeof aM.tickSize=="number"){aC=aM.tickSize}else{aC=aM.minTickSize[0]*aJ[aM.minTickSize[1]]}}for(var aS=0;aS<aK.length-1;++aS){if(aT<(aK[aS][0]*aJ[aK[aS][1]]+aK[aS+1][0]*aJ[aK[aS+1][1]])/2&&aK[aS][0]*aJ[aK[aS][1]]>=aC){break}}aO=aK[aS][0];aN=aK[aS][1];if(aN=="year"){aQ=Math.pow(10,Math.floor(Math.log(aT/aJ.year)/Math.LN10));aI=(aT/aJ.year)/aQ;if(aI<1.5){aO=1}else{if(aI<3){aO=2}else{if(aI<7.5){aO=5}else{aO=10}}}aO*=aQ}aG.tickSize=aM.tickSize||[aO,aN];aB=function(aX){var a2=[],a0=aX.tickSize[0],a3=aX.tickSize[1],a1=new Date(aX.min);var aW=a0*aJ[a3];if(a3=="second"){a1.setUTCSeconds(a(a1.getUTCSeconds(),a0))}if(a3=="minute"){a1.setUTCMinutes(a(a1.getUTCMinutes(),a0))}if(a3=="hour"){a1.setUTCHours(a(a1.getUTCHours(),a0))}if(a3=="month"){a1.setUTCMonth(a(a1.getUTCMonth(),a0))}if(a3=="year"){a1.setUTCFullYear(a(a1.getUTCFullYear(),a0))}a1.setUTCMilliseconds(0);if(aW>=aJ.minute){a1.setUTCSeconds(0)}if(aW>=aJ.hour){a1.setUTCMinutes(0)}if(aW>=aJ.day){a1.setUTCHours(0)}if(aW>=aJ.day*4){a1.setUTCDate(1)}if(aW>=aJ.year){a1.setUTCMonth(0)}var a5=0,a4=Number.NaN,aY;do{aY=a4;a4=a1.getTime();a2.push(a4);if(a3=="month"){if(a0<1){a1.setUTCDate(1);var aV=a1.getTime();a1.setUTCMonth(a1.getUTCMonth()+1);var aZ=a1.getTime();a1.setTime(a4+a5*aJ.hour+(aZ-aV)*a0);a5=a1.getUTCHours();a1.setUTCHours(0)}else{a1.setUTCMonth(a1.getUTCMonth()+a0)}}else{if(a3=="year"){a1.setUTCFullYear(a1.getUTCFullYear()+a0)}else{a1.setTime(a4+aW)}}}while(a4<aX.max&&a4!=aY);return a2};aR=function(aV,aY){var a0=new Date(aV);if(aM.timeformat!=null){return c.plot.formatDate(a0,aM.timeformat,aM.monthNames)}var aW=aY.tickSize[0]*aJ[aY.tickSize[1]];var aX=aY.max-aY.min;var aZ=(aM.twelveHourClock)?" %p":"";if(aW<aJ.minute){fmt="%h:%M:%S"+aZ}else{if(aW<aJ.day){if(aX<2*aJ.day){fmt="%h:%M"+aZ}else{fmt="%b %d %h:%M"+aZ}}else{if(aW<aJ.month){fmt="%b %d"}else{if(aW<aJ.year){if(aX<aJ.year){fmt="%b"}else{fmt="%b %y"}}else{fmt="%y"}}}}return c.plot.formatDate(a0,fmt,aM.monthNames)}}else{var aU=aM.tickDecimals;var aP=-Math.floor(Math.log(aT)/Math.LN10);if(aU!=null&&aP>aU){aP=aU}aQ=Math.pow(10,-aP);aI=aT/aQ;if(aI<1.5){aO=1}else{if(aI<3){aO=2;if(aI>2.25&&(aU==null||aP+1<=aU)){aO=2.5;++aP}}else{if(aI<7.5){aO=5}else{aO=10}}}aO*=aQ;if(aM.minTickSize!=null&&aO<aM.minTickSize){aO=aM.minTickSize}aG.tickDecimals=Math.max(0,aU!=null?aU:aP);aG.tickSize=aM.tickSize||aO;aB=function(aX){var aZ=[];var a0=a(aX.min,aX.tickSize),aW=0,aV=Number.NaN,aY;do{aY=aV;aV=a0+aW*aX.tickSize;aZ.push(aV);++aW}while(aV<aX.max&&aV!=aY);return aZ};aR=function(aV,aW){return aV.toFixed(aW.tickDecimals)}}if(aM.alignTicksWithAxis!=null){var aF=(aG.direction=="x"?p:aw)[aM.alignTicksWithAxis-1];if(aF&&aF.used&&aF!=aG){var aL=aB(aG);if(aL.length>0){if(aM.min==null){aG.min=Math.min(aG.min,aL[0])}if(aM.max==null&&aL.length>1){aG.max=Math.max(aG.max,aL[aL.length-1])}}aB=function(aX){var aY=[],aV,aW;for(aW=0;aW<aF.ticks.length;++aW){aV=(aF.ticks[aW].v-aF.min)/(aF.max-aF.min);aV=aX.min+aV*(aX.max-aX.min);aY.push(aV)}return aY};if(aG.mode!="time"&&aM.tickDecimals==null){var aE=Math.max(0,-Math.floor(Math.log(aT)/Math.LN10)+1),aD=aB(aG);if(!(aD.length>1&&/\..*0$/.test((aD[1]-aD[0]).toFixed(aE)))){aG.tickDecimals=aE}}}}aG.tickGenerator=aB;if(c.isFunction(aM.tickFormatter)){aG.tickFormatter=function(aV,aW){return""+aM.tickFormatter(aV,aW)}}else{aG.tickFormatter=aR}}function P(aF){var aH=aF.options.ticks,aG=[];if(aH==null||(typeof aH=="number"&&aH>0)){aG=aF.tickGenerator(aF)}else{if(aH){if(c.isFunction(aH)){aG=aH({min:aF.min,max:aF.max})}else{aG=aH}}}var aE,aB;aF.ticks=[];for(aE=0;aE<aG.length;++aE){var aC=null;var aD=aG[aE];if(typeof aD=="object"){aB=+aD[0];if(aD.length>1){aC=aD[1]}}else{aB=+aD}if(aC==null){aC=aF.tickFormatter(aB,aF)}if(!isNaN(aB)){aF.ticks.push({v:aB,label:aC})}}}function ap(aB,aC){if(aB.options.autoscaleMargin&&aC.length>0){if(aB.options.min==null){aB.min=Math.min(aB.min,aC[0].v)}if(aB.options.max==null&&aC.length>1){aB.max=Math.max(aB.max,aC[aC.length-1].v)}}}function W(){H.clearRect(0,0,G,I);var aC=O.grid;if(aC.show&&aC.backgroundColor){N()}if(aC.show&&!aC.aboveData){ac()}for(var aB=0;aB<Q.length;++aB){an(ak.drawSeries,[H,Q[aB]]);d(Q[aB])}an(ak.draw,[H]);if(aC.show&&aC.aboveData){ac()}}function D(aB,aI){var aE,aH,aG,aD,aF=m();for(i=0;i<aF.length;++i){aE=aF[i];if(aE.direction==aI){aD=aI+aE.n+"axis";if(!aB[aD]&&aE.n==1){aD=aI+"axis"}if(aB[aD]){aH=aB[aD].from;aG=aB[aD].to;break}}}if(!aB[aD]){aE=aI=="x"?p[0]:aw[0];aH=aB[aI+"1"];aG=aB[aI+"2"]}if(aH!=null&&aG!=null&&aH>aG){var aC=aH;aH=aG;aG=aC}return{from:aH,to:aG,axis:aE}}function N(){H.save();H.translate(q.left,q.top);H.fillStyle=am(O.grid.backgroundColor,w,0,"rgba(255, 255, 255, 0)");H.fillRect(0,0,h,w);H.restore()}function ac(){var aF;H.save();H.translate(q.left,q.top);var aH=O.grid.markings;if(aH){if(c.isFunction(aH)){var aK=aq.getAxes();aK.xmin=aK.xaxis.min;aK.xmax=aK.xaxis.max;aK.ymin=aK.yaxis.min;aK.ymax=aK.yaxis.max;aH=aH(aK)}for(aF=0;aF<aH.length;++aF){var aD=aH[aF],aC=D(aD,"x"),aI=D(aD,"y");if(aC.from==null){aC.from=aC.axis.min}if(aC.to==null){aC.to=aC.axis.max}if(aI.from==null){aI.from=aI.axis.min}if(aI.to==null){aI.to=aI.axis.max}if(aC.to<aC.axis.min||aC.from>aC.axis.max||aI.to<aI.axis.min||aI.from>aI.axis.max){continue}aC.from=Math.max(aC.from,aC.axis.min);aC.to=Math.min(aC.to,aC.axis.max);aI.from=Math.max(aI.from,aI.axis.min);aI.to=Math.min(aI.to,aI.axis.max);if(aC.from==aC.to&&aI.from==aI.to){continue}aC.from=aC.axis.p2c(aC.from);aC.to=aC.axis.p2c(aC.to);aI.from=aI.axis.p2c(aI.from);aI.to=aI.axis.p2c(aI.to);if(aC.from==aC.to||aI.from==aI.to){H.beginPath();H.strokeStyle=aD.color||O.grid.markingsColor;H.lineWidth=aD.lineWidth||O.grid.markingsLineWidth;H.moveTo(aC.from,aI.from);H.lineTo(aC.to,aI.to);H.stroke()}else{H.fillStyle=aD.color||O.grid.markingsColor;H.fillRect(aC.from,aI.to,aC.to-aC.from,aI.from-aI.to)}}}var aK=m(),aM=O.grid.borderWidth;for(var aE=0;aE<aK.length;++aE){var aB=aK[aE],aG=aB.box,aQ=aB.tickLength,aN,aL,aP,aJ;if(!aB.show||aB.ticks.length==0){continue}H.strokeStyle=aB.options.tickColor||c.color.parse(aB.options.color).scale("a",0.22).toString();H.lineWidth=1;if(aB.direction=="x"){aN=0;if(aQ=="full"){aL=(aB.position=="top"?0:w)}else{aL=aG.top-q.top+(aB.position=="top"?aG.height:0)}}else{aL=0;if(aQ=="full"){aN=(aB.position=="left"?0:h)}else{aN=aG.left-q.left+(aB.position=="left"?aG.width:0)}}if(!aB.innermost){H.beginPath();aP=aJ=0;if(aB.direction=="x"){aP=h}else{aJ=w}if(H.lineWidth==1){aN=Math.floor(aN)+0.5;aL=Math.floor(aL)+0.5}H.moveTo(aN,aL);H.lineTo(aN+aP,aL+aJ);H.stroke()}H.beginPath();for(aF=0;aF<aB.ticks.length;++aF){var aO=aB.ticks[aF].v;aP=aJ=0;if(aO<aB.min||aO>aB.max||(aQ=="full"&&aM>0&&(aO==aB.min||aO==aB.max))){continue}if(aB.direction=="x"){aN=aB.p2c(aO);aJ=aQ=="full"?-w:aQ;if(aB.position=="top"){aJ=-aJ}}else{aL=aB.p2c(aO);aP=aQ=="full"?-h:aQ;if(aB.position=="left"){aP=-aP}}if(H.lineWidth==1){if(aB.direction=="x"){aN=Math.floor(aN)+0.5}else{aL=Math.floor(aL)+0.5}}H.moveTo(aN,aL);H.lineTo(aN+aP,aL+aJ)}H.stroke()}if(aM){H.lineWidth=aM;H.strokeStyle=O.grid.borderColor;H.strokeRect(-aM/2,-aM/2,h+aM,w+aM)}H.restore()}function k(){av.find(".tickLabels").remove();var aG=['<div class="tickLabels" style="font-size:smaller">'];var aJ=m();for(var aD=0;aD<aJ.length;++aD){var aC=aJ[aD],aF=aC.box;if(!aC.show){continue}aG.push('<div class="'+aC.direction+"Axis "+aC.direction+aC.n+'Axis" style="color:'+aC.options.color+'">');for(var aE=0;aE<aC.ticks.length;++aE){var aH=aC.ticks[aE];if(!aH.label||aH.v<aC.min||aH.v>aC.max){continue}var aK={},aI;if(aC.direction=="x"){aI="center";aK.left=Math.round(q.left+aC.p2c(aH.v)-aC.labelWidth/2);if(aC.position=="bottom"){aK.top=aF.top+aF.padding}else{aK.bottom=I-(aF.top+aF.height-aF.padding)}}else{aK.top=Math.round(q.top+aC.p2c(aH.v)-aC.labelHeight/2);if(aC.position=="left"){aK.right=G-(aF.left+aF.width-aF.padding);aI="right"}else{aK.left=aF.left+aF.padding;aI="left"}}aK.width=aC.labelWidth;var aB=["position:absolute","text-align:"+aI];for(var aL in aK){aB.push(aL+":"+aK[aL]+"px")}aG.push('<div class="tickLabel" style="'+aB.join(";")+'">'+aH.label+"</div>")}aG.push("</div>")}aG.push("</div>");av.append(aG.join(""))}function d(aB){if(aB.lines.show){at(aB)}if(aB.bars.show){e(aB)}if(aB.points.show){ao(aB)}}function at(aE){function aD(aP,aQ,aI,aU,aT){var aV=aP.points,aJ=aP.pointsize,aN=null,aM=null;H.beginPath();for(var aO=aJ;aO<aV.length;aO+=aJ){var aL=aV[aO-aJ],aS=aV[aO-aJ+1],aK=aV[aO],aR=aV[aO+1];if(aL==null||aK==null){continue}if(aS<=aR&&aS<aT.min){if(aR<aT.min){continue}aL=(aT.min-aS)/(aR-aS)*(aK-aL)+aL;aS=aT.min}else{if(aR<=aS&&aR<aT.min){if(aS<aT.min){continue}aK=(aT.min-aS)/(aR-aS)*(aK-aL)+aL;aR=aT.min}}if(aS>=aR&&aS>aT.max){if(aR>aT.max){continue}aL=(aT.max-aS)/(aR-aS)*(aK-aL)+aL;aS=aT.max}else{if(aR>=aS&&aR>aT.max){if(aS>aT.max){continue}aK=(aT.max-aS)/(aR-aS)*(aK-aL)+aL;aR=aT.max}}if(aL<=aK&&aL<aU.min){if(aK<aU.min){continue}aS=(aU.min-aL)/(aK-aL)*(aR-aS)+aS;aL=aU.min}else{if(aK<=aL&&aK<aU.min){if(aL<aU.min){continue}aR=(aU.min-aL)/(aK-aL)*(aR-aS)+aS;aK=aU.min}}if(aL>=aK&&aL>aU.max){if(aK>aU.max){continue}aS=(aU.max-aL)/(aK-aL)*(aR-aS)+aS;aL=aU.max}else{if(aK>=aL&&aK>aU.max){if(aL>aU.max){continue}aR=(aU.max-aL)/(aK-aL)*(aR-aS)+aS;aK=aU.max}}if(aL!=aN||aS!=aM){H.moveTo(aU.p2c(aL)+aQ,aT.p2c(aS)+aI)}aN=aK;aM=aR;H.lineTo(aU.p2c(aK)+aQ,aT.p2c(aR)+aI)}H.stroke()}function aF(aI,aQ,aP){var aW=aI.points,aV=aI.pointsize,aN=Math.min(Math.max(0,aP.min),aP.max),aX=0,aU,aT=false,aM=1,aL=0,aR=0;while(true){if(aV>0&&aX>aW.length+aV){break}aX+=aV;var aZ=aW[aX-aV],aK=aW[aX-aV+aM],aY=aW[aX],aJ=aW[aX+aM];if(aT){if(aV>0&&aZ!=null&&aY==null){aR=aX;aV=-aV;aM=2;continue}if(aV<0&&aX==aL+aV){H.fill();aT=false;aV=-aV;aM=1;aX=aL=aR+aV;continue}}if(aZ==null||aY==null){continue}if(aZ<=aY&&aZ<aQ.min){if(aY<aQ.min){continue}aK=(aQ.min-aZ)/(aY-aZ)*(aJ-aK)+aK;aZ=aQ.min}else{if(aY<=aZ&&aY<aQ.min){if(aZ<aQ.min){continue}aJ=(aQ.min-aZ)/(aY-aZ)*(aJ-aK)+aK;aY=aQ.min}}if(aZ>=aY&&aZ>aQ.max){if(aY>aQ.max){continue}aK=(aQ.max-aZ)/(aY-aZ)*(aJ-aK)+aK;aZ=aQ.max}else{if(aY>=aZ&&aY>aQ.max){if(aZ>aQ.max){continue}aJ=(aQ.max-aZ)/(aY-aZ)*(aJ-aK)+aK;aY=aQ.max}}if(!aT){H.beginPath();H.moveTo(aQ.p2c(aZ),aP.p2c(aN));aT=true}if(aK>=aP.max&&aJ>=aP.max){H.lineTo(aQ.p2c(aZ),aP.p2c(aP.max));H.lineTo(aQ.p2c(aY),aP.p2c(aP.max));continue}else{if(aK<=aP.min&&aJ<=aP.min){H.lineTo(aQ.p2c(aZ),aP.p2c(aP.min));H.lineTo(aQ.p2c(aY),aP.p2c(aP.min));continue}}var aO=aZ,aS=aY;if(aK<=aJ&&aK<aP.min&&aJ>=aP.min){aZ=(aP.min-aK)/(aJ-aK)*(aY-aZ)+aZ;aK=aP.min}else{if(aJ<=aK&&aJ<aP.min&&aK>=aP.min){aY=(aP.min-aK)/(aJ-aK)*(aY-aZ)+aZ;aJ=aP.min}}if(aK>=aJ&&aK>aP.max&&aJ<=aP.max){aZ=(aP.max-aK)/(aJ-aK)*(aY-aZ)+aZ;aK=aP.max}else{if(aJ>=aK&&aJ>aP.max&&aK<=aP.max){aY=(aP.max-aK)/(aJ-aK)*(aY-aZ)+aZ;aJ=aP.max}}if(aZ!=aO){H.lineTo(aQ.p2c(aO),aP.p2c(aK))}H.lineTo(aQ.p2c(aZ),aP.p2c(aK));H.lineTo(aQ.p2c(aY),aP.p2c(aJ));if(aY!=aS){H.lineTo(aQ.p2c(aY),aP.p2c(aJ));H.lineTo(aQ.p2c(aS),aP.p2c(aJ))}}}H.save();H.translate(q.left,q.top);H.lineJoin="round";var aG=aE.lines.lineWidth,aB=aE.shadowSize;if(aG>0&&aB>0){H.lineWidth=aB;H.strokeStyle="rgba(0,0,0,0.1)";var aH=Math.PI/18;aD(aE.datapoints,Math.sin(aH)*(aG/2+aB/2),Math.cos(aH)*(aG/2+aB/2),aE.xaxis,aE.yaxis);H.lineWidth=aB/2;aD(aE.datapoints,Math.sin(aH)*(aG/2+aB/4),Math.cos(aH)*(aG/2+aB/4),aE.xaxis,aE.yaxis)}H.lineWidth=aG;H.strokeStyle=aE.color;var aC=ae(aE.lines,aE.color,0,w);if(aC){H.fillStyle=aC;aF(aE.datapoints,aE.xaxis,aE.yaxis)}if(aG>0){aD(aE.datapoints,0,0,aE.xaxis,aE.yaxis)}H.restore()}function ao(aE){function aH(aN,aM,aU,aK,aS,aT,aQ,aJ){var aR=aN.points,aI=aN.pointsize;for(var aL=0;aL<aR.length;aL+=aI){var aP=aR[aL],aO=aR[aL+1];if(aP==null||aP<aT.min||aP>aT.max||aO<aQ.min||aO>aQ.max){continue}H.beginPath();aP=aT.p2c(aP);aO=aQ.p2c(aO)+aK;if(aJ=="circle"){H.arc(aP,aO,aM,0,aS?Math.PI:Math.PI*2,false)}else{aJ(H,aP,aO,aM,aS)}H.closePath();if(aU){H.fillStyle=aU;H.fill()}H.stroke()}}H.save();H.translate(q.left,q.top);var aG=aE.points.lineWidth,aC=aE.shadowSize,aB=aE.points.radius,aF=aE.points.symbol;if(aG>0&&aC>0){var aD=aC/2;H.lineWidth=aD;H.strokeStyle="rgba(0,0,0,0.1)";aH(aE.datapoints,aB,null,aD+aD/2,true,aE.xaxis,aE.yaxis,aF);H.strokeStyle="rgba(0,0,0,0.2)";aH(aE.datapoints,aB,null,aD/2,true,aE.xaxis,aE.yaxis,aF)}H.lineWidth=aG;H.strokeStyle=aE.color;aH(aE.datapoints,aB,ae(aE.points,aE.color),0,false,aE.xaxis,aE.yaxis,aF);H.restore()}function E(aN,aM,aV,aI,aQ,aF,aD,aL,aK,aU,aR,aC){var aE,aT,aJ,aP,aG,aB,aO,aH,aS;if(aR){aH=aB=aO=true;aG=false;aE=aV;aT=aN;aP=aM+aI;aJ=aM+aQ;if(aT<aE){aS=aT;aT=aE;aE=aS;aG=true;aB=false}}else{aG=aB=aO=true;aH=false;aE=aN+aI;aT=aN+aQ;aJ=aV;aP=aM;if(aP<aJ){aS=aP;aP=aJ;aJ=aS;aH=true;aO=false}}if(aT<aL.min||aE>aL.max||aP<aK.min||aJ>aK.max){return}if(aE<aL.min){aE=aL.min;aG=false}if(aT>aL.max){aT=aL.max;aB=false}if(aJ<aK.min){aJ=aK.min;aH=false}if(aP>aK.max){aP=aK.max;aO=false}aE=aL.p2c(aE);aJ=aK.p2c(aJ);aT=aL.p2c(aT);aP=aK.p2c(aP);if(aD){aU.beginPath();aU.moveTo(aE,aJ);aU.lineTo(aE,aP);aU.lineTo(aT,aP);aU.lineTo(aT,aJ);aU.fillStyle=aD(aJ,aP);aU.fill()}if(aC>0&&(aG||aB||aO||aH)){aU.beginPath();aU.moveTo(aE,aJ+aF);if(aG){aU.lineTo(aE,aP+aF)}else{aU.moveTo(aE,aP+aF)}if(aO){aU.lineTo(aT,aP+aF)}else{aU.moveTo(aT,aP+aF)}if(aB){aU.lineTo(aT,aJ+aF)}else{aU.moveTo(aT,aJ+aF)}if(aH){aU.lineTo(aE,aJ+aF)}else{aU.moveTo(aE,aJ+aF)}aU.stroke()}}function e(aD){function aC(aJ,aI,aL,aG,aK,aN,aM){var aO=aJ.points,aF=aJ.pointsize;for(var aH=0;aH<aO.length;aH+=aF){if(aO[aH]==null){continue}E(aO[aH],aO[aH+1],aO[aH+2],aI,aL,aG,aK,aN,aM,H,aD.bars.horizontal,aD.bars.lineWidth)}}H.save();H.translate(q.left,q.top);H.lineWidth=aD.bars.lineWidth;H.strokeStyle=aD.color;var aB=aD.bars.align=="left"?0:-aD.bars.barWidth/2;var aE=aD.bars.fill?function(aF,aG){return ae(aD.bars,aD.color,aF,aG)}:null;aC(aD.datapoints,aB,aB+aD.bars.barWidth,0,aE,aD.xaxis,aD.yaxis);H.restore()}function ae(aD,aB,aC,aF){var aE=aD.fill;if(!aE){return null}if(aD.fillColor){return am(aD.fillColor,aC,aF,aB)}var aG=c.color.parse(aB);aG.a=typeof aE=="number"?aE:0.4;aG.normalize();return aG.toString()}function o(){av.find(".legend").remove();if(!O.legend.show){return}var aH=[],aF=false,aN=O.legend.labelFormatter,aM,aJ;for(var aE=0;aE<Q.length;++aE){aM=Q[aE];aJ=aM.label;if(!aJ){continue}if(aE%O.legend.noColumns==0){if(aF){aH.push("</tr>")}aH.push("<tr>");aF=true}if(aN){aJ=aN(aJ,aM)}aH.push('<td class="legendColorBox"><div style="border:1px solid '+O.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+aM.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+aJ+"</td>")}if(aF){aH.push("</tr>")}if(aH.length==0){return}var aL='<table style="font-size:smaller;color:'+O.grid.color+'">'+aH.join("")+"</table>";if(O.legend.container!=null){c(O.legend.container).html(aL)}else{var aI="",aC=O.legend.position,aD=O.legend.margin;if(aD[0]==null){aD=[aD,aD]}if(aC.charAt(0)=="n"){aI+="top:"+(aD[1]+q.top)+"px;"}else{if(aC.charAt(0)=="s"){aI+="bottom:"+(aD[1]+q.bottom)+"px;"}}if(aC.charAt(1)=="e"){aI+="right:"+(aD[0]+q.right)+"px;"}else{if(aC.charAt(1)=="w"){aI+="left:"+(aD[0]+q.left)+"px;"}}var aK=c('<div class="legend">'+aL.replace('style="','style="position:absolute;'+aI+";")+"</div>").appendTo(av);if(O.legend.backgroundOpacity!=0){var aG=O.legend.backgroundColor;if(aG==null){aG=O.grid.backgroundColor;if(aG&&typeof aG=="string"){aG=c.color.parse(aG)}else{aG=c.color.extract(aK,"background-color")}aG.a=1;aG=aG.toString()}var aB=aK.children();c('<div style="position:absolute;width:'+aB.width()+"px;height:"+aB.height()+"px;"+aI+"background-color:"+aG+';"> </div>').prependTo(aK).css("opacity",O.legend.backgroundOpacity)}}}var ab=[],M=null;function K(aI,aG,aD){var aO=O.grid.mouseActiveRadius,a0=aO*aO+1,aY=null,aR=false,aW,aU;for(aW=Q.length-1;aW>=0;--aW){if(!aD(Q[aW])){continue}var aP=Q[aW],aH=aP.xaxis,aF=aP.yaxis,aV=aP.datapoints.points,aT=aP.datapoints.pointsize,aQ=aH.c2p(aI),aN=aF.c2p(aG),aC=aO/aH.scale,aB=aO/aF.scale;if(aH.options.inverseTransform){aC=Number.MAX_VALUE}if(aF.options.inverseTransform){aB=Number.MAX_VALUE}if(aP.lines.show||aP.points.show){for(aU=0;aU<aV.length;aU+=aT){var aK=aV[aU],aJ=aV[aU+1];if(aK==null){continue}if(aK-aQ>aC||aK-aQ<-aC||aJ-aN>aB||aJ-aN<-aB){continue}var aM=Math.abs(aH.p2c(aK)-aI),aL=Math.abs(aF.p2c(aJ)-aG),aS=aM*aM+aL*aL;if(aS<a0){a0=aS;aY=[aW,aU/aT]}}}if(aP.bars.show&&!aY){var aE=aP.bars.align=="left"?0:-aP.bars.barWidth/2,aX=aE+aP.bars.barWidth;for(aU=0;aU<aV.length;aU+=aT){var aK=aV[aU],aJ=aV[aU+1],aZ=aV[aU+2];if(aK==null){continue}if(Q[aW].bars.horizontal?(aQ<=Math.max(aZ,aK)&&aQ>=Math.min(aZ,aK)&&aN>=aJ+aE&&aN<=aJ+aX):(aQ>=aK+aE&&aQ<=aK+aX&&aN>=Math.min(aZ,aJ)&&aN<=Math.max(aZ,aJ))){aY=[aW,aU/aT]}}}}if(aY){aW=aY[0];aU=aY[1];aT=Q[aW].datapoints.pointsize;return{datapoint:Q[aW].datapoints.points.slice(aU*aT,(aU+1)*aT),dataIndex:aU,series:Q[aW],seriesIndex:aW}}return null}function aa(aB){if(O.grid.hoverable){u("plothover",aB,function(aC){return aC.hoverable!=false})}}function l(aB){if(O.grid.hoverable){u("plothover",aB,function(aC){return false})}}function R(aB){u("plotclick",aB,function(aC){return aC.clickable!=false})}function u(aC,aB,aD){var aE=y.offset(),aH=aB.pageX-aE.left-q.left,aF=aB.pageY-aE.top-q.top,aJ=C({left:aH,top:aF});aJ.pageX=aB.pageX;aJ.pageY=aB.pageY;var aK=K(aH,aF,aD);if(aK){aK.pageX=parseInt(aK.series.xaxis.p2c(aK.datapoint[0])+aE.left+q.left);aK.pageY=parseInt(aK.series.yaxis.p2c(aK.datapoint[1])+aE.top+q.top)}if(O.grid.autoHighlight){for(var aG=0;aG<ab.length;++aG){var aI=ab[aG];if(aI.auto==aC&&!(aK&&aI.series==aK.series&&aI.point[0]==aK.datapoint[0]&&aI.point[1]==aK.datapoint[1])){T(aI.series,aI.point)}}if(aK){x(aK.series,aK.datapoint,aC)}}av.trigger(aC,[aJ,aK])}function f(){if(!M){M=setTimeout(s,30)}}function s(){M=null;A.save();A.clearRect(0,0,G,I);A.translate(q.left,q.top);var aC,aB;for(aC=0;aC<ab.length;++aC){aB=ab[aC];if(aB.series.bars.show){v(aB.series,aB.point)}else{ay(aB.series,aB.point)}}A.restore();an(ak.drawOverlay,[A])}function x(aD,aB,aF){if(typeof aD=="number"){aD=Q[aD]}if(typeof aB=="number"){var aE=aD.datapoints.pointsize;aB=aD.datapoints.points.slice(aE*aB,aE*(aB+1))}var aC=al(aD,aB);if(aC==-1){ab.push({series:aD,point:aB,auto:aF});f()}else{if(!aF){ab[aC].auto=false}}}function T(aD,aB){if(aD==null&&aB==null){ab=[];f()}if(typeof aD=="number"){aD=Q[aD]}if(typeof aB=="number"){aB=aD.data[aB]}var aC=al(aD,aB);if(aC!=-1){ab.splice(aC,1);f()}}function al(aD,aE){for(var aB=0;aB<ab.length;++aB){var aC=ab[aB];if(aC.series==aD&&aC.point[0]==aE[0]&&aC.point[1]==aE[1]){return aB}}return -1}function ay(aE,aD){var aC=aD[0],aI=aD[1],aH=aE.xaxis,aG=aE.yaxis;if(aC<aH.min||aC>aH.max||aI<aG.min||aI>aG.max){return}var aF=aE.points.radius+aE.points.lineWidth/2;A.lineWidth=aF;A.strokeStyle=c.color.parse(aE.color).scale("a",0.5).toString();var aB=1.5*aF,aC=aH.p2c(aC),aI=aG.p2c(aI);A.beginPath();if(aE.points.symbol=="circle"){A.arc(aC,aI,aB,0,2*Math.PI,false)}else{aE.points.symbol(A,aC,aI,aB,false)}A.closePath();A.stroke()}function v(aE,aB){A.lineWidth=aE.bars.lineWidth;A.strokeStyle=c.color.parse(aE.color).scale("a",0.5).toString();var aD=c.color.parse(aE.color).scale("a",0.5).toString();var aC=aE.bars.align=="left"?0:-aE.bars.barWidth/2;E(aB[0],aB[1],aB[2]||0,aC,aC+aE.bars.barWidth,0,function(){return aD},aE.xaxis,aE.yaxis,A,aE.bars.horizontal,aE.bars.lineWidth)}function am(aJ,aB,aH,aC){if(typeof aJ=="string"){return aJ}else{var aI=H.createLinearGradient(0,aH,0,aB);for(var aE=0,aD=aJ.colors.length;aE<aD;++aE){var aF=aJ.colors[aE];if(typeof aF!="string"){var aG=c.color.parse(aC);if(aF.brightness!=null){aG=aG.scale("rgb",aF.brightness)}if(aF.opacity!=null){aG.a*=aF.opacity}aF=aG.toString()}aI.addColorStop(aE/(aD-1),aF)}return aI}}}c.plot=function(g,e,d){var f=new b(c(g),e,d,c.plot.plugins);return f};c.plot.version="0.7";c.plot.plugins=[];c.plot.formatDate=function(l,f,h){var o=function(d){d=""+d;return d.length==1?"0"+d:d};var e=[];var p=false,j=false;var n=l.getUTCHours();var k=n<12;if(h==null){h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}if(f.search(/%p|%P/)!=-1){if(n>12){n=n-12}else{if(n==0){n=12}}}for(var g=0;g<f.length;++g){var m=f.charAt(g);if(p){switch(m){case"h":m=""+n;break;case"H":m=o(n);break;case"M":m=o(l.getUTCMinutes());break;case"S":m=o(l.getUTCSeconds());break;case"d":m=""+l.getUTCDate();break;case"m":m=""+(l.getUTCMonth()+1);break;case"y":m=""+l.getUTCFullYear();break;case"b":m=""+h[l.getUTCMonth()];break;case"p":m=(k)?("am"):("pm");break;case"P":m=(k)?("AM"):("PM");break;case"0":m="";j=true;break}if(m&&j){m=o(m);j=false}e.push(m);if(!j){p=false}}else{if(m=="%"){p=true}else{e.push(m)}}}return e.join("")};function a(e,d){return d*Math.floor(e/d)}})(jQuery);



/*
Flot plugin for rendering pie charts. The plugin assumes the data is 
coming is as a single data value for each series, and each of those 
values is a positive value or zero (negative numbers don't make 
any sense and will cause strange effects). The data values do 
NOT need to be passed in as percentage values because it 
internally calculates the total and percentages.

* Created by Brian Medendorp, June 2009
* Updated November 2009 with contributions from: btburnett3, Anthony Aragues and Xavi Ivars

* Changes:
	2009-10-22: lineJoin set to round
	2009-10-23: IE full circle fix, donut
	2009-11-11: Added basic hover from btburnett3 - does not work in IE, and center is off in Chrome and Opera
	2009-11-17: Added IE hover capability submitted by Anthony Aragues
	2009-11-18: Added bug fix submitted by Xavi Ivars (issues with arrays when other JS libraries are included as well)
		

Available options are:
series: {
	pie: {
		show: true/false
		radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
		innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
		startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
		tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
		offset: {
			top: integer value to move the pie up or down
			left: integer value to move the pie left or right, or 'auto'
		},
		stroke: {
			color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
			width: integer pixel width of the stroke
		},
		label: {
			show: true/false, or 'auto'
			formatter:  a user-defined function that modifies the text/style of the label text
			radius: 0-1 for percentage of fullsize, or a specified pixel length
			background: {
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
				opacity: 0-1
			},
			threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
		},
		combine: {
			threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
			color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
			label: any text value of what the combined slice should be labeled
		}
		highlight: {
			opacity: 0-1
		}
	}
}

More detail and specific examples can be found in the included HTML file.

*/

(function ($) 
{
	function init(plot) // this is the "body" of the plugin
	{
		var canvas = null;
		var target = null;
		var maxRadius = null;
		var centerLeft = null;
		var centerTop = null;
		var total = 0;
		var redraw = true;
		var redrawAttempts = 10;
		var shrink = 0.95;
		var legendWidth = 0;
		var processed = false;
		var raw = false;
		
		// interactive variables	
		var highlights = [];	
	
		// add hook to determine if pie plugin in enabled, and then perform necessary operations
		plot.hooks.processOptions.push(checkPieEnabled);
		plot.hooks.bindEvents.push(bindEvents);	

		// check to see if the pie plugin is enabled
		function checkPieEnabled(plot, options)
		{
			if (options.series.pie.show)
			{
				//disable grid
				options.grid.show = false;
				
				// set labels.show
				if (options.series.pie.label.show=='auto')
					if (options.legend.show)
						options.series.pie.label.show = false;
					else
						options.series.pie.label.show = true;
				
				// set radius
				if (options.series.pie.radius=='auto')
					if (options.series.pie.label.show)
						options.series.pie.radius = 3/4;
					else
						options.series.pie.radius = 1;
						
				// ensure sane tilt
				if (options.series.pie.tilt>1)
					options.series.pie.tilt=1;
				if (options.series.pie.tilt<0)
					options.series.pie.tilt=0;
			
				// add processData hook to do transformations on the data
				plot.hooks.processDatapoints.push(processDatapoints);
				plot.hooks.drawOverlay.push(drawOverlay);	
				
				// add draw hook
				plot.hooks.draw.push(draw);
			}
		}
	
		// bind hoverable events
		function bindEvents(plot, eventHolder) 		
		{		
			var options = plot.getOptions();
			
			if (options.series.pie.show && options.grid.hoverable)
				eventHolder.unbind('mousemove').mousemove(onMouseMove);
				
			if (options.series.pie.show && options.grid.clickable)
				eventHolder.unbind('click').click(onClick);
		}	
		

		// debugging function that prints out an object
		function alertObject(obj)
		{
			var msg = '';
			function traverse(obj, depth)
			{
				if (!depth)
					depth = 0;
				for (var i = 0; i < obj.length; ++i)
				{
					for (var j=0; j<depth; j++)
						msg += '\t';
				
					if( typeof obj[i] == "object")
					{	// its an object
						msg += ''+i+':\n';
						traverse(obj[i], depth+1);
					}
					else
					{	// its a value
						msg += ''+i+': '+obj[i]+'\n';
					}
				}
			}
			traverse(obj);
			alert(msg);
		}
		
		function calcTotal(data)
		{
			for (var i = 0; i < data.length; ++i)
			{
				var item = parseFloat(data[i].data[0][1]);
				if (item)
					total += item;
			}
		}	
		
		function processDatapoints(plot, series, data, datapoints) 
		{	
			if (!processed)
			{
				processed = true;
			
				canvas = plot.getCanvas();
				target = $(canvas).parent();
				options = plot.getOptions();
			
				plot.setData(combine(plot.getData()));
			}
		}
		
		function setupPie()
		{
			legendWidth = target.children().filter('.legend').children().width();
		
			// calculate maximum radius and center point
			maxRadius =  Math.min(canvas.width,(canvas.height/options.series.pie.tilt))/2;
			centerTop = (canvas.height/2)+options.series.pie.offset.top;
			centerLeft = (canvas.width/2);
			
			if (options.series.pie.offset.left=='auto')
				if (options.legend.position.match('w'))
					centerLeft += legendWidth/2;
				else
					centerLeft -= legendWidth/2;
			else
				centerLeft += options.series.pie.offset.left;
					
			if (centerLeft<maxRadius)
				centerLeft = maxRadius;
			else if (centerLeft>canvas.width-maxRadius)
				centerLeft = canvas.width-maxRadius;
		}
		
		function fixData(data)
		{
			for (var i = 0; i < data.length; ++i)
			{
				if (typeof(data[i].data)=='number')
					data[i].data = [[1,data[i].data]];
				else if (typeof(data[i].data)=='undefined' || typeof(data[i].data[0])=='undefined')
				{
					if (typeof(data[i].data)!='undefined' && typeof(data[i].data.label)!='undefined')
						data[i].label = data[i].data.label; // fix weirdness coming from flot
					data[i].data = [[1,0]];
					
				}
			}
			return data;
		}
		
		function combine(data)
		{
			data = fixData(data);
			calcTotal(data);
			var combined = 0;
			var numCombined = 0;
			var color = options.series.pie.combine.color;
			
			var newdata = [];
			for (var i = 0; i < data.length; ++i)
			{
				// make sure its a number
				data[i].data[0][1] = parseFloat(data[i].data[0][1]);
				if (!data[i].data[0][1])
					data[i].data[0][1] = 0;
					
				if (data[i].data[0][1]/total<=options.series.pie.combine.threshold)
				{
					combined += data[i].data[0][1];
					numCombined++;
					if (!color)
						color = data[i].color;
				}				
				else
				{
					newdata.push({
						data: [[1,data[i].data[0][1]]], 
						color: data[i].color, 
						label: data[i].label,
						angle: (data[i].data[0][1]*(Math.PI*2))/total,
						percent: (data[i].data[0][1]/total*100)
					});
				}
			}
			if (numCombined>0)
				newdata.push({
					data: [[1,combined]], 
					color: color, 
					label: options.series.pie.combine.label,
					angle: (combined*(Math.PI*2))/total,
					percent: (combined/total*100)
				});
			return newdata;
		}		
		
		function draw(plot, newCtx)
		{
			if (!target) return; // if no series were passed
			ctx = newCtx;
		
			setupPie();
			var slices = plot.getData();
		
			var attempts = 0;
			while (redraw && attempts<redrawAttempts)
			{
				redraw = false;
				if (attempts>0)
					maxRadius *= shrink;
				attempts += 1;
				clear();
				if (options.series.pie.tilt<=0.8)
					drawShadow();
				drawPie();
			}
			if (attempts >= redrawAttempts) {
				clear();
				target.prepend('<div class="error">Could not draw pie with labels contained inside canvas</div>');
			}
			
			if ( plot.setSeries && plot.insertLegend )
			{
				plot.setSeries(slices);
				plot.insertLegend();
			}
			
			// we're actually done at this point, just defining internal functions at this point
			
			function clear()
			{
				ctx.clearRect(0,0,canvas.width,canvas.height);
				target.children().filter('.pieLabel, .pieLabelBackground').remove();
			}
			
			function drawShadow()
			{
				var shadowLeft = 5;
				var shadowTop = 15;
				var edge = 10;
				var alpha = 0.02;
			
				// set radius
				if (options.series.pie.radius>1)
					var radius = options.series.pie.radius;
				else
					var radius = maxRadius * options.series.pie.radius;
					
				if (radius>=(canvas.width/2)-shadowLeft || radius*options.series.pie.tilt>=(canvas.height/2)-shadowTop || radius<=edge)
					return;	// shadow would be outside canvas, so don't draw it
			
				ctx.save();
				ctx.translate(shadowLeft,shadowTop);
				ctx.globalAlpha = alpha;
				ctx.fillStyle = '#000';

				// center and rotate to starting position
				ctx.translate(centerLeft,centerTop);
				ctx.scale(1, options.series.pie.tilt);
				
				//radius -= edge;
				for (var i=1; i<=edge; i++)
				{
					ctx.beginPath();
					ctx.arc(0,0,radius,0,Math.PI*2,false);
					ctx.fill();
					radius -= i;
				}	
				
				ctx.restore();
			}
			
			function drawPie()
			{
				startAngle = Math.PI*options.series.pie.startAngle;
				
				// set radius
				if (options.series.pie.radius>1)
					var radius = options.series.pie.radius;
				else
					var radius = maxRadius * options.series.pie.radius;
				
				// center and rotate to starting position
				ctx.save();
				ctx.translate(centerLeft,centerTop);
				ctx.scale(1, options.series.pie.tilt);
				//ctx.rotate(startAngle); // start at top; -- This doesn't work properly in Opera
				
				// draw slices
				ctx.save();
				var currentAngle = startAngle;
				for (var i = 0; i < slices.length; ++i)
				{
					slices[i].startAngle = currentAngle;
					drawSlice(slices[i].angle, slices[i].color, true);
				}
				ctx.restore();
				
				// draw slice outlines
				ctx.save();
				ctx.lineWidth = options.series.pie.stroke.width;
				currentAngle = startAngle;
				for (var i = 0; i < slices.length; ++i)
					drawSlice(slices[i].angle, options.series.pie.stroke.color, false);
				ctx.restore();
					
				// draw donut hole
				drawDonutHole(ctx);
				
				// draw labels
				if (options.series.pie.label.show)
					drawLabels();
				
				// restore to original state
				ctx.restore();
				
				function drawSlice(angle, color, fill)
				{	
					if (angle<=0)
						return;
				
					if (fill)
						ctx.fillStyle = color;
					else
					{
						ctx.strokeStyle = color;
						ctx.lineJoin = 'round';
					}
						
					ctx.beginPath();
					if (Math.abs(angle - Math.PI*2) > 0.000000001)
						ctx.moveTo(0,0); // Center of the pie
					else if ($.browser.msie)
						angle -= 0.0001;
					//ctx.arc(0,0,radius,0,angle,false); // This doesn't work properly in Opera
					ctx.arc(0,0,radius,currentAngle,currentAngle+angle,false);
					ctx.closePath();
					//ctx.rotate(angle); // This doesn't work properly in Opera
					currentAngle += angle;
					
					if (fill)
						ctx.fill();
					else
						ctx.stroke();
				}
				
				function drawLabels()
				{
					var currentAngle = startAngle;
					
					// set radius
					if (options.series.pie.label.radius>1)
						var radius = options.series.pie.label.radius;
					else
						var radius = maxRadius * options.series.pie.label.radius;
					
					for (var i = 0; i < slices.length; ++i)
					{
						if (slices[i].percent >= options.series.pie.label.threshold*100)
							drawLabel(slices[i], currentAngle, i);
						currentAngle += slices[i].angle;
					}
					
					function drawLabel(slice, startAngle, index)
					{
						if (slice.data[0][1]==0)
							return;
							
						// format label text
						var lf = options.legend.labelFormatter, text, plf = options.series.pie.label.formatter;
						if (lf)
							text = lf(slice.label, slice);
						else
							text = slice.label;
						if (plf)
							text = plf(text, slice);
							
						var halfAngle = ((startAngle+slice.angle) + startAngle)/2;
						var x = centerLeft + Math.round(Math.cos(halfAngle) * radius);
						var y = centerTop + Math.round(Math.sin(halfAngle) * radius) * options.series.pie.tilt;
						
						var html = '<span class="pieLabel" id="pieLabel'+index+'" style="position:absolute;top:' + y + 'px;left:' + x + 'px;">' + text + "</span>";
						target.append(html);
						var label = target.children('#pieLabel'+index);
						var labelTop = (y - label.height()/2);
						var labelLeft = (x - label.width()/2);
						label.css('top', labelTop);
						label.css('left', labelLeft);
						
						// check to make sure that the label is not outside the canvas
						if (0-labelTop>0 || 0-labelLeft>0 || canvas.height-(labelTop+label.height())<0 || canvas.width-(labelLeft+label.width())<0)
							redraw = true;
						
						if (options.series.pie.label.background.opacity != 0) {
							// put in the transparent background separately to avoid blended labels and label boxes
							var c = options.series.pie.label.background.color;
							if (c == null) {
								c = slice.color;
							}
							var pos = 'top:'+labelTop+'px;left:'+labelLeft+'px;';
							$('<div class="pieLabelBackground" style="position:absolute;width:' + label.width() + 'px;height:' + label.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').insertBefore(label).css('opacity', options.series.pie.label.background.opacity);
						}
					} // end individual label function
				} // end drawLabels function
			} // end drawPie function
		} // end draw function
		
		// Placed here because it needs to be accessed from multiple locations 
		function drawDonutHole(layer)
		{
			// draw donut hole
			if(options.series.pie.innerRadius > 0)
			{
				// subtract the center
				layer.save();
				innerRadius = options.series.pie.innerRadius > 1 ? options.series.pie.innerRadius : maxRadius * options.series.pie.innerRadius;
				layer.globalCompositeOperation = 'destination-out'; // this does not work with excanvas, but it will fall back to using the stroke color
				layer.beginPath();
				layer.fillStyle = options.series.pie.stroke.color;
				layer.arc(0,0,innerRadius,0,Math.PI*2,false);
				layer.fill();
				layer.closePath();
				layer.restore();
				
				// add inner stroke
				layer.save();
				layer.beginPath();
				layer.strokeStyle = options.series.pie.stroke.color;
				layer.arc(0,0,innerRadius,0,Math.PI*2,false);
				layer.stroke();
				layer.closePath();
				layer.restore();
				// TODO: add extra shadow inside hole (with a mask) if the pie is tilted.
			}
		}
		
		//-- Additional Interactive related functions --
		
		function isPointInPoly(poly, pt)
		{
			for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
				((poly[i][1] <= pt[1] && pt[1] < poly[j][1]) || (poly[j][1] <= pt[1] && pt[1]< poly[i][1]))
				&& (pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0])
				&& (c = !c);
			return c;
		}
		
		function findNearbySlice(mouseX, mouseY)
		{
			var slices = plot.getData(),
				options = plot.getOptions(),
				radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;
			
			for (var i = 0; i < slices.length; ++i) 
			{
				var s = slices[i];	
				
				if(s.pie.show)
				{
					ctx.save();
					ctx.beginPath();
					ctx.moveTo(0,0); // Center of the pie
					//ctx.scale(1, options.series.pie.tilt);	// this actually seems to break everything when here.
					ctx.arc(0,0,radius,s.startAngle,s.startAngle+s.angle,false);
					ctx.closePath();
					x = mouseX-centerLeft;
					y = mouseY-centerTop;
					if(ctx.isPointInPath)
					{
						if (ctx.isPointInPath(mouseX-centerLeft, mouseY-centerTop))
						{
							//alert('found slice!');
							ctx.restore();
							return {datapoint: [s.percent, s.data], dataIndex: 0, series: s, seriesIndex: i};
						}
					}
					else
					{
						// excanvas for IE doesn;t support isPointInPath, this is a workaround. 
						p1X = (radius * Math.cos(s.startAngle));
						p1Y = (radius * Math.sin(s.startAngle));
						p2X = (radius * Math.cos(s.startAngle+(s.angle/4)));
						p2Y = (radius * Math.sin(s.startAngle+(s.angle/4)));
						p3X = (radius * Math.cos(s.startAngle+(s.angle/2)));
						p3Y = (radius * Math.sin(s.startAngle+(s.angle/2)));
						p4X = (radius * Math.cos(s.startAngle+(s.angle/1.5)));
						p4Y = (radius * Math.sin(s.startAngle+(s.angle/1.5)));
						p5X = (radius * Math.cos(s.startAngle+s.angle));
						p5Y = (radius * Math.sin(s.startAngle+s.angle));
						arrPoly = [[0,0],[p1X,p1Y],[p2X,p2Y],[p3X,p3Y],[p4X,p4Y],[p5X,p5Y]];
						arrPoint = [x,y];
						// TODO: perhaps do some mathmatical trickery here with the Y-coordinate to compensate for pie tilt?
						if(isPointInPoly(arrPoly, arrPoint))
						{
							ctx.restore();
							return {datapoint: [s.percent, s.data], dataIndex: 0, series: s, seriesIndex: i};
						}			
					}
					ctx.restore();
				}
			}
			
			return null;
		}

		function onMouseMove(e) 
		{
			triggerClickHoverEvent('plothover', e);
		}
		
        function onClick(e) 
		{
			triggerClickHoverEvent('plotclick', e);
        }

		// trigger click or hover event (they send the same parameters so we share their code)
		function triggerClickHoverEvent(eventname, e) 
		{
			var offset = plot.offset(),
				canvasX = parseInt(e.pageX - offset.left),
				canvasY =  parseInt(e.pageY - offset.top),
				item = findNearbySlice(canvasX, canvasY);
			
			if (options.grid.autoHighlight) 
			{
				// clear auto-highlights
				for (var i = 0; i < highlights.length; ++i) 
				{
					var h = highlights[i];
					if (h.auto == eventname && !(item && h.series == item.series))
						unhighlight(h.series);
				}
			}
			
			// highlight the slice
			if (item) 
			    highlight(item.series, eventname);
				
			// trigger any hover bind events
			var pos = { pageX: e.pageX, pageY: e.pageY };
			target.trigger(eventname, [ pos, item ]);	
		}

		function highlight(s, auto) 
		{
			if (typeof s == "number")
				s = series[s];

			var i = indexOfHighlight(s);
			if (i == -1) 
			{
				highlights.push({ series: s, auto: auto });
				plot.triggerRedrawOverlay();
			}
			else if (!auto)
				highlights[i].auto = false;
		}

		function unhighlight(s) 
		{
			if (s == null) 
			{
				highlights = [];
				plot.triggerRedrawOverlay();
			}
			
			if (typeof s == "number")
				s = series[s];

			var i = indexOfHighlight(s);
			if (i != -1) 
			{
				highlights.splice(i, 1);
				plot.triggerRedrawOverlay();
			}
		}

		function indexOfHighlight(s) 
		{
			for (var i = 0; i < highlights.length; ++i) 
			{
				var h = highlights[i];
				if (h.series == s)
					return i;
			}
			return -1;
		}

		function drawOverlay(plot, octx) 
		{
			//alert(options.series.pie.radius);
			var options = plot.getOptions();
			//alert(options.series.pie.radius);
			
			var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

			octx.save();
			octx.translate(centerLeft, centerTop);
			octx.scale(1, options.series.pie.tilt);
			
			for (i = 0; i < highlights.length; ++i) 
				drawHighlight(highlights[i].series);
			
			drawDonutHole(octx);

			octx.restore();

			function drawHighlight(series) 
			{
				if (series.angle < 0) return;
				
				//octx.fillStyle = parseColor(options.series.pie.highlight.color).scale(null, null, null, options.series.pie.highlight.opacity).toString();
				octx.fillStyle = "rgba(255, 255, 255, "+options.series.pie.highlight.opacity+")"; // this is temporary until we have access to parseColor
				
				octx.beginPath();
				if (Math.abs(series.angle - Math.PI*2) > 0.000000001)
					octx.moveTo(0,0); // Center of the pie
				octx.arc(0,0,radius,series.startAngle,series.startAngle+series.angle,false);
				octx.closePath();
				octx.fill();
			}
			
		}	
		
	} // end init (plugin body)
	
	// define pie specific options and their default values
	var options = {
		series: {
			pie: {
				show: false,
				radius: 'auto',	// actual radius of the visible pie (based on full calculated radius if <=1, or hard pixel value)
				innerRadius:0, /* for donut */
				startAngle: 3/2,
				tilt: 1,
				offset: {
					top: 0,
					left: 'auto'
				},
				stroke: {
					color: '#FFF',
					width: 1
				},
				label: {
					show: 'auto',
					formatter: function(label, slice){
						return '<div style="font-size:x-small;text-align:center;padding:2px;color:'+slice.color+';">'+label+'<br/>'+Math.round(slice.percent)+'%</div>';
					},	// formatter function
					radius: 1,	// radius at which to place the labels (based on full calculated radius if <=1, or hard pixel value)
					background: {
						color: null,
						opacity: 0
					},
					threshold: 0	// percentage at which to hide the label (i.e. the slice is too narrow)
				},
				combine: {
					threshold: -1,	// percentage at which to combine little slices into one larger slice
					color: null,	// color to give the new slice (auto-generated if null)
					label: 'Other'	// label to give the new slice
				},
				highlight: {
					//color: '#FFF',		// will add this functionality once parseColor is available
					opacity: 0.5
				}
			}
		}
	};
    
	$.plot.plugins.push({
		init: init,
		options: options,
		name: "pie",
		version: "1.0"
	});
})(jQuery);

/*
 * Flot plugin to order bars side by side.
 * 
 * Released under the MIT license by Benjamin BUFFET, 20-Sep-2010.
 *
 * This plugin is an alpha version.
 *
 * To activate the plugin you must specify the parameter "order" for the specific serie :
 *
 *  $.plot($("#placeholder"), [{ data: [ ... ], bars :{ order = null or integer }])
 *
 * If 2 series have the same order param, they are ordered by the position in the array;
 *
 * The plugin adjust the point by adding a value depanding of the barwidth
 * Exemple for 3 series (barwidth : 0.1) :
 *
 *          first bar décalage : -0.15
 *          second bar décalage : -0.05
 *          third bar décalage : 0.05
 *
 */

(function($){
    function init(plot){
        var orderedBarSeries;
        var nbOfBarsToOrder;
        var borderWidth;
        var borderWidthInXabsWidth;
        var pixelInXWidthEquivalent = 1;
        var isHorizontal = false;

        /*
         * This method add shift to x values
         */
        function reOrderBars(plot, serie, datapoints){
            var shiftedPoints = null;
            
            if(serieNeedToBeReordered(serie)){                
                checkIfGraphIsHorizontal(serie);
                calculPixel2XWidthConvert(plot);
                retrieveBarSeries(plot);
                calculBorderAndBarWidth(serie);
                
                if(nbOfBarsToOrder >= 2){  
                    var position = findPosition(serie);
                    var decallage = 0;
                    
                    var centerBarShift = calculCenterBarShift();

                    if (isBarAtLeftOfCenter(position)){
                        decallage = -1*(sumWidth(orderedBarSeries,position-1,Math.floor(nbOfBarsToOrder / 2)-1)) - centerBarShift;
                    }else{
                        decallage = sumWidth(orderedBarSeries,Math.ceil(nbOfBarsToOrder / 2),position-2) + centerBarShift + borderWidthInXabsWidth*2;
                    }

                    shiftedPoints = shiftPoints(datapoints,serie,decallage);
                    datapoints.points = shiftedPoints;
               }
           }
           return shiftedPoints;
        }

        function serieNeedToBeReordered(serie){
            return serie.bars != null
                && serie.bars.show
                && serie.bars.order != null;
        }

        function calculPixel2XWidthConvert(plot){
            var gridDimSize = isHorizontal ? plot.getPlaceholder().innerHeight() : plot.getPlaceholder().innerWidth();
            var minMaxValues = isHorizontal ? getAxeMinMaxValues(plot.getData(),1) : getAxeMinMaxValues(plot.getData(),0);
            var AxeSize = minMaxValues[1] - minMaxValues[0];
            pixelInXWidthEquivalent = AxeSize / gridDimSize;
        }

        function getAxeMinMaxValues(series,AxeIdx){
            var minMaxValues = new Array();
            for(var i = 0; i < series.length; i++){
                minMaxValues[0] = series[i].data[0][AxeIdx];
                minMaxValues[1] = series[i].data[series[i].data.length - 1][AxeIdx];
            }
            return minMaxValues;
        }

        function retrieveBarSeries(plot){
            orderedBarSeries = findOthersBarsToReOrders(plot.getData());
            nbOfBarsToOrder = orderedBarSeries.length;
        }

        function findOthersBarsToReOrders(series){
            var retSeries = new Array();

            for(var i = 0; i < series.length; i++){
                if(series[i].bars.order != null && series[i].bars.show){
                    retSeries.push(series[i]);
                }
            }

            return retSeries.sort(sortByOrder);
        }

        function sortByOrder(serie1,serie2){
            var x = serie1.bars.order;
            var y = serie2.bars.order;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        function  calculBorderAndBarWidth(serie){
            borderWidth = serie.bars.lineWidth ? serie.bars.lineWidth  : 2;
            borderWidthInXabsWidth = borderWidth * pixelInXWidthEquivalent;
        }
        
        function checkIfGraphIsHorizontal(serie){
            if(serie.bars.horizontal){
                isHorizontal = true;
            }
        }

        function findPosition(serie){
            var pos = 0
            for (var i = 0; i < orderedBarSeries.length; ++i) {
                if (serie == orderedBarSeries[i]){
                    pos = i;
                    break;
                }
            }

            return pos+1;
        }

        function calculCenterBarShift(){
            var width = 0;

            if(nbOfBarsToOrder%2 != 0)
                width = (orderedBarSeries[Math.ceil(nbOfBarsToOrder / 2)].bars.barWidth)/2;

            return width;
        }

        function isBarAtLeftOfCenter(position){
            return position <= Math.ceil(nbOfBarsToOrder / 2);
        }

        function sumWidth(series,start,end){
            var totalWidth = 0;

            for(var i = start; i <= end; i++){
                totalWidth += series[i].bars.barWidth+borderWidthInXabsWidth*2;
            }

            return totalWidth;
        }

        function shiftPoints(datapoints,serie,dx){
            var ps = datapoints.pointsize;
            var points = datapoints.points;
            var j = 0;           
            for(var i = isHorizontal ? 1 : 0;i < points.length; i += ps){
                points[i] += dx;
                //Adding the new x value in the serie to be abble to display the right tooltip value,
                //using the index 3 to not overide the third index.
                serie.data[j][3] = points[i];
                j++;
            }

            return points;
        }

        plot.hooks.processDatapoints.push(reOrderBars);

    }

    var options = {
        series : {
            bars: {order: null} // or number/string
        }
    };

    $.plot.plugins.push({
        init: init,
        options: options,
        name: "orderBars",
        version: "0.2"
    });

})(jQuery)


/*
Flot plugin for automatically redrawing plots when the placeholder
size changes, e.g. on window resizes.

It works by listening for changes on the placeholder div (through the
jQuery resize event plugin) - if the size changes, it will redraw the
plot.

There are no options. If you need to disable the plugin for some
plots, you can just fix the size of their placeholders.
*/


/* Inline dependency: 
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);


(function ($) {
    var redrawing = 0;
    var options = { }; // no options

    function init(plot) {
        function bindEvents(plot, eventHolder) {
            if (!redrawing)
                plot.getPlaceholder().resize(onResize);

            function onResize() {
                var placeholder = plot.getPlaceholder();

                // somebody might have hidden us and we can't plot
                // when we don't have the dimensions
                if (placeholder.width() == 0 || placeholder.height() == 0)
                    return;
                
                ++redrawing;
                $.plot(placeholder, plot.getData(), plot.getOptions());
                --redrawing;
            }
        }
        
        plot.hooks.bindEvents.push(bindEvents);
    }
    
    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'resize',
        version: '1.0'
    });
})(jQuery);

/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;(function(b){var m,t,u,f,D,j,E,n,z,A,q=0,e={},o=[],p=0,d={},l=[],G=null,v=new Image,J=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,W=/[^\.]\.(swf)\s*$/i,K,L=1,y=0,s="",r,i,h=false,B=b.extend(b("<div/>")[0],{prop:0}),M=b.browser.msie&&b.browser.version<7&&!window.XMLHttpRequest,N=function(){t.hide();v.onerror=v.onload=null;G&&G.abort();m.empty()},O=function(){if(false===e.onError(o,q,e)){t.hide();h=false}else{e.titleShow=false;e.width="auto";e.height="auto";m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
F()}},I=function(){var a=o[q],c,g,k,C,P,w;N();e=b.extend({},b.fn.fancybox.defaults,typeof b(a).data("fancybox")=="undefined"?e:b(a).data("fancybox"));w=e.onStart(o,q,e);if(w===false)h=false;else{if(typeof w=="object")e=b.extend(e,w);k=e.title||(a.nodeName?b(a).attr("title"):a.title)||"";if(a.nodeName&&!e.orig)e.orig=b(a).children("img:first").length?b(a).children("img:first"):b(a);if(k===""&&e.orig&&e.titleFromAlt)k=e.orig.attr("alt");c=e.href||(a.nodeName?b(a).attr("href"):a.href)||null;if(/^(?:javascript)/i.test(c)||
c=="#")c=null;if(e.type){g=e.type;if(!c)c=e.content}else if(e.content)g="html";else if(c)g=c.match(J)?"image":c.match(W)?"swf":b(a).hasClass("iframe")?"iframe":c.indexOf("#")===0?"inline":"ajax";if(g){if(g=="inline"){a=c.substr(c.indexOf("#"));g=b(a).length>0?"inline":"ajax"}e.type=g;e.href=c;e.title=k;if(e.autoDimensions)if(e.type=="html"||e.type=="inline"||e.type=="ajax"){e.width="auto";e.height="auto"}else e.autoDimensions=false;if(e.modal){e.overlayShow=true;e.hideOnOverlayClick=false;e.hideOnContentClick=
false;e.enableEscapeButton=false;e.showCloseButton=false}e.padding=parseInt(e.padding,10);e.margin=parseInt(e.margin,10);m.css("padding",e.padding+e.margin);b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){b(this).replaceWith(j.children())});switch(g){case "html":m.html(e.content);F();break;case "inline":if(b(a).parent().is("#fancybox-content")===true){h=false;break}b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup",function(){b(this).replaceWith(j.children())}).bind("fancybox-cancel",
function(){b(this).replaceWith(m.children())});b(a).appendTo(m);F();break;case "image":h=false;b.fancybox.showActivity();v=new Image;v.onerror=function(){O()};v.onload=function(){h=true;v.onerror=v.onload=null;e.width=v.width;e.height=v.height;b("<img />").attr({id:"fancybox-img",src:v.src,alt:e.title}).appendTo(m);Q()};v.src=c;break;case "swf":e.scrolling="no";C='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+e.width+'" height="'+e.height+'"><param name="movie" value="'+c+
'"></param>';P="";b.each(e.swf,function(x,H){C+='<param name="'+x+'" value="'+H+'"></param>';P+=" "+x+'="'+H+'"'});C+='<embed src="'+c+'" type="application/x-shockwave-flash" width="'+e.width+'" height="'+e.height+'"'+P+"></embed></object>";m.html(C);F();break;case "ajax":h=false;b.fancybox.showActivity();e.ajax.win=e.ajax.success;G=b.ajax(b.extend({},e.ajax,{url:c,data:e.ajax.data||{},error:function(x){x.status>0&&O()},success:function(x,H,R){if((typeof R=="object"?R:G).status==200){if(typeof e.ajax.win==
"function"){w=e.ajax.win(c,x,H,R);if(w===false){t.hide();return}else if(typeof w=="string"||typeof w=="object")x=w}m.html(x);F()}}}));break;case "iframe":Q()}}else O()}},F=function(){var a=e.width,c=e.height;a=a.toString().indexOf("%")>-1?parseInt((b(window).width()-e.margin*2)*parseFloat(a)/100,10)+"px":a=="auto"?"auto":a+"px";c=c.toString().indexOf("%")>-1?parseInt((b(window).height()-e.margin*2)*parseFloat(c)/100,10)+"px":c=="auto"?"auto":c+"px";m.wrapInner('<div style="width:'+a+";height:"+c+
";overflow: "+(e.scrolling=="auto"?"auto":e.scrolling=="yes"?"scroll":"hidden")+';position:relative;"></div>');e.width=m.width();e.height=m.height();Q()},Q=function(){var a,c;t.hide();if(f.is(":visible")&&false===d.onCleanup(l,p,d)){b.event.trigger("fancybox-cancel");h=false}else{h=true;b(j.add(u)).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");f.is(":visible")&&d.titlePosition!=="outside"&&f.css("height",f.height());l=o;p=q;d=e;if(d.overlayShow){u.css({"background-color":d.overlayColor,
opacity:d.overlayOpacity,cursor:d.hideOnOverlayClick?"pointer":"auto",height:b(document).height()});if(!u.is(":visible")){M&&b("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});u.show()}}else u.hide();i=X();s=d.title||"";y=0;n.empty().removeAttr("style").removeClass();if(d.titleShow!==false){if(b.isFunction(d.titleFormat))a=d.titleFormat(s,l,p,d);else a=s&&s.length?
d.titlePosition=="float"?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+s+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+d.titlePosition+'">'+s+"</div>":false;s=a;if(!(!s||s==="")){n.addClass("fancybox-title-"+d.titlePosition).html(s).appendTo("body").show();switch(d.titlePosition){case "inside":n.css({width:i.width-d.padding*2,marginLeft:d.padding,marginRight:d.padding});
y=n.outerHeight(true);n.appendTo(D);i.height+=y;break;case "over":n.css({marginLeft:d.padding,width:i.width-d.padding*2,bottom:d.padding}).appendTo(D);break;case "float":n.css("left",parseInt((n.width()-i.width-40)/2,10)*-1).appendTo(f);break;default:n.css({width:i.width-d.padding*2,paddingLeft:d.padding,paddingRight:d.padding}).appendTo(f)}}}n.hide();if(f.is(":visible")){b(E.add(z).add(A)).hide();a=f.position();r={top:a.top,left:a.left,width:f.width(),height:f.height()};c=r.width==i.width&&r.height==
i.height;j.fadeTo(d.changeFade,0.3,function(){var g=function(){j.html(m.contents()).fadeTo(d.changeFade,1,S)};b.event.trigger("fancybox-change");j.empty().removeAttr("filter").css({"border-width":d.padding,width:i.width-d.padding*2,height:e.autoDimensions?"auto":i.height-y-d.padding*2});if(c)g();else{B.prop=0;b(B).animate({prop:1},{duration:d.changeSpeed,easing:d.easingChange,step:T,complete:g})}})}else{f.removeAttr("style");j.css("border-width",d.padding);if(d.transitionIn=="elastic"){r=V();j.html(m.contents());
f.show();if(d.opacity)i.opacity=0;B.prop=0;b(B).animate({prop:1},{duration:d.speedIn,easing:d.easingIn,step:T,complete:S})}else{d.titlePosition=="inside"&&y>0&&n.show();j.css({width:i.width-d.padding*2,height:e.autoDimensions?"auto":i.height-y-d.padding*2}).html(m.contents());f.css(i).fadeIn(d.transitionIn=="none"?0:d.speedIn,S)}}}},Y=function(){if(d.enableEscapeButton||d.enableKeyboardNav)b(document).bind("keydown.fb",function(a){if(a.keyCode==27&&d.enableEscapeButton){a.preventDefault();b.fancybox.close()}else if((a.keyCode==
37||a.keyCode==39)&&d.enableKeyboardNav&&a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.target.tagName!=="SELECT"){a.preventDefault();b.fancybox[a.keyCode==37?"prev":"next"]()}});if(d.showNavArrows){if(d.cyclic&&l.length>1||p!==0)z.show();if(d.cyclic&&l.length>1||p!=l.length-1)A.show()}else{z.hide();A.hide()}},S=function(){if(!b.support.opacity){j.get(0).style.removeAttribute("filter");f.get(0).style.removeAttribute("filter")}e.autoDimensions&&j.css("height","auto");f.css("height","auto");
s&&s.length&&n.show();d.showCloseButton&&E.show();Y();d.hideOnContentClick&&j.bind("click",b.fancybox.close);d.hideOnOverlayClick&&u.bind("click",b.fancybox.close);b(window).bind("resize.fb",b.fancybox.resize);d.centerOnScroll&&b(window).bind("scroll.fb",b.fancybox.center);if(d.type=="iframe")b('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(b.browser.msie?'allowtransparency="true""':"")+' scrolling="'+e.scrolling+'" src="'+d.href+'"></iframe>').appendTo(j);
f.show();h=false;b.fancybox.center();d.onComplete(l,p,d);var a,c;if(l.length-1>p){a=l[p+1].href;if(typeof a!=="undefined"&&a.match(J)){c=new Image;c.src=a}}if(p>0){a=l[p-1].href;if(typeof a!=="undefined"&&a.match(J)){c=new Image;c.src=a}}},T=function(a){var c={width:parseInt(r.width+(i.width-r.width)*a,10),height:parseInt(r.height+(i.height-r.height)*a,10),top:parseInt(r.top+(i.top-r.top)*a,10),left:parseInt(r.left+(i.left-r.left)*a,10)};if(typeof i.opacity!=="undefined")c.opacity=a<0.5?0.5:a;f.css(c);
j.css({width:c.width-d.padding*2,height:c.height-y*a-d.padding*2})},U=function(){return[b(window).width()-d.margin*2,b(window).height()-d.margin*2,b(document).scrollLeft()+d.margin,b(document).scrollTop()+d.margin]},X=function(){var a=U(),c={},g=d.autoScale,k=d.padding*2;c.width=d.width.toString().indexOf("%")>-1?parseInt(a[0]*parseFloat(d.width)/100,10):d.width+k;c.height=d.height.toString().indexOf("%")>-1?parseInt(a[1]*parseFloat(d.height)/100,10):d.height+k;if(g&&(c.width>a[0]||c.height>a[1]))if(e.type==
"image"||e.type=="swf"){g=d.width/d.height;if(c.width>a[0]){c.width=a[0];c.height=parseInt((c.width-k)/g+k,10)}if(c.height>a[1]){c.height=a[1];c.width=parseInt((c.height-k)*g+k,10)}}else{c.width=Math.min(c.width,a[0]);c.height=Math.min(c.height,a[1])}c.top=parseInt(Math.max(a[3]-20,a[3]+(a[1]-c.height-40)*0.5),10);c.left=parseInt(Math.max(a[2]-20,a[2]+(a[0]-c.width-40)*0.5),10);return c},V=function(){var a=e.orig?b(e.orig):false,c={};if(a&&a.length){c=a.offset();c.top+=parseInt(a.css("paddingTop"),
10)||0;c.left+=parseInt(a.css("paddingLeft"),10)||0;c.top+=parseInt(a.css("border-top-width"),10)||0;c.left+=parseInt(a.css("border-left-width"),10)||0;c.width=a.width();c.height=a.height();c={width:c.width+d.padding*2,height:c.height+d.padding*2,top:c.top-d.padding-20,left:c.left-d.padding-20}}else{a=U();c={width:d.padding*2,height:d.padding*2,top:parseInt(a[3]+a[1]*0.5,10),left:parseInt(a[2]+a[0]*0.5,10)}}return c},Z=function(){if(t.is(":visible")){b("div",t).css("top",L*-40+"px");L=(L+1)%12}else clearInterval(K)};
b.fn.fancybox=function(a){if(!b(this).length)return this;b(this).data("fancybox",b.extend({},a,b.metadata?b(this).metadata():{})).unbind("click.fb").bind("click.fb",function(c){c.preventDefault();if(!h){h=true;b(this).blur();o=[];q=0;c=b(this).attr("rel")||"";if(!c||c==""||c==="nofollow")o.push(this);else{o=b("a[rel="+c+"], area[rel="+c+"]");q=o.index(this)}I()}});return this};b.fancybox=function(a,c){var g;if(!h){h=true;g=typeof c!=="undefined"?c:{};o=[];q=parseInt(g.index,10)||0;if(b.isArray(a)){for(var k=
0,C=a.length;k<C;k++)if(typeof a[k]=="object")b(a[k]).data("fancybox",b.extend({},g,a[k]));else a[k]=b({}).data("fancybox",b.extend({content:a[k]},g));o=jQuery.merge(o,a)}else{if(typeof a=="object")b(a).data("fancybox",b.extend({},g,a));else a=b({}).data("fancybox",b.extend({content:a},g));o.push(a)}if(q>o.length||q<0)q=0;I()}};b.fancybox.showActivity=function(){clearInterval(K);t.show();K=setInterval(Z,66)};b.fancybox.hideActivity=function(){t.hide()};b.fancybox.next=function(){return b.fancybox.pos(p+
1)};b.fancybox.prev=function(){return b.fancybox.pos(p-1)};b.fancybox.pos=function(a){if(!h){a=parseInt(a);o=l;if(a>-1&&a<l.length){q=a;I()}else if(d.cyclic&&l.length>1){q=a>=l.length?0:l.length-1;I()}}};b.fancybox.cancel=function(){if(!h){h=true;b.event.trigger("fancybox-cancel");N();e.onCancel(o,q,e);h=false}};b.fancybox.close=function(){function a(){u.fadeOut("fast");n.empty().hide();f.hide();b.event.trigger("fancybox-cleanup");j.empty();d.onClosed(l,p,d);l=e=[];p=q=0;d=e={};h=false}if(!(h||f.is(":hidden"))){h=
true;if(d&&false===d.onCleanup(l,p,d))h=false;else{N();b(E.add(z).add(A)).hide();b(j.add(u)).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");j.find("iframe").attr("src",M&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank");d.titlePosition!=="inside"&&n.empty();f.stop();if(d.transitionOut=="elastic"){r=V();var c=f.position();i={top:c.top,left:c.left,width:f.width(),height:f.height()};if(d.opacity)i.opacity=1;n.empty().hide();B.prop=1;
b(B).animate({prop:0},{duration:d.speedOut,easing:d.easingOut,step:T,complete:a})}else f.fadeOut(d.transitionOut=="none"?0:d.speedOut,a)}}};b.fancybox.resize=function(){u.is(":visible")&&u.css("height",b(document).height());b.fancybox.center(true)};b.fancybox.center=function(a){var c,g;if(!h){g=a===true?1:0;c=U();!g&&(f.width()>c[0]||f.height()>c[1])||f.stop().animate({top:parseInt(Math.max(c[3]-20,c[3]+(c[1]-j.height()-40)*0.5-d.padding)),left:parseInt(Math.max(c[2]-20,c[2]+(c[0]-j.width()-40)*0.5-
d.padding))},typeof a=="number"?a:200)}};b.fancybox.init=function(){if(!b("#fancybox-wrap").length){b("body").append(m=b('<div id="fancybox-tmp"></div>'),t=b('<div id="fancybox-loading"><div></div></div>'),u=b('<div id="fancybox-overlay"></div>'),f=b('<div id="fancybox-wrap"></div>'));D=b('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
D.append(j=b('<div id="fancybox-content"></div>'),E=b('<a id="fancybox-close"></a>'),n=b('<div id="fancybox-title"></div>'),z=b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),A=b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));E.click(b.fancybox.close);t.click(b.fancybox.cancel);z.click(function(a){a.preventDefault();b.fancybox.prev()});A.click(function(a){a.preventDefault();b.fancybox.next()});
b.fn.mousewheel&&f.bind("mousewheel.fb",function(a,c){if(h)a.preventDefault();else if(b(a.target).get(0).clientHeight==0||b(a.target).get(0).scrollHeight===b(a.target).get(0).clientHeight){a.preventDefault();b.fancybox[c>0?"prev":"next"]()}});b.support.opacity||f.addClass("fancybox-ie");if(M){t.addClass("fancybox-ie6");f.addClass("fancybox-ie6");b('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D)}}};
b.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.7,overlayColor:"#777",titleShow:true,titlePosition:"float",titleFormat:null,titleFromAlt:false,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",
easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,enableKeyboardNav:true,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};b(document).ready(function(){b.fancybox.init()})})(jQuery);
/*

 FullCalendar v1.5.2
 http://arshaw.com/fullcalendar/

 Use fullcalendar.css for basic styling.
 For event drag & drop, requires jQuery UI draggable.
 For event resizing, requires jQuery UI resizable.

 Copyright (c) 2011 Adam Shaw
 Dual licensed under the MIT and GPL licenses, located in
 MIT-LICENSE.txt and GPL-LICENSE.txt respectively.

 Date: Sun Aug 21 22:06:09 2011 -0700

*/
(function(m,oa){function wb(a){m.extend(true,Ya,a)}function Yb(a,b,e){function d(k){if(E){u();q();ma();S(k)}else f()}function f(){B=b.theme?"ui":"fc";a.addClass("fc");b.isRTL&&a.addClass("fc-rtl");b.theme&&a.addClass("ui-widget");E=m("<div class='fc-content' style='position:relative'/>").prependTo(a);C=new Zb(X,b);(P=C.render())&&a.prepend(P);y(b.defaultView);m(window).resize(na);t()||g()}function g(){setTimeout(function(){!n.start&&t()&&S()},0)}function l(){m(window).unbind("resize",na);C.destroy();
E.remove();a.removeClass("fc fc-rtl ui-widget")}function j(){return i.offsetWidth!==0}function t(){return m("body")[0].offsetWidth!==0}function y(k){if(!n||k!=n.name){F++;pa();var D=n,Z;if(D){(D.beforeHide||xb)();Za(E,E.height());D.element.hide()}else Za(E,1);E.css("overflow","hidden");if(n=Y[k])n.element.show();else n=Y[k]=new Ja[k](Z=s=m("<div class='fc-view fc-view-"+k+"' style='position:absolute'/>").appendTo(E),X);D&&C.deactivateButton(D.name);C.activateButton(k);S();E.css("overflow","");D&&
Za(E,1);Z||(n.afterShow||xb)();F--}}function S(k){if(j()){F++;pa();o===oa&&u();var D=false;if(!n.start||k||r<n.start||r>=n.end){n.render(r,k||0);fa(true);D=true}else if(n.sizeDirty){n.clearEvents();fa();D=true}else if(n.eventsDirty){n.clearEvents();D=true}n.sizeDirty=false;n.eventsDirty=false;ga(D);W=a.outerWidth();C.updateTitle(n.title);k=new Date;k>=n.start&&k<n.end?C.disableButton("today"):C.enableButton("today");F--;n.trigger("viewDisplay",i)}}function Q(){q();if(j()){u();fa();pa();n.clearEvents();
n.renderEvents(J);n.sizeDirty=false}}function q(){m.each(Y,function(k,D){D.sizeDirty=true})}function u(){o=b.contentHeight?b.contentHeight:b.height?b.height-(P?P.height():0)-Sa(E):Math.round(E.width()/Math.max(b.aspectRatio,0.5))}function fa(k){F++;n.setHeight(o,k);if(s){s.css("position","relative");s=null}n.setWidth(E.width(),k);F--}function na(){if(!F)if(n.start){var k=++v;setTimeout(function(){if(k==v&&!F&&j())if(W!=(W=a.outerWidth())){F++;Q();n.trigger("windowResize",i);F--}},200)}else g()}function ga(k){if(!b.lazyFetching||
ya(n.visStart,n.visEnd))ra();else k&&da()}function ra(){K(n.visStart,n.visEnd)}function sa(k){J=k;da()}function ha(k){da(k)}function da(k){ma();if(j()){n.clearEvents();n.renderEvents(J,k);n.eventsDirty=false}}function ma(){m.each(Y,function(k,D){D.eventsDirty=true})}function ua(k,D,Z){n.select(k,D,Z===oa?true:Z)}function pa(){n&&n.unselect()}function U(){S(-1)}function ca(){S(1)}function ka(){gb(r,-1);S()}function qa(){gb(r,1);S()}function G(){r=new Date;S()}function p(k,D,Z){if(k instanceof Date)r=
N(k);else yb(r,k,D,Z);S()}function L(k,D,Z){k!==oa&&gb(r,k);D!==oa&&hb(r,D);Z!==oa&&ba(r,Z);S()}function c(){return N(r)}function z(){return n}function H(k,D){if(D===oa)return b[k];if(k=="height"||k=="contentHeight"||k=="aspectRatio"){b[k]=D;Q()}}function T(k,D){if(b[k])return b[k].apply(D||i,Array.prototype.slice.call(arguments,2))}var X=this;X.options=b;X.render=d;X.destroy=l;X.refetchEvents=ra;X.reportEvents=sa;X.reportEventChange=ha;X.rerenderEvents=da;X.changeView=y;X.select=ua;X.unselect=pa;
X.prev=U;X.next=ca;X.prevYear=ka;X.nextYear=qa;X.today=G;X.gotoDate=p;X.incrementDate=L;X.formatDate=function(k,D){return Oa(k,D,b)};X.formatDates=function(k,D,Z){return ib(k,D,Z,b)};X.getDate=c;X.getView=z;X.option=H;X.trigger=T;$b.call(X,b,e);var ya=X.isFetchNeeded,K=X.fetchEvents,i=a[0],C,P,E,B,n,Y={},W,o,s,v=0,F=0,r=new Date,J=[],M;yb(r,b.year,b.month,b.date);b.droppable&&m(document).bind("dragstart",function(k,D){var Z=k.target,ja=m(Z);if(!ja.parents(".fc").length){var ia=b.dropAccept;if(m.isFunction(ia)?
ia.call(Z,ja):ja.is(ia)){M=Z;n.dragStart(M,k,D)}}}).bind("dragstop",function(k,D){if(M){n.dragStop(M,k,D);M=null}})}function Zb(a,b){function e(){q=b.theme?"ui":"fc";if(b.header)return Q=m("<table class='fc-header' style='width:100%'/>").append(m("<tr/>").append(f("left")).append(f("center")).append(f("right")))}function d(){Q.remove()}function f(u){var fa=m("<td class='fc-header-"+u+"'/>");(u=b.header[u])&&m.each(u.split(" "),function(na){na>0&&fa.append("<span class='fc-header-space'/>");var ga;
m.each(this.split(","),function(ra,sa){if(sa=="title"){fa.append("<span class='fc-header-title'><h3 style='color:#272b37;'>&nbsp;</h3></span>");ga&&ga.addClass(q+"-corner-right");ga=null}else{var ha;if(a[sa])ha=a[sa];else if(Ja[sa])ha=function(){ma.removeClass(q+"-state-hover");a.changeView(sa)};if(ha){ra=b.theme?jb(b.buttonIcons,sa):null;var da=jb(b.buttonText,sa),ma=m("<span class='fc-button fc-button-"+sa+" "+q+"-state-default'><span class='fc-button-inner'><span class='fc-button-content'>"+(ra?"<span class='fc-icon-wrap'><span class='ui-icon ui-icon-"+
ra+"'/></span>":da)+"</span><span class='fc-button-effect'><span></span></span></span></span>");if(ma){ma.click(function(){ma.hasClass(q+"-state-disabled")||ha()}).mousedown(function(){ma.not("."+q+"-state-active").not("."+q+"-state-disabled").addClass(q+"-state-down")}).mouseup(function(){ma.removeClass(q+"-state-down")}).hover(function(){ma.not("."+q+"-state-active").not("."+q+"-state-disabled").addClass(q+"-state-hover")},function(){ma.removeClass(q+"-state-hover").removeClass(q+"-state-down")}).appendTo(fa);
ga||ma.addClass(q+"-corner-left");ga=ma}}}});ga&&ga.addClass(q+"-corner-right")});return fa}function g(u){Q.find("h3").html(u)}function l(u){Q.find("span.fc-button-"+u).addClass(q+"-state-active")}function j(u){Q.find("span.fc-button-"+u).removeClass(q+"-state-active")}function t(u){Q.find("span.fc-button-"+u).addClass(q+"-state-disabled")}function y(u){Q.find("span.fc-button-"+u).removeClass(q+"-state-disabled")}var S=this;S.render=e;S.destroy=d;S.updateTitle=g;S.activateButton=l;S.deactivateButton=
j;S.disableButton=t;S.enableButton=y;var Q=m([]),q}function $b(a,b){function e(c,z){return!ca||c<ca||z>ka}function d(c,z){ca=c;ka=z;L=[];c=++qa;G=z=U.length;for(var H=0;H<z;H++)f(U[H],c)}function f(c,z){g(c,function(H){if(z==qa){if(H){for(var T=0;T<H.length;T++){H[T].source=c;na(H[T])}L=L.concat(H)}G--;G||ua(L)}})}function g(c,z){var H,T=Aa.sourceFetchers,X;for(H=0;H<T.length;H++){X=T[H](c,ca,ka,z);if(X===true)return;else if(typeof X=="object"){g(X,z);return}}if(H=c.events)if(m.isFunction(H)){u();
H(N(ca),N(ka),function(C){z(C);fa()})}else m.isArray(H)?z(H):z();else if(c.url){var ya=c.success,K=c.error,i=c.complete;H=m.extend({},c.data||{});T=Ta(c.startParam,a.startParam);X=Ta(c.endParam,a.endParam);if(T)H[T]=Math.round(+ca/1E3);if(X)H[X]=Math.round(+ka/1E3);u();m.ajax(m.extend({},ac,c,{data:H,success:function(C){C=C||[];var P=$a(ya,this,arguments);if(m.isArray(P))C=P;z(C)},error:function(){$a(K,this,arguments);z()},complete:function(){$a(i,this,arguments);fa()}}))}else z()}function l(c){if(c=
j(c)){G++;f(c,qa)}}function j(c){if(m.isFunction(c)||m.isArray(c))c={events:c};else if(typeof c=="string")c={url:c};if(typeof c=="object"){ga(c);U.push(c);return c}}function t(c){U=m.grep(U,function(z){return!ra(z,c)});L=m.grep(L,function(z){return!ra(z.source,c)});ua(L)}function y(c){var z,H=L.length,T,X=ma().defaultEventEnd,ya=c.start-c._start,K=c.end?c.end-(c._end||X(c)):0;for(z=0;z<H;z++){T=L[z];if(T._id==c._id&&T!=c){T.start=new Date(+T.start+ya);T.end=c.end?T.end?new Date(+T.end+K):new Date(+X(T)+
K):null;T.title=c.title;T.url=c.url;T.allDay=c.allDay;T.className=c.className;T.editable=c.editable;T.color=c.color;T.backgroudColor=c.backgroudColor;T.borderColor=c.borderColor;T.textColor=c.textColor;na(T)}}na(c);ua(L)}function S(c,z){na(c);if(!c.source){if(z){pa.events.push(c);c.source=pa}L.push(c)}ua(L)}function Q(c){if(c){if(!m.isFunction(c)){var z=c+"";c=function(T){return T._id==z}}L=m.grep(L,c,true);for(H=0;H<U.length;H++)if(m.isArray(U[H].events))U[H].events=m.grep(U[H].events,c,true)}else{L=
[];for(var H=0;H<U.length;H++)if(m.isArray(U[H].events))U[H].events=[]}ua(L)}function q(c){if(m.isFunction(c))return m.grep(L,c);else if(c){c+="";return m.grep(L,function(z){return z._id==c})}return L}function u(){p++||da("loading",null,true)}function fa(){--p||da("loading",null,false)}function na(c){var z=c.source||{},H=Ta(z.ignoreTimezone,a.ignoreTimezone);c._id=c._id||(c.id===oa?"_fc"+bc++:c.id+"");if(c.date){if(!c.start)c.start=c.date;delete c.date}c._start=N(c.start=kb(c.start,H));c.end=kb(c.end,
H);if(c.end&&c.end<=c.start)c.end=null;c._end=c.end?N(c.end):null;if(c.allDay===oa)c.allDay=Ta(z.allDayDefault,a.allDayDefault);if(c.className){if(typeof c.className=="string")c.className=c.className.split(/\s+/)}else c.className=[]}function ga(c){if(c.className){if(typeof c.className=="string")c.className=c.className.split(/\s+/)}else c.className=[];for(var z=Aa.sourceNormalizers,H=0;H<z.length;H++)z[H](c)}function ra(c,z){return c&&z&&sa(c)==sa(z)}function sa(c){return(typeof c=="object"?c.events||
c.url:"")||c}var ha=this;ha.isFetchNeeded=e;ha.fetchEvents=d;ha.addEventSource=l;ha.removeEventSource=t;ha.updateEvent=y;ha.renderEvent=S;ha.removeEvents=Q;ha.clientEvents=q;ha.normalizeEvent=na;var da=ha.trigger,ma=ha.getView,ua=ha.reportEvents,pa={events:[]},U=[pa],ca,ka,qa=0,G=0,p=0,L=[];for(ha=0;ha<b.length;ha++)j(b[ha])}function gb(a,b,e){a.setFullYear(a.getFullYear()+b);e||Ka(a);return a}function hb(a,b,e){if(+a){b=a.getMonth()+b;var d=N(a);d.setDate(1);d.setMonth(b);a.setMonth(b);for(e||Ka(a);a.getMonth()!=
d.getMonth();)a.setDate(a.getDate()+(a<d?1:-1))}return a}function ba(a,b,e){if(+a){b=a.getDate()+b;var d=N(a);d.setHours(9);d.setDate(b);a.setDate(b);e||Ka(a);lb(a,d)}return a}function lb(a,b){if(+a)for(;a.getDate()!=b.getDate();)a.setTime(+a+(a<b?1:-1)*cc)}function xa(a,b){a.setMinutes(a.getMinutes()+b);return a}function Ka(a){a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);return a}function N(a,b){if(b)return Ka(new Date(+a));return new Date(+a)}function zb(){var a=0,b;do b=new Date(1970,
a++,1);while(b.getHours());return b}function Fa(a,b,e){for(b=b||1;!a.getDay()||e&&a.getDay()==1||!e&&a.getDay()==6;)ba(a,b);return a}function Ca(a,b){return Math.round((N(a,true)-N(b,true))/Ab)}function yb(a,b,e,d){if(b!==oa&&b!=a.getFullYear()){a.setDate(1);a.setMonth(0);a.setFullYear(b)}if(e!==oa&&e!=a.getMonth()){a.setDate(1);a.setMonth(e)}d!==oa&&a.setDate(d)}function kb(a,b){if(typeof a=="object")return a;if(typeof a=="number")return new Date(a*1E3);if(typeof a=="string"){if(a.match(/^\d+(\.\d+)?$/))return new Date(parseFloat(a)*
1E3);if(b===oa)b=true;return Bb(a,b)||(a?new Date(a):null)}return null}function Bb(a,b){a=a.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);if(!a)return null;var e=new Date(a[1],0,1);if(b||!a[13]){b=new Date(a[1],0,1,9,0);if(a[3]){e.setMonth(a[3]-1);b.setMonth(a[3]-1)}if(a[5]){e.setDate(a[5]);b.setDate(a[5])}lb(e,b);a[7]&&e.setHours(a[7]);a[8]&&e.setMinutes(a[8]);a[10]&&e.setSeconds(a[10]);a[12]&&e.setMilliseconds(Number("0."+
a[12])*1E3);lb(e,b)}else{e.setUTCFullYear(a[1],a[3]?a[3]-1:0,a[5]||1);e.setUTCHours(a[7]||0,a[8]||0,a[10]||0,a[12]?Number("0."+a[12])*1E3:0);if(a[14]){b=Number(a[16])*60+(a[18]?Number(a[18]):0);b*=a[15]=="-"?1:-1;e=new Date(+e+b*60*1E3)}}return e}function mb(a){if(typeof a=="number")return a*60;if(typeof a=="object")return a.getHours()*60+a.getMinutes();if(a=a.match(/(\d+)(?::(\d+))?\s*(\w+)?/)){var b=parseInt(a[1],10);if(a[3]){b%=12;if(a[3].toLowerCase().charAt(0)=="p")b+=12}return b*60+(a[2]?parseInt(a[2],
10):0)}}function Oa(a,b,e){return ib(a,null,b,e)}function ib(a,b,e,d){d=d||Ya;var f=a,g=b,l,j=e.length,t,y,S,Q="";for(l=0;l<j;l++){t=e.charAt(l);if(t=="'")for(y=l+1;y<j;y++){if(e.charAt(y)=="'"){if(f){Q+=y==l+1?"'":e.substring(l+1,y);l=y}break}}else if(t=="(")for(y=l+1;y<j;y++){if(e.charAt(y)==")"){l=Oa(f,e.substring(l+1,y),d);if(parseInt(l.replace(/\D/,""),10))Q+=l;l=y;break}}else if(t=="[")for(y=l+1;y<j;y++){if(e.charAt(y)=="]"){t=e.substring(l+1,y);l=Oa(f,t,d);if(l!=Oa(g,t,d))Q+=l;l=y;break}}else if(t==
"{"){f=b;g=a}else if(t=="}"){f=a;g=b}else{for(y=j;y>l;y--)if(S=dc[e.substring(l,y)]){if(f)Q+=S(f,d);l=y-1;break}if(y==l)if(f)Q+=t}}return Q}function Ua(a){return a.end?ec(a.end,a.allDay):ba(N(a.start),1)}function ec(a,b){a=N(a);return b||a.getHours()||a.getMinutes()?ba(a,1):Ka(a)}function fc(a,b){return(b.msLength-a.msLength)*100+(a.event.start-b.event.start)}function Cb(a,b){return a.end>b.start&&a.start<b.end}function nb(a,b,e,d){var f=[],g,l=a.length,j,t,y,S,Q;for(g=0;g<l;g++){j=a[g];t=j.start;
y=b[g];if(y>e&&t<d){if(t<e){t=N(e);S=false}else{t=t;S=true}if(y>d){y=N(d);Q=false}else{y=y;Q=true}f.push({event:j,start:t,end:y,isStart:S,isEnd:Q,msLength:y-t})}}return f.sort(fc)}function ob(a){var b=[],e,d=a.length,f,g,l,j;for(e=0;e<d;e++){f=a[e];for(g=0;;){l=false;if(b[g])for(j=0;j<b[g].length;j++)if(Cb(b[g][j],f)){l=true;break}if(l)g++;else break}if(b[g])b[g].push(f);else b[g]=[f]}return b}function Db(a,b,e){a.unbind("mouseover").mouseover(function(d){for(var f=d.target,g;f!=this;){g=f;f=f.parentNode}if((f=
g._fci)!==oa){g._fci=oa;g=b[f];e(g.event,g.element,g);m(d.target).trigger(d)}d.stopPropagation()})}function Va(a,b,e){for(var d=0,f;d<a.length;d++){f=m(a[d]);f.width(Math.max(0,b-pb(f,e)))}}function Eb(a,b,e){for(var d=0,f;d<a.length;d++){f=m(a[d]);f.height(Math.max(0,b-Sa(f,e)))}}function pb(a,b){return gc(a)+hc(a)+(b?ic(a):0)}function gc(a){return(parseFloat(m.curCSS(a[0],"paddingLeft",true))||0)+(parseFloat(m.curCSS(a[0],"paddingRight",true))||0)}function ic(a){return(parseFloat(m.curCSS(a[0],
"marginLeft",true))||0)+(parseFloat(m.curCSS(a[0],"marginRight",true))||0)}function hc(a){return(parseFloat(m.curCSS(a[0],"borderLeftWidth",true))||0)+(parseFloat(m.curCSS(a[0],"borderRightWidth",true))||0)}function Sa(a,b){return jc(a)+kc(a)+(b?Fb(a):0)}function jc(a){return(parseFloat(m.curCSS(a[0],"paddingTop",true))||0)+(parseFloat(m.curCSS(a[0],"paddingBottom",true))||0)}function Fb(a){return(parseFloat(m.curCSS(a[0],"marginTop",true))||0)+(parseFloat(m.curCSS(a[0],"marginBottom",true))||0)}
function kc(a){return(parseFloat(m.curCSS(a[0],"borderTopWidth",true))||0)+(parseFloat(m.curCSS(a[0],"borderBottomWidth",true))||0)}function Za(a,b){b=typeof b=="number"?b+"px":b;a.each(function(e,d){d.style.cssText+=";min-height:"+b+";_height:"+b})}function xb(){}function Gb(a,b){return a-b}function Hb(a){return Math.max.apply(Math,a)}function Pa(a){return(a<10?"0":"")+a}function jb(a,b){if(a[b]!==oa)return a[b];b=b.split(/(?=[A-Z])/);for(var e=b.length-1,d;e>=0;e--){d=a[b[e].toLowerCase()];if(d!==
oa)return d}return a[""]}function Qa(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function Ib(a){return a.id+"/"+a.className+"/"+a.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/ig,"")}function qb(a){a.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})}function ab(a){a.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")}
function rb(a,b){a.each(function(e,d){d.className=d.className.replace(/^fc-\w*/,"fc-"+lc[b.getDay()])})}function Jb(a,b){var e=a.source||{},d=a.color,f=e.color,g=b("eventColor"),l=a.backgroundColor||d||e.backgroundColor||f||b("eventBackgroundColor")||g;d=a.borderColor||d||e.borderColor||f||b("eventBorderColor")||g;a=a.textColor||e.textColor||b("eventTextColor");b=[];l&&b.push("background-color:"+l);d&&b.push("border-color:"+d);a&&b.push("color:"+a);return b.join(";")}function $a(a,b,e){if(m.isFunction(a))a=
[a];if(a){var d,f;for(d=0;d<a.length;d++)f=a[d].apply(b,e)||f;return f}}function Ta(){for(var a=0;a<arguments.length;a++)if(arguments[a]!==oa)return arguments[a]}function mc(a,b){function e(j,t){if(t){hb(j,t);j.setDate(1)}j=N(j,true);j.setDate(1);t=hb(N(j),1);var y=N(j),S=N(t),Q=f("firstDay"),q=f("weekends")?0:1;if(q){Fa(y);Fa(S,-1,true)}ba(y,-((y.getDay()-Math.max(Q,q)+7)%7));ba(S,(7-S.getDay()+Math.max(Q,q))%7);Q=Math.round((S-y)/(Ab*7));if(f("weekMode")=="fixed"){ba(S,(6-Q)*7);Q=6}d.title=l(j,
f("titleFormat"));d.start=j;d.end=t;d.visStart=y;d.visEnd=S;g(6,Q,q?5:7,true)}var d=this;d.render=e;sb.call(d,a,b,"month");var f=d.opt,g=d.renderBasic,l=b.formatDate}function nc(a,b){function e(j,t){t&&ba(j,t*7);j=ba(N(j),-((j.getDay()-f("firstDay")+7)%7));t=ba(N(j),7);var y=N(j),S=N(t),Q=f("weekends");if(!Q){Fa(y);Fa(S,-1,true)}d.title=l(y,ba(N(S),-1),f("titleFormat"));d.start=j;d.end=t;d.visStart=y;d.visEnd=S;g(1,1,Q?7:5,false)}var d=this;d.render=e;sb.call(d,a,b,"basicWeek");var f=d.opt,g=d.renderBasic,
l=b.formatDates}function oc(a,b){function e(j,t){if(t){ba(j,t);f("weekends")||Fa(j,t<0?-1:1)}d.title=l(j,f("titleFormat"));d.start=d.visStart=N(j,true);d.end=d.visEnd=ba(N(d.start),1);g(1,1,1,false)}var d=this;d.render=e;sb.call(d,a,b,"basicDay");var f=d.opt,g=d.renderBasic,l=b.formatDate}function sb(a,b,e){function d(w,I,R,V){v=I;F=R;f();(I=!C)?g(w,V):z();l(I)}function f(){if(k=L("isRTL")){D=-1;Z=F-1}else{D=1;Z=0}ja=L("firstDay");ia=L("weekends")?0:1;la=L("theme")?"ui":"fc";$=L("columnFormat")}function g(w,
I){var R,V=la+"-widget-header",ea=la+"-widget-content",aa;R="<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr>";for(aa=0;aa<F;aa++)R+="<th class='fc- "+V+"'/>";R+="</tr></thead><tbody>";for(aa=0;aa<w;aa++){R+="<tr class='fc-week"+aa+"'>";for(V=0;V<F;V++)R+="<td class='fc- "+ea+" fc-day"+(aa*F+V)+"'><div>"+(I?"<div class='fc-day-number'/>":"")+"<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";R+="</tr>"}R+="</tbody></table>";w=
m(R).appendTo(a);K=w.find("thead");i=K.find("th");C=w.find("tbody");P=C.find("tr");E=C.find("td");B=E.filter(":first-child");n=P.eq(0).find("div.fc-day-content div");ab(K.add(K.find("tr")));ab(P);P.eq(0).addClass("fc-first");y(E);Y=m("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(a)}function l(w){var I=w||v==1,R=p.start.getMonth(),V=Ka(new Date),ea,aa,va;I&&i.each(function(wa,Ga){ea=m(Ga);aa=ca(wa);ea.html(ya(aa,$));rb(ea,aa)});E.each(function(wa,Ga){ea=m(Ga);aa=ca(wa);aa.getMonth()==
R?ea.removeClass("fc-other-month"):ea.addClass("fc-other-month");+aa==+V?ea.addClass(la+"-state-highlight fc-today"):ea.removeClass(la+"-state-highlight fc-today");ea.find("div.fc-day-number").text(aa.getDate());I&&rb(ea,aa)});P.each(function(wa,Ga){va=m(Ga);if(wa<v){va.show();wa==v-1?va.addClass("fc-last"):va.removeClass("fc-last")}else va.hide()})}function j(w){o=w;w=o-K.height();var I,R,V;if(L("weekMode")=="variable")I=R=Math.floor(w/(v==1?2:6));else{I=Math.floor(w/v);R=w-I*(v-1)}B.each(function(ea,
aa){if(ea<v){V=m(aa);Za(V.find("> div"),(ea==v-1?R:I)-Sa(V))}})}function t(w){W=w;M.clear();s=Math.floor(W/F);Va(i.slice(0,-1),s)}function y(w){w.click(S).mousedown(X)}function S(w){if(!L("selectable")){var I=parseInt(this.className.match(/fc\-day(\d+)/)[1]);I=ca(I);c("dayClick",this,I,true,w)}}function Q(w,I,R){R&&r.build();R=N(p.visStart);for(var V=ba(N(R),F),ea=0;ea<v;ea++){var aa=new Date(Math.max(R,w)),va=new Date(Math.min(V,I));if(aa<va){var wa;if(k){wa=Ca(va,R)*D+Z+1;aa=Ca(aa,R)*D+Z+1}else{wa=
Ca(aa,R);aa=Ca(va,R)}y(q(ea,wa,ea,aa-1))}ba(R,7);ba(V,7)}}function q(w,I,R,V){w=r.rect(w,I,R,V,a);return H(w,a)}function u(w){return N(w)}function fa(w,I){Q(w,ba(N(I),1),true)}function na(){T()}function ga(w,I,R){var V=ua(w);c("dayClick",E[V.row*F+V.col],w,I,R)}function ra(w,I){J.start(function(R){T();R&&q(R.row,R.col,R.row,R.col)},I)}function sa(w,I,R){var V=J.stop();T();if(V){V=pa(V);c("drop",w,V,true,I,R)}}function ha(w){return N(w.start)}function da(w){return M.left(w)}function ma(w){return M.right(w)}
function ua(w){return{row:Math.floor(Ca(w,p.visStart)/7),col:ka(w.getDay())}}function pa(w){return U(w.row,w.col)}function U(w,I){return ba(N(p.visStart),w*7+I*D+Z)}function ca(w){return U(Math.floor(w/F),w%F)}function ka(w){return(w-Math.max(ja,ia)+F)%F*D+Z}function qa(w){return P.eq(w)}function G(){return{left:0,right:W}}var p=this;p.renderBasic=d;p.setHeight=j;p.setWidth=t;p.renderDayOverlay=Q;p.defaultSelectionEnd=u;p.renderSelection=fa;p.clearSelection=na;p.reportDayClick=ga;p.dragStart=ra;p.dragStop=
sa;p.defaultEventEnd=ha;p.getHoverListener=function(){return J};p.colContentLeft=da;p.colContentRight=ma;p.dayOfWeekCol=ka;p.dateCell=ua;p.cellDate=pa;p.cellIsAllDay=function(){return true};p.allDayRow=qa;p.allDayBounds=G;p.getRowCnt=function(){return v};p.getColCnt=function(){return F};p.getColWidth=function(){return s};p.getDaySegmentContainer=function(){return Y};Kb.call(p,a,b,e);Lb.call(p);Mb.call(p);pc.call(p);var L=p.opt,c=p.trigger,z=p.clearEvents,H=p.renderOverlay,T=p.clearOverlays,X=p.daySelectionMousedown,
ya=b.formatDate,K,i,C,P,E,B,n,Y,W,o,s,v,F,r,J,M,k,D,Z,ja,ia,la,$;qb(a.addClass("fc-grid"));r=new Nb(function(w,I){var R,V,ea;i.each(function(aa,va){R=m(va);V=R.offset().left;if(aa)ea[1]=V;ea=[V];I[aa]=ea});ea[1]=V+R.outerWidth();P.each(function(aa,va){if(aa<v){R=m(va);V=R.offset().top;if(aa)ea[1]=V;ea=[V];w[aa]=ea}});ea[1]=V+R.outerHeight()});J=new Ob(r);M=new Pb(function(w){return n.eq(w)})}function pc(){function a(U,ca){S(U);ua(e(U),ca)}function b(){Q();ga().empty()}function e(U){var ca=da(),ka=
ma(),qa=N(g.visStart);ka=ba(N(qa),ka);var G=m.map(U,Ua),p,L,c,z,H,T,X=[];for(p=0;p<ca;p++){L=ob(nb(U,G,qa,ka));for(c=0;c<L.length;c++){z=L[c];for(H=0;H<z.length;H++){T=z[H];T.row=p;T.level=c;X.push(T)}}ba(qa,7);ba(ka,7)}return X}function d(U,ca,ka){t(U)&&f(U,ca);ka.isEnd&&y(U)&&pa(U,ca,ka);q(U,ca)}function f(U,ca){var ka=ra(),qa;ca.draggable({zIndex:9,delay:50,opacity:l("dragOpacity"),revertDuration:l("dragRevertDuration"),start:function(G,p){j("eventDragStart",ca,U,G,p);fa(U,ca);ka.start(function(L,
c,z,H){ca.draggable("option","revert",!L||!z&&!H);ha();if(L){qa=z*7+H*(l("isRTL")?-1:1);sa(ba(N(U.start),qa),ba(Ua(U),qa))}else qa=0},G,"drag")},stop:function(G,p){ka.stop();ha();j("eventDragStop",ca,U,G,p);if(qa)na(this,U,qa,0,U.allDay,G,p);else{ca.css("filter","");u(U,ca)}}})}var g=this;g.renderEvents=a;g.compileDaySegs=e;g.clearEvents=b;g.bindDaySeg=d;Qb.call(g);var l=g.opt,j=g.trigger,t=g.isEventDraggable,y=g.isEventResizable,S=g.reportEvents,Q=g.reportEventClear,q=g.eventElementHandlers,u=g.showEvents,
fa=g.hideEvents,na=g.eventDrop,ga=g.getDaySegmentContainer,ra=g.getHoverListener,sa=g.renderDayOverlay,ha=g.clearOverlays,da=g.getRowCnt,ma=g.getColCnt,ua=g.renderDaySegs,pa=g.resizableDayEvent}function qc(a,b){function e(j,t){t&&ba(j,t*7);j=ba(N(j),-((j.getDay()-f("firstDay")+7)%7));t=ba(N(j),7);var y=N(j),S=N(t),Q=f("weekends");if(!Q){Fa(y);Fa(S,-1,true)}d.title=l(y,ba(N(S),-1),f("titleFormat"));d.start=j;d.end=t;d.visStart=y;d.visEnd=S;g(Q?7:5)}var d=this;d.render=e;Rb.call(d,a,b,"agendaWeek");
var f=d.opt,g=d.renderAgenda,l=b.formatDates}function rc(a,b){function e(j,t){if(t){ba(j,t);f("weekends")||Fa(j,t<0?-1:1)}t=N(j,true);var y=ba(N(t),1);d.title=l(j,f("titleFormat"));d.start=d.visStart=t;d.end=d.visEnd=y;g(1)}var d=this;d.render=e;Rb.call(d,a,b,"agendaDay");var f=d.opt,g=d.renderAgenda,l=b.formatDate}function Rb(a,b,e){function d(h){Ba=h;f();v?P():g();l()}function f(){Wa=i("theme")?"ui":"fc";Sb=i("weekends")?0:1;Tb=i("firstDay");if(Ub=i("isRTL")){Ha=-1;Ia=Ba-1}else{Ha=1;Ia=0}La=mb(i("minTime"));
bb=mb(i("maxTime"));Vb=i("columnFormat")}function g(){var h=Wa+"-widget-header",O=Wa+"-widget-content",x,A,ta,za,Da,Ea=i("slotMinutes")%15==0;x="<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'><thead><tr><th class='fc-agenda-axis "+h+"'>&nbsp;</th>";for(A=0;A<Ba;A++)x+="<th class='fc- fc-col"+A+" "+h+"'/>";x+="<th class='fc-agenda-gutter "+h+"'>&nbsp;</th></tr></thead><tbody><tr><th class='fc-agenda-axis "+h+"'>&nbsp;</th>";for(A=0;A<Ba;A++)x+="<td class='fc- fc-col"+
A+" "+O+"'><div><div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";x+="<td class='fc-agenda-gutter "+O+"'>&nbsp;</td></tr></tbody></table>";v=m(x).appendTo(a);F=v.find("thead");r=F.find("th").slice(1,-1);J=v.find("tbody");M=J.find("td").slice(0,-1);k=M.find("div.fc-day-content div");D=M.eq(0);Z=D.find("> div");ab(F.add(F.find("tr")));ab(J.add(J.find("tr")));aa=F.find("th:first");va=v.find(".fc-agenda-gutter");ja=m("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(a);
if(i("allDaySlot")){ia=m("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(ja);x="<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='"+h+" fc-agenda-axis'>"+i("allDayText")+"</th><td><div class='fc-day-content'><div style='position:relative'/></div></td><th class='"+h+" fc-agenda-gutter'>&nbsp;</th></tr></table>";la=m(x).appendTo(ja);$=la.find("tr");q($.find("td"));aa=aa.add(la.find("th:first"));va=va.add(la.find("th.fc-agenda-gutter"));ja.append("<div class='fc-agenda-divider "+
h+"'><div class='fc-agenda-divider-inner'/></div>")}else ia=m([]);w=m("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(ja);I=m("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(w);R=m("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(I);x="<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>";ta=zb();za=xa(N(ta),bb);xa(ta,La);for(A=tb=0;ta<za;A++){Da=ta.getMinutes();x+="<tr class='fc-slot"+A+" "+
(!Da?"":"fc-minor")+"'><th class='fc-agenda-axis "+h+"'>"+(!Ea||!Da?s(ta,i("axisFormat")):"&nbsp;")+"</th><td class='"+O+"'><div style='position:relative'>&nbsp;</div></td></tr>";xa(ta,i("slotMinutes"));tb++}x+="</tbody></table>";V=m(x).appendTo(I);ea=V.find("div:first");u(V.find("td"));aa=aa.add(V.find("th:first"))}function l(){var h,O,x,A,ta=Ka(new Date);for(h=0;h<Ba;h++){A=ua(h);O=r.eq(h);O.html(s(A,Vb));x=M.eq(h);+A==+ta?x.addClass(Wa+"-state-highlight fc-today"):x.removeClass(Wa+"-state-highlight fc-today");
rb(O.add(x),A)}}function j(h,O){if(h===oa)h=Wb;Wb=h;ub={};var x=J.position().top,A=w.position().top;h=Math.min(h-x,V.height()+A+1);Z.height(h-Sa(D));ja.css("top",x);w.height(h-A-1);Xa=ea.height()+1;O&&y()}function t(h){Ga=h;cb.clear();Ma=0;Va(aa.width("").each(function(O,x){Ma=Math.max(Ma,m(x).outerWidth())}),Ma);h=w[0].clientWidth;if(vb=w.width()-h){Va(va,vb);va.show().prev().removeClass("fc-last")}else va.hide().prev().addClass("fc-last");db=Math.floor((h-Ma)/Ba);Va(r.slice(0,-1),db)}function y(){function h(){w.scrollTop(A)}
var O=zb(),x=N(O);x.setHours(i("firstHour"));var A=ca(O,x)+1;h();setTimeout(h,0)}function S(){Xb=w.scrollTop()}function Q(){w.scrollTop(Xb)}function q(h){h.click(fa).mousedown(W)}function u(h){h.click(fa).mousedown(H)}function fa(h){if(!i("selectable")){var O=Math.min(Ba-1,Math.floor((h.pageX-v.offset().left-Ma)/db)),x=ua(O),A=this.parentNode.className.match(/fc-slot(\d+)/);if(A){A=parseInt(A[1])*i("slotMinutes");var ta=Math.floor(A/60);x.setHours(ta);x.setMinutes(A%60+La);C("dayClick",M[O],x,false,
h)}else C("dayClick",M[O],x,true,h)}}function na(h,O,x){x&&Na.build();var A=N(K.visStart);if(Ub){x=Ca(O,A)*Ha+Ia+1;h=Ca(h,A)*Ha+Ia+1}else{x=Ca(h,A);h=Ca(O,A)}x=Math.max(0,x);h=Math.min(Ba,h);x<h&&q(ga(0,x,0,h-1))}function ga(h,O,x,A){h=Na.rect(h,O,x,A,ja);return E(h,ja)}function ra(h,O){for(var x=N(K.visStart),A=ba(N(x),1),ta=0;ta<Ba;ta++){var za=new Date(Math.max(x,h)),Da=new Date(Math.min(A,O));if(za<Da){var Ea=ta*Ha+Ia;Ea=Na.rect(0,Ea,0,Ea,I);za=ca(x,za);Da=ca(x,Da);Ea.top=za;Ea.height=Da-za;u(E(Ea,
I))}ba(x,1);ba(A,1)}}function sa(h){return cb.left(h)}function ha(h){return cb.right(h)}function da(h){return{row:Math.floor(Ca(h,K.visStart)/7),col:U(h.getDay())}}function ma(h){var O=ua(h.col);h=h.row;i("allDaySlot")&&h--;h>=0&&xa(O,La+h*i("slotMinutes"));return O}function ua(h){return ba(N(K.visStart),h*Ha+Ia)}function pa(h){return i("allDaySlot")&&!h.row}function U(h){return(h-Math.max(Tb,Sb)+Ba)%Ba*Ha+Ia}function ca(h,O){h=N(h,true);if(O<xa(N(h),La))return 0;if(O>=xa(N(h),bb))return V.height();
h=i("slotMinutes");O=O.getHours()*60+O.getMinutes()-La;var x=Math.floor(O/h),A=ub[x];if(A===oa)A=ub[x]=V.find("tr:eq("+x+") td div")[0].offsetTop;return Math.max(0,Math.round(A-1+Xa*(O%h/h)))}function ka(){return{left:Ma,right:Ga-vb}}function qa(){return $}function G(h){var O=N(h.start);if(h.allDay)return O;return xa(O,i("defaultEventMinutes"))}function p(h,O){if(O)return N(h);return xa(N(h),i("slotMinutes"))}function L(h,O,x){if(x)i("allDaySlot")&&na(h,ba(N(O),1),true);else c(h,O)}function c(h,O){var x=
i("selectHelper");Na.build();if(x){var A=Ca(h,K.visStart)*Ha+Ia;if(A>=0&&A<Ba){A=Na.rect(0,A,0,A,I);var ta=ca(h,h),za=ca(h,O);if(za>ta){A.top=ta;A.height=za-ta;A.left+=2;A.width-=5;if(m.isFunction(x)){if(h=x(h,O)){A.position="absolute";A.zIndex=8;wa=m(h).css(A).appendTo(I)}}else{A.isStart=true;A.isEnd=true;wa=m(o({title:"",start:h,end:O,className:["fc-select-helper"],editable:false},A));wa.css("opacity",i("dragOpacity"))}if(wa){u(wa);I.append(wa);Va(wa,A.width,true);Eb(wa,A.height,true)}}}}else ra(h,
O)}function z(){B();if(wa){wa.remove();wa=null}}function H(h){if(h.which==1&&i("selectable")){Y(h);var O;Ra.start(function(x,A){z();if(x&&x.col==A.col&&!pa(x)){A=ma(A);x=ma(x);O=[A,xa(N(A),i("slotMinutes")),x,xa(N(x),i("slotMinutes"))].sort(Gb);c(O[0],O[3])}else O=null},h);m(document).one("mouseup",function(x){Ra.stop();if(O){+O[0]==+O[1]&&T(O[0],false,x);n(O[0],O[3],false,x)}})}}function T(h,O,x){C("dayClick",M[U(h.getDay())],h,O,x)}function X(h,O){Ra.start(function(x){B();if(x)if(pa(x))ga(x.row,
x.col,x.row,x.col);else{x=ma(x);var A=xa(N(x),i("defaultEventMinutes"));ra(x,A)}},O)}function ya(h,O,x){var A=Ra.stop();B();A&&C("drop",h,ma(A),pa(A),O,x)}var K=this;K.renderAgenda=d;K.setWidth=t;K.setHeight=j;K.beforeHide=S;K.afterShow=Q;K.defaultEventEnd=G;K.timePosition=ca;K.dayOfWeekCol=U;K.dateCell=da;K.cellDate=ma;K.cellIsAllDay=pa;K.allDayRow=qa;K.allDayBounds=ka;K.getHoverListener=function(){return Ra};K.colContentLeft=sa;K.colContentRight=ha;K.getDaySegmentContainer=function(){return ia};
K.getSlotSegmentContainer=function(){return R};K.getMinMinute=function(){return La};K.getMaxMinute=function(){return bb};K.getBodyContent=function(){return I};K.getRowCnt=function(){return 1};K.getColCnt=function(){return Ba};K.getColWidth=function(){return db};K.getSlotHeight=function(){return Xa};K.defaultSelectionEnd=p;K.renderDayOverlay=na;K.renderSelection=L;K.clearSelection=z;K.reportDayClick=T;K.dragStart=X;K.dragStop=ya;Kb.call(K,a,b,e);Lb.call(K);Mb.call(K);sc.call(K);var i=K.opt,C=K.trigger,
P=K.clearEvents,E=K.renderOverlay,B=K.clearOverlays,n=K.reportSelection,Y=K.unselect,W=K.daySelectionMousedown,o=K.slotSegHtml,s=b.formatDate,v,F,r,J,M,k,D,Z,ja,ia,la,$,w,I,R,V,ea,aa,va,wa,Ga,Wb,Ma,db,vb,Xa,Xb,Ba,tb,Na,Ra,cb,ub={},Wa,Tb,Sb,Ub,Ha,Ia,La,bb,Vb;qb(a.addClass("fc-agenda"));Na=new Nb(function(h,O){function x(eb){return Math.max(Ea,Math.min(tc,eb))}var A,ta,za;r.each(function(eb,uc){A=m(uc);ta=A.offset().left;if(eb)za[1]=ta;za=[ta];O[eb]=za});za[1]=ta+A.outerWidth();if(i("allDaySlot")){A=
$;ta=A.offset().top;h[0]=[ta,ta+A.outerHeight()]}for(var Da=I.offset().top,Ea=w.offset().top,tc=Ea+w.outerHeight(),fb=0;fb<tb;fb++)h.push([x(Da+Xa*fb),x(Da+Xa*(fb+1))])});Ra=new Ob(Na);cb=new Pb(function(h){return k.eq(h)})}function sc(){function a(o,s){sa(o);var v,F=o.length,r=[],J=[];for(v=0;v<F;v++)o[v].allDay?r.push(o[v]):J.push(o[v]);if(u("allDaySlot")){L(e(r),s);ma()}g(d(J),s)}function b(){ha();ua().empty();pa().empty()}function e(o){o=ob(nb(o,m.map(o,Ua),q.visStart,q.visEnd));var s,v=o.length,
F,r,J,M=[];for(s=0;s<v;s++){F=o[s];for(r=0;r<F.length;r++){J=F[r];J.row=0;J.level=s;M.push(J)}}return M}function d(o){var s=z(),v=ka(),F=ca(),r=xa(N(q.visStart),v),J=m.map(o,f),M,k,D,Z,ja,ia,la=[];for(M=0;M<s;M++){k=ob(nb(o,J,r,xa(N(r),F-v)));vc(k);for(D=0;D<k.length;D++){Z=k[D];for(ja=0;ja<Z.length;ja++){ia=Z[ja];ia.col=M;ia.level=D;la.push(ia)}}ba(r,1,true)}return la}function f(o){return o.end?N(o.end):xa(N(o.start),u("defaultEventMinutes"))}function g(o,s){var v,F=o.length,r,J,M,k,D,Z,ja,ia,la,
$="",w,I,R={},V={},ea=pa(),aa;v=z();if(w=u("isRTL")){I=-1;aa=v-1}else{I=1;aa=0}for(v=0;v<F;v++){r=o[v];J=r.event;M=qa(r.start,r.start);k=qa(r.start,r.end);D=r.col;Z=r.level;ja=r.forward||0;ia=G(D*I+aa);la=p(D*I+aa)-ia;la=Math.min(la-6,la*0.95);D=Z?la/(Z+ja+1):ja?(la/(ja+1)-6)*2:la;Z=ia+la/(Z+ja+1)*Z*I+(w?la-D:0);r.top=M;r.left=Z;r.outerWidth=D;r.outerHeight=k-M;$+=l(J,r)}ea[0].innerHTML=$;w=ea.children();for(v=0;v<F;v++){r=o[v];J=r.event;$=m(w[v]);I=fa("eventRender",J,J,$);if(I===false)$.remove();
else{if(I&&I!==true){$.remove();$=m(I).css({position:"absolute",top:r.top,left:r.left}).appendTo(ea)}r.element=$;if(J._id===s)t(J,$,r);else $[0]._fci=v;ya(J,$)}}Db(ea,o,t);for(v=0;v<F;v++){r=o[v];if($=r.element){J=R[s=r.key=Ib($[0])];r.vsides=J===oa?(R[s]=Sa($,true)):J;J=V[s];r.hsides=J===oa?(V[s]=pb($,true)):J;s=$.find("div.fc-event-content");if(s.length)r.contentTop=s[0].offsetTop}}for(v=0;v<F;v++){r=o[v];if($=r.element){$[0].style.width=Math.max(0,r.outerWidth-r.hsides)+"px";R=Math.max(0,r.outerHeight-
r.vsides);$[0].style.height=R+"px";J=r.event;if(r.contentTop!==oa&&R-r.contentTop<10){$.find("div.fc-event-time").text(Y(J.start,u("timeFormat"))+" - "+J.title);$.find("div.fc-event-title").remove()}fa("eventAfterRender",J,J,$)}}}function l(o,s){var v="<",F=o.url,r=Jb(o,u),J=r?" style='"+r+"'":"",M=["fc-event","fc-event-skin","fc-event-vert"];na(o)&&M.push("fc-event-draggable");s.isStart&&M.push("fc-corner-top");s.isEnd&&M.push("fc-corner-bottom");M=M.concat(o.className);if(o.source)M=M.concat(o.source.className||
[]);v+=F?"a href='"+Qa(o.url)+"'":"div";v+=" class='"+M.join(" ")+"' style='position:absolute;z-index:8;top:"+s.top+"px;left:"+s.left+"px;"+r+"'><div class='fc-event-inner fc-event-skin'"+J+"><div class='fc-event-head fc-event-skin'"+J+"><div class='fc-event-time'>"+Qa(W(o.start,o.end,u("timeFormat")))+"</div></div><div class='fc-event-content'><div class='fc-event-title'>"+Qa(o.title)+"</div></div><div class='fc-event-bg'></div></div>";if(s.isEnd&&ga(o))v+="<div class='ui-resizable-handle ui-resizable-s'>=</div>";
v+="</"+(F?"a":"div")+">";return v}function j(o,s,v){na(o)&&y(o,s,v.isStart);v.isEnd&&ga(o)&&c(o,s,v);da(o,s)}function t(o,s,v){var F=s.find("div.fc-event-time");na(o)&&S(o,s,F);v.isEnd&&ga(o)&&Q(o,s,F);da(o,s)}function y(o,s,v){function F(){if(!M){s.width(r).height("").draggable("option","grid",null);M=true}}var r,J,M=true,k,D=u("isRTL")?-1:1,Z=U(),ja=H(),ia=T(),la=ka();s.draggable({zIndex:9,opacity:u("dragOpacity","month"),revertDuration:u("dragRevertDuration"),start:function($,w){fa("eventDragStart",
s,o,$,w);i(o,s);r=s.width();Z.start(function(I,R,V,ea){B();if(I){J=false;k=ea*D;if(I.row)if(v){if(M){s.width(ja-10);Eb(s,ia*Math.round((o.end?(o.end-o.start)/wc:u("defaultEventMinutes"))/u("slotMinutes")));s.draggable("option","grid",[ja,1]);M=false}}else J=true;else{E(ba(N(o.start),k),ba(Ua(o),k));F()}J=J||M&&!k}else{F();J=true}s.draggable("option","revert",J)},$,"drag")},stop:function($,w){Z.stop();B();fa("eventDragStop",s,o,$,w);if(J){F();s.css("filter","");K(o,s)}else{var I=0;M||(I=Math.round((s.offset().top-
X().offset().top)/ia)*u("slotMinutes")+la-(o.start.getHours()*60+o.start.getMinutes()));C(this,o,k,I,M,$,w)}}})}function S(o,s,v){function F(I){var R=xa(N(o.start),I),V;if(o.end)V=xa(N(o.end),I);v.text(W(R,V,u("timeFormat")))}function r(){if(M){v.css("display","");s.draggable("option","grid",[$,w]);M=false}}var J,M=false,k,D,Z,ja=u("isRTL")?-1:1,ia=U(),la=z(),$=H(),w=T();s.draggable({zIndex:9,scroll:false,grid:[$,w],axis:la==1?"y":false,opacity:u("dragOpacity"),revertDuration:u("dragRevertDuration"),
start:function(I,R){fa("eventDragStart",s,o,I,R);i(o,s);J=s.position();D=Z=0;ia.start(function(V,ea,aa,va){s.draggable("option","revert",!V);B();if(V){k=va*ja;if(u("allDaySlot")&&!V.row){if(!M){M=true;v.hide();s.draggable("option","grid",null)}E(ba(N(o.start),k),ba(Ua(o),k))}else r()}},I,"drag")},drag:function(I,R){D=Math.round((R.position.top-J.top)/w)*u("slotMinutes");if(D!=Z){M||F(D);Z=D}},stop:function(I,R){var V=ia.stop();B();fa("eventDragStop",s,o,I,R);if(V&&(k||D||M))C(this,o,k,M?0:D,M,I,R);
else{r();s.css("filter","");s.css(J);F(0);K(o,s)}}})}function Q(o,s,v){var F,r,J=T();s.resizable({handles:{s:"div.ui-resizable-s"},grid:J,start:function(M,k){F=r=0;i(o,s);s.css("z-index",9);fa("eventResizeStart",this,o,M,k)},resize:function(M,k){F=Math.round((Math.max(J,s.height())-k.originalSize.height)/J);if(F!=r){v.text(W(o.start,!F&&!o.end?null:xa(ra(o),u("slotMinutes")*F),u("timeFormat")));r=F}},stop:function(M,k){fa("eventResizeStop",this,o,M,k);if(F)P(this,o,0,u("slotMinutes")*F,M,k);else{s.css("z-index",
8);K(o,s)}}})}var q=this;q.renderEvents=a;q.compileDaySegs=e;q.clearEvents=b;q.slotSegHtml=l;q.bindDaySeg=j;Qb.call(q);var u=q.opt,fa=q.trigger,na=q.isEventDraggable,ga=q.isEventResizable,ra=q.eventEnd,sa=q.reportEvents,ha=q.reportEventClear,da=q.eventElementHandlers,ma=q.setHeight,ua=q.getDaySegmentContainer,pa=q.getSlotSegmentContainer,U=q.getHoverListener,ca=q.getMaxMinute,ka=q.getMinMinute,qa=q.timePosition,G=q.colContentLeft,p=q.colContentRight,L=q.renderDaySegs,c=q.resizableDayEvent,z=q.getColCnt,
H=q.getColWidth,T=q.getSlotHeight,X=q.getBodyContent,ya=q.reportEventElement,K=q.showEvents,i=q.hideEvents,C=q.eventDrop,P=q.eventResize,E=q.renderDayOverlay,B=q.clearOverlays,n=q.calendar,Y=n.formatDate,W=n.formatDates}function vc(a){var b,e,d,f,g,l;for(b=a.length-1;b>0;b--){f=a[b];for(e=0;e<f.length;e++){g=f[e];for(d=0;d<a[b-1].length;d++){l=a[b-1][d];if(Cb(g,l))l.forward=Math.max(l.forward||0,(g.forward||0)+1)}}}}function Kb(a,b,e){function d(G,p){G=qa[G];if(typeof G=="object")return jb(G,p||e);
return G}function f(G,p){return b.trigger.apply(b,[G,p||da].concat(Array.prototype.slice.call(arguments,2),[da]))}function g(G){return j(G)&&!d("disableDragging")}function l(G){return j(G)&&!d("disableResizing")}function j(G){return Ta(G.editable,(G.source||{}).editable,d("editable"))}function t(G){U={};var p,L=G.length,c;for(p=0;p<L;p++){c=G[p];if(U[c._id])U[c._id].push(c);else U[c._id]=[c]}}function y(G){return G.end?N(G.end):ma(G)}function S(G,p){ca.push(p);if(ka[G._id])ka[G._id].push(p);else ka[G._id]=
[p]}function Q(){ca=[];ka={}}function q(G,p){p.click(function(L){if(!p.hasClass("ui-draggable-dragging")&&!p.hasClass("ui-resizable-resizing"))return f("eventClick",this,G,L)}).hover(function(L){f("eventMouseover",this,G,L)},function(L){f("eventMouseout",this,G,L)})}function u(G,p){na(G,p,"show")}function fa(G,p){na(G,p,"hide")}function na(G,p,L){G=ka[G._id];var c,z=G.length;for(c=0;c<z;c++)if(!p||G[c][0]!=p[0])G[c][L]()}function ga(G,p,L,c,z,H,T){var X=p.allDay,ya=p._id;sa(U[ya],L,c,z);f("eventDrop",
G,p,L,c,z,function(){sa(U[ya],-L,-c,X);pa(ya)},H,T);pa(ya)}function ra(G,p,L,c,z,H){var T=p._id;ha(U[T],L,c);f("eventResize",G,p,L,c,function(){ha(U[T],-L,-c);pa(T)},z,H);pa(T)}function sa(G,p,L,c){L=L||0;for(var z,H=G.length,T=0;T<H;T++){z=G[T];if(c!==oa)z.allDay=c;xa(ba(z.start,p,true),L);if(z.end)z.end=xa(ba(z.end,p,true),L);ua(z,qa)}}function ha(G,p,L){L=L||0;for(var c,z=G.length,H=0;H<z;H++){c=G[H];c.end=xa(ba(y(c),p,true),L);ua(c,qa)}}var da=this;da.element=a;da.calendar=b;da.name=e;da.opt=
d;da.trigger=f;da.isEventDraggable=g;da.isEventResizable=l;da.reportEvents=t;da.eventEnd=y;da.reportEventElement=S;da.reportEventClear=Q;da.eventElementHandlers=q;da.showEvents=u;da.hideEvents=fa;da.eventDrop=ga;da.eventResize=ra;var ma=da.defaultEventEnd,ua=b.normalizeEvent,pa=b.reportEventChange,U={},ca=[],ka={},qa=b.options}function Qb(){function a(i,C){var P=z(),E=pa(),B=U(),n=0,Y,W,o=i.length,s,v;P[0].innerHTML=e(i);d(i,P.children());f(i);g(i,P,C);l(i);j(i);t(i);C=y();for(P=0;P<E;P++){Y=[];for(W=
0;W<B;W++)Y[W]=0;for(;n<o&&(s=i[n]).row==P;){W=Hb(Y.slice(s.startCol,s.endCol));s.top=W;W+=s.outerHeight;for(v=s.startCol;v<s.endCol;v++)Y[v]=W;n++}C[P].height(Hb(Y))}Q(i,S(C))}function b(i,C,P){var E=m("<div/>"),B=z(),n=i.length,Y;E[0].innerHTML=e(i);E=E.children();B.append(E);d(i,E);l(i);j(i);t(i);Q(i,S(y()));E=[];for(B=0;B<n;B++)if(Y=i[B].element){i[B].row===C&&Y.css("top",P);E.push(Y[0])}return m(E)}function e(i){var C=fa("isRTL"),P,E=i.length,B,n,Y,W;P=ka();var o=P.left,s=P.right,v,F,r,J,M,k=
"";for(P=0;P<E;P++){B=i[P];n=B.event;W=["fc-event","fc-event-skin","fc-event-hori"];ga(n)&&W.push("fc-event-draggable");if(C){B.isStart&&W.push("fc-corner-right");B.isEnd&&W.push("fc-corner-left");v=p(B.end.getDay()-1);F=p(B.start.getDay());r=B.isEnd?qa(v):o;J=B.isStart?G(F):s}else{B.isStart&&W.push("fc-corner-left");B.isEnd&&W.push("fc-corner-right");v=p(B.start.getDay());F=p(B.end.getDay()-1);r=B.isStart?qa(v):o;J=B.isEnd?G(F):s}W=W.concat(n.className);if(n.source)W=W.concat(n.source.className||
[]);Y=n.url;M=Jb(n,fa);k+=Y?"<a href='"+Qa(Y)+"'":"<div";k+=" class='"+W.join(" ")+"' style='position:absolute;z-index:8;left:"+r+"px;"+M+"'><div class='fc-event-inner fc-event-skin'"+(M?" style='"+M+"'":"")+">";if(!n.allDay&&B.isStart)k+="<span class='fc-event-time'>"+Qa(T(n.start,n.end,fa("timeFormat")))+"</span>";k+="<span class='fc-event-title'>"+Qa(n.title)+"</span></div>";if(B.isEnd&&ra(n))k+="<div class='ui-resizable-handle ui-resizable-"+(C?"w":"e")+"'>&nbsp;&nbsp;&nbsp;</div>";k+="</"+(Y?
"a":"div")+">";B.left=r;B.outerWidth=J-r;B.startCol=v;B.endCol=F+1}return k}function d(i,C){var P,E=i.length,B,n,Y;for(P=0;P<E;P++){B=i[P];n=B.event;Y=m(C[P]);n=na("eventRender",n,n,Y);if(n===false)Y.remove();else{if(n&&n!==true){n=m(n).css({position:"absolute",left:B.left});Y.replaceWith(n);Y=n}B.element=Y}}}function f(i){var C,P=i.length,E,B;for(C=0;C<P;C++){E=i[C];(B=E.element)&&ha(E.event,B)}}function g(i,C,P){var E,B=i.length,n,Y,W;for(E=0;E<B;E++){n=i[E];if(Y=n.element){W=n.event;if(W._id===
P)H(W,Y,n);else Y[0]._fci=E}}Db(C,i,H)}function l(i){var C,P=i.length,E,B,n,Y,W={};for(C=0;C<P;C++){E=i[C];if(B=E.element){n=E.key=Ib(B[0]);Y=W[n];if(Y===oa)Y=W[n]=pb(B,true);E.hsides=Y}}}function j(i){var C,P=i.length,E,B;for(C=0;C<P;C++){E=i[C];if(B=E.element)B[0].style.width=Math.max(0,E.outerWidth-E.hsides)+"px"}}function t(i){var C,P=i.length,E,B,n,Y,W={};for(C=0;C<P;C++){E=i[C];if(B=E.element){n=E.key;Y=W[n];if(Y===oa)Y=W[n]=Fb(B);E.outerHeight=B[0].offsetHeight+Y}}}function y(){var i,C=pa(),
P=[];for(i=0;i<C;i++)P[i]=ca(i).find("td:first div.fc-day-content > div");return P}function S(i){var C,P=i.length,E=[];for(C=0;C<P;C++)E[C]=i[C][0].offsetTop;return E}function Q(i,C){var P,E=i.length,B,n;for(P=0;P<E;P++){B=i[P];if(n=B.element){n[0].style.top=C[B.row]+(B.top||0)+"px";B=B.event;na("eventAfterRender",B,B,n)}}}function q(i,C,P){var E=fa("isRTL"),B=E?"w":"e",n=C.find("div.ui-resizable-"+B),Y=false;qb(C);C.mousedown(function(W){W.preventDefault()}).click(function(W){if(Y){W.preventDefault();
W.stopImmediatePropagation()}});n.mousedown(function(W){function o(ia){na("eventResizeStop",this,i,ia);m("body").css("cursor","");s.stop();ya();k&&ua(this,i,k,0,ia);setTimeout(function(){Y=false},0)}if(W.which==1){Y=true;var s=u.getHoverListener(),v=pa(),F=U(),r=E?-1:1,J=E?F-1:0,M=C.css("top"),k,D,Z=m.extend({},i),ja=L(i.start);K();m("body").css("cursor",B+"-resize").one("mouseup",o);na("eventResizeStart",this,i,W);s.start(function(ia,la){if(ia){var $=Math.max(ja.row,ia.row);ia=ia.col;if(v==1)$=0;
if($==ja.row)ia=E?Math.min(ja.col,ia):Math.max(ja.col,ia);k=$*7+ia*r+J-(la.row*7+la.col*r+J);la=ba(sa(i),k,true);if(k){Z.end=la;$=D;D=b(c([Z]),P.row,M);D.find("*").css("cursor",B+"-resize");$&&$.remove();ma(i)}else if(D){da(i);D.remove();D=null}ya();X(i.start,ba(N(la),1))}},W)}})}var u=this;u.renderDaySegs=a;u.resizableDayEvent=q;var fa=u.opt,na=u.trigger,ga=u.isEventDraggable,ra=u.isEventResizable,sa=u.eventEnd,ha=u.reportEventElement,da=u.showEvents,ma=u.hideEvents,ua=u.eventResize,pa=u.getRowCnt,
U=u.getColCnt,ca=u.allDayRow,ka=u.allDayBounds,qa=u.colContentLeft,G=u.colContentRight,p=u.dayOfWeekCol,L=u.dateCell,c=u.compileDaySegs,z=u.getDaySegmentContainer,H=u.bindDaySeg,T=u.calendar.formatDates,X=u.renderDayOverlay,ya=u.clearOverlays,K=u.clearSelection}function Mb(){function a(Q,q,u){b();q||(q=j(Q,u));t(Q,q,u);e(Q,q,u)}function b(Q){if(S){S=false;y();l("unselect",null,Q)}}function e(Q,q,u,fa){S=true;l("select",null,Q,q,u,fa)}function d(Q){var q=f.cellDate,u=f.cellIsAllDay,fa=f.getHoverListener(),
na=f.reportDayClick;if(Q.which==1&&g("selectable")){b(Q);var ga;fa.start(function(ra,sa){y();if(ra&&u(ra)){ga=[q(sa),q(ra)].sort(Gb);t(ga[0],ga[1],true)}else ga=null},Q);m(document).one("mouseup",function(ra){fa.stop();if(ga){+ga[0]==+ga[1]&&na(ga[0],true,ra);e(ga[0],ga[1],true,ra)}})}}var f=this;f.select=a;f.unselect=b;f.reportSelection=e;f.daySelectionMousedown=d;var g=f.opt,l=f.trigger,j=f.defaultSelectionEnd,t=f.renderSelection,y=f.clearSelection,S=false;g("selectable")&&g("unselectAuto")&&m(document).mousedown(function(Q){var q=
g("unselectCancel");if(q)if(m(Q.target).parents(q).length)return;b(Q)})}function Lb(){function a(g,l){var j=f.shift();j||(j=m("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>"));j[0].parentNode!=l[0]&&j.appendTo(l);d.push(j.css(g).show());return j}function b(){for(var g;g=d.shift();)f.push(g.hide().unbind())}var e=this;e.renderOverlay=a;e.clearOverlays=b;var d=[],f=[]}function Nb(a){var b=this,e,d;b.build=function(){e=[];d=[];a(e,d)};b.cell=function(f,g){var l=e.length,j=d.length,
t,y=-1,S=-1;for(t=0;t<l;t++)if(g>=e[t][0]&&g<e[t][1]){y=t;break}for(t=0;t<j;t++)if(f>=d[t][0]&&f<d[t][1]){S=t;break}return y>=0&&S>=0?{row:y,col:S}:null};b.rect=function(f,g,l,j,t){t=t.offset();return{top:e[f][0]-t.top,left:d[g][0]-t.left,width:d[j][1]-d[g][0],height:e[l][1]-e[f][0]}}}function Ob(a){function b(j){j=a.cell(j.pageX,j.pageY);if(!j!=!l||j&&(j.row!=l.row||j.col!=l.col)){if(j){g||(g=j);f(j,g,j.row-g.row,j.col-g.col)}else f(j,g);l=j}}var e=this,d,f,g,l;e.start=function(j,t,y){f=j;g=l=null;
a.build();b(t);d=y||"mousemove";m(document).bind(d,b)};e.stop=function(){m(document).unbind(d,b);return l}}function Pb(a){function b(l){return d[l]=d[l]||a(l)}var e=this,d={},f={},g={};e.left=function(l){return f[l]=f[l]===oa?b(l).position().left:f[l]};e.right=function(l){return g[l]=g[l]===oa?e.left(l)+b(l).width():g[l]};e.clear=function(){d={};f={};g={}}}var Ya={defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:true,allDayDefault:true,ignoreTimezone:true,
lazyFetching:true,startParam:"start",endParam:"end",titleFormat:{month:"MMMM yyyy",week:"MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",day:"dddd, MMM d, yyyy"},columnFormat:{month:"ddd",week:"ddd M/d",day:"dddd M/d"},timeFormat:{"":"h(:mm)t"},isRTL:false,firstDay:0,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday",
"Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],buttonText:{prev:"&nbsp;&#9668;&nbsp;",next:"&nbsp;&#9658;&nbsp;",prevYear:"&nbsp;&lt;&lt;&nbsp;",nextYear:"&nbsp;&gt;&gt;&nbsp;",today:"today",month:"month",week:"week",day:"day"},theme:false,buttonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e"},unselectAuto:true,dropAccept:"*"},xc={header:{left:"next,prev today",center:"",right:"title"},buttonText:{prev:"&nbsp;&#9658;&nbsp;",next:"&nbsp;&#9668;&nbsp;",
prevYear:"&nbsp;&gt;&gt;&nbsp;",nextYear:"&nbsp;&lt;&lt;&nbsp;"},buttonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w"}},Aa=m.fullCalendar={version:"1.5.2"},Ja=Aa.views={};m.fn.fullCalendar=function(a){if(typeof a=="string"){var b=Array.prototype.slice.call(arguments,1),e;this.each(function(){var f=m.data(this,"fullCalendar");if(f&&m.isFunction(f[a])){f=f[a].apply(f,b);if(e===oa)e=f;a=="destroy"&&m.removeData(this,"fullCalendar")}});if(e!==oa)return e;return this}var d=a.eventSources||[];
delete a.eventSources;if(a.events){d.push(a.events);delete a.events}a=m.extend(true,{},Ya,a.isRTL||a.isRTL===oa&&Ya.isRTL?xc:{},a);this.each(function(f,g){f=m(g);g=new Yb(f,a,d);f.data("fullCalendar",g);g.render()});return this};Aa.sourceNormalizers=[];Aa.sourceFetchers=[];var ac={dataType:"json",cache:false},bc=1;Aa.addDays=ba;Aa.cloneDate=N;Aa.parseDate=kb;Aa.parseISO8601=Bb;Aa.parseTime=mb;Aa.formatDate=Oa;Aa.formatDates=ib;var lc=["sun","mon","tue","wed","thu","fri","sat"],Ab=864E5,cc=36E5,wc=
6E4,dc={s:function(a){return a.getSeconds()},ss:function(a){return Pa(a.getSeconds())},m:function(a){return a.getMinutes()},mm:function(a){return Pa(a.getMinutes())},h:function(a){return a.getHours()%12||12},hh:function(a){return Pa(a.getHours()%12||12)},H:function(a){return a.getHours()},HH:function(a){return Pa(a.getHours())},d:function(a){return a.getDate()},dd:function(a){return Pa(a.getDate())},ddd:function(a,b){return b.dayNamesShort[a.getDay()]},dddd:function(a,b){return b.dayNames[a.getDay()]},
M:function(a){return a.getMonth()+1},MM:function(a){return Pa(a.getMonth()+1)},MMM:function(a,b){return b.monthNamesShort[a.getMonth()]},MMMM:function(a,b){return b.monthNames[a.getMonth()]},yy:function(a){return(a.getFullYear()+"").substring(2)},yyyy:function(a){return a.getFullYear()},t:function(a){return a.getHours()<12?"a":"p"},tt:function(a){return a.getHours()<12?"am":"pm"},T:function(a){return a.getHours()<12?"A":"P"},TT:function(a){return a.getHours()<12?"AM":"PM"},u:function(a){return Oa(a,
"yyyy-MM-dd'T'HH:mm:ss'Z'")},S:function(a){a=a.getDate();if(a>10&&a<20)return"th";return["st","nd","rd"][a%10-1]||"th"}};Aa.applyAll=$a;Ja.month=mc;Ja.basicWeek=nc;Ja.basicDay=oc;wb({weekMode:"fixed"});Ja.agendaWeek=qc;Ja.agendaDay=rc;wb({allDaySlot:true,allDayText:"all-day",firstHour:6,slotMinutes:30,defaultEventMinutes:120,axisFormat:"h(:mm)tt",timeFormat:{agenda:"h:mm{ - h:mm}"},dragOpacity:{agenda:0.5},minTime:0,maxTime:24})})(jQuery);

(function(a){elFinder=function(d,g){var b=this,h;this.log=function(i){window.console&&window.console.log&&window.console.log(i)};this.options=a.extend({},this.options,g||{});if(!this.options.url){alert("Invalid configuration! You have to set URL option.");return}this.id="";if((h=a(d).attr("id"))){this.id=h}else{}this.version="1.2";this.jquery=a.fn.jquery.split(".").join("");this.cwd={};this.cdc={};this.buffer={};this.selected=[];this.history=[];this.locked=false;this.zIndex=2;this.dialog=null;this.anchor=this.options.docked?a("<div/>").hide().insertBefore(d):null;this.params={dotFiles:false,arc:"",uplMaxSize:""};this.vCookie="el-finder-view-"+this.id;this.pCookie="el-finder-places-"+this.id;this.lCookie="el-finder-last-"+this.id;this.view=new this.view(this,d);this.ui=new this.ui(this);this.eventsManager=new this.eventsManager(this);this.quickLook=new this.quickLook(this);this.cookie=function(j,l){if(typeof l=="undefined"){if(document.cookie&&document.cookie!=""){var k,p=document.cookie.split(";");j+="=";for(k=0;k<p.length;k++){p[k]=a.trim(p[k]);if(p[k].substring(0,j.length)==j){return decodeURIComponent(p[k].substring(j.length))}}}return""}else{var n,m=a.extend({},this.options.cookie);if(l===null){l="";m.expires=-1}if(typeof(m.expires)=="number"){n=new Date();n.setTime(n.getTime()+(m.expires*24*60*60*1000));m.expires=n}document.cookie=j+"="+encodeURIComponent(l)+"; expires="+m.expires.toUTCString()+(m.path?"; path="+m.path:"")+(m.domain?"; domain="+m.domain:"")+(m.secure?"; secure":"")}};this.lock=function(i){this.view.spinner((this.locked=i||false));this.eventsManager.lock=this.locked};this.lockShortcuts=function(i){this.eventsManager.lock=!!i};this.setView=function(i){if(i=="list"||i=="icons"){this.options.view=i;this.cookie(this.vCookie,i)}};this.ajax=function(k,l,i){var j={url:this.options.url,async:true,type:"GET",data:k,dataType:"json",cache:false,lock:true,force:false,silent:false};if(typeof(i)=="object"){j=a.extend({},j,i)}if(!j.silent){j.error=b.view.fatal}j.success=function(m){j.lock&&b.lock();if(m){m.debug&&b.log(m.debug);if(m.error){!j.silent&&b.view.error(m.error,m.errorData);if(!j.force){return}}l(m);delete m}};j.lock&&this.lock(true);a.ajax(j)};this.tmb=function(){this.ajax({cmd:"tmb",current:b.cwd.hash},function(k){if(b.options.view=="icons"&&k.images&&k.current==b.cwd.hash){for(var j in k.images){if(b.cdc[j]){b.cdc[j].tmb=k.images[j];a('div[key="'+j+'"]>p',b.view.cwd).css("background",' url("'+k.images[j]+'") 0 0 no-repeat')}}k.tmb&&b.tmb()}},{lock:false,silent:true})};this.getPlaces=function(){var i=[],j=this.cookie(this.pCookie);if(j.length){if(j.indexOf(":")!=-1){i=j.split(":")}else{i.push(j)}}return i};this.addPlace=function(j){var i=this.getPlaces();if(a.inArray(j,i)==-1){i.push(j);this.savePlaces(i);return true}};this.removePlace=function(j){var i=this.getPlaces();if(a.inArray(j,i)!=-1){this.savePlaces(a.map(i,function(k){return k==j?null:k}));return true}};this.savePlaces=function(i){this.cookie(this.pCookie,i.join(":"))};this.reload=function(m){var k;this.cwd=m.cwd;this.cdc={};for(k=0;k<m.cdc.length;k++){if(m.cdc[k].hash&&m.cdc[k].name){this.cdc[m.cdc[k].hash]=m.cdc[k];this.cwd.size+=m.cdc[k].size}}if(m.tree){this.view.renderNav(m.tree);this.eventsManager.updateNav()}this.updateCwd();if(m.tmb&&!b.locked&&b.options.view=="icons"){b.tmb()}if(m.select&&m.select.length){var j=m.select.length;while(j--){this.cdc[m.select[j]]&&this.selectById(m.select[j])}}this.lastDir(this.cwd.hash);if(this.options.autoReload>0){this.iID&&clearInterval(this.iID);this.iID=setInterval(function(){!b.locked&&b.ui.exec("reload")},this.options.autoReload*60000)}};this.updateCwd=function(){this.lockShortcuts(true);this.selected=[];this.view.renderCwd();this.eventsManager.updateCwd();this.view.tree.find('a[key="'+this.cwd.hash+'"]').trigger("select");this.lockShortcuts()};this.drop=function(l,j,k){if(j.helper.find('[key="'+k+'"]').length){return b.view.error("Unable to copy into itself")}var i=[];j.helper.find('div:not(.noaccess):has(>label):not(:has(em[class="readonly"],em[class=""]))').each(function(){i.push(a(this).hide().attr("key"))});if(!j.helper.find("div:has(>label):visible").length){j.helper.hide()}if(i.length){b.setBuffer(i,l.shiftKey?0:1,k);if(b.buffer.files){setTimeout(function(){b.ui.exec("paste");b.buffer={}},300)}}else{a(this).removeClass("el-finder-droppable")}};this.getSelected=function(j){var k,l=[];if(j>=0){return this.cdc[this.selected[j]]||{}}for(k=0;k<this.selected.length;k++){this.cdc[this.selected[k]]&&l.push(this.cdc[this.selected[k]])}return l};this.select=function(i,j){j&&a(".ui-selected",b.view.cwd).removeClass("ui-selected");i.addClass("ui-selected");b.updateSelect()};this.selectById=function(j){var i=a('[key="'+j+'"]',this.view.cwd);if(i.length){this.select(i);this.checkSelectedPos()}};this.unselect=function(i){i.removeClass("ui-selected");b.updateSelect()};this.toggleSelect=function(i){i.toggleClass("ui-selected");this.updateSelect()};this.selectAll=function(){a("[key]",b.view.cwd).addClass("ui-selected");b.updateSelect()};this.unselectAll=function(){a(".ui-selected",b.view.cwd).removeClass("ui-selected");b.updateSelect()};this.updateSelect=function(){b.selected=[];a(".ui-selected",b.view.cwd).each(function(){b.selected.push(a(this).attr("key"))});b.view.selectedInfo();b.ui.update();b.quickLook.update()};this.checkSelectedPos=function(k){var j=b.view.cwd.find(".ui-selected:"+(k?"last":"first")).eq(0),l=j.position(),i=j.outerHeight(),m=b.view.cwd.height();if(l.top<0){b.view.cwd.scrollTop(l.top+b.view.cwd.scrollTop()-2)}else{if(m-l.top<i){b.view.cwd.scrollTop(l.top+i-m+b.view.cwd.scrollTop())}}};this.setBuffer=function(k,m,o){var j,n,l;this.buffer={src:this.cwd.hash,dst:o,files:[],names:[],cut:m||0};for(j=0;j<k.length;j++){n=k[j];l=this.cdc[n];if(l&&l.read&&l.type!="link"){this.buffer.files.push(l.hash);this.buffer.names.push(l.name)}}if(!this.buffer.files.length){this.buffer={}}};this.isValidName=function(i){if(!this.cwd.dotFiles&&i.indexOf(".")==0){return false}return i.match(/^[^\\\/\<\>:]+$/)};this.fileExists=function(k){for(var j in this.cdc){if(this.cdc[j].name==k){return j}}return false};this.uniqueName=function(m,l){m=b.i18n(m);var j=m,k=0,l=l||"";if(!this.fileExists(j+l)){return j+l}while(k++<100){if(!this.fileExists(j+k+l)){return j+k+l}}return j.replace("100","")+Math.random()+l};this.lastDir=function(i){if(this.options.rememberLastDir){return i?this.cookie(this.lCookie,i):this.cookie(this.lCookie)}};function c(i,j){i&&b.view.win.width(i);j&&b.view.nav.add(b.view.cwd).height(j)}function e(){c(null,b.dialog.height()-b.view.tlb.parent().height()-(a.browser.msie?47:32))}this.time=function(){return new Date().getMilliseconds()};this.setView(this.cookie(this.vCookie));c(b.options.width,b.options.height);if(this.options.dialog||this.options.docked){this.options.dialog=a.extend({width:570,dialogClass:"",minWidth:480,minHeight:330},this.options.dialog||{});this.options.dialog.open=function(){setTimeout(function(){a('<input type="text" value="f"/>').appendTo(b.view.win).focus().select().remove()},200)};this.options.dialog.dialogClass+="el-finder-dialog";this.options.dialog.resize=e;if(this.options.docked){this.options.dialog.close=function(){b.dock()};this.view.win.data("size",{width:this.view.win.width(),height:this.view.nav.height()})}else{this.options.dialog.close=function(){b.destroy()};this.dialog=a("<div/>").append(this.view.win).dialog(this.options.dialog)}}this.ajax({cmd:"open",target:this.lastDir()||"",init:true,tree:true},function(i){if(i.cwd){b.eventsManager.init();b.reload(i);a.extend(b.params,i.params||{});a("*",document.body).each(function(){var j=parseInt(a(this).css("z-index"));if(j>=b.zIndex){b.zIndex=j+1}});b.ui.init(i.disabled)}},{force:true});this.open=function(){this.dialog?this.dialog.dialog("open"):this.view.win.show();this.eventsManager.lock=false};this.close=function(){this.quickLook.hide();if(this.options.docked&&this.view.win.attr("undocked")){this.dock()}else{this.dialog?this.dialog.dialog("close"):this.view.win.hide()}this.eventsManager.lock=true};this.destroy=function(){this.eventsManager.lock=true;this.quickLook.hide();this.quickLook.win.remove();if(this.dialog){this.dialog.dialog("destroy");this.view.win.parent().remove()}else{this.view.win.remove()}this.ui.menu.remove()};this.dock=function(){if(this.options.docked&&this.view.win.attr("undocked")){this.quickLook.hide();var i=this.view.win.data("size");this.view.win.insertAfter(this.anchor).removeAttr("undocked");c(i.width,i.height);this.dialog.dialog("destroy");this.dialog=null}};this.undock=function(){if(this.options.docked&&!this.view.win.attr("undocked")){this.quickLook.hide();this.dialog=a("<div/>").append(this.view.win.css("width","100%").attr("undocked",true).show()).dialog(this.options.dialog);e()}}};elFinder.prototype.i18n=function(b){return this.options.i18n[this.options.lang]&&this.options.i18n[this.options.lang][b]?this.options.i18n[this.options.lang][b]:b};elFinder.prototype.options={url:"",lang:"en",cssClass:"",wrap:14,places:"Places",placesFirst:true,editorCallback:null,cutURL:"",closeOnEditorCallback:true,i18n:{},view:"icons",width:"",height:"",disableShortcuts:false,rememberLastDir:true,cookie:{expires:30,domain:"",path:"/",secure:false},toolbar:[["back","reload"],["select","open"],["mkdir","mkfile","upload"],["copy","paste","rm"],["rename","edit"],["info","quicklook","resize"],["icons","list"],["help"]],contextmenu:{cwd:["reload","delim","mkdir","mkfile","upload","delim","paste","delim","info"],file:["select","open","quicklook","delim","copy","cut","rm","delim","duplicate","rename","edit","resize","archive","extract","delim","info"],group:["select","copy","cut","rm","delim","archive","extract","delim","info"]},dialog:null,docked:false,autoReload:0,selectMultiple:false};a.fn.elfinder=function(b){return this.each(function(){var c=typeof(b)=="string"?b:"";if(!this.elfinder){this.elfinder=new elFinder(this,typeof(b)=="object"?b:{})}switch(c){case"close":case"hide":this.elfinder.close();break;case"open":case"show":this.elfinder.open();break;case"dock":this.elfinder.dock();break;case"undock":this.elfinder.undock();break;case"destroy":this.elfinder.destroy();break}})}})(jQuery);(function(a){elFinder.prototype.view=function(d,c){var b=this;this.fm=d;this.kinds={unknown:"Unknown",directory:"Folder",symlink:"Alias","symlink-broken":"Broken alias","application/x-empty":"Plain text","application/postscript":"Postscript document","application/octet-stream":"Application","application/vnd.ms-office":"Microsoft Office document","application/vnd.ms-word":"Microsoft Word document","application/vnd.ms-excel":"Microsoft Excel document","application/vnd.ms-powerpoint":"Microsoft Powerpoint presentation","application/pdf":"Portable Document Format (PDF)","application/vnd.oasis.opendocument.text":"Open Office document","application/x-shockwave-flash":"Flash application","application/xml":"XML document","application/x-bittorrent":"Bittorrent file","application/x-7z-compressed":"7z archive","application/x-tar":"TAR archive","application/x-gzip":"GZIP archive","application/x-bzip2":"BZIP archive","application/zip":"ZIP archive","application/x-rar":"RAR archive","application/javascript":"Javascript application","text/plain":"Plain text","text/x-php":"PHP source","text/html":"HTML document","text/javascript":"Javascript source","text/css":"CSS style sheet","text/rtf":"Rich Text Format (RTF)","text/rtfd":"RTF with attachments (RTFD)","text/x-c":"C source","text/x-c++":"C++ source","text/x-shellscript":"Unix shell script","text/x-python":"Python source","text/x-java":"Java source","text/x-ruby":"Ruby source","text/x-perl":"Perl script","text/xml":"XML document","image/x-ms-bmp":"BMP image","image/jpeg":"JPEG image","image/gif":"GIF Image","image/png":"PNG image","image/x-targa":"TGA image","image/tiff":"TIFF image","image/vnd.adobe.photoshop":"Adobe Photoshop image","audio/mpeg":"MPEG audio","audio/midi":"MIDI audio","audio/ogg":"Ogg Vorbis audio","audio/mp4":"MP4 audio","audio/wav":"WAV audio","video/x-dv":"DV video","video/mp4":"MP4 video","video/mpeg":"MPEG video","video/x-msvideo":"AVI video","video/quicktime":"Quicktime video","video/x-ms-wmv":"WM video","video/x-flv":"Flash video","video/x-matroska":"Matroska video"};this.tlb=a("<ul />");this.nav=a('<div class="el-finder-nav"/>').resizable({handles:"e",autoHide:true,minWidth:200,maxWidth:500});this.cwd=a('<div class="el-finder-cwd"/>').attr("unselectable","on");this.spn=a('<div class="el-finder-spinner"/>');this.err=a('<p class="el-finder-err"><strong/></p>').click(function(){a(this).hide()});this.nfo=a('<div class="el-finder-stat"/>');this.pth=a('<div class="el-finder-path"/>');this.sel=a('<div class="el-finder-sel"/>');this.stb=a('<div class="el-finder-statusbar"/>').append(this.pth).append(this.nfo).append(this.sel);this.wrz=a('<div class="el-finder-workzone" />').append(this.nav).append(this.cwd).append(this.spn).append(this.err).append('<div style="clear:both" />');this.win=a(c).empty().attr("id",this.fm.id).addClass("el-finder "+(d.options.cssClass||"")).append(a('<div class="el-finder-toolbar" />').append(this.tlb)).append(this.wrz).append(this.stb);this.tree=a('<ul class="el-finder-tree"></ul>').appendTo(this.nav);this.plc=a('<ul class="el-finder-places"><li><a href="#" class="el-finder-places-root"><div/>'+this.fm.i18n(this.fm.options.places)+"</a><ul/></li></ul>").hide();this.nav[this.fm.options.placesFirst?"prepend":"append"](this.plc);this.spinner=function(e){this.win.toggleClass("el-finder-disabled",e);this.spn.toggle(e)};this.fatal=function(e){b.error(e.status!="404"?"Invalid backend configuration":"Unable to connect to backend")};this.error=function(e,g){this.fm.lock();this.err.show().children("strong").html(this.fm.i18n(e)+"!"+this.formatErrorData(g));setTimeout(function(){b.err.fadeOut("slow")},4000)};this.renderNav=function(g){var i=g.dirs.length?h(g.dirs):"",e='<li><a href="#" class="el-finder-tree-root" key="'+g.hash+'"><div'+(i?' class="collapsed expanded"':"")+"/>"+g.name+"</a>"+i+"</li>";this.tree.html(e);this.fm.options.places&&this.renderPlaces();function h(j){var l,m,n,k='<ul style="display:none">';for(l=0;l<j.length;l++){if(!j[l].name||!j[l].hash){continue}n="";if(!j[l].read&&!j[l].write){n="noaccess"}else{if(!j[l].read){n="dropbox"}else{if(!j[l].write){n="readonly"}}}k+='<li><a href="#" class="'+n+'" key="'+j[l].hash+'"><div'+(j[l].dirs.length?' class="collapsed"':"")+"/>"+j[l].name+"</a>";if(j[l].dirs.length){k+=h(j[l].dirs)}k+="</li>"}return k+"</ul>"}};this.renderPlaces=function(){var g,j,h=this.fm.getPlaces(),e=this.plc.show().find("ul").empty().hide();a("div:first",this.plc).removeClass("collapsed expanded");if(h.length){h.sort(function(k,i){var m=b.tree.find('a[key="'+k+'"]').text()||"",l=b.tree.find('a[key="'+i+'"]').text()||"";return m.localeCompare(l)});for(g=0;g<h.length;g++){if((j=this.tree.find('a[key="'+h[g]+'"]:not(.dropbox)').parent())&&j.length){e.append(j.clone().children("ul").remove().end().find("div").removeClass("collapsed expanded").end())}else{this.fm.removePlace(h[g])}}e.children().length&&a("div:first",this.plc).addClass("collapsed")}};this.renderCwd=function(){this.cwd.empty();var e=0,h=0,g="";for(var i in this.fm.cdc){e++;h+=this.fm.cdc[i].size;g+=this.fm.options.view=="icons"?this.renderIcon(this.fm.cdc[i]):this.renderRow(this.fm.cdc[i],e%2)}if(this.fm.options.view=="icons"){this.cwd.append(g)}else{this.cwd.append('<table><tr><th colspan="2">'+this.fm.i18n("Name")+"</th><th>"+this.fm.i18n("Permissions")+"</th><th>"+this.fm.i18n("Modified")+'</th><th class="size">'+this.fm.i18n("Size")+"</th><th>"+this.fm.i18n("Kind")+"</th></tr>"+g+"</table>")}this.pth.text(d.cwd.rel);this.nfo.text(d.i18n("items")+": "+e+", "+this.formatSize(h));this.sel.empty()};this.renderIcon=function(e){var g="<p"+(e.tmb?" style=\"background:url('"+e.tmb+"') 0 0 no-repeat\"":"")+"/><label>"+this.formatName(e.name)+"</label>";if(e.link||e.mime=="symlink-broken"){g+="<em/>"}if(!e.read&&!e.write){g+='<em class="noaccess"/>'}else{if(e.read&&!e.write){g+='<em class="readonly"/>'}else{if(!e.read&&e.write){g+='<em class="'+(e.mime=="directory"?"dropbox":"noread")+'" />'}}}return'<div class="'+this.mime2class(e.mime)+'" key="'+e.hash+'">'+g+"</div>"};this.renderRow=function(g,e){var h=g.link||g.mime=="symlink-broken"?"<em/>":"";if(!g.read&&!g.write){h+='<em class="noaccess"/>'}else{if(g.read&&!g.write){h+='<em class="readonly"/>'}else{if(!g.read&&g.write){h+='<em class="'+(g.mime=="directory"?"dropbox":"noread")+'" />'}}}return'<tr key="'+g.hash+'" class="'+b.mime2class(g.mime)+(e?" el-finder-row-odd":"")+'"><td class="icon"><p>'+h+"</p></td><td>"+g.name+"</td><td>"+b.formatPermissions(g.read,g.write,g.rm)+"</td><td>"+b.formatDate(g.date)+'</td><td class="size">'+b.formatSize(g.size)+"</td><td>"+b.mime2kind(g.link?"symlink":g.mime)+"</td></tr>"};this.updateFile=function(g){var h=this.cwd.find('[key="'+g.hash+'"]');h.replaceWith(h[0].nodeName=="DIV"?this.renderIcon(g):this.renderRow(g))};this.selectedInfo=function(){var e,g=0,h;if(b.fm.selected.length){h=this.fm.getSelected();for(e=0;e<h.length;e++){g+=h[e].size}}this.sel.text(e>0?this.fm.i18n("selected items")+": "+h.length+", "+this.formatSize(g):"")};this.formatName=function(g){var e=b.fm.options.wrap;if(e>0){if(g.length>e*2){return g.substr(0,e)+"&shy;"+g.substr(e,e-5)+"&hellip;"+g.substr(g.length-3)}else{if(g.length>e){return g.substr(0,e)+"&shy;"+g.substr(e)}}}return g};this.formatErrorData=function(h){var e,g="";if(typeof(h)=="object"){g="<br />";for(e in h){g+=e+" "+b.fm.i18n(h[e])+"<br />"}}return g};this.mime2class=function(e){return e.replace("/"," ").replace(/\./g,"-")};this.formatDate=function(e){return e.replace(/([a-z]+)\s/i,function(h,g){return b.fm.i18n(g)+" "})};this.formatSize=function(g){var h=1,e="bytes";if(g>1073741824){h=1073741824;e="Gb"}else{if(g>1048576){h=1048576;e="Mb"}else{if(g>1024){h=1024;e="Kb"}}}return Math.round(g/h)+" "+e};this.formatPermissions=function(g,e,i){var h=[];g&&h.push(b.fm.i18n("read"));e&&h.push(b.fm.i18n("write"));i&&h.push(b.fm.i18n("remove"));return h.join("/")};this.mime2kind=function(e){return this.fm.i18n(this.kinds[e]||"unknown")}}})(jQuery);(function(a){elFinder.prototype.ui=function(c){var b=this;this.fm=c;this.cmd={};this.buttons={};this.menu=a('<div class="el-finder-contextmenu" />').appendTo(document.body).hide();this.dockButton=a('<div class="el-finder-dock-button" title="'+b.fm.i18n("Dock/undock filemanager window")+'" />');this.exec=function(e,d){if(this.cmd[e]){if(e!="open"&&!this.cmd[e].isAllowed()){return this.fm.view.error("Command not allowed")}if(!this.fm.locked){this.fm.quickLook.hide();a(".el-finder-info").remove();this.cmd[e].exec(d);this.update()}}};this.cmdName=function(d){if(this.cmd[d]&&this.cmd[d].name){return d=="archive"&&this.fm.params.archives.length==1?this.fm.i18n("Create")+" "+this.fm.view.mime2kind(this.fm.params.archives[0]).toLowerCase():this.fm.i18n(this.cmd[d].name)}return d};this.isCmdAllowed=function(d){return b.cmd[d]&&b.cmd[d].isAllowed()};this.execIfAllowed=function(d){this.isCmdAllowed(d)&&this.exec(d)};this.includeInCm=function(e,d){return this.isCmdAllowed(e)&&this.cmd[e].cm(d)};this.showMenu=function(i){var g,h,d,k="";this.hideMenu();if(!b.fm.selected.length){g="cwd"}else{if(b.fm.selected.length==1){g="file"}else{g="group"}}j(g);h=a(window);d={height:h.height(),width:h.width(),sT:h.scrollTop(),cW:this.menu.width(),cH:this.menu.height()};this.menu.css({left:((i.clientX+d.cW)>d.width?(i.clientX-d.cW):i.clientX),top:((i.clientY+d.cH)>d.height&&i.clientY>d.cH?(i.clientY+d.sT-d.cH):i.clientY+d.sT)}).show().find("div[name]").hover(function(){var l=a(this),m=l.children("div"),e;l.addClass("hover");if(m.length){if(!m.attr("pos")){e=l.outerWidth();m.css(a(window).width()-e-l.offset().left>m.width()?"left":"right",e-5).attr("pos",true)}m.show()}},function(){a(this).removeClass("hover").children("div").hide()}).click(function(m){m.stopPropagation();var l=a(this);if(!l.children("div").length){b.hideMenu();b.exec(l.attr("name"),l.attr("argc"))}});function j(q){var p,n,m,o,e,r=b.fm.options.contextmenu[q]||[];for(p=0;p<r.length;p++){if(r[p]=="delim"){b.menu.children().length&&!b.menu.children(":last").hasClass("delim")&&b.menu.append('<div class="delim" />')}else{if(b.fm.ui.includeInCm(r[p],q)){m=b.cmd[r[p]].argc();o="";if(m.length){o='<span/><div class="el-finder-contextmenu-sub" style="z-index:'+(parseInt(b.menu.css("z-index"))+1)+'">';for(var n=0;n<m.length;n++){o+='<div name="'+r[p]+'" argc="'+m[n].argc+'" class="'+m[n]["class"]+'">'+m[n].text+"</div>"}o+="</div>"}b.menu.append('<div class="'+r[p]+'" name="'+r[p]+'">'+o+b.cmdName(r[p])+"</div>")}}}}};this.hideMenu=function(){this.menu.hide().empty()};this.update=function(){for(var d in this.buttons){this.buttons[d].toggleClass("disabled",!this.cmd[d].isAllowed())}};this.init=function(k){var h,d,o,m=false,g=2,l,e=this.fm.options.toolbar;if(!this.fm.options.editorCallback){k.push("select")}if(!this.fm.params.archives.length&&a.inArray("archive",k)==-1){k.push("archive")}for(h in this.commands){if(a.inArray(h,k)==-1){this.commands[h].prototype=this.command.prototype;this.cmd[h]=new this.commands[h](this.fm)}}for(h=0;h<e.length;h++){if(m){this.fm.view.tlb.append('<li class="delim" />')}m=false;for(d=0;d<e[h].length;d++){o=e[h][d];if(this.cmd[o]){m=true;this.buttons[o]=a('<li class="'+o+'" title="'+this.cmdName(o)+'" name="'+o+'" />').appendTo(this.fm.view.tlb).click(function(i){i.stopPropagation()}).bind("click",(function(i){return function(){!a(this).hasClass("disabled")&&i.exec(a(this).attr("name"))}})(this)).hover(function(){!a(this).hasClass("disabled")&&a(this).addClass("el-finder-tb-hover")},function(){a(this).removeClass("el-finder-tb-hover")})}}}this.update();this.menu.css("z-index",this.fm.zIndex);if(this.fm.options.docked){this.dockButton.hover(function(){a(this).addClass("el-finder-dock-button-hover")},function(){a(this).removeClass("el-finder-dock-button-hover")}).click(function(){b.fm.view.win.attr("undocked")?b.fm.dock():b.fm.undock();a(this).trigger("mouseout")}).prependTo(this.fm.view.tlb)}}};elFinder.prototype.ui.prototype.command=function(b){};elFinder.prototype.ui.prototype.command.prototype.isAllowed=function(){return true};elFinder.prototype.ui.prototype.command.prototype.cm=function(b){return false};elFinder.prototype.ui.prototype.command.prototype.argc=function(b){return[]};elFinder.prototype.ui.prototype.commands={back:function(c){var b=this;this.name="Back";this.fm=c;this.exec=function(){if(this.fm.history.length){this.fm.ajax({cmd:"open",target:this.fm.history.pop()},function(d){b.fm.reload(d)})}};this.isAllowed=function(){return this.fm.history.length}},reload:function(c){var b=this;this.name="Reload";this.fm=c;this.exec=function(){this.fm.ajax({cmd:"open",target:this.fm.cwd.hash,tree:true},function(d){b.fm.reload(d)})};this.cm=function(d){return d=="cwd"}},open:function(c){var b=this;this.name="Open";this.fm=c;this.exec=function(e){var g=null;if(e){g={hash:a(e).attr("key"),mime:"directory",read:!a(e).hasClass("noaccess")&&!a(e).hasClass("dropbox")}}else{g=this.fm.getSelected(0)}if(!g.hash){return}if(!g.read){return this.fm.view.error("Access denied")}if(g.type=="link"&&!g.link){return this.fm.view.error("Unable to open broken link")}if(g.mime=="directory"){h(g.link||g.hash)}else{d(g)}function h(i){b.fm.history.push(b.fm.cwd.hash);b.fm.ajax({cmd:"open",target:i},function(j){b.fm.reload(j)})}function d(k){var j,i="";if(k.dim){j=k.dim.split("x");i="width="+(parseInt(j[0])+20)+",height="+(parseInt(j[1])+20)+","}window.open(k.url||b.fm.options.url+"?cmd=open&current="+(k.parent||b.fm.cwd.hash)+"&target="+(k.link||k.hash),false,"top=50,left=50,"+i+"scrollbars=yes,resizable=yes")}};this.isAllowed=function(){return this.fm.selected.length==1&&this.fm.getSelected(0).read};this.cm=function(d){return d=="file"}},select:function(b){this.name="Select file";this.fm=b;if(b.options.selectMultiple){this.exec=function(){var c=a(b.getSelected()).map(function(){return b.options.cutURL=="root"?this.url.substr(b.params.url.length):this.url.replace(new RegExp("^("+b.options.cutURL+")"),"")});b.options.editorCallback(c);if(b.options.closeOnEditorCallback){b.dock();b.close()}}}else{this.exec=function(){var c=this.fm.getSelected(0);if(!c.url){return this.fm.view.error("File URL disabled by connector config")}this.fm.options.editorCallback(this.fm.options.cutURL=="root"?c.url.substr(this.fm.params.url.length):c.url.replace(new RegExp("^("+this.fm.options.cutURL+")"),""));if(this.fm.options.closeOnEditorCallback){this.fm.dock();this.fm.close();this.fm.destroy()}}}this.isAllowed=function(){return((this.fm.options.selectMultiple&&this.fm.selected.length>=1)||this.fm.selected.length==1)&&!/(symlink\-broken|directory)/.test(this.fm.getSelected(0).mime)};this.cm=function(c){return c!="cwd"}},quicklook:function(c){var b=this;this.name="Preview with Quick Look";this.fm=c;this.exec=function(){b.fm.quickLook.toggle()};this.isAllowed=function(){return this.fm.selected.length==1};this.cm=function(){return true}},info:function(c){var b=this;this.name="Get info";this.fm=c;this.exec=function(){var j,i,e=this.fm.selected.length,d=a(window).width(),g=a(window).height();this.fm.lockShortcuts(true);if(!e){k(b.fm.cwd)}else{a.each(this.fm.getSelected(),function(){k(this)})}function k(m){var n=["50%","50%"],h,q,o,l='<table cellspacing="0"><tr><td>'+b.fm.i18n("Name")+"</td><td>"+m.name+"</td></tr><tr><td>"+b.fm.i18n("Kind")+"</td><td>"+b.fm.view.mime2kind(m.link?"symlink":m.mime)+"</td></tr><tr><td>"+b.fm.i18n("Size")+"</td><td>"+b.fm.view.formatSize(m.size)+"</td></tr><tr><td>"+b.fm.i18n("Modified")+"</td><td>"+b.fm.view.formatDate(m.date)+"</td></tr><tr><td>"+b.fm.i18n("Permissions")+"</td><td>"+b.fm.view.formatPermissions(m.read,m.write,m.rm)+"</td></tr>";if(m.link){l+="<tr><td>"+b.fm.i18n("Link to")+"</td><td>"+m.linkTo+"</td></tr>"}if(m.dim){l+="<tr><td>"+b.fm.i18n("Dimensions")+"</td><td>"+m.dim+" px.</td></tr>"}if(m.url){l+="<tr><td>"+b.fm.i18n("URL")+'</td><td><a href="'+m.url+'" target="_blank">'+m.url+"</a></td></tr>"}if(e>1){o=a(".el-finder-dialog-info:last");if(!o.length){h=Math.round(((d-350)/2)-(e*10));q=Math.round(((g-300)/2)-(e*10));n=[h>20?h:20,q>20?q:20]}else{h=o.offset().left+10;q=o.offset().top+10;n=[h<d-350?h:20,q<g-300?q:20]}}a("<div />").append(l+"</table>").dialog({dialogClass:"el-finder-dialog el-finder-dialog-info",width:390,position:n,title:b.fm.i18n(m.mime=="directory"?"Folder info":"File info"),close:function(){if(--e<=0){b.fm.lockShortcuts()}a(this).dialog("destroy")},buttons:{Ok:function(){a(this).dialog("close")}}})}};this.cm=function(d){return true}},rename:function(c){var b=this;this.name="Rename";this.fm=c;this.exec=function(){var i=this.fm.getSelected(),h,l,e,j,k;if(i.length==1){j=i[0];h=this.fm.view.cwd.find('[key="'+j.hash+'"]');l=this.fm.options.view=="icons"?h.children("label"):h.find("td").eq(1);k=l.html();e=a('<input type="text" />').val(j.name).appendTo(l.empty()).bind("change blur",d).keydown(function(m){m.stopPropagation();if(m.keyCode==27){g()}else{if(m.keyCode==13){if(j.name==e.val()){g()}else{a(this).trigger("change")}}}}).click(function(m){m.stopPropagation()}).select().focus();this.fm.lockShortcuts(true)}function g(){l.html(k);b.fm.lockShortcuts()}function d(){if(!b.fm.locked){var n,m=e.val();if(j.name==e.val()){return g()}if(!b.fm.isValidName(m)){n="Invalid name"}else{if(b.fm.fileExists(m)){n="File or folder with the same name already exists"}}if(n){b.fm.view.error(n);h.addClass("ui-selected");b.fm.lockShortcuts(true);return e.select().focus()}b.fm.ajax({cmd:"rename",current:b.fm.cwd.hash,target:j.hash,name:m},function(o){if(o.error){g()}else{j.mime=="directory"&&b.fm.removePlace(j.hash)&&b.fm.addPlace(o.target);b.fm.reload(o)}},{force:true})}}};this.isAllowed=function(){return this.fm.cwd.write&&this.fm.getSelected(0).write};this.cm=function(d){return d=="file"}},copy:function(b){this.name="Copy";this.fm=b;this.exec=function(){this.fm.setBuffer(this.fm.selected)};this.isAllowed=function(){if(this.fm.selected.length){var d=this.fm.getSelected(),c=d.length;while(c--){if(d[c].read){return true}}}return false};this.cm=function(c){return c!="cwd"}},cut:function(b){this.name="Cut";this.fm=b;this.exec=function(){this.fm.setBuffer(this.fm.selected,1)};this.isAllowed=function(){if(this.fm.selected.length){var d=this.fm.getSelected(),c=d.length;while(c--){if(d[c].read&&d[c].rm){return true}}}return false};this.cm=function(c){return c!="cwd"}},paste:function(c){var b=this;this.name="Paste";this.fm=c;this.exec=function(){var e,l,h,g,k="";if(!this.fm.buffer.dst){this.fm.buffer.dst=this.fm.cwd.hash}l=this.fm.view.tree.find('[key="'+this.fm.buffer.dst+'"]');if(!l.length||l.hasClass("noaccess")||l.hasClass("readonly")){return this.fm.view.error("Access denied")}if(this.fm.buffer.src==this.fm.buffer.dst){return this.fm.view.error("Unable to copy into itself")}var j={cmd:"paste",current:this.fm.cwd.hash,src:this.fm.buffer.src,dst:this.fm.buffer.dst,cut:this.fm.buffer.cut};if(this.fm.jquery>132){j.targets=this.fm.buffer.files}else{j["targets[]"]=this.fm.buffer.files}this.fm.ajax(j,function(d){d.cdc&&b.fm.reload(d)},{force:true})};this.isAllowed=function(){return this.fm.buffer.files};this.cm=function(d){return d=="cwd"}},rm:function(c){var b=this;this.name="Remove";this.fm=c;this.exec=function(){var d,g=[],e=this.fm.getSelected();for(var d=0;d<e.length;d++){if(!e[d].rm){return this.fm.view.error(e[d].name+": "+this.fm.i18n("Access denied"))}g.push(e[d].hash)}if(g.length){this.fm.lockShortcuts(true);a('<div><div class="ui-state-error ui-corner-all"><span class="ui-icon ui-icon-alert"/><strong>'+this.fm.i18n("Are you sure you want to remove files?<br /> This cannot be undone!")+"</strong></div></div>").dialog({title:this.fm.i18n("Confirmation required"),dialogClass:"el-finder-dialog",width:350,close:function(){b.fm.lockShortcuts()},buttons:{Cancel:function(){a(this).dialog("close")},Ok:function(){a(this).dialog("close");var h={cmd:"rm",current:b.fm.cwd.hash};if(b.fm.jquery>132){h.targets=g}else{h["targets[]"]=g}b.fm.ajax(h,function(i){i.tree&&b.fm.reload(i)},{force:true})}}})}};this.isAllowed=function(g){if(this.fm.selected.length){var e=this.fm.getSelected(),d=e.length;while(d--){if(e[d].rm){return true}}}return false};this.cm=function(d){return d!="cwd"}},mkdir:function(c){var b=this;this.name="New folder";this.fm=c;this.exec=function(){b.fm.unselectAll();var e=this.fm.uniqueName("untitled folder");input=a('<input type="text"/>').val(e);prev=this.fm.view.cwd.find(".directory:last");f={name:e,hash:"",mime:"directory",read:true,write:true,date:"",size:0},el=this.fm.options.view=="list"?a(this.fm.view.renderRow(f)).children("td").eq(1).empty().append(input).end().end():a(this.fm.view.renderIcon(f)).children("label").empty().append(input).end();el.addClass("directory ui-selected");if(prev.length){el.insertAfter(prev)}else{if(this.fm.options.view=="list"){el.insertAfter(this.fm.view.cwd.find("tr").eq(0))}else{el.prependTo(this.fm.view.cwd)}}b.fm.checkSelectedPos();input.select().focus().click(function(g){g.stopPropagation()}).bind("change blur",d).keydown(function(g){g.stopPropagation();if(g.keyCode==27){el.remove();b.fm.lockShortcuts()}else{if(g.keyCode==13){d()}}});b.fm.lockShortcuts(true);function d(){if(!b.fm.locked){var h,g=input.val();if(!b.fm.isValidName(g)){h="Invalid name"}else{if(b.fm.fileExists(g)){h="File or folder with the same name already exists"}}if(h){b.fm.view.error(h);b.fm.lockShortcuts(true);el.addClass("ui-selected");return input.select().focus()}b.fm.ajax({cmd:"mkdir",current:b.fm.cwd.hash,name:g},function(i){if(i.error){el.addClass("ui-selected");return input.select().focus()}b.fm.reload(i)},{force:true})}}};this.isAllowed=function(){return this.fm.cwd.write};this.cm=function(d){return d=="cwd"}},mkfile:function(c){var b=this;this.name="New text file";this.fm=c;this.exec=function(){b.fm.unselectAll();var i=this.fm.uniqueName("untitled file",".txt"),e=a('<input type="text"/>').val(i),h={name:i,hash:"",mime:"text/plain",read:true,write:true,date:"",size:0},g=this.fm.options.view=="list"?a(this.fm.view.renderRow(h)).children("td").eq(1).empty().append(e).end().end():a(this.fm.view.renderIcon(h)).children("label").empty().append(e).end();g.addClass("text ui-selected").appendTo(this.fm.options.view=="list"?b.fm.view.cwd.children("table"):b.fm.view.cwd);e.select().focus().bind("change blur",d).click(function(j){j.stopPropagation()}).keydown(function(j){j.stopPropagation();if(j.keyCode==27){g.remove();b.fm.lockShortcuts()}else{if(j.keyCode==13){d()}}});b.fm.lockShortcuts(true);function d(){if(!b.fm.locked){var k,j=e.val();if(!b.fm.isValidName(j)){k="Invalid name"}else{if(b.fm.fileExists(j)){k="File or folder with the same name already exists"}}if(k){b.fm.view.error(k);b.fm.lockShortcuts(true);g.addClass("ui-selected");return e.select().focus()}b.fm.ajax({cmd:"mkfile",current:b.fm.cwd.hash,name:j},function(l){if(l.error){g.addClass("ui-selected");return e.select().focus()}b.fm.reload(l)},{force:true})}}};this.isAllowed=function(d){return this.fm.cwd.write};this.cm=function(d){return d=="cwd"}},upload:function(c){var b=this;this.name="Upload files";this.fm=c;this.exec=function(){var g="el-finder-io-"+(new Date().getTime()),l=a('<div class="ui-state-error ui-corner-all"><span class="ui-icon ui-icon-alert"/><div/></div>'),h=this.fm.params.uplMaxSize?"<p>"+this.fm.i18n("Maximum allowed files size")+": "+this.fm.params.uplMaxSize+"</p>":"",s=a('<p class="el-finder-add-field"><span class="ui-state-default ui-corner-all"><em class="ui-icon ui-icon-circle-plus"/></span>'+this.fm.i18n("Add field")+"</p>").click(function(){a(this).before('<p><input type="file" name="upload[]"/></p>')}),k='<form method="post" enctype="multipart/form-data" action="'+b.fm.options.url+'" target="'+g+'"><input type="hidden" name="cmd" value="upload" /><input type="hidden" name="current" value="'+b.fm.cwd.hash+'" />',o=a("<div/>"),j=3;while(j--){k+='<p><input type="file" name="upload[]"/></p>'}var r=a("meta[name=csrf-token]").attr("content");var q=a("meta[name=csrf-param]").attr("content");if(q!=null&&r!=null){k+='<input name="'+q+'" value="'+r+'" type="hidden" />'}k=a(k+"</form>");o.append(k.append(l.hide()).prepend(h).append(s)).dialog({dialogClass:"el-finder-dialog",title:b.fm.i18n("Upload files"),modal:true,resizable:false,close:function(){b.fm.lockShortcuts()},buttons:{Cancel:function(){a(this).dialog("close")},Ok:function(){if(!a(":file[value]",k).length){return p(b.fm.i18n("Select at least one file to upload"))}setTimeout(function(){b.fm.lock();if(a.browser.safari){a.ajax({url:b.fm.options.url,data:{cmd:"ping"},error:n,success:n})}else{n()}});a(this).dialog("close")}}});b.fm.lockShortcuts(true);function p(d){l.show().find("div").empty().text(d)}function n(){var v=a('<iframe name="'+g+'" name="'+g+'" src="about:blank"/>'),w=v[0],i=50,u,e,t;v.css({position:"absolute",top:"-1000px",left:"-1000px"}).appendTo("body").bind("load",function(){v.unbind("load");d()});b.fm.lock(true);k.submit();function d(){try{u=w.contentWindow?w.contentWindow.document:w.contentDocument?w.contentDocument:w.document;if(u.body==null||u.body.innerHTML==""){if(--i){return setTimeout(d,100)}else{m();return b.fm.view.error("Unable to access iframe DOM after 50 tries")}}e=a(u.body).html();if(b.fm.jquery>=141){t=a.parseJSON(e)}else{if(/^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){t=window.JSON&&window.JSON.parse?window.JSON.parse(e):(new Function("return "+e))()}else{t={error:"Unable to parse server response"}}}}catch(x){t={error:"Unable to parse server response"}}m();t.error&&b.fm.view.error(t.error,t.errorData);t.cwd&&b.fm.reload(t);t.tmb&&b.fm.tmb()}function m(){b.fm.lock();v.remove()}}};this.isAllowed=function(){return this.fm.cwd.write};this.cm=function(d){return d=="cwd"}},duplicate:function(c){var b=this;this.name="Duplicate";this.fm=c;this.exec=function(){this.fm.ajax({cmd:"duplicate",current:this.fm.cwd.hash,target:this.fm.selected[0]},function(d){b.fm.reload(d)})};this.isAllowed=function(){return this.fm.cwd.write&&this.fm.selected.length==1&&this.fm.getSelected()[0].read};this.cm=function(d){return d=="file"}},edit:function(c){var b=this;this.name="Edit text file";this.fm=c;this.exec=function(){var d=this.fm.getSelected(0);this.fm.lockShortcuts(true);this.fm.ajax({cmd:"read",current:this.fm.cwd.hash,target:d.hash},function(g){b.fm.lockShortcuts(true);var e=a("<textarea/>").val(g.content||"").keydown(function(j){j.stopPropagation();if(j.keyCode==9){j.preventDefault();if(a.browser.msie){var h=document.selection.createRange();h.text="\t"+h.text;this.focus()}else{var i=this.value.substr(0,this.selectionStart),k=this.value.substr(this.selectionEnd);this.value=i+"\t"+k;this.setSelectionRange(i.length+1,i.length+1)}}});a("<div/>").append(e).dialog({dialogClass:"el-finder-dialog",title:b.fm.i18n(b.name),modal:true,width:500,close:function(){b.fm.lockShortcuts()},buttons:{Cancel:function(){a(this).dialog("close")},Ok:function(){var h=e.val();a(this).dialog("close");b.fm.ajax({cmd:"edit",current:b.fm.cwd.hash,target:d.hash,content:h},function(i){if(i.target){b.fm.cdc[i.target.hash]=i.target;b.fm.view.updateFile(i.target);b.fm.selectById(i.target.hash)}},{type:"POST"})}}})})};this.isAllowed=function(){if(b.fm.selected.length==1){var d=this.fm.getSelected()[0];return d.write&&d.read&&(d.mime.indexOf("text")==0||d.mime=="application/x-empty"||d.mime=="application/xml")}};this.cm=function(d){return d=="file"}},archive:function(c){var b=this;this.name="Create archive";this.fm=c;this.exec=function(d){var e={cmd:"archive",current:b.fm.cwd.hash,type:a.inArray(d,this.fm.params.archives)!=-1?d:this.fm.params.archives[0],name:b.fm.i18n("Archive")};if(this.fm.jquery>132){e.targets=b.fm.selected}else{e["targets[]"]=b.fm.selected}this.fm.ajax(e,function(g){b.fm.reload(g)})};this.isAllowed=function(){if(this.fm.cwd.write&&this.fm.selected.length){var e=this.fm.getSelected(),d=e.length;while(d--){if(e[d].read){return true}}}return false};this.cm=function(d){return d!="cwd"};this.argc=function(){var e,d=[];for(e=0;e<b.fm.params.archives.length;e++){d.push({"class":"archive",argc:b.fm.params.archives[e],text:b.fm.view.mime2kind(b.fm.params.archives[e])})}return d}},extract:function(c){var b=this;this.name="Uncompress archive";this.fm=c;this.exec=function(){this.fm.ajax({cmd:"extract",current:this.fm.cwd.hash,target:this.fm.getSelected(0).hash},function(d){b.fm.reload(d)})};this.isAllowed=function(){var e=this.fm.params.extract,d=e&&e.length;return this.fm.cwd.write&&this.fm.selected.length==1&&this.fm.getSelected(0).read&&d&&a.inArray(this.fm.getSelected(0).mime,e)!=-1};this.cm=function(d){return d=="file"}},resize:function(c){var b=this;this.name="Resize image";this.fm=c;this.exec=function(){var l=this.fm.getSelected();if(l[0]&&l[0].write&&l[0].dim){var j=l[0].dim.split("x"),g=parseInt(j[0]),k=parseInt(j[1]),e=g/k;iw=a('<input type="text" size="9" value="'+g+'" name="width"/>'),ih=a('<input type="text" size="9" value="'+k+'" name="height"/>'),f=a("<form/>").append(iw).append(" x ").append(ih).append(" px");iw.add(ih).bind("change",i);b.fm.lockShortcuts(true);var m=a("<div/>").append(a("<div/>").text(b.fm.i18n("Dimensions")+":")).append(f).dialog({title:b.fm.i18n("Resize image"),dialogClass:"el-finder-dialog",width:230,modal:true,close:function(){b.fm.lockShortcuts()},buttons:{Cancel:function(){a(this).dialog("close")},Ok:function(){var d=parseInt(iw.val())||0,h=parseInt(ih.val())||0;if(d>0&&d!=g&&h>0&&h!=k){b.fm.ajax({cmd:"resize",current:b.fm.cwd.hash,target:l[0].hash,width:d,height:h},function(n){b.fm.reload(n)})}a(this).dialog("close")}}})}function i(){var d=parseInt(iw.val())||0,h=parseInt(ih.val())||0;if(d<=0||h<=0){d=g;h=k}else{if(this==iw.get(0)){h=parseInt(d/e)}else{d=parseInt(h*e)}}iw.val(d);ih.val(h)}};this.isAllowed=function(){return this.fm.selected.length==1&&this.fm.cdc[this.fm.selected[0]].write&&this.fm.cdc[this.fm.selected[0]].read&&this.fm.cdc[this.fm.selected[0]].resize};this.cm=function(d){return d=="file"}},icons:function(b){this.name="View as icons";this.fm=b;this.exec=function(){this.fm.view.win.addClass("el-finder-disabled");this.fm.setView("icons");this.fm.updateCwd();this.fm.view.win.removeClass("el-finder-disabled");a("div.image",this.fm.view.cwd).length&&this.fm.tmb()};this.isAllowed=function(){return this.fm.options.view!="icons"};this.cm=function(c){return c=="cwd"}},list:function(b){this.name="View as list";this.fm=b;this.exec=function(){this.fm.view.win.addClass("el-finder-disabled");this.fm.setView("list");this.fm.updateCwd();this.fm.view.win.removeClass("el-finder-disabled")};this.isAllowed=function(){return this.fm.options.view!="list"};this.cm=function(c){return c=="cwd"}},help:function(b){this.name="Help";this.fm=b;this.exec=function(){var j,e=this.fm.i18n("helpText"),c,i,g;j='<div class="el-finder-logo"/><strong>'+this.fm.i18n("elFinder: Web file manager")+"</strong><br/>"+this.fm.i18n("Version")+": "+this.fm.version+"<br/>jQuery/jQueryUI: "+a().jquery+"/"+a.ui.version+'<br clear="all"/><p><strong><a href="http://elrte.org/'+this.fm.options.lang+'/elfinder" target="_blank">'+this.fm.i18n("Donate to support project development")+'</a></strong></p><p><a href="http://elrte.org/redmine/projects/elfinder/wiki" target="_blank">'+this.fm.i18n("elFinder documentation")+"</a></p>";j+="<p>"+(e!="helpText"?e:"elFinder works similar to file manager on your computer. <br /> To make actions on files/folders use icons on top panel. If icon action it is not clear for you, hold mouse cursor over it to see the hint. <br /> Manipulations with existing files/folders can be done through the context menu (mouse right-click).<br/> To copy/delete a group of files/folders, select them using Shift/Alt(Command) + mouse left-click.")+"</p>";j+="<p><strong>"+this.fm.i18n("elFinder support following shortcuts")+":</strong><ul><li><kbd>Ctrl+A</kbd> - "+this.fm.i18n("Select all files")+"</li><li><kbd>Ctrl+C/Ctrl+X/Ctrl+V</kbd> - "+this.fm.i18n("Copy/Cut/Paste files")+"</li><li><kbd>Enter</kbd> - "+this.fm.i18n("Open selected file/folder")+"</li><li><kbd>Space</kbd> - "+this.fm.i18n("Open/close QuickLook window")+"</li><li><kbd>Delete/Cmd+Backspace</kbd> - "+this.fm.i18n("Remove selected files")+"</li><li><kbd>Ctrl+I</kbd> - "+this.fm.i18n("Selected files or current directory info")+"</li><li><kbd>Ctrl+N</kbd> - "+this.fm.i18n("Create new directory")+"</li><li><kbd>Ctrl+U</kbd> - "+this.fm.i18n("Open upload files form")+"</li><li><kbd>Left arrow</kbd> - "+this.fm.i18n("Select previous file")+"</li><li><kbd>Right arrow </kbd> - "+this.fm.i18n("Select next file")+"</li><li><kbd>Ctrl+Right arrow</kbd> - "+this.fm.i18n("Open selected file/folder")+"</li><li><kbd>Ctrl+Left arrow</kbd> - "+this.fm.i18n("Return into previous folder")+"</li><li><kbd>Shift+arrows</kbd> - "+this.fm.i18n("Increase/decrease files selection")+"</li></ul></p><p>"+this.fm.i18n("Contacts us if you need help integrating elFinder in you products")+": dev@std42.ru</p>";c='<div class="el-finder-help-std"/><p>'+this.fm.i18n("Javascripts/PHP programming: Dmitry (dio) Levashov, dio@std42.ru")+"</p><p>"+this.fm.i18n("Python programming, techsupport: Troex Nevelin, troex@fury.scancode.ru")+"</p><p>"+this.fm.i18n("Design: Valentin Razumnih")+"</p><p>"+this.fm.i18n("Chezh localization")+": Roman Matěna, info@romanmatena.cz</p><p>"+this.fm.i18n("Chinese (traditional) localization")+": Tad, tad0616@gmail.com</p><p>"+this.fm.i18n("Dutch localization")+': Kurt Aerts, <a href="http://ilabsolutions.net/" target="_blank">http://ilabsolutions.net</a></p><p>'+this.fm.i18n("Greek localization")+": Panagiotis Skarvelis</p><p>"+this.fm.i18n("Hungarian localization")+": Viktor Tamas, tamas.viktor@totalstudio.hu</p><p>"+this.fm.i18n("Italian localization")+":  Ugo Punzolo, sadraczerouno@gmail.com</p><p>"+this.fm.i18n("Latvian localization")+":  Uldis Plotiņš, uldis.plotins@gmail.com</p><p>"+this.fm.i18n("Poland localization")+":  Darek Wapiński, darek@wapinski.us</p><p>"+this.fm.i18n("Spanish localization")+': Alex (xand) Vavilin, xand@xand.es, <a href="http://xand.es" target="_blank">http://xand.es</a></p><p>'+this.fm.i18n("Icons")+': <a href="http://pixelmixer.ru/" target="_blank">pixelmixer</a>,  <a href="http://www.famfamfam.com/lab/icons/silk/" target="_blank">Famfam silk icons</a>, <a href="http://www.fatcow.com/free-icons/" target="_blank">Fatcow icons</a></p><p>'+this.fm.i18n('Copyright: <a href="http://www.std42.ru" target="_blank">Studio 42 LTD</a>')+"</p><p>"+this.fm.i18n("License: BSD License")+"</p><p>"+this.fm.i18n('Web site: <a href="http://elrte.org/elfinder/" target="_blank">elrte.org/elfinder</a>')+"</p>";i='<div class="el-finder-logo"/><strong><a href="http://www.eldorado-cms.ru" target="_blank">ELDORADO.CMS</a></strong><br/>'+this.fm.i18n("Simple and usefull Content Management System")+"<hr/>"+this.fm.i18n("Support project development and we will place here info about you");g='<ul><li><a href="#el-finder-help-h">'+this.fm.i18n("Help")+'</a></li><li><a href="#el-finder-help-a">'+this.fm.i18n("Authors")+'</a><li><a href="#el-finder-help-sp">'+this.fm.i18n("Sponsors")+'</a></li></ul><div id="el-finder-help-h"><p>'+j+'</p></div><div id="el-finder-help-a"><p>'+c+'</p></div><div id="el-finder-help-sp"><p>'+i+"</p></div>";var k=a("<div/>").html(g).dialog({width:617,title:this.fm.i18n("Help"),dialogClass:"el-finder-dialog",modal:true,close:function(){k.tabs("destroy").dialog("destroy").remove()},buttons:{Ok:function(){a(this).dialog("close")}}}).tabs()};this.cm=function(c){return c=="cwd"}}}})(jQuery);(function(a){elFinder.prototype.quickLook=function(l,b){var p=this;this.fm=l;this._hash="";this.title=a("<strong/>");this.ico=a("<p/>");this.info=a("<label/>");this.media=a('<div class="el-finder-ql-media"/>').hide();this.name=a('<span class="el-finder-ql-name"/>');this.kind=a('<span class="el-finder-ql-kind"/>');this.size=a('<span class="el-finder-ql-size"/>');this.date=a('<span class="el-finder-ql-date"/>');this.url=a('<a href="#"/>').hide().click(function(i){i.preventDefault();window.open(a(this).attr("href"));p.hide()});this.add=a("<div/>");this.content=a('<div class="el-finder-ql-content"/>');this.win=a('<div class="el-finder-ql"/>').hide().append(a('<div class="el-finder-ql-drag-handle"/>').append(a('<span class="ui-icon ui-icon-circle-close"/>').click(function(){p.hide()})).append(this.title)).append(this.ico).append(this.media).append(this.content.append(this.name).append(this.kind).append(this.size).append(this.date).append(this.url).append(this.add)).appendTo("body").draggable({handle:".el-finder-ql-drag-handle"}).resizable({minWidth:420,minHeight:150,resize:function(){if(p.media.children().length){var m=p.media.children(":first");switch(m[0].nodeName){case"IMG":var e=m.width(),n=m.height(),i=p.win.width(),s=p.win.css("height")=="auto"?350:p.win.height()-p.content.height()-p.th,q=e>i||n>s?Math.min(Math.min(i,e)/e,Math.min(s,n)/n):Math.min(Math.max(i,e)/e,Math.max(s,n)/n);m.css({width:Math.round(m.width()*q),height:Math.round(m.height()*q)});break;case"IFRAME":case"EMBED":m.css("height",p.win.height()-p.content.height()-p.th);break;case"OBJECT":m.children("embed").css("height",p.win.height()-p.content.height()-p.th)}}}});this.th=parseInt(this.win.children(":first").css("height"))||18;this.mimes={"image/jpeg":"jpg","image/gif":"gif","image/png":"png"};for(var h=0;h<navigator.mimeTypes.length;h++){var o=navigator.mimeTypes[h].type;if(o&&o!="*"){this.mimes[o]=navigator.mimeTypes[h].suffixes}}if((a.browser.safari&&navigator.platform.indexOf("Mac")!=-1)||a.browser.msie){this.mimes["application/pdf"]="pdf"}else{for(var c=0;c<navigator.plugins.length;c++){for(var d=0;d<navigator.plugins[c].length;d++){var k=navigator.plugins[c][d].description.toLowerCase();if(k.substring(0,k.indexOf(" "))=="pdf"){this.mimes["application/pdf"]="pdf";break}}}}if(this.mimes["image/x-bmp"]){this.mimes["image/x-ms-bmp"]="bmp"}if(a.browser.msie&&!this.mimes["application/x-shockwave-flash"]){this.mimes["application/x-shockwave-flash"]="swf"}this.show=function(){if(this.win.is(":hidden")&&p.fm.selected.length==1){g();var m=p.fm.selected[0],e=p.fm.view.cwd.find('[key="'+m+'"]'),i=e.offset();p.fm.lockShortcuts(true);this.win.css({width:e.width()-20,height:e.height(),left:i.left,top:i.top,opacity:0}).show().animate({width:420,height:150,opacity:1,top:Math.round(a(window).height()/5),left:a(window).width()/2-210},450,function(){p.win.css({height:"auto"});p.fm.lockShortcuts()})}};this.hide=function(){if(this.win.is(":visible")){var i,e=p.fm.view.cwd.find('[key="'+this._hash+'"]');if(e){i=e.offset();this.media.hide(200);this.win.animate({width:e.width()-20,height:e.height(),left:i.left,top:i.top,opacity:0},350,function(){p.fm.lockShortcuts();j();p.win.hide().css("height","auto")})}else{this.win.fadeOut(200);j();p.fm.lockShortcuts()}}};this.toggle=function(){if(this.win.is(":visible")){this.hide()}else{this.show()}};this.update=function(){if(this.fm.selected.length!=1){this.hide()}else{if(this.win.is(":visible")&&this.fm.selected[0]!=this._hash){g()}}};this.mediaHeight=function(){return this.win.is(":animated")||this.win.css("height")=="auto"?315:this.win.height()-this.content.height()-this.th};function j(){p.media.hide().empty();p.win.attr("class","el-finder-ql").css("z-index",p.fm.zIndex);p.title.empty();p.ico.attr("style","").show();p.add.hide().empty();p._hash=""}function g(){var m=p.fm.getSelected(0);j();p._hash=m.hash;p.title.text(m.name);p.win.addClass(p.fm.view.mime2class(m.mime));p.name.text(m.name);p.kind.text(p.fm.view.mime2kind(m.link?"symlink":m.mime));p.size.text(p.fm.view.formatSize(m.size));p.date.text(p.fm.i18n("Modified")+": "+p.fm.view.formatDate(m.date));m.dim&&p.add.append("<span>"+m.dim+" px</span>").show();m.tmb&&p.ico.css("background",'url("'+m.tmb+'") 0 0 no-repeat');if(m.url){p.url.text(m.url).attr("href",m.url).show();for(var e in p.plugins){if(p.plugins[e].test&&p.plugins[e].test(m.mime,p.mimes,m.name)){p.plugins[e].show(p,m);return}}}else{p.url.hide()}p.win.css({width:"420px",height:"auto"})}};elFinder.prototype.quickLook.prototype.plugins={image:new function(){this.test=function(c,b){return c.match(/^image\//)};this.show=function(e,d){var b,c;if(e.mimes[d.mime]&&d.hash==e._hash){a("<img/>").hide().appendTo(e.media.show()).attr("src",d.url+(a.browser.msie||a.browser.opera?"?"+Math.random():"")).load(function(){c=a(this).unbind("load");if(d.hash==e._hash){e.win.is(":animated")?setTimeout(function(){g(c)},330):g(c)}})}function g(k){var j=k.width(),m=k.height(),i=e.win.is(":animated"),l=i?420:e.win.width(),o=i||e.win.css("height")=="auto"?315:e.win.height()-e.content.height()-e.th,n=j>l||m>o?Math.min(Math.min(l,j)/j,Math.min(o,m)/m):Math.min(Math.max(l,j)/j,Math.max(o,m)/m);e.fm.lockShortcuts(true);e.ico.hide();k.css({width:e.ico.width(),height:e.ico.height()}).show().animate({width:Math.round(n*j),height:Math.round(n*m)},450,function(){e.fm.lockShortcuts()})}}},text:new function(){this.test=function(c,b){return(c.indexOf("text")==0&&c.indexOf("rtf")==-1)||c.match(/application\/(xml|javascript|json)/)};this.show=function(c,b){if(b.hash==c._hash){c.ico.hide();c.media.append('<iframe src="'+b.url+'" style="height:'+c.mediaHeight()+'px" />').show()}}},swf:new function(){this.test=function(c,b){return c=="application/x-shockwave-flash"&&b[c]};this.show=function(c,b){if(b.hash==c._hash){c.ico.hide();var d=c.media.append('<embed pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" src="'+b.url+'" style="width:100%;height:'+c.mediaHeight()+'px" type="application/x-shockwave-flash" />');if(c.win.is(":animated")){d.slideDown(450)}else{d.show()}}}},audio:new function(){this.test=function(c,b){return c.indexOf("audio")==0&&b[c]};this.show=function(d,c){if(c.hash==d._hash){d.ico.hide();var b=d.win.is(":animated")||d.win.css("height")=="auto"?100:d.win.height()-d.content.height()-d.th;d.media.append('<embed src="'+c.url+'" style="width:100%;height:'+b+'px" />').show()}}},video:new function(){this.test=function(c,b){return c.indexOf("video")==0&&b[c]};this.show=function(c,b){if(b.hash==c._hash){c.ico.hide();c.media.append('<embed src="'+b.url+'" style="width:100%;height:'+c.mediaHeight()+'px" />').show()}}},pdf:new function(){this.test=function(c,b){return c=="application/pdf"&&b[c]};this.show=function(c,b){if(b.hash==c._hash){c.ico.hide();c.media.append('<embed src="'+b.url+'" style="width:100%;height:'+c.mediaHeight()+'px" />').show()}}}}})(jQuery);(function(a){elFinder.prototype.eventsManager=function(d,c){var b=this;this.lock=false;this.fm=d;this.ui=d.ui;this.tree=d.view.tree;this.cwd=d.view.cwd;this.pointer="";this.init=function(){var g=this,h=false;g.lock=false;this.cwd.bind("click",function(j){var i=a(j.target);if(i.hasClass("ui-selected")){g.fm.unselectAll()}else{if(!i.attr("key")){i=i.parent("[key]")}if(j.ctrlKey||j.metaKey){g.fm.toggleSelect(i)}else{g.fm.select(i,true)}}}).bind(window.opera?"click":"contextmenu",function(j){if(window.opera&&!j.ctrlKey){return}j.preventDefault();j.stopPropagation();var i=a(j.target);if(a.browser.mozilla){h=true}if(i.hasClass("el-finder-cwd")){g.fm.unselectAll()}else{g.fm.select(i.attr("key")?i:i.parent("[key]"))}g.fm.quickLook.hide();g.fm.ui.showMenu(j)}).selectable({filter:"[key]",delay:300,stop:function(){g.fm.updateSelect();g.fm.log("mouseup")}});a(document).bind("click",function(i){!h&&g.fm.ui.hideMenu();h=false;a("input",g.cwd).trigger("change");if(!a(i.target).is("input,textarea,select")){a("input,textarea").blur()}});a("input,textarea").live("focus",function(i){g.lock=true}).live("blur",function(i){g.lock=false});this.tree.bind("select",function(i){g.tree.find("a").removeClass("selected");a(i.target).addClass("selected").parents("li:has(ul)").children("ul").show().prev().children("div").addClass("expanded")});if(this.fm.options.places){this.fm.view.plc.click(function(l){l.preventDefault();var j=a(l.target),k=j.attr("key"),i;if(k){k!=g.fm.cwd.hash&&g.ui.exec("open",l.target)}else{if(l.target.nodeName=="A"||l.target.nodeName=="DIV"){i=g.fm.view.plc.find("ul");if(i.children().length){i.toggle(300);g.fm.view.plc.children("li").find("div").toggleClass("expanded")}}}});this.fm.view.plc.droppable({accept:"(div,tr).directory",tolerance:"pointer",over:function(){a(this).addClass("el-finder-droppable")},out:function(){a(this).removeClass("el-finder-droppable")},drop:function(k,j){a(this).removeClass("el-finder-droppable");var i=false;j.helper.children(".directory:not(.noaccess,.dropbox)").each(function(){if(g.fm.addPlace(a(this).attr("key"))){i=true;a(this).hide()}});if(i){g.fm.view.renderPlaces();g.updatePlaces();g.fm.view.plc.children("li").children("div").trigger("click")}if(!j.helper.children("div:visible").length){j.helper.hide()}}})}a(document).bind(a.browser.mozilla||a.browser.opera?"keypress":"keydown",function(j){var i=j.ctrlKey||j.metaKey;if(g.lock){return}switch(j.keyCode){case 37:case 38:j.stopPropagation();j.preventDefault();if(j.keyCode==37&&i){g.ui.execIfAllowed("back")}else{e(false,!j.shiftKey)}break;case 39:case 40:j.stopPropagation();j.preventDefault();if(i){g.ui.execIfAllowed("open")}else{e(true,!j.shiftKey)}break}});a(document).bind(a.browser.opera?"keypress":"keydown",function(i){if(g.lock){return}switch(i.keyCode){case 32:i.preventDefault();i.stopPropagation();g.fm.quickLook.toggle();break;case 27:g.fm.quickLook.hide();break}});if(!this.fm.options.disableShortcuts){a(document).bind("keydown",function(j){var i=j.ctrlKey||j.metaKey;if(g.lock){return}switch(j.keyCode){case 8:if(i&&g.ui.isCmdAllowed("rm")){j.preventDefault();g.ui.exec("rm")}break;case 13:if(g.ui.isCmdAllowed("select")){return g.ui.exec("select")}g.ui.execIfAllowed("open");break;case 46:g.ui.execIfAllowed("rm");break;case 65:if(i){j.preventDefault();g.fm.selectAll()}break;case 67:i&&g.ui.execIfAllowed("copy");break;case 73:if(i){j.preventDefault();g.ui.exec("info")}break;case 78:if(i){j.preventDefault();g.ui.execIfAllowed("mkdir")}break;case 85:if(i){j.preventDefault();g.ui.execIfAllowed("upload")}break;case 86:i&&g.ui.execIfAllowed("paste");break;case 88:i&&g.ui.execIfAllowed("cut");break;case 113:g.ui.execIfAllowed("rename");break}})}};this.updateNav=function(){a("a",this.tree).click(function(h){h.preventDefault();var g=a(this),i;if(h.target.nodeName=="DIV"&&a(h.target).hasClass("collapsed")){a(h.target).toggleClass("expanded").parent().next("ul").toggle(300)}else{if(g.attr("key")!=b.fm.cwd.hash){if(g.hasClass("noaccess")||g.hasClass("dropbox")){b.fm.view.error("Access denied")}else{b.ui.exec("open",g.trigger("select")[0])}}else{i=g.children(".collapsed");if(i.length){i.toggleClass("expanded");g.next("ul").toggle(300)}}}});a("a:not(.noaccess,.readonly)",this.tree).droppable({tolerance:"pointer",accept:"div[key],tr[key]",over:function(){a(this).addClass("el-finder-droppable")},out:function(){a(this).removeClass("el-finder-droppable")},drop:function(h,g){a(this).removeClass("el-finder-droppable");b.fm.drop(h,g,a(this).attr("key"))}});this.fm.options.places&&this.updatePlaces()};this.updatePlaces=function(){this.fm.view.plc.children("li").find("li").draggable({scroll:false,stop:function(){if(b.fm.removePlace(a(this).children("a").attr("key"))){a(this).remove();if(!a("li",b.fm.view.plc.children("li")).length){b.fm.view.plc.children("li").find("div").removeClass("collapsed expanded").end().children("ul").hide()}}}})};this.updateCwd=function(){a("[key]",this.cwd).bind("dblclick",function(g){b.fm.select(a(this),true);b.ui.exec(b.ui.isCmdAllowed("select")?"select":"open")}).draggable({delay:3,addClasses:false,appendTo:".el-finder-cwd",revert:true,drag:function(h,g){g.helper.toggleClass("el-finder-drag-copy",h.shiftKey||h.ctrlKey)},helper:function(){var g=a(this),i=a('<div class="el-finder-drag-helper"/>'),j=0;!g.hasClass("ui-selected")&&b.fm.select(g,true);b.cwd.find(".ui-selected").each(function(h){var k=b.fm.options.view=="icons"?a(this).clone().removeClass("ui-selected"):a(b.fm.view.renderIcon(b.fm.cdc[a(this).attr("key")]));if(j++==0||j%12==0){k.css("margin-left",0)}i.append(k)});return i.css("width",(j<=12?85+(j-1)*29:387)+"px")}}).filter(".directory").droppable({tolerance:"pointer",accept:"div[key],tr[key]",over:function(){a(this).addClass("el-finder-droppable")},out:function(){a(this).removeClass("el-finder-droppable")},drop:function(h,g){a(this).removeClass("el-finder-droppable");b.fm.drop(h,g,a(this).attr("key"))}});if(a.browser.msie){a("*",this.cwd).attr("unselectable","on").filter("[key]").bind("dragstart",function(){b.cwd.selectable("disable").removeClass("ui-state-disabled ui-selectable-disabled")}).bind("dragstop",function(){b.cwd.selectable("enable")})}};function e(h,i){var j,g,k;if(!a("[key]",b.cwd).length){return}if(b.fm.selected.length==0){j=a("[key]:"+(h?"first":"last"),b.cwd);b.fm.select(j)}else{if(i){j=a(".ui-selected:"+(h?"last":"first"),b.cwd);g=j[h?"next":"prev"]("[key]");if(g.length){j=g}b.fm.select(j,true)}else{if(b.pointer){k=a('[key="'+b.pointer+'"].ui-selected',b.cwd)}if(!k||!k.length){k=a(".ui-selected:"+(h?"last":"first"),b.cwd)}j=k[h?"next":"prev"]("[key]");if(!j.length){j=k}else{if(!j.hasClass("ui-selected")){b.fm.select(j)}else{if(!k.hasClass("ui-selected")){b.fm.unselect(j)}else{g=k[h?"prev":"next"]("[key]");if(!g.length||!g.hasClass("ui-selected")){b.fm.unselect(k)}else{while((g=h?j.next("[key]"):j.prev("[key]"))&&j.hasClass("ui-selected")){j=g}b.fm.select(j)}}}}}}b.pointer=j.attr("key");b.fm.checkSelectedPos(h)}}})(jQuery);
/**
 * WYSIWYG - jQuery plugin 0.97
 * (0.97.2 - From infinity)
 *
 * Copyright (c) 2008-2009 Juan M Martinez, 2010-2011 Akzhan Abdulin and all contributors
 * https://github.com/akzhan/jwysiwyg
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */

/*jslint browser: true, forin: true */

(function ($) {
	"use strict";
	/* Wysiwyg namespace: private properties and methods */

	var console = window.console ? window.console : {
		log: $.noop,
		error: function (msg) {
			$.error(msg);
		}
	};
	var supportsProp = (('prop' in $.fn) && ('removeProp' in $.fn));

	function Wysiwyg() {
		// - the item is added by this.ui.appendControls and then appendItem
		// - click triggers this.triggerControl
		// cmd or[key] - designMode exec function name
		// tags - activates control for these tags (@see checkTargets)
		// css - activates control if one of css is applied
		this.controls = {
			bold: {
				groupIndex: 0,
				visible: true,
				tags: ["b", "strong"],
				css: {
					fontWeight: "bold"
				},
				tooltip: "Bold",
				hotkey: {"ctrl": 1, "key": 66}
			},

			copy: {
				groupIndex: 8,
				visible: false,
				tooltip: "Copy"
			},

			createLink: {
				groupIndex: 6,
				visible: true,
				exec: function () {
					var self = this;
					if ($.wysiwyg.controls && $.wysiwyg.controls.link) {
						$.wysiwyg.controls.link.init(this);
					} else if ($.wysiwyg.autoload) {
						$.wysiwyg.autoload.control("wysiwyg.link.js", function () {
							self.controls.createLink.exec.apply(self);
						});
					} else {
						console.error("$.wysiwyg.controls.link not defined. You need to include wysiwyg.link.js file");
					}
				},
				tags: ["a"],
				tooltip: "Create link"
			},

			cut: {
				groupIndex: 8,
				visible: false,
				tooltip: "Cut"
			},

			decreaseFontSize: {
				groupIndex: 9,
				visible: false,
				tags: ["small"],
				tooltip: "Decrease font size",
				exec: function () {
					this.decreaseFontSize();
				}
			},

			h1: {
				groupIndex: 7,
				visible: true,
				className: "h1",
				command: ($.browser.msie || $.browser.safari) ? "FormatBlock" : "heading",
				"arguments": ($.browser.msie || $.browser.safari) ? "<h1>" : "h1",
				tags: ["h1"],
				tooltip: "Header 1"
			},

			h2: {
				groupIndex: 7,
				visible: true,
				className: "h2",
				command: ($.browser.msie || $.browser.safari)	? "FormatBlock" : "heading",
				"arguments": ($.browser.msie || $.browser.safari) ? "<h2>" : "h2",
				tags: ["h2"],
				tooltip: "Header 2"
			},

			h3: {
				groupIndex: 7,
				visible: true,
				className: "h3",
				command: ($.browser.msie || $.browser.safari) ? "FormatBlock" : "heading",
				"arguments": ($.browser.msie || $.browser.safari) ? "<h3>" : "h3",
				tags: ["h3"],
				tooltip: "Header 3"
			},

			highlight: {
				tooltip:     "Highlight",
				className:   "highlight",
				groupIndex:  1,
				visible:     false,
				css: {
					backgroundColor: "rgb(255, 255, 102)"
				},
				exec: function () {
					var command, node, selection, args;

					if ($.browser.msie || $.browser.safari) {
						command = "backcolor";
					} else {
						command = "hilitecolor";
					}

					if ($.browser.msie) {
						node = this.getInternalRange().parentElement();
					} else {
						selection = this.getInternalSelection();
						node = selection.extentNode || selection.focusNode;

						while (node.style === undefined) {
							node = node.parentNode;
							if (node.tagName && node.tagName.toLowerCase() === "body") {
								return;
							}
						}
					}

					if (node.style.backgroundColor === "rgb(255, 255, 102)" ||
							node.style.backgroundColor === "#ffff66") {
						args = "#ffffff";
					} else {
						args = "#ffff66";
					}

					this.editorDoc.execCommand(command, false, args);
				}
			},

			html: {
				groupIndex: 10,
				visible: false,
				exec: function () {
					var elementHeight;

					if (this.options.resizeOptions && $.fn.resizable) {
						elementHeight = this.element.height();
					}

					if (this.viewHTML) { //textarea is shown
						this.setContent(this.original.value);

						$(this.original).hide();
						this.editor.show();

						if (this.options.resizeOptions && $.fn.resizable) {
							// if element.height still the same after frame was shown
							if (elementHeight === this.element.height()) {
								this.element.height(elementHeight + this.editor.height());
							}

							this.element.resizable($.extend(true, {
								alsoResize: this.editor
							}, this.options.resizeOptions));
						}
						
						this.ui.toolbar.find("li").each(function () {
							var li = $(this);

							if (li.hasClass("html")) {
								li.removeClass("active");
							} else {
								li.removeClass('disabled');
							}
						});
					} else { //wysiwyg is shown
						this.saveContent();

						$(this.original).css({
							width:	this.element.outerWidth() - 6,
							height: this.element.height() - this.ui.toolbar.height() - 6,
							resize: "none"
						}).show();
						this.editor.hide();
						
						if (this.options.resizeOptions && $.fn.resizable) {
							// if element.height still the same after frame was hidden
							if (elementHeight === this.element.height()) {
								this.element.height(this.ui.toolbar.height());
							}

							this.element.resizable("destroy");
						}

						this.ui.toolbar.find("li").each(function () {
							var li = $(this);

							if (li.hasClass("html")) {
								li.addClass("active");
							} else {
								if (false === li.hasClass("fullscreen")) {
									li.removeClass("active").addClass('disabled');
								}
							}
						});
					}

					this.viewHTML = !(this.viewHTML);
				},
				tooltip: "View source code"
			},

			increaseFontSize: {
				groupIndex: 9,
				visible: false,
				tags: ["big"],
				tooltip: "Increase font size",
				exec: function () {
					this.increaseFontSize();
				}
			},

			indent: {
				groupIndex: 2,
				visible: true,
				tooltip: "Indent"
			},

			insertHorizontalRule: {
				groupIndex: 6,
				visible: true,
				tags: ["hr"],
				tooltip: "Insert Horizontal Rule"
			},

			insertImage: {
				groupIndex: 6,
				visible: true,
				exec: function () {
					var self = this;

					if ($.wysiwyg.controls && $.wysiwyg.controls.image) {
						$.wysiwyg.controls.image.init(this);
					} else if ($.wysiwyg.autoload) {
						$.wysiwyg.autoload.control("wysiwyg.image.js", function () {
							self.controls.insertImage.exec.apply(self);
						});
					} else {
						console.error("$.wysiwyg.controls.image not defined. You need to include wysiwyg.image.js file");
					}
				},
				tags: ["img"],
				tooltip: "Insert image"
			},

			insertOrderedList: {
				groupIndex: 5,
				visible: true,
				tags: ["ol"],
				tooltip: "Insert Ordered List"
			},

			insertTable: {
				groupIndex: 6,
				visible: true,
				exec: function () {
					var self = this;

					if ($.wysiwyg.controls && $.wysiwyg.controls.table) {
						$.wysiwyg.controls.table(this);
					} else if ($.wysiwyg.autoload) {
						$.wysiwyg.autoload.control("wysiwyg.table.js", function () {
							self.controls.insertTable.exec.apply(self);
						});
					} else {
						console.error("$.wysiwyg.controls.table not defined. You need to include wysiwyg.table.js file");
					}
				},
				tags: ["table"],
				tooltip: "Insert table"
			},

			insertUnorderedList: {
				groupIndex: 5,
				visible: true,
				tags: ["ul"],
				tooltip: "Insert Unordered List"
			},

			italic: {
				groupIndex: 0,
				visible: true,
				tags: ["i", "em"],
				css: {
					fontStyle: "italic"
				},
				tooltip: "Italic",
				hotkey: {"ctrl": 1, "key": 73}
			},

			justifyCenter: {
				groupIndex: 1,
				visible: true,
				tags: ["center"],
				css: {
					textAlign: "center"
				},
				tooltip: "Justify Center"
			},

			justifyFull: {
				groupIndex: 1,
				visible: true,
				css: {
					textAlign: "justify"
				},
				tooltip: "Justify Full"
			},

			justifyLeft: {
				visible: true,
				groupIndex: 1,
				css: {
					textAlign: "left"
				},
				tooltip: "Justify Left"
			},

			justifyRight: {
				groupIndex: 1,
				visible: true,
				css: {
					textAlign: "right"
				},
				tooltip: "Justify Right"
			},

			ltr: {
				groupIndex: 10,
				visible: false,
				exec: function () {
					var p = this.dom.getElement("p");

					if (!p) {
						return false;
					}

					$(p).attr("dir", "ltr");
					return true;
				},
				tooltip : "Left to Right"
			},

			outdent: {
				groupIndex: 2,
				visible: true,
				tooltip: "Outdent"
			},

			paragraph: {
				groupIndex: 7,
				visible: false,
				className: "paragraph",
				command: "FormatBlock",
				"arguments": ($.browser.msie || $.browser.safari) ? "<p>" : "p",
				tags: ["p"],
				tooltip: "Paragraph"
			},

			paste: {
				groupIndex: 8,
				visible: false,
				tooltip: "Paste"
			},

			redo: {
				groupIndex: 4,
				visible: true,
				tooltip: "Redo"
			},

			removeFormat: {
				groupIndex: 10,
				visible: true,
				exec: function () {
					this.removeFormat();
				},
				tooltip: "Remove formatting"
			},

			rtl: {
				groupIndex: 10,
				visible: false,
				exec: function () {
					var p = this.dom.getElement("p");

					if (!p) {
						return false;
					}

					$(p).attr("dir", "rtl");
					return true;
				},
				tooltip : "Right to Left"
			},

			strikeThrough: {
				groupIndex: 0,
				visible: true,
				tags: ["s", "strike"],
				css: {
					textDecoration: "line-through"
				},
				tooltip: "Strike-through"
			},

			subscript: {
				groupIndex: 3,
				visible: true,
				tags: ["sub"],
				tooltip: "Subscript"
			},

			superscript: {
				groupIndex: 3,
				visible: true,
				tags: ["sup"],
				tooltip: "Superscript"
			},

			underline: {
				groupIndex: 0,
				visible: true,
				tags: ["u"],
				css: {
					textDecoration: "underline"
				},
				tooltip: "Underline",
				hotkey: {"ctrl": 1, "key": 85}
			},

			undo: {
				groupIndex: 4,
				visible: true,
				tooltip: "Undo"
			},

			code: {
				visible : true,
				groupIndex: 6,
				tooltip: "Code snippet",
				exec: function () {
					var range	= this.getInternalRange(),
						common	= $(range.commonAncestorContainer),
						$nodeName = range.commonAncestorContainer.nodeName.toLowerCase();
					if (common.parent("code").length) {
						common.unwrap();
					} else {
						if ($nodeName !== "body") {
							common.wrap("<code/>");
						}
					}
				}
			},
			
			cssWrap: {
				visible : false,
				groupIndex: 6,
				tooltip: "CSS Wrapper",
				exec: function () { 
					$.wysiwyg.controls.cssWrap.init(this);
				}
			}
			
		};

		this.defaults = {
html: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" style="margin:0"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body style="margin:0;">INITIAL_CONTENT</body></html>',
			debug: false,
			controls: {},
			css: {},
			events: {},
			autoGrow: false,
			autoSave: true,
			brIE: true,					// http://code.google.com/p/jwysiwyg/issues/detail?id=15
			formHeight: 270,
			formWidth: 440,
			iFrameClass: null,
			initialContent: "",
			maxHeight: 10000,			// see autoGrow
			maxLength: 0,
			messages: {
				nonSelection: "Select the text you wish to link"
			},
			toolbarHtml: '<ul role="menu" class="toolbar"></ul>',
			removeHeadings: false,
			replaceDivWithP: false,
			resizeOptions: false,
			rmUnusedControls: false,	// https://github.com/akzhan/jwysiwyg/issues/52
			rmUnwantedBr: true,			// http://code.google.com/p/jwysiwyg/issues/detail?id=11
			tableFiller: "Lorem ipsum",
			initialMinHeight: null,

			controlImage: {
				forceRelativeUrls: false
			},

			controlLink: {
				forceRelativeUrls: false
			},

			plugins: { // placeholder for plugins settings
				autoload: false,
				i18n: false,
				rmFormat: {
					rmMsWordMarkup: false
				}
			},
			
			dialog : "default"
		};

		//these properties are set from control hashes
		this.availableControlProperties = [
			"arguments",
			"callback",
			"className",
			"command",
			"css",
			"custom",
			"exec",
			"groupIndex",
			"hotkey",
			"icon",
			"tags",
			"tooltip",
			"visible"
		];

		this.editor			= null;  //jquery iframe holder
		this.editorDoc		= null;
		this.element		= null;
		this.options		= {};
		this.original		= null;
		this.savedRange		= null;
		this.timers			= [];
		this.validKeyCodes	= [8, 9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46];

		this.isDestroyed	= false;

		this.dom		= { // DOM related properties and methods
			ie:		{
				parent: null // link to dom
			},
			w3c:	{
				parent: null // link to dom
			}
		};
		this.dom.parent		= this;
		this.dom.ie.parent	= this.dom;
		this.dom.w3c.parent	= this.dom;

		this.ui			= {};	// UI related properties and methods
		this.ui.self	= this;
		this.ui.toolbar	= null;
		this.ui.initialHeight = null; // ui.grow

		this.dom.getAncestor = function (element, filterTagName) {
			filterTagName = filterTagName.toLowerCase();
			
			while (element && typeof element.tagName != "undefined" && "body" !== element.tagName.toLowerCase()) {
				if (filterTagName === element.tagName.toLowerCase()) {
					return element;
				}

				element = element.parentNode;
			}
			if(!element.tagName && (element.previousSibling || element.nextSibling)) {
				if(element.previousSibling) {
					if(element.previousSibling.tagName.toLowerCase() == filterTagName) {
						return element.previousSibling;
					}
				}	
				if(element.nextSibling) {
					if(element.nextSibling.tagName.toLowerCase() == filterTagName) {
						return element.nextSibling;
					}
				}	
			}

			return null;
		};

		this.dom.getElement = function (filterTagName) {
			var dom = this;
			
			filterTagName = filterTagName.toLowerCase();			

			if (window.getSelection) {
				return dom.w3c.getElement(filterTagName);
			} else {
				return dom.ie.getElement(filterTagName);
			}
		};

		this.dom.ie.getElement = function (filterTagName) {
			var dom			= this.parent,
				selection	= dom.parent.getInternalSelection(),
				range		= selection.createRange(),
				element;

			if ("Control" === selection.type) {
				// control selection
				if (1 === range.length) {
					element = range.item(0);
				} else {
					// multiple control selection
					return null;
				}
			} else {
				element = range.parentElement();
			}

			return dom.getAncestor(element, filterTagName);
		};

		this.dom.w3c.getElement = function (filterTagName) {
			var dom		= this.parent,
				range	= dom.parent.getInternalRange(),
				element;
				
			if (!range) {
				return null;
			}

			element	= range.commonAncestorContainer;

			if (3 === element.nodeType) {
				element = element.parentNode;
			}

			// if startContainer not Text, Comment, or CDATASection element then
			// startOffset is the number of child nodes between the start of the
			// startContainer and the boundary point of the Range
			if (element === range.startContainer) {
				element = element.childNodes[range.startOffset];
			}
			
			if(!element.tagName && (element.previousSibiling || element.nextSibling)) {
				if(element.previousSibiling) {
					if(element.previousSibiling.tagName.toLowerCase() == filterTagName) {
						return element.previousSibiling;
					}
				}	
				if(element.nextSibling) {
					if(element.nextSibling.tagName.toLowerCase() == filterTagName) {
						return element.nextSibling;
					}
				}	
			}

			return dom.getAncestor(element, filterTagName);
		};

		this.ui.addHoverClass = function () {
			$(this).addClass("wysiwyg-button-hover");
		};

		this.ui.appendControls = function () {
			var ui = this,
				self = this.self,
				controls = self.parseControls(),
				hasVisibleControls	= true, // to prevent separator before first item
				groups = [],
				controlsByGroup = {},
				i,
				currentGroupIndex, // jslint wants all vars at top of function
				iterateGroup = function (controlName, control) { //called for every group when adding
					if (control.groupIndex && currentGroupIndex !== control.groupIndex) {
						currentGroupIndex = control.groupIndex;
						hasVisibleControls = false;
					}

					if (!control.visible) {
						return;
					}

					if (!hasVisibleControls) {
						ui.appendItemSeparator();
						hasVisibleControls = true;
					}

					if (control.custom) {
						ui.appendItemCustom(controlName, control);
					} else {
						ui.appendItem(controlName, control);
					}
				};

			$.each(controls, function (name, c) { //sort by groupIndex
				var index = "empty";

				if (undefined !== c.groupIndex) {
					if ("" === c.groupIndex) {
						index = "empty";
					} else {
						index = c.groupIndex;
					}
				}

				if (undefined === controlsByGroup[index]) {
					groups.push(index);
					controlsByGroup[index] = {};
				}
				controlsByGroup[index][name] = c;
			});

			groups.sort(function (a, b) { //just sort group indexes by
				if ("number" === typeof (a) && typeof (a) === typeof (b)) {
					return (a - b);
				} else {
					a = a.toString();
					b = b.toString();

					if (a > b) {
						return 1;
					}

					if (a === b) {
						return 0;
					}

					return -1;
				}
			});

			if (0 < groups.length) {
				// set to first index in groups to proper placement of separator
				currentGroupIndex = groups[0];
			}

			for (i = 0; i < groups.length; i += 1) {
				$.each(controlsByGroup[groups[i]], iterateGroup);
			}
		};

		this.ui.appendItem = function (name, control) {
			var self = this.self,
				className = control.className || control.command || name || "empty",
				tooltip = control.tooltip || control.command || name || "";

			return $('<li role="menuitem" unselectable="on">' + (className) + "</li>")
				.addClass(className)
				.attr("title", tooltip)
				.hover(this.addHoverClass, this.removeHoverClass)
				.click(function () {
					if ($(this).hasClass("disabled")) {
						return false;
					}

					self.triggerControl.apply(self, [name, control]);

					this.blur();
					self.ui.returnRange();
					self.ui.focus();
					return true;
				})
				.appendTo(self.ui.toolbar);
		};

		this.ui.appendItemCustom = function (name, control) {
			var self = this.self,
				tooltip = control.tooltip || control.command || name || "";

			if (control.callback) {
				$(window).bind("trigger-" + name + ".wysiwyg", control.callback);
			}

			return $('<li role="menuitem" unselectable="on" style="background: url(\'' + control.icon + '\') no-repeat;"></li>')
				.addClass("custom-command-" + name)
				.addClass("wysiwyg-custom-command")
				.addClass(name)
				.attr("title", tooltip)
				.hover(this.addHoverClass, this.removeHoverClass)
				.click(function () {
					if ($(this).hasClass("disabled")) {
						return false;
					}

					self.triggerControl.apply(self, [name, control]);

					this.blur();
					self.ui.returnRange();
					self.ui.focus();

					self.triggerControlCallback(name);
					return true;
				})
				.appendTo(self.ui.toolbar);
		};

		this.ui.appendItemSeparator = function () {
			var self = this.self;
			return $('<li role="separator" class="separator"></li>').appendTo(self.ui.toolbar);
		};

		this.autoSaveFunction = function () {
			this.saveContent();
		};

		//called after click in wysiwyg "textarea"
		this.ui.checkTargets = function (element) {
			var self = this.self;

			//activate controls
			$.each(self.options.controls, function (name, control) {
				var className = control.className || control.command || name || "empty",
					tags,
					elm,
					css,
					el,
					checkActiveStatus = function (cssProperty, cssValue) {
						var handler;

						if ("function" === typeof (cssValue)) {
							handler = cssValue;
							if (handler(el.css(cssProperty).toString().toLowerCase(), self)) {
								self.ui.toolbar.find("." + className).addClass("active");
							}
						} else {
							if (el.css(cssProperty).toString().toLowerCase() === cssValue) {
								self.ui.toolbar.find("." + className).addClass("active");
							}
						}
					};

				if ("fullscreen" !== className) {
					self.ui.toolbar.find("." + className).removeClass("active");
				}

				//activate by allowed tags
				if (control.tags || (control.options && control.options.tags)) {
					tags = control.tags || (control.options && control.options.tags);

					elm = element;
					while (elm) {
						if (elm.nodeType !== 1) {
							break;
						}

						if ($.inArray(elm.tagName.toLowerCase(), tags) !== -1) {
							self.ui.toolbar.find("." + className).addClass("active");
						}

						elm = elm.parentNode;
					}
				}

				//activate by supposed css
				if (control.css || (control.options && control.options.css)) {
					css = control.css || (control.options && control.options.css);
					el = $(element);

					while (el) {
						if (el[0].nodeType !== 1) {
							break;
						}
						$.each(css, checkActiveStatus);

						el = el.parent();
					}
				}
			});
		};

		this.ui.designMode = function () {
			var attempts = 3,
				self = this.self,
				runner;
				runner = function (attempts) {
					if ("on" === self.editorDoc.designMode) {
						if (self.timers.designMode) {
							window.clearTimeout(self.timers.designMode);
						}

						// IE needs to reget the document element (this.editorDoc) after designMode was set
						if (self.innerDocument() !== self.editorDoc) {
							self.ui.initFrame();
						}

						return;
					}

					try {
						self.editorDoc.designMode = "on";
					} catch (e) {
					}

					attempts -= 1;
					if (attempts > 0) {
						self.timers.designMode = window.setTimeout(function () { runner(attempts); }, 100);
					}
				};

			runner(attempts);
		};

		this.destroy = function () {
			this.isDestroyed = true;

			var i, $form = this.element.closest("form");

			for (i = 0; i < this.timers.length; i += 1) {
				window.clearTimeout(this.timers[i]);
			}

			// Remove bindings
			$form.unbind(".wysiwyg");
			this.element.remove();
			$.removeData(this.original, "wysiwyg");
			$(this.original).show();
			return this;
		};

		this.getRangeText = function () {
			var r = this.getInternalRange();

			if (r.toString) {
				r = r.toString();
			} else if (r.text) {	// IE
				r = r.text;
			}

			return r;
		};
		//not used?
		this.execute = function (command, arg) {
			if (typeof (arg) === "undefined") {
				arg = null;
			}
			this.editorDoc.execCommand(command, false, arg);
		};

		this.extendOptions = function (options) {
			var controls = {};

			/**
			 * If the user set custom controls, we catch it, and merge with the
			 * defaults controls later.
			 */
			if ("object" === typeof options.controls) {
				controls = options.controls;
				delete options.controls;
			}

			options = $.extend(true, {}, this.defaults, options);
			options.controls = $.extend(true, {}, controls, this.controls, controls);

			if (options.rmUnusedControls) {
				$.each(options.controls, function (controlName) {
					if (!controls[controlName]) {
						delete options.controls[controlName];
					}
				});
			}

			return options;
		};

		this.ui.focus = function () {
			var self = this.self;

			self.editor.get(0).contentWindow.focus();
			return self;
		};

		this.ui.returnRange = function () {
			var self = this.self, sel;

			if (self.savedRange !== null) {
				if (window.getSelection) { //non IE and there is already a selection
					sel = window.getSelection();
					if (sel.rangeCount > 0) {
						sel.removeAllRanges();
					}
					try {
						sel.addRange(self.savedRange);
					} catch (e) {
						console.error(e);
					}
				} else if (window.document.createRange) { // non IE and no selection
					window.getSelection().addRange(self.savedRange);
				} else if (window.document.selection) { //IE
					self.savedRange.select();
				}

				self.savedRange = null;
			}
		};

		this.increaseFontSize = function () {
			if ($.browser.mozilla || $.browser.opera) {
				this.editorDoc.execCommand("increaseFontSize", false, null);
			} else if ($.browser.safari) {				
				var Range = this.getInternalRange(),
					Selection = this.getInternalSelection(),
					newNode = this.editorDoc.createElement("big");

				// If cursor placed on text node
				if (true === Range.collapsed && 3 === Range.commonAncestorContainer.nodeType) {
					var text = Range.commonAncestorContainer.nodeValue.toString(),
						start = text.lastIndexOf(" ", Range.startOffset) + 1,
						end = (-1 === text.indexOf(" ", Range.startOffset)) ? text : text.indexOf(" ", Range.startOffset);

					Range.setStart(Range.commonAncestorContainer, start);
					Range.setEnd(Range.commonAncestorContainer, end);

					Range.surroundContents(newNode);
					Selection.addRange(Range);
				} else {
					Range.surroundContents(newNode);
					Selection.removeAllRanges();
					Selection.addRange(Range);
				}
			} else {
				console.error("Internet Explorer?");
			}
		};

		this.decreaseFontSize = function () {
			if ($.browser.mozilla || $.browser.opera) {
				this.editorDoc.execCommand("decreaseFontSize", false, null);
			} else if ($.browser.safari) {
				var Range = this.getInternalRange(),
					Selection = this.getInternalSelection(),
					newNode = this.editorDoc.createElement("small");

				// If cursor placed on text node
				if (true === Range.collapsed && 3 === Range.commonAncestorContainer.nodeType) {
					var text = Range.commonAncestorContainer.nodeValue.toString(),
						start = text.lastIndexOf(" ", Range.startOffset) + 1,
						end = (-1 === text.indexOf(" ", Range.startOffset)) ? text : text.indexOf(" ", Range.startOffset);
	
					Range.setStart(Range.commonAncestorContainer, start);
					Range.setEnd(Range.commonAncestorContainer, end);
	
					Range.surroundContents(newNode);
					Selection.addRange(Range);
				} else {
					Range.surroundContents(newNode);
					Selection.removeAllRanges();
					Selection.addRange(Range);
				}
			} else {
				console.error("Internet Explorer?");
			}
		};

		this.getContent = function () {
			if (this.viewHTML) {
				this.setContent(this.original.value);
			}
			return this.events.filter('getContent', this.editorDoc.body.innerHTML);
		};
		
		/**
		 * A jWysiwyg specific event system.
		 *
		 * Example:
		 * 
		 * $("#editor").getWysiwyg().events.bind("getContent", function (orig) {
		 *     return "<div id='content'>"+orgi+"</div>";
		 * });
		 * 
		 * This makes it so that when ever getContent is called, it is wrapped in a div#content.
		 */
		this.events = {
			_events : {},
			
			/**
			 * Similar to jQuery's bind, but for jWysiwyg only.
			 */
			bind : function (eventName, callback) {
				if (typeof (this._events.eventName) !== "object") {
					this._events[eventName] = [];
				}
				this._events[eventName].push(callback);
			},
			
			/**
			 * Similar to jQuery's trigger, but for jWysiwyg only.
			 */
			trigger : function (eventName, args) {
				if (typeof (this._events.eventName) === "object") {
					var editor = this.editor;
					$.each(this._events[eventName], function (k, v) {
						if (typeof (v) === "function") {
							v.apply(editor, args);
						}
					});
				}
			},
			
			/**
			 * This "filters" `originalText` by passing it as the first argument to every callback
			 * with the name `eventName` and taking the return value and passing it to the next function.
			 *
			 * This function returns the result after all the callbacks have been applied to `originalText`.
			 */
			filter : function (eventName, originalText) {
				if (typeof (this._events[eventName]) === "object") {
					var editor = this.editor,
						args = Array.prototype.slice.call(arguments, 1);

					$.each(this._events[eventName], function (k, v) {
						if (typeof (v) === "function") {
							originalText = v.apply(editor, args);
						}
					});
				}
				return originalText;
			}
		};

		this.getElementByAttributeValue = function (tagName, attributeName, attributeValue) {
			var i, value, elements = this.editorDoc.getElementsByTagName(tagName);

			for (i = 0; i < elements.length; i += 1) {
				value = elements[i].getAttribute(attributeName);

				if ($.browser.msie) {
					/** IE add full path, so I check by the last chars. */
					value = value.substr(value.length - attributeValue.length);
				}

				if (value === attributeValue) {
					return elements[i];
				}
			}

			return false;
		};

		this.getInternalRange = function () {
			var selection = this.getInternalSelection();

			if (!selection) {
				return null;
			}

			if (selection.rangeCount && selection.rangeCount > 0) { // w3c
				return selection.getRangeAt(0);
			} else if (selection.createRange) { // ie
				return selection.createRange();
			}

			return null;
		};

		this.getInternalSelection = function () {
			// firefox: document.getSelection is deprecated
			if (this.editor.get(0).contentWindow) {
				if (this.editor.get(0).contentWindow.getSelection) {
					return this.editor.get(0).contentWindow.getSelection();
				}
				if (this.editor.get(0).contentWindow.selection) {
					return this.editor.get(0).contentWindow.selection;
				}
			}
			if (this.editorDoc.getSelection) {
				return this.editorDoc.getSelection();
			}
			if (this.editorDoc.selection) {
				return this.editorDoc.selection;
			}

			return null;
		};

		this.getRange = function () {
			var selection = this.getSelection();

			if (!selection) {
				return null;
			}

			if (selection.rangeCount && selection.rangeCount > 0) { // w3c
				selection.getRangeAt(0);
			} else if (selection.createRange) { // ie
				return selection.createRange();
			}

			return null;
		};

		this.getSelection = function () {
			return (window.getSelection) ? window.getSelection() : window.document.selection;
		};

		// :TODO: you can type long string and letters will be hidden because of overflow
		this.ui.grow = function () {
			var self = this.self,
				innerBody = $(self.editorDoc.body),
				innerHeight = $.browser.msie ? innerBody[0].scrollHeight : innerBody.height() + 2 + 20, // 2 - borders, 20 - to prevent content jumping on grow
				minHeight = self.ui.initialHeight,
				height = Math.max(innerHeight, minHeight);

			height = Math.min(height, self.options.maxHeight);

			self.editor.attr("scrolling", height < self.options.maxHeight ? "no" : "auto"); // hide scrollbar firefox
			innerBody.css("overflow", height < self.options.maxHeight ? "hidden" : ""); // hide scrollbar chrome

			self.editor.get(0).height = height;

			return self;
		};

		this.init = function (element, options) {
			var self = this,
				$form = $(element).closest("form"),
				newX = (element.width || element.clientWidth || 0),
				newY = (element.height || element.clientHeight || 0)
				;

			this.options	= this.extendOptions(options);
			this.original	= element;
			this.ui.toolbar	= $(this.options.toolbarHtml);

			if ($.browser.msie && parseInt($.browser.version, 10) < 8) {
				this.options.autoGrow = false;
			}

			if (newX === 0 && element.cols) {
				newX = (element.cols * 8) + 21;
			}
			if (newY === 0 && element.rows) {
				newY = (element.rows * 16) + 16;
			}

			this.editor = $(window.location.protocol === "https:" ? '<iframe src="javascript:false;"></iframe>' : "<iframe></iframe>").attr("frameborder", "0");

			if (this.options.iFrameClass) {
				this.editor.addClass(this.options.iFrameClass);
			} else {
				this.editor.css({
					minHeight: (newY - 6).toString() + "px",
					// fix for issue 12 ( http://github.com/akzhan/jwysiwyg/issues/issue/12 )
					width: (newX > 50) ? (newX - 8).toString() + "px" : ""
				});
				if ($.browser.msie && parseInt($.browser.version, 10) < 7) {
					this.editor.css("height", newY.toString() + "px");
				}
			}
			/** 
			 * Automagically add id to iframe if textarea has its own when possible 
			 * ( http://github.com/akzhan/jwysiwyg/issues/245 )
			 */
			if (element.id) {
				var proposedId = element.id + '-wysiwyg-iframe';
				if (! document.getElementById(proposedId)) {
					this.editor.attr('id', proposedId);
				}
			}

			/**
			 * http://code.google.com/p/jwysiwyg/issues/detail?id=96
			 */
			this.editor.attr("tabindex", $(element).attr("tabindex"));

			this.element = $("<div/>").addClass("wysiwyg");

			if (!this.options.iFrameClass) {
				this.element.css({
					width: (newX > 0) ? newX.toString() + "px" : "100%"
				});
			}

			$(element).hide().before(this.element);

			this.viewHTML = false;

			/**
			 * @link http://code.google.com/p/jwysiwyg/issues/detail?id=52
			 */
			this.initialContent = $(element).val();
			this.ui.initFrame();

			if (this.options.resizeOptions && $.fn.resizable) {
				this.element.resizable($.extend(true, {
					alsoResize: this.editor
				}, this.options.resizeOptions));
			}

			if (this.options.autoSave) {
				$form.bind("submit.wysiwyg", function () { self.autoSaveFunction(); });
			}

			$form.bind("reset.wysiwyg", function () { self.resetFunction(); });
		};

		this.ui.initFrame = function () {
			var self = this.self,
				stylesheet,
				growHandler,
				saveHandler;

			self.ui.appendControls();
			self.element.append(self.ui.toolbar)
				.append($("<div><!-- --></div>")
					.css({
						clear: "both"
					}))
				.append(self.editor);

			self.editorDoc = self.innerDocument();

			if (self.isDestroyed) {
				return null;
			}

			self.ui.designMode();
			self.editorDoc.open();
			self.editorDoc.write(
				self.options.html
					/**
					 * @link http://code.google.com/p/jwysiwyg/issues/detail?id=144
					 */
					.replace(/INITIAL_CONTENT/, function () { return self.wrapInitialContent(); })
			);
			self.editorDoc.close();

			$.wysiwyg.plugin.bind(self);

			$(self.editorDoc).trigger("initFrame.wysiwyg");

			$(self.editorDoc).bind("click.wysiwyg", function (event) {
				self.ui.checkTargets(event.target ? event.target : event.srcElement);
			});

			/**
			 * @link http://code.google.com/p/jwysiwyg/issues/detail?id=20
			 */
			$(self.original).focus(function () {
				if ($(this).filter(":visible").length === 0) {
					return;
				}
				self.ui.focus();
			});

			$(self.editorDoc).keydown(function (event) {
				var emptyContentRegex;
				if (event.keyCode === 8) { // backspace
					emptyContentRegex = /^<([\w]+)[^>]*>(<br\/?>)?<\/\1>$/;
					if (emptyContentRegex.test(self.getContent())) { // if content is empty
						event.stopPropagation(); // prevent remove single empty tag
						return false;
					}
				}
				return true;
			});

			if (!$.browser.msie) {
				$(self.editorDoc).keydown(function (event) {
					var controlName;

					/* Meta for Macs. tom@punkave.com */
					if (event.ctrlKey || event.metaKey) {
						for (controlName in self.controls) {
							if (self.controls[controlName].hotkey && self.controls[controlName].hotkey.ctrl) {
								if (event.keyCode === self.controls[controlName].hotkey.key) {
									self.triggerControl.apply(self, [controlName, self.controls[controlName]]);

									return false;
								}
							}
						}
					}

					return true;
				});
			} else if (self.options.brIE) {
				$(self.editorDoc).keydown(function (event) {
					if (event.keyCode === 13) {
						var rng = self.getRange();
						rng.pasteHTML("<br/>");
						rng.collapse(false);
						rng.select();

						return false;
					}

					return true;
				});
			}

			if (self.options.plugins.rmFormat.rmMsWordMarkup) {
				$(self.editorDoc).bind("keyup.wysiwyg", function (event) {
					if (event.ctrlKey || event.metaKey) {
						// CTRL + V (paste)
						if (86 === event.keyCode) {
							if ($.wysiwyg.rmFormat) {
								if ("object" === typeof (self.options.plugins.rmFormat.rmMsWordMarkup)) {
									$.wysiwyg.rmFormat.run(self, {rules: { msWordMarkup: self.options.plugins.rmFormat.rmMsWordMarkup }});
								} else {
									$.wysiwyg.rmFormat.run(self, {rules: { msWordMarkup: { enabled: true }}});
								}
							}
						}
					}
				});
			}

			if (self.options.autoSave) {
				$(self.editorDoc).keydown(function () { self.autoSaveFunction(); })
					.keyup(function () { self.autoSaveFunction(); })
					.mousedown(function () { self.autoSaveFunction(); })
					.bind($.support.noCloneEvent ? "input.wysiwyg" : "paste.wysiwyg", function () { self.autoSaveFunction(); });
			}

			if (self.options.autoGrow) {
				if (self.options.initialMinHeight !== null) {
					self.ui.initialHeight = self.options.initialMinHeight;
				} else {
					self.ui.initialHeight = $(self.editorDoc).height();
				}
				$(self.editorDoc.body).css("border", "1px solid white"); // cancel margin collapsing

				growHandler = function () {
					self.ui.grow();
				};

				$(self.editorDoc).keyup(growHandler);
				$(self.editorDoc).bind("editorRefresh.wysiwyg", growHandler);

				// fix when content height > textarea height
				self.ui.grow();
			}

			if (self.options.css) {
				if (String === self.options.css.constructor) {
					if ($.browser.msie) {
						stylesheet = self.editorDoc.createStyleSheet(self.options.css);
						$(stylesheet).attr({
							"media":	"all"
						});
					} else {
						stylesheet = $("<link/>").attr({
							"href":		self.options.css,
							"media":	"all",
							"rel":		"stylesheet",
							"type":		"text/css"
						});

						$(self.editorDoc).find("head").append(stylesheet);
					}
				} else {
					self.timers.initFrame_Css = window.setTimeout(function () {
						$(self.editorDoc.body).css(self.options.css);
					}, 0);
				}
			}

			if (self.initialContent.length === 0) {
				if ("function" === typeof (self.options.initialContent)) {
					self.setContent(self.options.initialContent());
				} else {
					self.setContent(self.options.initialContent);
				}
			}

			if (self.options.maxLength > 0) {
				$(self.editorDoc).keydown(function (event) {
					if ($(self.editorDoc).text().length >= self.options.maxLength && $.inArray(event.which, self.validKeyCodes) === -1) {
						event.preventDefault();
					}
				});
			}
			
			// Support event callbacks
			$.each(self.options.events, function (key, handler) {
				$(self.editorDoc).bind(key + ".wysiwyg", function (event) {
					// Trigger event handler, providing the event and api to 
					// support additional functionality.
					handler.apply(self.editorDoc, [event, self]);
				});
			});

			// restores selection properly on focus
			if ($.browser.msie) {
				// Event chain: beforedeactivate => focusout => blur.
				// Focusout & blur fired too late to handle internalRange() in dialogs.
				// When clicked on input boxes both got range = null
				$(self.editorDoc).bind("beforedeactivate.wysiwyg", function () {
					self.savedRange = self.getInternalRange();
				});
			} else {
				$(self.editorDoc).bind("blur.wysiwyg", function () {
					self.savedRange = self.getInternalRange();
				});
			}

			$(self.editorDoc.body).addClass("wysiwyg");
			if (self.options.events && self.options.events.save) {
				saveHandler = self.options.events.save;

				$(self.editorDoc).bind("keyup.wysiwyg", saveHandler);
				$(self.editorDoc).bind("change.wysiwyg", saveHandler);

				if ($.support.noCloneEvent) {
					$(self.editorDoc).bind("input.wysiwyg", saveHandler);
				} else {
					$(self.editorDoc).bind("paste.wysiwyg", saveHandler);
					$(self.editorDoc).bind("cut.wysiwyg", saveHandler);
				}
			}
			
			/**
			 * XHTML5 {@link https://github.com/akzhan/jwysiwyg/issues/152}
			 */
			if (self.options.xhtml5 && self.options.unicode) {
				var replacements = {ne:8800,le:8804,para:182,xi:958,darr:8595,nu:957,oacute:243,Uacute:218,omega:969,prime:8242,pound:163,igrave:236,thorn:254,forall:8704,emsp:8195,lowast:8727,brvbar:166,alefsym:8501,nbsp:160,delta:948,clubs:9827,lArr:8656,Omega:937,Auml:196,cedil:184,and:8743,plusmn:177,ge:8805,raquo:187,uml:168,equiv:8801,laquo:171,rdquo:8221,Epsilon:917,divide:247,fnof:402,chi:967,Dagger:8225,iacute:237,rceil:8969,sigma:963,Oslash:216,acute:180,frac34:190,lrm:8206,upsih:978,Scaron:352,part:8706,exist:8707,nabla:8711,image:8465,prop:8733,zwj:8205,omicron:959,aacute:225,Yuml:376,Yacute:221,weierp:8472,rsquo:8217,otimes:8855,kappa:954,thetasym:977,harr:8596,Ouml:214,Iota:921,ograve:242,sdot:8901,copy:169,oplus:8853,acirc:226,sup:8835,zeta:950,Iacute:205,Oacute:211,crarr:8629,Nu:925,bdquo:8222,lsquo:8216,apos:39,Beta:914,eacute:233,egrave:232,lceil:8968,Kappa:922,piv:982,Ccedil:199,ldquo:8220,Xi:926,cent:162,uarr:8593,hellip:8230,Aacute:193,ensp:8194,sect:167,Ugrave:217,aelig:230,ordf:170,curren:164,sbquo:8218,macr:175,Phi:934,Eta:919,rho:961,Omicron:927,sup2:178,euro:8364,aring:229,Theta:920,mdash:8212,uuml:252,otilde:245,eta:951,uacute:250,rArr:8658,nsub:8836,agrave:224,notin:8713,ndash:8211,Psi:936,Ocirc:212,sube:8838,szlig:223,micro:181,not:172,sup1:185,middot:183,iota:953,ecirc:234,lsaquo:8249,thinsp:8201,sum:8721,ntilde:241,scaron:353,cap:8745,atilde:227,lang:10216,__replacement:65533,isin:8712,gamma:947,Euml:203,ang:8736,upsilon:965,Ntilde:209,hearts:9829,Alpha:913,Tau:932,spades:9824,dagger:8224,THORN:222,"int":8747,lambda:955,Eacute:201,Uuml:220,infin:8734,rlm:8207,Aring:197,ugrave:249,Egrave:200,Acirc:194,rsaquo:8250,ETH:208,oslash:248,alpha:945,Ograve:210,Prime:8243,mu:956,ni:8715,real:8476,bull:8226,beta:946,icirc:238,eth:240,prod:8719,larr:8592,ordm:186,perp:8869,Gamma:915,reg:174,ucirc:251,Pi:928,psi:968,tilde:732,asymp:8776,zwnj:8204,Agrave:192,deg:176,AElig:198,times:215,Delta:916,sim:8764,Otilde:213,Mu:924,uArr:8657,circ:710,theta:952,Rho:929,sup3:179,diams:9830,tau:964,Chi:935,frac14:188,oelig:339,shy:173,or:8744,dArr:8659,phi:966,iuml:239,Lambda:923,rfloor:8971,iexcl:161,cong:8773,ccedil:231,Icirc:206,frac12:189,loz:9674,rarr:8594,cup:8746,radic:8730,frasl:8260,euml:235,OElig:338,hArr:8660,Atilde:195,Upsilon:933,there4:8756,ouml:246,oline:8254,Ecirc:202,yacute:253,auml:228,permil:8240,sigmaf:962,iquest:191,empty:8709,pi:960,Ucirc:219,supe:8839,Igrave:204,yen:165,rang:10217,trade:8482,lfloor:8970,minus:8722,Zeta:918,sub:8834,epsilon:949,yuml:255,Sigma:931,Iuml:207,ocirc:244};
				self.events.bind("getContent", function (text) {
					return text.replace(/&(?:amp;)?(?!amp|lt|gt|quot)([a-z][a-z0-9]*);/gi, function (str, p1) {
						if (!replacements[p1]) {
							p1 = p1.toLowerCase();
							if (!replacements[p1]) {
								p1 = "__replacement";
							}
						}
						
						var num = replacements[p1];
						/* Numeric return if ever wanted: return replacements[p1] ? "&#"+num+";" : ""; */
						return String.fromCharCode(num);
					});
				});
			}
			$(self.original).trigger('ready.jwysiwyg', [self.editorDoc, self]);
		};

		this.innerDocument = function () {
			var element = this.editor.get(0);

			if (element.nodeName.toLowerCase() === "iframe") {
				if (element.contentDocument) {				// Gecko
					return element.contentDocument;
				} else if (element.contentWindow) {			// IE
					return element.contentWindow.document;
				}

				if (this.isDestroyed) {
					return null;
				}

				console.error("Unexpected error in innerDocument");

				/*
				 return ( $.browser.msie )
				 ? document.frames[element.id].document
				 : element.contentWindow.document // contentDocument;
				 */
			}

			return element;
		};

		this.insertHtml = function (szHTML) {
			var img, range;

			if (!szHTML || szHTML.length === 0) {
				return this;
			}

			if ($.browser.msie) {
				this.ui.focus();
				this.editorDoc.execCommand("insertImage", false, "#jwysiwyg#");
				img = this.getElementByAttributeValue("img", "src", "#jwysiwyg#");
				if (img) {
					$(img).replaceWith(szHTML);
				}
			} else {
				if ($.browser.mozilla) { // @link https://github.com/akzhan/jwysiwyg/issues/50
					if (1 === $(szHTML).length) {
						range = this.getInternalRange();
						range.deleteContents();
						range.insertNode($(szHTML).get(0));
					} else {
						this.editorDoc.execCommand("insertHTML", false, szHTML);
					}
				} else {
					if (!this.editorDoc.execCommand("insertHTML", false, szHTML)) {
						this.editor.focus();
						/* :TODO: place caret at the end
						if (window.getSelection) {
						} else {
						}
						this.editor.focus();
						*/
						this.editorDoc.execCommand("insertHTML", false, szHTML);
					}
				}
			}

			this.saveContent();
			
			return this;
		};

		//check allowed properties
		this.parseControls = function () {
			var self = this;

			$.each(this.options.controls, function (controlName, control) {
				$.each(control, function (propertyName) {
					if (-1 === $.inArray(propertyName, self.availableControlProperties)) {
						throw controlName + '["' + propertyName + '"]: property "' + propertyName + '" not exists in Wysiwyg.availableControlProperties';
					}
				});
			});

			if (this.options.parseControls) { //user callback
				return this.options.parseControls.call(this);
			}

			return this.options.controls;
		};

		this.removeFormat = function () {
			if ($.browser.msie) {
				this.ui.focus();
			}

			if (this.options.removeHeadings) {
				this.editorDoc.execCommand("formatBlock", false, "<p>"); // remove headings
			}

			this.editorDoc.execCommand("removeFormat", false, null);
			this.editorDoc.execCommand("unlink", false, null);

			if ($.wysiwyg.rmFormat && $.wysiwyg.rmFormat.enabled) {
				if ("object" === typeof (this.options.plugins.rmFormat.rmMsWordMarkup)) {
					$.wysiwyg.rmFormat.run(this, {rules: { msWordMarkup: this.options.plugins.rmFormat.rmMsWordMarkup }});
				} else {
					$.wysiwyg.rmFormat.run(this, {rules: { msWordMarkup: { enabled: true }}});
				}
			}

			return this;
		};

		this.ui.removeHoverClass = function () {
			$(this).removeClass("wysiwyg-button-hover");
		};

		this.resetFunction = function () {
			this.setContent(this.initialContent);
		};

		this.saveContent = function () {
			if (this.viewHTML)
			{
				return; // no need
			}
			if (this.original) {
				var content, newContent;

				content = this.getContent();

				if (this.options.rmUnwantedBr) {
					content = content.replace(/<br\/?>$/, "");
				}

				if (this.options.replaceDivWithP) {
					newContent = $("<div/>").addClass("temp").append(content);

					newContent.children("div").each(function () {
						var element = $(this), p = element.find("p"), i;

						if (0 === p.length) {
							p = $("<p></p>");

							if (this.attributes.length > 0) {
								for (i = 0; i < this.attributes.length; i += 1) {
									p.attr(this.attributes[i].name, element.attr(this.attributes[i].name));
								}
							}

							p.append(element.html());

							element.replaceWith(p);
						}
					});
					
					content = newContent.html();
				}

				$(this.original).val(content);

				if (this.options.events && this.options.events.save) {
					this.options.events.save.call(this);
				}
			}

			return this;
		};

		this.setContent = function (newContent) {
			this.editorDoc.body.innerHTML = newContent;
			this.saveContent();

			return this;
		};

		this.triggerControl = function (name, control) {
			var cmd = control.command || name,							//command directly for designMode=on iframe (this.editorDoc)
				args = control["arguments"] || [];

			if (control.exec) {
				control.exec.apply(this);  //custom exec function in control, allows DOM changing
			} else {
				this.ui.focus();
				this.ui.withoutCss(); //disable style="" attr inserting in mozzila's designMode
				// when click <Cut>, <Copy> or <Paste> got "Access to XPConnect service denied" code: "1011"
				// in Firefox untrusted JavaScript is not allowed to access the clipboard
				try {
					this.editorDoc.execCommand(cmd, false, args);
				} catch (e) {
					console.error(e);
				}
			}

			if (this.options.autoSave) {
				this.autoSaveFunction();
			}
		};

		this.triggerControlCallback = function (name) {
			$(window).trigger("trigger-" + name + ".wysiwyg", [this]);
		};

		this.ui.withoutCss = function () {
			var self = this.self;

			if ($.browser.mozilla) {
				try {
					self.editorDoc.execCommand("styleWithCSS", false, false);
				} catch (e) {
					try {
						self.editorDoc.execCommand("useCSS", false, true);
					} catch (e2) {
					}
				}
			}

			return self;
		};

		this.wrapInitialContent = function () {
			var content = this.initialContent,
				found = content.match(/<\/?p>/gi);

			if (!found) {
				return "<p>" + content + "</p>";
			} else {
				// :TODO: checking/replacing
			}

			return content;
		};
	}

	/*
	 * Wysiwyg namespace: public properties and methods
	 */
	$.wysiwyg = {
		messages: {
			noObject: "Something goes wrong, check object"
		},

		/**
		 * Custom control support by Alec Gorge ( http://github.com/alecgorge )
		 */
		addControl: function (object, name, settings) {
			return object.each(function () {
				var oWysiwyg = $(this).data("wysiwyg"),
					customControl = {},
					toolbar;

				if (!oWysiwyg) {
					return this;
				}

				customControl[name] = $.extend(true, {visible: true, custom: true}, settings);
				$.extend(true, oWysiwyg.options.controls, customControl);

				// render new toolbar
				toolbar = $(oWysiwyg.options.toolbarHtml);
				oWysiwyg.ui.toolbar.replaceWith(toolbar);
				oWysiwyg.ui.toolbar = toolbar;
				oWysiwyg.ui.appendControls();
			});
		},

		clear: function (object) {
			return object.each(function () {
				var oWysiwyg = $(this).data("wysiwyg");

				if (!oWysiwyg) {
					return this;
				}

				oWysiwyg.setContent("");
			});
		},

		console: console, // let our console be available for extensions

		destroy: function (object) {
			return object.each(function () {
				var oWysiwyg = $(this).data("wysiwyg");

				if (!oWysiwyg) {
					return this;
				}

				oWysiwyg.destroy();
			});
		},

		"document": function (object) {
			// no chains because of return
			var oWysiwyg = object.data("wysiwyg");

			if (!oWysiwyg) {
				return undefined;
			}

			return $(oWysiwyg.editorDoc);
		},

		getContent: function (object) {
			// no chains because of return
			var oWysiwyg = object.data("wysiwyg");

			if (!oWysiwyg) {
				return undefined;
			}

			return oWysiwyg.getContent();
		},

		init: function (object, options) {
			return object.each(function () {
				var opts = $.extend(true, {}, options),
					obj;

				// :4fun:
				// remove this textarea validation and change line in this.saveContent function
				// $(this.original).val(content); to $(this.original).html(content);
				// now you can make WYSIWYG editor on h1, p, and many more tags
				if (("textarea" !== this.nodeName.toLowerCase()) || $(this).data("wysiwyg")) {
					return;
				}

				obj = new Wysiwyg();
				obj.init(this, opts);
				$.data(this, "wysiwyg", obj);

				$(obj.editorDoc).trigger("afterInit.wysiwyg");
			});
		},

		insertHtml: function (object, szHTML) {
			return object.each(function () {
				var oWysiwyg = $(this).data("wysiwyg");

				if (!oWysiwyg) {
					return this;
				}

				oWysiwyg.insertHtml(szHTML);
			});
		},

		plugin: {
			listeners: {},

			bind: function (Wysiwyg) {
				var self = this;

				$.each(this.listeners, function (action, handlers) {
					var i, plugin;

					for (i = 0; i < handlers.length; i += 1) {
						plugin = self.parseName(handlers[i]);

						$(Wysiwyg.editorDoc).bind(action + ".wysiwyg", {plugin: plugin}, function (event) {
							$.wysiwyg[event.data.plugin.name][event.data.plugin.method].apply($.wysiwyg[event.data.plugin.name], [Wysiwyg]);
						});
					}
				});
			},

			exists: function (name) {
				var plugin;

				if ("string" !== typeof (name)) {
					return false;
				}

				plugin = this.parseName(name);

				if (!$.wysiwyg[plugin.name] || !$.wysiwyg[plugin.name][plugin.method]) {
					return false;
				}

				return true;
			},

			listen: function (action, handler) {
				var plugin;

				plugin = this.parseName(handler);

				if (!$.wysiwyg[plugin.name] || !$.wysiwyg[plugin.name][plugin.method]) {
					return false;
				}

				if (!this.listeners[action]) {
					this.listeners[action] = [];
				}

				this.listeners[action].push(handler);

				return true;
			},

			parseName: function (name) {
				var elements;

				if ("string" !== typeof (name)) {
					return false;
				}

				elements = name.split(".");

				if (2 > elements.length) {
					return false;
				}

				return {name: elements[0], method: elements[1]};
			},

			register: function (data) {
				if (!data.name) {
					console.error("Plugin name missing");
				}

				$.each($.wysiwyg, function (pluginName) {
					if (pluginName === data.name) {
						console.error("Plugin with name '" + data.name + "' was already registered");
					}
				});

				$.wysiwyg[data.name] = data;

				return true;
			}
		},

		removeFormat: function (object) {
			return object.each(function () {
				var oWysiwyg = $(this).data("wysiwyg");

				if (!oWysiwyg) {
					return this;
				}

				oWysiwyg.removeFormat();
			});
		},

		save: function (object) {
			return object.each(function () {
				var oWysiwyg = $(this).data("wysiwyg");

				if (!oWysiwyg) {
					return this;
				}

				oWysiwyg.saveContent();
			});
		},

		selectAll: function (object) {
			var oWysiwyg = object.data("wysiwyg"), oBody, oRange, selection;

			if (!oWysiwyg) {
				return this;
			}

			oBody = oWysiwyg.editorDoc.body;
			if (window.getSelection) {
				selection = oWysiwyg.getInternalSelection();
				selection.selectAllChildren(oBody);
			} else {
				oRange = oBody.createTextRange();
				oRange.moveToElementText(oBody);
				oRange.select();
			}
		},

		setContent: function (object, newContent) {
			return object.each(function () {
				var oWysiwyg = $(this).data("wysiwyg");

				if (!oWysiwyg) {
					return this;
				}

				oWysiwyg.setContent(newContent);
			});
		},

		triggerControl: function (object, controlName) {
			return object.each(function () {
				var oWysiwyg = $(this).data("wysiwyg");

				if (!oWysiwyg) {
					return this;
				}

				if (!oWysiwyg.controls[controlName]) {
					console.error("Control '" + controlName + "' not exists");
				}

				oWysiwyg.triggerControl.apply(oWysiwyg, [controlName, oWysiwyg.controls[controlName]]);
			});
		},

		support: {
			prop: supportsProp
		},

		utils: {
			extraSafeEntities: [["<", ">", "'", '"', " "], [32]],

			encodeEntities: function (str) {
				var self = this, aStr, aRet = [];

				if (this.extraSafeEntities[1].length === 0) {
					$.each(this.extraSafeEntities[0], function (i, ch) {
						self.extraSafeEntities[1].push(ch.charCodeAt(0));
					});
				}
				aStr = str.split("");
				$.each(aStr, function (i) {
					var iC = aStr[i].charCodeAt(0);
					if ($.inArray(iC, self.extraSafeEntities[1]) && (iC < 65 || iC > 127 || (iC > 90 && iC < 97))) {
						aRet.push('&#' + iC + ';');
					} else {
						aRet.push(aStr[i]);
					}
				});

				return aRet.join('');
			}
		}
	};

	/**
	 * Unifies dialog methods to allow custom implementations
	 * 
	 * Events:
	 *     * afterOpen
	 *     * beforeShow
	 *     * afterShow
	 *     * beforeHide
	 *     * afterHide
	 *     * beforeClose
	 *     * afterClose
	 * 
	 * Example:
	 * var dialog = new ($.wysiwyg.dialog)($('#idToTextArea').data('wysiwyg'), {"title": "Test", "content": "form data, etc."});
	 * 
	 * dialog.bind("afterOpen", function () { alert('you should see a dialog behind this one!'); });
	 * 
	 * dialog.open();
	 * 
	 * 
	 */
	$.wysiwyg.dialog = function (jWysiwyg, opts) {
		
		var theme	= (jWysiwyg && jWysiwyg.options && jWysiwyg.options.dialog) ? jWysiwyg.options.dialog : (opts.theme ? opts.theme : "default"),
			obj		= new $.wysiwyg.dialog.createDialog(theme),
			that	= this,
			$that	= $(that);
				
		this.options = {
			"modal": true,
			"draggable": true,
			"title": "Title",
			"content": "Content",
			"width":  "auto",
			"height": "auto",
			"zIndex": 2000,
			"open": false,
			"close": false
		};

		this.isOpen = false;

		$.extend(this.options, opts);

		this.object = obj;

		// Opens a dialog with the specified content
		this.open = function () {
			this.isOpen = true;

			obj.init.apply(that, []);
			var $dialog = obj.show.apply(that, []);

			$that.trigger("afterOpen", [$dialog]);
			
		};

		this.show = function () {
			this.isOpen = true;
			
			$that.trigger("beforeShow");
			
			var $dialog = obj.show.apply(that, []);
			
			$that.trigger("afterShow");
		};

		this.hide = function () {
			this.isOpen = false;
			
			$that.trigger("beforeHide");
			
			var $dialog = obj.hide.apply(that, []);
			
			$that.trigger("afterHide", [$dialog]);
		};

		// Closes the dialog window.
		this.close = function () {
			this.isOpen = false;
						
			var $dialog = obj.hide.apply(that, []);
			
			$that.trigger("beforeClose", [$dialog]);
			
			obj.destroy.apply(that, []);
			
			$that.trigger("afterClose", [$dialog]);
			
		};

		if (this.options.open) {
			$that.bind("afterOpen", this.options.open);
		}
		if (this.options.close) {
			$that.bind("afterClose", this.options.close);
		}

		return this;
	};

	// "Static" Dialog methods.
	$.extend(true, $.wysiwyg.dialog, {
		_themes : {}, // sample {"Theme Name": object}
		_theme : "", // the current theme

		register : function(name, obj) {
			$.wysiwyg.dialog._themes[name] = obj;
		},

		deregister : function (name) {
			delete $.wysiwyg.dialog._themes[name];
		},

		createDialog : function (name) {
			return new ($.wysiwyg.dialog._themes[name]);
		},
		
		getDimensions : function () {
			var width  = document.body.scrollWidth,
				height = document.body.scrollHeight;

			if ($.browser.opera) {
				height = Math.max(
					$(document).height(),
					$(window).height(),
					document.documentElement.clientHeight);
			}

			return [width, height];
		}
	});

	$(function () { // need access to jQuery UI stuff.
		if (jQuery.ui) {
			$.wysiwyg.dialog.register("jqueryui", function () {
				var that = this;

				this._$dialog = null;

				this.init = function() {
					var abstractDialog	= this,
						content 		= this.options.content;

					if (typeof content === 'object') {
						if (typeof content.html === 'function') {
							content = content.html();
						} else if(typeof content.toString === 'function') {
							content = content.toString();
						}
					}

					that._$dialog = $('<div></div>').attr('title', this.options.title).html(content);

					var dialogHeight = this.options.height == 'auto' ? 300 : this.options.height,
						dialogWidth = this.options.width == 'auto' ? 450 : this.options.width;

					// console.log(that._$dialog);
					
					that._$dialog.dialog({
						modal: this.options.modal,
						draggable: this.options.draggable,
						height: dialogHeight,
						width: dialogWidth
					});

					return that._$dialog;
				};

				this.show = function () {
					that._$dialog.dialog("open");
					return that._$dialog;
				};

				this.hide = function () {
					that._$dialog.dialog("close");
					return that._$dialog;
				};

				this.destroy = function() {
					that._$dialog.dialog("destroy");
					return that._$dialog;
				};
			});
		}

		$.wysiwyg.dialog.register("default", function () {
			var that = this;

			this._$dialog = null;

			this.init = function() {
				var abstractDialog	= this,
					content 		= this.options.content;

				if (typeof content === 'object') {
					if(typeof content.html === 'function') {
						content = content.html();
					}
					else if(typeof content.toString === 'function') {
						content = content.toString();
					}
				}

				that._$dialog = $('<div class="wysiwyg-dialog"></div>').css({"z-index": this.options.zIndex});

				var $topbar = $('<div class="wysiwyg-dialog-topbar"><div class="wysiwyg-dialog-close-wrapper"></div><div class="wysiwyg-dialog-title">'+this.options.title+'</div></div>');
				var $link = $('<a href="#" class="wysiwyg-dialog-close-button">X</a>');

				$link.click(function () {
					abstractDialog.close(); // this is important it makes sure that is close from the abstract $.wysiwyg.dialog instace, not just locally 
				});
				
				$topbar.find('.wysiwyg-dialog-close-wrapper').prepend($link);

				var $dcontent = $('<div class="wysiwyg-dialog-content">'+content+'</div>');

				that._$dialog.append($topbar).append($dcontent);
				
				// Set dialog's height & width, and position it correctly:
				var dialogHeight = this.options.height == 'auto' ? 300 : this.options.height,
					dialogWidth = this.options.width == 'auto' ? 450 : this.options.width;
				that._$dialog.hide().css({
					"width": dialogWidth,
					"height": dialogHeight,
					"left": (($(window).width() - dialogWidth) / 2),
					"top": (($(window).height() - dialogHeight) / 3)
				});

				$("body").append(that._$dialog);

				return that._$dialog;
			};

			this.show = function () {

				// Modal feature:
				if (this.options.modal) {
					var dimensions = $.wysiwyg.dialog.getDimensions(),
						wrapper    = $('<div class="wysiwyg-dialog-modal-div"></div>')
						.css({"width": dimensions[0], "height": dimensions[1]});
					that._$dialog.wrap(wrapper);
				}
				
				// Draggable feature:
				if (this.options.draggable) { 
					
					var mouseDown = false;
					
					that._$dialog.find("div.wysiwyg-dialog-topbar").bind("mousedown", function (e) {
						e.preventDefault();
						$(this).css({ "cursor": "move" });
						var $topbar = $(this),
							_dialog = $(this).parents(".wysiwyg-dialog"),
							offsetX = (e.pageX - parseInt(_dialog.css("left"), 10)),
							offsetY = (e.pageY - parseInt(_dialog.css("top"), 10));
						mouseDown = true;
						$(this).css({ "cursor": "move" });
						
						$(document).bind("mousemove", function (e) {
							e.preventDefault();
							if (mouseDown) {
								_dialog.css({
									"top": (e.pageY - offsetY),
									"left": (e.pageX - offsetX)
								});
							}
						}).bind("mouseup", function (e) {
							e.preventDefault();
							mouseDown = false;
							$topbar.css({ "cursor": "auto" });
							$(document).unbind("mousemove").unbind("mouseup");
						});
					
					});
				}
				
				that._$dialog.show();
				return that._$dialog;

			};

			this.hide = function () {
				that._$dialog.hide();
				return that._$dialog;
			};

			this.destroy = function() {
			
				// Modal feature:
				if (this.options.modal) { 
					that._$dialog.unwrap();
				}
				
				// Draggable feature:
				if (this.options.draggable) { 
					that._$dialog.find("div.wysiwyg-dialog-topbar").unbind("mousedown");
				}
				
				that._$dialog.remove();
				return that._$dialog;
			};
		});
	});
	// end Dialog

	$.fn.wysiwyg = function (method) {
		var args = arguments, plugin;

		if ("undefined" !== typeof $.wysiwyg[method]) {
			// set argument object to undefined
			args = Array.prototype.concat.call([args[0]], [this], Array.prototype.slice.call(args, 1));
			return $.wysiwyg[method].apply($.wysiwyg, Array.prototype.slice.call(args, 1));
		} else if ("object" === typeof method || !method) {
			Array.prototype.unshift.call(args, this);
			return $.wysiwyg.init.apply($.wysiwyg, args);
		} else if ($.wysiwyg.plugin.exists(method)) {
			plugin = $.wysiwyg.plugin.parseName(method);
			args = Array.prototype.concat.call([args[0]], [this], Array.prototype.slice.call(args, 1));
			return $.wysiwyg[plugin.name][plugin.method].apply($.wysiwyg[plugin.name], Array.prototype.slice.call(args, 1));
		} else {
			console.error("Method '" +  method + "' does not exist on jQuery.wysiwyg.\nTry to include some extra controls or plugins");
		}
	};
	
	$.fn.getWysiwyg = function () {
		return this.data("wysiwyg");
	};
})(jQuery);

/**
 * Controls: Image plugin
 *
 * Depends on jWYSIWYG
 */
(function ($) {
	"use strict";

	if (undefined === $.wysiwyg) {
		throw "wysiwyg.image.js depends on $.wysiwyg";
	}

	if (!$.wysiwyg.controls) {
		$.wysiwyg.controls = {};
	}

	/*
	 * Wysiwyg namespace: public properties and methods
	 */
	$.wysiwyg.controls.image = {
		groupIndex: 6,
		visible: true,
		exec: function () {
			$.wysiwyg.controls.image.init(this);
		},
		tags: ["img"],
		tooltip: "Insert image",
		init: function (Wysiwyg) {
			var self = this, elements, adialog, dialog, formImageHtml, regexp, dialogReplacements, key, translation,
				img = {
					alt: "",
					self: Wysiwyg.dom ? Wysiwyg.dom.getElement("img") : null, // link to element node
					src: "http://",
					title: ""
				};

			dialogReplacements = {
				legend	: "Insert Image",
				preview : "Preview",
				url     : "URL",
				title   : "Title",
				description : "Description",
				width   : "Width",
				height  : "Height",
				original : "Original W x H",
				"float"	: "Float",
				floatNone : "None",
				floatLeft : "Left",
				floatRight : "Right",
				submit  : "Insert Image",
				reset   : "Cancel",
				fileManagerIcon : "Select file from server"
			};

			formImageHtml = '<form class="wysiwyg" id="wysiwyg-addImage"><fieldset>' +
				'<div class="form-row"><span class="form-row-key">{preview}:</span><div class="form-row-value"><img src="" alt="{preview}" style="margin: 2px; padding:5px; max-width: 100%; overflow:hidden; max-height: 100px; border: 1px solid rgb(192, 192, 192);"/></div></div>' +
				'<div class="form-row"><label for="name">{url}:</label><div class="form-row-value"><input type="text" name="src" value=""/>';

			if ($.wysiwyg.fileManager && $.wysiwyg.fileManager.ready) {
				// Add the File Manager icon:
				formImageHtml += '<div class="wysiwyg-fileManager" title="{fileManagerIcon}"/>';
			}

			formImageHtml += '</div></div>' +
				'<div class="form-row"><label for="name">{title}:</label><div class="form-row-value"><input type="text" name="imgtitle" value=""/></div></div>' +
				'<div class="form-row"><label for="name">{description}:</label><div class="form-row-value"><input type="text" name="description" value=""/></div></div>' +
				'<div class="form-row"><label for="name">{width} x {height}:</label><div class="form-row-value"><input type="text" name="width" value="" class="width-small"/> x <input type="text" name="height" value="" class="width-small"/></div></div>' +
				'<div class="form-row"><label for="name">{original}:</label><div class="form-row-value"><input type="text" name="naturalWidth" value="" class="width-small" disabled="disabled"/> x ' +
				'<input type="text" name="naturalHeight" value="" class="width-small" disabled="disabled"/></div></div>' +
				'<div class="form-row"><label for="name">{float}:</label><div class="form-row-value"><select name="float">' +
				'<option value="">{floatNone}</option>' +
				'<option value="left">{floatLeft}</option>' +
				'<option value="right">{floatRight}</option></select></div></div>' +
				'<div class="form-row form-row-last"><label for="name"></label><div class="form-row-value"><input type="submit" class="button-a blue" value="{submit}"/> ' +
				'<input type="reset" class="button-a blue" value="{reset}"/></div></div></fieldset></form>';

			for (key in dialogReplacements) {
				if ($.wysiwyg.i18n) {
					translation = $.wysiwyg.i18n.t(dialogReplacements[key], "dialogs.image");

					if (translation === dialogReplacements[key]) { // if not translated search in dialogs 
						translation = $.wysiwyg.i18n.t(dialogReplacements[key], "dialogs");
					}

					dialogReplacements[key] = translation;
				}

				regexp = new RegExp("{" + key + "}", "g");
				formImageHtml = formImageHtml.replace(regexp, dialogReplacements[key]);
			}

			if (img.self) {
				img.src    = img.self.src    ? img.self.src    : "";
				img.alt    = img.self.alt    ? img.self.alt    : "";
				img.title  = img.self.title  ? img.self.title  : "";
				img.width  = img.self.width  ? img.self.width  : "";
				img.height = img.self.height ? img.self.height : "";
				img.styleFloat = $(img.self).css("float");
			}

			adialog = new $.wysiwyg.dialog(Wysiwyg, {
				"title"   : dialogReplacements.legend,
				"content" : formImageHtml
			});

			$(adialog).bind("afterOpen", function (e, dialog) {
				dialog.find("form#wysiwyg-addImage").submit(function (e) {
					e.preventDefault();
					self.processInsert(dialog.container, Wysiwyg, img);

					adialog.close();
					return false;
				});

				// File Manager (select file):
				if ($.wysiwyg.fileManager) {
					$("div.wysiwyg-fileManager").bind("click", function () {
						$.wysiwyg.fileManager.init(function (selected) {
							dialog.find("input[name=src]").val(selected);
							dialog.find("input[name=src]").trigger("change");
						});
					});
				}

				$("input:reset", dialog).click(function (e) {
					adialog.close();

					return false;
				});

				$("fieldset", dialog).click(function (e) {
					e.stopPropagation();
				});

				self.makeForm(dialog, img);
			});

			adialog.open();

			$(Wysiwyg.editorDoc).trigger("editorRefresh.wysiwyg");
		},

		processInsert: function (context, Wysiwyg, img) {
			var image,
				url = $('input[name="src"]', context).val(),
				title = $('input[name="imgtitle"]', context).val(),
				description = $('input[name="description"]', context).val(),
				width = $('input[name="width"]', context).val(),
				height = $('input[name="height"]', context).val(),
				styleFloat = $('select[name="float"]', context).val(),
				styles = [],
				style = "",
				found,
				baseUrl;

			if (Wysiwyg.options.controlImage && Wysiwyg.options.controlImage.forceRelativeUrls) {
				baseUrl = window.location.protocol + "//" + window.location.hostname
					+ (window.location.port ? ":" + window.location.port : "");
				if (0 === url.indexOf(baseUrl)) {
					url = url.substr(baseUrl.length);
				}
			}

			if (img.self) {
				// to preserve all img attributes
				$(img.self).attr("src", url)
					.attr("title", title)
					.attr("alt", description)
					.css("float", styleFloat);

				if (width.toString().match(/^[0-9]+(px|%)?$/)) {
					$(img.self).css("width", width);
				} else {
					$(img.self).css("width", "");
				}

				if (height.toString().match(/^[0-9]+(px|%)?$/)) {
					$(img.self).css("height", height);
				} else {
					$(img.self).css("height", "");
				}

				Wysiwyg.saveContent();
			} else {
				found = width.toString().match(/^[0-9]+(px|%)?$/);
				if (found) {
					if (found[1]) {
						styles.push("width: " + width + ";");
					} else {
						styles.push("width: " + width + "px;");
					}
				}

				found = height.toString().match(/^[0-9]+(px|%)?$/);
				if (found) {
					if (found[1]) {
						styles.push("height: " + height + ";");
					} else {
						styles.push("height: " + height + "px;");
					}
				}

				if (styleFloat.length > 0) {
					styles.push("float: " + styleFloat + ";");
				}

				if (styles.length > 0) {
					style = ' style="' + styles.join(" ") + '"';
				}

				image = "<img src='" + url + "' title='" + title + "' alt='" + description + "'" + style + "/>";
				Wysiwyg.insertHtml(image);
			}
		},

		makeForm: function (form, img) {
			form.find("input[name=src]").val(img.src);
			form.find("input[name=imgtitle]").val(img.title);
			form.find("input[name=description]").val(img.alt);
			form.find('input[name="width"]').val(img.width);
			form.find('input[name="height"]').val(img.height);
			form.find('select[name="float"]').val(img.styleFloat);
			form.find('img').attr("src", img.src);

			form.find('img').bind("load", function () {
				if (form.find('img').get(0).naturalWidth) {
					form.find('input[name="naturalWidth"]').val(form.find('img').get(0).naturalWidth);
					form.find('input[name="naturalHeight"]').val(form.find('img').get(0).naturalHeight);
				} else if (form.find('img').attr("naturalWidth")) {
					form.find('input[name="naturalWidth"]').val(form.find('img').attr("naturalWidth"));
					form.find('input[name="naturalHeight"]').val(form.find('img').attr("naturalHeight"));
				}
			});

			form.find("input[name=src]").bind("change", function () {
				form.find('img').attr("src", this.value);
			});

			return form;
		}
	};

	$.wysiwyg.insertImage = function (object, url, attributes) {
		return object.each(function () {
			var Wysiwyg = $(this).data("wysiwyg"),
				image,
				attribute;

			if (!Wysiwyg) {
				return this;
			}

			if (!url || url.length === 0) {
				return this;
			}

			if ($.browser.msie) {
				Wysiwyg.ui.focus();
			}

			if (attributes) {
				Wysiwyg.editorDoc.execCommand("insertImage", false, "#jwysiwyg#");
				image = Wysiwyg.getElementByAttributeValue("img", "src", "#jwysiwyg#");

				if (image) {
					image.src = url;

					for (attribute in attributes) {
						if (attributes.hasOwnProperty(attribute)) {
							image.setAttribute(attribute, attributes[attribute]);
						}
					}
				}
			} else {
				Wysiwyg.editorDoc.execCommand("insertImage", false, url);
			}

			Wysiwyg.saveContent();

			$(Wysiwyg.editorDoc).trigger("editorRefresh.wysiwyg");

			return this;
		});
	};
})(jQuery);

(function ($) {
	$.wysiwyg.dialog.register("default", function () {
		var that = this;
		
		this._$dialog = null;
		
		this.init = function() {
			var abstractDialog	= this,
				content 		= this.options.content;
				
			if(typeof content == 'object') {
				if(typeof content.html == 'function') {
					content = content.html();
				}
				else if(typeof content.toString == 'function') {
					content = content.toString();
				}
			}
			
			that._$dialog = $('<div class="wysiwyg-dialog"></div>');
			
			var $topbar = $('<div class="wysiwyg-dialog-topbar"><div class="wysiwyg-dialog-close-wrapper"></div><div class="wysiwyg-dialog-title">'+this.options.title+'</div></div>');
			var $link = $('<a href="#" class="wysiwyg-dialog-close-button">X</a>');
			
			$link.click(function () {
				abstractDialog.close(); // this is important it makes sure that is close from the abstract $.wysiwyg.dialog instace, not just locally 
			});

			$topbar.find('.wysiwyg-dialog-close-wrapper').prepend($link);
			
			var $dcontent = $('<div class="wysiwyg-dialog-content">'+content+'</div>');
			
			that._$dialog.append($topbar).append($dcontent);
			
			that._$dialog.hide();
			
			$("body").append(that._$dialog);
			
			return that._$dialog;
		};
		
		this.show = function () {
			that._$dialog.show();
			return that._$dialog;
		}
		
		this.hide = function () {
			that._$dialog.hide();
			return that._$dialog;
		};
		
		this.destroy = function() {
			that._$dialog.remove();
			return that._$dialog;
		};
	});
})(jQuery);
/**
 * Controls: Link plugin
 *
 * Depends on jWYSIWYG
 *
 * By: Esteban Beltran (academo) <sergies@gmail.com>
 */
(function ($) {
	"use strict";

	if (undefined === $.wysiwyg) {
		throw "wysiwyg.link.js depends on $.wysiwyg";
	}

	if (!$.wysiwyg.controls) {
		$.wysiwyg.controls = {};
	}

	/*
	* Wysiwyg namespace: public properties and methods
	*/
	$.wysiwyg.controls.link = {
		init: function (Wysiwyg) {
			var self = this, elements, dialog, url, a, selection,
				formLinkHtml, dialogReplacements, key, translation, regexp,
				baseUrl, img;

			dialogReplacements = {
				legend: "Insert Link",
				url   : "Link URL",
				title : "Link Title",
				target: "Link Target",
				submit: "Insert Link",
				reset: "Cancel"
			};

			formLinkHtml = '<form class="wysiwyg"><fieldset><legend>{legend}</legend>' +
				'<label>{url}:<br> <input type="text" name="linkhref" value=""/></label><br>' +
				'<label>{title}:<br> <input type="text" name="linktitle" value=""/></label><br>' +
				'<label>{target}:<br> <input type="text" name="linktarget" value=""/></label><br><br>' +
				'<input type="submit" class="button-a blue" value="{submit}"/> ' +
				'<input type="reset" class="button-a blue" value="{reset}"/></fieldset></form>';

			for (key in dialogReplacements) {
				if ($.wysiwyg.i18n) {
					translation = $.wysiwyg.i18n.t(dialogReplacements[key], "dialogs.link");

					if (translation === dialogReplacements[key]) { // if not translated search in dialogs 
						translation = $.wysiwyg.i18n.t(dialogReplacements[key], "dialogs");
					}

					dialogReplacements[key] = translation;
				}

				regexp = new RegExp("{" + key + "}", "g");
				formLinkHtml = formLinkHtml.replace(regexp, dialogReplacements[key]);
			}

			a = {
				self: Wysiwyg.dom.getElement("a"), // link to element node
				href: "http://",
				title: "",
				target: ""
			};

			if (a.self) {
				a.href = a.self.href ? a.self.href : a.href;
				a.title = a.self.title ? a.self.title : "";
				a.target = a.self.target ? a.self.target : "";
			}

			if ($.fn.dialog) {
				elements = $(formLinkHtml);
				elements.find("input[name=linkhref]").val(a.href);
				elements.find("input[name=linktitle]").val(a.title);
				elements.find("input[name=linktarget]").val(a.target);

				if ($.browser.msie) {
					try {
						dialog = elements.appendTo(Wysiwyg.editorDoc.body);
					} catch (err) {
						dialog = elements.appendTo("body");
					}
				} else {
					dialog = elements.appendTo("body");
				}

				dialog.dialog({
					modal: true,
					open: function (ev, ui) {
						$("input:submit", dialog).click(function (e) {
							e.preventDefault();

							var url = $('input[name="linkhref"]', dialog).val(),
								title = $('input[name="linktitle"]', dialog).val(),
								target = $('input[name="linktarget"]', dialog).val(),
								baseUrl,
								img;

							if (Wysiwyg.options.controlLink.forceRelativeUrls) {
								baseUrl = window.location.protocol + "//" + window.location.hostname;
								if (0 === url.indexOf(baseUrl)) {
									url = url.substr(baseUrl.length);
								}
							}

							if (a.self) {
								if ("string" === typeof (url)) {
									if (url.length > 0) {
										// to preserve all link attributes
										$(a.self).attr("href", url).attr("title", title).attr("target", target);
									} else {
										$(a.self).replaceWith(a.self.innerHTML);
									}
								}
							} else {
								if ($.browser.msie) {
									Wysiwyg.ui.returnRange();
								}

								//Do new link element
								selection = Wysiwyg.getRangeText();
								img = Wysiwyg.dom.getElement("img");

								if ((selection && selection.length > 0) || img) {
									if ($.browser.msie) {
										Wysiwyg.ui.focus();
									}

									if ("string" === typeof (url)) {
										if (url.length > 0) {
											Wysiwyg.editorDoc.execCommand("createLink", false, url);
										} else {
											Wysiwyg.editorDoc.execCommand("unlink", false, null);
										}
									}

									a.self = Wysiwyg.dom.getElement("a");

									$(a.self).attr("href", url).attr("title", title);

									/**
									 * @url https://github.com/akzhan/jwysiwyg/issues/16
									 */
									$(a.self).attr("target", target);
								} else if (Wysiwyg.options.messages.nonSelection) {
									window.alert(Wysiwyg.options.messages.nonSelection);
								}
							}

							Wysiwyg.saveContent();

							$(dialog).dialog("close");
						});
						$("input:reset", dialog).click(function (e) {
							e.preventDefault();
							$(dialog).dialog("close");
						});
					},
					close: function (ev, ui) {
						dialog.dialog("destroy");
						dialog.remove();
					}
				});
			} else {
				if (a.self) {
					url = window.prompt("URL", a.href);

					if (Wysiwyg.options.controlLink.forceRelativeUrls) {
						baseUrl = window.location.protocol + "//" + window.location.hostname;
						if (0 === url.indexOf(baseUrl)) {
							url = url.substr(baseUrl.length);
						}
					}

					if ("string" === typeof (url)) {
						if (url.length > 0) {
							$(a.self).attr("href", url);
						} else {
							$(a.self).replaceWith(a.self.innerHTML);
						}
					}
				} else {
					//Do new link element
					selection = Wysiwyg.getRangeText();
					img = Wysiwyg.dom.getElement("img");

					if ((selection && selection.length > 0) || img) {
						if ($.browser.msie) {
							Wysiwyg.ui.focus();
							Wysiwyg.editorDoc.execCommand("createLink", true, null);
						} else {
							url = window.prompt(dialogReplacements.url, a.href);

							if (Wysiwyg.options.controlLink.forceRelativeUrls) {
								baseUrl = window.location.protocol + "//" + window.location.hostname;
								if (0 === url.indexOf(baseUrl)) {
									url = url.substr(baseUrl.length);
								}
							}

							if ("string" === typeof (url)) {
								if (url.length > 0) {
									Wysiwyg.editorDoc.execCommand("createLink", false, url);
								} else {
									Wysiwyg.editorDoc.execCommand("unlink", false, null);
								}
							}
						}
					} else if (Wysiwyg.options.messages.nonSelection) {
						window.alert(Wysiwyg.options.messages.nonSelection);
					}
				}

				Wysiwyg.saveContent();
			}

			$(Wysiwyg.editorDoc).trigger("editorRefresh.wysiwyg");
		}
	};

	$.wysiwyg.createLink = function (object, url) {
		return object.each(function () {
			var oWysiwyg = $(this).data("wysiwyg"),
				selection;

			if (!oWysiwyg) {
				return this;
			}

			if (!url || url.length === 0) {
				return this;
			}

			selection = oWysiwyg.getRangeText();

			if (selection && selection.length > 0) {
				if ($.browser.msie) {
					oWysiwyg.ui.focus();
				}
				oWysiwyg.editorDoc.execCommand("unlink", false, null);
				oWysiwyg.editorDoc.execCommand("createLink", false, url);
			} else if (oWysiwyg.options.messages.nonSelection) {
				window.alert(oWysiwyg.options.messages.nonSelection);
			}
			return this;
		});
	};
})(jQuery);

/**
 * Controls: Table plugin
 * 
 * Depends on jWYSIWYG
 */
(function ($) {
	"use strict";

	if (undefined === $.wysiwyg) {
		throw "wysiwyg.table.js depends on $.wysiwyg";
	}

	if (!$.wysiwyg.controls) {
		$.wysiwyg.controls = {};
	}

	var insertTable = function (colCount, rowCount, filler) {
		if (isNaN(rowCount) || isNaN(colCount) || rowCount === null || colCount === null) {
			return;
		}

		var i, j, html = ['<table border="1" style="width: 100%;"><tbody>'];

		colCount = parseInt(colCount, 10);
		rowCount = parseInt(rowCount, 10);

		if (filler === null) {
			filler = "&nbsp;";
		}
		filler = "<td>" + filler + "</td>";

		for (i = rowCount; i > 0; i -= 1) {
			html.push("<tr>");
			for (j = colCount; j > 0; j -= 1) {
				html.push(filler);
			}
			html.push("</tr>");
		}
		html.push("</tbody></table>");

		return this.insertHtml(html.join(""));
	};

	/*
	 * Wysiwyg namespace: public properties and methods
	 */
	$.wysiwyg.controls.table = function (Wysiwyg) {
		var adialog, dialog, colCount, rowCount, formTableHtml, dialogReplacements, key, translation, regexp;

		dialogReplacements = {
			legend: "Insert table",
			cols  : "Count of columns",
			rows  : "Count of rows",
			submit: "Insert table",
			reset: "Cancel"
		};

		formTableHtml = '<form class="wysiwyg" id="wysiwyg-tableInsert"><fieldset><legend>{legend}</legend>' +
			'<label>{cols}: <br/><input type="text" name="colCount" value="3" /></label><br/>' +
			'<label>{rows}: <br/><input type="text" name="rowCount" value="3" /></label><br/><br/>' +
			'<input type="submit" class="button-a blue" value="{submit}"/> ' +
			'<input type="reset" class="button-a blue" value="{reset}"/></fieldset></form>';
		
		for (key in dialogReplacements) {
			if ($.wysiwyg.i18n) {
				translation = $.wysiwyg.i18n.t(dialogReplacements[key], "dialogs.table");

				if (translation === dialogReplacements[key]) { // if not translated search in dialogs 
					translation = $.wysiwyg.i18n.t(dialogReplacements[key], "dialogs");
				}

				dialogReplacements[key] = translation;
			}

			regexp = new RegExp("{" + key + "}", "g");
			formTableHtml = formTableHtml.replace(regexp, dialogReplacements[key]);
		}

		if (!Wysiwyg.insertTable) {
			Wysiwyg.insertTable = insertTable;
		}

		adialog = new $.wysiwyg.dialog(Wysiwyg, {
			"title"   : dialogReplacements.legend,
			"content" : formTableHtml,
			"open"    : function (e, dialog) {
				dialog.find("form#wysiwyg-tableInsert").submit(function (e) {
					e.preventDefault();
					rowCount = dialog.find("input[name=rowCount]").val();
					colCount = dialog.find("input[name=colCount]").val();

					Wysiwyg.insertTable(colCount, rowCount, Wysiwyg.defaults.tableFiller);

					adialog.close();
					return false;
				});

				dialog.find("input:reset").click(function (e) {
					e.preventDefault();
					adialog.close();
					return false;
				});
			}
		});
		
		adialog.open();

		$(Wysiwyg.editorDoc).trigger("editorRefresh.wysiwyg");
	};

	$.wysiwyg.insertTable = function (object, colCount, rowCount, filler) {
		return object.each(function () {
			var Wysiwyg = $(this).data("wysiwyg");

			if (!Wysiwyg.insertTable) {
				Wysiwyg.insertTable = insertTable;
			}

			if (!Wysiwyg) {
				return this;
			}

			Wysiwyg.insertTable(colCount, rowCount, filler);
			$(Wysiwyg.editorDoc).trigger("editorRefresh.wysiwyg");

			return this;
		});
	};
})(jQuery);

/*
 * jPlayer Plugin for jQuery JavaScript Library
 * http://www.jplayer.org
 *
 * Copyright (c) 2009 - 2011 Happyworm Ltd
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * Author: Mark J Panaghiston
 * Version: 2.0.22
 * Date: 13th July 2011
 */

/* Code verified using http://www.jshint.com/ */
/*jshint asi:false, bitwise:false, boss:false, browser:true, curly:true, debug:false, eqeqeq:true, eqnull:false, evil:false, forin:false, immed:false, jquery:true, laxbreak:false, newcap:true, noarg:true, noempty:true, nonew:true, nomem:false, onevar:false, passfail:false, plusplus:false, regexp:false, undef:true, sub:false, strict:false, white:false */
/*global jQuery:false, ActiveXObject:false, alert:false */

(function($, undefined) {

	// Adapted from jquery.ui.widget.js (1.8.7): $.widget.bridge
	$.fn.jPlayer = function( options ) {
		var name = "jPlayer";
		var isMethodCall = typeof options === "string",
			args = Array.prototype.slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.extend.apply( null, [ true, options ].concat(args) ) :
			options;

		// prevent calls to internal methods
		if ( isMethodCall && options.charAt( 0 ) === "_" ) {
			return returnValue;
		}

		if ( isMethodCall ) {
			this.each(function() {
				var instance = $.data( this, name ),
					methodValue = instance && $.isFunction( instance[options] ) ?
						instance[ options ].apply( instance, args ) :
						instance;
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, name );
				if ( instance ) {
					// instance.option( options || {} )._init(); // Orig jquery.ui.widget.js code: Not recommend for jPlayer. ie., Applying new options to an existing instance (via the jPlayer constructor) and performing the _init(). The _init() is what concerns me. It would leave a lot of event handlers acting on jPlayer instance and the interface.
					instance.option( options || {} ); // The new constructor only changes the options. Changing options only has basic support atm.
				} else {
					$.data( this, name, new $.jPlayer( options, this ) );
				}
			});
		}

		return returnValue;
	};

	$.jPlayer = function( options, element ) {
		// allow instantiation without initializing for simple inheritance
		if ( arguments.length ) {
			this.element = $(element);
			this.options = $.extend(true, {},
				this.options,
				options
			);
			var self = this;
			this.element.bind( "remove.jPlayer", function() {
				self.destroy();
			});
			this._init();
		}
	};
	// End of: (Adapted from jquery.ui.widget.js (1.8.7))

	// Emulated HTML5 methods and properties
	$.jPlayer.emulateMethods = "load play pause";
	$.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate";
	$.jPlayer.emulateOptions = "muted volume";

	// Reserved event names generated by jPlayer that are not part of the HTML5 Media element spec
	$.jPlayer.reservedEvent = "ready flashreset resize repeat error warning";

	// Events generated by jPlayer
	$.jPlayer.event = {
		ready: "jPlayer_ready",
		flashreset: "jPlayer_flashreset", // Similar to the ready event if the Flash solution is set to display:none and then shown again or if it's reloaded for another reason by the browser. For example, using CSS position:fixed on Firefox for the full screen feature.
		resize: "jPlayer_resize", // Occurs when the size changes through a full/restore screen operation or if the size/sizeFull options are changed.
		repeat: "jPlayer_repeat", // Occurs when the repeat status changes. Usually through clicks on the repeat button of the interface.
		error: "jPlayer_error", // Event error code in event.jPlayer.error.type. See $.jPlayer.error
		warning: "jPlayer_warning", // Event warning code in event.jPlayer.warning.type. See $.jPlayer.warning

		// Other events match HTML5 spec.
		loadstart: "jPlayer_loadstart",
		progress: "jPlayer_progress",
		suspend: "jPlayer_suspend",
		abort: "jPlayer_abort",
		emptied: "jPlayer_emptied",
		stalled: "jPlayer_stalled",
		play: "jPlayer_play",
		pause: "jPlayer_pause",
		loadedmetadata: "jPlayer_loadedmetadata",
		loadeddata: "jPlayer_loadeddata",
		waiting: "jPlayer_waiting",
		playing: "jPlayer_playing",
		canplay: "jPlayer_canplay",
		canplaythrough: "jPlayer_canplaythrough",
		seeking: "jPlayer_seeking",
		seeked: "jPlayer_seeked",
		timeupdate: "jPlayer_timeupdate",
		ended: "jPlayer_ended",
		ratechange: "jPlayer_ratechange",
		durationchange: "jPlayer_durationchange",
		volumechange: "jPlayer_volumechange"
	};

	$.jPlayer.htmlEvent = [ // These HTML events are bubbled through to the jPlayer event, without any internal action.
		"loadstart",
		// "progress", // jPlayer uses internally before bubbling.
		// "suspend", // jPlayer uses internally before bubbling.
		"abort",
		// "error", // jPlayer uses internally before bubbling.
		"emptied",
		"stalled",
		// "play", // jPlayer uses internally before bubbling.
		// "pause", // jPlayer uses internally before bubbling.
		"loadedmetadata",
		"loadeddata",
		// "waiting", // jPlayer uses internally before bubbling.
		// "playing", // jPlayer uses internally before bubbling.
		"canplay",
		"canplaythrough",
		// "seeking", // jPlayer uses internally before bubbling.
		// "seeked", // jPlayer uses internally before bubbling.
		// "timeupdate", // jPlayer uses internally before bubbling.
		// "ended", // jPlayer uses internally before bubbling.
		"ratechange"
		// "durationchange" // jPlayer uses internally before bubbling.
		// "volumechange" // jPlayer uses internally before bubbling.
	];

	$.jPlayer.pause = function() {
		// $.each($.jPlayer.instances, function(i, element) {
		$.each($.jPlayer.prototype.instances, function(i, element) {
			if(element.data("jPlayer").status.srcSet) { // Check that media is set otherwise would cause error event.
				element.jPlayer("pause");
			}
		});
	};
	
	$.jPlayer.timeFormat = {
		showHour: false,
		showMin: true,
		showSec: true,
		padHour: false,
		padMin: true,
		padSec: true,
		sepHour: ":",
		sepMin: ":",
		sepSec: ""
	};

	$.jPlayer.convertTime = function(s) {
		var myTime = new Date(s * 1000);
		var hour = myTime.getUTCHours();
		var min = myTime.getUTCMinutes();
		var sec = myTime.getUTCSeconds();
		var strHour = ($.jPlayer.timeFormat.padHour && hour < 10) ? "0" + hour : hour;
		var strMin = ($.jPlayer.timeFormat.padMin && min < 10) ? "0" + min : min;
		var strSec = ($.jPlayer.timeFormat.padSec && sec < 10) ? "0" + sec : sec;
		return (($.jPlayer.timeFormat.showHour) ? strHour + $.jPlayer.timeFormat.sepHour : "") + (($.jPlayer.timeFormat.showMin) ? strMin + $.jPlayer.timeFormat.sepMin : "") + (($.jPlayer.timeFormat.showSec) ? strSec + $.jPlayer.timeFormat.sepSec : "");
	};

	// Adapting jQuery 1.4.4 code for jQuery.browser. Required since jQuery 1.3.2 does not detect Chrome as webkit.
	$.jPlayer.uaBrowser = function( userAgent ) {
		var ua = userAgent.toLowerCase();

		// Useragent RegExp
		var rwebkit = /(webkit)[ \/]([\w.]+)/;
		var ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/;
		var rmsie = /(msie) ([\w.]+)/;
		var rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;

		var match = rwebkit.exec( ua ) ||
			ropera.exec( ua ) ||
			rmsie.exec( ua ) ||
			ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
			[];

		return { browser: match[1] || "", version: match[2] || "0" };
	};

	// Platform sniffer for detecting mobile devices
	$.jPlayer.uaPlatform = function( userAgent ) {
		var ua = userAgent.toLowerCase();

		// Useragent RegExp
		var rplatform = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/;
		var rtablet = /(ipad|playbook)/;
		var randroid = /(android)/;
		var rmobile = /(mobile)/;

		var platform = rplatform.exec( ua ) || [];
		var tablet = rtablet.exec( ua ) ||
			!rmobile.exec( ua ) && randroid.exec( ua ) ||
			[];

		return { platform: platform[1] || "", tablet: tablet[1] || "" };
	};

	$.jPlayer.browser = {
	};
	$.jPlayer.platform = {
	};

	var browserMatch = $.jPlayer.uaBrowser(navigator.userAgent);
	if ( browserMatch.browser ) {
		$.jPlayer.browser[ browserMatch.browser ] = true;
		$.jPlayer.browser.version = browserMatch.version;
	}
	var platformMatch = $.jPlayer.uaPlatform(navigator.userAgent);
	if ( platformMatch.platform ) {
		$.jPlayer.platform[ platformMatch.platform ] = true;
		$.jPlayer.platform.mobile = !platformMatch.tablet;
		$.jPlayer.platform.tablet = !!platformMatch.tablet;
	}

	$.jPlayer.prototype = {
		count: 0, // Static Variable: Change it via prototype.
		version: { // Static Object
			script: "2.0.22",
			needFlash: "2.0.9",
			flash: "unknown"
		},
		options: { // Instanced in $.jPlayer() constructor
			swfPath: "js", // Path to Jplayer.swf. Can be relative, absolute or server root relative.
			solution: "html, flash", // Valid solutions: html, flash. Order defines priority. 1st is highest,
			supplied: "mp3", // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,
			preload: 'metadata',  // HTML5 Spec values: none, metadata, auto.
			volume: 0.8, // The volume. Number 0 to 1.
			muted: false,
			wmode: "opaque", // Valid wmode: window, transparent, opaque, direct, gpu. 
			backgroundColor: "#000000", // To define the jPlayer div and Flash background color.
			cssSelectorAncestor: "#jp_container_1",
			cssSelector: { // * denotes properties that should only be required when video media type required. _cssSelector() would require changes to enable splitting these into Audio and Video defaults.
				videoPlay: ".jp-video-play", // *
				play: ".jp-play",
				pause: ".jp-pause",
				stop: ".jp-stop",
				seekBar: ".jp-seek-bar",
				playBar: ".jp-play-bar",
				mute: ".jp-mute",
				unmute: ".jp-unmute",
				volumeBar: ".jp-volume-bar",
				volumeBarValue: ".jp-volume-bar-value",
				volumeMax: ".jp-volume-max",
				currentTime: ".jp-current-time",
				duration: ".jp-duration",
				fullScreen: ".jp-full-screen", // *
				restoreScreen: ".jp-restore-screen", // *
				repeat: ".jp-repeat",
				repeatOff: ".jp-repeat-off",
				gui: ".jp-gui" // The interface used with autohide feature.
			},
			fullScreen: false,
			autohide: {
				restored: false, // Controls the interface autohide feature.
				full: true, // Controls the interface autohide feature.
				fadeIn: 200, // Milliseconds. The period of the fadeIn anim.
				fadeOut: 600, // Milliseconds. The period of the fadeOut anim.
				hold: 1000 // Milliseconds. The period of the pause before autohide beings.
			},
			loop: false,
			repeat: function(event) { // The default jPlayer repeat event handler
				if(event.jPlayer.options.loop) {
					$(this).unbind(".jPlayerRepeat").bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
						$(this).jPlayer("play");
					});
				} else {
					$(this).unbind(".jPlayerRepeat");
				}
			},
			// globalVolume: false, // Not implemented: Set to make volume changes affect all jPlayer instances
			// globalMute: false, // Not implemented: Set to make mute changes affect all jPlayer instances
			idPrefix: "jp", // Prefix for the ids of html elements created by jPlayer. For flash, this must not include characters: . - + * / \
			noConflict: "jQuery",
			emulateHtml: false, // Emulates the HTML5 Media element on the jPlayer element.
			errorAlerts: false,
			warningAlerts: false
		},
		optionsAudio: {
			size: {
				width: "0px",
				height: "0px",
				cssClass: ""
			},
			sizeFull: {
				width: "0px",
				height: "0px",
				cssClass: ""
			}
		},
		optionsVideo: {
			size: {
				width: "480px",
				height: "270px",
				cssClass: "jp-video-270p"
			},
			sizeFull: {
				width: "100%",
				height: "100%",
				cssClass: "jp-video-full"
			}
		},
		instances: {}, // Static Object
		status: { // Instanced in _init()
			src: "",
			media: {},
			paused: true,
			format: {},
			formatType: "",
			waitForPlay: true, // Same as waitForLoad except in case where preloading.
			waitForLoad: true,
			srcSet: false,
			video: false, // True if playing a video
			seekPercent: 0,
			currentPercentRelative: 0,
			currentPercentAbsolute: 0,
			currentTime: 0,
			duration: 0,
			readyState: 0,
			networkState: 0,
			playbackRate: 1,
			ended: 0

/*		Persistant status properties created dynamically at _init():
			width
			height
			cssClass
*/
		},

		internal: { // Instanced in _init()
			ready: false
			// instance: undefined,
			// domNode: undefined,
			// htmlDlyCmdId: undefined
			// autohideId: undefined
		},
		solution: { // Static Object: Defines the solutions built in jPlayer.
			html: true,
			flash: true
		},
		// 'MPEG-4 support' : canPlayType('video/mp4; codecs="mp4v.20.8"')
		format: { // Static Object
			mp3: {
				codec: 'audio/mpeg; codecs="mp3"',
				flashCanPlay: true,
				media: 'audio'
			},
			m4a: { // AAC / MP4
				codec: 'audio/mp4; codecs="mp4a.40.2"',
				flashCanPlay: true,
				media: 'audio'
			},
			oga: { // OGG
				codec: 'audio/ogg; codecs="vorbis"',
				flashCanPlay: false,
				media: 'audio'
			},
			wav: { // PCM
				codec: 'audio/wav; codecs="1"',
				flashCanPlay: false,
				media: 'audio'
			},
			webma: { // WEBM
				codec: 'audio/webm; codecs="vorbis"',
				flashCanPlay: false,
				media: 'audio'
			},
			fla: { // FLV / F4A
				codec: 'audio/x-flv',
				flashCanPlay: true,
				media: 'audio'
			},
			m4v: { // H.264 / MP4
				codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
				flashCanPlay: true,
				media: 'video'
			},
			ogv: { // OGG
				codec: 'video/ogg; codecs="theora, vorbis"',
				flashCanPlay: false,
				media: 'video'
			},
			webmv: { // WEBM
				codec: 'video/webm; codecs="vorbis, vp8"',
				flashCanPlay: false,
				media: 'video'
			},
			flv: { // FLV / F4V
				codec: 'video/x-flv',
				flashCanPlay: true,
				media: 'video'
			}
		},
		_init: function() {
			var self = this;
			
			this.element.empty();
			
			this.status = $.extend({}, this.status); // Copy static to unique instance.
			this.internal = $.extend({}, this.internal); // Copy static to unique instance.

			this.internal.domNode = this.element.get(0);

			this.formats = []; // Array based on supplied string option. Order defines priority.
			this.solutions = []; // Array based on solution string option. Order defines priority.
			this.require = {}; // Which media types are required: video, audio.
			
			this.htmlElement = {}; // DOM elements created by jPlayer
			this.html = {}; // In _init()'s this.desired code and setmedia(): Accessed via this[solution], where solution from this.solutions array.
			this.html.audio = {};
			this.html.video = {};
			this.flash = {}; // In _init()'s this.desired code and setmedia(): Accessed via this[solution], where solution from this.solutions array.
			
			this.css = {};
			this.css.cs = {}; // Holds the css selector strings
			this.css.jq = {}; // Holds jQuery selectors. ie., $(css.cs.method)

			this.ancestorJq = []; // Holds jQuery selector of cssSelectorAncestor. Init would use $() instead of [], but it is only 1.4+

			this.options.volume = this._limitValue(this.options.volume, 0, 1); // Limit volume value's bounds.

			// Create the formats array, with prority based on the order of the supplied formats string
			$.each(this.options.supplied.toLowerCase().split(","), function(index1, value1) {
				var format = value1.replace(/^\s+|\s+$/g, ""); //trim
				if(self.format[format]) { // Check format is valid.
					var dupFound = false;
					$.each(self.formats, function(index2, value2) { // Check for duplicates
						if(format === value2) {
							dupFound = true;
							return false;
						}
					});
					if(!dupFound) {
						self.formats.push(format);
					}
				}
			});

			// Create the solutions array, with prority based on the order of the solution string
			$.each(this.options.solution.toLowerCase().split(","), function(index1, value1) {
				var solution = value1.replace(/^\s+|\s+$/g, ""); //trim
				if(self.solution[solution]) { // Check solution is valid.
					var dupFound = false;
					$.each(self.solutions, function(index2, value2) { // Check for duplicates
						if(solution === value2) {
							dupFound = true;
							return false;
						}
					});
					if(!dupFound) {
						self.solutions.push(solution);
					}
				}
			});

			this.internal.instance = "jp_" + this.count;
			this.instances[this.internal.instance] = this.element;

			// Check the jPlayer div has an id and create one if required. Important for Flash to know the unique id for comms.
			if(!this.element.attr("id")) {
				this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count);
			}

			this.internal.self = $.extend({}, {
				id: this.element.attr("id"),
				jq: this.element
			});
			this.internal.audio = $.extend({}, {
				id: this.options.idPrefix + "_audio_" + this.count,
				jq: undefined
			});
			this.internal.video = $.extend({}, {
				id: this.options.idPrefix + "_video_" + this.count,
				jq: undefined
			});
			this.internal.flash = $.extend({}, {
				id: this.options.idPrefix + "_flash_" + this.count,
				jq: undefined,
				swf: this.options.swfPath + ((this.options.swfPath !== "" && this.options.swfPath.slice(-1) !== "/") ? "/" : "") + "Jplayer.swf"
			});
			this.internal.poster = $.extend({}, {
				id: this.options.idPrefix + "_poster_" + this.count,
				jq: undefined
			});

			// Register listeners defined in the constructor
			$.each($.jPlayer.event, function(eventName,eventType) {
				if(self.options[eventName] !== undefined) {
					self.element.bind(eventType + ".jPlayer", self.options[eventName]); // With .jPlayer namespace.
					self.options[eventName] = undefined; // Destroy the handler pointer copy on the options. Reason, events can be added/removed in other ways so this could be obsolete and misleading.
				}
			});

			// Determine if we require solutions for audio, video or both media types.
			this.require.audio = false;
			this.require.video = false;
			$.each(this.formats, function(priority, format) {
				self.require[self.format[format].media] = true;
			});

			// Now required types are known, finish the options default settings.
			if(this.require.video) {
				this.options = $.extend(true, {},
					this.optionsVideo,
					this.options
				);
			} else {
				this.options = $.extend(true, {},
					this.optionsAudio,
					this.options
				);
			}
			this._setSize(); // update status and jPlayer element size

			// Create the poster image.
			this.htmlElement.poster = document.createElement('img');
			this.htmlElement.poster.id = this.internal.poster.id;
			this.htmlElement.poster.onload = function() { // Note that this did not work on Firefox 3.6: poster.addEventListener("onload", function() {}, false); Did not investigate x-browser.
				if(!self.status.video || self.status.waitForPlay) {
					self.internal.poster.jq.show();
				}
			};
			this.element.append(this.htmlElement.poster);
			this.internal.poster.jq = $("#" + this.internal.poster.id);
			this.internal.poster.jq.css({'width': this.status.width, 'height': this.status.height});
			this.internal.poster.jq.hide();
			
			// Generate the required media elements
			this.html.audio.available = false;
			if(this.require.audio) { // If a supplied format is audio
				this.htmlElement.audio = document.createElement('audio');
				this.htmlElement.audio.id = this.internal.audio.id;
				this.html.audio.available = !!this.htmlElement.audio.canPlayType;
			}
			this.html.video.available = false;
			if(this.require.video) { // If a supplied format is video
				this.htmlElement.video = document.createElement('video');
				this.htmlElement.video.id = this.internal.video.id;
				this.html.video.available = !!this.htmlElement.video.canPlayType;
			}

			this.flash.available = this._checkForFlash(10);

			this.html.canPlay = {};
			this.flash.canPlay = {};
			$.each(this.formats, function(priority, format) {
				self.html.canPlay[format] = self.html[self.format[format].media].available && "" !== self.htmlElement[self.format[format].media].canPlayType(self.format[format].codec);
				self.flash.canPlay[format] = self.format[format].flashCanPlay && self.flash.available;
			});
			this.html.desired = false;
			this.flash.desired = false;
			$.each(this.solutions, function(solutionPriority, solution) {
				if(solutionPriority === 0) {
					self[solution].desired = true;
				} else {
					var audioCanPlay = false;
					var videoCanPlay = false;
					$.each(self.formats, function(formatPriority, format) {
						if(self[self.solutions[0]].canPlay[format]) { // The other solution can play
							if(self.format[format].media === 'video') {
								videoCanPlay = true;
							} else {
								audioCanPlay = true;
							}
						}
					});
					self[solution].desired = (self.require.audio && !audioCanPlay) || (self.require.video && !videoCanPlay);
				}
			});
			// This is what jPlayer will support, based on solution and supplied.
			this.html.support = {};
			this.flash.support = {};
			$.each(this.formats, function(priority, format) {
				self.html.support[format] = self.html.canPlay[format] && self.html.desired;
				self.flash.support[format] = self.flash.canPlay[format] && self.flash.desired;
			});
			// If jPlayer is supporting any format in a solution, then the solution is used.
			this.html.used = false;
			this.flash.used = false;
			$.each(this.solutions, function(solutionPriority, solution) {
				$.each(self.formats, function(formatPriority, format) {
					if(self[solution].support[format]) {
						self[solution].used = true;
						return false;
					}
				});
			});

			// Init solution active state and the event gates to false.
			this.html.active = false;
			this.html.audio.gate = false;
			this.html.video.gate = false;
			this.flash.active = false;
			this.flash.gate = false;

			// Set up the css selectors for the control and feedback entities.
			this._cssSelectorAncestor(this.options.cssSelectorAncestor);
			
			// If neither html nor flash are being used by this browser, then media playback is not possible. Trigger an error event.
			if(!(this.html.used || this.flash.used)) {
				this._error( {
					type: $.jPlayer.error.NO_SOLUTION, 
					context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
					message: $.jPlayer.errorMsg.NO_SOLUTION,
					hint: $.jPlayer.errorHint.NO_SOLUTION
				});
			}

			// Add the flash solution if it is being used.
			if(this.flash.used) {
				var htmlObj,
				flashVars = 'jQuery=' + encodeURI(this.options.noConflict) + '&id=' + encodeURI(this.internal.self.id) + '&vol=' + this.options.volume + '&muted=' + this.options.muted;

				// Code influenced by SWFObject 2.2: http://code.google.com/p/swfobject/
				// Non IE browsers have an initial Flash size of 1 by 1 otherwise the wmode affected the Flash ready event. 

				if($.browser.msie && Number($.browser.version) <= 8) {
					var objStr = '<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0"></object>';

					var paramStr = [
						'<param name="movie" value="' + this.internal.flash.swf + '" />',
						'<param name="FlashVars" value="' + flashVars + '" />',
						'<param name="allowScriptAccess" value="always" />',
						'<param name="bgcolor" value="' + this.options.backgroundColor + '" />',
						'<param name="wmode" value="' + this.options.wmode + '" />'
					];

					htmlObj = document.createElement(objStr);
					for(var i=0; i < paramStr.length; i++) {
						htmlObj.appendChild(document.createElement(paramStr[i]));
					}
				} else {
					var createParam = function(el, n, v) {
						var p = document.createElement("param");
						p.setAttribute("name", n);	
						p.setAttribute("value", v);
						el.appendChild(p);
					};

					htmlObj = document.createElement("object");
					htmlObj.setAttribute("id", this.internal.flash.id);
					htmlObj.setAttribute("data", this.internal.flash.swf);
					htmlObj.setAttribute("type", "application/x-shockwave-flash");
					htmlObj.setAttribute("width", "1"); // Non-zero
					htmlObj.setAttribute("height", "1"); // Non-zero
					createParam(htmlObj, "flashvars", flashVars);
					createParam(htmlObj, "allowscriptaccess", "always");
					createParam(htmlObj, "bgcolor", this.options.backgroundColor);
					createParam(htmlObj, "wmode", this.options.wmode);
				}

				this.element.append(htmlObj);
				this.internal.flash.jq = $(htmlObj);
			}
			
			// Add the HTML solution if being used.
			if(this.html.used) {

				// The HTML Audio handlers
				if(this.html.audio.available) {
					this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio);
					this.element.append(this.htmlElement.audio);
					this.internal.audio.jq = $("#" + this.internal.audio.id);
				}

				// The HTML Video handlers
				if(this.html.video.available) {
					this._addHtmlEventListeners(this.htmlElement.video, this.html.video);
					this.element.append(this.htmlElement.video);
					this.internal.video.jq = $("#" + this.internal.video.id);
					this.internal.video.jq.css({'width':'0px', 'height':'0px'}); // Using size 0x0 since a .hide() causes issues in iOS
				}
			}

			// Create the bridge that emulates the HTML Media element on the jPlayer DIV
			if( this.options.emulateHtml ) {
				this._emulateHtmlBridge();
			}

			if(this.html.used && !this.flash.used) { // If only HTML, then emulate flash ready() call after 100ms.
				setTimeout( function() {
					self.internal.ready = true;
					self.version.flash = "n/a";
					self._trigger($.jPlayer.event.repeat); // Trigger the repeat event so its handler can initialize itself with the loop option.
					self._trigger($.jPlayer.event.ready);
				}, 100);
			}

			// Initialize the interface components with the options.
			this._updateInterface();
			this._updateButtons(false);
			this._updateAutohide();
			this._updateVolume(this.options.volume);
			this._updateMute(this.options.muted);
			if(this.css.jq.videoPlay.length) {
				this.css.jq.videoPlay.hide();
			}

			$.jPlayer.prototype.count++; // Change static variable via prototype.
		},
		destroy: function() {
			// MJP: The background change remains. Would need to store the original to restore it correctly.

			// Reset the interface, remove seeking effect and times.
			this._resetStatus();
			this._updateInterface();
			this._seeked();
			if(this.css.jq.currentTime.length) {
				this.css.jq.currentTime.text("");
			}
			if(this.css.jq.duration.length) {
				this.css.jq.duration.text("");
			}

			if(this.status.srcSet) { // Or you get a bogus error event
				this.pause(); // Pauses the media and clears any delayed commands used in the HTML solution.
			}
			$.each(this.css.jq, function(fn, jq) { // Remove any bindings from the interface controls.
				// Check selector is valid before trying to execute method.
				if(jq.length) {
					jq.unbind(".jPlayer");
				}
			});
			if( this.options.emulateHtml ) {
				this._destroyHtmlBridge();
			}
			this.element.removeData("jPlayer"); // Remove jPlayer data
			this.element.unbind(".jPlayer"); // Remove all event handlers created by the jPlayer constructor
			this.element.empty(); // Remove the inserted child elements
			
			this.instances[this.internal.instance] = undefined; // Clear the instance on the static instance object
		},
		enable: function() { // Plan to implement
			// options.disabled = false
		},
		disable: function () { // Plan to implement
			// options.disabled = true
		},
		_addHtmlEventListeners: function(mediaElement, entity) {
			var self = this;
			mediaElement.preload = this.options.preload;
			mediaElement.muted = this.options.muted;
			mediaElement.volume = this.options.volume;

			// Create the event listeners
			// Only want the active entity to affect jPlayer and bubble events.
			// Using entity.gate so that object is referenced and gate property always current
			
			mediaElement.addEventListener("progress", function() {
				if(entity.gate && !self.status.waitForLoad) {
					self._getHtmlStatus(mediaElement);
					self._updateInterface();
					self._trigger($.jPlayer.event.progress);
				}
			}, false);
			mediaElement.addEventListener("timeupdate", function() {
				if(entity.gate && !self.status.waitForLoad) {
					self._getHtmlStatus(mediaElement);
					self._updateInterface();
					self._trigger($.jPlayer.event.timeupdate);
				}
			}, false);
			mediaElement.addEventListener("durationchange", function() {
				if(entity.gate && !self.status.waitForLoad) {
					self.status.duration = this.duration;
					self._getHtmlStatus(mediaElement);
					self._updateInterface();
					self._trigger($.jPlayer.event.durationchange);
				}
			}, false);
			mediaElement.addEventListener("play", function() {
				if(entity.gate && !self.status.waitForLoad) {
					self._updateButtons(true);
					self._trigger($.jPlayer.event.play);
				}
			}, false);
			mediaElement.addEventListener("playing", function() {
				if(entity.gate && !self.status.waitForLoad) {
					self._updateButtons(true);
					self._seeked();
					self._trigger($.jPlayer.event.playing);
				}
			}, false);
			mediaElement.addEventListener("pause", function() {
				if(entity.gate && !self.status.waitForLoad) {
					self._updateButtons(false);
					self._trigger($.jPlayer.event.pause);
				}
			}, false);
			mediaElement.addEventListener("waiting", function() {
				if(entity.gate && !self.status.waitForLoad) {
					self._seeking();
					self._trigger($.jPlayer.event.waiting);
				}
			}, false);
			mediaElement.addEventListener("seeking", function() {
				if(entity.gate && !self.status.waitForLoad) {
					self._seeking();
					self._trigger($.jPlayer.event.seeking);
				}
			}, false);
			mediaElement.addEventListener("seeked", function() {
				if(entity.gate && !self.status.waitForLoad) {
					self._seeked();
					self._trigger($.jPlayer.event.seeked);
				}
			}, false);
			mediaElement.addEventListener("volumechange", function() {
				if(entity.gate && !self.status.waitForLoad) {
					// Read the values back from the element as the Blackberry PlayBook shares the volume with the physical buttons master volume control.
					// However, when tested 6th July 2011, those buttons do not generate an event. The physical play/pause button does though.
					self.options.volume = mediaElement.volume;
					self.options.muted = mediaElement.muted;
					self._updateMute();
					self._updateVolume();
					self._trigger($.jPlayer.event.volumechange);
				}
			}, false);
			mediaElement.addEventListener("suspend", function() { // Seems to be the only way of capturing that the iOS4 browser did not actually play the media from the page code. ie., It needs a user gesture.
				if(entity.gate && !self.status.waitForLoad) {
					self._seeked();
					self._trigger($.jPlayer.event.suspend);
				}
			}, false);
			mediaElement.addEventListener("ended", function() {
				if(entity.gate && !self.status.waitForLoad) {
					// Order of the next few commands are important. Change the time and then pause.
					// Solves a bug in Firefox, where issuing pause 1st causes the media to play from the start. ie., The pause is ignored.
					if(!$.jPlayer.browser.webkit) { // Chrome crashes if you do this in conjunction with a setMedia command in an ended event handler. ie., The playlist demo.
						self.htmlElement.media.currentTime = 0; // Safari does not care about this command. ie., It works with or without this line. (Both Safari and Chrome are Webkit.)
					}
					self.htmlElement.media.pause(); // Pause otherwise a click on the progress bar will play from that point, when it shouldn't, since it stopped playback.
					self._updateButtons(false);
					self._getHtmlStatus(mediaElement, true); // With override true. Otherwise Chrome leaves progress at full.
					self._updateInterface();
					self._trigger($.jPlayer.event.ended);
				}
			}, false);
			mediaElement.addEventListener("error", function() {
				if(entity.gate && !self.status.waitForLoad) {
					self._updateButtons(false);
					self._seeked();
					if(self.status.srcSet) { // Deals with case of clearMedia() causing an error event.
						clearTimeout(self.internal.htmlDlyCmdId); // Clears any delayed commands used in the HTML solution.
						self.status.waitForLoad = true; // Allows the load operation to try again.
						self.status.waitForPlay = true; // Reset since a play was captured.
						if(self.status.video) {
							self.internal.video.jq.css({'width':'0px', 'height':'0px'});
						}
						if(self._validString(self.status.media.poster)) {
							self.internal.poster.jq.show();
						}
						if(self.css.jq.videoPlay.length) {
							self.css.jq.videoPlay.show();
						}
						self._error( {
							type: $.jPlayer.error.URL,
							context: self.status.src, // this.src shows absolute urls. Want context to show the url given.
							message: $.jPlayer.errorMsg.URL,
							hint: $.jPlayer.errorHint.URL
						});
					}
				}
			}, false);
			// Create all the other event listeners that bubble up to a jPlayer event from html, without being used by jPlayer.
			$.each($.jPlayer.htmlEvent, function(i, eventType) {
				mediaElement.addEventListener(this, function() {
					if(entity.gate && !self.status.waitForLoad) {
						self._trigger($.jPlayer.event[eventType]);
					}
				}, false);
			});
		},
		_getHtmlStatus: function(media, override) {
			var ct = 0, d = 0, cpa = 0, sp = 0, cpr = 0;

			if(media.duration) { // Fixes the duration bug in iOS, where the durationchange event occurs when media.duration is not always correct.
				this.status.duration = media.duration;
			}
			ct = media.currentTime;
			cpa = (this.status.duration > 0) ? 100 * ct / this.status.duration : 0;
			if((typeof media.seekable === "object") && (media.seekable.length > 0)) {
				sp = (this.status.duration > 0) ? 100 * media.seekable.end(media.seekable.length-1) / this.status.duration : 100;
				cpr = 100 * media.currentTime / media.seekable.end(media.seekable.length-1);
			} else {
				sp = 100;
				cpr = cpa;
			}
			
			if(override) {
				ct = 0;
				cpr = 0;
				cpa = 0;
			}

			this.status.seekPercent = sp;
			this.status.currentPercentRelative = cpr;
			this.status.currentPercentAbsolute = cpa;
			this.status.currentTime = ct;

			this.status.readyState = media.readyState;
			this.status.networkState = media.networkState;
			this.status.playbackRate = media.playbackRate;
			this.status.ended = media.ended;
		},
		_resetStatus: function() {
			this.status = $.extend({}, this.status, $.jPlayer.prototype.status); // Maintains the status properties that persist through a reset.
		},
		_trigger: function(eventType, error, warning) { // eventType always valid as called using $.jPlayer.event.eventType
			var event = $.Event(eventType);
			event.jPlayer = {};
			event.jPlayer.version = $.extend({}, this.version);
			event.jPlayer.options = $.extend(true, {}, this.options); // Deep copy
			event.jPlayer.status = $.extend(true, {}, this.status); // Deep copy
			event.jPlayer.html = $.extend(true, {}, this.html); // Deep copy
			event.jPlayer.flash = $.extend(true, {}, this.flash); // Deep copy
			if(error) {
				event.jPlayer.error = $.extend({}, error);
			}
			if(warning) {
				event.jPlayer.warning = $.extend({}, warning);
			}
			this.element.trigger(event);
		},
		jPlayerFlashEvent: function(eventType, status) { // Called from Flash
			if(eventType === $.jPlayer.event.ready) {
				if(!this.internal.ready) {
					this.internal.ready = true;
					this.internal.flash.jq.css({'width':'0px', 'height':'0px'}); // Once Flash generates the ready event, minimise to zero as it is not affected by wmode anymore.

					this.version.flash = status.version;
					if(this.version.needFlash !== this.version.flash) {
						this._error( {
							type: $.jPlayer.error.VERSION,
							context: this.version.flash,
							message: $.jPlayer.errorMsg.VERSION + this.version.flash,
							hint: $.jPlayer.errorHint.VERSION
						});
					}
					this._trigger($.jPlayer.event.repeat); // Trigger the repeat event so its handler can initialize itself with the loop option.
					this._trigger(eventType);
				} else {
					// This condition occurs if the Flash is hidden and then shown again.
					// Firefox also reloads the Flash if the CSS position changes. position:fixed is used for full screen.

					// Only do this if the Flash is the solution being used at the moment. Affects Media players where both solution may be being used.
					if(this.flash.gate) {

						// Send the current status to the Flash now that it is ready (available) again.
						if(this.status.srcSet) {

							// Need to read original status before issuing the setMedia command.
							var	currentTime = this.status.currentTime,
								paused = this.status.paused; 

							this.setMedia(this.status.media);
							if(currentTime > 0) {
								if(paused) {
									this.pause(currentTime);
								} else {
									this.play(currentTime);
								}
							}
						}
						this._trigger($.jPlayer.event.flashreset);
					}
				}
			}
			if(this.flash.gate) {
				switch(eventType) {
					case $.jPlayer.event.progress:
						this._getFlashStatus(status);
						this._updateInterface();
						this._trigger(eventType);
						break;
					case $.jPlayer.event.timeupdate:
						this._getFlashStatus(status);
						this._updateInterface();
						this._trigger(eventType);
						break;
					case $.jPlayer.event.play:
						this._seeked();
						this._updateButtons(true);
						this._trigger(eventType);
						break;
					case $.jPlayer.event.pause:
						this._updateButtons(false);
						this._trigger(eventType);
						break;
					case $.jPlayer.event.ended:
						this._updateButtons(false);
						this._trigger(eventType);
						break;
					case $.jPlayer.event.error:
						this.status.waitForLoad = true; // Allows the load operation to try again.
						this.status.waitForPlay = true; // Reset since a play was captured.
						if(this.status.video) {
							this.internal.flash.jq.css({'width':'0px', 'height':'0px'});
						}
						if(this._validString(this.status.media.poster)) {
							this.internal.poster.jq.show();
						}
						if(this.css.jq.videoPlay.length) {
							this.css.jq.videoPlay.show();
						}
						if(this.status.video) { // Set up for another try. Execute before error event.
							this._flash_setVideo(this.status.media);
						} else {
							this._flash_setAudio(this.status.media);
						}
						this._error( {
							type: $.jPlayer.error.URL,
							context:status.src,
							message: $.jPlayer.errorMsg.URL,
							hint: $.jPlayer.errorHint.URL
						});
						break;
					case $.jPlayer.event.seeking:
						this._seeking();
						this._trigger(eventType);
						break;
					case $.jPlayer.event.seeked:
						this._seeked();
						this._trigger(eventType);
						break;
					case $.jPlayer.event.ready:
						// The ready event is handled outside the switch statement.
						// Captured here otherwise 2 ready events would be generated if the ready event handler used setMedia.
						break;
					default:
						this._trigger(eventType);
				}
			}
			return false;
		},
		_getFlashStatus: function(status) {
			this.status.seekPercent = status.seekPercent;
			this.status.currentPercentRelative = status.currentPercentRelative;
			this.status.currentPercentAbsolute = status.currentPercentAbsolute;
			this.status.currentTime = status.currentTime;
			this.status.duration = status.duration;

			// The Flash does not generate this information in this release
			this.status.readyState = 4; // status.readyState;
			this.status.networkState = 0; // status.networkState;
			this.status.playbackRate = 1; // status.playbackRate;
			this.status.ended = false; // status.ended;
		},
		_updateButtons: function(playing) {
			if(playing !== undefined) {
				this.status.paused = !playing;
				if(this.css.jq.play.length && this.css.jq.pause.length) {
					if(playing) {
						this.css.jq.play.hide();
						this.css.jq.pause.show();
					} else {
						this.css.jq.play.show();
						this.css.jq.pause.hide();
					}
				}
			}
			if(this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length) {
				if(this.options.fullScreen) {
					this.css.jq.fullScreen.hide();
					this.css.jq.restoreScreen.show();
				} else {
					this.css.jq.fullScreen.show();
					this.css.jq.restoreScreen.hide();
				}
			}
			if(this.css.jq.repeat.length && this.css.jq.repeatOff.length) {
				if(this.options.loop) {
					this.css.jq.repeat.hide();
					this.css.jq.repeatOff.show();
				} else {
					this.css.jq.repeat.show();
					this.css.jq.repeatOff.hide();
				}
			}
		},
		_updateInterface: function() {
			if(this.css.jq.seekBar.length) {
				this.css.jq.seekBar.width(this.status.seekPercent+"%");
			}
			if(this.css.jq.playBar.length) {
				this.css.jq.playBar.width(this.status.currentPercentRelative+"%");
			}
			if(this.css.jq.currentTime.length) {
				this.css.jq.currentTime.text($.jPlayer.convertTime(this.status.currentTime));
			}
			if(this.css.jq.duration.length) {
				this.css.jq.duration.text($.jPlayer.convertTime(this.status.duration));
			}
		},
		_seeking: function() {
			if(this.css.jq.seekBar.length) {
				this.css.jq.seekBar.addClass("jp-seeking-bg");
			}
		},
		_seeked: function() {
			if(this.css.jq.seekBar.length) {
				this.css.jq.seekBar.removeClass("jp-seeking-bg");
			}
		},
		setMedia: function(media) {
		
			/*	media[format] = String: URL of format. Must contain all of the supplied option's video or audio formats.
			 *	media.poster = String: Video poster URL.
			 *	media.subtitles = String: * NOT IMPLEMENTED * URL of subtitles SRT file
			 *	media.chapters = String: * NOT IMPLEMENTED * URL of chapters SRT file
			 *	media.stream = Boolean: * NOT IMPLEMENTED * Designating actual media streams. ie., "false/undefined" for files. Plan to refresh the flash every so often.
			 */
			
			var self = this;
			
			this._seeked();
			clearTimeout(this.internal.htmlDlyCmdId); // Clears any delayed commands used in the HTML solution.

			// Store the current html gates, since we need for clearMedia() conditions.
			var audioGate = this.html.audio.gate;
			var videoGate = this.html.video.gate;

			var supported = false;
			$.each(this.formats, function(formatPriority, format) {
				var isVideo = self.format[format].media === 'video';
				$.each(self.solutions, function(solutionPriority, solution) {
					if(self[solution].support[format] && self._validString(media[format])) { // Format supported in solution and url given for format.
						var isHtml = solution === 'html';
						
						if(isVideo) {
							if(isHtml) {
								self.html.audio.gate = false;
								self.html.video.gate = true;
								self.flash.gate = false;
							} else {
								self.html.audio.gate = false;
								self.html.video.gate = false;
								self.flash.gate = true;
							}
						} else {
							if(isHtml) {
								self.html.audio.gate = true;
								self.html.video.gate = false;
								self.flash.gate = false;
							} else {
								self.html.audio.gate = false;
								self.html.video.gate = false;
								self.flash.gate = true;
							}
						}

						// Clear media of the previous solution if:
						//  - it was Flash
						//  - changing from HTML to Flash
						//  - the HTML solution media type (audio or video) remained the same.
						// Note that, we must be careful with clearMedia() on iPhone, otherwise clearing the video when changing to audio corrupts the built in video player.
						if(self.flash.active || (self.html.active && self.flash.gate) || (audioGate === self.html.audio.gate && videoGate === self.html.video.gate)) {
							self.clearMedia();
						} else if(audioGate !== self.html.audio.gate && videoGate !== self.html.video.gate) { // If switching between html elements
							self._html_pause();
							// Hide the video if it was being used.
							if(self.status.video) {
								self.internal.video.jq.css({'width':'0px', 'height':'0px'});
							}
							self._resetStatus(); // Since clearMedia usually does this. Execute after status.video useage.
						}

						if(isVideo) {
							if(isHtml) {
								self._html_setVideo(media);
								self.html.active = true;
								self.flash.active = false;
							} else {
								self._flash_setVideo(media);
								self.html.active = false;
								self.flash.active = true;
							}
							if(self.css.jq.videoPlay.length) {
								self.css.jq.videoPlay.show();
							}
							self.status.video = true;
						} else {
							if(isHtml) {
								self._html_setAudio(media);
								self.html.active = true;
								self.flash.active = false;
							} else {
								self._flash_setAudio(media);
								self.html.active = false;
								self.flash.active = true;
							}
							if(self.css.jq.videoPlay.length) {
								self.css.jq.videoPlay.hide();
							}
							self.status.video = false;
						}
						
						supported = true;
						return false; // Exit $.each
					}
				});
				if(supported) {
					return false; // Exit $.each
				}
			});

			if(supported) {
				// Set poster after the possible clearMedia() command above. IE had issues since the IMG onload event occurred immediately when cached. ie., The clearMedia() hide the poster.
				if(this._validString(media.poster)) {
					if(this.htmlElement.poster.src !== media.poster) { // Since some browsers do not generate img onload event.
						this.htmlElement.poster.src = media.poster;
					} else {
						this.internal.poster.jq.show();
					}
				} else {
					this.internal.poster.jq.hide(); // Hide if not used, since clearMedia() does not always occur above. ie., HTML audio <-> video switching.
				}
				this.status.srcSet = true;
				this.status.media = $.extend({}, media);
				this._updateButtons(false);
				this._updateInterface();
			} else { // jPlayer cannot support any formats provided in this browser
				// Pause here if old media could be playing. Otherwise, playing media being changed to bad media would leave the old media playing.
				if(this.status.srcSet && !this.status.waitForPlay) {
					this.pause();
				}
				// Reset all the control flags
				this.html.audio.gate = false;
				this.html.video.gate = false;
				this.flash.gate = false;
				this.html.active = false;
				this.flash.active = false;
				// Reset status and interface.
				this._resetStatus();
				this._updateInterface();
				this._updateButtons(false);
				// Hide the any old media
				this.internal.poster.jq.hide();
				if(this.html.used && this.require.video) {
					this.internal.video.jq.css({'width':'0px', 'height':'0px'});
				}
				if(this.flash.used) {
					this.internal.flash.jq.css({'width':'0px', 'height':'0px'});
				}
				// Send an error event
				this._error( {
					type: $.jPlayer.error.NO_SUPPORT,
					context: "{supplied:'" + this.options.supplied + "'}",
					message: $.jPlayer.errorMsg.NO_SUPPORT,
					hint: $.jPlayer.errorHint.NO_SUPPORT
				});
			}
		},
		clearMedia: function() {
			this._resetStatus();
			this._updateButtons(false);

			this.internal.poster.jq.hide();

			clearTimeout(this.internal.htmlDlyCmdId);

			if(this.html.active) {
				this._html_clearMedia();
			} else if(this.flash.active) {
				this._flash_clearMedia();
			}
		},
		load: function() {
			if(this.status.srcSet) {
				if(this.html.active) {
					this._html_load();
				} else if(this.flash.active) {
					this._flash_load();
				}
			} else {
				this._urlNotSetError("load");
			}
		},
		play: function(time) {
			time = (typeof time === "number") ? time : NaN; // Remove jQuery event from click handler
			if(this.status.srcSet) {
				if(this.html.active) {
					this._html_play(time);
				} else if(this.flash.active) {
					this._flash_play(time);
				}
			} else {
				this._urlNotSetError("play");
			}
		},
		videoPlay: function(e) { // Handles clicks on the play button over the video poster
			this.play();
		},
		pause: function(time) {
			time = (typeof time === "number") ? time : NaN; // Remove jQuery event from click handler
			if(this.status.srcSet) {
				if(this.html.active) {
					this._html_pause(time);
				} else if(this.flash.active) {
					this._flash_pause(time);
				}
			} else {
				this._urlNotSetError("pause");
			}
		},
		pauseOthers: function() {
			var self = this;
			$.each(this.instances, function(i, element) {
				if(self.element !== element) { // Do not this instance.
					if(element.data("jPlayer").status.srcSet) { // Check that media is set otherwise would cause error event.
						element.jPlayer("pause");
					}
				}
			});
		},
		stop: function() {
			if(this.status.srcSet) {
				if(this.html.active) {
					this._html_pause(0);
				} else if(this.flash.active) {
					this._flash_pause(0);
				}
			} else {
				this._urlNotSetError("stop");
			}
		},
		playHead: function(p) {
			p = this._limitValue(p, 0, 100);
			if(this.status.srcSet) {
				if(this.html.active) {
					this._html_playHead(p);
				} else if(this.flash.active) {
					this._flash_playHead(p);
				}
			} else {
				this._urlNotSetError("playHead");
			}
		},
		_muted: function(muted) {
			this.options.muted = muted;
			if(this.html.used) {
				this._html_mute(muted);
			}
			if(this.flash.used) {
				this._flash_mute(muted);
			}

			// The HTML solution generates this event from the media element itself.
			if(this.flash.gate) {
				this._updateMute(muted);
				this._updateVolume(this.options.volume);
				this._trigger($.jPlayer.event.volumechange);
			}
		},
		mute: function(mute) { // mute is either: undefined (true), an event object (true) or a boolean (muted).
			mute = mute === undefined ? true : !!mute;
			this._muted(mute);
		},
		unmute: function(unmute) { // unmute is either: undefined (true), an event object (true) or a boolean (!muted).
			unmute = unmute === undefined ? true : !!unmute;
			this._muted(!unmute);
		},
		_updateMute: function(mute) {
			if(mute === undefined) {
				mute = this.options.muted;
			}
			if(this.css.jq.mute.length && this.css.jq.unmute.length) {
				if(mute) {
					this.css.jq.mute.hide();
					this.css.jq.unmute.show();
				} else {
					this.css.jq.mute.show();
					this.css.jq.unmute.hide();
				}
			}
		},
		volume: function(v) {
			v = this._limitValue(v, 0, 1);
			this.options.volume = v;

			if(this.html.used) {
				this._html_volume(v);
			}
			if(this.flash.used) {
				this._flash_volume(v);
			}

			// The HTML solution generates this event from the media element itself.
			if(this.flash.gate) {
				this._updateVolume(v);
				this._trigger($.jPlayer.event.volumechange);
			}
		},
		volumeBar: function(e) { // Handles clicks on the volumeBar
			if(this.css.jq.volumeBar.length) {
				var offset = this.css.jq.volumeBar.offset();
				var x = e.pageX - offset.left;
				var w = this.css.jq.volumeBar.width();
				var v = x/w;
				this.volume(v);
			}
			if(this.options.muted) {
				this._muted(false);
			}
		},
		volumeBarValue: function(e) { // Handles clicks on the volumeBarValue
			this.volumeBar(e);
		},
		_updateVolume: function(v) {
			if(v === undefined) {
				v = this.options.volume;
			}
			v = this.options.muted ? 0 : v;

			if(this.css.jq.volumeBarValue.length) {
				this.css.jq.volumeBarValue.width((v*100)+"%");
			}
		},
		volumeMax: function() { // Handles clicks on the volume max
			this.volume(1);
			if(this.options.muted) {
				this._muted(false);
			}
		},
		_cssSelectorAncestor: function(ancestor) {
			var self = this;
			this.options.cssSelectorAncestor = ancestor;
			this._removeUiClass();
			this.ancestorJq = ancestor ? $(ancestor) : []; // Would use $() instead of [], but it is only 1.4+
			if(ancestor && this.ancestorJq.length !== 1) { // So empty strings do not generate the warning.
				this._warning( {
					type: $.jPlayer.warning.CSS_SELECTOR_COUNT,
					context: ancestor,
					message: $.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.",
					hint: $.jPlayer.warningHint.CSS_SELECTOR_COUNT
				});
			}
			this._addUiClass();
			$.each(this.options.cssSelector, function(fn, cssSel) {
				self._cssSelector(fn, cssSel);
			});
		},
		_cssSelector: function(fn, cssSel) {
			var self = this;
			if(typeof cssSel === 'string') {
				if($.jPlayer.prototype.options.cssSelector[fn]) {
					if(this.css.jq[fn] && this.css.jq[fn].length) {
						this.css.jq[fn].unbind(".jPlayer");
					}
					this.options.cssSelector[fn] = cssSel;
					this.css.cs[fn] = this.options.cssSelectorAncestor + " " + cssSel;

					if(cssSel) { // Checks for empty string
						this.css.jq[fn] = $(this.css.cs[fn]);
					} else {
						this.css.jq[fn] = []; // To comply with the css.jq[fn].length check before its use. As of jQuery 1.4 could have used $() for an empty set. 
					}

					if(this.css.jq[fn].length) {
						var handler = function(e) {
							self[fn](e);
							$(this).blur();
							return false;
						};
						this.css.jq[fn].bind("click.jPlayer", handler); // Using jPlayer namespace
					}

					if(cssSel && this.css.jq[fn].length !== 1) { // So empty strings do not generate the warning. ie., they just remove the old one.
						this._warning( {
							type: $.jPlayer.warning.CSS_SELECTOR_COUNT,
							context: this.css.cs[fn],
							message: $.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[fn].length + " found for " + fn + " method.",
							hint: $.jPlayer.warningHint.CSS_SELECTOR_COUNT
						});
					}
				} else {
					this._warning( {
						type: $.jPlayer.warning.CSS_SELECTOR_METHOD,
						context: fn,
						message: $.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
						hint: $.jPlayer.warningHint.CSS_SELECTOR_METHOD
					});
				}
			} else {
				this._warning( {
					type: $.jPlayer.warning.CSS_SELECTOR_STRING,
					context: cssSel,
					message: $.jPlayer.warningMsg.CSS_SELECTOR_STRING,
					hint: $.jPlayer.warningHint.CSS_SELECTOR_STRING
				});
			}
		},
		seekBar: function(e) { // Handles clicks on the seekBar
			if(this.css.jq.seekBar) {
				var offset = this.css.jq.seekBar.offset();
				var x = e.pageX - offset.left;
				var w = this.css.jq.seekBar.width();
				var p = 100*x/w;
				this.playHead(p);
			}
		},
		playBar: function(e) { // Handles clicks on the playBar
			this.seekBar(e);
		},
		repeat: function() { // Handle clicks on the repeat button
			this._loop(true);
		},
		repeatOff: function() { // Handle clicks on the repeatOff button
			this._loop(false);
		},
		_loop: function(loop) {
			if(this.options.loop !== loop) {
				this.options.loop = loop;
				this._updateButtons();
				this._trigger($.jPlayer.event.repeat);
			}
		},

		// Plan to review the cssSelector method to cope with missing associated functions accordingly.

		currentTime: function(e) { // Handles clicks on the text
			// Added to avoid errors using cssSelector system for the text
		},
		duration: function(e) { // Handles clicks on the text
			// Added to avoid errors using cssSelector system for the text
		},
		gui: function(e) { // Handles clicks on the gui
			// Added to avoid errors using cssSelector system for the gui
		},

		// Options code adapted from ui.widget.js (1.8.7).  Made changes so the key can use dot notation. To match previous getData solution in jPlayer 1.
		option: function(key, value) {
			var options = key;

			 // Enables use: options().  Returns a copy of options object
			if ( arguments.length === 0 ) {
				return $.extend( true, {}, this.options );
			}

			if(typeof key === "string") {
				var keys = key.split(".");

				 // Enables use: options("someOption")  Returns a copy of the option. Supports dot notation.
				if(value === undefined) {

					var opt = $.extend(true, {}, this.options);
					for(var i = 0; i < keys.length; i++) {
						if(opt[keys[i]] !== undefined) {
							opt = opt[keys[i]];
						} else {
							this._warning( {
								type: $.jPlayer.warning.OPTION_KEY,
								context: key,
								message: $.jPlayer.warningMsg.OPTION_KEY,
								hint: $.jPlayer.warningHint.OPTION_KEY
							});
							return undefined;
						}
					}
					return opt;
				}

				 // Enables use: options("someOptionObject", someObject}).  Creates: {someOptionObject:someObject}
				 // Enables use: options("someOption", someValue).  Creates: {someOption:someValue}
				 // Enables use: options("someOptionObject.someOption", someValue).  Creates: {someOptionObject:{someOption:someValue}}

				options = {};
				var opts = options;

				for(var j = 0; j < keys.length; j++) {
					if(j < keys.length - 1) {
						opts[keys[j]] = {};
						opts = opts[keys[j]];
					} else {
						opts[keys[j]] = value;
					}
				}
			}

			 // Otherwise enables use: options(optionObject).  Uses original object (the key)

			this._setOptions(options);

			return this;
		},
		_setOptions: function(options) {
			var self = this;
			$.each(options, function(key, value) { // This supports the 2 level depth that the options of jPlayer has. Would review if we ever need more depth.
				self._setOption(key, value);
			});

			return this;
		},
		_setOption: function(key, value) {
			var self = this;

			// The ability to set options is limited at this time.

			switch(key) {
				case "volume" :
					this.volume(value);
					break;
				case "muted" :
					this._muted(value);
					break;
				case "cssSelectorAncestor" :
					this._cssSelectorAncestor(value); // Set and refresh all associations for the new ancestor.
					break;
				case "cssSelector" :
					$.each(value, function(fn, cssSel) {
						self._cssSelector(fn, cssSel); // NB: The option is set inside this function, after further validity checks.
					});
					break;
				case "fullScreen" :
					if(this.options[key] !== value) { // if changed
						this._removeUiClass();
						this.options[key] = value;
						this._refreshSize();
					}
					break;
				case "size" :
					if(!this.options.fullScreen && this.options[key].cssClass !== value.cssClass) {
						this._removeUiClass();
					}
					this.options[key] = $.extend({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
					this._refreshSize();
					break;
				case "sizeFull" :
					if(this.options.fullScreen && this.options[key].cssClass !== value.cssClass) {
						this._removeUiClass();
					}
					this.options[key] = $.extend({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
					this._refreshSize();
					break;
				case "autohide" :
					this.options[key] = $.extend({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
					this._updateAutohide();
					break;
				case "loop" :
					this._loop(value);
					break;
				case "emulateHtml" :
					if(this.options[key] !== value) { // To avoid multiple event handlers being created, if true already.
						this.options[key] = value;
						if(value) {
							this._emulateHtmlBridge();
						} else {
							this._destroyHtmlBridge();
						}
					}
					break;
			}

			return this;
		},
		// End of: (Options code adapted from ui.widget.js)

		_refreshSize: function() {
			this._setSize(); // update status and jPlayer element size
			this._addUiClass(); // update the ui class
			this._updateSize(); // update internal sizes
			this._updateButtons();
			this._updateAutohide();
			this._trigger($.jPlayer.event.resize);
		},
		_setSize: function() {
			// Determine the current size from the options
			if(this.options.fullScreen) {
				this.status.width = this.options.sizeFull.width;
				this.status.height = this.options.sizeFull.height;
				this.status.cssClass = this.options.sizeFull.cssClass;
			} else {
				this.status.width = this.options.size.width;
				this.status.height = this.options.size.height;
				this.status.cssClass = this.options.size.cssClass;
			}

			// Set the size of the jPlayer area.
			this.element.css({'width': this.status.width, 'height': this.status.height});
		},
		_addUiClass: function() {
			if(this.ancestorJq.length) {
				this.ancestorJq.addClass(this.status.cssClass);
			}
		},
		_removeUiClass: function() {
			if(this.ancestorJq.length) {
				this.ancestorJq.removeClass(this.status.cssClass);
			}
		},
		_updateSize: function() {
			// The poster uses show/hide so can simply resize it.
			this.internal.poster.jq.css({'width': this.status.width, 'height': this.status.height});

			// Video html or flash resized if necessary at this time.
			if(!this.status.waitForPlay) {
				if(this.html.active && this.status.video) { // Only if video media
					this.internal.video.jq.css({'width': this.status.width, 'height': this.status.height});
				}
				else if(this.flash.active) {
					this.internal.flash.jq.css({'width': this.status.width, 'height': this.status.height});
				}
			}
		},
		_updateAutohide: function() {
			var	self = this,
				event = "mousemove.jPlayer",
				namespace = ".jPlayerAutohide",
				eventType = event + namespace,
				handler = function() {
					self.css.jq.gui.fadeIn(self.options.autohide.fadeIn, function() {
						clearTimeout(self.internal.autohideId);
						self.internal.autohideId = setTimeout( function() {
							self.css.jq.gui.fadeOut(self.options.autohide.fadeOut);
						}, self.options.autohide.hold);
					});
				};

			clearTimeout(this.internal.autohideId);
			this.element.unbind(namespace);
			if(this.css.jq.gui.length) {
				this.css.jq.gui.unbind(namespace);
				if(this.options.fullScreen && this.options.autohide.full || !this.options.fullScreen && this.options.autohide.restored) {
					this.element.bind(eventType, handler);
					this.css.jq.gui.bind(eventType, handler);
					this.css.jq.gui.hide();
				} else {
					this.css.jq.gui.stop(true, true).show(); // Need the stop() otherwise a change screen mode during the GUI fade out hides the GUI in the other mode.
				}
			}
		},
		fullScreen: function() {
			this._setOption("fullScreen", true);
		},
		restoreScreen: function() {
			this._setOption("fullScreen", false);
		},
		_html_initMedia: function() {
			if(this.status.srcSet  && !this.status.waitForPlay) {
				this.htmlElement.media.pause();
			}
			if(this.options.preload !== 'none') {
				this._html_load();
			}
			this._trigger($.jPlayer.event.timeupdate); // The flash generates this event for its solution.
		},
		_html_setAudio: function(media) {
			var self = this;
			// Always finds a format due to checks in setMedia()
			$.each(this.formats, function(priority, format) {
				if(self.html.support[format] && media[format]) {
					self.status.src = media[format];
					self.status.format[format] = true;
					self.status.formatType = format;
					return false;
				}
			});
			this.htmlElement.media = this.htmlElement.audio;
			this._html_initMedia();
		},
		_html_setVideo: function(media) {
			var self = this;
			// Always finds a format due to checks in setMedia()
			$.each(this.formats, function(priority, format) {
				if(self.html.support[format] && media[format]) {
					self.status.src = media[format];
					self.status.format[format] = true;
					self.status.formatType = format;
					return false;
				}
			});
			this.htmlElement.media = this.htmlElement.video;
			this._html_initMedia();
		},
		_html_clearMedia: function() {
			if(this.htmlElement.media) {
				if(this.htmlElement.media.id === this.internal.video.id) {
					this.internal.video.jq.css({'width':'0px', 'height':'0px'});
				}
				this.htmlElement.media.pause();
				this.htmlElement.media.src = "";
				this.htmlElement.media.load(); // Stops an old, "in progress" download from continuing the download. Triggers the loadstart, error and emptied events, due to the empty src. Also an abort event if a download was in progress.
			}
		},
		_html_load: function() {
			if(this.status.waitForLoad) {
				this.status.waitForLoad = false;
				this.htmlElement.media.src = this.status.src;
				this.htmlElement.media.load();
			}
			clearTimeout(this.internal.htmlDlyCmdId);
		},
		_html_play: function(time) {
			var self = this;
			this._html_load(); // Loads if required and clears any delayed commands.

			this.htmlElement.media.play(); // Before currentTime attempt otherwise Firefox 4 Beta never loads.

			if(!isNaN(time)) {
				try {
					this.htmlElement.media.currentTime = time;
				} catch(err) {
					this.internal.htmlDlyCmdId = setTimeout(function() {
						self.play(time);
					}, 100);
					return; // Cancel execution and wait for the delayed command.
				}
			}
			this._html_checkWaitForPlay();
		},
		_html_pause: function(time) {
			var self = this;
			
			if(time > 0) { // We do not want the stop() command, which does pause(0), causing a load operation.
				this._html_load(); // Loads if required and clears any delayed commands.
			} else {
				clearTimeout(this.internal.htmlDlyCmdId);
			}

			// Order of these commands is important for Safari (Win) and IE9. Pause then change currentTime.
			this.htmlElement.media.pause();

			if(!isNaN(time)) {
				try {
					this.htmlElement.media.currentTime = time;
				} catch(err) {
					this.internal.htmlDlyCmdId = setTimeout(function() {
						self.pause(time);
					}, 100);
					return; // Cancel execution and wait for the delayed command.
				}
			}
			if(time > 0) { // Avoids a setMedia() followed by stop() or pause(0) hiding the video play button.
				this._html_checkWaitForPlay();
			}
		},
		_html_playHead: function(percent) {
			var self = this;
			this._html_load(); // Loads if required and clears any delayed commands.
			try {
				if((typeof this.htmlElement.media.seekable === "object") && (this.htmlElement.media.seekable.length > 0)) {
					this.htmlElement.media.currentTime = percent * this.htmlElement.media.seekable.end(this.htmlElement.media.seekable.length-1) / 100;
				} else if(this.htmlElement.media.duration > 0 && !isNaN(this.htmlElement.media.duration)) {
					this.htmlElement.media.currentTime = percent * this.htmlElement.media.duration / 100;
				} else {
					throw "e";
				}
			} catch(err) {
				this.internal.htmlDlyCmdId = setTimeout(function() {
					self.playHead(percent);
				}, 100);
				return; // Cancel execution and wait for the delayed command.
			}
			if(!this.status.waitForLoad) {
				this._html_checkWaitForPlay();
			}
		},
		_html_checkWaitForPlay: function() {
			if(this.status.waitForPlay) {
				this.status.waitForPlay = false;
				if(this.css.jq.videoPlay.length) {
					this.css.jq.videoPlay.hide();
				}
				if(this.status.video) {
					this.internal.poster.jq.hide();
					this.internal.video.jq.css({'width': this.status.width, 'height': this.status.height});
				}
			}
		},
		_html_volume: function(v) {
			if(this.html.audio.available) {
				this.htmlElement.audio.volume = v;
			}
			if(this.html.video.available) {
				this.htmlElement.video.volume = v;
			}
		},
		_html_mute: function(m) {
			if(this.html.audio.available) {
				this.htmlElement.audio.muted = m;
			}
			if(this.html.video.available) {
				this.htmlElement.video.muted = m;
			}
		},
		_flash_setAudio: function(media) {
			var self = this;
			try {
				// Always finds a format due to checks in setMedia()
				$.each(this.formats, function(priority, format) {
					if(self.flash.support[format] && media[format]) {
						switch (format) {
							case "m4a" :
							case "fla" :
								self._getMovie().fl_setAudio_m4a(media[format]);
								break;
							case "mp3" :
								self._getMovie().fl_setAudio_mp3(media[format]);
								break;
						}
						self.status.src = media[format];
						self.status.format[format] = true;
						self.status.formatType = format;
						return false;
					}
				});

				if(this.options.preload === 'auto') {
					this._flash_load();
					this.status.waitForLoad = false;
				}
			} catch(err) { this._flashError(err); }
		},
		_flash_setVideo: function(media) {
			var self = this;
			try {
				// Always finds a format due to checks in setMedia()
				$.each(this.formats, function(priority, format) {
					if(self.flash.support[format] && media[format]) {
						switch (format) {
							case "m4v" :
							case "flv" :
								self._getMovie().fl_setVideo_m4v(media[format]);
								break;
						}
						self.status.src = media[format];
						self.status.format[format] = true;
						self.status.formatType = format;
						return false;
					}
				});

				if(this.options.preload === 'auto') {
					this._flash_load();
					this.status.waitForLoad = false;
				}
			} catch(err) { this._flashError(err); }
		},
		_flash_clearMedia: function() {
			this.internal.flash.jq.css({'width':'0px', 'height':'0px'}); // Must do via CSS as setting attr() to zero causes a jQuery error in IE.
			try {
				this._getMovie().fl_clearMedia();
			} catch(err) { this._flashError(err); }
		},
		_flash_load: function() {
			try {
				this._getMovie().fl_load();
			} catch(err) { this._flashError(err); }
			this.status.waitForLoad = false;
		},
		_flash_play: function(time) {
			try {
				this._getMovie().fl_play(time);
			} catch(err) { this._flashError(err); }
			this.status.waitForLoad = false;
			this._flash_checkWaitForPlay();
		},
		_flash_pause: function(time) {
			try {
				this._getMovie().fl_pause(time);
			} catch(err) { this._flashError(err); }
			if(time > 0) { // Avoids a setMedia() followed by stop() or pause(0) hiding the video play button.
				this.status.waitForLoad = false;
				this._flash_checkWaitForPlay();
			}
		},
		_flash_playHead: function(p) {
			try {
				this._getMovie().fl_play_head(p);
			} catch(err) { this._flashError(err); }
			if(!this.status.waitForLoad) {
				this._flash_checkWaitForPlay();
			}
		},
		_flash_checkWaitForPlay: function() {
			if(this.status.waitForPlay) {
				this.status.waitForPlay = false;
				if(this.css.jq.videoPlay.length) {
					this.css.jq.videoPlay.hide();
				}
				if(this.status.video) {
					this.internal.poster.jq.hide();
					this.internal.flash.jq.css({'width': this.status.width, 'height': this.status.height});
				}
			}
		},
		_flash_volume: function(v) {
			try {
				this._getMovie().fl_volume(v);
			} catch(err) { this._flashError(err); }
		},
		_flash_mute: function(m) {
			try {
				this._getMovie().fl_mute(m);
			} catch(err) { this._flashError(err); }
		},
		_getMovie: function() {
			return document[this.internal.flash.id];
		},
		_checkForFlash: function (version) {
			// Function checkForFlash adapted from FlashReplace by Robert Nyman
			// http://code.google.com/p/flashreplace/
			var flashIsInstalled = false;
			var flash;
			if(window.ActiveXObject){
				try{
					flash = new ActiveXObject(("ShockwaveFlash.ShockwaveFlash." + version));
					flashIsInstalled = true;
				}
				catch(e){
					// Throws an error if the version isn't available			
				}
			}
			else if(navigator.plugins && navigator.mimeTypes.length > 0){
				flash = navigator.plugins["Shockwave Flash"];
				if(flash){
					var flashVersion = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1");
					if(flashVersion >= version){
						flashIsInstalled = true;
					}
				}
			}
			return flashIsInstalled;
		},
		_validString: function(url) {
			return (url && typeof url === "string"); // Empty strings return false
		},
		_limitValue: function(value, min, max) {
			return (value < min) ? min : ((value > max) ? max : value);
		},
		_urlNotSetError: function(context) {
			this._error( {
				type: $.jPlayer.error.URL_NOT_SET,
				context: context,
				message: $.jPlayer.errorMsg.URL_NOT_SET,
				hint: $.jPlayer.errorHint.URL_NOT_SET
			});
		},
		_flashError: function(error) {
			var errorType;
			if(!this.internal.ready) {
				errorType = "FLASH";
			} else {
				errorType = "FLASH_DISABLED";
			}
			this._error( {
				type: $.jPlayer.error[errorType],
				context: this.internal.flash.swf,
				message: $.jPlayer.errorMsg[errorType] + error.message,
				hint: $.jPlayer.errorHint[errorType]
			});

		},
		_error: function(error) {
			this._trigger($.jPlayer.event.error, error);
			if(this.options.errorAlerts) {
				this._alert("Error!" + (error.message ? "\n\n" + error.message : "") + (error.hint ? "\n\n" + error.hint : "") + "\n\nContext: " + error.context);
			}
		},
		_warning: function(warning) {
			this._trigger($.jPlayer.event.warning, undefined, warning);
			if(this.options.warningAlerts) {
				this._alert("Warning!" + (warning.message ? "\n\n" + warning.message : "") + (warning.hint ? "\n\n" + warning.hint : "") + "\n\nContext: " + warning.context);
			}
		},
		_alert: function(message) {
			alert("jPlayer " + this.version.script + " : id='" + this.internal.self.id +"' : " + message);
		},
		_emulateHtmlBridge: function() {
			var self = this,
			methods = $.jPlayer.emulateMethods;

			// Emulate methods on jPlayer's DOM element.
			$.each( $.jPlayer.emulateMethods.split(/\s+/g), function(i, name) {
				self.internal.domNode[name] = function(arg) {
					self[name](arg);
				};

			});

			// Bubble jPlayer events to its DOM element.
			$.each($.jPlayer.event, function(eventName,eventType) {
				var nativeEvent = true;
				$.each( $.jPlayer.reservedEvent.split(/\s+/g), function(i, name) {
					if(name === eventName) {
						nativeEvent = false;
						return false;
					}
				});
				if(nativeEvent) {
					self.element.bind(eventType + ".jPlayer.jPlayerHtml", function() { // With .jPlayer & .jPlayerHtml namespaces.
						self._emulateHtmlUpdate();
						var domEvent = document.createEvent("Event");
						domEvent.initEvent(eventName, false, true);
						self.internal.domNode.dispatchEvent(domEvent);
					});
				}
				// The error event would require a special case
			});

			// IE9 has a readyState property on all elements. The document should have it, but all (except media) elements inherit it in IE9. This conflicts with Popcorn, which polls the readyState.
		},
		_emulateHtmlUpdate: function() {
			var self = this;

			$.each( $.jPlayer.emulateStatus.split(/\s+/g), function(i, name) {
				self.internal.domNode[name] = self.status[name];
			});
			$.each( $.jPlayer.emulateOptions.split(/\s+/g), function(i, name) {
				self.internal.domNode[name] = self.options[name];
			});
		},
		_destroyHtmlBridge: function() {
			var self = this;

			// Bridge event handlers are also removed by destroy() through .jPlayer namespace.
			this.element.unbind(".jPlayerHtml"); // Remove all event handlers created by the jPlayer bridge. So you can change the emulateHtml option.

			// Remove the methods and properties
			var emulated = $.jPlayer.emulateMethods + " " + $.jPlayer.emulateStatus + " " + $.jPlayer.emulateOptions;
			$.each( emulated.split(/\s+/g), function(i, name) {
				delete self.internal.domNode[name];
			});
		}
	};

	$.jPlayer.error = {
		FLASH: "e_flash",
		FLASH_DISABLED: "e_flash_disabled",
		NO_SOLUTION: "e_no_solution",
		NO_SUPPORT: "e_no_support",
		URL: "e_url",
		URL_NOT_SET: "e_url_not_set",
		VERSION: "e_version"
	};

	$.jPlayer.errorMsg = {
		FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ", // Used in: _flashError()
		FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ", // Used in: _flashError()
		NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.", // Used in: _init()
		NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.", // Used in: setMedia()
		URL: "Media URL could not be loaded.", // Used in: jPlayerFlashEvent() and _addHtmlEventListeners()
		URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.", // Used in: load(), play(), pause(), stop() and playHead()
		VERSION: "jPlayer " + $.jPlayer.prototype.version.script + " needs Jplayer.swf version " + $.jPlayer.prototype.version.needFlash + " but found " // Used in: jPlayerReady()
	};

	$.jPlayer.errorHint = {
		FLASH: "Check your swfPath option and that Jplayer.swf is there.",
		FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.",
		NO_SOLUTION: "Review the jPlayer options: support and supplied.",
		NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
		URL: "Check media URL is valid.",
		URL_NOT_SET: "Use setMedia() to set the media URL.",
		VERSION: "Update jPlayer files."
	};

	$.jPlayer.warning = {
		CSS_SELECTOR_COUNT: "e_css_selector_count",
		CSS_SELECTOR_METHOD: "e_css_selector_method",
		CSS_SELECTOR_STRING: "e_css_selector_string",
		OPTION_KEY: "e_option_key"
	};

	$.jPlayer.warningMsg = {
		CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",
		CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
		CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
		OPTION_KEY: "The option requested in jPlayer('option') is undefined."
	};

	$.jPlayer.warningHint = {
		CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
		CSS_SELECTOR_METHOD: "Check your method name.",
		CSS_SELECTOR_STRING: "Check your css selector is a string.",
		OPTION_KEY: "Check your option name."
	};
})(jQuery);

/**
 * Created by 23rd and Walnut for Codebasehero.com
 * www.23andwalnut.com
 * www.codebasehero.com
 * User: Saleem El-Amin
 * Date: 7/20/11
 * Time: 6:41 AM
 *
 * Version: 1.00
 * License: You are free to use this file in personal and commercial products, however re-distribution 'as-is' without prior consent is prohibited.
 */
(function(a){a.fn.ttwVideoPlayer=function(b){var d,e=this.data("ttwVideoPlayer");if(typeof e!=="undefined"&&e.api[b]){var c=Array.prototype.slice.call(arguments,1);return e.api[b].apply(this,c)}else{if(typeof b==="object"){this.addClass("ttwVideoPlayer");e=new a.ttwVideoPlayer(this,b,arguments[1]);this.data("ttwMediaBox",e);return this}else{a.error(b+" is not a valid method or playlist for ttwVideoPlayer")}}};a.ttwVideoPlayer=function(l,t,g){var s=l,o=this,x,f,h,v,d,i,t,w,p,q,c=false,n={},m,A,y;h={main:".ttw-video-player ",jPlayer:"#jquery_jplayer",jPlayerContainer:".jPlayer-container",jPlayerInterface:".jp-interface",playerPrevious:".jp-interface .jp-previous",playerNext:".jp-interface .jp-next",playlist:".playlist",playlistItems:".playlist-items",playlistItem:".playlist-item",playing:".playing",player:".player",progress:".progress-wrapper",volume:".volume-wrapper",playerControls:".player-controls",playlistButton:".playlist-button",hdButton:".hd-button",heartButton:".heart-button",settingsButton:".settings-button",fullscreenButton:".fullscreen-button",heartCount:".heart-count",scrollViewport:".viewport"};m=["playlist","hd","heart","settings","fullscreen"];x={autoplay:false,autoHidePlaylist:true,autoHidePlaylistDelay:3000,jPlayer:{},buttons:["playlist","hd","heart","settings"],width:"554px",height:"312px",allowHeartIncrement:function(){return true}};this.heartCount=0;this.api={updateHeartCount:function(){w.updateHeartCount()}};f=a.extend(true,{},x,g);p=t;q=0;v=function(){b("Starting");t=new d();w=new i();w.buildInterface();t.init(f.jPlayer);s.bind("mbPlaylistLoaded",function(){w.init()})};d=function(){var H=false;function I(K){n=a(h.main).find(".jPlayer-container");A={swfPath:"jquery-jplayer",supplied:"mp3, m4a, m4v, oga, ogv, wav",cssSelectorAncestor:h.jPlayerInterface,errorAlerts:false,warningAlerts:false,size:{height:f.height,width:f.width,cssClass:"show-video"},sizeFull:{width:"100%",height:"90%",cssClass:"show-video-full"}};y=a.extend(true,{},A,K);n.bind(a.jPlayer.event.ready,function(){b("jPlayer Ready");n.bind(a.jPlayer.event.ended,function(L){G()});n.bind(a.jPlayer.event.play,function(L){n.jPlayer("pauseOthers")});n.bind(a.jPlayer.event.playing,function(L){H=true});n.bind(a.jPlayer.event.pause,function(L){H=false});a(h.playerPrevious).click(function(){F();a(this).blur();return false});a(h.playerNext).click(function(){G();a(this).blur();return false});s.bind("mbInitPlaylistAdvance",function(L,M){if(M!=q){q=M;B(q)}else{if(!n.data("jPlayer").status.srcSet){B(0)}else{J()}}});s.bind("mbInitPlayMedia",function(M,L){C(L)});s.trigger("mbPlaylistLoaded");E(f.autoplay)});n.jPlayer(y)}function E(K){q=0;if(K){B(q)}else{D(q);s.trigger("mbPlaylistInit")}}function D(K){q=K;n.jPlayer("setMedia",p[q])}function B(K){D(K);s.trigger("mbPlaylistAdvance");n.jPlayer("play")}function C(K){n.jPlayer("setMedia",K);s.trigger("mbPlaylistAdvance");n.jPlayer("play")}function G(){var K=(q+1<p.length)?q+1:0;B(K)}function F(){var K=(q-1>=0)?q-1:p.length-1;B(K)}function J(){if(!H){n.jPlayer("play")}else{n.jPlayer("pause")}}return{init:I,playlistInit:E,playlistAdvance:B,playlistNext:G,playlistPrev:F,togglePlay:J,$myJplayer:n}};i=function(){var F,I,B;function J(){F=a(h.player),I=a(h.playlist);D();H()}function G(){var N,T,O,M,S,Q,P,R;N='<div class="ttw-video-player"><div class="jPlayer-container"></div><div class="player jp-interface"><div class="player-controls"><div class="play jp-play button"></div><div class="pause jp-pause button"></div><div class="separator"></div><div class="playlist-button button"></div><div class="separator"></div><div class="hd-button button"></div><div class="separator"></div><div class="progress-wrapper"><div class="progress-bg"><div class="progress jp-seek-bar"><div class="elapsed jp-play-bar"></div></div></div></div><div class="separator"></div><div class="volume-wrapper"><div class="volume jp-volume-bar"><div class="volume-value jp-volume-bar-value"></div></div></div><div class="separator"></div><div class="heart-button button"></div><div class="heart-count"></div><div class="separator"></div><div class="settings-button button"></div><div class="separator"></div><div class="fullscreen-button  button"></div></div><!-- These controls aren\'t used by this plugin, but jPlayer seems to require that they exist --><span class="unused-controls"><span class="previous jp-previous"></span><span class="next jp-next"></span><span class="jp-video-play"></span><span class="jp-stop"></span><span class="jp-mute"></span><span class="jp-unmute"></span><span class="jp-volume-max"></span><span class="jp-current-time"></span><span class="jp-duration"></span><span class="jp-repeat"></span><span class="jp-repeat-off"></span><span class="jp-gui"></span><span class="jp-restore-screen"></span><span class="jp-full-screen"></span></span></div><div class="playlist"><div class="viewport"><ol class="scroll-content playlist-items"></ol></div><div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div><div class="clear"></div></div></div>';T=a(N).css({display:"none",opacity:0}).appendTo(s).slideDown("slow",function(){T.width(f.width).find(h.jPlayerInterface+", "+h.jPlayerContainer).width(f.width);T.height(j(f.height)).find(h.jPlayerContainer).height(j(f.height)-34);T.animate({opacity:1},200,function(){s.trigger("mbInterfaceBuilt");for(var U=0;U<m.length;U++){if(a.inArray(m[U],f.buttons)==-1){T.find(h[m[U]+"Button"]).css("display","none").next(".separator").css("display","none")}}if(a.inArray("fullscreen",f.buttons)!=-1){R="fullscreen"}else{if(a.inArray("settings",f.buttons)!=-1){R="settings"}else{if(a.inArray("heart",f.buttons)!=-1){R="heart"}else{R="volume"}}}if(R!="volume"){T.find(h[R+"Button"]).next(".separator").css("display","none")}else{T.find(h.volume).next(".separator").css("display","none")}M=f.width.substr(0,f.width.length-2);S=((f.buttons.length+1)*34);Q=T.find(h.volume).outerWidth()+2;P=20;O=M-S-Q-P;T.find(h.progress).width(O);if(a.inArray("heart",f.buttons)!=-1){T.find(h.heartCount).css({left:T.find(h.heartButton).position()["left"]-10})}})})}function C(M){if(I.hasClass("showing")){M.removeClass("pressed");I.stop().removeClass("showing").animate({opacity:0},200,function(){a(this).css("display","none")})}else{M.addClass("pressed");I.stop().css({opactiy:0,display:"block"}).addClass("showing").animate({opacity:1},200);if(f.autoHidePlaylist){L(M)}}}function H(){var M=s.find(h.playerControls);M.find(h.playlistButton).bind("click",function(){clearTimeout(B);C(a(this));u(f.playlistButtonCallback)});M.find(h.hdButton).bind("click",function(){if(f.hdPlaylist&&f.hdPlaylist[q]){s.trigger("mbInitPlayMedia",[f.hdPlaylist[q]])}u(f.hdButtonCallback)});M.find(h.heartButton).bind("click",function(N){if(u(f.allowHeartIncrement,N)===true){o.heartCount++;K();u(f.heartButtonCallback,o.heartCount)}});M.find(h.settingsButton).bind("click",function(N){u(f.settingsButtonCallback)});M.find(h.fullscreenButton).bind("click",function(N){u(f.fullscreenCallback)})}function D(){var M,P,O;M={listItem:'<li class="playlist-item"></li>'};O=s.find(h.playlistItems);for(var N=0;N<p.length;N++){var Q=a(M.listItem);Q.data("index",N);if(!e(p[N].poster)){a('<img src="'+p[N].poster+'" alt="video poster" />').css({opacity:0}).appendTo(Q).imagesLoaded(function(){a(this).animate({opacity:1})})}else{Q.html(k(N))}O.append(Q)}s.find(h.playlistItem).click(function(){s.trigger("mbInitPlaylistAdvance",[a(this).data("index")])});O.parents(h.playlist).height(j(f.height)-34).find(h.scrollViewport).height(j(f.height)-34);P=O.parents(h.playlist).tinyscrollbar({sizethumb:114}).css("display","none");if(f.autoHidePlaylist){P.mouseleave(function(){L(s.find(h.playlistButton))});P.mouseenter(function(){clearTimeout(B)})}}function L(M){B=setTimeout(function(){C(M)},f.autoHidePlaylistDelay)}function E(M){return !e(p[M].duration)?p[M].duration:"-"}function K(){if(o.heartCount>0){var M=s.find(h.heartCount);if(o.heartCount==1){M.css({opacity:0,display:"block"}).addClass("showing").animate({opacity:1})}M.html(o.heartCount)}}return{buildInterface:G,buildPlaylist:D,updateHeartCount:K,init:J}};function j(B){return parseInt(B.substr(0,B.length-2))}function b(B){if(f.debug&&window.console){console.log("MEDIA PLAYER: "+B)}}function k(C){if(!e(p[C].title)){return p[C].title}else{var B="",E=y.supplied.split(",");for(var D=0;D<E.length;D++){E[D]=a.trim(E[D]);if(!e(p[C][E[D]])){B=z(p[C][E[D]]);break}}return B}}function z(B){B=B.split("/");return B[B.length-1]}function r(B){return B.substr(1)}function u(C){var B=Array.prototype.slice.call(arguments,1);if(a.isFunction(C)){return C.apply(this,B)}else{return false}}function e(B){return typeof B=="undefined"}v()}})(jQuery);
/*!
 * Tiny Scrollbar 1.65
 * http://www.baijs.nl/tinyscrollbar/
 *
 * Copyright 2010, Maarten Baijs
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/gpl-2.0.php
 *
 * Date: 10 / 05 / 2011
 * Depends on library: jQuery
 *
 */
(function(a){a.tiny=a.tiny||{};a.tiny.scrollbar={options:{axis:"y",wheel:40,scroll:true,size:"auto",sizethumb:"auto"}};a.fn.tinyscrollbar=function(c){var c=a.extend({},a.tiny.scrollbar.options,c);this.each(function(){a(this).data("tsb",new b(a(this),c))});return this};a.fn.tinyscrollbar_update=function(c){return a(this).data("tsb").update(c)};function b(p,f){var j=this;var s=p;var i={obj:a(".viewport",p)};var g={obj:a(".scroll-content",p)};var d={obj:a(".scrollbar",p)};var l={obj:a(".track",d.obj)};var o={obj:a(".thumb",d.obj)};var k=f.axis=="x",m=k?"left":"top",u=k?"Width":"Height";var q,x={start:0,now:0},n={};function c(){j.update();r();return j}this.update=function(y){i[f.axis]=i.obj[0]["offset"+u];g[f.axis]=g.obj[0]["scroll"+u];g.ratio=i[f.axis]/g[f.axis];d.obj.toggleClass("disable",g.ratio>=1);l[f.axis]=f.size=="auto"?i[f.axis]:f.size;o[f.axis]=Math.min(l[f.axis],Math.max(0,(f.sizethumb=="auto"?(l[f.axis]*g.ratio):f.sizethumb)));d.ratio=f.sizethumb=="auto"?(g[f.axis]/l[f.axis]):(g[f.axis]-i[f.axis])/(l[f.axis]-o[f.axis]);q=(y=="relative"&&g.ratio<=1)?Math.min((g[f.axis]-i[f.axis]),Math.max(0,q)):0;q=(y=="bottom"&&g.ratio<=1)?(g[f.axis]-i[f.axis]):isNaN(parseInt(y))?q:parseInt(y);v()};function v(){o.obj.css(m,q/d.ratio);g.obj.css(m,-q);n.start=o.obj.offset()[m];var y=u.toLowerCase();d.obj.css(y,l[f.axis]);l.obj.css(y,l[f.axis]);o.obj.css(y,o[f.axis])}function r(){o.obj.bind("mousedown",h);o.obj[0].ontouchstart=function(y){y.preventDefault();o.obj.unbind("mousedown");h(y.touches[0]);return false};l.obj.bind("mouseup",t);if(f.scroll&&this.addEventListener){s[0].addEventListener("DOMMouseScroll",w,false);s[0].addEventListener("mousewheel",w,false)}else{if(f.scroll){s[0].onmousewheel=w}}}function h(z){n.start=k?z.pageX:z.pageY;var y=parseInt(o.obj.css(m));x.start=y=="auto"?0:y;a(document).bind("mousemove",t);document.ontouchmove=function(A){a(document).unbind("mousemove");t(A.touches[0])};a(document).bind("mouseup",e);o.obj.bind("mouseup",e);o.obj[0].ontouchend=document.ontouchend=function(A){a(document).unbind("mouseup");o.obj.unbind("mouseup");e(A.touches[0])};return false}function w(z){if(!(g.ratio>=1)){z=a.event.fix(z||window.event);var y=z.wheelDelta?z.wheelDelta/120:-z.detail/3;q-=y*f.wheel;q=Math.min((g[f.axis]-i[f.axis]),Math.max(0,q));o.obj.css(m,q/d.ratio);g.obj.css(m,-q);z.preventDefault()}}function e(y){a(document).unbind("mousemove",t);a(document).unbind("mouseup",e);o.obj.unbind("mouseup",e);document.ontouchmove=o.obj[0].ontouchend=document.ontouchend=null;return false}function t(y){if(!(g.ratio>=1)){x.now=Math.min((l[f.axis]-o[f.axis]),Math.max(0,(x.start+((k?y.pageX:y.pageY)-n.start))));q=x.now*d.ratio;g.obj.css(m,-q);o.obj.css(m,x.now)}return false}return c()}})(jQuery);(function(a){a.fn.imagesLoaded=function(d){var c=this.filter("img"),b=c.length;c.bind("load",function(){if(--b<=0){d.call(c,this)}}).each(function(){if(this.complete||this.complete===undefined){var e=this.src;this.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";this.src=e}});return this}})(jQuery);
 /*
 * TipTip
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 *
 * Version 1.3   -   Updated: Mar. 23, 2010
 *
 * This Plug-In will create a custom tooltip to replace the default
 * browser tooltip. It is extremely lightweight and very smart in
 * that it detects the edges of the browser window and will make sure
 * the tooltip stays within the current window size. As a result the
 * tooltip will adjust itself to be displayed above, below, to the left 
 * or to the right depending on what is necessary to stay within the
 * browser window. It is completely customizable as well via CSS.
 *
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');$("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()})}else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}function active_tiptip(){opts.enter.call(this);tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);
/********* Checkbox **********/


var checkboxHeight = "25";
var radioHeight = "25";
var selectWidth = "190";


/* No need to change anything after this */


document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; width: ' + selectWidth + 'px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>');

var Custom = {
	init: function() {
		var inputs = document.getElementsByTagName("input"), span = Array(), textnode, option, active;
		for(a = 0; a < inputs.length; a++) {
			if((inputs[a].type == "checkbox" || inputs[a].type == "radio") && inputs[a].className == "styled") {
				span[a] = document.createElement("span");
				span[a].className = inputs[a].type;

				if(inputs[a].checked == true) {
					if(inputs[a].type == "checkbox") {
						position = "0 -" + (checkboxHeight*2) + "px";
						span[a].style.backgroundPosition = position;
					} else {
						position = "0 -" + (radioHeight*2) + "px";
						span[a].style.backgroundPosition = position;
					}
				}
				inputs[a].parentNode.insertBefore(span[a], inputs[a]);
				inputs[a].onchange = Custom.clear;
				if(!inputs[a].getAttribute("disabled")) {
					span[a].onmousedown = Custom.pushed;
					span[a].onmouseup = Custom.check;
				} else {
					span[a].className = span[a].className += " disabled";
				}
			}
		}
		inputs = document.getElementsByTagName("select");
		for(a = 0; a < inputs.length; a++) {
			if(inputs[a].className == "styled") {
				option = inputs[a].getElementsByTagName("option");
				active = option[0].childNodes[0].nodeValue;
				textnode = document.createTextNode(active);
				for(b = 0; b < option.length; b++) {
					if(option[b].selected == true) {
						textnode = document.createTextNode(option[b].childNodes[0].nodeValue);
					}
				}
				span[a] = document.createElement("span");
				span[a].className = "select";
				span[a].id = "select" + inputs[a].name;
				span[a].appendChild(textnode);
				inputs[a].parentNode.insertBefore(span[a], inputs[a]);
				if(!inputs[a].getAttribute("disabled")) {
					inputs[a].onchange = Custom.choose;
				} else {
					inputs[a].previousSibling.className = inputs[a].previousSibling.className += " disabled";
				}
			}
		}
		document.onmouseup = Custom.clear;
	},
	pushed: function() {
		element = this.nextSibling;
		if(element.checked == true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 -" + checkboxHeight*3 + "px";
		} else if(element.checked == true && element.type == "radio") {
			this.style.backgroundPosition = "0 -" + radioHeight*3 + "px";
		} else if(element.checked != true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 -" + checkboxHeight + "px";
		} else {
			this.style.backgroundPosition = "0 -" + radioHeight + "px";
		}
	},
	check: function() {
		element = this.nextSibling;
		if(element.checked == true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 0";
			element.checked = false;
		} else {
			if(element.type == "checkbox") {
				this.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
			} else {
				this.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
				group = this.nextSibling.name;
				inputs = document.getElementsByTagName("input");
				for(a = 0; a < inputs.length; a++) {
					if(inputs[a].name == group && inputs[a] != this.nextSibling) {
						inputs[a].previousSibling.style.backgroundPosition = "0 0";
					}
				}
			}
			element.checked = true;
		}
	},
	clear: function() {
		inputs = document.getElementsByTagName("input");
		for(var b = 0; b < inputs.length; b++) {
			if(inputs[b].type == "checkbox" && inputs[b].checked == true && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
			} else if(inputs[b].type == "checkbox" && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 0";
			} else if(inputs[b].type == "radio" && inputs[b].checked == true && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
			} else if(inputs[b].type == "radio" && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 0";
			}
		}
	},
	choose: function() {
		option = this.getElementsByTagName("option");
		for(d = 0; d < option.length; d++) {
			if(option[d].selected == true) {
				document.getElementById("select" + this.name).childNodes[0].nodeValue = option[d].childNodes[0].nodeValue;
			}
		}
	}
}
window.onload = Custom.init;
	// Autotab
/**
 * Autotab - jQuery plugin 1.1b
 * http://www.lousyllama.com/sandbox/jquery-autotab
 * 
 * Copyright (c) 2008 Matthew Miller
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 * 
 * Revised: 2008-09-10 16:55:08
 */

(function($) {
// Look for an element based on ID or name
var check_element = function(name) {
	var obj = null;
	var check_id = $('#' + name);
	var check_name = $('input[name=' + name + ']');

	if(check_id.length)
		obj = check_id;
	else if(check_name != undefined)
		obj = check_name;

	return obj;
};

/**
 * autotab_magic automatically establishes autotabbing with the
 * next and previous elements as provided by :input.
 * 
 * autotab_magic should called after applying filters, if used.
 * If any filters are applied after calling autotab_magic, then
 * Autotab may not protect against brute force typing.
 * 
 * @name	autotab_magic
 * @param	focus	Applies focus on the specified element
 * @example	$(':input').autotab_magic();
 */
$.fn.autotab_magic = function(focus) {
	for(var i = 0; i < this.length; i++)
	{
		var n = i + 1;
		var p = i - 1;

		if(i > 0 && n < this.length)
			$(this[i]).autotab({ target: $(this[n]), previous: $(this[p]) });
		else if(i > 0)
			$(this[i]).autotab({ previous: $(this[p]) });
		else
			$(this[i]).autotab({ target: $(this[n]) });

		// Set the focus on the specified element
		if(focus != null && (isNaN(focus) && focus == $(this[i]).attr('id')) || (!isNaN(focus) && focus == i))
			$(this[i]).focus();
	}
	return this;
};

/**
 * This will take any of the text that is typed and
 * format it according to the options specified.
 * 
 * Option values:
 *	format		text|number|alphanumeric|all|custom
 *	- Text			Allows all characters except numbers
 *	- Number		Allows only numbers
 *	- Alphanumeric	Allows only letters and numbers
 *	- All			Allows any and all characters
 *	- Custom		Allows developer to provide their own filter
 *
 *	uppercase	true|false
 *	- Converts a string to UPPERCASE
 * 
 *	lowercase	true|false
 *	- Converts a string to lowecase
 * 
 *	nospace		true|false
 *	- Remove spaces in the user input
 * 
 *	pattern		null|(regular expression)
 *	- Custom regular expression for the filter
 * 
 * @name	autotab_filter
 * @param	options		Can be a string, function or a list of options. If a string or
 *						function is passed, it will be assumed to be a format option.
 * @example	$('#number1, #number2, #number3').autotab_filter('number');
 * @example	$('#product_key').autotab_filter({ format: 'alphanumeric', nospace: true });
 * @example	$('#unique_id').autotab_filter({ format: 'custom', pattern: '[^0-9\.]' });
 */
$.fn.autotab_filter = function(options) {
	var defaults = {
		format: 'all',
		uppercase: false,
		lowercase: false,
		nospace: false,
		pattern: null
	};

	if(typeof options == 'string' || typeof options == 'function')
		defaults.format = options;
	else
		$.extend(defaults, options);

	for(var i = 0; i < this.length; i++)
	{
		$(this[i]).bind('keyup', function(e) {
			var val = this.value;

			switch(defaults.format)
			{
				case 'text':
					var pattern = new RegExp('[0-9]+', 'g');
					val = val.replace(pattern, '');
					break;

				case 'alpha':
					var pattern = new RegExp('[^a-zA-Z]+', 'g');
					val = val.replace(pattern, '');
					break;

				case 'number':
				case 'numeric':
					var pattern = new RegExp('[^0-9]+', 'g');
					val = val.replace(pattern, '');
					break;

				case 'alphanumeric':
					var pattern = new RegExp('[^0-9a-zA-Z]+', 'g');
					val = val.replace(pattern, '');
					break;

				case 'custom':
					var pattern = new RegExp(defaults.pattern, 'g');
					val = val.replace(pattern, '');
					break;

				case 'all':
				default:
					if(typeof defaults.format == 'function')
						var val = defaults.format(val);

					break;
			}

			if(defaults.nospace)
			{
				var pattern = new RegExp('[ ]+', 'g');
				val = val.replace(pattern, '');
			}

			if(defaults.uppercase)
				val = val.toUpperCase();

			if(defaults.lowercase)
				val = val.toLowerCase();

			if(val != this.value)
				this.value = val;
		});
	}
};

/**
 * Provides the autotabbing mechanism for the supplied element and passes
 * any formatting options to autotab_filter.
 * 
 * Refer to autotab_filter's description for a detailed explanation of
 * the options available.
 * 
 * @name	autotab
 * @param	options
 * @example	$('#phone').autotab({ format: 'number' });
 * @example	$('#username').autotab({ format: 'alphanumeric', target: 'password' });
 * @example	$('#password').autotab({ previous: 'username', target: 'confirm' });
 */
$.fn.autotab = function(options) {
	var defaults = {
		format: 'all',
		maxlength: 2147483647,
		uppercase: false,
		lowercase: false,
		nospace: false,
		target: null,
		previous: null,
		pattern: null
	};

	$.extend(defaults, options);

	// Sets targets to element based on the name or ID
	// passed if they are not currently objects
	if(typeof defaults.target == 'string')
		defaults.target = check_element(defaults.target);

	if(typeof defaults.previous == 'string')
		defaults.previous = check_element(defaults.previous);

	var maxlength = $(this).attr('maxlength');

	// defaults.maxlength has not changed and maxlength was specified
	if(defaults.maxlength == 2147483647 && maxlength != 2147483647)
		defaults.maxlength = maxlength;
	// defaults.maxlength overrides maxlength
	else if(defaults.maxlength > 0)
		$(this).attr('maxlength', defaults.maxlength)
	// defaults.maxlength and maxlength have not been specified
	// A target cannot be used since there is no defined maxlength
	else
		defaults.target = null;

	if(defaults.format != 'all')
		$(this).autotab_filter(defaults);

	// Go to the previous element when backspace
	// is pressed in an empty input field
	return $(this).bind('keydown', function(e) {
		if(e.which == 8 && this.value.length == 0 && defaults.previous)
			defaults.previous.focus().val(defaults.previous.val());
	}).bind('keyup', function(e) {
		/**
		 * Do not auto tab when the following keys are pressed
		 * 8:	Backspace
		 * 9:	Tab
		 * 16:	Shift
		 * 17:	Ctrl
		 * 18:	Alt
		 * 19:	Pause Break
		 * 20:	Caps Lock
		 * 27:	Esc
		 * 33:	Page Up
		 * 34:	Page Down
		 * 35:	End
		 * 36:	Home
		 * 37:	Left Arrow
		 * 38:	Up Arrow
		 * 39:	Right Arrow
		 * 40:	Down Arrow
		 * 45:	Insert
		 * 46:	Delete
		 * 144:	Num Lock
		 * 145:	Scroll Lock
		 */
		var keys = [8, 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];

		if(e.which != 8)
		{
			var val = $(this).val();

			if($.inArray(e.which, keys) == -1 && val.length == defaults.maxlength && defaults.target)
				defaults.target.focus();
		}
	});
};

})(jQuery);


// Chosen, a Select Box Enhancer for jQuery and Protoype
// by Patrick Filler for Harvest, http://getharvest.com
// 
// Version 0.9.5
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

// MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
// This file is generated by `cake build`, do not edit it by hand.
(function(){var a;a=function(){function a(){this.options_index=0,this.parsed=[]}return a.prototype.add_node=function(a){return a.nodeName==="OPTGROUP"?this.add_group(a):this.add_option(a)},a.prototype.add_group=function(a){var b,c,d,e,f,g;b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:a.label,children:0,disabled:a.disabled}),f=a.childNodes,g=[];for(d=0,e=f.length;d<e;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},a.prototype.add_option=function(a,b,c){if(a.nodeName==="OPTION")return a.text!==""?(b!=null&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},a}(),a.select_to_array=function(b){var c,d,e,f,g;d=new a,g=b.childNodes;for(e=0,f=g.length;e<f;e++)c=g[e],d.add_node(c);return d.parsed},this.SelectParser=a}).call(this),function(){var a,b,c=function(a,b){return function(){return a.apply(b,arguments)}};b=this,a=function(){function a(a,b){this.form_field=a,this.options=b!=null?b:{},this.set_default_values(),this.is_multiple=this.form_field.multiple,this.default_text_default=this.is_multiple?"Select Some Options":"Select an Option",this.setup(),this.set_up_html(),this.register_observers(),this.finish_setup()}return a.prototype.set_default_values=function(){return this.click_test_action=c(function(a){return this.test_active_click(a)},this),this.activate_action=c(function(a){return this.activate_field(a)},this),this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.result_single_selected=null,this.allow_single_deselect=this.options.allow_single_deselect!=null&&this.form_field.options[0]!=null&&this.form_field.options[0].text===""?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.choices=0,this.results_none_found=this.options.no_results_text||"No results match"},a.prototype.mouse_enter=function(){return this.mouse_on_container=!0},a.prototype.mouse_leave=function(){return this.mouse_on_container=!1},a.prototype.input_focus=function(a){if(!this.active_field)return setTimeout(c(function(){return this.container_mousedown()},this),50)},a.prototype.input_blur=function(a){if(!this.mouse_on_container)return this.active_field=!1,setTimeout(c(function(){return this.blur_test()},this),100)},a.prototype.result_add_option=function(a){var b,c;return a.disabled?"":(a.dom_id=this.container_id+"_o_"+a.array_index,b=a.selected&&this.is_multiple?[]:["active-result"],a.selected&&b.push("result-selected"),a.group_array_index!=null&&b.push("group-option"),a.classes!==""&&b.push(a.classes),c=a.style.cssText!==""?' style="'+a.style+'"':"",'<li id="'+a.dom_id+'" class="'+b.join(" ")+'"'+c+">"+a.html+"</li>")},a.prototype.results_update_field=function(){return this.result_clear_highlight(),this.result_single_selected=null,this.results_build()},a.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},a.prototype.results_search=function(a){return this.results_showing?this.winnow_results():this.results_show()},a.prototype.keyup_checker=function(a){var b,c;b=(c=a.which)!=null?c:a.keyCode,this.search_field_scale();switch(b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:a.preventDefault();if(this.results_showing)return this.result_select(a);break;case 27:if(this.results_showing)return this.results_hide();break;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},a.prototype.generate_field_id=function(){var a;return a=this.generate_random_id(),this.form_field.id=a,a},a.prototype.generate_random_char=function(){var a,b,c;return a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ",c=Math.floor(Math.random()*a.length),b=a.substring(c,c+1)},a}(),b.AbstractChosen=a}.call(this),function(){var a,b,c,d,e=Object.prototype.hasOwnProperty,f=function(a,b){function d(){this.constructor=a}for(var c in b)e.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},g=function(a,b){return function(){return a.apply(b,arguments)}};d=this,a=jQuery,a.fn.extend({chosen:function(c){return!a.browser.msie||a.browser.version!=="6.0"&&a.browser.version!=="7.0"?a(this).each(function(d){if(!a(this).hasClass("chzn-done"))return new b(this,c)}):this}}),b=function(){function b(){b.__super__.constructor.apply(this,arguments)}return f(b,AbstractChosen),b.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.is_rtl=this.form_field_jq.hasClass("chzn-rtl")},b.prototype.finish_setup=function(){return this.form_field_jq.addClass("chzn-done")},b.prototype.set_up_html=function(){var b,d,e,f;return this.container_id=this.form_field.id.length?this.form_field.id.replace(/(:|\.)/g,"_"):this.generate_field_id(),this.container_id+="_chzn",this.f_width=this.form_field_jq.outerWidth(),this.default_text=this.form_field_jq.data("placeholder")?this.form_field_jq.data("placeholder"):this.default_text_default,b=a("<div />",{id:this.container_id,"class":"chzn-container"+(this.is_rtl?" chzn-rtl":""),style:"width: "+this.f_width+"px;"}),this.is_multiple?b.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>'):b.html('<a href="javascript:void(0)" class="chzn-single"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'),this.form_field_jq.hide().after(b),this.container=a("#"+this.container_id),this.container.addClass("chzn-container-"+(this.is_multiple?"multi":"single")),this.dropdown=this.container.find("div.chzn-drop").first(),d=this.container.height(),e=this.f_width-c(this.dropdown),this.dropdown.css({width:e+"px",top:d+"px"}),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chzn-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chzn-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chzn-search").first(),this.selected_item=this.container.find(".chzn-single").first(),f=e-c(this.search_container)-c(this.search_field),this.search_field.css({width:f+"px"})),this.results_build(),this.set_tab_index(),this.form_field_jq.trigger("liszt:ready",{chosen:this})},b.prototype.register_observers=function(){this.container.mousedown(g(function(a){return this.container_mousedown(a)},this)),this.container.mouseup(g(function(a){return this.container_mouseup(a)},this)),this.container.mouseenter(g(function(a){return this.mouse_enter(a)},this)),this.container.mouseleave(g(function(a){return this.mouse_leave(a)},this)),this.search_results.mouseup(g(function(a){return this.search_results_mouseup(a)},this)),this.search_results.mouseover(g(function(a){return this.search_results_mouseover(a)},this)),this.search_results.mouseout(g(function(a){return this.search_results_mouseout(a)},this)),this.form_field_jq.bind("liszt:updated",g(function(a){return this.results_update_field(a)},this)),this.search_field.blur(g(function(a){return this.input_blur(a)},this)),this.search_field.keyup(g(function(a){return this.keyup_checker(a)},this)),this.search_field.keydown(g(function(a){return this.keydown_checker(a)},this));if(this.is_multiple)return this.search_choices.click(g(function(a){return this.choices_click(a)},this)),this.search_field.focus(g(function(a){return this.input_focus(a)},this))},b.prototype.search_field_disabled=function(){this.is_disabled=this.form_field_jq[0].disabled;if(this.is_disabled)return this.container.addClass("chzn-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus",this.activate_action),this.close_field();this.container.removeClass("chzn-disabled"),this.search_field[0].disabled=!1;if(!this.is_multiple)return this.selected_item.bind("focus",this.activate_action)},b.prototype.container_mousedown=function(b){var c;if(!this.is_disabled)return c=b!=null?a(b.target).hasClass("search-choice-close"):!1,b&&b.type==="mousedown"&&b.stopPropagation(),!this.pending_destroy_click&&!c?(this.active_field?!this.is_multiple&&b&&(a(b.target)[0]===this.selected_item[0]||a(b.target).parents("a.chzn-single").length)&&(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(document).click(this.click_test_action),this.results_show()),this.activate_field()):this.pending_destroy_click=!1},b.prototype.container_mouseup=function(a){if(a.target.nodeName==="ABBR")return this.results_reset(a)},b.prototype.blur_test=function(a){if(!this.active_field&&this.container.hasClass("chzn-container-active"))return this.close_field()},b.prototype.close_field=function(){return a(document).unbind("click",this.click_test_action),this.is_multiple||(this.selected_item.attr("tabindex",this.search_field.attr("tabindex")),this.search_field.attr("tabindex",-1)),this.active_field=!1,this.results_hide(),this.container.removeClass("chzn-container-active"),this.winnow_results_clear(),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},b.prototype.activate_field=function(){return!this.is_multiple&&!this.active_field&&(this.search_field.attr("tabindex",this.selected_item.attr("tabindex")),this.selected_item.attr("tabindex",-1)),this.container.addClass("chzn-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},b.prototype.test_active_click=function(b){return a(b.target).parents("#"+this.container_id).length?this.active_field=!0:this.close_field()},b.prototype.results_build=function(){var a,b,c,e,f;this.parsing=!0,this.results_data=d.SelectParser.select_to_array(this.form_field),this.is_multiple&&this.choices>0?(this.search_choices.find("li.search-choice").remove(),this.choices=0):this.is_multiple||(this.selected_item.find("span").text(this.default_text),this.form_field.options.length>this.disable_search_threshold?this.container.removeClass("chzn-container-single-nosearch"):this.container.addClass("chzn-container-single-nosearch")),a="",f=this.results_data;for(c=0,e=f.length;c<e;c++)b=f[c],b.group?a+=this.result_add_group(b):b.empty||(a+=this.result_add_option(b),b.selected&&this.is_multiple?this.choice_build(b):b.selected&&!this.is_multiple&&(this.selected_item.find("span").text(b.text),this.allow_single_deselect&&this.single_deselect_control_build()));return this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.search_results.html(a),this.parsing=!1},b.prototype.result_add_group=function(b){return b.disabled?"":(b.dom_id=this.container_id+"_g_"+b.array_index,'<li id="'+b.dom_id+'" class="group-result">'+a("<div />").text(b.label).html()+"</li>")},b.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight();if(b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(c<f)return this.search_results.scrollTop(c)}},b.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},b.prototype.results_show=function(){var a;return this.is_multiple||(this.selected_item.addClass("chzn-single-with-drop"),this.result_single_selected&&this.result_do_highlight(this.result_single_selected)),a=this.is_multiple?this.container.height():this.container.height()-1,this.dropdown.css({top:a+"px",left:0}),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results()},b.prototype.results_hide=function(){return this.is_multiple||this.selected_item.removeClass("chzn-single-with-drop"),this.result_clear_highlight(),this.dropdown.css({left:"-9000px"}),this.results_showing=!1},b.prototype.set_tab_index=function(a){var b;if(this.form_field_jq.attr("tabindex"))return b=this.form_field_jq.attr("tabindex"),this.form_field_jq.attr("tabindex",-1),this.is_multiple?this.search_field.attr("tabindex",b):(this.selected_item.attr("tabindex",b),this.search_field.attr("tabindex",-1))},b.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},b.prototype.search_results_mouseup=function(b){var c;c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first();if(c.length)return this.result_highlight=c,this.result_select(b)},b.prototype.search_results_mouseover=function(b){var c;c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first();if(c)return this.result_do_highlight(c)},b.prototype.search_results_mouseout=function(b){if(a(b.target).hasClass("active-result"))return this.result_clear_highlight()},b.prototype.choices_click=function(b){b.preventDefault();if(this.active_field&&!a(b.target).hasClass("search-choice")&&!this.results_showing)return this.results_show()},b.prototype.choice_build=function(b){var c,d;return c=this.container_id+"_c_"+b.array_index,this.choices+=1,this.search_container.before('<li class="search-choice" id="'+c+'"><span>'+b.html+'</span><a href="javascript:void(0)" class="search-choice-close" rel="'+b.array_index+'"></a></li>'),d=a("#"+c).find("a").first(),d.click(g(function(a){return this.choice_destroy_link_click(a)},this))},b.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),this.is_disabled?b.stopPropagation:(this.pending_destroy_click=!0,this.choice_destroy(a(b.target)))},b.prototype.choice_destroy=function(a){return this.choices-=1,this.show_search_field_default(),this.is_multiple&&this.choices>0&&this.search_field.val().length<1&&this.results_hide(),this.result_deselect(a.attr("rel")),a.parents("li").first().remove()},b.prototype.results_reset=function(b){this.form_field.options[0].selected=!0,this.selected_item.find("span").text(this.default_text),this.show_search_field_default(),a(b.target).remove(),this.form_field_jq.trigger("change");if(this.active_field)return this.results_hide()},b.prototype.result_select=function(a){var b,c,d,e;if(this.result_highlight)return b=this.result_highlight,c=b.attr("id"),this.result_clear_highlight(),this.is_multiple?this.result_deactivate(b):(this.search_results.find(".result-selected").removeClass("result-selected"),this.result_single_selected=b),b.addClass("result-selected"),e=c.substr(c.lastIndexOf("_")+1),d=this.results_data[e],d.selected=!0,this.form_field.options[d.options_index].selected=!0,this.is_multiple?this.choice_build(d):(this.selected_item.find("span").first().text(d.text),this.allow_single_deselect&&this.single_deselect_control_build()),(!a.metaKey||!this.is_multiple)&&this.results_hide(),this.search_field.val(""),this.form_field_jq.trigger("change"),this.search_field_scale()},b.prototype.result_activate=function(a){return a.addClass("active-result")},b.prototype.result_deactivate=function(a){return a.removeClass("active-result")},b.prototype.result_deselect=function(b){var c,d;return d=this.results_data[b],d.selected=!1,this.form_field.options[d.options_index].selected=!1,c=a("#"+this.container_id+"_o_"+b),c.removeClass("result-selected").addClass("active-result").show(),this.result_clear_highlight(),this.winnow_results(),this.form_field_jq.trigger("change"),this.search_field_scale()},b.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect&&this.selected_item.find("abbr").length<1)return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')},b.prototype.winnow_results=function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;this.no_results_clear(),i=0,j=this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html(),f=new RegExp("^"+j.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),m=new RegExp(j.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),r=this.results_data;for(n=0,p=r.length;n<p;n++){c=r[n];if(!c.disabled&&!c.empty)if(c.group)a("#"+c.dom_id).css("display","none");else if(!this.is_multiple||!c.selected){b=!1,h=c.dom_id,g=a("#"+h);if(f.test(c.html))b=!0,i+=1;else if(c.html.indexOf(" ")>=0||c.html.indexOf("[")===0){e=c.html.replace(/\[|\]/g,"").split(" ");if(e.length)for(o=0,q=e.length;o<q;o++)d=e[o],f.test(d)&&(b=!0,i+=1)}b?(j.length?(k=c.html.search(m),l=c.html.substr(0,k+j.length)+"</em>"+c.html.substr(k+j.length),l=l.substr(0,k)+"<em>"+l.substr(k)):l=c.html,g.html(l),this.result_activate(g),c.group_array_index!=null&&a("#"+this.results_data[c.group_array_index].dom_id).css("display","list-item")):(this.result_highlight&&h===this.result_highlight.attr("id")&&this.result_clear_highlight(),this.result_deactivate(g))}}return i<1&&j.length?this.no_results(j):this.winnow_results_set_highlight()},b.prototype.winnow_results_clear=function(){var b,c,d,e,f;this.search_field.val(""),c=this.search_results.find("li"),f=[];for(d=0,e=c.length;d<e;d++)b=c[d],b=a(b),f.push(b.hasClass("group-result")?b.css("display","auto"):!this.is_multiple||!b.hasClass("result-selected")?this.result_activate(b):void 0);return f},b.prototype.winnow_results_set_highlight=function(){var a,b;if(!this.result_highlight){b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first();if(a!=null)return this.result_do_highlight(a)}},b.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c)},b.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},b.prototype.keydown_arrow=function(){var b,c;this.result_highlight?this.results_showing&&(c=this.result_highlight.nextAll("li.active-result").first(),c&&this.result_do_highlight(c)):(b=this.search_results.find("li.active-result").first(),b&&this.result_do_highlight(a(b)));if(!this.results_showing)return this.results_show()},b.prototype.keyup_arrow=function(){var a;if(!this.results_showing&&!this.is_multiple)return this.results_show();if(this.result_highlight)return a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices>0&&this.results_hide(),this.result_clear_highlight())},b.prototype.keydown_backstroke=function(){return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(this.pending_backstroke=this.search_container.siblings("li.search-choice").last(),this.pending_backstroke.addClass("search-choice-focus"))},b.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},b.prototype.keydown_checker=function(a){var b,c;b=(c=a.which)!=null?c:a.keyCode,this.search_field_scale(),b!==8&&this.pending_backstroke&&this.clear_backstroke();switch(b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:this.keydown_arrow()}},b.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"];for(i=0,j=g.length;i<j;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return c=a("<div />",{style:f}),c.text(this.search_field.val()),a("body").append(c),h=c.width()+25,c.remove(),h>this.f_width-10&&(h=this.f_width-10),this.search_field.css({width:h+"px"}),b=this.container.height(),this.dropdown.css({top:b+"px"})}},b.prototype.generate_random_id=function(){var b;b="sel"+this.generate_random_char()+this.generate_random_char()+this.generate_random_char();while(a("#"+b).length>0)b+=this.generate_random_char();return b},b}(),c=function(a){var b;return b=a.outerWidth()-a.width()},d.get_side_border_padding=c}.call(this)
/*
 * jQuery autoResize (textarea auto-resizer)
 * @copyright James Padolsey http://james.padolsey.com
 * @version 1.04
 */

(function(a){a.fn.autoResize=function(j){var b=a.extend({onResize:function(){},animate:true,animateDuration:150,animateCallback:function(){},extraSpace:20,limit:1000},j);this.filter('textarea').each(function(){var c=a(this).css({resize:'none','overflow-y':'hidden'}),k=c.height(),f=(function(){var l=['height','width','lineHeight','textDecoration','letterSpacing'],h={};a.each(l,function(d,e){h[e]=c.css(e)});return c.clone().removeAttr('id').removeAttr('name').css({position:'absolute',top:0,left:-9999}).css(h).attr('tabIndex','-1').insertBefore(c)})(),i=null,g=function(){f.height(0).val(a(this).val()).scrollTop(10000);var d=Math.max(f.scrollTop(),k)+b.extraSpace,e=a(this).add(f);if(i===d){return}i=d;if(d>=b.limit){a(this).css('overflow-y','');return}b.onResize.call(this);b.animate&&c.css('display')==='block'?e.stop().animate({height:d},b.animateDuration,b.animateCallback):e.height(d)};c.unbind('.dynSiz').bind('keyup.dynSiz',g).bind('keydown.dynSiz',g).bind('change.dynSiz',g)});return this}})(jQuery);
/**
 *
 * Color picker
 * Author: Stefan Petre www.eyecon.ro
 * 
 * Dual licensed under the MIT and GPL licenses
 * 
 */
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview					
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind('mousedown', {cal: cal}, hide);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			}, 
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			}, 
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {
					
				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery)
/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

$(document).ready(function(){
	//global vars
	var form = $("#customForm");
	var name = $("#name");
	var nameInfo = $("#nameInfo");
	var email = $("#email");
	var emailInfo = $("#emailInfo");
	var pass1 = $("#pass1");
	var pass1Info = $("#pass1Info");
	var pass2 = $("#pass2");
	var pass2Info = $("#pass2Info");
	var message = $("#message");
	
	//On blur
	name.blur(validateName);
	email.blur(validateEmail);
	pass1.blur(validatePass1);
	pass2.blur(validatePass2);
	//On key press
	name.keyup(validateName);
	pass1.keyup(validatePass1);
	pass2.keyup(validatePass2);
	message.keyup(validateMessage);
	//On Submitting
	form.submit(function(){
		if(validateName() & validateEmail() & validatePass1() & validatePass2() & validateMessage())
			return true
		else
			return false;
	});
	
	//validation functions
	function validateEmail(){
		//testing regular expression
		var a = $("#email").val();
		var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
		//if it's valid email
		if(filter.test(a)){
			email.removeClass("error");
			emailInfo.text("Valid E-mail please, you will need it to log in!");
			emailInfo.removeClass("error");
			return true;
		}
		//if it's NOT valid
		else{
			email.addClass("error");
			emailInfo.text("Stop cowboy! Type a valid e-mail please :P");
			emailInfo.addClass("error");
			return false;
		}
	}
	function validateName(){
		//if it's NOT valid
		if(name.val().length < 4){
			name.addClass("error");
			nameInfo.text("We want names with more than 3 letters!");
			nameInfo.addClass("error");
			return false;
		}
		//if it's valid
		else{
			name.removeClass("error");
			nameInfo.text("What's your name?");
			nameInfo.removeClass("error");
			return true;
		}
	}
	function validatePass1(){
		var a = $("#password1");
		var b = $("#password2");

		//it's NOT valid
		if(pass1.val().length <5){
			pass1.addClass("error");
			pass1Info.text("Ey! Remember: At least 5 characters: letters, numbers and '_'");
			pass1Info.addClass("error");
			return false;
		}
		//it's valid
		else{			
			pass1.removeClass("error");
			pass1Info.text("At least 5 characters: letters, numbers and '_'");
			pass1Info.removeClass("error");
			validatePass2();
			return true;
		}
	}
	function validatePass2(){
		var a = $("#password1");
		var b = $("#password2");
		//are NOT valid
		if( pass1.val() != pass2.val() ){
			pass2.addClass("error");
			pass2Info.text("Passwords doesn't match!");
			pass2Info.addClass("error");
			return false;
		}
		//are valid
		else{
			pass2.removeClass("error");
			pass2Info.text("Confirm password");
			pass2Info.removeClass("error");
			return true;
		}
	}
	function validateMessage(){
		//it's NOT valid
		if(message.val().length < 10){
			message.addClass("error");
			return false;
		}
		//it's valid
		else{			
			message.removeClass("error");
			return true;
		}
	}
});
/*
 * File:        jquery.dataTables.min.js
 * Version:     1.8.2
 * Author:      Allan Jardine (www.sprymedia.co.uk)
 * Info:        www.datatables.net
 * 
 * Copyright 2008-2011 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD style license, as supplied with this software.
 * 
 * This source file is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 */
(function(i,za,p){i.fn.dataTableSettings=[];var D=i.fn.dataTableSettings;i.fn.dataTableExt={};var n=i.fn.dataTableExt;n.sVersion="1.8.2";n.sErrMode="alert";n.iApiIndex=0;n.oApi={};n.afnFiltering=[];n.aoFeatures=[];n.ofnSearch={};n.afnSortData=[];n.oStdClasses={sPagePrevEnabled:"paginate_enabled_previous",sPagePrevDisabled:"paginate_disabled_previous",sPageNextEnabled:"paginate_enabled_next",sPageNextDisabled:"paginate_disabled_next",sPageJUINext:"",sPageJUIPrev:"",sPageButton:"paginate_button",sPageButtonActive:"paginate_active",
sPageButtonStaticDisabled:"paginate_button paginate_button_disabled",sPageFirst:"first",sPagePrevious:"previous",sPageNext:"next",sPageLast:"last",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",
sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sFooterTH:""};n.oJUIClasses={sPagePrevEnabled:"fg-button ui-button ui-state-default ui-corner-left",
sPagePrevDisabled:"fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",sPageNextEnabled:"fg-button ui-button ui-state-default ui-corner-right",sPageNextDisabled:"fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",sPageJUINext:"ui-icon ui-icon-circle-arrow-e",sPageJUIPrev:"ui-icon ui-icon-circle-arrow-w",sPageButton:"fg-button ui-button ui-state-default",sPageButtonActive:"fg-button ui-button ui-state-default ui-state-disabled",sPageButtonStaticDisabled:"fg-button ui-button ui-state-default ui-state-disabled",
sPageFirst:"first ui-corner-tl ui-corner-bl",sPagePrevious:"previous",sPageNext:"next",sPageLast:"last ui-corner-tr ui-corner-br",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"ui-state-default",sSortDesc:"ui-state-default",sSortable:"ui-state-default",
sSortableAsc:"ui-state-default",sSortableDesc:"ui-state-default",sSortableNone:"ui-state-default",sSortColumn:"sorting_",sSortJUIAsc:"css_right ui-icon ui-icon-triangle-1-n",sSortJUIDesc:"css_right ui-icon ui-icon-triangle-1-s",sSortJUI:"css_right ui-icon ui-icon-carat-2-n-s",sSortJUIAscAllowed:"css_right ui-icon ui-icon-carat-1-n",sSortJUIDescAllowed:"css_right ui-icon ui-icon-carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollWrapper:"dataTables_scroll",
sScrollHead:"dataTables_scrollHead ui-state-default",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot ui-state-default",sScrollFootInner:"dataTables_scrollFootInner",sFooterTH:"ui-state-default"};n.oPagination={two_button:{fnInit:function(g,l,s){var t,w,y;if(g.bJUI){t=p.createElement("a");w=p.createElement("a");y=p.createElement("span");y.className=g.oClasses.sPageJUINext;w.appendChild(y);y=p.createElement("span");y.className=g.oClasses.sPageJUIPrev;
t.appendChild(y)}else{t=p.createElement("div");w=p.createElement("div")}t.className=g.oClasses.sPagePrevDisabled;w.className=g.oClasses.sPageNextDisabled;t.title=g.oLanguage.oPaginate.sPrevious;w.title=g.oLanguage.oPaginate.sNext;l.appendChild(t);l.appendChild(w);i(t).bind("click.DT",function(){g.oApi._fnPageChange(g,"previous")&&s(g)});i(w).bind("click.DT",function(){g.oApi._fnPageChange(g,"next")&&s(g)});i(t).bind("selectstart.DT",function(){return false});i(w).bind("selectstart.DT",function(){return false});
if(g.sTableId!==""&&typeof g.aanFeatures.p=="undefined"){l.setAttribute("id",g.sTableId+"_paginate");t.setAttribute("id",g.sTableId+"_previous");w.setAttribute("id",g.sTableId+"_next")}},fnUpdate:function(g){if(g.aanFeatures.p)for(var l=g.aanFeatures.p,s=0,t=l.length;s<t;s++)if(l[s].childNodes.length!==0){l[s].childNodes[0].className=g._iDisplayStart===0?g.oClasses.sPagePrevDisabled:g.oClasses.sPagePrevEnabled;l[s].childNodes[1].className=g.fnDisplayEnd()==g.fnRecordsDisplay()?g.oClasses.sPageNextDisabled:
g.oClasses.sPageNextEnabled}}},iFullNumbersShowPages:5,full_numbers:{fnInit:function(g,l,s){var t=p.createElement("span"),w=p.createElement("span"),y=p.createElement("span"),F=p.createElement("span"),x=p.createElement("span");t.innerHTML=g.oLanguage.oPaginate.sFirst;w.innerHTML=g.oLanguage.oPaginate.sPrevious;F.innerHTML=g.oLanguage.oPaginate.sNext;x.innerHTML=g.oLanguage.oPaginate.sLast;var v=g.oClasses;t.className=v.sPageButton+" "+v.sPageFirst;w.className=v.sPageButton+" "+v.sPagePrevious;F.className=
v.sPageButton+" "+v.sPageNext;x.className=v.sPageButton+" "+v.sPageLast;l.appendChild(t);l.appendChild(w);l.appendChild(y);l.appendChild(F);l.appendChild(x);i(t).bind("click.DT",function(){g.oApi._fnPageChange(g,"first")&&s(g)});i(w).bind("click.DT",function(){g.oApi._fnPageChange(g,"previous")&&s(g)});i(F).bind("click.DT",function(){g.oApi._fnPageChange(g,"next")&&s(g)});i(x).bind("click.DT",function(){g.oApi._fnPageChange(g,"last")&&s(g)});i("span",l).bind("mousedown.DT",function(){return false}).bind("selectstart.DT",
function(){return false});if(g.sTableId!==""&&typeof g.aanFeatures.p=="undefined"){l.setAttribute("id",g.sTableId+"_paginate");t.setAttribute("id",g.sTableId+"_first");w.setAttribute("id",g.sTableId+"_previous");F.setAttribute("id",g.sTableId+"_next");x.setAttribute("id",g.sTableId+"_last")}},fnUpdate:function(g,l){if(g.aanFeatures.p){var s=n.oPagination.iFullNumbersShowPages,t=Math.floor(s/2),w=Math.ceil(g.fnRecordsDisplay()/g._iDisplayLength),y=Math.ceil(g._iDisplayStart/g._iDisplayLength)+1,F=
"",x,v=g.oClasses;if(w<s){t=1;x=w}else if(y<=t){t=1;x=s}else if(y>=w-t){t=w-s+1;x=w}else{t=y-Math.ceil(s/2)+1;x=t+s-1}for(s=t;s<=x;s++)F+=y!=s?'<span class="'+v.sPageButton+'">'+s+"</span>":'<span class="'+v.sPageButtonActive+'">'+s+"</span>";x=g.aanFeatures.p;var z,$=function(M){g._iDisplayStart=(this.innerHTML*1-1)*g._iDisplayLength;l(g);M.preventDefault()},X=function(){return false};s=0;for(t=x.length;s<t;s++)if(x[s].childNodes.length!==0){z=i("span:eq(2)",x[s]);z.html(F);i("span",z).bind("click.DT",
$).bind("mousedown.DT",X).bind("selectstart.DT",X);z=x[s].getElementsByTagName("span");z=[z[0],z[1],z[z.length-2],z[z.length-1]];i(z).removeClass(v.sPageButton+" "+v.sPageButtonActive+" "+v.sPageButtonStaticDisabled);if(y==1){z[0].className+=" "+v.sPageButtonStaticDisabled;z[1].className+=" "+v.sPageButtonStaticDisabled}else{z[0].className+=" "+v.sPageButton;z[1].className+=" "+v.sPageButton}if(w===0||y==w||g._iDisplayLength==-1){z[2].className+=" "+v.sPageButtonStaticDisabled;z[3].className+=" "+
v.sPageButtonStaticDisabled}else{z[2].className+=" "+v.sPageButton;z[3].className+=" "+v.sPageButton}}}}}};n.oSort={"string-asc":function(g,l){if(typeof g!="string")g="";if(typeof l!="string")l="";g=g.toLowerCase();l=l.toLowerCase();return g<l?-1:g>l?1:0},"string-desc":function(g,l){if(typeof g!="string")g="";if(typeof l!="string")l="";g=g.toLowerCase();l=l.toLowerCase();return g<l?1:g>l?-1:0},"html-asc":function(g,l){g=g.replace(/<.*?>/g,"").toLowerCase();l=l.replace(/<.*?>/g,"").toLowerCase();return g<
l?-1:g>l?1:0},"html-desc":function(g,l){g=g.replace(/<.*?>/g,"").toLowerCase();l=l.replace(/<.*?>/g,"").toLowerCase();return g<l?1:g>l?-1:0},"date-asc":function(g,l){g=Date.parse(g);l=Date.parse(l);if(isNaN(g)||g==="")g=Date.parse("01/01/1970 00:00:00");if(isNaN(l)||l==="")l=Date.parse("01/01/1970 00:00:00");return g-l},"date-desc":function(g,l){g=Date.parse(g);l=Date.parse(l);if(isNaN(g)||g==="")g=Date.parse("01/01/1970 00:00:00");if(isNaN(l)||l==="")l=Date.parse("01/01/1970 00:00:00");return l-
g},"numeric-asc":function(g,l){return(g=="-"||g===""?0:g*1)-(l=="-"||l===""?0:l*1)},"numeric-desc":function(g,l){return(l=="-"||l===""?0:l*1)-(g=="-"||g===""?0:g*1)}};n.aTypes=[function(g){if(typeof g=="number")return"numeric";else if(typeof g!="string")return null;var l,s=false;l=g.charAt(0);if("0123456789-".indexOf(l)==-1)return null;for(var t=1;t<g.length;t++){l=g.charAt(t);if("0123456789.".indexOf(l)==-1)return null;if(l=="."){if(s)return null;s=true}}return"numeric"},function(g){var l=Date.parse(g);
if(l!==null&&!isNaN(l)||typeof g=="string"&&g.length===0)return"date";return null},function(g){if(typeof g=="string"&&g.indexOf("<")!=-1&&g.indexOf(">")!=-1)return"html";return null}];n.fnVersionCheck=function(g){var l=function(x,v){for(;x.length<v;)x+="0";return x},s=n.sVersion.split(".");g=g.split(".");for(var t="",w="",y=0,F=g.length;y<F;y++){t+=l(s[y],3);w+=l(g[y],3)}return parseInt(t,10)>=parseInt(w,10)};n._oExternConfig={iNextUnique:0};i.fn.dataTable=function(g){function l(){this.fnRecordsTotal=
function(){return this.oFeatures.bServerSide?parseInt(this._iRecordsTotal,10):this.aiDisplayMaster.length};this.fnRecordsDisplay=function(){return this.oFeatures.bServerSide?parseInt(this._iRecordsDisplay,10):this.aiDisplay.length};this.fnDisplayEnd=function(){return this.oFeatures.bServerSide?this.oFeatures.bPaginate===false||this._iDisplayLength==-1?this._iDisplayStart+this.aiDisplay.length:Math.min(this._iDisplayStart+this._iDisplayLength,this._iRecordsDisplay):this._iDisplayEnd};this.sInstance=
this.oInstance=null;this.oFeatures={bPaginate:true,bLengthChange:true,bFilter:true,bSort:true,bInfo:true,bAutoWidth:true,bProcessing:false,bSortClasses:true,bStateSave:false,bServerSide:false,bDeferRender:false};this.oScroll={sX:"",sXInner:"",sY:"",bCollapse:false,bInfinite:false,iLoadGap:100,iBarWidth:0,bAutoCss:true};this.aanFeatures=[];this.oLanguage={sProcessing:"Processing...",sLengthMenu:"Show _MENU_ entries",sZeroRecords:"No matching records found",sEmptyTable:"No data available in table",
sLoadingRecords:"Loading...",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sInfoThousands:",",sSearch:"Search:",sUrl:"",oPaginate:{sFirst:"First",sPrevious:"Previous",sNext:"Next",sLast:"Last"},fnInfoCallback:null};this.aoData=[];this.aiDisplay=[];this.aiDisplayMaster=[];this.aoColumns=[];this.aoHeader=[];this.aoFooter=[];this.iNextId=0;this.asDataSearch=[];this.oPreviousSearch={sSearch:"",
bRegex:false,bSmart:true};this.aoPreSearchCols=[];this.aaSorting=[[0,"asc",0]];this.aaSortingFixed=null;this.asStripeClasses=[];this.asDestroyStripes=[];this.sDestroyWidth=0;this.fnFooterCallback=this.fnHeaderCallback=this.fnRowCallback=null;this.aoDrawCallback=[];this.fnInitComplete=this.fnPreDrawCallback=null;this.sTableId="";this.nTableWrapper=this.nTBody=this.nTFoot=this.nTHead=this.nTable=null;this.bInitialised=this.bDeferLoading=false;this.aoOpenRows=[];this.sDom="lfrtip";this.sPaginationType=
"two_button";this.iCookieDuration=7200;this.sCookiePrefix="SpryMedia_DataTables_";this.fnCookieCallback=null;this.aoStateSave=[];this.aoStateLoad=[];this.sAjaxSource=this.oLoadedState=null;this.sAjaxDataProp="aaData";this.bAjaxDataGet=true;this.jqXHR=null;this.fnServerData=function(a,b,c,d){d.jqXHR=i.ajax({url:a,data:b,success:function(f){i(d.oInstance).trigger("xhr",d);c(f)},dataType:"json",cache:false,error:function(f,e){e=="parsererror"&&alert("DataTables warning: JSON data from server could not be parsed. This is caused by a JSON formatting error.")}})};
this.aoServerParams=[];this.fnFormatNumber=function(a){if(a<1E3)return a;else{var b=a+"";a=b.split("");var c="";b=b.length;for(var d=0;d<b;d++){if(d%3===0&&d!==0)c=this.oLanguage.sInfoThousands+c;c=a[b-d-1]+c}}return c};this.aLengthMenu=[5,10,25,50,100];this.bDrawing=this.iDraw=0;this.iDrawError=-1;this._iDisplayLength=5;this._iDisplayStart=0;this._iDisplayEnd=10;this._iRecordsDisplay=this._iRecordsTotal=0;this.bJUI=false;this.oClasses=n.oStdClasses;this.bSortCellsTop=this.bSorted=this.bFiltered=false;
this.oInit=null;this.aoDestroyCallback=[]}function s(a){return function(){var b=[A(this[n.iApiIndex])].concat(Array.prototype.slice.call(arguments));return n.oApi[a].apply(this,b)}}function t(a){var b,c,d=a.iInitDisplayStart;if(a.bInitialised===false)setTimeout(function(){t(a)},200);else{Aa(a);X(a);M(a,a.aoHeader);a.nTFoot&&M(a,a.aoFooter);K(a,true);a.oFeatures.bAutoWidth&&ga(a);b=0;for(c=a.aoColumns.length;b<c;b++)if(a.aoColumns[b].sWidth!==null)a.aoColumns[b].nTh.style.width=q(a.aoColumns[b].sWidth);
if(a.oFeatures.bSort)R(a);else if(a.oFeatures.bFilter)N(a,a.oPreviousSearch);else{a.aiDisplay=a.aiDisplayMaster.slice();E(a);C(a)}if(a.sAjaxSource!==null&&!a.oFeatures.bServerSide){c=[];ha(a,c);a.fnServerData.call(a.oInstance,a.sAjaxSource,c,function(f){var e=f;if(a.sAjaxDataProp!=="")e=aa(a.sAjaxDataProp)(f);for(b=0;b<e.length;b++)v(a,e[b]);a.iInitDisplayStart=d;if(a.oFeatures.bSort)R(a);else{a.aiDisplay=a.aiDisplayMaster.slice();E(a);C(a)}K(a,false);w(a,f)},a)}else if(!a.oFeatures.bServerSide){K(a,
false);w(a)}}}function w(a,b){a._bInitComplete=true;if(typeof a.fnInitComplete=="function")typeof b!="undefined"?a.fnInitComplete.call(a.oInstance,a,b):a.fnInitComplete.call(a.oInstance,a)}function y(a,b,c){a.oLanguage=i.extend(true,a.oLanguage,b);typeof b.sEmptyTable=="undefined"&&typeof b.sZeroRecords!="undefined"&&o(a.oLanguage,b,"sZeroRecords","sEmptyTable");typeof b.sLoadingRecords=="undefined"&&typeof b.sZeroRecords!="undefined"&&o(a.oLanguage,b,"sZeroRecords","sLoadingRecords");c&&t(a)}function F(a,
b){var c=a.aoColumns.length;b={sType:null,_bAutoType:true,bVisible:true,bSearchable:true,bSortable:true,asSorting:["asc","desc"],sSortingClass:a.oClasses.sSortable,sSortingClassJUI:a.oClasses.sSortJUI,sTitle:b?b.innerHTML:"",sName:"",sWidth:null,sWidthOrig:null,sClass:null,fnRender:null,bUseRendered:true,iDataSort:c,mDataProp:c,fnGetData:null,fnSetData:null,sSortDataType:"std",sDefaultContent:null,sContentPadding:"",nTh:b?b:p.createElement("th"),nTf:null};a.aoColumns.push(b);if(typeof a.aoPreSearchCols[c]==
"undefined"||a.aoPreSearchCols[c]===null)a.aoPreSearchCols[c]={sSearch:"",bRegex:false,bSmart:true};else{if(typeof a.aoPreSearchCols[c].bRegex=="undefined")a.aoPreSearchCols[c].bRegex=true;if(typeof a.aoPreSearchCols[c].bSmart=="undefined")a.aoPreSearchCols[c].bSmart=true}x(a,c,null)}function x(a,b,c){b=a.aoColumns[b];if(typeof c!="undefined"&&c!==null){if(typeof c.sType!="undefined"){b.sType=c.sType;b._bAutoType=false}o(b,c,"bVisible");o(b,c,"bSearchable");o(b,c,"bSortable");o(b,c,"sTitle");o(b,
c,"sName");o(b,c,"sWidth");o(b,c,"sWidth","sWidthOrig");o(b,c,"sClass");o(b,c,"fnRender");o(b,c,"bUseRendered");o(b,c,"iDataSort");o(b,c,"mDataProp");o(b,c,"asSorting");o(b,c,"sSortDataType");o(b,c,"sDefaultContent");o(b,c,"sContentPadding")}b.fnGetData=aa(b.mDataProp);b.fnSetData=Ba(b.mDataProp);if(!a.oFeatures.bSort)b.bSortable=false;if(!b.bSortable||i.inArray("asc",b.asSorting)==-1&&i.inArray("desc",b.asSorting)==-1){b.sSortingClass=a.oClasses.sSortableNone;b.sSortingClassJUI=""}else if(b.bSortable||
i.inArray("asc",b.asSorting)==-1&&i.inArray("desc",b.asSorting)==-1){b.sSortingClass=a.oClasses.sSortable;b.sSortingClassJUI=a.oClasses.sSortJUI}else if(i.inArray("asc",b.asSorting)!=-1&&i.inArray("desc",b.asSorting)==-1){b.sSortingClass=a.oClasses.sSortableAsc;b.sSortingClassJUI=a.oClasses.sSortJUIAscAllowed}else if(i.inArray("asc",b.asSorting)==-1&&i.inArray("desc",b.asSorting)!=-1){b.sSortingClass=a.oClasses.sSortableDesc;b.sSortingClassJUI=a.oClasses.sSortJUIDescAllowed}}function v(a,b){var c;
c=i.isArray(b)?b.slice():i.extend(true,{},b);b=a.aoData.length;var d={nTr:null,_iId:a.iNextId++,_aData:c,_anHidden:[],_sRowStripe:""};a.aoData.push(d);for(var f,e=0,h=a.aoColumns.length;e<h;e++){c=a.aoColumns[e];typeof c.fnRender=="function"&&c.bUseRendered&&c.mDataProp!==null&&O(a,b,e,c.fnRender({iDataRow:b,iDataColumn:e,aData:d._aData,oSettings:a}));if(c._bAutoType&&c.sType!="string"){f=G(a,b,e,"type");if(f!==null&&f!==""){f=ia(f);if(c.sType===null)c.sType=f;else if(c.sType!=f&&c.sType!="html")c.sType=
"string"}}}a.aiDisplayMaster.push(b);a.oFeatures.bDeferRender||z(a,b);return b}function z(a,b){var c=a.aoData[b],d;if(c.nTr===null){c.nTr=p.createElement("tr");typeof c._aData.DT_RowId!="undefined"&&c.nTr.setAttribute("id",c._aData.DT_RowId);typeof c._aData.DT_RowClass!="undefined"&&i(c.nTr).addClass(c._aData.DT_RowClass);for(var f=0,e=a.aoColumns.length;f<e;f++){var h=a.aoColumns[f];d=p.createElement("td");d.innerHTML=typeof h.fnRender=="function"&&(!h.bUseRendered||h.mDataProp===null)?h.fnRender({iDataRow:b,
iDataColumn:f,aData:c._aData,oSettings:a}):G(a,b,f,"display");if(h.sClass!==null)d.className=h.sClass;if(h.bVisible){c.nTr.appendChild(d);c._anHidden[f]=null}else c._anHidden[f]=d}}}function $(a){var b,c,d,f,e,h,j,k,m;if(a.bDeferLoading||a.sAjaxSource===null){j=a.nTBody.childNodes;b=0;for(c=j.length;b<c;b++)if(j[b].nodeName.toUpperCase()=="TR"){k=a.aoData.length;a.aoData.push({nTr:j[b],_iId:a.iNextId++,_aData:[],_anHidden:[],_sRowStripe:""});a.aiDisplayMaster.push(k);h=j[b].childNodes;d=e=0;for(f=
h.length;d<f;d++){m=h[d].nodeName.toUpperCase();if(m=="TD"||m=="TH"){O(a,k,e,i.trim(h[d].innerHTML));e++}}}}j=ba(a);h=[];b=0;for(c=j.length;b<c;b++){d=0;for(f=j[b].childNodes.length;d<f;d++){e=j[b].childNodes[d];m=e.nodeName.toUpperCase();if(m=="TD"||m=="TH")h.push(e)}}h.length!=j.length*a.aoColumns.length&&J(a,1,"Unexpected number of TD elements. Expected "+j.length*a.aoColumns.length+" and got "+h.length+". DataTables does not support rowspan / colspan in the table body, and there must be one cell for each row/column combination.");
d=0;for(f=a.aoColumns.length;d<f;d++){if(a.aoColumns[d].sTitle===null)a.aoColumns[d].sTitle=a.aoColumns[d].nTh.innerHTML;j=a.aoColumns[d]._bAutoType;m=typeof a.aoColumns[d].fnRender=="function";e=a.aoColumns[d].sClass!==null;k=a.aoColumns[d].bVisible;var u,r;if(j||m||e||!k){b=0;for(c=a.aoData.length;b<c;b++){u=h[b*f+d];if(j&&a.aoColumns[d].sType!="string"){r=G(a,b,d,"type");if(r!==""){r=ia(r);if(a.aoColumns[d].sType===null)a.aoColumns[d].sType=r;else if(a.aoColumns[d].sType!=r&&a.aoColumns[d].sType!=
"html")a.aoColumns[d].sType="string"}}if(m){r=a.aoColumns[d].fnRender({iDataRow:b,iDataColumn:d,aData:a.aoData[b]._aData,oSettings:a});u.innerHTML=r;a.aoColumns[d].bUseRendered&&O(a,b,d,r)}if(e)u.className+=" "+a.aoColumns[d].sClass;if(k)a.aoData[b]._anHidden[d]=null;else{a.aoData[b]._anHidden[d]=u;u.parentNode.removeChild(u)}}}}}function X(a){var b,c,d;a.nTHead.getElementsByTagName("tr");if(a.nTHead.getElementsByTagName("th").length!==0){b=0;for(d=a.aoColumns.length;b<d;b++){c=a.aoColumns[b].nTh;
a.aoColumns[b].sClass!==null&&i(c).addClass(a.aoColumns[b].sClass);if(a.aoColumns[b].sTitle!=c.innerHTML)c.innerHTML=a.aoColumns[b].sTitle}}else{var f=p.createElement("tr");b=0;for(d=a.aoColumns.length;b<d;b++){c=a.aoColumns[b].nTh;c.innerHTML=a.aoColumns[b].sTitle;a.aoColumns[b].sClass!==null&&i(c).addClass(a.aoColumns[b].sClass);f.appendChild(c)}i(a.nTHead).html("")[0].appendChild(f);Y(a.aoHeader,a.nTHead)}if(a.bJUI){b=0;for(d=a.aoColumns.length;b<d;b++){c=a.aoColumns[b].nTh;f=p.createElement("div");
f.className=a.oClasses.sSortJUIWrapper;i(c).contents().appendTo(f);var e=p.createElement("span");e.className=a.oClasses.sSortIcon;f.appendChild(e);c.appendChild(f)}}d=function(){this.onselectstart=function(){return false};return false};if(a.oFeatures.bSort)for(b=0;b<a.aoColumns.length;b++)if(a.aoColumns[b].bSortable!==false){ja(a,a.aoColumns[b].nTh,b);i(a.aoColumns[b].nTh).bind("mousedown.DT",d)}else i(a.aoColumns[b].nTh).addClass(a.oClasses.sSortableNone);a.oClasses.sFooterTH!==""&&i(a.nTFoot).children("tr").children("th").addClass(a.oClasses.sFooterTH);
if(a.nTFoot!==null){c=S(a,null,a.aoFooter);b=0;for(d=a.aoColumns.length;b<d;b++)if(typeof c[b]!="undefined")a.aoColumns[b].nTf=c[b]}}function M(a,b,c){var d,f,e,h=[],j=[],k=a.aoColumns.length;if(typeof c=="undefined")c=false;d=0;for(f=b.length;d<f;d++){h[d]=b[d].slice();h[d].nTr=b[d].nTr;for(e=k-1;e>=0;e--)!a.aoColumns[e].bVisible&&!c&&h[d].splice(e,1);j.push([])}d=0;for(f=h.length;d<f;d++){if(h[d].nTr){a=0;for(e=h[d].nTr.childNodes.length;a<e;a++)h[d].nTr.removeChild(h[d].nTr.childNodes[0])}e=0;
for(b=h[d].length;e<b;e++){k=c=1;if(typeof j[d][e]=="undefined"){h[d].nTr.appendChild(h[d][e].cell);for(j[d][e]=1;typeof h[d+c]!="undefined"&&h[d][e].cell==h[d+c][e].cell;){j[d+c][e]=1;c++}for(;typeof h[d][e+k]!="undefined"&&h[d][e].cell==h[d][e+k].cell;){for(a=0;a<c;a++)j[d+a][e+k]=1;k++}h[d][e].cell.rowSpan=c;h[d][e].cell.colSpan=k}}}}function C(a){var b,c,d=[],f=0,e=false;b=a.asStripeClasses.length;c=a.aoOpenRows.length;if(!(a.fnPreDrawCallback!==null&&a.fnPreDrawCallback.call(a.oInstance,a)===
false)){a.bDrawing=true;if(typeof a.iInitDisplayStart!="undefined"&&a.iInitDisplayStart!=-1){a._iDisplayStart=a.oFeatures.bServerSide?a.iInitDisplayStart:a.iInitDisplayStart>=a.fnRecordsDisplay()?0:a.iInitDisplayStart;a.iInitDisplayStart=-1;E(a)}if(a.bDeferLoading){a.bDeferLoading=false;a.iDraw++}else if(a.oFeatures.bServerSide){if(!a.bDestroying&&!Ca(a))return}else a.iDraw++;if(a.aiDisplay.length!==0){var h=a._iDisplayStart,j=a._iDisplayEnd;if(a.oFeatures.bServerSide){h=0;j=a.aoData.length}for(h=
h;h<j;h++){var k=a.aoData[a.aiDisplay[h]];k.nTr===null&&z(a,a.aiDisplay[h]);var m=k.nTr;if(b!==0){var u=a.asStripeClasses[f%b];if(k._sRowStripe!=u){i(m).removeClass(k._sRowStripe).addClass(u);k._sRowStripe=u}}if(typeof a.fnRowCallback=="function"){m=a.fnRowCallback.call(a.oInstance,m,a.aoData[a.aiDisplay[h]]._aData,f,h);if(!m&&!e){J(a,0,"A node was not returned by fnRowCallback");e=true}}d.push(m);f++;if(c!==0)for(k=0;k<c;k++)m==a.aoOpenRows[k].nParent&&d.push(a.aoOpenRows[k].nTr)}}else{d[0]=p.createElement("tr");
if(typeof a.asStripeClasses[0]!="undefined")d[0].className=a.asStripeClasses[0];e=a.oLanguage.sZeroRecords.replace("_MAX_",a.fnFormatNumber(a.fnRecordsTotal()));if(a.iDraw==1&&a.sAjaxSource!==null&&!a.oFeatures.bServerSide)e=a.oLanguage.sLoadingRecords;else if(typeof a.oLanguage.sEmptyTable!="undefined"&&a.fnRecordsTotal()===0)e=a.oLanguage.sEmptyTable;b=p.createElement("td");b.setAttribute("valign","top");b.colSpan=Z(a);b.className=a.oClasses.sRowEmpty;b.innerHTML=e;d[f].appendChild(b)}typeof a.fnHeaderCallback==
"function"&&a.fnHeaderCallback.call(a.oInstance,i(a.nTHead).children("tr")[0],ca(a),a._iDisplayStart,a.fnDisplayEnd(),a.aiDisplay);typeof a.fnFooterCallback=="function"&&a.fnFooterCallback.call(a.oInstance,i(a.nTFoot).children("tr")[0],ca(a),a._iDisplayStart,a.fnDisplayEnd(),a.aiDisplay);f=p.createDocumentFragment();b=p.createDocumentFragment();if(a.nTBody){e=a.nTBody.parentNode;b.appendChild(a.nTBody);if(!a.oScroll.bInfinite||!a._bInitComplete||a.bSorted||a.bFiltered){c=a.nTBody.childNodes;for(b=
c.length-1;b>=0;b--)c[b].parentNode.removeChild(c[b])}b=0;for(c=d.length;b<c;b++)f.appendChild(d[b]);a.nTBody.appendChild(f);e!==null&&e.appendChild(a.nTBody)}for(b=a.aoDrawCallback.length-1;b>=0;b--)a.aoDrawCallback[b].fn.call(a.oInstance,a);i(a.oInstance).trigger("draw",a);a.bSorted=false;a.bFiltered=false;a.bDrawing=false;if(a.oFeatures.bServerSide){K(a,false);typeof a._bInitComplete=="undefined"&&w(a)}}}function da(a){if(a.oFeatures.bSort)R(a,a.oPreviousSearch);else if(a.oFeatures.bFilter)N(a,
a.oPreviousSearch);else{E(a);C(a)}}function Ca(a){if(a.bAjaxDataGet){a.iDraw++;K(a,true);var b=Da(a);ha(a,b);a.fnServerData.call(a.oInstance,a.sAjaxSource,b,function(c){Ea(a,c)},a);return false}else return true}function Da(a){var b=a.aoColumns.length,c=[],d,f;c.push({name:"sEcho",value:a.iDraw});c.push({name:"iColumns",value:b});c.push({name:"sColumns",value:ka(a)});c.push({name:"iDisplayStart",value:a._iDisplayStart});c.push({name:"iDisplayLength",value:a.oFeatures.bPaginate!==false?a._iDisplayLength:
-1});for(f=0;f<b;f++){d=a.aoColumns[f].mDataProp;c.push({name:"mDataProp_"+f,value:typeof d=="function"?"function":d})}if(a.oFeatures.bFilter!==false){c.push({name:"sSearch",value:a.oPreviousSearch.sSearch});c.push({name:"bRegex",value:a.oPreviousSearch.bRegex});for(f=0;f<b;f++){c.push({name:"sSearch_"+f,value:a.aoPreSearchCols[f].sSearch});c.push({name:"bRegex_"+f,value:a.aoPreSearchCols[f].bRegex});c.push({name:"bSearchable_"+f,value:a.aoColumns[f].bSearchable})}}if(a.oFeatures.bSort!==false){d=
a.aaSortingFixed!==null?a.aaSortingFixed.length:0;var e=a.aaSorting.length;c.push({name:"iSortingCols",value:d+e});for(f=0;f<d;f++){c.push({name:"iSortCol_"+f,value:a.aaSortingFixed[f][0]});c.push({name:"sSortDir_"+f,value:a.aaSortingFixed[f][1]})}for(f=0;f<e;f++){c.push({name:"iSortCol_"+(f+d),value:a.aaSorting[f][0]});c.push({name:"sSortDir_"+(f+d),value:a.aaSorting[f][1]})}for(f=0;f<b;f++)c.push({name:"bSortable_"+f,value:a.aoColumns[f].bSortable})}return c}function ha(a,b){for(var c=0,d=a.aoServerParams.length;c<
d;c++)a.aoServerParams[c].fn.call(a.oInstance,b)}function Ea(a,b){if(typeof b.sEcho!="undefined")if(b.sEcho*1<a.iDraw)return;else a.iDraw=b.sEcho*1;if(!a.oScroll.bInfinite||a.oScroll.bInfinite&&(a.bSorted||a.bFiltered))la(a);a._iRecordsTotal=b.iTotalRecords;a._iRecordsDisplay=b.iTotalDisplayRecords;var c=ka(a);if(c=typeof b.sColumns!="undefined"&&c!==""&&b.sColumns!=c)var d=Fa(a,b.sColumns);b=aa(a.sAjaxDataProp)(b);for(var f=0,e=b.length;f<e;f++)if(c){for(var h=[],j=0,k=a.aoColumns.length;j<k;j++)h.push(b[f][d[j]]);
v(a,h)}else v(a,b[f]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=false;C(a);a.bAjaxDataGet=true;K(a,false)}function Aa(a){var b=p.createElement("div");a.nTable.parentNode.insertBefore(b,a.nTable);a.nTableWrapper=p.createElement("div");a.nTableWrapper.className=a.oClasses.sWrapper;a.sTableId!==""&&a.nTableWrapper.setAttribute("id",a.sTableId+"_wrapper");a.nTableReinsertBefore=a.nTable.nextSibling;for(var c=a.nTableWrapper,d=a.sDom.split(""),f,e,h,j,k,m,u,r=0;r<d.length;r++){e=0;h=d[r];if(h==
"<"){j=p.createElement("div");k=d[r+1];if(k=="'"||k=='"'){m="";for(u=2;d[r+u]!=k;){m+=d[r+u];u++}if(m=="H")m="fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix";else if(m=="F")m="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix";if(m.indexOf(".")!=-1){k=m.split(".");j.setAttribute("id",k[0].substr(1,k[0].length-1));j.className=k[1]}else if(m.charAt(0)=="#")j.setAttribute("id",m.substr(1,m.length-1));else j.className=m;r+=u}c.appendChild(j);
c=j}else if(h==">")c=c.parentNode;else if(h=="l"&&a.oFeatures.bPaginate&&a.oFeatures.bLengthChange){f=Ga(a);e=1}else if(h=="f"&&a.oFeatures.bFilter){f=Ha(a);e=1}else if(h=="r"&&a.oFeatures.bProcessing){f=Ia(a);e=1}else if(h=="t"){f=Ja(a);e=1}else if(h=="i"&&a.oFeatures.bInfo){f=Ka(a);e=1}else if(h=="p"&&a.oFeatures.bPaginate){f=La(a);e=1}else if(n.aoFeatures.length!==0){j=n.aoFeatures;u=0;for(k=j.length;u<k;u++)if(h==j[u].cFeature){if(f=j[u].fnInit(a))e=1;break}}if(e==1&&f!==null){if(typeof a.aanFeatures[h]!=
"object")a.aanFeatures[h]=[];a.aanFeatures[h].push(f);c.appendChild(f)}}b.parentNode.replaceChild(a.nTableWrapper,b)}function Ja(a){if(a.oScroll.sX===""&&a.oScroll.sY==="")return a.nTable;var b=p.createElement("div"),c=p.createElement("div"),d=p.createElement("div"),f=p.createElement("div"),e=p.createElement("div"),h=p.createElement("div"),j=a.nTable.cloneNode(false),k=a.nTable.cloneNode(false),m=a.nTable.getElementsByTagName("thead")[0],u=a.nTable.getElementsByTagName("tfoot").length===0?null:a.nTable.getElementsByTagName("tfoot")[0],
r=typeof g.bJQueryUI!="undefined"&&g.bJQueryUI?n.oJUIClasses:n.oStdClasses;c.appendChild(d);e.appendChild(h);f.appendChild(a.nTable);b.appendChild(c);b.appendChild(f);d.appendChild(j);j.appendChild(m);if(u!==null){b.appendChild(e);h.appendChild(k);k.appendChild(u)}b.className=r.sScrollWrapper;c.className=r.sScrollHead;d.className=r.sScrollHeadInner;f.className=r.sScrollBody;e.className=r.sScrollFoot;h.className=r.sScrollFootInner;if(a.oScroll.bAutoCss){c.style.overflow="hidden";c.style.position="relative";
e.style.overflow="hidden";f.style.overflow="auto"}c.style.border="0";c.style.width="100%";e.style.border="0";d.style.width="150%";j.removeAttribute("id");j.style.marginLeft="0";a.nTable.style.marginLeft="0";if(u!==null){k.removeAttribute("id");k.style.marginLeft="0"}d=i(a.nTable).children("caption");h=0;for(k=d.length;h<k;h++)j.appendChild(d[h]);if(a.oScroll.sX!==""){c.style.width=q(a.oScroll.sX);f.style.width=q(a.oScroll.sX);if(u!==null)e.style.width=q(a.oScroll.sX);i(f).scroll(function(){c.scrollLeft=
this.scrollLeft;if(u!==null)e.scrollLeft=this.scrollLeft})}if(a.oScroll.sY!=="")f.style.height=q(a.oScroll.sY);a.aoDrawCallback.push({fn:Ma,sName:"scrolling"});a.oScroll.bInfinite&&i(f).scroll(function(){if(!a.bDrawing)if(i(this).scrollTop()+i(this).height()>i(a.nTable).height()-a.oScroll.iLoadGap)if(a.fnDisplayEnd()<a.fnRecordsDisplay()){ma(a,"next");E(a);C(a)}});a.nScrollHead=c;a.nScrollFoot=e;return b}function Ma(a){var b=a.nScrollHead.getElementsByTagName("div")[0],c=b.getElementsByTagName("table")[0],
d=a.nTable.parentNode,f,e,h,j,k,m,u,r,H=[],L=a.nTFoot!==null?a.nScrollFoot.getElementsByTagName("div")[0]:null,T=a.nTFoot!==null?L.getElementsByTagName("table")[0]:null,B=i.browser.msie&&i.browser.version<=7;h=a.nTable.getElementsByTagName("thead");h.length>0&&a.nTable.removeChild(h[0]);if(a.nTFoot!==null){k=a.nTable.getElementsByTagName("tfoot");k.length>0&&a.nTable.removeChild(k[0])}h=a.nTHead.cloneNode(true);a.nTable.insertBefore(h,a.nTable.childNodes[0]);if(a.nTFoot!==null){k=a.nTFoot.cloneNode(true);
a.nTable.insertBefore(k,a.nTable.childNodes[1])}if(a.oScroll.sX===""){d.style.width="100%";b.parentNode.style.width="100%"}var U=S(a,h);f=0;for(e=U.length;f<e;f++){u=Na(a,f);U[f].style.width=a.aoColumns[u].sWidth}a.nTFoot!==null&&P(function(I){I.style.width=""},k.getElementsByTagName("tr"));f=i(a.nTable).outerWidth();if(a.oScroll.sX===""){a.nTable.style.width="100%";if(B&&(d.scrollHeight>d.offsetHeight||i(d).css("overflow-y")=="scroll"))a.nTable.style.width=q(i(a.nTable).outerWidth()-a.oScroll.iBarWidth)}else if(a.oScroll.sXInner!==
"")a.nTable.style.width=q(a.oScroll.sXInner);else if(f==i(d).width()&&i(d).height()<i(a.nTable).height()){a.nTable.style.width=q(f-a.oScroll.iBarWidth);if(i(a.nTable).outerWidth()>f-a.oScroll.iBarWidth)a.nTable.style.width=q(f)}else a.nTable.style.width=q(f);f=i(a.nTable).outerWidth();e=a.nTHead.getElementsByTagName("tr");h=h.getElementsByTagName("tr");P(function(I,na){m=I.style;m.paddingTop="0";m.paddingBottom="0";m.borderTopWidth="0";m.borderBottomWidth="0";m.height=0;r=i(I).width();na.style.width=
q(r);H.push(r)},h,e);i(h).height(0);if(a.nTFoot!==null){j=k.getElementsByTagName("tr");k=a.nTFoot.getElementsByTagName("tr");P(function(I,na){m=I.style;m.paddingTop="0";m.paddingBottom="0";m.borderTopWidth="0";m.borderBottomWidth="0";m.height=0;r=i(I).width();na.style.width=q(r);H.push(r)},j,k);i(j).height(0)}P(function(I){I.innerHTML="";I.style.width=q(H.shift())},h);a.nTFoot!==null&&P(function(I){I.innerHTML="";I.style.width=q(H.shift())},j);if(i(a.nTable).outerWidth()<f){j=d.scrollHeight>d.offsetHeight||
i(d).css("overflow-y")=="scroll"?f+a.oScroll.iBarWidth:f;if(B&&(d.scrollHeight>d.offsetHeight||i(d).css("overflow-y")=="scroll"))a.nTable.style.width=q(j-a.oScroll.iBarWidth);d.style.width=q(j);b.parentNode.style.width=q(j);if(a.nTFoot!==null)L.parentNode.style.width=q(j);if(a.oScroll.sX==="")J(a,1,"The table cannot fit into the current element which will cause column misalignment. The table has been drawn at its minimum possible width.");else a.oScroll.sXInner!==""&&J(a,1,"The table cannot fit into the current element which will cause column misalignment. Increase the sScrollXInner value or remove it to allow automatic calculation")}else{d.style.width=
q("100%");b.parentNode.style.width=q("100%");if(a.nTFoot!==null)L.parentNode.style.width=q("100%")}if(a.oScroll.sY==="")if(B)d.style.height=q(a.nTable.offsetHeight+a.oScroll.iBarWidth);if(a.oScroll.sY!==""&&a.oScroll.bCollapse){d.style.height=q(a.oScroll.sY);B=a.oScroll.sX!==""&&a.nTable.offsetWidth>d.offsetWidth?a.oScroll.iBarWidth:0;if(a.nTable.offsetHeight<d.offsetHeight)d.style.height=q(i(a.nTable).height()+B)}B=i(a.nTable).outerWidth();c.style.width=q(B);b.style.width=q(B+a.oScroll.iBarWidth);
if(a.nTFoot!==null){L.style.width=q(a.nTable.offsetWidth+a.oScroll.iBarWidth);T.style.width=q(a.nTable.offsetWidth)}if(a.bSorted||a.bFiltered)d.scrollTop=0}function ea(a){if(a.oFeatures.bAutoWidth===false)return false;ga(a);for(var b=0,c=a.aoColumns.length;b<c;b++)a.aoColumns[b].nTh.style.width=a.aoColumns[b].sWidth}function Ha(a){var b=a.oLanguage.sSearch;b=b.indexOf("_INPUT_")!==-1?b.replace("_INPUT_",'<input type="text" /><br><br>'):b===""?'<input type="text" /><br><br>':b+' <input type="text" /><br><br>';var c=p.createElement("div");
c.className=a.oClasses.sFilter;c.innerHTML="<label>"+b+"</label>";a.sTableId!==""&&typeof a.aanFeatures.f=="undefined"&&c.setAttribute("id",a.sTableId+"_filter");b=i("input",c);b.val(a.oPreviousSearch.sSearch.replace('"',"&quot;"));b.bind("keyup.DT",function(){for(var d=a.aanFeatures.f,f=0,e=d.length;f<e;f++)d[f]!=i(this).parents("div.dataTables_filter")[0]&&i("input",d[f]).val(this.value);this.value!=a.oPreviousSearch.sSearch&&N(a,{sSearch:this.value,bRegex:a.oPreviousSearch.bRegex,bSmart:a.oPreviousSearch.bSmart})});
b.bind("keypress.DT",function(d){if(d.keyCode==13)return false});return c}function N(a,b,c){Oa(a,b.sSearch,c,b.bRegex,b.bSmart);for(b=0;b<a.aoPreSearchCols.length;b++)Pa(a,a.aoPreSearchCols[b].sSearch,b,a.aoPreSearchCols[b].bRegex,a.aoPreSearchCols[b].bSmart);n.afnFiltering.length!==0&&Qa(a);a.bFiltered=true;i(a.oInstance).trigger("filter",a);a._iDisplayStart=0;E(a);C(a);oa(a,0)}function Qa(a){for(var b=n.afnFiltering,c=0,d=b.length;c<d;c++)for(var f=0,e=0,h=a.aiDisplay.length;e<h;e++){var j=a.aiDisplay[e-
f];if(!b[c](a,fa(a,j,"filter"),j)){a.aiDisplay.splice(e-f,1);f++}}}function Pa(a,b,c,d,f){if(b!==""){var e=0;b=pa(b,d,f);for(d=a.aiDisplay.length-1;d>=0;d--){f=qa(G(a,a.aiDisplay[d],c,"filter"),a.aoColumns[c].sType);if(!b.test(f)){a.aiDisplay.splice(d,1);e++}}}}function Oa(a,b,c,d,f){var e=pa(b,d,f);if(typeof c=="undefined"||c===null)c=0;if(n.afnFiltering.length!==0)c=1;if(b.length<=0){a.aiDisplay.splice(0,a.aiDisplay.length);a.aiDisplay=a.aiDisplayMaster.slice()}else if(a.aiDisplay.length==a.aiDisplayMaster.length||
a.oPreviousSearch.sSearch.length>b.length||c==1||b.indexOf(a.oPreviousSearch.sSearch)!==0){a.aiDisplay.splice(0,a.aiDisplay.length);oa(a,1);for(c=0;c<a.aiDisplayMaster.length;c++)e.test(a.asDataSearch[c])&&a.aiDisplay.push(a.aiDisplayMaster[c])}else{var h=0;for(c=0;c<a.asDataSearch.length;c++)if(!e.test(a.asDataSearch[c])){a.aiDisplay.splice(c-h,1);h++}}a.oPreviousSearch.sSearch=b;a.oPreviousSearch.bRegex=d;a.oPreviousSearch.bSmart=f}function oa(a,b){if(!a.oFeatures.bServerSide){a.asDataSearch.splice(0,
a.asDataSearch.length);b=typeof b!="undefined"&&b==1?a.aiDisplayMaster:a.aiDisplay;for(var c=0,d=b.length;c<d;c++)a.asDataSearch[c]=ra(a,fa(a,b[c],"filter"))}}function ra(a,b){var c="";if(typeof a.__nTmpFilter=="undefined")a.__nTmpFilter=p.createElement("div");for(var d=a.__nTmpFilter,f=0,e=a.aoColumns.length;f<e;f++)if(a.aoColumns[f].bSearchable)c+=qa(b[f],a.aoColumns[f].sType)+"  ";if(c.indexOf("&")!==-1){d.innerHTML=c;c=d.textContent?d.textContent:d.innerText;c=c.replace(/\n/g," ").replace(/\r/g,
"")}return c}function pa(a,b,c){if(c){a=b?a.split(" "):sa(a).split(" ");a="^(?=.*?"+a.join(")(?=.*?")+").*$";return new RegExp(a,"i")}else{a=b?a:sa(a);return new RegExp(a,"i")}}function qa(a,b){if(typeof n.ofnSearch[b]=="function")return n.ofnSearch[b](a);else if(b=="html")return a.replace(/\n/g," ").replace(/<.*?>/g,"");else if(typeof a=="string")return a.replace(/\n/g," ");else if(a===null)return"";return a}function R(a,b){var c,d,f,e,h=[],j=[],k=n.oSort;d=a.aoData;var m=a.aoColumns;if(!a.oFeatures.bServerSide&&
(a.aaSorting.length!==0||a.aaSortingFixed!==null)){h=a.aaSortingFixed!==null?a.aaSortingFixed.concat(a.aaSorting):a.aaSorting.slice();for(c=0;c<h.length;c++){var u=h[c][0];f=ta(a,u);e=a.aoColumns[u].sSortDataType;if(typeof n.afnSortData[e]!="undefined"){var r=n.afnSortData[e](a,u,f);f=0;for(e=d.length;f<e;f++)O(a,f,u,r[f])}}c=0;for(d=a.aiDisplayMaster.length;c<d;c++)j[a.aiDisplayMaster[c]]=c;var H=h.length;a.aiDisplayMaster.sort(function(L,T){var B,U;for(c=0;c<H;c++){B=m[h[c][0]].iDataSort;U=m[B].sType;
B=k[(U?U:"string")+"-"+h[c][1]](G(a,L,B,"sort"),G(a,T,B,"sort"));if(B!==0)return B}return k["numeric-asc"](j[L],j[T])})}if((typeof b=="undefined"||b)&&!a.oFeatures.bDeferRender)V(a);a.bSorted=true;i(a.oInstance).trigger("sort",a);if(a.oFeatures.bFilter)N(a,a.oPreviousSearch,1);else{a.aiDisplay=a.aiDisplayMaster.slice();a._iDisplayStart=0;E(a);C(a)}}function ja(a,b,c,d){i(b).bind("click.DT",function(f){if(a.aoColumns[c].bSortable!==false){var e=function(){var h,j;if(f.shiftKey){for(var k=false,m=0;m<
a.aaSorting.length;m++)if(a.aaSorting[m][0]==c){k=true;h=a.aaSorting[m][0];j=a.aaSorting[m][2]+1;if(typeof a.aoColumns[h].asSorting[j]=="undefined")a.aaSorting.splice(m,1);else{a.aaSorting[m][1]=a.aoColumns[h].asSorting[j];a.aaSorting[m][2]=j}break}k===false&&a.aaSorting.push([c,a.aoColumns[c].asSorting[0],0])}else if(a.aaSorting.length==1&&a.aaSorting[0][0]==c){h=a.aaSorting[0][0];j=a.aaSorting[0][2]+1;if(typeof a.aoColumns[h].asSorting[j]=="undefined")j=0;a.aaSorting[0][1]=a.aoColumns[h].asSorting[j];
a.aaSorting[0][2]=j}else{a.aaSorting.splice(0,a.aaSorting.length);a.aaSorting.push([c,a.aoColumns[c].asSorting[0],0])}R(a)};if(a.oFeatures.bProcessing){K(a,true);setTimeout(function(){e();a.oFeatures.bServerSide||K(a,false)},0)}else e();typeof d=="function"&&d(a)}})}function V(a){var b,c,d,f,e,h=a.aoColumns.length,j=a.oClasses;for(b=0;b<h;b++)a.aoColumns[b].bSortable&&i(a.aoColumns[b].nTh).removeClass(j.sSortAsc+" "+j.sSortDesc+" "+a.aoColumns[b].sSortingClass);f=a.aaSortingFixed!==null?a.aaSortingFixed.concat(a.aaSorting):
a.aaSorting.slice();for(b=0;b<a.aoColumns.length;b++)if(a.aoColumns[b].bSortable){e=a.aoColumns[b].sSortingClass;d=-1;for(c=0;c<f.length;c++)if(f[c][0]==b){e=f[c][1]=="asc"?j.sSortAsc:j.sSortDesc;d=c;break}i(a.aoColumns[b].nTh).addClass(e);if(a.bJUI){c=i("span",a.aoColumns[b].nTh);c.removeClass(j.sSortJUIAsc+" "+j.sSortJUIDesc+" "+j.sSortJUI+" "+j.sSortJUIAscAllowed+" "+j.sSortJUIDescAllowed);c.addClass(d==-1?a.aoColumns[b].sSortingClassJUI:f[d][1]=="asc"?j.sSortJUIAsc:j.sSortJUIDesc)}}else i(a.aoColumns[b].nTh).addClass(a.aoColumns[b].sSortingClass);
e=j.sSortColumn;if(a.oFeatures.bSort&&a.oFeatures.bSortClasses){d=Q(a);if(a.oFeatures.bDeferRender)i(d).removeClass(e+"1 "+e+"2 "+e+"3");else if(d.length>=h)for(b=0;b<h;b++)if(d[b].className.indexOf(e+"1")!=-1){c=0;for(a=d.length/h;c<a;c++)d[h*c+b].className=i.trim(d[h*c+b].className.replace(e+"1",""))}else if(d[b].className.indexOf(e+"2")!=-1){c=0;for(a=d.length/h;c<a;c++)d[h*c+b].className=i.trim(d[h*c+b].className.replace(e+"2",""))}else if(d[b].className.indexOf(e+"3")!=-1){c=0;for(a=d.length/
h;c<a;c++)d[h*c+b].className=i.trim(d[h*c+b].className.replace(" "+e+"3",""))}j=1;var k;for(b=0;b<f.length;b++){k=parseInt(f[b][0],10);c=0;for(a=d.length/h;c<a;c++)d[h*c+k].className+=" "+e+j;j<3&&j++}}}function La(a){if(a.oScroll.bInfinite)return null;var b=p.createElement("div");b.className=a.oClasses.sPaging+a.sPaginationType;n.oPagination[a.sPaginationType].fnInit(a,b,function(c){E(c);C(c)});typeof a.aanFeatures.p=="undefined"&&a.aoDrawCallback.push({fn:function(c){n.oPagination[c.sPaginationType].fnUpdate(c,
function(d){E(d);C(d)})},sName:"pagination"});return b}function ma(a,b){var c=a._iDisplayStart;if(b=="first")a._iDisplayStart=0;else if(b=="previous"){a._iDisplayStart=a._iDisplayLength>=0?a._iDisplayStart-a._iDisplayLength:0;if(a._iDisplayStart<0)a._iDisplayStart=0}else if(b=="next")if(a._iDisplayLength>=0){if(a._iDisplayStart+a._iDisplayLength<a.fnRecordsDisplay())a._iDisplayStart+=a._iDisplayLength}else a._iDisplayStart=0;else if(b=="last")if(a._iDisplayLength>=0){b=parseInt((a.fnRecordsDisplay()-
1)/a._iDisplayLength,10)+1;a._iDisplayStart=(b-1)*a._iDisplayLength}else a._iDisplayStart=0;else J(a,0,"Unknown paging action: "+b);i(a.oInstance).trigger("page",a);return c!=a._iDisplayStart}function Ka(a){var b=p.createElement("div");b.className=a.oClasses.sInfo;if(typeof a.aanFeatures.i=="undefined"){a.aoDrawCallback.push({fn:Ra,sName:"information"});a.sTableId!==""&&b.setAttribute("id",a.sTableId+"_info")}return b}function Ra(a){if(!(!a.oFeatures.bInfo||a.aanFeatures.i.length===0)){var b=a._iDisplayStart+
1,c=a.fnDisplayEnd(),d=a.fnRecordsTotal(),f=a.fnRecordsDisplay(),e=a.fnFormatNumber(b),h=a.fnFormatNumber(c),j=a.fnFormatNumber(d),k=a.fnFormatNumber(f);if(a.oScroll.bInfinite)e=a.fnFormatNumber(1);e=a.fnRecordsDisplay()===0&&a.fnRecordsDisplay()==a.fnRecordsTotal()?a.oLanguage.sInfoEmpty+a.oLanguage.sInfoPostFix:a.fnRecordsDisplay()===0?a.oLanguage.sInfoEmpty+" "+a.oLanguage.sInfoFiltered.replace("_MAX_",j)+a.oLanguage.sInfoPostFix:a.fnRecordsDisplay()==a.fnRecordsTotal()?a.oLanguage.sInfo.replace("_START_",
e).replace("_END_",h).replace("_TOTAL_",k)+a.oLanguage.sInfoPostFix:a.oLanguage.sInfo.replace("_START_",e).replace("_END_",h).replace("_TOTAL_",k)+" "+a.oLanguage.sInfoFiltered.replace("_MAX_",a.fnFormatNumber(a.fnRecordsTotal()))+a.oLanguage.sInfoPostFix;if(a.oLanguage.fnInfoCallback!==null)e=a.oLanguage.fnInfoCallback(a,b,c,d,f,e);a=a.aanFeatures.i;b=0;for(c=a.length;b<c;b++)i(a[b]).html(e)}}function Ga(a){if(a.oScroll.bInfinite)return null;var b='<select class="chzn-select medium-select select" style="width:50px;" '+(a.sTableId===""?"":'name="'+
a.sTableId+'_length"')+">",c,d;if(a.aLengthMenu.length==2&&typeof a.aLengthMenu[0]=="object"&&typeof a.aLengthMenu[1]=="object"){c=0;for(d=a.aLengthMenu[0].length;c<d;c++)b+='<option value="'+a.aLengthMenu[0][c]+'">'+a.aLengthMenu[1][c]+"</option>"}else{c=0;for(d=a.aLengthMenu.length;c<d;c++)b+='<option value="'+a.aLengthMenu[c]+'">'+a.aLengthMenu[c]+"</option>"}b+="</select>";var f=p.createElement("div");a.sTableId!==""&&typeof a.aanFeatures.l=="undefined"&&f.setAttribute("id",a.sTableId+"_length");
f.className=a.oClasses.sLength;f.innerHTML="<label>"+a.oLanguage.sLengthMenu.replace("_MENU_",b)+"</label>";i('select option[value="'+a._iDisplayLength+'"]',f).attr("selected",true);i("select",f).bind("change.DT",function(){var e=i(this).val(),h=a.aanFeatures.l;c=0;for(d=h.length;c<d;c++)h[c]!=this.parentNode&&i("select",h[c]).val(e);a._iDisplayLength=parseInt(e,10);E(a);if(a.fnDisplayEnd()==a.fnRecordsDisplay()){a._iDisplayStart=a.fnDisplayEnd()-a._iDisplayLength;if(a._iDisplayStart<0)a._iDisplayStart=
0}if(a._iDisplayLength==-1)a._iDisplayStart=0;C(a)});return f}function Ia(a){var b=p.createElement("div");a.sTableId!==""&&typeof a.aanFeatures.r=="undefined"&&b.setAttribute("id",a.sTableId+"_processing");b.innerHTML=a.oLanguage.sProcessing;b.className=a.oClasses.sProcessing;a.nTable.parentNode.insertBefore(b,a.nTable);return b}function K(a,b){if(a.oFeatures.bProcessing){a=a.aanFeatures.r;for(var c=0,d=a.length;c<d;c++)a[c].style.visibility=b?"visible":"hidden"}}function Na(a,b){for(var c=-1,d=0;d<
a.aoColumns.length;d++){a.aoColumns[d].bVisible===true&&c++;if(c==b)return d}return null}function ta(a,b){for(var c=-1,d=0;d<a.aoColumns.length;d++){a.aoColumns[d].bVisible===true&&c++;if(d==b)return a.aoColumns[d].bVisible===true?c:null}return null}function W(a,b){var c,d;c=a._iDisplayStart;for(d=a._iDisplayEnd;c<d;c++)if(a.aoData[a.aiDisplay[c]].nTr==b)return a.aiDisplay[c];c=0;for(d=a.aoData.length;c<d;c++)if(a.aoData[c].nTr==b)return c;return null}function Z(a){for(var b=0,c=0;c<a.aoColumns.length;c++)a.aoColumns[c].bVisible===
true&&b++;return b}function E(a){a._iDisplayEnd=a.oFeatures.bPaginate===false?a.aiDisplay.length:a._iDisplayStart+a._iDisplayLength>a.aiDisplay.length||a._iDisplayLength==-1?a.aiDisplay.length:a._iDisplayStart+a._iDisplayLength}function Sa(a,b){if(!a||a===null||a==="")return 0;if(typeof b=="undefined")b=p.getElementsByTagName("body")[0];var c=p.createElement("div");c.style.width=q(a);b.appendChild(c);a=c.offsetWidth;b.removeChild(c);return a}function ga(a){var b=0,c,d=0,f=a.aoColumns.length,e,h=i("th",
a.nTHead);for(e=0;e<f;e++)if(a.aoColumns[e].bVisible){d++;if(a.aoColumns[e].sWidth!==null){c=Sa(a.aoColumns[e].sWidthOrig,a.nTable.parentNode);if(c!==null)a.aoColumns[e].sWidth=q(c);b++}}if(f==h.length&&b===0&&d==f&&a.oScroll.sX===""&&a.oScroll.sY==="")for(e=0;e<a.aoColumns.length;e++){c=i(h[e]).width();if(c!==null)a.aoColumns[e].sWidth=q(c)}else{b=a.nTable.cloneNode(false);e=a.nTHead.cloneNode(true);d=p.createElement("tbody");c=p.createElement("tr");b.removeAttribute("id");b.appendChild(e);if(a.nTFoot!==
null){b.appendChild(a.nTFoot.cloneNode(true));P(function(k){k.style.width=""},b.getElementsByTagName("tr"))}b.appendChild(d);d.appendChild(c);d=i("thead th",b);if(d.length===0)d=i("tbody tr:eq(0)>td",b);h=S(a,e);for(e=d=0;e<f;e++){var j=a.aoColumns[e];if(j.bVisible&&j.sWidthOrig!==null&&j.sWidthOrig!=="")h[e-d].style.width=q(j.sWidthOrig);else if(j.bVisible)h[e-d].style.width="";else d++}for(e=0;e<f;e++)if(a.aoColumns[e].bVisible){d=Ta(a,e);if(d!==null){d=d.cloneNode(true);if(a.aoColumns[e].sContentPadding!==
"")d.innerHTML+=a.aoColumns[e].sContentPadding;c.appendChild(d)}}f=a.nTable.parentNode;f.appendChild(b);if(a.oScroll.sX!==""&&a.oScroll.sXInner!=="")b.style.width=q(a.oScroll.sXInner);else if(a.oScroll.sX!==""){b.style.width="";if(i(b).width()<f.offsetWidth)b.style.width=q(f.offsetWidth)}else if(a.oScroll.sY!=="")b.style.width=q(f.offsetWidth);b.style.visibility="hidden";Ua(a,b);f=i("tbody tr:eq(0)",b).children();if(f.length===0)f=S(a,i("thead",b)[0]);if(a.oScroll.sX!==""){for(e=d=c=0;e<a.aoColumns.length;e++)if(a.aoColumns[e].bVisible){c+=
a.aoColumns[e].sWidthOrig===null?i(f[d]).outerWidth():parseInt(a.aoColumns[e].sWidth.replace("px",""),10)+(i(f[d]).outerWidth()-i(f[d]).width());d++}b.style.width=q(c);a.nTable.style.width=q(c)}for(e=d=0;e<a.aoColumns.length;e++)if(a.aoColumns[e].bVisible){c=i(f[d]).width();if(c!==null&&c>0)a.aoColumns[e].sWidth=q(c);d++}a.nTable.style.width=q(i(b).outerWidth());b.parentNode.removeChild(b)}}function Ua(a,b){if(a.oScroll.sX===""&&a.oScroll.sY!==""){i(b).width();b.style.width=q(i(b).outerWidth()-a.oScroll.iBarWidth)}else if(a.oScroll.sX!==
"")b.style.width=q(i(b).outerWidth())}function Ta(a,b){var c=Va(a,b);if(c<0)return null;if(a.aoData[c].nTr===null){var d=p.createElement("td");d.innerHTML=G(a,c,b,"");return d}return Q(a,c)[b]}function Va(a,b){for(var c=-1,d=-1,f=0;f<a.aoData.length;f++){var e=G(a,f,b,"display")+"";e=e.replace(/<.*?>/g,"");if(e.length>c){c=e.length;d=f}}return d}function q(a){if(a===null)return"0px";if(typeof a=="number"){if(a<0)return"0px";return a+"px"}var b=a.charCodeAt(a.length-1);if(b<48||b>57)return a;return a+
"px"}function Za(a,b){if(a.length!=b.length)return 1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return 2;return 0}function ia(a){for(var b=n.aTypes,c=b.length,d=0;d<c;d++){var f=b[d](a);if(f!==null)return f}return"string"}function A(a){for(var b=0;b<D.length;b++)if(D[b].nTable==a)return D[b];return null}function ca(a){for(var b=[],c=a.aoData.length,d=0;d<c;d++)b.push(a.aoData[d]._aData);return b}function ba(a){for(var b=[],c=0,d=a.aoData.length;c<d;c++)a.aoData[c].nTr!==null&&b.push(a.aoData[c].nTr);
return b}function Q(a,b){var c=[],d,f,e,h,j;f=0;var k=a.aoData.length;if(typeof b!="undefined"){f=b;k=b+1}for(f=f;f<k;f++){j=a.aoData[f];if(j.nTr!==null){b=[];e=0;for(h=j.nTr.childNodes.length;e<h;e++){d=j.nTr.childNodes[e].nodeName.toLowerCase();if(d=="td"||d=="th")b.push(j.nTr.childNodes[e])}e=d=0;for(h=a.aoColumns.length;e<h;e++)if(a.aoColumns[e].bVisible)c.push(b[e-d]);else{c.push(j._anHidden[e]);d++}}}return c}function sa(a){return a.replace(new RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^)",
"g"),"\\$1")}function ua(a,b){for(var c=-1,d=0,f=a.length;d<f;d++)if(a[d]==b)c=d;else a[d]>b&&a[d]--;c!=-1&&a.splice(c,1)}function Fa(a,b){b=b.split(",");for(var c=[],d=0,f=a.aoColumns.length;d<f;d++)for(var e=0;e<f;e++)if(a.aoColumns[d].sName==b[e]){c.push(e);break}return c}function ka(a){for(var b="",c=0,d=a.aoColumns.length;c<d;c++)b+=a.aoColumns[c].sName+",";if(b.length==d)return"";return b.slice(0,-1)}function J(a,b,c){a=a.sTableId===""?"DataTables warning: "+c:"DataTables warning (table id = '"+
a.sTableId+"'): "+c;if(b===0)if(n.sErrMode=="alert")alert(a);else throw a;else typeof console!="undefined"&&typeof console.log!="undefined"&&console.log(a)}function la(a){a.aoData.splice(0,a.aoData.length);a.aiDisplayMaster.splice(0,a.aiDisplayMaster.length);a.aiDisplay.splice(0,a.aiDisplay.length);E(a)}function va(a){if(!(!a.oFeatures.bStateSave||typeof a.bDestroying!="undefined")){var b,c,d,f="{";f+='"iCreate":'+(new Date).getTime()+",";f+='"iStart":'+(a.oScroll.bInfinite?0:a._iDisplayStart)+",";
f+='"iEnd":'+(a.oScroll.bInfinite?a._iDisplayLength:a._iDisplayEnd)+",";f+='"iLength":'+a._iDisplayLength+",";f+='"sFilter":"'+encodeURIComponent(a.oPreviousSearch.sSearch)+'",';f+='"sFilterEsc":'+!a.oPreviousSearch.bRegex+",";f+='"aaSorting":[ ';for(b=0;b<a.aaSorting.length;b++)f+="["+a.aaSorting[b][0]+',"'+a.aaSorting[b][1]+'"],';f=f.substring(0,f.length-1);f+="],";f+='"aaSearchCols":[ ';for(b=0;b<a.aoPreSearchCols.length;b++)f+='["'+encodeURIComponent(a.aoPreSearchCols[b].sSearch)+'",'+!a.aoPreSearchCols[b].bRegex+
"],";f=f.substring(0,f.length-1);f+="],";f+='"abVisCols":[ ';for(b=0;b<a.aoColumns.length;b++)f+=a.aoColumns[b].bVisible+",";f=f.substring(0,f.length-1);f+="]";b=0;for(c=a.aoStateSave.length;b<c;b++){d=a.aoStateSave[b].fn(a,f);if(d!=="")f=d}f+="}";Wa(a.sCookiePrefix+a.sInstance,f,a.iCookieDuration,a.sCookiePrefix,a.fnCookieCallback)}}function Xa(a,b){if(a.oFeatures.bStateSave){var c,d,f;d=wa(a.sCookiePrefix+a.sInstance);if(d!==null&&d!==""){try{c=typeof i.parseJSON=="function"?i.parseJSON(d.replace(/'/g,
'"')):eval("("+d+")")}catch(e){return}d=0;for(f=a.aoStateLoad.length;d<f;d++)if(!a.aoStateLoad[d].fn(a,c))return;a.oLoadedState=i.extend(true,{},c);a._iDisplayStart=c.iStart;a.iInitDisplayStart=c.iStart;a._iDisplayEnd=c.iEnd;a._iDisplayLength=c.iLength;a.oPreviousSearch.sSearch=decodeURIComponent(c.sFilter);a.aaSorting=c.aaSorting.slice();a.saved_aaSorting=c.aaSorting.slice();if(typeof c.sFilterEsc!="undefined")a.oPreviousSearch.bRegex=!c.sFilterEsc;if(typeof c.aaSearchCols!="undefined")for(d=0;d<
c.aaSearchCols.length;d++)a.aoPreSearchCols[d]={sSearch:decodeURIComponent(c.aaSearchCols[d][0]),bRegex:!c.aaSearchCols[d][1]};if(typeof c.abVisCols!="undefined"){b.saved_aoColumns=[];for(d=0;d<c.abVisCols.length;d++){b.saved_aoColumns[d]={};b.saved_aoColumns[d].bVisible=c.abVisCols[d]}}}}}function Wa(a,b,c,d,f){var e=new Date;e.setTime(e.getTime()+c*1E3);c=za.location.pathname.split("/");a=a+"_"+c.pop().replace(/[\/:]/g,"").toLowerCase();var h;if(f!==null){h=typeof i.parseJSON=="function"?i.parseJSON(b):
eval("("+b+")");b=f(a,h,e.toGMTString(),c.join("/")+"/")}else b=a+"="+encodeURIComponent(b)+"; expires="+e.toGMTString()+"; path="+c.join("/")+"/";f="";e=9999999999999;if((wa(a)!==null?p.cookie.length:b.length+p.cookie.length)+10>4096){a=p.cookie.split(";");for(var j=0,k=a.length;j<k;j++)if(a[j].indexOf(d)!=-1){var m=a[j].split("=");try{h=eval("("+decodeURIComponent(m[1])+")")}catch(u){continue}if(typeof h.iCreate!="undefined"&&h.iCreate<e){f=m[0];e=h.iCreate}}if(f!=="")p.cookie=f+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path="+
c.join("/")+"/"}p.cookie=b}function wa(a){var b=za.location.pathname.split("/");a=a+"_"+b[b.length-1].replace(/[\/:]/g,"").toLowerCase()+"=";b=p.cookie.split(";");for(var c=0;c<b.length;c++){for(var d=b[c];d.charAt(0)==" ";)d=d.substring(1,d.length);if(d.indexOf(a)===0)return decodeURIComponent(d.substring(a.length,d.length))}return null}function Y(a,b){b=i(b).children("tr");var c,d,f,e,h,j,k,m,u=function(L,T,B){for(;typeof L[T][B]!="undefined";)B++;return B};a.splice(0,a.length);d=0;for(j=b.length;d<
j;d++)a.push([]);d=0;for(j=b.length;d<j;d++){f=0;for(k=b[d].childNodes.length;f<k;f++){c=b[d].childNodes[f];if(c.nodeName.toUpperCase()=="TD"||c.nodeName.toUpperCase()=="TH"){var r=c.getAttribute("colspan")*1,H=c.getAttribute("rowspan")*1;r=!r||r===0||r===1?1:r;H=!H||H===0||H===1?1:H;m=u(a,d,0);for(h=0;h<r;h++)for(e=0;e<H;e++){a[d+e][m+h]={cell:c,unique:r==1?true:false};a[d+e].nTr=b[d]}}}}}function S(a,b,c){var d=[];if(typeof c=="undefined"){c=a.aoHeader;if(typeof b!="undefined"){c=[];Y(c,b)}}b=0;
for(var f=c.length;b<f;b++)for(var e=0,h=c[b].length;e<h;e++)if(c[b][e].unique&&(typeof d[e]=="undefined"||!a.bSortCellsTop))d[e]=c[b][e].cell;return d}function Ya(){var a=p.createElement("p"),b=a.style;b.width="100%";b.height="200px";b.padding="0px";var c=p.createElement("div");b=c.style;b.position="absolute";b.top="0px";b.left="0px";b.visibility="hidden";b.width="200px";b.height="150px";b.padding="0px";b.overflow="hidden";c.appendChild(a);p.body.appendChild(c);b=a.offsetWidth;c.style.overflow="scroll";
a=a.offsetWidth;if(b==a)a=c.clientWidth;p.body.removeChild(c);return b-a}function P(a,b,c){for(var d=0,f=b.length;d<f;d++)for(var e=0,h=b[d].childNodes.length;e<h;e++)if(b[d].childNodes[e].nodeType==1)typeof c!="undefined"?a(b[d].childNodes[e],c[d].childNodes[e]):a(b[d].childNodes[e])}function o(a,b,c,d){if(typeof d=="undefined")d=c;if(typeof b[c]!="undefined")a[d]=b[c]}function fa(a,b,c){for(var d=[],f=0,e=a.aoColumns.length;f<e;f++)d.push(G(a,b,f,c));return d}function G(a,b,c,d){var f=a.aoColumns[c];
if((c=f.fnGetData(a.aoData[b]._aData))===undefined){if(a.iDrawError!=a.iDraw&&f.sDefaultContent===null){J(a,0,"Requested unknown parameter '"+f.mDataProp+"' from the data source for row "+b);a.iDrawError=a.iDraw}return f.sDefaultContent}if(c===null&&f.sDefaultContent!==null)c=f.sDefaultContent;else if(typeof c=="function")return c();if(d=="display"&&c===null)return"";return c}function O(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d)}function aa(a){if(a===null)return function(){return null};
else if(typeof a=="function")return function(c){return a(c)};else if(typeof a=="string"&&a.indexOf(".")!=-1){var b=a.split(".");return b.length==2?function(c){return c[b[0]][b[1]]}:b.length==3?function(c){return c[b[0]][b[1]][b[2]]}:function(c){for(var d=0,f=b.length;d<f;d++)c=c[b[d]];return c}}else return function(c){return c[a]}}function Ba(a){if(a===null)return function(){};else if(typeof a=="function")return function(c,d){return a(c,d)};else if(typeof a=="string"&&a.indexOf(".")!=-1){var b=a.split(".");
return b.length==2?function(c,d){c[b[0]][b[1]]=d}:b.length==3?function(c,d){c[b[0]][b[1]][b[2]]=d}:function(c,d){for(var f=0,e=b.length-1;f<e;f++)c=c[b[f]];c[b[b.length-1]]=d}}else return function(c,d){c[a]=d}}this.oApi={};this.fnDraw=function(a){var b=A(this[n.iApiIndex]);if(typeof a!="undefined"&&a===false){E(b);C(b)}else da(b)};this.fnFilter=function(a,b,c,d,f){var e=A(this[n.iApiIndex]);if(e.oFeatures.bFilter){if(typeof c=="undefined")c=false;if(typeof d=="undefined")d=true;if(typeof f=="undefined")f=
true;if(typeof b=="undefined"||b===null){N(e,{sSearch:a,bRegex:c,bSmart:d},1);if(f&&typeof e.aanFeatures.f!="undefined"){b=e.aanFeatures.f;c=0;for(d=b.length;c<d;c++)i("input",b[c]).val(a)}}else{e.aoPreSearchCols[b].sSearch=a;e.aoPreSearchCols[b].bRegex=c;e.aoPreSearchCols[b].bSmart=d;N(e,e.oPreviousSearch,1)}}};this.fnSettings=function(){return A(this[n.iApiIndex])};this.fnVersionCheck=n.fnVersionCheck;this.fnSort=function(a){var b=A(this[n.iApiIndex]);b.aaSorting=a;R(b)};this.fnSortListener=function(a,
b,c){ja(A(this[n.iApiIndex]),a,b,c)};this.fnAddData=function(a,b){if(a.length===0)return[];var c=[],d,f=A(this[n.iApiIndex]);if(typeof a[0]=="object")for(var e=0;e<a.length;e++){d=v(f,a[e]);if(d==-1)return c;c.push(d)}else{d=v(f,a);if(d==-1)return c;c.push(d)}f.aiDisplay=f.aiDisplayMaster.slice();if(typeof b=="undefined"||b)da(f);return c};this.fnDeleteRow=function(a,b,c){var d=A(this[n.iApiIndex]);a=typeof a=="object"?W(d,a):a;var f=d.aoData.splice(a,1),e=i.inArray(a,d.aiDisplay);d.asDataSearch.splice(e,
1);ua(d.aiDisplayMaster,a);ua(d.aiDisplay,a);typeof b=="function"&&b.call(this,d,f);if(d._iDisplayStart>=d.aiDisplay.length){d._iDisplayStart-=d._iDisplayLength;if(d._iDisplayStart<0)d._iDisplayStart=0}if(typeof c=="undefined"||c){E(d);C(d)}return f};this.fnClearTable=function(a){var b=A(this[n.iApiIndex]);la(b);if(typeof a=="undefined"||a)C(b)};this.fnOpen=function(a,b,c){var d=A(this[n.iApiIndex]);this.fnClose(a);var f=p.createElement("tr"),e=p.createElement("td");f.appendChild(e);e.className=c;
e.colSpan=Z(d);if(typeof b.jquery!="undefined"||typeof b=="object")e.appendChild(b);else e.innerHTML=b;b=i("tr",d.nTBody);i.inArray(a,b)!=-1&&i(f).insertAfter(a);d.aoOpenRows.push({nTr:f,nParent:a});return f};this.fnClose=function(a){for(var b=A(this[n.iApiIndex]),c=0;c<b.aoOpenRows.length;c++)if(b.aoOpenRows[c].nParent==a){(a=b.aoOpenRows[c].nTr.parentNode)&&a.removeChild(b.aoOpenRows[c].nTr);b.aoOpenRows.splice(c,1);return 0}return 1};this.fnGetData=function(a,b){var c=A(this[n.iApiIndex]);if(typeof a!=
"undefined"){a=typeof a=="object"?W(c,a):a;if(typeof b!="undefined")return G(c,a,b,"");return typeof c.aoData[a]!="undefined"?c.aoData[a]._aData:null}return ca(c)};this.fnGetNodes=function(a){var b=A(this[n.iApiIndex]);if(typeof a!="undefined")return typeof b.aoData[a]!="undefined"?b.aoData[a].nTr:null;return ba(b)};this.fnGetPosition=function(a){var b=A(this[n.iApiIndex]),c=a.nodeName.toUpperCase();if(c=="TR")return W(b,a);else if(c=="TD"||c=="TH"){c=W(b,a.parentNode);for(var d=Q(b,c),f=0;f<b.aoColumns.length;f++)if(d[f]==
a)return[c,ta(b,f),f]}return null};this.fnUpdate=function(a,b,c,d,f){var e=A(this[n.iApiIndex]);b=typeof b=="object"?W(e,b):b;if(i.isArray(a)&&typeof a=="object"){e.aoData[b]._aData=a.slice();for(c=0;c<e.aoColumns.length;c++)this.fnUpdate(G(e,b,c),b,c,false,false)}else if(a!==null&&typeof a=="object"){e.aoData[b]._aData=i.extend(true,{},a);for(c=0;c<e.aoColumns.length;c++)this.fnUpdate(G(e,b,c),b,c,false,false)}else{a=a;O(e,b,c,a);if(e.aoColumns[c].fnRender!==null){a=e.aoColumns[c].fnRender({iDataRow:b,
iDataColumn:c,aData:e.aoData[b]._aData,oSettings:e});e.aoColumns[c].bUseRendered&&O(e,b,c,a)}if(e.aoData[b].nTr!==null)Q(e,b)[c].innerHTML=a}c=i.inArray(b,e.aiDisplay);e.asDataSearch[c]=ra(e,fa(e,b,"filter"));if(typeof f=="undefined"||f)ea(e);if(typeof d=="undefined"||d)da(e);return 0};this.fnSetColumnVis=function(a,b,c){var d=A(this[n.iApiIndex]),f,e;e=d.aoColumns.length;var h,j;if(d.aoColumns[a].bVisible!=b){if(b){for(f=j=0;f<a;f++)d.aoColumns[f].bVisible&&j++;j=j>=Z(d);if(!j)for(f=a;f<e;f++)if(d.aoColumns[f].bVisible){h=
f;break}f=0;for(e=d.aoData.length;f<e;f++)if(d.aoData[f].nTr!==null)j?d.aoData[f].nTr.appendChild(d.aoData[f]._anHidden[a]):d.aoData[f].nTr.insertBefore(d.aoData[f]._anHidden[a],Q(d,f)[h])}else{f=0;for(e=d.aoData.length;f<e;f++)if(d.aoData[f].nTr!==null){h=Q(d,f)[a];d.aoData[f]._anHidden[a]=h;h.parentNode.removeChild(h)}}d.aoColumns[a].bVisible=b;M(d,d.aoHeader);d.nTFoot&&M(d,d.aoFooter);f=0;for(e=d.aoOpenRows.length;f<e;f++)d.aoOpenRows[f].nTr.colSpan=Z(d);if(typeof c=="undefined"||c){ea(d);C(d)}va(d)}};
this.fnPageChange=function(a,b){var c=A(this[n.iApiIndex]);ma(c,a);E(c);if(typeof b=="undefined"||b)C(c)};this.fnDestroy=function(){var a=A(this[n.iApiIndex]),b=a.nTableWrapper.parentNode,c=a.nTBody,d,f;a.bDestroying=true;d=0;for(f=a.aoDestroyCallback.length;d<f;d++)a.aoDestroyCallback[d].fn();d=0;for(f=a.aoColumns.length;d<f;d++)a.aoColumns[d].bVisible===false&&this.fnSetColumnVis(d,true);i(a.nTableWrapper).find("*").andSelf().unbind(".DT");i("tbody>tr>td."+a.oClasses.sRowEmpty,a.nTable).parent().remove();
if(a.nTable!=a.nTHead.parentNode){i(a.nTable).children("thead").remove();a.nTable.appendChild(a.nTHead)}if(a.nTFoot&&a.nTable!=a.nTFoot.parentNode){i(a.nTable).children("tfoot").remove();a.nTable.appendChild(a.nTFoot)}a.nTable.parentNode.removeChild(a.nTable);i(a.nTableWrapper).remove();a.aaSorting=[];a.aaSortingFixed=[];V(a);i(ba(a)).removeClass(a.asStripeClasses.join(" "));if(a.bJUI){i("th",a.nTHead).removeClass([n.oStdClasses.sSortable,n.oJUIClasses.sSortableAsc,n.oJUIClasses.sSortableDesc,n.oJUIClasses.sSortableNone].join(" "));
i("th span."+n.oJUIClasses.sSortIcon,a.nTHead).remove();i("th",a.nTHead).each(function(){var e=i("div."+n.oJUIClasses.sSortJUIWrapper,this),h=e.contents();i(this).append(h);e.remove()})}else i("th",a.nTHead).removeClass([n.oStdClasses.sSortable,n.oStdClasses.sSortableAsc,n.oStdClasses.sSortableDesc,n.oStdClasses.sSortableNone].join(" "));a.nTableReinsertBefore?b.insertBefore(a.nTable,a.nTableReinsertBefore):b.appendChild(a.nTable);d=0;for(f=a.aoData.length;d<f;d++)a.aoData[d].nTr!==null&&c.appendChild(a.aoData[d].nTr);
if(a.oFeatures.bAutoWidth===true)a.nTable.style.width=q(a.sDestroyWidth);i(c).children("tr:even").addClass(a.asDestroyStripes[0]);i(c).children("tr:odd").addClass(a.asDestroyStripes[1]);d=0;for(f=D.length;d<f;d++)D[d]==a&&D.splice(d,1);a=null};this.fnAdjustColumnSizing=function(a){var b=A(this[n.iApiIndex]);ea(b);if(typeof a=="undefined"||a)this.fnDraw(false);else if(b.oScroll.sX!==""||b.oScroll.sY!=="")this.oApi._fnScrollDraw(b)};for(var xa in n.oApi)if(xa)this[xa]=s(xa);this.oApi._fnExternApiFunc=
s;this.oApi._fnInitialise=t;this.oApi._fnInitComplete=w;this.oApi._fnLanguageProcess=y;this.oApi._fnAddColumn=F;this.oApi._fnColumnOptions=x;this.oApi._fnAddData=v;this.oApi._fnCreateTr=z;this.oApi._fnGatherData=$;this.oApi._fnBuildHead=X;this.oApi._fnDrawHead=M;this.oApi._fnDraw=C;this.oApi._fnReDraw=da;this.oApi._fnAjaxUpdate=Ca;this.oApi._fnAjaxParameters=Da;this.oApi._fnAjaxUpdateDraw=Ea;this.oApi._fnServerParams=ha;this.oApi._fnAddOptionsHtml=Aa;this.oApi._fnFeatureHtmlTable=Ja;this.oApi._fnScrollDraw=
Ma;this.oApi._fnAdjustColumnSizing=ea;this.oApi._fnFeatureHtmlFilter=Ha;this.oApi._fnFilterComplete=N;this.oApi._fnFilterCustom=Qa;this.oApi._fnFilterColumn=Pa;this.oApi._fnFilter=Oa;this.oApi._fnBuildSearchArray=oa;this.oApi._fnBuildSearchRow=ra;this.oApi._fnFilterCreateSearch=pa;this.oApi._fnDataToSearch=qa;this.oApi._fnSort=R;this.oApi._fnSortAttachListener=ja;this.oApi._fnSortingClasses=V;this.oApi._fnFeatureHtmlPaginate=La;this.oApi._fnPageChange=ma;this.oApi._fnFeatureHtmlInfo=Ka;this.oApi._fnUpdateInfo=
Ra;this.oApi._fnFeatureHtmlLength=Ga;this.oApi._fnFeatureHtmlProcessing=Ia;this.oApi._fnProcessingDisplay=K;this.oApi._fnVisibleToColumnIndex=Na;this.oApi._fnColumnIndexToVisible=ta;this.oApi._fnNodeToDataIndex=W;this.oApi._fnVisbleColumns=Z;this.oApi._fnCalculateEnd=E;this.oApi._fnConvertToWidth=Sa;this.oApi._fnCalculateColumnWidths=ga;this.oApi._fnScrollingWidthAdjust=Ua;this.oApi._fnGetWidestNode=Ta;this.oApi._fnGetMaxLenString=Va;this.oApi._fnStringToCss=q;this.oApi._fnArrayCmp=Za;this.oApi._fnDetectType=
ia;this.oApi._fnSettingsFromNode=A;this.oApi._fnGetDataMaster=ca;this.oApi._fnGetTrNodes=ba;this.oApi._fnGetTdNodes=Q;this.oApi._fnEscapeRegex=sa;this.oApi._fnDeleteIndex=ua;this.oApi._fnReOrderIndex=Fa;this.oApi._fnColumnOrdering=ka;this.oApi._fnLog=J;this.oApi._fnClearTable=la;this.oApi._fnSaveState=va;this.oApi._fnLoadState=Xa;this.oApi._fnCreateCookie=Wa;this.oApi._fnReadCookie=wa;this.oApi._fnDetectHeader=Y;this.oApi._fnGetUniqueThs=S;this.oApi._fnScrollBarWidth=Ya;this.oApi._fnApplyToChildren=
P;this.oApi._fnMap=o;this.oApi._fnGetRowData=fa;this.oApi._fnGetCellData=G;this.oApi._fnSetCellData=O;this.oApi._fnGetObjectDataFn=aa;this.oApi._fnSetObjectDataFn=Ba;var ya=this;return this.each(function(){var a=0,b,c,d,f;a=0;for(b=D.length;a<b;a++){if(D[a].nTable==this)if(typeof g=="undefined"||typeof g.bRetrieve!="undefined"&&g.bRetrieve===true)return D[a].oInstance;else if(typeof g.bDestroy!="undefined"&&g.bDestroy===true){D[a].oInstance.fnDestroy();break}else{J(D[a],0,"Cannot reinitialise DataTable.\n\nTo retrieve the DataTables object for this table, please pass either no arguments to the dataTable() function, or set bRetrieve to true. Alternatively, to destory the old table and create a new one, set bDestroy to true (note that a lot of changes to the configuration can be made through the API which is usually much faster).");
return}if(D[a].sTableId!==""&&D[a].sTableId==this.getAttribute("id")){D.splice(a,1);break}}var e=new l;D.push(e);var h=false,j=false;a=this.getAttribute("id");if(a!==null){e.sTableId=a;e.sInstance=a}else e.sInstance=n._oExternConfig.iNextUnique++;if(this.nodeName.toLowerCase()!="table")J(e,0,"Attempted to initialise DataTables on a node which is not a table: "+this.nodeName);else{e.nTable=this;e.oInstance=ya.length==1?ya:i(this).dataTable();e.oApi=ya.oApi;e.sDestroyWidth=i(this).width();if(typeof g!=
"undefined"&&g!==null){e.oInit=g;o(e.oFeatures,g,"bPaginate");o(e.oFeatures,g,"bLengthChange");o(e.oFeatures,g,"bFilter");o(e.oFeatures,g,"bSort");o(e.oFeatures,g,"bInfo");o(e.oFeatures,g,"bProcessing");o(e.oFeatures,g,"bAutoWidth");o(e.oFeatures,g,"bSortClasses");o(e.oFeatures,g,"bServerSide");o(e.oFeatures,g,"bDeferRender");o(e.oScroll,g,"sScrollX","sX");o(e.oScroll,g,"sScrollXInner","sXInner");o(e.oScroll,g,"sScrollY","sY");o(e.oScroll,g,"bScrollCollapse","bCollapse");o(e.oScroll,g,"bScrollInfinite",
"bInfinite");o(e.oScroll,g,"iScrollLoadGap","iLoadGap");o(e.oScroll,g,"bScrollAutoCss","bAutoCss");o(e,g,"asStripClasses","asStripeClasses");o(e,g,"asStripeClasses");o(e,g,"fnPreDrawCallback");o(e,g,"fnRowCallback");o(e,g,"fnHeaderCallback");o(e,g,"fnFooterCallback");o(e,g,"fnCookieCallback");o(e,g,"fnInitComplete");o(e,g,"fnServerData");o(e,g,"fnFormatNumber");o(e,g,"aaSorting");o(e,g,"aaSortingFixed");o(e,g,"aLengthMenu");o(e,g,"sPaginationType");o(e,g,"sAjaxSource");o(e,g,"sAjaxDataProp");o(e,
g,"iCookieDuration");o(e,g,"sCookiePrefix");o(e,g,"sDom");o(e,g,"bSortCellsTop");o(e,g,"oSearch","oPreviousSearch");o(e,g,"aoSearchCols","aoPreSearchCols");o(e,g,"iDisplayLength","_iDisplayLength");o(e,g,"bJQueryUI","bJUI");o(e.oLanguage,g,"fnInfoCallback");typeof g.fnDrawCallback=="function"&&e.aoDrawCallback.push({fn:g.fnDrawCallback,sName:"user"});typeof g.fnServerParams=="function"&&e.aoServerParams.push({fn:g.fnServerParams,sName:"user"});typeof g.fnStateSaveCallback=="function"&&e.aoStateSave.push({fn:g.fnStateSaveCallback,
sName:"user"});typeof g.fnStateLoadCallback=="function"&&e.aoStateLoad.push({fn:g.fnStateLoadCallback,sName:"user"});if(e.oFeatures.bServerSide&&e.oFeatures.bSort&&e.oFeatures.bSortClasses)e.aoDrawCallback.push({fn:V,sName:"server_side_sort_classes"});else e.oFeatures.bDeferRender&&e.aoDrawCallback.push({fn:V,sName:"defer_sort_classes"});if(typeof g.bJQueryUI!="undefined"&&g.bJQueryUI){e.oClasses=n.oJUIClasses;if(typeof g.sDom=="undefined")e.sDom='<"H"lfr>t<"F"ip>'}if(e.oScroll.sX!==""||e.oScroll.sY!==
"")e.oScroll.iBarWidth=Ya();if(typeof g.iDisplayStart!="undefined"&&typeof e.iInitDisplayStart=="undefined"){e.iInitDisplayStart=g.iDisplayStart;e._iDisplayStart=g.iDisplayStart}if(typeof g.bStateSave!="undefined"){e.oFeatures.bStateSave=g.bStateSave;Xa(e,g);e.aoDrawCallback.push({fn:va,sName:"state_save"})}if(typeof g.iDeferLoading!="undefined"){e.bDeferLoading=true;e._iRecordsTotal=g.iDeferLoading;e._iRecordsDisplay=g.iDeferLoading}if(typeof g.aaData!="undefined")j=true;if(typeof g!="undefined"&&
typeof g.aoData!="undefined")g.aoColumns=g.aoData;if(typeof g.oLanguage!="undefined")if(typeof g.oLanguage.sUrl!="undefined"&&g.oLanguage.sUrl!==""){e.oLanguage.sUrl=g.oLanguage.sUrl;i.getJSON(e.oLanguage.sUrl,null,function(u){y(e,u,true)});h=true}else y(e,g.oLanguage,false)}else g={};if(typeof g.asStripClasses=="undefined"&&typeof g.asStripeClasses=="undefined"){e.asStripeClasses.push(e.oClasses.sStripeOdd);e.asStripeClasses.push(e.oClasses.sStripeEven)}c=false;d=i(this).children("tbody").children("tr");
a=0;for(b=e.asStripeClasses.length;a<b;a++)if(d.filter(":lt(2)").hasClass(e.asStripeClasses[a])){c=true;break}if(c){e.asDestroyStripes=["",""];if(i(d[0]).hasClass(e.oClasses.sStripeOdd))e.asDestroyStripes[0]+=e.oClasses.sStripeOdd+" ";if(i(d[0]).hasClass(e.oClasses.sStripeEven))e.asDestroyStripes[0]+=e.oClasses.sStripeEven;if(i(d[1]).hasClass(e.oClasses.sStripeOdd))e.asDestroyStripes[1]+=e.oClasses.sStripeOdd+" ";if(i(d[1]).hasClass(e.oClasses.sStripeEven))e.asDestroyStripes[1]+=e.oClasses.sStripeEven;
d.removeClass(e.asStripeClasses.join(" "))}c=[];var k;a=this.getElementsByTagName("thead");if(a.length!==0){Y(e.aoHeader,a[0]);c=S(e)}if(typeof g.aoColumns=="undefined"){k=[];a=0;for(b=c.length;a<b;a++)k.push(null)}else k=g.aoColumns;a=0;for(b=k.length;a<b;a++){if(typeof g.saved_aoColumns!="undefined"&&g.saved_aoColumns.length==b){if(k[a]===null)k[a]={};k[a].bVisible=g.saved_aoColumns[a].bVisible}F(e,c?c[a]:null)}if(typeof g.aoColumnDefs!="undefined")for(a=g.aoColumnDefs.length-1;a>=0;a--){var m=
g.aoColumnDefs[a].aTargets;i.isArray(m)||J(e,1,"aTargets must be an array of targets, not a "+typeof m);c=0;for(d=m.length;c<d;c++)if(typeof m[c]=="number"&&m[c]>=0){for(;e.aoColumns.length<=m[c];)F(e);x(e,m[c],g.aoColumnDefs[a])}else if(typeof m[c]=="number"&&m[c]<0)x(e,e.aoColumns.length+m[c],g.aoColumnDefs[a]);else if(typeof m[c]=="string"){b=0;for(f=e.aoColumns.length;b<f;b++)if(m[c]=="_all"||i(e.aoColumns[b].nTh).hasClass(m[c]))x(e,b,g.aoColumnDefs[a])}}if(typeof k!="undefined"){a=0;for(b=k.length;a<
b;a++)x(e,a,k[a])}a=0;for(b=e.aaSorting.length;a<b;a++){if(e.aaSorting[a][0]>=e.aoColumns.length)e.aaSorting[a][0]=0;k=e.aoColumns[e.aaSorting[a][0]];if(typeof e.aaSorting[a][2]=="undefined")e.aaSorting[a][2]=0;if(typeof g.aaSorting=="undefined"&&typeof e.saved_aaSorting=="undefined")e.aaSorting[a][1]=k.asSorting[0];c=0;for(d=k.asSorting.length;c<d;c++)if(e.aaSorting[a][1]==k.asSorting[c]){e.aaSorting[a][2]=c;break}}V(e);a=i(this).children("thead");if(a.length===0){a=[p.createElement("thead")];this.appendChild(a[0])}e.nTHead=
a[0];a=i(this).children("tbody");if(a.length===0){a=[p.createElement("tbody")];this.appendChild(a[0])}e.nTBody=a[0];a=i(this).children("tfoot");if(a.length>0){e.nTFoot=a[0];Y(e.aoFooter,e.nTFoot)}if(j)for(a=0;a<g.aaData.length;a++)v(e,g.aaData[a]);else $(e);e.aiDisplay=e.aiDisplayMaster.slice();e.bInitialised=true;h===false&&t(e)}})}})(jQuery,window,document);

(function($){$.jGrowl=function(m,o){if($('#jGrowl').size()==0)
$('<div id="jGrowl"></div>').addClass((o&&o.position)?o.position:$.jGrowl.defaults.position).appendTo('body');$('#jGrowl').jGrowl(m,o);};$.fn.jGrowl=function(m,o){if($.isFunction(this.each)){var args=arguments;return this.each(function(){var self=this;if($(this).data('jGrowl.instance')==undefined){$(this).data('jGrowl.instance',$.extend(new $.fn.jGrowl(),{notifications:[],element:null,interval:null}));$(this).data('jGrowl.instance').startup(this);}
if($.isFunction($(this).data('jGrowl.instance')[m])){$(this).data('jGrowl.instance')[m].apply($(this).data('jGrowl.instance'),$.makeArray(args).slice(1));}else{$(this).data('jGrowl.instance').create(m,o);}});};};$.extend($.fn.jGrowl.prototype,{defaults:{pool:0,header:'',group:'',sticky:false,position:'top-right',glue:'after',theme:'default',themeState:'highlight',corners:'10px',check:250,life:3000,closeDuration:'normal',openDuration:'normal',easing:'swing',closer:true,closeTemplate:'&times;',closerTemplate:'<div>[ close all ]</div>',log:function(e,m,o){},beforeOpen:function(e,m,o){},afterOpen:function(e,m,o){},open:function(e,m,o){},beforeClose:function(e,m,o){},close:function(e,m,o){},animateOpen:{opacity:'show'},animateClose:{opacity:'hide'}},notifications:[],element:null,interval:null,create:function(message,o){var o=$.extend({},this.defaults,o);if(typeof o.speed!=='undefined'){o.openDuration=o.speed;o.closeDuration=o.speed;}
this.notifications.push({message:message,options:o});o.log.apply(this.element,[this.element,message,o]);},render:function(notification){var self=this;var message=notification.message;var o=notification.options;var notification=$('<div class="jGrowl-notification '+o.themeState+' ui-corner-all'+
((o.group!=undefined&&o.group!='')?' '+o.group:'')+'">'+'<div class="jGrowl-close">'+o.closeTemplate+'</div>'+'<div class="jGrowl-header">'+o.header+'</div>'+'<div class="jGrowl-message">'+message+'</div></div>').data("jGrowl",o).addClass(o.theme).children('div.jGrowl-close').bind("click.jGrowl",function(){$(this).parent().trigger('jGrowl.close');}).parent();$(notification).bind("mouseover.jGrowl",function(){$('div.jGrowl-notification',self.element).data("jGrowl.pause",true);}).bind("mouseout.jGrowl",function(){$('div.jGrowl-notification',self.element).data("jGrowl.pause",false);}).bind('jGrowl.beforeOpen',function(){if(o.beforeOpen.apply(notification,[notification,message,o,self.element])!=false){$(this).trigger('jGrowl.open');}}).bind('jGrowl.open',function(){if(o.open.apply(notification,[notification,message,o,self.element])!=false){if(o.glue=='after'){$('div.jGrowl-notification:last',self.element).after(notification);}else{$('div.jGrowl-notification:first',self.element).before(notification);}
$(this).animate(o.animateOpen,o.openDuration,o.easing,function(){if($.browser.msie&&(parseInt($(this).css('opacity'),10)===1||parseInt($(this).css('opacity'),10)===0))
this.style.removeAttribute('filter');if($(this).data("jGrowl")!=null)
$(this).data("jGrowl").created=new Date();$(this).trigger('jGrowl.afterOpen');});}}).bind('jGrowl.afterOpen',function(){o.afterOpen.apply(notification,[notification,message,o,self.element]);}).bind('jGrowl.beforeClose',function(){if(o.beforeClose.apply(notification,[notification,message,o,self.element])!=false)
$(this).trigger('jGrowl.close');}).bind('jGrowl.close',function(){$(this).data('jGrowl.pause',true);$(this).animate(o.animateClose,o.closeDuration,o.easing,function(){if($.isFunction(o.close)){if(o.close.apply(notification,[notification,message,o,self.element])!==false)
$(this).remove();}else{$(this).remove();}});}).trigger('jGrowl.beforeOpen');if(o.corners!=''&&$.fn.corner!=undefined)$(notification).corner(o.corners);if($('div.jGrowl-notification:parent',self.element).size()>1&&$('div.jGrowl-closer',self.element).size()==0&&this.defaults.closer!=false){$(this.defaults.closerTemplate).addClass('jGrowl-closer ui-state-highlight ui-corner-all').addClass(this.defaults.theme).appendTo(self.element).animate(this.defaults.animateOpen,this.defaults.speed,this.defaults.easing).bind("click.jGrowl",function(){$(this).siblings().trigger("jGrowl.beforeClose");if($.isFunction(self.defaults.closer)){self.defaults.closer.apply($(this).parent()[0],[$(this).parent()[0]]);}});};},update:function(){$(this.element).find('div.jGrowl-notification:parent').each(function(){if($(this).data("jGrowl")!=undefined&&$(this).data("jGrowl").created!=undefined&&($(this).data("jGrowl").created.getTime()+parseInt($(this).data("jGrowl").life))<(new Date()).getTime()&&$(this).data("jGrowl").sticky!=true&&($(this).data("jGrowl.pause")==undefined||$(this).data("jGrowl.pause")!=true)){$(this).trigger('jGrowl.beforeClose');}});if(this.notifications.length>0&&(this.defaults.pool==0||$(this.element).find('div.jGrowl-notification:parent').size()<this.defaults.pool))
this.render(this.notifications.shift());if($(this.element).find('div.jGrowl-notification:parent').size()<2){$(this.element).find('div.jGrowl-closer').animate(this.defaults.animateClose,this.defaults.speed,this.defaults.easing,function(){$(this).remove();});}},startup:function(e){this.element=$(e).addClass('jGrowl').append('<div class="jGrowl-notification"></div>');this.interval=setInterval(function(){$(e).data('jGrowl.instance').update();},parseInt(this.defaults.check));if($.browser.msie&&parseInt($.browser.version)<7&&!window["XMLHttpRequest"]){$(this.element).addClass('ie6');}},shutdown:function(){$(this.element).removeClass('jGrowl').find('div.jGrowl-notification').remove();clearInterval(this.interval);},close:function(){$(this.element).find('div.jGrowl-notification').each(function(){$(this).trigger('jGrowl.beforeClose');});}});$.jGrowl.defaults=$.fn.jGrowl.prototype.defaults;})(jQuery);
// jQuery Alert Dialogs Plugin
//
// Version 1.1
//
// Cory S.N. LaViska
// A Beautiful Site (http://abeautifulsite.net/)
// 14 May 2009
//
// Website: http://abeautifulsite.net/blog/2008/12/jquery-alert-dialogs/
//
// Usage:
//		jAlert( message, [title, callback] )
//		jConfirm( message, [title, callback] )
//		jPrompt( message, [value, title, callback] )
// 
// History:
//
//		1.00 - Released (29 December 2008)
//
//		1.01 - Fixed bug where unbinding would destroy all resize events
//
// License:
// 
// This plugin is dual-licensed under the GNU General Public License and the MIT License and
// is copyright 2008 A Beautiful Site, LLC. 
//
(function($) {
	
	$.alerts = {
		
		// These properties can be read/written by accessing $.alerts.propertyName from your scripts at any time
		
		verticalOffset: -75,                // vertical offset of the dialog from center screen, in pixels
		horizontalOffset: 0,                // horizontal offset of the dialog from center screen, in pixels/
		repositionOnResize: true,           // re-centers the dialog on window resize
		overlayOpacity: .01,                // transparency level of overlay
		overlayColor: '#FFF',               // base color of overlay
		draggable: true,                    // make the dialogs draggable (requires UI Draggables plugin)
		okButton: '&nbsp;OK&nbsp;',         // text for the OK button
		cancelButton: '&nbsp;Cancel&nbsp;', // text for the Cancel button
		dialogClass: null,                  // if specified, this class will be applied to all dialogs
		
		// Public methods
		
		alert: function(message, title, callback) {
			if( title == null ) title = 'Alert';
			$.alerts._show(title, message, null, 'alert', function(result) {
				if( callback ) callback(result);
			});
		},
		
		confirm: function(message, title, callback) {
			if( title == null ) title = 'Confirm';
			$.alerts._show(title, message, null, 'confirm', function(result) {
				if( callback ) callback(result);
			});
		},
			
		prompt: function(message, value, title, callback) {
			if( title == null ) title = 'Prompt';
			$.alerts._show(title, message, value, 'prompt', function(result) {
				if( callback ) callback(result);
			});
		},
		
		// Private methods
		
		_show: function(title, msg, value, type, callback) {
			
			$.alerts._hide();
			$.alerts._overlay('show');
			
			$("BODY").append(
			  '<div id="popup_container">' +
			    '<h1 id="popup_title"></h1>' +
			    '<div id="popup_content">' +
			      '<div id="popup_message"></div>' +
				'</div>' +
			  '</div>');
			
			if( $.alerts.dialogClass ) $("#popup_container").addClass($.alerts.dialogClass);
			
			// IE6 Fix
			var pos = ($.browser.msie && parseInt($.browser.version) <= 6 ) ? 'absolute' : 'fixed'; 
			
			$("#popup_container").css({
				position: pos,
				zIndex: 99999,
				padding: 0,
				margin: 0
			});
			
			$("#popup_title").text(title);
			$("#popup_content").addClass(type);
			$("#popup_message").text(msg);
			$("#popup_message").html( $("#popup_message").text().replace(/\n/g, '<br />') );
			
			$("#popup_container").css({
				minWidth: $("#popup_container").outerWidth(),
				maxWidth: $("#popup_container").outerWidth()
			});
			
			$.alerts._reposition();
			$.alerts._maintainPosition(true);
			
			switch( type ) {
				case 'alert':
					$("#popup_message").after('<div id="popup_panel"><input type="button" class="button-a gray" value="' + $.alerts.okButton + '" id="popup_ok" /></div>');
					$("#popup_ok").click( function() {
						$.alerts._hide();
						callback(true);
					});
					$("#popup_ok").focus().keypress( function(e) {
						if( e.keyCode == 13 || e.keyCode == 27 ) $("#popup_ok").trigger('click');
					});
				break;
				case 'confirm':
					$("#popup_message").after('<div id="popup_panel"><input type="button" class="button-a gray" value="' + $.alerts.okButton + '" id="popup_ok" /> <input type="button" class="button-a blue" value="' + $.alerts.cancelButton + '" id="popup_cancel" /></div>');
					$("#popup_ok").click( function() {
						$.alerts._hide();
						if( callback ) callback(true);
					});
					$("#popup_cancel").click( function() {
						$.alerts._hide();
						if( callback ) callback(false);
					});
					$("#popup_ok").focus();
					$("#popup_ok, #popup_cancel").keypress( function(e) {
						if( e.keyCode == 13 ) $("#popup_ok").trigger('click');
						if( e.keyCode == 27 ) $("#popup_cancel").trigger('click');
					});
				break;
				case 'prompt':
					$("#popup_message").append('<br /><input type="text" id="popup_prompt" class="promt_input " />').after('<div id="popup_panel"><input type="button" class="button-a gray" value="' + $.alerts.okButton + '" id="popup_ok" /> <input type="button" class="button-a blue" value="' + $.alerts.cancelButton + '" id="popup_cancel" /></div>');
					$("#popup_prompt").width( $("#popup_message").width() );
					$("#popup_ok").click( function() {
						var val = $("#popup_prompt").val();
						$.alerts._hide();
						if( callback ) callback( val );
					});
					$("#popup_cancel").click( function() {
						$.alerts._hide();
						if( callback ) callback( null );
					});
					$("#popup_prompt, #popup_ok, #popup_cancel").keypress( function(e) {
						if( e.keyCode == 13 ) $("#popup_ok").trigger('click');
						if( e.keyCode == 27 ) $("#popup_cancel").trigger('click');
					});
					if( value ) $("#popup_prompt").val(value);
					$("#popup_prompt").focus().select();
				break;
			}
			
			// Make draggable
			if( $.alerts.draggable ) {
				try {
					$("#popup_container").draggable({ handle: $("#popup_title") });
					$("#popup_title").css({ cursor: 'move' });
				} catch(e) { /* requires jQuery UI draggables */ }
			}
		},
		
		_hide: function() {
			$("#popup_container").remove();
			$.alerts._overlay('hide');
			$.alerts._maintainPosition(false);
		},
		
		_overlay: function(status) {
			switch( status ) {
				case 'show':
					$.alerts._overlay('hide');
					$("BODY").append('<div id="popup_overlay"></div>');
					$("#popup_overlay").css({
						position: 'absolute',
						zIndex: 99998,
						top: '0px',
						left: '0px',
						width: '100%',
						height: $(document).height(),
						background: $.alerts.overlayColor,
						opacity: $.alerts.overlayOpacity
					});
				break;
				case 'hide':
					$("#popup_overlay").remove();
				break;
			}
		},
		
		_reposition: function() {
			var top = (($(window).height() / 2) - ($("#popup_container").outerHeight() / 2)) + $.alerts.verticalOffset;
			var left = (($(window).width() / 2) - ($("#popup_container").outerWidth() / 2)) + $.alerts.horizontalOffset;
			if( top < 0 ) top = 0;
			if( left < 0 ) left = 0;
			
			// IE6 fix
			if( $.browser.msie && parseInt($.browser.version) <= 6 ) top = top + $(window).scrollTop();
			
			$("#popup_container").css({
				top: top + 'px',
				left: left + 'px'
			});
			$("#popup_overlay").height( $(document).height() );
		},
		
		_maintainPosition: function(status) {
			if( $.alerts.repositionOnResize ) {
				switch(status) {
					case true:
						$(window).bind('resize', $.alerts._reposition);
					break;
					case false:
						$(window).unbind('resize', $.alerts._reposition);
					break;
				}
			}
		}
		
	}
	
	// Shortuct functions
	jAlert = function(message, title, callback) {
		$.alerts.alert(message, title, callback);
	}
	
	jConfirm = function(message, title, callback) {
		$.alerts.confirm(message, title, callback);
	};
		
	jPrompt = function(message, value, title, callback) {
		$.alerts.prompt(message, value, title, callback);
	};
	
})(jQuery);
/*
 *  SliderNav - A Simple Content Slider with a Navigation Bar
 *  Copyright 2010 Monjurul Dolon, http://mdolon.com/
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://devgrow.com/slidernav
 */
$.fn.sliderNav=function(options){var defaults={items:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],debug:false,height:null,arrows:true};var opts=$.extend(defaults,options);var o=$.meta?$.extend({},opts,$$.data()):opts;var slider=$(this);$(slider).addClass('slider');$('.slider-content li:first',slider).addClass('selected');$(slider).append('<div class="slider-nav"><ul></ul></div>');for(var i in o.items)$('.slider-nav ul',slider).append("<li><a alt='#"+o.items[i]+"'>"+o.items[i]+"</a></li>");var height=$('.slider-nav',slider).height();if(o.height)height=o.height;$('.slider-content, .slider-nav',slider).css('height',height);if(o.debug)$(slider).append('<div id="debug">Scroll Offset: <span>0</span></div>');$('.slider-nav a',slider).mouseover(function(event){var target=$(this).attr('alt');var cOffset=$('.slider-content',slider).offset().top;var tOffset=$('.slider-content '+target,slider).offset().top;var height=$('.slider-nav',slider).height();if(o.height)height=o.height;var pScroll=(tOffset-cOffset)-height/8;$('.slider-content li',slider).removeClass('selected');$(target).addClass('selected');$('.slider-content',slider).stop().animate({scrollTop:'+='+pScroll+'px'});if(o.debug)$('#debug span',slider).html(tOffset);});if(o.arrows){$('.slider-nav',slider).css('top','20px');$(slider).prepend('<div class="slide-up end"><span class="arrow-sl up-sl"></span></div>');$(slider).append('<div class="slide-down"><span class="arrow-sl down-sl"></span></div>');$('.slide-down',slider).click(function(){$('.slider-content',slider).animate({scrollTop:"+="+height+"px"},500);});$('.slide-up',slider).click(function(){$('.slider-content',slider).animate({scrollTop:"-="+height+"px"},500);});}};
/* Created by jankoatwarpspeed.com */

(function($) {
    $.fn.formToWizard = function(options) {
        options = $.extend({  
            submitButton: "" 
        }, options); 
        
        var element = this;

        var steps = $(element).find("fieldset");
        var count = steps.size();
        var submmitButtonName = "#" + options.submitButton;
        $(submmitButtonName).hide();

        // 2
        $(element).before("<ul id='steps'></ul>");

        steps.each(function(i) {
            $(this).wrap("<div id='step" + i + "'></div>");
            $(this).append("<p id='step" + i + "commands'></p>");

            // 2
            var name = $(this).find("legend").html();
            $("#steps").append("<li id='stepDesc" + i + "'>Step " + (i + 1) + "<span>" + name + "</span></li>");

            if (i == 0) {
                createNextButton(i);
                selectStep(i);
            }
            else if (i == count - 1) {
                $("#step" + i).hide();
                createPrevButton(i);
            }
            else {
                $("#step" + i).hide();
                createPrevButton(i);
                createNextButton(i);
            }
        });

        function createPrevButton(i) {
            var stepName = "step" + i;
            $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Prev' class='prev-step button-a blue'><span>< Back</span></a>");

            $("#" + stepName + "Prev").bind("click", function(e) {
                $("#" + stepName).hide();
                $("#step" + (i - 1)).show();
                $(submmitButtonName).hide();
                selectStep(i - 1);
            });
        }

        function createNextButton(i) {
            var stepName = "step" + i;
            $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Next' class='next-step button-a blue'><span>Next ></span></a>");

            $("#" + stepName + "Next").bind("click", function(e) {
                $("#" + stepName).hide();
                $("#step" + (i + 1)).show();
                if (i + 2 == count)
                    $(submmitButtonName).show();
                selectStep(i + 1);
            });
        }

        function selectStep(i) {
            $("#steps li").removeClass("current");
            $("#stepDesc" + i).addClass("current");
        }

    }
})(jQuery); 
/*
 * Inline Form Validation Engine 2.1, jQuery plugin
 *
 * Copyright(c) 2010, Cedric Dugas
 * http://www.position-absolute.com
 *
 * 2.0 Rewrite by Olivier Refalo
 * http://www.crionics.com
 *
 * Form validation engine allowing custom regex rules to be added.
 * Licensed under the MIT License
 */
(function($) {

    var methods = {

        /**
         * Kind of the constructor, called before any action
         * @param {Map} user options
         */
        init: function(options) {
            var form = this;
            if (!form.data('jqv') || form.data('jqv') == null ) {
                methods._saveOptions(form, options);

                // bind all formError elements to close on click
                $(".formError").live("click", function() {
                    $(this).fadeOut(150, function() {

                        // remove prompt once invisible
                        $(this).remove();
                    });
                });
            }
        },
        /**
         * Attachs jQuery.validationEngine to form.submit and field.blur events
         * Takes an optional params: a list of options
         * ie. jQuery("#formID1").validationEngine('attach', {promptPosition : "centerRight"});
         */
        attach: function(userOptions) {
            var form = this;
            var options;

            if(userOptions)
                options = methods._saveOptions(form, userOptions);
            else
                options = form.data('jqv');

            if (!options.binded) {
					if (options.bindMethod == "bind"){
                        // bind fields
                        form.find("[class*=validate]:not([type=checkbox])").bind(options.validationEventTrigger, methods._onFieldEvent);
                        form.find("[class*=validate][type=checkbox]").bind("click", methods._onFieldEvent);

                        // bind form.submit
                        form.bind("submit", methods._onSubmitEvent);
					} else if (options.bindMethod == "live") {
                        // bind fields with LIVE (for persistant state)
                        form.find("[class*=validate]:not([type=checkbox])").live(options.validationEventTrigger, methods._onFieldEvent);
                        form.find("[class*=validate][type=checkbox]").live("click", methods._onFieldEvent);

                        // bind form.submit
                        form.live("submit", methods._onSubmitEvent);
					}

                options.binded = true;
            }

        },
        /**
         * Unregisters any bindings that may point to jQuery.validaitonEngine
         */
        detach: function() {
            var form = this;
            var options = form.data('jqv');
            if (options.binded) {

                // unbind fields
                form.find("[class*=validate]").not("[type=checkbox]").unbind(options.validationEventTrigger, methods._onFieldEvent);
                form.find("[class*=validate][type=checkbox]").unbind("click", methods._onFieldEvent);
                // unbind form.submit
                form.unbind("submit", methods.onAjaxFormComplete);
                
               
                // unbind live fields (kill)
                form.find("[class*=validate]").not("[type=checkbox]").die(options.validationEventTrigger, methods._onFieldEvent);
                form.find("[class*=validate][type=checkbox]").die("click", methods._onFieldEvent);
                // unbind form.submit
                form.die("submit", methods.onAjaxFormComplete);
                
                form.removeData('jqv');
            }
        },
        /**
         * Validates the form fields, shows prompts accordingly.
         * Note: There is no ajax form validation with this method, only field ajax validation are evaluated
         *
         * @return true if the form validates, false if it fails
         */
        validate: function() {
            return methods._validateFields(this);
        },
        /**
         * Validates one field, shows prompt accordingly.
         * Note: There is no ajax form validation with this method, only field ajax validation are evaluated
         *
         * @return true if the form validates, false if it fails
         */
        validateField: function(el) {
            var options = $(this).data('jqv');
            return methods._validateField($(el), options);
        },
        /**
         * Validates the form fields, shows prompts accordingly.
         * Note: this methods performs fields and form ajax validations(if setup)
         *
         * @return true if the form validates, false if it fails, undefined if ajax is used for form validation
         */
        validateform: function() {
            return methods._onSubmitEvent.call(this);
        },
        /**
         * Displays a prompt on a element.
         * Note that the element needs an id!
         *
         * @param {String} promptText html text to display type
         * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
         * @param {String} possible values topLeft, topRight, bottomLeft, centerRight, bottomRight
         */
        showPrompt: function(promptText, type, promptPosition, showArrow) {

            var form = this.closest('form');
            var options = form.data('jqv');
            // No option, take default one
			if(!options) options = methods._saveOptions(this, options);
            if(promptPosition)
                options.promptPosition=promptPosition;
            options.showArrow = showArrow==true;

            methods._showPrompt(this, promptText, type, false, options);
        },
        /**
         * Closes all error prompts on the page
         */
        hidePrompt: function() {
        		var promptClass =  "."+ methods._getClassName($(this).attr("id")) + "formError"
            $(promptClass).fadeTo("fast", 0.3, function() {
                $(this).remove();
            });
        },
        /**
         * Closes form error prompts, CAN be invidual
         */
        hide: function() {
        	if($(this).is("form")){
        		 var closingtag = "parentForm"+$(this).attr('id');
        	}else{
        		
        		var closingtag = $(this).attr('id') +"formError"
        	}
            $('.'+closingtag).fadeTo("fast", 0.3, function() {
                $(this).remove();
            });
        },
        /**
         * Closes all error prompts on the page
         */
        hideAll: function() {
            $('.formError').fadeTo("fast", 0.3, function() {
                $(this).remove();
            });
        },
        /**
         * Typically called when user exists a field using tab or a mouse click, triggers a field
         * validation
         */
        _onFieldEvent: function() {
            var field = $(this);
            var form = field.closest('form');
            var options = form.data('jqv');
            // validate the current field
            methods._validateField(field, options);
        },
        /**
         * Called when the form is submited, shows prompts accordingly
         *
         * @param {jqObject}
         *            form
         * @return false if form submission needs to be cancelled
         */
        _onSubmitEvent: function() {
            var form = $(this);
 			var options = form.data('jqv');
   
			// validate each field (- skip field ajax validation, no necessary since we will perform an ajax form validation)
            var r=methods._validateFields(form, true);
		
            if (r && options.ajaxFormValidation) {
                methods._validateFormWithAjax(form, options);
                return false;
            }

            if(options.onValidationComplete) {
                options.onValidationComplete(form, r);
                return false;
            }
            return r;
        },

        /**
         * Return true if the ajax field validations passed so far
         * @param {Object} options
         * @return true, is all ajax validation passed so far (remember ajax is async)
         */
        _checkAjaxStatus: function(options) {
            var status = true;
            $.each(options.ajaxValidCache, function(key, value) {
                if (!value) {
                    status = false;
                    // break the each
                    return false;
                }
            });
            return status;
        },
        /**
         * Validates form fields, shows prompts accordingly
         *
         * @param {jqObject}
         *            form
         * @param {skipAjaxFieldValidation}
         *            boolean - when set to true, ajax field validation is skipped, typically used when the submit button is clicked
         *
         * @return true if form is valid, false if not, undefined if ajax form validation is done
         */
        _validateFields: function(form, skipAjaxValidation) {
            var options = form.data('jqv');

            // this variable is set to true if an error is found
            var errorFound = false;
			
			// Trigger hook, start validation
			form.trigger("jqv.form.validating")
            // first, evaluate status of non ajax fields
            form.find('[class*=validate]').not(':hidden').each( function() {
                var field = $(this);
                errorFound |= methods._validateField(field, options, skipAjaxValidation);
            });
            // second, check to see if all ajax calls completed ok
            // errorFound |= !methods._checkAjaxStatus(options);
			
            // thrird, check status and scroll the container accordingly
			form.trigger("jqv.form.result", [errorFound])
			
            if (errorFound) {
				
                if (options.scroll) {

                    // get the position of the first error, there should be at least one, no need to check this
                    //var destination = form.find(".formError:not('.greenPopup'):first").offset().top;

                    // look for the visually top prompt
                    var destination = Number.MAX_VALUE;

                    var lst = $(".formError:not('.greenPopup')");
                    for (var i = 0; i < lst.length; i++) {
                        var d = $(lst[i]).offset().top;
                        if (d < destination)
                            destination = d;
                    }

                    if (!options.isOverflown)
                        $("html:not(:animated),body:not(:animated)").animate({
                            scrollTop: destination
                        }, 1100);
                    else {
                        var overflowDIV = $(options.overflownDIV);
                        var scrollContainerScroll = overflowDIV.scrollTop();
                        var scrollContainerPos = -parseInt(overflowDIV.offset().top);

                        destination += scrollContainerScroll + scrollContainerPos - 5;
                        var scrollContainer = $(options.overflownDIV + ":not(:animated)");

                        scrollContainer.animate({
                            scrollTop: destination
                        }, 1100);
                    }
                }
                return false;
            }
            return true;
        },
        /**
         * This method is called to perform an ajax form validation.
         * During this process all the (field, value) pairs are sent to the server which returns a list of invalid fields or true
         *
         * @param {jqObject} form
         * @param {Map} options
         */
        _validateFormWithAjax: function(form, options) {

            var data = form.serialize();
			var url = (options.ajaxFormValidationURL) ? options.ajaxFormValidationURL : form.attr("action");
            $.ajax({
                type: "GET",
                url: url,
                cache: false,
                dataType: "json",
                data: data,
                form: form,
                methods: methods,
                options: options,
                beforeSend: function() {
                    return options.onBeforeAjaxFormValidation(form, options);
                },
                error: function(data, transport) {
                    methods._ajaxError(data, transport);
                },
                success: function(json) {

                    if (json !== true) {

                        // getting to this case doesn't necessary means that the form is invalid
                        // the server may return green or closing prompt actions
                        // this flag helps figuring it out
                        var errorInForm=false;
                        for (var i = 0; i < json.length; i++) {
                            var value = json[i];
						
                            var errorFieldId = value[0];
                            var errorField = $($("#" + errorFieldId)[0]);
							
                            // make sure we found the element
                            if (errorField.length == 1) {
								
                                // promptText or selector
                                var msg = value[2];
								// if the field is valid
                                if (value[1] == true) {

                                    if (msg == ""  || !msg){
                                        // if for some reason, status==true and error="", just close the prompt
                                        methods._closePrompt(errorField);
                                    } else {
                                        // the field is valid, but we are displaying a green prompt
                                        if (options.allrules[msg]) {
                                            var txt = options.allrules[msg].alertTextOk;
                                            if (txt)
                                                msg = txt;
                                        }
                                        methods._showPrompt(errorField, msg, "pass", false, options, true);
                                    }

                                } else {
                                    // the field is invalid, show the red error prompt
                                    errorInForm|=true;
                                    if (options.allrules[msg]) {
                                        var txt = options.allrules[msg].alertText;
                                        if (txt)
                                            msg = txt;
                                    }
                                    methods._showPrompt(errorField, msg, "", false, options, true);
                                }
                            }
                        }
                        options.onAjaxFormComplete(!errorInForm, form, json, options);
                    } else
                        options.onAjaxFormComplete(true, form, "", options);
                }
            });

        },
        /**
         * Validates field, shows prompts accordingly
         *
         * @param {jqObject}
         *            field
         * @param {Array[String]}
         *            field's validation rules
         * @param {Map}
         *            user options
         * @return true if field is valid
         */
        _validateField: function(field, options, skipAjaxValidation) {
            if (!field.attr("id"))
                $.error("jQueryValidate: an ID attribute is required for this field: " + field.attr("name") + " class:" +
                field.attr("class"));

            var rulesParsing = field.attr('class');
            var getRules = /validate\[(.*)\]/.exec(rulesParsing);
            if (!getRules)
                return false;
            var str = getRules[1];
            var rules = str.split(/\[|,|\]/);

            // true if we ran the ajax validation, tells the logic to stop messing with prompts
            var isAjaxValidator = false;
            var fieldName = field.attr("name");
            var promptText = "";
			var required = false;
            options.isError = false;
            options.showArrow = true;
            optional = false;

            for (var i = 0; i < rules.length; i++) {

                var errorMsg = undefined;
                switch (rules[i]) {

                    case "optional":
                        optional = true;
                        break;
                    case "required":
                        required = true;
                        errorMsg = methods._required(field, rules, i, options);
                        break;
                    case "custom":
                        errorMsg = methods._customRegex(field, rules, i, options);
                        break;
                    case "ajax":
                        // ajax has its own prompts handling technique
						if(!skipAjaxValidation){
							methods._ajax(field, rules, i, options);
	                        isAjaxValidator = true;
						}
                        break;
                    case "minSize":
                        errorMsg = methods._minSize(field, rules, i, options);
                        break;
                    case "maxSize":
                        errorMsg = methods._maxSize(field, rules, i, options);
                        break;
                    case "min":
                        errorMsg = methods._min(field, rules, i, options);
                        break;
                    case "max":
                        errorMsg = methods._max(field, rules, i, options);
                        break;
                    case "past":
                        errorMsg = methods._past(field, rules, i, options);
                        break;
                    case "future":
                        errorMsg = methods._future(field, rules, i, options);
                        break;
                    case "maxCheckbox":
                        errorMsg = methods._maxCheckbox(field, rules, i, options);
                        field = $($("input[name='" + fieldName + "']"));
                        break;
                    case "minCheckbox":
                        errorMsg = methods._minCheckbox(field, rules, i, options);
                        field = $($("input[name='" + fieldName + "']"));
                        break;
                    case "equals":
                        errorMsg = methods._equals(field, rules, i, options);
                        break;
                    case "funcCall":
                        errorMsg = methods._funcCall(field, rules, i, options);
                        break;

                    default:
                    //$.error("jQueryValidator rule not found"+rules[i]);
                }
                if (errorMsg !== undefined) {
                    promptText += errorMsg + "<br/>";
                    options.isError = true;
					
                }

            }
            // If the rules required is not added, an empty field is not validated
            if(!required){
            	if(field.val() == "") options.isError = false;
            }
            // Hack for radio/checkbox group button, the validation go into the
            // first radio/checkbox of the group
            var fieldType = field.attr("type");

            if ((fieldType == "radio" || fieldType == "checkbox") && $("input[name='" + fieldName + "']").size() > 1) {
                field = $($("input[name='" + fieldName + "'][type!=hidden]:first"));
                options.showArrow = false;
            }

            if (options.isError){
				
                methods._showPrompt(field, promptText, "", false, options);
            }else{
				if (!isAjaxValidator) methods._closePrompt(field);
			}
			field.closest('form').trigger("jqv.field.error", [field, options.isError, promptText])
            return options.isError;
        },
        /**
         * Required validation
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _required: function(field, rules, i, options) {
            switch (field.attr("type")) {
                case "text":
                case "password":
                case "textarea":
                case "file":
                default:
                    if (!field.val())
                        return options.allrules[rules[i]].alertText;
                    break;
                case "radio":
                case "checkbox":
                    var name = field.attr("name");
                    if ($("input[name='" + name + "']:checked").size() == 0) {

                        if ($("input[name='" + name + "']").size() == 1)
                            return options.allrules[rules[i]].alertTextCheckboxe;
                        else
                            return options.allrules[rules[i]].alertTextCheckboxMultiple;
                    }
                    break;
                // required for <select>
                case "select-one":
                    // added by paul@kinetek.net for select boxes, Thank you
                    if (!field.val())
                        return options.allrules[rules[i]].alertText;
                    break;
                case "select-multiple":
                    // added by paul@kinetek.net for select boxes, Thank you
                    if (!field.find("option:selected").val())
                        return options.allrules[rules[i]].alertText;
                    break;
            }
        },
        /**
         * Validate Regex rules
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _customRegex: function(field, rules, i, options) {
            var customRule = rules[i + 1];
			var rule = options.allrules[customRule];
			if(!rule) {
				alert("jqv:custom rule not found "+customRule);
				return;
			}
			
			var ex=rule.regex;
			if(!ex) {
				alert("jqv:custom regex not found "+customRule);
				return;
			}
            var pattern = new RegExp(ex);

            if (!pattern.test(field.attr('value')))
                return options.allrules[customRule].alertText;
        },
        /**
         * Validate custom function outside of the engine scope
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _funcCall: function(field, rules, i, options) {
            var functionName = rules[i + 1];
            var fn = window[functionName];
            if (typeof(fn) == 'function')
                return fn(field, rules, i, options);

        },
        /**
         * Field match
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _equals: function(field, rules, i, options) {
            var equalsField = rules[i + 1];

            if (field.attr('value') != $("#" + equalsField).attr('value'))
                return options.allrules.equals.alertText;
        },
        /**
         * Check the maximum size (in characters)
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _maxSize: function(field, rules, i, options) {
            var max = rules[i + 1];
            var len = field.attr('value').length;

            if (len > max) {
                var rule = options.allrules.maxSize;
                return rule.alertText + max + rule.alertText2;
            }
        },
        /**
         * Check the minimum size (in characters)
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _minSize: function(field, rules, i, options) {
            var min = rules[i + 1];
            var len = field.attr('value').length;

            if (len < min) {
                var rule = options.allrules.minSize;
                return rule.alertText + min + rule.alertText2;
            }
        },
        /**
         * Check number minimum value
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _min: function(field, rules, i, options) {
            var min = parseFloat(rules[i + 1]);
            var len = parseFloat(field.attr('value'));

            if (len < min) {
                var rule = options.allrules.min;
                if (rule.alertText2) return rule.alertText + min + rule.alertText2;
                return rule.alertText + min;
            }
        },
        /**
         * Check number maximum value
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _max: function(field, rules, i, options) {
            var max = parseFloat(rules[i + 1]);
            var len = parseFloat(field.attr('value'));

            if (len >max ) {
                var rule = options.allrules.max;
                if (rule.alertText2) return rule.alertText + max + rule.alertText2;
                //orefalo: to review, also do the translations
                return rule.alertText + max;
            }
        },
        /**
         * Checks date is in the past
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _past: function(field, rules, i, options) {

            var p=rules[i + 1];
            var pdate = (p.toLowerCase() == "now")? new Date():methods._parseDate(p);
            var vdate = methods._parseDate(field.attr('value'));

            if (vdate > pdate ) {
                var rule = options.allrules.past;
                if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
                return rule.alertText + methods._dateToString(pdate);
            }
        },
        /**
         * Checks date is in the past
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _future: function(field, rules, i, options) {

            var p=rules[i + 1];
            var pdate = (p.toLowerCase() == "now")? new Date():methods._parseDate(p);
            var vdate = methods._parseDate(field.attr('value'));

            if (vdate < pdate ) {
                var rule = options.allrules.future;
                if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
                return rule.alertText + methods._dateToString(pdate);
            }
        },
        /**
         * Max number of checkbox selected
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _maxCheckbox: function(field, rules, i, options) {

            var nbCheck = rules[i + 1];
            var groupname = field.attr("name");
            var groupSize = $("input[name='" + groupname + "']:checked").size();
            if (groupSize > nbCheck) {
                options.showArrow = false;
                return options.allrules.maxCheckbox.alertText;
            }
        },
        /**
         * Min number of checkbox selected
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _minCheckbox: function(field, rules, i, options) {

            var nbCheck = rules[i + 1];
            var groupname = field.attr("name");
            var groupSize = $("input[name='" + groupname + "']:checked").size();
            if (groupSize < nbCheck) {
                options.showArrow = false;
                return options.allrules.minCheckbox.alertText + " " + nbCheck + " " +
                options.allrules.minCheckbox.alertText2;
            }
        },
        /**
         * Ajax field validation
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return nothing! the ajax validator handles the prompts itself
         */
        _ajax: function(field, rules, i, options) {
			
			
            var errorSelector = rules[i + 1];
            var rule = options.allrules[errorSelector];
            var extraData = rule.extraData;

            if (!extraData)
                extraData = "";

            if (!options.isError) {
                $.ajax({
                    type: "GET",
                    url: rule.url,
                    cache: false,
                    dataType: "json",
                    data: "fieldId=" + field.attr("id") + "&fieldValue=" + field.attr("value") + "&extraData=" + extraData,
                    field: field,
                    rule: rule,
                    methods: methods,
                    options: options,
                    beforeSend: function() {
                        // build the loading prompt
                        var loadingText = rule.alertTextLoad;
                        if (loadingText)
                            methods._showPrompt(field, loadingText, "load", true, options);
                    },
                    error: function(data, transport) {
                        methods._ajaxError(data, transport);
                    },
                    success: function(json) {
						
                        // asynchronously called on success, data is the json answer from the server
                        var errorFieldId = json[0];
                        var errorField = $($("#" + errorFieldId)[0]);
                        // make sure we found the element
                        if (errorField.length == 1) {
                            var status = json[1];
                            if (!status) {
                                // Houston we got a problem
                                options.ajaxValidCache[errorFieldId] = false;
                                options.isError = true;
                                var promptText = rule.alertText;
                                methods._showPrompt(errorField, promptText, "", true, options);
                            } else {
                                if (options.ajaxValidCache[errorFieldId] !== undefined)
                                    options.ajaxValidCache[errorFieldId] = true;

                                // see if we should display a green prompt
                                var alertTextOk = rule.alertTextOk;
                                if (alertTextOk)
                                    methods._showPrompt(errorField, alertTextOk, "pass", true, options);
                                else
                                    methods._closePrompt(errorField);
                            }
                        }
                    }
                });
            }
        },
        /**
         * Common method to handle ajax errors
         *
         * @param {Object} data
         * @param {Object} transport
         */
        _ajaxError: function(data, transport) {
            if(data.status == 0 && transport == null)
                alert("The page is not served from a server! ajax call failed");
            else if(typeof console != "undefined")
                console.log("Ajax error: " + data.status + " " + transport);
        },
        /**
         * date -> string
         *
         * @param {Object} date
         */
        _dateToString: function(date) {

            return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        },
        /**
         * Parses an ISO date
         * @param {String} d
         */
        _parseDate: function(d) {

            var dateParts = d.split("-");
            if(dateParts!==d)
                dateParts = d.split("/");
            return new Date(dateParts[0], (dateParts[1] - 1) ,dateParts[2]);
        },
        /**
         * Builds or updates a prompt with the given information
         *
         * @param {jqObject} field
         * @param {String} promptText html text to display type
         * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
         * @param {boolean} ajaxed - use to mark fields than being validated with ajax
         * @param {Map} options user options
         */
        _showPrompt: function(field, promptText, type, ajaxed, options, ajaxform) {
            var prompt = methods._getPrompt(field);
			// The ajax submit errors are not see has an error in the form,
			// When the form errors are returned, the engine see 2 bubbles, but those are ebing closed by the engine at the same time
			// Because no error was found befor submitting
			if(ajaxform) prompt = false;
            if (prompt)
                methods._updatePrompt(field, prompt, promptText, type, ajaxed, options);
            else
                methods._buildPrompt(field, promptText, type, ajaxed, options);
        },
        /**
         * Builds and shades a prompt for the given field.
         *
         * @param {jqObject} field
         * @param {String} promptText html text to display type
         * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
         * @param {boolean} ajaxed - use to mark fields than being validated with ajax
         * @param {Map} options user options
         */
        _buildPrompt: function(field, promptText, type, ajaxed, options) {

            // create the prompt
            var prompt = $('<div>');
            prompt.addClass(methods._getClassName(field.attr("id")) + "formError");
            // add a class name to identify the parent form of the prompt
            if(field.is(":input")) prompt.addClass("parentForm"+methods._getClassName(field.parents('form').attr("id")));
            prompt.addClass("formError");

            switch (type) {
                case "pass":
                    prompt.addClass("greenPopup");
                    break;
                case "load":
                    prompt.addClass("blackPopup");
            }
            if (ajaxed)
                prompt.addClass("ajaxed");

            // create the prompt content
            var promptContent = $('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt);
            // create the css arrow pointing at the field
            // note that there is no triangle on max-checkbox and radio
            if (options.showArrow) {
                var arrow = $('<div>').addClass("formErrorArrow");

                switch (options.promptPosition) {
                    case "bottomLeft":
                    case "bottomRight":
                        prompt.find(".formErrorContent").before(arrow);
                        arrow.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');
                        break;
                    case "topLeft":
                    case "topRight":
                        arrow.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
                        prompt.append(arrow);
                        break;
                }
            }

            //Cedric: Needed if a container is in position:relative
            // insert prompt in the form or in the overflown container?
            if (options.isOverflown)
            	field.before(prompt);
            else
               $("body").append(prompt);

            var pos = methods._calculatePosition(field, prompt, options);
            prompt.css({
                "top": pos.callerTopPosition,
                "left": pos.callerleftPosition,
                "marginTop": pos.marginTopSize,
                "opacity": 0
            });

            return prompt.animate({
                "opacity": 0.87
            });

        },
        /**
         * Updates the prompt text field - the field for which the prompt
         * @param {jqObject} field
         * @param {String} promptText html text to display type
         * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
         * @param {boolean} ajaxed - use to mark fields than being validated with ajax
         * @param {Map} options user options
         */
        _updatePrompt: function(field, prompt, promptText, type, ajaxed, options) {
			
            if (prompt) {
                if (type == "pass")
                    prompt.addClass("greenPopup");
                else
                    prompt.removeClass("greenPopup");

                if (type == "load")
                    prompt.addClass("blackPopup");
                else
                    prompt.removeClass("blackPopup");

                if (ajaxed)
                    prompt.addClass("ajaxed");
                else
                    prompt.removeClass("ajaxed");

                prompt.find(".formErrorContent").html(promptText);

                var pos = methods._calculatePosition(field, prompt, options);
                prompt.animate({
                    "top": pos.callerTopPosition,
                    "marginTop": pos.marginTopSize
                });
            }
        },
        /**
         * Closes the prompt associated with the given field
         *
         * @param {jqObject}
         *            field
         */
        _closePrompt: function(field) {

            var prompt = methods._getPrompt(field);
            if (prompt)
                prompt.fadeTo("fast", 0, function() {
                    prompt.remove();
                });
        },
        closePrompt: function(field) {
            return methods._closePrompt(field);
        },
        /**
         * Returns the error prompt matching the field if any
         *
         * @param {jqObject}
         *            field
         * @return undefined or the error prompt (jqObject)
         */
        _getPrompt: function(field) {

            var className = "." + methods._getClassName(field.attr("id")) + "formError";
            var match = $(className)[0];
            if (match)
                return $(match);
        },
        /**
         * Calculates prompt position
         *
         * @param {jqObject}
         *            field
         * @param {jqObject}
         *            the prompt
         * @param {Map}
         *            options
         * @return positions
         */
        _calculatePosition: function(field, promptElmt, options) {

            var promptTopPosition, promptleftPosition, marginTopSize;
            var fieldWidth = field.width();
            var promptHeight = promptElmt.height();

            var overflow = options.isOverflown;
            if (overflow) {
                // is the form contained in an overflown container?
                promptTopPosition = promptleftPosition = 0;
                // compensation for the arrow
                marginTopSize = -promptHeight;
            } else {
                var offset = field.offset();
                promptTopPosition = offset.top;
                promptleftPosition = offset.left;
                marginTopSize = 0;
            }

            switch (options.promptPosition) {

                default:
                case "topRight":
                    if (overflow)
                        // Is the form contained in an overflown container?
                        promptleftPosition += fieldWidth - 30;
                    else {
                        promptleftPosition += fieldWidth - 30;
                        promptTopPosition += -promptHeight;
                    }
                    break;
                case "topLeft":
                    promptTopPosition += -promptHeight - 10;
                    break;
                case "centerRight":
                    promptleftPosition += fieldWidth + 13;
                    break;
                case "bottomLeft":
                    promptTopPosition = promptTopPosition + field.height() + 15;
                    break;
                case "bottomRight":
                    promptleftPosition += fieldWidth - 30;
                    promptTopPosition += field.height() + 5;
            }

            return {
                "callerTopPosition": promptTopPosition + "px",
                "callerleftPosition": promptleftPosition + "px",
                "marginTopSize": marginTopSize + "px"
            };
        },
        /**
         * Saves the user options and variables in the form.data
         *
         * @param {jqObject}
         *            form - the form where the user option should be saved
         * @param {Map}
         *            options - the user options
         * @return the user options (extended from the defaults)
         */
        _saveOptions: function(form, options) {

            // is there a language localisation ?
            if ($.validationEngineLanguage)
                var allRules = $.validationEngineLanguage.allRules;
            else
                $.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");

            var userOptions = $.extend({

                // Name of the event triggering field validation
                validationEventTrigger: "blur",
                // Automatically scroll viewport to the first error
                scroll: true,
                // Opening box position, possible locations are: topLeft,
                // topRight, bottomLeft, centerRight, bottomRight
                promptPosition: "topRight",
                bindMethod:"bind",
				// internal, automatically set to true when it parse a _ajax rule
				inlineAjax: false,
                // if set to true, the form data is sent asynchronously via ajax to the form.action url (get)
                ajaxFormValidation: false,
                // Ajax form validation callback method: boolean onComplete(form, status, errors, options)
                // retuns false if the form.submit event needs to be canceled.
				ajaxFormValidationURL: false,
                // The url to send the submit ajax validation (default to action)
                onAjaxFormComplete: $.noop,
                // called right before the ajax call, may return false to cancel
                onBeforeAjaxFormValidation: $.noop,
                // Stops form from submitting and execute function assiciated with it
                onValidationComplete: false,

                // Used when the form is displayed within a scrolling DIV
                isOverflown: false,
                overflownDIV: "",

                // --- Internals DO NOT TOUCH or OVERLOAD ---
                // validation rules and i18
                allrules: allRules,
                // true when form and fields are binded
                binded: false,
                // set to true, when the prompt arrow needs to be displayed
                showArrow: true,
                // did one of the validation fail ? kept global to stop further ajax validations
                isError: false,
                // Caches field validation status, typically only bad status are created.
                // the array is used during ajax form validation to detect issues early and prevent an expensive submit
                ajaxValidCache: {}

            }, options);

            form.data('jqv', userOptions);
            return userOptions;
        },
        
        /**
         * Removes forbidden characters from class name
         * @param {String} className
         */
        _getClassName: function(className) {
        	return className.replace(":","_").replace(".","_");
        }
    };

    /**
     * Plugin entry point.
     * You may pass an action as a parameter or a list of options.
     * if none, the init and attach methods are being called.
     * Remember: if you pass options, the attached method is NOT called automatically
     *
     * @param {String}
     *            method (optional) action
     */
    $.fn.validationEngine = function(method) {

        var form = $(this);
		  if(!form[0]) return false;  // stop here if the form does not exist
		  
        if (typeof(method) == 'string' && method.charAt(0) != '_' && methods[method]) {

            // make sure init is called once
            if(method != "showPrompt" && method != "hidePrompt" && method != "hide" && method != "hideAll") 
            	methods.init.apply(form);
             
            return methods[method].apply(form, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method == 'object' || !method) {
            // default constructor with or without arguments
			methods.init.apply(form, arguments);
            return methods.attach.apply(form);
        } else {
            $.error('Method ' + method + ' does not exist in jQuery.validationEngine');
        }
    };
})(jQuery);

(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* This field is required",
                    "alertTextCheckboxMultiple": "* Please select an option",
                    "alertTextCheckboxe": "* This checkbox is required"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Minimum ",
                    "alertText2": " characters allowed"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " characters allowed"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Minimum value is "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Maximum value is "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Date prior to "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Date past "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Checks allowed Exceeded"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Please select ",
                    "alertText2": " options"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Fields do not match"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText": "* Invalid phone number"
                },
                "email": {
                    // Simplified, was not working in the Iphone browser
                    "regex": /^([A-Za-z0-9_\-\.\'])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/,
                    "alertText": "* Invalid email address"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Not a valid integer"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,
                    "alertText": "* Invalid floating decimal number"
                },
                "date": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                    "alertText": "* Invalid date, must be in YYYY-MM-DD format"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Invalid IP address"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                    "alertText": "* Invalid URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Numbers only"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Letters only"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* No special characters allowed"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This username is available",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* This name is already taken",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This name is available",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* This name is already taken",
	                    // speaks by itself
	                    "alertTextLoad": "* Validating, please wait"
	                },
                "validate2fields": {
                    "alertText": "* Please input HELLO"
                }
            };
            
        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);