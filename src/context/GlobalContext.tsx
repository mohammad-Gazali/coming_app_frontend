import { SetStateAction, Dispatch, ReactNode, createContext, useState, useEffect } from "react";
import { NavbarContextProvider } from "./NavbarContext";
import { AuthTokens, ToastData, UserData } from "../types/app";
import jwtDecode from "jwt-decode";
import { refreshWithToken } from "../services/auth";
import { MasterContextProvider } from "./MasterContext";



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

    const tokens = localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")!) : null

    const decodedData = tokens ? jwtDecode(tokens?.refresh) as UserData : null;

    const [authTokens, setAuthTokens] = useState<AuthTokens | null>(() => tokens);  //? here we make the initial value a callback, and this make this initail value be called only for one time after the first render
    const [userData, setUserData] = useState<UserData | null>(() => decodedData);   //? here we make the initial value a callback, and this make this initail value be called only for one time after the first render
    const [toastData, setToastData] = useState<ToastData>({ 
        message: "",
        type: "error",
        open: false,
    });

    const [firstRender, setFirstRender] = useState(true);

    const refresh = async () => {
        if (authTokens) {
            const result = await refreshWithToken(authTokens.refresh);

            if (result.status === 200) {
                setAuthTokens(result.data);

                localStorage.setItem("authTokens", JSON.stringify(result.data));

                setUserData(jwtDecode(result.data.access))
            } else {
                setAuthTokens(null);
                setUserData(null);
                localStorage.removeItem("authTokens");   
            }
        }
    };

    useEffect(() => {

        // refresh the token for the first render
        if (firstRender) {
            refresh();
            setFirstRender(false);
        }

        const FOUR_MINUTES = 4 * 60 * 1000

        // refresh the token every 4 minutes
        const interval = setInterval(refresh, FOUR_MINUTES)

        return () => clearInterval(interval)
        
    }, [authTokens, firstRender])

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
                <MasterContextProvider>
                    {children}
                </MasterContextProvider>
            </NavbarContextProvider>
        </GlobalContext.Provider>
    )
}

export default GlobalContext