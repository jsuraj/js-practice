// Js interview handbook, page 46: Promise race polyfill

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then((result) => resolve(result))
        .catch((error) => reject(error))
    })
  })
};


function task(time) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if (time < 5000) {
        resolve(time);
      } else {
        reject(`Reject ${time}`);
      }
    }, time)
  })
}

const promises = [task(6000), task(7000), task(8000)];

promiseRace(promises).then((result) => console.log(result))
  .catch((err) => console.log(err))