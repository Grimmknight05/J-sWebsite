import './style.css'
import './protections'

type SubjectKey = 'coding' | 'film' | 'photography' | 'modeling' | 'music'

type ProjectEntry = {
  title: string
  description: string
  link: string
}

type MediaEmbed = {
  title: string
  provider: string
  description: string
  url: string
}

type PhotoCollection = {
  title: string
  description: string
  basePath: string
  images: string[]
  adobeLink?: string
  inlineNotes?: { text: string; after?: number }[]
  headingStyle?: string
}

type ProjectImage = {
  src: string
  alt: string
}

type ProjectShowcase = {
  title: string
  summary: string
  github?: string
  videoPlaylist?: string
  demo?: string
  emailContact?: string
  images?: ProjectImage[]
  tags?: string[]
}

type ProjectCategory = {
  category: string
  intro: string
  projects: ProjectShowcase[]
}

type ModelCollection = {
  title: string
  description: string
  modelViewerUrl: string
  notes?: string[]
  headingStyle?: string
}

type ModelCollectionGroup = {
  title: string
  description: string
  collections: ModelCollection[]
  moreLink?: string
  moreLabel?: string
}

type SubjectContent = {
  key: SubjectKey
  title: string
  eyebrow: string
  intro: string
  highlights: string[]
  projects?: ProjectEntry[]
  projectGroups?: ProjectCategory[]
  skills?: string[]
  devLog?: string[]
  media?: MediaEmbed[]
  photoCollections?: PhotoCollection[]
  modelCollections?: ModelCollectionGroup[]
}

