import { memo } from "react";
import { Box, Grid, InputAdornment, Typography } from "@mui/material";
import {
  MuiButton,
  MuiInputDatePicker,
  MuiInputSelect,
  MuiTextInput,
  TableComp,
} from "../../components";
import ProfileIcon from "../../assets/svgIcons/ProfileIcon.svg";
import arrows from "../../assets/svgIcons/arrows.svg";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

const TableContainer = () => {
  const dateList = [
    { value: 1, label: "Today" },
    { value: 2, label: "Yesterday" },
    { value: 3, label: "This Week" },
    { value: 4, label: "This Month" },
    { value: 5, label: "Select Date" },
  ];

  return (
    <Box>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
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
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              backgroundColor: "#F9F9F9",
              padding: "9px 12px",
            }}
          >
            <Typography
              style={{ color: "#A1A5B7", fontSize: 13, fontWeight: 700 }}
            >
              Today
            </Typography>
            <Icon path={mdiChevronDown} color="#A1A5B7" size={1} />
          </Grid>
          {/* <Grid>
            <MuiTextInput
              isSelect={true}
              placeholder="State"
              width={112}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Icon path={mdiChevronDown} color="#A1A5B7" size={1} />
                  </InputAdornment>
                ),
              }}
              selectItems={stateDetails}
              // onChange={(event) => {
              //   onChangeInput(event.target.value, "state");
              // }}
              // error={isError && !edit.allFilled("state")}
            />
          </Grid> */}
          {/* <Grid>
            <MuiInputSelect
              isSelect={true}
              inputLabel="State"
              required={false}
              sx={{ width: 112 }}
              // IconComponent={() => (
              //   <IconButton>
              //     <Icon path={mdiChevronDown} size={0.8} />
              //   </IconButton>
              // )}
              selectItems={dateList}
              // onChange={(event) => {
              //   onChangeInput(event.target.value, "state");
              // }}
              // error={isError && !edit.allFilled("state")}
            />
          </Grid> */}
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              backgroundColor: "#F9F9F9",
              padding: "9px 12px",
            }}
          >
            <Typography
              style={{ color: "#A1A5B7", fontSize: 13, fontWeight: 700 }}
            >
              Status
            </Typography>
            <Icon path={mdiChevronDown} color="#A1A5B7" size={1} />
          </Grid>
        </Grid>
      </Grid>
      <TableComp />
    </Box>
  );
};

export default memo(TableContainer);
