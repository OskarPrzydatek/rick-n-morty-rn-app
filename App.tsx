import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MainStack} from './src/stacks/Main';
import {APIClientProvider} from '@api/client';

function App(): React.JSX.Element {
  return (
    <APIClientProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </APIClientProvider>
  );
}

export default App;
