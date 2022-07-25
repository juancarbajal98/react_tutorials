import React from 'react';

const MapPractice = () => {
  const nums = [1,2,3,4,5]
  const names = ["alice","bob", "charlie", "danielle"]
  const h3s = [<h3>alice</h3>,<h3>bob</h3>, <h3>charlie</h3>, <h3>danielle</h3>]
  return (
  <div>
    { JSON.stringify(nums.map(n => n*n)) }
    <br/>
    { JSON.stringify(names.map(n => n.charAt(0).toUpperCase() + n.slice(1)))}
    <br/>
    {h3s}
  </div>)
};
export default MapPractice;