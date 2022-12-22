import React, { memo, useState } from "react";
const Counter = memo(({ count, setCount, closeWindowPortal }) => {
  return (
    <div>
      <div onClick={setCount}>{count}</div>
      <button onClick={closeWindowPortal}>Close me!</button>
    </div>
  );
});
export default Counter;
