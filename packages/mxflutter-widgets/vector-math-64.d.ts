import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class Aabb2 extends MXDartClass {
    min: Vector2;
    max: Vector2;
    static centerAndHalfExtents(center?: Vector2, halfExtents?: Vector2): Aabb2;
    static copy(other?: Aabb2): Aabb2;
    static minMax(min?: Vector2, max?: Vector2): Aabb2;
    static fromBuffer(buffer?: any, offset?: number): Aabb2;
}
export { Aabb2 };
declare class Aabb3 extends MXDartClass {
    min: Vector3;
    max: Vector3;
    static fromSphere(sphere?: Sphere): Aabb3;
    static fromTriangle(triangle?: Triangle): Aabb3;
    static fromQuad(quad?: Quad): Aabb3;
    static fromObb3(obb?: Obb3): Aabb3;
    static fromRay(ray?: Ray, limitMin?: number, limitMax?: number): Aabb3;
    static centerAndHalfExtents(center?: Vector3, halfExtents?: Vector3): Aabb3;
    static copy(other?: Aabb3): Aabb3;
    static minMax(min?: Vector3, max?: Vector3): Aabb3;
    static fromBuffer(buffer?: any, offset?: number): Aabb3;
}
export { Aabb3 };
declare class Colors extends MXDartClass {
    static fromRgba(r?: number, g?: number, b?: number, a?: number, result?: Vector4): MXDartClass;
    static fromHexString(value?: string, result?: Vector4): MXDartClass;
    static alphaBlend(foreground?: Vector4, background?: Vector4, result?: Vector4): MXDartClass;
    static toGrayscale(input?: Vector4, result?: Vector4): MXDartClass;
    static linearToGamma(linearColor?: Vector4, gammaColor?: Vector4, gamma?: number): MXDartClass;
    static gammaToLinear(gammaColor?: Vector4, linearColor?: Vector4, gamma?: number): MXDartClass;
    static rgbToHsv(rgbColor?: Vector4, hsvColor?: Vector4): MXDartClass;
    static hsvToRgb(hsvColor?: Vector4, rgbColor?: Vector4): MXDartClass;
    static rgbToHsl(rgbColor?: Vector4, hslColor?: Vector4): MXDartClass;
    static hslToRgb(hslColor?: Vector4, rgbColor?: Vector4): MXDartClass;
}
export { Colors };
declare class Frustum extends MXDartClass {
    plane0: Plane;
    plane1: Plane;
    plane2: Plane;
    plane3: Plane;
    plane4: Plane;
    plane5: Plane;
    static copy(other?: Frustum): Frustum;
    static matrix(matrix?: Matrix4): Frustum;
}
export { Frustum };
declare class IntersectionResult extends MXDartClass {
    depth: number;
    axis: Vector3;
}
export { IntersectionResult };
declare class Matrix2 extends MXDartClass {
    m2storage: any;
    static solve(A?: Matrix2, x?: Vector2, b?: Vector2): MXDartClass;
    constructor(arg0?: number, arg1?: number, arg2?: number, arg3?: number);
    static fromList(values?: Array<any>): Matrix2;
    static identity(): Matrix2;
    static copy(other?: Matrix2): Matrix2;
    static columns(arg0?: Vector2, arg1?: Vector2): Matrix2;
    static outer(u?: Vector2, v?: Vector2): Matrix2;
    static rotation(radians?: number): Matrix2;
    static zero(): Matrix2;
}
export { Matrix2 };
declare class Matrix3 extends MXDartClass {
    m3storage: any;
    static solve2(A?: Matrix3, x?: Vector2, b?: Vector2): MXDartClass;
    static solve(A?: Matrix3, x?: Vector3, b?: Vector3): MXDartClass;
    constructor(arg0?: number, arg1?: number, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number);
    static fromList(values?: Array<any>): Matrix3;
    static identity(): Matrix3;
    static copy(other?: Matrix3): Matrix3;
    static columns(arg0?: Vector3, arg1?: Vector3, arg2?: Vector3): Matrix3;
    static outer(u?: Vector3, v?: Vector3): Matrix3;
    static rotationX(radians?: number): Matrix3;
    static rotationY(radians?: number): Matrix3;
    static rotationZ(radians?: number): Matrix3;
    static zero(): Matrix3;
}
export { Matrix3 };
declare class Matrix4 extends MXDartClass {
    m4storage: any;
    static solve2(A?: Matrix4, x?: Vector2, b?: Vector2): MXDartClass;
    static solve3(A?: Matrix4, x?: Vector3, b?: Vector3): MXDartClass;
    static solve(A?: Matrix4, x?: Vector4, b?: Vector4): MXDartClass;
    constructor(arg0?: number, arg1?: number, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number, arg13?: number, arg14?: number, arg15?: number);
    static fromList(values?: Array<any>): Matrix4;
    static identity(): Matrix4;
    static copy(other?: Matrix4): Matrix4;
    static inverted(other?: Matrix4): Matrix4;
    static columns(arg0?: Vector4, arg1?: Vector4, arg2?: Vector4, arg3?: Vector4): Matrix4;
    static outer(u?: Vector4, v?: Vector4): Matrix4;
    static rotationX(radians?: number): Matrix4;
    static rotationY(radians?: number): Matrix4;
    static rotationZ(radians?: number): Matrix4;
    static translation(translation?: Vector3): Matrix4;
    static translationValues(x?: number, y?: number, z?: number): Matrix4;
    static diagonal3(scale?: Vector3): Matrix4;
    static diagonal3Values(x?: number, y?: number, z?: number): Matrix4;
    static skewX(alpha?: number): Matrix4;
    static skewY(beta?: number): Matrix4;
    static skew(alpha?: number, beta?: number): Matrix4;
    static compose(translation?: Vector3, rotation?: Quaternion, scale?: Vector3): Matrix4;
    static zero(): Matrix4;
    static fromFloat64List(_m4storage?: any): Matrix4;
    static fromBuffer(buffer?: any, offset?: number): Matrix4;
}
export { Matrix4 };
declare class Obb3 extends MXDartClass {
    center: Vector3;
    halfExtents: Vector3;
    axis0: Vector3;
    axis1: Vector3;
    axis2: Vector3;
    static copy(other?: Obb3): Obb3;
    static centerExtentsAxes(center?: Vector3, halfExtents?: Vector3, axis0?: Vector3, axis1?: Vector3, axis2?: Vector3): Obb3;
}
export { Obb3 };
declare class Plane extends MXDartClass {
    normal: Vector3;
    constant: number;
    static intersection(a?: Plane, b?: Plane, c?: Plane, result?: Vector3): MXDartClass;
    static copy(other?: Plane): Plane;
    static components(x?: number, y?: number, z?: number, w?: number): Plane;
    static normalconstant(normal_?: Vector3, constant_?: number): Plane;
}
export { Plane };
declare class Quad extends MXDartClass {
    point0: Vector3;
    point1: Vector3;
    point2: Vector3;
    point3: Vector3;
    static copy(other?: Quad): Quad;
    static points(point0?: Vector3, point1?: Vector3, point2?: Vector3, point3?: Vector3): Quad;
}
export { Quad };
declare class Quaternion extends MXDartClass {
    qStorage: any;
    constructor(x?: number, y?: number, z?: number, w?: number);
    static fromRotation(rotationMatrix?: Matrix3): Quaternion;
    static axisAngle(axis?: Vector3, angle?: number): Quaternion;
    static fromTwoVectors(a?: Vector3, b?: Vector3): Quaternion;
    static copy(original?: Quaternion): Quaternion;
    static random(rn?: any): Quaternion;
    static identity(): Quaternion;
    static dq(q?: Quaternion, omega?: Vector3): Quaternion;
    static euler(yaw?: number, pitch?: number, roll?: number): Quaternion;
    static fromFloat64List(_qStorage?: any): Quaternion;
    static fromBuffer(buffer?: any, offset?: number): Quaternion;
}
export { Quaternion };
declare class Ray extends MXDartClass {
    origin: Vector3;
    direction: Vector3;
    static copy(other?: Ray): Ray;
    static originDirection(origin?: Vector3, direction?: Vector3): Ray;
}
export { Ray };
declare class Sphere extends MXDartClass {
    center: Vector3;
    radius: number;
    static copy(other?: Sphere): Sphere;
    static centerRadius(center?: Vector3, radius?: number): Sphere;
}
export { Sphere };
declare class SimplexNoise extends MXDartClass {
    perm: Array<any>;
    permMod12: Array<any>;
    constructor(r?: any);
}
export { SimplexNoise };
declare class Triangle extends MXDartClass {
    point0: Vector3;
    point1: Vector3;
    point2: Vector3;
    static copy(other?: Triangle): Triangle;
    static points(point0?: Vector3, point1?: Vector3, point2?: Vector3): Triangle;
}
export { Triangle };
declare abstract class Vector extends MXDartClass {
}
export { Vector };
declare class Vector2 extends MXDartClass {
    v2storage: any;
    static min(a?: Vector2, b?: Vector2, result?: Vector2): MXDartClass;
    static max(a?: Vector2, b?: Vector2, result?: Vector2): MXDartClass;
    static mix(min?: Vector2, max?: Vector2, a?: number, result?: Vector2): MXDartClass;
    constructor(x?: number, y?: number);
    static array(array?: Array<any>, offset?: number): Vector2;
    static all(value?: number): Vector2;
    static copy(other?: Vector2): Vector2;
    static random(rng?: any): Vector2;
    static zero(): Vector2;
    static fromFloat64List(_v2storage?: any): Vector2;
    static fromBuffer(buffer?: any, offset?: number): Vector2;
}
export { Vector2 };
declare class Vector3 extends MXDartClass {
    v3storage: any;
    static min(a?: Vector3, b?: Vector3, result?: Vector3): MXDartClass;
    static max(a?: Vector3, b?: Vector3, result?: Vector3): MXDartClass;
    static mix(min?: Vector3, max?: Vector3, a?: number, result?: Vector3): MXDartClass;
    constructor(x?: number, y?: number, z?: number);
    static array(array?: Array<any>, offset?: number): Vector3;
    static all(value?: number): Vector3;
    static copy(other?: Vector3): Vector3;
    static random(rng?: any): Vector3;
    static zero(): Vector3;
    static fromFloat64List(_v3storage?: any): Vector3;
    static fromBuffer(buffer?: any, offset?: number): Vector3;
}
export { Vector3 };
declare class Vector4 extends MXDartClass {
    v4storage: any;
    static min(a?: Vector4, b?: Vector4, result?: Vector4): MXDartClass;
    static max(a?: Vector4, b?: Vector4, result?: Vector4): MXDartClass;
    static mix(min?: Vector4, max?: Vector4, a?: number, result?: Vector4): MXDartClass;
    constructor(x?: number, y?: number, z?: number, w?: number);
    static array(array?: Array<any>, offset?: number): Vector4;
    static identity(): Vector4;
    static all(value?: number): Vector4;
    static copy(other?: Vector4): Vector4;
    static random(rng?: any): Vector4;
    static zero(): Vector4;
    static fromFloat64List(_v4storage?: any): Vector4;
    static fromBuffer(buffer?: any, offset?: number): Vector4;
}
export { Vector4 };
