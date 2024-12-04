import {getSingleCharacter} from '@api/services';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {CharacterDetailsStackParamList} from '@stacks/CharacterDetails/CharacterDetails.routes';
import {MainStackNavigationProp} from '@stacks/Main/Main.routes';
import {useQuery} from '@tanstack/react-query';

const useCharacterDetails = () => {
  const {goBack} = useNavigation<MainStackNavigationProp>();
  const {params} = useRoute<RouteProp<CharacterDetailsStackParamList>>();

  const {data, isLoading} = useQuery({
    queryKey: ['character_details', params.url],
    queryFn: () => getSingleCharacter(params.url),
  });

  const onPressGoBackToCharactersList = () => goBack();

  return {
    data,
    isLoading,
    onPressGoBackToCharactersList,
  };
};

export default useCharacterDetails;
