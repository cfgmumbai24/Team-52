import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createDate:{
        type:Date,
        required:true,
        default:Date.now
    }

    

    
})

const Admin = mongoose.models.Admin || mongoose.model('Admin',adminSchema);
export default Admin;