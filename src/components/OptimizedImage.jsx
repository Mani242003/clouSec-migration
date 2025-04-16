import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  loading = 'lazy',
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  // Generate WebP path if original is jpg/png
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // For priority images, we want to preload them
  useEffect(() => {
    if (priority && typeof window !== 'undefined') {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = src;
      preloadLink.type = 'image/jpeg'; // Adjust based on your image type
      document.head.appendChild(preloadLink);
      
      return () => {
        document.head.removeChild(preloadLink);
      };
    }
  }, [src, priority]);
  
  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (typeof window !== 'undefined' && !priority) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '200px' } // Start loading when image is 200px from viewport
      );
      
      const currentElement = document.getElementById(`image-${src.replace(/[^\w]/g, '-')}`);
      if (currentElement) {
        observer.observe(currentElement);
      }
      
      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    } else {
      // If priority is true, set isInView to true immediately
      setIsInView(true);
    }
  }, [src, priority]);
  
  return (
    <div 
      id={`image-${src.replace(/[^\w]/g, '-')}`}
      className={`image-container ${className}`} 
      style={{ 
        width: width || '100%', 
        height: height || 'auto',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Show a placeholder or loading state until image is loaded */}
      {!isLoaded && (
        <div 
          className="placeholder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
          }}
        />
      )}
      
      {/* Only render the actual image when it's in view or is a priority image */}
      {isInView && (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <source srcSet={src} type={`image/${src.endsWith('png') ? 'png' : 'jpeg'}`} />
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : loading}
            onLoad={() => setIsLoaded(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
