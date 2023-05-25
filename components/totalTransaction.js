/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TotalTransaction({income, expense}) {
  return (
    <View style={styles.container}>
      <View style={[styles.insideContainer, styles.incomeContainer]}>
        <Text style={[styles.textContainer, styles.incomeText]}>INCOME</Text>
        <Text>{income}</Text>
      </View>
      <View style={[styles.insideContainer, styles.expenseContainer]}>
        <Text style={[styles.textContainer, styles.expenseText]}>EXPENSES</Text>
        <Text>{expense}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  insideContainer: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 0.3,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  incomeContainer: {
    marginRight: 5,
  },
  expenseContainer: {
    marginLeft: 5,
  },
  textContainer: {
    marginBottom: 5,
  },
  incomeText: {
    color: 'green',
  },
  expenseText: {
    color: 'red',
  },
});

export default TotalTransaction;
