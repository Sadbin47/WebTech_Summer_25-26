//Simple Output
console.log("HTML CONNECTED")

//Variables
let a=50;
var b=20.5;
sum=a+b;
sub=a-b;
console.log(sum);
console.log(sub);

//Same Variable ReUSE
let name="AIUB";
name= "DU"
console.log(name);

//Length
a="reagewfrgevs";
var text= a.length;
console.log(text);

//loops
let i=0;
for(i=0;i<5;i++){
    console.log("Value i:",i);
}

let j=0;
while(j<5){
    j++;
    console.log("Value j:",j);
}

let jj=0;
do{
    jj++;
    console.log("Value JJ:",jj)
}while(jj<5)

//ARRAY
let arr = ["ABS","COMPASS"];
arr.forEach((item,index)=>{
    console.log("Index:" ,index, "Item:", item);
})

let arrr=["ABB","BBB"];
arrr.map((item,index)=>{
    console.log("Index:", index,"Item:",item);
})

let arrrr=["acc","bcc"];
arrrr.map((item,index)=>{
    console.log("Item:",item);
})

//validation
function collect_data(){
    let isNameValid = collect_name();
    let DOB = collect_DOB();
    return false;
}

function collect_name(){
    let UserName = document.getElementById("name").value;
    if(UserName == ""){
        document.getElementById("NameError").innerHTML="Name Cannot be Empty.";
        return false;
    }else if(UserName.length<5){
        document.getElementById("NameError").innerHTML="Length is less than 5 Character";
        return false;
    }
    console.log(UserName);
    return false;
}

function collect_DOB(){
    let DOB= document.getElementById("name").value;
    if(DOB == ""){
        document.getElementById("DOB").innerHTML="DOB Cann't bet empty";
    }
    console.log(DOB);
    return false;
}