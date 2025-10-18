import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// FONTOS: cseréld le a repo-nevedre
export default defineConfig({
  plugins: [react()],
  base: "/reactAllatok/",
});
