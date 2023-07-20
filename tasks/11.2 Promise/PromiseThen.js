let p = new Promise((resolve, reject) =>{
    let a = 3+4
    if(a === 6)
    {
        resolve('Answer is correct, exceuted resolve')
    }
    else{
        reject("Answer is wrong, excecuted reject")
    }
}
)


p.then((message) =>{
    console.log(message)
}
).catch((message) => {
    console.log(message)

})