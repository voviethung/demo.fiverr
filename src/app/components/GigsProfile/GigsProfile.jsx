"use client"
import _ from "lodash";
import React, { useRef } from "react";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/configStore";
import Link from "next/link";
// import { NavLink } from "react-router-dom";
// import { AppDispatch, RootState } from "../../redux/configStore";
// import { ThueCongViecViewModel } from "../../redux/models/JobModel";
import { delCVThueApi, getCongViecApi } from "../../redux/reducers/jobReducer";

// import { delCVThueApi, getCongViecApi } from "../../redux/reducers/jobReducer";
import { getProfileApi } from "../../redux/reducers/userReducer";
// type Props = {};
//
// const img = require("../../assets/img/signup.jpg");
// import img from "../../assets/img/signup.jpg";

function GigsProfileWithProvider() {
  return (
    <Provider store={store}>
      <GigsProfile />
    </Provider>
  );
}
function GigsProfile({}) {
  //
  const dispatch = useDispatch();
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
  return (
    <div className="gigs">
      <div className="gigs_card_top">
        <div className="gigs_card">
          <span className="col-lg-8 col-xl-6 col-8 col-sm-6">
            It seems that you don't have any active Gigs.
          </span>
          <button className="btn col-lg-3 col-xl-3 col-4 col-sm-4">
            {" "}
            Create a new Gig
          </button>
        </div>
      </div>
      <div className="gigs_card_bottom">
        {congViecDaThue?.map(
          (congViecThue, index) => {
            return (
              <div className="gigs_card" key={index}>
                <div className="row">
                  <div className="gigs_card_img">
                    <img
                      className="w-100"
                      src={congViecThue.congViec?.hinhAnh}
                      alt="..."
                    />
                  </div>
                  <div className="gigs_card_content">
                    <h1>{congViecThue.congViec?.tenCongViec}</h1>
                    <p>{congViecThue.congViec?.moTaNgan}</p>
                    <div className="d-flex justify-content-between danhgia">
                      <div className="left">
                        <i className="fa-solid fa-star" />
                        <span className="saoCV">
                          {congViecThue.congViec?.saoCongViec}
                        </span>{" "}
                        <span className="danhGia">
                          ( {congViecThue.congViec?.danhGia} )
                        </span>{" "}
                      </div>
                      <div className="right">
                        <p className="giaTien">
                          ${congViecThue.congViec?.giaTien}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn_edit">
                  <button className="viewdetail">
                    <Link
                      href={`/jobdetail/${congViecThue.congViec?.id}`}
                      className="text-light"
                    >
                      View detail
                    </Link>
                  </button>
                  <div className="right">
                    <button
                      className="delete"
                      onClick={() => {
                        const action = congViecThue.id;
                        // console.log(action);
                        dispatch(delCVThueApi(action));
                      }}
                    >
                      DEL
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
export default GigsProfileWithProvider
