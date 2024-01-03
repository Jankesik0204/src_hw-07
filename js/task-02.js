const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

// 1.Utworzy oddzielny element <li>. Pamiętaj, aby użyć metody document.createElement().
const a1 = document.querySelector('.categories')
console.log('PRZED PENTLOM:', a1)

for (const ingredient of ingredients) {
  const newLI = document.createElement('li')
  console.log(ingredient)
  // 2.Doda nazwę składnika jako jego zawartość tekstową.
  newLI.textContent = ingredient
  // 3.Doda klasę item do elementu.
  newLI.className = 'item'
  // 4.Wstawi wszystkie <li> w jednej operacji do listy ul#ingredients.
  a1.appendChild(newLI)
}

console.log('PO PENTLI:', a1)
