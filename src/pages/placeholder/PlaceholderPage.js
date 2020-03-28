import React from 'react';
import { View, Text } from 'react-native';

import components from '../../components';

const { Button } = components;

import styles from './style';

const PlaceholderPage = ({ navigation }) => (
    <View style={ styles.container }>
        <Text>Test</Text>
        <Button text="Go to other page" onPress={ () => navigation.navigate('Other') } />
    </View>
);

export default PlaceholderPage;
