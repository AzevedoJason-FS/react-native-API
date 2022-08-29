import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const signup = (email, password) => {
    return axios.post(`https://wdv-restful-api.herokuapp.com/api/v1/auth`, {
        email, password
    })
    .then(response => {
        if(response.data.token){
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data
    })
}

const login = (email, password) => {
    return axios.post(`https://wdv-restful-api.herokuapp.com/api/v1/auth/signin`, {
        email, password
    })
    .then(response => {
        if(response.data.token){
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
    })
}

const logout = () => {
    localStorage.removeItem("user");
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}

const authService = {
    signup,
    login,
    logout,
    getCurrentUser
}

export default authService;