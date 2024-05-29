import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProfileScreen, SettingsScreen} from '../screens';
import {HamburguerMenu} from '../components/shared/HamburguerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <>
      <HamburguerMenu />
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
};
