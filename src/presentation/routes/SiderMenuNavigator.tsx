import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {ProfileScreen} from '../screens';
import {globalColors} from '../theme/theme';
import {useWindowDimensions, View} from 'react-native';
import {BottomTabNavigator} from './BottomTabNavigator';
import {IonIcon} from '../components/shared';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 758 ? 'permanent' : 'front',
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcon color="white" name="bonfire-outline" />
          ),
        }}
        name="Tabs"
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        options={{drawerIcon: ({color}) => <IonIcon name="people-outline" />}}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          backgroundColor: globalColors.primary,
          borderRadius: 50,
          height: 200,
          margin: 30,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
