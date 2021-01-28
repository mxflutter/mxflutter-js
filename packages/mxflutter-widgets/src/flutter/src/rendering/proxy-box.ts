//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { LayerLink } from './layer';
import { TextSelection } from '../services/text-editing';
import { MouseCursor } from './mouse-cursor';
import { HitTestEntry } from '../gestures/hit-test';
import { PointerEvent } from '../gestures/events';
import { BoxFit } from '../painting/box-fit';
import { AlignmentGeometry, Alignment } from '../painting/alignment';
import { ImageConfiguration } from '../painting/image-provider';
import { BoxPainter, Decoration } from '../painting/decoration';
import { BoxShape } from '../painting/box-border';
import { SemanticsConfiguration, SemanticsHintOverrides, SemanticsSortKey } from '../semantics/semantics';
import { BorderRadius } from '../painting/border-radius';
import { TextPainter } from '../painting/text-painter';
import { ShapeBorder } from '../painting/borders';
import { Listenable } from '../foundation/change-notifier';
import { Animation } from '../animation/animation';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Matrix4 } from '../../../vector-math-64';
import {
  TextBaseline,
  Offset,
  BlendMode,
  ImageFilter,
  Size,
  TextDirection,
  Clip,
  Paint,
  Rect,
  Path,
  Color,
  SemanticsAction,
} from '../../../mx-dart-sdk';
import { RenderObject, PaintingContext, RenderObjectWithChildMixin, PipelineOwner } from './object';
import { RenderBox, BoxHitTestResult, BoxConstraints } from './box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RenderProxyBox extends RenderBox {
  public constructor(child?: RenderBox) {
    super();
    this['child'] = child;
    this.className = 'RenderProxyBox';
  }
}
export { RenderProxyBox };
abstract class RenderProxyBoxMixin extends MXDartClass {}
export { RenderProxyBoxMixin };
enum HitTestBehavior {
  deferToChild = '{ "_name": "HitTestBehavior.deferToChild", "index": 0 }',
  opaque = '{ "_name": "HitTestBehavior.opaque", "index": 1 }',
  translucent = '{ "_name": "HitTestBehavior.translucent", "index": 2 }',
}

