import React, { memo, useEffect } from "react";
import { message } from "antd";
import styles from './index.module.css'
const Index = memo(({ count, setCount }) => {

  return (
    <div className={styles.child}>
      子窗口共享父窗口的计数器：
      <div onClick={() => setCount(count + 1)}>计数器： {count}</div>
      <div
        onClick={() => {
          message.success("成功");
        }}
      >
        弹出antd的message组件
      </div>
    </div>
  );
});

export default Index;
