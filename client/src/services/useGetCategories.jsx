
import {useFetch} from "../Hooks/useFetch";

export function useGetCategories() {
    return useFetch("http://localhost:3002/api/categories")


}