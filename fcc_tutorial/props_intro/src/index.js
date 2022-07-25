import React from "react";
import ReactDOM from "react-dom";
import Contact from './Contact'

const App = () => {
  return(
    <React.Fragment>
      <Contact 
        name="Mr. Whiskerson" 
        phone="(212) 555-1234" 
        email="mr.whiskaz@catnip.meow"
        lives={9}
      />
    </React.Fragment>
  )
};

const container = document.getElementById('root');

ReactDOM.render(<App/>, container)