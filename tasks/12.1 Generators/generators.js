// console.log('Hello, This is generators sample')


// function* numbersGen(){
//     let i= 0;
//     // yield 1;
//     // yield 2;
//     // yield 3;
//     // yield 4;
//     while(true)
//     {
//         yield i++;
//     }
// }
// const gen = numbersGen();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


function* pseudoRandom(seed){ 
    let num = seed;
    while(true){ 
        num = num * 16807 % 2147483647;
        yield num;
    }

}



let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
console.log(generator.next().value); // 984943658