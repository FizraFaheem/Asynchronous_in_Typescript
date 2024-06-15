"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//write a simple asynchronous Typescript function fetching that returns a greeting message aftre a 2-second delay using setTimeout?
function fetchGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello world!");
        }, 2000);
    });
}
//Example Usage :
fetchGreeting().then((message) => {
    console.log(message);
});
