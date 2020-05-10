function cal(x1,x2,y1,y2){
    return Math.sqrt(Math.pow(x1-x2) + Math.pow(y1-y2,2))
}

const d = cal(3, 10, 0, 6);
console.log(d)
if (d !== 5) {
console.log('Failed: the calculation is wrong');
} else {
console.log('Passed, bravo');
}
