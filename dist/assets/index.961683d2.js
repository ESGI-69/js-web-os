(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const r=`<div class="notification">
  <img class="notification__image" src="/assets/images/messages.png">
  <span class="notification__title">Messages</span>
  <span class="notification__content">BLIBLABLU !</span>
</div>`;const a=(n=5e3)=>{typeof n!="number"&&(n=5e3),window.document.body.insertAdjacentHTML("beforeend",r);const o=window.document.querySelector(".notification");o.classList.add("notification--show-animation"),setTimeout(()=>{o.classList.remove("notification--show-animation"),o.classList.add("notification--show"),setTimeout(()=>{o.classList.add("notification--hide-animation"),setTimeout(()=>{o.remove()},300)},n)},300)},d=window.document.querySelector("#notification-button");d.addEventListener("click",a);
