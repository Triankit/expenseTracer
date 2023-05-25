import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';

function ModalScreen({
  setModalOpen,
  description,
  value,
  setDescription,
  setValue,
  setIsExpense,
  isExpense,
  updateData,
}) {
  const toggleSwitch = () => setIsExpense(previousState => !previousState);
  return (
    <TouchableOpacity
      style={styles.modalContainer}
      activeOpacity={1}
      onPress={() => setModalOpen(false)}>
      <View style={styles.modalContent}>
        <View style={styles.viewContainer}>
          <View style={styles.descriptionView}>
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={description}
              onChangeText={text => setDescription(text)}
            />
          </View>
          <View style={styles.expenseView}>
            <TextInput
              style={styles.input}
              placeholder="Value"
              value={value}
              onChangeText={text => setValue(text)}
            />
          </View>
        </View>
        <View style={styles.switchButtonView}>
          <Switch
            trackColor={{true: '#4d9ad8', false: '#4d9ad8'}}
            thumbColor="#fff"
            value={isExpense}
            onValueChange={toggleSwitch}
          />
          <Text style={styles.switchText}>isExpense</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={updateData}>
            <Text style={styles.buttonText}>Update</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.closeButton]}
            onPress={() => setModalOpen(false)}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '100%',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    width: '95%',
  },
  viewContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  descriptionView: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#a8a6a6',
    marginRight: 10,
  },
  expenseView: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#a8a6a6',
    marginLeft: 10,
  },
  input: {
    paddingVertical: 8,
  },
  switchButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b4b0b0',
    padding: 10,
    marginVertical: 15,
    borderRadius: 5,
    width: '50%',
  },
  switchText: {
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#27ae60',
    marginHorizontal: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#e74c3c',
  },
});

export default ModalScreen;
