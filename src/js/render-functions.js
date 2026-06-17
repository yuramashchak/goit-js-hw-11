const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');



import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderPhoto(post){
    return `<li class = "gallery-item">
    
    <a href="${post.largeImageURL}">
    <img src="${post.webformatURL}" alt="${post.tags}">
    </a>
    <div class="underpicture">
        <div class="info">
          <p class = "words">Likes</p>
          <p class = "numbers">${post.likes}</p>
        </div>

        <div class="info">
          <p class = "words">Views</p>
          <p class = "numbers">${post.views}</p>
        </div>

        <div class="info">
          <p class = "words">Comments</p>
          <p class = "numbers">${post.comments}</p>
        </div>

        <div class="info">
          <p class = "words">Downloads</p>
          <p class = "numbers">${post.downloads}</p>
        </div>
    </div>
    </li>`
}

export function renderPhotos(posts){
    return posts.map(renderPhoto).join('');
}



export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
   const markup = renderPhotos(images);

  gallery.innerHTML = markup;

  lightbox.refresh();
}

export function clearGallery() {
   gallery.innerHTML = '';
}

export function showLoader() {
 loader.classList.remove('hidden')
}

export function hideLoader() {
   loader.classList.add('hidden')
}