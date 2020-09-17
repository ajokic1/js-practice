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
handlePromise(waitFail(1000, true)); // Error
handlePromiseAsync(waitFail(2000, false)); // Success