import { memo } from "react";
import { Card, CardContent, Grid, Typography, styled } from "@mui/material";

const StyledCard = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "0px !important",
  lineHeight: "normal",
}));

const StyledTitle = styled(Typography)(() => ({
  fontSize: "34px",
  fontWeight: 600,
  lineHeight: "34px",
  color: "#181C32",
  textOverflow: "ellipsis",
}));

const StyledSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "16px",
  color: "#5E6278",
  width: "150px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const CardComp = ({ title, icon, subTitle, background, border }) => {
  return (
    <Card
      style={{
        padding: "28px",
        height: "124px",
        boxShadow: "none",
        borderBottom: "3px solid",
        borderBottomColor: border,
        borderRadius: "12px",
        flex: 1,
      }}
    >
      <StyledCard>
        <Grid
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <StyledTitle>{title}</StyledTitle>
          <Grid
            style={{
              padding: "8px",
              height: "auto",
              lineHeight: "0px",
              backgroundColor: background,
              borderRadius: "4px",
            }}
          >
            <img src={icon} alt="cardIcon" height={20} width={20} />
          </Grid>
        </Grid>
        <StyledSubTitle>{subTitle}</StyledSubTitle>
      </StyledCard>
    </Card>
  );
};

export default memo(CardComp);
