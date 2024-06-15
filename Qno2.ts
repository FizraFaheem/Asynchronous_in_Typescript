//Write a function simulateTask that simulates a task by logging "Task started",waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.


async function simulateTask():
Promise<void> {
    console.log("Task Started");
    await new Promise<void>((resolve) => {
    setTimeout(() => {
        resolve();

    }, 1000);
});

}
//Example usage:
simulateTask().then(() => {
    console.log("Task Completed");
});