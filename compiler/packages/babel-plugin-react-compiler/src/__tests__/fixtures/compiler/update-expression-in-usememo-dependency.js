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
