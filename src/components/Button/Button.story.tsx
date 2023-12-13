import React from 'react';
import {SafeAreaView} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {Button} from './Button';

storiesOf('Components/Button', module).add('Button', () => (
  <SafeAreaView
    style={{
      backgroundColor: 'lightgrey',
      flex: 1,
      paddingHorizontal: 32,
      paddingVertical: 32,
    }}>
    <Button text="Sign In" />
  </SafeAreaView>
));
