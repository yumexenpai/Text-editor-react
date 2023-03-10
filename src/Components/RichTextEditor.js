// import React from 'react'
import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const config = {
    buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
  };

export const RichTextEditor = ({ initialValue, getValue }) => {

    const editor = useRef(null);
  return (
    <div><JoditEditor
    ref={editor}
    value={initialValue}
    config={config}
    tabIndex={1}
    //   onBlur={(newContent) => getValue(newContent)}
    onChange={(newContent) => getValue(newContent)}
  /></div>
  )
}

export default RichTextEditor;