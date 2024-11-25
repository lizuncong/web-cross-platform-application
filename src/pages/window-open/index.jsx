import React, { memo, useState, lazy } from "react";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import comp from "../../bridge/components";
import Child from "./child";
import styles from "./index.module.css";
const Modal = lazy(() => comp("Modal"));

const Index = memo(() => {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.container}>
        <div>
          计数器：
          <MinusCircleOutlined className={styles.icon} onClick={() => setCount(count - 1)} />
          <span className={styles.count}>{count}</span>
          <PlusCircleOutlined className={styles.icon} onClick={() => setCount(count + 1)} />
        </div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "关闭子窗口" : "打开子窗口"}
        </button>
      </div>
      <Modal
        visible={visible}
        closeAfterBlur={false}
        name={"modal"}
        winOptions={{ width: 400, height: 400, x: 200, y: 200 }}
        onClose={() => {
          setVisible(false);
        }}
      >
        <Child count={count} setCount={setCount} />
      </Modal>
    </>
  );
});

export default Index;
