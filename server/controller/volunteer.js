
import express from 'express';
import Activity from '../models/activity.js'
import Volunteer from '../models/volunteer.js';//volunteer is never being used
import Proposedbenificiary from '../models/proposedbenificiary.js';
import Livestock from '../models/livestock.js';

export const addbenificiary = async(req,res)=>{
    const beneficiary = req.body;
    if(!beneficiary){
        return res.status(400).json();
    }
    const newBenificiary = new Proposedbenificiary(req.body);
    const ben = await newBenificiary.save();
    if(ben){
        return res.status(200).json(ben);
    }
    else{

        return res.status(400).json('no data received');
    }
   
    

}
//done


export const showbeneficiary = async(req,res)=>{
    const {id} = req.params;
    const product = await Beneficiary.findById(id);
    if(product){
        return res.status(200).json(product);

    }
    else{
        return res.status(400).json('No such beneficiary found');
    }
}
//done
export const editbenificiary = async(req,res)=>{
    const {id} = req.params;
    const {tag} = req.body;
    
    
    //m/f ratio
    //mortality date
    //vaccinationStatus
    //pregnancyStatus
    
    

}
//this is to be done 
export const addplace = async(req,res)=>{
    const {place,comment} = req.body;
    const {id} = req.params;
    const act = Activity.find({date:Date.now(),id});
    if(act){
        act.places.push(place);
    }
    else{
        const newAct = new Activity({
            VolunteerId:id,
            //issue may arise here
            comment,
            places:[place]
        })
        if(!newAct){
            return res.status(400).json('Some fault occured')
        }
        else{
            return res.status(200).json('rola hai bhai ka');
            //I have made a very bad return statement here
        }
    }


}
//