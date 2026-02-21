import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// @ts-ignore
import prerender from "vite-plugin-prerender";

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, "dist"),
      routes: [
        "/",
        "/evaluacion-tdah-ninos",
        "/evaluacion-tdah-adultos",
        "/evaluacion-autismo-cancun",
        "/blog/cuanto-cuesta-valoracion-tdah-cancun",
        "/blog/tdah-en-ninas-sintomas",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
