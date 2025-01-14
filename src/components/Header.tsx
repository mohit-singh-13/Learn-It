import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  color: "black",
  margin: "0.5rem",
  textDecoration: "none",
  fontWeight: "bold",
};

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" mr={"auto"} textTransform={"uppercase"}>
          Learn-It
        </Typography>
        <Link style={styles} to={"/"}>
          Home
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
