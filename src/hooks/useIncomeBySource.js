export default function useIncomeBySource(incomeData) {
  // Get array of income source and amount in alphabetical order
  const unique = (value, index, self) => self.indexOf(value) === index;
  const categorisedData = incomeData.map((inc) => [inc.income_source, inc.amount_nzd]).filter(unique).sort();

  // Get acumulated income for each category
  let accumulatedData = [];
  categorisedData.forEach((income) => {
    const incomeSource = income[0];
    const amountNzd = income[1];
    const currCategories = accumulatedData.map((transaction) => Object.values(transaction)[0]);

    // If accumulatedData has nothing, add item in it
    // Else if income category already exists, simply add amount
    // Else, add new category then populate amount

    if (accumulatedData.length === 0) {
      accumulatedData[0] = { source: incomeSource, amount: amountNzd };
    } else if (currCategories.includes(incomeSource)) {
      const target = accumulatedData.find((obj) => obj.source === incomeSource);
      target.amount += amountNzd;
    } else {
      const newCategory = { source: incomeSource, amount: amountNzd };
      accumulatedData = [...accumulatedData, newCategory];
    }
  });

  // Defineing final data attributes
  const finalLabel = 'Income By Source';
  const finalLabels = accumulatedData.map((income) => income.source);
  const finalData = accumulatedData.map((income) => income.amount);

  // Finalising data format to be exported to chart
  const data = {
    labels: finalLabels,
    datasets: [
      {
        label: finalLabel,
        data: finalData,
        borderWidth: 1,
        height: 600
      }
    ]
  };
  return data;
}
