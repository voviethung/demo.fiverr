// "use client"
// import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import CustomLogo from "../../assets/CustomLogo/CustomLogo";
// // import { AppDispatch, RootState } from "../../redux/configStore";
// import { FaBars } from "react-icons/fa";
// import { getProfileApi } from "../../redux/reducers/userReducer";
// // import { history } from "../../index";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { timeout } from "../../util/setting";
// //

// const logo = require("../../assets/img/logo.png");
// library.add(fas);
// //
// export default function Header({}) {
//   const dispatch = useDispatch();
//   const [param, setParam] = useState("");
//   const location = useLocation();
//   const [scrollPosition, setScrollPosition] = useState(0);

//   //
//   const navigate = useNavigate();
//   const { userLogin } = useSelector((state) => state.userReducer);
//   console.log(userLogin);
//   //
//   const renderItem = () => {
//     if (Object.keys(userLogin).length === 0) {
//       return <NavLink to={"/login"}>Sign in</NavLink>;
//     } else {
//       return (
//         <NavLink to={"/profile"}>
//           {userLogin?.avatar ? (
//             <figure className="mb-0">
//               <img
//                 src={userLogin?.avatar}
//                 alt="avatar"
//                 className="avatar"
//                 style={{ borderRadius: 50, width: 50, height: 50 }}
//               />
//             </figure>
//           ) : (
//             <p className="text my-0">{userLogin?.name}</p>
//           )}
//         </NavLink>
//       );
//     }
//   };
//   const renderItem2 = () => {
//     if (Object.keys(userLogin).length === 0) {
//       return (
//         <li
//           className="join"
//           onClick={() => {
//             navigate("/register");
//           }}
//         >
//           <NavLink to={"/register"}>Join</NavLink>
//         </li>
//       );
//     } else {
//       return (
//         <li
//           className="join d-none"
//           onClick={() => {
//             navigate("/register");
//           }}
//         >
//           <NavLink to={"/register"}>Join</NavLink>
//         </li>
//       );
//     }
//   };
//   const renderItemNav = () => {
//     if (Object.keys(userLogin).length === 0) {
//       return (
//         <NavLink className="btn btn-success w-100" to={"/login"}>
//           Sign in
//         </NavLink>
//       );
//     } else {
//       return (
//         <div>
//           {userLogin?.avatar ? (
//             <figure className="mb-0 d-flex">
//               <img
//                 src={userLogin?.avatar}
//                 alt="avatar"
//                 className="nav_avatar"
//                 style={{ borderRadius: 50, width: 50, height: 50 }}
//               />
//               <div className="d-flex flex-column align-items-start  mx-3">
//                 <h6>{userLogin?.name}</h6>
//                 <p>{userLogin?.email}</p>
//               </div>
//             </figure>
//           ) : (
//             <div className="d-flex flex-column align-items-start">
//               <h6>{userLogin?.name}</h6>
//               <p>{userLogin?.email}</p>
//             </div>
//           )}
//         </div>
//       );
//     }
//   };
//   useEffect(() => {
//     dispatch(getProfileApi());
//   }, []);

