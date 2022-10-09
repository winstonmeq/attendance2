import axios from "axios";
// import * as axios from 'axios';
import { getValue } from "../util/common"



export const addatt = async (form) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/attendance/addattendance', form);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}



export const attemp = async (empId) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/attendance/getattempId',empId);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}



export const attList = async (userId) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/attendance/att_list',userId);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}
