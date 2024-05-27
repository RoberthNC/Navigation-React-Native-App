import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SideMenuNavigator, StackNavigator} from './presentation/routes';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
    </NavigationContainer>
  );
};
