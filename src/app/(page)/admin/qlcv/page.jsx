"use client";

import { Button, Table } from "antd";
import React, { useEffect, useRef } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../../../redux/configStore";
import AddJob from "../../../HOC/AddJob/AddJob";
import JobUpdate from "../../../HOC/JobUpdate/JobUpdate";
import { delCongViecApi, getAllCongViecApi } from "../../../redux/reducers/adminReducer";
import { setStore } from "../../../util/setting";

function ManageJobWithProvider() {
  return (
    <Provider store={store}>
      <ManageJob />
    </Provider>
  );
}

function ManageJob() {
  const refJobDialog = useRef(null);
  const dispatch = useDispatch();

  // Định nghĩa các cột cho bảng dữ liệu
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "tenCongViec",
      key: "tenCongViec",
      width: 200,
      render: (text) => <p className="mt-0">{text}</p>,
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (url) => <img src={url} width="70px" height="70px" alt="Job" />,
    },
    {
      title: "Description",
      dataIndex: "moTaNgan",
      key: "moTaNgan",
    },
    {
      title: "Price ($)",
      dataIndex: "giaTien",
      key: "giaTien",
      render: (text) => <p className="mt-0">{text}</p>,
    },
    {
      title: "Rate",
      dataIndex: "danhGia",
      key: "danhGia",
      render: (text) => <p className="mt-0">{text}</p>,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, { id }) => (
        <div className="d-flex gap-3">
          {/* Nút chỉnh sửa công việc */}
          <JobUpdate ref={refJobDialog} id={id} />
          <Button
            onClick={() => {
              if (typeof window !== "undefined") {
                setStore("id_job", id);
                refJobDialog.current.open();
              }
            }}
          >
            Edit
          </Button>
          {/* Nút xóa công việc */}
          <Button
            type="primary"
            danger
            onClick={() => {
              if (typeof window !== "undefined") {
                dispatch(delCongViecApi(id));
              }
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  // Lấy danh sách công việc khi component được render trên client
  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(getAllCongViecApi());
    }
  }, [dispatch]);

  // Lấy dữ liệu công việc từ Redux Store
  const { allCongViec } = useSelector((state) => state.adminReducer);

  return (
    <>
      {/* Thành phần thêm công việc */}
      <AddJob />
      {/* Hiển thị bảng dữ liệu */}
      <Table columns={columns} dataSource={allCongViec || []} />
    </>
  );
}

export default ManageJobWithProvider;
