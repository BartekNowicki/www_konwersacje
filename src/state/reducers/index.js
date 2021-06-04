import { combineReducers } from 'redux';
import changeEmail from './emailChanger'
import changeMessage from './messageChanger'

export default combineReducers({
  email: changeEmail,
  message: changeMessage});

