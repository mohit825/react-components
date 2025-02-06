import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-components",
  test: {
    globals: true,
    environment: "jsdom",  // Simulates a browser environment
    setupFiles: "./src/setupTests.js",  // Optional setup file
    include: ["src/**/*.test.{js,jsx,ts,tsx}"],
    test: {
      environment: 'jsdom',
    },
  },
});
