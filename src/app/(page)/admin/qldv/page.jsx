"use client";

import { Button, Table } from "antd";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddService from "../../../HOC/ServiceAdmin/AddService";
import UpdateService from "../../../HOC/ServiceAdmin/UpdateService";
import { delServiceHireApi, getServiceHireApi } from "../../../redux/reducers/adminReducer";

export default function ManageService() {
  const { allServiceHire } = useSelector((state) => state.adminReducer);
  const refUpdateForm = useRef(null);
  const dispatch = useDispatch();

  // Cấu hình các cột của bảng
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Job ID",
      dataIndex: "maCongViec",
      key: "maCongViec",
    },
    {
      title: "Hirer ID",
      dataIndex: "maNguoiThue",
      key: "maNguoiThue",
    },
    {
      title: "Hire Day",
      key: "ngayThue",
      dataIndex: "ngayThue",
    },
    {
      title: "Condition",
      key: "hoanThanh",
      dataIndex: "hoanThanh",
      render: (condition) =>
        condition ? (
          <p className="m-0 text-success">Hoàn thành</p>
        ) : (
          <p className="m-0 text-danger">Chưa hoàn thành</p>
        ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, service) => (
        <div className="d-flex gap-3">
          {/* Nút chỉnh sửa */}
          <UpdateService service={service} ref={refUpdateForm} />
          <Button
            onClick={() => {
              if (refUpdateForm.current) {
                refUpdateForm.current.open();
              }
            }}
            type="primary"
          >
            View & Edit
          </Button>
          {/* Nút xóa */}
          <Button
            type="primary"
            danger
            onClick={() => {
              if (service.id) {
                dispatch(delServiceHireApi(service.id));
              }
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  // Lấy danh sách dịch vụ thuê khi component được render
  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(getServiceHireApi());
    }
  }, [dispatch]);

  return (
    <>
      {/* Thành phần thêm dịch vụ */}
      <AddService />
      {/* Hiển thị bảng */}
      <Table columns={columns} dataSource={allServiceHire || []} rowKey="id" />
    </>
  );
}
