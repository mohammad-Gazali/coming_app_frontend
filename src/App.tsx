import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar,Footer, Toast } from "./layout";
import { HomePage } from "./pages";
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/700.css";



function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</Router>
      <Toast />
			<Footer />
		</>
	);
}


export default App;
