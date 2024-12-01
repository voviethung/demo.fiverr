import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { http, timeout } from "../../util/setting";

// Khởi tạo state ban đầu
const initialState = {
  arrComment: [],
  jobComment: {
    ngayBinhLuan: "",
    noiDung: "",
    saoBinhLuan: 0,
    tenNguoiBinhLuan: "",
    avatar: "",
  },
};

const binhLuanReducer = createSlice({
  name: "binhLuanReducer",
  initialState,
  reducers: {
    getJobComment: (state, action) => {
      state.arrComment = action.payload;
    },
  },
});

export const { getJobComment } = binhLuanReducer.actions;

export default binhLuanReducer.reducer;

//----------------API------------------------

// Lấy danh sách bình luận theo công việc
export const getJobCommentApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await http.get(
        `/binh-luan/lay-binh-luan-theo-cong-viec/${id}`
      );
      const comments = result.data.content;
      dispatch(getJobComment(comments));
    } catch (err) {
      console.log(err);
    }
  };
};

// Gửi bình luận mới
export const postCommentApi = (comment) => {
  return async (dispatch) => {
    try {
      await http.post("/binh-luan", comment);
      await timeout(1000);
      dispatch(getJobCommentApi(comment.maCongViec));
    } catch (err) {
      console.log(err);
    }
  };
};
