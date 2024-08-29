import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; // Import from 'react-native', not 'react-native-reanimated'

export default function VdCoursePage() {
  return (
    <View style={styles.container}>
      <Text>Video Course Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
