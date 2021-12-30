import {useFetch} from "../Hooks/useFetch";

export function useGetExpenses() {
    return useFetch("http://localhost:3001/api/expenses")

}