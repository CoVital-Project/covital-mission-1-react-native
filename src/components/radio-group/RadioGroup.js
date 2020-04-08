import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Radio from './Radio';
import styles from './styles';

const RadioGroup = ({ choices, defaultChoice, onChange }) => {
    const [currentChoice, setChoice] = useState(!defaultChoice ? -1 : defaultChoice);

    const pressFunction = (index) => {
        const newChoice = currentChoice === index ? -1 : index;

        onChange(newChoice);
        setChoice(newChoice);
    };

    return (
        <View style={ { ...styles.container, ...{ height: choices.length * 60 } } }>
            {
                choices.map((choice, index) => (
                    <Radio
                        key={ choice }
                        text={ choice }
                        onPress={ () => pressFunction(index) }
                        active={ currentChoice === index } />
                ))
            }
        </View>
    );
};

RadioGroup.propTypes = {
    choices: PropTypes.array.isRequired,
    defaultChoice: PropTypes.number,
    onChange: PropTypes.func.isRequired,
};

export default RadioGroup;
