import React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: 600,
  margin: 10,
  width: "100%",
  "& .super-app-theme--header": {
    backgroundColor: "rgb(235,235,235)",
  },
  "& .MuiFormGroup-options": {
    alignItems: "center",
    paddingBottom: theme.spacing(1),
    "& > div": {
      minWidth: 100,
      margin: theme.spacing(2),
      marginLeft: 0,
    },
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "rgb(235,235,235)",
  }
}));

function Table(props) {
  const [pageSize, setPageSize] = React.useState(10);
  return (
    <>
      <StyledBox>
        <DataGridPro
          disableSelectionOnClick
          rows={props.rows}
          columns={props.columns}
          loading={props.loading}
          editMode="row"
          experimentalFeatures={{ newEditingApi: true }}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 25, 50, 100]}
          pagination
          initialState={{ pinnedColumns: { right: ["action"] } }}
        />
      </StyledBox>
    </>
  );
}

export default Table;
