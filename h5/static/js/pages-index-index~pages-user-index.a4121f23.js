(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index~pages-user-index"],{"08cc":function(t,e,a){t.exports=a.p+"static/img/getwp.ba1286e5.png"},1724:function(t,e,a){"use strict";a.r(e);var i=a("a1dd"),n=a("1cbf");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("1e43");var r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"f7de07d8",null,!1,i["a"],void 0);e["default"]=s.exports},1971:function(t,e,a){"use strict";a.r(e);var i=a("9f51"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"19f1":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[a("v-uni-view",{staticClass:"tui-popup-class tui-bottom-popup",class:{"tui-popup-show":t.show,"tui-popup-radius":t.radius},style:{backgroundColor:t.backgroundColor,height:t.height?t.height+"rpx":"auto",zIndex:t.zIndex,transform:"translate3d(0, "+(t.show?t.translateY:"100%")+", 0)"}},[t._t("default")],2),t.mask?a("v-uni-view",{staticClass:"tui-popup-mask",class:[t.show?"tui-mask-show":""],style:{zIndex:t.maskZIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClose.apply(void 0,arguments)}}}):t._e()],1)},n=[]},"1cbf":function(t,e,a){"use strict";a.r(e);var i=a("4cc3"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"1de5":function(t,e,a){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"1e43":function(t,e,a){"use strict";var i=a("e43e"),n=a.n(i);n.a},2419:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={tuiPopup:a("314b").default,tuiIcon:a("3173").default,tuiLoading:a("ee1a").default,tuiBottomPopup:a("5eed4").default,tuiInput:a("2be3").default,tuiDialog:a("1724").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tui-popup",{attrs:{duration:500,modeClass:t.mode,styles:t.styles,show:t.popupShow}},[a("v-uni-view",{staticClass:"wd-pt-60r wd-pb-30r"},[a("tui-icon",{staticClass:"wd-absolute wd-top-36r wd-right-36r",attrs:{name:"shut",bold:!0,size:"22",color:"#000000"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.popupShow=!1}}}),a("v-uni-view",{staticClass:"wd-text-center"},[a("v-uni-image",{staticClass:"wd-w-192r wd-h-192r wd-rounded-full",attrs:{src:t.face?t.face:"/static/images/small/avator.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAvatar.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"wd-text-48r wd-font-800 wd-leading-58r wd-text-black wd-mt-20r"},[t._v(t._s(t.user.nickname||""))]),a("v-uni-view",{staticClass:"wd-mt-8r wd-text-24r",staticStyle:{color:"#111827"}},[t._v(t._s(t.user.name||""))])],1)],1),a("v-uni-view",{staticClass:"popCont"},[a("v-uni-view",{staticClass:"wd-px-32r wd-mt-30r"},[a("v-uni-view",{staticClass:"wd-text-36r wd-font-700"},[t._v(t._s(t.userLang.account))]),a("v-uni-view",{staticClass:"wd-text-28r wd-leading-42r wd-mt-6r",staticStyle:{color:"#9ca3af"}},[t._v(t._s(t.userLang.updateAcout))])],1),a("v-uni-view",{staticClass:"wd-px-32r"},[a("v-uni-view",{staticClass:"wd-mt-44r wd-rounded-32r wd-pt-44r wd-px-38r",staticStyle:{background:"rgba(0, 125, 254, 0.04)"}},[a("v-uni-view",{staticClass:"wd-pb-33r",staticStyle:{"border-bottom":"2rpx solid rgba(154, 154, 154, 0.09)"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeNickName.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"wd-text-24r wd-font-400 wd-leading-36r",staticStyle:{color:"#9ca3af"}},[t._v(t._s(t.userLang.nickname))]),a("v-uni-view",{staticClass:"wd-text-28r wd-font-500 wd-leading-42r wd-mt-14r",staticStyle:{color:"#111827"}},[t._v(t._s(t.user.nickname||""))])],1),a("v-uni-view",{staticClass:"wd-mt-33r wd-pb-34r"},[a("v-uni-text",{staticClass:"wd-text-24r wd-font-400 wd-leading-36r",staticStyle:{color:"#9ca3af"}},[t._v(t._s(t.userLang.emailAddress))]),a("v-uni-view",{staticClass:"wd-text-28r wd-font-500 wd-leading-42r wd-mt-14r",staticStyle:{color:"#111827"}},[t._v(t._s(t.user.name||""))])],1)],1)],1),a("v-uni-view",{staticClass:"wd-px-32r wd-mt-60r"},[a("v-uni-view",{staticClass:"wd-text-36r wd-font-700"},[t._v(t._s(t.userLang.other))]),a("v-uni-view",{staticClass:"wd-mt-44r wd-text-28r wd-leading-42r wd-rounded-32r wd-py-44r wd-px-38r",staticStyle:{background:"rgba(0, 125, 254, 0.04)",color:"#111827"}},t._l(t.popMenuList,(function(e,i){return a("v-uni-view",{staticClass:"wd-flex wd-items-center wd-justify-between",class:{"wd-mt-52r":0!=i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tui.href(e.link)}}},[a("v-uni-view",{staticClass:"wd-flex wd-items-center"},[a("v-uni-image",{staticClass:"wd-mr-26r wd-w-44r wd-h-44r",attrs:{src:"/static/images/small/icon"+(i+1)+".png"}}),a("v-uni-text",[t._v(t._s(t.$t(e.name)))])],1),a("tui-icon",{attrs:{name:"arrowright",color:"#000",size:20}})],1)})),1)],1),a("v-uni-view",{staticClass:"wd-px-32r wd-mt-116r wd-pb-40r"},[a("v-uni-view",{staticClass:"wd-h-88r wd-bg-black wd-text-center wd-leading-80r wd-text-white wd-rounded-16r wd-text-32r wd-font-400 wd-leading-44r",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showQuit=!0}}},[t._v(t._s(t.userLang.signout))])],1)],1),t.loading?a("tui-loading",{attrs:{text:t.$t("common.loading")}}):t._e(),a("tui-bottom-popup",{attrs:{show:t.bottomPopup,radius:!0},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.bottomPopup=!1}}},[t.bottomPopup?a("v-uni-view",{staticClass:"wd-p-32r wd-text-28r"},[a("v-uni-view",{staticClass:"wd-mx-auto wd-w-64r wd-h-12r wd-rounded-12r",staticStyle:{background:"rgba(0, 0, 0, 0.06)"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bottomPopup=!1}}}),a("v-uni-view",{staticClass:"wd-text-40r wd-mt-40r wd-font-700 wd-text-center"},[t._v(t._s(t.$t("user.chanNickname")))]),a("v-uni-view",{staticClass:"wd-mt-62r wd-flex"},[a("v-uni-view",{staticClass:"wd-h-88r wd-rounded-20r wd-flex-1 wd-flex wd-items-center wd-pl-20r",staticStyle:{background:"#f6f7f8"}},[a("tui-input",{staticClass:"tui-input wd-w-full",attrs:{"placeholder-class":"tui-phcolor",clearable:!0,backgroundColor:"transparent",name:"password",placeholder:t.userLang.nickname,maxlength:"30",type:"text"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1)],1),a("v-uni-view",{staticClass:"wd-h-88r wd-mt-84r wd-text-center wd-leading-80r wd-text-white wd-rounded-16r wd-text-32r wd-font-400 wd-leading-44r",staticStyle:{background:"#007dfe"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.savenickname.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.submit")))])],1):t._e()],1),a("tui-dialog",{attrs:{buttons:t.buttons,show:t.showQuit,title:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.comfirmQuit.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[a("v-uni-text",{staticClass:"wd-text-black wd-text-36r"},[t._v(t._s(t.userLang.isSignOut))])]},proxy:!0}])})],1)},o=[]},"2be3":function(t,e,a){"use strict";a.r(e);var i=a("f3ef"),n=a("dd8c");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("bf25");var r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"468460d6",null,!1,i["a"],void 0);e["default"]=s.exports},"314b":function(t,e,a){"use strict";a.r(e);var i=a("9487"),n=a("d179");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("536c");var r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"88a4a66a",null,!1,i["a"],void 0);e["default"]=s.exports},"330e":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.tui-input__wrap[data-v-468460d6]{width:100%;display:flex;align-items:center;position:relative;box-sizing:border-box}.tui-input__wrap[data-v-468460d6]::before{\ncontent:" ";\nposition:absolute;top:0;right:0;left:0;border-top:1px solid var(--thorui-line-color,rgba(0,0,0,.1));-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0;z-index:2;pointer-events:none}.tui-input__wrap[data-v-468460d6]::after{\ncontent:" ";\nposition:absolute;border-bottom:1px solid var(--thorui-line-color,rgba(0,0,0,.1));-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 100%;transform-origin:0 100%;bottom:0;right:0;left:0;z-index:2;pointer-events:none}.tui-line__left[data-v-468460d6]::after{left:%?30?%!important}.tui-border__top[data-v-468460d6]::before{border-top:0}.tui-border__bottom[data-v-468460d6]::after{border-bottom:0}.tui-input__required[data-v-468460d6]{height:%?30?%;position:absolute;left:0;top:50%;left:%?12?%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.tui-input__label[data-v-468460d6]{padding-right:%?12?%;flex-shrink:0}.tui-input__self[data-v-468460d6]{flex:1;padding-right:%?12?%;box-sizing:border-box;overflow:visible}.tui-input__placeholder[data-v-468460d6]{color:var(--thorui-text-color-placeholder,#ccc);overflow:visible}\n.tui-input__border[data-v-468460d6]{border-radius:%?4?%;position:relative}.tui-input__border[data-v-468460d6]::after{\ncontent:" ";\nposition:absolute;height:200%;width:200%;border:1px solid var(--thorui-border-color,#d1d1d1);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);left:0;top:0;border-radius:%?8?%;pointer-events:none}.tui-radius__fillet[data-v-468460d6]{border-radius:100px!important}.tui-radius__fillet[data-v-468460d6]::after{border-radius:100px!important}.tui-text__right[data-v-468460d6]{text-align:right}',""]),t.exports=e},4372:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".tui-bottom-popup[data-v-6904465b]{width:100%;position:fixed;left:0;right:0;bottom:0;opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transform-origin:center;transform-origin:center;transition:all .3s ease-in-out\n\t/* min-height: 20rpx; */}.tui-popup-radius[data-v-6904465b]{border-top-left-radius:%?24?%;border-top-right-radius:%?24?%;padding-bottom:env(safe-area-inset-bottom);overflow:hidden}.tui-popup-show[data-v-6904465b]{opacity:1\n\t/* transform: translate3d(0, 0, 0); */}.tui-popup-mask[data-v-6904465b]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);transition:all .3s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-6904465b]{opacity:1;visibility:visible}",""]),t.exports=e},"4cc3":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiDialog",props:{title:{type:String,default:""},maskClosable:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},show:{type:Boolean,default:!1},buttons:{type:Array,default:function(){return[]}},backgroundColor:{type:String,default:"#fff"},radius:{type:String,default:"12px"},titleColor:{type:String,default:"#333"},contentColor:{type:String,default:"#999"}},methods:{buttonTap:function(t){var e=t.currentTarget.dataset.index;this.$emit("click",{index:e,item:this.buttons[e]})},close:function(){this.maskClosable&&this.$emit("close",{})},stopEvent:function(){}}};e.default=i},"536c":function(t,e,a){"use strict";var i=a("f032"),n=a.n(i);n.a},"5eed4":function(t,e,a){"use strict";a.r(e);var i=a("19f1"),n=a("1971");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("fd09");var r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"6904465b",null,!1,i["a"],void 0);e["default"]=s.exports},"5fd8":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("498a"),a("ac1f"),a("5319");var i={name:"tui-input",behaviors:["uni://form-field-group"],options:{virtualHost:!0},props:{required:{type:Boolean,default:!1},requiredColor:{type:String,default:"#EB0909"},label:{type:String,default:""},labelSize:{type:Number,default:32},labelColor:{type:String,default:"#333"},labelWidth:{type:Number,default:140},clearable:{type:Boolean,default:!1},clearSize:{type:Number,default:15},clearColor:{type:String,default:"#bfbfbf"},focus:{type:Boolean,default:!1},placeholder:{type:String,default:""},placeholderStyle:{type:String,default:""},name:{type:String,default:""},value:{type:String,default:""},type:{type:String,default:"text"},password:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},cursorSpacing:{type:Number,default:0},confirmType:{type:String,default:"done"},confirmHold:{type:Boolean,default:!1},cursor:{type:Number,default:-1},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},adjustPosition:{type:Boolean,default:!0},holdKeyboard:{type:Boolean,default:!1},autoBlur:{type:Boolean,default:!1},size:{type:Number,default:32},color:{type:String,default:"#333"},inputBorder:{type:Boolean,default:!1},isFillet:{type:Boolean,default:!1},borderTop:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},lineLeft:{type:Boolean,default:!0},trim:{type:Boolean,default:!0},textRight:{type:Boolean,default:!1},padding:{type:String,default:"26rpx 30rpx"},backgroundColor:{type:String,default:"#FFFFFF"},marginTop:{type:Number,default:0}},data:function(){return{placeholderStyl:"",focused:!1}},watch:{focus:function(t){var e=this;this.$nextTick((function(){e.focused=t}))},placeholderStyle:function(){this.fieldPlaceholderStyle()}},created:function(){this.fieldPlaceholderStyle()},methods:{fieldPlaceholderStyle:function(){this.placeholderStyle?this.placeholderStyl=this.placeholderStyle:this.placeholderStyl="fontSize:".concat(this.size,"rpx")},onInput:function(t){var e=t.detail.value;this.trim&&(e=this.trimStr(e)),this.$emit("input",e)},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){this.$emit("blur",t)},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},fieldClick:function(){this.$emit("click",{name:this.name})},onKeyboardheightchange:function(t){this.$emit("keyboardheightchange",t.detail)},trimStr:function(t){return t.replace(/^\s+|\s+$/g,"")}}};e.default=i},"69f2":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".tui-popup__transition[data-v-88a4a66a]{transition-timing-function:ease;transition-duration:.3s;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-88a4a66a]{opacity:0}.fade-active[data-v-88a4a66a]{opacity:1}.slide-top-in[data-v-88a4a66a]{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-88a4a66a]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-right-in[data-v-88a4a66a]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-88a4a66a]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-88a4a66a]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-88a4a66a]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-88a4a66a]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-88a4a66a]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-88a4a66a]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-88a4a66a]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-88a4a66a]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""]),t.exports=e},8261:function(t,e,a){var i=a("df45");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("357a43b0",i,!0,{sourceMap:!1,shadowMode:!1})},"90fb":function(t,e,a){var i=a("330e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("8e43d05e",i,!0,{sourceMap:!1,shadowMode:!1})},9487:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isShow?a("v-uni-view",{ref:"ani",staticClass:"tui-popup__transition",class:[t.ani.in],style:"transform:"+t.transform+";"+t.stylesObject,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},n=[]},"9f51":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var i={name:"tuiBottomPopup",props:{mask:{type:Boolean,default:!0},show:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#fff"},height:{type:Number,default:0},radius:{type:Boolean,default:!0},zIndex:{type:[Number,String],default:997},maskZIndex:{type:[Number,String],default:996},translateY:{type:String,default:"0"}},methods:{handleClose:function(){this.show&&this.$emit("close",{})}}};e.default=i},a077:function(t,e,a){"use strict";a.r(e);var i=a("ac9d"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},a1a1:function(t,e,a){var i=a("4372");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("04044a39",i,!0,{sourceMap:!1,shadowMode:!1})},a1dd:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t.show?a("v-uni-view",{staticClass:"tui-dialog",style:{background:t.backgroundColor,borderRadius:t.radius},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopEvent.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"tui-dialog__hd"},[a("v-uni-view",{staticClass:"tui-dialog__title",style:{color:t.titleColor}},[t._v(t._s(t.title)),t._t("title")],2)],1),a("v-uni-view",{staticClass:"tui-dialog__bd",style:{color:t.contentColor}},[t._t("content")],2),a("v-uni-view",{staticClass:"tui-dialog__ft"},[t.buttons&&t.buttons.length?t._l(t.buttons,(function(e,i){return a("v-uni-view",{key:i,staticClass:"tui-dialog__btn",style:{color:e.color||"#333"},attrs:{"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonTap.apply(void 0,arguments)}}},[t._v(t._s(e.text))])})):t._t("footer")],2)],1):t._e(),t.mask?a("v-uni-view",{staticClass:"tui-dialog__mask",class:{"tui-mask_hidden":!t.show},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e()],1)},n=[]},ac9d:function(t,e,a){"use strict";(function(t){a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{userinfoMsg:{},show:!1,popupShow:!1,bottomPopup:!1,mode:["slide-left"],styles:{position:"fixed",bottom:0,top:0,left:0,right:0,background:"#ffffff",zIndex:999999,overflow:"hidden"},showQuit:!1,buttons:[{text:this.$t("common.cancel"),color:"#9CA3AF"},{text:this.$t("common.submit"),color:"#007DFE"}],popMenuList:[{name:"user.agent",link:"/pages/user/agent/agent"},{name:"user.security",link:"/pages/user/safesetting/safesetting"},{name:"user.paySeting",link:"/pages/user/banksetting/banksetting"},{name:"user.feedback",link:"/pages/user/feedback/feedback"},{name:"user.aboutus",link:"/pages/index/article/contentDetail?type=aboutus"}],top:0,opacity:0,scrollTop:.5,username:"",phone:"",userinfo:[],wallet:[],total_usdt:0,face:"/static/images/my/mine_def_touxiang_3x.png",user:{},nickname:"",loading:!1}},computed:{userLang:function(){return this.$t("user")}},watch:{popupShow:{handler:function(t,e){t&&(this.username=uni.getStorageSync("ty_nickname"),this.phone=uni.getStorageSync("ty_mobile"),this.user=uni.getStorageSync("user"),this.user&&(this.face=this.user.face))},deep:!0,immediate:!0}},onLoad:function(){},onShow:function(){},methods:{changeAvatar:function(){var e=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){var i=a.tempFilePaths[0];t("info",i," at pages/user/user.vue:272"),e.loading=!0,e.tui.uploadFile("user/upload_face_img",i).then((function(a){t("info",a," at pages/user/user.vue:277"),e.loading=!1,1==a.uploaded&&(e.face=a.url,e.user.face=e.face,uni.setStorageSync("user",e.user))}))}})},changeNickName:function(){this.nickname="",this.bottomPopup=!0},savenickname:function(){var e=this;this.loading=!0,this.tui.request("user/savenickname","POST",{nickname:this.nickname},!1,!0,!0).then((function(t){e.loading=!1,0==t.code?(e.user.nickname=e.nickname,uni.setStorageSync("user",e.user),e.bottomPopup=!1,uni.showToast({icon:"none",title:t.msg,duration:2e3})):uni.showToast({icon:"none",title:t.msg,duration:2e3})})).catch((function(a){e.loading=!1,t("info",a,"err"," at pages/user/user.vue:326")}))},comfirmQuit:function(t){var e=t.index;0==e||(this.$store.commit("logout"),uni.reLaunch({url:"/pages/index/index"})),this.showQuit=!1,this.popupShow=!1}}};e.default=i}).call(this,a("0de9")["log"])},bf25:function(t,e,a){"use strict";var i=a("90fb"),n=a.n(i);n.a},c03b:function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530"));a("a9e3"),a("d3b7"),a("159b"),a("ac1f"),a("5319");var o={name:"tuiPopup",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{position:"fixed",bottom:0,top:0,left:0,right:0,display:"flex","justify-content":"center","align-items":"center"}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,n.default)((0,n.default)({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),e="";for(var a in t){var i=this.toLine(a);e+=i+":"+t[a]+";"}return e}},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var e in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===e?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[e]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var e=this,a=this.getTranfrom(t);for(var i in this.transform="",a)"opacity"===i?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(a[i]," ");this.timer=setTimeout((function(){t||(e.isShow=!1),e.$emit("change",{detail:e.isShow})}),this.duration)},getTranfrom:function(t){var e={transform:""};return this.modeClass.forEach((function(a){switch(a){case"fade":e.opacity=t?1:0;break;case"slide-top":e.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":e.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":e.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":e.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":e.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":e.transform+="scale(".concat(t?1:1.2,") ");break}})),e},_modeClassArr:function(t){var e=this.modeClass;if("string"!==typeof e){var a="";return e.forEach((function(e){a+=e+"-"+t+","})),a.substr(0,a.length-1)}return e+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};e.default=o},cc15:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.tui-dialog[data-v-f7de07d8]{position:fixed;z-index:5000;top:50%;left:16px;right:16px;-webkit-transform:translateY(-50%);transform:translateY(-50%);text-align:center;overflow:hidden;display:flex;flex-direction:column;max-height:90%}.tui-dialog__hd[data-v-f7de07d8]{padding:32px 24px 16px}.tui-dialog__title[data-v-f7de07d8]{font-weight:700;font-size:17px;line-height:1.4}.tui-dialog__bd[data-v-f7de07d8]{overflow-y:auto;-webkit-overflow-scrolling:touch;padding:0 24px;margin-bottom:32px;font-size:15px;line-height:1.4;word-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}.tui-dialog__ft[data-v-f7de07d8]{display:flex;position:relative;line-height:56px;min-height:56px;font-size:17px}.tui-dialog__ft[data-v-f7de07d8]:after{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid rgba(0,0,0,.1);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tui-dialog__btn[data-v-f7de07d8]{display:block;flex:1;font-weight:700;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.tui-dialog__btn[data-v-f7de07d8]:active{background-color:#ececec}.tui-dialog__btn[data-v-f7de07d8]:first-child::after{width:0;border-left:0}.tui-dialog__btn[data-v-f7de07d8]::after{content:" ";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid rgba(0,0,0,.1);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.tui-dialog__mask.tui-mask_hidden[data-v-f7de07d8]{opacity:0;-webkit-transform:scaleZ(0);transform:scaleZ(0)}.tui-dialog__mask[data-v-f7de07d8]{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,.6);opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);transition:all .2s ease-in}',""]),t.exports=e},cd66:function(t,e,a){"use strict";var i=a("8261"),n=a.n(i);n.a},d179:function(t,e,a){"use strict";a.r(e);var i=a("c03b"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},d355:function(t,e,a){"use strict";a.r(e);var i=a("2419"),n=a("a077");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("cd66");var r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"2ab59f02",null,!1,i["a"],void 0);e["default"]=s.exports},dd8c:function(t,e,a){"use strict";a.r(e);var i=a("5fd8"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},df45:function(t,e,a){var i=a("24fb"),n=a("1de5"),o=a("08cc");e=i(!1);var r=n(o);e.push([t.i,'@charset "UTF-8";\n/**\n * scss预处理 内置的常用样式变量\n*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-2ab59f02]{height:100%}.userbox[data-v-2ab59f02]{background:#f2f4f7 url('+r+") 0 0/contain no-repeat}.userConent[data-v-2ab59f02]{background:#fff;border-radius:24px 32px 0 0}.tui-rolling-news[data-v-2ab59f02]{width:100%;\n  /* padding: 10rpx 30rpx; */box-sizing:border-box;display:flex;align-items:center;justify-content:center;flex-wrap:nowrap}.tui-swiper[data-v-2ab59f02]{font-size:%?28?%;height:%?50?%;flex:1}.tui-swiper-item[data-v-2ab59f02]{display:flex;align-items:center;color:#9ca3af}.tui-news-item[data-v-2ab59f02]{line-height:%?28?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:%?26?%}.pay-password[data-v-2ab59f02]{border-radius:40px 40px 0 0}.popCont[data-v-2ab59f02]{height:calc(100% - %?340?%);padding-bottom:%?40?%;overflow-y:scroll}",""]),t.exports=e},e43e:function(t,e,a){var i=a("cc15");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("d82904dc",i,!0,{sourceMap:!1,shadowMode:!1})},f032:function(t,e,a){var i=a("69f2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("13437ebc",i,!0,{sourceMap:!1,shadowMode:!1})},f3ef:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:{"tui-input__border":t.inputBorder,"tui-radius__fillet":t.isFillet},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fieldClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"tui-input__wrap",class:{"tui-line__left":t.lineLeft,"tui-border__top":!t.borderTop||t.inputBorder,"tui-border__bottom":!t.borderBottom||t.inputBorder,"tui-radius__fillet":t.isFillet},style:{padding:t.padding,backgroundColor:t.backgroundColor,marginTop:t.marginTop+"rpx"}},[t.required?a("v-uni-view",{staticClass:"tui-input__required",style:{color:t.requiredColor}},[t._v("*")]):t._e(),t.label?a("v-uni-view",{staticClass:"tui-input__label",style:{fontSize:t.labelSize+"rpx",color:t.labelColor,minWidth:t.labelWidth+"rpx"}},[t._v(t._s(t.label))]):t._e(),t._t("left"),a("v-uni-input",{staticClass:"tui-input__self",class:{"tui-text__right":t.textRight},style:{fontSize:t.size+"rpx",color:t.color},attrs:{"placeholder-class":"tui-input__placeholder",type:t.type,name:t.name,value:t.value,password:t.password,placeholder:t.placeholder,"placeholder-style":t.placeholderStyl,disabled:t.disabled,maxlength:t.maxlength,focus:t.focused,"confirm-type":t.confirmType,"confirm-hold":t.confirmHold,cursor:t.cursor,"selection-start":t.selectionStart,"selection-end":t.selectionEnd,"adjust-position":t.adjustPosition,"hold-keyboard":t.holdKeyboard,"auto-blur":t.autoBlur},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)},keyboardheightchange:function(e){arguments[0]=e=t.$handleEvent(e),t.onKeyboardheightchange.apply(void 0,arguments)}}}),t.clearable&&""!=t.value?a("v-uni-icon",{attrs:{type:"clear",size:t.clearSize,color:t.clearColor},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}}):t._e(),t._t("right")],2)],1)},n=[]},fd09:function(t,e,a){"use strict";var i=a("a1a1"),n=a.n(i);n.a}}]);