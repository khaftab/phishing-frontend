import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import svgr from 'vite-plugin-svgr';

// run package config
dotenv.config();
export default defineConfig({
  plugins: [react(), svgr()],
  // define process env
  define: {
    'process.env': process.env
  }
});