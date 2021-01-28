//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from './framework';
class Image extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.image = namedParameters.image;
        this.frameBuilder = namedParameters.frameBuilder;
        this.loadingBuilder = namedParameters.loadingBuilder;
        this.errorBuilder = namedParameters.errorBuilder;
        this.semanticLabel = namedParameters.semanticLabel;
        this.excludeFromSemantics = namedParameters.excludeFromSemantics;
        this.width = namedParameters.width;
        this.height = namedParameters.height;
        this.color = namedParameters.color;
        this.colorBlendMode = namedParameters.colorBlendMode;
        this.fit = namedParameters.fit;
        this.alignment = namedParameters.alignment;
        this.repeat = namedParameters.repeat;
        this.centerSlice = namedParameters.centerSlice;
        this.matchTextDirection = namedParameters.matchTextDirection;
        this.gaplessPlayback = namedParameters.gaplessPlayback;
        this.isAntiAlias = namedParameters.isAntiAlias;
        this.filterQuality = namedParameters.filterQuality;
        this.className = 'Image';
    }
    static network(src, namedParameters = {}) {
        var jsObj = new Image();
        jsObj['src'] = src;
        jsObj.key = namedParameters.key;
        jsObj['scale'] = namedParameters.scale;
        jsObj.frameBuilder = namedParameters.frameBuilder;
        jsObj.loadingBuilder = namedParameters.loadingBuilder;
        jsObj.errorBuilder = namedParameters.errorBuilder;
        jsObj.semanticLabel = namedParameters.semanticLabel;
        jsObj.excludeFromSemantics = namedParameters.excludeFromSemantics;
        jsObj.width = namedParameters.width;
        jsObj.height = namedParameters.height;
        jsObj.color = namedParameters.color;
        jsObj.colorBlendMode = namedParameters.colorBlendMode;
        jsObj.fit = namedParameters.fit;
        jsObj.alignment = namedParameters.alignment;
        jsObj.repeat = namedParameters.repeat;
        jsObj.centerSlice = namedParameters.centerSlice;
        jsObj.matchTextDirection = namedParameters.matchTextDirection;
        jsObj.gaplessPlayback = namedParameters.gaplessPlayback;
        jsObj.filterQuality = namedParameters.filterQuality;
        jsObj.isAntiAlias = namedParameters.isAntiAlias;
        jsObj['headers'] = namedParameters.headers;
        jsObj['cacheWidth'] = namedParameters.cacheWidth;
        jsObj['cacheHeight'] = namedParameters.cacheHeight;
        jsObj['constructorName'] = 'network';
        return jsObj;
    }
    static file(file, namedParameters = {}) {
        var jsObj = new Image();
        jsObj['file'] = file;
        jsObj.key = namedParameters.key;
        jsObj['scale'] = namedParameters.scale;
        jsObj.frameBuilder = namedParameters.frameBuilder;
        jsObj.errorBuilder = namedParameters.errorBuilder;
        jsObj.semanticLabel = namedParameters.semanticLabel;
        jsObj.excludeFromSemantics = namedParameters.excludeFromSemantics;
        jsObj.width = namedParameters.width;
        jsObj.height = namedParameters.height;
        jsObj.color = namedParameters.color;
        jsObj.colorBlendMode = namedParameters.colorBlendMode;
        jsObj.fit = namedParameters.fit;
        jsObj.alignment = namedParameters.alignment;
        jsObj.repeat = namedParameters.repeat;
        jsObj.centerSlice = namedParameters.centerSlice;
        jsObj.matchTextDirection = namedParameters.matchTextDirection;
        jsObj.gaplessPlayback = namedParameters.gaplessPlayback;
        jsObj.isAntiAlias = namedParameters.isAntiAlias;
        jsObj.filterQuality = namedParameters.filterQuality;
        jsObj['cacheWidth'] = namedParameters.cacheWidth;
        jsObj['cacheHeight'] = namedParameters.cacheHeight;
        jsObj['constructorName'] = 'file';
        return jsObj;
    }
    static asset(name, namedParameters = {}) {
        var jsObj = new Image();
        jsObj['name'] = name;
        jsObj.key = namedParameters.key;
        jsObj['bundle'] = namedParameters.bundle;
        jsObj.frameBuilder = namedParameters.frameBuilder;
        jsObj.errorBuilder = namedParameters.errorBuilder;
        jsObj.semanticLabel = namedParameters.semanticLabel;
        jsObj.excludeFromSemantics = namedParameters.excludeFromSemantics;
        jsObj['scale'] = namedParameters.scale;
        jsObj.width = namedParameters.width;
        jsObj.height = namedParameters.height;
        jsObj.color = namedParameters.color;
        jsObj.colorBlendMode = namedParameters.colorBlendMode;
        jsObj.fit = namedParameters.fit;
        jsObj.alignment = namedParameters.alignment;
        jsObj.repeat = namedParameters.repeat;
        jsObj.centerSlice = namedParameters.centerSlice;
        jsObj.matchTextDirection = namedParameters.matchTextDirection;
        jsObj.gaplessPlayback = namedParameters.gaplessPlayback;
        jsObj.isAntiAlias = namedParameters.isAntiAlias;
        jsObj['__mx_package'] = namedParameters.__mx_package;
        jsObj.filterQuality = namedParameters.filterQuality;
        jsObj['cacheWidth'] = namedParameters.cacheWidth;
        jsObj['cacheHeight'] = namedParameters.cacheHeight;
        jsObj['constructorName'] = 'asset';
        return jsObj;
    }
    static memory(bytes, namedParameters = {}) {
        var jsObj = new Image();
        jsObj['bytes'] = bytes;
        jsObj.key = namedParameters.key;
        jsObj['scale'] = namedParameters.scale;
        jsObj.frameBuilder = namedParameters.frameBuilder;
        jsObj.errorBuilder = namedParameters.errorBuilder;
        jsObj.semanticLabel = namedParameters.semanticLabel;
        jsObj.excludeFromSemantics = namedParameters.excludeFromSemantics;
        jsObj.width = namedParameters.width;
        jsObj.height = namedParameters.height;
        jsObj.color = namedParameters.color;
        jsObj.colorBlendMode = namedParameters.colorBlendMode;
        jsObj.fit = namedParameters.fit;
        jsObj.alignment = namedParameters.alignment;
        jsObj.repeat = namedParameters.repeat;
        jsObj.centerSlice = namedParameters.centerSlice;
        jsObj.matchTextDirection = namedParameters.matchTextDirection;
        jsObj.gaplessPlayback = namedParameters.gaplessPlayback;
        jsObj.isAntiAlias = namedParameters.isAntiAlias;
        jsObj.filterQuality = namedParameters.filterQuality;
        jsObj['cacheWidth'] = namedParameters.cacheWidth;
        jsObj['cacheHeight'] = namedParameters.cacheHeight;
        jsObj['constructorName'] = 'memory';
        return jsObj;
    }
}
export { Image };
class _ImageState extends State$ {
}
export { _ImageState };
