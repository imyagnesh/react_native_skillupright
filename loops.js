const arr = [1,2,3, 'string',4, 5, 6];

// const sum = arr.reduce((previous, current) => {
//     console.log(previous);
//     console.log(current);
//     return previous + current;
// }, 0);

// console.log(sum);

// [2,4,6,8,10,12]

const newArr = arr.reduce((p,c) => {
    console.log(p);
    console.log(c);
    if(typeof c === 'number') {
        p.push(c * 2);
    }
    console.log(p);
    return p;
}, []);

console.log(newArr);



// const sum = arr.reduce((previous, current) => previous + current, 0);

// console.log(sum);

// arr.forEach(element => {
//     if(typeof element === 'number') {
//         sum = sum + element;
//     }
// });

// const newArray = arr.map(element => {
//     if(element % 2 === 0) {
//         return element * 2;
//     }
//     return element;
// });

// console.log(newArray);

// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element * 2);
// }

// console.log(newArr);

// let sum = 0;

// let index = 0;

// do {
//     const element = arr[index];
//     if(typeof element === 'number') {
//         sum = sum + element;
//     }
//     index++;
// } while (index < arr.length);

// while (index < arr.length) {
//     const element = arr[index];
//     if(typeof element === 'number') {
//         sum = sum + element;
//     }
//     index++;
// }

console.log(sum);

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(typeof element === 'string') {
//         break;
//     }
//     sum = sum + element;
// }



// console.log(sum);

// const obj = {
//     name: 'virat'
// };

// console.log(obj.gender);

// const user = { gender: 'male' }


// console.log(user.gender);
// obj[user.gender] = []
// // obj.male = [];

// console.log(obj);


// const a = undefined;
// const b = 2;

// if a is availble then it will use a;
// if a is not available then it will use b;
// const c = a || b;
// console.log(c);

// if a is available then it will use b;
// if a is not availble then it will use a;
// const d = a && b;
// console.log(d);



const users = [
    {
      name: "rohit",
      gender: "male",
      age: 30
    },
    {
      name: "virat",
      gender: "male",
      age: 29
    },
    {
      name: "rahul",
      gender: "male",
      age: 28
    },
    {
      name: "deepika",
      gender: "female",
      age: 27
    },
    {
      name: "alia",
      gender: "female",
      age: 26
    },
    {
      name: "priyanka",
      gender: "female",
      age: 25
    },
  ];
  
  const groupBy = users.reduce((p, c) => {
      // console.log(c.gender);
      const key = c.gender;
      if(p) {
          // console.log(p);
          // console.log(p[key]);
          if(p[key] === undefined) {
              p[key] = [c]
          } else {
              p[key].push(c);
          }
          return p;
      }
      // if(!p[c.gender]) {
      //     p[c.gender] = [c];
      // } else {
      //     p[c.gender].push(c);
      // }
      // return p;
  }, {});
  
  console.log(groupBy);
  
  
  
  // {
  //     male: [...male],
  //     female: [...female]
  // }
  const obj = {
    onClick: () => {},
    filter: 'all',
    onChange: () => {},
    isActive: true,
    disabled: false
}

const newObj = {};


for (const key in obj) {
   if(!key.includes('on')) {
    newObj[key] = obj[key];
   }
}

console.log(newObj);

const arr = [1,2,3,4,5];

const obj = {a:1, b:2, c: 3};

for (const iterator of arr) {
    console.log(iterator);
}

for (const [key, value] of Object.entries(obj)) {
    console.log(key);
    console.log(value);
}


const groupByAge = users.reduce((acc,item) => {
  const ageGroup = Math.floor(item.age / 10);
  const key = `[${ageGroup}0-${ageGroup}9]`;
  if(acc[key] === undefined) {
      acc[key] = [item]
  } else {
      acc[key].push(item);
  }
  return acc;
}, {});