let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("Ashish");
    },1000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject (new Error("an error occured"));
    },200);
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("Apdp");
    },1500);
})

// const promise_all = Promise.all([p3,p1,p2]);
// promise_all.then((value)=>{
//     console.log(value);
// })

let promise_all = Promise.any([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value);
})





// let p2 = new Promise((resolve,reject)=>{
//     setTime
// })