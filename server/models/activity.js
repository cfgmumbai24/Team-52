import mongoose from 'mongoose';
import Volunteer from './volunteer'

const activitySchema = new mongoose.Schema({
    volunteerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: Volunteer,
        required:true
    },
    curDate:{
        default:Date.now
    },
    places:{
        type:[String],
        required:true
    },
    comment:{
        type:String
    }

    

    
})

const Activity = mongoose.models.Activity || mongoose.model('Activity',activitySchema);
export default Activity;