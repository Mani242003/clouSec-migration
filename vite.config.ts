import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Import visualizer for bundle analysis - uncomment when needed
// import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Uncomment to enable bundle analysis
    // visualizer({
    //   filename: 'dist/stats.html',
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    // })
  ],
  build: {
    // Enable source maps for production debugging
    sourcemap: true,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        // Use content hashing for better caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        // Optimize chunk splitting
        manualChunks: (id) => {
          // Create a chunk for React
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          
          // Create a chunk for routing
          if (id.includes('node_modules/react-router')) {
            return 'router-vendor';
          }
          
          // Create a chunk for UI libraries
          if (id.includes('node_modules/react-icons') || 
              id.includes('node_modules/react-slick') ||
              id.includes('node_modules/slick-carousel')) {
            return 'ui-vendor';
          }
          
          // Create a chunk for animation libraries
          if (id.includes('node_modules/aos') || 
              id.includes('node_modules/react-lottie')) {
            return 'animation-vendor';
          }
        }
      }
    }
  }
})
