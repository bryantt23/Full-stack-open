import React from 'react';
import ReactDOM from 'react-dom';

function Header(course) {
  return (
    <div>
      <h1>{course.course}</h1>
    </div>
  );
}

export default Header;
