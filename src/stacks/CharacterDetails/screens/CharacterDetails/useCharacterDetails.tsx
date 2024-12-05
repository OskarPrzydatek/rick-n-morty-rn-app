import {getSingleCharacter} from '@api/services';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {CharacterDetailsStackParamList} from '@stacks/CharacterDetails/CharacterDetails.routes';
import {MainStackNavigationProp} from '@stacks/Main/Main.routes';
import useFavoritesStore from '@store/favorites';
import {useQuery} from '@tanstack/react-query';

const useCharacterDetails = () => {
  const {goBack} = useNavigation<MainStackNavigationProp>();
  const {params} = useRoute<RouteProp<CharacterDetailsStackParamList>>();

  const {
    isCharacterInFavorites,
    addCharacterToFavorites,
    removeCharacterFormFavorites,
  } = useFavoritesStore();

  const {data, isLoading} = useQuery({
    queryKey: ['character_details', params.url],
    queryFn: () => getSingleCharacter(params.url),
  });

  const handleIsCharacterInFavorites = isCharacterInFavorites(data?.id);

  const onPressGoBackToCharactersList = () => goBack();

  const onPressAddToFavorites = () => addCharacterToFavorites(data);

  const onPressRemoveFromFavorites = () =>
    removeCharacterFormFavorites(data?.id);

  const onPressFavoritesButton = () => {
    return handleIsCharacterInFavorites
      ? onPressRemoveFromFavorites()
      : onPressAddToFavorites();
  };

  return {
    data,
    isLoading,
    handleIsCharacterInFavorites,
    onPressFavoritesButton,
    onPressGoBackToCharactersList,
  };
};

export default useCharacterDetails;
