import mongoose from 'mongoose';

const schemaUser = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    rol :{
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    createAt:{
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('User', schemaUser); 
