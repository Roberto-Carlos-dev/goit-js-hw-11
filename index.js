import{a as p,S as f,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="50815858-7c7001d1260428c5ffea0900f",y="https://pixabay.com/api/";async function g(o){return(await p.get(y,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:u,downloads:d})=>` 
        <li class="gallery-item">
          <a href="${a}">
            <img src="${i}" alt="${e}" loading="lazy" />
          </a>
          <div>
            <p>Likes: ${t}</p>
            <p>Views: ${s}</p>
            <p>Comments: ${u}</p>
            <p>Downloads: ${d}</p>
          </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function w(){c.innerHTML=""}function S(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}const q=document.querySelector(".form");q.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}w(),S();try{const i=await g(r);if(i.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i.hits)}catch{n.error({message:"Oops! Something went wrong.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
