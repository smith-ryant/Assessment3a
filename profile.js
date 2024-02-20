console.log('profile.js')

const goToFavPlace = () => {
    window.open('https://www.nps.gov/zion/index.htm');
}
document.getElementById('favPlaceBtn').addEventListener('click', goToFavPlace);

const goToFavColor = () => {
    window.open('https://en.wikipedia.org/wiki/Shades_of_red');
}
document.getElementById('favColorBtn').addEventListener('click', goToFavColor);

const goToFavPie = () => {
    window.open('https://www.chocolatemoosey.com/german-chocolate-pecan-pie/');
}
document.getElementById('favPieBtn').addEventListener('click', goToFavPie);

const goToFavGuitarist = () => {
    window.open('https://www.jjcale.com/');
}
document.getElementById('favGuitarist').addEventListener('click', goToFavGuitarist);