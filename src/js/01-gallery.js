// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
const gallerie = document.querySelector('.gallery');

gallerie.innerHTML = galleryItems.map(image =>
`<a class="gallery__item" href='${image.original}'>
  <img class="gallery__image" src='${image.preview}' alt='${image.description}' />
</a>`).join('');
const lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
  captionDelay: 250,
});
console.log('hello')

