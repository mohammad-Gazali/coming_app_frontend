import { useContext } from "react";
import { GlobalContext } from "../../context";

const HomePage = () => {

	const { userData } = useContext(GlobalContext);

	return <div style={{ marginTop: 200, fontSize: 32 }}>{userData?.username ? userData.username : "Hello"}</div>;
};

export default HomePage;
