import IncomeByType from "../components/IncomeByType";
import ComposedChart from "../components/ComposedChart";
import IncomeBySource from "../components/IncomeBySource";
import MonthlyIncomeExpenses from "../components/MonthlyIncomeExpenses";

const DemoHomePage = () => {
  return (
    <>
      <h5>DemoHomePage</h5>
      <ComposedChart />
      <IncomeByType />
      <IncomeBySource />
      <MonthlyIncomeExpenses />
    </>
  );
};
export default DemoHomePage;