export { HitTestBehavior };
abstract class RenderProxyBoxWithHitTestBehavior extends RenderProxyBox {
  behavior: HitTestBehavior;
}
export { RenderProxyBoxWithHitTestBehavior };
class RenderConstrainedBox extends RenderProxyBox {
  additionalConstraints: BoxConstraints;
  public constructor(namedParameters: { child?: RenderBox; additionalConstraints?: BoxConstraints } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.additionalConstraints = namedParameters.additionalConstraints;
    this.className = 'RenderConstrainedBox';
  }
}
export { RenderConstrainedBox };
class RenderLimitedBox extends RenderProxyBox {
  maxWidth: number;
  maxHeight: number;
  public constructor(namedParameters: { child?: RenderBox; maxWidth?: number; maxHeight?: number } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.maxWidth = namedParameters.maxWidth;
    this.maxHeight = namedParameters.maxHeight;
    this.className = 'RenderLimitedBox';
  }
}
export { RenderLimitedBox };
class RenderAspectRatio extends RenderProxyBox {
  aspectRatio: number;
  public constructor(namedParameters: { child?: RenderBox; aspectRatio?: number } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.aspectRatio = namedParameters.aspectRatio;
    this.className = 'RenderAspectRatio';
  }
}
export { RenderAspectRatio };
class RenderIntrinsicWidth extends RenderProxyBox {
  stepWidth: number;
  stepHeight: number;
  public constructor(namedParameters: { stepWidth?: number; stepHeight?: number; child?: RenderBox } = {}) {
    super();
    this.stepWidth = namedParameters.stepWidth;
    this.stepHeight = namedParameters.stepHeight;
    this['child'] = namedParameters.child;
    this.className = 'RenderIntrinsicWidth';
  }
}
export { RenderIntrinsicWidth };
class RenderIntrinsicHeight extends RenderProxyBox {
  public constructor(namedParameters: { child?: RenderBox } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.className = 'RenderIntrinsicHeight';
  }
}
export { RenderIntrinsicHeight };
class RenderOpacity extends RenderProxyBox {
  alpha: number;
  opacity: number;
  alwaysIncludeSemantics: boolean;
  public constructor(namedParameters: { opacity?: number; alwaysIncludeSemantics?: boolean; child?: RenderBox } = {}) {
    super();
    this.opacity = namedParameters.opacity;
    this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
    this['child'] = namedParameters.child;
    this.className = 'RenderOpacity';
  }
}
export { RenderOpacity };
abstract class RenderAnimatedOpacityMixin extends RenderObjectWithChildMixin {
  alpha: number;
  currentlyNeedsCompositing: boolean;
  opacity: Animation;
  alwaysIncludeSemantics: boolean;
}
export { RenderAnimatedOpacityMixin };
class RenderAnimatedOpacity extends RenderProxyBox {
  public constructor(
    namedParameters: { opacity?: Animation; alwaysIncludeSemantics?: boolean; child?: RenderBox } = {},
  ) {
    super();
    this['opacity'] = namedParameters.opacity;
    this['alwaysIncludeSemantics'] = namedParameters.alwaysIncludeSemantics;
    this['child'] = namedParameters.child;
    this.className = 'RenderAnimatedOpacity';
  }
}
export { RenderAnimatedOpacity };
class RenderShaderMask extends RenderProxyBox {
  shaderCallback: any;
  blendMode: BlendMode;
  public constructor(namedParameters: { child?: RenderBox; shaderCallback?: any; blendMode?: BlendMode } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.shaderCallback = namedParameters.shaderCallback;
    this.blendMode = namedParameters.blendMode;
    this.className = 'RenderShaderMask';
  }
}
export { RenderShaderMask };
class RenderBackdropFilter extends RenderProxyBox {
  filter: ImageFilter;
  public constructor(namedParameters: { child?: RenderBox; filter?: ImageFilter } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.filter = namedParameters.filter;
    this.className = 'RenderBackdropFilter';
  }
}
export { RenderBackdropFilter };
abstract class CustomClipper extends Listenable {
  reclip: Listenable;
}
export { CustomClipper };
class ShapeBorderClipper extends CustomClipper {
  shape: ShapeBorder;
  textDirection: TextDirection;
  public constructor(namedParameters: { shape?: ShapeBorder; textDirection?: TextDirection } = {}) {
    super();
    this.shape = namedParameters.shape;
    this.textDirection = namedParameters.textDirection;
    this.className = 'ShapeBorderClipper';
  }
}
export { ShapeBorderClipper };
abstract class _RenderCustomClip extends RenderProxyBox {
  clipper: CustomClipper;
  clip: any;
  clipBehavior: Clip;
  debugPaint: Paint;
  debugText: TextPainter;
}
export { _RenderCustomClip };
class RenderClipRect extends _RenderCustomClip {
  public constructor(namedParameters: { child?: RenderBox; clipper?: CustomClipper; clipBehavior?: Clip } = {}) {
    super();
    this['child'] = namedParameters.child;
    this['clipper'] = namedParameters.clipper;
    this['clipBehavior'] = namedParameters.clipBehavior;
    this.className = 'RenderClipRect';
  }
}
export { RenderClipRect };
class RenderClipRRect extends _RenderCustomClip {
  borderRadius: BorderRadius;
  public constructor(
    namedParameters: {
      child?: RenderBox;
      borderRadius?: BorderRadius;
      clipper?: CustomClipper;
      clipBehavior?: Clip;
    } = {},
  ) {
    super();
    this['child'] = namedParameters.child;
    this.borderRadius = namedParameters.borderRadius;
    this.clipper = namedParameters.clipper;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'RenderClipRRect';
  }
}
export { RenderClipRRect };
class RenderClipOval extends _RenderCustomClip {
  cachedRect: Rect;
  cachedPath: Path;
  public constructor(namedParameters: { child?: RenderBox; clipper?: CustomClipper; clipBehavior?: Clip } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.clipper = namedParameters.clipper;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'RenderClipOval';
  }
}
export { RenderClipOval };
class RenderClipPath extends _RenderCustomClip {
  public constructor(namedParameters: { child?: RenderBox; clipper?: CustomClipper; clipBehavior?: Clip } = {}) {
    super();
    this['child'] = namedParameters.child;
    this['clipper'] = namedParameters.clipper;
    this['clipBehavior'] = namedParameters.clipBehavior;
    this.className = 'RenderClipPath';
  }
}
export { RenderClipPath };
abstract class _RenderPhysicalModelBase extends _RenderCustomClip {
  elevation: number;
  shadowColor: Color;
  color: Color;
}
export { _RenderPhysicalModelBase };
class RenderPhysicalModel extends _RenderPhysicalModelBase {
  shape: BoxShape;
  borderRadius: BorderRadius;
  public constructor(
    namedParameters: {
      child?: RenderBox;
      shape?: BoxShape;
      clipBehavior?: Clip;
      borderRadius?: BorderRadius;
      elevation?: number;
      color?: Color;
      shadowColor?: Color;
    } = {},
  ) {
    super();
    this['child'] = namedParameters.child;
    this.shape = namedParameters.shape;
    this.clipBehavior = namedParameters.clipBehavior;
    this.borderRadius = namedParameters.borderRadius;
    this.elevation = namedParameters.elevation;
    this.color = namedParameters.color;
    this.shadowColor = namedParameters.shadowColor;
    this.className = 'RenderPhysicalModel';
  }
}
export { RenderPhysicalModel };
class RenderPhysicalShape extends _RenderPhysicalModelBase {
  public constructor(
    namedParameters: {
      child?: RenderBox;
      clipper?: CustomClipper;
      clipBehavior?: Clip;
      elevation?: number;
      color?: Color;
      shadowColor?: Color;
    } = {},
  ) {
    super();
    this['child'] = namedParameters.child;
    this['clipper'] = namedParameters.clipper;
    this['clipBehavior'] = namedParameters.clipBehavior;
    this['elevation'] = namedParameters.elevation;
    this['color'] = namedParameters.color;
    this['shadowColor'] = namedParameters.shadowColor;
    this.className = 'RenderPhysicalShape';
  }
}
export { RenderPhysicalShape };
enum DecorationPosition {
  background = '{ "_name": "DecorationPosition.background", "index": 0 }',
  foreground = '{ "_name": "DecorationPosition.foreground", "index": 1 }',
}

