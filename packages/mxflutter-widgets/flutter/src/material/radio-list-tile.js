//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from '../widgets/framework';
class RadioListTile extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.groupValue = namedParameters.groupValue;
        this.onChanged = namedParameters.onChanged;
        this.toggleable = namedParameters.toggleable;
        this.activeColor = namedParameters.activeColor;
        this.title = namedParameters.title;
        this.subtitle = namedParameters.subtitle;
        this.isThreeLine = namedParameters.isThreeLine;
        this.dense = namedParameters.dense;
        this.secondary = namedParameters.secondary;
        this.selected = namedParameters.selected;
        this.controlAffinity = namedParameters.controlAffinity;
        this.autofocus = namedParameters.autofocus;
        this.className = 'RadioListTile';
    }
}
export { RadioListTile };
