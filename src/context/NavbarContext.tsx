import { MouseEvent, createContext, ReactNode, useState } from "react";



interface NavbarContextType {
    anchorElNav: HTMLElement | null;
    openDialog: boolean;
    handleOpenNavMenu: (event: MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: () => void;
    setOpenDialog: (newOpenDialog: boolean) => void;
}

const NavbarContext = createContext<NavbarContextType>({
    anchorElNav: null,
    openDialog: false,
    handleOpenNavMenu: () => {},
    handleCloseNavMenu: () => {},
    setOpenDialog: () => {},
});

export const NavbarContextProvider = ({ children }: { children: ReactNode }) => {
    const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenNavMenu = (e: MouseEvent<HTMLElement>) => setAnchorElNav(e.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    const contextValue: NavbarContextType = {
        anchorElNav,
        openDialog,
        handleOpenNavMenu,
        handleCloseNavMenu,
        setOpenDialog,
    }

    return (
        <NavbarContext.Provider value={contextValue}>
            {children}
        </NavbarContext.Provider>
    )
}


export default NavbarContext;