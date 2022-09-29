/**
 * class クラス名 {
 *  フィールド1: 型1
 *  フィールド2: 型2
 * }
 */

class PointClass {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  moveX(n: number): void {
    this.x += n;
  }

  moveY(n: number): void {
    this.y += n;
  }
}

const point = new PointClass();
point.moveX(10);
console.log(`${point.x}, ${point.y}`);
