import React from 'react';
import {SafeAreaView} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {TextInput} from './TextInput';

storiesOf('Components/TextInput', module).add('TextInput', () => (
  <SafeAreaView style={{backgroundColor: 'lightgrey', flex: 1, paddingHorizontal: 32, paddingVertical: 32}}>
    <TextInput />
  </SafeAreaView>
));
