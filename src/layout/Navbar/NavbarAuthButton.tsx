import { Button, MenuItem, Typography} from "@mui/material";
import { useContext } from "react";
import { GlobalContext, NavbarContext } from "../../context";

export const NavbarAuthButton = () => {
	
	const { setOpenDialog } = useContext(NavbarContext);
	const { userData, setUserData, setAuthTokens } = useContext(GlobalContext);

	const handleClickOpen = () => setOpenDialog(true);

	const logout = () => {
		setUserData(null);
		setAuthTokens(null);
		localStorage.removeItem("authTokens");
	};

	return (
		<Button
			sx={{ display: { xs: "none", sm: "flex" }, color: "#fff" }}
			onClick={userData !== null ? logout : handleClickOpen}
		>
			{userData !== null ? "تسجيل الخروج" : "تسجيل الدخول"}
		</Button>
	);
};

export const NavbarAuthButtonMobile = () => {
	const { userData, setUserData, setAuthTokens } = useContext(GlobalContext);

	const { setOpenDialog, handleCloseNavMenu } = useContext(NavbarContext);

	const handleClickOpen = () => setOpenDialog(true);

	const logout = () => {
		setUserData(null);
		setAuthTokens(null);
		localStorage.removeItem("authTokens");	
	}

	return (
		<>
			<MenuItem
				sx={{ display: { xs: "flex", sm: "none" } }}
				onClick={() => {
					if (userData !== null) {
						logout();
					} else {
						handleCloseNavMenu();
						handleClickOpen();
					}
				}}
			>
				<Typography>
					{userData !== null ? "تسجيل الخروج" : "تسجيل الدخول"}
				</Typography>
			</MenuItem>
		</>
	);
};
