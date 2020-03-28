import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PlaceholderPage from '../pages/placeholder';
import OtherPage from '../pages/other-page';

const PlaceholderStack = createStackNavigator();

const Navigation = () => (
    <NavigationContainer>
        <PlaceholderStack.Navigator>
            <PlaceholderStack.Screen name="Placeholder" component={ PlaceholderPage } />
            <PlaceholderStack.Screen name="Other" component={ OtherPage } />
        </PlaceholderStack.Navigator>
    </NavigationContainer>
);

export default Navigation;
