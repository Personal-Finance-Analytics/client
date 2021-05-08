export default function useIncomeByType(incomeData) {
  // Get array of unique income source and amount in alphabetical order
  const unique = (value, index, self) => self.indexOf(value) === index;
  const categorisedData = incomeData.map((inc) => [inc.income_type, inc.amount_nzd]).filter(unique).sort();
  //   console.log(categorisedData);

  // Get acumulated income for each category
  let accumulatedData = [];
  categorisedData.forEach((income) => {
    const incomeType = income[0];
    const amountNzd = parseFloat(Number.parseFloat(income[1]).toFixed(2));
    const currCategories = accumulatedData.map((transaction) => Object.values(transaction)[0]);
    // console.log(currCategories);

    // If accumulatedData has nothing, add item in it
    // Else if income type already exists, simply add amount
    // Else, add new type then populate amount

    if (accumulatedData.length === 0) {
      //   console.log(`Empty, now adding ${incomeType}`);
      accumulatedData[0] = { source: incomeType, amount: amountNzd };
    } else if (currCategories.includes(incomeType)) {
      //   console.log(`${incomeType} already exists`);
      const target = accumulatedData.find((obj) => obj.source === incomeType);
      //   console.log(`target: ${target}`);
      target.amount += amountNzd;
    } else {
      //   console.log(`${incomeType} is a new category`);
      const newCategory = { source: incomeType, amount: amountNzd };
      accumulatedData = [...accumulatedData, newCategory];
    }
  });

  // Defineing final data attributes
  const finalLabel = 'Income By Type';
  const finalLabels = accumulatedData.map((inc) => `${inc.source}: $ ${Number.parseFloat(inc.amount).toFixed(2)}`);
  const finalData = accumulatedData.map((income) => income.amount);

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
    ],

  };
  return data;
}
