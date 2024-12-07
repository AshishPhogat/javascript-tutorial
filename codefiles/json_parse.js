const arr = 
`[
    {"1":"Ashish"},
    {"2":"Ashs"},
    {"3":"hello"},
    {"4":"hi"}
]`;

const val = JSON.parse(arr)

for (key in val){
    console.log(val[key])
}
