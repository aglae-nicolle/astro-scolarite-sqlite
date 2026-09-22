import { defineConfig } from "astro/config";
import node from "@astrojs/node";                 //permet d'exécuter l'adaptateur astro

export default defineConfig({
  output: "server",                               //indique que Astro doit générer une application SSR
  adapter: node({ mode: "standalone" }),
});