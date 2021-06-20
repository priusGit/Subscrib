import {
  StyleSheet,
  Text, Pressable,
} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  filter: {
    fontSize: 15,
    color: 'white',
  },
  FilterButton: {
    backgroundColor: 'black',
    paddingHorizontal: 14,
    paddingVertical: 5,
    width: 93,
    borderRadius: 50,
    flexDirection: 'row',
  },
  filterIco: {
    justifyContent: 'center',
  },
})
const Filter = () => (
  <Pressable style={styles.FilterButton}>
    <Text style={styles.filter}>
      <MaterialCommunityIcons style={styles.filterIco} name="filter" size={15} color="white" />
      {'  '}
      Filtruj
    </Text>
  </Pressable>
)

export default Filter
