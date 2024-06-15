"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}
function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${data} and processed `);
        }, 1000);
    });
}
function executeSequentially() {
    fetchData()
        .then((data) => {
        console.log(data);
        return processData(data);
    })
        .then((processedData) => {
        console.log(processedData);
    })
        .catch((error) => {
        console.error("Error:", error);
    });
}
// Call the function to see the output
executeSequentially();
