import axios from 'axios';

const entriesApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACk_URL +'/api'
})


export default entriesApi;



