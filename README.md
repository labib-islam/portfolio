# portfolio
Portfolio / Resume

## Deploy in Github Pages
Install gh-pages

    npm install gh-pages --save-dev
Add homepage to **package.json**

    "homepage": "https://labib-islam.github.io/repo_name/"
Add deploy scripts under `scripts`

    "scripts": {
          "predeploy": "npm run build",
          "deploy": "gh-pages -d dist"
        }
Run the following command to deploy
    
    npm run deploy
This will:
-   Build the project
-   Push the `build/` folder to the `gh-pages` branch
-   Deploy it to GitHub Pages
## SVG Import
Install Package: **vite-plugin-svgr**

    npm i vite-plugin-svgr
Update ***vite.config.js***

    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";
    import svgr from "vite-plugin-svgr";
    
    // https://vite.dev/config/
    export default defineConfig({
      plugins: [svgr(), react()],
    });
How to import?

    import GithubLogo from "../../assets/socials/github-logo.svg?react";
    
    <div>
        <GithubLogo />
    </div>
