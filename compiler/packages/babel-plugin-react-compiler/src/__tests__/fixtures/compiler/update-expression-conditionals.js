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
