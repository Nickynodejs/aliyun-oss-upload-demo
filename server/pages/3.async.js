(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3,7],{"4Ofr":function(e,t,a){e.exports={themeColor:"antd-pro\\components\\-setting-drawer\\-theme-color-themeColor",title:"antd-pro\\components\\-setting-drawer\\-theme-color-title",colorBlock:"antd-pro\\components\\-setting-drawer\\-theme-color-colorBlock"}},AcjU:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getMenuMatchKeys=t.getFlatMenuKeys=void 0;var r=l(a("jehZ")),o=l(a("eHn4")),i=l(a("gWZ8")),u=l(a("2Taf")),d=l(a("vZ4D")),c=l(a("l4Ni")),s=l(a("ujKo")),f=l(a("MhPg"));a("B9cy");var p=l(a("Ol7k")),m=n(a("q1tI")),h=l(a("bALw")),g=l(a("TSYQ")),v=l(a("wY1l")),y=l(a("mR0u")),b=n(a("oFg3")),M=a("S/9j"),E=p.default.Sider,k=function(e){var t=e.location.pathname,a=e.flatMenuKeys;return(0,M.urlToList)(t).map(function(e){return(0,b.getMenuMatches)(a,e)[0]}).filter(function(e){return e})},x=function e(t){return t.reduce(function(t,a){return t.push(a.path),a.children?t.concat(e(a.children)):t},[])};t.getFlatMenuKeys=x;var C=function(e,t){return t.reduce(function(t,a){return t.concat(e.filter(function(e){return(0,h.default)(e).test(a)}))},[])};t.getMenuMatchKeys=C;var N=function(e){function t(e){var a;return(0,u.default)(this,t),a=(0,c.default)(this,(0,s.default)(t).call(this,e)),a.isMainMenu=function(e){var t=a.props.menuData;return t.some(function(t){return!!e&&(t.key===e||t.path===e)})},a.handleOpenChange=function(e){var t=e.filter(function(e){return a.isMainMenu(e)}).length>1;a.setState({openKeys:t?[e.pop()]:(0,i.default)(e)})},a.flatMenuKeys=x(e.menuData),a.state={openKeys:k(e)},a}return(0,f.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e,t=this.props,a=(t.logo,t.collapsed),n=t.onCollapse,l=t.fixSiderbar,i=t.theme,u=this.state.openKeys,d=a?{}:{openKeys:u},c=(0,g.default)(y.default.sider,(e={},(0,o.default)(e,y.default.fixSiderbar,l),(0,o.default)(e,y.default.light,"light"===i),e));return m.default.createElement(E,{trigger:null,collapsible:!0,collapsed:a,breakpoint:"lg",onCollapse:n,width:256,theme:i,className:c},m.default.createElement("div",{className:y.default.logo,id:"logo"},m.default.createElement(v.default,{to:"/"},m.default.createElement("h1",null,"\u963f\u91cc\u4e91OSS"))),m.default.createElement(b.default,(0,r.default)({},this.props,{mode:"inline",handleOpenChange:this.handleOpenChange,onOpenChange:this.handleOpenChange,style:{padding:"16px 0",width:"100%",overflowX:"hidden"}},d)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t.pathname;return e.location.pathname!==a?{pathname:e.location.pathname,openKeys:k(e)}:null}}]),t}(m.PureComponent);t.default=N},BFsb:function(e,t,a){e.exports={content:"antd-pro\\components\\-setting-drawer\\index-content",blockChecbox:"antd-pro\\components\\-setting-drawer\\index-blockChecbox",item:"antd-pro\\components\\-setting-drawer\\index-item",selectIcon:"antd-pro\\components\\-setting-drawer\\index-selectIcon",color_block:"antd-pro\\components\\-setting-drawer\\index-color_block",title:"antd-pro\\components\\-setting-drawer\\index-title",handle:"antd-pro\\components\\-setting-drawer\\index-handle",productionHint:"antd-pro\\components\\-setting-drawer\\index-productionHint"}},HZnN:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.reloadAuthorized=void 0;var l=n(a("TUpT")),r=a("34ay"),o=(0,l.default)((0,r.getAuthority)()),i=function(){o=(0,l.default)((0,r.getAuthority)())};t.reloadAuthorized=i;var u=o;t.default=u},IGtV:function(e,t,a){e.exports={fixedHeader:"antd-pro\\layouts\\-header-fixedHeader"}},IamK:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var l=n(a("/wGt")),r=n(a("jehZ")),o=n(a("q1tI")),i=n(a("AcjU")),u=function e(t){var a=[];return t.forEach(function(t){t.children&&(a=a.concat(e(t.children))),a.push(t.path)}),a},d=function(e){var t=e.isMobile,a=e.menuData,n=e.collapsed,d=e.onCollapse;return t?o.default.createElement(l.default,{visible:!n,placement:"left",onClose:function(){return d(!0)},style:{padding:0,height:"100vh"}},o.default.createElement(i.default,(0,r.default)({},e,{flatMenuKeys:u(a),collapsed:!t&&n}))):o.default.createElement(i.default,(0,r.default)({},e,{flatMenuKeys:u(a)}))},c=d;t.default=c},JwhZ:function(e,t,a){e.exports={head:"antd-pro\\components\\-top-nav-header\\index-head",light:"antd-pro\\components\\-top-nav-header\\index-light",main:"antd-pro\\components\\-top-nav-header\\index-main",wide:"antd-pro\\components\\-top-nav-header\\index-wide",left:"antd-pro\\components\\-top-nav-header\\index-left",right:"antd-pro\\components\\-top-nav-header\\index-right",logo:"antd-pro\\components\\-top-nav-header\\index-logo"}},NtFa:function(e,t,a){"use strict";var n=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var r,o,i,u=n(a("CtXQ")),d=n(a("2Taf")),c=n(a("vZ4D")),s=n(a("l4Ni")),f=n(a("ujKo")),p=n(a("MhPg")),m=n(a("SQvw")),h=l(a("q1tI")),g=n(a("wY1l")),v=n(a("fqkP")),y=n(a("h3zL")),b=n(a("X5mu")),M=(r=(0,v.default)(600),i=function(e){function t(){var e,a;(0,d.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,s.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(l))),a.toggle=function(){var e=a.props,t=e.collapsed,n=e.onCollapse;n(!t),a.triggerResizeEvent()},a}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentWillUnmount",value:function(){this.triggerResizeEvent.cancel()}},{key:"triggerResizeEvent",value:function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!1),window.dispatchEvent(e)}},{key:"render",value:function(){var e=this.props,t=e.collapsed,a=e.isMobile,n=e.logo;return h.default.createElement("div",{className:y.default.header},a&&h.default.createElement(g.default,{to:"/",className:y.default.logo,key:"logo"},h.default.createElement("img",{src:n,alt:"logo",width:"32"})),h.default.createElement(u.default,{className:y.default.trigger,type:t?"menu-unfold":"menu-fold",onClick:this.toggle}),h.default.createElement(b.default,this.props))}}]),t}(h.PureComponent),o=i,(0,m.default)(o.prototype,"triggerResizeEvent",[r],Object.getOwnPropertyDescriptor(o.prototype,"triggerResizeEvent"),o.prototype),o);t.default=M},PceP:function(e,t,a){"use strict";var n=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var r=n(a("/wGt"));a("fOrg");var o=n(a("+KLJ"));a("+L6B");var i=n(a("2/Rp"));a("miYZ");var u=n(a("tsqr"));a("/zsF");var d=n(a("PArb"));a("Pwec");var c=n(a("CtXQ"));a("5Dmo");var s=n(a("3S7+"));a("Mwp2");var f=n(a("VXEj"));a("BoS7");var p=n(a("Sdc0")),m=n(a("2Taf")),h=n(a("vZ4D")),g=n(a("l4Ni")),v=n(a("ujKo")),y=n(a("MhPg")),b=n(a("p0pE"));a("OaEy");var M,E,k,x=n(a("2fM7")),C=l(a("q1tI")),N=a("LLXN"),S=a("P5Jw"),w=a("MuoO"),P=n(a("BGR+")),O=n(a("BFsb")),j=n(a("WJM/")),I=n(a("Pjk0")),D=x.default.Option,F=function(e){var t=e.children,a=e.title,n=e.style;return C.default.createElement("div",{style:(0,b.default)({},n,{marginBottom:24})},C.default.createElement("h3",{className:O.default.title},a),t)},K=(M=(0,w.connect)(function(e){var t=e.setting;return{setting:t}}),M((k=function(e){function t(){var e,a;(0,m.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,g.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(l))),a.state={collapse:!1},a.getLayoutSetting=function(){var e=a.props.setting,t=e.contentWidth,n=e.fixedHeader,l=e.layout,r=e.autoHideHeader,o=e.fixSiderbar;return[{title:(0,N.formatMessage)({id:"app.setting.content-width"}),action:C.default.createElement(x.default,{value:t,size:"small",onSelect:function(e){return a.changeSetting("contentWidth",e)},style:{width:80}},"sidemenu"===l?null:C.default.createElement(D,{value:"Fixed"},(0,N.formatMessage)({id:"app.setting.content-width.fixed"})),C.default.createElement(D,{value:"Fluid"},(0,N.formatMessage)({id:"app.setting.content-width.fluid"})))},{title:(0,N.formatMessage)({id:"app.setting.fixedheader"}),action:C.default.createElement(p.default,{size:"small",checked:!!n,onChange:function(e){return a.changeSetting("fixedHeader",e)}})},{title:(0,N.formatMessage)({id:"app.setting.hideheader"}),disabled:!n,disabledReason:(0,N.formatMessage)({id:"app.setting.hideheader.hint"}),action:C.default.createElement(p.default,{size:"small",checked:!!r,onChange:function(e){return a.changeSetting("autoHideHeader",e)}})},{title:(0,N.formatMessage)({id:"app.setting.fixedsidebar"}),disabled:"topmenu"===l,disabledReason:(0,N.formatMessage)({id:"app.setting.fixedsidebar.hint"}),action:C.default.createElement(p.default,{size:"small",checked:!!o,onChange:function(e){return a.changeSetting("fixSiderbar",e)}})}]},a.changeSetting=function(e,t){var n=a.props.setting,l=(0,b.default)({},n);l[e]=t,"layout"===e?l.contentWidth="topmenu"===t?"Fixed":"Fluid":"fixedHeader"!==e||t||(l.autoHideHeader=!1),a.setState(l,function(){var e=a.props.dispatch;e({type:"setting/changeSetting",payload:a.state})})},a.togglerContent=function(){var e=a.state.collapse;a.setState({collapse:!e})},a.renderLayoutSettingItem=function(e){var t=C.default.cloneElement(e.action,{disabled:e.disabled});return C.default.createElement(s.default,{title:e.disabled?e.disabledReason:"",placement:"left"},C.default.createElement(f.default.Item,{actions:[t]},C.default.createElement("span",{style:{opacity:e.disabled?"0.5":""}},e.title)))},a}return(0,y.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){var e=this,t=this.props.setting,a=t.navTheme,n=t.primaryColor,l=t.layout,s=t.colorWeak,m=this.state.collapse;return C.default.createElement(r.default,{visible:m,width:300,onClose:this.togglerContent,placement:"right",handler:C.default.createElement("div",{className:O.default.handle},C.default.createElement(c.default,{type:m?"close":"setting",style:{color:"#fff",fontSize:20}})),onHandleClick:this.togglerContent,style:{zIndex:999}},C.default.createElement("div",{className:O.default.content},C.default.createElement(F,{title:(0,N.formatMessage)({id:"app.setting.pagestyle"})},C.default.createElement(I.default,{list:[{key:"dark",url:"https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg",title:(0,N.formatMessage)({id:"app.setting.pagestyle.dark"})},{key:"light",url:"https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg",title:(0,N.formatMessage)({id:"app.setting.pagestyle.light"})}],value:a,onChange:function(t){return e.changeSetting("navTheme",t)}})),C.default.createElement(j.default,{title:(0,N.formatMessage)({id:"app.setting.themecolor"}),value:n,onChange:function(t){return e.changeSetting("primaryColor",t)}}),C.default.createElement(d.default,null),C.default.createElement(F,{title:(0,N.formatMessage)({id:"app.setting.navigationmode"})},C.default.createElement(I.default,{list:[{key:"sidemenu",url:"https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg",title:(0,N.formatMessage)({id:"app.setting.sidemenu"})},{key:"topmenu",url:"https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg",title:(0,N.formatMessage)({id:"app.setting.topmenu"})}],value:l,onChange:function(t){return e.changeSetting("layout",t)}})),C.default.createElement(f.default,{split:!1,dataSource:this.getLayoutSetting(),renderItem:this.renderLayoutSettingItem}),C.default.createElement(d.default,null),C.default.createElement(F,{title:(0,N.formatMessage)({id:"app.setting.othersettings"})},C.default.createElement(f.default.Item,{actions:[C.default.createElement(p.default,{size:"small",checked:!!s,onChange:function(t){return e.changeSetting("colorWeak",t)}})]},(0,N.formatMessage)({id:"app.setting.weakmode"}))),C.default.createElement(d.default,null),C.default.createElement(S.CopyToClipboard,{text:JSON.stringify((0,P.default)(t,["colorWeak"]),null,2),onCopy:function(){return u.default.success((0,N.formatMessage)({id:"app.setting.copyinfo"}))}},C.default.createElement(i.default,{block:!0,icon:"copy"},(0,N.formatMessage)({id:"app.setting.copy"}))),C.default.createElement(o.default,{type:"warning",className:O.default.productionHint,message:C.default.createElement("div",null,(0,N.formatMessage)({id:"app.setting.production.hint"})," ",C.default.createElement("a",{href:"https://u.ant.design/pro-v2-default-settings",target:"_blank",rel:"noopener noreferrer"},"src/defaultSettings.js"))})))}}]),t}(C.PureComponent),E=k))||E),_=K;t.default=_},Pjk0:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5Dmo");var l=n(a("3S7+"));a("Pwec");var r=n(a("CtXQ")),o=n(a("q1tI")),i=n(a("BFsb")),u=function(e){var t=e.value,a=e.onChange,n=e.list;return o.default.createElement("div",{className:i.default.blockChecbox,key:t},n.map(function(e){return o.default.createElement(l.default,{title:e.title,key:e.key},o.default.createElement("div",{className:i.default.item,onClick:function(){return a(e.key)}},o.default.createElement("img",{src:e.url,alt:e.key}),o.default.createElement("div",{className:i.default.selectIcon,style:{display:t===e.key?"block":"none"}},o.default.createElement(r.default,{type:"check"}))))}))},d=u;t.default=d},R1Dz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("q1tI"),l=(0,n.createContext)();t.default=l},"S/9j":function(e,t,a){"use strict";function n(e){var t=e.split("/").filter(function(e){return e});return t.map(function(e,a){return"/".concat(t.slice(0,a+1).join("/"))})}Object.defineProperty(t,"__esModule",{value:!0}),t.urlToList=n},"WJM/":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5Dmo");var l=n(a("3S7+")),r=n(a("jehZ"));a("Pwec");var o=n(a("CtXQ")),i=n(a("Y/ft")),u=n(a("q1tI")),d=a("LLXN"),c=n(a("4Ofr")),s=function(e){var t=e.color,a=e.check,n=(0,i.default)(e,["color","check"]);return u.default.createElement("div",(0,r.default)({},n,{style:{backgroundColor:t}}),a?u.default.createElement(o.default,{type:"check"}):"")},f=function(e){var t=e.colors,a=e.title,n=e.value,r=e.onChange,o=t;return t||(o=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890FF"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"}]),u.default.createElement("div",{className:c.default.themeColor},u.default.createElement("h3",{className:c.default.title},a),u.default.createElement("div",{className:c.default.content},o.map(function(e){var t=e.key,a=e.color;return u.default.createElement(l.default,{key:a,title:(0,d.formatMessage)({id:"app.setting.themecolor.".concat(t)})},u.default.createElement(s,{className:c.default.colorBlock,color:a,check:n===a,onClick:function(){return r&&r(a)}}))})))},p=f;t.default=p},X5mu:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("2Taf")),r=n(a("vZ4D")),o=n(a("l4Ni")),i=n(a("ujKo")),u=n(a("MhPg")),d=a("q1tI"),c=function(e){function t(){return(0,l.default)(this,t),(0,o.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return null}}]),t}(d.PureComponent);t.default=c},ctiy:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("jehZ"));a("miYZ");var o=l(a("tsqr")),i=l(a("2Taf")),u=l(a("vZ4D")),d=l(a("l4Ni")),c=l(a("ujKo")),s=l(a("MhPg"));a("B9cy");var f=l(a("Ol7k")),p=n(a("q1tI")),m=a("LLXN"),h=l(a("MFj2")),g=a("MuoO"),v=l(a("3a4m")),y=l(a("NtFa")),b=l(a("wWO0")),M=l(a("IGtV")),E=l(a("HZnN")),k=f.default.Header,x=function(e){function t(){var e,a;(0,i.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,d.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(l))),a.state={visible:!0},a.getHeadWidth=function(){var e=a.props,t=e.isMobile,n=e.collapsed,l=e.setting,r=l.fixedHeader,o=l.layout;return t||!r||"topmenu"===o?"100%":n?"calc(100% - 80px)":"calc(100% - 256px)"},a.handleNoticeClear=function(e){o.default.success("".concat((0,m.formatMessage)({id:"component.noticeIcon.cleared"})," ").concat((0,m.formatMessage)({id:"component.globalHeader.".concat(e)})));var t=a.props.dispatch;t({type:"global/clearNotices",payload:e})},a.handleMenuClick=function(e){var t=e.key,n=a.props.dispatch;"userCenter"!==t?"triggerError"!==t?"userinfo"!==t?"logout"===t&&n({type:"login/logout"}):v.default.push("/account"):v.default.push("/exception/trigger"):v.default.push("/account/center")},a.handleNoticeVisibleChange=function(e){if(e){var t=a.props.dispatch;t({type:"global/fetchNotices"})}},a.handScroll=function(){var e=a.props.autoHideHeader,t=a.state.visible;if(e){var n=document.body.scrollTop+document.documentElement.scrollTop;a.ticking||requestAnimationFrame(function(){if(a.oldScrollTop>n)return a.setState({visible:!0}),void(a.scrollTop=n);n>300&&t&&a.setState({visible:!1}),n<300&&!t&&a.setState({visible:!0}),a.oldScrollTop=n,a.ticking=!1}),a.ticking=!1}},a}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handScroll,{passive:!0})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handScroll)}},{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.handleMenuCollapse,n=e.setting,l=n.navTheme,o=n.layout,i=n.fixedHeader,u=this.state.visible,d="topmenu"===o,c=this.getHeadWidth(),s=u?p.default.createElement(k,{style:{padding:0,width:c},className:i?M.default.fixedHeader:""},d&&!t?p.default.createElement(b.default,(0,r.default)({theme:l,mode:"horizontal",Authorized:E.default,onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props)):p.default.createElement(y.default,(0,r.default)({onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props))):null;return p.default.createElement(h.default,{component:"",transitionName:"fade"},s)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.autoHideHeader||t.visible?null:{visible:!0}}}]),t}(p.PureComponent),C=(0,g.connect)(function(e){var t=e.user,a=e.global,n=e.setting,l=e.loading;return{currentUser:t.currentUser,collapsed:a.collapsed,fetchingNotices:l.effects["global/fetchNotices"],notices:a.notices,setting:n}})(x);t.default=C},gJ0l:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var r=l(a("CtXQ"));a("B9cy");var o=l(a("Ol7k")),i=n(a("q1tI")),u=l(a("ggcP")),d=o.default.Footer,c=function(){return i.default.createElement(d,{style:{padding:0}},i.default.createElement(u.default,{copyright:i.default.createElement(i.Fragment,null,"Copyright ",i.default.createElement(r.default,{type:"copyright"})," 2018 \u963f\u91cc\u4e91OSS")}))},s=c;t.default=s},ggcP:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("q1tI")),r=n(a("TSYQ")),o=n(a("wNoj")),i=function(e){var t=e.className,a=e.links,n=e.copyright,i=(0,r.default)(o.default.globalFooter,t);return l.default.createElement("footer",{className:i},a&&l.default.createElement("div",{className:o.default.links},a.map(function(e){return l.default.createElement("a",{key:e.key,title:e.key,target:e.blankTarget?"_blank":"_self",href:e.href},e.title)})),n&&l.default.createElement("div",{className:o.default.copyright},n))},u=i;t.default=u},h3zL:function(e,t,a){e.exports={header:"antd-pro\\components\\-global-header\\index-header",logo:"antd-pro\\components\\-global-header\\index-logo",menu:"antd-pro\\components\\-global-header\\index-menu",trigger:"antd-pro\\components\\-global-header\\index-trigger",right:"antd-pro\\components\\-global-header\\index-right",action:"antd-pro\\components\\-global-header\\index-action",search:"antd-pro\\components\\-global-header\\index-search",account:"antd-pro\\components\\-global-header\\index-account",avatar:"antd-pro\\components\\-global-header\\index-avatar",dark:"antd-pro\\components\\-global-header\\index-dark",name:"antd-pro\\components\\-global-header\\index-name"}},m8Tn:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("jehZ")),r=n(a("2Taf")),o=n(a("vZ4D")),i=n(a("l4Ni")),u=n(a("ujKo")),d=n(a("MhPg")),c=n(a("p0pE"));a("B9cy");var s=n(a("Ol7k")),f=n(a("q1tI")),p=n(a("ZFw/")),m=n(a("Y+p1")),h=n(a("Wwog")),g=a("MuoO"),v=a("E6Dt"),y=n(a("TSYQ")),b=n(a("bALw")),M=a("4zCG"),E=a("LLXN"),k=n(a("IamK")),x=n(a("HZnN")),C=(n(a("PceP")),n(a("gJ0l"))),N=n(a("ctiy")),S=n(a("R1Dz")),w=n(a("wOmh")),P=s.default.Content;function O(e,t,a){return e.map(function(e){var n="menu";if(a&&e.name?n="".concat(a,".").concat(e.name):e.name?n="menu.".concat(e.name):a&&(n=a),e.path){var l=(0,c.default)({},e,{locale:n,authority:e.authority||t});if(e.routes){var r=O(e.routes,e.authority,n);l.children=r}return delete l.routes,l}return null}).filter(function(e){return e})}var j=(0,h.default)(O,m.default),I={"screen-xs":{maxWidth:575},"screen-sm":{minWidth:576,maxWidth:767},"screen-md":{minWidth:768,maxWidth:991},"screen-lg":{minWidth:992,maxWidth:1199},"screen-xl":{minWidth:1200,maxWidth:1599},"screen-xxl":{minWidth:1600}},D=function(e){function t(e){var a;return(0,r.default)(this,t),a=(0,i.default)(this,(0,u.default)(t).call(this,e)),a.state={rendering:!0,isMobile:!1,menuData:a.getMenuData()},a.matchParamsPath=function(e){var t=Object.keys(a.breadcrumbNameMap).find(function(t){return(0,b.default)(t).test(e)});return a.breadcrumbNameMap[t]},a.getPageTitle=function(e){var t=a.matchParamsPath(e);if(!t)return"\u963f\u91cc\u4e91OSS";var n=(0,E.formatMessage)({id:t.locale||t.name,defaultMessage:t.name});return"".concat(n," - \u963f\u91cc\u4e91OSS")},a.getLayoutStyle=function(){var e=a.state.isMobile,t=a.props,n=t.fixSiderbar,l=t.collapsed,r=t.layout;return n&&"topmenu"!==r&&!e?{paddingLeft:l?"80px":"256px"}:null},a.getContentStyle=function(){var e=a.props.fixedHeader;return{margin:"24px 24px 0",paddingTop:e?64:0}},a.handleMenuCollapse=function(e){var t=a.props.dispatch;t({type:"global/changeLayoutCollapsed",payload:e})},a.getPageTitle=(0,h.default)(a.getPageTitle),a.getBreadcrumbNameMap=(0,h.default)(a.getBreadcrumbNameMap,m.default),a.breadcrumbNameMap=a.getBreadcrumbNameMap(),a.matchParamsPath=(0,h.default)(a.matchParamsPath,m.default),a}return(0,d.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.dispatch;t({type:"user/fetchCurrent"}),t({type:"setting/getSetting"}),this.renderRef=requestAnimationFrame(function(){e.setState({rendering:!1})}),this.enquireHandler=(0,M.enquireScreen)(function(t){var a=e.state.isMobile;a!==t&&e.setState({isMobile:t})})}},{key:"componentDidUpdate",value:function(e){this.breadcrumbNameMap=this.getBreadcrumbNameMap();var t=this.state.isMobile,a=this.props.collapsed;!t||e.isMobile||a||this.handleMenuCollapse(!1)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.renderRef),(0,M.unenquireScreen)(this.enquireHandler)}},{key:"getContext",value:function(){var e=this.props.location;return{location:e,breadcrumbNameMap:this.breadcrumbNameMap}}},{key:"getMenuData",value:function(){var e=this.props.route.routes;return j(e)}},{key:"getBreadcrumbNameMap",value:function(){var e={},t=function t(a){a.forEach(function(a){a.children&&t(a.children),e[a.path]=a})};return t(this.getMenuData()),e}},{key:"renderSettingDrawer",value:function(){this.state.rendering;return null}},{key:"render",value:function(){var e=this,t=this.props,a=t.navTheme,n=t.layout,r=t.children,o=t.location.pathname,i=this.state,u=i.isMobile,d=i.menuData,m="topmenu"===n,h=this.matchParamsPath(o),g=f.default.createElement(s.default,null,m&&!u?null:f.default.createElement(k.default,(0,l.default)({logo:null,Authorized:x.default,theme:a,onCollapse:this.handleMenuCollapse,menuData:d,isMobile:u},this.props)),f.default.createElement(s.default,{style:(0,c.default)({},this.getLayoutStyle(),{minHeight:"100vh"})},f.default.createElement(N.default,(0,l.default)({menuData:d,handleMenuCollapse:this.handleMenuCollapse,isMobile:u},this.props)),f.default.createElement(P,{style:this.getContentStyle()},f.default.createElement(x.default,{authority:h&&h.authority,noMatch:f.default.createElement(w.default,null)},r)),f.default.createElement(C.default,null)));return f.default.createElement(f.default.Fragment,null,f.default.createElement(p.default,{title:this.getPageTitle(o)},f.default.createElement(v.ContainerQuery,{query:I},function(t){return f.default.createElement(S.default.Provider,{value:e.getContext()},f.default.createElement("div",{className:(0,y.default)(t)},g))})))}}]),t}(f.default.PureComponent),F=(0,g.connect)(function(e){var t=e.global,a=e.setting;return(0,c.default)({collapsed:t.collapsed,layout:a.layout},a)})(D);t.default=F},mR0u:function(e,t,a){e.exports={logo:"antd-pro\\components\\-sider-menu\\index-logo",sider:"antd-pro\\components\\-sider-menu\\index-sider",fixSiderbar:"antd-pro\\components\\-sider-menu\\index-fixSiderbar",light:"antd-pro\\components\\-sider-menu\\index-light",icon:"antd-pro\\components\\-sider-menu\\index-icon"}},oFg3:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getMenuMatches=void 0;var r=l(a("jehZ")),o=l(a("2Taf")),i=l(a("vZ4D")),u=l(a("l4Ni")),d=l(a("ujKo")),c=l(a("MhPg"));a("Pwec");var s=l(a("CtXQ"));a("lUTK");var f=l(a("BvKs")),p=n(a("q1tI")),m=l(a("wY1l")),h=l(a("Y+p1")),g=l(a("Wwog")),v=a("LLXN"),y=l(a("bALw")),b=a("S/9j"),M=l(a("mR0u")),E=f.default.SubMenu,k=function(e){return"string"===typeof e&&0===e.indexOf("http")?p.default.createElement("img",{src:e,alt:"icon",className:M.default.icon}):"string"===typeof e?p.default.createElement(s.default,{type:e}):e},x=(0,g.default)(function(e,t){return e.filter(function(e){return e&&(0,y.default)(e).test(t)})},h.default);t.getMenuMatches=x;var C=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,u.default)(this,(0,d.default)(t).call(this,e)),a.getNavMenuItems=function(e,t){return e?e.filter(function(e){return e.name&&!e.hideInMenu}).map(function(e){var n=a.getSubMenuOrItem(e,t);return a.checkPermissionItem(e.authority,n)}).filter(function(e){return e}):[]},a.getSelectedMenuKeys=function(e){return(0,b.urlToList)(e).map(function(e){return x(a.flatMenuKeys,e).pop()})},a.getSubMenuOrItem=function(e){if(e.children&&!e.hideChildrenInMenu&&e.children.some(function(e){return e.name})){var t=e.locale?(0,v.formatMessage)({id:e.locale}):e.name;return p.default.createElement(E,{title:e.icon?p.default.createElement("span",null,k(e.icon),p.default.createElement("span",null,t)):t,key:e.path},a.getNavMenuItems(e.children))}return p.default.createElement(f.default.Item,{key:e.path},a.getMenuItemPath(e))},a.getMenuItemPath=function(e){var t=e.locale?(0,v.formatMessage)({id:e.locale}):e.name,n=a.conversionPath(e.path),l=k(e.icon),r=e.target;if(/^https?:\/\//.test(n))return p.default.createElement("a",{href:n,target:r},l,p.default.createElement("span",null,t));var o=a.props,i=o.location,u=o.isMobile,d=o.onCollapse;return p.default.createElement(m.default,{to:n,target:r,replace:n===i.pathname,onClick:u?function(){d(!0)}:void 0},l,p.default.createElement("span",null,t))},a.checkPermissionItem=function(e,t){var n=a.props.Authorized;if(n&&n.check){var l=n.check;return l(e,t)}return t},a.conversionPath=function(e){return e&&0===e.indexOf("http")?e:"/".concat(e||"").replace(/\/+/g,"/")},a.getSelectedMenuKeys=(0,g.default)(a.getSelectedMenuKeys,h.default),a.flatMenuKeys=a.getFlatMenuKeys(e.menuData),a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"getFlatMenuKeys",value:function(e){var t=this,a=[];return e.forEach(function(e){e.children&&(a=a.concat(t.getFlatMenuKeys(e.children))),a.push(e.path)}),a}},{key:"render",value:function(){var e=this.props,t=e.openKeys,a=e.theme,n=e.mode,l=e.location.pathname,o=this.getSelectedMenuKeys(l);!o.length&&t&&(o=[t[t.length-1]]);var i={};t&&(i={openKeys:t});var u=this.props,d=u.handleOpenChange,c=u.style,s=u.menuData;return p.default.createElement(f.default,(0,r.default)({key:"Menu",mode:n,theme:a,onOpenChange:d,selectedKeys:o,style:c,className:"horizontal"===n?"top-nav-menu":""},i),this.getNavMenuItems(s))}}]),t}(p.PureComponent);t.default=C},wNoj:function(e,t,a){e.exports={globalFooter:"antd-pro\\components\\-global-footer\\index-globalFooter",links:"antd-pro\\components\\-global-footer\\index-links",copyright:"antd-pro\\components\\-global-footer\\index-copyright"}},wOmh:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("q1tI")),r=a("LLXN"),o=n(a("wY1l")),i=n(a("luV/")),u=function(){return l.default.createElement(i.default,{type:"403",desc:(0,r.formatMessage)({id:"app.exception.description.403"}),linkElement:o.default,backText:(0,r.formatMessage)({id:"app.exception.back"})})},d=u;t.default=d},wWO0:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("jehZ")),o=l(a("2Taf")),i=l(a("vZ4D")),u=l(a("l4Ni")),d=l(a("ujKo")),c=l(a("MhPg")),s=n(a("q1tI")),f=l(a("wY1l")),p=l(a("X5mu")),m=l(a("oFg3")),h=l(a("JwhZ")),g=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,u.default)(this,(0,d.default)(t).call(this,e)),a.state={maxWidth:("Fixed"===e.contentWidth?1200:window.innerWidth)-330-165-4-36},a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.theme,n=t.contentWidth,l=t.logo,o=this.state.maxWidth;return s.default.createElement("div",{className:"".concat(h.default.head," ").concat("light"===a?h.default.light:"")},s.default.createElement("div",{ref:function(t){e.maim=t},className:"".concat(h.default.main," ").concat("Fixed"===n?h.default.wide:"")},s.default.createElement("div",{className:h.default.left},s.default.createElement("div",{className:h.default.logo,key:"logo",id:"logo"},s.default.createElement(f.default,{to:"/"},s.default.createElement("img",{src:l,alt:"logo"}),s.default.createElement("h1",null,"\u963f\u91cc\u4e91OSS"))),s.default.createElement("div",{style:{maxWidth:o}},s.default.createElement(m.default,(0,r.default)({},this.props,{style:{border:"none",height:64}})))),s.default.createElement(p.default,this.props)))}}],[{key:"getDerivedStateFromProps",value:function(e){return{maxWidth:("Fixed"===e.contentWidth?1200:window.innerWidth)-330-165-4-36}}}]),t}(s.PureComponent);t.default=g}}]);