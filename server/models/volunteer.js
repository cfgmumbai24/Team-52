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
    }

    
})

const Volunteer = mongoose.models.Volunteer || mongoose.model('Volunteer',volunteerSchema);
export default Volunteer;
