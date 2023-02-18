// @ts-nocheck
import { memo, useState } from "react";

import img1 from "./imgs/1.jpg";
import img2 from "./imgs/2.jpg";
import img3 from "./imgs/2.png";
import img4 from "./imgs/3.png";
import img5 from "./imgs/4.jpg";
import img6 from "./imgs/5.gif";
import Modal from "./components/modal";

const App = memo(() => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  return (
    <div>
      <div id="memory"></div>
      <div>
        <button id="clear">清空缓存</button>
      </div>
      首页{" "}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        toggle
      </button>
      <button
        onClick={() => {
          setVisible2(!visible2);
        }}
      >
        toggle2
      </button>
      <Modal
        visible={visible}
        closeAfterBlur={false}
        name="app-modal"
        winOptions={{ width: 100, height: 100, x: 0, y: 200 }}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div>
          {[img1, img2, img3, img4, img5, img6].map((src) => {
            return (
              <div key={src}>
                <img src={src} alt="" />
              </div>
            );
          })}
        </div>
      </Modal>
      <Modal
        visible={visible2}
        closeAfterBlur={false}
        name="app-modal2"
        winOptions={{ width: 100, height: 100, x: 200, y: 200 }}
        onClose={() => {
          setVisible2(false);
        }}
      >
        <div>
          {[img1, img2, img3, img4, img5, img6].map((src) => {
            return (
              <div key={src}>
                <img src={src} alt="" />
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
});

export default App;
