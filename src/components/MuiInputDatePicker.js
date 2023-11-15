import { useTheme } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import moment from "moment/moment";
import React, { memo } from "react";
import MuiTextInput from "./MuiTextInput";

const MuiInputDatePicker = ({
  value,
  handleChange,
  error,
  InputProps,
  label,
  placeholder,
}) => {
  const theme = useTheme();
  const popperSx = {
    "& .MuiPaper-root": {
      borderRadius: "16px",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    },
    "& .MuiCalendarPicker-root .MuiPickersDay-today ": {
      borderColor: theme.colors.blue.blueMedium,
      color: theme.colors.blue.blueMedium,
    },
    "& .MuiCalendarPicker-root .MuiPickersDay-root.Mui-selected": {
      backgroundColor: theme.colors.blue.blueMedium,
      color: theme.colors.white.primary,
    },
    "& .MuiDayPicker-weekDayLabel": {
      color: theme.colors.blueGray.medium,
    },
    "& .MuiPickersCalendarHeader-label": {
      color: theme.colors.blueGray.primary,
    },
    "& .MuiPickersCalendarHeader-switchViewIcon ": {
      color: theme.colors.blueGray.medium,
    },
    "& .MuiSvgIcon-root": {
      color: theme.colors.blueGray.medium,
    },
  };

  return (
    <DesktopDatePicker
      value={value}
      PopperProps={{
        sx: popperSx,
      }}
      onChange={handleChange}
      disablePast
      renderInput={(params) => (
        <MuiTextInput
          {...params}
          sx={{
            ".MuiSvgIcon-root": { width: 20 },
            "& .MuiInputBase-root.MuiOutlinedInput-root": {
              paddingLeft: 0,
              backgroundColor: theme.colors.white.primary,
            },
            "& .MuiInputAdornment-root": {
              marginRight: 0,
            },

            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                border: "none",
              },
            },
          }}
          label={label}
          error={error}
          placeholder={placeholder}
          required={false}
          value={value ? moment(new Date(value)).format("MM/DD/YYYY") : ""}
          InputProps={{
            ...params.InputProps,
            ...InputProps,
          }}
        />
      )}
    />
  );
};

export default memo(MuiInputDatePicker);
