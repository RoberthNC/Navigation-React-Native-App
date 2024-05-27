import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        marginTop: 0,
        paddingHorizontal: 20,
      }}>
      <Text style={{color: '#000', marginBottom: 10}}>ProfileScreen</Text>
      <PrimaryButton
        label="Open Menú"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    </View>
  );
};
