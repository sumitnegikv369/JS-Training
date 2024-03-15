// ? 5.Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

class TaskQueue {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.runningTask = 0;
    this.queue = [];
  }

  addTask(task) {
    // Add the task to the queue
    this.queue.push(task);
    // Increment the number of running tasks
    this.runningTask++;

    // Check if the number of running tasks exceeds or equal to the concurrency limit
    if (this.runningTask >= this.concurrency) {
      this.processQueue();
    }
  }

  async processQueue() {
    const concurrentQueue = [];
    // Process tasks up to the concurrency limit
    for (let i = 0; i < this.concurrency; i++) {
      // Remove the concurrent task from the queue and schedule it for execution
      const runTask = this.queue.shift();
      concurrentQueue.push(runTask);
    }
    this.runningTask = this.runningTask - this.concurrency;
    const result = await Promise.all(concurrentQueue);
    console.log(result);
    console.log('\n');
  }
}

const taskQueue1 = new TaskQueue(2);

let randomMs = Math.floor(Math.random() * 10) * 2000;

const promise = (n) => new Promise((resolve) => {
  setTimeout(() => {
    console.log('task started');
    resolve(`Task ${n}`);
  }, n*500);
});


for (let i = 1; i <= 10; i++) {
  // calling addTask method
  taskQueue1.addTask(promise(i));
}
