import { loginForToken } from "../services/auth";
import { useContext, useState } from "react";
import { GlobalContext, NavbarContext } from "../context";
import { AxiosError } from "axios";
import jwtDecode from "jwt-decode";



export default function useLogin({ username, password }: { username: string; password: string; }) {

    const [isLoading, setIsLoading] = useState(false);

    const { 
        setAuthTokens, 
        setUserData,
        setToastData,
    } = useContext(GlobalContext);

    const { setOpenDialog } = useContext(NavbarContext);

    const login = async () => {

        setIsLoading(true);

        try {
            const response = await loginForToken({ username, password });

            const data = response.data;

            if (response.status === 200) {

                setAuthTokens(data);
            
                localStorage.setItem("authTokens", JSON.stringify(data))

                setUserData(jwtDecode(data.access));
            
                setToastData({
                    message: "تم تسجيل الدخول بنجاح.",
                    type: "success",
                    open: true,
                })

                setOpenDialog(false);

            } else {

                setToastData({
                    message: "المعلومات غير صحيحة.",
                    type: "error",
                    open: true,
                })

            }

        } catch (error) {
            
            if (error instanceof AxiosError) {
                setToastData({
                    message: error.message,
                    open: true,
                    type: "error",
                });
            }
            
            console.log(error);            

        } finally {
            setIsLoading(false);
        }
    }

    return {
        login,
        isLoading,
    }
}