import axios from "axios";
import { getValue } from "../util/common"



export const addEmployee = async (form) => {
    try {

       
        const res = await axios.post('http://192.168.102.18:3000/api/employee/add_employee', form);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}

export const empList = async (userId) => {
    try {
 
        const res = await axios.post('http://192.168.102.18:3000/api/employee/emplist',userId);
        return res.data;
        

    }catch(error){

        return getValue(error,["response","data"]);
    }
}


export const getEmployee = async (bId) => {
    try {

        const res = await axios.post('http://192.168.102.18:3000/api/employee/getEmployee',bId);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}
