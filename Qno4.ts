// Write a function fetchWithError that returns a Promise. It should randomly either resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second. Handle the rejection using .catch
function fetchWithError(): Promise <string>{
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if (Math.random()> 0.5){
                resolve("Data fetch succesfully!");
            }
            else{
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
//Eaxample usage
fetchWithError().then((message) => {
    console.log(message);
})
.catch((error) => {
console.error(error);
});
