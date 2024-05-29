import {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Ion from 'react-native-vector-icons/Ionicons';
import {IonIcon} from './IonIcon';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <IonIcon name="menu-outline" size={32} />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
