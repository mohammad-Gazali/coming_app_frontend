import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;



export const loginForToken = ({ username, password}: {username: string; password: string}) => {
	return axios.post(`${API_URL}/token`,{
			username,
			password,
		}
	);
};

export const refreshWithToken = async (refreshToken: string) => {
    return axios.post(`${API_URL}/token/refresh`, {
        refresh: refreshToken,
    })
};
