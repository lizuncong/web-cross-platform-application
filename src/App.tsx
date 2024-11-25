import React, { memo, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "antd/dist/antd.css";

function App() {

  return (
    <ConfigProvider locale={zhCN}>
      <Outlet />
    </ConfigProvider>
  );
}

export default App;
