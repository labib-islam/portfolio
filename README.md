# portfolio
Portfolio / Resume

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

