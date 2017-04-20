var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CustomerSchema = new Schema({
  name: String
}, {timestamps: true});

module.exports = mongoose.model("Customer", CustomerSchema);
