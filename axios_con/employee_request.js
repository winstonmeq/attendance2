import axios from "axios";
import { getValue } from "../util/common"



export const addEmployee = async (form) => {
    try {

       
        const res = await axios.post('https://attendance2-apkqba08e-winstonmeq.vercel.app/api/employee/add_employee', form);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}

export const empList = async (userId) => {
    try {
 
        const res = await axios.post('https://attendance2-apkqba08e-winstonmeq.vercel.app/api/employee/emplist',userId);
        return res.data;
        

    }catch(error){

        return getValue(error,["response","data"]);
    }
}


export const getEmployee = async (bId) => {
    try {

        const res = await axios.post('https://attendance2-apkqba08e-winstonmeq.vercel.app/api/employee/getEmployee',bId);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}
