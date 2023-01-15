/*let users = [
    { name: 'Artem', username: `Artem1`, password: `dddd` },
    { name: 'Oleg', username: `Oleg1`, password: 11223 },
    { name: 'Marta', username: `Marta1`, password: 11989 },
    { name: 'Malta', username: `Malta1`, password: 19878678 },
    { name: 'Tomas', username: `Tomas1`, password: 10987 },
    { name: 'Lion', username: `Lion1`, password: 189687 },
    { name: 'Manuel', username: `Manuel1`, password: 1098765 },
    { name: 'Jan', username: `Jan1`, password: 198765 },
    { name: 'Moon', username: `Moon1`, password: 87654 },
    { name: 'Rita', username: `Rita1`, password: 098765 }
];

for (let user of users) {
    document.write(`n
    <div>
        <h1>${user.name}</h1>
        <h3>${user}</h3>
        <p>${user.username}</p>
    </div>`)
}

for (let i = 0; i < 10; i++) {
    document.write("Text")
}



let a = 0
while (a < 19) {
    document.write(`<h1>Goood</h1>`)
    a++;
}


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let list of listOfItems) {
    document.write(`
    <div>
        <ul>
            <li>${list}</li>
        </ul>
    </div>
    `)
}

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let product of products) {
    document.write(`
    <div class="product-card">
        <h3 class="product-title">${product.title} Price - ${product.price}</h3>
        <img src="${product.image}" alt="${product.title}" class="product-image">
    </div>`)
}
*/
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

for (let visitor of visitors) {
    if (visitor.age > 30) {
        console.log(visitor)
    }
}
/*let d = 0;
while (d < visitors.length) {
    let visitor = visitors[d];
    if (visitor.age > 30) {
        console.log(visitor);
    }
    d++;
}*/