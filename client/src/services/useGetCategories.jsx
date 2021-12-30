import {useGetExpenses} from "./useGetExpenses";

export function useGetCategories() {
    const expenses = useGetExpenses();

    return [...new Set(expenses.map(item => item.cols.category))]


}