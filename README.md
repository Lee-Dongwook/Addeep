# Addeep

```
yuu
├─ .cursorrules
├─ .yarnrc.yml
├─ Dockerfile
├─ README.md
├─ admin
│  ├─ .yarnrc.yml
│  ├─ Dockerfile
│  ├─ README_E2E.md
│  ├─ e2e
│  │  ├─ README.md
│  │  ├─ announcement.spec.ts
│  │  ├─ article.spec.ts
│  │  ├─ auth.spec.ts
│  │  ├─ dashboard.spec.ts
│  │  ├─ events.spec.ts
│  │  ├─ example.spec.ts
│  │  ├─ helpers
│  │  │  ├─ auth.ts
│  │  │  └─ common.ts
│  │  └─ news.spec.ts
│  ├─ lib
│  │  └─ supabase.ts
│  ├─ middleware.ts
│  ├─ next-env.d.ts
│  ├─ next.config.mjs
│  ├─ package.json
│  ├─ playwright.config.ts
│  ├─ postcss.config.js
│  ├─ src
│  │  └─ app
│  │     ├─ components
│  │     │  ├─ custom-table
│  │     │  │  └─ index.tsx
│  │     │  ├─ modal
│  │     │  │  └─ index.tsx
│  │     │  └─ providers
│  │     │     └─ query-provider.tsx
│  │     ├─ context
│  │     │  └─ ThemeProvider.tsx
│  │     ├─ dashboard
│  │     │  ├─ announcement
│  │     │  │  ├─ [id]
│  │     │  │  │  └─ page.tsx
│  │     │  │  ├─ actions.ts
│  │     │  │  ├─ create
│  │     │  │  │  └─ page.tsx
│  │     │  │  └─ edit
│  │     │  │     └─ [id]
│  │     │  │        └─ page.tsx
│  │     │  ├─ article
│  │     │  │  ├─ [id]
│  │     │  │  │  └─ page.tsx
│  │     │  │  ├─ actions.ts
│  │     │  │  ├─ create
│  │     │  │  │  └─ page.tsx
│  │     │  │  └─ edit
│  │     │  │     └─ [id]
│  │     │  │        └─ page.tsx
│  │     │  ├─ events
│  │     │  │  ├─ [id]
│  │     │  │  │  └─ page.tsx
│  │     │  │  ├─ actions.ts
│  │     │  │  ├─ create
│  │     │  │  │  └─ page.tsx
│  │     │  │  └─ edit
│  │     │  │     └─ [id]
│  │     │  │        └─ page.tsx
│  │     │  ├─ news
│  │     │  │  ├─ [id]
│  │     │  │  │  └─ page.tsx
│  │     │  │  ├─ actions.ts
│  │     │  │  ├─ create
│  │     │  │  │  └─ page.tsx
│  │     │  │  └─ edit
│  │     │  │     └─ [id]
│  │     │  │        └─ page.tsx
│  │     │  └─ page.tsx
│  │     ├─ globals.css
│  │     ├─ layout.tsx
│  │     ├─ lib
│  │     │  ├─ index.ts
│  │     │  └─ useOutsideClick.tsx
│  │     ├─ page.tsx
│  │     ├─ public
│  │     └─ store
│  │        ├─ commonConfig.ts
│  │        └─ interface
│  │           ├─ announcement.ts
│  │           ├─ article.ts
│  │           ├─ event.ts
│  │           └─ news.ts
│  ├─ store
│  │  └─ authStore.ts
│  ├─ tailwind.config.ts
│  ├─ tsconfig.json
│  └─ types
│     └─ auth.ts
├─ cloudbuild.yaml
├─ cors.json
├─ deploy.sh
├─ doc
│  ├─ doc-filelist.js
│  ├─ doc-script.js
│  └─ doc-style.css
├─ docker-compose.yml
├─ global.css
├─ global.d.ts
├─ infra
│  ├─ main.tf
│  ├─ outputs.tf
│  └─ variables.tf
├─ next-env.d.ts
├─ next.config.mjs
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ fonts
│  │  ├─ montserrat
│  │  │  ├─ Montserrat-Black.ttf
│  │  │  ├─ Montserrat-Bold.ttf
│  │  │  ├─ Montserrat-ExtraBold.ttf
│  │  │  ├─ Montserrat-Medium.ttf
│  │  │  ├─ Montserrat-Regular.ttf
│  │  │  └─ Montserrat-SemiBold.ttf
│  │  └─ poppins
│  │     ├─ Poppins-Black.ttf
│  │     ├─ Poppins-Bold.ttf
│  │     ├─ Poppins-ExtraBold.ttf
│  │     ├─ Poppins-Light.ttf
│  │     ├─ Poppins-Medium.ttf
│  │     ├─ Poppins-Regular.ttf
│  │     └─ Poppins-SemiBold.ttf
│  ├─ images
│  │  ├─ Background.png
│  │  ├─ Career_Background.png
│  │  ├─ Container.png
│  │  ├─ Gradient.png
│  │  ├─ Innovation.png
│  │  ├─ Platform.png
│  │  ├─ Summary.png
│  │  ├─ about-us-header.png
│  │  ├─ about-us-slider-1.png
│  │  ├─ addeep-is-image.png
│  │  ├─ good-face.png
│  │  ├─ jaeyoung.png
│  │  ├─ jessica.png
│  │  ├─ kyoungsu.png
│  │  ├─ person-fisheye.png
│  │  ├─ seyoung.png
│  │  ├─ smiling-man.png
│  │  ├─ social.png
│  │  ├─ three-people.png
│  │  ├─ we-are-frame-1.png
│  │  ├─ we-are-frame-2.png
│  │  └─ we-are-frame-3.png
│  └─ robots.txt
├─ src
│  ├─ app
│  │  ├─ (landing)
│  │  │  ├─ about-us
│  │  │  │  ├─ careers
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ core-value
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ team-work
│  │  │  │  │  ├─ jaeyoung
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ we-are
│  │  │  │     └─ page.tsx
│  │  │  ├─ addeep-is
│  │  │  │  ├─ digital-platform-innovation
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ platform-to-earn
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ summary
│  │  │  │     ├─ gpr
│  │  │  │     │  └─ page.tsx
│  │  │  │     └─ page.tsx
│  │  │  ├─ announcement
│  │  │  │  ├─ [uuid]
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ article
│  │  │  │  └─ page.tsx
│  │  │  ├─ blog-social-media-channel
│  │  │  │  └─ page.tsx
│  │  │  ├─ events
│  │  │  │  ├─ [uuid]
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ news
│  │  │  │  └─ page.tsx
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  └─ robots.ts
│  ├─ components
│  │  ├─ EventSpeakerSlider.tsx
│  │  ├─ Footer.tsx
│  │  ├─ SiteNav.tsx
│  │  └─ YoutubePlayer.tsx
│  ├─ constants
│  │  ├─ announcement
│  │  │  └─ index.tsx
│  │  ├─ blog
│  │  │  └─ index.tsx
│  │  ├─ careers
│  │  │  └─ index.tsx
│  │  ├─ core-values
│  │  │  └─ index.tsx
│  │  ├─ footer
│  │  │  └─ index.ts
│  │  ├─ index.ts
│  │  ├─ landing
│  │  │  └─ index.ts
│  │  ├─ nav
│  │  │  ├─ index.ts
│  │  │  └─ logo.tsx
│  │  ├─ summary
│  │  │  └─ index.tsx
│  │  └─ we-are
│  │     └─ index.ts
│  ├─ icons
│  │  └─ index.tsx
│  ├─ lib
│  │  ├─ env.ts
│  │  ├─ supabase.ts
│  │  ├─ useOutsideClick.ts
│  │  └─ useResponsive.ts
│  ├─ shared
│  │  ├─ provider
│  │  │  └─ QueryProvider.tsx
│  │  ├─ types
│  │  │  ├─ announcement.ts
│  │  │  └─ event.ts
│  │  └─ utils
│  │     ├─ formatKoreanDate.ts
│  │     └─ index.ts
│  └─ types
│     ├─ announcement
│     │  └─ index.ts
│     └─ blog
│        └─ index.ts
├─ tailwind.config.ts
├─ tsconfig.json
└─ yarn.lock

```
