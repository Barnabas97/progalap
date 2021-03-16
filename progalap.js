const modul = require('./module');
//Első feladat

//sztring
const sztring = 'blbla';
//egész szám
const number = 23;
//boolean
const boolean = true;
//objektum
let car = { type: 'Fiat', model: '500', color: 'white' };
//tömb
const tömb = ['1', '2', '3'];

// Második feladat

// a const az konstans tehát nem fog változni az értéke, ha lettel adunk meg egy változót akkor viszont megtudjuk változzatni az értékét
const szam1 = 5;
let szam2 = 10;
szam2 = 15;
console.log(szam2);

//harmadik feladat
//érték szerinti átadásnál az adat értékének másolatával dolgozik.

//negyedik
const szamostomb = [1, 2, 3, 5, 6];
const containsElement = (arr, element) => {
  for (const el of arr) {
    if (el === element) {
      return true;
    }
  }
  return false;
};

console.log('Negyedik feladat', containsElement(szamostomb, 2));

//ötödik
const objecttomb = [
  {
    name: 'Feri',
    age: 25,
  },
  {
    name: 'András',
    age: 56,
  },
  {
    name: 'Máté',
    age: 100,
  },
];

const objectmax = (arr) => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].age > max.age) {
      max = arr[i];
    }
  }
  return max.name;
};

console.log('Ötödik feladat:', objectmax(objecttomb));

//hatodik

const metszet = (src1, src2) => {
  const dst = [];
  for (let i = 0; i < src1.length; i++) {
    for (let j = 0; j < src2.length; j++) {
      if (src1[i] === src2[j]) {
        dst.push(src1[i]);
      }
    }
  }
  return dst;
};

console.log(
  'Hatodik feladat: ',
  metszet([1, 2, 4, 6, 7], [6, 2, 3, 7, 12, 14, 16])
);

//hetes

console.log('Hetedik feladat :', modul.sum(2, 5));

//nyolcadik

const tomb2 = [2, 3];

const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }

  return arr;
};

const fillArrayByUser = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i] * arr[j];
    }
  }
};

generate2d();

console.log('Nyolcadik feladat: ', fillArrayByUser(tomb2));
