/**
 * クラスはextendsを用いて他のクラスを継承できる
 */

class Point3D extends PointClass {
  z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    super(x, y);
    this.z = z;
  }

  moveZ(n: number): void {
    this.z += n;
  }
}

const point3d = new Point3D();
point3d.moveX(10);
point3d.moveZ(20);

console.log(`${point3d.x}, ${point3d.y}, ${point3d.z}`);
