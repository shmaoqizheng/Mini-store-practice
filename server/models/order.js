var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderSchema = new Schema({
  _customer: { type : ObjectId, ref : 'Customer' },
  _product: { type : ObjectId, ref : 'Product' },
  quantity: Number,
}, {timestamps: true});
module.exports = mongoose.model("Order", OrderSchema);
