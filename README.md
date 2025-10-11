# Contract project for NMSpeechpathology


# Web Design
> Web framework: Astro Minimal kit
> CSS framework: Tailwindcss
> Domain registrar: Porkbun
> Web and email host: Porkbun

# Task description
A professional website designed to showcase the services of a private speech pathologist. The site provides information about the therapist's qualifications, areas of expertise, and contact details, offering clients an accessible platform to learn more and enquire appointments.

## Project preparations

1. Prospect project goals and requirements with Client
2. Review and discuss design work with [hailey hazlewood](https://www.linkedin.com/in/hailey-hazlewood-662bb721b) 
3. Identify obstacles
    - Cross platform design limitations (portrait vs landscape ratios)
4. Potential solution
    - Mobile resolutions uses collapsing column structure
    - Desktop devices will have dyanamically stacked rows
5. Develop and deploy first iteration
6. Discuss client feedback
    - Enlargening mobile pages; font sizes, line spacing
    - Adjust page seperator and navigation colors
7. Deploy improved iteration

## Challenges faced

1. Familiarizing myself with Astro, TailwindCSS, and Porkbun’s hosting environment
2. Complex service page svg image manipulation
3. Developing the solution adatapable to a range of resolutions

## Web Structure

```text
/
├── public/
│   └── fonts/
├── src/
│   └── assets/
│   │   └── vector_assets
│   └── components/
│   │   └── Header.astro
│   │   └── Navigation.astro
│   └── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│   │   └── index.astro
│   └── styles/
│   │   └── global.css
│   │   └── output.css
│   └── texts/
│   │   └── header.md
│   │   └── landing-page.md
│   │   └── service.md
└── package.json
```

## Setup Commands

Executed from the root terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev:css `        | Start tailwind input is at `global.css`          | 
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help`    | Get help using the Astro CLI                     |

## Importing personalised fonts and compiling / rendering them cleanly.

## Some Resources utlised.
    - https://github.com/tailwindlabs/tailwindcss/discussions/16641
    - https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src#font_formats
    - https://docs.astro.build/en/guides/markdown-content/
    - https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image
    - https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
    - https://tailwindcss.com/docs/responsive-design
    - https://tailwindcss.com/docs/margin
    - https://docs.astro.build/en/guides/client-side-scripts/#script-processing
    - https://stackoverflow.com/questions/11201248/background-image-tiles-have-gap-between-them-when-using-svg-image-how-to-solve
    