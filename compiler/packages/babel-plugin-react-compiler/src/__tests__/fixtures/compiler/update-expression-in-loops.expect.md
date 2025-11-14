
## Input

```javascript
function Component(props) {
  let sum = 0;
  
  // For loop with update expressions
  for (let i = 0; i < props.count; i++) {
    sum++;
  }
  
  // While loop with update expressions
  let j = 0;
  while (j < props.count) {
    sum++;
    j++;
  }
  
  // Do-while loop with update expressions
  let k = 0;
  do {
    sum++;
    k++;
  } while (k < props.count);
  
  return sum;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{count: 3}],
  isComponent: false,
};

```

## Code

```javascript
import { c as _c } from "react/compiler-runtime";
function Component(props) {
  const $ = _c(2);
  let sum;
  if ($[0] !== props.count) {
    sum = 0;
    for (let i = 0; i < props.count; i++) {
      sum++;
    }

    let j = 0;
    while (j < props.count) {
      sum++;
      j++;
    }

    let k = 0;
    do {
      sum++;
      k++;
    } while (k < props.count);
    $[0] = props.count;
    $[1] = sum;
  } else {
    sum = $[1];
  }
  return sum;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{ count: 3 }],
  isComponent: false,
};

```
      
### Eval output
(kind: ok) 9
