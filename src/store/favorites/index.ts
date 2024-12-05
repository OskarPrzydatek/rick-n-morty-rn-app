import {Character} from '@api/models';
import {atomWithMMKV} from '@store/config';
import {useAtom} from 'jotai';

const favoritesAtom = atomWithMMKV<Character[]>('favorites-list', []);

const useFavoritesStore = () => {
  const [favoritesList, setFavoritesList] = useAtom(favoritesAtom);

  const isCharacterInFavorites = (id: number) =>
    favoritesList.some(character => character.id === id);

  const addCharacterToFavorites = (character: Character) =>
    setFavoritesList(() => [...favoritesList, character]);

  const removeCharacterFormFavorites = (id: number) => {
    const filtredFavoritesList = favoritesList.filter(
      character => character.id !== id,
    );

    setFavoritesList(filtredFavoritesList);
  };

  return {
    favoritesList,
    isCharacterInFavorites,
    addCharacterToFavorites,
    removeCharacterFormFavorites,
  };
};

export default useFavoritesStore;
