import React, { memo, useEffect } from "react";
import { message, Button } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import imgSrc from "../../imgs/5.gif";
import styles from "./index.module.css";
const Index = memo(({ count, setCount }) => {
  return (
    <div className={[styles.container, styles.child].join(" ")}>
      子窗口共享父窗口的计数器：
      <div>
        计数器：
        <MinusCircleOutlined className={styles.icon} onClick={() => setCount(count - 1)} />
        <span className={styles.count}>{count}</span>
        <PlusCircleOutlined className={styles.icon} onClick={() => setCount(count + 1)} />
      </div>
      <Button
        className={styles.btn}
        type="primary"
        onClick={() => {
          message.success("成功");
        }}
      >
        弹出antd的message组件
      </Button>
      <img className={styles.img} src={imgSrc} alt="" />
    </div>
  );
});

export default Index;
