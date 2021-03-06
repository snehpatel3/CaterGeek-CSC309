var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db15');

/*
Type:
  1 - User
  2 - Caterer
  3 - Admin

*/

var accountSchema = new mongoose.Schema({
  type: Number, 
  username: String,
  password: String,
  aboutMe: String,
  displayname: String,
  image: String, 
  catererProfile: {
    priceRangeLower: Number,
    priceRangeUpper: Number, 
    tags: [String],
    orders: [Number],
    rating: [Number],
    avgrating: Number,
    speciality: [String],
    address: String,
    reviews: [String]
  },
  userProfile: {
    follows: [String], 
    favs: [String], 
  },

});

module.exports = mongoose.model('Account', accountSchema);