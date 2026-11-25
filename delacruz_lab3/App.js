import * as React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [item, setItem] = React.useState('');
  const [items, setItems] = React.useState([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setItems([...items, item]);
      setItem('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Item List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          value={item}
          onChangeText={setItem}
        />

        <View style={styles.button}>
          <Button title="ADD" onPress={addItem} />
        </View>
      </View>

      <View style={styles.listContainer}>
        {items.map((listItem, index) => (
          <Text style={styles.listItem} key={index}>
            {index + 1}. {listItem}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6dbeff',
    paddingTop: 60,
    alignItems: 'center',
  },
  head: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#2f2f2f',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  button: {
    justifyContent: 'center',
  },
  listContainer: {
    width: '80%',
    marginTop: 20,
  },
  listItem: {
    fontSize: 16,
    color: '#2f2f2f',
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 8,
    borderRadius: 5,
  },
});