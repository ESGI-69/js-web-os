(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJtSURBVHgB7dy/axNhHMfxTyVdquKgDg1YcNFCp3LnnsUtxMX6H9TF2blkFtzTLm5Cu0iiU/4Df+Di0BQUccgNCmKjdehQvQ46tHe9IznySZ/3CwKBJ2TIm3vy3JeQufsv4iPNuJ17b/49j+NYs+yCYIUgZghihiBmCGKGIGYIYqamCqxcjbS2vJ65/utwpCevHwsnVRLk+sKiVq5FmetfDxLhdGxZZghihiBmCGKGIGYIYoYgZghihiBmCGKm0OgknU01lpoqKh2d5FmYv6RHqxsqKp19PfvwVCEoFCT9gMsEOcvF+cul3i+dfYUShC3LDEHMEMQMQcwQxAxBzBQ69n7e39P27qaKunnllu4sNjLX0/uKVx+fq6j09aEoFuTH3vGjqMaNZm6Qg8Of2hlsCSexZZkhiBmCmCGIGYKYIYgZgpip5Le97qIo0rQkSaLhcJi5HmSQTqejaWm327lB2LLMVHKFnDX7Cmk2VVY1QUrOvvAfW5YZgpghiJkgj715x86qjUb5B5ogg7RaLbliyzJTW7u9LviYO/pL5wh/YIaJqm32dzXrHt5d1nlR2+oPNOvKBqnX65qW9Nibd/QN8tjb7XY1Len4vdfrZa7zHWKGIGYIYoYgZghihiBmCGImyPsQ53kXV4gZgpghiBmCmCGIGYKYIYgZgpghiJmx7tQ3HqyqGS9pkl6+/aL29nuFiivEDEHMEMQMQcwQxAxBzIx17E2+/9a7T980SYNkXyEbK8jx74L7wgSxZZkhiBmCmCGIGYKYIYgZgpghiBmCmCGIGYKYIYgZgpghiBmCmCGIGYKYIYgZgpghiJk/WTJ+U8D58q8AAAAASUVORK5CYII=",m="/assets/images/messages-33f358e7.png",u=[{name:"Calculator",icon:g,id:"calculator",tag:"os-app-calculator",isInDock:!0},{name:"Messages",icon:m,id:"messages",tag:"os-app-message",isInDock:!0},{name:"Settings",icon:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-gear-512.png",id:"settings",tag:"os-app-settings",isInDock:!0}];class b extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();for(let t=0;t<this.idInDock.length;t++){const e=this.idInDock[t];this.shadow.getElementById(e).addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("open-app",{detail:{id:e}}))})}}disconnectedCallback(){console.log("disconnectedCallback")}render(){this.shadow.innerHTML=`
      <style>
        :host {
          padding: 1rem;
          display: grid;
          grid-template-columns: repeat(4, auto);
          grid-template-rows: 1fr;
          justify-content: space-around;

          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
        }
      </style>
      ${this.iconsInDock}
    `}get iconsInDock(){return u.filter(s=>s.isInDock).map(s=>`
        <os-app-icon id="${s.id}" name="${s.name}" icon="${s.icon}"></os-app-icon>
      `).join("")}get idInDock(){return u.filter(s=>s.isInDock).map(s=>s.id)}}customElements.define("os-dock",b);const f="/assets/images/battery-empty-7dddc413.svg",v="/assets/images/battery-full-643d0ca6.svg",p="/assets/images/battery-half-985d29b8.svg",y="/assets/images/battery-quarter-91ab0e99.svg",w="/assets/images/battery-three-quarters-7532dfbe.svg",k="/assets/images/bell-slash-1d8c1f5d.svg",x="/assets/images/bell-cb1122b9.svg",C="/assets/images/bolt-5c37c345.svg",l=[{categoryName:"General",settings:[{name:"Vibration",localStorageKey:"os-vibration",id:"os-vibration",type:"checkbox",value:!0}]},{categoryName:"Topbar",settings:[{name:"Show date",localStorageKey:"topbar-show-date",id:"topbar-show-date",type:"checkbox",value:!0},{name:"Show time",localStorageKey:"topbar-show-time",id:"topbar-show-time",type:"checkbox",value:!0},{name:"Show battery",localStorageKey:"topbar-show-battery",id:"topbar-show-battery",type:"checkbox",value:!0},{name:"Show ping",localStorageKey:"topbar-show-ping",id:"topbar-show-ping",type:"checkbox",value:!0},{name:"Show vibration status",localStorageKey:"topbar-show-vibration-status",id:"topbar-show-vibration-status",type:"checkbox",value:!0}]}],c=o=>{for(let t=0;t<l.length;t++){const e=l[t];for(let s=0;s<e.settings.length;s++){const i=e.settings[s];if(i.id===o)return i}}return console.warn(`Setting with id ${o} not found`),null},r=o=>{const t=localStorage.getItem(o.localStorageKey);return t===null?o.value:t==="true"};class I extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.isTimeVisible=r(c("topbar-show-time")),this.isVibrationVisible=r(c("topbar-show-vibration-status")),this.isDateVisible=r(c("topbar-show-date")),this.isPingVisible=r(c("topbar-show-ping")),this.isBatteryVisible=r(c("topbar-show-battery")),this.reponseTimes=[],this.pingInterval=null}defineAllEventListeners(){document.addEventListener("changeSetting",t=>{const e=()=>{clearInterval(this.timeInterval),clearInterval(this.pingInterval),this.render()};t.detail.setting==="topbar-show-time"?(this.isTimeVisible=t.detail.value,e()):t.detail.setting==="topbar-show-vibration-status"?(this.isVibrationVisible=t.detail.value,e()):t.detail.setting==="topbar-show-date"?(this.isDateVisible=t.detail.value,e()):t.detail.setting==="topbar-show-ping"?(this.isPingVisible=t.detail.value,e()):t.detail.setting==="topbar-show-battery"?(this.isBatteryVisible=t.detail.value,e()):t.detail.setting==="os-vibration"&&e()})}connectedCallback(){this.render(),this.defineAllEventListeners()}updateTime(){const t=new Date;let e=t.getHours();e=e.length<10?`0${e}`:e;let s=t.getMinutes();s=s<10?`0${s}`:s;let i=t.getSeconds();i=i<10?`0${i}`:i;let n=t.getDate();n=n.length<10?`0${n}`:n;let a=t.getMonth()+1;a=a<10?`0${a}`:a;const h=t.getFullYear();if(this.isTimeVisible){const d=this.shadow.querySelector(".hour");d.textContent=`${e}:${s}:${i}`}if(this.isDateVisible){const d=this.shadow.querySelector(".date");d.textContent=`${n}/${a}/${h}`}}checkPing(){this.isPingVisible?this.pingInterval=setInterval(()=>{const t=Date.now();fetch("https://jsonplaceholder.typicode.com/todos/1").then(e=>e.json()).then(()=>{const s=Date.now()-t;this.reponseTimes.push(s),this.reponseTimes.length>5&&this.reponseTimes.shift();const i=this.reponseTimes.reduce((a,h)=>a+h)/this.reponseTimes.length,n=this.shadow.querySelector(".ping");this.reponseTimes.length===5&&(n.textContent=`${Math.round(i)} ms`)})},1e3):this.pingInterval&&clearInterval(this.pingInterval)}checkBattery(){if(!this.isBatteryVisible)return;const t=this.shadow.querySelector(".battery");if(navigator.getBattery){const e=(s,i)=>{let n=`${Math.round(s*100)}%`;i?n+=`<img src="${C}">`:s>=.75?n+=`<img src="${v}">`:s>=.5?n+=`<img src="${w}">`:s>=.25?n+=`<img src="${p}">`:s>=.1?n+=`<img src="${y}">`:n+=`<img src="${f}">`,t.innerHTML=n};navigator.getBattery().then(s=>{e(s.level,s.charging),s.addEventListener("levelchange",()=>{e(s.level,s.charging)}),s.addEventListener("chargingchange",()=>{e(s.level,s.charging)})})}else console.warn("Battery API not supported"),t.innerHTML=`--- <img src="${p}">`}addTopbarItems(){const t=document.createElement("div");t.classList.add("left");const e=document.createElement("div");e.classList.add("center");const s=document.createElement("div");if(s.classList.add("right"),this.isTimeVisible){const i=document.createElement("span");i.classList.add("hour"),i.textContent="12:00",t.append(i)}if(this.isVibrationVisible){const i=document.createElement("span");i.classList.add("vibration"),r(c("os-vibration"))?i.innerHTML=`<img src="${x}">`:i.innerHTML=`<img src="${k}">`,t.append(i)}if(this.isDateVisible){const i=document.createElement("span");i.classList.add("date"),e.append(i)}if(this.isPingVisible){const i=document.createElement("span");i.classList.add("ping"),i.textContent=`${this.reponseTimes.length===5?Math.round(this.reponseTimes.reduce((n,a)=>n+a)/this.reponseTimes.length):"---"} ms`,s.append(i)}if(this.isBatteryVisible){const i=document.createElement("span");i.classList.add("battery"),i.textContent="100%",s.append(i)}this.shadow.append(t,e,s)}render(){this.shadow.innerHTML=`
      <style>
        :host {
          color: #fff;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: 1fr;
          grid-template-areas: "left center right";
          grid-gap: 0.5rem;
          align-items: center;
          padding: 0 1rem;
          height: 30px;

          background: rgba(0, 0, 0, 0.6);
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
    `,this.addTopbarItems(),this.updateTime(),this.timeInterval=setInterval(()=>{this.updateTime()},1e3),this.checkPing(),this.checkBattery()}}customElements.define("os-topbar",I);class L extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["name","icon","show-name"]}get name(){return this.getAttribute("name")}set name(t){this.setAttribute("name",t)}get icon(){return this.getAttribute("icon")}set icon(t){this.setAttribute("icon",t)}get showName(){return typeof this.getAttribute("show-name")=="string"}set showName(t){this.setAttribute("show-name",t)}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("os-app-icon",L);let E=class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),document.addEventListener("open-app",({detail:t})=>{const e=u.find(s=>s.id===t.id);this.openApp(e)}),this.shadow.querySelector("#close").addEventListener("click",()=>{this.closeApp()}),document.addEventListener("close-app",()=>{this.closeApp()}),this.observer=new MutationObserver(()=>{this.render()}),this.observer.observe(this,{childList:!0,subtree:!0})}openApp(t){this.shadow.querySelector("#app").innerHTML=`
      <${t.tag}></${t.tag}>
    `,this.classList.add("open")}closeApp(){this.classList.remove("open"),this.shadow.querySelector("#app").innerHTML=""}attributeChangedCallback(t,e,s){t==="count"&&this.render()}render(){this.shadow.innerHTML=`
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
        }
        :host #close {
          all: unset;
          position: absolute;
          top: 1rem;
          right: 1rem;
          cursor: pointer;
          font-size: 1.5rem;
          background-color: #8B0000;
          color: #580000;
          border-radius: 200px;
          height: 1.5rem;
          width: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <button id="close">×</button>
      <div id="app">
      </div>
    `}};customElements.define("os-app-wrapper",E);class T extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.action="",this.prevVal=[],this.turn=1,this.firstTouch=!0}reset(){this.vibrate(),this.result.textContent=0,this.action="",this.prevVal=[],this.firstTouch=!0,this.turn=1}negative(){this.vibrate();let t=String(this.result.textContent);!this.action||!this.firstTouch?t.includes("-")?this.result.textContent=t.substr(1,t.length):this.result.textContent=`-${t}`:this.action&&this.firstTouch&&(t.includes("-")?this.result.textContent=t.substr(1,t.length):this.result.textContent="-0")}float(){this.vibrate();let t=String(this.result.textContent);!this.action||!this.firstTouch?t.includes(".")||(this.result.textContent=`${t}.`):this.action&&this.firstTouch&&(t.includes(".")||(this.result.textContent=`${0}.`))}percentage(){this.vibrate();let t=Number(this.result.textContent);this.result.textContent=t/100}number(t){this.vibrate();let e=this.result.textContent;e==="-0"?(this.result.textContent=`-${t}`,this.firstTouch=!1):e==="0."?(this.result.textContent+=t,this.firstTouch=!1):e!=="0"&&!this.firstTouch?this.result.textContent+=t:(this.result.textContent=t,this.firstTouch=!1),console.log(`clicked number: ${t}`)}operation(t){this.vibrate();let e=t.dataset.action;console.log(`clicked operator ${e}`),this.turn>1&&this.calculate.bind(this)();let s=Number(this.result.textContent);this.action=e,this.prevVal.length>=2?this.prevVal=[s]:this.firstTouch||this.prevVal.push(s),this.firstTouch=!0,this.turn++,console.log(`memory: ${this.prevVal}`),console.log(`turn no.: ${this.turn}`)}calculate(){this.vibrate();let t=Number(this.result.textContent);function e(){this.prevVal.length>=2?(this.prevVal.shift(),this.prevVal.unshift(t)):this.prevVal.push(t)}switch(this.action){case"add":e.bind(this)(),this.result.textContent=this.prevVal.reduce((s,i)=>s+i);break;case"substract":e.bind(this)(),this.result.textContent=this.prevVal.reduce((s,i)=>s-i);break;case"divide":e.bind(this)(),this.result.textContent=this.prevVal.reduce((s,i)=>s/i);break;case"multiply":e.bind(this)(),this.result.textContent=this.prevVal.reduce((s,i)=>s*i);break}this.firstTouch=!0,this.turn=1,console.log("========Calc========"),console.log(`memory: ${this.prevVal[0]} ${this.action} ${this.prevVal[1]}}`),console.log(`Turn no.: ${this.turn}`)}connectedCallback(){this.render(),this.result=this.shadow.querySelector(".js-result"),this.buttons=this.shadow.querySelectorAll("button"),this.addEventToButtons()}vibrate(){navigator.vibrate?r(c("os-vibration"))&&(console.log("vibrating"),navigator.vibrate(100)):console.log("vibration not supported")}addEventToButtons(){this.buttons.forEach(function(t){switch(t.dataset.action){case"clear":t.addEventListener("click",this.reset.bind(this));break;case"number":t.addEventListener("click",function(e){let s=e.target||e.srcElement;this.number(s.textContent)}.bind(this));break;case"negative":t.addEventListener("click",this.negative.bind(this));break;case"percentage":t.addEventListener("click",this.percentage.bind(this));break;case"float":t.addEventListener("click",this.float.bind(this));break;case"divide":case"multiply":case"substract":case"add":t.addEventListener("click",function(e){this.operation(e.target||e.srcElement)}.bind(this));break;case"result":t.addEventListener("click",this.calculate.bind(this));break}}.bind(this))}render(){this.shadow.innerHTML=`
      <style>
        :host .calc {
          height: 100%;
          display: grid;
          padding: 1rem;
          margin: auto;
          background-color: #1c1c1c;
          font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
          font-size: 1rem;
          line-height: 1.2;
          color: #fff;
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
          background-color: #333;
          color: #fff;
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
    `}}customElements.define("os-app-calculator",T);class A extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: block;
          background-color: green;
        }
      </style>
      <span>Message</span>
      <span>Coucou c'est Maman</span>
    `}}customElements.define("os-app-message",A);class S extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}generateSettings(t){let e="";return t.forEach(s=>{e+=`
        <div class="category">
          <h2 class="category-title">${s.categoryName}</h2>
          <div class="settings">
      `,s.settings.forEach(i=>{e+=`
          <div class="setting">
            <div class="setting-name">${i.name}</div>
            <div class="setting-value" id="${i.id}">
              <input type="${i.type}" name="${i.localStorageKey}" ${r(i)?"checked":""}>  
              <label for="${i.localStorageKey}"></label>
            </div>
          </div>
        `}),e+=`
          </div>
        </div>
      `}),e}changeSettingValue(t,e){localStorage.setItem(t.localStorageKey,e),document.dispatchEvent(new CustomEvent("changeSetting",{detail:{setting:t.id,value:e}}))}defineEventListeners(){l.forEach(t=>{t.settings.forEach(e=>{this.shadow.querySelector(`#${e.id}`).addEventListener("change",i=>{this.changeSettingValue(e,i.target.checked)})})})}connectedCallback(){this.render(),this.defineEventListeners()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: flex !important;
          flex-direction: column;
          background-color: var(--color-background);
          color: var(--color-text);
          padding: 1rem;
          gap: 1rem;
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
        :host .category .settings .setting:last-child {
          border-bottom: none;
        }
      </style> 
      <h1>Settings</h1>
      ${this.generateSettings(l)}
    `}}customElements.define("os-app-settings",S);class V extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr auto;
          height: 100%;
        }
      </style>
      <os-topbar></os-topbar>
      <os-app-list></os-app-list>
      <os-dock class="dock"></os-dock>
      <os-app-wrapper></os-app-wrapper>
    `}}customElements.define("app-root",V);const $="/assets/images/background-b2a3a0be.jpg",B=document.querySelector("body");B.style.backgroundImage=`url(${$})`;
