import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const container = document.querySelector('div.gallery');
const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');

container.insertAdjacentHTML('beforeend', galleryMarkup);

container.addEventListener('click', onContainerClick);

function onContainerClick(e) { 
    if (!e.target.classList.contains('gallery__image')) { 
        return;
    }

    e.preventDefault();  
    
}

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
    });