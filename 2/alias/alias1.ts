type Points = {
  x: number;
  y: number;
};

function printPoint(point: Points) {
  console.log(point.x);
  console.log(point.y);
}

printPoint({ x: 100, y: 100 });
