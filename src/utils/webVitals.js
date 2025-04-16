/**
 * Web Vitals reporting utility
 * This file sets up monitoring for Core Web Vitals metrics
 */

// This is a placeholder - to fully implement, install the web-vitals package:
// npm install web-vitals --save

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getLCP, getTTFB, getFCP }) => {
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
      getFCP(onPerfEntry); // First Contentful Paint
    });
  }
};

export default reportWebVitals;
