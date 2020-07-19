function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_setPrototypeOf(t,n)}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _createSuper(t){var n=_isNativeReflectConstruct();return function(){var e,o=_getPrototypeOf(t);if(n){var i=_getPrototypeOf(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(t):n}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _createForOfIteratorHelper(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=_unsupportedIterableToArray(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return a=t.done,t},e:function(t){c=!0,r=t},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw r}}}}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,n){if(t){if("string"==typeof t)return _arrayLikeToArray(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,n):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(t,n,e){"use strict";e.r(n),e.d(n,"HomeComponentModule",(function(){return G}));var o=e("quSY"),i=e("HDdC"),r=e("DH7j"),a=e("n6bG"),c=e("lJxs");function s(t,n,e,o){return Object(a.a)(e)&&(o=e,e=void 0),o?s(t,n,e).pipe(Object(c.a)((function(t){return Object(r.a)(t)?o.apply(void 0,_toConsumableArray(t)):o(t)}))):new i.a((function(o){!function t(n,e,o,i,r){var a;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(n)){var c=n;n.addEventListener(e,o,r),a=function(){return c.removeEventListener(e,o,r)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(n)){var s=n;n.on(e,o),a=function(){return s.off(e,o)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(n)){var l=n;n.addListener(e,o),a=function(){return l.removeListener(e,o)}}else{if(!n||!n.length)throw new TypeError("Invalid event target");for(var u=0,f=n.length;u<f;u++)t(n[u],e,o,i,r)}i.add(a)}(t,n,(function(t){o.next(arguments.length>1?Array.prototype.slice.call(arguments):t)}),o,e)}))}var l,u,f,d,b,p,h=e("EY2u"),g=e("ofXK"),m=e("fXoL"),_=((u=function(){function t(){var n=this;_classCallCheck(this,t),this.scrollSub=new o.a,this.resizeSub=new o.a,this.manageScrollPos(),this.scrollObs="undefined"!=typeof window?s(window,"scroll"):Object(h.b)(),this.scrollSub=this.scrollObs.subscribe((function(){return n.manageScrollPos()})),this.resizeObs="undefined"!=typeof window?s(window,"resize"):Object(h.b)(),this.resizeSub=this.resizeObs.subscribe((function(){return n.manageScrollPos()}))}return _createClass(t,[{key:"manageScrollPos",value:function(){this.pos="undefined"!=typeof window?window.pageYOffset:0}},{key:"ngOnDestroy",value:function(){this.scrollSub.unsubscribe(),this.resizeSub.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||u)},u.\u0275prov=m.Eb({token:u,factory:function(t){return u.\u0275fac(t)}}),u),y=((l=function(){function t(n,e,i){_classCallCheck(this,t),this.elementRef=n,this.renderer=e,this.scroll=i,this.scrollSub=new o.a,this.resizeSub=new o.a,this.offset=80}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;if(!this.animationName)throw new Error("animationName required");this.isVisible=!1,this.scrollSub=this.scroll.scrollObs.subscribe((function(){return t.manageVisibility()})),this.resizeSub=this.scroll.resizeObs.subscribe((function(){return t.manageVisibility()}))}},{key:"ngAfterViewInit",value:function(){var t=this;setTimeout((function(){return t.manageVisibility()}),1)}},{key:"ngOnDestroy",value:function(){this.scrollSub.unsubscribe(),this.resizeSub.unsubscribe()}},{key:"manageVisibility",value:function(){this.isVisible||(this.getWinHeight(),this.getOffsetTop(),this.scroll.pos>=this.offsetTop+this.offset-this.winHeight&&this.addAnimationClass())}},{key:"addAnimationClass",value:function(){this.isVisible=!0,this.setClass(this.animationName)}},{key:"setClass",value:function(t){var n,e=_createForOfIteratorHelper(t.split(" "));try{for(e.s();!(n=e.n()).done;){var o=n.value;this.renderer.addClass(this.elementRef.nativeElement,o)}}catch(i){e.e(i)}finally{e.f()}}},{key:"getWinHeight",value:function(){this.winHeight="undefined"!=typeof window?window.innerHeight:0}},{key:"getOffsetTop",value:function(){if("function"==typeof this.elementRef.nativeElement.getBoundingClientRect){var t=this.elementRef.nativeElement.getBoundingClientRect().top;this.offsetTop=t+this.scroll.pos-this.elementRef.nativeElement.clientTop}else this.offsetTop=0}},{key:"id",get:function(){return this.elementRef.nativeElement.id}}]),t}()).\u0275fac=function(t){return new(t||l)(m.Ib(m.l),m.Ib(m.E),m.Ib(_))},l.\u0275dir=m.Db({type:l,selectors:[["","animateOnScroll",""]],inputs:{offset:"offset",animationName:"animationName"}}),l),v=((d=f=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"forRoot",value:function(){return{ngModule:f,providers:[_]}}}]),t}()).\u0275mod=m.Gb({type:d}),d.\u0275inj=m.Fb({factory:function(t){return new(t||d)},imports:[[g.b]]}),d),C=e("TY1r"),M=e("R0Ic"),O=((b=function(){function t(){_classCallCheck(this,t),this.missionIn=!1,this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,navSpeed:1500,navText:['<i class="material-icons">arrow_back_ios</i>','<i class="material-icons">arrow_forward_ios</i>'],responsive:{0:{items:1},400:{items:1},740:{items:1},940:{items:1}},nav:!0,autoplay:!0,autoplaySpeed:1500}}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||b)},b.\u0275cmp=m.Cb({type:b,selectors:[["app-home"]],decls:83,vars:0,consts:[[1,"padded"],[1,"khali-div"],[1,"intro"],[1,"intro-content"],[1,"sub-back"],[1,"text"],[1,"heading"],[1,"animate__animated","animate__fadeInDown"],[1,"secondary-text"],[1,"heart","animate__animated","animate__heartBeat","animate__repeat-2"],[1,"divider","divider-xsm"],[1,"mission"],[1,"mission-head","animate__animated","animate__fadeInLeft"],[1,"mission-text","animate__animated","animate__fadeInLeft"],[1,"logo"],["src","assets/images/new-ruby-hospital-logo.png",1,"image","animate__animated","animate__fadeIn"],[1,"divider"],[1,"about"],[1,"about-container"],["animateOnScroll","","animationName","animate__animated animate__bounce",1,"about-head","subheadings"],[1,"about-content"],[1,"opd"],[1,"opd-card"],[1,"opd-content","left"],["animateOnScroll","","animationName","animate__animated animate__flipInX",1,"opd-heading","subheadings"],[1,"opd-text"],[1,"row"],[1,"col"],[1,"col","sub"],[1,"opd-content","right"],[1,"emergency-contact"],[1,"material-icons"],[1,"sub"]],template:function(t,n){1&t&&(m.Nb(0,"div",0),m.Jb(1,"div",1),m.Nb(2,"div",2),m.Nb(3,"div",3),m.Nb(4,"div",4),m.Nb(5,"div",5),m.Nb(6,"h1",6),m.Nb(7,"div",7),m.lc(8," New Ruby "),m.Mb(),m.Nb(9,"div",8),m.lc(10," H"),m.Nb(11,"span",9),m.lc(12,"\u2764"),m.Mb(),m.lc(13,"spital "),m.Mb(),m.Mb(),m.Nb(14,"div",10),m.Jb(15,"hr"),m.Mb(),m.Nb(16,"div",11),m.Nb(17,"h2",12),m.lc(18," Our "),m.Nb(19,"span",8),m.lc(20,"Mission"),m.Mb(),m.Mb(),m.Nb(21,"p",13),m.Nb(22,"q"),m.lc(23," To provide Quality Healthcare services to sick and needy with missionary zeal in an ethical manner and with total commitment. "),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Nb(24,"div",14),m.Jb(25,"img",15),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Nb(26,"div",16),m.Jb(27,"hr"),m.Mb(),m.Nb(28,"div",17),m.Nb(29,"div",18),m.Nb(30,"h2",19),m.Nb(31,"div"),m.lc(32,"Welcome to\xa0"),m.Mb(),m.Nb(33,"div",8),m.lc(34,"New Ruby Hospital"),m.Mb(),m.Mb(),m.Nb(35,"p"),m.lc(36,"We Offer Extensive Medical Procedures To Outbound And Inbound Patients."),m.Mb(),m.Nb(37,"div",20),m.Nb(38,"p"),m.Nb(39,"q"),m.lc(40," Our hospital is committed to perfecting the technological advances in healthcare and management services. We update the professional skills of our team through a process of continuous training and reviews. "),m.Mb(),m.Mb(),m.Nb(41,"p"),m.lc(42," Multi-disciplinary team of experienced doctors, nurses and other supporting staff at New Ruby Hospital will make your treatment personalised and their skill and experience will achieve the best possible outcome for you. Wherever you are, we make your treatment easy and comfortable. "),m.Mb(),m.Nb(43,"p"),m.lc(44," New Ruby Hospital is a more peaceful and comforting experience. The strategic location of this hospital is easily accessible from the city of Jalandhar and it's neighboring areas and at the same time, provides a retreat-like experience. The quietness of the place is calming and refreshing and adds immense value. "),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Nb(45,"div",16),m.Jb(46,"hr"),m.Mb(),m.Nb(47,"div",21),m.Nb(48,"div",22),m.Nb(49,"div",23),m.Nb(50,"h2",24),m.lc(51," OPD "),m.Nb(52,"span",8),m.lc(53,"Hours"),m.Mb(),m.Mb(),m.Nb(54,"div",25),m.Nb(55,"div",26),m.Nb(56,"div",27),m.lc(57,"Monday-Saturday"),m.Mb(),m.Nb(58,"div",28),m.lc(59,"9:00 am - 2:00 pm (Morning)"),m.Mb(),m.Mb(),m.Nb(60,"div",26),m.Nb(61,"div",27),m.lc(62,"Monday-Saturday"),m.Mb(),m.Nb(63,"div",28),m.lc(64,"5:00 pm - 7:00 pm (Evening)"),m.Mb(),m.Mb(),m.Nb(65,"div",26),m.Nb(66,"div",27),m.lc(67,"Sunday"),m.Mb(),m.Nb(68,"div",28),m.lc(69,"Emergency cases only"),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Nb(70,"div",29),m.Nb(71,"h2",24),m.lc(72," Emergency "),m.Nb(73,"span",8),m.lc(74,"Cases"),m.Mb(),m.Mb(),m.Nb(75,"div",25),m.Nb(76,"p",30),m.Nb(77,"i",31),m.lc(78,"call"),m.Mb(),m.lc(79," 0181-2224151"),m.Mb(),m.Nb(80,"p",32),m.lc(81,"Emergency services are available with the hospital for 24 X 7."),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Jb(82,"div",1),m.Mb())},directives:[y],styles:[".padded[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#fff,#fff0f0)}.intro[_ngcontent-%COMP%]{background-image:url(new-ruby-hospital-outside.80077945304a3154deaf.jpeg);background-position:50%;background-repeat:no-repeat;background-size:cover;background-attachment:fixed;padding:0 40px}.intro[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]{height:calc(100vh - 70px)}.intro[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%], .intro[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .sub-back[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.intro[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .sub-back[_ngcontent-%COMP%]{background-color:hsla(0,0%,100%,.84)}.intro[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .sub-back[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{text-align:center}.intro[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .sub-back[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{margin:0;font-size:80px;font-weight:500}.intro[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .sub-back[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%]{display:inline-block;font-size:55px}.intro[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .sub-back[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .mission[_ngcontent-%COMP%]   .mission-head[_ngcontent-%COMP%]{font-size:38px;margin-top:0}.intro[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .sub-back[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .mission[_ngcontent-%COMP%]   .mission-text[_ngcontent-%COMP%]{font-size:22px;font-family:Open Sans,sans-serif}.intro[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .sub-back[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{justify-content:center;align-items:center;width:50%}.intro[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .sub-back[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:80%}.divider[_ngcontent-%COMP%]{padding:40px 20%}.divider.divider-sm[_ngcontent-%COMP%]{padding:5px 20%}.divider[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{background-color:#bdbdbd}@media (max-width:600px){.intro-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:100%}.intro-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:50px!important}.intro-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%]{font-size:36px!important}.intro-content[_ngcontent-%COMP%]   .mission[_ngcontent-%COMP%]   .mission-head[_ngcontent-%COMP%]{font-size:36px!important;font-weight:500!important}.intro-content[_ngcontent-%COMP%]   .mission[_ngcontent-%COMP%]   .mission-text[_ngcontent-%COMP%]{font-size:20px!important}.intro-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:none}}@media (max-width:768px){.intro-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:none}}@media (max-width:1000px) and (orientation:landscape){.intro-content[_ngcontent-%COMP%]{height:auto!important}.intro-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:100%}.intro-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{height:auto!important;display:flex;flex-direction:column;justify-content:center;align-items:center}}@media (max-width:768px) and (orientation:landscape){.intro-content[_ngcontent-%COMP%]{height:auto!important}.intro-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:100%}.intro-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{height:auto!important;display:flex;flex-direction:column;justify-content:center;align-items:center}.intro-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:none!important}}@media (max-width:768px) and (orientation:potrait){.intro-content[_ngcontent-%COMP%]{height:calc(100vh - 70px)!important}.intro-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:100%}.intro-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{height:auto;display:flex;flex-direction:column;justify-content:center;align-items:center}.intro-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:none!important}}@media (min-width:769px){.intro-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:50%}.intro-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex}}"],data:{animation:[Object(M.j)("landing",[Object(M.g)("void",Object(M.h)({opacity:0})),Object(M.i)("void <=> *",[Object(M.e)("1s")])])]}}),b),P=e("tyNb"),w=[{path:"",component:O}],k=((p=function t(){_classCallCheck(this,t)}).\u0275mod=m.Gb({type:p}),p.\u0275inj=m.Fb({factory:function(t){return new(t||p)},imports:[[P.e.forChild(w)],P.e]}),p),x=e("XNiG");e("VRyK"),e("LRne"),e("Cfvw"),e("vkgz"),e("pLZG"),e("eIep"),e("SxV6"),e("IzEk"),e("7o/Q"),e("Kqap"),e("BFxc"),e("xbPD"),e("mCNh"),e("D0XW"),e("z6cu");var N,S,j,E,T,z,R=e("jhN1"),I=((S=function(){function t(n){_classCallCheck(this,t),this.eventManager=n,this.resizeSubject=new x.a,this.eventManager.addGlobalEventListener("window","resize",this.onResize.bind(this)),this.eventManager.addGlobalEventListener("window","onload",this.onLoaded.bind(this))}return _createClass(t,[{key:"onResize",value:function(t){this.resizeSubject.next(t.target)}},{key:"onLoaded",value:function(t){this.windowWidth=t.target}},{key:"onResize$",get:function(){return this.resizeSubject.asObservable()}}]),t}()).\u0275fac=function(t){return new(t||S)(m.Rb(R.c))},S.\u0275prov=m.Eb({token:S,factory:function(t){return S.\u0275fac(t)}}),S),A=((N=function(){function t(n){_classCallCheck(this,t),this.errorHandler=n}return _createClass(t,[{key:"log",value:function(t){for(var n,e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];Object(m.U)()&&(n=console).log.apply(n,[t].concat(o))}},{key:"error",value:function(t){this.errorHandler.handleError(t)}},{key:"warn",value:function(t){for(var n,e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];(n=console).warn.apply(n,[t].concat(o))}}]),t}()).\u0275fac=function(t){return new(t||N)(m.Rb(m.m))},N.\u0275prov=m.Eb({token:N,factory:function(t){return N.\u0275fac(t)}}),N),L=new m.q("WindowToken"),H=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"nativeWindow",get:function(){throw new Error("Not implemented.")}}]),t}(),D=[{provide:H,useClass:(j=function(t){_inherits(e,t);var n=_createSuper(e);function e(){return _classCallCheck(this,e),n.call(this)}return _createClass(e,[{key:"nativeWindow",get:function(){return window}}]),e}(H),j.\u0275fac=function(t){return new(t||j)},j.\u0275prov=m.Eb({token:j,factory:function(t){return j.\u0275fac(t)}}),j)},{provide:L,useFactory:function(t,n){return Object(g.p)(n)?t.nativeWindow:{setTimeout:function(t,n){},clearTimeout:function(t){}}},deps:[H,m.B]}],W=new m.q("DocumentToken"),J=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"nativeDocument",get:function(){throw new Error("Not implemented.")}}]),t}(),V=[{provide:J,useClass:(E=function(t){_inherits(e,t);var n=_createSuper(e);function e(){return _classCallCheck(this,e),n.call(this)}return _createClass(e,[{key:"nativeDocument",get:function(){return document}}]),e}(J),E.\u0275fac=function(t){return new(t||E)},E.\u0275prov=m.Eb({token:E,factory:function(t){return E.\u0275fac(t)}}),E)},{provide:W,useFactory:function(t,n){return Object(g.p)(n)?t.nativeDocument:{hidden:!1,visibilityState:"visible"}},deps:[J,m.B]}],F=((z=function t(){_classCallCheck(this,t)}).\u0275mod=m.Gb({type:z}),z.\u0275inj=m.Fb({factory:function(t){return new(t||z)},providers:[D,I,V,A],imports:[[g.b]]}),z),G=((T=function t(){_classCallCheck(this,t)}).\u0275mod=m.Gb({type:T}),T.\u0275inj=m.Fb({factory:function(t){return new(t||T)},imports:[[k,F,C.b,v.forRoot()]]}),T)}}]);