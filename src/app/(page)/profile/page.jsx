"use client"
import _ from "lodash";
import React, { useRef } from "react";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/configStore";
import UserUpdate from "../../HOC/UserUpdate/UserUpdate";
// import { AppDispatch, RootState } from "../../redux/configStore";
// import {
//   CongViecViewModel,
//   ThueCongViecViewModel,
// // } from "../../redux/models/JobModel";
import { delCVThueApi, getCongViecApi } from "../../redux/reducers/jobReducer";
import { ToastContainer, toast } from "react-toastify";
import { getProfileApi, updateAvatar } from "../../redux/reducers/userReducer";
import { GoogleOutlined, PlusOutlined } from "@ant-design/icons";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import InfoProfile from "../../components/InfoProfile/InfoProfile";
// import GigsProfile from "../../components/GigsProfile/GigsProfile";
import GigsProfileWithProvider from "../../components/GigsProfile/GigsProfile";
// type Props = {};
//
// const img = require("../../assets/img/signup.jpg");
//
function UserDetailWithProvider() {
    return (
      <Provider store={store}>
        <UserDetail />
      </Provider>
    );
  }
function UserDetail({}) {
  //
  const refUpdateUserDialog = useRef(null);
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.userReducer);
  const { congViecDaThue } = useSelector(
    (state) => state.jobReducer
  );
  console.log(congViecDaThue);
  //
  useEffect(() => {
    dispatch(getProfileApi());
  }, []);

  useEffect(() => {
    dispatch(getCongViecApi());
  }, []);

  //
  return (
    <div className="main_content my-3">
      <div className="main_wrapper">
        <div className="main_row row">
          <InfoProfile />
          <GigsProfileWithProvider/>
        </div>
      </div>
    </div>
  );
}
export default UserDetailWithProvider
