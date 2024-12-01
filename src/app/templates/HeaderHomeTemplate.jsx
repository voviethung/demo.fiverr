import React from "react";
import HeaderTsWithProvider from "../components/HeaderTsWithProvider/HeaderTsWithProvider";
import CategoriesMenuTsWithProvider from "../components/CategoriesMenuTsWithProvider/CategoriesMenuTsWithProvider"

// import {Outlet} from "react-router-dom";


export default function HeaderHomeTemplate({}) {
  return (
    <div>
      <HeaderTsWithProvider/>
      <CategoriesMenuTsWithProvider/>
      
    </div>
  );
}
