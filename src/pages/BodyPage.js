import React from 'react';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';

function BodyPage(props) {
  var page = props.page
  switch (page) {
    case 1:
      return <About />;
    case 2:
      return <Contact />;
    case 3:
      return <Experience />;
    case 4:
      return <Education />;
    case 5:
      return <Projects />;
    default:
      return <About />;
  }
}

export default BodyPage;