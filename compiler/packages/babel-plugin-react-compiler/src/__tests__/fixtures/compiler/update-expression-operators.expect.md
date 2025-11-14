
## Input

```javascript
function Component(props) {
  let x = props.value;
  
  // Test all update operators in isolation
  let a = x;
  let postInc = a++;  // postfix increment: returns old value, then increments
  
  let b = x;
  let preInc = ++b;   // prefix increment: increments, then returns new value
  
  let c = x;
  let postDec = c--;  // postfix decrement: returns old value, then decrements
  
  let d = x;
  let preDec = --d;   // prefix decrement: decrements, then returns new value
  
  // Test update expressions as standalone statements
  let e = x;
  e++;
  
  let f = x;
  ++f;
  
  let g = x;
  g--;
  
  let h = x;
  --h;
  
  return {
    postInc, a,
    preInc, b,
    postDec, c,
    preDec, d,
    e, f, g, h
  };
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{value: 10}],
  isComponent: false,
};

```

## Code

```javascript
import { c as _c } from "react/compiler-runtime";
function Component(props) {
  const $ = _c(2);
  const x = props.value;
  let t0;
  if ($[0] !== x) {
    let a = x;
    const postInc = a++;
    let b = x;
    const preInc = ++b;
    let c = x;
    const postDec = c--;
    let d = x;
    const preDec = --d;
    let e = x;
    e++;
    let f = x;
    ++f;
    let g = x;
    g--;
    let h = x;
    --h;
    t0 = { postInc, a, preInc, b, postDec, c, preDec, d, e, f, g, h };
    $[0] = x;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  return t0;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{ value: 10 }],
  isComponent: false,
};

```
      
### Eval output
(kind: ok) {"postInc":10,"a":11,"preInc":11,"b":11,"postDec":10,"c":9,"preDec":9,"d":9,"e":11,"f":11,"g":9,"h":9}
