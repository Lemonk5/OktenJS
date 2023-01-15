/*
function first(a, b) {
    console.log((a + b) * 2)
}
first(10, 5)

function radius(a) {
    console.log(3.14 * (a * a))
}
radius(5)

let zulinder = (r, h) => { return (2 * 3, 14 * r * h) }
console.log(zulinder(3, 5))

let visitors = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];



function visitor(man) {
    for (let visit of man) {
        console.log(visit)
    }
}
visitor(visitors)




function text() {
    document.write(arguments[0])
}
text(`hkfhjhdkjsflldsjfklsdjfkjlksdfkksjjkgdsjkjkfdslkjjfklkjlsdkjf`)

function task2() {
    document.write(`
    <ul>
        <li>${arguments[2]}</li>
        <li>${arguments[2]}</li>
        <li>${arguments[2]}</li>
    </ul>
    `)
}
task2("Marta", 3, "Oleg")


function task3() {
    document.write(`<ul>`)
    for (let i = 0; i < arguments[1]; i++) {
        document.write(`<li>${arguments[0]}</li>`)
    }
    document.write(`</ul>`)
}
task3("Hola", 4)

let arr = [12, true, "ffjsjdskds"]
function task4(array) {
    document.write(`<ul>`)
    for (let items of array) {
        document.write(`<li>${items}</li>`)
    }
    document.write(`</ul>`)
}
task4(arr)


let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
];


function task5(arrayy) {
    for (let user of arrayy) {
        document.write(`
        <div>
            <h3>${user.name}</h3>
            <h2>${user.age}</h2>
            <p>${user.status}</p>
        </div>`)
    }
}
task5(users)
*/

let numbers = [21, 32, 42, 4345, 4434, 2, 34, 5632, 34, 567, 1324, 56543];
function task6(top) {
    let min = top[0];
    for (let items of top) {
        if (items < min) {
            min = items
        }

    }
    return min;
}
let arr1 = task6(numbers);
console.log(arr1)

function task7(top1) {
    let sum = 0
    for (let items1 of top1) {
        sum += items1;
    }
    return sum
}
console.log(task7(numbers))