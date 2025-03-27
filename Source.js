import React, { useState } from "react";
import Folder from "./Folder";
import File from "./File";

const typeBasedComponent = {
  folder: Folder,
  file: File,
};

const Source = (props) => {
  const { type, children, renderFileOrFolder } = props;
  const isEmptyChildren = !children ? false : children.length === 0;
  const [shouldOpenChildren, setShouldOpenChildren] = useState(false);
  const RenderComponent = typeBasedComponent[type];

  const onOpenChildren = () => {
    if (isEmptyChildren) {
      console.log("No Children");
    }

    return setShouldOpenChildren(!shouldOpenChildren);
  };

  return (
    <>
      <RenderComponent
        {...props}
        isOpen={shouldOpenChildren}
        setIsOpen={onOpenChildren}
      />
      {shouldOpenChildren && children.map(renderFileOrFolder)}
    </>
  );
};

export default Source;
