import React from 'react';

const LearningSite: any = () => {
  // const sgFunction = (props: { a: string; b: string; c?: string; d?: string; e?: boolean }) => {
  //   const { a, b, c, d, e } = props;
  //   return e? a + b + c + d : a + b + c;
  // };

  // sgFunction({ a: 'a', b: 'b', d: 'd' });
  // sgFunction({ a: 'a', b: 'b', c: 'c', e: true });
  // console.log(sgFunction({ a: 'a', b: 'b', d: 'd' }));
  // console.log(sgFunction({ a: 'a', b: 'b', c: 'c', e: true }));

  const sgFunction = (a: string, b: string, c?: string, d?: string, e?: boolean) => {
    return e ? a + b + c + d : a + b + c;
  };

  sgFunction('a', 'b', undefined, 'd', undefined);
  sgFunction('a', 'b', 'c', undefined, true);
  console.log(sgFunction('a', 'b', undefined, 'd', undefined));
  console.log(sgFunction('a', 'b', 'c', undefined, true));
};
export default LearningSite;
