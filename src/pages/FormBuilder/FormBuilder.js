import React, { useEffect, useState } from "react";
import ConfirmDialog from "../../components/ConFirmDialog";
import Table from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import Iconify from "../../components/Iconify";
import Layout from "../../Layout";
import FormBuilderForm from "./FormBuilderForm";
import { deleteFormData, getAllFormData } from "../../redux/common/Action";
import { useTableSearch } from "../../hook/useTableSearch";
import { Tooltip } from "@mui/material";

const initialValues = {
  id: "",
  name: "",
  email: "",
};

const FormBuilder = () => {
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.Common.FormData);

  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: data,
  });
  useEffect(() => {
    dispatch(getAllFormData());
  }, []);

  useEffect(() => {
    const arr =
      formData?.length > 0 &&
      formData?.map((item, index) => ({
        index: index + 1,
        id: item.id,
        name: item.name,
        email: item.email,
      }));
    setData(arr);
  }, [formData]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setCurrentRow(initialValues);
    setOpen(true);
  };

  const onDelete = (row) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });

    dispatch(deleteFormData(row.id));
  };

  const handleDeleteClick = (row) => (event) => {
    event.stopPropagation();
    setConfirmDialog({
      isOpen: true,
      title: "Are you sure to delete this record?",
      subTitle: "You can't undo this operation",
      onConfirm: () => {
        onDelete(row);
      },
    });
  };



  const handleEditClick = (row) => (event) => {
    event.stopPropagation();
    setCurrentRow({
      name: row.name ? row.name : initialValues.name,
      id: row.id,
      email: row.email ? row.email : initialValues.email,
    });
    setOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchVal(e.target.value.trimStart());
  };

  const column = [
    {
      field: "index",
      headerName: "ID",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "super-app-theme--header",
      width: 300,
    },

    {
      field: "email",
      headerName: "email",
      headerClassName: "super-app-theme--header",
      width: 480,
    },

    {
      field: "action",
      headerName: "Action",
      headerClassName: "super-app-theme--header",
      width: 200,
      renderCell: ({ row }) => (
        <>
          <strong strong>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Tooltip title="Edit" placement="top" arrow>
              <span className="table-cell-trucate">
                {" "}
                <Iconify
                  icon="akar-icons:edit"
                  onClick={handleEditClick(row)}
                />
              </span>
            </Tooltip>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Tooltip title="Delete" placement="top" arrow>
              <span className="table-cell-trucate">
                {" "}
                <Iconify
                  icon="ant-design:delete-outlined"
                  onClick={handleDeleteClick(row)}
                />
              </span>
            </Tooltip>
          </strong>
        </>
      ),
    },
  ];

  return (
    <>
      <Layout>
        <div className="page-row">
          <div className="titlebox">
            <h2>Form Builder</h2>
            <div className="top-search">
              <form>
                <input
                  type="text"
                  value={searchVal}
                  onChange={handleSearch}
                  placeholder="Search Here"
                />
              </form>
            </div>
          </div>
          <div className="custom-btn-grp">
            <Tooltip title="Delete">
              <a onClick={handleClickOpen} className="add-btn">
                Upload
              </a>
            </Tooltip>
          </div>
        </div>
        <div className="main-table">
          <Table columns={column} rows={filteredData} />
        </div>
        {open && (
          <FormBuilderForm handleClose={handleClose} currentRow={currentRow} />
        )}
        <ConfirmDialog
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
      </Layout>
    </>
  );
};

export default FormBuilder;
