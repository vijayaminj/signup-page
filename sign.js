let form=document.querySelector("form");
form.addEventListener("sumbit",(evt)=>{
    evt.preventDefault();
});

let fname=document.querySelector("#fname");
let lname=document.querySelector("#lname");
let email=document.querySelector("#email");

fname.addEventListener("focus",()=>{
    fname.style.backgroundColor="green";
    fname.style.color="white";

})
lname.addEventListener("focus",()=>{
    lname.style.backgroundColor="goldenrod";
    lname.style.color="white";

})
let submit=document.querySelector("#submit");

submit.addEventListener("click",()=>{
    if(fname.value==""){
        alert("enter value");
    }
    if(lname.value==""){
        alert("enter last name");
    }
    fname.value="";
    lname.value="";
    email.value="";
    fname.addEventListener("blur",()=>{
        fname.style.backgroundColor=" ";
    })
        
})
