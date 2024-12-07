// const  a = (text)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             resolve(text);
//         },2000)
//     })
// }

// (
//  async()=>{
//     console.log(await a("hello"));
//     console.log(await a("world"));
//  }
// )();

const arr = [1,2,3,4]



const avg = ([a,b,c])=>{
   return (a+b+c)/3;
}

console.log(avg([...arr]));

