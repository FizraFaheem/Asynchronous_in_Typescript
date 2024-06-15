
//Write a function fetchData that returns a Promise which resolves with the string 
//"Data fetched successfully!" after a delay of 1 second.

 function fetchdata():
Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched succesfully!");

        },1000);
    });
}
//Example Usage
fetchdata().then((message) => {
    console.log(message);
})