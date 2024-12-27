import { BASR_URL } from "./constants";
import axios from "axios"

const getAllData = async(endpoint)=>{
    try {
        const res = await axios(`${BASR_URL}/${endpoint}`)
        return res.data
    } catch (error) {
        console.error(error);
    }
}

export default getAllData