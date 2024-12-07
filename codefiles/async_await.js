const fun = async()=>{
    let p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Ashish")
        },1000);
    })

    let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Deepanshu")
        },2000);
    })
    console.log("Fetching the value of p2.....");
    let v1 = await p2;
    console.log("v1 : "+v1);
    console.log("Fetching the value of p2.....");
    let v2 = await p1;
    console.log("v2 : "+v2);
}

fun()

// await is used to synchronise the promises returned by the async functions accoring the 
// order or await for respective functions.

