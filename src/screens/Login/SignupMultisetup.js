import { memo, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { AccountCard, MuiButton } from "../../components";
import { mdiAccountBox, mdiBriefcaseVariant } from "@mdi/js";
import { useNavigate } from "react-router";

const SignupMultiSetup = () => {
  const navigate = useNavigate();
  const [selectedItm, setSelectedItm] = useState(1);
  const theme = useTheme();

  const cardItems = [
    {
      id: 1,
      title: "Account",
      subTitle: "Ready to submit",
      iconPath: mdiAccountBox,
    },
    {
      id: 2,
      title: "Agency",
      subTitle: "Sign-up as an agency",
      iconPath: mdiBriefcaseVariant,
    },
  ];

  const onClickContinue = () => {
    navigate("/signup-personal-info");
  };

  const onClickCard = (cardItem) => {
    setSelectedItm(cardItem.id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "35px",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}>
        <Typography
          sx={{
            color: "#181C32",
            fontSize: 24,
            fontWeight: 600,
            lineHeight: "24px",
          }}>
          Choose an account type
        </Typography>
        <Typography
          sx={{
            color: "#A1A5B7",
            fontSize: 14,
            fontWeight: 500,
            lineHeight: "14px",
          }}>
          If you need more info, please visit our{" "}
          <span style={{ color: "#2884EF" }}>help page.</span>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "22px",
          [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
          },
        }}>
        {cardItems.length
          ? cardItems.map((item, index) => {
              return (
                <AccountCard
                  onClick={() => onClickCard(item)}
                  key={index}
                  title={item.title}
                  subTitle={item.subTitle}
                  iconPath={item.iconPath}
                  isSelected={selectedItm === item.id}
                />
              );
            })
          : null}
      </Box>
      <Box sx={{ justifyContent: "end", display: "flex" }}>
        <MuiButton
          title="Continue"
          sx={{
            backgroundColor: "#006CEA",
            padding: "12px 18px",
            color: "#FFF",
            fontSize: 16,
            fontWeight: 600,
            lineHeight: "16px",
            ":hover": {
              backgroundColor: "#006CEA",
            },
          }}
          onClick={onClickContinue}
        />
      </Box>
    </Box>
  );
};

export default memo(SignupMultiSetup);
