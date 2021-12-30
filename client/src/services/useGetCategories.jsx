import {useGetExpenses} from "./useGetExpenses";

export function useGetCategories() {
    const [expenses] = useGetExpenses();
    if (expenses)
        return [...new Set(expenses.map(item => item.category))]
    else return []


}