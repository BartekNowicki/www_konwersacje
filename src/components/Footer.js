import * as React from "react"
import * as scssVariables from '../scssVariablesForJs.module.scss'


const Footer = () => (
  <footer style={{
      backgroundColor: 'black',    
      //border: '1px solid gray',
      padding: '2vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      }}>

      <p style={{
      color: 'gray',
      fontSize: '2vmin',
      padding: '1vmin',
      fontFamily: scssVariables.scssSecondaryFont,
      }}>© 2001 - {new Date().getFullYear()} Bardo Bartosz Nowicki Center For Conversational Language Development</p>

      <p style={{
      color: 'gray',
      fontSize: '2vmin',
      padding: '1vmin',
      fontFamily: scssVariables.scssSecondaryFont,
      }}>Image attributions: <a href="http://www.freepik.com">Designed by Freepik</a>&nbsp;and&nbsp;
      <a href='https://www.freepik.com/vectors/car'>Car vector created by upklyak - www.freepik.com</a>
      </p>


  </footer>
)

export default Footer
