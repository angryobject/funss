# FunSS

> Automatically generate CSS from class name convensions on runtime

This is just an experiment.

See the [demo](./demo/index.html).

## Install

```bash
yarn add funss
# or
npm i -S funss
```

## Usage

```javascript
import funss from 'funss';

const ss = funss();

// parse all current class names
ss.parse(document.body);

// observe changes to DOM and automatically add new classes (via MutationObserver)
ss.observe(document.body);

//or add class names manually
ss.addClassName('mt20 p10');
```
