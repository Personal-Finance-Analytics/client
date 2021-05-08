export default function useIncomeByPaymentMethods(incomeData) {
  // Get array of income source and amount in alphabetical order
  const unique = (value, index, self) => self.indexOf(value) === index;
  const categorisedData = incomeData.map((inc) => [inc.payment_method, inc.amount_nzd]).filter(unique).sort();
  //   console.log(categorisedData);

  // Get acumulated income for each category
  let accumulatedData = [];
  categorisedData.forEach((income) => {
    const incomePaymentMethod = income[0];
    const amountNzd = income[1];
    const currCategories = accumulatedData.map((transaction) => Object.values(transaction)[0]);
    // console.log(currCategories);

    // If accumulatedData has nothing, add item in it
    // Else if income payment method already exists, simply add amount
    // Else, add new category then populate amount

    if (accumulatedData.length === 0) {
      //   console.log(`Empty, now adding ${incomePaymentMethod}`);
      accumulatedData[0] = { source: incomePaymentMethod, amount: amountNzd };
    } else if (currCategories.includes(incomePaymentMethod)) {
      //   console.log(`${incomePaymentMethod} already exists`);
      const target = accumulatedData.find((obj) => obj.source === incomePaymentMethod);
      //   console.log(`target: ${target}`);
      target.amount += amountNzd;
    } else {
      //   console.log(`${incomePaymentMethod} is a new category`);
      const newCategory = { source: incomePaymentMethod, amount: amountNzd };
      accumulatedData = [...accumulatedData, newCategory];
    }
  });

  // Defineing final data attributes
  const finalLabel = 'Income By Payment Methods';
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
