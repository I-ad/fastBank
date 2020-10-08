import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components';
import lightTheme from './src/Theme/LightTheme';

const AllTheProviders: React.FC = ({children}) => {
  return <ThemeProvider theme={{...lightTheme}}>{children}</ThemeProvider>;
};

const customRender = (ui: any, options?: any) =>
  render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
