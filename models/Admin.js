const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
});

module.exports = Admin = mongoose.model('admin', AdminSchema);
