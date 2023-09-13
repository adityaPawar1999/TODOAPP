const mongoose = require('mongoose'); // Erase if already required

var taskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
});
//Export the model
module.exports = mongoose.model('task', taskSchema);