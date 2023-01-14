import { lowerCase } from "lodash";
import mongoose from "mongoose";

const {Schema, model} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        minlength: 10,
        required: true,
        lowerCase: true
    }
});
//hdskksks
const User = model("User", userSchema);
export default User;