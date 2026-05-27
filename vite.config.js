import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'



const isGithubPages = process.env.GITHUB_PAGES === 'true'



// https://vite.dev/config/

export default defineConfig({

 base: isGithubPages ? '/portafolio-Villavicencio/' : '/',

 build: {

  outDir: isGithubPages ? 'docs' : 'dist',

 },

 plugins: [react()],

})
