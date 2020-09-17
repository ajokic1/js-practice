const waitFail = (ms, fail=false) =>
  new Promise((resolve, reject) => setTimeout(fail ? reject : resolve, ms));

const handlePromise = (promise) => {
  promise.then(() => console.log("Success!"))
    .catch(() => console.log("Error!"));
}

const handlePromiseAsync = async (promise) => {
  try {
    await promise;
    console.log("Success!");
  } catch (err) {
    console.log("Error!");
  }
}

console.log("Waiting for result...");
const promise1 = waitFail(1000, true);
const promise2 = waitFail(2000, false); 
const promise3 = waitFail(5000);

handlePromise(promise1); // Error
handlePromiseAsync(promise2); // Success

Promise.all([promise1, promise2, promise3])
  .then(() => console.log("All promises have finished successfully."))
  .catch(() => console.log("One of the promises has failed."));