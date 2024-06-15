"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function simulateTask() {
    console.log("Task Started");
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
//Example usage:
simulateTask().then(() => {
    console.log("Task Completed");
});
