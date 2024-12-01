"use client";
// import { ToastContainer } from "react-toastify";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/configStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomLogo from "../../assets/CustomLogo/CustomLogo";
import UserUpdate from "../../HOC/UserUpdate/UserUpdate";
import {
  ACCESS_TOKEN,
  clearStore,
  getStore,
  ID_LOGIN,
  ROLE_lOGIN,
  USER_LOGIN,
} from "../../util/setting";
import { getProfileApi, signOutAction } from "../../redux/reducers/userReducer";
import { getAllCongViecApi } from "../../redux/reducers/adminReducer";
// import { toast, ToastContainer } from "react-toastify";

const { Header, Sider, Content } = Layout;

// Font imports
import localFont from "next/font/local";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function AdminLayout({ children }) {
  return (
    <Provider store={store}>
      <AdminLayoutWithProvider children={children} />
    </Provider>
  );
}

function AdminLayoutWithProvider({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const refUpdateUserDialog = useRef(null);
  const { userLogin } = useSelector((state) => state.userReducer);
  const router = useRouter();

  useEffect(() => {
    dispatch(getProfileApi());
    dispatch(getAllCongViecApi());
  }, [dispatch]);

  const role = getStore(ROLE_lOGIN);
  if (role !== "USER" && role !== "user") {
    toast.warning("Tài Khoản chưa đủ quyền truy cập Admin!");
    router.push("/login");
    return null;
  }

  return (
    <html lang="en">
      <head>
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        {/* Canonical link */}
        <link rel="canonical" href="https://shoesshopbc70.vercel.app" />
        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${roboto.className}`}>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="ant-layout-sider-children">
              <div className="d-flex flex-column">
                <div className="title mt-3 mx-3">
                  <h4>Dashboard</h4>
                </div>
                <ul className="ul mt-3 d-block">
                  <li className="li mt-5 mx-3">
                    <Link
                      className="text-dark active"
                      href="/admin/qlnd"
                      aria-current="page"
                    >
                      Manage User
                    </Link>
                  </li>
                  <li className="li mt-5 mx-3">
                    <Link className="text-dark" href="/admin/qlcv">
                      Manage Job
                    </Link>
                  </li>
                  <li className="li mt-5 mx-3">
                    <Link className="text-dark" href="/admin/qllcv">
                      Manage JobType
                    </Link>
                  </li>
                  <li className="li mt-5 mx-3">
                    <Link className="text-dark" href="/admin/qldv">
                      Manage Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background d-flex justify-content-between align-items-center p-4"
              style={{ padding: 0 }}
            >
              <div className="left">
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: () => setCollapsed(!collapsed),
                  }
                )}
                <a href="/"><CustomLogo color="#404145" /></a>
                {/* <Link href="/">
                  <CustomLogo color="#404145" />
                </Link> */}
              </div>
              <div className="dropdown d-flex justify-content-between align-items-center">
                <div
                  className="dropdown-toggle"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      padding: 10,
                    }}
                    src={userLogin?.avatar}
                    alt="avatar"
                  />
                  <span className="mx-2">{userLogin?.name}</span>
                </div>
                <ul className="dropdown-menu p-0" aria-labelledby="dropdownMenu2">
                  <li>
                    <UserUpdate ref={refUpdateUserDialog} />
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => {
                        router.push("/profile");
                      }}
                    >
                      Cập Nhật Thông Tin
                    </button>
                  </li>
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
                        router.push("/");
                      }}
                    >
                      Đăng Xuất
                    </button>
                  </li>
                </ul>
              </div>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                height: "100vh",
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
        {/* <ToastContainer position="top-right" autoClose={3000} /> */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
