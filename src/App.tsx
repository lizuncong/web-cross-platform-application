import React, { memo, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "antd/dist/antd.less";

function App() {
  useEffect(() => {
    if (window.opener) {
      // 子窗口
      window.opener.eventBus.push(() => {
        console.log('父窗口数据变化了')
      })
    } else {
      //@ts-ignore
      window.eventBus = [];
    }
  }, []);
  return (
    <ConfigProvider locale={zhCN}>
      <Outlet />
    </ConfigProvider>
  );
}

export default App;
