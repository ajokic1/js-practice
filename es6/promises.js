function withPromise() {
  const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
  promise.then(response => {console.log(response)});
}

async function withAsyncAwait() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(response);
}

withPromise();
withAsyncAwait();