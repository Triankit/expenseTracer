export function Calculation(data, setIncome, setExpense, setBalance) {
  let income = 0;
  let expense = 0;
  data.map(item =>
    item.expense
      ? (expense += Number(item.expense))
      : (income += Number(item.income)),
  );
  setBalance(income - expense);
  setExpense(expense);
  setIncome(income);
}
