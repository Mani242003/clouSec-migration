/**
 * Task Scheduler Utility
 * Helps break up long-running tasks to improve First Input Delay (FID)
 */

/**
 * Schedules a task to run during browser idle time or with setTimeout as fallback
 * @param {Function} task - The function to execute
 * @param {any} data - Data to pass to the task function
 * @returns {Promise} - Resolves with the result of the task
 */
export const scheduleTask = (task, data) => {
  return new Promise(resolve => {
    // Use requestIdleCallback if available, otherwise setTimeout
    const scheduler = window.requestIdleCallback || window.setTimeout;
    
    scheduler(() => {
      const result = task(data);
      resolve(result);
    });
  });
};

/**
 * Process an array of items in batches to avoid blocking the main thread
 * @param {Array} items - Array of items to process
 * @param {Function} processFn - Function to process each item
 * @param {number} batchSize - Number of items to process in each batch
 * @returns {Promise<Array>} - Resolves with array of processed results
 */
export const processBatch = async (items, processFn, batchSize = 5) => {
  const results = [];
  
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    
    // Process batch and yield to main thread
    const batchResults = await scheduleTask(() => {
      return batch.map(processFn);
    });
    
    results.push(...batchResults);
    
    // Yield to main thread after each batch
    if (i + batchSize < items.length) {
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  }
  
  return results;
};
