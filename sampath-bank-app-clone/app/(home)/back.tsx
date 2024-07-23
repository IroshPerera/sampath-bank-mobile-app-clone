import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router'

export default function back() {

  useEffect(() => {
    router.back()
    router.push('(tab)')
  }
  , [])

  return (
    <View>
    </View>
  )
}