import React, { memo, useState, useEffect } from "react";
import Modal from "../../components/modal";
import Child from "./child";
const Index = memo(() => {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    // const tick = () => {
    //   console.log("父窗口 tick");
    //   requestAnimationFrame(tick);
    // };
    // requestAnimationFrame(tick);
  }, []);
  return (
    <>
      <div>
        <div onClick={() => setCount(count + 1)}>父窗口计数器：{count}</div>
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
        winOptions={{ width: 400, height: 400, x: 0, y: 200 }}
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
