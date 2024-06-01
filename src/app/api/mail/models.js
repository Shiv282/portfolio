import mongoose from "mongoose";
const messageData = new mongoose.Schema({

    email: {
        type: String
    },
    name:{
        type: String
    },
    text: {
        type: String
    }
})
const Message = mongoose.models.Message || mongoose.model('Message',messageData);
exports.Message = Message;
