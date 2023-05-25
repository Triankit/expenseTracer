/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, FlatList, StyleSheet, Pressable} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {deleteExpense} from '../store/slice';

function TransactionHistory({data, editData}) {
  const dispatch = useDispatch();
  return (
    <View style={styles.viewContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <View
                style={[
                  styles.items,
                  {
                    borderTopColor: item.expense ? 'red' : 'green',
                    borderTopWidth: 2,
                  },
                ]}>
                <Text style={{width: '60%'}}>{item.description}</Text>
                <Text style={{width: '20%'}}>
                  {item.expense ? item.expense : item.income}
                </Text>
                <Pressable onPress={() => editData(item.id)}>
                  <Ionicons name="create-outline" style={styles.icons} />
                </Pressable>
                <Pressable onPress={() => dispatch(deleteExpense(item))}>
                  <Ionicons name="trash-outline" style={styles.icons} />
                </Pressable>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

export default TransactionHistory;

const styles = StyleSheet.create({
  items: {
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    padding: 18,
    borderColor: '#b4b0b0',
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 5,
  },
  icons: {
    fontSize: 20,
  },
  viewContainer: {
    marginTop: 20,
  },
});
