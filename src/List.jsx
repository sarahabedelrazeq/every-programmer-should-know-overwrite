import React from "react";

export default function List({ children, id }) {
  return (
    <ul>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <child.type {...child.props} id={`${id}-${index + 1}`} key={index}>
            {child.props.children}
          </child.type>
        ))
      ) : (
        <children.type {...children.props} id={`${id}-${1}`} key={0}>
          {children.props.children}
        </children.type>
      )}
    </ul>
  );
}
