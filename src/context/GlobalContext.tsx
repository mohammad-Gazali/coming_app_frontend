import { SetStateAction, Dispatch, ReactNode, createContext, useState, useEffect } from "react";
import { NavbarContextProvider } from "./NavbarContext";
import { AuthTokens, ToastData, UserData } from "../types/app";



interface GlobalContextProps {
    authTokens: AuthTokens | null;
    userData: UserData | null;
    toastData: ToastData;
    setAuthTokens: (newAuthTokens: AuthTokens | null) => void;
    setUserData: (newUserData: UserData | null) => void;
    setToastData: Dispatch<SetStateAction<ToastData>>
}

const GlobalContext = createContext<GlobalContextProps>({
    authTokens: null,
    userData: null,
    toastData: {
        message: "",
        type: "error",
        open: false,
    },
    setAuthTokens: () => {},
    setUserData: () => {},
    setToastData: () => {},
})

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {

    const [authTokens, setAuthTokens] = useState<AuthTokens | null>(null);
    const [userData, setUserData] = useState<UserData | null>(null);
    const [toastData, setToastData] = useState<ToastData>({ 
        message: "",
        type: "error",
        open: false,
    });

    useEffect(() => {
        
    }, [])

    const contextValue: GlobalContextProps = {
        authTokens,   
        userData,
        toastData,
        setAuthTokens,
        setUserData,
        setToastData,
    }

    return (
        <GlobalContext.Provider value={contextValue}>
            <NavbarContextProvider>
                {children}
            </NavbarContextProvider>
        </GlobalContext.Provider>
    )
}

export default GlobalContext