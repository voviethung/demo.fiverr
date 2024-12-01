"use client";

import { Table, Button } from "antd";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddJobType from "../../../HOC/JobTypeAdmin/AddJobType";
import UpdateJobType from "../../../HOC/JobTypeAdmin/UpdateJobType";
import { delJobTypeApi, getJobTypeApi } from "../../../redux/reducers/adminReducer";

export default function ManageJobType() {
  const { allJobType } = useSelector((state) => state.adminReducer);
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
      title: "Job Type",
      dataIndex: "tenLoaiCongViec",
      key: "tenLoaiCongViec",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, jobtype) => (
        <div className="d-flex gap-3">
          {/* Nút chỉnh sửa */}
          <UpdateJobType jobtype={jobtype} ref={refUpdateForm} />
          <Button
            type="primary"
            onClick={() => {
              if (refUpdateForm.current) {
                refUpdateForm.current.open();
              }
            }}
          >
            View & Edit
          </Button>
          {/* Nút xóa */}
          <Button
            type="primary"
            danger
            onClick={() => {
              if (jobtype.id) {
                dispatch(delJobTypeApi(jobtype.id));
              }
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  // Lấy danh sách loại công việc khi component được render
  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(getJobTypeApi());
    }
  }, [dispatch]);

  return (
    <>
      {/* Thành phần thêm loại công việc */}
      <AddJobType />
      {/* Hiển thị bảng */}
      <Table columns={columns} dataSource={allJobType || []} rowKey="id" />
    </>
  );
}
