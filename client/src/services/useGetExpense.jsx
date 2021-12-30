import {useFetch} from "../Hooks/useFetch";

export function useGetExpense(expenseId) {
    return useFetch(`http://localhost:3001/api/expenses/${expenseId}`)

}