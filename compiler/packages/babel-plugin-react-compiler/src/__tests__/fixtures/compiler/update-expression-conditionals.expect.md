
## Input

```javascript
function Component(props) {
  let counter = 0;
  
  // Update expressions in if/else branches
  if (props.condition) {
    counter++;
  } else {
    counter--;
  }
  
  let value = props.value;
  
  // Update expressions in nested conditionals
  if (props.nested) {
    if (value > 5) {
      value++;
    } else {
      value--;
    }
  }
  
  // Update expressions with ternary operator
  let x = props.x;
  let result = props.flag ? x++ : x--;
  
  // Update expressions in switch cases
  let y = 0;
  switch (props.type) {
    case 'increment':
      y++;
      break;
    case 'decrement':
      y--;
      break;
    default:
      y += 2;
  }
  
  // Update expression in condition itself
  let z = props.limit;
  while (z-- > 0) {
    counter++;
  }
  
  return {counter, value, result, x, y, z};
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{condition: true, nested: true, value: 10, flag: true, x: 5, type: 'increment', limit: 3}],
  isComponent: false,
};

```

## Code

```javascript
import { c as _c } from "react/compiler-runtime";
function Component(props) {
  const $ = _c(8);
  let counter;
  let value;
  let result;
  let x;
  let y;
  let z;
  if (
    $[0] !== props.condition ||
    $[1] !== props.value ||
    $[2] !== props.nested ||
    $[3] !== props.x ||
    $[4] !== props.flag ||
    $[5] !== props.type ||
    $[6] !== props.limit
  ) {
    counter = 0;
    if (props.condition) {
      counter++;
    } else {
      counter--;
    }

    value = props.value;
    if (props.nested) {
      if (value > 5) {
        value++;
      } else {
        value--;
      }
    }

    x = props.x;
    result = props.flag ? x++ : x--;
    y = 0;
    bb0: switch (props.type) {
      case "increment": {
        y++;
        break bb0;
      }
      case "decrement": {
        y--;
        break bb0;
      }
      default: {
        y += 2;
      }
    }

    z = props.limit;
    while (z-- > 0) {
      counter++;
    }
    $[0] = props.condition;
    $[1] = props.value;
    $[2] = props.nested;
    $[3] = props.x;
    $[4] = props.flag;
    $[5] = props.type;
    $[6] = props.limit;
    $[7] = { counter, value, result, x, y, z };
  } else {
    ({ counter, value, result, x, y, z } = $[7]);
  }
  return { counter, value, result, x, y, z };
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [
    {
      condition: true,
      nested: true,
      value: 10,
      flag: true,
      x: 5,
      type: "increment",
      limit: 3,
    },
  ],
  isComponent: false,
};

```
      
### Eval output
(kind: ok) {"counter":4,"value":11,"result":5,"x":6,"y":1,"z":-1}
