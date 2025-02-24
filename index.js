/**
 * Async & await function in js with namaste js
 *
 */

/**
 * Async and await combination are used to handle promise
 */
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value");
//   }, 20000);
// });

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value");
//   }, 40000);
// });
const API_URL = "https://api.github.com";
// async function handlePromise() {
//   /**
//    * await is a keyword which can only be used inside in a async function
//    *
//    * otherwise it will give you a syntax error
//    */
//   console.log("Hllo");

//   const val = await p2;
//   console.log("kuch backchodi to hai yha pe");

//   console.log(val);
//   const val2 = await p;
//   console.log("kuch backchodi to hai yha pe");

//   console.log(val2);
// }
async function handlePromise() {
  const data = await fetch(API_URL);
  /**
   * fetch() => response.json() => jsonValue
   */
  const jsonValue = await data.json();
  console.log(jsonValue);
}
handlePromise();
// function getData() {
//   p.then((res) => console.log(res));
//   console.log("Namaste js");
// }

// getData();
/**

const p = new Promise((resolve, reject) => {
  resolve("Promise resolved value");
});
// asnc function always return a promise
async function getData() {
  return p;
  //   return "Namaste"; // take this value wrap it in promise and return it
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));

// const data = getData();
// console.log(data);

*/
