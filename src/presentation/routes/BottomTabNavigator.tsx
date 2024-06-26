import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens';
import {globalColors} from '../theme/theme';
import {TopTabNavigator} from './TopTabNavigator';
import {StackNavigator} from './StackNavigator';
import {IonIcon} from '../components/shared';

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
          tabBarIcon: ({color}) => (
            <IonIcon
              color={globalColors.primary}
              name="accessibility-outline"
            />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab 2',
          tabBarIcon: ({color}) => (
            <IonIcon color={globalColors.primary} name="airplane-outline" />
          ),
        }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab 3',
          tabBarIcon: ({color}) => (
            <IonIcon color={globalColors.primary} name="alarm-outline" />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
