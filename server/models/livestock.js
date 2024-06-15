import mongoose from 'mongoose';
import Beneficiary from './beneficiary';

const livestockSchema = new mongoose.Schema({
    tag:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    //martality date also empty
    mortalityDate:{
        type:Date,
        
    },
    vaccinationStatus:{
        type:bool,
        required:true
    },
    pregnancyStatus:{
        type:bool,//preg type bool
        required:true

    },
    soldStatus:{
        type:bool,
        default:false
    },
    dateOfDistribution:{
        type:Date,
        required:true
    },
    beneficiaryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Beneficiary',
        required:true
    }

    
})

const Livestock = mongoose.models.Livestock || mongoose.model('Livestock',livestockSchema);
export default Livestock;