//   useEffect(() => {
//     const updatePosition = () => {
//       if (location.pathname === "/") {
//         setScrollPosition(window.pageYOffset);
//       } else if (location.pathname !== "/") {
//         setScrollPosition(0);
//       }
//     };
//     window.addEventListener("scroll", updatePosition);
//     updatePosition();
//     return () => window.removeEventListener("scroll", updatePosition);
//   }, [location.pathname]);
//   //
//   const handelSubmit = async (e) => {
//     e.preventDefault();
//     await timeout(1000);
//     navigate(`/result/${param}`);
//   };
//   const handelChange = (e) => {
//     setParam(e.target.value);
//   };
//   //
//   return (
//     <header
//       className={
//         scrollPosition > 0 || location.pathname !== "/"
//           ? "header"
//           : "header header-active"
//       }
//     >
//       <div className="header_wrapper">
//         <div className="header_row">
//           <div className="left">
//             <div className="d-flex">
//               <div>
//                 <button
//                   className="nav_icon"
//                   type="button"
//                   data-bs-toggle="offcanvas"
//                   data-bs-target="#offcanvasExample"
//                   aria-controls="offcanvasExample"
//                 >
//                   <FaBars />
//                 </button>
//                 <div
//                   className="offcanvas offcanvas-start"
//                   tabIndex={-1}
//                   id="offcanvasExample"
//                   aria-labelledby="offcanvasExampleLabel"
//                 >
//                   <div className="offcanvas-header align-items-center">
//                     <div className="d-flex gap-3">{renderItemNav()}</div>
//                     <button
//                       type="button"
//                       className="btn-close text-reset d-flex align-items-center"
//                       data-bs-dismiss="offcanvas"
//                       aria-label="Close"
//                       style={{ boxShadow: "none" }}
//                     >
//                       {/* <ImCross /> */}
//                     </button>
//                   </div>
//                   <div className="offcanvas-body">
//                     <div className="nav_item">
//                       <div className="nav_item_ul d-flex flex-column ">
//                         <NavLink to={""} style={{ color: "#1bdf73" }}>
//                           Fiverr Pro
//                         </NavLink>
//                         <NavLink to={""}>Explore</NavLink>
//                         <NavLink to={""}>Messages</NavLink>
//                         <NavLink to={""}>List</NavLink>
//                         <NavLink to={""}>Orders</NavLink>
//                       </div>
//                     </div>
//                     <div className="dropdown mt-3">
//                       <div
//                         className=" dropdown-toggle"
//                         id="dropdownMenuButton"
//                         data-bs-toggle="dropdown"
//                       >
//                         Help & Resources
//                       </div>
//                       <ul
//                         className="dropdown-menu"
//                         aria-labelledby="dropdownMenuButton"
//                       >
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Help Center
//                           </a>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Fiverr Forum
//                           </a>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Fiverr Blogs
//                           </a>
//                         </li>
//                         <div className="tW6GKQA">
//                           <div className="Wb8wmFx" />
//                         </div>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Ask the Community
//                           </a>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Contact Support
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <NavLink to={""} className="logo">
//                 <CustomLogo
//                   color={
//                     scrollPosition > 0 || location.pathname !== "/"
//                       ? "#404145"
//                       : "#fff"
//                   }
//                 />
//               </NavLink>
//             </div>
//             <div className="header_search">
//               <form className="search_form" onSubmit={handelSubmit}>
//                 <div className="search">
//                   <span>
//                     <input
//                       name="resultParam"
//                       type="search"
//                       className="inp"
//                       placeholder="Find Services"
//                       onChange={handelChange}
//                     />
//                   </span>
//                 </div>
//                 <button className="btn">Search</button>
//               </form>
//             </div>
//           </div>
//           <div className="right">
//             <nav className="header_navbar">
//               <ul className="ul">
//                 <li className="li_1 li_fiverr">Fiverr Business</li>
//                 <li className="li_1">Explore</li>
//                 <li className="li_1">
//                   <FontAwesomeIcon
//                     icon={["fas", "globe"]}
//                     className="fa mx-1"
//                   />
//                   English
//                 </li>
//                 <li className="li_1">US$ USD</li>
//                 <li className="li_1">Become a Seller</li>
//                 <li>{renderItem()}</li>
//                 {renderItem2()}
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link"; // Thay NavLink bằng Link của Next.js
// import { useRouter } from "next/navigation"; // Thay useNavigate và useLocation bằng useRouter
// // import "../../assets/scss/components/header/header.scss"
// import axios from "axios"; // Sử dụng axios để gọi API trực tiếp
// import SearchBar from "../SearchBar/SearchBar";

// const Header = () => {
//   const [userLogin, setUserLogin] = useState(null); // State để lưu thông tin người dùng đăng nhập
//   const [scrollPosition, setScrollPosition] = useState(0); // Theo dõi vị trí scroll
//   const [param, setParam] = useState(""); // Dữ liệu input tìm kiếm

//   const router = useRouter(); // Hook điều hướng của Next.js

//   // Hàm gọi API để lấy thông tin người dùng
//   const fetchUserProfile = async () => {
//     try {
//       const response = await axios.get("/api/user/profile"); // Gọi API trực tiếp
//       setUserLogin(response.data); // Lưu thông tin vào state
//     } catch (error) {
//       console.error("Lỗi khi lấy thông tin người dùng:", error);
//     }
//   };

