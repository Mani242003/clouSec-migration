# ClouSec Website

This repository contains the ClouSec website codebase, optimized for performance and SEO.

## Performance Optimizations

The following optimizations have been implemented to improve Lighthouse scores:

### 1. Image Optimization
- WebP conversion for modern browsers
- Lazy loading for off-screen images
- Proper image dimensions to prevent layout shifts
- Optimized image component with placeholders

### 2. Code Splitting
- Route-based code splitting with React.lazy()
- Component-level code splitting for heavy components
- Optimized chunk configuration in Vite

### 3. CSS Optimization
- Tailwind CSS with purging of unused styles
- Critical CSS extraction (requires setup)

### 4. Caching Strategy
- Proper cache headers in Vercel configuration
- Content hashing for long-term caching

### 5. Core Web Vitals Improvements
- Optimized LCP (Largest Contentful Paint)
- Improved FID (First Input Delay) with task scheduling
- Minimized CLS (Cumulative Layout Shift) with aspect ratio boxes

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Analyze bundle size
npm run analyze
```

## Performance Monitoring

Web Vitals monitoring is integrated. To view performance metrics, check the browser console during development.

## Lighthouse CI

Lighthouse CI is configured for automated performance testing. To run:

```bash
npm install -g @lhci/cli
lhci autorun
```

## Implementation Notes

### Using the OptimizedImage Component

Replace standard img tags with the OptimizedImage component:

```jsx
// Before
<img src="/assets/dashboard.png" alt="Dashboard" />

// After
<OptimizedImage 
  src="/assets/dashboard.png" 
  alt="Dashboard" 
  width={800} 
  height={600} 
  priority={true} // For above-the-fold images
/>
```

### Using the AspectRatioBox Component

Wrap images in AspectRatioBox to prevent layout shifts:

```jsx
<AspectRatioBox ratio="16:9">
  <OptimizedImage 
    src="/assets/video-thumbnail.jpg" 
    alt="Video" 
    width={800}
    height={450}
  />
</AspectRatioBox>
```

### Batch Processing with Task Scheduler

Use the task scheduler for heavy operations:

```jsx
import { processBatch } from "../utils/taskScheduler";

// In your component
const [processedData, setProcessedData] = useState([]);

useEffect(() => {
  const processData = async () => {
    const processed = await processBatch(data, item => {
      // Complex processing here
      return { ...item, processed: true };
    });
    
    setProcessedData(processed);
  };
  
  processData();
}, [data]);
```
