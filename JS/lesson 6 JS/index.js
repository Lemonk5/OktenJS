/*let start = ['hello world', 'lorem ipsum', 'javascript is cool']
console.log(start[0].length)
console.log(start[1].length)
console.log(start[2].length)

let uper = start[0].toUpperCase()
console.log(uper);

let start1 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
let lower = start1[0].toLowerCase()
console.log(lower)

let start2 = ' dirty string   '
console.log(start2.trim())


let str = 'Ревуть воли як ясла повні'
console.log(str.split(" "))


let number = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let mapnumber = number.toString()
console.log(mapnumber)
console.log(typeof mapnumber)

let filter = number.sort((a, b) => a - b)
console.log(filter)


let filter1 = number.sort((a, b) => b - a)
console.log(filter1)




let odj = 'name: "Oleg", age: 34'
let split = odj.split(',')
console.log(split)
let a = split[1]
let nameValue = a.split(':')
console.log(nameValue[1]);


let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

console.log(coursesAndDurationArray.sort(function (a, b) {
    return b.monthDuration - a.monthDuration
}))

let filter = coursesAndDurationArray.filter((course) => course.monthDuration > 5);
console.log(filter) 


let suits = [
    { Cardname: 'heart', color: 'red' },
    { Cardname: 'diamond', color: 'red' },
    { Cardname: 'spear', color: 'dark' },
    { Cardname: 'clubs', color: 'dark' }
]
let positions = [6, 7, 8, 9, 10, 'oficer', 'queen', 'king', 'T'];
const deck = [];

for (let suit of suits) {
    for (let position of positions) {
        const card = {
            Cardname: suit.Cardname,
            value: position,
            color: suit.color
        }
        deck.push(card);
    }m
}
console.log(deck)

//let T = deck.filter(value => value.Cardname === 'spear' && value.value === 'T')
//console.log(T)

//let all6 = deck.filter(value => value.value === 6)
//console.log(all6)

//let allRed = deck.filter(value => value.color === 'red')
//console.log(allRed)

//let alldiamond = deck.filter(value => value.Cardname === 'diamond')
//console.log(alldiamond)

let allClubs = deck.filter(value => (value.Cardname === 'clubs' && value.value > 8) || (value.Cardname === 'clubs' && typeof value.value === 'string'))
console.log(allClubs)
*/

let suits = [
    { Cardname: 'hearts', color: 'red' },
    { Cardname: 'diamonds', color: 'red' },
    { Cardname: 'spades', color: 'dark' },
    { Cardname: 'clubs', color: 'dark' }
]
let positions = [6, 7, 8, 9, 10, 'oficer', 'queen', 'king', 'T'];
const deck = [];

for (let suit of suits) {
    for (let position of positions) {
        const card = {
            Cardname: suit.Cardname,
            value: position,
            color: suit.color
        }
        deck.push(card);
    }
}


let reduce = deck.reduce((accum, value) => {
    if (value.Cardname === 'spades') {
        accum.spades.push(value)
    } else if (value.Cardname === 'diamonds') {
        accum.diamonds.push(value)
    } else if (value.Cardname === 'hearts') {
        accum.hearts.push(value)
    } else if (value.Cardname === 'clubs') {
        accum.clubs.push(value)
    }
    return accum
}, { spades: [], diamonds: [], hearts: [], clubs: [] })

console.log(reduce)