"use client";

import { Button, Input, Table, Tag } from "antd";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddAdmin from "../../../HOC/AddAdmin/AddAdmin";
import User from "../../../HOC/User/User";
import {
  delUserApi,
  getUserApi,
  searchUserApi,
  userIdApi,
} from "../../../redux/reducers/adminReducer";
import { setStore } from "../../../util/setting";

export default function ManageUser() {
  const refUserDialog = useRef(null);
  const dispatch = useDispatch();

  // Lấy thông tin từ Redux Store
  const { userLogin } = useSelector((state) => state.userReducer);
  const { allUser } = useSelector((state) => state.adminReducer);

  // Cột của bảng
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
      className: "text-uppercase",
    },
    {
      title: "Certification",
      key: "certification",
      dataIndex: "certification",
      render: (_, { certification }) => (
        <div>
          {certification?.map((tag) => (
            <Tag className="mt-1" key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
      ),
    },
    {
      title: "Skill",
      key: "skill",
      dataIndex: "skill",
      render: (_, { skill }) => (
        <div>
          {skill?.map((tag) => (
            <Tag className="mt-1" key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, { id }) => (
        <div className="d-flex gap-3">
          {/* Nút View & Edit */}
          <User ref={refUserDialog} id={id} />
          <Button
            type="primary"
            onClick={() => {
              if (refUserDialog.current) {
                setStore("id_user", id);
                refUserDialog.current.open();
                dispatch(userIdApi(id));
              }
            }}
          >
            View & Edit
          </Button>
          {/* Nút Delete */}
          <Button
            type="primary"
            danger
            onClick={() => {
              dispatch(delUserApi(id));
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  // Lấy danh sách người dùng khi component được render
  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(getUserApi());
    }
  }, [dispatch, userLogin]);

  return (
    <>
      {/* Thành phần thêm quản trị viên */}
      <AddAdmin />
      {/* Input tìm kiếm người dùng */}
      <Input
        placeholder="Tìm kiếm thông tin người dùng ..."
        type="text"
        className="inp_search mb-3"
        onChange={(e) => {
          const key = e.target.value.trim().toLowerCase();
          if (key) {
            dispatch(searchUserApi(key));
          } else {
            dispatch(getUserApi());
          }
        }}
      />
      {/* Bảng hiển thị danh sách người dùng */}
      <Table
        columns={columns}
        dataSource={allUser || []}
        rowKey="id" // Đảm bảo mỗi hàng có khóa duy nhất
      />
    </>
  );
}
