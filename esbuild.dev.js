require('esbuild').build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile:'dist/bundle.js',
    target: 'es2016', // Alinea el target con el de tsconfig.json
    format: 'cjs', // Utiliza el formato CommonJS
}).catch(() => procces.exit(1));