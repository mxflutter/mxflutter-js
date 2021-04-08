"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector4 = exports.Vector3 = exports.Vector2 = exports.Vector = exports.Triangle = exports.SimplexNoise = exports.Sphere = exports.Ray = exports.Quaternion = exports.Quad = exports.Plane = exports.Obb3 = exports.Matrix4 = exports.Matrix3 = exports.Matrix2 = exports.IntersectionResult = exports.Frustum = exports.Colors = exports.Aabb3 = exports.Aabb2 = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class Aabb2 extends mxflutter_base_1.MXDartClass {
    static centerAndHalfExtents(center, halfExtents) {
        var jsObj = new Aabb2();
        jsObj['center'] = center;
        jsObj['halfExtents'] = halfExtents;
        jsObj['constructorName'] = 'centerAndHalfExtents';
        return jsObj;
    }
    static copy(other) {
        var jsObj = new Aabb2();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static minMax(min, max) {
        var jsObj = new Aabb2();
        jsObj.min = min;
        jsObj.max = max;
        jsObj['constructorName'] = 'minMax';
        return jsObj;
    }
    static fromBuffer(buffer, offset) {
        var jsObj = new Aabb2();
        jsObj['buffer'] = buffer;
        jsObj['offset'] = offset;
        jsObj['constructorName'] = 'fromBuffer';
        return jsObj;
    }
}
exports.Aabb2 = Aabb2;
class Aabb3 extends mxflutter_base_1.MXDartClass {
    static fromSphere(sphere) {
        var jsObj = new Aabb3();
        jsObj['sphere'] = sphere;
        jsObj['constructorName'] = 'fromSphere';
        return jsObj;
    }
    static fromTriangle(triangle) {
        var jsObj = new Aabb3();
        jsObj['triangle'] = triangle;
        jsObj['constructorName'] = 'fromTriangle';
        return jsObj;
    }
    static fromQuad(quad) {
        var jsObj = new Aabb3();
        jsObj['quad'] = quad;
        jsObj['constructorName'] = 'fromQuad';
        return jsObj;
    }
    static fromObb3(obb) {
        var jsObj = new Aabb3();
        jsObj['obb'] = obb;
        jsObj['constructorName'] = 'fromObb3';
        return jsObj;
    }
    static fromRay(ray, limitMin, limitMax) {
        var jsObj = new Aabb3();
        jsObj['ray'] = ray;
        jsObj['limitMin'] = limitMin;
        jsObj['limitMax'] = limitMax;
        jsObj['constructorName'] = 'fromRay';
        return jsObj;
    }
    static centerAndHalfExtents(center, halfExtents) {
        var jsObj = new Aabb3();
        jsObj['center'] = center;
        jsObj['halfExtents'] = halfExtents;
        jsObj['constructorName'] = 'centerAndHalfExtents';
        return jsObj;
    }
    static copy(other) {
        var jsObj = new Aabb3();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static minMax(min, max) {
        var jsObj = new Aabb3();
        jsObj.min = min;
        jsObj.max = max;
        jsObj['constructorName'] = 'minMax';
        return jsObj;
    }
    static fromBuffer(buffer, offset) {
        var jsObj = new Aabb3();
        jsObj['buffer'] = buffer;
        jsObj['offset'] = offset;
        jsObj['constructorName'] = 'fromBuffer';
        return jsObj;
    }
}
exports.Aabb3 = Aabb3;
class Colors extends mxflutter_base_1.MXDartClass {
    static fromRgba(r, g, b, a, result) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['r'] = r;
        jsObj['g'] = g;
        jsObj['b'] = b;
        jsObj['a'] = a;
        jsObj['result'] = result;
        jsObj.className = 'Colors';
        jsObj['constructorName'] = 'fromRgba';
        return jsObj;
    }
    static fromHexString(value, result) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['value'] = value;
        jsObj['result'] = result;
        jsObj.className = 'Colors';
        jsObj['constructorName'] = 'fromHexString';
        return jsObj;
    }
    static alphaBlend(foreground, background, result) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['foreground'] = foreground;
        jsObj['background'] = background;
        jsObj['result'] = result;
        jsObj.className = 'Colors';
        jsObj['constructorName'] = 'alphaBlend';
        return jsObj;
    }
    static toGrayscale(input, result) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['input'] = input;
        jsObj['result'] = result;
        jsObj.className = 'Colors';
        jsObj['constructorName'] = 'toGrayscale';
        return jsObj;
    }
    static linearToGamma(linearColor, gammaColor, gamma) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['linearColor'] = linearColor;
        jsObj['gammaColor'] = gammaColor;
        jsObj['gamma'] = gamma;
        jsObj.className = 'Colors';
        jsObj['constructorName'] = 'linearToGamma';
        return jsObj;
    }
    static gammaToLinear(gammaColor, linearColor, gamma) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['gammaColor'] = gammaColor;
        jsObj['linearColor'] = linearColor;
        jsObj['gamma'] = gamma;
        jsObj.className = 'Colors';
        jsObj['constructorName'] = 'gammaToLinear';
        return jsObj;
    }
    static rgbToHsv(rgbColor, hsvColor) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['rgbColor'] = rgbColor;
        jsObj['hsvColor'] = hsvColor;
        jsObj.className = 'Colors';
        jsObj['constructorName'] = 'rgbToHsv';
        return jsObj;
    }
    static hsvToRgb(hsvColor, rgbColor) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['hsvColor'] = hsvColor;
        jsObj['rgbColor'] = rgbColor;
        jsObj.className = 'Colors';
        jsObj['constructorName'] = 'hsvToRgb';
        return jsObj;
    }
    static rgbToHsl(rgbColor, hslColor) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['rgbColor'] = rgbColor;
        jsObj['hslColor'] = hslColor;
        jsObj.className = 'Colors';
        jsObj['constructorName'] = 'rgbToHsl';
        return jsObj;
    }
    static hslToRgb(hslColor, rgbColor) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['hslColor'] = hslColor;
        jsObj['rgbColor'] = rgbColor;
        jsObj.className = 'Colors';
        jsObj['constructorName'] = 'hslToRgb';
        return jsObj;
    }
}
exports.Colors = Colors;
class Frustum extends mxflutter_base_1.MXDartClass {
    static copy(other) {
        var jsObj = new Frustum();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static matrix(matrix) {
        var jsObj = new Frustum();
        jsObj['matrix'] = matrix;
        jsObj['constructorName'] = 'matrix';
        return jsObj;
    }
}
exports.Frustum = Frustum;
class IntersectionResult extends mxflutter_base_1.MXDartClass {
}
exports.IntersectionResult = IntersectionResult;
class Matrix2 extends mxflutter_base_1.MXDartClass {
    constructor(arg0, arg1, arg2, arg3) {
        super();
        this['arg0'] = arg0;
        this['arg1'] = arg1;
        this['arg2'] = arg2;
        this['arg3'] = arg3;
        this.className = 'Matrix2';
    }
    static solve(A, x, b) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['A'] = A;
        jsObj['x'] = x;
        jsObj['b'] = b;
        jsObj.className = 'Matrix2';
        jsObj['constructorName'] = 'solve';
        return jsObj;
    }
    static fromList(values) {
        var jsObj = new Matrix2();
        jsObj['values'] = values;
        jsObj['constructorName'] = 'fromList';
        return jsObj;
    }
    static identity() {
        var jsObj = new Matrix2();
        jsObj['constructorName'] = 'identity';
        return jsObj;
    }
    static copy(other) {
        var jsObj = new Matrix2();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static columns(arg0, arg1) {
        var jsObj = new Matrix2();
        jsObj['arg0'] = arg0;
        jsObj['arg1'] = arg1;
        jsObj['constructorName'] = 'columns';
        return jsObj;
    }
    static outer(u, v) {
        var jsObj = new Matrix2();
        jsObj['u'] = u;
        jsObj['v'] = v;
        jsObj['constructorName'] = 'outer';
        return jsObj;
    }
    static rotation(radians) {
        var jsObj = new Matrix2();
        jsObj['radians'] = radians;
        jsObj['constructorName'] = 'rotation';
        return jsObj;
    }
    static zero() {
        var jsObj = new Matrix2();
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
}
exports.Matrix2 = Matrix2;
class Matrix3 extends mxflutter_base_1.MXDartClass {
    constructor(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
        super();
        this['arg0'] = arg0;
        this['arg1'] = arg1;
        this['arg2'] = arg2;
        this['arg3'] = arg3;
        this['arg4'] = arg4;
        this['arg5'] = arg5;
        this['arg6'] = arg6;
        this['arg7'] = arg7;
        this['arg8'] = arg8;
        this.className = 'Matrix3';
    }
    static solve2(A, x, b) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['A'] = A;
        jsObj['x'] = x;
        jsObj['b'] = b;
        jsObj.className = 'Matrix3';
        jsObj['constructorName'] = 'solve2';
        return jsObj;
    }
    static solve(A, x, b) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['A'] = A;
        jsObj['x'] = x;
        jsObj['b'] = b;
        jsObj.className = 'Matrix3';
        jsObj['constructorName'] = 'solve';
        return jsObj;
    }
    static fromList(values) {
        var jsObj = new Matrix3();
        jsObj['values'] = values;
        jsObj['constructorName'] = 'fromList';
        return jsObj;
    }
    static identity() {
        var jsObj = new Matrix3();
        jsObj['constructorName'] = 'identity';
        return jsObj;
    }
    static copy(other) {
        var jsObj = new Matrix3();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static columns(arg0, arg1, arg2) {
        var jsObj = new Matrix3();
        jsObj['arg0'] = arg0;
        jsObj['arg1'] = arg1;
        jsObj['arg2'] = arg2;
        jsObj['constructorName'] = 'columns';
        return jsObj;
    }
    static outer(u, v) {
        var jsObj = new Matrix3();
        jsObj['u'] = u;
        jsObj['v'] = v;
        jsObj['constructorName'] = 'outer';
        return jsObj;
    }
    static rotationX(radians) {
        var jsObj = new Matrix3();
        jsObj['radians'] = radians;
        jsObj['constructorName'] = 'rotationX';
        return jsObj;
    }
    static rotationY(radians) {
        var jsObj = new Matrix3();
        jsObj['radians'] = radians;
        jsObj['constructorName'] = 'rotationY';
        return jsObj;
    }
    static rotationZ(radians) {
        var jsObj = new Matrix3();
        jsObj['radians'] = radians;
        jsObj['constructorName'] = 'rotationZ';
        return jsObj;
    }
    static zero() {
        var jsObj = new Matrix3();
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
}
exports.Matrix3 = Matrix3;
class Matrix4 extends mxflutter_base_1.MXDartClass {
    constructor(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
        super();
        this['arg0'] = arg0;
        this['arg1'] = arg1;
        this['arg2'] = arg2;
        this['arg3'] = arg3;
        this['arg4'] = arg4;
        this['arg5'] = arg5;
        this['arg6'] = arg6;
        this['arg7'] = arg7;
        this['arg8'] = arg8;
        this['arg9'] = arg9;
        this['arg10'] = arg10;
        this['arg11'] = arg11;
        this['arg12'] = arg12;
        this['arg13'] = arg13;
        this['arg14'] = arg14;
        this['arg15'] = arg15;
        this.className = 'Matrix4';
    }
    static solve2(A, x, b) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['A'] = A;
        jsObj['x'] = x;
        jsObj['b'] = b;
        jsObj.className = 'Matrix4';
        jsObj['constructorName'] = 'solve2';
        return jsObj;
    }
    static solve3(A, x, b) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['A'] = A;
        jsObj['x'] = x;
        jsObj['b'] = b;
        jsObj.className = 'Matrix4';
        jsObj['constructorName'] = 'solve3';
        return jsObj;
    }
    static solve(A, x, b) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['A'] = A;
        jsObj['x'] = x;
        jsObj['b'] = b;
        jsObj.className = 'Matrix4';
        jsObj['constructorName'] = 'solve';
        return jsObj;
    }
    static fromList(values) {
        var jsObj = new Matrix4();
        jsObj['values'] = values;
        jsObj['constructorName'] = 'fromList';
        return jsObj;
    }
    static identity() {
        var jsObj = new Matrix4();
        jsObj['constructorName'] = 'identity';
        return jsObj;
    }
    static copy(other) {
        var jsObj = new Matrix4();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static inverted(other) {
        var jsObj = new Matrix4();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'inverted';
        return jsObj;
    }
    static columns(arg0, arg1, arg2, arg3) {
        var jsObj = new Matrix4();
        jsObj['arg0'] = arg0;
        jsObj['arg1'] = arg1;
        jsObj['arg2'] = arg2;
        jsObj['arg3'] = arg3;
        jsObj['constructorName'] = 'columns';
        return jsObj;
    }
    static outer(u, v) {
        var jsObj = new Matrix4();
        jsObj['u'] = u;
        jsObj['v'] = v;
        jsObj['constructorName'] = 'outer';
        return jsObj;
    }
    static rotationX(radians) {
        var jsObj = new Matrix4();
        jsObj['radians'] = radians;
        jsObj['constructorName'] = 'rotationX';
        return jsObj;
    }
    static rotationY(radians) {
        var jsObj = new Matrix4();
        jsObj['radians'] = radians;
        jsObj['constructorName'] = 'rotationY';
        return jsObj;
    }
    static rotationZ(radians) {
        var jsObj = new Matrix4();
        jsObj['radians'] = radians;
        jsObj['constructorName'] = 'rotationZ';
        return jsObj;
    }
    static translation(translation) {
        var jsObj = new Matrix4();
        jsObj['translation'] = translation;
        jsObj['constructorName'] = 'translation';
        return jsObj;
    }
    static translationValues(x, y, z) {
        var jsObj = new Matrix4();
        jsObj['x'] = x;
        jsObj['y'] = y;
        jsObj['z'] = z;
        jsObj['constructorName'] = 'translationValues';
        return jsObj;
    }
    static diagonal3(scale) {
        var jsObj = new Matrix4();
        jsObj['scale'] = scale;
        jsObj['constructorName'] = 'diagonal3';
        return jsObj;
    }
    static diagonal3Values(x, y, z) {
        var jsObj = new Matrix4();
        jsObj['x'] = x;
        jsObj['y'] = y;
        jsObj['z'] = z;
        jsObj['constructorName'] = 'diagonal3Values';
        return jsObj;
    }
    static skewX(alpha) {
        var jsObj = new Matrix4();
        jsObj['alpha'] = alpha;
        jsObj['constructorName'] = 'skewX';
        return jsObj;
    }
    static skewY(beta) {
        var jsObj = new Matrix4();
        jsObj['beta'] = beta;
        jsObj['constructorName'] = 'skewY';
        return jsObj;
    }
    static skew(alpha, beta) {
        var jsObj = new Matrix4();
        jsObj['alpha'] = alpha;
        jsObj['beta'] = beta;
        jsObj['constructorName'] = 'skew';
        return jsObj;
    }
    static compose(translation, rotation, scale) {
        var jsObj = new Matrix4();
        jsObj['translation'] = translation;
        jsObj['rotation'] = rotation;
        jsObj['scale'] = scale;
        jsObj['constructorName'] = 'compose';
        return jsObj;
    }
    static zero() {
        var jsObj = new Matrix4();
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
    static fromFloat64List(_m4storage) {
        var jsObj = new Matrix4();
        jsObj.m4storage = _m4storage;
        jsObj['constructorName'] = 'fromFloat64List';
        return jsObj;
    }
    static fromBuffer(buffer, offset) {
        var jsObj = new Matrix4();
        jsObj['buffer'] = buffer;
        jsObj['offset'] = offset;
        jsObj['constructorName'] = 'fromBuffer';
        return jsObj;
    }
}
exports.Matrix4 = Matrix4;
class Obb3 extends mxflutter_base_1.MXDartClass {
    static copy(other) {
        var jsObj = new Obb3();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static centerExtentsAxes(center, halfExtents, axis0, axis1, axis2) {
        var jsObj = new Obb3();
        jsObj.center = center;
        jsObj.halfExtents = halfExtents;
        jsObj.axis0 = axis0;
        jsObj.axis1 = axis1;
        jsObj.axis2 = axis2;
        jsObj['constructorName'] = 'centerExtentsAxes';
        return jsObj;
    }
}
exports.Obb3 = Obb3;
class Plane extends mxflutter_base_1.MXDartClass {
    static intersection(a, b, c, result) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['a'] = a;
        jsObj['b'] = b;
        jsObj['c'] = c;
        jsObj['result'] = result;
        jsObj.className = 'Plane';
        jsObj['constructorName'] = 'intersection';
        return jsObj;
    }
    static copy(other) {
        var jsObj = new Plane();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static components(x, y, z, constant) {
        var jsObj = new Plane();
        jsObj['x'] = x;
        jsObj['y'] = y;
        jsObj['z'] = z;
        jsObj.constant = constant;
        jsObj['constructorName'] = 'components';
        return jsObj;
    }
    static normalconstant(normal_, constant) {
        var jsObj = new Plane();
        jsObj['normal_'] = normal_;
        jsObj.constant = constant;
        jsObj['constructorName'] = 'normalconstant';
        return jsObj;
    }
}
exports.Plane = Plane;
class Quad extends mxflutter_base_1.MXDartClass {
    static copy(other) {
        var jsObj = new Quad();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static points(point0, point1, point2, point3) {
        var jsObj = new Quad();
        jsObj.point0 = point0;
        jsObj.point1 = point1;
        jsObj.point2 = point2;
        jsObj.point3 = point3;
        jsObj['constructorName'] = 'points';
        return jsObj;
    }
}
exports.Quad = Quad;
class Quaternion extends mxflutter_base_1.MXDartClass {
    constructor(x, y, z, w) {
        super();
        this['x'] = x;
        this['y'] = y;
        this['z'] = z;
        this['w'] = w;
        this.className = 'Quaternion';
    }
    static fromRotation(rotationMatrix) {
        var jsObj = new Quaternion();
        jsObj['rotationMatrix'] = rotationMatrix;
        jsObj['constructorName'] = 'fromRotation';
        return jsObj;
    }
    static axisAngle(axis, angle) {
        var jsObj = new Quaternion();
        jsObj['axis'] = axis;
        jsObj['angle'] = angle;
        jsObj['constructorName'] = 'axisAngle';
        return jsObj;
    }
    static fromTwoVectors(a, b) {
        var jsObj = new Quaternion();
        jsObj['a'] = a;
        jsObj['b'] = b;
        jsObj['constructorName'] = 'fromTwoVectors';
        return jsObj;
    }
    static copy(original) {
        var jsObj = new Quaternion();
        jsObj['original'] = original;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static random(rn) {
        var jsObj = new Quaternion();
        jsObj['rn'] = rn;
        jsObj['constructorName'] = 'random';
        return jsObj;
    }
    static identity() {
        var jsObj = new Quaternion();
        jsObj['constructorName'] = 'identity';
        return jsObj;
    }
    static dq(q, omega) {
        var jsObj = new Quaternion();
        jsObj['q'] = q;
        jsObj['omega'] = omega;
        jsObj['constructorName'] = 'dq';
        return jsObj;
    }
    static euler(yaw, pitch, roll) {
        var jsObj = new Quaternion();
        jsObj['yaw'] = yaw;
        jsObj['pitch'] = pitch;
        jsObj['roll'] = roll;
        jsObj['constructorName'] = 'euler';
        return jsObj;
    }
    static fromFloat64List(_qStorage) {
        var jsObj = new Quaternion();
        jsObj.qStorage = _qStorage;
        jsObj['constructorName'] = 'fromFloat64List';
        return jsObj;
    }
    static fromBuffer(buffer, offset) {
        var jsObj = new Quaternion();
        jsObj['buffer'] = buffer;
        jsObj['offset'] = offset;
        jsObj['constructorName'] = 'fromBuffer';
        return jsObj;
    }
}
exports.Quaternion = Quaternion;
class Ray extends mxflutter_base_1.MXDartClass {
    static copy(other) {
        var jsObj = new Ray();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static originDirection(origin, direction) {
        var jsObj = new Ray();
        jsObj.origin = origin;
        jsObj.direction = direction;
        jsObj['constructorName'] = 'originDirection';
        return jsObj;
    }
}
exports.Ray = Ray;
class Sphere extends mxflutter_base_1.MXDartClass {
    static copy(other) {
        var jsObj = new Sphere();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static centerRadius(center, radius) {
        var jsObj = new Sphere();
        jsObj.center = center;
        jsObj.radius = radius;
        jsObj['constructorName'] = 'centerRadius';
        return jsObj;
    }
}
exports.Sphere = Sphere;
class SimplexNoise extends mxflutter_base_1.MXDartClass {
    constructor(r) {
        super();
        this['r'] = r;
        this.className = 'SimplexNoise';
    }
}
exports.SimplexNoise = SimplexNoise;
class Triangle extends mxflutter_base_1.MXDartClass {
    static copy(other) {
        var jsObj = new Triangle();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static points(point0, point1, point2) {
        var jsObj = new Triangle();
        jsObj.point0 = point0;
        jsObj.point1 = point1;
        jsObj.point2 = point2;
        jsObj['constructorName'] = 'points';
        return jsObj;
    }
}
exports.Triangle = Triangle;
class Vector extends mxflutter_base_1.MXDartClass {
}
exports.Vector = Vector;
class Vector2 extends mxflutter_base_1.MXDartClass {
    constructor(x, y) {
        super();
        this['x'] = x;
        this['y'] = y;
        this.className = 'Vector2';
    }
    static min(a, b, result) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['a'] = a;
        jsObj['b'] = b;
        jsObj['result'] = result;
        jsObj.className = 'Vector2';
        jsObj['constructorName'] = 'min';
        return jsObj;
    }
    static max(a, b, result) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['a'] = a;
        jsObj['b'] = b;
        jsObj['result'] = result;
        jsObj.className = 'Vector2';
        jsObj['constructorName'] = 'max';
        return jsObj;
    }
    static mix(min, max, a, result) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['min'] = min;
        jsObj['max'] = max;
        jsObj['a'] = a;
        jsObj['result'] = result;
        jsObj.className = 'Vector2';
        jsObj['constructorName'] = 'mix';
        return jsObj;
    }
    static array(array, offset) {
        var jsObj = new Vector2();
        jsObj['array'] = array;
        jsObj['offset'] = offset;
        jsObj['constructorName'] = 'array';
        return jsObj;
    }
    static all(value) {
        var jsObj = new Vector2();
        jsObj['value'] = value;
        jsObj['constructorName'] = 'all';
        return jsObj;
    }
    static copy(other) {
        var jsObj = new Vector2();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static random(rng) {
        var jsObj = new Vector2();
        jsObj['rng'] = rng;
        jsObj['constructorName'] = 'random';
        return jsObj;
    }
    static zero() {
        var jsObj = new Vector2();
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
    static fromFloat64List(_v2storage) {
        var jsObj = new Vector2();
        jsObj.v2storage = _v2storage;
        jsObj['constructorName'] = 'fromFloat64List';
        return jsObj;
    }
    static fromBuffer(buffer, offset) {
        var jsObj = new Vector2();
        jsObj['buffer'] = buffer;
        jsObj['offset'] = offset;
        jsObj['constructorName'] = 'fromBuffer';
        return jsObj;
    }
}
exports.Vector2 = Vector2;
class Vector3 extends mxflutter_base_1.MXDartClass {
    constructor(x, y, z) {
        super();
        this['x'] = x;
        this['y'] = y;
        this['z'] = z;
        this.className = 'Vector3';
    }
    static min(a, b, result) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['a'] = a;
        jsObj['b'] = b;
        jsObj['result'] = result;
        jsObj.className = 'Vector3';
        jsObj['constructorName'] = 'min';
        return jsObj;
    }
    static max(a, b, result) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['a'] = a;
        jsObj['b'] = b;
        jsObj['result'] = result;
        jsObj.className = 'Vector3';
        jsObj['constructorName'] = 'max';
        return jsObj;
    }
    static mix(min, max, a, result) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['min'] = min;
        jsObj['max'] = max;
        jsObj['a'] = a;
        jsObj['result'] = result;
        jsObj.className = 'Vector3';
        jsObj['constructorName'] = 'mix';
        return jsObj;
    }
    static array(array, offset) {
        var jsObj = new Vector3();
        jsObj['array'] = array;
        jsObj['offset'] = offset;
        jsObj['constructorName'] = 'array';
        return jsObj;
    }
    static all(value) {
        var jsObj = new Vector3();
        jsObj['value'] = value;
        jsObj['constructorName'] = 'all';
        return jsObj;
    }
    static copy(other) {
        var jsObj = new Vector3();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static random(rng) {
        var jsObj = new Vector3();
        jsObj['rng'] = rng;
        jsObj['constructorName'] = 'random';
        return jsObj;
    }
    static zero() {
        var jsObj = new Vector3();
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
    static fromFloat64List(_v3storage) {
        var jsObj = new Vector3();
        jsObj.v3storage = _v3storage;
        jsObj['constructorName'] = 'fromFloat64List';
        return jsObj;
    }
    static fromBuffer(buffer, offset) {
        var jsObj = new Vector3();
        jsObj['buffer'] = buffer;
        jsObj['offset'] = offset;
        jsObj['constructorName'] = 'fromBuffer';
        return jsObj;
    }
}
exports.Vector3 = Vector3;
class Vector4 extends mxflutter_base_1.MXDartClass {
    constructor(x, y, z, w) {
        super();
        this['x'] = x;
        this['y'] = y;
        this['z'] = z;
        this['w'] = w;
        this.className = 'Vector4';
    }
    static min(a, b, result) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['a'] = a;
        jsObj['b'] = b;
        jsObj['result'] = result;
        jsObj.className = 'Vector4';
        jsObj['constructorName'] = 'min';
        return jsObj;
    }
    static max(a, b, result) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['a'] = a;
        jsObj['b'] = b;
        jsObj['result'] = result;
        jsObj.className = 'Vector4';
        jsObj['constructorName'] = 'max';
        return jsObj;
    }
    static mix(min, max, a, result) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['min'] = min;
        jsObj['max'] = max;
        jsObj['a'] = a;
        jsObj['result'] = result;
        jsObj.className = 'Vector4';
        jsObj['constructorName'] = 'mix';
        return jsObj;
    }
    static array(array, offset) {
        var jsObj = new Vector4();
        jsObj['array'] = array;
        jsObj['offset'] = offset;
        jsObj['constructorName'] = 'array';
        return jsObj;
    }
    static identity() {
        var jsObj = new Vector4();
        jsObj['constructorName'] = 'identity';
        return jsObj;
    }
    static all(value) {
        var jsObj = new Vector4();
        jsObj['value'] = value;
        jsObj['constructorName'] = 'all';
        return jsObj;
    }
    static copy(other) {
        var jsObj = new Vector4();
        jsObj['other'] = other;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static random(rng) {
        var jsObj = new Vector4();
        jsObj['rng'] = rng;
        jsObj['constructorName'] = 'random';
        return jsObj;
    }
    static zero() {
        var jsObj = new Vector4();
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
    static fromFloat64List(_v4storage) {
        var jsObj = new Vector4();
        jsObj.v4storage = _v4storage;
        jsObj['constructorName'] = 'fromFloat64List';
        return jsObj;
    }
    static fromBuffer(buffer, offset) {
        var jsObj = new Vector4();
        jsObj['buffer'] = buffer;
        jsObj['offset'] = offset;
        jsObj['constructorName'] = 'fromBuffer';
        return jsObj;
    }
}
exports.Vector4 = Vector4;
