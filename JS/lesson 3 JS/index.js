var x = 2;
var x = 0;
var x = -3;
if (x != 0) {
    console.log("True")
} else {
    console.log("False")
}


let time = 10
if (0 <= time && time <= 15) {
    console.log('first')
} else if (15 < time && time <= 30) {
    console.log('second')
} else if (10 < time && time <= 45) {
    console.log('third')
} else if (45 < time && time <= 59) {
    console.log('fourth')
} else {
    console.log("What?")
}


switch (1) {
    case 1:
        console.log("Math")
        break;
    case 2:
        console.log("Reading")
        break;
    case 3:
        console.log("English")
        break;
    case 4:
        console.log("Math again")
        break;
    case 5:
        console.log("Law")
        break;
    case 6:
        console.log("It")
        break;
    case 7:
        console.log("German")
        break;
    default:
        console.log("What???")
}


var a = 10
var b = 12
if (a > b) {
    console.log('A player win')
} else if (b > a) {
    console.log('B player win')
} else if (b == a) {
    console.log('draw')
} else {
    console.log('What?')
}

let r = null;
let y = r || 'default';
console.log(y)