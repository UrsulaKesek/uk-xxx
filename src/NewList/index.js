import React, { useState } from "react";
import './NewList.css';

const NewList = () => {
  const defaultList = [
    { key: "0", name: "ItemOne" },
    { key: "1", name: "ItemTwo" },
    { key: "2", name: "ItemThree" },
  ];

  const [list, updateList] = useState(defaultList);

  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    updateList(list.filter((item) => item.name !== name));
  };

  return (
    <div className="newList">
      {list.map((item) => {
        return (
          <>
            <p key={item.key} className="stuff">
              {item.name}
            </p>
            <button
              className="thing"
              name={item.name}
              onClick={handleRemoveItem}
            >
              remove
            </button>
          </>
        );
      })}
    </div>
  );
};
export default NewList;
