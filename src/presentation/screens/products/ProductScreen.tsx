import {useEffect} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: params.name});
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={{color: 'black'}}>Product Screen</Text>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          marginTop: 20,
          textAlign: 'center',
        }}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
