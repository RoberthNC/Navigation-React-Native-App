import Ion from 'react-native-vector-icons/Ionicons';

interface Props {
  color?: string;
  name: string;
  size?: number;
}

export const IonIcon = ({name, size = 20, color = '#000'}: Props) => {
  return <Ion name={name} size={size} color={color} />;
};
