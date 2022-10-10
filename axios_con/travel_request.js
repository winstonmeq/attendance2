import axios from "axios";
// import * as axios from 'axios';
import { getValue } from "../util/common"



export const add_travel = async (form) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/travel/addtravel', form);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}




export const travel_list = async (userId) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/travel/travel_list',userId);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}
