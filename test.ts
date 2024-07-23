import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: 'src/main.ts', // The entry point of your app
            name: 'AskForm', // The name of the global variable to use in the UMD build
            fileName: (format) => `ask-form.${format}.js`, // The name of the output file
            formats: ['umd'], // Specify the format as UMD
        },
        rollupOptions: {
            external: ['process'],
            output: {
                globals: {
                    process: 'process'
                },
            },
        },
        cssCodeSplit: true,
    },
    define: {
        'process.env': {}, // This will replace the `process` global with an empty object
    },
})
