import { memo } from "react";
import { MenuItem, styled, TextField } from "@mui/material";
import PropTypes from "prop-types";

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-root": {
    fontSize: 12,
    borderRadius: "8px",
    backgroundColor: theme.colors.white.primary,
  },
  "& .MuiSelect-select": {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },
  "& .MuiFormLabel-root": {
    color: "#7E8299",
    fontSize: 12,
    transformOrigin: "bottom left",
    ".MuiFormLabel-asterisk": { color: theme.colors.red.primary },
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: theme.colors.blue.blueMedium,
    fontSize: 11,
  },
  "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
    { borderColor: `${theme.colors.red.primary} !important` },
  "& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
    {
      border: "2px solid",
      borderColor: theme.colors.blue.border,
    },
  "& .MuiFormLabel-root.MuiInputLabel-root.Mui-error ": {
    color: `${theme.colors.red.primary} !important`,
  },
  "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    { borderColor: theme.colors.blue.blueMedium },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: 14,
  minWidth: 180,
  fontWeight: 600,
  color: "#5E6278",
  display: "flex",
  gap: "8px",
  lineHeight: "14px",
  marginTop: "5px",
  padding: "10px 15px",
  alignItems: "center",
  "&.Mui-selected": {
    color: "#3E97FF",
    backgroundColor: "#EEF6FF",
  },
}));

const MuiTextInput = ({
  required,
  label,
  value,
  selectItems,
  onChange,
  isSelect,
  inputProps,
  isJobsUserColor,
  renderAvatar,
  variant = "outlined",
  inputHeight,
  sx,
  ...rest
}) => {
  return (
    <StyledTextField
      required={required}
      label={label}
      select={isSelect}
      variant={variant}
      size="small"
      value={value}
      InputProps={inputProps}
      onChange={onChange}
      sx={{
        "& .MuiInputBase-root": {
          height: inputHeight || 36,
        },
        ...sx,
      }}
      {...rest}
    >
      {isSelect &&
        selectItems.length &&
        selectItems.map((item, index) => {
          return (
            <StyledMenuItem key={index} value={item.value}>
              {renderAvatar && renderAvatar(item)}
              {item.label}
            </StyledMenuItem>
          );
        })}
    </StyledTextField>
  );
};

MuiTextInput.defaultProps = {
  variant: "outlined",
  isSelect: false,
  required: true,
};
MuiTextInput.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  isSelect: PropTypes.bool,
  selectItems: PropTypes.arrayOf(PropTypes.object),
};

export default memo(MuiTextInput);
