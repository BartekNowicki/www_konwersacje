const changeOrientation = (state = true, action) => {
  switch (action.type) {
    case 'NEW_ORIENTATION':
      return action.payload
    default: return state
  }
}

export default changeOrientation