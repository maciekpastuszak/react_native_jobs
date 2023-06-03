import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style';
import { SIZES } from '../../../constants';

const TabButton = () => (
<TouchableOpacity></TouchableOpacity>
)

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={tabs}
        renderItem={({item}) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
      />
    </View>
  )
}

export default Tabs