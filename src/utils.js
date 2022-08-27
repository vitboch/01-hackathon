export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function randomColor() {
  const randomColorStr = [random(0, 255), random(0, 255), random(0, 255)].join(
    ',',
  );
  const randomColor = `rgb(${randomColorStr})`;
  return randomColor;
}

// create scope
export function createScope() {
  const scope = document.createElement('div');
  scope.id = 'scope';
  document.body.append(scope);
}
