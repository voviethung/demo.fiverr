"use client"
import React, { useEffect, useState } from "react";


export default function ResponsiveItem({
  Component,
  ComponentMobile,
  ComponentJSX,
}) {
  const [screen, setScreen] = useState<Screen>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    //khi người dùng resize
    let resizeFunction = () => {
      //lấy ra kích thước mới của window
      setScreen({ width: window.innerWidth, height: window.innerHeight });
    };

    window.onresize = resizeFunction;
    return () => {
      window.removeEventListener("resize", resizeFunction);
    };
  }, []);

  let ComponentRender = Component;
  if (screen.width < 768 && ComponentMobile) {
    ComponentRender = ComponentMobile;
  }

  return (
    <>
      <ComponentRender />
    </>
  );
}
