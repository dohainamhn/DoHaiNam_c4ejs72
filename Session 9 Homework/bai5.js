function random(a,b){
    return Math.floor(Math.random()*(b-a+1))+a
}
const x = random(4, 16);
console.log(x)
if (x < 4) {
console.log('Failed: the number is smaller than 4');
} else if (x > 16) {
console.log('Failed: the number is bigger than 16');
} else {
console.log("Passed, bravo");
}
