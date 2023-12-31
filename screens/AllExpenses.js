import React, { useContext } from "react";
import { Text, View } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No expenses registers found"
    />
  );
};

export default AllExpenses;
