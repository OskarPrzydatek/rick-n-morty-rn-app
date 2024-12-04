import axios from 'axios';

export const getAllCharacters = async (pageParam: string) => {
  const response = await axios.get(pageParam);

  return response.data || {};
};

export const getSingleCharacter = async (url: string) => {
  const response = await axios.get(url);

  return response.data || {};
};
