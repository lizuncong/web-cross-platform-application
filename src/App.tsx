import React, { memo } from "react";
import bridge from "./bridge";
import comp from "./bridge/components";
// @ts-ignore
const Table = React.lazy(() => comp("Table"));

function MyApp() {
  console.log("MyApp...");
  return (
    <>
      <button
        onClick={async () => {
          const { goToNewPage } = await bridge();
          goToNewPage();
        }}
      >
        弹出窗口
      </button>
      <Table />
    </>
  );
}

export default memo(MyApp);
