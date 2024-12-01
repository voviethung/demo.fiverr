import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import {
  ACCESS_TOKEN,
  getStore,
  setCookie,
  setStore,
  setStoreJson,
  ID_LOGIN,
  ROLE_lOGIN,
  USER_LOGIN,
  http,
} from "../../util/setting";
import { toast } from "react-toastify";
// import { history } from "../../index";
// import { useRouter } from "next/router";


// Khởi tạo state ban đầu
const initialState = {
  userLogin: {},
  role: "",
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
    signOutAction: (state) => {
      state.userLogin = {};
      toast.success("Đăng xuất thành công !");
    },
    getRoleAction: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { getProfileAction, signOutAction, getRoleAction } =
  userReducer.actions;

export default userReducer.reducer;

// -------------------------- API Actions -----------------------

// Đăng ký
export const registerApi = (user, router) => {
  return async () => {
    try {
      const result = await http.post(`/auth/signup`, user);
      toast.success("Đăng kí tài khoản thành công !");
      router.push(`/login`);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.content || "Đăng ký thất bại");
    }
  };
};

// Đăng nhập
export const loginApi = (userLogin, router) => {
  return async (dispatch) => {
    try {
      const result = await http.post(`/auth/signin`, userLogin);

      // Lưu thông tin đăng nhập
      setCookie(ACCESS_TOKEN, result.data.content.token, 30);
      setStore(ACCESS_TOKEN, result.data.content.token);

      setCookie(ID_LOGIN, result.data.content.user.id, 30);
      setStore(ID_LOGIN, result.data.content.user.id);

      setCookie(ROLE_lOGIN, result.data.content.user.role, 30);
      setStore(ROLE_lOGIN, result.data.content.user.role);

      // Chuyển hướng
      const role = getStore(ROLE_lOGIN);
      if (role === "ADMIN" || role === "admin") {
        router.push("/admin");
      } else {
        router.push("/profile");
      }

      toast.success("Đăng nhập tài khoản thành công !");
      dispatch(getProfileApi());
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.content || "Đăng nhập thất bại");
    }
  };
};

// Lấy thông tin người dùng
export const getProfileApi = (id_login = getStore(ID_LOGIN)) => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/users/${id_login}`);
      dispatch(getProfileAction(result.data.content));
      setStoreJson(USER_LOGIN, result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};

// Cập nhật thông tin người dùng
export const updateProfile = (data) => {
  return async (dispatch) => {
    try {
      await http.put(`/users/${getStore(ID_LOGIN)}`, data);
      dispatch(getProfileApi());
    } catch (err) {
      console.log(err);
    }
  };
};

// Cập nhật avatar
export const updateAvatar = (file) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("formFile", file);
      await http.post(`/users/upload-avatar`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      dispatch(getProfileApi());
    } catch (err) {
      console.log(err);
    }
  };
};

// Thuê công việc
export const rentJobApi = (rentJob) => {
  return async () => {
    try {
      await http.post("/thue-cong-viec", rentJob);
      toast.success("Thuê công việc thành công !");
    } catch (err) {
      console.log(err);
    }
  };
};
