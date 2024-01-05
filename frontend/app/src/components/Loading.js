import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function Loaging() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={40} color={'#009000'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})