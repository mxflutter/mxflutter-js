import { MXDartClass, MXMirrorWidget } from '@mxflutter/mxflutter-base';
declare enum DiagnosticLevel {
    hidden = "{ \"_name\": \"DiagnosticLevel.hidden\", \"index\": 0 }",
    fine = "{ \"_name\": \"DiagnosticLevel.fine\", \"index\": 1 }",
    debug = "{ \"_name\": \"DiagnosticLevel.debug\", \"index\": 2 }",
    info = "{ \"_name\": \"DiagnosticLevel.info\", \"index\": 3 }",
    warning = "{ \"_name\": \"DiagnosticLevel.warning\", \"index\": 4 }",
    hint = "{ \"_name\": \"DiagnosticLevel.hint\", \"index\": 5 }",
    summary = "{ \"_name\": \"DiagnosticLevel.summary\", \"index\": 6 }",
    error = "{ \"_name\": \"DiagnosticLevel.error\", \"index\": 7 }",
    off = "{ \"_name\": \"DiagnosticLevel.off\", \"index\": 8 }"
}
export { DiagnosticLevel };
declare enum DiagnosticsTreeStyle {
    none = "{ \"_name\": \"DiagnosticsTreeStyle.none\", \"index\": 0 }",
    sparse = "{ \"_name\": \"DiagnosticsTreeStyle.sparse\", \"index\": 1 }",
    offstage = "{ \"_name\": \"DiagnosticsTreeStyle.offstage\", \"index\": 2 }",
    dense = "{ \"_name\": \"DiagnosticsTreeStyle.dense\", \"index\": 3 }",
    transition = "{ \"_name\": \"DiagnosticsTreeStyle.transition\", \"index\": 4 }",
    error = "{ \"_name\": \"DiagnosticsTreeStyle.error\", \"index\": 5 }",
    whitespace = "{ \"_name\": \"DiagnosticsTreeStyle.whitespace\", \"index\": 6 }",
    flat = "{ \"_name\": \"DiagnosticsTreeStyle.flat\", \"index\": 7 }",
    singleLine = "{ \"_name\": \"DiagnosticsTreeStyle.singleLine\", \"index\": 8 }",
    errorProperty = "{ \"_name\": \"DiagnosticsTreeStyle.errorProperty\", \"index\": 9 }",
    shallow = "{ \"_name\": \"DiagnosticsTreeStyle.shallow\", \"index\": 10 }",
    truncateChildren = "{ \"_name\": \"DiagnosticsTreeStyle.truncateChildren\", \"index\": 11 }"
}
export { DiagnosticsTreeStyle };
declare class TextTreeConfiguration extends MXDartClass {
    prefixLineOne: string;
    suffixLineOne: string;
    prefixOtherLines: string;
    prefixLastChildLineOne: string;
    prefixOtherLinesRootNode: string;
    propertyPrefixIfChildren: string;
    propertyPrefixNoChildren: string;
    linkCharacter: string;
    childLinkSpace: string;
    lineBreak: string;
    lineBreakProperties: boolean;
    beforeName: string;
    afterName: string;
    afterDescriptionIfBody: string;
    afterDescription: string;
    beforeProperties: string;
    afterProperties: string;
    mandatoryAfterProperties: string;
    propertySeparator: string;
    bodyIndent: string;
    showChildren: boolean;
    addBlankLineIfNoChildren: boolean;
    isNameOnOwnLine: boolean;
    footer: string;
    mandatoryFooter: string;
    isBlankLineBetweenPropertiesAndChildren: boolean;
    constructor(namedParameters?: {
        prefixLineOne?: string;
        prefixOtherLines?: string;
        prefixLastChildLineOne?: string;
        prefixOtherLinesRootNode?: string;
        linkCharacter?: string;
        propertyPrefixIfChildren?: string;
        propertyPrefixNoChildren?: string;
        lineBreak?: string;
        lineBreakProperties?: boolean;
        afterName?: string;
        afterDescriptionIfBody?: string;
        afterDescription?: string;
        beforeProperties?: string;
        afterProperties?: string;
        mandatoryAfterProperties?: string;
        propertySeparator?: string;
        bodyIndent?: string;
        footer?: string;
        showChildren?: boolean;
        addBlankLineIfNoChildren?: boolean;
        isNameOnOwnLine?: boolean;
        isBlankLineBetweenPropertiesAndChildren?: boolean;
        beforeName?: string;
        suffixLineOne?: string;
        mandatoryFooter?: string;
    });
}
export { TextTreeConfiguration };
declare enum _WordWrapParseMode {
    inSpace = "{ \"_name\": \"_WordWrapParseMode.inSpace\", \"index\": 0 }",
    inWord = "{ \"_name\": \"_WordWrapParseMode.inWord\", \"index\": 1 }",
    atBreak = "{ \"_name\": \"_WordWrapParseMode.atBreak\", \"index\": 2 }"
}
export { _WordWrapParseMode };
declare class _PrefixedStringBuilder extends MXDartClass {
    prefixLineOne: string;
    prefixOtherLines: string;
    nextPrefixOtherLines: string;
    wrapWidth: number;
    buffer: any;
    currentLine: any;
    wrappableRanges: Array<any>;
    numLines: number;
    constructor(namedParameters?: {
        prefixLineOne?: string;
        prefixOtherLines?: string;
        wrapWidth?: number;
    });
}
export { _PrefixedStringBuilder };
declare class _NoDefaultValue extends MXDartClass {
}
export { _NoDefaultValue };
declare class TextTreeRenderer extends MXDartClass {
    wrapWidth: number;
    wrapWidthProperties: number;
    minLevel: DiagnosticLevel;
    maxDescendentsTruncatableNode: number;
    constructor(namedParameters?: {
        minLevel?: DiagnosticLevel;
        wrapWidth?: number;
        wrapWidthProperties?: number;
        maxDescendentsTruncatableNode?: number;
    });
}
export { TextTreeRenderer };
declare class DiagnosticPropertiesBuilder extends MXDartClass {
    properties: Array<any>;
    defaultDiagnosticsTreeStyle: DiagnosticsTreeStyle;
    emptyBodyDescription: string;
    static fromProperties(properties?: Array<any>): DiagnosticPropertiesBuilder;
}
export { DiagnosticPropertiesBuilder };
declare abstract class DiagnosticableTree extends MXMirrorWidget {
}
export { DiagnosticableTree };
declare abstract class DiagnosticableTreeMixin extends MXDartClass {
}
export { DiagnosticableTreeMixin };
declare abstract class DiagnosticsSerializationDelegate extends MXDartClass {
    constructor(namedParameters?: {
        subtreeDepth?: number;
        includeProperties?: boolean;
    });
}
export { DiagnosticsSerializationDelegate };
declare class _DefaultDiagnosticsSerializationDelegate extends MXDartClass {
    includeProperties: boolean;
    subtreeDepth: number;
    constructor(namedParameters?: {
        includeProperties?: boolean;
        subtreeDepth?: number;
    });
}
export { _DefaultDiagnosticsSerializationDelegate };
