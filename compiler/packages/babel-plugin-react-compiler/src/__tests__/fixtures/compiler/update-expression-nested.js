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
