import React from 'react';
import { View, Text } from 'react-native';

import components from '../../components';

const { Button, RadioGroup } = components;

import styles from './style';

const PlaceholderPage = ({ navigation }) => (
    <View style={ styles.container }>
        <Text>Test</Text>
        <View style={ { width: '90%', marginTop: 10, flex: 1 } }>
            <Button text="Go to other page" onPress={ () => navigation.navigate('Other') } />

            <RadioGroup choices={ ['lol', 'xd'] } onChange={ (choice) => console.log('Current choice is', choice) } />
        </View>
    </View>
);

export default PlaceholderPage;
