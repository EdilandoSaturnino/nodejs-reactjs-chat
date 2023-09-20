const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    secret: String,
    first_name: String
});
const User = mongoose.model('User', userSchema);

const messageSchema = new mongoose.Schema({
    username: String,
    text: String,
    timestamp: Date
});
const Message = mongoose.model('Message', messageSchema);

module.exports = {
    User,
    Message
};
