const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
  type: { 
    type: String, 
    required: true 
 },
  category: { 
    type: String, 
    required: true 
},
   amount: {
     type: Number,
      required: true 
},
  Description: String,
  date: { 
    type: Date, 
    default: Date.now 
},

})

const todoModel = mongoose.model('expense ',todoSchema);

module.exports = todoModel;