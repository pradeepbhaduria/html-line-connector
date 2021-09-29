import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { getConnectionParams } from "./util";

const Line = ({ from, to }) => {
  const { cx, cy, length, angle } = getConnectionParams(from, to);
  const style = {
    left: cx + "px",
    top: cy + "px",
    width: length + "px",
    transform: "rotate(" + angle + "deg)",
    backgroundColor: "black",
    height: "1px",
    position: "absolute",
  };
  return (
    <div className="connect-line" style={style}>
      <span>Test</span>
    </div>
  );
};

function PortalRoot({ from, to }) {
  return from.map(({ id, text }, i) => {
    const source = document.getElementById(id);
    return to.map(({ id }, j) => {
      const dest = document.getElementById(id);
      return <Line from={source} to={dest} key={(i + 1) * (j + 1)} />;
    });
  });
}

export function ConnectLine({ from = [], to = [], parentSelector }) {
  const [parent, setParent] = useState(null);
  useEffect(() => {
    setParent(document.querySelector(parentSelector));
  }, [parentSelector]);

  if (parent) return createPortal(<PortalRoot from={from} to={to} />, parent);
  return null;
}
