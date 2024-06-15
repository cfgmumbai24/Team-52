import mongoose from 'mongoose';

const proposedbeneficiarySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    hamlet:{
        type:String,
        required:true
    },
    block:{
        type:String,
        required:true
    },
    dateAdded:{
        type:Date,
        required:true
    },
    
    address:{
        type:String,
        required:true
    }

    //AADHAR AND RATION CARD YET TO BE ADDED




    

})
const Proposedbenificiary = mongoose.models.Proposedbenificiary || mongoose.model('Proposedbenificiary',proposedbeneficiarySchema);
export default Proposedbenificiary;