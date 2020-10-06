import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Animated, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {BoxAtom} from './src/Components/ui/Atoms/BoxAtom';
import {
  CreatePasscodeContainer,
  LogInContainer,
  RegisterContainer,
  VerifyPhoneContainer,
} from './src/Containers';
import lightTheme from './src/Theme/LightTheme';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer>
        <BoxAtom flex={1} bg="backgroundFirst">
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="VerifyPhone"
              component={VerifyPhoneContainer}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="CreatePasscode"
              component={CreatePasscodeContainer}
            />
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
