import { memo } from "react";
import { Box, Typography, styled } from "@mui/material";

export const StyledStepperCard = styled(Typography)(({ theme }) => ({
  height: 46,
  width: 46,
  borderRadius: 9,
  backgroundColor: "#50CD89",
  display: "grid",
  placeItems: "center",
  fontSize: 18,
  fontWeight: 600,
  lineHeight: "18px",
  color: "#FFF",
}));

export const StyledStepperWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
}));

const Stepper = ({
  isActive = false,
  isCompletedStep = false,
  stepIndex = 1,
  isFinalIndex = false,
  title,
  subTitle,
}) => {
  return (
    <Box flex={1} style={{ display: "flex", gap: 20 }}>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <StyledStepperCard
          sx={{
            border: isActive ? 0 : "1px dashed rgba(255, 255, 255, 0.30)",
            background: isActive ? "#50CD89" : "rgba(255, 255, 255, 0.05)",
          }}
        >
          {stepIndex}
        </StyledStepperCard>
        {isFinalIndex ? null : (
          <Box
            flex={1}
            style={{
              minHeight: 40,
              borderLeft: "1px dashed rgba(255, 255, 255, 0.30)",
              margin: "5px 0px",
              marginLeft: 46 / 2,
            }}
          ></Box>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            color: "#F9F9F9",
            fontSize: 20,
            fontWeight: 600,
            lineHeight: "20px",
            opacity: isActive ? 1 : 0.7,
            textShadow: isCompletedStep
              ? "0px 4px 4px rgba(0, 0, 0, 0.25)"
              : "none",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#FFF",
            fontSize: 13,
            fontWeight: 500,
            lineHeight: "14px",
            textShadow:
              isActive || isCompletedStep
                ? "0px 4px 4px rgba(0, 0, 0, 0.25)"
                : "none",
            opacity: 0.5,
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default memo(Stepper);
