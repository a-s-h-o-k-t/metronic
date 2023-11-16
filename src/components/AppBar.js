import * as React from "react";
import {
  styled,
  AppBar,
  Toolbar,
  Avatar,
  Grid,
  IconButton,
  useTheme,
  Badge,
} from "@mui/material";
import PropTypes from "prop-types";
import MetronicLogo from "../assets/svgIcons/MetronicLogo.svg";
import ManAvatar from "../assets/svgIcons/ManAvatar.svg";
import notification from "../assets/svgIcons/notification.svg";
import Icon from "@mdi/react";
import { mdiMagnify, mdiChevronDown, mdiMenu } from "@mdi/js";
import { SidebarContext } from "../contexts/SidebarContext";

const StyledAvatar = styled(Avatar)(() => ({
  cursor: "pointer",
  fontSize: 12,
  fontWeight: 700,
}));
const StyledGrid = styled(Grid)(() => ({
  padding: "5px",
  display: "flex",
}));
const IconStyle = styled(Icon)(() => ({
  cursor: "pointer",
}));

const AppBarComp = () => {
  const { toggleSidebar } = React.useContext(SidebarContext);
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#FFF",
        height: "auto",
        padding: "20px 30px",
        width: "auto",
        borderBottom: "1px solid #E1E3EA",
      }}>
      <Toolbar
        style={{
          padding: "0px",
          minHeight: 44,
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <IconButton
          color="primary"
          onClick={toggleSidebar}
          sx={{
            display: "none",
            [theme.breakpoints.down("md")]: {
              display: "initial",
            },
          }}>
          <IconStyle path={mdiMenu} size={1} color={"#5E6278"} />
        </IconButton>
        <Grid
          sx={{
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}>
          <img src={MetronicLogo} alt="metronicLogo" height={24} width={127} />
        </Grid>
        <Grid style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <StyledGrid>
            <Badge
              badgeContent={4}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#F1416C",
                  minWidth: 18,
                  height: 18,
                  padding: "0 5px",
                  fontSize: 10,
                },
                color: "#FFFFFF",
              }}>
              <img
                src={notification}
                alt="notification"
                height={22}
                width={22}
              />
            </Badge>
          </StyledGrid>
          <StyledGrid>
            <IconStyle path={mdiMagnify} size={1} color={"#A1A5B7"} />
          </StyledGrid>
          <StyledAvatar>
            <img src={ManAvatar} alt="metronicAvatar" height={40} width={40} />
          </StyledAvatar>
          <IconStyle path={mdiChevronDown} size={1} color={"#7E8299"} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

AppBar.propTypes = {
  endIcon: PropTypes.element,
  startIcon: PropTypes.element,
  title: PropTypes.string,
  sx: PropTypes.object,
};

export default React.memo(AppBarComp);
