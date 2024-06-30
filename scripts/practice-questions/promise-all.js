// Js interview handbook, page 40: Promise all polyfill

function promiseAll(tasksList) {
  let results = [];

  let promisesCompleted = 0;

  return new Promise((resolve, reject) => {
    tasksList.forEach((task, index) => {
      task.then((result) => {
        results[index] = result;
        promisesCompleted += 1;
        if (tasksList.length === promisesCompleted) {
          resolve(results)
        }
      })
      .catch((error) => {
        reject(error);
      })
    });
  })
};


function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 3000) {
        reject("Rejected");
      }
      resolve(time);
    }, time);
  });
}


const tasksList = [task(1000), task(5000), task(3000)];

promiseAll(tasksList)
  .then((results) => console.log(results))
  .catch((error) => console.log(error));