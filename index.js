import{a as u,S as p,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f="50815858-7c7001d1260428c5ffea0900f",m="https://pixabay.com/api/";async function y(o){return(await u.get(m,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery");document.querySelector(".loader-backdrop");let g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const r=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:t,views:i,comments:l,downloads:d})=>` 
        <li class="gallery-item">
          <a href="${s}">
            <img src="${a}" alt="${e}" loading="lazy" />
          </a>
          <div>
            <p>Likes: ${t}</p>
            <p>Views: ${i}</p>
            <p>Comments: ${l}</p>
            <p>Downloads: ${d}</p>
          </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function L(){c.innerHTML=""}function w(){loaderBackdrop.classList.remove("is-hidden")}function b(){loaderBackdrop.classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}L(),w();try{const a=await y(r);if(a.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(a.hits)}catch{n.error({message:"Oops! Something went wrong.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
