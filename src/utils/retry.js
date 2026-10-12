const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const isRetryable = (error) => !error.response || error.response.status >= 500;

export const retry = async (
  task,
  { retries = 4, baseDelay = 1000, signal } = {},
) => {
  for (let attempt = 0; ; attempt++) {
    try {
      return await task();
    } catch (error) {
      const canRetry =
        attempt < retries && !signal?.aborted && isRetryable(error);

      if (!canRetry) throw error;

      await sleep(baseDelay * 2 ** attempt);
    }
  }
};
