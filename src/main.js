import './css/styles.css';   // підключаю свої стилі, щоб сторінка мала оформлення.
import './js/pixabay-api.js'; // підключаю модуль pixabay-api.js, де знаходиться функція для HTTP-запиту
import './js/render-functions.js';  // підключаю модуль render-functions.js, де зібрані функції для роботи з інтерфейсом.

import { getImagesByQuery } from './js/pixabay-api';  //беру функцію getImagesByQuery() для отримання картинок
import {
  createGallery,  //  створює картки зображень
  clearGallery,   //  створює картки зображень
  showLoader,     // показує лоадер(індикатор завантаження)
  hideLoader,     // ховає лоадер   
} from './js/render-functions'; 

import iziToast from 'izitoast';  // імпортую iziToast для показу помилок користувачу
import 'izitoast/dist/css/iziToast.min.css';  // імпортую стилі iziToast(підключаю)

const form = document.querySelector('.form'); // беру DOM-елемент моєї форми з класом .form, щоб додати обробник подій

form.addEventListener('submit', async e => {
  e.preventDefault(); // запобігаю перезавантаженню

  const query = e.target.elements['search-text'].value.trim();  // отримую значення з поля вводу з класом search-text, видаляю пробіли(trim)

  if (!query) {  // Якщо поле порожнє(користувач не ввів нічого) — показую попередження через iziToast
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;  // Якщо порожнє — виходжу з функції (return).
  }
// готую інтерфейс до нового пошуку:
  clearGallery();  // очищаю галерею перед новим пошуком
  showLoader();  // показую лоадер — показую користувачу, що зараз триває завантаження
// запит до Pixabay:
  try {
    const data = await getImagesByQuery(query); //викликаю getImagesByQuery(query) — тобто надсилаю HTTP-запит.

    if (data.hits.length === 0) { // Якщо масив картинок порожній — показую повідомлення через iziToast.
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return; // зупиняю виконання (бо нема що малювати)
    }
//створюю галерею
    createGallery(data.hits); // Передаю масив зображень у функцію createGallery()-вона будує розмітку картинок на сторінці.
  } catch (error) {  // обробляю помилки
    iziToast.error({
      message: 'Oops! Something went wrong.',  // показую помилку користувачу
      position: 'topRight',
    });
  } finally {
    hideLoader();  // ховаю лоадер після запиту, що завершився(успішно або ні)
  }
});
