function Person(name){
    this.name= name;
}

Person.prototype.hello = function(){
    return `Hi ${this.name}`;
}

function Dev(name,title){
  Person.call(this, name);
    this.title = title;
}

Dev.prototype = Object.create(Person.prototype);

Dev.prototype.constructor = Dev;

Dev.prototype.getTitle = function() {
 return this.title;
 }



 const obj = new Dev("Alice", "Software Engineer");
 console.log(obj.hello()); // Output: Hello Alice
 console.log(obj.getTitle()); // Output: Software Enginee