function getOffset(el) {
  return {
    left: el.offsetLeft,
    top: el.offsetTop,
    width: el.offsetWidth,
    height: el.offsetHeight,
  };
}

export function getConnectionParams(div1, div2) {
  var off1 = getOffset(div1);
  var off2 = getOffset(div2);

  // from
  var x1 = off1.left + off1.width;
  var y1 = off1.top + off1.height / 2;

  // to
  var x2 = off2.left;
  var y2 = off2.top + off2.height / 2;

  // distance
  var length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

  // center
  var cx = (x1 + x2) / 2 - length / 2;
  var cy = (y1 + y2) / 2;

  // angle
  var angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  return { cx, cy, length, angle };
}
