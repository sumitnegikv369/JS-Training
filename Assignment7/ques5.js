// ? 5.Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

class TaskQueue {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.runningTask = 0;
    this.queue = [];
  }

  runTask(task) {
    if (this.runningTask < this.concurrency) {
      this.runningTask++;
      this.queue.push(
        new Promise((resolve, reject) => {
          const createdTask = async () => {
            try {
              const result = await task();
              resolve(result);
            } catch (error) {
              reject(error);
            }
          };
          createdTask();
        })
      );
    } else {
      this.runningTask--;
      this.processQueue();
    }
  }
  processQueue() {
    if (this.queue.length > 0) {
      this.queue.shift();
    }
  }
}

const tq = new TaskQueue(2);

const delayed = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task completed");
    }, 1000);
  });

for (let i = 0; i < 10; i++) {
  let taskNumber = i;
  tq.runTask(async () => {
    console.log(`starting task number ${taskNumber}`);
    const response = await delayed();
    console.log(response);
    console.log(`ending task number ${taskNumber}`);
  });
}
