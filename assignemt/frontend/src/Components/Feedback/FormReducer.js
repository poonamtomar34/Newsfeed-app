
const FormReducer = (state,action) => {
  switch(action.type){
    case "Handle text input":
    return {
      ...state,
      [action.field]:action.payload
    }
    default:
      return state
  }
}

export default FormReducer