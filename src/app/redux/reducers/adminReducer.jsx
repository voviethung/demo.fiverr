import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { getStore, http } from "../../util/setting";
import { getProfileApi } from "./userReducer";

const initialState = {
  allUser: [],
  allServiceHire: [],
  allCongViec: [],
  allJobType: [],
  user: {
    id: "",
    email: "",
    name: "",
    phone: "",
    birthday: "",
    role: "",
    certification: [],
    skill: [],
    gender: false,
  },
};

const adminReducer = createSlice({
  name: "adminReducer",
  initialState,
  reducers: {
    getAllUser: (state, action) => {
      state.allUser = action.payload;
    },
    getAllCongViecAction: (state, action) => {
      state.allCongViec = action.payload;
    },
    getAllServiceHire: (state, action) => {
      state.allServiceHire = action.payload;
    },
    getAllJobType: (state, action) => {
      state.allJobType = action.payload;
    },
    getUserAction: (state, action) => {
      state.user = action.payload;
    },
    getUserSearch: (state, action) => {
      state.allUser = action.payload;
    },
  },
});

export const {
  getAllUser,
  getAllCongViecAction,
  getAllServiceHire,
  getAllJobType,
  getUserAction,
  getUserSearch,
} = adminReducer.actions;

export default adminReducer.reducer;

// ---------------------------------------------------- action api -------------------------------------------------

// -------------------------------  manageUser ------------------------------ //
// danh sách user
export const getUserApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/users`);
      let allUser = result.data.content;
      dispatch(getAllUser(allUser));
    } catch (err) {
      console.log(err);
    }
  };
};

// xem thông tin user
export const userIdApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/users/${id}`);
      dispatch(getUserAction(result.data.content));
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    }
  };
};

// thêm admin
export const registerAdminApi = (user) => {
  return async (dispatch) => {
    try {
      const result = await http.post("/users", user);
      toast.success("Thêm quản trị thành công!");
      dispatch(getUserApi());
    } catch (err) {
      toast.error(err.response?.data?.content);
    }
  };
};

// xoá user
export const delUserApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await http.delete(`/users?id=${id}`);
      toast.success(result.data.message);
      dispatch(getUserApi());
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    }
  };
};

// cập nhật user
export const updateUserApi = (data) => {
  return async (dispatch) => {
    try {
      http.put(`/users/${getStore("id_user")}`, data).finally(() =>
        dispatch(getProfileApi())
      );
    } catch (err) {
      console.log(err);
    }
  };
};

// tìm user
export const searchUserApi = (key) => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/users/search/${key}`);
      let data = result.data.content;
      let newData = data.map((e) => ({
        ...e,
        certification: JSON.parse(e.certification),
        skill: JSON.parse(e.skill),
      }));
      dispatch(getUserSearch(newData));
    } catch (err) {
      console.log(err);
    }
  };
};

// -------------------------------  manageJob ------------------------------ //
// Danh sách công việc
export const getAllCongViecApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/cong-viec`);
      let allCongViec = result.data.content;
      dispatch(getAllCongViecAction(allCongViec));
    } catch (err) {
      console.log(err);
    }
  };
};

// thêm công việc
export const addJobApi = (job) => {
  return async (dispatch) => {
    try {
      const result = await http.post(`/cong-viec`, job);
      toast.success("Thêm công việc thành công!");
      dispatch(getAllCongViecApi());
    } catch (err) {
      toast.error(err.response?.data?.content);
    }
  };
};

// Xoá công việc
export const delCongViecApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await http.delete(`/cong-viec/${id}`);
      toast.success(result.data.message);
      dispatch(getAllCongViecApi());
    } catch (err) {
      console.log(err);
      toast.error("Error");
    }
  };
};

// sửa công việc
export const updateJobApi = (jobUpdate, file) => {
  return async (dispatch) => {
    try {
      await http.put(`/cong-viec/${getStore("id_job")}`, jobUpdate);
      let data = new FormData();
      data.append("formFile", file);
      await http.post(
        `/cong-viec/upload-hinh-cong-viec/${getStore("id_job")}`,
        data
      ).finally(() => dispatch(getAllCongViecApi()));
    } catch (err) {
      console.log(err);
    }
  };
};

// -------------------------------  manageJobType ------------------------------ //
// danh sách jobtype
export const getJobTypeApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/loai-cong-viec`);
      dispatch(getAllJobType(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};

// xoá
export const delJobTypeApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await http.delete(`/loai-cong-viec/${id}`);
      toast.success(result.data.message);
      dispatch(getJobTypeApi());
    } catch (err) {
      toast.error("Xóa không thành công");
    }
  };
};

// cập nhật
export const updateJobTypeApi = (id, data) => {
  return async (dispatch) => {
    try {
      const result = await http.put(`/loai-cong-viec/${id}`, data);
      toast.success(result.data.message);
      dispatch(getJobTypeApi());
    } catch (err) {
      toast.error("Cập nhật không thành công");
    }
  };
};

// thêm
export const addJobTypeApi = (data) => {
  return async (dispatch) => {
    try {
      const result = await http.post("/loai-cong-viec", data);
      toast.success(result.data.message);
      dispatch(getJobTypeApi());
    } catch (err) {
      toast.error("Thêm mới không thành công!");
    }
  };
};

// -------------------------------  Service ------------------------------ //
export const getServiceHireApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/thue-cong-viec`);
      dispatch(getAllServiceHire(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};

// xoá
export const delServiceHireApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await http.delete(`/thue-cong-viec/${id}`);
      toast.success(result.data.message);
      dispatch(getServiceHireApi());
    } catch (err) {
      toast.error("Xóa không thành công!");
    }
  };
};

// cập nhật
export const updateServiceHireApi = (id, data) => {
  return async (dispatch) => {
    try {
      const result = await http.put(`/thue-cong-viec/${id}`, data);
      toast.success(result.data.message);
      dispatch(getServiceHireApi());
    } catch (err) {
      toast.error("Cập nhật không thành công!");
    }
  };
};

// thêm
export const addServiceHireApi = (data) => {
  return async (dispatch) => {
    try {
      const result = await http.post("/thue-cong-viec", data);
      toast.success(result.data.message);
      dispatch(getServiceHireApi());
    } catch (err) {
      toast.error("Thêm mới không thành công!");
    }
  };
};
