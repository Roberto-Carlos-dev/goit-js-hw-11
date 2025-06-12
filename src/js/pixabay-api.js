import axios from 'axios';

const API_KEY = '50815858-7c7001d1260428c5ffea0900f'; // Зареєструвався на pixabay.com.Отримав унікальний ключ.
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {  //функція getImagesByQuery для роботи з Pixabay API через Axios.
  const response = await axios.get(BASE_URL, {
    params: { // параметри запиту, для отримання зображень
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data; // повертаю дані з відповіді API
}
