
## Input

```javascript
import {useMemo} from 'react';

function Component(props) {
  let x = props.value;
  
  // Update expressions in useMemo should track the variable as both read and write dependency
  const result = useMemo(() => {
    let a = x;
    let postfixInc = a++;  // postfix increment
    let prefixInc = ++a;    // prefix increment
    let postfixDec = a--;   // postfix decrement
    let prefixDec = --a;    // prefix decrement
    return {a, postfixInc, prefixInc, postfixDec, prefixDec};
  }, [x]);
  
  return result;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{value: 5}],
  isComponent: false,
};

```

## Code

```javascript
import { c as _c } from "react/compiler-runtime";
import { useMemo } from "react";
function Component(props) {
  const $ = _c(2);
  const x = props.value;
  let result;
  if ($[0] !== x) {
    result = (() => {
      let a = x;
      const postfixInc = a++;
      const prefixInc = ++a;
      const postfixDec = a--;
      const prefixDec = --a;
      return { a, postfixInc, prefixInc, postfixDec, prefixDec };
    })();
    $[0] = x;
    $[1] = result;
  } else {
    result = $[1];
  }
  return result;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{ value: 5 }],
  isComponent: false,
};

```
      
### Eval output
(kind: ok) {"a":5,"postfixInc":5,"prefixInc":6,"postfixDec":6,"prefixDec":5}
