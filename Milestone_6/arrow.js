const add3 = (a,b) => a + b;
const sum = add3(90, 5);
console.log(sum);

const mul = (a,b) => a * b;
const mul1 = mul(5 ,4);
console.log(mul1)


//large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multiply = x * y * z;
    const result = sum + multiply;
    return result;
}