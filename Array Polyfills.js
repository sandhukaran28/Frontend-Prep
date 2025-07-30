//map
Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  var result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

//filter
Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    return new TypeError(callback + " is not a function");
  }

  var result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

//reduce
Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback != "function") {
    throw new TypeError(callback + " is not a function");
  }

  var accucmulator = initialValue !== undefined ? initialValue : this[0];
  var startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < this.length; i++) {
    accucmulator = callback(accucmulator, this[i], i, this);
  }

  return accucmulator;
};

//every
Array.prototype.myEvery = function(callback){
    if(typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    for(let i = 0;i< this.length;i++){
        if(!callback(this[i],i,this)){
            return false;
        }
    }

    return true;
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.myMap(x => x * 2));
console.log(arr.myFilter(x => x > 2));
console.log(arr.myReduce((acc, curr) => acc + curr, 0));
console.log(arr.myEvery(x => x > 0));
