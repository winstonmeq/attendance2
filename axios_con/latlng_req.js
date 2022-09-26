import axios from "axios";
// import * as axios from 'axios';
import { getValue } from "../util/common"



export const addlatlng = async (form) => {
    try {

        const res = await axios.post('http://192.168.102.18:3000/api/latlng/add_latlng', form);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}

export const latlnglist = async (payload) => {
    try {
 
        const res = await axios.post('http://192.168.102.18:3000/api/latlng/apilatlnglist',payload);
        return res.data;
        

    }catch(error){

        return getValue(error,["response","data"]);
    }
}




export const latlngId = async (id) => {
    try {
 
        const res = await axios.get(`http://192.168.102.18:3000/api/latlng/${id}`);
        return res.data;
        

    }catch(error){

        return getValue(error,["response","data"]);
    }
}


