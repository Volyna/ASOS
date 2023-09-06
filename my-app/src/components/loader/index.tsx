import * as React from "react";
import "./index.css";
const Loader: React.FC = () => {
  return (
    <>
      <div className="myspinner overlay">
        <div className="spinner-border" role="status"></div>
      </div>
    </>
  );
};

export default Loader;
