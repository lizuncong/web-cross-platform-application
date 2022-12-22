import React, { memo } from "react";
import bridge from "./bridge";
import comp from "./bridge/components";
import OpenWindow from "./open-window";
// @ts-ignore
const Table = React.lazy(() => comp("Table"));

function MyApp() {
  console.log("MyApp...");
  return <OpenWindow />;
}

export default memo(MyApp);