//   // Hàm xử lý khi người dùng nhấn submit tìm kiếm
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     router.push(`/result/${param}`); // Chuyển hướng đến trang kết quả
//   };

//   // Cập nhật vị trí scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Lấy dữ liệu người dùng khi load component
//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   // Render avatar hoặc tên người dùng
//   const renderUserInfo = () => {
//     if (!userLogin) {
//       return <Link href="/login">Sign in</Link>;
//     }

//     return (
//       <Link href="/profile">
//         {userLogin.avatar ? (
//           <img
//             src={userLogin.avatar}
//             alt="avatar"
//             className="avatar"
//             style={{ borderRadius: "50%", width: 50, height: 50 }}
//           />
//         ) : (
//           <p className="text">{userLogin.name}</p>
//         )}
//       </Link>
//     );
//   };

//   return (
//     <header
//       className={
//         scrollPosition > 0 ? "header header-scrolled" : "header header-active"
//       }
//     >
//       <div className="header_wrapper">
//         <div className="header_row">
//           <div className="left">
//             <Link href="/" className="logo">
//               <img src="/logo.png" alt="Logo" style={{ height: 50 }} />
//             </Link>
//             {/* <form className="search_form" onSubmit={handleSearchSubmit}>
//               <input
//                 type="text"
//                 placeholder="Find Services"
//                 value={param}
//                 onChange={(e) => setParam(e.target.value)}
//                 className="search_input"
//               />
//               <button type="submit" className="search_button">
//                 Search
//               </button>
//             </form> */}
//             <SearchBar/>
//           </div>
//           <div className="right">
//             <nav>
//               <ul>
//                 <li>
//                   <Link href="/explore">Explore</Link>
//                 </li>
//                 <li>
//                   <Link href="/business">Fiverr Business</Link>
//                 </li>
//                 <li>
//                   {renderUserInfo()}
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client"
import { useState } from 'react';
import Link from "next/link"; 
import useToggleDropdown from '../../hooks/useToggleDropdown';
import SearchBar from '../SearchBar/SearchBar';
// import styles from '../../app/styles/scss/_Navbar.module.scss'; // Import SCSS
// import SearchBar from "./SearchBar"

