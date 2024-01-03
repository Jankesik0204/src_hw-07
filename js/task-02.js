const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

// 1.Utworzy oddzielny element <li>. Pamiętaj, aby użyć metody document.createElement().
const listElement = document.querySelector('#ingredients')
// console.log('PRZED PENTLOM:', a1)

ingredients.forEach((ingredient) => {
  const li = document.createElement('li')
  console.log(ingredient)
  // 2.Doda nazwę składnika jako jego zawartość tekstową.
  li.textContent = ingredient
  // 3.Doda klasę item do elementu.
  li.className = 'item'
  // 4.Wstawi wszystkie <li> w jednej operacji do listy ul#ingredients.
  listElement.appendChild(li)
})

// console.log('PO PENTLI:', a1)
