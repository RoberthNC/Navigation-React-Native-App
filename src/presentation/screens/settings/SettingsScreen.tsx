import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{color: 'black'}}>Settings Screen</Text>
      <PrimaryButton
        label="Get Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <PrimaryButton
        label="Get Back Home"
        onPress={() => {
          navigation.dispatch(StackActions.popToTop());
        }}
      />
    </View>
  );
};
