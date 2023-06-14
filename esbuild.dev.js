require('esbuild').build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile:'dist/bundle.js'
}).catch(() => procces.exit(1));