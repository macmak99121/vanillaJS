const obj = {id:1, name:"fredric"};
console.log(obj);

const copy = {... obj};
copy.name = "Lennart";
console.log("the copy", copy);


console.log(obj);