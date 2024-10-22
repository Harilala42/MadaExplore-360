import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, './src');
const outDir = resolve(__dirname, './dist');

export default defineConfig({
    root,
    base: '/',
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                options: resolve(root, '360.html')
            }
        }
    }
});
