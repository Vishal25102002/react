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
