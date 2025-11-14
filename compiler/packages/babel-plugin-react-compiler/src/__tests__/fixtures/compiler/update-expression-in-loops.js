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
