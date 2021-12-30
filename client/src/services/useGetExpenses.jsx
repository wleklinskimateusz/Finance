export function useGetExpenses() {
    return [
        {
            id: 0,
            name: "Żabka",
            date: (new Date(2021, 12, 9)).toLocaleDateString(),
            category: "Groceries",
            cost: 24.34

        },
        {
            id: 1,
            name: "Biedra",
            date: (new Date(2021, 12, 7)).toLocaleDateString(),
            category: "Groceries",
            cost: 29.34

        },
        {
            id: 2,
            name: "Krakus",
            date: (new Date(2021, 12, 21)).toLocaleDateString(),
            category: "Diner",
            cost: 16.28
        }

    ]
}