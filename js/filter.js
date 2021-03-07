//Decalre variables
// function filter() {
//     var filterValue, input, a, i;
//     input = document.getElementById('search');
//     filterValue = input.value.toLowerCase();
// }

// console.log(filter(input));

//Loop through all photos, hide those who don't match the search name
// for (i = 0; i < img.length; i++) {

//     if (a.getAttribute("data-caption").toLowerCase().indexOf(filterValue) > -1) {

//     }
// }

/*******************************************/

// const search = document.querySelector('#search');
// const boxTexts = document.querySelectorAll('[data-caption]');

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

/*******************************************/

// document.getElementById("search").addEventListener("keyup", filter);
// function filter() {
//     var x = document.getElementById("search");
//     x.value = x.value.toLowerCase();
// }


let input = document.getElementById('search');

function filter() {
  console.log(input.value);
  let a = document.getElementsByTagName('a');
  for (i = 0; i < a.length; i++) {
    if (!a[i].getAttribute('data-caption').toLowerCase().includes(input)) {
      a[i].style.display = "none";
    } else {
      a[i].style.display = "";
    }
  }
}
input.addEventListener('keyup', filter);

