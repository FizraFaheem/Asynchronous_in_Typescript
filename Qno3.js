"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchdata() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched succesfully!");
        }, 1000);
    });
}
//Example Usage
fetchdata().then((message) => {
    console.log(message);
});
