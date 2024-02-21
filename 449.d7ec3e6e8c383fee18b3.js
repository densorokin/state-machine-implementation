(self.webpackChunkstate_machine_implementation=self.webpackChunkstate_machine_implementation||[]).push([[449],{449:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>I});var s=n(848);function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},a.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,s,a={},i=Object.keys(t);for(s=0;s<i.length;s++)n=i[s],e.indexOf(n)>=0||(a[n]=t[n]);return a}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}function c(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var l=n(540),u=n(961);const p=l.createContext(null);var d=function(t){return t.scrollTop},h="unmounted",f="exited",x="entering",v="entered",m="exiting",b=function(t){function e(e,n){var s;s=t.call(this,e,n)||this;var a,i=n&&!n.isMounting?e.enter:e.appear;return s.appearStatus=null,e.in?i?(a=f,s.appearStatus=x):a=v:a=e.unmountOnExit||e.mountOnEnter?h:f,s.state={status:a},s.nextCallback=null,s}o(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===h?{status:f}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==x&&n!==v&&(e=x):n!==x&&n!==v||(e=m)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,s=this.props.timeout;return t=e=n=s,null!=s&&"number"!=typeof s&&(t=s.exit,e=s.enter,n=void 0!==s.appear?s.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===x){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this);n&&d(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===f&&this.setState({status:h})},n.performEnter=function(t){var e=this,n=this.props.enter,s=this.context?this.context.isMounting:t,a=this.props.nodeRef?[s]:[u.findDOMNode(this),s],i=a[0],r=a[1],o=this.getTimeouts(),c=s?o.appear:o.enter;t||n?(this.props.onEnter(i,r),this.safeSetState({status:x},(function(){e.props.onEntering(i,r),e.onTransitionEnd(c,(function(){e.safeSetState({status:v},(function(){e.props.onEntered(i,r)}))}))}))):this.safeSetState({status:v},(function(){e.props.onEntered(i)}))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:u.findDOMNode(this);e?(this.props.onExit(s),this.safeSetState({status:m},(function(){t.props.onExiting(s),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:f},(function(){t.props.onExited(s)}))}))}))):this.safeSetState({status:f},(function(){t.props.onExited(s)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,e.nextCallback=null,t(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this),s=null==t&&!this.props.addEndListener;if(n&&!s){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],r=a[1];this.props.addEndListener(i,r)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===h)return null;var e=this.props,n=e.children,s=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,i(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return l.createElement(p.Provider,{value:null},"function"==typeof n?n(t,s):l.cloneElement(l.Children.only(n),s))},e}(l.Component);function E(){}b.contextType=p,b.propTypes={},b.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E},b.UNMOUNTED=h,b.EXITED=f,b.ENTERING=x,b.ENTERED=v,b.EXITING=m;const N=b;var g=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.remove(s):"string"==typeof n.className?n.className=c(n.className,s):n.setAttribute("class",c(n.className&&n.className.baseVal||"",s)));var n,s}))},j=function(t){function e(){for(var e,n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var s=e.resolveArguments(t,n),a=s[0],i=s[1];e.removeClasses(a,"exit"),e.addClass(a,i?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var s=e.resolveArguments(t,n),a=s[0],i=s[1]?"appear":"enter";e.addClass(a,i,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var s=e.resolveArguments(t,n),a=s[0],i=s[1]?"appear":"enter";e.removeClasses(a,i),e.addClass(a,i,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,s="string"==typeof n,a=s?(s&&n?n+"-":"")+t:n[t];return{baseClassName:a,activeClassName:s?a+"-active":n[t+"Active"],doneClassName:s?a+"-done":n[t+"Done"]}},e}o(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var s=this.getClassNames(e)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&a&&(s+=" "+a),"active"===n&&t&&d(t),s&&(this.appliedClasses[e][n]=s,function(t,e){t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.add(s):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,s)||("string"==typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))}(t,s))},n.removeClasses=function(t,e){var n=this.appliedClasses[e],s=n.base,a=n.active,i=n.done;this.appliedClasses[e]={},s&&g(t,s),a&&g(t,a),i&&g(t,i)},n.render=function(){var t=this.props,e=(t.classNames,i(t,["classNames"]));return l.createElement(N,a({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(l.Component);j.defaultProps={classNames:""},j.propTypes={};const C=j;var y=n(975),k=n(924),A=function(t){var e=t.children,n=t.onClick,a=t.dataTestId,i=t.className;return(0,s.jsx)("div",{children:(0,s.jsx)("button",{"data-testid":a,className:(0,y.x)(k.A.btn,{},[i]),onClick:n,children:e})})},S=n(479),O=function(t){var e=t.dataTestId,n=t.active,a=t.children,i=t.next,r=t.prev,o=t.subtitle,c=t.title;return(0,s.jsx)(C,{in:n,timeout:300,classNames:"swipe",unmountOnExit:!0,children:(0,s.jsx)("div",{"data-testid":e,children:(0,s.jsxs)("div",{className:S.A.card,children:[(0,s.jsxs)("header",{className:S.A.header,children:[(0,s.jsx)("h2",{className:S.A.title,children:c}),(0,s.jsx)("p",{className:S.A.subtitle,children:o})]}),(0,s.jsx)("div",{className:S.A.main,children:a}),(0,s.jsxs)("div",{className:S.A.actions,children:[r&&(0,s.jsx)(A,{dataTestId:"".concat(e,"-prev-card-btn"),className:S.A.btn_prev,onClick:r.action,children:r.content}),i&&(0,s.jsx)(A,{className:S.A.btn_next,onClick:i.action,dataTestId:"".concat(e,"-next-card-btn"),children:i.content})]})]})})})},T=n(646),_=n(651),M=n(967),w=function(){var t=(0,l.useContext)(M.V).machineTemplate,e=(0,T.useStateMachine)("initial",t),n=e.transition,a=e.machineState;return(0,l.useEffect)((function(){"loading"===a&&setTimeout((function(){n("success")}),1500)}),[a]),(0,s.jsxs)("div",{className:_.A.wizard,"data-testid":"wizard-container",children:[(0,s.jsx)(O,{dataTestId:"initial",active:"initial"===a,next:{action:function(){return n("start")},content:"Start"},subtitle:"Thank you for taking part in our survey",title:"Survey"}),(0,s.jsx)(O,{dataTestId:"personal",active:"personal"===a,next:{action:function(){return n("next")},content:"Next"},subtitle:"Tell us about you!",title:"Personal",children:(0,s.jsxs)("div",{className:_.A["input-group"],children:[(0,s.jsx)("label",{htmlFor:"name",className:"label",children:"Name"}),(0,s.jsx)("input",{type:"text",placeholder:"Floppa",id:"name",className:"input"})]})}),(0,s.jsxs)(O,{dataTestId:"occupation",active:"occupation"===a,prev:{action:function(){return n("back")},content:"Back"},subtitle:"Do you work or study?",title:"Occupation",children:[(0,s.jsx)("div",{className:_.A["input-group"],children:(0,s.jsxs)("label",{htmlFor:"occupationStudent",className:_.A["label-radio"],children:[(0,s.jsx)("input",{"data-testid":"input-occupation-student",type:"radio",name:"occupation",id:"occupationStudent",className:_.A["input-radio"],onChange:function(){return n("education")}}),(0,s.jsx)("span",{className:_.A["label-radio__toggler"]}),(0,s.jsx)("span",{className:_.A["label-radio__content"],children:"Student"})]})}),(0,s.jsx)("div",{className:"input-group",children:(0,s.jsxs)("label",{htmlFor:"occupationWorker",className:_.A["label-radio"],children:[(0,s.jsx)("input",{"data-testid":"input-occupation-worker",type:"radio",name:"occupation",id:"occupationWorker",className:_.A["input-radio"],onChange:function(){return n("work")}}),(0,s.jsx)("span",{className:_.A["label-radio__toggler"]}),(0,s.jsx)("span",{className:_.A["label-radio__content"],children:"Worker"})]})})]}),(0,s.jsx)(O,{dataTestId:"work",active:"work"===a,next:{action:function(){n("send")},content:"Send survey"},prev:{action:function(){return n("back")},content:"Back"},subtitle:"Wow! What's your job?",title:"Work",children:(0,s.jsxs)("div",{className:_.A["input-group"],children:[(0,s.jsx)("label",{htmlFor:"job",className:"label",children:"Job"}),(0,s.jsx)("input",{type:"text",placeholder:"Caracal",id:"job",className:_.A.input})]})}),(0,s.jsx)(O,{dataTestId:"education",active:"education"===a,next:{action:function(){n("send")},content:"Send survey"},prev:{action:function(){return n("back")},content:"Back"},subtitle:"That's great! What's your future profession?",title:"Education",children:(0,s.jsxs)("div",{className:_.A["input-group"],children:[(0,s.jsx)("label",{htmlFor:"profession",className:_.A.label,children:"Profession"}),(0,s.jsx)("input",{type:"text",placeholder:"Meme",id:"profession",className:_.A.input})]})}),"loading"===a&&(0,s.jsx)("div",{"data-testid":"loader",children:"...loader"}),(0,s.jsx)(O,{dataTestId:"survey",active:"success"===a,prev:{action:function(){return n("reset")},content:"Take another survey"},subtitle:"Thank you for your response! Want another survey?",title:"We got it!"})]})};const I=function(t){return t.className,(0,s.jsx)("div",{children:(0,s.jsx)(w,{})})}},651:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});const s={wizard:"ExT4LJdc","input-group":"q3S65XCF",label:"V8DanaLz",input:"tYZgRO91","input-radio":"qlsOfr1u","label-radio":"Pavis337","label-radio__toggler":"nSz6A0yT"};var a=n(140)(t.id,{locals:!0});t.hot.dispose(a)},924:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});const s={btn:"zHhbOiIz",btn_next:"AL6dinL6",btn_prev:"f5l94aKy"};var a=n(140)(t.id,{locals:!0});t.hot.dispose(a)},479:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});const s={card:"zcA82_uf",header:"NIbgUUYx",title:"jojwqQIU",subtitle:"yqtB_i3L",main:"zLSPn4Qu",actions:"qUckOTuz",action:"hBRzFSxs",action_prev:"hQY2Y1A6","swipe-enter":"rFbEwAhR","swipe-enter-active":"vmgT2BQN","swipe-exit":"Wn2A1zIo","swipe-exit-active":"aGp5b1SW",btn_next:"FXkoAGt1",btn_prev:"bgVbybfa"};var a=n(140)(t.id,{locals:!0});t.hot.dispose(a)},646:(t,e,n)=>{var s;self,t.exports=(s=n(540),(()=>{"use strict";var t={960:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStateMachine=void 0;var s=n(764);Object.defineProperty(e,"useStateMachine",{enumerable:!0,get:function(){return s.useStateMachine}})},764:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStateMachine=void 0;const s=n(496),a=n(672);e.useStateMachine=(t,e)=>{const n=(0,a.createMachine)(t,e),[i,r]=(0,s.useState)(t);return{transition:t=>{r(n.transition(i,t))},machineState:i}}},672:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createMachine=void 0,e.createMachine=function(t,e){const n={value:t,transition(t,s){var a,i;const r=e[t],o=r.transitions[s];if(!o)return;const c=o.target,l=e[c];return null==o||o.action(),null===(a=r.actions)||void 0===a||a.onOutAction(),null===(i=l.actions)||void 0===i||i.onInAction(),n.value=c,n.value}};return n}},496:t=>{t.exports=s}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}var a={};return(()=>{var t=a;Object.defineProperty(t,"__esModule",{value:!0}),t.createMachine=t.useStateMachine=void 0;var e=n(960);Object.defineProperty(t,"useStateMachine",{enumerable:!0,get:function(){return e.useStateMachine}});var s=n(672);Object.defineProperty(t,"createMachine",{enumerable:!0,get:function(){return s.createMachine}})})(),a})())}}]);