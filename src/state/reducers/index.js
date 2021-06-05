import { combineReducers } from 'redux';
import changeEmail from './emailChanger'
import changeMessage from './messageChanger'
import openMenu from './menuOpener'
import changeLocation from './locationChanger'



export default combineReducers({
  email: changeEmail,
  message: changeMessage,
  isMenuOpen: openMenu,
  location: changeLocation,
});

