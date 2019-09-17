// console.log(process.env);

const sum = (a,b)=>{
    process.emitWarning("This finction i deprecated, use calc instead","DeprecationWarning");
    return a+b;
}

console.log(sum(4,5));
