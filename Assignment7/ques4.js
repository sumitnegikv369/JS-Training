// ? 4. Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

class RateLimiter {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.running = 0;
  }

  async run(fn) {
    if (this.running < this.limit) {
      this.running++;
      return this.execute(fn);
    } else {
      return new Promise((resolve, reject) => {
        this.queue.push(() => this.execute(fn).then(resolve).catch(reject));
      });
    }
  }

  async execute(fn) {
    try {
      return await fn();
    } finally {
      this.running--;
      if (this.queue.length > 0) {
        const next = this.queue.shift();
        next();
      }
    }
  }
}

const limiter = new RateLimiter(2);

async function makeRequest(url) {
  console.log(`Making request to ${url}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Request to ${url} complete`);
      resolve();
    }, 1000);
  });
}

async function runRequests() {
  const urls = ['url1', 'url2', 'url3', 'url4', 'url5'];
  await Promise.all(urls.map((url) => limiter.run(() => makeRequest(url))));
}

runRequests();
