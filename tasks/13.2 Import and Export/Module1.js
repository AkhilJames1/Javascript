console.clear

const sayHi = ()=>{
    console.log("HELLO")
}
const sayHiWithName = (name)=>{
    console.log(`HELLO ${name}` )
}
module.exports = {sayHi, sayHiWithName}