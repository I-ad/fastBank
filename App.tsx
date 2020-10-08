import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {AppProvider} from './src/AppContext';
import {BoxAtom} from './src/Components/ui/Atoms/BoxAtom';
import {
  AddressContainer,
  CreatePasscodeContainer,
  LogInContainer,
  PersonalInfoContainer,
  RegisterContainer,
  VerifyPhoneContainer,
} from './src/Containers';
import AccountCreatedScreen from './src/screens/AccountCreatedScreen';
import lightTheme from './src/Theme/LightTheme';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
  return (
    <AppProvider>
      <ThemeProvider theme={lightTheme}>
        <NavigationContainer>
          <BoxAtom flex={1} bg="backgroundFirst">
            <Stack.Navigator>
              <Stack.Screen
                options={{headerShown: false}}
                name="AccountCreated"
                component={AccountCreatedScreen}
              />
              <Stack.Screen
                name="Address"
                component={AddressContainer}
                options={{headerShown: false}}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Register"
                component={RegisterContainer}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="PersonalInfo"
                component={PersonalInfoContainer}
              />
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
                name="Login"
                component={LogInContainer}
              />
            </Stack.Navigator>
          </BoxAtom>
        </NavigationContainer>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
