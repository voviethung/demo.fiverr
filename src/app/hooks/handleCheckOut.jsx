"use client"; // Quan trọng để hỗ trợ hooks như useState, useEffect trong Next.js

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"; // Thay thế useNavigate của React Router
import { rentJobApi } from "../redux/reducers/userReducer"; // Import trực tiếp
import { getDetailJobApi } from "../redux/reducers/jobReducer"; // Import trực tiếp

const handleCheckOut = () => {
  const dispatch = useDispatch(); // Sử dụng Redux dispatch
  const router = useRouter(); // Thay thế useNavigate
  const { detailJob } = useSelector((state) => state.jobReducer); // Lấy thông tin công việc từ Redux
  const { userLogin } = useSelector((state) => state.userReducer); // Lấy thông tin người dùng từ Redux

  // Lấy ngày hiện tại
  const current = new Date();
  const today = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  // Hàm xử lý thuê công việc
  const handleRentJob = () => {
    if (!userLogin) {
      Swal.fire({
        icon: "warning",
        title: "Vui lòng đăng nhập để thuê công việc",
      });
      router.push("/login"); // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
    } else {
      const rentJob = {
        id: 0,
        maCongViec: detailJob?.id, // Mã công việc lấy từ Redux
        maNguoiThue: userLogin?.id, // Mã người thuê lấy từ Redux
        ngayThue: today,
        hoanThanh: false,
      };

      // Gửi yêu cầu thuê công việc
      dispatch(rentJobApi(rentJob));
    }
  };

  // Lấy chi tiết công việc khi component mount
  useEffect(() => {
    const id = detailJob?.id; // Lấy ID công việc từ Redux hoặc props
    if (id) {
      dispatch(getDetailJobApi(id));
    }
  }, [dispatch, detailJob?.id]);

  return { handleRentJob }; // Trả về hàm để sử dụng trong component
};

export default handleCheckOut;
