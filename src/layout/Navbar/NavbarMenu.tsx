import { FC, useContext } from "react";
import {
	Menu,
	MenuItem,
	Typography,
} from "@mui/material";
import { Navlink } from "../../types/app";
import { NavbarAuthButtonMobile } from "./NavbarAuthButton";
import { NavbarContext } from "../../context";



interface NavbarMenuProps {
	navlinks: Navlink[];
}

const NavbarMenu: FC<NavbarMenuProps> = ({ navlinks }) => {

	const { anchorElNav, handleCloseNavMenu } = useContext(NavbarContext);
	
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
				<MenuItem key={link.name} onClick={handleCloseNavMenu}>
					<Typography textAlign="center">{link.name}</Typography>
				</MenuItem>
			))}
			<NavbarAuthButtonMobile />
		</Menu>
	);
};

export default NavbarMenu;
