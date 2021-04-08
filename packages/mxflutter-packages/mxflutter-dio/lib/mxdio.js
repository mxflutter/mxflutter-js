//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
const { MXDartClass, MXLifecycleDartClass, MXMirrorObjMethodCall, MXJSLog } = require('@mxflutter/mxflutter');
MXResponseType = {
    json: { _name: 'ResponseType.json', index: 0 },
    stream: { _name: 'ResponseType.stream', index: 1 },
    plain: { _name: 'ResponseType.plain', index: 2 },
    bytes: { _name: 'ResponseType.bytes', index: 3 },
};
class MXBaseOptions extends MXDartClass {
    constructor({ method, connectTimeout, receiveTimeout, sendTimeout, baseUrl, queryParameters, extra, headers, responseType, contentType, validateStatus, receiveDataWhenStatusError, followRedirects, maxRedirects, } = {}) {
        super();
        this.className = 'BaseOptions';
        this.method = method;
        this.connectTimeout = connectTimeout;
        this.receiveTimeout = receiveTimeout;
        this.sendTimeout = sendTimeout;
        this.baseUrl = baseUrl;
        this.queryParameters = queryParameters;
        this.extra = extra;
        this.headers = headers;
        this.responseType = responseType;
        this.contentType = contentType;
        this.validateStatus = validateStatus;
        this.receiveDataWhenStatusError = receiveDataWhenStatusError;
        this.followRedirects = followRedirects;
        this.maxRedirects = maxRedirects;
    }
}
class MXOptions extends MXDartClass {
    constructor({ method, sendTimeout, receiveTimeout, extra, headers, responseType, contentType, validateStatus, receiveDataWhenStatusError, followRedirects, maxRedirects,
    // requestEncoder,
    // responseDecoder,
     } = {}) {
        super();
        this.className = 'Options';
        this.method = method;
        this.sendTimeout = sendTimeout;
        this.receiveTimeout = receiveTimeout;
        this.extra = extra;
        this.headers = headers;
        this.responseType = responseType;
        this.contentType = contentType;
        this.validateStatus = validateStatus;
        this.receiveDataWhenStatusError = receiveDataWhenStatusError;
        this.followRedirects = followRedirects;
        this.maxRedirects = maxRedirects;
        // this.requestEncoder = requestEncoder;
        // this.responseDecoder = responseDecoder;
    }
}
class MXRequestOptions extends MXDartClass {
    constructor({ method, sendTimeout, receiveTimeout, connectTimeout, data, path, queryParameters, baseUrl, extra, headers, responseType, contentType, validateStatus, receiveDataWhenStatusError, followRedirects, maxRedirects, } = {}) {
        super();
        this.className = 'RequestOptions';
        this.method = method;
        this.sendTimeout = sendTimeout;
        this.receiveTimeout = receiveTimeout;
        this.connectTimeout = connectTimeout;
        this.data = data;
        this.path = path;
        this.queryParameters = queryParameters;
        this.baseUrl = baseUrl;
        this.extra = extra;
        this.headers = headers;
        this.responseType = responseType;
        this.contentType = contentType;
        this.validateStatus = validateStatus;
        this.receiveDataWhenStatusError = receiveDataWhenStatusError;
        this.followRedirects = followRedirects;
        this.maxRedirects = maxRedirects;
    }
}
class MXHeaders {
    constructor({ map } = {}) {
        this.map = map;
    }
    /// Convenience method for the value for a single valued header. If
    /// there is no header with the provided name, [:null:] will be
    /// returned. If the header has more than one value an exception is
    /// thrown.
    value(name) {
        let arr = this.map[name];
        if (arr == null)
            return null;
        if (arr.length == 1)
            return arr[0];
        throw Exception('"$name" header has more than one value, please use Headers[name]');
    }
}
MXHeaders.acceptHeader = 'accept';
MXHeaders.contentEncodingHeader = 'content-encoding';
MXHeaders.contentLengthHeader = 'content-length';
MXHeaders.contentTypeHeader = 'content-type';
MXHeaders.wwwAuthenticateHeader = 'www-authenticate';
// Header field value
MXHeaders.jsonContentType = 'application/json; charset=utf-8';
MXHeaders.formUrlEncodedContentType = 'application/x-www-form-urlencoded';
class MXResponse extends MXDartClass {
    constructor({ data, headers, request, isRedirect, statusCode, statusMessage, redirects, extra } = {}) {
        super();
        this.className = 'Response';
        this.data = data;
        this.headers = headers;
        this.request = request;
        this.isRedirect = isRedirect;
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.redirects = redirects;
        this.extra = extra;
    }
    static fromJSON(jsonMap) {
        let resp = new MXResponse();
        resp.data = jsonMap['data'];
        resp.headers = new MXHeaders(jsonMap['headers']);
        resp.request = jsonMap['request'];
        resp.isRedirect = jsonMap['isRedirect'];
        resp.statusCode = jsonMap['statusCode'];
        resp.statusMessage = jsonMap['statusMessage'];
        resp.redirects = jsonMap['redirects'];
        resp.extra = jsonMap['extra'];
        return resp;
    }
}
///为了iOS / Android 双平台同时支持，用Flutter层能力来实现网络
class MXDio extends MXLifecycleDartClass {
    constructor(baseOptions) {
        //创建对应FLutter对象
        var argument = new MXMirrorObjMethodCall({
            className: 'Dio',
            args: {
                baseOptions: baseOptions,
            },
        });
        super(argument);
    }
    get(path, { queryParameters, options, 
    //cancelToken,
    onReceiveProgress, } = {}) {
        return this.request(path, {
            options: this.checkOptions('get', options),
            queryParameters: queryParameters,
            //cancelToken: cancelToken,
            onReceiveProgress: onReceiveProgress,
        });
    }
    post(path, { data, queryParameters, // Map<String, dynamic>
    options, //Options
    //cancelToken,
    onSendProgress, //ProgressCallback
    onReceiveProgress, //ProgressCallback
     } = {}) {
        return this.request(path, {
            data: data,
            options: this.checkOptions('post', options),
            queryParameters: queryParameters,
            //cancelToken: cancelToken,
            onSendProgress: onSendProgress,
            onReceiveProgress: onReceiveProgress,
        });
    }
    request(path, { data, queryParameters, // Map<String, dynamic>
    options, //Options
    onSendProgress, //ProgressCallback
    onReceiveProgress, //ProgressCallback
     } = {}) {
        let onSendProgressCallbackID = this.addCallback(onSendProgress);
        let onReceiveProgressCallbackID = this.addCallback(onReceiveProgress);
        let argument = new MXMirrorObjMethodCall({
            className: 'Dio',
            funcName: 'request',
            args: {
                path: path,
                data: data,
                options: options,
                queryParameters: queryParameters,
                onSendProgress: onSendProgressCallbackID,
                onReceiveProgress: onReceiveProgressCallbackID,
            },
        });
        let that = this;
        let promiseResult = new Promise(function (resolve, reject) {
            that.invokeMirrorObjMethod(argument, function (value) {
                if (value != null) {
                    let jsonMap = JSON.parse(value);
                    let response = MXResponse.fromJSON(jsonMap);
                    if (response) {
                        response.options = options;
                    }
                    if (options.responseType == MXResponseType.bytes) {
                        response.data = convert.base64Encode(response.data);
                    }
                    resolve(response);
                }
                else {
                    resolve(null);
                }
                setTimeout(function () {
                    that.removeCallback(onSendProgressCallbackID);
                    that.removeCallback(onReceiveProgressCallbackID);
                }, 1000);
            });
        });
        return promiseResult;
    }
    checkOptions(method, options) {
        options = options ? options : new MXOptions();
        options.method = method;
        return options;
    }
}
function MXFDio(baseOptions) {
    return new MXDio(baseOptions);
}
//手写JS使用的导出
exports.MXDio = MXFDio;
exports.MXBaseOptions = MXBaseOptions;
exports.MXOptions = MXOptions;
exports.MXHeaders = MXHeaders;
exports.MXResponse = MXResponse;
exports.MXRequestOptions = MXRequestOptions;
exports.MXResponseType = MXResponseType;
