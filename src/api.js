import axios from 'axios';

export const fetchImages = async ({page, value}) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=41243043-03fa0c09f0e0133208ded241a&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