const subjects: Record<SubjectKey, SubjectContent> = {
  coding: {
    key: 'coding',
    title: 'Coding Projects',
    eyebrow: 'PROTOTYPES • BUILDS • DEMOS',
    intro: 'Collection of software development work',
    highlights: ['Interactive websites', 'UI experiments', 'Small tools and demos'],
    projectGroups: [
      {
        category: 'Web dev',
        intro: 'Portfolio builds, web experiments, and production-style front-end work.',
        projects: [
          {
            title: 'Full-Stack Website Development for Subscription Service',
            summary: 'Developed and built out a complete website and backend infrastructure for a subscription-based service that had been awarded funding. Implemented a React frontend with a Supabase backend for account management and a Stripe payment integration, using webhooks to ensure synchronization, security, and component decoupling. <br><br> I leveraged AI-assisted development to maintain code quality and architectural best practices, prioritizing strong decoupling and high cohesion throughout the codebase. Achieved 90% code coverage through comprehensive testing, including backend unit tests, account creation and authentication flows, payment processing tests, and frontend UI stress tests using dummy subscription data. <br><br> - Key features implemented: include user signup and login, password reset via email, user information management, payment processing, and subscription cancellation—all with real-time synchronization between Stripe and Supabase servers to ensure account integrity. ',
            emailContact: '',
            images: [
              { src: '/Photos/Website/S1.png', alt: 'Website Login Error' },
              { src: '/Photos/Website/S2.png', alt: 'Website Signin Page' },
            ],
            tags: ['Vite', 'TypeScript', 'Portfolio', 'react', 'Webhook', 'Git', 'Testing', 'Backend Development', 'stripe'],
          },
          {
            title: 'CivicZip',
            summary: 'A civic-focused tool designed to improve local civic engagement through easy access of polling information.',
            github: 'https://github.com/CS-422-Project-2/CivicZip',
            images: [
              { src: '/Photos/CivicZip/CivicZip.png', alt: 'CivicZip concept image' },
              { src: '/Photos/CivicZip/CivicZip2.png', alt: 'CivicZip concept image 2' },
            ],
            tags: ['UX', 'Data', 'Public interest', 'API', 'Parsing', 'Docker', ],
          },
          {
            title: ' - Active Reading Assistant',
            summary: 'A web based pdf viewer that walks the user through learning the SQ3R method of techincial document reading',
            github: 'https://github.com/CS-422-Project/Active-Reading-Assistant',
            images: [
            ],
            tags: ['UX', 'Data', 'Public interest', 'API', 'Parsing', 'Docker', ],
          },
        ],
      },
            {
        category: 'Game dev',
        intro: 'Experimental gameplay builds, systems, and prototypes.',
        projects: [
          {
            title: 'Space game',
            summary: 'A Unity play demo with a short development log and project notes.',
            github: 'https://github.com/Grimmknight05/CS480_Game',
            demo:'https://play.unity.com/en/games/01c9322b-8008-4bd0-8d07-5566c014b716/gravity-guy-full-game',
            videoPlaylist: 'https://www.youtube.com/playlist?list=PLexample',
            images: [
              { src: '/Photos/SpaceGame/spg3.png', alt: 'Space game concept image' },
              { src: '/Photos/SpaceGame/spg2.png', alt: 'Space game second concept image' },
            ],
            tags: ['Unity', 'Gameplay loop', 'Prototype','Team project' ],
          },
        ],
      },
    ],
    skills: ['C++','C','C#','Java','JavaScript','TypeScript', 'Vite', 'HTML/CSS', 'Unity', 'Blender', 'UX writing', 'Git','GitHub','Docker','Software Methodologies','Software Development','Ai assisted development'],
  },
  film: {
    key: 'film',
    title: 'Documentary & Film',
    eyebrow: 'DOCUMENTARY • REELS • CINEMATOGRAPHY',
    intro: '',
    highlights: [],
    media: [
      {
        title: 'Trailer / Clips',
        provider: 'Vimeo / YouTube',
        description: 'Embed a trailer or short clips from your documentary work.',
        url: '#clips',
      },
      {
        title: 'Featured Documentary',
        provider: 'YouTube',
        description: 'Highlight the main documentary piece with a short summary.',
        url: '#documentary',
      },
    ],
    projects: [
      {
        title: 'Invisible Roots of Clave',
        description: 'Invisible Roots of Clave, is a documentary following Univeristy of Oregon Music Grudauate Riley gault through his trip to ghana and the cultural connections he found with his own background on his trip',
        link: '#film-highlights',
      },
      {
        title: 'Other Projects',
        description: 'Additional video work that expands beyond the main documentary.',
        link: '#other-videos',
      },
    ],
  },
  photography: {
    key: 'photography',
    title: 'Photography',
    eyebrow: '',
    intro: '',
    highlights: ['Shadows of Tokyo', 'Seattle Mist', ''],
    projects: [
      {
        title: 'Shadows of Tokyo',
        description: 'A collection from the streets of Tokyo seen in black & white',
        link: '#tokyo-bw',
      },
      {
        title: 'Seattle Mist',
        description: '.',
        link: '#nature',
      },
      {
        title: 'Nature',
        description: 'A collection of natural scenes, textures, and landscape moments',
        link: '#portraits',
      },
    ],
    photoCollections: [
      {
        title: 'Shadows of Tokyo',
        description: 'Focus of the forms and feeling of Tokyo, Shot on my IPhone 16 pro',
        basePath: '/Photos/ShadowsInJapan/Processed',
        adobeLink: 'https://adobe.ly/4b3NTw8',
        headingStyle: 'font-family: Georgia, serif; color: #ffffff; font-size: 1.6rem; letter-spacing: 0.12em; text-transform: uppercase;',
        images: [
          'SJcanvas6.jpg',
          'SJcanvas5.jpg',
          'SJcanvas3.jpg',
          'SJcanvas2.jpg',
          'SJcanvas7.jpg',
          'SJcanvas.jpg',
          'SJcanvas1.jpg',
        ],
        inlineNotes: [
          { text: 'I was mesmorized by the sites of Tokyo', after: 3 },
        ],
      },
            {
        title: 'Seattle Mist',
        description: 'My home',
        basePath: '/Photos/Seattle/Processed',
        adobeLink: 'https://adobe.ly/4boV2Hw',
        headingStyle: 'font-family: "Times New Roman", Times, serif; color: #31bbc2; font-size: 2rem; letter-spacing: 0.2em;',
        images: [
          '6687.jpg',
          '6699.jpg',
          '9077.jpg',
          '9122.jpg',
          '9060.jpg',
          '9156.jpg',
        ],
        inlineNotes: [
          { text: 'Freshest air in the world', after: 3 },
        ],
      },
    ],
  },
  modeling: {
    key: 'modeling',
    title: '3D Modeling',
    eyebrow: 'BLENDER • SUBSTANCE PAINTER • RENDERINGS',
    intro: 'Blender work',
    highlights: [],
    modelCollections: [
      {
        title: 'Space Game',
        description: 'I 3D modeled, rigged, animated, and textured the main astronaut charactor for the space game group project featured on the coding page.',
        collections: [
          {
            title: 'Astronaut',
            description: 'Low-poly astronaut inspired by the Nasa spacesuit',
            modelViewerUrl: 'https://sketchfab.com/models/5d8f3a0b9c354d2a858706c42a2a5db3/embed?autostart=1&camera=0&transparent=1',
            notes: [],
          }
        ],

      },
      {
        title: 'Medieval',
        description: 'I have always had a fasination with _____',
        collections: [
          {
            title: 'Knight&apos;s Sheild',
            description: '',
            modelViewerUrl: 'https://sketchfab.com/models/9597723cba4d49009a8533825bc8c8bd/embed?autostart=1&camera=0&transparent=1',
            notes: [],
          },
        ],
        moreLink: '',
        moreLabel: 'View full collection',
      },
    ],
  },
  music: {
    key: 'music',
    title: 'Music',
    eyebrow: 'ORIGINAL TRACKS • GUITAR LOOPS • BANDCAMP',
    intro: 'Coming Soon',
    highlights: ['Original tracks', 'Loops and riffs'],
  },
}

