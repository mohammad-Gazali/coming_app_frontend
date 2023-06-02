import { FC, useContext } from "react";
import {
	Menu,
	MenuItem,
	Typography,
} from "@mui/material";
import { Navlink } from "../../types/app";
import { NavbarAuthButtonMobile } from "./NavbarAuthButton";
import { NavbarContext } from "../../context";
import { useNavigate } from "react-router-dom";



interface NavbarMenuProps {
	navlinks: Navlink[];
}

const NavbarMenu: FC<NavbarMenuProps> = ({ navlinks }) => {

	const { anchorElNav, handleCloseNavMenu } = useContext(NavbarContext);
	
	const navigate = useNavigate();

	return (
		<Menu
			id="menu-appbar"
			anchorEl={anchorElNav}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left",
			}}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "left",
			}}
			open={Boolean(anchorElNav)}
			onClose={handleCloseNavMenu}
			sx={{
				display: { xs: "block", md: "none" },
			}}
		>
			{navlinks.map((link) => (
				<MenuItem 
				key={link.name}
				onClick={() => {
					handleCloseNavMenu();
					navigate(link.href);
				}}
				>
					<Typography textAlign="center">{link.name}</Typography>
				</MenuItem>
			))}
			<NavbarAuthButtonMobile />
		</Menu>
	);
};

export default NavbarMenu;
