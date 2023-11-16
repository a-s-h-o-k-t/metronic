import { memo } from "react";
import { CardComp, MuiTextInput } from "../../components";
import it_network from "../../assets/svgIcons/it_network.svg";
import magnifier from "../../assets/svgIcons/magnifier.svg";
import trush from "../../assets/svgIcons/trush.svg";
import information_3 from "../../assets/svgIcons/information_3.svg";
import { Grid, InputAdornment, Typography, useTheme } from "@mui/material";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import TableContainer from "./TableContainer";

const Dashboard = () => {
  const theme = useTheme();
  const dateLists = [
    { value: 1, label: "Today" },
    { value: 2, label: "Yesterday" },
    { value: 3, label: "This Week" },
    { value: 4, label: "This Month" },
    { value: 5, label: "Select Date" },
  ];

  const cardItems = [
    {
      title: "252",
      icon: it_network,
      subTitle: "Links Scraped",
      background: "#EEF6FF",
      border: "#3E97FF",
    },
    {
      title: "252",
      icon: magnifier,
      subTitle: "Links Manually Checked",
      background: "#F8F5FF",
      border: "#7239EA",
    },
    {
      title: "252",
      icon: information_3,
      subTitle: "Link Violations",
      background: "#F8F5FF",
      border: "#F6C000",
    },
    {
      title: "252",
      icon: trush,
      subTitle: "Links Removed",
      background: "#F8F5FF",
      border: "#F1416C",
    },
  ];

  return (
    <Grid sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "8px",
        }}>
        <Typography
          sx={{ color: "#7E8299", fontSize: "14px", fontWeight: 500 }}>
          Sort by
        </Typography>
        <MuiTextInput
          isSelect
          value={dateLists[0].value}
          selectItems={dateLists}
          placeholder="Today"
          sx={{
            width: 140,

            input: {
              "&::placeholder": {
                opacity: 1,
                fontSize: 12,
                color: "#3F4254",
                fontWeight: 600,
              },
            },
            "& .MuiInputBase-root": {
              ".MuiSvgIcon-root": {
                display: "none",
              },
              fontSize: 12,
              fontWeight: 600,
              borderRadius: "6px",
              color: "#3F4254",
              padding: "13px 12px",
              height: 38,
              backgroundColor: theme.colors.white.primary,
            },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                border: "none",
              },
            },
            "& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
              {
                border: "none",
              },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Icon path={mdiChevronDown} size={1} color={"#7E8299"} />
              </InputAdornment>
            ),
          }}></MuiTextInput>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          gap: "30px",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        }}>
        {cardItems.map((item) => {
          return (
            <CardComp
              title={item.title}
              icon={item.icon}
              subTitle={item.subTitle}
              background={item.background}
              border={item.border}
            />
          );
        })}
      </Grid>
      <Grid
        sx={{
          backgroundColor: "#FFF",
          borderRadius: "12px",
          padding: "30px",
          [theme.breakpoints.down("md")]: {
            padding: "10px",
          },
        }}>
        <TableContainer />
      </Grid>
    </Grid>
  );
};

export default memo(Dashboard);
