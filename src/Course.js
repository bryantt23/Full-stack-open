import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

export default function Course({ course }) {
  const { name, parts } = course;
  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
}
