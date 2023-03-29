import React, { memo, useState, useEffect } from "react";
import { message } from "antd";

const Index = memo(() => {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <div>子页面路由</div>
      <div>{window.opener.lzctest}</div>
      <div><button onClick={() => { message.success('hello word')}}>弹出antd的message</button></div>
    </>
  );
});

export default Index;
