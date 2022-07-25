import React from 'react';

const Contact = ({name,phone,email,lives}) => {
  return (
  <div>
    <h3>{name}</h3>
    <div>
      <p>{phone}</p>
    </div>
    <div>
      <p>{email}</p>
    </div>
    <div>
      <p>Lives: {lives}</p>
    </div>
  </div>
  )
};

export default Contact;