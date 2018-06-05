
var movies = [{
    "genre": "Action|Adventure|Comedy|Musical|Romance|Thriller",
    "title": "Sholay",
    "price": 41
}, {
    "genre": "Drama|War",
    "title": "Stop-Loss",
    "price": 47
}, {
    "genre": "Comedy|Drama",
    "title": "East, West, East: The Final Sprint",
    "price": 38
}, {
    "genre": "Drama|Romance",
    "title": "Shamrock Handicap, The",
    "price": 73
}, {
    "genre": "Drama|Romance",
    "title": "Susana (Devil and the Flesh, The)",
    "price": 42
}, {
    "genre": "Comedy|Drama",
    "title": "Toast",
    "price": 27
}, {
    "genre": "Adventure|Animation|Fantasy",
    "title": "Spirited Away (Sen to Chihiro no kamikakushi)",
    "price": 26
}, {
    "genre": "Drama|Mystery",
    "title": "Extraordinary Stories (Historias extraordinarias)",
    "price": 34
}, {
    "genre": "Children|Musical|Mystery",
    "title": "Adventures of Mary-Kate and Ashley, The: The Case of the Christmas Caper",
    "price": 69
}, {
    "genre": "Drama|Horror|Mystery|Thriller",
    "title": "Santa Sangre",
    "price": 74
}];

let drama = movies.filter((x) => x.genre === 'Drama');
let movieTitle = movies.map((x) => x.title);
let total = movies.reduce((sum, price) => {
    return sum + price.price;
}, 0); //0 is the starting point


// console.log(drama);
console.log(total);
