import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: 'coconut-milk-glow/dist/*',
                    dest: 'coconut-milk-glow'
                },
                {
                    src: 'sea-minerals/dist/*',
                    dest: 'sea-minerals'
                },
                {
                    src: 'shea-butter-rich/dist/*',
                    dest: 'shea-butter-rich'
                },
                {
                    src: 'shine-awapuhi/dist/*',
                    dest: 'shine-awapuhi'
                }
            ]
        })
    ],
})
