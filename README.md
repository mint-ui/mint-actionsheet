# Overview
mint-actionsheet is an action sheet component for vue.js

# Installation
First, install `mint-actionsheet` from npm:
```bash
$ npm install mint-actionsheet
```

Import it:
```Javascript
require ('mint-actionsheet/lib/index.css');

// ES6 mudule
import Actionsheet from 'mint-actionsheet';

// CommonJS
const Actionsheet = require('mint-actionsheet').default;
```

Register component:
```Javascript
Vue.component('actionsheet', Actionsheet);
```

# Example

`actions` is an array of objects. Each object has two keys: `name` and `method`. `name` is the text showing on the sheet, and `method`(optional) is the callback when clicked.

Bind `v-model` with one of your vue instance variables. Toggle it to switch on/off the action sheet.

```html
<mt-actionsheet
  :actions="actions"
  v-model="sheetVisible">
</mt-actionsheet>
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| actions | array of actions | Array | | |
| cancelText | text of the cancel button. If this is an empty string, no cancel button will show  | String | | '取消' |
| closeOnClickModal | if the action sheet turns off when the modal is clicked | Boolean | | true |

# License
MIT