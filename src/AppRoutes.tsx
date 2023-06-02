import { Route, Routes } from "react-router-dom";
import { AddComingPage, ComingDetailsPage, HomePage } from "./pages";



const AppRoutes = () => {
	return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coming/add" element={<AddComingPage />} />
            <Route path="/coming/details" element={<ComingDetailsPage />} />
        </Routes>
	);
};

export default AppRoutes;
