import React from "react";
import { Accordion } from "react-bootstrap";

export default function AccordionList({ children }) {
  const childBody = (child, index) => (
    <child.type {...child.props} key={index}>
      <child.props.children.type
        {...child.props.children.props}
        id={index + 1}
        key={index}
      >
        {child.props.children.props.children}
      </child.props.children.type>
    </child.type>
  );
  return (
    <Accordion>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <child.type
              {...child.props}
              id={index + 1}
              key={index}
              eventKey={index}
            >
              {child.props.children[0]}
              {childBody(child.props.children[1], index)}
            </child.type>
          ))
        : children}
    </Accordion>
  );
}
