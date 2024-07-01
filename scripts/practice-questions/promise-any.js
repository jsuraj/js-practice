// Js interview handbook, page 43: Promise any polyfill

function promiseAny(tasksList) {
  let results = [];
  let tasksCompleted = 0;

  return new Promise((resolve, reject) => {
    tasksList.forEach((task, index) => {
      task.then((result) => {
        resolve(result);
      })
      .catch((err) => {
        tasksCompleted += 1;
        results[index] = err;
        if (tasksList.length === tasksCompleted) {
          reject(results);
        }
      })
    })
  });
};


function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 5000) {
        reject(`Rejected ${time}`);
      }
      resolve(time);
    }, time);
  })
}

const tasksList = [task(5000), task(2000), task(3000)];

promiseAny(tasksList)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));