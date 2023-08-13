import React from "react";

function DisplaySection() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behaviour: "smooth" });
  };
  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant.</p>
      <span className="description">
        A display that's up to 2x brigthter than the sun.
      </span>
      {/* preview of a 3d mode & scroll up buttons*/}
      <button className="button">Try me!</button>
      <button className="back-button" onClick={handleScrollToTop}>
        TOP
      </button>
    </div>
  );
}
export default DisplaySection;
