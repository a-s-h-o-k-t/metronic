import { memo } from "react";
import { Box, Typography } from "@mui/material";
import Icon from "@mdi/react";

const AccountCard = ({ title, subTitle, iconPath, isSelected, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        padding: "24px",
        display: "flex",
        gap: "16px",
        borderRadius: "8px",
        border: "1px dashed",
        alignItems: "center",
        cursor: "pointer",
        borderColor: isSelected ? "#2884EF" : "#D8D8E5",
        backgroundColor: isSelected ? "#EEF6FF" : "#FFF",
      }}
    >
      <Icon
        size={1.2}
        path={iconPath}
        color={isSelected ? "#006CEA" : "#A1A5B7"}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography
          sx={{
            color: "#181C32",
            fontSize: 15,
            fontWeight: 600,
            lineHeight: "16px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#7E8299",
            fontSize: 13,
            fontWeight: 600,
            lineHeight: "21px",
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default memo(AccountCard);
