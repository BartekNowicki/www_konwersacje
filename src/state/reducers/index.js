import { combineReducers } from 'redux';
import changeEmail from './emailChanger'
import changeMessage from './messageChanger'
import openMenu from './menuOpener'
import changeLocation from './locationChanger'
import changeIsFormSent from './formIsSentChanger'
import changeOrientation from './orientationChanger'




export default combineReducers({
  email: changeEmail,
  message: changeMessage,
  isMenuOpen: openMenu,
  location: changeLocation,
  isFormSent: changeIsFormSent,
  isPortrait: changeOrientation
});


