import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTyoes from 'prop-types';

const Checkmark = ({ width, height, color, ...props}) => {
    return (
        <Svg width={ width } height={ height } { ...props }>
            <Path
                d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5zM6.968 12.217L4.274 9.525a.747.747 0 111.057-1.058l2.168 2.16 5.16-5.16a.747.747 0 111.057 1.058l-5.692 5.692a.747.747 0 01-1.058 0z"
                fill={ color } />
        </Svg>
    );
}

Checkmark.propTypes = {
    width: PropTyoes.number.isRequired,
    height: PropTyoes.number.isRequired,
    color: PropTyoes.string.isRequired,
};

export default Checkmark;
