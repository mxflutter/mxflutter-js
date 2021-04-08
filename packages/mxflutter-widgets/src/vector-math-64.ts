// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Aabb2 extends MXDartClass {
  min: Vector2;
  max: Vector2;
  static centerAndHalfExtents(center?: Vector2, halfExtents?: Vector2) {
    var jsObj = new Aabb2();
    jsObj['center'] = center;
    jsObj['halfExtents'] = halfExtents;
    jsObj['constructorName'] = 'centerAndHalfExtents';
    return jsObj;
  }
  static copy(other?: Aabb2) {
    var jsObj = new Aabb2();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static minMax(min?: Vector2, max?: Vector2) {
    var jsObj = new Aabb2();
    jsObj.min = min;
    jsObj.max = max;
    jsObj['constructorName'] = 'minMax';
    return jsObj;
  }
  static fromBuffer(buffer?: any, offset?: number) {
    var jsObj = new Aabb2();
    jsObj['buffer'] = buffer;
    jsObj['offset'] = offset;
    jsObj['constructorName'] = 'fromBuffer';
    return jsObj;
  }
}
export { Aabb2 };
class Aabb3 extends MXDartClass {
  min: Vector3;
  max: Vector3;
  static fromSphere(sphere?: Sphere) {
    var jsObj = new Aabb3();
    jsObj['sphere'] = sphere;
    jsObj['constructorName'] = 'fromSphere';
    return jsObj;
  }
  static fromTriangle(triangle?: Triangle) {
    var jsObj = new Aabb3();
    jsObj['triangle'] = triangle;
    jsObj['constructorName'] = 'fromTriangle';
    return jsObj;
  }
  static fromQuad(quad?: Quad) {
    var jsObj = new Aabb3();
    jsObj['quad'] = quad;
    jsObj['constructorName'] = 'fromQuad';
    return jsObj;
  }
  static fromObb3(obb?: Obb3) {
    var jsObj = new Aabb3();
    jsObj['obb'] = obb;
    jsObj['constructorName'] = 'fromObb3';
    return jsObj;
  }
  static fromRay(ray?: Ray, limitMin?: number, limitMax?: number) {
    var jsObj = new Aabb3();
    jsObj['ray'] = ray;
    jsObj['limitMin'] = limitMin;
    jsObj['limitMax'] = limitMax;
    jsObj['constructorName'] = 'fromRay';
    return jsObj;
  }
  static centerAndHalfExtents(center?: Vector3, halfExtents?: Vector3) {
    var jsObj = new Aabb3();
    jsObj['center'] = center;
    jsObj['halfExtents'] = halfExtents;
    jsObj['constructorName'] = 'centerAndHalfExtents';
    return jsObj;
  }
  static copy(other?: Aabb3) {
    var jsObj = new Aabb3();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static minMax(min?: Vector3, max?: Vector3) {
    var jsObj = new Aabb3();
    jsObj.min = min;
    jsObj.max = max;
    jsObj['constructorName'] = 'minMax';
    return jsObj;
  }
  static fromBuffer(buffer?: any, offset?: number) {
    var jsObj = new Aabb3();
    jsObj['buffer'] = buffer;
    jsObj['offset'] = offset;
    jsObj['constructorName'] = 'fromBuffer';
    return jsObj;
  }
}
export { Aabb3 };
class Colors extends MXDartClass {
  static fromRgba(r?: number, g?: number, b?: number, a?: number, result?: Vector4) {
    var jsObj = new MXDartClass();
    jsObj['r'] = r;
    jsObj['g'] = g;
    jsObj['b'] = b;
    jsObj['a'] = a;
    jsObj['result'] = result;
    jsObj.className = 'Colors';
    jsObj['constructorName'] = 'fromRgba';
    return jsObj;
  }
  static fromHexString(value?: string, result?: Vector4) {
    var jsObj = new MXDartClass();
    jsObj['value'] = value;
    jsObj['result'] = result;
    jsObj.className = 'Colors';
    jsObj['constructorName'] = 'fromHexString';
    return jsObj;
  }
  static alphaBlend(foreground?: Vector4, background?: Vector4, result?: Vector4) {
    var jsObj = new MXDartClass();
    jsObj['foreground'] = foreground;
    jsObj['background'] = background;
    jsObj['result'] = result;
    jsObj.className = 'Colors';
    jsObj['constructorName'] = 'alphaBlend';
    return jsObj;
  }
  static toGrayscale(input?: Vector4, result?: Vector4) {
    var jsObj = new MXDartClass();
    jsObj['input'] = input;
    jsObj['result'] = result;
    jsObj.className = 'Colors';
    jsObj['constructorName'] = 'toGrayscale';
    return jsObj;
  }
  static linearToGamma(linearColor?: Vector4, gammaColor?: Vector4, gamma?: number) {
    var jsObj = new MXDartClass();
    jsObj['linearColor'] = linearColor;
    jsObj['gammaColor'] = gammaColor;
    jsObj['gamma'] = gamma;
    jsObj.className = 'Colors';
    jsObj['constructorName'] = 'linearToGamma';
    return jsObj;
  }
  static gammaToLinear(gammaColor?: Vector4, linearColor?: Vector4, gamma?: number) {
    var jsObj = new MXDartClass();
    jsObj['gammaColor'] = gammaColor;
    jsObj['linearColor'] = linearColor;
    jsObj['gamma'] = gamma;
    jsObj.className = 'Colors';
    jsObj['constructorName'] = 'gammaToLinear';
    return jsObj;
  }
  static rgbToHsv(rgbColor?: Vector4, hsvColor?: Vector4) {
    var jsObj = new MXDartClass();
    jsObj['rgbColor'] = rgbColor;
    jsObj['hsvColor'] = hsvColor;
    jsObj.className = 'Colors';
    jsObj['constructorName'] = 'rgbToHsv';
    return jsObj;
  }
  static hsvToRgb(hsvColor?: Vector4, rgbColor?: Vector4) {
    var jsObj = new MXDartClass();
    jsObj['hsvColor'] = hsvColor;
    jsObj['rgbColor'] = rgbColor;
    jsObj.className = 'Colors';
    jsObj['constructorName'] = 'hsvToRgb';
    return jsObj;
  }
  static rgbToHsl(rgbColor?: Vector4, hslColor?: Vector4) {
    var jsObj = new MXDartClass();
    jsObj['rgbColor'] = rgbColor;
    jsObj['hslColor'] = hslColor;
    jsObj.className = 'Colors';
    jsObj['constructorName'] = 'rgbToHsl';
    return jsObj;
  }
  static hslToRgb(hslColor?: Vector4, rgbColor?: Vector4) {
    var jsObj = new MXDartClass();
    jsObj['hslColor'] = hslColor;
    jsObj['rgbColor'] = rgbColor;
    jsObj.className = 'Colors';
    jsObj['constructorName'] = 'hslToRgb';
    return jsObj;
  }
}
export { Colors };
class Frustum extends MXDartClass {
  plane0: Plane;
  plane1: Plane;
  plane2: Plane;
  plane3: Plane;
  plane4: Plane;
  plane5: Plane;
  static copy(other?: Frustum) {
    var jsObj = new Frustum();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static matrix(matrix?: Matrix4) {
    var jsObj = new Frustum();
    jsObj['matrix'] = matrix;
    jsObj['constructorName'] = 'matrix';
    return jsObj;
  }
}
export { Frustum };
class IntersectionResult extends MXDartClass {
  depth: number;
  axis: Vector3;
}
export { IntersectionResult };
class Matrix2 extends MXDartClass {
  m2storage: any;
  static solve(A?: Matrix2, x?: Vector2, b?: Vector2) {
    var jsObj = new MXDartClass();
    jsObj['A'] = A;
    jsObj['x'] = x;
    jsObj['b'] = b;
    jsObj.className = 'Matrix2';
    jsObj['constructorName'] = 'solve';
    return jsObj;
  }
  public constructor(arg0?: number, arg1?: number, arg2?: number, arg3?: number) {
    super();
    this['arg0'] = arg0;
    this['arg1'] = arg1;
    this['arg2'] = arg2;
    this['arg3'] = arg3;
    this.className = 'Matrix2';
  }
  static fromList(values?: Array<any>) {
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
  static copy(other?: Matrix2) {
    var jsObj = new Matrix2();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static columns(arg0?: Vector2, arg1?: Vector2) {
    var jsObj = new Matrix2();
    jsObj['arg0'] = arg0;
    jsObj['arg1'] = arg1;
    jsObj['constructorName'] = 'columns';
    return jsObj;
  }
  static outer(u?: Vector2, v?: Vector2) {
    var jsObj = new Matrix2();
    jsObj['u'] = u;
    jsObj['v'] = v;
    jsObj['constructorName'] = 'outer';
    return jsObj;
  }
  static rotation(radians?: number) {
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
export { Matrix2 };
class Matrix3 extends MXDartClass {
  m3storage: any;
  static solve2(A?: Matrix3, x?: Vector2, b?: Vector2) {
    var jsObj = new MXDartClass();
    jsObj['A'] = A;
    jsObj['x'] = x;
    jsObj['b'] = b;
    jsObj.className = 'Matrix3';
    jsObj['constructorName'] = 'solve2';
    return jsObj;
  }
  static solve(A?: Matrix3, x?: Vector3, b?: Vector3) {
    var jsObj = new MXDartClass();
    jsObj['A'] = A;
    jsObj['x'] = x;
    jsObj['b'] = b;
    jsObj.className = 'Matrix3';
    jsObj['constructorName'] = 'solve';
    return jsObj;
  }
  public constructor(arg0?: number, arg1?: number, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number) {
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
  static fromList(values?: Array<any>) {
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
  static copy(other?: Matrix3) {
    var jsObj = new Matrix3();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static columns(arg0?: Vector3, arg1?: Vector3, arg2?: Vector3) {
    var jsObj = new Matrix3();
    jsObj['arg0'] = arg0;
    jsObj['arg1'] = arg1;
    jsObj['arg2'] = arg2;
    jsObj['constructorName'] = 'columns';
    return jsObj;
  }
  static outer(u?: Vector3, v?: Vector3) {
    var jsObj = new Matrix3();
    jsObj['u'] = u;
    jsObj['v'] = v;
    jsObj['constructorName'] = 'outer';
    return jsObj;
  }
  static rotationX(radians?: number) {
    var jsObj = new Matrix3();
    jsObj['radians'] = radians;
    jsObj['constructorName'] = 'rotationX';
    return jsObj;
  }
  static rotationY(radians?: number) {
    var jsObj = new Matrix3();
    jsObj['radians'] = radians;
    jsObj['constructorName'] = 'rotationY';
    return jsObj;
  }
  static rotationZ(radians?: number) {
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
export { Matrix3 };
class Matrix4 extends MXDartClass {
  m4storage: any;
  static solve2(A?: Matrix4, x?: Vector2, b?: Vector2) {
    var jsObj = new MXDartClass();
    jsObj['A'] = A;
    jsObj['x'] = x;
    jsObj['b'] = b;
    jsObj.className = 'Matrix4';
    jsObj['constructorName'] = 'solve2';
    return jsObj;
  }
  static solve3(A?: Matrix4, x?: Vector3, b?: Vector3) {
    var jsObj = new MXDartClass();
    jsObj['A'] = A;
    jsObj['x'] = x;
    jsObj['b'] = b;
    jsObj.className = 'Matrix4';
    jsObj['constructorName'] = 'solve3';
    return jsObj;
  }
  static solve(A?: Matrix4, x?: Vector4, b?: Vector4) {
    var jsObj = new MXDartClass();
    jsObj['A'] = A;
    jsObj['x'] = x;
    jsObj['b'] = b;
    jsObj.className = 'Matrix4';
    jsObj['constructorName'] = 'solve';
    return jsObj;
  }
  public constructor(arg0?: number, arg1?: number, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number, arg13?: number, arg14?: number, arg15?: number) {
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
  static fromList(values?: Array<any>) {
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
  static copy(other?: Matrix4) {
    var jsObj = new Matrix4();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static inverted(other?: Matrix4) {
    var jsObj = new Matrix4();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'inverted';
    return jsObj;
  }
  static columns(arg0?: Vector4, arg1?: Vector4, arg2?: Vector4, arg3?: Vector4) {
    var jsObj = new Matrix4();
    jsObj['arg0'] = arg0;
    jsObj['arg1'] = arg1;
    jsObj['arg2'] = arg2;
    jsObj['arg3'] = arg3;
    jsObj['constructorName'] = 'columns';
    return jsObj;
  }
  static outer(u?: Vector4, v?: Vector4) {
    var jsObj = new Matrix4();
    jsObj['u'] = u;
    jsObj['v'] = v;
    jsObj['constructorName'] = 'outer';
    return jsObj;
  }
  static rotationX(radians?: number) {
    var jsObj = new Matrix4();
    jsObj['radians'] = radians;
    jsObj['constructorName'] = 'rotationX';
    return jsObj;
  }
  static rotationY(radians?: number) {
    var jsObj = new Matrix4();
    jsObj['radians'] = radians;
    jsObj['constructorName'] = 'rotationY';
    return jsObj;
  }
  static rotationZ(radians?: number) {
    var jsObj = new Matrix4();
    jsObj['radians'] = radians;
    jsObj['constructorName'] = 'rotationZ';
    return jsObj;
  }
  static translation(translation?: Vector3) {
    var jsObj = new Matrix4();
    jsObj['translation'] = translation;
    jsObj['constructorName'] = 'translation';
    return jsObj;
  }
  static translationValues(x?: number, y?: number, z?: number) {
    var jsObj = new Matrix4();
    jsObj['x'] = x;
    jsObj['y'] = y;
    jsObj['z'] = z;
    jsObj['constructorName'] = 'translationValues';
    return jsObj;
  }
  static diagonal3(scale?: Vector3) {
    var jsObj = new Matrix4();
    jsObj['scale'] = scale;
    jsObj['constructorName'] = 'diagonal3';
    return jsObj;
  }
  static diagonal3Values(x?: number, y?: number, z?: number) {
    var jsObj = new Matrix4();
    jsObj['x'] = x;
    jsObj['y'] = y;
    jsObj['z'] = z;
    jsObj['constructorName'] = 'diagonal3Values';
    return jsObj;
  }
  static skewX(alpha?: number) {
    var jsObj = new Matrix4();
    jsObj['alpha'] = alpha;
    jsObj['constructorName'] = 'skewX';
    return jsObj;
  }
  static skewY(beta?: number) {
    var jsObj = new Matrix4();
    jsObj['beta'] = beta;
    jsObj['constructorName'] = 'skewY';
    return jsObj;
  }
  static skew(alpha?: number, beta?: number) {
    var jsObj = new Matrix4();
    jsObj['alpha'] = alpha;
    jsObj['beta'] = beta;
    jsObj['constructorName'] = 'skew';
    return jsObj;
  }
  static compose(translation?: Vector3, rotation?: Quaternion, scale?: Vector3) {
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
  static fromFloat64List(_m4storage?: any) {
    var jsObj = new Matrix4();
    jsObj.m4storage = _m4storage;
    jsObj['constructorName'] = 'fromFloat64List';
    return jsObj;
  }
  static fromBuffer(buffer?: any, offset?: number) {
    var jsObj = new Matrix4();
    jsObj['buffer'] = buffer;
    jsObj['offset'] = offset;
    jsObj['constructorName'] = 'fromBuffer';
    return jsObj;
  }
}
export { Matrix4 };
class Obb3 extends MXDartClass {
  center: Vector3;
  halfExtents: Vector3;
  axis0: Vector3;
  axis1: Vector3;
  axis2: Vector3;
  static copy(other?: Obb3) {
    var jsObj = new Obb3();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static centerExtentsAxes(center?: Vector3, halfExtents?: Vector3, axis0?: Vector3, axis1?: Vector3, axis2?: Vector3) {
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
export { Obb3 };
class Plane extends MXDartClass {
  normal: Vector3;
  constant: number;
  static intersection(a?: Plane, b?: Plane, c?: Plane, result?: Vector3) {
    var jsObj = new MXDartClass();
    jsObj['a'] = a;
    jsObj['b'] = b;
    jsObj['c'] = c;
    jsObj['result'] = result;
    jsObj.className = 'Plane';
    jsObj['constructorName'] = 'intersection';
    return jsObj;
  }
  static copy(other?: Plane) {
    var jsObj = new Plane();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static components(x?: number, y?: number, z?: number, constant?: number) {
    var jsObj = new Plane();
    jsObj['x'] = x;
    jsObj['y'] = y;
    jsObj['z'] = z;
    jsObj.constant = constant;
    jsObj['constructorName'] = 'components';
    return jsObj;
  }
  static normalconstant(normal_?: Vector3, constant?: number) {
    var jsObj = new Plane();
    jsObj['normal_'] = normal_;
    jsObj.constant = constant;
    jsObj['constructorName'] = 'normalconstant';
    return jsObj;
  }
}
export { Plane };
class Quad extends MXDartClass {
  point0: Vector3;
  point1: Vector3;
  point2: Vector3;
  point3: Vector3;
  static copy(other?: Quad) {
    var jsObj = new Quad();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static points(point0?: Vector3, point1?: Vector3, point2?: Vector3, point3?: Vector3) {
    var jsObj = new Quad();
    jsObj.point0 = point0;
    jsObj.point1 = point1;
    jsObj.point2 = point2;
    jsObj.point3 = point3;
    jsObj['constructorName'] = 'points';
    return jsObj;
  }
}
export { Quad };
class Quaternion extends MXDartClass {
  qStorage: any;
  public constructor(x?: number, y?: number, z?: number, w?: number) {
    super();
    this['x'] = x;
    this['y'] = y;
    this['z'] = z;
    this['w'] = w;
    this.className = 'Quaternion';
  }
  static fromRotation(rotationMatrix?: Matrix3) {
    var jsObj = new Quaternion();
    jsObj['rotationMatrix'] = rotationMatrix;
    jsObj['constructorName'] = 'fromRotation';
    return jsObj;
  }
  static axisAngle(axis?: Vector3, angle?: number) {
    var jsObj = new Quaternion();
    jsObj['axis'] = axis;
    jsObj['angle'] = angle;
    jsObj['constructorName'] = 'axisAngle';
    return jsObj;
  }
  static fromTwoVectors(a?: Vector3, b?: Vector3) {
    var jsObj = new Quaternion();
    jsObj['a'] = a;
    jsObj['b'] = b;
    jsObj['constructorName'] = 'fromTwoVectors';
    return jsObj;
  }
  static copy(original?: Quaternion) {
    var jsObj = new Quaternion();
    jsObj['original'] = original;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static random(rn?: any) {
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
  static dq(q?: Quaternion, omega?: Vector3) {
    var jsObj = new Quaternion();
    jsObj['q'] = q;
    jsObj['omega'] = omega;
    jsObj['constructorName'] = 'dq';
    return jsObj;
  }
  static euler(yaw?: number, pitch?: number, roll?: number) {
    var jsObj = new Quaternion();
    jsObj['yaw'] = yaw;
    jsObj['pitch'] = pitch;
    jsObj['roll'] = roll;
    jsObj['constructorName'] = 'euler';
    return jsObj;
  }
  static fromFloat64List(_qStorage?: any) {
    var jsObj = new Quaternion();
    jsObj.qStorage = _qStorage;
    jsObj['constructorName'] = 'fromFloat64List';
    return jsObj;
  }
  static fromBuffer(buffer?: any, offset?: number) {
    var jsObj = new Quaternion();
    jsObj['buffer'] = buffer;
    jsObj['offset'] = offset;
    jsObj['constructorName'] = 'fromBuffer';
    return jsObj;
  }
}
export { Quaternion };
class Ray extends MXDartClass {
  origin: Vector3;
  direction: Vector3;
  static copy(other?: Ray) {
    var jsObj = new Ray();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static originDirection(origin?: Vector3, direction?: Vector3) {
    var jsObj = new Ray();
    jsObj.origin = origin;
    jsObj.direction = direction;
    jsObj['constructorName'] = 'originDirection';
    return jsObj;
  }
}
export { Ray };
class Sphere extends MXDartClass {
  center: Vector3;
  radius: number;
  static copy(other?: Sphere) {
    var jsObj = new Sphere();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static centerRadius(center?: Vector3, radius?: number) {
    var jsObj = new Sphere();
    jsObj.center = center;
    jsObj.radius = radius;
    jsObj['constructorName'] = 'centerRadius';
    return jsObj;
  }
}
export { Sphere };
class SimplexNoise extends MXDartClass {
  perm: Array<any>;
  permMod12: Array<any>;
  public constructor(r?: any) {
    super();
    this['r'] = r;
    this.className = 'SimplexNoise';
  }
}
export { SimplexNoise };
class Triangle extends MXDartClass {
  point0: Vector3;
  point1: Vector3;
  point2: Vector3;
  static copy(other?: Triangle) {
    var jsObj = new Triangle();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static points(point0?: Vector3, point1?: Vector3, point2?: Vector3) {
    var jsObj = new Triangle();
    jsObj.point0 = point0;
    jsObj.point1 = point1;
    jsObj.point2 = point2;
    jsObj['constructorName'] = 'points';
    return jsObj;
  }
}
export { Triangle };
abstract class Vector extends MXDartClass {}
export { Vector };
class Vector2 extends MXDartClass {
  v2storage: any;
  static min(a?: Vector2, b?: Vector2, result?: Vector2) {
    var jsObj = new MXDartClass();
    jsObj['a'] = a;
    jsObj['b'] = b;
    jsObj['result'] = result;
    jsObj.className = 'Vector2';
    jsObj['constructorName'] = 'min';
    return jsObj;
  }
  static max(a?: Vector2, b?: Vector2, result?: Vector2) {
    var jsObj = new MXDartClass();
    jsObj['a'] = a;
    jsObj['b'] = b;
    jsObj['result'] = result;
    jsObj.className = 'Vector2';
    jsObj['constructorName'] = 'max';
    return jsObj;
  }
  static mix(min?: Vector2, max?: Vector2, a?: number, result?: Vector2) {
    var jsObj = new MXDartClass();
    jsObj['min'] = min;
    jsObj['max'] = max;
    jsObj['a'] = a;
    jsObj['result'] = result;
    jsObj.className = 'Vector2';
    jsObj['constructorName'] = 'mix';
    return jsObj;
  }
  public constructor(x?: number, y?: number) {
    super();
    this['x'] = x;
    this['y'] = y;
    this.className = 'Vector2';
  }
  static array(array?: Array<any>, offset?: number) {
    var jsObj = new Vector2();
    jsObj['array'] = array;
    jsObj['offset'] = offset;
    jsObj['constructorName'] = 'array';
    return jsObj;
  }
  static all(value?: number) {
    var jsObj = new Vector2();
    jsObj['value'] = value;
    jsObj['constructorName'] = 'all';
    return jsObj;
  }
  static copy(other?: Vector2) {
    var jsObj = new Vector2();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static random(rng?: any) {
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
  static fromFloat64List(_v2storage?: any) {
    var jsObj = new Vector2();
    jsObj.v2storage = _v2storage;
    jsObj['constructorName'] = 'fromFloat64List';
    return jsObj;
  }
  static fromBuffer(buffer?: any, offset?: number) {
    var jsObj = new Vector2();
    jsObj['buffer'] = buffer;
    jsObj['offset'] = offset;
    jsObj['constructorName'] = 'fromBuffer';
    return jsObj;
  }
}
export { Vector2 };
class Vector3 extends MXDartClass {
  v3storage: any;
  static min(a?: Vector3, b?: Vector3, result?: Vector3) {
    var jsObj = new MXDartClass();
    jsObj['a'] = a;
    jsObj['b'] = b;
    jsObj['result'] = result;
    jsObj.className = 'Vector3';
    jsObj['constructorName'] = 'min';
    return jsObj;
  }
  static max(a?: Vector3, b?: Vector3, result?: Vector3) {
    var jsObj = new MXDartClass();
    jsObj['a'] = a;
    jsObj['b'] = b;
    jsObj['result'] = result;
    jsObj.className = 'Vector3';
    jsObj['constructorName'] = 'max';
    return jsObj;
  }
  static mix(min?: Vector3, max?: Vector3, a?: number, result?: Vector3) {
    var jsObj = new MXDartClass();
    jsObj['min'] = min;
    jsObj['max'] = max;
    jsObj['a'] = a;
    jsObj['result'] = result;
    jsObj.className = 'Vector3';
    jsObj['constructorName'] = 'mix';
    return jsObj;
  }
  public constructor(x?: number, y?: number, z?: number) {
    super();
    this['x'] = x;
    this['y'] = y;
    this['z'] = z;
    this.className = 'Vector3';
  }
  static array(array?: Array<any>, offset?: number) {
    var jsObj = new Vector3();
    jsObj['array'] = array;
    jsObj['offset'] = offset;
    jsObj['constructorName'] = 'array';
    return jsObj;
  }
  static all(value?: number) {
    var jsObj = new Vector3();
    jsObj['value'] = value;
    jsObj['constructorName'] = 'all';
    return jsObj;
  }
  static copy(other?: Vector3) {
    var jsObj = new Vector3();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static random(rng?: any) {
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
  static fromFloat64List(_v3storage?: any) {
    var jsObj = new Vector3();
    jsObj.v3storage = _v3storage;
    jsObj['constructorName'] = 'fromFloat64List';
    return jsObj;
  }
  static fromBuffer(buffer?: any, offset?: number) {
    var jsObj = new Vector3();
    jsObj['buffer'] = buffer;
    jsObj['offset'] = offset;
    jsObj['constructorName'] = 'fromBuffer';
    return jsObj;
  }
}
export { Vector3 };
class Vector4 extends MXDartClass {
  v4storage: any;
  static min(a?: Vector4, b?: Vector4, result?: Vector4) {
    var jsObj = new MXDartClass();
    jsObj['a'] = a;
    jsObj['b'] = b;
    jsObj['result'] = result;
    jsObj.className = 'Vector4';
    jsObj['constructorName'] = 'min';
    return jsObj;
  }
  static max(a?: Vector4, b?: Vector4, result?: Vector4) {
    var jsObj = new MXDartClass();
    jsObj['a'] = a;
    jsObj['b'] = b;
    jsObj['result'] = result;
    jsObj.className = 'Vector4';
    jsObj['constructorName'] = 'max';
    return jsObj;
  }
  static mix(min?: Vector4, max?: Vector4, a?: number, result?: Vector4) {
    var jsObj = new MXDartClass();
    jsObj['min'] = min;
    jsObj['max'] = max;
    jsObj['a'] = a;
    jsObj['result'] = result;
    jsObj.className = 'Vector4';
    jsObj['constructorName'] = 'mix';
    return jsObj;
  }
  public constructor(x?: number, y?: number, z?: number, w?: number) {
    super();
    this['x'] = x;
    this['y'] = y;
    this['z'] = z;
    this['w'] = w;
    this.className = 'Vector4';
  }
  static array(array?: Array<any>, offset?: number) {
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
  static all(value?: number) {
    var jsObj = new Vector4();
    jsObj['value'] = value;
    jsObj['constructorName'] = 'all';
    return jsObj;
  }
  static copy(other?: Vector4) {
    var jsObj = new Vector4();
    jsObj['other'] = other;
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static random(rng?: any) {
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
  static fromFloat64List(_v4storage?: any) {
    var jsObj = new Vector4();
    jsObj.v4storage = _v4storage;
    jsObj['constructorName'] = 'fromFloat64List';
    return jsObj;
  }
  static fromBuffer(buffer?: any, offset?: number) {
    var jsObj = new Vector4();
    jsObj['buffer'] = buffer;
    jsObj['offset'] = offset;
    jsObj['constructorName'] = 'fromBuffer';
    return jsObj;
  }
}
export { Vector4 };
