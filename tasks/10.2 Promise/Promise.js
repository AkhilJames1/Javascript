console.clear
let promise = new Promise(function(resolve, reject){
    console.log("Hello Promise")
    resolve(567)
})
console.log('Hello')
setTimeout(() => {
    console.log('This will display after 2 seconds(Hello 3 will display before this)')
    
}, 2000);
console.log('Hello3')
console.log(promise)