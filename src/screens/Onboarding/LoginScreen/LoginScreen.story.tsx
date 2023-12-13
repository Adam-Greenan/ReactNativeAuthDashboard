import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StorybookSafeArea} from 'storybook/StorybookSafeArea';
import {LoginScreen} from './LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

storiesOf('Screens', module).add('LoginScreen', () => (
  <StorybookSafeArea>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </StorybookSafeArea>
));
