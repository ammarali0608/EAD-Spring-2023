// const getData = (callback) => {
//   console.log("Before");
//   setTimeout(() => {
//     const apiData = { name: "Hassan", age: 21 };
//     callback(apiData);
//   }, 2);

//   console.log("After");
//   setTimeout(() => {
//     const apiData = { name: "Ammar", age: 21 };
//     callback(apiData);
//   }, 0);
// };
// getData((data) => {
//   console.log(data);
// });

const getPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const apiData1 = undefined;
      if (apiData1) return reject("No data Available");
      resolve(apiData1);
    });
  });
};

// getData().then((res) =>
//   JSON.parse(res)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// );

(async () => {
  try {
    const data = await getPromise();
    console.log(JSON.parse(data));
  } catch (err) {
    console.log(err);
  }
})();

// (async () => {
//   const [api, db] = await Promise.all([getDataFromAPI(), getDataFromDB()]); //run parallely
// })();

/* 

Callbacks
problem callback hell
solution promise

Promise return promisse object ,
promise three states
resolve (handled by then)
reject (handled by catch)
pending

problem chain
solution async awiat


*/

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 1000);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Failed to fulfill promise"));
  }, 2000);
});

Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log("Promise.all result:", result); // [1, 2, 3]
  })
  .catch((error) => {
    console.error("Promise.all error:", error);
  });

Promise.allSettled([promise1, promise2, promise3, promise4])
  .then((result) => {
    console.log("Promise.allSettled result:", result);
    /* [
         {status: "fulfilled", value: 1},
         {status: "fulfilled", value: 2},
         {status: "fulfilled", value: 3},
         {status: "rejected", reason: Error: Failed to fulfill promise at timeout.setTimeout [as _onTimeout] ...}
       ]
    */
  })
  .catch((error) => {
    console.error("Promise.allSettled error:", error);
  });
