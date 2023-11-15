import { Suspense } from "react";
import { Outlet, useLocation } from "react-router";
import { Loader, Stepper } from "../components";
import { StyledContainer } from "./MainLayout";
import { Box, styled } from "@mui/material";
import EffectsImage from "../assets/auth-bg.png";
import Logo from "../assets/svgIcons/Logo.svg";
import { StyledStepperWrapper } from "../components/Stepper";

const StyledLeftContainer = styled(Box)(({ theme }) => ({
  width: 500,
  backgroundColor: "#006CEA",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: `url(${EffectsImage})`,
  backgroundRepeat: "no-repeat",
  height: "100%",
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

export const StyledRightContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
        }}>
        <StyledLeftContainer>
          <Box
            flex={1}
            style={{
              padding: "140px 125px 35px 125px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 120,
            }}>
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
              <a target="_blank" className="link" href="/">
                Terms
              </a>
              <a target="_blank" className="link" href="/">
                Plans
              </a>
              <a target="_blank" className="link" href="/">
                Contact Us
              </a>
            </div>
          </Box>
        </StyledLeftContainer>
        <StyledRightContainer flex={1}>
          <Box
            flex={1}
            style={{
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Suspense fallback={() => <Loader />}>
              <Outlet />
            </Suspense>
          </Box>
        </StyledRightContainer>
      </Box>
    </StyledContainer>
  );
};

export default Layout;
