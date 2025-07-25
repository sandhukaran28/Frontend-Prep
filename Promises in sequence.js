const createAsyncTask = () => {
  const randomVal = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomVal > 5) {
        resolve(randomVal);
      } else {
        reject(randomVal);
      }
    }, randomVal * 100);
  });
};
const tasks = [
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
];
const taskRunnerIterative = async (tasks, cb) => {
  let result = [];
  let error = [];
  for (let task of tasks) {
    try {
      const c = await task();
      result.push(c);
    } catch (e) {
      error.push(e);
    }
  }

  cb(result, error);
};
const taskRunnerRecursion = (tasks, cb) => {
  let result = [];
  let error = [];

  const helper = (index) => {
    if (index === tasks.length) {
      cb(result, error);
    }
    tasks[index]()
      .then((res) => {
        result.push(res);
      })
      .catch((err) => {
        error.push(err);
      })
      .finally(() => {
        helper(index + 1);
      });
  };

  helper(0);
};
taskRunnerIterative(tasks, (result, err) => console.log(result, err));
taskRunnerRecursion(tasks, (result, err) => console.log(result, err));
