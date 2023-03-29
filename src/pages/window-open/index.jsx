import React, { memo, useState, useEffect } from "react";
import Modal from "../../components/modal";
import RemoteModal from "../../components/RemoteModal";
import Child from "./child";
const Index = memo(() => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
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
        <button
          onClick={() => {
            window.lzctest = 'lzctest'
            setVisible2(!visible2);
          }}
        >
          {visible2 ? "关闭子页面" : "打开子页面"}
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
      <RemoteModal
        visible={visible2}
        closeAfterBlur={false}
        route="/child-route"
        name={"modal"}
        winOptions={{ width: 400, height: 400, x: 0, y: 200 }}
        onClose={() => {
          setVisible2(false);
        }}
      ></RemoteModal>
    </>
  );
});

export default Index;
