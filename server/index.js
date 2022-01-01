const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
const dotenv = require('dotenv')
dotenv.config();
const Expense = require('./models/expense')
const Category = require('./models/category')

const PORT = process.env.PORT;

app.get('/api/expenses', (request, response) => {
    Expense.find({}).then(expenses => {
        response.json(expenses)
    })
})
app.get('/api/expenses/:id', (request, response) => {
    Expense.findById(request.params.id)
        .then(expense => {
            if (expense) {
                response.json(expense)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => {
            console.log(error)
            response.status(500).end()
        })
    
})

app.post('/api/expenses/new', (request, response) => {
    const body = request.body
    console.log(body)
    if (body.name === undefined || body.category === undefined || body.date === undefined) {
        return response.status(400).json({error: 'Something is missing'})
    }

    const expense = new Expense({
        name: body.name,
        categoryId: body.category,
        date: new Date(body.date),
        cost: body.cost
    })

    expense.save()
        .then(savedExpense => {
        response.json(savedExpense)
    })
})

app.get('/api/categories', (request, response) => {
    Category.find({}).then(categories => {
        response.json(categories)
    })
})
app.get('/api/categories/:id', (request, response) => {
    Category.findById(request.params.id)
        .then(category => {
            if (category) {
                response.json(category)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => {
            console.log(error)
            response.status(500).end()
        })
    
})

app.post('/api/categories/new', (request, response) => {
    const body = request.body
    console.log(request)
    if (body.name === undefined) {
        return response.status(400).json({
            error: 'Something is missing',
            request: body
        })
    }

    const category = new Category({
        name: body.name
    })

    category.save()
        .then(savedCategory => {
        response.json(savedCategory)
    })
})

app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`);
})