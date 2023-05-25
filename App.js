import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import NewTransaction from './components/newTransaction';
import TransactionHistory from './components/transactionHistory';
import TotalTransaction from './components/totalTransaction';
import {Calculation} from './data/calculation';
import ModalScreen from './components/ModalScreen';
import {useSelector, useDispatch} from 'react-redux';
import {addNew, editExistedData} from './store/slice';

export default function App() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [dataId, setDataId] = useState(0);

  const reduxData = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    Calculation(reduxData, setIncome, setExpense, setBalance);
  }, [reduxData]);

  function addData() {
    dispatch(
      addNew(
        isExpense
          ? {description: description, expense: value}
          : {description: description, income: value},
      ),
    );
    setValue('');
    setDescription('');
  }

  function clearData() {
    setValue('');
    setDescription('');
    setIsExpense(true);
  }

  function editData(id) {
    setModalOpen(true);
    setDataId(id);
    const index = reduxData.findIndex(item => item.id === id);
    setDescription(reduxData[index].description);
    setValue(
      String(
        reduxData[index].income
          ? reduxData[index].income
          : reduxData[index].expense,
      ),
    );

    reduxData[index].expense ? setIsExpense(true) : setIsExpense(false);
  }

  function updateData() {
    isExpense
      ? dispatch(
          editExistedData({
            id: dataId,
            description: description,
            expense: value,
          }),
        )
      : dispatch(
          editExistedData({
            id: dataId,
            description: description,
            income: value,
          }),
        );
    setModalOpen(false);
    setDescription('');
    setValue('');
  }

  return (
    <>
      <View style={styles.headerContainer}>
        <Modal animationType="slide" visible={isModalOpen} transparent={true}>
          <View style={styles.modalContainer}>
            <ModalScreen
              setModalOpen={setModalOpen}
              setDescription={setDescription}
              setValue={setValue}
              setIsExpense={setIsExpense}
              isExpense={isExpense}
              value={value}
              description={description}
              updateData={updateData}
            />
          </View>
        </Modal>

        <Text style={styles.headerText}>
          <Icon name="wallet" size={24} color="#10d313" /> Budget
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.balanceContainer}>
          <Text style={styles.textTitle}>Your Balance</Text>
          <Text style={styles.numberTitle}>{balance}</Text>
        </View>
        <TotalTransaction income={income} expense={expense} />
        <NewTransaction
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
          isExpense={isExpense}
          addData={addData}
          value={value}
          description={description}
          clearData={clearData}
        />
      </View>

      <View enabled={true} style={styles.contentContainer}>
        <View>
          <Text style={[styles.textTitle, styles.sizeText]}>History</Text>
        </View>
        {reduxData.length ? (
          <TransactionHistory data={reduxData} editData={editData} />
        ) : (
          <View style={styles.emptyContainer}>
            <Icon
              name="alert-circle"
              size={24}
              color="#FF6347"
              style={styles.alertIcon}
            />
            <Text style={styles.alertText}>You don't have any entries yet</Text>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FF', // Updated background color
  },
  headerContainer: {
    backgroundColor: '#36729d', // Updated background color
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    marginTop: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333', // Updated color
  },
  numberTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#333333', // Updated color
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertIcon: {
    marginBottom: 10,
  },
  alertText: {
    fontSize: 16,
    color: '#e20a0a',
    textAlign: 'center',
  },
  balanceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sizeText: {
    fontSize: 16,
  },
});
