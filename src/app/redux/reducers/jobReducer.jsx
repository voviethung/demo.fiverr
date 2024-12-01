// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import { http } from "../../util/setting";
// import { AppDispatch } from "../configStore";
// import { history } from "../../index";
// import JobModel, {
//   CongViecChiTiet,
//   CongViecViewModel,
//   ThueCongViecViewModel,
// } from "../models/JobModel";

// const initialState: any = {
//   arrLoaiCV: [],
//   congViecDaThue: [],
//   arrCategory: [],
//   arrResult: [],
//   detailJob: {
//     id: 0,
//     congViec: {
//       id: 0,
//       tenCongViec: "",
//       giaTien: 0,
//       nguoiTao: 0,
//       hinhAnh: "",
//       moTa: "",
//       maChiTietLoaiCongViec: 0,
//       moTaNgan: "",
//       saoCongViec: 0,
//       danhGia: 0,
//     },
//     tenChiTietLoai: "",
//     tenNhomChiTietLoai: "",
//     tenNguoiTao: "",
//     tenLoaiCongViec: "",
//     avatar: "",
//   },
//   jobTitleDetail: {
//     id: 0,
//     tenLoaiCongViec: "",
//     dsNhomChiTietLoai: [
//       {
//         id: 0,
//         tenNhom: "",
//         hinhAnh: "",
//         maLoaiCongViec: 0,
//         dsChiTietLoai: [
//           {
//             id: 0,
//             tenChiTiet: "",
//           },
//         ],
//       },
//     ],
//   },
// };

// const jobReducer = createSlice({
//   name: "jobReducer",
//   initialState,
//   reducers: {
//     getAllMenuLoaiCvAction: (state, action: PayloadAction<JobModel[]>) => {
//       state.arrLoaiCV = action.payload;
//     },
//     getAllCongViecDaThueAction: (
//       state,
//       action: PayloadAction<ThueCongViecViewModel[]>
//     ) => {
//       state.congViecDaThue = action.payload;
//     },
//     getDetailJob: (state, action: PayloadAction<CongViecChiTiet>) => {
//       state.detailJob = action.payload;
//     },
//     getCategory: (state, action: PayloadAction<CongViecChiTiet[]>) => {
//       state.arrCategory = action.payload;
//     },
//     getResult: (state, action: PayloadAction<CongViecChiTiet[]>) => {
//       state.arrResult = action.payload;
//     },
//     getJobTitleDetailAction: (state, action: PayloadAction<JobModel>) => {
//       state.jobTitleDetail = action.payload;
//     },
//   },
// });

// export const {
//   getAllMenuLoaiCvAction,
//   getAllCongViecDaThueAction,
//   getCategory,
//   getResult,
//   getDetailJob,
//   getJobTitleDetailAction,
// } = jobReducer.actions;

// export default jobReducer.reducer;

// // -------------------------- action api ----------------------- //
// //
// export const getMenuLoaiCv = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const result = await http.get(`/cong-viec/lay-menu-loai-cong-viec`);
//       let arrLoaiCV: JobModel[] = result.data.content;
//       const action = getAllMenuLoaiCvAction(arrLoaiCV);
//       dispatch(action);
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
// // lấy danh sách cv đã thuê
// export const getCongViecApi = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const result = await http.get(`/thue-cong-viec/lay-danh-sach-da-thue`);
//       let congViecDaThue: ThueCongViecViewModel[] = result.data.content;
//       const action = getAllCongViecDaThueAction(congViecDaThue);
//       console.log(result);
//       dispatch(action);
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
// // Xoá Cv đã thuê
// export const delCVThueApi = (id: number) => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const result = await http.delete(`/thue-cong-viec/${id}`);
//       toast.success(result.data.message);
//       dispatch(getCongViecApi());
//     } catch (err) {
//       console.log(err);
//       toast.success("Error");
//     }
//   };
// };
// //
// export const getDetailJobApi = (id: string | number) => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const result = await http.get(`/cong-viec/lay-cong-viec-chi-tiet/${id}`);
//       const jobArray: CongViecChiTiet[] = result.data.content;
//       const job: CongViecChiTiet = jobArray[0];
//       dispatch(getDetailJob(job));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
// //
// export const getCategoryApi = (id: String | number) => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const result = await http.get(
//         `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`
//       );
//       const arrCategory: CongViecChiTiet[] = result.data.content;
//       dispatch(getCategory(arrCategory));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
// // trang kết quả seacrh
// export const getResultApi = (name: String) => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const result = await http.get(
//         `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${name}`
//       );
//       const arrResult: CongViecChiTiet[] = result.data.content;
//       dispatch(getResult(arrResult));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
// //
// export const getJobTitleDetailApi = (id: String | number) => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const result = await http.get(
//         `/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`
//       );
//       // const jobTitleDetail: congViecModel = result.data.content;
//       dispatch(getJobTitleDetailAction(result.data.content[0]));
//     } catch (err) {
//       console.log(err);
//       history.push("/");
//     }
//   };
// };
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { http } from "../../util/setting";
// import { history } from "../../index";

