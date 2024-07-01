// Js interview handbook, page 53: Promise all polyfill

function promiseAllSettled(promises) {
  // let results = [];
  // let tasksCompleted = 0;

  // return new Promise((resolve, reject) => {
  //   promises.forEach((promise, index) => {
  //     promise.then((result) => {
  //       results[index] = { value: result, status: 'fulfilled' };
  //       tasksCompleted += 1;
  //       if (promises.length === tasksCompleted) {
  //         resolve(results);
  //       }
  //     })
  //     .catch((err) => {
  //       results[index] = { value: err, status: 'rejected' };
  //       tasksCompleted += 1;
  //       if (promises.length === tasksCompleted) {
  //         resolve(results);
  //       }
  //     })
  //   })
  // })
  const mappedPromises = promises.map((promise) => {
    return promise.then(
      (result) => ({ value: result, status:'fulfulled' }),
      (error) => ({ value: error, status: 'rejected' })
    )
  });
  return Promise.all(mappedPromises);
}


function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 5000) {
        resolve(time);
      } else {
        reject(time)
      }
    }, time)
  })
}

const tasks = [task(1000), task(2000), task (6000)];

promiseAllSettled(tasks).then((result) => console.log(result));