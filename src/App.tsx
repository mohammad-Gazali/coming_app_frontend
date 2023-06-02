import { Navbar,Footer, Toast } from "./layout";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/700.css";
import AppRoutes from "./AppRoutes";
import { Container } from "@mui/material";



function App() {
	return (
		<Router>
			<Navbar />
			<Container
			fixed
			sx={{
				pt: {
					xs: 20,
					sm: 21
				},
			}}
			>
				<AppRoutes />
			</Container>
      		<Toast />
			<Footer />
		</Router>
	);
}


export default App;
