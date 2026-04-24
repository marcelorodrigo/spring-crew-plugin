import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/opencode/index.ts'],
  format: ['esm'],
  dts: false,
  clean: true,
  outDir: 'dist',
  loader: {
    '.md': 'text',
  },
  onSuccess: 'cp -r skills dist/skills',
});
