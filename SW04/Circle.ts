import { Shape } from './Shape';

class Circle extends Shape {
  private r: number;

  constructor (x: number, y: number, r: number) {
    super(x,y);
    this.r = r;
  }

  public setR(r: number) {
    this.r = r;
  }

  public getR(): number {
    return this.r;
  }

  public draw(): string {
    return 'x: ' + this.getX() + ' y: ' + this.getY() + ' r: ' + this.getR();
  }

  public area(): number {
    return (this.getR() * this.getR() * Math.PI);
  }

  public info(): void {
    console.log(this.draw());
    console.log(this.area());
  }
}
export { Circle };
