import React from "react";

export const Button = ({ textOnly, children, className, ...props }) => {
  let cssClasses = textOnly ? "text-button" : "button";
  console.log("className", className);

  console.log("typeof: ", typeof className);

  if (typeof className !== undefined) {
    cssClasses += " " + className;
  }
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};
