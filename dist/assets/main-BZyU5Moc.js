(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&m(s)}).observe(document,{childList:!0,subtree:!0});function d(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function m(t){if(t.ep)return;t.ep=!0;const e=d(t);fetch(t.href,e)}})();const u=3;var c=0,o=[{name:"Avenue de l'indépendance",img:"https://madaexplore-360.onrender.com/avenue-de-lindependance.png",link:""},{name:"Rova de Manjakamiadana",img:"https://madaexplore-360.onrender.com/rova-manjakamiadana.png",link:"https://www.youtube.com/embed/WVOl1393IHo?si=_sT4QmS1YjgT-Ph51"},{name:"Zoo de Tsimbazaza",img:"https://madaexplore-360.onrender.com/zoo-tsimbazaza.png",link:""},{name:"Hôtel Radison Blu",img:"https://madaexplore-360.onrender.com/radison-blu.png",link:""}];let r=null,a=null;window.onload=()=>{async function f(){try{let t=await fetch("https://immersion-touristique-production.up.railway.app/api/v1/vr",{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);o=await t.json(),console.log("Data received: ",o)}catch(t){console.error("Error fetching data: ",t)}}function l(){const t=document.getElementById("tourrist");t.innerHTML="",f();for(let e=0;e<u;e++){const s=(c+e)%o.length;t.innerHTML+=`<li class="img">
                    <div class="link-img">
                        <img src="${o[s].img}" alt="${o[s].name}" class="img-link">
                        <p class="txt">${o[s].name}</p>
                    </div>
                </li>`}if(d(),a!==null){const e=(a-c+o.length)%o.length,s=Array.from(document.getElementsByClassName("link-img"));if(s[e]){r=s[e];let n=r.querySelector(".img-link"),i=r.querySelector(".txt");n&&n.classList.add("check-img"),i&&i.classList.add("check-txt")}}}function d(){Array.from(document.getElementsByClassName("link-img")).forEach((e,s)=>{e.addEventListener("mouseover",function(){if(e!==r){let n=e.querySelector(".img-link"),i=e.querySelector(".txt");n&&n.classList.add("check-img"),i&&i.classList.add("check-txt")}}),e.addEventListener("mouseout",function(){if(e!==r){let n=e.querySelector(".img-link"),i=e.querySelector(".txt");n&&n.classList.remove("check-img"),i&&i.classList.remove("check-txt")}}),e.addEventListener("click",function(){if(e===r){let n=e.querySelector(".img-link"),i=e.querySelector(".txt");n&&n.classList.remove("check-img"),i&&i.classList.remove("check-txt"),r=null,a=null}else{if(r){let p=r.querySelector(".img-link"),g=r.querySelector(".txt");p&&p.classList.remove("check-img"),g&&g.classList.remove("check-txt")}let n=e.querySelector(".img-link"),i=e.querySelector(".txt");n&&n.classList.add("check-img"),i&&i.classList.add("check-txt"),r=e,a=c+s}})})}document.getElementById("next-left").addEventListener("click",function(){c=(c-u+o.length)%o.length,l()}),document.getElementById("next-right").addEventListener("click",function(){c=(c+u)%o.length,l()}),document.getElementById("btn-start").addEventListener("click",function(){if(r){let t=Array.from(document.getElementsByClassName("link-img")).indexOf(r),e=o[(c+t)%o.length];localStorage.setItem("selectedTouristSite",JSON.stringify(e)),window.location.href="https://madaexplore-360.onrender.com/360.html"}else{let t=document.getElementById("custom-popup");t.style.display="flex"}}),document.getElementById("close").addEventListener("click",function(){let t=document.getElementById("custom-popup");t.style.display="none"}),window.addEventListener("click",function(t){let e=document.getElementById("custom-popup");t.target===e&&(e.style.display="none")}),l()};
