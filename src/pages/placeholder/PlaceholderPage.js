import React from 'react';
import { View, Text } from 'react-native';

import components from '../../components';

const { Button } = components;

import styles from './style';

const PlaceholderPage = ({ navigation }) => (
    <View style={ styles.container }>
        <Text>Test</Text>
        <View style={ { width: '90%', marginTop: 10 } }>
            <Button text="Go to other page" onPress={ () => navigation.navigate('Other') } />
        </View>
    </View>
);

export default PlaceholderPage;
