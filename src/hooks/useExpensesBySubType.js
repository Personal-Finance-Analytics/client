export default function useExpensesBySubType(expensesData) {
  // Get array of unique expense type and amount in alphabetical order
  const unique = (value, index, self) => self.indexOf(value) === index;
  const categorisedData = expensesData.map((exp) => [exp.sub_type, exp.amount_nzd]).filter(unique).sort();
  //   console.log(categorisedData);

  // Get acumulated expense for each category
  let accumulatedData = [];
  categorisedData.forEach((exp) => {
    const expensesType = exp[0];
    const amountNzd = parseFloat(Number.parseFloat(exp[1]).toFixed(2));
    const currCategories = accumulatedData.map((transaction) => Object.values(transaction)[0]);
    // console.log(currCategories);

    // If accumulatedData has nothing, add item in it
    // Else if exp sub-type already exists, simply add amount
    // Else, add new type then populate amount

    if (accumulatedData.length === 0) {
      //   console.log(`Empty, now adding ${expensesType}`);
      accumulatedData[0] = { source: expensesType, amount: amountNzd };
    } else if (currCategories.includes(expensesType)) {
      //   console.log(`${expensesType} already exists`);
      const target = accumulatedData.find((obj) => obj.source === expensesType);
      //   console.log(`target: ${target}`);
      target.amount += amountNzd;
    } else {
      //   console.log(`${expensesType} is a new category`);
      const newCategory = { source: expensesType, amount: amountNzd };
      accumulatedData = [...accumulatedData, newCategory];
    }
  });

  // Defineing final data attributes
  const finalLabel = 'exp By Type';
  const finalLabels = accumulatedData.map((exp) => `${exp.source}: $ ${Number.parseFloat(exp.amount).toFixed(2)}`);
  const finalData = accumulatedData.map((exp) => exp.amount);

  // Finalising data format to be exported to chart
  const data = {
    labels: finalLabels,
    datasets: [
      {
        label: finalLabel,
        data: finalData,
        borderWidth: 1,
        height: 700
      }
    ]
  };
  return data;
}
