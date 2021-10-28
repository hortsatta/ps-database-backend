import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@buffetjs/core";
import { Label, Description, ErrorMessage } from "@buffetjs/styles";
import Editor from "../QuillEditor";
import MediaLib from "../MediaLib";
 
const Wysiwyg = ({ inputDescription, error, label, name, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const handleChange = (data) => {
    if (data.mime.includes("image")) {
      const imgTag = `<p><img src="${data.url}" caption="${data.caption}" alt="${data.alternativeText}"></img></p>`;
      const newValue = value ? `${value}${imgTag}` : imgTag;
 
      onChange({ target: { name, value: newValue } });
    }
 
    // Handle videos and other type of files by adding some code
  };
 
  const handleToggle = () => setIsOpen((prev) => !prev);
 
  const hasError = Boolean(error);
 
  return (
    <div
      style={{
        marginBottom: "1.6rem",
        fontSize: "1.3rem",
        fontFamily: "Lato",
      }}
    >
    <div style={{ position: 'absolute', right: '15px', top: '-10px' }}>
      <Button color="primary" onClick={handleToggle}>
        MediaLib
      </Button>
    </div>
      <Label htmlFor={name} style={{ marginBottom: 10 }} >{label} </Label>
 
      <Editor name={name} onChange={onChange} value={value} />
 
      {!hasError && inputDescription && (
        <Description>{inputDescription}</Description>
      )}
      {hasError && <ErrorMessage>{error}</ErrorMessage>}
 
      <MediaLib
        onToggle={handleToggle}
        isOpen={isOpen}
        onChange={handleChange}
      />
    </div>
  );
};
 
export default Wysiwyg;
