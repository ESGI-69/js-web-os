(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJtSURBVHgB7dy/axNhHMfxTyVdquKgDg1YcNFCp3LnnsUtxMX6H9TF2blkFtzTLm5Cu0iiU/4Df+Di0BQUccgNCmKjdehQvQ46tHe9IznySZ/3CwKBJ2TIm3vy3JeQufsv4iPNuJ17b/49j+NYs+yCYIUgZghihiBmCGKGIGYIYqamCqxcjbS2vJ65/utwpCevHwsnVRLk+sKiVq5FmetfDxLhdGxZZghihiBmCGKGIGYIYoYgZghihiBmCGKm0OgknU01lpoqKh2d5FmYv6RHqxsqKp19PfvwVCEoFCT9gMsEOcvF+cul3i+dfYUShC3LDEHMEMQMQcwQxAxBzBQ69n7e39P27qaKunnllu4sNjLX0/uKVx+fq6j09aEoFuTH3vGjqMaNZm6Qg8Of2hlsCSexZZkhiBmCmCGIGYKYIYgZgpip5Le97qIo0rQkSaLhcJi5HmSQTqejaWm327lB2LLMVHKFnDX7Cmk2VVY1QUrOvvAfW5YZgpghiJkgj715x86qjUb5B5ogg7RaLbliyzJTW7u9LviYO/pL5wh/YIaJqm32dzXrHt5d1nlR2+oPNOvKBqnX65qW9Nibd/QN8tjb7XY1Len4vdfrZa7zHWKGIGYIYoYgZghihiBmCGImyPsQ53kXV4gZgpghiBmCmCGIGYKYIYgZgpghiJmx7tQ3HqyqGS9pkl6+/aL29nuFiivEDEHMEMQMQcwQxAxBzIx17E2+/9a7T980SYNkXyEbK8jx74L7wgSxZZkhiBmCmCGIGYKYIYgZgpghiBmCmCGIGYKYIYgZgpghiBmCmCGIGYKYIYgZgpghiJk/WTJ+U8D58q8AAAAASUVORK5CYII=",d="/assets/images/messages-33f358e7.png",r=[{name:"Calculator",icon:c,id:"calculator",tag:"os-app-calculator",isInDock:!0},{name:"Messages",icon:d,id:"messages",tag:"os-app-message",isInDock:!0}];class p extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();for(let e=0;e<this.idInDock.length;e++){const n=this.idInDock[e];this.shadow.getElementById(n).addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("open-app",{detail:{id:n}}))})}}disconnectedCallback(){console.log("disconnectedCallback")}render(){this.shadow.innerHTML=`
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
    `}get iconsInDock(){return r.filter(t=>t.isInDock).map(t=>`
        <os-app-icon id="${t.id}" name="${t.name}" icon="${t.icon}"></os-app-icon>
      `).join("")}get idInDock(){return r.filter(t=>t.isInDock).map(t=>t.id)}}customElements.define("os-dock",p);class l extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["name","icon","show-name"]}get name(){return this.getAttribute("name")}set name(e){this.setAttribute("name",e)}get icon(){return this.getAttribute("icon")}set icon(e){this.setAttribute("icon",e)}get showName(){return typeof this.getAttribute("show-name")=="string"}set showName(e){this.setAttribute("show-name",e)}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("os-app-icon",l);let h=class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),document.addEventListener("open-app",({detail:e})=>{const n=r.find(t=>t.id===e.id);this.openApp(n)}),document.addEventListener("close-app",()=>{this.closeApp()}),this.observer=new MutationObserver(()=>{this.render()}),this.observer.observe(this,{childList:!0,subtree:!0})}openApp(e){this.shadow.querySelector("#app").innerHTML=`
      <${e.tag}></${e.tag}>
    `,this.classList.add("open")}closeApp(){this.classList.remove("open"),this.shadow.querySelector("#app").innerHTML=""}attributeChangedCallback(e,n,t){e==="count"&&this.render()}render(){this.shadow.innerHTML=`
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
          min-height: 100%;
        }
      </style>
      <div id="app">
      </div>
    `}};customElements.define("os-app-wrapper",h);class u extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.shadow.querySelector("#close").addEventListener("click",()=>{this.closeApp()})}closeApp(){document.dispatchEvent(new CustomEvent("close-app",{detail:{id:"calculator"}}))}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: block;
          background-color: red;
        }
      </style>
      <button id="close">Close the app</button>
      <span>Calculator</span>
      <span>1+1=2</span>
    `}}customElements.define("os-app-calculator",u);class m extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.shadow.querySelector("#close").addEventListener("click",()=>{this.closeApp()})}closeApp(){document.dispatchEvent(new CustomEvent("close-app",{detail:{id:"message"}}))}render(){this.shadow.innerHTML=`
      <style>
        :host {
          display: block;
          background-color: green;
        }
      </style>
      <button id="close">Close the app</button>
      <span>Message</span>
      <span>Coucou c'est Maman</span>
    `}}customElements.define("os-app-message",m);class g extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("app-root",g);const A="/assets/images/background-b2a3a0be.jpg",f=document.querySelector("body");f.style.backgroundImage=`url(${A})`;
