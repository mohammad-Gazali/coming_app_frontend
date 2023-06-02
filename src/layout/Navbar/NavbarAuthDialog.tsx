import { useState, useContext } from "react";
import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Box,
	CircularProgress,
} from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import useLogin from "../../hooks/useLogin";
import { NavbarContext } from "../../context";





const NavbarAuthDialog = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { openDialog, setOpenDialog } = useContext(NavbarContext);

	const handleClose = () => setOpenDialog(false)

	const { login, isLoading } = useLogin({
		username,
		password,
	});

	const handleSubmit = () => {
		login();
	};

	return (
		<Dialog open={openDialog} onClose={handleClose} fullWidth>
			<DialogTitle fontWeight="bold">تسجيل الدخول</DialogTitle>
			<DialogContent>
				<Box sx={{ display: "flex", alignItems: "flex-end", gap: 1 }}>
					<AccountCircle
						sx={{
							color: "action.active",
							my: 0.5,
							display: { xs: "none", sm: "block" },
						}}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="username"
						label="اسم المستخدم"
						type="text"
						fullWidth
						variant="standard"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Box>
				<Box sx={{ display: "flex", alignItems: "flex-end", gap: 1 }}>
					<Lock
						sx={{
							color: "action.active",
							my: 0.5,
							display: { xs: "none", sm: "block" },
						}}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="password"
						label="كلمة المرور"
						type="password"
						fullWidth
						variant="standard"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button type="button" onClick={handleClose}>
					تراجع
				</Button>
				<Button disabled={isLoading} type="submit" onClick={handleSubmit}>
					{isLoading ? <CircularProgress size={20} /> : "تسجيل"}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default NavbarAuthDialog;