const pageKey = (document.body.dataset.page as SubjectKey | undefined) ?? 'coding'
const subject = subjects[pageKey] ?? subjects.coding

const modelCollectionsSection = subject.modelCollections && subject.modelCollections.length
  ? `
      <section class="card" id="model-collections">
        <h2>3D collections</h2>
        ${subject.modelCollections
          .map(
            (group) => `
            <div class="photo-collection">
              <h3>${group.title}</h3>
              <p>${group.description}</p>
              <div class="model-gallery-grid">
                ${group.collections
                  .map(
                    (collection) => `
                    <div class="model-collection">
                      <h3 style='${collection.headingStyle ?? ""}'>${collection.title}</h3>
                      <p>${collection.description}</p>
                      <div class="model-viewer-shell">
                        ${collection.modelViewerUrl && collection.modelViewerUrl.includes('sketchfab.com')
                          ? `
                            <div class="sketchfab-embed-wrapper">
                              <iframe title="${collection.title}"
                                      loading="lazy"
                                      referrerpolicy="no-referrer"
                                      sandbox="allow-scripts allow-same-origin allow-presentation"
                                      frameborder="0"
                                      allowfullscreen
                                      mozallowfullscreen="true"
                                      webkitallowfullscreen="true"
                                      allow="autoplay; fullscreen; xr-spatial-tracking"
                                      width="100%"
                                      height="480"
                                      src="${collection.modelViewerUrl}">
                              </iframe>
                            </div>
                          `
                          : `
                            <model-viewer
                              src="${collection.modelViewerUrl}"
                              alt="${collection.title} preview"
                              ar
                              ar-modes="webxr scene-viewer quick-look"
                              camera-controls
                              auto-rotate
                              transparent
                              environment-image="neutral"
                            ></model-viewer>
                          `}
                      </div>
                      ${collection.notes && collection.notes.length
                        ? `
                          <div class="text-card note">
                            ${collection.notes.map((note) => `<p>${note}</p>`).join('')}
                          </div>
                        `
                        : ''}
                    </div>
                  `,
                  )
                  .join('')}
                ${group.moreLink
                  ? `
                    <div class="model-collection more-card">
                      <h3>More</h3>
                      <p>See the full Sketchfab collection and more models.</p>
                      <a class="button primary" href="${group.moreLink}" target="_blank" rel="noopener noreferrer">${group.moreLabel ?? 'More'}</a>
                    </div>
                  `
                  : ''}
              </div>
            </div>
          `,
          )
          .join('')}
      </section>
    `
  : ''

