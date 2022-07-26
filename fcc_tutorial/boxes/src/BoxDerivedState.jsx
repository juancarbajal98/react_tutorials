import React from 'react';
const BoxDerivedState = (props) => {
  const [toggle, setToggle] = React.useState(props.on); 
  const styles = { backgroundColor: toggle ? "#39db3e" : "transparent" }
  const handleClick = () => { setToggle(prevToggle => !prevToggle) };

  return(
  <div 
    className="box" 
    style={styles}
    onClick={handleClick}
    ></div>
  )

};
export default BoxDerivedState;