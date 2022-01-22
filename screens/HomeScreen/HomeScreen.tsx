

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { Image } from 'react-native';
import styles from './styles';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={{uri=""}} /> */}
    </View>
  );
}


