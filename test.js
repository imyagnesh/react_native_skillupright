// filter
// find
// findIndex
// some
// every

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
      age: 18
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
      age: 32
    },
    {
      name: "taimur",
      gender: "male",
      age: 8
    },
  ];

//   {
//       [0-9]: [],
//       [10-19]: [],
//       [20-29]: [],
//       [30-39]: []
//   }

  // const updatedUser = users.map(item => {
  //     if(item.name === 'priyanka') {
  //         return {...item, age: 32}
  //     }
  //     return item;
  // });

  // console.log(updatedUser);


// const isExist = users.any(item => {
//     return item.name === 'virat';
// });

// const isEvery = users.every(item => {
//     return item.age > 20;
// });

// console.log(isEvery);

// console.log(isExist);

// console.log(userVirat);


  // if available then u will get item or undefined
//   const userVirat = users.find(item => {
//       return item.name === 'yagnesh';
//   });

//   console.log(userVirat);

//   const userVirat = users.findIndex(item => {
//     return item.name === 'virat';
// });

// console.log(userVirat);


  // output of filter is always an arry
//   const maleUsers = users.filter(item => {
//       return item.gender === 'male';
//   });

//   console.log(maleUsers);