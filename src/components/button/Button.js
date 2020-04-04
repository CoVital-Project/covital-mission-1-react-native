import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ThemeButton = ({ text, onPress, variant }) => {
    const conditionalOnPress = () => variant !== 'disabled' && onPress();

    return (
        // eslint-disable-next-line react/jsx-no-bind
        <TouchableOpacity onPress={ conditionalOnPress } style={ { ...styles.button, ...styles[variant] } }>
            <Text style={ styles[`${variant}Text`] }>{text}</Text>
        </TouchableOpacity>
    );
};

ThemeButton.defaultProps = {
    variant: 'main',
};

ThemeButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['main', 'secondary', 'disabled']),
};

export default ThemeButton;
