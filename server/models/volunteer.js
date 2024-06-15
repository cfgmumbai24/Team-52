import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        //can be validated
        type:String,
        required:true
    
    },
    password:{
        type:String,
        required:true
    },
    taluka:{
        type:String
    },
    beneficiariesConnected:{
        type:Number,
        default:0
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }

})

const Volunteer = mongoose.models.Volunteer || mongoose.model('Volunteer',volunteerSchema);
export default Volunteer;
