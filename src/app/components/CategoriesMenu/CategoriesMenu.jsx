// // "use client"
// // import {React, useState} from "react";
// // import Link from "next/link";
// // import "../../assets/scss/components/categoriesmenu/categoriesmenu.scss"
// // // import { useDispatch, useSelector } from "react-redux";
// // import { useRouter } from "next/router";
// // // import { useLocation } from "react-router-dom";
// // // import { AppDispatch, RootState } from "../../redux/configStore";
// // // import JobModel, {
// // //   DsChiTietLoai,
// // //   DsNhomChiTietLoai,
// // // } from "../../redux/models/JobModel";
// // import { getMenuLoaiCv } from "../../actions/service/productApi";

// // const CategoriesMenu = async(props) => {
// //   const router = useRouter();
// //   const pathname = router.pathname;
// //   // const location = useLocation();
// //   const [scrollPosition, setScrollPosition] = useState(0);
// //   //
// //   // const { arrLoaiCV } = useSelector((state) => state.jobReducer);

// //   const arrLoaiCV = await getMenuLoaiCv();
// //   // console.log(arrLoaiCV);
// //   // const dispatch = useDispatch();
// //   //
// //   // useEffect(() => {
// //   //   const actionApi = getMenuLoaiCv();
// //   //   dispatch(actionApi);
// //   // }, []);

// //   useEffect(() => {
// //     const updatePosition = () => {
// //       if (pathname === "/") {
// //         setScrollPosition(window.pageYOffset);
// //       } else if (pathname !== "/") {
// //         setScrollPosition(0);
// //       }
// //     };
// //     window.addEventListener("scroll", updatePosition);
// //     updatePosition();
// //     return () => window.removeEventListener("scroll", updatePosition);
// //   }, [pathname]);

// //   return (
// //     <section
// //       className={
// //         scrollPosition > 0 || pathname !== "/"
// //           ? "CategoriesMenu"
// //           : "CategoriesMenu CategoriesMenu-active"
// //       }
// //     >
// //       <div className="categoriesmenu_wrapper">
// //         <nav className="categoriesmenu_row">
// //           <div className="categoriesmenu_ul ">
// //             {arrLoaiCV.map((job, index) => {
// //               return (
// //                 <div className="categoriesmenu_li" key={index}>
// //                   <Link className="links mb-0" href={`/title/${job.id}`}>
// //                     <p className="mb-0">{job.tenLoaiCongViec}</p>
// //                   </Link>
// //                   <div
// //                     className={`categoriesmenu_li_jobdetail categoriesmenu_li_jobdetail_${job.id}`}
// //                   >
// //                     {/* <ul className="categoriesmenu_li_jobdetail"> */}
// //                     {job.dsNhomChiTietLoai?.map(
// //                       (detail, index) => {
// //                         return (
// //                           <div
// //                             className="container-fluid d-flex flex-column"
// //                             key={index}
// //                           >
// //                             <p className="categoriesmenu_li_jobdetail_detail container">
// //                               {detail.tenNhom}
// //                             </p>
// //                             {detail.dsChiTietLoai?.map(
// //                               (job, index) => {
// //                                 return (
// //                                   <Link
// //                                     className="categoriesmenu_li_jobdetail_detail_job container"
// //                                     href={`/categories/${job.id}`}
// //                                     key={index}
// //                                   >
// //                                     {job.tenChiTiet}
// //                                   </Link>
// //                                 );
// //                               }
// //                             )}
// //                           </div>
// //                         );
// //                       }
// //                     )}
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </nav>
// //       </div>
// //     </section>
// //   );
// // }
// // export default CategoriesMenu

// import React from "react";
// import Link from "next/link";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import "../../assets/scss/components/categoriesmenu/categoriesmenu.scss"
// import { getMenuLoaiCv } from "@/app/actions/service/productApi";
// import useHover from "@/app/hooks/useHover";

// const CategoriesMenu = async (props) => {
//   const arrLoaiCV = await getMenuLoaiCv();
//   const { hoveredId, handleMouseEnter, handleMouseLeave } = useHover();


//   // const [hoveredId, setHoveredId] = useState(null); // ID của nhóm hiện tại được hover

//   // const handleMouseEnter = (id) => {
//   //   setHoveredId(id); // Lưu lại ID của nhóm đang được hover
//   // };

//   // const handleMouseLeave = () => {
//   //   setHoveredId(null); // Xóa trạng thái hover
//   // };

//   return (
//     <div className="categories-menu">
//       <ul className="nav">
//         {arrLoaiCV.map((category) => (
//           <li
//             className="nav-item position-relative"
//             key={category.id}
//             onMouseEnter={() => handleMouseEnter(category.id)}
//             onMouseLeave={handleMouseLeave}
//           >
//             {/* Cấp 1: Hiển thị tên loại công việc */}
//             <Link
//               href="#"
//               className="nav-link text-dark fw-bold"
//               style={{
//                 color: hoveredId === category.id ? "#1dbf73" : "black",
//               }}
//             >
//               {category.tenLoaiCongViec}
//             </Link>

//             {/* Tab con hiển thị khi hover */}
//             {hoveredId === category.id && category.dsNhomChiTietLoai.length > 0 && (
//               <div className="dropdown-menu position-absolute">
//                 {category.dsNhomChiTietLoai.map((group) => (
//                   <div key={group.id} className="dropdown-item">
//                     <p className="fw-bold mb-1">{group.tenNhom}</p>
//                     <ul>
//                       {group.dsChiTietLoai.map((detail) => (
//                         <li key={detail.id} className="mb-1">
//                           <Link
//                             href={`/categories/${detail.id}`}
//                             className="text-decoration-none text-dark"
//                             style={{
//                               color: hoveredId === category.id ? "#1dbf73" : "black",
//                             }}
//                           >
//                             {detail.tenChiTiet}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategoriesMenu;

import React from "react";
import Link from "next/link";
import axios from "axios"; // Để gọi API
import { getMenuLoaiCv } from "../../actions/service/productApi";

const CategoriesMenu = async () => {
  const arrLoaiCV = await getMenuLoaiCv();

  return (
    <div className="container py-4">
      <ul className="nav nav-tabs">
        {arrLoaiCV.map((category) => (
          <li key={category.index} className="nav-item dropdown">
            <Link
              href={`/title/${category.id}`}
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {category.tenLoaiCongViec}
            </Link>
            {category.dsNhomChiTietLoai && category.dsNhomChiTietLoai.length > 0 && (
              <ul className="dropdown-menu">
                {category.dsNhomChiTietLoai.map((dsNhomChiTietLoai) => (
                  <li key={dsNhomChiTietLoai.index}>
                      {dsNhomChiTietLoai.tenNhom}
                    {dsNhomChiTietLoai.dsChiTietLoai && dsNhomChiTietLoai.dsChiTietLoai.length > 0 && (
                      <ul className="dropdown-menu">
                        {dsNhomChiTietLoai.dsChiTietLoai.map((dsChiTietLoai) => (
                          <li key={dsChiTietLoai.index}>
                            <Link
                              href={`/categories/${dsChiTietLoai.id}`}
                              className="dropdown-item"
                            >
                              {dsChiTietLoai.tenChiTiet}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesMenu;
