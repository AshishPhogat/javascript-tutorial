const fun = async()=>{
    let p1 = new Promise((resolve,reject)=>{

        resolve(new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("second done");
            },2000);
        }))
    
    }).then((val)=>{
        console.log("then "+val);
        return val;
    })

}

fun();


