import React from 'react';

/**
 * AspectRatioBox component maintains a consistent aspect ratio for its children
 * This helps prevent Cumulative Layout Shift (CLS) by reserving space before content loads
 * 
 * @param {string} ratio - The aspect ratio in format "width:height" (e.g., "16:9")
 * @param {React.ReactNode} children - The content to display inside the box
 * @param {string} className - Additional CSS classes
 */
const AspectRatioBox = ({ 
  ratio = '16:9', 
  children, 
  className = '' 
}) => {
  // Parse ratio (width:height)
  const [width, height] = ratio.split(':').map(Number);
  const paddingTop = `${(height / width) * 100}%`;
  
  return (
    <div className={`relative ${className}`} style={{ width: '100%' }}>
      {/* This div maintains the aspect ratio */}
      <div style={{ paddingTop }} />
      
      {/* This div contains the actual content */}
      <div className="absolute top-0 left-0 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default AspectRatioBox;
