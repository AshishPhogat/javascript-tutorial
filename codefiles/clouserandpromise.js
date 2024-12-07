
const a = ()=>{
    var name = "Ashish"
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name);
        },5000);
    })
}


(async()=>{
    const val = await a();
    console.log("printing "+val);
})();