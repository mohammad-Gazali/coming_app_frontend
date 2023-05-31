import { useContext } from "react";
import { Menu } from "@mui/icons-material";
import {
	AppBar,
	Box,
	CssBaseline,
	IconButton,
	Toolbar,
	Typography,
	Button,
} from "@mui/material";
import { basic, navlinks } from "../../constants";
import { NavbarAuthButton } from "./NavbarAuthButton";
import NavbarMenu from "./NavbarMenu";
import NavbarContext from "../../context/NavbarContext";
import NavbarAuthDialog from "./NavbarAuthDialog";



const Navbar = () => {

    const { handleOpenNavMenu } = useContext(NavbarContext);

	return (
		
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar position="fixed" component="nav">
					<Toolbar>
						<Typography
							variant="h6"
							component="h1"
							sx={{ flexGrow: 1 }}
						>
							{basic.name}
						</Typography>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleOpenNavMenu}
							sx={{ display: { sm: "none" } }}
						>
							<Menu />
						</IconButton>
						<Box sx={{ display: { xs: "none", sm: "flex" } }}>
							{navlinks.map((link) => (
								<Button key={link.name} sx={{ color: "#fff" }}>
									{link.name}
								</Button>
							))}
							<NavbarAuthButton />
						</Box>
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<NavbarMenu navlinks={navlinks} />
				</Box>
				<NavbarAuthDialog />
			</Box>
	);
};

export default Navbar;
