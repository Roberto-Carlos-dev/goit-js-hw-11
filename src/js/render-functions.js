import SimpleLightbox from 'simplelightbox';  // імпорт бібліотеки simplelightbox
import 'simplelightbox/dist/simple-lightbox.min.css'; // імпорт стилів бібліотеки

const gallery = document.querySelector('.gallery'); // ел-т, куди додаватиметься галерея
const loader = document.querySelector('.loader-backdrop');  // індикатор завантаження

let lightbox = new SimpleLightbox('.gallery a', { // ініціалізація Lightbox
  captionsData: 'alt', // підписи до зображень(з alt)
  captionDelay: 250,   // затримка підписів
});

export function createGallery(images) { // ф-я для створення галереї
  const markup = images // перебираю масив зображень
    .map( 
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => ` 
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div>
            <p>Likes: ${likes}</p>
            <p>Views: ${views}</p>
            <p>Comments: ${comments}</p>
            <p>Downloads: ${downloads}</p>
          </div>
        </li>`
    ) // розмітка
    .join(''); // об'єдную в рядок

  gallery.insertAdjacentHTML('beforeend', markup); // вставляю розмітку в галерею
  lightbox.refresh(); // оновлюю lightbox  
}

export function clearGallery() {  // ф-я для очищення галереї
  gallery.innerHTML = ''; // очищаю галерею і 
}

export function showLoader() { // ф-я для показу індикатора завантаження
  loaderBackdrop.classList.remove('is-hidden');  // видаляю клас
}

export function hideLoader() { // ф-я для ховання індикатора завантаження
  loaderBackdrop.classList.add('is-hidden'); // додаю классссс
}
