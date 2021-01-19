import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  const arr = [
    { part: part1, count: exercises1 },
    { part: part2, count: exercises2 },
    { part: part3, count: exercises3 }
  ];

  return (
    <>
      <Header course={course} />
      <Content arr={arr} />
      <Total arr={arr} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
