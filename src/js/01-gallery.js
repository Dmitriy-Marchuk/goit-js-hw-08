import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryListRef = document.querySelector('div.gallery')

const addGalaryList = galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`
}).join('');


galleryListRef.insertAdjacentHTML('afterbegin', addGalaryList);


let lightbox = new SimpleLightbox('.gallery__item a', {
    captionsData: 'alt',
    captionDelay: 200,
});
