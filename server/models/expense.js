const mongoose = require('../db')

const expenseSchema = new mongoose.Schema({
    name: String,
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    date: Date,
    cost: Number
})

expenseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Expense', expenseSchema)