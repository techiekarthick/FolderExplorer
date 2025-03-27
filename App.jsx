import React from "react";
import Source from "./Source";
import "./styles.css";

const folderStructureJson = {
  name: "Root",
  type: "folder",
  children: [
    { name: "File1.txt", type: "file" },
    {
      name: "Folder1",

      type: "folder",

      children: [
        { name: "File2.txt", type: "file" },
        {
          name: "SubFolder1",

          type: "folder",

          children: [{ name: "File3.txt", type: "file" }],
        },
      ],
    },

    { name: "File4.txt", type: "file" },
  ],
};

const renderFileOrFolder = (fileOrFolder) => {
  return <Source {...fileOrFolder} renderFileOrFolder={renderFileOrFolder} />;
};

const App = () => {
  return (
    <div className="App">
      <div>{renderFileOrFolder(folderStructureJson)}</div>
    </div>
  );
};

export default App;
