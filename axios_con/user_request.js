

import axios from "axios";
import { getValue } from "../util/common"



export const createUser = async (form) => {
    try {

        const res = await axios.post('https://attendance2-flame.vercel.app/api/user/addUser', form);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}






