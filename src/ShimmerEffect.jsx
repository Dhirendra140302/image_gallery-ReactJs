import React from "react";

const ShimmerEffect = () => {
  // show 8 shimmer cards while loading
  return (
    <div className="container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer shimmer-img"></div>
            <div className="shimmer shimmer-text"></div>
            <div className="shimmer shimmer-text small"></div>
            <div className="shimmer shimmer-text price"></div>
            <div className="shimmer shimmer-btn"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerEffect;
