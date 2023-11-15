import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& .Mui-selected": {
    backgroundColor: "#F2F7FF",
  },
  "& .MuiTabs-indicator": {
    left: 0,
    width: 6,
    borderRadius: "6px 0px 0px 6px",
    backgroundColor: "transparent",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  color: "#5E6278",
  fontWeight: 600,
  fontSize: 15,
  minWidth: 200,
  minHeight: 44,
  padding: "8px 10px",
  gap: 12,
  borderRadius: "6px",
  justifyContent: "flex-start",
  ":hover": {
    backgroundColor: "#EEF6FF",
  },
  "&.Mui-selected": {
    fontWeight: 600,
    color: "#3E97FF",
    borderRight: "none",
    backgroundColor: "#EEF6FF",
    letterSpacing: "0em",
  },
}));

const SideNav = ({ tabItems }) => {
  const { pathname } = useLocation();

  const matchPath = (items = []) => {
    const navPath = pathname.split("/")[1] || "";
    const matchItem = items.find(({ path }) => {
      return path === navPath;
    });
    return matchItem?.path ?? tabItems[0].path;
  };

  const selectedTabValue = matchPath(tabItems);

  const getTabIconItems = () => {
    return tabItems.map((item, index) => {
      return (
        <StyledTab
          sx={{ "& .MuiBadge-root": { paddingRight: "10px" } }}
          iconPosition="start"
          key={index}
          label={item.label}
          value={item.path}
          component={Link}
          to={item?.path}
          icon={<img src={item.icon} size={0.85} color="#A1A5B7" />}
          disableFocusRipple
          disableRipple
        />
      );
    });
  };

  return (
    <Box
      sx={{
        borderColor: "divider",
        height: "100%",
      }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <StyledTabs value={selectedTabValue} orientation="vertical">
          {getTabIconItems()}
        </StyledTabs>
      </Box>
    </Box>
  );
};

SideNav.propTypes = {
  tabItems: PropTypes.arrayOf(PropTypes.object),
  onClickCreateBtn: PropTypes.func,
  isDispatch: PropTypes.bool,
};

export default React.memo(SideNav);
