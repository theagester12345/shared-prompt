import {Schema, model, models} from 'mongoose';

const UserSchema = new Schema({
    email:{
        type:String,
        required:[true,'Please Provide Email.'],
        unique: [true, 'Email Already Exist.']
    },
    username:{
        type:String,
        required:[true,'Please Provide a Username.'],
        unique:[true,'Username must be unique.']
    },
    image:{
        type:String,
    }

})

const User = models.User || model('User',UserSchema);

export default User;