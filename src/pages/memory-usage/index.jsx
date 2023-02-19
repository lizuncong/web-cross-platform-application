import React, { memo, useState } from "react";
import Modal from "../../components/modal";
import Images from "./images";
const Index = memo(() => {
  const [childArray, setChildArray] = useState([]);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div>
        <div>
          <button
            style={{ marginRight: "20px" }}
            onClick={() => {
              setChildArray([
                ...childArray,
                <Modal
                  visible={true}
                  key={childArray.length}
                  closeAfterBlur={false}
                  name={"app-modal" + childArray.length}
                  winOptions={{ width: 500, height: 600, x: 0, y: 200 }}
                  onClose={() => {}}
                >
                  <Images id={childArray.length} />
                </Modal>,
              ]);
            }}
          >
            多次点击按钮，通过window open打开多个新窗口
          </button>
          <button
            style={{ marginRight: "20px" }}
            onClick={() => {
              setVisible(!visible)
            }}
          >
            反复点击这个按钮，观察反复关闭弹窗，内存的波动情况
          </button>
          <button id="newbrowserwindow" style={{ marginRight: "20px" }}>通过new BrowserWindow打开新窗口</button>
          <button id="clearwebframe" style={{ marginRight: "20px" }}>清除webFrame缓存</button>
        </div>
        <div>
          <div id="mainprocessid"></div>
          <div id="processpid"></div>
          <div style={{ marginBottom: "20px" }}>WebFrame Resource Usage</div>
          <div id="webframeresourceusage"></div>
        </div>
        <div>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            Process Memory Usage
          </div>
          <div id="processmemoryusage"></div>
        </div>
      </div>
      <Modal
        visible={visible}
        closeAfterBlur={false}
        name={"modal"}
        winOptions={{ width: 500, height: 600, x: 0, y: 200 }}
        onClose={() => {
          setVisible(false);
        }}
      >
        <Images id={Math.random()} />
      </Modal>
      {childArray}
    </>
  );
});

export default Index;
