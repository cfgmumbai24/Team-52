import mongoose from 'mongoose';
import Livestock from "./livestock"

const benificiarySchema = new mongoose.Schema({
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
    policy:{
        num:{
            type:Number,
            required:true
            
        },
        from:{
            type:Date,
            required:true
        },
        to:{
            type:Date,
            required:true
        }
    },
    address:{
        type:String,
        required:true
    },
    livestockOwned:[{type:mongoose.Schema.Types.ObjectId,ref: Livestock} ] 

    //AADHAR AND RATION CARD YET TO BE ADDED




    

})
const Benificiary = mongoose.models.Benificiary || mongoose.model('Benificiary',benificiarySchema);
export default Benificiary;