import { BASE_URL } from "./constant";
import axios from 'axios';

//get all data
const getAllData = async (endpoint)=>{
    try {
    const response = await axios(`${BASE_URL}${endpoint}`)
    return response.data
    } catch (error) {
        console.log(error);
        
    }
}

export{ getAllData }