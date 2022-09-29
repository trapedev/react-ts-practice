class BasePoint3D {
  public x: number;
  private y: number;
  protected z: number;
}

const basePoint = new BasePoint3D();
basePoint.x;

class ChildPoint extends BasePoint3D {
  constructor() {
    super();
    this.x;
    this.z;
  }
}
