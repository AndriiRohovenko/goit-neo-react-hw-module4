import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const getPhotos = async (searchValue, page) => {
  const { data } = await axios(`/search/photos`, {
    params: {
      query: searchValue,
      page,
      per_page: 25,
      client_id: '8q4P6PtzMMIFVJROW1qTWai9lUv--4ozQFPaI91Myxk',
    },
  });
  return data;
};
