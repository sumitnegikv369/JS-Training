// ? 5.Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

class TaskQueue {
    constructor(concurrency) {
        this.concurrency = concurrency;
        this.runningTask = 0;
        this.queue = [];
    }

    runTask(task) {
        return new Promise((resolve, reject) => {
            const createdTask = async () => {
                this.runningTask++;
                try {
                    const result = await task();
                    resolve(result);
                } catch (error) {
                    reject(error);
                } finally {
                    this.runningTask--;
                    this.processQueue();
                }
            }

            if (this.runningTask < this.concurrency) {
                createdTask();
            } else {
                this.queue.push(createdTask);
            }
        });
    }
    processQueue() {
        if (this.queue.length > 0 && this.runningTask < this.concurrency) {
            const task = this.queue.shift();
            task();
        }
    }
}

const tq = new TaskQueue(2);

const delayed = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task completed");
    }, 1000);
})

for (let i = 0; i < 10; i++) {
    let taskNumber = i;
    tq.runTask(async () => {
        console.log(`starting task number ${taskNumber}`);
        await delayed();
        console.log(`ending task number ${taskNumber}`);
    })
}