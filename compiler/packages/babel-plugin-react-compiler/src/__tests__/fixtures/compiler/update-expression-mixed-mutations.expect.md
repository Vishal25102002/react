
## Input

```javascript
function Component(props) {
  let x = props.value;
  
  // Mix update expressions with regular assignments
  let a = x;
  a++;           // update expression
  a = a + 1;     // regular assignment
  a += 2;        // compound assignment
  
  // Mix update expressions with property writes
  let obj = {count: x};
  obj.count++;           // update expression on property
  obj.count = obj.count + 1;  // regular property assignment
  obj.count += 2;        // compound property assignment
  
  // Mix update expressions with array mutations
  let arr = [x, x + 1, x + 2];
  arr[0]++;              // update expression on array element
  arr[1] = arr[1] + 1;   // regular array assignment
  arr[2] += 2;           // compound array assignment
  
  // Complex mixing: update, assignment, and method calls
  let y = x;
  y++;
  y = y * 2;
  let z = y++;
  y += 3;
  
  // Update expressions with object destructuring and reassignment
  let config = {value: x, multiplier: 2};
  config.value++;
  let {value: v, multiplier: m} = config;
  v++;
  config.value = v;
  
  return {
    a,
    obj,
    arr,
    y, z,
    config, v, m
  };
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
function Component(props) {
  const $ = _c(2);
  const x = props.value;
  let t0;
  if ($[0] !== x) {
    let a = x;
    a++;
    a = a + 1;
    a += 2;
    const obj = { count: x };
    obj.count++;
    obj.count = obj.count + 1;
    obj.count += 2;
    const arr = [x, x + 1, x + 2];
    arr[0]++;
    arr[1] = arr[1] + 1;
    arr[2] += 2;
    let y = x;
    y++;
    y = y * 2;
    const z = y++;
    y += 3;
    const config = { value: x, multiplier: 2 };
    config.value++;
    const { value: v, multiplier: m } = config;
    v++;
    config.value = v;
    t0 = { a, obj, arr, y, z, config, v, m };
    $[0] = x;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  return t0;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{ value: 5 }],
  isComponent: false,
};

```
      
### Eval output
(kind: ok) {"a":9,"obj":{"count":9},"arr":[6,7,9],"y":18,"z":12,"config":{"value":7,"multiplier":2},"v":7,"m":2}
