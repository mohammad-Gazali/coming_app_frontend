import { Checklist } from "@mui/icons-material";
import {
	TextField,
	Stack,
	Autocomplete,
	Box,
	Button,
	Typography,
} from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { MasterContext, GlobalContext } from "../../context";
import useMasters from "../../hooks/useMasters";



const AddComingPage = () => {

	const [masterName, setMasterName] = useState("");

	const { masters } = useContext(MasterContext);
	const { userData } = useContext(GlobalContext);

	// const navigate = useNavigate();

	const { getMasters } = useMasters();

	useEffect(() => {
		// TODO: make the below condition for groups for each user
		// if (userData?.username === "admin") {
		// 	navigate("/")
		// }
		getMasters();
	}, [userData])

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			gap={5}
		>
			<Typography
				variant="h2"
				fontSize={{ xs: 26, sm: 30, lg: 36 }}
				fontWeight="bold"
			>
				تسجيل الحضور
			</Typography>
			<Stack spacing={2} sx={{ maxWidth: 400, width: 1 }}>
				<Autocomplete
					id="master"
					freeSolo
					options={masters.map((master) => master.username)}
					renderInput={(params) => (
						<TextField
							value={masterName}
							onChange={(e) => setMasterName(e.target.value)}
							{...params}
							label="البحث عن الأستاذ"
						/>
					)}
				/>
				<Button color="success" variant="contained" endIcon={<Checklist />}>
					تسجيل
				</Button>
			</Stack>
		</Box>
	);
};


export default AddComingPage;
