import React, { useReducer } from 'react'
import FormReducer from './FormReducer'


const initalFormState={
  firstName:" ",
  lastName:" ",
  comment:" ",
  email:" ",
  country:" ",
  phoneNo:" "
}
const Form = () => {
  const [formState, dispatch]= useReducer(FormReducer, initalFormState)
  const handleOnChange=(e)=>{
    dispatch({
      type: "Handle text input",
      field: e.target.name,
      payload: e.target.value,
    })
  }
  const onFormSubmit=()=> { // Once the form has been submitted, this function will post to the backend
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
        alert('You have been added to the system!');
    })
}
  return (<>
  <form onSubmit={onFormSubmit}>
  <h3>Thank you so much for taking your time!!</h3>
  <p>Please provide below details..</p>
    <label> 
      <p>First Name</p>
      <input type="text" name="firstName" value={formState.firstName} onChange={(e)=>handleOnChange(e)}/>
    </label>
    <label> 
      <p>Last Name</p>
      <input type="text" name="lastName" value={formState.lastName} onChange={(e)=>handleOnChange(e)}/>
    </label>
    <label> 
      <p>Feedback</p>
      <input type="text" name="comment" value={formState.comment} onChange={(e)=>handleOnChange(e)}/>
    </label>
    <label> 
      <p>E-mail</p>
      <input type="text" name="email" value={formState.email} onChange={(e)=>handleOnChange(e)}/>
    </label>
    <label> 
      <p>Country</p>
      <input type="text" name="country" value={formState.country} onChange={(e)=>handleOnChange(e)}/>
    </label>
    <label>
      <p>Phone number</p> 
      <input type="text" name="phoneNo" value={formState.phoneNo} onChange={(e)=>handleOnChange(e)}/>
    </label>

    <button type='submit'>
      submit
    </button>
  </form>
  </>
  )
}

export default Form