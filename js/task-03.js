// Znajdź element galerii za pomocą ID
const galleryElement = document.getElementById('gallery')

// Dane obrazów
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]

// Pętla iterująca po danych obrazów
for (const image of images) {
  // Stwórz nowy element li
  const newLI = document.createElement('li')
  // Przypisz klasę do elementu li
  newLI.className = 'gallery-item'

  // Stwórz nowy element img
  const imgElement = document.createElement('img')
  // Ustaw atrybuty src i alt dla elementu img
  imgElement.src = image.url
  imgElement.alt = image.alt

  // Dodaj element img do elementu li
  newLI.appendChild(imgElement)

  // Dodaj element li do elementu galerii
  galleryElement.appendChild(newLI)
}
