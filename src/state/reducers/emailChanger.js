const changeEmail = (state = '', action) => {
  switch (action.type) {
    case 'NEW_EMAIL':
      return action.payload
    default: return state
  }
}

export default changeEmail