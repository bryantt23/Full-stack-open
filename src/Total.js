import React from 'react';

export default function Total(arr) {
  console.log(arr);
  const counts = arr.arr.map(elem => elem.exercises);
  const total = counts.reduce((acc, cur) => acc + cur, 0);
  return <p>Number of exercises {total}</p>;
}