export { DecorationPosition };
class RenderDecoratedBox extends RenderProxyBox {
  painter: BoxPainter;
  decoration: Decoration;
  position: DecorationPosition;
  configuration: ImageConfiguration;
  public constructor(
    namedParameters: {
      decoration?: Decoration;
      position?: DecorationPosition;
      configuration?: ImageConfiguration;
      child?: RenderBox;
    } = {},
  ) {
    super();
    this.decoration = namedParameters.decoration;
    this.position = namedParameters.position;
    this.configuration = namedParameters.configuration;
    this['child'] = namedParameters.child;
    this.className = 'RenderDecoratedBox';
  }
}
export { RenderDecoratedBox };
class RenderTransform extends RenderProxyBox {
  origin: Offset;
  alignment: AlignmentGeometry;
  textDirection: TextDirection;
  transformHitTests: boolean;
  transform: Matrix4;
  public constructor(
    namedParameters: {
      transform?: Matrix4;
      origin?: Offset;
      alignment?: AlignmentGeometry;
      textDirection?: TextDirection;
      transformHitTests?: boolean;
      child?: RenderBox;
    } = {},
  ) {
    super();
    this.transform = namedParameters.transform;
    this.origin = namedParameters.origin;
    this.alignment = namedParameters.alignment;
    this.textDirection = namedParameters.textDirection;
    this.transformHitTests = namedParameters.transformHitTests;
    this['child'] = namedParameters.child;
    this.className = 'RenderTransform';
  }
}
export { RenderTransform };
class RenderFittedBox extends RenderProxyBox {
  resolvedAlignment: Alignment;
  fit: BoxFit;
  alignment: AlignmentGeometry;
  textDirection: TextDirection;
  hasVisualOverflow: boolean;
  transform: Matrix4;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      fit?: BoxFit;
      alignment?: AlignmentGeometry;
      textDirection?: TextDirection;
      child?: RenderBox;
      clipBehavior?: Clip;
    } = {},
  ) {
    super();
    this.fit = namedParameters.fit;
    this.alignment = namedParameters.alignment;
    this.textDirection = namedParameters.textDirection;
    this['child'] = namedParameters.child;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'RenderFittedBox';
  }
}
export { RenderFittedBox };
class RenderFractionalTranslation extends RenderProxyBox {
  translation: Offset;
  transformHitTests: boolean;
  public constructor(namedParameters: { translation?: Offset; transformHitTests?: boolean; child?: RenderBox } = {}) {
    super();
    this.translation = namedParameters.translation;
    this.transformHitTests = namedParameters.transformHitTests;
    this['child'] = namedParameters.child;
    this.className = 'RenderFractionalTranslation';
  }
}
export { RenderFractionalTranslation };
class RenderPointerListener extends RenderProxyBoxWithHitTestBehavior {
  onPointerDown: any;
  onPointerMove: any;
  onPointerUp: any;
  onPointerCancel: any;
  onPointerSignal: any;
  public constructor(
    namedParameters: {
      onPointerDown?: any;
      onPointerMove?: any;
      onPointerUp?: any;
      onPointerCancel?: any;
      onPointerSignal?: any;
      behavior?: HitTestBehavior;
      child?: RenderBox;
    } = {},
  ) {
    super();
    this.onPointerDown = namedParameters.onPointerDown;
    this.onPointerMove = namedParameters.onPointerMove;
    this.onPointerUp = namedParameters.onPointerUp;
    this.onPointerCancel = namedParameters.onPointerCancel;
    this.onPointerSignal = namedParameters.onPointerSignal;
    this.behavior = namedParameters.behavior;
    this['child'] = namedParameters.child;
    this.className = 'RenderPointerListener';
  }
}
export { RenderPointerListener };
class RenderMouseRegion extends RenderProxyBox {
  opaque: boolean;
  onEnter: any;
  onHover: any;
  onExit: any;
  cursor: MouseCursor;
  annotationIsActive: boolean;
  public constructor(
    namedParameters: {
      onEnter?: any;
      onHover?: any;
      onExit?: any;
      cursor?: MouseCursor;
      opaque?: boolean;
      child?: RenderBox;
    } = {},
  ) {
    super();
    this.onEnter = namedParameters.onEnter;
    this.onHover = namedParameters.onHover;
    this.onExit = namedParameters.onExit;
    this.cursor = namedParameters.cursor;
    this.opaque = namedParameters.opaque;
    this['child'] = namedParameters.child;
    this.className = 'RenderMouseRegion';
  }
}
export { RenderMouseRegion };
class RenderRepaintBoundary extends RenderProxyBox {
  debugSymmetricPaintCount: number;
  debugAsymmetricPaintCount: number;
  public constructor(namedParameters: { child?: RenderBox } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.className = 'RenderRepaintBoundary';
  }
}
export { RenderRepaintBoundary };
class RenderIgnorePointer extends RenderProxyBox {
  ignoring: boolean;
  ignoringSemantics: boolean;
  public constructor(namedParameters: { child?: RenderBox; ignoring?: boolean; ignoringSemantics?: boolean } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.ignoring = namedParameters.ignoring;
    this.ignoringSemantics = namedParameters.ignoringSemantics;
    this.className = 'RenderIgnorePointer';
  }
}
export { RenderIgnorePointer };
class RenderOffstage extends RenderProxyBox {
  offstage: boolean;
  public constructor(namedParameters: { offstage?: boolean; child?: RenderBox } = {}) {
    super();
    this.offstage = namedParameters.offstage;
    this['child'] = namedParameters.child;
    this.className = 'RenderOffstage';
  }
}
export { RenderOffstage };
class RenderAbsorbPointer extends RenderProxyBox {
  absorbing: boolean;
  ignoringSemantics: boolean;
  public constructor(namedParameters: { child?: RenderBox; absorbing?: boolean; ignoringSemantics?: boolean } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.absorbing = namedParameters.absorbing;
    this.ignoringSemantics = namedParameters.ignoringSemantics;
    this.className = 'RenderAbsorbPointer';
  }
}
export { RenderAbsorbPointer };
class RenderMetaData extends RenderProxyBoxWithHitTestBehavior {
  metaData: any;
  public constructor(namedParameters: { metaData?: any; behavior?: HitTestBehavior; child?: RenderBox } = {}) {
    super();
    this.metaData = namedParameters.metaData;
    this.behavior = namedParameters.behavior;
    this['child'] = namedParameters.child;
    this.className = 'RenderMetaData';
  }
}
export { RenderMetaData };
class RenderSemanticsGestureHandler extends RenderProxyBox {
  validActions: Set<any>;
  onTap: any;
  onLongPress: any;
  onHorizontalDragUpdate: any;
  onVerticalDragUpdate: any;
  scrollFactor: number;
  public constructor(
    namedParameters: {
      child?: RenderBox;
      onTap?: any;
      onLongPress?: any;
      onHorizontalDragUpdate?: any;
      onVerticalDragUpdate?: any;
      scrollFactor?: number;
    } = {},
  ) {
    super();
    this['child'] = namedParameters.child;
    this.onTap = namedParameters.onTap;
    this.onLongPress = namedParameters.onLongPress;
    this.onHorizontalDragUpdate = namedParameters.onHorizontalDragUpdate;
    this.onVerticalDragUpdate = namedParameters.onVerticalDragUpdate;
    this.scrollFactor = namedParameters.scrollFactor;
    this.className = 'RenderSemanticsGestureHandler';
  }
}
export { RenderSemanticsGestureHandler };
class RenderSemanticsAnnotations extends RenderProxyBox {
  container: boolean;
  explicitChildNodes: boolean;
  excludeSemantics: boolean;
  checked: boolean;
  enabled: boolean;
  selected: boolean;
  button: boolean;
  link: boolean;
  header: boolean;
  textField: boolean;
  readOnly: boolean;
  focusable: boolean;
  focused: boolean;
  inMutuallyExclusiveGroup: boolean;
  obscured: boolean;
  multiline: boolean;
  scopesRoute: boolean;
  namesRoute: boolean;
  hidden: boolean;
  image: boolean;
  liveRegion: boolean;
  maxValueLength: number;
  currentValueLength: number;
  toggled: boolean;
  label: string;
  value: string;
  increasedValue: string;
  decreasedValue: string;
  hint: string;
  hintOverrides: SemanticsHintOverrides;
  textDirection: TextDirection;
  sortKey: SemanticsSortKey;
  onTap: any;
  onDismiss: any;
  onLongPress: any;
  onScrollLeft: any;
  onScrollRight: any;
  onScrollUp: any;
  onScrollDown: any;
  onIncrease: any;
  onDecrease: any;
  onCopy: any;
  onCut: any;
  onPaste: any;
  onMoveCursorForwardByCharacter: any;
  onMoveCursorBackwardByCharacter: any;
  onMoveCursorForwardByWord: any;
  onMoveCursorBackwardByWord: any;
  onSetSelection: any;
  onDidGainAccessibilityFocus: any;
  onDidLoseAccessibilityFocus: any;
  customSemanticsActions: Map<any, any>;
  public constructor(
    namedParameters: {
      child?: RenderBox;
      container?: boolean;
      explicitChildNodes?: boolean;
      excludeSemantics?: boolean;
      enabled?: boolean;
      checked?: boolean;
      toggled?: boolean;
      selected?: boolean;
      button?: boolean;
      link?: boolean;
      header?: boolean;
      textField?: boolean;
      readOnly?: boolean;
      focusable?: boolean;
      focused?: boolean;
      inMutuallyExclusiveGroup?: boolean;
      obscured?: boolean;
      multiline?: boolean;
      scopesRoute?: boolean;
      namesRoute?: boolean;
      hidden?: boolean;
      image?: boolean;
      liveRegion?: boolean;
      maxValueLength?: number;
      currentValueLength?: number;
      label?: string;
      value?: string;
      increasedValue?: string;
      decreasedValue?: string;
      hint?: string;
      hintOverrides?: SemanticsHintOverrides;
      textDirection?: TextDirection;
      sortKey?: SemanticsSortKey;
      onTap?: any;
      onDismiss?: any;
      onLongPress?: any;
      onScrollLeft?: any;
      onScrollRight?: any;
      onScrollUp?: any;
      onScrollDown?: any;
      onIncrease?: any;
      onDecrease?: any;
      onCopy?: any;
      onCut?: any;
      onPaste?: any;
      onMoveCursorForwardByCharacter?: any;
      onMoveCursorBackwardByCharacter?: any;
      onMoveCursorForwardByWord?: any;
      onMoveCursorBackwardByWord?: any;
      onSetSelection?: any;
      onDidGainAccessibilityFocus?: any;
      onDidLoseAccessibilityFocus?: any;
      customSemanticsActions?: Map<any, any>;
    } = {},
  ) {
    super();
    this['child'] = namedParameters.child;
    this.container = namedParameters.container;
    this.explicitChildNodes = namedParameters.explicitChildNodes;
    this.excludeSemantics = namedParameters.excludeSemantics;
    this.enabled = namedParameters.enabled;
    this.checked = namedParameters.checked;
    this.toggled = namedParameters.toggled;
    this.selected = namedParameters.selected;
    this.button = namedParameters.button;
    this.link = namedParameters.link;
    this.header = namedParameters.header;
    this.textField = namedParameters.textField;
    this.readOnly = namedParameters.readOnly;
    this.focusable = namedParameters.focusable;
    this.focused = namedParameters.focused;
    this.inMutuallyExclusiveGroup = namedParameters.inMutuallyExclusiveGroup;
    this.obscured = namedParameters.obscured;
    this.multiline = namedParameters.multiline;
    this.scopesRoute = namedParameters.scopesRoute;
    this.namesRoute = namedParameters.namesRoute;
    this.hidden = namedParameters.hidden;
    this.image = namedParameters.image;
    this.liveRegion = namedParameters.liveRegion;
    this.maxValueLength = namedParameters.maxValueLength;
    this.currentValueLength = namedParameters.currentValueLength;
    this.label = namedParameters.label;
    this.value = namedParameters.value;
    this.increasedValue = namedParameters.increasedValue;
    this.decreasedValue = namedParameters.decreasedValue;
    this.hint = namedParameters.hint;
    this.hintOverrides = namedParameters.hintOverrides;
    this.textDirection = namedParameters.textDirection;
    this.sortKey = namedParameters.sortKey;
    this.onTap = namedParameters.onTap;
    this.onDismiss = namedParameters.onDismiss;
    this.onLongPress = namedParameters.onLongPress;
    this.onScrollLeft = namedParameters.onScrollLeft;
    this.onScrollRight = namedParameters.onScrollRight;
    this.onScrollUp = namedParameters.onScrollUp;
    this.onScrollDown = namedParameters.onScrollDown;
    this.onIncrease = namedParameters.onIncrease;
    this.onDecrease = namedParameters.onDecrease;
    this.onCopy = namedParameters.onCopy;
    this.onCut = namedParameters.onCut;
    this.onPaste = namedParameters.onPaste;
    this.onMoveCursorForwardByCharacter = namedParameters.onMoveCursorForwardByCharacter;
    this.onMoveCursorBackwardByCharacter = namedParameters.onMoveCursorBackwardByCharacter;
    this.onMoveCursorForwardByWord = namedParameters.onMoveCursorForwardByWord;
    this.onMoveCursorBackwardByWord = namedParameters.onMoveCursorBackwardByWord;
    this.onSetSelection = namedParameters.onSetSelection;
    this.onDidGainAccessibilityFocus = namedParameters.onDidGainAccessibilityFocus;
    this.onDidLoseAccessibilityFocus = namedParameters.onDidLoseAccessibilityFocus;
    this.customSemanticsActions = namedParameters.customSemanticsActions;
    this.className = 'RenderSemanticsAnnotations';
  }
}
export { RenderSemanticsAnnotations };
class RenderBlockSemantics extends RenderProxyBox {
  blocking: boolean;
  public constructor(namedParameters: { child?: RenderBox; blocking?: boolean } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.blocking = namedParameters.blocking;
    this.className = 'RenderBlockSemantics';
  }
}
export { RenderBlockSemantics };
class RenderMergeSemantics extends RenderProxyBox {
  public constructor(namedParameters: { child?: RenderBox } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.className = 'RenderMergeSemantics';
  }
}
export { RenderMergeSemantics };
class RenderExcludeSemantics extends RenderProxyBox {
  excluding: boolean;
  public constructor(namedParameters: { child?: RenderBox; excluding?: boolean } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.excluding = namedParameters.excluding;
    this.className = 'RenderExcludeSemantics';
  }
}
export { RenderExcludeSemantics };
class RenderIndexedSemantics extends RenderProxyBox {
  index: number;
  public constructor(namedParameters: { child?: RenderBox; index?: number } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.index = namedParameters.index;
    this.className = 'RenderIndexedSemantics';
  }
}
export { RenderIndexedSemantics };
class RenderLeaderLayer extends RenderProxyBox {
  link: LayerLink;
  public constructor(namedParameters: { link?: LayerLink; child?: RenderBox } = {}) {
    super();
    this.link = namedParameters.link;
    this['child'] = namedParameters.child;
    this.className = 'RenderLeaderLayer';
  }
}
export { RenderLeaderLayer };
class RenderFollowerLayer extends RenderProxyBox {
  link: LayerLink;
  showWhenUnlinked: boolean;
  offset: Offset;
  public constructor(
    namedParameters: { link?: LayerLink; showWhenUnlinked?: boolean; offset?: Offset; child?: RenderBox } = {},
  ) {
    super();
    this.link = namedParameters.link;
    this.showWhenUnlinked = namedParameters.showWhenUnlinked;
    this.offset = namedParameters.offset;
    this['child'] = namedParameters.child;
    this.className = 'RenderFollowerLayer';
  }
}
export { RenderFollowerLayer };
class RenderAnnotatedRegion extends RenderProxyBox {
  value: any;
  sized: boolean;
  alwaysNeedsCompositing: boolean;
  public constructor(namedParameters: { value?: any; sized?: boolean; child?: RenderBox } = {}) {
    super();
    this.value = namedParameters.value;
    this.sized = namedParameters.sized;
    this['child'] = namedParameters.child;
    this.className = 'RenderAnnotatedRegion';
  }
}
export { RenderAnnotatedRegion };
