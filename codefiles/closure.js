var greet = "Good Morning";

let g = ()=>{
    let c = ()=>{
        console.log( "message : "+greet);
    }
    console.log(greet);
    greet = "Hello";

    return c;
}


var res = g();
res();