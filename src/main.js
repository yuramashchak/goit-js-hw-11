import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
 
 export const form = document.querySelector('.form')
 export const search = document.querySelector('.search-text')
 export const button = document.querySelector('.search')


const readForm = form.addEventListener('submit', (e)=>{
    e.preventDefault()


    const query = search.value.trim();

       if (query === '') {
    return
}
       clearGallery()
       showLoader()

     getImagesByQuery(query)
  .then(data => {
    if (data.hits.length === 0) {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });

  return;
}
    createGallery(data.hits)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    hideLoader();
  });  

})

 


