const changeLocation = (state = 'top', action) => {
  switch (action.type) {
    case 'NEW_LOCATION':
      return action.payload
    default: return state
  }
}

export default changeLocation