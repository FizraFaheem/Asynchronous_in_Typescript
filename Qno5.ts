//Write a function executeSequentially that executes two functions fetchData and  processData sequentially using Promises, and logs the results in the order they are called.

function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        resolve("Data fetched");
        setTimeout(() => {
      }, 1000);
    });
  }
  
  function processData(data: string): Promise<string> {
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