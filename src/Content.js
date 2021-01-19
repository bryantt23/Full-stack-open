import React from 'react';

export default function Content(parts) {
  const coursesMap = parts.parts.map((element, index) => (
    <p key={index}>
      {element.name} {element.exercises}
    </p>
  ));
  return <div>{coursesMap}</div>;
}
