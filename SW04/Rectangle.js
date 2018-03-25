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
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, width, height) {
        var _this = _super.call(this, x, y) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.setHeight = function (height) {
        this.height = height;
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.draw = function () {
        return 'x: ' + this.getX() + ' y: ' + this.getY() + ' width: ' + this.getWidth() + ' height: ' + this.getHeight();
    };
    Rectangle.prototype.area = function () {
        return (this.getWidth() * this.getHeight());
    };
    Rectangle.prototype.info = function () {
        console.log(this.draw());
        console.log(this.area());
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
