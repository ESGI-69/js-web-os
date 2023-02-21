(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJtSURBVHgB7dy/axNhHMfxTyVdquKgDg1YcNFCp3LnnsUtxMX6H9TF2blkFtzTLm5Cu0iiU/4Df+Di0BQUccgNCmKjdehQvQ46tHe9IznySZ/3CwKBJ2TIm3vy3JeQufsv4iPNuJ17b/49j+NYs+yCYIUgZghihiBmCGKGIGYIYqamCqxcjbS2vJ65/utwpCevHwsnVRLk+sKiVq5FmetfDxLhdGxZZghihiBmCGKGIGYIYoYgZghihiBmCGKm0OgknU01lpoqKh2d5FmYv6RHqxsqKp19PfvwVCEoFCT9gMsEOcvF+cul3i+dfYUShC3LDEHMEMQMQcwQxAxBzBQ69n7e39P27qaKunnllu4sNjLX0/uKVx+fq6j09aEoFuTH3vGjqMaNZm6Qg8Of2hlsCSexZZkhiBmCmCGIGYKYIYgZgpip5Le97qIo0rQkSaLhcJi5HmSQTqejaWm327lB2LLMVHKFnDX7Cmk2VVY1QUrOvvAfW5YZgpghiJkgj715x86qjUb5B5ogg7RaLbliyzJTW7u9LviYO/pL5wh/YIaJqm32dzXrHt5d1nlR2+oPNOvKBqnX65qW9Nibd/QN8tjb7XY1Len4vdfrZa7zHWKGIGYIYoYgZghihiBmCGImyPsQ53kXV4gZgpghiBmCmCGIGYKYIYgZgpghiJmx7tQ3HqyqGS9pkl6+/aL29nuFiivEDEHMEMQMQcwQxAxBzIx17E2+/9a7T980SYNkXyEbK8jx74L7wgSxZZkhiBmCmCGIGYKYIYgZgpghiBmCmCGIGYKYIYgZgpghiBmCmCGIGYKYIYgZgpghiJk/WTJ+U8D58q8AAAAASUVORK5CYII=",b="/assets/images/messages-33f358e7.png",p=[{name:"Calculator",icon:m,id:"calculator",tag:"os-app-calculator",isInDock:!0},{name:"Messages",icon:b,id:"messages",tag:"os-app-message",isInDock:!0},{name:"Settings",icon:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-gear-512.png",id:"settings",tag:"os-app-settings",isInDock:!0}];class f extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();for(let t=0;t<this.idInDock.length;t++){const e=this.idInDock[t];this.shadow.getElementById(e).addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("open-app",{detail:{id:e}}))})}}disconnectedCallback(){console.log("disconnectedCallback")}render(){this.shadow.innerHTML=`
      <style>
        :host {
          padding: 1rem;
          display: grid;
          grid-template-columns: repeat(4, auto);
          grid-template-rows: 1fr;
          justify-content: space-around;

          background: var(--color-dock-background);
          backdrop-filter: blur(10px);
        }
      </style>
      ${this.iconsInDock}
    `}get iconsInDock(){return p.filter(o=>o.isInDock).map(o=>`
        <os-app-icon id="${o.id}" name="${o.name}" icon="${o.icon}"></os-app-icon>
      `).join("")}get idInDock(){return p.filter(o=>o.isInDock).map(o=>o.id)}}customElements.define("os-dock",f);const y="/assets/images/battery-empty-7dddc413.svg",v="/assets/images/battery-quarter-91ab0e99.svg",h=[{categoryName:"General",settings:[{name:"Vibration",localStorageKey:"os-vibration",id:"os-vibration",type:"checkbox",value:!0},{name:"Vibration duration",dependsOn:"os-vibration",dependsOnValue:!0,localStorageKey:"os-vibration-duration",id:"os-vibration-duration",type:"number",value:100},{name:"Theme",localStorageKey:"os-theme",id:"os-theme",type:"select",options:[{name:"Light",value:"light"},{name:"Dark",value:"dark"}],value:"dark"}]},{categoryName:"Topbar",settings:[{name:"Show date",localStorageKey:"topbar-show-date",id:"topbar-show-date",type:"checkbox",value:!0},{name:"Date format",dependsOn:"topbar-show-date",dependsOnValue:!0,localStorageKey:"topbar-date-format",id:"topbar-date-format",type:"select",options:[{name:"dd/mm/yyyy",value:"dd/mm/yyyy"},{name:"dd/mm",value:"dd/mm"},{name:"dd",value:"dd"}],value:"dd/mm/yyyy"},{name:"Show time",localStorageKey:"topbar-show-time",id:"topbar-show-time",type:"checkbox",value:!0},{name:"Time format",dependsOn:"topbar-show-time",dependsOnValue:!0,localStorageKey:"topbar-time-format",id:"topbar-time-format",type:"select",options:[{name:"hh:mm:ss",value:"hh:mm:ss"},{name:"hh:mm",value:"hh:mm"},{name:"hh",value:"hh"}],value:"hh:mm:ss"},{name:"Show battery",localStorageKey:"topbar-show-battery",id:"topbar-show-battery",type:"checkbox",value:!0},{name:"Show ping",localStorageKey:"topbar-show-ping",id:"topbar-show-ping",type:"checkbox",value:!0},{name:"Ping domain",dependsOn:"topbar-show-ping",dependsOnValue:!0,localStorageKey:"topbar-ping-domain",id:"topbar-ping-domain",type:"text",value:"https://jsonplaceholder.typicode.com/todos/1"},{name:"Ping interval",dependsOn:"topbar-show-ping",dependsOnValue:!0,localStorageKey:"topbar-ping-interval",id:"topbar-ping-interval",type:"number",value:1},{name:"Show vibration status",localStorageKey:"topbar-show-vibration-status",id:"topbar-show-vibration-status",type:"checkbox",value:!0}]}],l=n=>{for(let t=0;t<h.length;t++){const e=h[t];for(let o=0;o<e.settings.length;o++){const s=e.settings[o];if(s.id===n)return s}}return console.warn(`Setting with id ${n} not found`),null},r=n=>{const t=localStorage.getItem(n.localStorageKey);if(n.type==="select")return t===null?n.value:t;if(n.type==="text"||n.type==="number")return t===null?n.value:t;if(n.type==="checkbox")return t===null?n.value:t==="true"};class w extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.isTimeVisible=r(l("topbar-show-time")),this.isVibrationVisible=r(l("topbar-show-vibration-status")),this.isDateVisible=r(l("topbar-show-date")),this.isPingVisible=r(l("topbar-show-ping")),this.isBatteryVisible=r(l("topbar-show-battery")),this.reponseTimes=[],this.pingInterval=null}defineAllEventListeners(){document.addEventListener("changeSetting",t=>{const e=()=>{clearInterval(this.timeInterval),clearInterval(this.pingInterval),this.render()};t.detail.setting==="topbar-show-time"?(this.isTimeVisible=t.detail.value,e()):t.detail.setting==="topbar-time-format"?e():t.detail.setting==="topbar-show-vibration-status"?(this.isVibrationVisible=t.detail.value,e()):t.detail.setting==="topbar-show-date"?(this.isDateVisible=t.detail.value,e()):t.detail.setting==="topbar-date-format"?e():t.detail.setting==="topbar-show-ping"?(this.isPingVisible=t.detail.value,e()):t.detail.setting==="topbar-ping-domain"||t.detail.setting==="topbar-ping-interval"?e():t.detail.setting==="topbar-show-battery"?(this.isBatteryVisible=t.detail.value,e()):t.detail.setting==="os-vibration"&&e()})}connectedCallback(){this.render(),this.defineAllEventListeners()}updateTime(){const t=new Date;let e=t.getHours();e=e<10?`0${e}`:e;let o=t.getMinutes();o=o<10?`0${o}`:o;let s=t.getSeconds();s=s<10?`0${s}`:s;let i=t.getDate();i=i<10?`0${i}`:i;let a=t.getMonth()+1;a=a<10?`0${a}`:a;const u=t.getFullYear();if(this.isTimeVisible){const d=this.shadow.querySelector(".hour"),c=r(l("topbar-time-format"));c==="hh"?d.textContent=`${e}`:c==="hh:mm"?d.textContent=`${e}:${o}`:(c==="hh:mm:ss"||c===null)&&(d.textContent=`${e}:${o}:${s}`)}if(this.isDateVisible){const d=this.shadow.querySelector(".date"),c=r(l("topbar-date-format"));c==="dd"?d.textContent=`${i}`:c==="dd/mm"?d.textContent=`${i}/${a}`:(c==="dd/mm/yyyy"||c===null)&&(d.textContent=`${i}/${a}/${u}`)}}checkPing(){if(this.isPingVisible){const t=r(l("topbar-ping-interval"));this.pingInterval=setInterval(()=>{const e=Date.now(),o=r(l("topbar-ping-domain"));fetch(o).then(s=>s.json()).then(()=>{const i=Date.now()-e;this.reponseTimes.push(i),this.reponseTimes.length>5&&this.reponseTimes.shift();const a=this.reponseTimes.reduce((d,c)=>d+c)/this.reponseTimes.length,u=this.shadow.querySelector(".ping");this.reponseTimes.length===5&&(u.textContent=`${Math.round(a)} ms`)})},t*1e3)}else this.pingInterval&&clearInterval(this.pingInterval)}checkBattery(){if(!this.isBatteryVisible)return;const t=this.shadow.querySelector(".battery");if(navigator.getBattery){const e=(o,s)=>{let i=`${Math.round(o*100)}%`;s?i+="<icon-bolt></icon-bolt>":o>=.75?i+="<icon-battery-full></icon-battery-full>":o>=.5?i+="<icon-battery-three-quarters></icon-battery-three-quarters>":o>=.25?i+="<icon-battery-half></icon-battery-half>":o>=.1?i+=`<img src="${v}">`:i+=`<img src="${y}">`,t.innerHTML=i};navigator.getBattery().then(o=>{e(o.level,o.charging),o.addEventListener("levelchange",()=>{e(o.level,o.charging)}),o.addEventListener("chargingchange",()=>{e(o.level,o.charging)})})}else console.warn("Battery API not supported"),t.innerHTML="--- <icon-battery-half></icon-battery-half>"}addTopbarItems(){const t=document.createElement("div");t.classList.add("left");const e=document.createElement("div");e.classList.add("center");const o=document.createElement("div");if(o.classList.add("right"),this.isTimeVisible){const s=document.createElement("span");s.classList.add("hour"),s.textContent="12:00",t.append(s)}if(this.isVibrationVisible){const s=document.createElement("span");s.classList.add("vibration"),r(l("os-vibration"))?s.innerHTML="<icon-bell></icon-bell>":s.innerHTML="<icon-bell-slash></icon-bell-slash>",t.append(s)}if(this.isDateVisible){const s=document.createElement("span");s.classList.add("date"),e.append(s)}if(this.isPingVisible){const s=document.createElement("span");s.classList.add("ping"),s.textContent=`${this.reponseTimes.length===5?Math.round(this.reponseTimes.reduce((i,a)=>i+a)/this.reponseTimes.length):"---"} ms`,o.append(s)}if(this.isBatteryVisible){const s=document.createElement("span");s.classList.add("battery"),s.textContent="100%",o.append(s)}this.shadow.append(t,e,o)}render(){this.shadow.innerHTML=`
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
    `,this.addTopbarItems(),this.updateTime(),this.timeInterval=setInterval(()=>{this.updateTime()},1e3),this.checkPing(),this.checkBattery()}}customElements.define("os-topbar",w);class x extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["name","icon","show-name"]}get name(){return this.getAttribute("name")}set name(t){this.setAttribute("name",t)}get icon(){return this.getAttribute("icon")}set icon(t){this.setAttribute("icon",t)}get showName(){return typeof this.getAttribute("show-name")=="string"}set showName(t){this.setAttribute("show-name",t)}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("os-app-icon",x);let C=class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),document.addEventListener("open-app",({detail:t})=>{const e=p.find(o=>o.id===t.id);this.openApp(e)}),this.shadow.querySelector("#close").addEventListener("click",()=>{this.closeApp()}),document.addEventListener("close-app",()=>{this.closeApp()}),this.observer=new MutationObserver(()=>{this.render()}),this.observer.observe(this,{childList:!0,subtree:!0})}openApp(t){this.shadow.querySelector("#app").innerHTML=`
      <${t.tag}></${t.tag}>
    `,this.classList.add("open")}closeApp(){this.classList.remove("open"),this.shadow.querySelector("#app").innerHTML=""}attributeChangedCallback(t,e,o){t==="count"&&this.render()}render(){this.shadow.innerHTML=`
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
          background-color: var(--color-red-dark);
          color: var(--color-red-darker);
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
    `}};customElements.define("os-app-wrapper",C);class k extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.action="",this.prevVal=[],this.turn=1,this.firstTouch=!0}reset(){this.vibrate(),this.result.textContent=0,this.action="",this.prevVal=[],this.firstTouch=!0,this.turn=1}negative(){this.vibrate();let t=String(this.result.textContent);!this.action||!this.firstTouch?t.includes("-")?this.result.textContent=t.substr(1,t.length):this.result.textContent=`-${t}`:this.action&&this.firstTouch&&(t.includes("-")?this.result.textContent=t.substr(1,t.length):this.result.textContent="-0")}float(){this.vibrate();let t=String(this.result.textContent);!this.action||!this.firstTouch?t.includes(".")||(this.result.textContent=`${t}.`):this.action&&this.firstTouch&&(t.includes(".")||(this.result.textContent=`${0}.`))}percentage(){this.vibrate();let t=Number(this.result.textContent);this.result.textContent=t/100}number(t){this.vibrate();let e=this.result.textContent;e==="-0"?(this.result.textContent=`-${t}`,this.firstTouch=!1):e==="0."?(this.result.textContent+=t,this.firstTouch=!1):e!=="0"&&!this.firstTouch?this.result.textContent+=t:(this.result.textContent=t,this.firstTouch=!1),console.log(`clicked number: ${t}`)}operation(t){this.vibrate();let e=t.dataset.action;console.log(`clicked operator ${e}`),this.turn>1&&this.calculate.bind(this)();let o=Number(this.result.textContent);this.action=e,this.prevVal.length>=2?this.prevVal=[o]:this.firstTouch||this.prevVal.push(o),this.firstTouch=!0,this.turn++,console.log(`memory: ${this.prevVal}`),console.log(`turn no.: ${this.turn}`)}calculate(){this.vibrate();let t=Number(this.result.textContent);function e(){this.prevVal.length>=2?(this.prevVal.shift(),this.prevVal.unshift(t)):this.prevVal.push(t)}switch(this.action){case"add":e.bind(this)(),this.result.textContent=this.prevVal.reduce((o,s)=>o+s);break;case"substract":e.bind(this)(),this.result.textContent=this.prevVal.reduce((o,s)=>o-s);break;case"divide":e.bind(this)(),this.result.textContent=this.prevVal.reduce((o,s)=>o/s);break;case"multiply":e.bind(this)(),this.result.textContent=this.prevVal.reduce((o,s)=>o*s);break}this.firstTouch=!0,this.turn=1,console.log("========Calc========"),console.log(`memory: ${this.prevVal[0]} ${this.action} ${this.prevVal[1]}}`),console.log(`Turn no.: ${this.turn}`)}connectedCallback(){this.render(),this.result=this.shadow.querySelector(".js-result"),this.buttons=this.shadow.querySelectorAll("button"),this.addEventToButtons()}vibrate(){navigator.vibrate?(vibrationDuration=r(l("os-vibration-duration")),r(l("os-vibration"))&&(console.log("vibrating"),navigator.vibrate(vibrationDuration))):console.log("vibration not supported")}addEventToButtons(){this.buttons.forEach(function(t){switch(t.dataset.action){case"clear":t.addEventListener("click",this.reset.bind(this));break;case"number":t.addEventListener("click",function(e){let o=e.target||e.srcElement;this.number(o.textContent)}.bind(this));break;case"negative":t.addEventListener("click",this.negative.bind(this));break;case"percentage":t.addEventListener("click",this.percentage.bind(this));break;case"float":t.addEventListener("click",this.float.bind(this));break;case"divide":case"multiply":case"substract":case"add":t.addEventListener("click",function(e){this.operation(e.target||e.srcElement)}.bind(this));break;case"result":t.addEventListener("click",this.calculate.bind(this));break}}.bind(this))}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("os-app-calculator",k);class V extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: block;
          background-color: green;
        }
      </style>
      <span>Message</span>
      <span>Coucou c'est Maman</span>
    `}}customElements.define("os-app-message",V);class L extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}generateSettings(t){let e="";return t.forEach(o=>{e+=`
        <div class="category">
          <h2 class="category-title">${o.categoryName}</h2>
          <div class="settings">
      `,o.settings.forEach(s=>{if(s.dependsOn&&r(l(s.dependsOn))!==s.dependsOnValue)return;const i=!!s.dependsOn;e+=`
          <div class="setting ${i?"dependent":""}">
            <div class="setting-name">${s.name}</div>
            <div class="setting-value" id="${s.id}">
        `,s.type==="checkbox"?e+=`
              <input type="${s.type}" name="${s.localStorageKey}" ${r(s)?"checked":""}>  
              <label for="${s.localStorageKey}"></label>
            </div>
          </div>
          `:s.type==="text"||s.type==="number"?e+=`
              <input type="${s.type}" name="${s.localStorageKey}" value="${r(s)}">  
            </div>
          </div>
          `:s.type==="select"&&(e+=`
              <select name="${s.localStorageKey}">
          `,s.options.forEach(a=>{e+=`
              <option value="${a.value}" ${r(s)===a.value?"selected":""}>${a.name}</option>
            `}),e+=`
              </select>
            </div>
          </div>
          `)}),e+=`
          </div>
        </div>
      `}),e}changeSettingValue(t,e){localStorage.setItem(t.localStorageKey,e),document.dispatchEvent(new CustomEvent("changeSetting",{detail:{setting:t.id,value:e}})),this.render()}defineEventListeners(){h.forEach(t=>{t.settings.forEach(e=>{if(e.dependsOn&&r(l(e.dependsOn))!==e.dependsOnValue)return;this.shadow.querySelector(`#${e.id}`).addEventListener("change",s=>{e.type==="checkbox"?this.changeSettingValue(e,s.target.checked):e.type==="text"||e.type==="number"?this.changeSettingValue(e,s.target.value):e.type==="select"&&this.changeSettingValue(e,s.target.value)})})})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
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
        :host .category .settings .setting.dependent {
          padding-left: 1.5rem;
        }
        :host .category .settings .setting:last-child {
          border-bottom: none;
        }
      </style> 
      <h1>Settings</h1>
      ${this.generateSettings(h)}
    `,this.defineEventListeners()}}customElements.define("os-app-settings",L);class E extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("app-root",E);class S extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("icon-bolt",S);class T extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("icon-bell",T);class H extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("icon-bell-slash",H);class I extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("icon-battery-three-quarters",I);class A extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("icon-battery-half",A);class M extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("icon-battery-full",M);const $="/assets/images/background-b2a3a0be.jpg",B=document.querySelector("body");B.style.backgroundImage=`url(${$})`;document.addEventListener("changeSetting",n=>{n.detail.setting==="os-theme"&&g(n.detail.value)});const g=n=>{n==="light"?(document.body.style.setProperty("--color-background","#f6f6f6"),document.body.style.setProperty("--color-background-light","#e6e6e6"),document.body.style.setProperty("--color-background-lighter","#d6d6d6"),document.body.style.setProperty("--color-text","#0B0B0B"),document.body.style.setProperty("--color-red-dark","#ff6b6b"),document.body.style.setProperty("--color-red-darker","#F9CACA"),document.body.style.setProperty("--color-topbar-background","rgba(255, 255, 255, 0.6)"),document.body.style.setProperty("--color-dock-background","rgba(255, 255, 255, 0.2)")):(document.body.style.setProperty("--color-background","#222222"),document.body.style.setProperty("--color-background-light","#333333"),document.body.style.setProperty("--color-background-lighter","#444444"),document.body.style.setProperty("--color-text","#f6f6f6"),document.body.style.setProperty("--color-red-dark","#8B0000"),document.body.style.setProperty("--color-red-darker","#580000"),document.body.style.setProperty("--color-topbar-background","rgba(0, 0, 0, 0.6)"),document.body.style.setProperty("--color-dock-background","rgba(0, 0, 0, 0.2)"))};g(r(l("os-theme")));
