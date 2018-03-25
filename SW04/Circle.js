"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, r) {
        var _this = _super.call(this, x, y) || this;
        _this.r = r;
        return _this;
    }
    Circle.prototype.setR = function (r) {
        this.r = r;
    };
    Circle.prototype.getR = function () {
        return this.r;
    };
    Circle.prototype.draw = function () {
        return 'x: ' + this.getX() + ' y: ' + this.getY() + ' r: ' + this.getR();
    };
    Circle.prototype.area = function () {
        return (this.getR() * this.getR() * Math.PI);
    };
    Circle.prototype.info = function () {
        console.log(this.draw());
        console.log(this.area());
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
