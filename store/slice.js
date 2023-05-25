import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const data = createSlice({
  name: 'ModifyData',
  initialState,
  reducers: {
    addNew: (state, {payload}) => {
      const newItem = payload.income
        ? {
            id: state.length + 1,
            description: payload.description,
            income: payload.income,
          }
        : {
            id: state.length + 1,
            description: payload.description,
            expense: payload.expense,
          };
      state.push(newItem);
    },
    deleteExpense: (state, {payload}) => {
      const newDataIndex = state.findIndex(item => item.id === payload.id);
      state.splice(newDataIndex, 1);
    },
    editExistedData: (state, {payload}) => {
      const editedDataIndex = state.findIndex(item => item.id === payload.id);
      if (state[editedDataIndex].hasOwnProperty('income')) {
        payload.expense
          ? ((state[editedDataIndex].description = payload.description),
            (state[editedDataIndex].expense = payload.expense),
            delete state[editedDataIndex].income)
          : ((state[editedDataIndex].description = payload.description),
            (state[editedDataIndex].income = payload.income));
      } else {
        payload.income
          ? ((state[editedDataIndex].description = payload.description),
            (state[editedDataIndex].income = payload.income),
            delete state[editedDataIndex].expense)
          : ((state[editedDataIndex].description = payload.description),
            (state[editedDataIndex].expense = payload.expense));
      }
    },
  },
});

export const {addNew, deleteExpense, editExistedData} = data.actions;
export default data.reducer;
