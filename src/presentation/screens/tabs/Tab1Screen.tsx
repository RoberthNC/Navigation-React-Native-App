import {Text, View} from 'react-native';
import {HamburguerMenu} from '../../components/shared';
import {IonIcon} from '../../components/shared';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburguerMenu />
      <Text style={{color: '#000'}}>Tab1Screen</Text>
      <IonIcon name="rocket-outline" size={25} />
    </View>
  );
};
