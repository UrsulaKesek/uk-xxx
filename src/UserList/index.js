import React, { useState } from "react";
import './UserList.css';

const UserList = () => {
  const Users = [
    { id: "0", name: "James" },
    { id: "1", name: "Nora" },
    { id: "2", name: "Matthew" },
    { id: "3", name: "Joe" },
    { id: "4", name: "Susan" },
    { id: "5", name: "Ursula" },
  ];
  const [list, updateList] = useState(Users);

  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    updateList(list.filter((item) => item.name !== name));
  };
  return (
    <div className="list">
      {list.map((item) => {
        return (
          <>
            <li key={item.id} className="users">
              {item.name}
            </li>
            <button className="rfp" name={item.name} onClick={handleRemoveItem}>
            -
            </button>
          </>
        );
      })}
    </div>
  );
};

export default UserList;
