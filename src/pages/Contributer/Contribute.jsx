import React from "react";
import "./Contribute.css";

import { Link } from "react-router-dom";

const Contribute = () => {
  return (
    <div className="ContributeHome">
      <div className="ContributeHome_container">
        <p className="heading_page">Contribution Controls</p>

        <div className="section_add_contnet_container">
          <Link to="/contribute/article">
            <div className="myCard">
              <div className="innerCard">
                <div className="frontSide">
                  <p className="title">A</p>
                  <p>Article</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/contribute/video">
          <div className="myCard">
              <div className="innerCard">
                <div className="frontSide">
                  <p className="title">V</p>
                  <p>Video</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/contribute/question">
          <div className="myCard">
              <div className="innerCard">
                <div className="frontSide">
                  <p className="title">Q</p>
                  <p>Question</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
