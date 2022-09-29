enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const value = "DOWN";
const enumValue = value as Direction2;
if (enumValue == Direction2.Down) {
  console.log("=");
}
