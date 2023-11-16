import { Suspense } from "react";
import { Outlet } from "react-router";
import { Box, Container, styled, useTheme } from "@mui/material";
import { AppBarComp, Loader, SideNav } from "../components";
import home from "../assets/svgIcons/home.svg";
import add_files from "../assets/svgIcons/add_files.svg";
import scroll from "../assets/svgIcons/scroll.svg";
import questionnaire_tablet from "../assets/svgIcons/questionnaire_tablet.svg";
import graph_up from "../assets/svgIcons/graph_up.svg";
import setting from "../assets/svgIcons/setting.svg";
import message_question from "../assets/svgIcons/message_question.svg";
import rescue from "../assets/svgIcons/rescue.svg";

export const StyledContainer = styled(Container)(() => ({
  padding: "0px !important",
}));

const MainLayout = () => {
  const theme = useTheme();
  const tabItems = [
    {
      path: "dashboard",
      label: "Home",
      icon: home,
      title: "Home",
    },
    {
      path: "unscheduled",
      label: "Submit Violations",
      icon: add_files,
      title: "Submit Violations",
    },
    {
      path: "history1",
      label: "Whitelist",
      icon: scroll,
      title: "Whitelist",
    },
    {
      path: "history2",
      label: "Billing",
      icon: questionnaire_tablet,
      title: "Billing",
    },
    {
      path: "history3",
      label: "Affiliate Program",
      icon: graph_up,
      title: "Affiliate Program",
    },
    {
      path: "history4",
      label: "Settings",
      icon: setting,
      title: "Settings",
    },
    {
      path: "history5",
      label: "FAQ",
      icon: message_question,
      title: "FAQ",
    },
    {
      path: "history6",
      label: "Support",
      icon: rescue,
      title: "Support",
    },
  ];
  return (
    <StyledContainer maxWidth="xl" style={{ background: "grey" }}>
      <AppBarComp />
      <Box className="container">
        <Box
          className="sideNav"
          sx={{
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}>
          <SideNav tabItems={tabItems} />
        </Box>
        <Box
          className="mainContent"
          sx={{
            [theme.breakpoints.down("md")]: {
              padding: "10px",
            },
          }}>
          <Suspense fallback={() => <Loader />}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default MainLayout;
