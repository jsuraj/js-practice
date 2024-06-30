// Js interview handbook
// reference: https://d2a5xnk4s7n8a6.cloudfront.net/spees/w/o/6586a3e9e4b07fb1b52009a2/v/658d338ae4b0590f9ed650e9/u/6592b038e4b026fdf34eeb49/p/assets/pdfs/2023/12/28/658d338ae4b0590f9ed650e9/658d338ae4b0590f9ed650e9_original.pdf?Expires=1719742551&Signature=dkJQmUeunE3CUpP0YxVic0g-C69pnkBgkhQhjKOVWiC0MiVha01QiiDFuzBnm3eWiqgVbbgcbeF2AE4Uf8u0nU0hE1PfhKvzF6jbHTsex4uuB3Us544DexM-ux~7jej8JgW2-D9aI8mSgrg2junw2ShRwJ5Xg374GQH~HB1MpJUZ4W-90TBN9dfOqZPpzo9zbGEVgwra-jCV3oGni5aQKWgB6iyCww49~24EDHgPPZMux9BzZnNFiZxloYP3WV4MT4Pes0k4jz4~~23ksBELCj8FPD6Av9-xjM39njkgNLQ~OJ0zaoLzWv02nvTB1AXu~j1bSaq3i401wRGTK8uY1g__&Key-Pair-Id=APKAW3MHMK54TM3QKYNH#page=40

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