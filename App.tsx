import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {BoxAtom} from './src/Components/ui/Atoms/BoxAtom';
import {LogInContainer, RegisterContainer} from './src/Containers';
import lightTheme from './src/Theme/LightTheme';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer>
        <BoxAtom flex={1} bg="backgroundFirst">
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="Register"
              component={RegisterContainer}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={LogInContainer}
            />
          </Stack.Navigator>
        </BoxAtom>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
