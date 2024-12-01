"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { http } from "../../util/setting";


const CommentForm = ({ detailJob }) => {
  // Lấy ngày hôm nay
  const current = new Date();
  const today = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const router = useRouter(); // Khởi tạo router để điều hướng


  // Khởi tạo Formik
  const form = useFormik(
  
  
  {
    initialValues: {
      noiDung: "",
    },
    onSubmit: async (values) => {
      const token = localStorage.getItem("access_token"); // Lấy token từ localStorage
      const idnguoibinhluan = localStorage.getItem("id_login"); // Lấy token từ localStorage
      if (!token) {
        // Nếu chưa đăng nhập
        Swal.fire({
          icon: "warning",
          title: "Đăng nhập để tiếp tục bình luận",
        }).then(() => {
          router.push("/login"); // Điều hướng đến trang đăng nhập
        });
      } try {
        // Dữ liệu bình luận
        const commentData = {
          id: 0,
          ngayBinhLuan: today,
          maCongViec: detailJob.id,
          maNguoiBinhLuan: idnguoibinhluan,
          noiDung: values.noiDung,
          saoBinhLuan: 5, // Giả sử rating là 5, có thể truyền giá trị từ props
        };
        const response = await http.post("/binh-luan", commentData);

        Swal.fire({
          icon: "success",
          title: "Gửi bình luận thành công!",
          text: `Bạn đã gửi bình luận thành công`,
        })
        // if (onCommentSubmit) {
        //   onCommentSubmit(commentData); // Callback xử lý thêm comment
        // }
      }
      catch (error) {
        Swal.fire({
          icon: "error",
          title: "Có lỗi xảy ra",
          text: error.response?.data?.message || " Không thực hiện được bình luân!",
        });
      }
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <textarea
        onChange={form.handleChange}
        required
        name="noiDung"
        cols={100}
        rows={5}
        placeholder="Enter your comment"
        value={form.values.noiDung}
      ></textarea>
      <button type="submit" className="comment-submit">
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
