import React, { useState } from "react";

const Folder = ({ name, isOpen, setIsOpen }) => {
  return (
    <div>
      {name}
      <button onClick={setIsOpen}>{isOpen ? "-" : "+"}</button>
    </div>
  );
};

export default Folder;
