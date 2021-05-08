export default function useTotalIncome(incomeData) {
  const arrOfIncome = incomeData.map((inc) => inc.amount_nzd * 1);
  const totalIncome = arrOfIncome.reduce((a, b) => a + b, 0);
  return totalIncome;
}
