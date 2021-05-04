import isInsideTargetBox from '../../logic/target.js';

test('can tell you if coords are inside the target radius', () => {
  expect(isInsideTargetBox({ x: 1, y: 1 }, 4, { x: 5, y: 5 })).toBe(true);
  expect(isInsideTargetBox({ x: 1, y: 1 }, 4, { x: 5, y: 6 })).toBe(false);
});
