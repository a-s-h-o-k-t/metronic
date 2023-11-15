import React, { memo } from "react";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

const StyledSelectBox = styled(Select)(({ theme }) => ({
  height: 36,
  margin: "8px",
  width: "100%",
  "&.MuiInputBase-root.MuiOutlinedInput-root": {
    fontSize: 12,
  },
  "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
    padding: "8px",
  },
  "&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
    {
      borderColor: theme.colors.blue.border,
    },
  "&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    { borderColor: theme.colors.blue.blueMedium },
}));

const MuiInputSelect = ({
  required = true,
  selectItems,
  inputLabel,
  onChange,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <FormControl fullWidth>
      <InputLabel
        required={required}
        sx={{
          "&.MuiFormLabel-root.MuiInputLabel-root": {
            color: theme.colors.blueGray.medium,
            fontSize: 12,
            top: 4,
            left: 8,
            ".MuiFormLabel-asterisk": { color: theme.colors.red.primary },
          },
          "& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused ": {
            color: theme.colors.blue.blueMedium,
            fontSize: 11,
          },
        }}
      >
        {inputLabel}
      </InputLabel>
      <StyledSelectBox
        label={inputLabel}
        onChange={onChange}
        IconComponent={() => (
          <IconButton>
            <Icon path={mdiChevronDown} size={0.8} />
          </IconButton>
        )}
        {...rest}
      >
        {selectItems.length &&
          selectItems.map((item) => {
            return (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
      </StyledSelectBox>
    </FormControl>
  );
};

MuiInputSelect.propTypes = {
  required: PropTypes.bool,
  inputLabel: PropTypes.string,
  onChange: PropTypes.func,
  selectItems: PropTypes.arrayOf(PropTypes.object),
};

export default memo(MuiInputSelect);
