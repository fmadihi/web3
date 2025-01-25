/*let num1 = +prompt('num1')
let num2 = +prompt('num2')
let opera = prompt('enter +,-,*,/')

debugger;

if(opera === '+'){
    console.log(num1 + num2)
}
else if(opera === '-'){
    console.log(num1 - num2)
}
else if(opera === '*'){
    console.log(num1 * num2)
}
else if(opera === '/'){
    console.log(num1/ num2)
}
else{
    console.log('enter false')
}
*/
/*
switch(opera){
    case '+':
    case '-':
        console.log(num1 + num2)
        break;
    case '*':
        console.log(num1 * num2)    
        break;   
    case '/':
        console.log(num1 / num2)    
        break; 
    default:
        console.log('enter false')
        break;
}*/


/*
let username = prompt("enter your name")
if (username == "ali"){
    let pass = prompt("enter your password")
    if(pass == '1234'){
        let email = prompt('enter your email')
        if(email == 'a@.com'){
            document.write('hello ali, welcome, you are real ali')
        }
        else{
            document.write('hello you are not real ali')
        }
    }
    else{
    document.write('wrong password, you are not ali')
    }
}
else{
    document.write('wrong username')
}*/
/*
let username = prompt("enter your name")
let pass = prompt("enter your password")
let email = prompt('enter your email')
if(username == 'ali' && pass=='1234' && email=='a@.com'){
    document.write('hello ali, welcome, you are real ali')
}
else{
    document.write('you are not ali')
}*/
let x = 10
let y = 20

let z = add(x,y)
function add(m,n){
    return m + n
}
console.log(z)

let fname = prompt('fname')
let lname = prompt('lname')
let age = prompt('age')
function show(f,l,a){
    return `my name is ${f} ${l} and my age is ${a}`
}
let f = document.getElementById('root')
f.innerHTML = show(fname,lname,age)
