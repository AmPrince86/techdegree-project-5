//Decalre variables
// function filter() {
//     var filterValue, input, a, img, i;

//     input = document.getElementById('search');
//     filterValue = input.value.toLowerCase();
//     a = document.getElementById('link').getAttribute('data-caption');
//     img = .getAttribute('alt');
// }

// console.log(filter);

//Loop through all photos, hide those who don't match the search name
// for (i = 0; i < img.length; i++) {
//     var a = img[i].getElementsByTagName('a')
// }

/*******************************************/

// const search = document.querySelector('#search');
// const boxTexts = document.getElementById("link").getAttribute("title");

// const handleSearch = event => {
//     search.addEventListener('keyup', handleSearch);
//     const searchTerm = event.target.value.toLowerCase();
// }
// boxTexts.forEach(boxText => {
//     const text = boxText.textContent.toLowerCase();
//     const box = boxText.parentElement;

//     if(text.includes(searchTerm)) {
//         box.style.display = "block";
//     } else {
//         box.style.display = "none";
//     }
// });

document.getElementById("search").addEventListener("keyup", filter);
function filter() {
    var x = document.getElementById("search");
    x.value = x.value.toLowerCase();
}

// for () {

// }


