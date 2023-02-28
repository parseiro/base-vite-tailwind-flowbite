(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function n(a){let s=0;const i=o=>{s=o,a.innerHTML=`count is ${s}`};a.addEventListener("click",()=>i(s+1)),i(0)}const c="/base-vite-tailwind-flowbite/assets/instagram-40d1e7c2.svg",l="/base-vite-tailwind-flowbite/assets/facebook-08ed7ac4.svg",u="/base-vite-tailwind-flowbite/assets/youtube-b51dfd89.svg",f="/base-vite-tailwind-flowbite/assets/logo-92baf201.png";document.querySelector("#app").innerHTML=`
  <header class="flex flex-col justify-center items-center w-full h-auto border">
        <!-- Primeiro header -->
        <section class="header-first-content">
            <div class="social-icons flex items-center justify-around w-[10rem] h-full">
                <a href="#" aria-label="Instagram" class="flex items-center justify-center"><img src="${c}" alt="instagram-icon"></a>
                <a href="#" aria-label="Facebook" class="flex items-center justify-center"><img src="${l}" alt="facebook-icon"></a>
                <a href="#" aria-label="Youtube" class="flex items-center justify-center"><img src="${u}" alt="youtube-icon"></a>
            </div>

            <nav class="main-navigation">
                <ul>
                    <li><a href="#">Resultados e Transparência</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Notícias</a></li>
                    <li><a href="#">Como ajudar</a></li>
                    <li><a href="#">Contatos</a></li>
                </ul>
            </nav>
        </section>

        <!-- Segundo header -->
        <section class="header-second-content">
            <figure id="logo-container" class="flex items-center justify-around w-[10rem] h-[5rem]">
                <a href="/">
                    <img class="w-full object-cover" src="${f}" alt="geeon-logo">
                </a>
            </figure>

            <nav class="main-navigation">
                <ul>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Torne-se um voluntário</a></li>
                    <li><a href="#">Eventos</a></li>
                </ul>
                <button class="btn-donation" type="button">DOAR</button>
            </nav>
        </section>
    </header>
    <main>
    <section class="h-[325px]"></section>
</main>
    
`;n(document.querySelector("#counter"));
