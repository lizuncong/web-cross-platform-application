import React, { memo } from "react";
import img1 from "../../imgs/1.jpg";
import img2 from "../../imgs/2.jpg";
import img3 from "../../imgs/2.png";
import img4 from "../../imgs/3.png";
import img5 from "../../imgs/4.jpg";
import img6 from "../../imgs/5.gif";
const Index = memo(({ id }) => {
  return (
    <div>
      <div id="processpid"></div>
      <div>
        <div style={{ marginBottom: "20px" }}>WebFrame Resource Usage</div>
        <div id="webframeresourceusage"></div>
      </div>
      <div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          Process Memory Usage
        </div>
        <div id="mainprocessid"></div>
        <div id="processmemoryusage"></div>
      </div>
      <div>
        {[img1, img2, img3, img4, img5, img6].map((src) => {
          return <img src={src + `?id=${id}`} key={src} alt="" />;
        })}
      </div>
    </div>
  );
});

export default Index;
