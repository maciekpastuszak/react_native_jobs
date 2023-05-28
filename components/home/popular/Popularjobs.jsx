import { useState } from 'react'
import { View, Text, ToouchableOpacity, Flatlist, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router';
import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobsCard from '../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
const router = useRouter();

  return (
    <View>
      <Text>Popularjobs</Text>
    </View>
  )
}

export default Popularjobs