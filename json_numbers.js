const numbers = [1, 2, 3, 4, 5];

const jsonNumbers = '[1, 2, 3, 4, 5]';

JSON.parse(jsonNumbers).forEach(number => console.log(number));