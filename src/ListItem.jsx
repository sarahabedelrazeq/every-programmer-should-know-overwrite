import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doneNote } from "./store/app";

export default function ListItem({ children, id }) {
  const dispatch = useDispatch();
  const done = useSelector(({ app }) => app.done);
  return (
    <li>
      <div className="d-flex justify-content-between align-items-center">
        <div>{children}</div>
        <div>
          <input
            type="checkbox"
            checked={done[id] ? done[id] : false}
            onChange={({ target: { checked } }) => {
              dispatch(doneNote({ id, checked }));
              console.log("value :>> ", checked);
            }}
          />
        </div>
      </div>
    </li>
  );
}