// Khởi tạo state ban đầu
const initialState = {
  arrLoaiCV: [],
  congViecDaThue: [],
  arrCategory: [],
  arrResult: [],
  detailJob: {
    id: 0,
    congViec: {
      id: 0,
      tenCongViec: "",
      giaTien: 0,
      nguoiTao: 0,
      hinhAnh: "",
      moTa: "",
      maChiTietLoaiCongViec: 0,
      moTaNgan: "",
      saoCongViec: 0,
      danhGia: 0,
    },
    tenChiTietLoai: "",
    tenNhomChiTietLoai: "",
    tenNguoiTao: "",
    tenLoaiCongViec: "",
    avatar: "",
  },
  jobTitleDetail: {
    id: 0,
    tenLoaiCongViec: "",
    dsNhomChiTietLoai: [
      {
        id: 0,
        tenNhom: "",
        hinhAnh: "",
        maLoaiCongViec: 0,
        dsChiTietLoai: [
          {
            id: 0,
            tenChiTiet: "",
          },
        ],
      },
    ],
  },
};

const jobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {
    getAllMenuLoaiCvAction: (state, action) => {
      state.arrLoaiCV = action.payload;
    },
    getAllCongViecDaThueAction: (state, action) => {
      state.congViecDaThue = action.payload;
    },
    getDetailJob: (state, action) => {
      state.detailJob = action.payload;
    },
    getCategory: (state, action) => {
      state.arrCategory = action.payload;
    },
    getResult: (state, action) => {
      state.arrResult = action.payload;
    },
    getJobTitleDetailAction: (state, action) => {
      state.jobTitleDetail = action.payload;
    },
  },
});

export const {
  getAllMenuLoaiCvAction,
  getAllCongViecDaThueAction,
  getCategory,
  getResult,
  getDetailJob,
  getJobTitleDetailAction,
} = jobReducer.actions;

export default jobReducer.reducer;

// -------------------------- action api ----------------------- //

// Lấy danh sách menu loại công việc
export const getMenuLoaiCv = () => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/cong-viec/lay-menu-loai-cong-viec`);
      const arrLoaiCV = result.data.content;
      dispatch(getAllMenuLoaiCvAction(arrLoaiCV));
    } catch (err) {
      console.log(err);
    }
  };
};

// Lấy danh sách công việc đã thuê
export const getCongViecApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/thue-cong-viec/lay-danh-sach-da-thue`);
      const congViecDaThue = result.data.content;
      dispatch(getAllCongViecDaThueAction(congViecDaThue));
    } catch (err) {
      console.log(err);
    }
  };
};

// Xoá công việc đã thuê
export const delCVThueApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await http.delete(`/thue-cong-viec/${id}`);
      toast.success(result.data.message);
      dispatch(getCongViecApi());
    } catch (err) {
      console.log(err);
      toast.error("Error");
    }
  };
};

// Lấy chi tiết công việc
export const getDetailJobApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/cong-viec/lay-cong-viec-chi-tiet/${id}`);
      const jobArray = result.data.content;
      const job = jobArray[0];
      dispatch(getDetailJob(job));
    } catch (err) {
      console.log(err);
    }
  };
};

// Lấy danh sách công việc theo chi tiết loại
export const getCategoryApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await http.get(
        `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`
      );
      const arrCategory = result.data.content;
      dispatch(getCategory(arrCategory));
    } catch (err) {
      console.log(err);
    }
  };
};

// Lấy kết quả tìm kiếm công việc
export const getResultApi = (name) => {
  return async (dispatch) => {
    try {
      const result = await http.get(
        `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${name}`
      );
      const arrResult = result.data.content;
      dispatch(getResult(arrResult));
    } catch (err) {
      console.log(err);
    }
  };
};

// Lấy chi tiết tiêu đề công việc
export const getJobTitleDetailApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await http.get(
        `/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`
      );
      dispatch(getJobTitleDetailAction(result.data.content[0]));
    } catch (err) {
      console.log(err);
      history.push("/");
    }
  };
};
