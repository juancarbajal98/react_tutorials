import React from "react";

const Form = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email:"",
    comments: "",
    available: false,
    employment: null,
    favColor: ''
  });

  const handleChange = (e) => {
/*     setFormData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    }) */
    const {name, value, type, checked} = e.target
    setFormData(prev => {
      return {
        ...prev,
        [name]: type==='checkbox' ? checked : value
      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
  };

  return(
    <form onSubmit={handleSubmit}>
      {/* TEXT INPUTS */}
      <input 
        type='text'
        placeholder='First Name'
        onChange={handleChange}
        name='firstName'
        value={formData.firstName}
      />
      <input 
        type='text'
        placeholder='Last Name'
        onChange={handleChange}
        name='lastName'
        value={formData.lastName}
      />
      <input 
        type='email'
        placeholder='Email'
        onChange={handleChange}
        name='email'
        value={formData.email}
      />

      <br/><br/><br/><br/>
      {/* TEXTAREA */}
      <textarea 
        placeholder='Comments'
        onChange={handleChange}
        name='comments'
        value={formData.comments}
      />

      <br/><br/><br/><br/>
      {/* CHECKBOX */}
      <input
        type='checkbox'
        onChange={handleChange}
        name='available'
        checked={formData.available}
        id='isAvailable'
      />
      <label htmlFor='isAvailable'>Available?</label>

      <br/><br/><br/><br/>
      {/* RADIO BUTTONS */}
      <section>
        <input 
          type='radio'
          onChange={handleChange}
          name='employment'
          value='unemployed'
          checked={formData.employment === 'unemployed'}
          id='unemployed'
        />
        <label htmlFor='unemployed'>Unemployed</label>
        <input 
          type='radio'
          onChange={handleChange}
          name='employment'
          value='part-time'
          checked={formData.employment === 'part-time'}
          id='part-time'
        />
        <label htmlFor='part-time'>Part-time</label>
        <input 
          type='radio'
          onChange={handleChange}
          name='employment'
          value='full-time'
          checked={formData.employment === 'full-time'}
          id='full-time'
        />
        <label htmlFor='full-time'>Full-time</label>
      </section>

      <br/><br/><br/><br/>
      {/* OPTION INPUT */}
      <label htmlFor='favColor'>Favorite Color?</label>
      <select id='favColor' value={formData.favColor} onChange={handleChange} name='favColor'>
        <option value=''>--Choose--</option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
      </select>

      {/* SUBMITTING */}
      <button>Submit</button>
    </form>
  )
};
export default Form;