const controlsSpace = document.getElementById('controls')
const bttnCreate = document.getElementById('btn_create')
const bttnDelete = document.getElementById('btn_delete')

console.log(bttnCreate)
console.log(bttnDelete)

function createBoxes() {
  const inputArea = document.querySelector('#input_one').value
  const numberOfBoxes = parseInt(inputArea)
  const container = document.getElementById('boxes')

  for (let i = 0; i < numberOfBoxes; i++) {
    const newDiv = document.createElement('div')
    newDiv.style.width = '30px'
    newDiv.style.height = `${30 + i * 10}px`
    newDiv.style.backgroundColor = `${getRandomHexColor()}`

    container.appendChild(newDiv)
  }
}

function deleteBoxes() {
  const container = document.getElementById('boxes')

  // Pobierz wszystkie dzieci kontenera
  const children = Array.from(container.children)
  console.log(children)
  // Iteruj po dzieciach i usuwaj każde z nich
  children.forEach((child) => {
    container.removeChild(child)
  })
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

// function deleteBoxes() {
//   const container = document.getElementById("boxes");
//   // Pobierz wszystkie dzieci kontenera
//   const children = Array.from(container.children);
//   console.log(children);
//   // Iteruj po dzieciach i usuwaj każde z nich
//   children.forEach((child) => {
//     container.removeChild(child);
//   });
// }

// function test1() {
//   console.log("Witaj!!");
// }

//bttnCreate.addEventListener("click", createBoxes);
