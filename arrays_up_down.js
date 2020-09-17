function createArray(number) {
  const countUp = Array.from(Array(number).keys());
  const countDown = countUp.slice().reverse();
  return [...countUp, number, ...countDown];
}

console.log(createArray(5));