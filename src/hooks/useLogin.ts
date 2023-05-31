import { useMutation } from "@tanstack/react-query";
import { loginForToken } from "../services/auth";
import { useContext } from "react";
import { GlobalContext, NavbarContext } from "../context";
import jwt_decode from "jwt-decode";



export default function useLogin({ username, password }: { username: string; password: string; }) {

    const { 
        setAuthTokens, 
        setUserData,
        setToastData,
    } = useContext(GlobalContext);

    const { setOpenDialog } = useContext(NavbarContext);

    return useMutation({
        mutationFn: () => loginForToken({ username, password }),
        onSuccess: (data) => {
            
            setAuthTokens(data);
            
            localStorage.setItem("authTokens", JSON.stringify(data))

            setUserData(jwt_decode(data.access));
            
            setToastData({
                message: "تم تسجيل الدخول بنجاح.",
                type: "success",
                open: true,
            })

            setOpenDialog(false);
        },
        onError: () => {
            setToastData({
                message: "المعلومات غير صحيحة.",
                type: "error",
                open: true,
            })
        }
    });
}