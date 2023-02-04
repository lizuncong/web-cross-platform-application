// @ts-nocheck
import { memo, useState } from "react";

import Modal from "./components/modal";
import './util'
import * as test from './test'
console.log('test...', test)
test.c()
const App = memo(() => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setVisible(!visible)}>
          {visible ? "关闭" : "打开"}
        </button>
      </div>
      <div>
        <button onClick={() => setVisible2(!visible2)}>
          {visible2 ? "关闭下发课件弹窗" : "打开下发课件弹窗"}
        </button>
      </div>
      <Modal
        visible={visible}
        closeAfterBlur={false}
        name="app-modal"
        winOptions={{ width: 100, height: 100, x: 0, y: 200 }}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div>app</div>
      </Modal>
      <Modal
        visible={visible2}
        closeAfterBlur={false}
        name="courseware-modal"
        winOptions={{ width: 100, didNotHideEntry: true, height: 100, x: 0, y: 300 }}
        onClose={() => {
          setVisible2(false);
        }}
      >
        <div>courseware</div>
        <button onClick={() => setVisible2(false)}>close</button>
      </Modal>
    </>
  );
});

export default App;
