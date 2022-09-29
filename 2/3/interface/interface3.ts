interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorCircle extends Colorful, Circle {}

const cc: ColorCircle = {
  color: "赤",
  radius: 10,
};

console.log(cc);
