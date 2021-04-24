import React, { useState, useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import GlobalContext from '../../../contexts/GlobalContext';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [19, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
};

const IncomeBySource = () => {
  const [labels, setLables] = useState([]);
  console.log(labels.length);
  const { DemoIncome } = useContext(GlobalContext);
  const incomeSourceLabels = DemoIncome.map((income) => income.income_source);
  setLables(incomeSourceLabels);
  (
    <>
      <div className="header">
        <h1 className="title">Income By Source</h1>
      </div>
      <Pie data={data} />
    </>
  );
};

export default IncomeBySource;
