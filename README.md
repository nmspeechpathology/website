# Astro Starter Kit: Minimal

# website
This repository contains the source code for a professional website designed to showcase the services of a private speech pathologist. The site provides information about the therapist's qualifications, areas of expertise, and contact details, offering clients an accessible platform to learn more and schedule appointments.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Managing images in Astro

1. src/ Directory:
    - Place images that Astro will optimise and process (e.g., resizing, formating) within the src/ directory
    - This is the recommended approach for most images, especially those use in your components and pages
    - You can organise images within folders like src/assets/.
    - Importing images: when using the <Image /> component, import images individually into your .astro files
    | `import Image from 'astro:assets';`
    | `import myImage from './images/my-image.png';`
    | `<Image src={myImage} alt="My Image" />`
    - Dynamic image imports: Use import.meta.glob to dynamically import images, especially when you have a collection of images and need to access them based on path.
    | `const images = import.meta.glob('./images/*.{jpeg,jpg,png,gif}');`
    | `// Example usage: `
    | `<Image src={images['./images/image1.png']()} alt="Image 1" />`

2. public/ Directory:
    - Place images that you don't want Astro to process, such as favicons or images that need a direct public URL, in the public/ directory. 
    - These images are copied directly to the build output and are accessible via their path relative to the root of your site. 
    - For example, if you have a public/images/logo.svg, it will be accessible at /images/logo.svg.

2. HTML <img> Tag:
    - You can use the standard HTML <img> tag, but Astro will not optimize these images. 
    - If you use <img> with images in src/, you need to import them and pass the import result as the src value. 
    - If you use <img> with images in public/, you can reference them directly by their path. 
    | `---`
    | `// src/pages/index.astro`
    | `import { Image } from 'astro:assets';`
    | `import myImage from '../images/my-image.png'; // Import from src/`
    | `import logo from '../../public/logo.svg'; // Import from public/`
    | `---`
    | `<Image src={myImage} alt="Image from src/" width={400} height={300} />`
    | `<img src={logo.src} alt="Logo from public/" width={100} height={50} />`

## Importing personalised fonts and compiling / rendering them cleanly.

## Learning Resources used.
    - https://github.com/tailwindlabs/tailwindcss/discussions/16641
    - https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src#font_formats
    - https://docs.astro.build/en/guides/markdown-content/
    - https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image
    - https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
    - https://tailwindcss.com/docs/responsive-design
    - https://tailwindcss.com/docs/margin
    - https://docs.astro.build/en/guides/client-side-scripts/#script-processing
    
