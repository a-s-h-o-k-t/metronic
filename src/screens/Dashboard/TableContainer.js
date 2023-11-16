import { memo } from "react";
import { Box, Grid, InputAdornment, Typography, useTheme } from "@mui/material";
import { MuiButton, MuiTextInput, TableComp } from "../../components";
import ProfileIcon from "../../assets/svgIcons/ProfileIcon.svg";
import arrows from "../../assets/svgIcons/arrows.svg";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

const TableContainer = () => {
  const theme = useTheme();
  const dateLists = [
    { value: 1, label: "Today" },
    { value: 2, label: "Yesterday" },
    { value: 3, label: "This Week" },
    { value: 4, label: "This Month" },
    { value: 5, label: "Select Date" },
  ];
  const statusList = [
    { value: 1, label: "Removed" },
    { value: 2, label: "Delisted" },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      sortable: false,
      maxWidth: 110,
      minWidth: 110,
      disableColumnMenu: true,
      renderCell: (params) => {
        return <Typography sx={{ color: "#181C32" }}>{params.id}</Typography>;
      },
    },
    {
      field: "dateRemoved",
      sortable: false,
      headerName: "DATE REMOVED",
      maxWidth: 160,
      minWidth: 160,
    },
    {
      field: "link",
      headerName: "LINK",
      sortable: false,
      maxWidth: 260,
      minWidth: 260,
      renderCell: (params) => {
        return (
          <Typography sx={{ color: "#3E97FF", fontSize: 14 }}>
            {params.row.link}
          </Typography>
        );
      },
    },
    {
      field: "source",
      headerName: "SOURCE",
      sortable: false,
      maxWidth: 240,
      minWidth: 240,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 100,
      renderCell: (params) => {
        return params.row.action === true ? (
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 600,
              padding: "7px",
              color: "#50CD89",
              borderRadius: "4px",
              backgroundColor: "#E8FFF3",
            }}>
            Removed
          </Typography>
        ) : (
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 600,
              padding: "7px",
              color: "#D9214E",
              borderRadius: "4px",
              backgroundColor: "#FFF5F8",
            }}>
            Delisted
          </Typography>
        );
      },
    },
  ];

  const rows = [
    {
      id: 148525,
      dateRemoved: "23 Sep 2023",
      link: "https://google. com",
      source: "Google",
      action: true,
    },
    {
      id: 458722,
      dateRemoved: "23 Sep 2023",
      link: "https://google. com",
      source: "Reddit",
      action: false,
    },
    {
      id: 158476,
      dateRemoved: "23 Sep 2023",
      link: "https://google. com",
      source: "Twitter",
      action: true,
    },
    {
      id: 687549,
      dateRemoved: "23 Sep 2023",
      link: "https://google. com",
      source: "Google",
      action: true,
    },
    {
      id: 845248,
      dateRemoved: "23 Sep 2023",
      link: "https://google. com",
      source: "Reddit",
      action: true,
    },
    {
      id: 258765,
      dateRemoved: "23 Sep 2023",
      link: "https://google. com",
      source: "Twitter",
      action: true,
    },
    {
      id: 875492,
      dateRemoved: "23 Sep 2023",
      link: "https://google. com",
      source: "Google",
      action: false,
    },
    {
      id: 587469,
      dateRemoved: "23 Sep 2023",
      link: "https://google. com",
      source: "Reddit",
      action: true,
    },
    {
      id: 254817,
      dateRemoved: "23 Sep 2023",
      link: "https://google. com",
      source: "Twitter",
      action: true,
    },
    {
      id: 125784,
      dateRemoved: "23 Sep 2023",
      link: "https://google. com",
      source: "Google",
      action: true,
    },
  ];

  return (
    <Box flex={1} sx={{ display: "flex", flexDirection: "column" }}>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        }}>
        <MuiTextInput
          placeholder={"search"}
          sx={{
            width: "180px",
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
            input: {
              "&::placeholder": {
                opacity: 1,
                fontSize: 12,
                color: "#7E8299",
                fontWeight: 600,
              },
            },
            "& .MuiInputBase-root": {
              fontSize: 12,
              fontWeight: 600,
              borderRadius: "6px",
              color: "#3F4254",
              padding: "13px 12px",
              height: 38,
              backgroundColor: "#F9F9F9",
            },
            "& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
              {
                border: "none",
              },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                border: "none",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={ProfileIcon} alt="img" />
              </InputAdornment>
            ),
          }}
        />
        <Grid
          container
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "flex-end",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
            },
          }}>
          <MuiButton
            title={"Export"}
            startIcon={<img src={arrows} alt="img" />}
            sx={{
              color: "#3E97FF",
              fontSize: 13,
              borderRadius: "6px",
              fontWeight: 700,
              padding: "9px 12px",
              backgroundColor: "#EEF6FF",
            }}
          />
          <MuiTextInput
            isSelect
            value={dateLists[0].value}
            selectItems={dateLists}
            placeholder="Today"
            sx={{
              width: 140,
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
              input: {
                "&::placeholder": {
                  opacity: 1,
                  fontSize: 12,
                  color: "#A1A5B7",
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
                color: "#A1A5B7",
                padding: "13px 12px",
                height: 38,
                backgroundColor: "#F9F9F9",
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
          <MuiTextInput
            isSelect
            selectItems={statusList}
            value={statusList[0].value}
            placeholder="Status"
            sx={{
              width: 140,
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
              input: {
                "&::placeholder": {
                  opacity: 1,
                  fontSize: 12,
                  color: "#A1A5B7",
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
                color: "#A1A5B7",
                padding: "13px 12px",
                height: 38,
                backgroundColor: "#F9F9F9",
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
      </Grid>
      <Grid sx={{ paddingTop: "30px" }}>
        <TableComp columns={columns} rows={rows} checkboxSelection />
      </Grid>
    </Box>
  );
};

export default memo(TableContainer);
