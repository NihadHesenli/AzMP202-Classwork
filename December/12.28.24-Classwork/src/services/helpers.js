import { BASE_URL } from "./contest.js";
import axios from 'axios'

const getAllData = async(endpoint)=>{
    try {
        const res = await axios(`${BASE_URL}/${endpoint}`)
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export default getAllData
