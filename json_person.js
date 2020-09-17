const personObject = {
  firstName: 'Andrej',
  lastName: 'Jokic',
  age: 23
};

const personJson = '{"firstName": "Andrej", "lastName": "Jokic", "age": 23}';

const personParsed = JSON.parse(personJson);

const personStringified = JSON.stringify(personObject);

console.log(personParsed);
console.log(personStringified);