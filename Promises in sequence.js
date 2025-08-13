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
  let results = [];
  let errors =  [];

  for(let task of tasks){
    try{
      const res = await task();
      results.push(res);
    }
    catch(e){
      errors.push(e);
    }
  }
  cb(results,errors);

};
const taskRunnerRecursion = (tasks, cb) => {
   let results = [];
  let errors =  [];

  const helper  =async function(index){
    if(index === tasks.length){
      return cb(results,errors);
    }
    tasks[index]().then((res)=>{
      results.push(res);
    }).catch((err)=>{
       errors.push(err);
    }).finally(()=>{
      helper(index+1);
    })

    helper(tasks,index+1);
  }
  

  helper(0);
  
};
taskRunnerIterative(tasks, (result, err) => console.log(result, err));
taskRunnerRecursion(tasks, (result, err) => console.log(result, err));
