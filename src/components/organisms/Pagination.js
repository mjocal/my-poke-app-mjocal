import React from "react";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div>
      <button onClick={onLeftClick}>
        <div>◀️</div>
      </button>
      <div>
        {page} of {totalPages}
      </div>
      <button onClick={onRightClick}>
        <div>▶️</div>
      </button>
    </div>
  );
};

export default Pagination;
