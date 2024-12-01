"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { http } from "../../util/setting";
import { toast } from "react-toastify";


const CheckoutButton = ({ detailJob }) => {
  const router = useRouter();

  const handleCheckOut = async () => {
    const token = localStorage.getItem("access_token"); // Lấy token từ localStorage
    const idLogin = localStorage.getItem("id_login");
    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "Bạn cần đăng nhập để thực hiện thuê công việc!",
      });
      router.push("/login");
      return;
    }

    try {
      // Thông tin cần gửi tới API
      const rentJob = {
        id: 0,
        maCongViec: detailJob.congViec?.id,
        maNguoiThue: idLogin, // Thay bằng user ID thực tế
        ngayThue: new Date().toISOString(),
        hoanThanh: false,
      };

      // Gọi API thông qua axios instance
      const response = await http.post("/thue-cong-viec", rentJob);

      Swal.fire({
        icon: "success",
        title: "Thuê công việc thành công!",
        text: `Bạn đã thuê công việc: ${detailJob.congViec?.tenCongViec}`,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Có lỗi xảy ra",
        text: error.response?.data?.message || "Thuê công việc thất bại!",
      });
    }
  };

  return (
    <button
      // style={{
      //   width: "200px",
      //   height: "50px",
      //   backgroundColor: "blue",
      //   color: "white",
      //   fontSize: "16px",
      // }}
      type="button"
      className="submit"
      onClick={handleCheckOut}
    >
      Continue (US${detailJob.congViec?.giaTien})
    </button>
  );
};

export default CheckoutButton;
