import { memo } from "react";
import { Box, Checkbox, Grid, InputAdornment, Typography } from "@mui/material";
import { MuiButton, MuiTextInput, TableComp } from "../../components";
import ProfileIcon from "../../assets/svgIcons/ProfileIcon.svg";
import arrows from "../../assets/svgIcons/arrows.svg";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

const TableContainer = () => {
  const columns = [
    {
      field: "",
      renderHeader: () => (
        <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }} />
      ),
      sortable: false,
      maxWidth: 70,
      minWidth: 70,
      disableColumnMenu: true,
      align: "center",
      renderCell: () => {
        return <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }} />;
      },
    },
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
            }}
          >
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
            }}
          >
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
          flexWrap: "wrap",
        }}
      >
        <MuiTextInput
          placeholder={"search"}
          sx={{
            width: "180px",
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
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
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
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              backgroundColor: "#F9F9F9",
              padding: "9px 12px",
            }}
          >
            <Typography
              sx={{ color: "#A1A5B7", fontSize: 13, fontWeight: 700 }}
            >
              Today
            </Typography>
            <Icon path={mdiChevronDown} color="#A1A5B7" size={1} />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              backgroundColor: "#F9F9F9",
              padding: "9px 12px",
            }}
          >
            <Typography
              sx={{ color: "#A1A5B7", fontSize: 13, fontWeight: 700 }}
            >
              Status
            </Typography>
            <Icon path={mdiChevronDown} color="#A1A5B7" size={1} />
          </Grid>
        </Grid>
      </Grid>
      <Grid sx={{ paddingTop: "30px" }}>
        <TableComp columns={columns} rows={rows} />
      </Grid>
    </Box>
  );
};

export default memo(TableContainer);
