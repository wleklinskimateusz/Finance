const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
const dotenv = require('dotenv')
dotenv.config();
const Expense = require('./models/expense')
// const Category = require('./models/category')


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


const PORT = process.env.PORT;

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

app.post('/api/expenses/new', (request, response) => {
    const body = request.body
    if (body.name === undefined || body.categoryId === undefined || body.date === undefined) {
        return response.status(400).json({error: 'Something is missing'})
    }

    const expense = new Expense({
        name: body.name,
        categoryId: body.categoryId,
        date: new Date(body.date)
    })

    expense.save().then(savedExpense => {
        response.json(savedExpense)
    })
})

app.listen(3001, () => {
    console.log(`Server Running on port: ${PORT}`);
})