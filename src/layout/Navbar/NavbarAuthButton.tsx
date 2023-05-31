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

	return (
		<>
			<MenuItem
				sx={{ display: { xs: "block", sm: "none" } }}
				onClick={() => {
					if (userData !== null) {
						setUserData(null);
						setAuthTokens(null);
					} else {
						handleCloseNavMenu();
						handleClickOpen();
					}
				}}
			>
				<Typography textAlign="center">
					{userData !== null ? "تسجيل الخروج" : "تسجيل الدخول"}
				</Typography>
			</MenuItem>
		</>
	);
};
