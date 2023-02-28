(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();const E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJtSURBVHgB7dy/axNhHMfxTyVdquKgDg1YcNFCp3LnnsUtxMX6H9TF2blkFtzTLm5Cu0iiU/4Df+Di0BQUccgNCmKjdehQvQ46tHe9IznySZ/3CwKBJ2TIm3vy3JeQufsv4iPNuJ17b/49j+NYs+yCYIUgZghihiBmCGKGIGYIYqamCqxcjbS2vJ65/utwpCevHwsnVRLk+sKiVq5FmetfDxLhdGxZZghihiBmCGKGIGYIYoYgZghihiBmCGKm0OgknU01lpoqKh2d5FmYv6RHqxsqKp19PfvwVCEoFCT9gMsEOcvF+cul3i+dfYUShC3LDEHMEMQMQcwQxAxBzBQ69n7e39P27qaKunnllu4sNjLX0/uKVx+fq6j09aEoFuTH3vGjqMaNZm6Qg8Of2hlsCSexZZkhiBmCmCGIGYKYIYgZgpip5Le97qIo0rQkSaLhcJi5HmSQTqejaWm327lB2LLMVHKFnDX7Cmk2VVY1QUrOvvAfW5YZgpghiJkgj715x86qjUb5B5ogg7RaLbliyzJTW7u9LviYO/pL5wh/YIaJqm32dzXrHt5d1nlR2+oPNOvKBqnX65qW9Nibd/QN8tjb7XY1Len4vdfrZa7zHWKGIGYIYoYgZghihiBmCGImyPsQ53kXV4gZgpghiBmCmCGIGYKYIYgZgpghiJmx7tQ3HqyqGS9pkl6+/aL29nuFiivEDEHMEMQMQcwQxAxBzIx17E2+/9a7T980SYNkXyEbK8jx74L7wgSxZZkhiBmCmCGIGYKYIYgZgpghiBmCmCGIGYKYIYgZgpghiBmCmCGIGYKYIYgZgpghiJk/WTJ+U8D58q8AAAAASUVORK5CYII=",H="/assets/images/clock-69019c39.png",I="/assets/images/settings-284d2470.png",M="data:image/png;base64,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",p=[{name:"Calculator",icon:E,id:"calculator",tag:"os-app-calculator",isInDock:!0},{name:"Settings",icon:I,id:"settings",tag:"os-app-settings"},{name:"Tic Tac Toe",icon:M,id:"tictactoe",tag:"os-app-tictactoe",isInDock:!0},{name:"Clock",icon:H,id:"os-app-clock",tag:"os-app-clock",isInDock:!0,tabs:[{name:"Clock",icon:"icon-clock",id:"os-tab-clock",tag:"os-tab-clock"},{name:"Stopwatch",icon:"icon-stopwatch",id:"os-tab-stopwatch",tag:"os-tab-stopwatch"},{name:"Timer",icon:"icon-hourglass",id:"os-tab-timer",tag:"os-tab-timer"}],defaultTab:"os-tab-clock"}];class B extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();for(let t=0;t<this.idInDock.length;t++){const e=this.idInDock[t];this.shadow.getElementById(e).addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("open-app",{detail:{id:e,pushHistory:!0}}))})}}disconnectedCallback(){console.log("disconnectedCallback")}render(){this.shadow.innerHTML=`
      <style>
        :host {
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;

          background: var(--color-dock-background);
          backdrop-filter: blur(10px);
        }
      </style>
      ${this.iconsInDock}
    `}get iconsInDock(){const e=p.filter(s=>s.isInDock).map(s=>`
        <os-app-icon id="${s.id}" name="${s.name}" icon="${s.icon}"></os-app-icon>
      `);return e.length!==4&&console.warn("Dock should have 4 icons for lookin good"),e.join("")}get idInDock(){return p.filter(s=>s.isInDock).map(s=>s.id)}}customElements.define("os-dock",B);const V="/assets/images/battery-empty-7dddc413.svg",A="/assets/images/battery-quarter-91ab0e99.svg",u=[{categoryName:"General",settings:[{name:"Vibration",localStorageKey:"os-vibration",id:"os-vibration",type:"checkbox",value:!0},{name:"Vibration duration",dependsOn:"os-vibration",dependsOnValue:!0,localStorageKey:"os-vibration-duration",id:"os-vibration-duration",type:"number",value:100},{name:"Theme",localStorageKey:"os-theme",id:"os-theme",type:"select",options:[{name:"Light",value:"light"},{name:"Dark",value:"dark"}],value:"dark"}]},{categoryName:"Topbar",settings:[{name:"Show date",localStorageKey:"topbar-show-date",id:"topbar-show-date",type:"checkbox",value:!0},{name:"Date format",dependsOn:"topbar-show-date",dependsOnValue:!0,localStorageKey:"topbar-date-format",id:"topbar-date-format",type:"select",options:[{name:"dd/mm/yyyy",value:"dd/mm/yyyy"},{name:"dd/mm",value:"dd/mm"},{name:"dd",value:"dd"}],value:"dd/mm/yyyy"},{name:"Show time",localStorageKey:"topbar-show-time",id:"topbar-show-time",type:"checkbox",value:!0},{name:"Time format",dependsOn:"topbar-show-time",dependsOnValue:!0,localStorageKey:"topbar-time-format",id:"topbar-time-format",type:"select",options:[{name:"hh:mm:ss",value:"hh:mm:ss"},{name:"hh:mm",value:"hh:mm"},{name:"hh",value:"hh"}],value:"hh:mm:ss"},{name:"Show battery",localStorageKey:"topbar-show-battery",id:"topbar-show-battery",type:"checkbox",value:!0},{name:"Show ping",localStorageKey:"topbar-show-ping",id:"topbar-show-ping",type:"checkbox",value:!0},{name:"Ping domain",dependsOn:"topbar-show-ping",dependsOnValue:!0,localStorageKey:"topbar-ping-domain",id:"topbar-ping-domain",type:"text",value:"https://jsonplaceholder.typicode.com/todos/1"},{name:"Ping interval",dependsOn:"topbar-show-ping",dependsOnValue:!0,localStorageKey:"topbar-ping-interval",id:"topbar-ping-interval",type:"number",value:1},{name:"Show vibration status",localStorageKey:"topbar-show-vibration-status",id:"topbar-show-vibration-status",type:"checkbox",value:!0}]},{categoryName:"Tic Tac Toe",settings:[{name:"Reset progression",localStorageKey:"tictactoe-scores",id:"tictactoe-scores",type:"delete",value:null}]}],l=i=>{for(let t=0;t<u.length;t++){const e=u[t];for(let s=0;s<e.settings.length;s++){const o=e.settings[s];if(o.id===i)return o}}return console.warn(`Setting with id ${i} not found`),null},r=i=>{const t=localStorage.getItem(i.localStorageKey);if(i.type==="select")return t===null?i.value:t;if(i.type==="text"||i.type==="number")return t===null?i.value:t;if(i.type==="checkbox")return t===null?i.value:t==="true"},q=()=>{const i=new File([JSON.stringify(localStorage)],"web-os.config.json"),t=document.createElement("a");t.style.display="none",t.download=i.name,t.href=URL.createObjectURL(i),document.body.appendChild(t),t.click(),t.remove()},P=i=>{const t=new FileReader;t.readAsText(i),t.onload=e=>{localStorage.clear();const s=JSON.parse(e.target.result);for(let o in s)localStorage.setItem(o,s[o]);window.location.reload()}};class O extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.isTimeVisible=r(l("topbar-show-time")),this.isVibrationVisible=r(l("topbar-show-vibration-status")),this.isDateVisible=r(l("topbar-show-date")),this.isPingVisible=r(l("topbar-show-ping")),this.isBatteryVisible=r(l("topbar-show-battery")),this.reponseTimes=[],this.pingInterval=null}defineAllEventListeners(){document.addEventListener("changeSetting",t=>{const e=()=>{clearInterval(this.timeInterval),clearInterval(this.pingInterval),this.render()};t.detail.setting==="topbar-show-time"?(this.isTimeVisible=t.detail.value,e()):t.detail.setting==="topbar-time-format"?e():t.detail.setting==="topbar-show-vibration-status"?(this.isVibrationVisible=t.detail.value,e()):t.detail.setting==="topbar-show-date"?(this.isDateVisible=t.detail.value,e()):t.detail.setting==="topbar-date-format"?e():t.detail.setting==="topbar-show-ping"?(this.isPingVisible=t.detail.value,e()):t.detail.setting==="topbar-ping-domain"||t.detail.setting==="topbar-ping-interval"?e():t.detail.setting==="topbar-show-battery"?(this.isBatteryVisible=t.detail.value,e()):t.detail.setting==="os-vibration"&&e()})}connectedCallback(){this.render(),this.defineAllEventListeners()}updateTime(){const t=new Date;let e=t.getHours();e=e<10?`0${e}`:e;let s=t.getMinutes();s=s<10?`0${s}`:s;let o=t.getSeconds();o=o<10?`0${o}`:o;let n=t.getDate();n=n<10?`0${n}`:n;let a=t.getMonth()+1;a=a<10?`0${a}`:a;const h=t.getFullYear();if(this.isTimeVisible){const d=this.shadow.querySelector(".hour"),c=r(l("topbar-time-format"));c==="hh"?d.textContent=`${e}`:c==="hh:mm"?d.textContent=`${e}:${s}`:(c==="hh:mm:ss"||c===null)&&(d.textContent=`${e}:${s}:${o}`)}if(this.isDateVisible){const d=this.shadow.querySelector(".date"),c=r(l("topbar-date-format"));c==="dd"?d.textContent=`${n}`:c==="dd/mm"?d.textContent=`${n}/${a}`:(c==="dd/mm/yyyy"||c===null)&&(d.textContent=`${n}/${a}/${h}`)}}checkPing(){if(this.isPingVisible){const t=r(l("topbar-ping-interval"));this.pingInterval=setInterval(()=>{const e=Date.now(),s=r(l("topbar-ping-domain"));fetch(s).then(o=>o.json()).then(()=>{const n=Date.now()-e;this.reponseTimes.push(n),this.reponseTimes.length>5&&this.reponseTimes.shift();const a=this.reponseTimes.reduce((d,c)=>d+c)/this.reponseTimes.length,h=this.shadow.querySelector(".ping");this.reponseTimes.length===5&&(h.textContent=`${Math.round(a)} ms`)})},t*1e3)}else this.pingInterval&&clearInterval(this.pingInterval)}checkBattery(){if(!this.isBatteryVisible)return;const t=this.shadow.querySelector(".battery");if(navigator.getBattery){const e=(s,o)=>{let n=`${Math.round(s*100)}%`;o?n+="<icon-bolt></icon-bolt>":s>=.75?n+="<icon-battery-full></icon-battery-full>":s>=.5?n+="<icon-battery-three-quarters></icon-battery-three-quarters>":s>=.25?n+="<icon-battery-half></icon-battery-half>":s>=.1?n+=`<img src="${A}">`:n+=`<img src="${V}">`,t.innerHTML=n};navigator.getBattery().then(s=>{e(s.level,s.charging),s.addEventListener("levelchange",()=>{e(s.level,s.charging)}),s.addEventListener("chargingchange",()=>{e(s.level,s.charging)})})}else console.warn("Battery API not supported"),t.innerHTML="--- <icon-battery-half></icon-battery-half>"}addTopbarItems(){const t=document.createElement("div");t.classList.add("left");const e=document.createElement("div");e.classList.add("center");const s=document.createElement("div");if(s.classList.add("right"),this.isTimeVisible){const o=document.createElement("span");o.classList.add("hour"),o.textContent="12:00",t.append(o)}if(this.isVibrationVisible){const o=document.createElement("span");o.classList.add("vibration"),r(l("os-vibration"))?o.innerHTML="<icon-bell></icon-bell>":o.innerHTML="<icon-bell-slash></icon-bell-slash>",t.append(o)}if(this.isDateVisible){const o=document.createElement("span");o.classList.add("date"),e.append(o)}if(this.isPingVisible){const o=document.createElement("span");o.classList.add("ping"),o.textContent=`${this.reponseTimes.length===5?Math.round(this.reponseTimes.reduce((n,a)=>n+a)/this.reponseTimes.length):"---"} ms`,s.append(o)}if(this.isBatteryVisible){const o=document.createElement("span");o.classList.add("battery"),o.textContent="100%",s.append(o)}this.shadow.append(t,e,s)}render(){this.shadow.innerHTML=`
      <style>
        :host {
          color: var(--color-text);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: 1fr;
          grid-template-areas: "left center right";
          grid-gap: 0.5rem;
          align-items: center;
          padding: 0 1rem;
          height: 30px;

          background: var(--color-topbar-background);
          backdrop-filter: blur(10px);

          font-size: 0.8rem;
        }
        :host span.date {
          font-size: 0.9rem;
        }
        :host .left, .center, .right {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        :host .left > *, .center > *, .right > * {
          display: flex;
          align-items: center;
        }
        :host .left {
          grid-area: left;
          justify-content: flex-start;
        }
        :host .center {
          grid-area: center;
          justify-content: center;
        }
        :host .right {
          grid-area: right;
          justify-content: flex-end;
        }

        :host .right .battery img {
          padding-left: 0.2rem;
        }
      </style>
    `,this.addTopbarItems(),this.updateTime(),this.timeInterval=setInterval(()=>{this.updateTime()},1e3),this.checkPing(),this.checkBattery()}}customElements.define("os-topbar",O);class D extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["name","icon","show-name"]}get name(){return this.getAttribute("name")}set name(t){this.setAttribute("name",t)}get icon(){return this.getAttribute("icon")}set icon(t){this.setAttribute("icon",t)}get showName(){return typeof this.getAttribute("show-name")=="string"}set showName(t){this.setAttribute("show-name",t)}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }
        :host img {
          width: 50px;
          height: 50px;
          border-radius: 0.5rem;
        }
        :host > span {
          font-size: 0.8rem;
        }
      </style>
      <img src="${this.icon}" alt="${this.name}" />
      ${this.showName?`<span>${this.name}</span>`:""}
    `}}customElements.define("os-app-icon",D);class j extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.notInDockApps=p.filter(t=>t.isInDock!==!0)}genererateHtmlForApps(){return this.notInDockApps.map(e=>`
        <os-app-icon id="${e.id}" name="${e.name}" icon="${e.icon}" show-name></os-app-icon>
      `).join("")}connectedCallback(){this.render();for(let t=0;t<this.notInDockApps.length;t++){const e=this.notInDockApps[t].id;this.shadow.getElementById(e).addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("open-app",{detail:{id:e,pushHistory:!0}}))})}}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          padding: 2rem;
          display: grid;
          grid-gap: 2rem;
          grid-template-columns: repeat(auto-fill, 50px);
          justify-content: center;
          grid-template-rows: repeat(auto-fill, 73px);
        }
      </style>
      ${this.genererateHtmlForApps()}
    `}}customElements.define("os-home-screen",j);let Y=class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.app=null}connectedCallback(){this.render(),document.addEventListener("open-app",({detail:t})=>{this.openApp(t.id,t.pushHistory)}),this.shadow.querySelector("#close").addEventListener("click",()=>{this.closeApp(!0)}),document.addEventListener("close-app",({detail:t})=>{this.closeApp(t.pushHistory)}),this.observer=new MutationObserver(()=>{this.render()}),this.observer.observe(this,{childList:!0,subtree:!0})}changeUrl(t){let e;this.app?e=new URL(`#${this.app.id}`,window.location.href):e=new URL("",window.location.href),t&&window.history.pushState({},"",e)}openApp(t,e){if(this.app=p.find(s=>s.id===t),!this.app)return console.warn(`App ${t} not found`);this.shadow.querySelector("#app").innerHTML=`
      <${this.app.tag}></${this.app.tag}>
    `,this.classList.add("open"),this.changeUrl(e)}closeApp(t){this.classList.contains("open")&&(this.app=null,this.classList.remove("open"),this.shadow.querySelector("#app").innerHTML="",this.changeUrl(t))}attributeChangedCallback(t,e,s){t==="count"&&this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: none;
          position: fixed;
          top: 30px;
          left: 0;
          width: 100%;
          height: calc(100% - 30px);
          background-color: #fff;
        }
        :host(.open) {
          display: block;
        }
        :host #app, :host #app > * {
          width: 100%;
          height: 100%;
          display: block;
          box-sizing: border-box;
          background-color: var(--color-background);
        }
        :host #app > * {
          max-width: 100%;
          overflow-y: auto;
        }
        :host #close {
          all: unset;
          position: absolute;
          top: 1rem;
          right: 1rem;
          cursor: pointer;
          font-size: 1.5rem;
          background-color: var(--color-red-dark);
          color: var(--color-red-darker);
          border-radius: 200px;
          height: 1.5rem;
          width: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
      </style>
      <button id="close">×</button>
      <div id="app">
      </div>
    `}};customElements.define("os-app-wrapper",Y);class $ extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.app=p.find(t=>t.id==="os-app-clock"),this.tabs=this.app.tabs,this.curentTab=this.app.defaultTab}connectedCallback(){this.render()}changeTab(t){this.curentTab=this.tabs.find(e=>e.id===t).tag,this.render()}render(){const t=new Date;t.getHours(),t.getMinutes(),t.getSeconds(),this.shadow.innerHTML=`
      <style>
        :host {
          display: grid !important;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 5rem;
          background: var(--color-background);
        }
        
        :host .tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
          background: var(--color-background-light);
        }
        
        :host .tabs .tab {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        
        :host .tabs .tab span {
          font-size: 0.8rem;
          color: var(--color-text);
        }
        
        :host .tabs .tab.active span {
          font-weight: bold;
          font-size: 1rem;
        }

        :host .current-tab {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>
      <div class="current-tab">
        <${this.curentTab} class=""></${this.curentTab}>
      </div>
      <div class="tabs">
        ${this.tabs.map(e=>`
            <div class="tab ${this.curentTab===e.tag?"active":""}" id="${e.id}">
              <${e.icon}></${e.icon}>
              <span>${e.name}</span>
            </div>
          `).join("")}
      </div>
    `,this.shadow.querySelectorAll(".tab").forEach(e=>{e.addEventListener("click",()=>{this.changeTab(e.id)})})}}customElements.define("os-app-clock",$);class K extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}connectedCallback(){this.render(),this.clock(),this.interval=setInterval(this.clock.bind(this),100)}disconnectedCallback(){clearInterval(this.interval)}clock(){const t=new Date,e=t.getHours(),s=t.getMinutes(),o=t.getSeconds(),n=t.getDate(),a=t.getMonth()+1,h=t.getFullYear(),d=e*30+s*(360/720),c=s*6+o*(360/3600),w=o*6,x=this.shadow.querySelector(".hour-hand"),C=this.shadow.querySelector(".minute-hand"),k=this.shadow.querySelector(".second-hand"),S=this.shadow.querySelector(".date"),L=this.shadow.querySelector(".day"),T=this.weekday[t.getDay()];x.style.transform="rotate("+d+"deg)",C.style.transform="rotate("+c+"deg)",k.style.transform="rotate("+w+"deg)",S.innerHTML=`${n.toString().padStart(2,"0")}/${a.toString().padStart(2,"0")}/${h}`,L.innerHTML=T}render(){this.shadow.innerHTML=`
      <style>
        :host {
          background: #ececec;
          width: 300px;
          height: 300px;
          margin: auto;
          border-radius: 50%;
          border: 14px solid #333;
          position: relative;
          box-shadow: 0 2vw 4vw -1vw rgba(0,0,0,0.8);
        }

        :host .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ccc;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          position: absolute;
          z-index: 10;
          box-shadow: 0 2px 4px -1px black;
        }
        
        :host .hour-hand {
          position: absolute;
          z-index: 5;
          width: 4px;
          height: 65px;
          background: #333;
          top: 79px;
          transform-origin: 50% 72px;
          left: 50%;
          margin-left: -2px;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
        }
        
        :host .minute-hand {
          position: absolute;
          z-index: 6;
          width: 4px;
          height: 100px;
          background: #666;
          top: 46px;
          left: 50%;
          margin-left: -2px;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          transform-origin: 50% 105px;
        }
        
        :host .second-hand {
          position: absolute;
          z-index: 7;
          width: 2px;
          height: 120px;
          background: gold;
          top: 26px;
          lefT: 50%;
          margin-left: -1px;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          transform-origin: 50% 125px;
        }
        
        span {
          display: inline-block;
          position: absolute;
          color: #333;
          font-size: 22px;
          font-family: var(--font-family);
          font-weight: 700;
          z-index: 4;
        }
        
        :host .h12 {
          top: 30px;
          left: 50%;
          margin-left: -9px;
        }
        :host .h3 {
          top: 140px;
          right: 30px;
        }
        :host .h6 {
          bottom: 30px;
          left: 50%;
          margin-left: -5px;
        }
        :host .h9 {
          left: 32px;
          top: 140px;
        }
        
        :host .diallines {
          position: absolute;
          z-index: 2;
          width: 2px;
          height: 15px;
          background: #666;
          left: 50%;
          margin-left: -1px;
          transform-origin: 50% 150px;
        }
        :host .diallines:nth-of-type(5n) {
          position: absolute;
          z-index: 2;
          width: 4px;
          height: 25px;
          background: #666;
          left: 50%;
          margin-left: -1px;
          transform-origin: 50% 150px;
        }
        
        :host .info {
          position: absolute;
          width: 120px;
          height: 20px;
          border-radius: 7px;
          background: #ccc;
          text-align: center;
          line-height: 20px;
          color: #000;
          font-size: 11px;
          top: 200px;
          left: 50%;
          margin-left: -60px;
          font-family: var(--font-family);
          z-index: 3;
          letter-spacing: 3px;
          margin-left: -60px;
          left: 50%;
        }
        :host .date {
            top: 80px;
          }
        :host .day {
            top: 200px;
        }
      </style>
      <div>
        <div class="info date"></div>
        <div class="info day"></div>
      </div>
      <div class="dot"></div>
      <div>
        <div class="hour-hand"></div>
        <div class="minute-hand"></div>
        <div class="second-hand"></div>
      </div>
      <div>
        <span class="h3">3</span>
        <span class="h6">6</span>
        <span class="h9">9</span>
        <span class="h12">12</span>
      </div>
      <div class="diallines"></div>
    `;for(var t=1;t<60;t++)this.shadow.innerHTML+="<div class='diallines'></div>",this.dialLines=this.shadow.querySelectorAll(".diallines"),this.dialLines[t].style.transform="rotate("+6*t+"deg)"}}customElements.define("os-tab-clock",K);class Z extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.isPlay=!1,this.minCounter=0,this.min,this.secCounter=0,this.sec,this.centiCounter=0,this.centiSec,this.lapId=0}connectedCallback(){this.render(),this.playBtn=this.shadow.querySelector(".play"),this.lapBtn=this.shadow.querySelector(".lap"),this.resetBtn=this.shadow.querySelector(".reset"),this.minute=this.shadow.querySelector(".min"),this.second=this.shadow.querySelector(".sec"),this.centiSecond=this.shadow.querySelector(".msec"),this.laps=this.shadow.querySelector(".laps"),this.clearAllBtn=this.shadow.querySelector(".lap-clear-btn"),this.playBtn.addEventListener("click",this.play.bind(this)),this.resetBtn.addEventListener("click",this.reset.bind(this)),this.lapBtn.addEventListener("click",this.lap.bind(this)),this.clearAllBtn.addEventListener("click",this.clearAll.bind(this))}vibrate(){if(navigator.vibrate){const t=r(l("os-vibration-duration"));r(l("os-vibration"))&&(console.log("vibrating"),navigator.vibrate(t))}else console.log("vibration not supported")}toggleBtn(){this.lapBtn.classList.remove("hidden"),this.resetBtn.classList.remove("hidden")}play(){this.vibrate(),this.isPlay?(this.playBtn.innerHTML="Play",clearInterval(this.min),clearInterval(this.sec),clearInterval(this.centiSec),this.isPlay=!1):(this.playBtn.innerHTML="Pause",this.min=setInterval(()=>{++this.minCounter,this.minCounter===60&&(this.minCounter=0),this.minute.innerHTML=`${this.minCounter.toString().padStart(2,"0")}:`},6e4),this.sec=setInterval(()=>{++this.secCounter,this.secCounter===60&&(this.secCounter=0),this.second.innerHTML=`${this.secCounter.toString().padStart(2,"0")}:`},1e3),this.centiSec=setInterval(()=>{++this.centiCounter,this.centiCounter===100&&(this.centiCounter=0),this.centiSecond.innerHTML=`${this.centiCounter.toString().padStart(2,"0")}`},10),this.isPlay=!0),this.toggleBtn()}reset(){this.vibrate(),this.isPlay=!0,this.play(),this.minCounter=0,this.secCounter=0,this.centiCounter=0,this.lapBtn.classList.add("hidden"),this.resetBtn.classList.add("hidden"),this.minute.innerHTML="00:",this.second.innerHTML="00:",this.centiSecond.innerHTML="00",this.laps.innerHTML="",this.clearAllBtn.classList.add("hidden")}lap(){this.vibrate();const t=document.createElement("li"),e=document.createElement("span"),s=document.createElement("span");t.setAttribute("class","lap-item"),e.setAttribute("class","number"),s.setAttribute("class","time-stamp"),e.innerHTML=`#${++this.lapId}`,s.innerHTML=`${this.minCounter.toString().padStart(2,"0")}:${this.secCounter.toString().padStart(2,"0")} :${this.centiCounter.toString().padStart(2,"0")}`,t.append(e,s),this.laps.append(t),this.clearAllBtn.classList.remove("hidden")}clearAll(){this.vibrate(),this.laps.innerHTML="",this.shadow.append(this.clearAllBtn),this.lapId=0,this.clearAllBtn.classList.add("hidden")}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto 1fr auto;
          align-items: center;
          gap: 1rem;
          background: var(--color-background);
          width: 100%;
          height: 100%;
          padding: 1rem;
          box-sizing: border-box;
        }

        :host h1 {
          width: 100%;
          margin: 0;
          color: var(--color-text);
        }

        :host .watch {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr auto;
          justify-items: center;
          row-gap: 20px;
        }

        :host .circle {
          width: 300px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ececec;
          border-radius: 50%;
          border: 14px solid #333;
          box-shadow: 0 2vw 4vw -1vw rgb(0 0 0 / 80%);
        }

        :host .text {
          font-size: 3rem;
          font-weight: 700;
        }

        :host .btn-wrapper {
          display: flex;
          gap: 2rem;
          justify-content: space-between;
        }

        :host .btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid var(--color-text);
          background-color: var(--color-background);
          color: var(--color-text);
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        :host .btn:hover {
          background-color: var(--color-text);
          color: var(--color-background);
        }

        :host .laps {
          list-style: none;
          color: var(--color-text);
          width: 100%;
          overflow: auto;
          display: flex;
          gap: 0.5rem;
          flex-direction: column;
          padding: 0;
          margin: 0;
          height: 35vh;
        }

        :host .laps::-webkit-scrollbar {
          display: none;
        }

        :host .lap-item {
          display: inline-flex;
          padding: 0.75rem;
          border: 3px solid var(--color-text);
          border-radius: 50px;
          justify-content: space-between;
          gap: 1rem;
        }

        :host .number {
          color: var(--color-text);
        }

        :host .lap-clear-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 0;
          border-radius: 50px;
          background-color: var(--color-text);
          cursor: pointer;
        }

        :host .hidden {
          visibility: hidden;
        }
      </style>
      <h1 class="title">Stopwatch</h1>
      <div class="watch">
        <div class="circle">
          <span class='text min'>00:</span>
          <span class='text sec'>00:</span>
          <span class='text msec'>00</span>
        </div>
        <div class="btn-wrapper">
          <button class='btn reset hidden'>Reset</button>
          <button class='btn play'>Play</button>
          <button class='btn lap hidden'>Lap</button>
        </div>
      </div>
      <ul class="laps">
      </ul>
      <button class="lap-clear-btn hidden">Clear All</button>
    `}}customElements.define("os-tab-stopwatch",Z);class N extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.isPlay=!1,this.hourCounter=0,this.minuteCounter=0,this.secondCounter=0,this.interval,this.playButton,this.resetButton,this.hourInput,this.minuteInput,this.secondInput}connectedCallback(){this.render(),this.playButton=this.shadow.querySelector(".play"),this.resetButton=this.shadow.querySelector(".reset"),this.hourInput=this.shadow.querySelector(".hour-input"),this.minuteInput=this.shadow.querySelector(".minute-input"),this.secondInput=this.shadow.querySelector(".second-input"),this.isPlay?this.playButton.innerHTML="Pause":(this.hourInput.value=this.hourCounter,this.minuteInput.value=this.minuteCounter,this.secondInput.value=this.secondCounter),this.playButton.addEventListener("click",this.play.bind(this)),this.resetButton.addEventListener("click",this.reset.bind(this)),this.hourInput.addEventListener("input",this.setTimer.bind(this)),this.minuteInput.addEventListener("input",this.setTimer.bind(this)),this.secondInput.addEventListener("input",this.setTimer.bind(this))}disconnectedCallback(){this.playButton.removeEventListener("click",this.play.bind(this)),this.resetButton.removeEventListener("click",this.reset.bind(this)),this.stopInterval()}startInterval(){this.interval=setInterval(()=>{this.secondCounter>0?this.secondCounter--:this.minuteCounter>0&&this.secondCounter===0?(this.minuteCounter--,this.secondCounter=59):this.hourCounter>0&&this.minuteCounter===0&&this.secondCounter===0&&(this.hourCounter--,this.minuteCounter=59),this.secondCounter===0&&this.minuteCounter===0&&this.hourCounter===0&&(this.stopInterval(),this.playButton.innerHTML="Start",this.isPlay=!1,this.vibrate(),new Notification("Timer ended !!!"),setTimeout(()=>{this.reset()},1e3)),this.renderDate(this.hourCounter,this.minuteCounter,this.secondCounter)},1e3)}stopInterval(){clearInterval(this.interval)}vibrate(){if(navigator.vibrate){const t=r(l("os-vibration-duration"));r(l("os-vibration"))&&(console.log("vibrating"),navigator.vibrate(t))}else console.log("vibration not supported")}play(){this.vibrate(),this.isPlay?(this.playButton.innerHTML="Start",this.stopInterval(),this.isPlay=!1):(this.playButton.innerHTML="Pause",this.startInterval(),this.isPlay=!0)}reset(){this.vibrate(),this.stopInterval(),this.isPlay=!1,this.playButton.innerHTML="Start",this.setTimer()}setTimer(){this.vibrate();const t=this.hourInput.value,e=this.minuteInput.value,s=this.secondInput.value;t!==0&&e!==0&&s!==0?this.playButton.disabled=!1:this.playButton.disabled=!0,this.hourCounter=parseInt(t),this.minuteCounter=parseInt(e),this.secondCounter=parseInt(s),this.renderDate(t,e,s)}renderDate(t,e,s){this.shadow.querySelector(".date").innerHTML=`${t.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: grid !important;
          justify-content: center;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(4, auto);
          gap: 1rem;
          background: var(--color-background);
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 1rem;
          justify-items: center;
        }
        :host .title {
          width: 100%;
          margin: 0;
          color: var(--color-text);
        }
        :host .clock {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 300px;
          width: 300px;
          background: #ececec;
          border-radius: 50%;
          border: 14px solid #333;
          box-shadow: 0 2vw 4vw -1vw rgb(0 0 0 / 80%);
        }
        :host .clock .date {
          font-size: 3rem;
          font-weight: 700;
        }
        :host .btn-wrapper {
          display: flex;
          justify-content: space-between;
          gap: 3rem;
          width: 100%;
        }
        :host .btn-wrapper button {
          width: 100%;
          height: 50px;
          border: 1px solid var(--color-background-light);
          border-radius: 5px;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-text);
          background: var(--color-background)
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        :host .btn-wrapper button:hover {
          background: var(--color-background-light);
        }
        :host .btn-wrapper button:disabled {
          background: var(--color-background-light);
          color: var(--color-text);
          cursor: not-allowed;
        }
        :host .timer-inputs {
          display: flex;
          gap: 3rem;
          justify-content: space-between;
          width: 100%;
        }

        :host .timer-inputs span {
          font-size: 1.2rem;
          color: var(--color-text);
          flex-grow: 1;
          text-align: center;
        }
        :host .timer-inputs input {
          width: 100%;
          border: none;
          padding: 1rem;
          border-radius: 5px;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-background);
          background: var(--color-text);
          text-align: center;
          box-shadow: 0 2vw 4vw -1vw rgb(0 0 0 / 80%);
          flex-grow: 1;
        }

        :host .settings {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      </style>
      <h1 class="title">Timer</h1>
      <div class="clock">
        <span class="date">00:00:00</span>
      </div>

      <div class="settings">
        <div class="btn-wrapper">
          <button class="play" disabled>Start</button>
          <button class="reset">Reset</button>
        </div>

        <div class="timer-inputs">
          <span>Hours</span>
          <span>Minutes</span>
          <span>Seconds</span>
        </div>

        <div class="timer-inputs">
          <input type="number" name="hour" id="hour" placeholder="Hour" class="hour-input">
          <input type="number" name="minute" id="minute" placeholder="Minute" class="minute-input" max="59">
          <input type="number" name="second" id="second" placeholder="Second" class="second-input" max="59">
        </div>
      </div>
    `}}customElements.define("os-tab-timer",N);class U extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.action="",this.prevVal=[],this.turn=1,this.firstTouch=!0}reset(){this.vibrate(),this.result.textContent=0,this.action="",this.prevVal=[],this.firstTouch=!0,this.turn=1}negative(){this.vibrate();let t=String(this.result.textContent);!this.action||!this.firstTouch?t.includes("-")?this.result.textContent=t.substr(1,t.length):this.result.textContent=`-${t}`:this.action&&this.firstTouch&&(t.includes("-")?this.result.textContent=t.substr(1,t.length):this.result.textContent="-0")}float(){this.vibrate();let t=String(this.result.textContent);!this.action||!this.firstTouch?t.includes(".")||(this.result.textContent=`${t}.`):this.action&&this.firstTouch&&(t.includes(".")||(this.result.textContent=`${0}.`))}percentage(){this.vibrate();let t=Number(this.result.textContent);this.result.textContent=t/100}number(t){this.vibrate();let e=this.result.textContent;e==="-0"?(this.result.textContent=`-${t}`,this.firstTouch=!1):e==="0."?(this.result.textContent+=t,this.firstTouch=!1):e!=="0"&&!this.firstTouch?this.result.textContent+=t:(this.result.textContent=t,this.firstTouch=!1),console.log(`clicked number: ${t}`)}operation(t){this.vibrate();let e=t.dataset.action;console.log(`clicked operator ${e}`),this.turn>1&&this.calculate.bind(this)();let s=Number(this.result.textContent);this.action=e,this.prevVal.length>=2?this.prevVal=[s]:this.firstTouch||this.prevVal.push(s),this.firstTouch=!0,this.turn++,console.log(`memory: ${this.prevVal}`),console.log(`turn no.: ${this.turn}`)}calculate(){this.vibrate();let t=Number(this.result.textContent);function e(){this.prevVal.length>=2?(this.prevVal.shift(),this.prevVal.unshift(t)):this.prevVal.push(t)}switch(this.action){case"add":e.bind(this)(),this.result.textContent=this.prevVal.reduce((s,o)=>s+o);break;case"substract":e.bind(this)(),this.result.textContent=this.prevVal.reduce((s,o)=>s-o);break;case"divide":e.bind(this)(),this.result.textContent=this.prevVal.reduce((s,o)=>s/o);break;case"multiply":e.bind(this)(),this.result.textContent=this.prevVal.reduce((s,o)=>s*o);break}this.firstTouch=!0,this.turn=1,console.log("========Calc========"),console.log(`memory: ${this.prevVal[0]} ${this.action} ${this.prevVal[1]}}`),console.log(`Turn no.: ${this.turn}`)}connectedCallback(){this.render(),this.result=this.shadow.querySelector(".js-result"),this.buttons=this.shadow.querySelectorAll("button"),this.addEventToButtons()}vibrate(){if(navigator.vibrate){const t=r(l("os-vibration-duration"));r(l("os-vibration"))&&(console.log("vibrating"),navigator.vibrate(t))}else console.log("vibration not supported")}addEventToButtons(){this.buttons.forEach(function(t){switch(t.dataset.action){case"clear":t.addEventListener("click",this.reset.bind(this));break;case"number":t.addEventListener("click",function(e){let s=e.target||e.srcElement;this.number(s.textContent)}.bind(this));break;case"negative":t.addEventListener("click",this.negative.bind(this));break;case"percentage":t.addEventListener("click",this.percentage.bind(this));break;case"float":t.addEventListener("click",this.float.bind(this));break;case"divide":case"multiply":case"substract":case"add":t.addEventListener("click",function(e){this.operation(e.target||e.srcElement)}.bind(this));break;case"result":t.addEventListener("click",this.calculate.bind(this));break}}.bind(this))}render(){this.shadow.innerHTML=`
      <style>
        :host .calc {
          height: 100%;
          display: grid;
          padding: 1rem;
          margin: auto;
          // background-color: #1c1c1c;
          background-color: var(--color-background);
          font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
          font-size: 1rem;
          line-height: 1.2;
          color: var(--color-text);
          -webkit-font-smoothing: antialiased;
        }
        :host * {
          box-sizing: border-box;
        }
        :host .calc .calc-screen {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          margin-bottom: 1rem;
          background-color: transparent;
          font-size: 5rem;
          border-radius: 4px;
          overflow-y: auto;
          font-weight: 300;
        }
        :host .calc .calc-grid {
          display: grid;
          grid-template: repeat(5, 1fr) / repeat(4, 1fr);
          grid-gap: 10px;
        }
        :host .calc .btn-span {
          grid-area: 5 / 1 / 5 / span 2;
          width: 100%;
        }
        :host .calc button {
          position: relative;
          cursor: pointer;
          padding: 0;
          border: 0;
          outline: 0;
          width: 100%;
          height: 100%;
          background-color: var(--color-background-light);
          color: var(--color-text);
          font-size: 2rem;
          line-height: 100%;
          border-radius: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
          transition: color .15s ease, background-color .15s ease;
        }

        :host .calc button::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          border-radius: 200px;
          opacity: 0;
          transition: opacity .15s ease;
        }

        :host .calc button:hover:after {
          opacity: .25;
        }

        :host .calc button.light {
          background-color: #A5A5A5;
          color: #1c1c1c;
        }

        :host .calc button.action {
          background-color: #FF9503;
        }

        :host .calc button.action:not(:last-child):focus: {
          background-color: #fff;
          color: #ff9503;
        }

        :host #close {
          position: absolute;
          top: 0;
          right: 0;
        }
      </style>
      <div class="calc">
        <div class="calc-screen">
          <span class="js-result">0</span>
        </div>
        <div class="calc-grid">
          <button data-action="clear" class="ligth">AC</button>
          <button data-action="negative" class="ligth">&plusmn;</button>
          <button data-action="percentage" class="ligth">%</button>
          <button data-action="divide" class="action">&divide;</button>
          
          <button data-action="number">7</button>
          <button data-action="number">8</button>
          <button data-action="number">9</button>
          <button data-action="multiply" class="action">&times;</button>
          
          <button data-action="number">4</button>
          <button data-action="number">5</button>
          <button data-action="number">6</button>
          <button data-action="substract" class="action">&minus;</button>
          
          <button data-action="number">1</button>
          <button data-action="number">2</button>
          <button data-action="number">3</button>
          <button data-action="add" class="action">+</button>
          
          <button data-action="number" class="btn-span">0</button>
          <button data-action="float">.</button>
          <button data-action="result" class="action">&equals;</button>
        </div>
      </div>
    `}}customElements.define("os-app-calculator",U);class z extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: block;
          background-color: green;
        }
      </style>
      <span>Message</span>
      <span>Coucou c'est Maman</span>
    `}}customElements.define("os-app-message",z);class J extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.exportButton,this.importButton}generateSettings(t){let e="";return t.forEach(s=>{e+=`
        <div class="category">
          <h2 class="category-title">${s.categoryName}</h2>
          <div class="settings">
      `,s.settings.forEach(o=>{if(o.dependsOn&&r(l(o.dependsOn))!==o.dependsOnValue)return;const n=!!o.dependsOn;e+=`
          <div class="setting ${n?"dependent":""}">
            <div class="setting-name">${o.name}</div>
            <div class="setting-value" id="${o.id}">
        `,o.type==="checkbox"?e+=`
              <input type="${o.type}" name="${o.localStorageKey}" ${r(o)?"checked":""}>  
              <label for="${o.localStorageKey}"></label>
            </div>
          </div>
          `:o.type==="text"||o.type==="number"?e+=`
              <input type="${o.type}" name="${o.localStorageKey}" value="${r(o)}">  
            </div>
          </div>
          `:o.type==="delete"?e+=`
              <button class="${o.type}" id="${o.localStorageKey}" >Delete</button>
            </div>
          </div>
          `:o.type==="select"&&(e+=`
              <select name="${o.localStorageKey}">
          `,o.options.forEach(a=>{e+=`
              <option value="${a.value}" ${r(o)===a.value?"selected":""}>${a.name}</option>
            `}),e+=`
              </select>
            </div>
          </div>
          `)}),e+=`
          </div>
        </div>
      `}),e}changeSettingValue(t,e){localStorage.setItem(t.localStorageKey,e),document.dispatchEvent(new CustomEvent("changeSetting",{detail:{setting:t.id,value:e}})),this.render()}defineEventListeners(){u.forEach(t=>{t.settings.forEach(e=>{if(e.dependsOn&&r(l(e.dependsOn))!==e.dependsOnValue)return;const s=this.shadow.querySelector(`#${e.id}`);e.type==="delete"?s.addEventListener("click",o=>{localStorage.removeItem(e.localStorageKey),this.render()}):s.addEventListener("change",o=>{e.type==="checkbox"?this.changeSettingValue(e,o.target.checked):e.type==="text"||e.type==="number"?this.changeSettingValue(e,o.target.value):e.type==="select"&&this.changeSettingValue(e,o.target.value)})})})}connectedCallback(){this.render(),this.exportButton=this.shadow.getElementById("export"),this.importButton=this.shadow.getElementById("import"),this.exportButton.addEventListener("click",()=>{q()}),this.importButton.addEventListener("click",()=>{console.log("import");const t=document.createElement("input");t.type="file",t.accept=".json",document.body.appendChild(t),t.click(),t.addEventListener("change",e=>{P(e.target.files[0]),e.target.files[0].text().then(s=>console.log(s)),t.remove(),this.render.bind(this)})})}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: flex !important;
          flex-direction: column;
          background-color: var(--color-background);
          color: var(--color-text);
          padding: 1rem;
          gap: 1rem;
        }
        :host > button {
          background-color: var(--color-background-light);
          border: none;
          border-radius: 0.5rem;
          padding: 0.5rem;
          cursor: pointer;
          color: var(--color-text);
          font-size: 1rem;
        }
        :host > button:hover {
          background-color: var(--color-background-lighter);
        }
        :host h1 {
          font-size: 2rem;
          font-weight: bold;
          margin: 0;
        }
        :host .category .category-title {
          font-size: 1.3rem;
          font-weight: 500;
          margin: 0;
          margin-bottom: 0.5rem;
        }
        :host .category .settings {
          display: flex;
          flex-direction: column;
          background-color: var(--color-background-light);
          box-sizing: border-box;
          border-radius: 0.5rem;
        }
        :host .category .settings .setting {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem;
          border-bottom: 1px solid var(--color-background-lighter);
        }
        :host .category .settings .setting.dependent {
          padding-left: 1.5rem;
        }
        :host .category .settings .setting:last-child {
          border-bottom: none;
        }
      </style> 
      <h1>Settings</h1>
      <button id="export">Export</button>
      <button id="import">Import</button>
      ${this.generateSettings(u)}
    `,this.defineEventListeners()}}customElements.define("os-app-settings",J);class G extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.player="X",this.computer="O",this.board=["","","","","","","","",""],this.scores=JSON.parse(localStorage.getItem("tictactoe-scores"))||{player:0,computer:0,draw:0},this.gameOver=!1,this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--color-text);
          height: 100%;
        }

        :host .pop-up {
          position: fixed;
          background: var(--color-background);
          width: 100%;
          text-align: center;
          margin: 0px 8px 0 8px;
          display: none;
          font-family: 'Pacifico',serif;
          font-size: 20px;
        }
        :host .pop-up-win {
          background-color: #4ade80;

        }

        :host .pop-up-lose {
          background-color: #f87171;
        }

        :host .pop-up-draw {
          background-color: #fb923c;
        }

        :host .pop-up p {
          margin: 16px;
        }

        :host h1 {
          font-family: 'Pacifico',serif;
          text-align: center;
          margin: 0;
          margin-top: 20px;
        }

        :host .overlay {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          transition: opacity 500ms;
        }

        :host .choose-symbol {
          margin: 20vh auto;
          padding: 20px;
          background: var(--color-background);
          border-radius: 5px;
          width: 70%;
          position: relative;
          transition: all 0.5s ease-in-out;
        }

        :host .text-side {
          font-family: 'Pacifico',serif;
          font-size: 18px;
          text-align: center;
        }

        :host .buttons {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        :host .buttons button {
          padding: 16px 32px;
          margin: 16px 32px;
          border: 6px solid #2c3e50;
          border-radius: 10px;
          background-color: #34495e;
          color: #f6f6f6 ;
          font-weight: bold;
          cursor: pointer;
        }

        :host .board {
          width: 80%;
          min-height: 80vw;
          aspect-ratio : 1 / 1;
          margin: 0 auto;
          background-color: #34495e;
          color: #fff;
          border: 6px solid #2c3e50;
          border-radius: 10px;
          
          display: grid;
          grid-template: repeat(3, 1fr) / repeat(3, 1fr);
        }

        @media (min-width: 780px) {
          :host .board {
            width: 40%;
            height: 40vw;
          }
        }

        :host .board div {
          border: 6px solid #2c3e50;
          border-radius: 2px;
          font-family: Helvetica;
          font-weight: bold;
          font-size: 4em;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        :host .scores {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        :host .scores p {
          padding: 0 4px;
        }

        :host .reset {
          margin-top: 20px;
          cursor: pointer;
          border: 6px solid #dc2626;
          border-radius: 10px;
          background-color: #ef4444;
          color: var(--color-text);
          padding: 16px 32px;
        }

      </style>

      <div class="main">
        <div class="pop-up pop-up-win">
          <p>You win ! </p>
        </div>
        <div class="pop-up pop-up-lose">
          <p>You lose ! </p>
        </div>
        <div class="pop-up pop-up-draw">
          <p>Draw ! </p>
        </div>
        <h1>Tic Tac Toe</h1>
        <div class="overlay">
          <div class="choose-symbol">
            <p class="text-side">Choose your side</p>
            <div class="buttons">
              <button id="x-button">X</button>
              <button id="o-button">O</button>
            </div>
          </div>
        </div>
        <div class="board"></div>
        <div class="scores">
          <p>Player: ${this.scores.player}</p>
          <p> Computer: ${this.scores.computer}</p>
          <p> Draw: ${this.scores.draw}</p>
        </div>
        <div class="reset">Reset current game</div>
      </div>
    `,this.boardDiv=this.shadow.querySelector(".board"),this.resetDiv=this.shadow.querySelector(".reset"),this.xButton=this.shadow.querySelector("#x-button"),this.oButton=this.shadow.querySelector("#o-button"),this.xButton.addEventListener("click",()=>{this.shadow.querySelector(".overlay").style.visibility="hidden",this.shadow.querySelector(".overlay").style.opacity="0",this.player="X",this.computer="O",this.startNewGame()}),this.oButton.addEventListener("click",()=>{this.shadow.querySelector(".overlay").style.visibility="hidden",this.shadow.querySelector(".overlay").style.opacity="0",this.player="O",this.computer="X",this.startNewGame()}),this.resetDiv.addEventListener("click",()=>{this.shadow.querySelector(".overlay").style.visibility="inherit",this.shadow.querySelector(".overlay").style.opacity="1",this.startNewGame()})}startNewGame(){this.board=["","","","","","","","",""],this.gameOver=!1,this.renderBoard()}renderBoard(){let t="";for(let s=0;s<this.board.length;s++)t+=`<div data-index="${s}">${this.board[s]}</div>`;this.boardDiv.innerHTML=t,this.shadow.querySelectorAll(".board div").forEach(s=>{s.addEventListener("click",()=>{s.innerText===""&&!this.gameOver&&(this.makeMove(s.dataset.index,this.player),this.gameOver||this.computerMove())})})}makeMove(t,e){this.vibrate(),this.board[t]=e,this.renderBoard();const s=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let o=0;o<s.length;o++){const[n,a,h]=s[o];if(this.board[n]&&this.board[n]===this.board[a]&&this.board[n]===this.board[h]){this.gameOver=!0,this.board[n]===this.player?(this.scores.player++,localStorage.setItem("tictactoe-scores",JSON.stringify(this.scores)),this.shadow.querySelector(".pop-up-win").style.display="block",setTimeout(()=>{this.shadow.querySelector(".pop-up-win").style.display="none"},2e3)):(this.scores.computer++,localStorage.setItem("tictactoe-scores",JSON.stringify(this.scores)),this.shadow.querySelector(".pop-up-lose").style.display="block",setTimeout(()=>{this.shadow.querySelector(".pop-up-lose").style.display="none"},2e3)),setTimeout(()=>{this.render()},2222);return}}this.board.filter(o=>o==="").length===0&&(this.gameOver=!0,this.scores.draw++,localStorage.setItem("tictactoe-scores",JSON.stringify(this.scores)),this.shadow.querySelector(".pop-up-draw").style.display="block",setTimeout(()=>{this.shadow.querySelector(".pop-up-draw").style.display="none"},2e3),setTimeout(()=>{this.render()},2222))}computerMove(){const t=[];for(let s=0;s<this.board.length;s++)this.board[s]===""&&t.push(s);const e=t[Math.floor(Math.random()*t.length)];this.makeMove(e,this.computer)}vibrate(){if(navigator.vibrate){const t=r(l("os-vibration-duration"));r(l("os-vibration"))&&navigator.vibrate(t)}else console.log("vibration not supported")}}customElements.define("os-app-tictactoe",G);class Q extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr auto;
          height: 100%;
        }
      </style>
      <os-topbar></os-topbar>
      <os-home-screen></os-home-screen>
      <os-dock class="dock"></os-dock>
      <os-app-wrapper></os-app-wrapper>
    `}}customElements.define("app-root",Q);class W extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :host svg path {
          fill: var(--color-text);
        }
      </style>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.25 5H8.64378L9.97503 0.94375C10.1 0.46875 9.74065 0 9.25003 0H4.75003C4.37503 0 4.05628 0.278125 4.00628 0.65L3.00628 8.15C2.9469 8.6 3.2969 9 3.75003 9H7.4594L6.01878 15.0781C5.90628 15.5531 6.26878 16 6.7469 16C7.0094 16 7.2594 15.8625 7.3969 15.625L12.8969 6.125C13.1875 5.62813 12.8282 5 12.25 5Z" fill="white"/>
      </svg>
    `}}customElements.define("icon-bolt",W);class F extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :host svg path {
          fill: var(--color-text);
        }
      </style>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00002 16C9.10377 16 9.99908 15.1047 9.99908 14H6.00096C6.00096 15.1047 6.89627 16 8.00002 16ZM14.731 11.3216C14.1272 10.6728 12.9975 9.69688 12.9975 6.5C12.9975 4.07188 11.295 2.12813 8.9994 1.65125V1C8.9994 0.447812 8.5519 0 8.00002 0C7.44815 0 7.00065 0.447812 7.00065 1V1.65125C4.70502 2.12813 3.00252 4.07188 3.00252 6.5C3.00252 9.69688 1.87283 10.6728 1.26908 11.3216C1.08158 11.5231 0.998459 11.7641 1.00002 12C1.00346 12.5125 1.40565 13 2.00315 13H13.9969C14.5944 13 14.9969 12.5125 15 12C15.0016 11.7641 14.9185 11.5228 14.731 11.3216Z" fill="white"/>
      </svg>
    `}}customElements.define("icon-bell",F);class R extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :host svg path {
          fill: var(--color-text);
        }
      </style>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8455 13.0525L13.58 11.3012C13.5847 11.2667 13.6 11.2347 13.6 11.1997C13.6012 11.011 13.5347 10.818 13.3847 10.657C12.9017 10.138 11.998 9.35725 11.998 6.79975C11.998 4.85725 10.636 3.30225 8.79948 2.92075V2.4C8.79948 1.95825 8.44148 1.6 7.99998 1.6C7.55848 1.6 7.20048 1.95825 7.20048 2.4V2.921C6.19223 3.1305 5.33398 3.69775 4.76073 4.48525L1.13673 1.68425C0.962228 1.54875 0.710728 1.58 0.575228 1.7545L0.0842278 2.38625C-0.0512722 2.5605 -0.0200222 2.81175 0.154478 2.9475L14.8632 14.3157C15.0377 14.4515 15.289 14.42 15.4247 14.2455L15.9157 13.6137C16.0512 13.4395 16.02 13.1882 15.8455 13.0525ZM3.93073 7.8885C3.71548 9.5875 3.02048 10.2217 2.61523 10.6572C2.46523 10.8185 2.39873 11.0112 2.39998 11.2C2.40273 11.61 2.72448 12 3.20248 12H9.25048L3.93073 7.8885ZM7.99998 14.4C8.88298 14.4 9.59923 13.6837 9.59923 12.8H6.40073C6.40073 13.6837 7.11698 14.4 7.99998 14.4Z" fill="white"/>
      </svg>
    `}}customElements.define("icon-bell-slash",R);class X extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :host svg path {
          fill: var(--color-text);
        }
      </style>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6 5.6V7.2H14.4V8.8H13.6V10.4H1.6V5.6H13.6ZM14 4H1.2C0.53725 4 0 4.53725 0 5.2V10.8C0 11.4628 0.53725 12 1.2 12H14C14.6628 12 15.2 11.4628 15.2 10.8V10.4H15.4C15.7314 10.4 16 10.1314 16 9.8V6.2C16 5.86863 15.7314 5.6 15.4 5.6H15.2V5.2C15.2 4.53725 14.6628 4 14 4ZM10.4 6.4H2.4V9.6H10.4V6.4Z" fill="white"/>
      </svg>
    `}}customElements.define("icon-battery-three-quarters",X);class _ extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :host svg path {
          fill: var(--color-text);
        }
      </style>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6 5.6V7.2H14.4V8.8H13.6V10.4H1.6V5.6H13.6ZM14 4H1.2C0.53725 4 0 4.53725 0 5.2V10.8C0 11.4628 0.53725 12 1.2 12H14C14.6628 12 15.2 11.4628 15.2 10.8V10.4H15.4C15.7314 10.4 16 10.1314 16 9.8V6.2C16 5.86863 15.7314 5.6 15.4 5.6H15.2V5.2C15.2 4.53725 14.6628 4 14 4ZM8 6.4H2.4V9.6H8V6.4Z" fill="white"/>
      </svg>
    `}}customElements.define("icon-battery-half",_);class tt extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :host svg path {
          fill: var(--color-text);
        }
      </style>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6 5.6V7.2H14.4V8.8H13.6V10.4H1.6V5.6H13.6ZM14 4H1.2C0.53725 4 0 4.53725 0 5.2V10.8C0 11.4628 0.53725 12 1.2 12H14C14.6628 12 15.2 11.4628 15.2 10.8V10.4H15.4C15.7314 10.4 16 10.1314 16 9.8V6.2C16 5.86863 15.7314 5.6 15.4 5.6H15.2V5.2C15.2 4.53725 14.6628 4 14 4ZM12.8 6.4H2.4V9.6H12.8V6.4Z" fill="white"/>
      </svg>
    `}}customElements.define("icon-battery-full",tt);const et="/assets/images/background-ee3e4d4c.jpg";let f=document.getElementById("background");f.src=`${et}`;let m=0,g=0;window.addEventListener("deviceorientation",st,!0);function st(i){let t=i.gamma,e=i.beta,s=t*Math.PI/180,o=e*Math.PI/180;m=-s*10,g=-o*10,f.style.transform="translate("+m+"px, "+g+"px)"}class ot extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.8);
        }
        :host svg path {
          fill: var(--color-text);
        }
      </style>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_211_4)">
      <path d="M16 0.5C7.4375 0.5 0.5 7.4375 0.5 16C0.5 24.5625 7.4375 31.5 16 31.5C24.5625 31.5 31.5 24.5625 31.5 16C31.5 7.4375 24.5625 0.5 16 0.5ZM19.5688 22.3813L14.0562 18.375C13.8625 18.2313 13.75 18.0062 13.75 17.7687V7.25C13.75 6.8375 14.0875 6.5 14.5 6.5H17.5C17.9125 6.5 18.25 6.8375 18.25 7.25V15.8562L22.2188 18.7437C22.5563 18.9875 22.625 19.4563 22.3813 19.7938L20.6187 22.2188C20.375 22.55 19.9063 22.625 19.5688 22.3813Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_211_4">
      <rect width="32" height="32" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    `}}customElements.define("icon-clock",ot);class it extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.8);
        }
        :host svg path {
          fill: var(--color-text);
        }
      </style>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29 19C29 26.1813 23.1813 32 16 32C8.81875 32 3 26.1813 3 19C3 12.5 7.76875 7.1125 14 6.15625V4H12.25C11.8375 4 11.5 3.6625 11.5 3.25V0.75C11.5 0.3375 11.8375 0 12.25 0H19.75C20.1625 0 20.5 0.3375 20.5 0.75V3.25C20.5 3.6625 20.1625 4 19.75 4H18V6.15625C20.3438 6.51875 22.4813 7.50625 24.2313 8.94375L25.95 7.225C26.2438 6.93125 26.7188 6.93125 27.0125 7.225L28.7812 8.99375C29.075 9.2875 29.075 9.7625 28.7812 10.0562L26.9438 11.8938L26.9062 11.9312C28.2313 13.9562 29 16.3875 29 19ZM18 21.25V11.7812C18 11.3688 17.6625 11.0312 17.25 11.0312H14.75C14.3375 11.0312 14 11.3688 14 11.7812V21.25C14 21.6625 14.3375 22 14.75 22H17.25C17.6625 22 18 21.6625 18 21.25Z" fill="white"/>
      </svg>
    `}}customElements.define("icon-stopwatch",it);class nt extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.8);
        }
        :host svg path {
          fill: var(--color-text);
        }
      </style>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.5 0H5.5C4.67156 0 4 0.671562 4 1.5V2.5C4 3.32844 4.67156 4 5.5 4C5.5 9.68531 8.6885 14.4834 13.0526 16C8.6885 17.5166 5.5 22.3147 5.5 28C4.67156 28 4 28.6716 4 29.5V30.5C4 31.3284 4.67156 32 5.5 32H26.5C27.3284 32 28 31.3284 28 30.5V29.5C28 28.6716 27.3284 28 26.5 28C26.5 22.3147 23.3115 17.5166 18.9474 16C23.3115 14.4834 26.5 9.68531 26.5 4C27.3284 4 28 3.32844 28 2.5V1.5C28 0.671562 27.3284 0 26.5 0ZM21.8076 24H10.1925C11.2587 21.0752 13.4485 19 16 19C18.5513 19 20.7414 21.0747 21.8076 24ZM21.8088 8H10.1924C9.74925 6.78425 9.5 5.42175 9.5 4H22.5C22.5 5.42531 22.2508 6.78669 21.8088 8Z" fill="white"/>
      </svg>
    `}}customElements.define("icon-hourglass",nt);document.addEventListener("changeSetting",i=>{i.detail.setting==="os-theme"&&y(i.detail.value)});const y=i=>{i==="light"?(document.body.style.setProperty("--color-background","#f6f6f6"),document.body.style.setProperty("--color-background-light","#e6e6e6"),document.body.style.setProperty("--color-background-lighter","#d6d6d6"),document.body.style.setProperty("--color-text","#0B0B0B"),document.body.style.setProperty("--color-red-dark","#ff6b6b"),document.body.style.setProperty("--color-red-darker","#F9CACA"),document.body.style.setProperty("--color-topbar-background","rgba(255, 255, 255, 0.6)"),document.body.style.setProperty("--color-dock-background","rgba(255, 255, 255, 0.2)")):(document.body.style.setProperty("--color-background","#222222"),document.body.style.setProperty("--color-background-light","#333333"),document.body.style.setProperty("--color-background-lighter","#444444"),document.body.style.setProperty("--color-text","#f6f6f6"),document.body.style.setProperty("--color-red-dark","#8B0000"),document.body.style.setProperty("--color-red-darker","#580000"),document.body.style.setProperty("--color-topbar-background","rgba(0, 0, 0, 0.6)"),document.body.style.setProperty("--color-dock-background","rgba(0, 0, 0, 0.2)"))};"Notification"in window&&await Notification.requestPermission();y(r(l("os-theme")));const v=i=>{document.dispatchEvent(new CustomEvent("open-app",{detail:{id:i,pushHistory:!1}}))},rt=()=>{document.dispatchEvent(new CustomEvent("close-app",{detail:{pushHistory:!1}}))},b=window.location.hash.slice(1);b&&v(b);window.addEventListener("hashchange",i=>{i.currentTarget.location.hash?v(i.currentTarget.location.hash.slice(1)):rt()});
