import axios from "axios";
// import * as axios from 'axios';
import { getValue } from "../util/common"



export const addlocation = async (form) => {
    try {

        const res = await axios.post('https://attendance2-dtjy7c1pz-winstonmeq.vercel.app/api/location/addLocation', form);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}


export const locList = async (userId) => {
    try {
 
        const res = await axios.post('https://attendance2-dtjy7c1pz-winstonmeq.vercel.app/api/location/api_loclist',userId);
        return res.data;
        

    }catch(error){

        return getValue(error,["response","data"]);
    }
}




export const locationList = async (empId) => {
    try {

        const res = await axios.post('https://attendance2-dtjy7c1pz-winstonmeq.vercel.app/api/location/getlocation',empId);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}