// const sum = (num1, num2) => num1 + num2;
// const PI = 3.14;
// class SomeMath{
//   constructor(){
//     console.log("event created");
//   }
// }
// module.exports = {sum : sum, PI: PI, SomeMath: SomeMath}
  

          // EVENT MPDULE
const Event = require("events");
const event = new Event();

event.on('tutorial', (num1, num2)=>{
  console.log(num1 * num2);
})
event.emit('tutorial', 68, 2);

class Person extends Event{
  constructor(name){
    super();
    this._name = name
  }
  get name () {
    return this._name;
  }
}
let urban = new Person("urban");
let pac = new Person("pac");
pac.on('name', () => {
  console.log('and my nick name is ' + pac.name)
});

urban.on("name", () =>{
  console.log('my name is ' + urban.name)
})

urban.emit('name');
pac.emit('name');
