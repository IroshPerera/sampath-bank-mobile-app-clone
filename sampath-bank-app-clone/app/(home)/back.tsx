import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router'

export default function back() {

  useEffect(() => {
    router.back()
  }
  , [])

  return (
    <View>
      <Text>back</Text>
    </View>
  )
}