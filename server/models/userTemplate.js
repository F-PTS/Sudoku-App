import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    ID: String,
    email: String,
    username: String,
    password: String,
    games: [String]
});

const User = mongoose.model('User', userSchema);

export default User;