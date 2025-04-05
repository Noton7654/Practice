//define closures
//inner function has the access of variables from the outer scope
const closureFunction = () => {
    let outervariable = 23;
    const innerFunction = () => {
        console.log(outervariable);
    }
    return innerFunction;
}

closureFunction(); // it's wrong, coz it's return nothing
const finalClosureFunction = closureFunction(); // return the innerFunction
// the called the innrFunction
finalClosureFunction();

//objects concept for javascript
const personObject = {
    studentName: "Jhon",
    student
}

//thorough concepts of objects key-value pairs

const userProfile = {
    
}


