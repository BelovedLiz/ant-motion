(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1143:function(e,t,o){"use strict";o.r(t);var n=o(3),a=o.n(n),r=o(5),i=o.n(r),s=o(12),l=o.n(s),c=o(4),p=o.n(c),u=o(6),h=o.n(u),d=o(1),m=o.n(d),f=o(7),y=o.n(f),v=o(0),w=o.n(v),g=o(39),T=function(e){function t(){var e,o,n,a;i()(this,t);for(var r=arguments.length,s=Array(r),l=0;l<r;l++)s[l]=arguments[l];return o=n=p()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.onClick=function(e){e.stopPropagation(),n.props[n.props.arrowType](e)},a=o,p()(n,a)}return h()(t,e),l()(t,[{key:"render",value:function(){var e=this.props.className,t=e+"-default";e=(e+" "+(this.props.prefixCls||"")).trim(),e=(e=this.props.default?(e+" "+t).trim():e)+" "+this.props.arrowType;var o=a()({},this.props,this.props.componentProps);return["arrowType","next","prev","elemHeight","component","componentProps","default","prefixCls"].forEach(function(e){return delete o[e]}),o.className=e,o.onClick=this.onClick,o.style=o.style||{},o.style.top=this.props.elemHeight/2+"px",m.a.createElement(this.props.component,o,this.props.children)}}]),t}(d.Component);T.propTypes={children:w.a.any,style:w.a.object,className:w.a.string,prefixCls:w.a.string,component:w.a.any,arrowType:w.a.string,default:w.a.bool,next:w.a.func,prev:w.a.func,elemHeight:w.a.number,componentProps:w.a.object},T.defaultProps={component:"div",className:"banner-anim-arrow",componentProps:{}},T.isBannerAnimArrow=!0;var b=T;function E(e){var t=[];return m.a.Children.forEach(e,function(e){t.push(e)}),t}function x(e){return e||0===e?Array.isArray(e)?e:[e]:[]}function P(e,t){if(!e)return null;var o=e.props,n={};n.key=e.key||t;var a=["accesskey","classname","contenteditable","contextmenu","dir","draggable","dropzone","hidden","id","lang","spellcheck","style","tabindex","title"];return Object.keys(o).forEach(function(e){(a.indexOf(e.toLocaleLowerCase())>=0||e.match("data-"))&&(n[e]=o[e])}),m.a.createElement(o.component,n,o.children)}function M(){return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop}function k(e,t){return e?t.type.isTweenOne?m.a.cloneElement(t,{reverse:!0}):m.a.cloneElement(t,t.props,null):t}P.propTypes={key:w.a.string};var S=function(e){function t(){var e,o,n,a;i()(this,t);for(var r=arguments.length,s=Array(r),l=0;l<r;l++)s[l]=arguments[l];return o=n=p()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.getDefaultThumb=function(){for(var e=[],t=0;t<n.props.length;t++)e.push(m.a.createElement("span",{key:t}));return e},a=o,p()(n,a)}return h()(t,e),l()(t,[{key:"render",value:function(){var e=this,t="banner-anim-thumb",o=t+"-default";t=(t+" "+(this.props.prefixCls||"")).trim(),t=this.props.default?(t+" "+o).trim():t;var n=this.props.default?this.getDefaultThumb():this.props.children;this.props.length&&E(n).length!==this.props.length&&console.warn("The thumbnail length and the images length different.");var r=E(n).map(function(t,o){var n=a()({},t.props);return n.onClick=function(t){t.stopPropagation(),e.props.thumbClick(o)},n.className=((n.className||"")+" "+(e.props.active===o?"active":"")).trim(),m.a.cloneElement(t,n)}),i=a()({},this.props,this.props.componentProps);return["length","thumbClick","active","default","component","componentProps","prefixCls"].forEach(function(e){return delete i[e]}),i.className=t,m.a.createElement(this.props.component,i,r)}}]),t}(d.Component);S.propTypes={children:w.a.any,style:w.a.object,prefixCls:w.a.string,component:w.a.any,thumbClick:w.a.func,default:w.a.bool,length:w.a.number,active:w.a.number,componentProps:w.a.object},S.defaultProps={component:"div",componentProps:{},thumbClick:function(){}},S.isBannerAnimThumb=!0;var C=S,O={across:function(e,t,o,n,r,i){var s=void 0,l=a()({},e.props).children;return"enter"===t?s="next"===o?"100%":"-100%":(s="next"===o?"-100%":"100%",l=E(l).map(k.bind(this,i))),Object(d.cloneElement)(e,{animation:a()({},n,{x:s,type:"enter"===t?"from":"to"})},l)},vertical:function(e,t,o,n,r,i){var s=void 0,l=a()({},e.props),c=l.children;return"enter"===t?s="next"===o?"-100%":"100%":(s="next"===o?"100%":"-100%",c=E(c).map(k.bind(this,i))),Object(d.cloneElement)(e,a()({},l,{animation:a()({},n,{y:s,type:"enter"===t?"from":"to"})}),c)},acrossOverlay:function(e,t,o,n,r,i){var s=void 0,l=a()({},e.props),c=l.children;return"enter"===t?s="next"===o?"100%":"-100%":(s="next"===o?"-20%":"20%",c=E(c).map(k.bind(this,i))),Object(d.cloneElement)(e,a()({},l,{animation:a()({},n,{x:s,type:"enter"===t?"from":"to"})}),c)},verticalOverlay:function(e,t,o,n,r,i){var s=void 0,l=a()({},e.props),c=l.children;return"enter"===t?s="next"===o?"-100%":"100%":(s="next"===o?"20%":"-20%",c=E(c).map(k.bind(this,i))),Object(d.cloneElement)(e,a()({},l,{animation:a()({},n,{y:s,type:"enter"===t?"from":"to"})}),c)},gridBar:function(e,t,o,n,r,i,s,l){var c=a()({},e.props),p=[],u=void 0,h=c.children;"enter"===t?u="next"===o?"-100%":"100%":(u="next"===o?"100%":"-100%",h=E(h).map(P));for(var f=s*(n.duration+n.delay+500-("enter"===t?50:0))||0,y=0;y<10;y++){var v=a()({},c.style);v.width="10.1%",v.left=10*y+"%",v.position="absolute",v.overflow="hidden";var w=a()({},c.style);w.width=r.width+"px",w.height=r.height+"px",w.float="left",w.position="relative",w.left=10*-y/100*r.width+"px";var g=a()({},c);g.style=w;var T=50*("next"===o?y:10-y)+("enter"===t?0:50)+(n.delay||0);g.animation=a()({},n,{y:u,type:"enter"===t?"from":"to",key:t,direction:o,delay:T,i:y,onComplete:y===("next"===o?9:0)?n.onComplete:null}),g.paused=l,g.moment=f;var b=m.a.createElement("div",{style:v,key:y},Object(d.cloneElement)(e,g,h));p.push(b)}var x=m.a.createElement("div",{style:{width:"100%",position:"absolute",top:0}},p),M=a()({},e.props);return M.children=x,Object(d.cloneElement)(e,a()({},M,{animation:{x:0,y:0,type:"set"}}))},grid:function(e,t,o,n,r,i,s,l){var c=a()({},e.props),p=[],u=r.width/10,h=Math.ceil(r.height/u),f=450+50*(h-1);if("leave"===t)return c.animation=a()({},n,{duration:f+n.duration}),c.moment=((n.delay||0)+f+n.duration)*s||0,c.paused=l,m.a.cloneElement(e,c);for(var y=s*(n.duration+n.delay+f)||0,v=0;v<10*h;v++){var w=a()({},c.style);w.position="absolute",w.overflow="hidden",w.width=u+1+"px",w.height=u+1+"px",w.left=v%10*u,w.top=Math.floor(v/10)*u;var g=a()({},c.style);g.width=r.width+"px",g.height=r.height+"px",g.position="relative",g.left=-v%10*u,g.top=-Math.floor(v/10)*u,c.style=g;var T="next"===o?v%10*50+50*Math.floor(v/10):50*(9-v%10)+50*(h-1-Math.floor(v/10));T+=n.delay||0;var b="next"===o?10*h-1:0,E=a()({},n,{opacity:0,type:"from",delay:T,onComplete:v===b?n.onComplete:null}),x=m.a.createElement(e.type,{style:w,key:v,paused:l,animation:E,moment:y},Object(d.cloneElement)(e,c));p.push(x)}var P=a()({},e.props);return P.children=p,Object(d.cloneElement)(e,a()({},P,{animation:{x:0,y:0,type:"set"}}))}},B=function(e){function t(e){i()(this,t);var o=p()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.onMouseEnter=function(e){o.props.onMouseEnter(e),o.props.autoPlay&&o.props.autoPlayEffect&&(g.a.clear(o.autoPlayId),o.autoPlayId=-1)},o.onMouseLeave=function(e){o.props.onMouseLeave(e),o.props.autoPlay&&o.props.autoPlayEffect&&o.autoPlay()},o.onTouchStart=function(e){e.touches&&e.touches.length>1||o.elemWrapper.length<=1||o.getDomIsArrowOrThumb(e)||2===e.button||o.tweenBool||(o.props.autoPlay&&(g.a.clear(o.autoPlayId),o.autoPlayId=-1),o.animType=o.getAnimType(o.props.type),o.currentShow=o.state.currentShow,o.mouseStartXY={startX:void 0===e.touches?e.clientX:e.touches[0].clientX,startY:void 0===e.touches?e.clientY:e.touches[0].clientY})},o.onTouchMove=function(e){if(!(!o.mouseStartXY||e.touches&&e.touches.length>1||o.tweenBool)){var t=o.getDiffer(e,e.touches),n=t.differ,a=t.rectName;if(n){var r=n/o.state.domRect[a]*2,i=r>0?"+":"-",s=o.currentShow;if(o.mouseMoveType="update",o.ratioType!==i)return o.ratioType=i,o.mouseMoveType="reChild",void o.setState({currentShow:s});if((o.animType!==O.gridBar&&o.animType!==O.grid||!e.touches)&&(o.ratio=r,o.ratio)){var l=void 0;o.ratio>0?(s+=1,l="next"):(s-=1,l="prev"),o.ratio=Math.abs(o.ratio),o.ratio=o.ratio>.99?.99:o.ratio,s=(s=s>=o.elemWrapper.length?0:s)<0?o.elemWrapper.length-1:s,o.setState({currentShow:s,direction:l})}}}},o.onTouchEnd=function(e){if(!(!o.mouseStartXY||e.changedTouches&&e.changedTouches.length>1||o.tweenBool)){o.props.autoPlay&&-1===o.autoPlayId&&o.autoPlay();var t=o.getDiffer(e,e.changedTouches),n=t.differ,a=t.rectName;if(delete o.mouseStartXY,o.mouseMoveType="end",n){if(o.tweenBool=!0,(o.animType===O.gridBar||o.animType===O.grid)&&e.changedTouches){var r=o.currentShow;return n/o.state.domRect[a]*2>0?r+=1:r-=1,r=(r=r>=o.elemWrapper.length?0:r)<0?o.elemWrapper.length-1:r,o.ratio=0,o.mouseMoveType="",void o.slickGoTo(r,!0)}o.ratio>.3?o.forceUpdate(function(){o.ratio=0,o.mouseMoveType=""}):o.setState({currentShow:o.currentShow,direction:"+"===o.ratioType?"prev":"next"},function(){o.ratio=0,o.mouseMoveType=""})}else o.mouseMoveType=""}},o.getDiffer=function(e,t){var n=void 0===t?e.clientX:t[0].clientX,a=void 0===t?e.clientY:t[0].clientY,r=n-o.mouseStartXY.startX,i=a-o.mouseStartXY.startY,s=Math.max(Math.abs(r),Math.abs(i));return{differ:s=s===Math.abs(r)?r:i,rectName:s===Math.abs(r)?"width":"height"}},o.getDomIsArrowOrThumb=function(e){var t=e.target.className,o=e.target.parentNode.className;return t.indexOf("banner-anim-arrow")>=0||o.indexOf("banner-anim-thumb")>=0},o.getRenderChildren=function(e){var t=[],n=[],r=void 0,i=0,s=0;return E(e).forEach(function(e,l){if(e){var c=a()({},e.props);e.type.isBannerAnimElement?(c.key=e.key||"element-"+i,i+=1,c.callBack=o.animEnd,c.show=o.state.currentShow===l,c.animType=o.animType,c.duration=o.props.duration,c.delay=o.props.delay,c.ease=o.props.ease,c.sync=o.props.sync||c.sync,c.elemOffset={top:o.state.domRect.top,width:o.state.domRect.width,height:o.state.wrapperHeight},c.direction=o.state.direction,c.ratio=o.ratio,c.mouseMoveType=o.mouseMoveType,t.push(m.a.cloneElement(e,c))):e.type.isBannerAnimArrow?(c.next=o.next,c.prev=o.prev,c.key=e.key||c.arrowType,c.elemHeight=o.state.wrapperHeight,n.push(m.a.cloneElement(e,c))):e.type.isBannerAnimThumb&&(c.key=e.key||"thumb-"+s,s+=1,c.thumbClick=o.slickGoTo,c.active=o.state.currentShow,r=m.a.cloneElement(e,c))}}),t.length>1&&(!n.length&&o.props.arrow&&n.push(m.a.createElement(b,{arrowType:"prev",key:"arrowPrev",next:o.next,prev:o.prev,default:!0,elemHeight:o.state.wrapperHeight}),m.a.createElement(b,{arrowType:"next",key:"arrowNext",next:o.next,prev:o.prev,default:!0,elemHeight:o.state.wrapperHeight})),!r&&o.props.thumb&&(r=m.a.createElement(C,{length:t.length,key:"thumb",thumbClick:o.slickGoTo,active:o.state.currentShow,default:!0}))),o.elemWrapper=t,t.concat(n,r)},o.getDomDataSetToState=function(){o.dom=y.a.findDOMNode(o);var e=o.dom.getBoundingClientRect(),t=o.getElementHeight(o.dom.getElementsByClassName("banner-anim-elem"));o.setState({wrapperHeight:t,domRect:e}),o.tweenBool=!1},o.getElementHeight=function(e){for(var t=0,o=0;o<e.length;o++){var n=e[o].getBoundingClientRect().height;t=t>n?t:n}return t},o.getAnimType=function(e){var t=e?x(e):Object.keys(O),o=Math.round(Math.random()*(t.length-1));return O[t[o]]},o.autoPlay=function(){o.autoPlayId=g.a.interval(o.next,o.props.autoPlaySpeed)},o.animTweenStart=function(e,t,n){n||(o.animType=o.getAnimType(o.props.type)),o.props.onChange("before",e),o.setState({currentShow:e,direction:t})},o.animEnd=function(e){"enter"===e&&(o.tweenBool=!1,o.props.onChange("after",o.state.currentShow))},o.next=function(){if(!o.tweenBool){o.tweenBool=!0;var e=o.state.currentShow;++e>=o.elemWrapper.length&&(e=0),o.animTweenStart(e,"next")}},o.prev=function(){if(!o.tweenBool){o.tweenBool=!0;var e=o.state.currentShow;--e<0&&(e=o.elemWrapper.length-1),o.animTweenStart(e,"prev")}},o.slickGoTo=function(e,t){if(!o.tweenBool&&e!==o.state.currentShow){o.tweenBool=!0;var n=e>o.state.currentShow?"next":"prev";o.animTweenStart(e,n,t)}},o.state={currentShow:o.props.initShow,direction:null,wrapperHeight:0,domRect:{}},o.tweenBool=!1,o}return h()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.getDomDataSetToState(),window.addEventListener?window.addEventListener("resize",this.getDomDataSetToState):window.attachEvent("onresize",this.getDomDataSetToState),this.props.autoPlay&&this.autoPlay()}},{key:"componentWillReceiveProps",value:function(){this.tweenBool=!1}},{key:"componentWillUnmount",value:function(){this.autoPlayId&&(g.a.clear(this.autoPlayId),this.autoPlayId=0),window.addEventListener?(window.removeEventListener("touchend",this.onTouchEnd),window.removeEventListener("mouseup",this.onTouchEnd),window.removeEventListener("resize",this.getDomDataSetToState)):(window.detachEvent("ontouchend",this.onTouchEnd),window.attachEvent("onmouseup",this.onTouchEnd),window.detachEvent("onresize",this.getDomDataSetToState))}},{key:"render",value:function(){var e=this.props.prefixCls,t=a()({},this.props);["type","prefixCls","component","initShow","duration","delay","ease","arrow","thumb","autoPlaySpeed","autoPlay","thumbFloat","sync","dragPlay","autoPlayEffect"].forEach(function(e){return delete t[e]});var o=this.getRenderChildren(t.children);return t.className=(t.className+" "+(e||"")).trim(),t.style=a()({},t.style),t.onMouseEnter=this.onMouseEnter,t.onMouseLeave=this.onMouseLeave,o.length>1&&this.props.dragPlay&&(t.onTouchStart=this.onTouchStart,t.onMouseDown=this.onTouchStart,t.onTouchMove=this.onTouchMove,t.onMouseMove=this.onTouchMove,t.onTouchEnd=this.onTouchEnd,t.onMouseUp=this.onTouchEnd),m.a.createElement(this.props.component,t,o)}}]),t}(d.Component);B.propTypes={children:w.a.any,style:w.a.object,className:w.a.string,prefixCls:w.a.string,component:w.a.any,arrow:w.a.bool,thumb:w.a.bool,initShow:w.a.number,type:w.a.any,duration:w.a.number,delay:w.a.number,ease:w.a.string,autoPlay:w.a.bool,autoPlaySpeed:w.a.number,autoPlayEffect:w.a.bool,onChange:w.a.func,onMouseEnter:w.a.func,onMouseLeave:w.a.func,sync:w.a.bool,dragPlay:w.a.bool},B.defaultProps={component:"div",className:"banner-anim",initShow:0,duration:450,delay:0,ease:"easeInOutQuad",arrow:!0,thumb:!0,autoPlaySpeed:5e3,autoPlayEffect:!0,dragPlay:!0,onChange:function(){},onMouseEnter:function(){},onMouseLeave:function(){}},B.isBannerAnim=!0;var R=B,j=o(15),D=o.n(j),L=o(17),N=o(78),I=o.n(N),A=o(28),z=o(356),H=function(e){function t(e){i()(this,t);var o=p()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.onScroll=function(){var e=M(),t=o.dom.parentNode.getBoundingClientRect(),n=t.top+e,a=Math.max(t.height,window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight),r=(e-n+a)/(a+t.height);r=(r=r||0)>=1?1:r,o.tween.frame(r*o.scrollParallaxDuration)},o.onResize=function(){if(o.props.show){var e=o.dom.getBoundingClientRect(),t=o.video.getBoundingClientRect();o.videoLoad=!0;var n=void 0,a={display:"block",position:"relative",top:0,left:0};e.width/e.height>t.width/t.height?(n=e.width/t.width,a.width=e.width,a.height=t.height*n,a.top=-(a.height-e.height)/2):(n=e.height/t.height,a.height=e.height,a.width=t.width*n,a.left=-(a.width-e.width)/2),Object.keys(a).forEach(function(e){o.video.style[e]=Object(A.stylesToCss)(e,a[e])})}},o.videoLoadedData=function(){o.onResize(),window.addEventListener?window.addEventListener("resize",o.onResize):window.attachEvent("onresize",o.onResize)},o.isVideo=E(o.props.children).some(function(e){return"video"===e.type}),o.isVideo&&(delete O.grid,delete O.gridBar),o.props.scrollParallax&&(o.scrollParallaxDuration=o.props.scrollParallax.duration||450),o.video=null,o.videoLoad=!1,o}return h()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.dom=y.a.findDOMNode(this),this.videoLoad||this.video&&this.props.videoResize&&(this.video.onloadeddata=this.videoLoadedData),this.props.scrollParallax&&(this.tween=new z.a(this.dom,[a()({ease:"linear"},this.props.scrollParallax)],{attr:"style"}),this.tween.frame(0),this.onScroll(),window.addEventListener?window.addEventListener("scroll",this.onScroll):window.attachEvent("onscroll",this.onScroll))}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.show&&setTimeout(function(){t.video&&t.props.videoResize&&t.videoLoad&&t.onResize(),t.props.scrollParallax&&t.onScroll()})}},{key:"componentWillUnmount",value:function(){window.addEventListener?(window.removeEventListener("resize",this.onResize),window.removeEventListener("scroll",this.onScroll)):(window.detachEvent("onresize",this.onResize),window.detachEvent("onscroll",this.onScroll))}},{key:"render",value:function(){var e=this,t=a()({},this.props,this.props.componentProps);if(["videoResize","scrollParallax","scrollParallaxDuration","show","component","componentProps"].forEach(function(e){return delete t[e]}),this.isVideo&&this.props.videoResize){var o=E(t.children).map(function(t,o){return m.a.cloneElement(t,a()({},t.props,{key:t.key||"bg-video-"+o,ref:function(o){e.video=o,"function"==typeof t.ref&&t.ref(o)}}))});t.children=1===o.length?o[0]:o}return m.a.createElement(this.props.component,t)}}]),t}(m.a.Component),_=H;function W(){}H.propTypes={className:w.a.string,style:w.a.object,children:w.a.any,component:w.a.any,videoResize:w.a.bool,scrollParallax:w.a.object,show:w.a.bool,componentProps:w.a.object},H.defaultProps={component:"div",videoResize:!0,componentProps:{}},H.isBannerAnimBgElement=!0;var Y=function(e){function t(e){i()(this,t);var o=p()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return X.call(o),o.state={show:o.props.show},o.tickerId=-1,o.enterMouse=null,o.delayTimeout=null,o.show=o.state.show,o.followParallax=o.props.followParallax,o.transform=Object(A.checkStyleName)("transform"),o}return h()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.dom=y.a.findDOMNode(this)}},{key:"componentWillReceiveProps",value:function(e){var t=e.show;-1!==this.tickerId&&(g.a.clear(this.tickerId),this.tickerId=-1);var o=e.followParallax;this.followParallax&&!o?this.reFollowParallax():this.followParallax=o,this.setState({show:t,mouseMoveType:e.mouseMoveType})}},{key:"componentDidUpdate",value:function(){this.followParallax&&(this.doms=this.followParallax.data.map(function(e){return document.getElementById(e.id)}))}},{key:"componentWillUnmount",value:function(){g.a.clear(this.timeoutID),g.a.clear(this.delayTimeout),this.delayTimeout=-1,this.timeoutID=-1}},{key:"render",value:function(){var e=this,t=a()({},this.props,this.props.componentProps),o=a()({},t.style);o.display=t.show?"block":"none",o.position="absolute",o.width="100%","end"!==this.props.mouseMoveType&&(o[this.transform]=""),t.style=o,t.className=("banner-anim-elem "+(this.props.prefixCls||"")).trim();var n=E(this.props.children).filter(function(e){return e&&e.type.isBannerAnimBgElement}).map(function(t){return m.a.cloneElement(t,{show:e.state.show})});return["prefixCls","callBack","animType","duration","delay","ease","elemOffset","followParallax","show","type","direction","leaveChildHide","sync","ratio","mouseMoveType"].forEach(function(e){return delete t[e]}),this.show===this.state.show&&!this.state.mouseMoveType||"reChild"===this.state.mouseMoveType?this.state.show?(this.props.followParallax&&(t.onMouseMove=this.getFollowMouseMove()),m.a.createElement(L.default,t,"update"===this.props.mouseMoveType?n:this.getChildren())):(this.enterMouse=null,m.a.createElement(L.default,t,n)):this.animChildren(t,o,n)}}]),t}(d.Component),X=function(){var e=this;this.onMouseMove=function(t){e.domRect=e.dom.getBoundingClientRect(),e.enterMouse=e.enterMouse||{x:e.domRect.width/2,y:e.domRect.height/2},e.domWH={w:e.domRect.width,h:e.domRect.height},e.offsetTop=e.domRect.top+M(),e.offsetLeft=e.domRect.left+(window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft);var o={x:t.pageX-e.offsetLeft,y:t.pageY-e.offsetTop};e.setTicker(e.followParallax,o)},this.setTicker=function(t,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:W;g.a.clear(e.tickerId),e.tickerId="bannerElementTicker"+(Date.now()+Math.random());var a=g.a.frame,r=e.enterMouse.x,i=e.enterMouse.y,s=t.duration||450,l=I.a[t.ease||"easeOutQuad"],c="number"==typeof t.minMove?t.minMove:.08;g.a.wake(e.tickerId,function(){var t=(g.a.frame-a)*g.a.perFrame,p=l(t,c,1,s);e.enterMouse.x=r+(o.x-r)*p,e.enterMouse.y=i+(o.y-i)*p,e.setFollowStyle(e.domWH),t>=s&&(g.a.clear(e.tickerId),n())})},this.getFollowMouseMove=function(){var t=void 0;return e.followParallax&&(e.followParallax.delay?(t=e.delayTimeout?e.state.onMouseMove:null,e.delayTimeout=e.delayTimeout||g.a.timeout(function(){e.setState({onMouseMove:e.onMouseMove})},e.followParallax.delay)):t=e.onMouseMove),t},this.getFollowStyle=function(t,o){var n={};return x(t.type).forEach(function(a){var r=e.enterMouse.x,i=o.w,s=t.value;(a.indexOf("y")>=0||a.indexOf("Y")>=0)&&"opacity"!==a&&(r=e.enterMouse.y,i=o.h);var l=(r-i/2)/(i/2)*s,c=Object(A.getGsapType)(a),p=Object(A.isConvert)(c);if("transform"===p){var u=Object(A.checkStyleName)("transform");n[u]=n[u]||{},n[u][c]=Object(A.stylesToCss)(c,l).trim()}else if("filter"===p){var h=Object(A.checkStyleName)("filter");n[h]=n[h]||{},n[h][c]=Object(A.stylesToCss)(c,l).trim()}else n[p]=Object(A.stylesToCss)(c,l).trim()}),n},this.setFollowStyle=function(t){e.doms.forEach(function(o,n){if(o){var a=e.followParallax.data[n],r=e.getFollowStyle(a,t);Object.keys(r).forEach(function(e){if("object"==typeof r[e]){var t="";return Object.keys(r[e]).forEach(function(o){t+=(" "+o+"("+r[e][o]+")").trim()}),void(o.style[e]=t)}o.style[e]=e.indexOf("backgroundPosition")>=0?"calc("+(a.bgPosition||"0%")+" + "+r[e]+" )":r[e]})}})},this.getChildren=function(){return E(e.props.children).map(function(t){return t&&t.type===_?m.a.cloneElement(t,{show:e.state.show}):t})},this.reFollowParallax=function(){e.domRect&&e.setTicker(e.followParallax,{x:e.domRect.width/2-e.offsetLeft,y:e.domRect.height/2-e.offsetTop},function(){e.followParallax=null})},this.animEnd=function(){var t=e.state.show?"enter":"leave";e.props.callBack(t),e.setState(function(e,t){return{show:t.show,mouseMoveType:null}})},this.animChildren=function(t,o,n){var a=e.props,r=a.elemOffset,i=a.leaveChildHide,s=a.ratio,l=a.animType,c=a.direction,p=a.mouseMoveType,u=a.ease,h=a.duration,d=a.delay,f=a.show,y=a.sync,v=a.component;e.tickerId&&g.a.clear(e.tickerId),e.delayTimeout&&(g.a.clear(e.delayTimeout),e.delayTimeout=null),o.display="block",t.component=v,e.show=e.state.show,o.zIndex=e.state.show?1:0,t.children=f&&!y?n:e.getChildren();var w="end"===p&&s<=.3?1-s:s,T=l(m.a.createElement(L.default,t),e.state.show?"enter":"leave",c,{ease:u,duration:h,delay:d,onComplete:e.animEnd},r,i,w,"update"===e.state.mouseMoveType),b=D()(T.props,[]);return b.animation&&(b.moment=(b.animation.duration+b.animation.delay)*w||0,b.paused="update"===e.state.mouseMoveType||1===w),m.a.cloneElement(T,b)}};Y.propTypes={children:w.a.any,style:w.a.object,prefixCls:w.a.string,component:w.a.any,elemOffset:w.a.object,type:w.a.string,animType:w.a.func,ease:w.a.string,duration:w.a.number,delay:w.a.number,direction:w.a.string,callBack:w.a.func,followParallax:w.a.any,show:w.a.bool,leaveChildHide:w.a.bool,sync:w.a.bool,ratio:w.a.number,mouseMoveType:w.a.string,componentProps:w.a.object},Y.defaultProps={component:"div",componentProps:{},callBack:W,delay:0},Y.BgElement=_,Y.isBannerAnimElement=!0;var F=Y;o.d(t,"Arrow",function(){return b}),o.d(t,"Element",function(){return F}),o.d(t,"Thumb",function(){return C}),o.d(t,"animType",function(){return O}),o.d(t,"setAnimCompToTagComp",function(){return P}),o.d(t,"switchChildren",function(){return k}),R.Arrow=b,R.Element=F,R.Thumb=C,R.animType=O,R.setAnimCompToTagComp=P,R.switchChildren=k;t.default=R}}]);