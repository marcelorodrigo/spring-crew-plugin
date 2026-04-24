import { defineConfig } from 'tsup';
import fs from 'node:fs/promises';
import path from 'node:path';

async function copyDir(src: string, dest: string): Promise<void> {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

export default defineConfig({
  entry: ['src/opencode/index.ts'],
  format: ['esm'],
  dts: false,
  clean: true,
  outDir: 'dist',
  loader: {
    '.md': 'text',
  },
  onSuccess: async () => {
    await fs.rm('dist/skills', { recursive: true, force: true });
    await copyDir('skills', 'dist/skills');
  },
});
