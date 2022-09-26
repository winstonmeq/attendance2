

import axios from "axios";
import { getValue } from "../util/common"




export const createUser = async (form) => {
    try {

        const res = await axios.post('http://192.168.102.18:3000/api/user/addUser', form);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}






