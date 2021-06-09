const changeIsFormSent = (state = false, action) => {
  switch (action.type) {
    case 'NEW_STATUS':
      return action.payload
    default: return state
  }
}

export default changeIsFormSent