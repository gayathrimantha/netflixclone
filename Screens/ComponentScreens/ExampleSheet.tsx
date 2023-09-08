import { StyleSheet, Text, View } from 'react-native'
import ActionSheet, { SheetProps } from "react-native-actions-sheet";
import React from 'react'

const ExampleSheet = (props: SheetProps) => {
  return (
    <ActionSheet id={props.sheetId}>
    <View>
      <Text>Hello World</Text>
    </View>
  </ActionSheet>
  )
}

export default ExampleSheet

const styles = StyleSheet.create({})