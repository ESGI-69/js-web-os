(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJtSURBVHgB7dy/axNhHMfxTyVdquKgDg1YcNFCp3LnnsUtxMX6H9TF2blkFtzTLm5Cu0iiU/4Df+Di0BQUccgNCmKjdehQvQ46tHe9IznySZ/3CwKBJ2TIm3vy3JeQufsv4iPNuJ17b/49j+NYs+yCYIUgZghihiBmCGKGIGYIYqamCqxcjbS2vJ65/utwpCevHwsnVRLk+sKiVq5FmetfDxLhdGxZZghihiBmCGKGIGYIYoYgZghihiBmCGKm0OgknU01lpoqKh2d5FmYv6RHqxsqKp19PfvwVCEoFCT9gMsEOcvF+cul3i+dfYUShC3LDEHMEMQMQcwQxAxBzBQ69n7e39P27qaKunnllu4sNjLX0/uKVx+fq6j09aEoFuTH3vGjqMaNZm6Qg8Of2hlsCSexZZkhiBmCmCGIGYKYIYgZgpip5Le97qIo0rQkSaLhcJi5HmSQTqejaWm327lB2LLMVHKFnDX7Cmk2VVY1QUrOvvAfW5YZgpghiJkgj715x86qjUb5B5ogg7RaLbliyzJTW7u9LviYO/pL5wh/YIaJqm32dzXrHt5d1nlR2+oPNOvKBqnX65qW9Nibd/QN8tjb7XY1Len4vdfrZa7zHWKGIGYIYoYgZghihiBmCGImyPsQ53kXV4gZgpghiBmCmCGIGYKYIYgZgpghiJmx7tQ3HqyqGS9pkl6+/aL29nuFiivEDEHMEMQMQcwQxAxBzIx17E2+/9a7T980SYNkXyEbK8jx74L7wgSxZZkhiBmCmCGIGYKYIYgZgpghiBmCmCGIGYKYIYgZgpghiBmCmCGIGYKYIYgZgpghiJk/WTJ+U8D58q8AAAAASUVORK5CYII=",u="/assets/images/messages-33f358e7.png",l=[{name:"Calculator",icon:d,id:"calculator",tag:"os-app-calculator",isInDock:!0},{name:"Messages",icon:u,id:"messages",tag:"os-app-message",isInDock:!0}];class p extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();for(let t=0;t<this.idInDock.length;t++){const i=this.idInDock[t];this.shadow.getElementById(i).addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("open-app",{detail:{id:i}}))})}}disconnectedCallback(){console.log("disconnectedCallback")}render(){this.shadow.innerHTML=`
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
    `}get iconsInDock(){return l.filter(e=>e.isInDock).map(e=>`
        <os-app-icon id="${e.id}" name="${e.name}" icon="${e.icon}"></os-app-icon>
      `).join("")}get idInDock(){return l.filter(e=>e.isInDock).map(e=>e.id)}}customElements.define("os-dock",p);const g="/assets/images/battery-empty-7dddc413.svg",m="/assets/images/battery-full-643d0ca6.svg",h="/assets/images/battery-half-985d29b8.svg",b="/assets/images/battery-quarter-91ab0e99.svg",f="/assets/images/battery-three-quarters-7532dfbe.svg",v="/assets/images/bell-slash-1d8c1f5d.svg",y="/assets/images/bell-cb1122b9.svg",k="/assets/images/bolt-5c37c345.svg";class x extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.isTimeVisible=!0,this.isVibrationVisible=!0,this.isDateVisible=!0,this.isPingVisible=!0,this.isBatteryVisible=!0,this.reponseTimes=[],this.pingInterval=null}connectedCallback(){this.render(),this.updateTime(),setInterval(()=>{this.updateTime()},1e3),this.checkPing(),this.checkBattery()}updateTime(){const t=new Date;let i=t.getHours();i=i.length<10?`0${i}`:i;let e=t.getMinutes();e=e<10?`0${e}`:e;let s=t.getSeconds();s=s<10?`0${s}`:s;let n=t.getDate();n=n.length<10?`0${n}`:n;let o=t.getMonth()+1;o=o<10?`0${o}`:o;const r=t.getFullYear();if(this.isTimeVisible){const c=this.shadow.querySelector(".hour");c.textContent=`${i}:${e}:${s}`}if(this.isDateVisible){const c=this.shadow.querySelector(".date");c.textContent=`${n}/${o}/${r}`}}checkPing(){this.isPingVisible?this.pingInterval=setInterval(()=>{const t=Date.now();fetch("https://jsonplaceholder.typicode.com/todos/1").then(i=>i.json()).then(()=>{const e=Date.now()-t;this.reponseTimes.push(e),this.reponseTimes.length>5&&this.reponseTimes.shift();const s=this.reponseTimes.reduce((o,r)=>o+r)/this.reponseTimes.length,n=this.shadow.querySelector(".ping");this.reponseTimes.length===5&&(n.textContent=`${Math.round(s)}ms`)})},1e3):this.pingInterval&&clearInterval(this.pingInterval)}checkBattery(){if(!this.isBatteryVisible)return;const t=this.shadow.querySelector(".battery");if(navigator.getBattery){const i=(e,s)=>{let n=`${Math.round(e*100)}%`;s?n+=`<img src="${k}">`:e>=.75?n+=`<img src="${m}">`:e>=.5?n+=`<img src="${f}">`:e>=.25?n+=`<img src="${h}">`:e>=.1?n+=`<img src="${b}">`:n+=`<img src="${g}">`,t.innerHTML=n};navigator.getBattery().then(e=>{i(e.level,e.charging),e.addEventListener("levelchange",()=>{i(e.level,e.charging)}),e.addEventListener("chargingchange",()=>{i(e.level,e.charging)})})}else console.warn("Battery API not supported"),t.innerHTML=`--- <img src="${h}">`}addTopbarItems(){const t=document.createElement("div");t.classList.add("left");const i=document.createElement("div");i.classList.add("center");const e=document.createElement("div");if(e.classList.add("right"),this.isTimeVisible){const s=document.createElement("span");s.classList.add("hour"),s.textContent="12:00",t.append(s)}if(this.isVibrationVisible){const s=document.createElement("span");s.classList.add("vibration"),s.innerHTML=`<img src="${y}"> <img src="${v}">`,t.append(s)}if(this.isDateVisible){const s=document.createElement("span");s.classList.add("date"),i.append(s)}if(this.isPingVisible){const s=document.createElement("span");s.classList.add("ping"),s.textContent="--- ms",e.append(s)}if(this.isBatteryVisible){const s=document.createElement("span");s.classList.add("battery"),s.textContent="100%",e.append(s)}this.shadow.append(t,i,e)}render(){this.shadow.innerHTML=`
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
    `,this.addTopbarItems()}}customElements.define("os-topbar",x);class w extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["name","icon","show-name"]}get name(){return this.getAttribute("name")}set name(t){this.setAttribute("name",t)}get icon(){return this.getAttribute("icon")}set icon(t){this.setAttribute("icon",t)}get showName(){return typeof this.getAttribute("show-name")=="string"}set showName(t){this.setAttribute("show-name",t)}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("os-app-icon",w);let C=class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),document.addEventListener("open-app",({detail:t})=>{const i=l.find(e=>e.id===t.id);this.openApp(i)}),this.shadow.querySelector("#close").addEventListener("click",()=>{this.closeApp()}),document.addEventListener("close-app",()=>{this.closeApp()}),this.observer=new MutationObserver(()=>{this.render()}),this.observer.observe(this,{childList:!0,subtree:!0})}openApp(t){this.shadow.querySelector("#app").innerHTML=`
      <${t.tag}></${t.tag}>
    `,this.classList.add("open")}closeApp(){this.classList.remove("open"),this.shadow.querySelector("#app").innerHTML=""}attributeChangedCallback(t,i,e){t==="count"&&this.render()}render(){this.shadow.innerHTML=`
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
    `}};customElements.define("os-app-wrapper",C);class A extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.action="",this.prevVal=[],this.turn=1,this.firstTouch=!0}reset(){this.vibrate(),this.result.textContent=0,this.action="",this.prevVal=[],this.firstTouch=!0,this.turn=1}negative(){this.vibrate();let t=String(this.result.textContent);!this.action||!this.firstTouch?t.includes("-")?this.result.textContent=t.substr(1,t.length):this.result.textContent=`-${t}`:this.action&&this.firstTouch&&(t.includes("-")?this.result.textContent=t.substr(1,t.length):this.result.textContent="-0")}float(){this.vibrate();let t=String(this.result.textContent);!this.action||!this.firstTouch?t.includes(".")||(this.result.textContent=`${t}.`):this.action&&this.firstTouch&&(t.includes(".")||(this.result.textContent=`${0}.`))}percentage(){this.vibrate();let t=Number(this.result.textContent);this.result.textContent=t/100}number(t){this.vibrate();let i=this.result.textContent;i==="-0"?(this.result.textContent=`-${t}`,this.firstTouch=!1):i==="0."?(this.result.textContent+=t,this.firstTouch=!1):i!=="0"&&!this.firstTouch?this.result.textContent+=t:(this.result.textContent=t,this.firstTouch=!1),console.log(`clicked number: ${t}`)}operation(t){this.vibrate();let i=t.dataset.action;console.log(`clicked operator ${i}`),this.turn>1&&this.calculate.bind(this)();let e=Number(this.result.textContent);this.action=i,this.prevVal.length>=2?this.prevVal=[e]:this.firstTouch||this.prevVal.push(e),this.firstTouch=!0,this.turn++,console.log(`memory: ${this.prevVal}`),console.log(`turn no.: ${this.turn}`)}calculate(){this.vibrate();let t=Number(this.result.textContent);function i(){this.prevVal.length>=2?(this.prevVal.shift(),this.prevVal.unshift(t)):this.prevVal.push(t)}switch(this.action){case"add":i.bind(this)(),this.result.textContent=this.prevVal.reduce((e,s)=>e+s);break;case"substract":i.bind(this)(),this.result.textContent=this.prevVal.reduce((e,s)=>e-s);break;case"divide":i.bind(this)(),this.result.textContent=this.prevVal.reduce((e,s)=>e/s);break;case"multiply":i.bind(this)(),this.result.textContent=this.prevVal.reduce((e,s)=>e*s);break}this.firstTouch=!0,this.turn=1,console.log("========Calc========"),console.log(`memory: ${this.prevVal[0]} ${this.action} ${this.prevVal[1]}}`),console.log(`Turn no.: ${this.turn}`)}connectedCallback(){this.render(),this.result=this.shadow.querySelector(".js-result"),this.buttons=this.shadow.querySelectorAll("button"),this.addEventToButtons()}vibrate(){navigator.vibrate?(console.log("vibrating"),navigator.vibrate(100)):console.log("vibration not supported")}addEventToButtons(){this.buttons.forEach(function(t){switch(t.dataset.action){case"clear":t.addEventListener("click",this.reset.bind(this));break;case"number":t.addEventListener("click",function(i){let e=i.target||i.srcElement;this.number(e.textContent)}.bind(this));break;case"negative":t.addEventListener("click",this.negative.bind(this));break;case"percentage":t.addEventListener("click",this.percentage.bind(this));break;case"float":t.addEventListener("click",this.float.bind(this));break;case"divide":case"multiply":case"substract":case"add":t.addEventListener("click",function(i){this.operation(i.target||i.srcElement)}.bind(this));break;case"result":t.addEventListener("click",this.calculate.bind(this));break}}.bind(this))}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("os-app-calculator",A);class I extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.shadow.querySelector("#close").addEventListener("click",()=>{this.closeApp()})}closeApp(){document.dispatchEvent(new CustomEvent("close-app",{detail:{id:"message"}}))}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: block;
          background-color: green;
        }
      </style>
      <button id="close">Close the app</button>
      <span>Message</span>
      <span>Coucou c'est Maman</span>
    `}}customElements.define("os-app-message",I);class L extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("app-root",L);const T="/assets/images/background-b2a3a0be.jpg",E=document.querySelector("body");E.style.backgroundImage=`url(${T})`;
