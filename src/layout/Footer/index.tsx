import { Box, Typography } from "@mui/material";
import { basic } from "../../constants";



const Footer = () => {
  return (
    <Box component="footer" sx={{ position: "absolute", bottom: 0, bgcolor: "primary.main", py: 3 }} width="100%" boxShadow="0 0 10px 0px #00000090" >
        <Typography px="1rem" color="#fff" textAlign="center">
          {basic.copyRight}
        </Typography>
    </Box>
  )
}

export default Footer;