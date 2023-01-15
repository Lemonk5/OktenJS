let book = [
    {
        title: 'Harry Potter',
        pageCount: 320,
        genre: "fantasy",
        authors: [
            {
                name: "GGGGG",
                age: 40
            },
            {
                name: "hhghghhg",
                age: 44
            }
        ]
    },
    {
        title: 'Deal',
        pageCount: 320,
        genre: "crime",
        authors: [
            {
                name: "Hobson",
                age: 40
            },
            {
                name: "Tomson",
                age: 44
            }
        ]
    },
    {
        title: 'Lord of the ring',
        pageCount: 500,
        genre: "fantasy",
        authors: [
            {
                name: "Tolkin",
                age: 70
            },
            {
                name: "Tolkin son",
                age: 44
            }
        ]
    }
]
console.log(book[0].authors[1].name)


let user = [
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

console.log(user[0].password, user[1].password, user[2].password, user[3].password, user[4].password, user[5].password, user[6].password, user[7].password, user[8].password, user[9].password);
