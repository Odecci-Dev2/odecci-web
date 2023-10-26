October 06, 2023 (Friday)
First Commit:
• Astro and GulpSass: Nav and Header
- Made Custom Styles for Odecci 
/
├── public/
├── layouts/
│   │   ├── chevron-circle-right-alt.svg
│   │   ├── facebook-fill.svg
│   │   ├── instagram-alt.svg
│   │   ├── linkedin.svg
│   │   └── twitter.svg
│   ├── pages/
│   |    └── BG-2.webp
│   ├── favicon.svg
│   ├── logo-01-2.svg
│   ├── logo-04-1-2.svg
├── assets/
│   └── constant.js
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   ├── MainNavbarExpanded.astro
│   │   ├── NavbarExpanded.astro
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── res/
│   ├── css/
│   │   └── app.astro
│   └── scss/
│       ├── abstracts/
│       │    ├── _functions.scss
│       │    ├── _mixins.scss
│       │    ├── _typography.scss
│       │    └── _variables.scss
│       ├── base/
│       │    ├── _base.scss
│       │    ├── _colors.scss
│       │    └── _fonts.scss
│       ├── breakpoints/
│       │    ├── _breakpoints.scss
│       │    ├── _grid.scss
│       │    └── _fonts.scss
│       ├── components/
│       │    ├── _badges.scss
│       │    ├── _buttons.scss
│       │    ├── _cards.scss
│       │    └── _navbar.scss
│       ├── layouts/
│       │    └── _index.scss
│       ├──utilities/
│       │    └── _utilities.scss
│       └── app.scss
├── gulpfile.json
└── package.json


October 13, 2023 (Friday)
First Commit:
• Odecci Web: Hero Section Initial

Second Commit:
• Odecci Web: Cards Section Initial✅
• Odecci Web: Consultation Section Initial✅


October 18, 2023 (Wednesday)
First Commit:
• Odecci Web: 10k Websites Section Initial✅


October 19, 2023 (Thursday)
First Commit:
• Odecci Web: Banner Initial✅

Second Commit:
• Odecci Web: Recent Projects Section Initial✅

Third Commit:
• Odecci Web: Feature Section Initial✅

Fourth Commit:
• Odecci Web: Feature Section Minor Change✅

Fifth Commit:
• Odecci Web: Feature Section LineHeight✅
- header lineheight


October 20, 2023 (Friday)
First Commit:
• Odecci Web: Partners Section Initial✅


October 23, 2023 (Monday)
First Commit:
• Odecci Web: Made elements to components✅
- _base.scss
- index.astro
- Hero.astro
- Feature.astro
- FeatureSection.astro
- ConsultationSection.astro

- app.js
    - remove empty span

- constant.js
    - added public asset

Added section:
    - OdecciRoadMap.astro
    - Footer.astro

Added brand class:
    - _utilities.scss

Second Commit:
• Odecci Web: Footer Section Layout
- constant.js
- Footer.astro
- NavbarExpanded.js
- index.astro


October 24, 2023 (Tuesday)
First Commit:
• Odecci Web: Footer Section Initial✅
- Footer.astro
- MainNavbarExpanded.astro
- NavbarExpanded.astro
- PartnerSection.astro

- constant.js
- app.js

- _variables.scss
- _base.scss
- _mixins.scss
- _utilities.scss
- _buttons.scss
- _navbar.scss

Added scss file:
- _footer.scss

Second Commit:
• Odecci Web: Road Map Section Layout
- constant.js

- OdecciRoadMap.astro
- index.astro

- _roadmap.scss
- _footer.scss
- app.scss

- added assets for the roadmap


October 25, 2023 (Wednesday)
First Commit:
• Odecci Web: Road Map Section🟦
- added hybrid scrolling (app.js & _roadmap,scss)
- added scroll snapping (_base.scss)

constants.js
- modified variable name for conflicting variables
***OdecciRoadmap

Added jsx.main in index.astro for offset reference
Added [data-odc-main-page] attribute to jsx.body 

Deleted _index.scss boilerplate styles


October 26, 2023 (Thursday)
First Commit:
• Odecci Web: Road Map fixed horiz-scroll bug
- fixed horizontal scrolling (app.js)
- _roadmap.scss
- OdecciRoadMap.astro

• Odecci Web Prototype: Road Map Initial✅
- Figma Prototype of the roadmap

Second Commit:
• Odecci Web: Road Map Initial✅
- Added button toggle 
    - app.js
- Implemented card layout for every element 
    - OdecciRoadMap.astro
- Fixed cards layout 
    - _roadmap.scss
