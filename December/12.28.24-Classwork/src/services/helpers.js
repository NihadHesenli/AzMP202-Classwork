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

const getAllDataById = async(endpoint,id)=>{
    try{
        const res = await axios(`${BASE_URL}/${endpoint}/${id}`)
        return res.data
    } catch(error){
        console.log(error);
    }
}

const deleteDataById = async(endpoint,id)=>{
    try {
        const res = await axios.delete(`${BASE_URL}/${endpoint}/${id}`)
        return res
    } catch (error) {
        console.log(error);
    }
}

export { getAllData, getAllDataById, deleteDataById}