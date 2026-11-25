import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import SampleModal from './components/SampleModal';

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Button
        title="CLICK ME"
        onPress={() => setModalVisible(true)}
      />

      <SampleModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6dbeff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});