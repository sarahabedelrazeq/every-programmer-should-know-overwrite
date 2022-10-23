import React from "react";

export default function ListItem({ children, id }) {
  return (
    <li>
      {children} #{id}
    </li>
  );
}
