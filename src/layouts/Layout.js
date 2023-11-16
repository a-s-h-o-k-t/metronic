import { Suspense } from "react";
import { Outlet, useLocation } from "react-router";
import { Loader, Stepper } from "../components";
import { StyledContainer } from "./MainLayout";
import { Box, Typography, styled, useTheme } from "@mui/material";
import EffectsImage from "../assets/auth-bg.png";
import Logo from "../assets/svgIcons/Logo.svg";
import { StyledStepperWrapper } from "../components/Stepper";
import { Link } from "react-router-dom";

const StyledLeftContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#006CEA",
  backgroundImage: `url(${EffectsImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  padding: "140px 125px 35px 125px",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 120,
  [theme.breakpoints.down("md")]: {
    padding: "35px",
    gap: 40,
  },
}));

export const StyledRightContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowY: "auto",
  [theme.breakpoints.down("md")]: {
    padding: "30px",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
    padding: "0px 30px",
  },
}));

const StepperItems = [
  {
    value: 0,
    title: "Account Type",
    subTitle: "Select your account type",
    pathname: "signup-multiple-setup",
  },
  {
    value: 1,
    title: "Account Details",
    subTitle: "Add your personal info",
    pathname: "signup-personal-info",
  },
  {
    value: 2,
    title: "Creator Info",
    subTitle: "Setup your business details",
    pathname: "signup-creator-info",
  },
  {
    value: 3,
    title: "Completed",
    subTitle: "Your account is created",
    pathname: "signup-account-created",
  },
];

const Layout = () => {
  const { pathname } = useLocation();
  const theme = useTheme();

  const matchPath = () => {
    const navPath = pathname.split("/")[1] || "";
    const matchItem = StepperItems.find((item) => {
      return item.pathname === navPath;
    });
    return matchItem?.value ?? 0;
  };

  const selectedStepperValue = matchPath();

  return (
    <StyledContainer maxWidth="xl">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: { xxxs: "column", md: "row" },
          [theme.breakpoints.down("md")]: {
            height: "100%",
          },
        }}>
        <StyledLeftContainer>
          <img src={Logo} alt="mainLogo" />
          <StyledStepperWrapper>
            {StepperItems.length
              ? StepperItems.map((item, index) => {
                  const isActiveStep = selectedStepperValue === item.value;
                  return (
                    <Stepper
                      key={index}
                      title={item.title}
                      subTitle={item.subTitle}
                      isActive={isActiveStep}
                      isCompletedStep={
                        !isActiveStep && selectedStepperValue > index
                      }
                      isFinalIndex={index === StepperItems.length - 1}
                      stepIndex={index + 1}
                    />
                  );
                })
              : null}
          </StyledStepperWrapper>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 39,
            }}>
            <Typography target="_blank" className="link" component={Link}>
              Terms
            </Typography>
            <Typography target="_blank" className="link" component={Link}>
              Plans
            </Typography>
            <Typography target="_blank" className="link" component={Link}>
              Contact Us
            </Typography>
          </div>
        </StyledLeftContainer>
        <StyledRightContainer flex={1}>
          <Suspense fallback={() => <Loader />}>
            <Outlet />
          </Suspense>
        </StyledRightContainer>
      </Box>
    </StyledContainer>
  );
};

export default Layout;
