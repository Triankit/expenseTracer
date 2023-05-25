/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NewTransaction({
  setDescription,
  setValue,
  setIsExpense,
  isExpense,
  addData,
  description,
  value,
  clearData,
}) {
  const toggleSwitch = () => setIsExpense(previousState => !previousState);

  return (
    <Fragment>
      <View>
        <Text style={styles.textTitle}>Add new transaction</Text>
      </View>
      <View style={styles.transaction}>
        <View style={styles.inputContainer}>
          <Icon
            name="md-create-outline"
            size={20}
            color="#1780d6"
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Description"
            value={description}
            onChangeText={item => setDescription(item)}
          />
        </View>
        <View style={[styles.inputContainer, styles.valueInputContainer]}>
          <Icon
            name="md-cash-outline"
            size={20}
            color="#1780d6"
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Value"
            value={value}
            onChangeText={item => setValue(item)}
            keyboardType="number-pad"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.toggleContainer}>
          <Switch
            trackColor={{true: '#4d9ad8', false: '#4d9ad8'}}
            value={isExpense}
            onValueChange={toggleSwitch}
          />
          <Text style={styles.switchText}>isExpense</Text>
        </View>
        <View style={styles.buttonGroup}>
          <Pressable
            style={[styles.button, styles.clearButton]}
            onPress={clearData}>
            <Text style={styles.buttonText}>Clear</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.addButton]}
            onPress={addData}
            disabled={!(description && value)}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    marginHorizontal: 10,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  transaction: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 10,
    borderBottomWidth: 0.3,
    borderColor: '#b4b0b0',
    borderRadius: 3,
    width: '55%',
  },
  valueInputContainer: {
    width: '45%',
  },
  icon: {
    marginLeft: 8,
  },
  textInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 15,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  switchText: {
    marginLeft: 8,
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    borderWidth: 0.3,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    backgroundColor: '#1780d6',
  },
  clearButton: {
    backgroundColor: '#e74c3c',
  },
  addButton: {
    backgroundColor: '#27ae60',
  },
  buttonText: {
    color: 'white',
  },
});
