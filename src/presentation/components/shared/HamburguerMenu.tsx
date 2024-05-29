import {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Ion from 'react-native-vector-icons/Ionicons';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Ion name="menu-outline" size={32} style={{color: '#000'}} />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
