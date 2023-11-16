import React, { memo, useEffect, useState } from "react";
import { Grid, Pagination, Typography, styled, useTheme } from "@mui/material";
import { DataGridPro, LicenseInfo } from "@mui/x-data-grid-pro";

const MUI_DATAGRID_KEY =
  "2a1203426ca4412164fd0b503afd0b83T1JERVI6MzkyOTgsRVhQSVJZPTE2NzgzODczMjgwMDAsS0VZVkVSU0lPTj0x";

LicenseInfo.setLicenseKey(MUI_DATAGRID_KEY);

const StyledDataGrid = styled(DataGridPro)(() => ({
  // minHeight: "400px",
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

const TableComp = ({ columns, rows, totalItems, ...rest }) => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  // const [tableRowCount, setTableRowCount] = useState(10);
  const tableRowCount = 5;

  useEffect(() => {
    const getPageCount = () => {
      let rowCount = 0;
      let newPageCount = 1;
      if (rows.length)
        rows.forEach(() => {
          if (rowCount === tableRowCount) {
            newPageCount++;
            rowCount = 0;
          }
          rowCount++;
        });
      return newPageCount;
    };
    setPageCount(getPageCount());
    setPage(1);
  }, [rows]);

  const handleChangePagination = (event, value) => {
    setPage(value);
  };

  return (
    <Grid container sx={{ gap: "30px" }}>
      <Grid item xxxs={12}>
        <StyledDataGrid
          rows={rows}
          columns={columns}
          hideFooter
          autoHeight
          hideFooterPagination
          showColumnRightBorder
          disableSelectionOnClick
          rowHeight={80}
          headerHeight={50}
          page={page - 1}
          pageSize={2}
          {...rest}
        />
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        xxxs={12}
        sx={{
          [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
          },
        }}>
        <Typography
          style={{ fontSize: "10px", fontWeight: 600, color: "#A1A5B7" }}>
          Total Result: {totalItems}
        </Typography>
        <Grid
          container
          item
          xxxs
          justifyContent="flex-end"
          sx={{
            [theme.breakpoints.down("xs")]: {
              justifyContent: "center",
            },
          }}>
          <Pagination
            sx={{
              "& .MuiPagination-ul li .MuiButtonBase-root.MuiPaginationItem-root":
                {
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#7E8299",
                  "&.Mui-selected": {
                    borderRadius: "6px",
                    color: "#fff",
                    backgroundColor: "#3E97FF",
                  },
                },
            }}
            count={pageCount}
            page={page}
            onChange={handleChangePagination}
            color="primary"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(TableComp);
