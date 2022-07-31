import React, { useReducer,useMemo } from 'react';
import { countryList } from './CountryList';
import FormReducer from './FormReducer'

const initalFormState={
  firstName:" ",
  lastName:" ",
  comment:" ",
  email:" ",
  country:[],
  phoneNo:" "
}
const Form = () => {
  const [formState, dispatch]= useReducer(FormReducer, initalFormState)
  //console.log(countryList)
  const handleOnChange=(e)=>{
    dispatch({
      type: "Handle text input",
      field: e.target.name,
      payload: e.target.value,
    })
  }
  // https://dev.to/email2vimalraj/usereducer-hooks-demo-with-nested-select-boxes-3ad1
  const onFormSubmit=(e)=> {
    e.preventDefault();
     // Once the form has been submitted, this function will post to the backend
    const postURL = "http://localhost:5500/api/v1/feedback" //Our previously set up route in the backend
    fetch(postURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ // We should keep the fields consistent for managing this data later
            //const {firstName,lastName,comment,email,country,phoneNo}=formState
            firstName:formState.firstName,
            lastName:formState.lastName,
            comment:formState.comment, 
            email:formState.email,
            country:formState.country,
            phoneNo:formState.phoneNo
          })
    })
    .then(()=>{
        // Once posted, the user will be notified 
        alert(formState.country);
    })
}
  return (<>
  <form onSubmit={onFormSubmit} className="feedback-form">
  <h3>Thank you so much for taking your time!!</h3>
  <h5>Please provide below details..</h5>
  <br />
    <div className='feedback-input'>
    <label> 
      <p>First Name</p>
      <input type="text" name="firstName" value={formState.firstName} onChange={(e)=>handleOnChange(e)} required/>
    </label>
    </div>
    <div className='feedback-input'>
    <label> 
      <p>Last Name</p>
      <input type="text" name="lastName" value={formState.lastName} onChange={(e)=>handleOnChange(e)} required/>
    </label>
    </div>
    <div className='feedback-input'>
    <label> 
      <p>Feedback</p>
      <textarea type="text" name="comment" value={formState.comment} onChange={(e)=>handleOnChange(e)} required>Some text...</textarea>
    </label>
    </div>
    <div className='feedback-input'>
    <label> 
      <p>E-mail</p>
      <input type="text" name="email" value={formState.email} onChange={(e)=>handleOnChange(e)} required/>
    </label>
    </div>
    <div className='feedback-input'>
    <label> 
      <p>Country</p>
      <select onChange={(e)=>handleOnChange(e)} name="country">
        {
          countryList.map((option,idx)=>{
            const {name}=option
            return <option key={idx}>{name}</option>
          })
        }
      </select>
      </label>
    </div>
    <div className='feedback-input'>
    <label>
      <p>Phone number</p> 
      <input type="te" name="phoneNo" value={formState.phoneNo} onChange={(e)=>handleOnChange(e)}  required/>
      <input type="te" name="phoneNo" value={formState.phoneNo} onChange={(e)=>handleOnChange(e)} required/>
    
    </label>
    </div>
    <div className='feedback-input'>
    <button type='submit' id="fdbck-btn" className=' feedback-btn'>
      submit feedback
    </button>
    </div>
  </form>
  </>
  )
}

export default Form