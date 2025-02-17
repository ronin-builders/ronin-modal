import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/react.ts'],
  format: ['esm'],
  target: 'es2021',
  clean: true,
  dts: {
    entry: ['src/index.ts', 'src/react.ts']
  }
})