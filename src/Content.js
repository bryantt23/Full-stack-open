import React from 'react';

export default function Content(arr) {
  const coursesMap = arr.arr.map((element, index) => (
    <p key={index}>
      {element.name} {element.exercises}
    </p>
  ));
  return <div>{coursesMap}</div>;
}
