(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){e.exports=a(35)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(7),r=a.n(l),s=(a(20),a(1)),c=a(2),o=a(4),m=a(3),d=a(5),p=(a(21),a(22),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleClick=function(){return a.props.onClick(a.props.index)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this.props.timeRemain/(1e4/134);return this.props.isActive&&(e=i.a.createElement("circle",{className:"stroke-bullet nav-bullet",cx:"20",cy:"20",r:"18",fill:"none",stroke:"#f77a52",strokeDasharray:"134",strokeDashoffset:20+t,transform:"rotate(-90, 20,20)"})),i.a.createElement("svg",{className:this.props.isActive?"bull-active":"bull-inactive",onClick:this.handleClick,width:"40",height:"40"},i.a.createElement("circle",{className:"inner-bullet nav-bullet",cx:"20",cy:"20",r:"18",stroke:"#e6e6e6"}),e)}}]),t}(i.a.Component)),u=a(6),v=a(9),h=a.n(v),f=a(14),g=a.n(f),E=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("ul",{className:this.props.class},Array.from({length:this.props.list.length},(function(t,a){return i.a.createElement("li",{key:a},"\u2022 ",e.props.list[a])})))}}]),t}(i.a.Component);h.a.setAppElement("body");var b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={modalIsOpen:!1},a.openModal=a.openModal.bind(Object(u.a)(a)),a.afterOpenModal=a.afterOpenModal.bind(Object(u.a)(a)),a.closeModal=a.closeModal.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"openModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"afterOpenModal",value:function(){this.subtitle.style.color="#f00"}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"render",value:function(){var e,t=this;return e=null!==this.props.projData.link?i.a.createElement("a",{className:"btn",href:this.props.projData.link,target:"blank"},"View this porject"):null,i.a.createElement("div",{className:"modal-open"},i.a.createElement("button",{className:"btn modal-open",onClick:this.openModal},"Read More"),i.a.createElement(h.a,{isOpen:this.state.modalIsOpen,onAfterOpen:this.props.clearTimer,onRequestClose:this.closeModal,onAfterClose:this.props.startTimer,style:g.a,contentLabel:"Projects Details",className:"modal-body",overlayClassName:"modal-overlay"},i.a.createElement("div",{className:"modal-content-grid"},i.a.createElement("h2",{className:"modal-head",ref:function(e){return t.subtitle=e}},this.props.projData.name),i.a.createElement(E,{class:"modal-skill",list:this.props.projData.skills}),i.a.createElement("img",{className:"modal-img",src:this.props.projData.image.src,alt:this.props.projData.image.alt}),i.a.createElement("p",{className:"modal-text"},this.props.projData.detaildesc.split("\n").map((function(e,t){return i.a.createElement("span",{key:t},"\u2003",e,i.a.createElement("br",null),i.a.createElement("br",null))}))),i.a.createElement("div",null,e),i.a.createElement("button",{className:"btn modal-close",onClick:this.closeModal},"Close"))))}}]),t}(i.a.Component),S=(a(33),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).activeVideo=function(){a.setState({vidActive:!0})},a.state={vidActive:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.imgSrc!==e.imgSrc&&this.setState({vidActive:!1})}},{key:"render",value:function(){var e;return e=null!=this.props.vidSrc?!1===this.state.vidActive?i.a.createElement("div",{className:"mediaComp-container",onClick:this.activeVideo},i.a.createElement("img",{className:"mediaComp-img",src:this.props.imgSrc,alt:this.props.imgAlt}),i.a.createElement("div",{className:"mediaComp-overlay"},i.a.createElement("img",{className:"mediaComp-playBtn",src:"./imgs/globalMedia/play.svg",alt:"Play Icon"}))):i.a.createElement("video",{className:"mediaComp-video",onPlay:this.props.clearTimer,onPause:this.props.startTimer,autoPlay:!0,muted:!0,controls:!0},i.a.createElement("source",{src:this.props.vidSrc,type:"video/mp4"})):i.a.createElement("img",{className:"mediaComp-img",src:this.props.imgSrc,alt:this.props.imgAlt}),i.a.createElement("div",{className:this.props.class},e)}}]),t}(i.a.Component)),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).timeRemain=function(){a.setState({timeRemain:a.state.timerStep-((new Date).getTime()-a.state.intervalStart)})},a.changeSlide=function(){a.state.id===a.state.idMax-1?(a.setState({id:0}),a.setState({activeIndex:0})):a.setState((function(e){return{id:e.id+1,activeIndex:e.activeIndex+1}})),a.setState({intervalStart:(new Date).getTime()})},a.navBullClick=function(e){a.setState({activeIndex:e,id:e}),a.resetTimer()},a.navPrevSlide=function(){0===a.state.id?a.setState({id:a.state.idMax-1,activeIndex:a.state.idMax-1}):a.setState((function(e){return{id:e.id-1,activeIndex:e.activeIndex-1}})),a.resetTimer()},a.navNextSlide=function(){a.state.id===a.state.idMax-1?a.setState({id:0,activeIndex:0}):a.setState((function(e){return{id:e.id+1,activeIndex:e.activeIndex+1}})),a.resetTimer()},a.clearTimer=function(){clearInterval(a.state.intervalId)},a.startTimer=function(){var e=setInterval(a.changeSlide,a.state.timerStep);a.setState({intervalStart:(new Date).getTime()}),a.setState({intervalId:e})},a.resetTimer=function(){clearInterval(a.state.intervalId);var e=setInterval(a.changeSlide,a.state.timerStep);a.setState({intervalStart:(new Date).getTime()}),a.setState({intervalId:e})},a.state={projects:[{name:"temp project",image:{src:"imgs/testImg.jpg",alt:"temp Image 1"},desc:"Lorem Ipsum",skills:["temp 1","temp 2","temp 3"],detaildesc:"temp"}],id:0,idMax:null,intervalId:null,intervalStart:null,timerStep:1e4,timeRemain:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("./data/slideShow.json").then((function(e){return e.json()})).then((function(t){e.setState({projects:t.projects,idMax:t.projects.length,activeIndex:0})}));var t=setInterval(this.changeSlide,this.state.timerStep);this.setState({intervalStart:(new Date).getTime()}),setInterval(this.timeRemain,10),this.setState({intervalId:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){var e=this,t=this.state.projects[this.state.id];return i.a.createElement("div",null,i.a.createElement("div",{className:"content-grid"},i.a.createElement("div",{className:"content-head"},i.a.createElement("h2",null,"Portfolio")),i.a.createElement("div",{className:"content-navOverlay"},i.a.createElement("div",{className:"content-slide"},i.a.createElement(S,{class:"slide-img",imgAlt:t.image.alt,imgSrc:t.image.src,vidSrc:t.video,clearTimer:this.clearTimer,startTimer:this.startTimer}),i.a.createElement("h3",{className:"slide-head"},t.name),i.a.createElement("p",{className:"slide-desc"},t.desc),i.a.createElement(E,{class:"slide-skill",list:t.skills})),i.a.createElement("img",{src:"./imgs/globalMedia/next.svg",alt:"next/prev button",className:"nav-btn",id:"next",onClick:this.navNextSlide}),i.a.createElement("img",{src:"./imgs/globalMedia/next.svg",alt:"next/prev button",className:"nav-btn",id:"prev",onClick:this.navPrevSlide}))),i.a.createElement(b,{projData:t,clearTimer:this.clearTimer,startTimer:this.startTimer}),i.a.createElement("div",{className:"content-nav"},Array.from({length:this.state.idMax},(function(t,a){return i.a.createElement(p,{index:a,key:a,isActive:e.state.activeIndex===a,onClick:e.navBullClick,timeRemain:e.state.timeRemain})}))))}}]),t}(i.a.Component);a(34);var j=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"content-head"},i.a.createElement("h3",null,"Experience")),i.a.createElement("div",{className:"content-exp"},i.a.createElement("div",{className:"edu-container"},i.a.createElement("h3",{className:"edu-head"},"Education"),i.a.createElement("p",null,"Post Elementary Schooling, International Baccalaureate (IB) program"),i.a.createElement("ul",{className:"edu-list"},i.a.createElement("li",null,"2009-2012: Mont Kiara International School, Kuala Lumpur, Malaysia"),i.a.createElement("li",null,"2012-2015: Stonehill International School, Bangalore, India"),i.a.createElement("li",null,"2015 - 2017: International School of The Hague, Netherlands"),i.a.createElement("li",null,"2018 - 2019: Hanze University of Applied Sciences, Groningen, Netherlands"),i.a.createElement("li",null,"2019 - present: The Hague University of Applied Sciences, The Hague, Netherlands"))),i.a.createElement("div",{className:"work-container"},i.a.createElement("h3",{className:"work-head"},"Work Experience"),i.a.createElement("p",{className:"work-list"},"None so far, I'm looking to change this as soon as possible."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(k,null),document.getElementById("content-protfolio")),r.a.render(i.a.createElement(j,null),document.getElementById("content-workexperience")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.406711e0.chunk.js.map