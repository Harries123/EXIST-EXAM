const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    tododescription: { type: String, required: true },
    status: { type: String, enum: ['completed', 'ongoing'], default: 'ongoing' }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;