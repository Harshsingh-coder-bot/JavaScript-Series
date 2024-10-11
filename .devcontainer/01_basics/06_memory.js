//stack memory (primitive )
//Heap memory (Non-primtive) store  data 

let userOne ={
    email:"user@google.com" ,
    upi:"user@ybl"
}

let userTwo = userOne 
userTwo.email="harshsingh@google.com"

console.log(userOne.email);
console.log(userTwo.email);