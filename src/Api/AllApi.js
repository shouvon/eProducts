import {axiosInstance} from './AxiosReadApi';

export const registerData = async(data) => {
    try{
        return await axiosInstance.post(`signup`, data)
    }catch(error){
        console.log(error)
    }
}

export const loginData = async(data) => {
    try{
        return await axiosInstance.post(`signin`, data)
    }catch(error){
        console.log(error)
    }
}