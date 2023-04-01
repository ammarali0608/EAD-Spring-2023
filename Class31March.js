const getData = (callback) => {
  console.log("Before");
  setTimeout(() => {
    const apiData = { name: "Hassan", age: 21 };
    callback(apiData);
  }, 2);

  console.log("After");
  setTimeout(() => {
    const apiData = { name: "Ammar", age: 21 };
    callback(apiData);
  }, 0);
};
getData((data) => {
  console.log(data);
});
