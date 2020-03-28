import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ThemeButton = ({ text, onPress }) => (
    <TouchableOpacity style={ {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    } } onPress={ onPress }>
        <Text>{text}</Text>
    </TouchableOpacity>
);

export default ThemeButton;
