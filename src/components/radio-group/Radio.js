import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

import Checkmark from './Checkmark';

const Radio = ({ text, onPress, active }) => (
    <TouchableOpacity onPress={ onPress } style={ { ...styles.radio, ...styles[active ? 'picked' : 'unpicked'] } }>
        <View style={ styles.radioContentContainer }>
            <View style={ styles.radioTextContainer }>
                <Text style={ { ...styles.text, ...styles[`${active ? 'picked' : 'unpicked'}Text`] } }>{text}</Text>
            </View>
            { active && <Checkmark width={ 17 } height={ 17 } color="#fff" /> }
        </View>
    </TouchableOpacity>
);

Radio.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
};

export default Radio;
