import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://wtsacademy.dedicateddevelopers.us/api/user/'
})