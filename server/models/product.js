var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ProductSchema = new Schema({
  name: String,
  imageUrl: String,
  description: String,
  quantity: { type: Number, default: 50 }
}, {timestamps: true});
module.exports = mongoose.model("Product", ProductSchema);