export default function Header() {
  const { isDropdownOpen: isProMenuOpen, toggleDropdown: toggleProMenu } = useToggleDropdown();
  const { isDropdownOpen: isExploreMenuOpen, toggleDropdown: toggleExploreMenu } = useToggleDropdown();
  const { isDropdownOpen: isLanguageMenuOpen, toggleDropdown: toggleLanguageMenu } = useToggleDropdown();

  return (

    <nav className="navbar navbar-light bg-white border-bottom px-4 py-2">
      {/* Logo và thanh tìm kiếm */}
      <div className="d-flex align-items-center">
        {/* Logo */}
        <Link href="/" className="logo">
        <img src="/img/fiverr-logo-png.png" alt="Logo" className="me-3" style={{ height: "25px" }} />
        </Link>
        {/* Thanh tìm kiếm */}
        <SearchBar />
        {/* <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="What service are you looking for today?"
          />
          <button className="btn btn-dark">
            <i className="fa fa-search text-white"></i>
          </button>
        </div> */}
      </div>

      {/* Menu điều hướng */}
      <div className="d-flex align-items-center">
        <div className="nav-item dropdown me-3">
          <a
            className="nav-link dropdown-toggle fw-bold"
            href="#"
            id="fiverrProDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            // onClick={toggleProMenu} // Toggle menu Pro
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f5f5f5"; // Nền xám nhạt khi hover
              e.currentTarget.style.padding = "0.5rem"; // Tăng padding khi hover
              e.currentTarget.style.margin = "0"; // Thêm margin khi hover
              e.currentTarget.style.borderRadius = "10%"

            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"; // Trở lại nền trong suốt khi không hover nữa
              e.currentTarget.style.padding = "0.5rem"; // Trở lại padding ban đầu
              e.currentTarget.style.margin = "0"; // Trở lại margin ban đầu
              e.currentTarget.style.borderRadius = "10%"
            }}
          >
            Fiverr Pro
          </a>
          {/* {isProMenuOpen && ( */}
          <ul className="dropdown-menu m-0 p-0" aria-labelledby="navbarDropdownPro">

            <li className="dropdown-item border rounded m-2 w-auto">
              <div className="d-flex align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fas fa-binoculars fa-2x me-3"></i>
                </div>
                <div>
                  <h6 className="fw-bold">I'm looking to hire</h6>
                  <small>My team needs vetted freelance talent <br /> and a premium business solution.</small>
                </div>
              </div>
            </li>
            <li className="dropdown-item border rounded m-2 w-auto">
              <div className="d-flex align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fas fa-handshake fa-2x me-3"></i>
                </div>
                <div>
                  <h6 className="fw-bold">I want to offer Pro services</h6>
                  <small>I'd like to work on business projects as a <br />Pro freelancer or agency.</small>
                </div>
              </div>
            </li>
          </ul>
          {/* )} */}
        </div>
        <div className="nav-item dropdown me-3">
          <a
            className="nav-link dropdown-toggle fw-bold"
            href="#"
            id="fiverrProDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f5f5f5"; // Nền xám nhạt khi hover
              e.currentTarget.style.padding = "0.5rem"; // Tăng padding khi hover
              e.currentTarget.style.margin = "0"; // Thêm margin khi hover
              e.currentTarget.style.borderRadius = "10%"

            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"; // Trở lại nền trong suốt khi không hover nữa
              e.currentTarget.style.padding = "0.5rem"; // Trở lại padding ban đầu
              e.currentTarget.style.margin = "0"; // Trở lại margin ban đầu
              e.currentTarget.style.borderRadius = "10%"
            }}
          >
            Explore
          </a>

          <ul className="dropdown-menu m-0 p-0" aria-labelledby="navbarDropdownPro">
            <li className="dropdown-item border rounded m-2 w-auto">
              <h6 className="fw-bold">Answers</h6>
              <small>Powered by AI, answered by Fiverr freelancers</small>
            </li>
            <li className="dropdown-item border rounded m-2 w-auto">
              <h6 className="fw-bold">Community</h6>
              <small>Connect with Fiverr’s team and community</small>
            </li>
            <li className="dropdown-item border rounded m-2 w-auto">
              <h6 className="fw-bold">Guides</h6>
              <small>In-depth guides covering business topics</small>
            </li>
            <li className="dropdown-item border rounded m-2 w-auto">
              <h6 className="fw-bold">Podcast</h6>
              <small>Inside tips from top business minds</small>
            </li>
            <li className="dropdown-item border rounded m-2 w-auto">
              <h6 className="fw-bold">Learn</h6>
              <small>Professional online courses, led by experts</small>
            </li>
            <li className="dropdown-item border rounded m-2 w-auto">
              <h6 className="fw-bold">Blog</h6>
              <small>News, information and community stories</small>
            </li>
            <li className="dropdown-item border rounded m-2 w-auto">
              <h6 className="fw-bold">Logo Maker</h6>
              <small>Create your logo instantly</small>
            </li>
          </ul>
        </div>

        <div className="nav-item dropdown me-3">
          <button
            type="button"
            className="btn fw-bold"
            data-bs-toggle="modal"
            data-bs-target="#languageModal"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#1dbf85'; // Màu xanh khi hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#212529'; // Trở lại màu mặc định khi không hover nữa
            }}
          >
            <i className="fas fa-globe me-1"></i> English
          </button>

          {/* Modal */}
          <div
            className="modal fade"
            id="languageModal"
            tabIndex="-1"
            aria-labelledby="languageModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <h5 className="modal-title fw-bold" id="languageModalLabel">Select your preferences</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-secondary-emphasis">
                  <ul className="nav nav-tabs mb-3" id="languageTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="language-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#language"
                        type="button"
                        role="tab"
                        aria-controls="language"
                        aria-selected="true"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#1dbf85'; // Màu xanh khi hover
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#212529'; // Trở lại màu mặc định khi không hover nữa
                        }}
                        onClick={(e) => {
                          e.currentTarget.style.color = '#1dbf85';
                        }}
                      >
                        Language
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="language-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#language"
                        type="button"
                        role="tab"
                        aria-controls="language"
                        aria-selected="true"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#1dbf85'; // Màu xanh khi hover
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#212529'; // Trở lại màu mặc định khi không hover nữa
                        }}
                        onClick={(e) => {
                          e.currentTarget.style.color = '#1dbf85';
                        }}
                      >
                        Currency
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    {/* Tab Language */}
                    <div
                      className="tab-pane fade show active"
                      id="language"
                      role="tabpanel"
                      aria-labelledby="language-tab"
                    >
                      <ul className="list-unstyled">
                        <li><a className="dropdown-item" href="#">English</a></li>
                        <li><a className="dropdown-item" href="#">Deutsch</a></li>
                        <li><a className="dropdown-item" href="#">Español</a></li>
                        <li><a className="dropdown-item" href="#">Français</a></li>
                        <li><a className="dropdown-item" href="#">Português</a></li>
                      </ul>
                    </div>
                    {/* Tab Currency */}
                    <div
                      className="tab-pane fade"
                      id="currency"
                      role="tabpanel"
                      aria-labelledby="currency-tab"
                    >
                      <ul className="list-unstyled">
                        <li><a className="dropdown-item" href="#">USD - US$</a></li>
                        <li><a className="dropdown-item" href="#">EUR - €</a></li>
                        <li><a className="dropdown-item" href="#">GBP - £</a></li>
                        <li><a className="dropdown-item" href="#">AUD - A$</a></li>
                        <li><a className="dropdown-item" href="#">CAD - CA$</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-item dropdown me-3">
          <a href="/become-a-seller" className="nav-link fw-bold"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#1dbf85'; // Màu xanh khi hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#212529'; // Trở lại màu mặc định khi không hover nữa
            }}
          >Become a Seller</a>
        </div>

        {/* Nút Sign In và Join */}
        <a href="/login" className="nav-link me-3 fw-bold"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#1dbf85'; // Màu xanh khi hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#212529'; // Trở lại màu mặc định khi không hover nữa
          }}

        >Sign In</a>
        <a href="/register">
          <button className="btn btn-outline-success fw-bold"
            style={{
              borderRadius: "10%",
              padding: "0.5rem 1rem"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.classList.remove('btn-outline-success');
              e.currentTarget.classList.add('btn-success', 'text-white');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove('btn-success', 'text-white');
              e.currentTarget.classList.add('btn-outline-success');
            }}
          >Join</button>
        </a>
      </div>
    </nav >


    // <nav className="navbar navbar-light bg-white border-bottom px-4 py-2">
    //   {/* Logo và thanh tìm kiếm */}
    //   <div className={styles.left}>
    //     <img src="/logo.png" alt="Logo" className={styles.logo} />
    //     <SearchBar/>
    //   </div>

    //   {/* Menu điều hướng */}
    //   <div className={styles.center}>
    //     <div className={styles.navItem} onClick={() => setProMenuOpen(!isProMenuOpen)}>
    //       Fiverr Pro <i className="fas fa-chevron-down"></i>
    //       {isProMenuOpen && (
    //         <div className={styles.dropdownMenu}>
    //           <div>I'm looking to hire</div>
    //           <div>I want to offer Pro services</div>
    //         </div>
    //       )}
    //     </div>

    //     <div className={styles.navItem} onClick={() => setExploreMenuOpen(!isExploreMenuOpen)}>
    //       Explore <i className="fas fa-chevron-down"></i>
    //       {isExploreMenuOpen && (
    //         <div className={styles.dropdownMenu}>
    //           <div>Answers</div>
    //           <div>Community</div>
    //           <div>Guides</div>
    //           <div>Podcast</div>
    //           <div>Learn</div>
    //           <div>Blog</div>
    //           <div>Logo Maker</div>
    //         </div>
    //       )}
    //     </div>

    //     <div className={styles.navItem} onClick={() => setLanguageMenuOpen(!isLanguageMenuOpen)}>
    //       <i className="fas fa-globe"></i> English
    //       {isLanguageMenuOpen && (
    //         <div className={styles.dropdownMenu}>
    //           <div>English</div>
    //           <div>Deutsch</div>
    //           <div>Español</div>
    //           <div>Français</div>
    //           <div>Português</div>
    //         </div>
    //       )}
    //     </div>
    //   </div>

    //   {/* Nút Sign In và Join */}
    //   <div className={styles.right}>
    //     <a href="/become-a-seller">Become a Seller</a>
    //     <a href="/sign-in">Sign In</a>
    //     <button className={styles.joinButton}>Join</button>
    //   </div>
    // </nav>
  );
}

