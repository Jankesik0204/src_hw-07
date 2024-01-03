// const ulByFirstChild = document.body.firstElementChild;
// console.log("Pierwsze dziecko body:", ulByFirstChild);
// const ul = document.getElementById("categories");
// console.log(
//   "Wyswietlenie wszystkich elementow znajdujacych sie w naszym UL:  ",
//   ul
// );
const LIs = document.getElementsByClassName('item')
//console.log("Tablica elementow z klasa item: ", LIs);

const allCategories = document.querySelectorAll('.item')
const amount_of_LI2 = allCategories.length
console.log('Number of categories: ', amount_of_LI2)

for (const category of allCategories) {
  console.log('Kategoria:', category.querySelector('h2').textContent)
  const c1 = category.querySelector('ul') // Odnoścnik do znacznika <ul> w HTML
  const c2 = c1.querySelectorAll('li') // Odnośnik do znacznika <li> w HTML
  console.log('Elemnets: ', c2)
}
