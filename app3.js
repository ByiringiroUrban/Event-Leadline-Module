
const readline = require('readline');
 const rl = readline.createInterface({input : process.stdin, 
                          output : process.stdout
})

let num1  = Math.floor((Math.random() * 10 + 1));
let num2  = Math.floor((Math.random() * 10 + 2));

let answer = num1 + num2;

rl.question(`what is ${num1} + ${num2} ? \n`,
  (userInput) => {
    if(userInput.trim() == answer){
      rl.close()
    }else{
    rl.setPrompt('incorrect please try again\n');
    rl.prompt();
    }
  }
  
)

rl.question('What is your age? ', (age) => {
  console.log('Your age is: ' + age);
  rl.close();
});

rl.on('close', ()=> {
  console.log('correct!!!!!')
});