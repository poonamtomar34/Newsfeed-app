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
  const onFormSubmit = (e) => {
    //e.preventDefault()
    alert(formState.firstName)
  }
  return (<>
  <form method="" onSubmit={onFormSubmit}>
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