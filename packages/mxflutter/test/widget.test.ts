import { MXJSStatelessWidget, MXJSStatefulWidget, MXJSWidgetState } from '../src/widget/widget';
import { MXJSBuildOwner } from '../src/core/build-owner';
import { MXJSRootMgrElement, MXJSElement, MXWidgetRefreshFlutterData } from '../src/element/element';
import { Text } from '@mxflutter/mxflutter-widgets/material';
globalThis.MXJSAPI = {
  nativePrint: function ([]: any) {
    console.log(arguments);
  },
};

test('MXJSStatelessWidget className', () => {
  class TestWidget extends MXJSStatelessWidget {
    build() {
      return {};
    }
  }
  const tsw = new TestWidget('test');
  expect(tsw.className).toBe('MXJSStatelessWidget');
});

test('MXJSStatefulWidget className', () => {
  class TestState extends MXJSWidgetState {
    build() {
      return {};
    }
  }
  class TestWidget extends MXJSStatefulWidget {
    createState() {
      return new TestState();
    }
  }
  const tsw = new TestWidget('test');
  expect(tsw.className).toBe('MXJSStatefulWidget');
});

test('Build Test', () => {
  class TestState extends MXJSWidgetState {
    build() {
      return new Text('abc');
    }
  }
  class TestWidget extends MXJSStatefulWidget {
    createState() {
      return new TestState();
    }
  }
  const tsw = new TestWidget('test');

  const element: MXJSElement = tsw.createElement();
  let data: MXWidgetRefreshFlutterData = element.mount(null);

  expect(data.className).toBe('MXJSStatefulWidget');
  expect(data.widgetData.className).toBe('Text');
  expect(data.widgetData.data).toBe('abc');
});
