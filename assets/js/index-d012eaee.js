(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJtSURBVHgB7dy/axNhHMfxTyVdquKgDg1YcNFCp3LnnsUtxMX6H9TF2blkFtzTLm5Cu0iiU/4Df+Di0BQUccgNCmKjdehQvQ46tHe9IznySZ/3CwKBJ2TIm3vy3JeQufsv4iPNuJ17b/49j+NYs+yCYIUgZghihiBmCGKGIGYIYqamCqxcjbS2vJ65/utwpCevHwsnVRLk+sKiVq5FmetfDxLhdGxZZghihiBmCGKGIGYIYoYgZghihiBmCGKm0OgknU01lpoqKh2d5FmYv6RHqxsqKp19PfvwVCEoFCT9gMsEOcvF+cul3i+dfYUShC3LDEHMEMQMQcwQxAxBzBQ69n7e39P27qaKunnllu4sNjLX0/uKVx+fq6j09aEoFuTH3vGjqMaNZm6Qg8Of2hlsCSexZZkhiBmCmCGIGYKYIYgZgpip5Le97qIo0rQkSaLhcJi5HmSQTqejaWm327lB2LLMVHKFnDX7Cmk2VVY1QUrOvvAfW5YZgpghiJkgj715x86qjUb5B5ogg7RaLbliyzJTW7u9LviYO/pL5wh/YIaJqm32dzXrHt5d1nlR2+oPNOvKBqnX65qW9Nibd/QN8tjb7XY1Len4vdfrZa7zHWKGIGYIYoYgZghihiBmCGImyPsQ53kXV4gZgpghiBmCmCGIGYKYIYgZgpghiJmx7tQ3HqyqGS9pkl6+/aL29nuFiivEDEHMEMQMQcwQxAxBzIx17E2+/9a7T980SYNkXyEbK8jx74L7wgSxZZkhiBmCmCGIGYKYIYgZgpghiBmCmCGIGYKYIYgZgpghiBmCmCGIGYKYIYgZgpghiJk/WTJ+U8D58q8AAAAASUVORK5CYII=",l="/assets/images/messages-33f358e7.png",r=[{name:"Calculator",icon:c,id:"calculator",tag:"os-app-calculator",isInDock:!0},{name:"Messages",icon:l,id:"messages",tag:"os-app-message",isInDock:!0}];class d extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();for(let t=0;t<this.idInDock.length;t++){const s=this.idInDock[t];this.shadow.getElementById(s).addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("open-app",{detail:{id:s}}))})}}disconnectedCallback(){console.log("disconnectedCallback")}render(){this.shadow.innerHTML=`
      <style>
        :host {
          padding: 1rem;
          background: red;
          display: grid;
          grid-template-columns: repeat(4, auto);
          grid-template-rows: 1fr;
          justify-content: space-around;

          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
        }
      </style>
      ${this.iconsInDock}
    `}get iconsInDock(){return r.filter(e=>e.isInDock).map(e=>`
        <os-app-icon id="${e.id}" name="${e.name}" icon="${e.icon}"></os-app-icon>
      `).join("")}get idInDock(){return r.filter(e=>e.isInDock).map(e=>e.id)}}customElements.define("os-dock",d);class h extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["name","icon","show-name"]}get name(){return this.getAttribute("name")}set name(t){this.setAttribute("name",t)}get icon(){return this.getAttribute("icon")}set icon(t){this.setAttribute("icon",t)}get showName(){return typeof this.getAttribute("show-name")=="string"}set showName(t){this.setAttribute("show-name",t)}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("os-app-icon",h);let u=class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),document.addEventListener("open-app",({detail:t})=>{const s=r.find(e=>e.id===t.id);this.openApp(s)}),this.shadow.querySelector("#close").addEventListener("click",()=>{this.closeApp()}),document.addEventListener("close-app",()=>{this.closeApp()}),this.observer=new MutationObserver(()=>{this.render()}),this.observer.observe(this,{childList:!0,subtree:!0})}openApp(t){this.shadow.querySelector("#app").innerHTML=`
      <${t.tag}></${t.tag}>
    `,this.classList.add("open")}closeApp(){this.classList.remove("open"),this.shadow.querySelector("#app").innerHTML=""}attributeChangedCallback(t,s,e){t==="count"&&this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
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
    `}};customElements.define("os-app-wrapper",u);class p extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.action="",this.prevVal=[],this.turn=1,this.firstTouch=!0}reset(){this.vibrate(),this.result.textContent=0,this.action="",this.prevVal=[],this.firstTouch=!0,this.turn=1}negative(){this.vibrate();let t=String(this.result.textContent);!this.action||!this.firstTouch?t.includes("-")?this.result.textContent=t.substr(1,t.length):this.result.textContent=`-${t}`:this.action&&this.firstTouch&&(t.includes("-")?this.result.textContent=t.substr(1,t.length):this.result.textContent="-0")}float(){this.vibrate();let t=String(this.result.textContent);!this.action||!this.firstTouch?t.includes(".")||(this.result.textContent=`${t}.`):this.action&&this.firstTouch&&(t.includes(".")||(this.result.textContent=`${0}.`))}percentage(){this.vibrate();let t=Number(this.result.textContent);this.result.textContent=t/100}number(t){this.vibrate();let s=this.result.textContent;s==="-0"?(this.result.textContent=`-${t}`,this.firstTouch=!1):s==="0."?(this.result.textContent+=t,this.firstTouch=!1):s!=="0"&&!this.firstTouch?this.result.textContent+=t:(this.result.textContent=t,this.firstTouch=!1),console.log(`clicked number: ${t}`)}operation(t){this.vibrate();let s=t.dataset.action;console.log(`clicked operator ${s}`),this.turn>1&&this.calculate.bind(this)();let e=Number(this.result.textContent);this.action=s,this.prevVal.length>=2?this.prevVal=[e]:this.firstTouch||this.prevVal.push(e),this.firstTouch=!0,this.turn++,console.log(`memory: ${this.prevVal}`),console.log(`turn no.: ${this.turn}`)}calculate(){this.vibrate();let t=Number(this.result.textContent);function s(){this.prevVal.length>=2?(this.prevVal.shift(),this.prevVal.unshift(t)):this.prevVal.push(t)}switch(this.action){case"add":s.bind(this)(),this.result.textContent=this.prevVal.reduce((e,o)=>e+o);break;case"substract":s.bind(this)(),this.result.textContent=this.prevVal.reduce((e,o)=>e-o);break;case"divide":s.bind(this)(),this.result.textContent=this.prevVal.reduce((e,o)=>e/o);break;case"multiply":s.bind(this)(),this.result.textContent=this.prevVal.reduce((e,o)=>e*o);break}this.firstTouch=!0,this.turn=1,console.log("========Calc========"),console.log(`memory: ${this.prevVal[0]} ${this.action} ${this.prevVal[1]}}`),console.log(`Turn no.: ${this.turn}`)}connectedCallback(){this.render(),this.result=this.shadow.querySelector(".js-result"),this.buttons=this.shadow.querySelectorAll("button"),this.addEventToButtons()}vibrate(){navigator.vibrate?(console.log("vibrating"),navigator.vibrate(100)):console.log("vibration not supported")}addEventToButtons(){this.buttons.forEach(function(t){switch(t.dataset.action){case"clear":t.addEventListener("click",this.reset.bind(this));break;case"number":t.addEventListener("click",function(s){let e=s.target||s.srcElement;this.number(e.textContent)}.bind(this));break;case"negative":t.addEventListener("click",this.negative.bind(this));break;case"percentage":t.addEventListener("click",this.percentage.bind(this));break;case"float":t.addEventListener("click",this.float.bind(this));break;case"divide":case"multiply":case"substract":case"add":t.addEventListener("click",function(s){this.operation(s.target||s.srcElement)}.bind(this));break;case"result":t.addEventListener("click",this.calculate.bind(this));break}}.bind(this))}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("os-app-calculator",p);class b extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.shadow.querySelector("#close").addEventListener("click",()=>{this.closeApp()})}closeApp(){document.dispatchEvent(new CustomEvent("close-app",{detail:{id:"message"}}))}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: block;
          background-color: green;
        }
      </style>
      <button id="close">Close the app</button>
      <span>Message</span>
      <span>Coucou c'est Maman</span>
    `}}customElements.define("os-app-message",b);class g extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr auto;
          height: 100%;
        }
      </style>
      <div class="test"></div>
      <os-dock class="dock"></os-dock>
      <os-app-wrapper></os-app-wrapper>
    `}}customElements.define("app-root",g);const m="/assets/images/background-b2a3a0be.jpg",f=document.querySelector("body");f.style.backgroundImage=`url(${m})`;
