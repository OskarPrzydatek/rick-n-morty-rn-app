import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type CharacterDetailsScreenParams = {
  url: string;
};

export type CharacterDetailsStackParamList = {
  CharacterDetailsScreen: CharacterDetailsScreenParams;
};

export type CharacterDetailsStackNavigationProp =
  NativeStackNavigationProp<CharacterDetailsStackParamList>;

export const CharacterDetailsStackRoutes: {
  [route in keyof CharacterDetailsStackParamList]: route;
} = {
  CharacterDetailsScreen: 'CharacterDetailsScreen',
};
