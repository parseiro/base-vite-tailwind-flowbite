(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function n(i){let r=0;const o=s=>{r=s,i.innerHTML=`count is ${r}`};i.addEventListener("click",()=>o(r+1)),o(0)}const l="/base-vite-tailwind-flowbite/assets/instagram-40d1e7c2.svg",c="/base-vite-tailwind-flowbite/assets/facebook-08ed7ac4.svg",u="/base-vite-tailwind-flowbite/assets/youtube-b51dfd89.svg",f="/base-vite-tailwind-flowbite/assets/logo-92baf201.png";document.querySelector("#app").innerHTML=`
  <header class="flex flex-col justify-center items-center w-full h-auto border">
        <!-- Primeiro header -->
        <section 
        id="header-first-content"
         class="flex h-[3.875rem] w-full items-center justify-between bg-rose-default bg-opacity-50 px-[5rem] py-0 shadow-lg"
         >
            <div class="social-icons flex items-center justify-around w-[10rem] h-full">
                <a href="#" aria-label="Instagram" class="flex items-center justify-center"><img src="${l}" alt="instagram-icon"></a>
                <a href="#" aria-label="Facebook" class="flex items-center justify-center"><img src="${c}" alt="facebook-icon"></a>
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
                <button 
                id="btn-donation" 
                class="ml-[3rem] h-[3.125rem] w-[9.375rem] rounded-lg border border-solid border-rose-default bg-rose-strong text-2xl font-bold text-white hover:cursor-pointer hover:bg-white hover:text-rose-default hover:transition-all" 
                type="button"
                >DOAR</button>
            </nav>
        </section>
    </header>
    <main>
    <section class="h-[325px] "></section>
</main>
    
`;n(document.querySelector("#counter"));
