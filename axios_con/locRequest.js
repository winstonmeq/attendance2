import axios from "axios";
// import * as axios from 'axios';
import { getValue } from "../util/common"



export const addlocation = async (form) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/location/addLocation', form);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}



export const locList = async (userId) => {
    try {
 
        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/location/api_loclist',userId);
        return res.data;
        

    }catch(error){

        return getValue(error,["response","data"]);
    }
}




export const locationList = async (empId) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/location/getlocation',empId);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}
