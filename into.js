//1
const amount = 9
if(amount<10){
    console.log('Small number');
}else{
    console.log('Large numbe');
}


//2
console.log(`Hello world`); //template string

console.log(__dirname)
console.log(process)
setInterval(()=>{
    console.log('Hola amigo')
},1000)

//3
const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative')
require('./mindGrenade')
// sayHi(names.Archi)
// sayHi('GoodLuck')
// console.log(data)






