import { useGetExpenses } from "./useGetExpenses";

export function useGetExpense(expenseId) {
    const expenses = useGetExpenses();
    
    return expenses.find(element => element.number === parseInt(expenseId));
    
    
    
}