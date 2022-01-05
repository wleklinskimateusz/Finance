import {Category} from "./Category";

export type Expense = {
    id: string,
    name: string,
    categoryId: string,
    category?: Category
    date: Date,
    cost: number
}