"use client"
import React, { useEffect,useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { NavLink, useLocation } from "react-router-dom";
import { store } from "../../redux/configStore";
// import JobModel, {
//   DsChiTietLoai,
//   DsNhomChiTietLoai,
// } from "../../redux/models/JobModel";
import { getMenuLoaiCv } from "../../redux/reducers/jobReducer";

// type Props = {};

function CategoriesMenuTsWithProvider() {
  return (
    <Provider store={store}>
      <CategoriesMenuTs />
    </Provider>
  );
}
function CategoriesMenuTs({}) {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  //
  const { arrLoaiCV } = useSelector((state) => state.jobReducer);
  // console.log(arrLoaiCV);
  const dispatch = useDispatch();
  //
  useEffect(() => {
    const actionApi = getMenuLoaiCv();
    dispatch(actionApi);
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      if (router.pathname === "/") {
        setScrollPosition(window.scrollY);
      } else if (router.pathname !== "/") {
        setScrollPosition(0);
      }
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [router.pathname]);

  return (
    <section
      className={
        scrollPosition > 0 || router.pathname !== "/"
          ? "CategoriesMenu"
          : "CategoriesMenu CategoriesMenu-active"
      }
    >
      <div className="categoriesmenu_wrapper">
        <nav className="categoriesmenu_row">
          <div className="categoriesmenu_ul ">
            {arrLoaiCV.map((job, index) => {
              return (
                <div className="categoriesmenu_li" key={index}>
                  <Link className="links mb-0" href={`/title/${job.id}`}>
                    <p className="mb-0">{job.tenLoaiCongViec}</p>
                  </Link>
                  <div
                    className={`categoriesmenu_li_jobdetail categoriesmenu_li_jobdetail_${job.id}`}
                  >
                    {/* <ul className="categoriesmenu_li_jobdetail"> */}
                    {job.dsNhomChiTietLoai?.map(
                      (detail, index) => {
                        return (
                          <div
                            className="container-fluid d-flex flex-column"
                            key={index}
                          >
                            <p className="categoriesmenu_li_jobdetail_detail container fw-semibold">
                              {detail.tenNhom}
                            </p>
                            {detail.dsChiTietLoai?.map(
                              (job, index) => {
                                return (
                                  <Link
                                    className="categoriesmenu_li_jobdetail_detail_job container"
                                    href={`/categories/${job.id}`}
                                    key={index}
                                  >
                                    {job.tenChiTiet}
                                  </Link>
                                );
                              }
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </section>
  );
}
export default CategoriesMenuTsWithProvider