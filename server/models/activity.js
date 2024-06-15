import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
    volunteerId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    curDate:{
        default:Date.now
    },
    places:{
        type:[String],
        required:true
    }

    

    
})

const Activity = mongoose.models.Activity || mongoose.model('Activity',activitySchema);
export default Activity;