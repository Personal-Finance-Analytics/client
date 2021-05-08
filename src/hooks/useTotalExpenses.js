export default function useTotalExpenses(expensesData) {
  const arrOfExpenses = expensesData.map((inc) => inc.amount_nzd * 1);
  const totalExpenses = arrOfExpenses.reduce((a, b) => a + b, 0);
  return totalExpenses;
}
