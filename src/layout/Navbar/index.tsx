import { useContext } from "react";
import { Menu, ArrowForward } from "@mui/icons-material";
import {
	AppBar,
	Box,
	CssBaseline,
	IconButton,
	Toolbar,
	Typography,
	Button,
	useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { basic, navlinks } from "../../constants";
import { NavbarAuthButton } from "./NavbarAuthButton";
import NavbarMenu from "./NavbarMenu";
import NavbarContext from "../../context/NavbarContext";
import NavbarAuthDialog from "./NavbarAuthDialog";
import { useNavigate } from "react-router-dom";



const Navbar = () => {

    const { handleOpenNavMenu } = useContext(NavbarContext);

	const navigate = useNavigate();

	const theme = useTheme();

	const bigScreen = useMediaQuery(theme.breakpoints.up("sm"));

	return (
		
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar position="fixed" component="nav">
					<Toolbar>
						{
							location.pathname === "/" || bigScreen ? (
								<Typography
									variant="h6"
									component="h1"
									sx={{ flexGrow: 1 }}
								>
									{basic.name}
								</Typography>
							) : (
								<IconButton
								sx={{ marginInlineEnd: "auto", color: "#fff" }}
								onClick={() => navigate(-1)}
								>
									<ArrowForward />
								</IconButton>
							)
						}
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
								<Button
								key={link.name}
								sx={{ color: "#fff" }}
								onClick={() => navigate(link.href)}
								>
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
