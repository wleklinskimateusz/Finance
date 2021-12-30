const express = require("express");
const app = express();
const cors = require("cors");
const {response} = require("express");

app.use(express.json());
app.use(cors());

const expenses = [
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
    },
    {
        id: 3,
        name: "Żabka",
        date: (new Date(2021, 12, 9)).toLocaleDateString(),
        category: "Groceries",
        cost: 24.34

    },
    {
        id: 4,
        name: "Biedra",
        date: (new Date(2021, 12, 7)).toLocaleDateString(),
        category: "Groceries",
        cost: 29.34

    },
    {
        id: 5,
        name: "Krakus",
        date: (new Date(2021, 12, 21)).toLocaleDateString(),
        category: "Diner",
        cost: 16.28
    },
    {
        id: 6,
        name: "Żabka",
        date: (new Date(2021, 12, 9)).toLocaleDateString(),
        category: "Groceries",
        cost: 24.34

    },
    {
        id: 7,
        name: "Biedra",
        date: (new Date(2021, 12, 7)).toLocaleDateString(),
        category: "Groceries",
        cost: 29.34

    },
    {
        id: 8,
        name: "Krakus",
        date: (new Date(2021, 12, 21)).toLocaleDateString(),
        category: "Diner",
        cost: 16.28
    },
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
    },
    {
        id: 3,
        name: "Żabka",
        date: (new Date(2021, 12, 9)).toLocaleDateString(),
        category: "Groceries",
        cost: 24.34

    },
    {
        id: 4,
        name: "Biedra",
        date: (new Date(2021, 12, 7)).toLocaleDateString(),
        category: "Groceries",
        cost: 29.34

    },
    {
        id: 5,
        name: "Krakus",
        date: (new Date(2021, 12, 21)).toLocaleDateString(),
        category: "Diner",
        cost: 16.28
    },
    {
        id: 6,
        name: "Żabka",
        date: (new Date(2021, 12, 9)).toLocaleDateString(),
        category: "Groceries",
        cost: 24.34

    },
    {
        id: 7,
        name: "Biedra",
        date: (new Date(2021, 12, 7)).toLocaleDateString(),
        category: "Groceries",
        cost: 29.34

    },
    {
        id: 8,
        name: "Krakus",
        date: (new Date(2021, 12, 21)).toLocaleDateString(),
        category: "Diner",
        cost: 16.28
    }

]

// const db = require("./models")

const PORT = 3001;

app.get('/api/expenses', (request, response) => {
    response.json(expenses)
})
app.get('/api/expenses/:id', (request, response) => {
    const id = Number(request.params.id)
    const expense = expenses.find(e => e.id === id)

    if (expense) {
        response.json(expense)
    } else {
        response.status(404).end()
    }
})

app.listen(3001, () => {
    console.log(`Server Running on port: ${PORT}`);
})