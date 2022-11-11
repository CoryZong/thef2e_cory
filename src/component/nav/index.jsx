import "./index.scss";
import React from "react";

export default () => {
  return (
    <div className="nav">
      <div className="nav__logo">THE F2E</div>
      <div className="nav__link">
        <a href="/">關卡資訊</a>
        <a href="/">作品列表</a>
        <a href="/">攻略資源</a>
        <a href="/">求職專區</a>
        <a href="/">我要報名</a>
      </div>
    </div>
  );
};
