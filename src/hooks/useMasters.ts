import { GlobalContext, MasterContext } from "../context";
import { getAllMasters } from "../services/masters";
import { useContext } from "react";
import { AxiosError } from "axios";


export default function useMasters() {

    const { setMasters } = useContext(MasterContext);
    const { authTokens, setToastData } = useContext(GlobalContext);


	const getMasters = async () => {

		try {

			if (authTokens?.access === undefined) {
				return
			}

			const response = await getAllMasters(authTokens?.access);

			if (response.status === 200) {
				setMasters(response.data);
			} else {
				setToastData({
					message: "يبدو أن هناك خطأ ما.",
					open: true,
					type: "error",
				});
			}

		} catch (error) {

            if (error instanceof AxiosError) {
                setToastData({
                    message: error.message,
                    open: true,
                    type: "error",
                });
            }
            
            console.log(error);
		}
	};

    return {
        getMasters,
    }
}
