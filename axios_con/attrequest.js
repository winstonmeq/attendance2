import axios from "axios";
// import * as axios from 'axios';
import { getValue } from "../util/common"



export const addatt = async (form) => {
    try {

        const res = await axios.post('http://192.168.102.18:3000/api/attendance/addattendance', form);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}




export const attList = async (userId) => {
    try {

        const res = await axios.post('http://192.168.102.18:3000/api/attendance/att_list',userId);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}