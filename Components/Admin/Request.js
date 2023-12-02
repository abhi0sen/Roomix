import React from 'react'
import {View, Text, FlatList} from 'react-native'
import RequestCard from './RequestCard'
import styles from "./Styles"

const Request = () => {
  return (
    <View style={styles.Container}>
      <FlatList 
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        return <RequestCard />;
      }}
      />
    </View>
  )
}

export default Request
