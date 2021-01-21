import React from 'react';

export default function Total(parts) {
  console.log(parts);
  const counts = parts.parts.map(elem => elem.exercises);
  const total = counts.reduce((acc, cur) => acc + cur, 0);
  return (
    <p>
      <b>total of {total} exercses</b>
    </p>
  );
}
