import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen, Tab2Screen, Tab3Screen} from '../screens';
import {globalColors} from '../theme/theme';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        // headerShown: false
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab 1',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab1</Text>,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab 2',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab2</Text>,
        }}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab 3',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab3</Text>,
        }}
        component={Tab3Screen}
      />
    </Tab.Navigator>
  );
};
