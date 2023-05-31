import { useContext } from "react";
import { Alert, Snackbar } from "@mui/material";
import { GlobalContext } from "../../context";


const Toast = () => {

    const { 
      toastData,
      setToastData,
    } = useContext(GlobalContext);
  
    const handleClose = () => {
      setToastData(preState => {
        return {...preState, open: false}
      });
    }
  
      return (
          <Snackbar open={toastData.open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} variant="filled" severity={toastData.type} sx={{ width: "100%" }}>
                  {toastData.message}
              </Alert>
          </Snackbar>
      );
  };


export default Toast;