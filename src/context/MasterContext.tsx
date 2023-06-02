import {
	createContext,
	ReactNode,
	useState,
	SetStateAction,
	Dispatch,
} from "react";
import { Master } from "../types/models";



interface MasterContextType {
	masters: Master[];
	setMasters: Dispatch<SetStateAction<Master[]>>;
}

const MasterContext = createContext<MasterContextType>({
	masters: [],
	setMasters: () => {},
});

export const MasterContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [masters, setMasters] = useState<Master[]>([]);

	const contextValue: MasterContextType = {
		masters,
		setMasters,
	};

	return (
		<MasterContext.Provider value={contextValue}>
			{children}
		</MasterContext.Provider>
	);
};

export default MasterContext;