const projectSection = subject.projectGroups && subject.projectGroups.length
  ? `
      <section class="card" id="projects">
        <h2>Projects</h2>
        <div class="project-group-grid">
          ${subject.projectGroups
            .map(
              (group) => `
              <div class="project-group">
                <h3>${group.category}</h3>
                <p>${group.intro}</p>
                <div class="project-showcase-grid">
                  ${group.projects
                    .map(
                      (project) => `
                        <article class="project-showcase-card">
                          <h4>${project.title}</h4>
                          <p>${project.summary}</p>
                          ${project.tags && project.tags.length
                            ? `<div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>`
                            : ''}
                          <div class="project-links">
                            ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
                            ${project.videoPlaylist ? `<a href="${project.videoPlaylist}" target="_blank" rel="noopener noreferrer">Video walkthrough</a>` : ''}
                            ${project.emailContact ? `<a href="${project.emailContact}" target="_blank" rel="noopener noreferrer">Email</a>` : ''}
                            ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer">Demo</a>` : ''}
                          </div>
                          ${project.images && project.images.length
                            ? `
                              <div class="project-image-grid">
                                ${project.images
                                  .map(
                                    (image) => `
                                      <img src="${image.src}" alt="${image.alt}" loading="lazy" />
                                    `,
                                  )
                                  .join('')}
                              </div>
                            `
                            : ''}
                        </article>
                      `,
                    )
                    .join('')}
                </div>
              </div>
            `,
            )
            .join('')}
        </div>
      </section>
    `
  : subject.projects
    ? `
      <section class="card" id="projects">
        <h2>Projects</h2>
        <div class="project-grid">
          ${subject.projects
            .map(
              (project) => `
            <article class="project-card">
              <h3><a href="${project.link}">${project.title}</a></h3>
              <p>${project.description}</p>
            </article>
          `,
            )
            .join('')}
        </div>
      </section>
    `
    : ''

const skillsSection = subject.skills && subject.skills.length
  ? `
      <section class="card" id="skills">
        <h2>Skills</h2>
        <div class="skill-tags">
          ${subject.skills.map((skill) => `<span>${skill}</span>`).join('')}
        </div>
      </section>
    `
  : ''

const devLogSection = subject.devLog
  ? `
      <section class="card">
        <h2>Dev log</h2>
        <ul class="dev-log">
          ${subject.devLog.map((entry) => `<li>${entry}</li>`).join('')}
        </ul>
      </section>
    `
  : ''

const photoCollectionsSection = subject.photoCollections
  ? `
      <section class="card" id="photo-collections">
        <h2>Photography collections</h2>
        ${subject.photoCollections
          .map(
            (collection) => `
            <div class="photo-collection">
              <h3 style='${collection.headingStyle ?? ""}'>${collection.title}</h3>
              <p>${collection.description}</p>
              <div class="photo-grid">
                  ${collection.images
                    .map((image, idx) => `
                      <div class="photo-card">
                        <img src="${collection.basePath}/${image}" alt="${collection.title} photo" loading="lazy" />
                      </div>
                      ${collection.inlineNotes && collection.inlineNotes.length
                        ? collection.inlineNotes
                            .filter((n) => n.after === idx)
                            .map((n) => `
                              <div class="text-card note">
                                <p>${n.text}</p>
                              </div>
                            `)
                            .join('')
                        : ''}
                    `)
                    .join('')}
                  ${collection.adobeLink
                    ? `
                    <div class="text-card collection-end">
                      <a href="${collection.adobeLink}" target="_blank" rel="noopener noreferrer">View full Adobe collection</a>
                    </div>
                  `
                    : ''}
              </div>
            </div>
          `,
          )
          .join('')}
      </section>
    `
  : ''

const mediaSection = subject.media
  ? `
      <section class="card" id="media">
        <h2>Video + Media</h2>
        <div class="media-grid">
          ${subject.media
            .map(
              (item) => `
            <article class="media-card">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <p class="media-provider">${item.provider}</p>
            </article>
          `,
            )
            .join('')}
        </div>
      </section>
    `
  : ''

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="page">
    <header class="topbar">
      <p class="brand">DIGITAL PORTFOLIO</p>
      <nav class="nav">
        <a href="./">Home</a>
        <a href="coding.html">Coding</a>
        <a href="film.html">Film</a>
        <a href="photography.html">Photo</a>
        <a href="modeling.html">3D</a>
        <a href="music.html">Music</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">${subject.eyebrow}</p>
          <h1>${subject.title}</h1>
          <p>${subject.intro}</p>
          <div class="buttons">
            <a class="button primary" href="./">Back home</a>
          </div>
        </div>

        <aside class="panel ${subject.key}">
          <p class="panel-title">Highlights</p>
          <ul>
            ${subject.highlights.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </aside>
      </section>

      ${modelCollectionsSection}
      ${projectSection}
      ${photoCollectionsSection}
      ${mediaSection}
      ${skillsSection}
      ${devLogSection}
    </main>
    <footer class="site-footer">
      <div class="page-footer">
        <p>© ${new Date().getFullYear()} Joshua Henrikson. All rights reserved.</p>
        <p><a href="./">Home</a> · <a href="coding.html">Coding</a> · <a href="photography.html">Photography</a></p>
      </div>
    </footer>
  </div>
`
