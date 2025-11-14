
## Input

```javascript
function Component(props) {
  let x = props.a;
  let y = props.b;
  
  // Nested update expressions in arithmetic operations
  let a = x;
  let b = y;
  let result1 = a++ + b++;  // both postfix
  
  let c = x;
  let d = y;
  let result2 = ++c + ++d;  // both prefix
  
  let e = x;
  let f = y;
  let result3 = e++ + ++f;  // mixed: postfix and prefix
  
  let g = x;
  let h = y;
  let result4 = --g + h--;  // mixed: prefix and postfix decrements
  
  // Update expressions in complex expressions
  let i = x;
  let j = y;
  let result5 = (i++ * 2) + (++j * 3);
  
  // Chained update expressions
  let k = x;
  k++;
  k++;
  let result6 = k;
  
  return {
    result1, a, b,
    result2, c, d,
    result3, e, f,
    result4, g, h,
    result5, i, j,
    result6, k
  };
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{a: 5, b: 10}],
  isComponent: false,
};

```

## Code

```javascript
import { c as _c } from "react/compiler-runtime";
function Component(props) {
  const $ = _c(4);
  const x = props.a;
  const y = props.b;
  let t0;
  if ($[0] !== x || $[1] !== y) {
    let a = x;
    let b = y;
    const result1 = a++ + b++;
    let c = x;
    let d = y;
    const result2 = ++c + ++d;
    let e = x;
    let f = y;
    const result3 = e++ + ++f;
    let g = x;
    let h = y;
    const result4 = --g + h--;
    let i = x;
    let j = y;
    const result5 = i++ * 2 + ++j * 3;
    let k = x;
    k++;
    k++;
    const result6 = k;
    t0 = {
      result1,
      a,
      b,
      result2,
      c,
      d,
      result3,
      e,
      f,
      result4,
      g,
      h,
      result5,
      i,
      j,
      result6,
      k,
    };
    $[0] = x;
    $[1] = y;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  return t0;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{ a: 5, b: 10 }],
  isComponent: false,
};

```
      
### Eval output
(kind: ok) {"result1":15,"a":6,"b":11,"result2":17,"c":6,"d":11,"result3":16,"e":6,"f":11,"result4":14,"g":4,"h":10,"result5":43,"i":6,"j":11,"result6":7,"k":7}
