import React, { memo } from "react";
import { Box, styled, useTheme } from "@mui/material";
import { DataGridPro, LicenseInfo } from "@mui/x-data-grid-pro";

const MUI_DATAGRID_KEY =
  "2a1203426ca4412164fd0b503afd0b83T1JERVI6MzkyOTgsRVhQSVJZPTE2NzgzODczMjgwMDAsS0VZVkVSU0lPTj0x";

LicenseInfo.setLicenseKey(MUI_DATAGRID_KEY);

const StyledDataGrid = styled(DataGridPro)(() => ({
  minHeight: "400px",
  color: "#7E8299",
  fontSize: 14,
  fontWeight: 600,
  border: "none",
  "&.MuiDataGrid-root .MuiDataGrid-withBorder": {
    borderRight: "none",
  },
  "&.MuiDataGrid-root .MuiDataGrid-columnHeader--moving": {
    backgroundColor: "transparent",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontSize: 12,
    color: "#A1A5B7",
    textAlign: "center",
    fontWeight: 600,
    justifyContent: "flex-start",
  },
  "& .MuiDataGrid-columnSeparator": {
    visibility: "hidden",
  },
  "& .MuiDataGrid-pinnedColumns": {
    boxShadow: "none",
  },
}));

const TableComp = ({ columns, rows, children, ...rest }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        borderBottom: 1,
        borderColor: theme.colors.gray.border,
        mt: 1,
        position: "relative",
      }}
    >
      <StyledDataGrid
        rows={rows}
        columns={columns}
        hideFooter={true}
        showColumnRightBorder
        rowHeight={100}
        headerHeight={50}
        {...rest}
      />
      {children}
    </Box>
  );
};

export default memo(TableComp);
