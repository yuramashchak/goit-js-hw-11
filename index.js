import{a as c,S as l,i as d}from"./assets/vendor-D_1dfqIW.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const u="https://pixabay.com/api/",f="56295692-388ed2392ca37d8a60cb7a75d";function m(e){return c.get(u,{params:{key:f,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const a=document.querySelector(".gallery");document.querySelector(".loader");function p(e){return`<li class = "gallery-item">
    
    <a href="${e.largeImageURL}">
    <img src="${e.webformatURL}" alt="${e.tags}">
    </a>
    <div class="underpicture">
        <div class="info">
          <p class = "words">Likes</p>
          <p class = "numbers">${e.likes}</p>
        </div>

        <div class="info">
          <p class = "words">Views</p>
          <p class = "numbers">${e.views}</p>
        </div>

        <div class="info">
          <p class = "words">Comments</p>
          <p class = "numbers">${e.comments}</p>
        </div>

        <div class="info">
          <p class = "words">Downloads</p>
          <p class = "numbers">${e.downloads}</p>
        </div>
    </div>
    </li>`}function y(e){return e.map(p).join("")}const h=new l(".gallery a",{captionsData:"alt",captionDelay:250});function g(e){const s=y(e);a.innerHTML=s,h.refresh()}function v(){a.innerHTML=""}function L(){loading.classList.remove("hidden")}function b(){loading.classList.add("hidden")}const w=document.querySelector(".form"),S=document.querySelector(".search-text");document.querySelector(".search");w.addEventListener("submit",e=>{e.preventDefault();const s=S.value.trim();s!==""&&(v(),L(),m(s).then(o=>{if(o.hits.length===0){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(o.hits)}).catch(o=>{console.log(o)}).finally(()=>{b()}))});
//# sourceMappingURL=index.js.map
