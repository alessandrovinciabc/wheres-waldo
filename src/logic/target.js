function isInsideTargetBox(target, radius, coords) {
  let rangeX = { start: target.x - radius, end: target.x + radius };
  let rangeY = { start: target.y - radius, end: target.y + radius };

  if (coords.x < rangeX.start || coords.x > rangeX.end) return false;
  if (coords.y < rangeY.start || coords.y > rangeY.end) return false;

  return true;
}

export default isInsideTargetBox;
