import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;



export const getAllMasters = (accessToken: string) => {
    return axios.get(`${API_URL}/masters`, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });
}