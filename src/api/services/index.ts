import axios from 'axios';

export const getAllCharacters = async (pageParam: string) => {
  const response = await axios.get(pageParam);

  return response.data || {};
};
