"use client"
import React, { useEffect, useRef, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomLogo from "../../assets/CustomLogo/CustomLogo";
import { store } from "../../redux/configStore";
import { FaBars } from "react-icons/fa";
import { getProfileApi, signOutAction } from "../../redux/reducers/userReducer";
// import { history } from "../../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { timeout } from "../../util/setting";
import {
  ACCESS_TOKEN,
  clearStore,
  ID_LOGIN,
  ROLE_lOGIN,
  USER_LOGIN,
} from "../../util/setting";
//
// type Props = {
//   fill?: string;
// };
// const logo = require("../../assets/img/logo.png");
library.add(fas);
//
function HeaderTsWithProvider() {
  return (
    <Provider store={store}>
      <HeaderTs />
    </Provider>
  );
}
function HeaderTs({ }) {
  const dispatch = useDispatch();
  const router = useRouter();
  // const [param, setParam] = useState("");
  const [keyword, setKeyword] = useState('');

  // const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  //
  // const navigate = useNavigate();
  const { userLogin } = useSelector((state) => state.userReducer);
  console.log(userLogin);
  //
  const renderItem = () => {
    if (Object.keys(userLogin).length === 0) {
      return <Link href={"/login"}>Sign in</Link>;
    } else {
      return (
        <div className="dropdown">
          <Link href={"/profile"} className="dropdown-toggle"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            {userLogin?.avatar ? (
              <figure className="mb-0">
                <img
                  src={userLogin?.avatar}
                  alt="avatar"
                  className="avatar"
                  style={{ borderRadius: 50, width: 30, height: 30 }}
                />
              </figure>
            ) : (
              <p className="text my-0">{userLogin?.name}</p>
            )}
          </Link>

          {/* bổ sung thêm dropdown Đăng xuất */}
          <ul className="dropdown-menu dropdown-menu-end p-0" aria-labelledby="dropdownMenuButton1">
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => {
                  clearStore(ACCESS_TOKEN);
                  clearStore(USER_LOGIN);
                  clearStore(ID_LOGIN);
                  clearStore(ROLE_lOGIN);
                  dispatch(signOutAction(userLogin));
                  router.push("/"); // Use router.push to redirect to home
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>





      );
    }
  };
  const renderItem2 = () => {
    if (Object.keys(userLogin).length === 0) {
      return (
        <li
          className="join"
          onClick={() => {
            router.push("/register");
          }}
        >
          <Link href={"/register"}>Join</Link>
        </li>
      );
    } else {
      return (
        <li
          className="join d-none"
          onClick={() => {
            router.push("/register");
          }}
        >
          <Link href={"/register"}>Join</Link>
        </li>
      );
    }
  };
  const renderItemNav = () => {
    if (Object.keys(userLogin).length === 0) {
      return (
        <Link className="btn btn-success w-100" href={"/login"}>
          Sign in
        </Link>
      );
    } else {
      return (
        <div>
          {userLogin?.avatar ? (
            <figure className="mb-0 d-flex">
              <img
                src={userLogin?.avatar}
                alt="avatar"
                className="nav_avatar"
                style={{ borderRadius: 50, width: 50, height: 50 }}
              />
              <div className="d-flex flex-column align-items-start  mx-3">
                <h6>{userLogin?.name}</h6>
                <p>{userLogin?.email}</p>
              </div>
            </figure>
          ) : (
            <div className="d-flex flex-column align-items-start">
              <h6>{userLogin?.name}</h6>
              <p>{userLogin?.email}</p>
            </div>
          )}
        </div>
      );
    }
  };
  useEffect(() => {
    dispatch(getProfileApi());
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
  //
  // const handelSubmit = async (e) => {
  //   e.preventDefault();
  //   await timeout(1000);
  //   router.push(`/result?keyword=${keyword}`);
  // };
  // const handelChange = (e) => {
  //   setParam(e.target.value);
  // };
  //
  return (
    <header
      className={
        scrollPosition > 0 || router.pathname !== "/"
          ? "header"
          : "header header-active"
      }
    >
      <div className="header_wrapper">
        <div className="header_row">
          <div className="left">
            <div className="d-flex">
              <div>
                <button
                  className="nav_icon"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <FaBars />
                </button>
                <div
                  className="offcanvas offcanvas-start"
                  tabIndex={-1}
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header align-items-center">
                    <div className="d-flex gap-3">{renderItemNav()}</div>
                    <button
                      type="button"
                      className="btn-close text-reset d-flex align-items-center"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      style={{ boxShadow: "none" }}
                    >
                      {/* <ImCross /> */}
                    </button>
                  </div>
                  <div className="offcanvas-body">
                    <div className="nav_item">
                      <div className="nav_item_ul d-flex flex-column ">
                        <Link href={""} style={{ color: "#1bdf73" }}>
                          Fiverr Pro
                        </Link>
                        <Link href={""}>Explore</Link>
                        <Link href={""}>Messages</Link>
                        <Link href={""}>List</Link>
                        <Link href={""}>Orders</Link>
                      </div>
                    </div>
                    <div className="dropdown mt-3">
                      <div
                        className=" dropdown-toggle"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                      >
                        Help & Resources
                      </div>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Help Center
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Fiverr Forum
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Fiverr Blogs
                          </a>
                        </li>
                        <div className="tW6GKQA">
                          <div className="Wb8wmFx" />
                        </div>
                        <li>
                          <a className="dropdown-item" href="#">
                            Ask the Community
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Contact Support
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <Link href={"/"} className="logo">
                <CustomLogo
                  color={
                    scrollPosition > 0 || router.pathname !== "/"
                      ? "#404145"
                      : "#fff"
                  }
                />
              </Link>
            </div>
            <div className="header_search">
              <form className="search_form" onSubmit={(e) => {
                e.preventDefault();
                router.push(`/result?keyword=${keyword}`)
              }}>
                <div className="search">
                  <span>
                    <input
                      value={keyword}
                      name="resultParam"
                      type="search"
                      className="inp"
                      placeholder="Find Services"
                      onChange={(e) => {
                        setKeyword(e.target.value);
                      }}
                    />
                  </span>
                </div>
                <button className="btn">Search</button>
              </form>
            </div>
          </div>
          <div className="right">
            <nav className="header_navbar">
              <ul className="ul">
                <li className="li_1 li_fiverr">Fiverr Pro</li>
                <li className="li_1">Explore</li>
                <li className="li_1">
                  <FontAwesomeIcon
                    icon={["fas", "globe"]}
                    className="fa mx-1"
                  />
                  English
                </li>
                <li className="li_1">Become a Seller</li>
                <li>{renderItem()}</li>
                {renderItem2()}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
export default HeaderTsWithProvider