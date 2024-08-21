
import React from "react";
import './Video.css'
import './Responsive.css'
const Video = () => {
  return (
<>
<div className="video section">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 offset-lg-4">
        <div className="section-heading text-center">
          <h6>| Video View</h6>
          <h2>Get Closer View &amp; Different Feeling</h2>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="video-content">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="video-frame">
          <img src="assets/images/video-frame.jpg" alt="" />
          <a href="https://youtube.com" target="_blank">
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

</>
    
    
);
};

  
export default Video;
