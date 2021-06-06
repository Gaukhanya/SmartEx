var animals = [
    { kind: 'cat', age: 3, withOwner: true },
    { kind: 'cat', age: 2, withOwner: false },
    { kind: 'dog', age: 5 },
    { kind: 'cat', age: 1 },
    { kind: 'parrot', age: 2, withOwner: true },
    { kind: 'cat', age: 6 }
];
for (let i = 1; i < animals.length; i++) {
    const animal = animals[i];
    if (!animal.withOwner) animal.withOwner = false;
}

var nobodysCatList = [];
for (let i = 1; i < animals.length; i++) {
    const animal = animals[i];
    if (!animal.withOwner && animal.age >= 2 && animal.kind == 'cat' && animal.withOwner == false) nobodysCatList.push(animal);
}

console.log(nobodysCatList);
