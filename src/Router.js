import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Home from './Pages/Home';
import CreateDiet from './Pages/CreateDiet';
import Report from './Pages/Reports';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Router = () => {


    return (

        <NavigationContainer>
            <Tab.Navigator screenOptions={{ tabBarLabelPosition: 'beside-icon', tabBarLabelStyle: { fontSize: 20 } }}>
                <Tab.Screen name="Home" component={Home} options={{ headerTitle: 'Diet Programs' }} />
                <Tab.Screen name="CreateDiet" component={CreateDiet} options={{ headerTitle: 'Create Diet' }} />
                <Tab.Screen name="Report" component={Report} options={{ headerTitle: 'Reports' }} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default Router
