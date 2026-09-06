(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){Array.from(document.querySelectorAll(`img`)).forEach(e=>{try{e.draggable=!1,e.setAttribute(`draggable`,`false`),e.style.userSelect=`none`;try{e.style.setProperty(`-webkit-user-select`,`none`)}catch{}try{e.style.setProperty(`-ms-user-select`,`none`)}catch{}e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`dragstart`,e=>e.preventDefault())}catch{}});let e=document.createElement(`style`);e.setAttribute(`data-generated-by`,`protections`),e.appendChild(document.createTextNode(`
    img { -webkit-user-drag: none; -webkit-touch-callout: none; }
    img { pointer-events: auto; }
  `)),document.head?.appendChild(e),document.addEventListener(`copy`,e=>{let t=document.getSelection();if(t)for(let n=0;n<t.rangeCount;n++){let r=t.getRangeAt(n);Array.from(r.cloneContents().querySelectorAll?.(`img`)??[]).length>0&&e.preventDefault()}})}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,e):e(),document.querySelector(`#app`).innerHTML=`
  <div class="page">
    <header class="topbar">
      <p class="brand">DIGITAL PORTFOLIO</p>
      <nav class="nav">
        <a href="/coding.html">Coding</a>
        <a href="/film.html">Film</a>
        <a href="/photography.html">Photography</a>
        <a href="/modeling.html">3D</a>
        <a href="/music.html">Music</a>
      </nav>
    </header>
    <main>
      <section class="hero">
        <div class="hero-copy">
          <h1>Joshua Henrikson</h1>
          <p class="eyebrow">University of Oregon Computer Science</p>

        </div>

        <div class="hero-visual">
          <img class="hero-float" src="/Resources/Gifs/P1.gif" alt="PalmTree" />
        </div>


      </section>

      <section id="about" class="card about-card">
        <div class="about-content">
          <div class="about-main">
            <div class="about-side">
              <div class="about-image-wrap">
                <img src="/20260730_025211596_iOS.jpeg" alt="Josh standing in a Japanese street scene" />
              </div>
              <div class="buttons about-buttons">
                <a class="button primary" href="/coding.html">See my coding work</a>
                
                <a class="button link" href="https://linkedin.com/in/joshuahenrikson" target="_blank" rel="noopener">LinkedIn</a>
              </div>
            </div>
            <div class="about-copy">
              <h2>About me</h2>
              <p>Hey, welcome to my portfolio! My name is Joshua but everyone calls my Josh. I’m a Senior at the University of Oregon studying computer science. I’ve always been passionate about creating things, when I was little that looked like building Legos. I found early on that software development lets me channel that love into experiences that other people can use and feel.</p>
              <p>I’m a social person who enjoys working with others, especially as part of a team where I can collaborate with other great problem solvers and share creative process.</p>
              <p class="panel-title">Primary focuses</p>
              <ul>
                <li>Software Development</li>
                <li>Creative tooling</li>
                <li>UI/UX and front-end work</li>
              </ul>
            </div>
          </div>

      </section>

      <section id="work" class="card">
        <h2>Portfolio pages</h2>
        <div class="project-list">
          <a class="project coding" href="/coding.html">
            <div class="project-copy">
              <h3>Coding Projects</h3>
              <p>Showcase of coding projects</p>
            </div>
            <div class="project-visual">
              <img class="project-gif" src="/Resources/Gifs/C.gif" alt="Coding preview" />
            </div>
          </a>
          <a class="project film" href="/film.html">
            <div class="project-copy">
              <h3>Documentary & Film</h3>
              <p>Documentary film work and edits</p>
            </div>
            <div class="project-visual">
              <img class="project-gif" src="/Resources/Gifs/B3.gif" alt="Video preview" />
            </div>
          </a>
          <a class="project photo" href="/photography.html">
            <div class="project-copy">
              <h3>Photography</h3>
              <p>Collections of some of my photography work</p>
            </div>
            <div class="project-visual">
              <img class="project-gif" src="/Resources/Gifs/CS.gif" alt="Photography preview" />
            </div>
          </a>
          <a class="project modeling" href="/modeling.html">
            <div class="project-copy">
              <h3>3D Modeling</h3>
              <p>Blender scenes and 3D work</p>
            </div>
            <div class="project-visual">
              <img class="project-gif" src="/Resources/Gifs/3Dex.gif" alt="3D preview" />
            </div>
          </a>
          <a class="project music" href="/music.html">
            <div class="project-copy">
              <h3>Music</h3>
              <p>Original music and sound projects</p>
            </div>
            <div class="project-visual">
              <img class="project-gif" src="/Resources/Gifs/G.gif" alt="Music preview" />
            </div>
          </a>
        </div>
      </section>

      <section id="contact" class="card">
        <h2>Contact</h2>
        <p>Want to collaborate or share a project? Reach out at <a href="mailto:joshua.henrikson@outlook.com">joshua.henrikson@outlook.com</a>.</p>
      </section>
    </main>
      <footer class="site-footer">
        <div class="page-footer">
          <p>© ${new Date().getFullYear()} Joshua Henrikson. All rights reserved.</p>
          <p><a href="/">Home</a> · <a href="/coding.html">Coding</a> · <a href="/photography.html">Photography</a></p>
        </div>
      </footer>
  </div>
`;