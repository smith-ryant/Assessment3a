console.log('neighborhood.js');
// Elevation 486
const elevation = () => {
    window.open('https://elevation486.com/');
}
document.getElementById('elevation486').addEventListener('click', elevation);
// Jaker's
const jakers = () => {
    window.open('https://www.jakers.com/twin-falls/'); 
}
document.getElementById('jakers').addEventListener('click', jakers);
// Koto Beer
const koto = () => {
    window.open('https://koto.beer/');
}
document.getElementById('koto').addEventListener('click', koto);
// Milner's Gate
const milners = () => {
    window.open('https://milnersgate.com/');
}
document.getElementById('milners').addEventListener('click', milners);
// La Casita
const laCasita = () => {
    window.open('https://www.lacasitatf.com/');
}
document.getElementById('laCasita').addEventListener('click', laCasita);


// random restaurant
document.getElementById('random').addEventListener('click', () => {
    const restaurants = Array.from(document.querySelectorAll('.restaurants'));
    const randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    console.log('debug');
    alert(`I recommend: ${randomRestaurant.innerText}`);
});

