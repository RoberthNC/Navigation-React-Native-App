import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabNavigator,
  SideMenuNavigator,
  StackNavigator,
} from './presentation/routes';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
};
